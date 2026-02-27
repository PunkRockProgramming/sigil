# Velocity & Sprint History

Reference data for sprint planning and estimation.

---

## Estimation Guide

| Tool Type | Time | Notes |
|---|---|---|
| Simple (timer, affirmation, pendulum) | 2–3 hrs | With established patterns |
| Database tool (crystals, herbs) | 6–8 hrs | With filter-utils.js |
| Dual-tab reference tool (candle magic) | ~1 session | |
| Medium tool (sabbat calendar, rune caster) | 1–2 days | |
| Complex tool (sigil generator with canvas) | 3–5 days | |
| Canvas animation (with physics) | 2–3 hrs | With canvas-utils.js |
| ARIA accessibility retrofit | ~30 min/tool | Add from start: 3× faster |
| "X of the Day" feature | ~1 hr | Highly reusable pattern |
| Collection tracking (owned/wishlist) | ~1 hr | Reuse from crystal-script.js |
| Filter persistence | ~30 min | 10-line addition per tool |
| Compatibility calculator | ~2 hrs | Near-free if calc functions exist |

## Factors That Accelerate Work
- Shared utilities already exist
- Similar tool to copy from
- Data structure defined upfront
- ARIA labels added from the start (not retrofitted)
- CSS theme variables copied from existing tool

## Factors That Slow Work
- Building new utility functions from scratch
- Undefined data structure (adding fields mid-development)
- Complex interactions (canvas, animations) without existing patterns
- Safety-critical content requiring research

---

## Sprint History

### Enhancement Sprint (Feb 2026)
- Filter persistence (3 tools): ~1 hr — same 10-line pattern per tool
- Spell Builder moon auto-detect: ~30 min — inline Julian Day calc
- Crystal of the Day: ~1 hr
- Rune of the Day: ~1 hr (same pattern)
- Rune Caster reading journal: ~2 hrs
- Moon Tracker ritual journal: ~2.5 hrs
- Numerology compatibility calculator: ~2 hrs
- Crystal Database 50→93: ~3 hrs (43 entries × 17 fields)
- **Total: ~13 hrs estimated | 1 session actual ✅**

**Learnings:**
- "X of the Day" pattern highly reusable (ISO date string compare in localStorage)
- Record modal (inline dialog) beats native `prompt()` for journaling
- Filter persistence is a 10-line addition with high perceived UX value
- For journals tracking live state (moon phase), read from DOM element not recalculate

### Infrastructure Sprint (Feb 2026)
- PWA Infrastructure: ~3 hrs (manifest.json, sw.js, offline.html, 13 file updates)
- PDF Export System: ~2 hrs (pdf-utils.js, button styles, 6 tool integrations)
- **Total: ~5 hrs (estimated 6–8 hrs) ✅ Ahead of schedule**

**Learnings:**
- PWA service worker straightforward with cache-first strategy
- Browser's native print-to-PDF sufficient — no libraries needed
- Batch file operations accelerate integration
- Infrastructure sprints unlock capabilities for all future tools

### Simple Tools Blitz (Feb 2026)
- Numerology Calculator: 2.5 hrs (901 lines)
- Affirmation Generator: 2.5 hrs (1,154 lines)
- Pendulum Decision Tool: 2.5 hrs (1,103 lines)
- **Insight:** Simple tools with established patterns consistently 2–3 hrs

### Weather + Navigation Sprint (Feb 2026)
- Global Navigation Menu: 1 hr (345 lines JS, 391 lines CSS)
- Witchy Weather: 6 hrs (1,432 lines total)
- **Total: ~7 hrs (estimated 8–10 hrs) ✅ Ahead of schedule**

**Learnings:**
- Top-right menu position avoids back link/theme selector conflicts
- Theme-specific icons better UX for mystical tools than generic hamburger
- Dynamic icon switching via theme listener adds polish

### Feb 2026 Sprint (Tech Debt + Features)
- filter-utils.js shared library: ~3 hrs
- Herbal Database (using new utilities): ~7 hrs vs estimated 2–3 days
- **Key insight:** Tech debt first in sprint — shared utilities built early accelerate all feature work
