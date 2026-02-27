# Mystical Path Tools — Roadmap

**Last Updated:** February 27, 2026
**Status:** Active sprint — see `SPRINT.md`.

---

## Completed Tools (14)

| # | Tool | File | Signature Feature |
|---|---|---|---|
| 1 | Sigil Generator | `html/sigil-maker.html` | 14 generation algorithms, canvas drawing |
| 2 | Lunar Tracker | `html/moon-tracker.html` | Real-time moon phase, 33 ritual guides, journal |
| 3 | Rune Caster | `html/rune-caster.html` | Elder Futhark 24 runes, 4 spreads, reading journal |
| 4 | Sabbat Calendar | `html/sabbat-calendar.html` | All 8 sabbats, hemisphere support, live countdown |
| 5 | Crystal Database | `html/crystal-database.html` | 93 crystals, collection tracking, Crystal of the Day |
| 6 | Herbal Guide | `html/herbal-database.html` | 3-tier safety system, 22 herbs, apothecary tracker |
| 7 | Meditation Timer | `html/meditation-timer.html` | Web Audio bells, SVG progress ring, interval alerts |
| 8 | Spell Builder | `html/spell-builder.html` | Multi-step grimoire, 10 intents, JSON export/import |
| 9 | Numerology | `html/numerology-calculator.html` | 4 core numbers, compatibility calculator |
| 10 | Affirmations | `html/affirmation-generator.html` | 80 affirmations, 8 categories, favorites |
| 11 | Pendulum Tool | `html/pendulum-tool.html` | Canvas spring physics, question history |
| 12 | Witchy Weather | `html/witchy-weather.html` | OpenWeatherMap API, 8 weather types, moon combos |
| 13 | Altar Setup | `html/altar-setup.html` | 16 tools, 8 layouts, compass diagram, seasonal guide |
| 14 | Candle Magic | `html/candle-magic.html` | 15 colors, 12 spell templates, dual-tab layout |
| 15 | Angel Numbers | `html/angel-numbers.html` | 20 sequences, master/triple/quad/special categories |

---

## Priority Matrix

### High Value / Low Effort — Do First
- [done] **Angel Numbers Guide** (~4h) — 111, 222, 333 etc. High search traffic. Reference pattern.
- [in-progress] **SVG export for Sigil Generator** (~2h) — Scalable output alongside existing PNG.
- [in-progress] **Retrograde Tracker** (~5h) — Mercury/Venus/Mars/Jupiter dates + what to do. Static data + date math.

### High Value / Medium Effort — Next 2–3 Sprints
- [ ] **Dream Journal** (~8h) — Calendar entries, tagging, pattern recognition. localStorage.
- [ ] **Planetary Hours Calculator** (~8h) — Real-time by geolocation. Reuses Moon Tracker calc pattern.
- [ ] **Chakra Healing Guide** (~8–10h) — Interactive map + assessment + recommendations. Bridges Crystal + Herbal.
- [ ] **Deity Database** (~10h) — Greek/Norse/Egyptian/Celtic/Hindu. Filterable by intention, tradition.
- [ ] **Ogham Oracle** (~8h) — Celtic tree alphabet, 20 fews. Divination similar to Rune Caster.
- [ ] **Correspondence Lookup** (~6–8h) — Enter any keyword → matching crystals, herbs, runes, candles across all databases.
- [ ] **Sacred Geometry Generator** (~8h) — Canvas. Flower of Life, Metatron's Cube, Sri Yantra.

### High Value / High Effort — Plan Carefully
- [ ] **Tarot Spread Generator** (~16–20h, two sprints) — 78-card database, spread engine, reversed meanings.
- [ ] **I Ching Oracle** (~12–16h) — 64 hexagrams, changing lines.
- [ ] **Daily Practice Dashboard** (~15h) — Unified today view: moon + sabbat + rune/crystal + affirmation.
- [ ] **Elemental Profile Quiz** (~12h) — Multi-question → dominant element → tool recommendations.
- [ ] **Personal Profile** (~12–15h) — localStorage birth date/name, persistent personalization across tools.

### Low Value / Deprioritize
- JSDoc comments (zero user value)
- Performance audit (no visible user benefit)
- Lenormand cards, Tea Leaf / Tasseography (very niche)

---

## Cross-Tool Platform Features

- [ ] **Daily Practice Dashboard** — Unified "home base" daily view (moon, sabbat, rune/crystal of day, affirmation)
- [ ] **Correspondence Lookup** — Keyword → all matching items across every database
- [ ] **Universal Search** — Homepage search spanning all tool databases
- [ ] **Share via URL** (~5h) — Encode tool state in query params. Shareable readings.
- [ ] **Personal Profile** (~12–15h) — Birth date + name stored locally, auto-populates Numerology, informs Chakra Guide
- [ ] **Tradition Selector** (~6–8h) — Filter content by practice tradition (Wicca, Druidry, Ceremonial, etc.)

---

## Technical Debt (Open Items)

### All Tools
- [ ] Share via URL — encode state in query params
- [ ] Service worker update notifications — prompt when new version available (~2h)

### Per-Tool Improvements

**Sigil Generator**
- [in-progress] SVG export option (~2h)
- [ ] 5 more generation algorithms (~4h)
- [in-progress] Charge/activate instructions after creation (~1h)

**Moon Tracker**
- [ ] Void of Course moon tracking (~3h)
- [ ] Export calendar to .ics format (~3h)
- [ ] Lunar eclipse calculations (~4h)

**Rune Caster**
- [ ] Additional spreads: Runic Cross, 9-rune World Tree (~3h)
- [ ] Rune study/flashcard mode (~4h)

**Crystal Database**
- [ ] More filter options: element, color, planetary (~2h)
- [ ] Crystal compatibility checker (~4h)
- [ ] Crystal grid templates (~6h)

**Herbal Database**
- [ ] Expand to 50+ herbs (~4h)
- [ ] Seasonal harvest calendar (~4h)
- [ ] Integration with Spell Builder: suggest herbs by intention (~3h)

**Spell Builder**
- [ ] Grimoire statistics dashboard (~3h)
- [ ] Success/failure outcome tracking (~2h)
- [ ] Share spell via URL (~3h)

**Meditation Timer**
- [ ] Guided meditation scripts synced to timer (~4h)
- [ ] Chakra meditation sequence presets (~3h)

**Affirmation Generator**
- [ ] Custom user-written affirmations (~3h)
- [ ] Moon phase affirmation sets (~2h)

**Numerology**
- [ ] Personal year/month/day forecasting (~4h)
- [ ] Name change analysis (~2h)

**Sabbat Calendar**
- [ ] Personal sabbat planner: save traditions/rituals per sabbat (~3h)
- [in-progress] Countdown to next 3 sabbats (not just nearest) (~2h)

**Candle Magic**
- [ ] Expand spell templates to 20+ (~2h)
- [ ] Ritual timer integration with Meditation Timer (~2h)

---

## Design Principles

1. **Empower, don't replace** — tools support intuition, not automate it
2. **Offline first** — no external dependencies, works via `file://`
3. **Educational** — each tool teaches about the practice
4. **Beautiful** — mystical aesthetics with modern UX
5. **Accessible** — responsive, ARIA-labeled, keyboard navigable
6. **Safety first** — prominent warnings for herbs, fire, and any dangerous content
