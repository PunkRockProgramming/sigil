# Mystical Path Tools — Roadmap

**Last Updated:** February 27, 2026
**Status:** Sprint complete — Tech debt: Spell Builder outcome tracking, Dream Journal share, affirmation moon filter, 53 herbs.

---

## Completed Tools (21)

| # | Tool | File | Signature Feature |
|---|---|---|---|
| 1 | Sigil Generator | `html/sigil-maker.html` | 14 generation algorithms, canvas drawing |
| 2 | Lunar Tracker | `html/moon-tracker.html` | Real-time moon phase, 33 ritual guides, journal |
| 3 | Rune Caster | `html/rune-caster.html` | Elder Futhark 24 runes, 5 spreads (incl. World Tree), share reading, profile name |
| 4 | Sabbat Calendar | `html/sabbat-calendar.html` | All 8 sabbats, hemisphere support, live countdown |
| 5 | Crystal Database | `html/crystal-database.html` | 93 crystals, tradition filter, collection tracking, Crystal of the Day |
| 6 | Herbal Guide | `html/herbal-database.html` | 3-tier safety system, 53 herbs, tradition data, apothecary tracker |
| 7 | Meditation Timer | `html/meditation-timer.html` | Web Audio bells, SVG progress ring, interval alerts |
| 8 | Spell Builder | `html/spell-builder.html` | Multi-step grimoire, 10 intents, JSON export/import |
| 9 | Numerology | `html/numerology-calculator.html` | 4 core numbers, compatibility calculator, Personal Profile hub |
| 10 | Affirmations | `html/affirmation-generator.html` | 80 affirmations, 8 categories, moon phase filter, favorites |
| 11 | Pendulum Tool | `html/pendulum-tool.html` | Canvas spring physics, question history |
| 12 | Witchy Weather | `html/witchy-weather.html` | OpenWeatherMap API, 8 weather types, moon combos |
| 13 | Altar Setup | `html/altar-setup.html` | 16 tools, 8 layouts, compass diagram, seasonal guide |
| 14 | Candle Magic | `html/candle-magic.html` | 15 colors, 12 spell templates, dual-tab layout |
| 15 | Angel Numbers | `html/angel-numbers.html` | 20 sequences, master/triple/quad/special categories |
| 16 | Retrograde Tracker | `html/retrograde-tracker.html` | 5 planets, live status, avoid/embrace guidance, 2025-2026 periods |
| 17 | Correspondence Lookup | `html/correspondence-lookup.html` | 154 items, cross-tool keyword search, element/planet filters |
| 18 | Daily Practice | `html/daily-dashboard.html` | Moon phase, sabbat countdown, Crystal/Rune of Day, affirmation |
| 19 | Ogham Oracle | `html/ogham-oracle.html` | 20 Celtic fews, 3 spread types, Few of the Day, reading journal |
| 20 | Deity Database | `html/deity-database.html` | 34 deities, 4 pantheons, Deity of the Day, Patron/Matron tracking |
| 21 | Dream Journal | `html/dream-journal.html` | Pattern recognition, moon phase on entries, emotion/tag toggles, share via URL, JSON export |

---

## Priority Matrix

### High Value / Low Effort — Do First
- [done] **Angel Numbers Guide** (~4h) — 111, 222, 333 etc. High search traffic. Reference pattern.
- [done] **SVG export for Sigil Generator** (~2h) — Scalable output alongside existing PNG.
- [done] **Retrograde Tracker** (~5h) — Mercury/Venus/Mars/Jupiter dates + what to do. Static data + date math.

### High Value / Medium Effort — Next 2–3 Sprints
- [done] **Dream Journal** (~8h) — Calendar entries, tagging, pattern recognition. localStorage.
- [ ] **Planetary Hours Calculator** (~8h) — Real-time by geolocation. Reuses Moon Tracker calc pattern.
- [ ] **Chakra Healing Guide** (~8–10h) — Interactive map + assessment + recommendations. Bridges Crystal + Herbal.
- [ ] **Deity Database** (~10h) — Greek/Norse/Egyptian/Celtic/Hindu. Filterable by intention, tradition.
- [done] **Ogham Oracle** (~8h) — Celtic tree alphabet, 20 fews. Divination similar to Rune Caster.
- [done] **Correspondence Lookup** (~6–8h) — Enter any keyword → matching crystals, herbs, runes, candles across all databases.
- [ ] **Sacred Geometry Generator** (~8h) — Canvas. Flower of Life, Metatron's Cube, Sri Yantra.

### High Value / High Effort — Plan Carefully
- [ ] **Tarot Spread Generator** (~16–20h, two sprints) — 78-card database, spread engine, reversed meanings.
- [ ] **I Ching Oracle** (~12–16h) — 64 hexagrams, changing lines.
- [done] **Daily Practice Dashboard** (~15h) — Unified today view: moon + sabbat + rune/crystal + affirmation.
- [ ] **Elemental Profile Quiz** (~12h) — Multi-question → dominant element → tool recommendations.
- [ ] **Personal Profile** (~12–15h) — localStorage birth date/name, persistent personalization across tools.

### Low Value / Deprioritize
- JSDoc comments (zero user value)
- Performance audit (no visible user benefit)
- Lenormand cards, Tea Leaf / Tasseography (very niche)

---

## Cross-Tool Platform Features

- [done] **Correspondence Lookup** — Keyword → all matching items across every database
- [done] **Daily Practice Dashboard** — Unified "home base" daily view (moon, sabbat, rune/crystal of day, affirmation)
- [done] **Universal Search** — Homepage search spanning all tool databases
- [done] **Share via URL** — Rune Caster, Ogham Oracle, Spell Builder, Dream Journal. Base64 URL encoding + modal. Read-only spell view with Add to Grimoire.
- [done] **Personal Profile** — Name + birthdate + tradition stored in localStorage via profile-manager.js. Set from Numerology, shown in Rune/Ogham subtitles, auto-selects tradition filters.
- [done] **Tradition Selector** — 8 traditions + Universal. traditions[] field added to all 154 correspondence items, 93 crystals, 22 herbs, 15 candles. Dropdown filters in Crystal DB + Correspondence Lookup. Profile auto-selects.

---

## Technical Debt (Open Items)

### All Tools
- [done] Share via URL — Rune, Ogham, Spell Builder. share-utils.js with encode/decode/modal.
- [done] Service worker update notifications — postMessage on activate + controllerchange banner in theme-manager.js

### Per-Tool Improvements

**Sigil Generator**
- [done] SVG export option (~2h)
- [ ] 5 more generation algorithms (~4h)
- [done] Charge/activate instructions after creation (~1h)

**Moon Tracker**
- [ ] Void of Course moon tracking (~3h)
- [ ] Export calendar to .ics format (~3h)
- [ ] Lunar eclipse calculations (~4h)

**Rune Caster**
- [done] Additional spreads: Runic Cross (done earlier), World Tree 9-rune Yggdrasil spread
- [ ] Rune study/flashcard mode (~4h)

**Crystal Database**
- [done] More filter options: element, color, planetary (~2h)
- [ ] Crystal compatibility checker (~4h)
- [ ] Crystal grid templates (~6h)

**Herbal Database**
- [done] Expand to 50+ herbs (~4h) — 53 herbs across 3 safety tiers
- [ ] Seasonal harvest calendar (~4h)
- [ ] Integration with Spell Builder: suggest herbs by intention (~3h)

**Spell Builder**
- [done] Grimoire statistics dashboard (~3h) — 4 panels: overview, by intent, moon phase, top ingredients
- [done] Success/failure outcome tracking (~2h) — inline results editor on cast spells, "📝 Record Results" button
- [done] Share spell via URL — share-utils.js + ?spell= param + read-only modal with Add to Grimoire

**Meditation Timer**
- [ ] Guided meditation scripts synced to timer (~4h)
- [ ] Chakra meditation sequence presets (~3h)

**Affirmation Generator**
- [ ] Custom user-written affirmations (~3h)
- [done] Moon phase affirmation sets (~2h) — moonPhases[] on all 80 affirmations, filter dropdown auto-set to current phase

**Numerology**
- [ ] Personal year/month/day forecasting (~4h)
- [ ] Name change analysis (~2h)

**Sabbat Calendar**
- [ ] Personal sabbat planner: save traditions/rituals per sabbat (~3h)
- [done] Countdown to next 3 sabbats (not just nearest) (~2h)

**Candle Magic**
- [done] Expand spell templates to 20+ (~2h)
- [ ] Ritual timer integration with Meditation Timer (~2h)

---

## Design Principles

1. **Empower, don't replace** — tools support intuition, not automate it
2. **Offline first** — no external dependencies, works via `file://`
3. **Educational** — each tool teaches about the practice
4. **Beautiful** — mystical aesthetics with modern UX
5. **Accessible** — responsive, ARIA-labeled, keyboard navigable
6. **Safety first** — prominent warnings for herbs, fire, and any dangerous content
