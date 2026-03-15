#!/usr/bin/env python3
"""
Generate styled HTML article pages from cleaned transcript .txt files.
Each transcript becomes a standalone, beautifully formatted article page
that matches the main site's dark theme.
"""

import os
import re
import html
import json

TRANSCRIPTS_DIR = os.path.join(os.path.dirname(__file__), "transcripts")
ARTICLES_DIR = os.path.join(os.path.dirname(__file__), "articles")

# Series color mapping
SERIES_COLORS = {
    "Civilization": ("#06b6d4", "rgba(6, 182, 212, 0.1)"),
    "Secret History": ("#8b5cf6", "rgba(139, 92, 246, 0.1)"),
    "Geo-Strategy": ("#f43f5e", "rgba(244, 63, 94, 0.1)"),
    "Game Theory": ("#f59e0b", "rgba(245, 158, 11, 0.1)"),
    "Great Books": ("#10b981", "rgba(16, 185, 129, 0.1)"),
}

def parse_filename(filename):
    """Extract series, number, and title from filename like 'Civilization #5：  Title.txt'"""
    name = filename.replace(".txt", "")
    
    # Try to match series patterns
    patterns = [
        r'^(Civilization|Secret History|Geo-Strategy|Game Theory|Great Books)\s*(#\w+|BONUS|END|Update\s*#?\d*)(?:[：:]\s*)(.*)',
        r'^(Geo-Strategy)\s*(Update(?:\s*#?\d*)?)[：:]\s*(.*)',
        r'^(.*)',  # fallback
    ]
    
    for pattern in patterns:
        m = re.match(pattern, name, re.IGNORECASE)
        if m and len(m.groups()) >= 3:
            series = m.group(1).strip()
            number = m.group(2).strip()
            title = m.group(3).strip()
            return series, number, title
    
    return "Other", "", name


def format_transcript(text):
    """Convert plain text transcript into nicely formatted HTML paragraphs."""
    text = html.escape(text)
    
    # Split into paragraphs by timestamp markers or double newlines
    # The cleaned transcripts have [MM:SS] markers
    parts = re.split(r'\n\s*\n', text)
    
    html_parts = []
    for part in parts:
        part = part.strip()
        if not part:
            continue
        
        # Check if this is a timestamp marker line
        timestamp_match = re.match(r'^\[(\d+:\d+(?::\d+)?)\](.*)$', part, re.DOTALL)
        if timestamp_match:
            ts = timestamp_match.group(1)
            content = timestamp_match.group(2).strip()
            if content:
                html_parts.append(f'<p><span class="timestamp">[{ts}]</span> {content}</p>')
            continue
        
        # Regular paragraph - split on single timestamp markers within text
        # Replace inline timestamps with styled spans
        formatted = re.sub(
            r'\[(\d+:\d+(?::\d+)?)\]',
            r'</p><p><span class="timestamp">[\1]</span> ',
            part
        )
        
        # Clean up empty paragraphs
        formatted = formatted.strip()
        if formatted.startswith('</p>'):
            formatted = formatted[4:]
        if not formatted.startswith('<p>'):
            formatted = '<p>' + formatted
        if not formatted.endswith('</p>'):
            formatted += '</p>'
        
        html_parts.append(formatted)
    
    return '\n'.join(html_parts)


def estimate_read_time(text):
    """Estimate reading time in minutes (average 200 words/min for dense content)."""
    words = len(text.split())
    minutes = max(1, round(words / 200))
    return minutes, words


def generate_article_html(series, number, title, transcript_html, read_time, word_count, filename):
    """Generate full HTML page for an article."""
    series_color, series_bg = SERIES_COLORS.get(series, ("#8b8b9e", "rgba(255,255,255,0.05)"))
    full_title = f"{series} {number}: {title}" if number else title
    safe_title = html.escape(full_title)
    safe_series = html.escape(series)
    safe_number = html.escape(number)
    safe_bare_title = html.escape(title)

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{safe_title} — Predictive History</title>
    <meta name="description" content="Transcript of Professor Jiang's lecture: {safe_title}">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after {{ margin: 0; padding: 0; box-sizing: border-box; }}
        
        :root {{
            --bg: #0a0a0f;
            --bg-card: rgba(255,255,255,0.03);
            --border: rgba(255,255,255,0.06);
            --text: #f0f0f5;
            --text-secondary: #8b8b9e;
            --text-muted: #55556a;
            --accent: {series_color};
            --accent-bg: {series_bg};
        }}

        html {{ scroll-behavior: smooth; }}
        
        body {{
            font-family: 'Lora', 'Georgia', serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.85;
            -webkit-font-smoothing: antialiased;
        }}

        /* Ambient background */
        .ambient {{
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
        }}
        .ambient .orb {{
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.1;
        }}
        .ambient .orb-1 {{
            width: 500px; height: 500px;
            background: var(--accent);
            top: -200px; left: -100px;
        }}
        .ambient .orb-2 {{
            width: 400px; height: 400px;
            background: #6366f1;
            bottom: -150px; right: -100px;
        }}

        /* Nav */
        .nav {{
            position: fixed; top: 0; left: 0; right: 0;
            z-index: 100;
            background: rgba(10, 10, 15, 0.9);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border);
            padding: 0 24px;
        }}
        .nav-inner {{
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 16px;
            height: 56px;
        }}
        .back-btn {{
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background: transparent;
            color: var(--text-secondary);
            font-size: 0.85rem;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
            text-decoration: none;
            transition: 0.2s;
        }}
        .back-btn:hover {{
            background: rgba(255,255,255,0.05);
            color: var(--text);
        }}
        .nav-title {{
            font-family: 'Inter', sans-serif;
            font-size: 0.85rem;
            color: var(--text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }}

        /* Article header */
        .article-header {{
            position: relative;
            z-index: 1;
            padding: 120px 24px 48px;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }}
        .series-badge {{
            display: inline-block;
            padding: 5px 14px;
            border-radius: 100px;
            font-family: 'Inter', sans-serif;
            font-size: 0.78rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--accent);
            background: var(--accent-bg);
            margin-bottom: 20px;
        }}
        .article-title {{
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.8rem, 5vw, 2.8rem);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 20px;
        }}
        .article-meta {{
            font-family: 'Inter', sans-serif;
            font-size: 0.85rem;
            color: var(--text-muted);
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }}
        .article-meta span {{
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }}
        .divider {{
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
            margin: 40px auto;
        }}

        /* Article body */
        .article-body {{
            position: relative;
            z-index: 1;
            max-width: 700px;
            margin: 0 auto;
            padding: 0 24px 80px;
        }}
        .article-body p {{
            margin-bottom: 1.3em;
            font-size: 1.05rem;
            color: rgba(240, 240, 245, 0.88);
        }}
        .timestamp {{
            font-family: 'Inter', monospace;
            font-size: 0.72rem;
            color: var(--accent);
            background: var(--accent-bg);
            padding: 2px 6px;
            border-radius: 4px;
            margin-right: 4px;
            vertical-align: middle;
            font-weight: 500;
        }}

        /* Progress bar */
        .progress-bar {{
            position: fixed;
            top: 56px;
            left: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--accent), #6366f1);
            z-index: 101;
            transition: width 0.1s linear;
        }}

        /* Footer */
        .footer {{
            position: relative;
            z-index: 1;
            text-align: center;
            padding: 32px 24px;
            border-top: 1px solid var(--border);
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
            color: var(--text-muted);
        }}
        .footer a {{
            color: var(--accent);
            text-decoration: none;
        }}

        /* Scrollbar */
        ::-webkit-scrollbar {{ width: 6px; }}
        ::-webkit-scrollbar-track {{ background: var(--bg); }}
        ::-webkit-scrollbar-thumb {{ background: rgba(255,255,255,0.08); border-radius: 3px; }}

        @media (max-width: 600px) {{
            .article-body p {{ font-size: 1rem; }}
            .article-meta {{ flex-direction: column; gap: 8px; }}
        }}
    </style>
</head>
<body>
    <div class="ambient">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
    </div>

    <div class="progress-bar" id="progress"></div>

    <nav class="nav">
        <div class="nav-inner">
            <a href="../index.html#teachings" class="back-btn">← Back</a>
            <span class="nav-title">{safe_series} {safe_number}</span>
        </div>
    </nav>

    <header class="article-header">
        <div class="series-badge">{safe_series} {safe_number}</div>
        <h1 class="article-title">{safe_bare_title}</h1>
        <div class="article-meta">
            <span>📖 {read_time} min read</span>
            <span>📝 {word_count:,} words</span>
            <span>🎓 Professor Jiang</span>
        </div>
    </header>

    <div class="divider"></div>

    <article class="article-body">
        {transcript_html}
    </article>

    <footer class="footer">
        <a href="../index.html#teachings">← Back to all lectures</a> &nbsp;·&nbsp;
        by <a href="https://x.com/ethtachi" target="_blank">@ethtachi</a> &nbsp;·&nbsp;
        <a href="https://www.youtube.com/@PredictiveHistory" target="_blank">@PredictiveHistory</a>
    </footer>

    <script>
        // Reading progress bar
        window.addEventListener('scroll', () => {{
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / docHeight) * 100;
            document.getElementById('progress').style.width = scrolled + '%';
        }});
    </script>
</body>
</html>'''


def slugify(text):
    """Convert text to URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def main():
    os.makedirs(ARTICLES_DIR, exist_ok=True)
    
    # Build mapping of filenames to generated articles
    article_map = {}
    txt_files = sorted(f for f in os.listdir(TRANSCRIPTS_DIR) if f.endswith('.txt'))
    
    print(f"Found {len(txt_files)} transcript files")
    
    for filename in txt_files:
        filepath = os.path.join(TRANSCRIPTS_DIR, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            raw_text = f.read()
        
        series, number, title = parse_filename(filename)
        read_time, word_count = estimate_read_time(raw_text)
        transcript_html = format_transcript(raw_text)
        
        # Generate slug for filename
        slug = slugify(f"{series}-{number}-{title}" if number else title)
        output_filename = f"{slug}.html"
        
        article_html = generate_article_html(
            series, number, title, transcript_html, 
            read_time, word_count, filename
        )
        
        output_path = os.path.join(ARTICLES_DIR, output_filename)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(article_html)
        
        article_map[filename] = {
            "slug": slug,
            "file": output_filename,
            "title": title,
            "series": series,
            "number": number,
            "readTime": read_time,
            "wordCount": word_count
        }
        
        print(f"  ✓ {output_filename} ({word_count:,} words, ~{read_time} min)")
    
    # Write manifest for JS to use
    manifest_path = os.path.join(os.path.dirname(__file__), "articles_manifest.json")
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(article_map, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Generated {len(article_map)} articles in {ARTICLES_DIR}/")
    print(f"📄 Manifest written to {manifest_path}")


if __name__ == "__main__":
    main()
