# ⏳ Professor Jiang's Predictive History — Prediction Tracker & Lecture Archive

An independent analysis of geopolitical predictions made by Professor Jiang Xueqin, extracted from his [Predictive History](https://www.youtube.com/@PredictiveHistory) YouTube channel and fact-checked against real-world events as of March 2026.

## 📊 Key Stats

| Metric | Value |
|--------|-------|
| Predictions Extracted | 33 |
| Accuracy (incl. partial) | 76% |
| Lectures Transcribed | 131 |
| Lecture Series | 6 |

## 🔍 What This Is

- **Prediction Tracker** — 33 unique predictions extracted, deduplicated, and fact-checked with verdicts: ✅ Correct, 🔶 Partial, ❌ Wrong, ⏳ Pending, 🔮 Unfalsifiable
- **Lecture Archive** — All 131 lectures converted into readable article pages from auto-generated subtitles
- **Searchable & Filterable** — Browse by series (Civilization, Secret History, Geo-Strategy, Game Theory, Great Books) or search by keyword

## 🎯 Prediction Categories

- **US Politics** — 2024 election, VP pick, coalition dynamics
- **US-Iran War** — Military conflict, Strait of Hormuz, GCC attacks
- **Russia & Putin** — Ukraine war, strategic goals, BRICS expansion
- **Israel & Middle East** — Greater Israel thesis, Shia mobilization
- **Global Economics** — Petrodollar, stock market, Bitcoin
- **China** — Taiwan, US-China relations

## 🛠️ How It Was Built

1. **Downloaded** subtitles for all 131 videos using `yt-dlp`
2. **Cleaned** VTT files into readable transcripts with `clean_subs.py`
3. **Extracted** predictions using AI analysis of 9 prediction-dense transcripts
4. **Deduplicated** across videos to find 33 unique predictions
5. **Fact-checked** each prediction against real-world events (March 2026)
6. **Published** as a static website with 131 individual article pages

## 📁 Project Structure

```
├── index.html              # Main page
├── style.css               # Dark theme styling
├── app.js                  # Data + interactivity
├── articles/               # 131 generated lecture articles
├── transcripts/            # Cleaned transcript .txt files
├── clean_subs.py           # VTT → clean text converter
└── generate_articles.py    # Transcript → HTML article generator
```

## 🚀 Usage

Just open `index.html` in any browser — no server required.

Or deploy to GitHub Pages, Netlify, or Vercel for public access.

## ⚠️ Disclaimer

This is an independent analysis project. Transcripts are auto-generated from YouTube subtitles and may contain inaccuracies. Predictions are evaluated to the best of our ability based on publicly available information as of March 2026.

---

**by [@ethtachi](https://x.com/ethtachi)** · Data from [@PredictiveHistory](https://www.youtube.com/@PredictiveHistory)
