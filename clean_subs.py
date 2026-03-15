#!/usr/bin/env python3
"""
Clean YouTube auto-generated VTT subtitle files.

YouTube auto-subs have overlapping text segments that repeat content.
This script deduplicates them and produces clean transcript text files
with timestamp markers every ~30 seconds.
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


def clean_vtt(vtt_path):
    """
    Parse a VTT file and extract deduplicated text with timestamps.
    
    YouTube auto-subs work like this:
    - Each cue block has a timestamp range and 1-2 lines of text
    - The second line of one block often becomes the first line of the next
    - This creates overlapping/repeated text
    
    Strategy: Track seen text segments and skip duplicates.
    Insert timestamp markers every ~30 seconds.
    """
    with open(vtt_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    
    segments = []  # List of (start_time, text)
    current_time = None
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # Match timestamp lines like "00:00:01.440 --> 00:00:04.720"
        ts_match = re.match(
            r'(\d{2}:\d{2}:\d{2}\.\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}\.\d{3})',
            line
        )
        
        if ts_match:
            current_time = parse_timestamp(ts_match.group(1))
            # Collect text lines until blank line or next timestamp
            i += 1
            text_lines = []
            while i < len(lines):
                tl = lines[i].strip()
                if tl == '' or re.match(r'\d{2}:\d{2}:\d{2}\.\d{3}\s*-->', tl):
                    break
                # Remove HTML/VTT tags like <c>, </c>, <00:00:01.440>, etc.
                clean = re.sub(r'<[^>]+>', '', tl).strip()
                if clean:
                    text_lines.append(clean)
                i += 1
            
            if text_lines and current_time is not None:
                full_text = ' '.join(text_lines)
                segments.append((current_time, full_text))
        else:
            i += 1

    if not segments:
        return ""

    # Deduplicate: YouTube auto-subs repeat text across overlapping cue blocks
    # Use a sliding window approach to detect and remove repeated phrases
    seen_phrases = set()
    deduped_words = []
    timestamps = []  # (word_index, timestamp_str)
    
    last_ts_marker = -30  # Track when we last inserted a timestamp
    
    for start_time, text in segments:
        # Split into words for fine-grained dedup
        words = text.split()
        
        # Create n-gram phrases to detect repetition
        # Use a window of ~6-8 words to detect repeated segments
        phrase_len = min(6, len(words))
        
        if phrase_len >= 3:
            phrase_key = ' '.join(words[:phrase_len]).lower()
            if phrase_key in seen_phrases:
                # This segment is likely a repeat, skip it
                continue
            seen_phrases.add(phrase_key)
            
            # Also add sub-phrases for better detection
            if len(words) > 3:
                for j in range(0, len(words) - 2, 3):
                    sub_phrase = ' '.join(words[j:j+3]).lower()
                    seen_phrases.add(sub_phrase)
        
        # Add timestamp marker every ~30 seconds
        if start_time - last_ts_marker >= 30:
            timestamps.append((len(deduped_words), format_timestamp(start_time)))
            last_ts_marker = start_time
        
        deduped_words.extend(words)

    # Build final text with timestamp markers
    result_parts = []
    ts_idx = 0
    
    for word_i, word in enumerate(deduped_words):
        # Insert timestamp marker before this word if applicable
        if ts_idx < len(timestamps) and timestamps[ts_idx][0] == word_i:
            result_parts.append(f"\n\n[{timestamps[ts_idx][1]}]\n")
            ts_idx += 1
        result_parts.append(word)
    
    text = ' '.join(result_parts)
    # Clean up spacing around timestamp markers
    text = re.sub(r'\s*\n\n\[', '\n\n[', text)
    text = re.sub(r'\]\n\s*', ']\n', text)
    
    return text.strip()


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
