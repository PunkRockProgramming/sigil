# 🕯️ Sprint: Candle Magic Guide

**Sprint Goal:** Build the Candle Magic Guide — a two-section reference tool for candle color correspondences and spell templates — and reduce card rendering duplication across the codebase.

**Estimated effort:** ~12-13 hours
**80/20 split:** Tech debt first (~3 hrs), then feature (~9-10 hrs)

---

## 🔧 Tech Debt (20% — do first)

### Consolidate Card Rendering — SKIPPED after code review

**Assessment (sprint start):** Read all 4 implementations. The duplication is more apparent than real:
- Crystal + Herbal: collection tracking buttons are deeply embedded in card HTML — tied to domain logic, not generic structure
- Rune: completely different approach (DOM node-by-node, spread-specific `reversed`/`positionName` params)
- Moon: inline in render loop, no separate function

The actual "shared" code is `createElement('div') → className → innerHTML → expand listener` — 3 lines. `expandable-card.css` already handles the shared expand/collapse styling. Extracting a generic `createCardElement(config)` would require a complex config object harder to read than the current code.

**Decision:** Skip. Not worth the abstraction cost. Candle Magic Guide will follow the same simple pattern as Crystal/Herbal.

---

## ✨ Feature (80% — after tech debt)

### Candle Magic Guide `html/candle-magic.html`

**Why:** Completes the core reference database family (Crystal → Herbal → Candle). Pure reference tool, no collection tracker — clean and fast to build. Reuses ~90% of established patterns.

**Two tabbed sections:**

#### Tab 1: Color Reference (~12-15 candle colors)
Each entry: `name`, `hex` (color swatch), `emoji`, `element`, `planet`, `chakra`, `intentions[]`, `meaning`, `magical_uses`, `dressing`, `safety_notes`

Filters: **Element** (Fire/Water/Air/Earth) + **Intention** (Love/Protection/Abundance/etc.)
Search: by color name and intentions

Colors to include: White, Black, Red, Pink, Orange, Yellow, Green, Light Blue, Dark Blue, Purple, Brown, Silver, Gold, Gray, Lavender

#### Tab 2: Spell Templates (~10-15 spells)
Each entry: `name`, `emoji`, `intent`, `candle_color`, `moon_phase`, `day_of_week`, `ingredients[]`, `instructions`, `timing_notes`, `notes`

Filters: **Intent** + **Moon Phase**
No collection tracking — pure reference

**Reuses:**
- `filter-utils.js` — search + dual filter
- `expandable-card.css` — expand/collapse
- `keyboard-nav.js` — arrow key navigation
- `print.css` + `pdf-utils.js` — PDF export button in each tab
- `nav-menu.js` / `nav-menu.css` — navigation
- Theme system — standard shared themes, no default override
- Crystal/Herbal CSS as starting template for theme variables

**Tasks:**
- [ ] Create `html/candle-magic.html` — tabbed layout (Color Reference | Spell Templates)
- [ ] Define complete color data array (~12-15 colors, all fields upfront)
- [ ] Define complete spell templates array (~10-15 spells, all fields upfront)
- [ ] Implement tab switching, search, and dual filters for Color Reference tab
- [ ] Implement search and dual filters for Spell Templates tab
- [ ] Create `css/candle-magic-styles.css` — copy crystal/herbal as base, define all 6 theme variants
- [ ] Create `js/candle-magic-script.js` — rendering + filter logic
- [ ] Add PDF export button to each tab
- [ ] Add keyboard navigation for both card grids
- [ ] Add ARIA labels from the start
- [ ] Add to PWA: update `sw.js` version + `PRECACHE_ASSETS`, add link to `offline.html`
- [ ] Add tool card to `index.html`, remove from Coming Soon
- [ ] Add to TOOLS array in `nav-menu.js`
- [ ] Pre-launch checklist — verify all 6 themes, mobile, file:// + localhost
- [ ] Update `ROADMAP.md` — move to Completed Tools with metrics

---

## 📋 Ordered Task Checklist

### Phase 1: Tech Debt
- [ ] Read the 4 card rendering implementations
- [ ] Extract shared card utility
- [ ] Refactor + verify existing tools
- [ ] Document in CLAUDE.md

### Phase 2: Candle Magic Guide
- [x] HTML structure (tabs, filter controls, card grids)
- [x] JS data — color array (15 colors, all fields upfront)
- [x] JS data — spell templates array (12 spells, all fields upfront)
- [x] JS functions — tab switching, filter + search, card rendering
- [x] CSS — all 6 theme variants (moon-styles.css as base)
- [x] Polish — PDF button (spells tab), keyboard nav, ARIA labels
- [x] Integration — sw.js v1.2, offline.html, index.html, nav-menu.js
- [ ] Testing — all 6 themes, mobile, file://, offline

---

## 📎 Reference

**Velocity benchmarks:**
- Database reference tool (Crystal/Herbal): ~6-8 hours with shared utilities
- Tech debt / shared utility extraction: ~2-4 hours
- Simple card rendering DRY: likely on the lower end (~2-3 hrs)

**Key files to copy from:**
- `css/crystal-styles.css` — theme variable template
- `js/crystal-script.js` — filter + card rendering pattern
- `html/crystal-database.html` — tab + filter HTML structure
