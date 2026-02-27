# Sprint: Ogham Oracle + Universal Search

**Date:** 2026-02-27
**Ratio:** 80% features / 20% tech debt

---

## Goal

Add Ogham Oracle (Celtic divination, Rune Caster pattern reused), Universal Search on the homepage (powered by existing correspondence-data.js), and two quick tech debt items. Together these round out the divination toolkit and make the now-18-tool collection navigable from the homepage.

---

## Tasks

### Tech Debt (do first)
- [ ] **Crystal Database: element/color/planetary filters** — add 3 filter dropdowns alongside existing chakra/intention filters. Extends current filter pattern. (~2h)
- [ ] **Candle Magic: expand to 20+ spell templates** — data entry, reuses existing template structure. (~2h)

### Features
- [ ] **Universal Search on homepage** — search box that queries `correspondence-data.js` and shows grouped results inline on `index.html`. Powered by existing data layer. (~3h)
- [ ] **Ogham Oracle** — Celtic tree alphabet, 20 fews (Beith through Mórainn's Aicme). Divination spreads (1-few draw, 3-few past/present/future, 5-few full reading). Reading journal. Reuses Rune Caster pattern end-to-end. (~7h)

---

## Checklist

### Tech Debt
- [ ] `crystal-script.js` + `crystal-database.html` — add element, color, planetary filter dropdowns
- [ ] `candle-magic-script.js` — expand SPELL_TEMPLATES to 20+ entries

### Universal Search
- [ ] `index.html` — add search bar + results container to homepage
- [ ] `css/homepage-styles.css` — search bar + results styles
- [ ] `js/homepage-search.js` — query correspondence-data.js, render grouped results, debounce input

### Ogham Oracle
- [ ] `html/ogham-oracle.html`
- [ ] `css/ogham-styles.css`
- [ ] `js/ogham-script.js` — 20 fews data, 3 spread types, reading journal
- [ ] Add to `sw.js` PRECACHE_ASSETS + bump CACHE_NAME
- [ ] Add to `js/nav-menu.js` TOOLS array
- [ ] Add to `index.html`
- [ ] Add to `offline.html`

### Close
- [ ] Update `ROADMAP.md` — mark items `[done]`
- [ ] Archive this file to `sprints/SPRINT-2026-02-27c.md`
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
