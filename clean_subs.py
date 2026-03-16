#!/usr/bin/env python3
"""
Clean YouTube auto-generated VTT subtitle files.

YouTube auto-subs have a specific pattern:
- Each cue block has 2 lines: line 1 is repeated from previous cue, line 2 is new content
- There are also "flash" cues (near-zero duration) that just show the accumulated text
- This creates massive duplication if you naively concatenate everything

Strategy:
- Only extract the NEW text from each cue (the second line)
- Handle edge cases where cues have only one line
- Remove VTT formatting tags
- Insert timestamp markers every ~30 seconds
- Post-process to remove speech disfluencies (stuttering, fillers, repeated words)
"""

import os
import re
import glob
import sys


def parse_timestamp(ts_str):
    """Parse VTT timestamp (HH:MM:SS.mmm) to total seconds."""
    parts = ts_str.strip().split(':')
    if len(parts) == 3:
        h, m, s = parts
        return int(h) * 3600 + int(m) * 60 + float(s)
    elif len(parts) == 2:
        m, s = parts
        return int(m) * 60 + float(s)
    return 0.0


def format_timestamp(seconds):
    """Format seconds as H:MM:SS."""
    h = int(seconds // 3600)
    m = int((seconds % 3600) // 60)
    s = int(seconds % 60)
    if h > 0:
        return f"{h}:{m:02d}:{s:02d}"
    else:
        return f"{m}:{s:02d}"


def clean_tag(text):
    """Remove HTML/VTT tags like <c>, </c>, <00:00:01.440>, etc."""
    return re.sub(r'<[^>]+>', '', text).strip()


def clean_vtt(vtt_path):
    """
    Parse a VTT file using the YouTube auto-sub pattern:
    each cue has 2 lines - line 1 repeats previous content, line 2 is new.
    We only keep line 2 (new content) from each cue.
    """
    with open(vtt_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    
    # Parse all cue blocks: (start_time, end_time, text_lines)
    cues = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # Match timestamp lines
        ts_match = re.match(
            r'(\d{2}:\d{2}:\d{2}\.\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}\.\d{3})',
            line
        )
        
        if ts_match:
            start = parse_timestamp(ts_match.group(1))
            end = parse_timestamp(ts_match.group(2))
            i += 1
            text_lines = []
            while i < len(lines):
                tl = lines[i].strip()
                if tl == '' or re.match(r'\d{2}:\d{2}:\d{2}\.\d{3}\s*-->', tl):
                    break
                cleaned = clean_tag(tl)
                if cleaned:
                    text_lines.append(cleaned)
                i += 1
            
            if text_lines:
                duration = end - start
                cues.append((start, end, duration, text_lines))
        else:
            i += 1

    if not cues:
        return ""

    # YouTube auto-subs pattern:
    # - "Flash" cues (duration < 0.1s) just show accumulated text, skip them
    # - Regular cues: line 1 = repeat from previous, line 2 = new content
    # - Some cues have only 1 line (new content only)
    
    extracted_words = []
    timestamps = []
    last_ts_marker = -30
    prev_line1 = ""
    
    for start, end, duration, text_lines in cues:
        # Skip flash cues (near-zero duration, just echoing previous text)
        if duration < 0.05:
            continue
        
        # Determine which lines are new content
        if len(text_lines) >= 2:
            # Standard pattern: line 1 = old, line 2 = new
            new_text = text_lines[1]
        elif len(text_lines) == 1:
            # Single line - check if it's a repeat of last line 1
            if text_lines[0].lower() == prev_line1.lower():
                continue
            new_text = text_lines[0]
        else:
            continue
        
        # Update prev_line1 for next iteration's dedup
        if len(text_lines) >= 1:
            prev_line1 = text_lines[0] if len(text_lines) >= 2 else text_lines[0]
        
        # Add timestamp marker every ~30 seconds
        if start - last_ts_marker >= 30:
            timestamps.append((len(extracted_words), format_timestamp(start)))
            last_ts_marker = start
        
        words = new_text.split()
        extracted_words.extend(words)

    # Post-process: Remove speech disfluencies
    extracted_words = remove_disfluencies(extracted_words)

    # Build final text with timestamp markers
    result_parts = []
    ts_idx = 0
    
    for word_i, word in enumerate(extracted_words):
        if ts_idx < len(timestamps) and timestamps[ts_idx][0] <= word_i:
            result_parts.append(f"\n\n[{timestamps[ts_idx][1]}]\n")
            ts_idx += 1
        result_parts.append(word)
    
    text = ' '.join(result_parts)
    text = re.sub(r'\s*\n\n\[', '\n\n[', text)
    text = re.sub(r'\]\n\s*', ']\n', text)
    
    return text.strip()


def remove_disfluencies(words):
    """
    Remove speech disfluencies from word list:
    - Consecutive duplicate words ("okay okay okay" -> "okay")
    - Repeated phrases ("Hunter gather Society Hunter gather Society" -> one copy)
    - Filler words (um, uh)
    - Stammering
    """
    if not words:
        return words
    
    # Pass 1: Remove repeated multi-word phrases (longest first)
    cleaned = []
    i = 0
    while i < len(words):
        found_repeat = False
        # Try phrase lengths from 8 down to 3
        for plen in range(min(8, (len(words) - i) // 2), 2, -1):
            phrase = [w.lower() for w in words[i:i+plen]]
            next_phrase = [w.lower() for w in words[i+plen:i+plen*2]]
            if len(next_phrase) == plen and phrase == next_phrase:
                # Keep first copy, skip repeats
                cleaned.extend(words[i:i+plen])
                skip = plen * 2
                # Handle triple+ repeats
                while skip + plen <= len(words) - i:
                    check = [w.lower() for w in words[i+skip:i+skip+plen]]
                    if check == phrase:
                        skip += plen
                    else:
                        break
                i += skip
                found_repeat = True
                break
        if not found_repeat:
            cleaned.append(words[i])
            i += 1
    words = cleaned
    
    # Pass 2: Remove consecutive duplicate words
    cleaned = []
    for w in words:
        if cleaned and w.lower() == cleaned[-1].lower():
            continue
        cleaned.append(w)
    words = cleaned
    
    # Pass 3: Remove filler words (standalone "um" and "uh")
    words = [w for w in words if w.lower() not in ('um', 'uh')]
    
    return words


def main():
    subs_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'subs')
    out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'transcripts')
    
    os.makedirs(out_dir, exist_ok=True)
    
    vtt_files = sorted(glob.glob(os.path.join(subs_dir, '*.vtt')))
    
    if not vtt_files:
        print(f"No .vtt files found in {subs_dir}")
        print("Run yt-dlp first to download subtitles.")
        sys.exit(1)
    
    print(f"Found {len(vtt_files)} subtitle files")
    print(f"Output directory: {out_dir}")
    print("-" * 60)
    
    total_words = 0
    
    for vtt_file in vtt_files:
        basename = os.path.basename(vtt_file)
        # Remove .en.vtt extension to get clean name
        name = re.sub(r'\.en\.vtt$', '', basename, flags=re.IGNORECASE)
        
        try:
            cleaned = clean_vtt(vtt_file)
            word_count = len(cleaned.split())
            total_words += word_count
            
            out_path = os.path.join(out_dir, f"{name}.txt")
            with open(out_path, 'w', encoding='utf-8') as f:
                f.write(f"# {name}\n\n")
                f.write(cleaned)
                f.write('\n')
            
            print(f"✓ {name[:60]:<60} ({word_count:,} words)")
        except Exception as e:
            print(f"✗ {name[:60]:<60} ERROR: {e}")
    
    print("-" * 60)
    print(f"Total: {len(vtt_files)} files, {total_words:,} words")
    print(f"Estimated text size: {total_words * 5 / 1024 / 1024:.1f} MB")


if __name__ == '__main__':
    main()
