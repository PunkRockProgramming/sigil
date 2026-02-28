# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Running the App

No build process. Open directly in browser:
```bash
open index.html
open html/sigil-maker.html
python3 -m http.server 8000  # live reload
```

## Sprint Workflow

Three files manage development: **CLAUDE.md** (rules), **ROADMAP.md** (source of truth), **SPRINT.md** (active workspace).

### Sprint Planning
1. Read `CLAUDE.md` and `ROADMAP.md` in full
2. Select tasks — 80% features, 20% tech debt; tech debt first
3. Create `SPRINT.md` with goal, rationale, ordered checklist
4. Mark selected items `[in-sprint]` in `ROADMAP.md`

### During Sprint
1. Tech debt first — builds foundation for feature work
2. Follow `SPRINT.md` checklist top to bottom
3. Per task: mark `[in-sprint]` → implement (HTML → data → functions → CSS) → check off → mark `[done]`
4. Run pre-launch checklist before marking any tool complete

### Sprint Close
1. Update `ROADMAP.md` — move to Completed Tools, add metrics, document learnings
2. Archive `SPRINT.md` → `sprints/SPRINT-YYYY-MM-DD.md`
3. Update `CLAUDE.md` — add new patterns (keep concise; code examples go in `docs/patterns.md`)
4. Git commit

### General Rules
- Always read relevant files before making changes
- `ROADMAP.md` is source of truth for features and status
- Status tags: `[ ]` not started · `[in-progress]` selected · `[in-sprint]` active · `[done]` complete
- When uncertain about a pattern, check `docs/patterns.md` first

---

## Architecture

Static web pages — pure HTML5, CSS3, vanilla JS. Zero dependencies, no build step. Runs offline via `file://`.

### File Layout
```
index.html              # Homepage / tool selector
manifest.json           # PWA metadata
sw.js                   # Service worker (cache-first)
offline.html            # Offline fallback
ROADMAP.md
CLAUDE.md
docs/
  patterns.md           # Code examples, ARIA reference, pattern details
  velocity.md           # Sprint history and timing data
html/                   # One file per tool
css/
  shared-theme.css      # 6 themes as CSS custom properties
  expandable-card.css   # Shared expand/collapse behavior
  nav-menu.css          # Global nav panel
  print.css             # Print styles (load last)
  homepage-styles.css
  [tool]-styles.css     # Per-tool styles
js/
  theme-manager.js      # Theme switching + localStorage
  nav-menu.js           # Global nav (update TOOLS array for new tools)
  filter-utils.js       # filterAndSearch, clearFilters, updateResultCount
  canvas-utils.js       # initCanvas, clearCanvas, exportCanvasPNG, addDrawingEvents
  keyboard-nav.js       # enableKeyboardNav for card grids
  pdf-utils.js          # downloadToolAsPDF
  profile-manager.js    # getProfile(), saveProfile() — localStorage profile (name/birthdate/tradition)
  share-utils.js        # buildShareURL(), checkShareParam(), showShareModal() — Base64 URL sharing
  [tool]-script.js      # Per-tool logic
sprints/                # Archived SPRINT files
```

### Key Constraints
- All data inline in JS files — no external JSON (preserves `file://` compatibility)
- No external dependencies, no build step
- localStorage keys must use `'mystical-path-'` prefix

### Theme System
- 6 themes: `chaos-magick`, `shadow-work`, `golden-dawn`, `green-witchcraft`, `blood-moon`, `lunar-tides`
- `shared-theme.css` defines global styles only (fonts, buttons, inputs, `.back-link`, `.sr-only`, animations)
- **Each tool CSS must define its own theme variables** — `shared-theme.css` does NOT provide `--card-bg`, `--border`, `--shadow`, etc.
- Copy theme variable block from `css/moon-styles.css` as template for new tools
- Required variables: `--primary`, `--secondary`, `--dark`, `--darker`, `--text`, `--text-secondary`, `--accent`, `--card-bg`, `--card-border`, `--input-bg`, `--shadow`, `--glow`
- Theme selector dropdown must use `id="mystical-path"` for `theme-manager.js` to bind

### Shared Utilities — When to Use
| Utility | File | Use when |
|---|---|---|
| Filter + search | `js/filter-utils.js` | Any tool with dropdowns or search |
| Expandable cards | `css/expandable-card.css` | Any card-based tool |
| Global nav | `js/nav-menu.js` + `css/nav-menu.css` | All tools (always include) |
| Keyboard nav | `js/keyboard-nav.js` | Browsable card grids |
| Canvas | `js/canvas-utils.js` | Canvas drawing or image export |
| PDF export | `js/pdf-utils.js` | Tools with exportable readings/collections |
| Print styles | `css/print.css` | All tools (always include, load last) |
| Personal profile | `js/profile-manager.js` | Read name/birthdate/tradition set in Numerology |
| Share via URL | `js/share-utils.js` | Share readings/entries as encoded URL params |

See `docs/patterns.md` for usage examples and API details.

### Responsive Breakpoints
- `768px` — tablet (grid collapses)
- `480px` — mobile (single column, touch sizing)

---

## Adding a New Tool

1. **`html/new-tool.html`** — Copy `crystal-database.html` as structural template
   - CSS load order: `shared-theme.css` → `tool-styles.css` → `nav-menu.css` → `print.css`
   - Script load order: `theme-manager.js` → `nav-menu.js` → `pdf-utils.js`? → `filter-utils.js`? → `share-utils.js`? → `tool-script.js`
   - Required in `<head>`: `<link rel="manifest" href="/manifest.json">` + theme-color meta
   - Required before `</body>`: service worker registration snippet

2. **`css/new-tool-styles.css`** — Copy `moon-styles.css` theme variable block as starting point
   - Define all 6 theme variants before any other CSS
   - Test theme switching before proceeding to layout

3. **`js/new-tool-script.js`** — Inline data arrays, use `filter-utils.js` if filtering needed

4. **Update PWA:** bump `CACHE_NAME` version in `sw.js`, add 3 entries to `PRECACHE_ASSETS`, add link to `offline.html`

5. **Update nav:** add tool to `TOOLS` array in `nav-menu.js`

6. **Update `index.html`:** add tool card, remove from Coming Soon

7. **Update `ROADMAP.md`:** mark done, add metrics

**Golden Rule:** Never write theme variables from scratch — always copy from an existing tool CSS file.

---

## Pre-Launch Checklist

**CSS & Theming:**
- [ ] Theme variables defined for all 6 themes at top of CSS file
- [ ] All 6 themes render correctly (test theme switcher)
- [ ] No undefined CSS variables (check browser console)
- [ ] Glassmorphism cards use `backdrop-filter: blur(10px)`
- [ ] Responsive breakpoints work (768px, 480px)

**JavaScript:**
- [ ] `filter-utils.js` imported if tool has search/filtering
- [ ] localStorage keys use `'mystical-path-'` prefix
- [ ] No console errors on page load
- [ ] Data arrays are inline (no external JSON)

**HTML:**
- [ ] Theme selector has `id="mystical-path"`
- [ ] Back link to `../index.html` exists
- [ ] `nav-menu.css` before `print.css`; `nav-menu.js` after `theme-manager.js`
- [ ] `print.css` is last stylesheet
- [ ] PWA manifest link present
- [ ] Service worker registration script before `</body>`
- [ ] Script load order correct (see Adding a New Tool above)

**PWA:**
- [ ] Tool added to `PRECACHE_ASSETS` in `sw.js`
- [ ] `CACHE_NAME` version bumped in `sw.js`
- [ ] Tool link added to `offline.html`
- [ ] Offline test: tool loads from cache with no network

**PDF Export (if applicable):**
- [ ] `pdf-utils.js` loaded before tool script
- [ ] Button uses `downloadToolAsPDF('Tool Name', 'content-type')`
- [ ] Button has `aria-label`
- [ ] Filename format correct: `{tool}-{type}-{YYYY-MM-DD}.pdf`
- [ ] Print preview shows clean formatting

**Integration:**
- [ ] Tool card added to `index.html`
- [ ] Tool added to `TOOLS` array in `nav-menu.js`
- [ ] Removed from Coming Soon
- [ ] `ROADMAP.md` updated

**Testing:**
- [ ] Works via `file://` protocol
- [ ] Works via localhost
- [ ] Mobile layout correct
- [ ] All interactive elements functional

---

## Development Best Practices

### Build Order (always follow this sequence)
1. HTML structure — complete semantic layout
2. JavaScript data — full data object schema upfront (all fields, even placeholders)
3. JavaScript functions — filtering, rendering, interactions
4. CSS styling — theme variables and layout last

### Data Design
Define ALL fields upfront — avoid adding fields mid-development. Better to have unused fields than to refactor.
See `docs/patterns.md` for example data object schemas.

### 80/20 Rule
- 80% sprint time on user-facing features
- 20% on tech debt / shared utilities
- Always do tech debt first in sprint — it accelerates everything after

### Safety-Critical Content
Three-tier warning system for herbs, crystals, rituals:
- ✓ Safe — green
- ⚠️ Caution — yellow/orange, bold
- 🔴 Toxic — red, pulsing animation, prominent placement

Always include page-level disclaimer + per-item safety badges + detailed notes in expandable section.

### ARIA & Accessibility
Add from the start — retrofitting is 3× slower. Key patterns: `role="search"` on filter sections, `aria-live="polite"` on result counts and dynamic regions, `role="tablist/tab/tabpanel"` for tabs, `role="alert"` for safety warnings.
See `docs/patterns.md` for full ARIA reference.

### "X of the Day" Pattern
Store `{date, name}` in localStorage, compare ISO date string. See `crystal-script.js` or `rune-script.js` for reference.

### Collection Tracking Pattern
`owned/wishlist` arrays in localStorage. See `crystal-script.js` for reference implementation.

### Dual-Tab Layout
For tools with two content types. See `candle-magic.html` + `candle-magic-script.js` as reference.
