# Sprint: Quick Wins — New Tools + Flagship Enhancement

**Date:** 2026-02-27
**Ratio:** 80% features / 20% tech debt

---

## Goal

Add three high-value, low-effort items: Angel Numbers reference tool (high search traffic), Retrograde Tracker (completes the timing toolkit), and SVG export for Sigil Generator (enhances flagship tool). Two small quality-of-life improvements round it out.

---

## Tasks

### Tech Debt (do first)
- [ ] **Sabbat countdown to next 3** — currently shows only nearest sabbat; show next 3 upcoming with dates. (~2h)
- [ ] **Sigil charge/activate instructions** — display ritual guidance after sigil creation in existing flow. (~1h)

### Features
- [ ] **Angel Numbers Guide** — simple lookup reference. Enter or select a number (111–999, key sequences) → meaning, message, affirmation. Reuses Crystal/Herbal reference pattern + filter-utils. (~4h)
- [ ] **Retrograde Tracker** — Mercury, Venus, Mars, Jupiter retrograde dates for current year + what to avoid/embrace during each. Static date data + date math to show current/next retrograde. Reuses Moon Tracker's live calc pattern. (~5h)
- [ ] **SVG export for Sigil Generator** — add SVG export alongside existing PNG download. (~2h)

---

## Checklist

- [x] Sabbat: show next 3 upcoming sabbats
- [x] Sigil: charge/activate instructions after creation
- [x] Angel Numbers: `html/angel-numbers.html`
- [x] Angel Numbers: `css/angel-numbers-styles.css`
- [x] Angel Numbers: `js/angel-numbers-script.js`
- [x] Angel Numbers: add to `sw.js` PRECACHE_ASSETS + bump CACHE_NAME
- [x] Angel Numbers: add to `js/nav-menu.js` TOOLS array
- [x] Angel Numbers: add to `index.html`, remove from Coming Soon
- [x] Angel Numbers: add to `offline.html`
- [ ] Retrograde Tracker: `html/retrograde-tracker.html`
- [ ] Retrograde Tracker: `css/retrograde-tracker-styles.css`
- [ ] Retrograde Tracker: `js/retrograde-tracker-script.js`
- [ ] Retrograde Tracker: add to `sw.js`, `nav-menu.js`, `index.html`, `offline.html`
- [ ] Sigil Generator: SVG export button
- [ ] Pre-launch checklist on all new tools
- [ ] Update `ROADMAP.md` — mark items `[done]`
- [ ] Archive this file to `sprints/SPRINT-2026-02-27.md`
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
