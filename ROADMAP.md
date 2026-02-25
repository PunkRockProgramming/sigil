# 🔮 Mystical Path Tools - Development Roadmap

**Last Updated:** February 27, 2026

---

## ✅ COMPLETED TOOLS (v1.0)

### [done] 1. Sigil Generator `html/sigil-maker.html`
**Launched:** Initial version  
**Features:**
- 14 unique generation algorithms (Goetic, Icelandic, Planetary, etc.)
- Traditional vowel removal & letter reduction
- Freehand canvas drawing (600x600px)
- Color picker and brush controls
- 4 rune simplification styles
- PNG download functionality
- 6 mystical themes

**Metrics:**
- ~3000 lines JavaScript
- ~400 lines CSS
- Full mobile responsive

---

### [done] 2. Lunar Tracker `html/moon-tracker.html`
**Launched:** Initial version  
**Features:**
- Real-time moon phase calculations (Julian Day algorithm)
- 33 detailed ritual guides across 8 phases
- Dual filtering (category: 8 types, difficulty: 3 levels)
- Interactive monthly calendar
- Phase energy correspondences
- Expandable ritual cards

**Metrics:**
- ~1100 lines JavaScript
- 33 rituals with full instructions
- Astronomical accuracy

---

### [done] 3. Rune Caster `html/rune-caster.html`
**Launched:** February 25, 2026  
**Features:**
- Complete Elder Futhark (24 runes)
- 4 spread types (1/3/5/6 rune layouts)
- Upright & reversed interpretations
- Detailed correspondences (deity, tarot, planet, element)
- Bind rune creator with canvas
- Quick reference guide by aett
- Noto Sans Runic font integration

**Metrics:**
- ~850 lines JavaScript
- 24 complete rune objects with upright/reversed meanings
- Grid-based responsive layouts

---

### [done] 4. Sabbat Calendar `html/sabbat-calendar.html`
**Launched:** February 25, 2026  
**Features:**
- All 8 sabbats (Samhain, Yule, Imbolc, Ostara, Beltane, Litha, Lughnasadh, Mabon)
- Northern & Southern hemisphere support (automatic date offsetting)
- Live countdown timer to next sabbat (days/hours/minutes/seconds)
- Comprehensive correspondences (deities, herbs, crystals, colors, elements)
- Traditional practices, foods, and altar decoration ideas
- Activities and ritual suggestions for each sabbat
- Expandable sabbat cards with full details
- Hemisphere toggle with instant switching

**Metrics:**
- ~750 lines JavaScript
- ~530 lines CSS
- ~103 lines HTML
- 16 complete sabbat objects (8 × 2 hemispheres)
- 11 data fields per sabbat
- Real-time countdown with setInterval

---

### [done] 5. Crystal Properties Database `html/crystal-database.html`
**Launched:** February 25, 2026  
**Features:**
- 25+ comprehensive crystal entries
- Dual-filter system (intention & chakra)
- Search functionality by crystal name
- Personal collection tracker (owned & wishlist)
- Detailed properties: metaphysical, physical healing, emotional healing
- Care tips with important warnings (water-safe, sunlight sensitivity)
- Cleansing & charging methods for each crystal
- Practical uses and affirmations
- Expandable detail cards
- Mohs hardness, zodiac, element correspondences
- localStorage persistence for collections

**Metrics:**
- ~650 lines JavaScript
- ~480 lines CSS
- ~115 lines HTML
- 25 complete crystal objects
- 15+ data fields per crystal (name, emoji, color, chakra, element, zodiac, mohs_hardness, intentions, properties, metaphysical, physical_healing, emotional_healing, cleansing, charging, uses, affirmation, care_tips)
- Collection management with heart (owned) & star (wishlist) icons

---

### [done] 6. Herbal Correspondences Guide `html/herbal-database.html`
**Launched:** February 25, 2026  
**Features:**
- 22 comprehensive herb entries with detailed correspondences
- THREE-TIER SAFETY SYSTEM (safe/caution/toxic)
- Prominent safety warnings at page level + per-herb level
- Dual-filter system (intention & element)
- Search functionality by name, latin name, and properties
- Personal apothecary tracker (owned & wishlist)
- Detailed information: magical uses, medicinal uses, growing tips, harvesting guides
- Storage guidelines, preparation methods, and substitutions
- Folklore, deity associations, and affirmations
- Safety badges with visual hierarchy (🔴 TOXIC, ⚠️ CAUTION, ✓ Safe)
- Professional medical disclaimer
- Expandable detail cards with safety-first design

**Metrics:**
- ~480 lines JavaScript (+ 22 × ~30 lines herb data = ~1140 total)
- ~600 lines CSS (safety-focused styling)
- ~114 lines HTML
- 22 complete herb objects
- 18 data fields per herb (name, latin, emoji, safety, safety_notes, intentions, element, planet, zodiac, deities, properties, magical_uses, medicinal_uses, preparation, growing, harvesting, storage, substitutions, folklore, affirmation)
- Uses shared filter-utils.js library
- Collection management with existing apothecary pattern

**Safety Features:**
- Three visual safety levels with color coding
- Prominent disclaimer section at top
- Per-herb safety notes with contraindications
- Medical disclaimer (not substitute for medical advice)
- Toxicity warnings (🔴 for dangerous herbs)
- Identification warnings (avoid toxic look-alikes)

---

### [done] 7. Meditation Timer `html/meditation-timer.html`
**Launched:** February 26, 2026  
**Features:**
- 7 preset durations (5, 10, 15, 20, 30, 45, 60 minutes)
- Custom duration input (1-180 minutes)
- Circular progress visualization with SVG
- Start/Pause/Reset controls
- Interval bells (every 5, 10, or 15 minutes)
- 3 bell sounds generated via Web Audio API (singing bowl, temple bell, wind chime) + silence option
- Auto-start setting (begin timer when preset selected)
- Settings persistence via localStorage
- Session complete notification with visual pulse animation
- Meditation tips section with 4 practice guides
- Default theme: Lunar Tides (calming blue)

**Metrics:**
- ~365 lines JavaScript (timer logic + Web Audio synthesis)
- ~580 lines CSS (minimalist calming design)
- ~145 lines HTML
- 7 preset objects with descriptions
- Uses shared theme system
- No external dependencies (pure Web Audio API)

---

### [done] 8. Spell Builder & Grimoire `html/spell-builder.html`
**Launched:** February 26, 2026  
**Features:**
- Multi-step spell creation form with 10 intent categories
- 8 moon phases + 8 sabbat timing options
- 20 herbs + 20 crystals with emoji icons (multi-select)
- 12 candle color correspondences
- Instructions, notes, and results fields
- Personal grimoire with localStorage persistence
- Edit/delete spells with confirmation
- "Cast Spell" tracking (lastCast date, castCount)
- Dual filtering (intent + moon phase) + search
- Export/Import grimoire as JSON backup
- Expandable spell cards with full ingredient lists
- Empty state messaging
- All 6 theme variants
- Mobile responsive layout

**Metrics:**
- 661 lines JavaScript (spell creation + grimoire management)
- 776 lines CSS (all 6 themes)
- 243 lines HTML
- 1,680 lines total
- 20 herb objects + 20 crystal objects with intentions
- Uses filter-utils.js, expandable-card.css, keyboard-nav.js, print.css
- Spell data structure: 12 fields (id, name, intent, moonPhase, sabbat, herbs, crystals, candleColor, otherTools, instructions, notes, results, dateCreated, lastCast, castCount)

**Impact:**
- Combines all existing databases (herbs, crystals, moon phases, sabbats)
- Personal grimoire provides long-term user value
- Establishes multi-step form pattern for future tools
- Reuses ~80% of established patterns

---

### [done] 9. Numerology Calculator `html/numerology-calculator.html`
**Launched:** February 26, 2026  
**Features:**
- Calculate 4 core numbers (Life Path, Soul Urge, Destiny, Personality)
- Input form with full name and birth date
- 12 complete number interpretations (1-9 + Master Numbers 11, 22, 33)
- Each interpretation includes: keywords, meaning, strengths, challenges, life purpose
- Result cards with large number display, emoji, and detailed meanings
- Master number recognition (doesn't reduce 11, 22, 33)
- About section explaining each number type
- All 6 mystical themes
- Mobile responsive layout

**Metrics:**
- ~324 lines JavaScript
- ~471 lines CSS
- ~106 lines HTML
- 901 lines total
- 12 number objects with comprehensive interpretations
- ARIA labels from the start (role="region", role="list", aria-live)

---

### [done] 10. Affirmation Generator `html/affirmation-generator.html`
**Launched:** February 26, 2026  
**Features:**
- 80 comprehensive affirmations across 8 categories
- Categories: Self-Love, Abundance, Protection, Healing, Manifestation, Intuition, Strength, Peace
- Random selection with category filtering
- Favorites collection with localStorage persistence
- View toggle between Generate and My Favorites
- Large, elegant typography for affirmation display
- Add/remove favorites with heart button
- Tab-based navigation (role="tablist" for accessibility)
- Empty state messaging for favorites
- Usage tips section with 4 practice guides
- All 6 mystical themes
- Mobile responsive layout

**Metrics:**
- ~388 lines JavaScript
- ~606 lines CSS
- ~160 lines HTML
- 1,154 lines total
- 80 affirmation objects (10 per category)
- ARIA labels from the start (role="tablist", role="tab", aria-live, role="list")

---

### [done] 11. Pendulum Decision Tool `html/pendulum-tool.html`
**Launched:** February 26, 2026  
**Features:**
- Canvas-based pendulum animation with realistic physics
- 4 answer responses: Yes, No, Maybe, Ask Again Later
- Spring-based pendulum swing toward answer direction
- Question history with timestamps (last 20 questions)
- localStorage persistence for history tracking
- Toggle history visibility (show/hide)
- Clear history with confirmation
- Color-coded answer badges (green/red/orange/blue)
- Answer descriptions with guidance
- Usage guide section (4 cards: Ground & Center, Frame Question, Trust Movement, Reflect & Act)
- Smooth requestAnimationFrame animation (60fps)
- All 6 mystical themes
- Mobile responsive with scaled canvas

**Metrics:**
- ~410 lines JavaScript
- ~556 lines CSS
- ~137 lines HTML
- 1,103 lines total
- 4 answer objects with descriptions and directions
- ARIA labels from the start (role="region", role="list", aria-live, aria-label)

---

### [done] 12. Witchy Weather `html/witchy-weather.html`
**Launched:** February 26, 2026  
**Features:**
- OpenWeatherMap API integration (1000 free calls/day)
- 8 complete weather correspondences (Clear, Rain, Clouds, Snow, Wind, Fog, Storm, Partly Cloudy)
- Each weather type includes: element, planet, chakra, energy, deities, correspondences, rituals, affirmation
- City search or geolocation support
- Demo mode (works without API key) - random demo weather
- API key management with localStorage persistence
- Live moon phase integration (reused from moon-tracker)
- Weather + Moon phase combination suggestions (8 phases × 8 weather types = 64 unique combos)
- Element badges (Fire, Water, Air, Earth, All Elements) - color coded with gradients
- Current weather display with emoji, temp (C/F), humidity, wind speed
- Detailed magical correspondences section (grid layout)
- Ritual suggestions for current conditions
- Usage tips (4 cards: Find Your Weather, Magical Meanings, Moon Combinations, Ritual Timing)
- All 6 mystical themes (default: green-witchcraft)
- Mobile responsive layout
- ARIA labels from the start (role="region", role="search", aria-live)

**Metrics:**
- ~616 lines JavaScript
- ~675 lines CSS
- ~141 lines HTML
- 1,432 lines total
- 8 complete weather correspondence objects
- 8 fields per object (name, emoji, element, energy, deities, planet, chakra, correspondences, rituals, moon_combos, affirmation)
- 64 unique moon/weather combination suggestions

---

### [done] 13. Altar Setup Guide `html/altar-setup.html`
**Launched:** February 25, 2026  
**Features:**
- Comprehensive altar design and setup tool
- Cardinal directions & element placement guide (interactive compass diagram with NESW grid)
- 16 essential altar tools database (filterable by element, essential/optional, searchable)
- Each tool includes: purpose, correspondences, care instructions, budget alternatives
- 8 complete altar layout templates (Wiccan, Eclectic, Green Witch, Kitchen, Ceremonial, Ancestor, Portable, Lunar)
- Layout templates filterable by tradition and difficulty
- Each layout includes: placement guide, required items, seasonal tips, budget version
- Seasonal altar guide for all 8 sabbats (colors, herbs, crystals, decorations, focus, offerings)
- Expandable detail cards for all tools and layouts
- Search and dual-filter functionality (reuses filter-utils.js)
- Keyboard navigation enabled (arrow keys, enter/space to expand)
- All 6 mystical themes (default: green-witchcraft)
- Mobile responsive with compass diagram that reorders for mobile (N, E, S, W, Center stacked)
- ARIA labels from the start (role="region", role="search", aria-live, role="listitem")
- Print-friendly CSS support

**Metrics:**
- ~1068 lines JavaScript
- ~892 lines CSS
- ~229 lines HTML
- 2,189 lines total
- 16 altar tool objects with 9 fields each (name, emoji, element, direction, purpose, essential, alternatives, care, correspondences, notes)
- 8 altar layout objects with 8 fields each (name, tradition, difficulty, description, placements, items, seasonalAdaptations, budgetVersion, tips)
- 8 seasonal altar guide objects (sabbats with 7 fields: sabbat, date, emoji, colors, herbs, crystals, decorations, focus, offerings)
- Reuses: filter-utils.js, expandable-card.css, keyboard-nav.js, print.css, theme system

---

# 🔮 Development Priorities

**Generated:** 2/25/2026  
**Last Updated:** February 25, 2026

---

## 🎯 CURRENT SPRINT

**Status:** ✅ NO ACTIVE SPRINT

All 13 tools complete! Ready for v1.0 launch! 🎉

---

## 📜 PREVIOUS SPRINTS

### ✅ Cleanup + Altar Setup Guide Sprint - COMPLETE (Feb 25, 2026)

**Sprint Goal:** Final polish with JSDoc documentation + Build Altar Setup Guide tool

**Completed:**
- ✅ **JSDoc Documentation** (0 hours - already complete!) - All 6 shared utilities already had comprehensive JSDoc
- ✅ **Altar Setup Guide** (~6 hours actual) - 16 tools, 8 layouts, 8 seasonal guides, compass diagram

**Estimated:** 10-12 hours | **Actual:** ~6 hours ✅ Significantly ahead of schedule!

**Learnings:**
- All shared utilities already had professional JSDoc documentation from creation
- Established patterns made altar tool development extremely fast
- Compass diagram grid layout creative solution (3×3 grid with specific placements)
- Reused 100% of existing patterns (filter-utils, expandable-card, keyboard-nav)
- Mobile-first CSS with grid reordering for compass (N→E→S→W→Center stack)
- Comprehensive data structure (16 tools × 9 fields, 8 layouts × 8 fields) defined upfront = no refactoring
- 80/20 rule: Tech debt was already done, allocated 100% time to feature = velocity boost

---

### ✅ Infrastructure Sprint - COMPLETE (Feb 27, 2026)

**Sprint Goal:** Progressive Web App + PDF Export for all tools

**Completed:**
- ✅ **Progressive Web App Infrastructure** (~3 hours) - manifest.json, sw.js (~180 lines), offline.html, 13 file updates
- ✅ **PDF Export System** (~2 hours) - pdf-utils.js (65 lines), button styles, 6 tool integrations (Moon, Herbal, Crystal, Spell, Sabbat, Rune)

**Estimated:** 10-12 hours | **Actual:** ~5 hours ✅ Significantly ahead of schedule!

**Learnings:**
- PWA service worker easier than expected with cache-first strategy
- Browser's native print-to-PDF sufficient (no external libraries needed)
- Batch file updates accelerated integration (manifest + SW in all 13 files)
- Infrastructure sprints unlock capabilities for all future tools
- Auto-dated filenames improve UX (`tool-type-YYYY-MM-DD.pdf` pattern)
- PWA works offline with zero per-tool config (just manifest link + SW registration)

### ✅ Witchy Weather + Navigation Menu Sprint - COMPLETE (Feb 26, 2026)

**Sprint Goal:** Witchy Weather + Global Navigation Menu

**Completed:**
- ✅ **Global Navigation Menu** (1 hour actual) - Hamburger menu integrated into all 11 tools
- ✅ **Witchy Weather Tool** (est 6-8 hours, actual ~6 hours) - OpenWeatherMap API integration, 8 weather types, moon phase combos

**Estimated:** 8-10 hours | **Actual:** ~7 hours ✅ Ahead of schedule!

**Sprint Results:**
- Navigation menu (js/nav-menu.js: 345 lines, css/nav-menu.css: 391 lines) - Shared across ALL 12 tools + homepage
- Witchy Weather complete (1,432 lines total: 141 HTML, 616 JS, 675 CSS)
- 8 weather correspondences with full magical associations
- Moon phase integration with suggestions
- Demo mode + OpenWeatherMap API integration
- All 6 themes, mobile responsive, ARIA accessible
- Theme-specific witchy icons (⛤, ☽, 🪄, 🧿, 🕯️, 🔯) with dynamic switching

**Key Learnings:**
- Tech debt first = massive acceleration (nav menu done in 1h vs 2h estimated)
- Shared utilities reduce duplication (nav-menu.js/css pattern established)
- API integration easier than expected (OpenWeatherMap straightforward)
- Moon phase calculation reusable from moon-tracker
- Top-right menu positioning better UX (avoids conflicts with back link + theme selector)
- Theme-specific icons > generic hamburger (enhances mystical aesthetics)
- Dynamic icon switching via theme listener adds polish (icons update in real-time)

**Next Sprint Candidates:**
- PWA + PDF Infrastructure
- Tarot Spread Generator (medium complexity)
- Planetary Hours Calculator

**Previous Sprint Summaries:**

### ✅ Simple Tools Blitz Sprint - COMPLETE (Feb 26, 2026)

**Sprint Goal:** Three Quick Wins + Complete App Accessibility

**Completed:**
- ✅ **Complete ARIA Accessibility** (2.5 hours actual) - Added ~144 ARIA attributes to 5 remaining tools
- ✅ **Numerology Calculator** (2.5 hours actual) - 901 lines, 12 number interpretations, 4 calculation types
- ✅ **Affirmation Generator** (2.5 hours actual) - 1,154 lines, 80 affirmations, 8 categories, favorites system
- ✅ **Pendulum Decision Tool** (2.5 hours actual) - 1,103 lines, canvas animation with spring physics, question history

**Estimated:** 8-12 hours | **Actual:** ~10 hours ✅ Exactly on target!

**Why On Target:**
- Established patterns enabled 2-3 hour builds per tool
- ARIA labels added from the start (not retrofitted)
- CSS theme copying prevented undefined variable bugs
- Canvas animation simpler than expected (spring physics worked first try)
- Tech debt first accelerated feature work
- Zero scope creep or mid-development changes

**Sprint Deliverables:**
- **3 New Tools:** 3,158 lines of new code (Numerology, Affirmation, Pendulum)
- **Accessibility:** All 11 tools now have full ARIA coverage (~144 attributes added)
- **Patterns:** Spring physics animation, question/answer history, tab navigation
- **Velocity Data:** Simple tools with patterns = 2-3 hours consistently

**Learnings:**
- Spring physics pattern (pendulum) reusable for future animations
- Question/answer history pattern applicable to tarot, oracles
- ARIA from the start is 3x faster than retrofitting
- Consistent ~2.5h velocity for simple tools enables accurate sprint planning

---

### ✅ Spell Builder & Grimoire Sprint - COMPLETE (Feb 26, 2026)

**Sprint Goal:** Spell Builder & Grimoire MVP + ARIA Accessibility

**Completed:**
- ✅ **Spell Builder & Grimoire** (6-8 hours actual) - Full spell creation tool with grimoire storage, filtering, and export
- ✅ **ARIA Labels for Accessibility** (2-3 hours actual) - Added semantic labels to Moon, Crystal, Herbal tools

**Estimated:** 19-24 hours | **Actual:** 8-11 hours (~50% faster than estimate!)

**Why Faster:**
- Reused ~80% of existing patterns (filter-utils, expandable-card, theme system)
- Data structure defined upfront (no mid-development changes)
- ARIA pattern more straightforward than expected
- Established CSS theme copying prevented undefined variable bugs

**Sprint Deliverables:**
- **New Tool:** Spell Builder (1,680 lines) with 10 intents, grimoire storage, filtering
- **Accessibility:** 40+ ARIA attributes across 3 tools, `.sr-only` utility class
- **Documentation:** ARIA pattern added to CLAUDE.md (+95 lines, comprehensive examples)

---

### ✅ Technical Debt - COMPLETE (20% effort - ~2 hours actual)
**Unify Expandable Card CSS**

**Completed:**
- ✅ Created `css/expandable-card.css` (164 lines) with unified expansion behavior
- ✅ Updated 5 tool HTML files to load shared CSS (moon, rune, sabbat, crystal, herbal)
- ✅ Removed ~200 lines of duplicate CSS across 5 tool files
- ✅ Pattern uses wildcard selectors: `[class*="-card"]`, `[class*="-details"]`
- ✅ Works with ANY card class ending in `-card` (future-proof)
- ✅ Updated CLAUDE.md with pattern documentation

**Impact:**
- Reduced ~200 lines of duplicate code
- Established DRY pattern for all future card-based tools
- Consistent UX for card expansion across entire app
- Single file to maintain for card behavior updates
- Immediate reusability (meditation timer used it from day one)

### ✅ New Feature - COMPLETE (80% effort - ~3 hours actual)
**Meditation Timer** `html/meditation-timer.html`

**Completed:**
- ✅ Created HTML structure (140 lines) with preset grid, custom input, settings
- ✅ Built timer logic with Web Audio API sound generation (378 lines JS)
- ✅ Implemented circular SVG progress ring with stroke-dashoffset animation
- ✅ Created CSS (610 lines) with all 6 theme variants (copied from crystal-database.css)
- ✅ 7 presets (5-60 min) + custom duration (1-180 min)
- ✅ 3 procedurally generated sounds (singing bowl, temple bell, wind chime)
- ✅ Interval bells (every 5/10/15 min), auto-start, localStorage persistence
- ✅ Updated homepage with tool card
- ✅ Removed from "Coming Soon" section
- ✅ Tested all 6 themes + mobile responsive

**Sprint Metrics:**
- Total time: ~5 hours (vs. estimated 4-7 hours)
- Benefits of:
  - Tech debt first (expandable-card.css ready to use immediately)
  - Copied CSS theme variables (no undefined variable bugs)
  - Development order followed (HTML → JS data → JS functions → CSS)
  - Web Audio API simpler than expected (no audio files needed!)
- Velocity: Simple tools now consistently 2-4 hours with established patterns

**Previous Sprint Results:**

**Sprint Goal:** Complete Herbal Database + Reduce Code Duplication

### ✅ Technical Debt - COMPLETE (20% effort - ~3 hours actual)
**Consolidate Filter Logic Across Tools**

**Completed:**
- ✅ Created `js/filter-utils.js` with 5 reusable functions (134 lines):
  - `filterItems()` - Generic multi-filter supporting arrays and single values
  - `searchItems()` - Case-insensitive multi-property search
  - `filterAndSearch()` - Combined filter + search
  - `clearFilters()` - Reset UI elements
  - `updateResultCount()` - Update count display
- ✅ Refactored `crystal-script.js` to use shared utilities (~10 lines removed)
- ✅ Refactored `moon-script.js` to use shared utilities (~8 lines removed)
- ✅ Updated `rune-caster.html` to load filter-utils.js (prepared for future use)
- ✅ Updated CLAUDE.md with filter utilities documentation
- ✅ All JSDoc documentation complete

**Impact:**
- Reduced ~60 lines of duplicate code
- Established DRY pattern for future tools
- Herbal Database used shared utilities from day one
- Easier to maintain and add new filter features

### ✅ New Feature - COMPLETE (80% effort - ~4 hours actual)
**Herbal Correspondences Guide** `html/herbal-database.html`

**Completed:**
- ✅ Created HTML structure (114 lines) with safety-first design
- ✅ Built data array with 22 comprehensive herbs (18 fields each)
- ✅ Implemented search + dual-filter using filter-utils.js
- ✅ Added three-tier safety badge system (safe/caution/toxic)
- ✅ Created CSS (600 lines) with prominent safety styling
- ✅ Updated homepage with tool card
- ✅ Removed from "Coming Soon" section
- ✅ Safety warnings clearly visible and impossible to miss

**Sprint Metrics:**
- Total time: ~7 hours (vs. estimated 2-3 days)
- Benefits of:
  - Shared utilities (tech debt first!)
  - Established patterns (Crystal DB template)
  - Clear data structure (18 fields defined upfront)
  - Safety-first approach prevented scope creep

---

**Generated:** 2/25/2026
**Last Updated:** February 27, 2026

---

## 🔥 HIGH PRIORITY (Next Up)

All high-priority MVP tools complete! 🎉

---

## 📋 MEDIUM PRIORITY

### [ ] Tarot Spread Generator
**Complexity:** Complex (4-6 weeks)  
**Why Medium Priority:** Requires 78-card database, complex spread logic, extensive testing  
**Reuses:** Card filtering patterns, expandable cards, localStorage for saved readings

### [ ] Planetary Hours Calculator
**Complexity:** Medium (1-2 weeks)  
**Why Medium Priority:** Geolocation API, sunrise/sunset calculations, timezone handling  
**Reuses:** Date/time utilities, real-time updates like moon tracker

### [done] Spell Builder & Grimoire
**Completed:** February 26, 2026  
**Actual Time:** 6-8 hours (vs. estimated 6-8 weeks!)  
**Reused:** filter-utils.js, expandable-card.css, keyboard-nav.js, print.css, theme system, localStorage patterns

### [ ] Dream Journal
**Complexity:** Medium (2-3 weeks)  
**Why Medium Priority:** Calendar-based entries, pattern recognition, tags/symbols  
**Reuses:** localStorage, date utilities, expandable entries

---

## 💭 BACKLOG

### Simple Tools (2-4 hours each)
- [done] **Numerology Calculator** — Completed Feb 26, 2026 (901 lines: Life Path, Soul Urge, Destiny, Personality numbers)
- [done] **Affirmation Generator** — Completed Feb 26, 2026 (1,154 lines: 80 affirmations, 8 categories, favorites)
- [done] **Meditation Timer** — Customizable duration, interval bells, ambient sounds
- [done] **Pendulum Decision Tool** — Completed Feb 26, 2026 (1,103 lines: Canvas animation, 4 answers, question history)
- [done] **Witchy Weather** — Completed Feb 26, 2026 (1,432 lines: OpenWeatherMap API, 8 weather types, moon phase combos)

### Medium Tools (1-2 weeks each)
- [ ] **Sacred Geometry Generator** — Canvas drawing of Flower of Life, Metatron's Cube, etc.
- [ ] **Candle Magic Guide** — Color correspondences, burn times, safety, spell templates

### Complex Tools (4+ weeks each)
- [ ] **Astrology Birth Chart** — Full natal chart calculation and interpretation
- [ ] **I Ching Oracle** — 64 hexagrams, changing lines, full interpretations
- [ ] **Elemental Balancing Tool** — Quiz + recommendations for balancing your elements

---

## 🔧 TECHNICAL DEBT BACKLOG

### High Priority (UX/Quality Issues)
- [done] **Unify expandable card CSS** - Created `css/expandable-card.css` (164 lines) - Complete
- [done] **Keyboard navigation** - Created `js/keyboard-nav.js` (244 lines), added focus styles, integrated into 4 tools - Complete
- [done] **Add ARIA labels for accessibility** - Added 40+ ARIA attributes to Moon/Crystal/Herbal, `.sr-only` utility, documented pattern in CLAUDE.md - Complete
- [done] **Global navigation menu** - Completed Feb 26, 2026 - Created `js/nav-menu.js` (310 lines) + `css/nav-menu.css` (372 lines), integrated into all 12 tools (11 tools + homepage), documented in CLAUDE.md

### Medium Priority (Code Quality)
- [done] **Extract canvas initialization** - Created `js/canvas-utils.js` (219 lines) with 4 functions, refactored Sigil/Rune - Complete
- [ ] **Consolidate card rendering** - `createCard()` pattern exists in 4 tools (~3 hours)
- [ ] **Add JSDoc comments** - Document all public functions (~4 hours)

### Low Priority (Nice to Have)
- [done] **Print-friendly CSS** - Created `css/print.css` (354 lines) for all 7 tools - Complete
- [done] **PWA manifest** - Completed Feb 27, 2026 - Created manifest.json, sw.js (~180 lines), offline.html, integrated into all 13 files
- [done] **Export to PDF** - Completed Feb 27, 2026 - Created pdf-utils.js (65 lines), added 6 PDF buttons (Moon, Herbal, Crystal, Spell, Sabbat, Rune)
- [ ] **Share via URL** - Encode state in query params (~5 hours)


---

## 📋 SPRINT PLANNING GUIDE

**Before Starting Each Sprint:**
1. ✅ Review previous sprint learnings
2. ✅ Choose 1 new tool OR 2-3 major tech debt items
3. ✅ Pick 1-2 complementary tech debt items
4. ✅ Update ROADMAP.md Current Sprint section
5. ✅ Set realistic timeline based on past velocity
6. ✅ Identify reusable patterns

**Sprint Ratio:** 80% new features, 20% technical debt

**After Completing Sprint:**
- Update completed tools section with metrics
- Document "What worked" and "What slowed us down"
- Add any new tech debt to backlog
- Calculate velocity for planning

---

## 🔧 TECHNICAL DEBT & IMPROVEMENTS (Tool-Specific)

### All Tools
- [done] Accessibility audit — ARIA labels + keyboard nav across all 13 tools
- [done] Print-friendly CSS — `css/print.css` (354 lines)
- [done] PDF export functionality — `js/pdf-utils.js` + 6 tool integrations
- [ ] Share via URL (encode state in query params)
- [done] PWA manifest for offline capability — `manifest.json`, `sw.js`, `offline.html`
- [ ] Performance audit (lighthouse scores)

### Sigil Generator
- [ ] LocalStorage: Save sigil history (last 10)
- [ ] Export styles: SVG option in addition to PNG
- [ ] Additional algorithms: Add 5 more generation styles
- [ ] Tutorial: First-time user walkthrough
- [ ] Gallery: Show example sigils for inspiration

### Moon Tracker
- [ ] Lunar eclipse calculations & notifications
- [ ] Filter persistence (remember user preferences)
- [ ] Ritual journal: Save personal notes on rituals tried
- [ ] Export calendar to .ics format
- [ ] Void of Course moon tracking

### Rune Caster
- [ ] Journal: Save cast readings with notes
- [ ] Export reading as image/PDF
- [ ] Bind rune improvements: Better overlaying algorithm
- [ ] Additional spreads: Add 3-4 more traditional spreads
- [ ] Rune of the day notification

### Crystal Database
- [ ] Expand to 50-100 crystals (currently 25)
- [ ] Add more filter options (element, color, planetary correspondences)
- [ ] Export collection as PDF shopping list
- [ ] Crystal grid templates & layouts
- [ ] "Crystal of the Day" random feature
- [ ] Notes field for personal collection items

---

## 💡 ARCHITECTURAL PATTERNS ESTABLISHED

**Successfully Reused Across Tools:**

1. **Shared Theme System**
   - `css/shared-theme.css` - 6 themes with 30+ CSS variables each
   - `js/theme-manager.js` - Centralized theme switching
   - localStorage key: `'mystical-path'`

2. **Data-Driven Approach**
   - Large arrays of objects (rituals, runes, etc.)
   - Inline data (no external JSON files)
   - Works with `file://` protocol

3. **Card/Grid Layouts**
   - Glassmorphism cards (`.tool-card`, `.rune-card`, `.ritual-card`)
   - CSS Grid with `grid-template-areas` for complex layouts
   - Expandable details pattern (click to reveal)

4. **Canvas Integration**
   - 600x600px standard size
   - White background initialization
   - Touch/mouse compatibility
   - PNG download via `toDataURL()`

5. **Filtering & Search**
   - Dual dropdown filters
   - `filter()` on arrays
   - Live DOM updates

6. **Responsive Design**
   - Breakpoints: 768px (tablet), 480px (mobile)
   - Grid collapse to single column
   - Touch-friendly sizing

---

## 📊 PROJECT METRICS

**Files:**
- 13 HTML tool pages (sigil, moon, rune, sabbat, crystal, herbal, meditation, spell-builder, numerology, affirmation, pendulum, witchy-weather, altar-setup)
- 13 tool-specific JavaScript files + 6 shared utilities (filter-utils, keyboard-nav, canvas-utils, theme-manager, nav-menu, pdf-utils)
- 13 tool-specific CSS files + 5 shared stylesheets (shared-theme, expandable-card, print, homepage-styles, nav-menu)
- 1 homepage

**Architecture:**
- Pure vanilla JavaScript (no frameworks)
- CSS Custom Properties (30+ variables/theme)
- No build process
- Static hosting ready

**Themes:**
- 6 complete mystical themes
- Synchronized across all pages
- LocalStorage persistence

---

## 🎨 DESIGN PHILOSOPHY

**Principles Followed:**
1. **Empower, Don't Replace** - Tools support intuition, not automate it
2. **Offline First** - No external dependencies, works via file://
3. **Educational** - Each tool teaches about the practice
4. **Beautiful** - Mystical aesthetics with modern UX
5. **Accessible** - Responsive, readable, usable

**Quality Standards:**
- Mobile responsive required
- Theme integration required
- Detailed explanations/interpretations
- Cultural respect & context
- Safety warnings where appropriate

---

## 🚀 FUTURE CONSIDERATIONS

**Potential Infrastructure Upgrades:**
- User accounts & cloud sync (Firebase/Supabase)
- Backend API for community features
- Mobile native apps (React Native/Flutter)

**Community Features:**
- Spell/ritual sharing
- Review system
- Resource library
- User forums

**Advanced Tools:**
- Audio/video meditation guides
- Interactive visualizations
- AI-assisted interpretations (ethical considerations)
- Multi-user rituals/circles

---

## 📝 NOTES & LEARNINGS

**What Worked Well:**
- Shared theme system prevents duplication
- Data-driven approach scales easily
- Card pattern reusable across tools
- Canvas API powerful for visual tools
- Hemisphere toggle pattern for global users
- Live countdown timers add engagement
- setInterval for real-time updates works well
- Dual-filter UI pattern (intention + chakra) highly effective
- Collection tracking with localStorage provides personal value
- Mini card design for collection display works well
- Multi-step forms with sections easier than expected
- Export/Import JSON backup trivial with localStorage
- Tech debt first in sprints accelerates feature work
- 80% pattern reuse = 50% faster development
- ARIA labels (~15-20 per tool) provide good screen reader support
- aria-live="polite" critical for announcing dynamic content changes
- Global navigation menu pattern (nav-menu.js/css) provides consistent UX
- Theme-specific icons enhance mystical aesthetics vs generic hamburger
- Dynamic icon updates via theme listener create cohesive experience

**Challenges Overcome:**
- Theme selector ID consistency critical
- Canvas download required data URL
- Grid layouts need mobile fallbacks
- Large datasets maintainable inline
- Hemisphere date offsetting (6-month shifts)
- Year rollover logic for next sabbat calculation
- Expandable cards spanning multiple grid columns

**For Next Tools:**
- Start with data structure first
- Reuse existing card/grid components
- Test mobile early and often
- Theme integration from start
- Include navigation menu (nav-menu.css + nav-menu.js) from start
- Established patterns enable rapid development (Sabbat Calendar & Crystal Database: 1 day each vs. estimated 2-3 weeks)
- Collection features (localStorage) add compelling user engagement
- Safety warnings (care tips, water/sunlight sensitivity) critical for crystals/herbs
- Add ARIA labels during initial development (not as afterthought)
- role="alert" perfect for safety warnings (immediate screen reader announcement)
- .sr-only class enables semantic structure without visual clutter

---

**Remember:** Quality over quantity. Each tool should be complete, polished, and useful before moving to the next.

*"The best time to plant a tree was 20 years ago. The second best time is now."*
