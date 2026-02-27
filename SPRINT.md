# Sprint: Cross-Tool Foundation — Lookup + Dashboard

**Date:** 2026-02-27
**Ratio:** 80% features / 20% tech debt

---

## Goal

Build the shared data layer that makes cross-tool features possible, then ship two platform features on top of it: Correspondence Lookup (keyword → matching crystals, herbs, runes, candles) and Daily Practice Dashboard (unified "today" view). This sprint establishes `js/correspondence-data.js` as a permanent platform primitive all future cross-tool features will use.

---

## Tasks

### Tech Debt (do first)
- [ ] **Expand Crystal/Rune of Day localStorage** — currently stores `{date, name}` only; add `emoji` so Dashboard can display without needing full data arrays. Small change to `crystal-script.js` and `rune-script.js`.

### Features
- [ ] **`js/correspondence-data.js`** — Shared data layer: extract correspondence subset (name, emoji, intentions, element, planet, chakra, zodiac, tool, link) from Crystal (93), Herb (22), Rune (24), Candle Colors (15). ~154 items total. (~3h)
- [ ] **Correspondence Lookup** — New tool. Keyword search + element/intention filters → results grouped by tool type with links back to full tool. Reuses filter-utils.js. (~5h)
- [ ] **Daily Practice Dashboard** — New tool. Moon phase (inline calc copied from moon-script.js), next sabbat (inline calc), Crystal of Day (localStorage), Rune of Day (localStorage), daily affirmation. (~4h)

---

## Checklist

### Tech Debt
- [ ] `crystal-script.js` — add `emoji` to Crystal of Day localStorage save
- [ ] `rune-script.js` — add `emoji` to Rune of Day localStorage save

### Correspondence Data Layer
- [ ] `js/correspondence-data.js` — crystals subset (93 items)
- [ ] `js/correspondence-data.js` — herbs subset (22 items)
- [ ] `js/correspondence-data.js` — runes subset (24 items)
- [ ] `js/correspondence-data.js` — candle colors subset (15 items)

### Correspondence Lookup Tool
- [ ] `html/correspondence-lookup.html`
- [ ] `css/correspondence-styles.css`
- [ ] `js/correspondence-script.js`
- [ ] Add to `sw.js` PRECACHE_ASSETS + bump CACHE_NAME
- [ ] Add to `js/nav-menu.js` TOOLS array
- [ ] Add to `index.html`
- [ ] Add to `offline.html`

### Daily Practice Dashboard
- [ ] `html/daily-dashboard.html`
- [ ] `css/dashboard-styles.css`
- [ ] `js/dashboard-script.js`
- [ ] Add to `sw.js` PRECACHE_ASSETS + bump CACHE_NAME
- [ ] Add to `js/nav-menu.js` TOOLS array
- [ ] Add to `index.html`
- [ ] Add to `offline.html`

### Close
- [ ] Update `ROADMAP.md` — mark items `[done]`
- [ ] Archive this file to `sprints/SPRINT-2026-02-27b.md`
- [ ] Commit

---

## Notes / Blockers

_Track anything that stalls progress mid-sprint._

---

## Close

**Estimated:** ~14h | **Actual:**
**Files changed:**
**Learnings:**
-
