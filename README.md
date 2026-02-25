# 🔮 Mystical Path Tools v1.0

**A comprehensive collection of 13 offline-first web tools for modern mystical practice.**

Transform your spiritual practice with professional-grade tools for sigil creation, lunar tracking, divination, herbal knowledge, meditation, spellwork, and altar design. All tools work completely offline, require zero installation, and respect your privacy with local-only data storage.

---

## ✨ Features

- 🌐 **Progressive Web App** — Install on any device, works 100% offline
- 🎨 **6 Mystical Themes** — Chaos Magick, Shadow Work, Golden Dawn, Green Witchcraft, Blood Moon, Lunar Tides
- 📱 **Mobile-First Design** — Fully responsive on all devices
- 🔒 **Privacy-First** — All data stays on your device, no tracking, no accounts
- 📄 **PDF Export** — Download readings, collections, and guides
- 🖨️ **Print-Friendly** — Professional formatting for physical copies
- ♿ **Accessible** — WCAG 2.1 compliant with keyboard navigation and screen reader support
- 🔗 **Global Navigation** — Theme-aware menu across all 13 tools

---

## 🛠️ The 13 Tools

| # | Tool | Description |
|---|------|-------------|
| 1 | **Sigil Generator** | 14 generation algorithms, freehand canvas drawing, PNG export |
| 2 | **Lunar Tracker** | 33 rituals across 8 moon phases, astronomical accuracy, monthly calendar |
| 3 | **Rune Caster** | Complete Elder Futhark, 4 spread types, bind rune creator |
| 4 | **Sabbat Calendar** | All 8 sabbats, hemisphere toggle, live countdown timer |
| 5 | **Crystal Database** | 25+ crystals, dual filtering, personal collection tracker |
| 6 | **Herbal Database** | 22 herbs, three-tier safety system, apothecary tracker |
| 7 | **Meditation Timer** | Web Audio bells, SVG progress ring, interval chimes |
| 8 | **Spell Builder** | Multi-step spell creation, personal grimoire, JSON export/import |
| 9 | **Numerology Calculator** | Life Path, Soul Urge, Destiny & Personality numbers |
| 10 | **Affirmation Generator** | 80 affirmations across 8 categories, favorites collection |
| 11 | **Pendulum Decision Tool** | Canvas physics simulation, question history |
| 12 | **Witchy Weather** | OpenWeatherMap integration, 8 weather correspondences, moon phase combos |
| 13 | **Altar Setup Guide** | Compass placement guide, 16 tools, 8 layout templates, seasonal guides |

---

## 🚀 Getting Started

No build process, no dependencies. Just open a file:

```bash
# Open the homepage
open index.html

# Or open a specific tool
open html/sigil-maker.html
```

For local development with live reload:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### PWA Installation

1. Start a local server (required for service worker)
2. Open in Chrome or Edge
3. Look for the install prompt or use **Menu → Install App**
4. The app installs to your home screen and works offline

---

## 🏗️ Architecture

Pure HTML5, CSS3, and vanilla JavaScript — zero dependencies, zero build steps.

```
index.html              # Homepage / tool selector
html/                   # 13 tool pages
css/
  shared-theme.css      # 6 themes as CSS custom properties
  expandable-card.css   # Shared card expand/collapse pattern
  nav-menu.css          # Global navigation menu styles
  print.css             # Print-friendly formatting
  homepage-styles.css
  [tool]-styles.css     # Per-tool styles (13 files)
js/
  theme-manager.js      # Centralized theme switching + localStorage
  nav-menu.js           # Global navigation menu
  filter-utils.js       # Shared search/filter utilities
  canvas-utils.js       # Canvas init, export, drawing events
  keyboard-nav.js       # Arrow key navigation for card grids
  pdf-utils.js          # PDF export via browser print dialog
  [tool]-script.js      # Per-tool logic (13 files)
manifest.json           # PWA manifest
sw.js                   # Service worker (cache-first strategy)
offline.html            # Offline fallback page
```

### Key Technical Patterns

- **Themes** — CSS custom properties (`[data-theme="..."]`), persisted via `localStorage`
- **Data** — All content inline in JS files (no external JSON), enables `file://` protocol
- **Filtering** — Shared `filter-utils.js` across Crystal, Herbal, Moon, and Spell Builder
- **Canvas** — Shared `canvas-utils.js` for Sigil Generator and Rune Caster
- **Audio** — Web Audio API procedural synthesis (no audio files needed)
- **PWA** — Cache-first service worker precaches all 13 tools for offline use

---

## 🎨 Themes

| Theme | Aesthetic |
|-------|-----------|
| `chaos-magick` | Deep purple, sigil energy (default) |
| `shadow-work` | Dark charcoal, introspective |
| `golden-dawn` | Rich gold, ceremonial |
| `green-witchcraft` | Forest greens, herbal |
| `blood-moon` | Crimson red, lunar power |
| `lunar-tides` | Ocean blues, flowing |

Theme selection persists across all tools via `localStorage`.

---

## 📋 Development

See [`CLAUDE.md`](CLAUDE.md) for full practitioner guidance including:
- Architecture patterns and shared utilities
- How to add a new tool
- Pre-launch checklist
- Sprint workflow

See [`ROADMAP.md`](ROADMAP.md) for:
- Completed tool metrics
- v2 backlog (Tarot Generator, Planetary Hours, Dream Journal)
- Technical debt tracking

---

## 📄 License

MIT License — see [`LICENSE`](LICENSE) for details.

---

*"The best time to plant a tree was 20 years ago. The second best time is now."*
