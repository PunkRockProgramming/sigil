# SPRINT: Spell Builder & Grimoire MVP

**Week of:** February 26, 2026  
**Status:** ✅ COMPLETE

---

## Sprint Goal

**"Spell Builder MVP - Create, Save, and View Personal Spells"**

Build a functional spell creation tool that allows users to craft custom spells using existing correspondences (herbs, crystals, moon phases) and save them to a personal grimoire.

**Why This Sprint:**
- Combines all existing databases (herbs, crystals, moon phases)
- High user engagement potential (personal grimoire)
- Establishes pattern for complex multi-step forms
- Reuses established patterns extensively

---

## 🎯 Sprint Breakdown (80/20 Rule)

### 80% Feature Work - Spell Builder & Grimoire (~16-20 hours)

**Priority: HIGH** — This is the main deliverable

**Problem:**  
Users want to create personalized spells using correspondences from existing databases but have no tool to combine them, save them, or reference them later.

**Solution:**  
Build a spell creation wizard with:
1. Multi-step form for spell components
2. Ingredient selection from existing databases
3. Timing recommendations (moon phases, sabbats)
4. Personal grimoire with saved spells
5. Filtering and search for saved spells

**Features:**

**1. Spell Creation Form** (6-8 hours)
- [x] Intent/purpose input (text + dropdown categories: Love, Protection, Prosperity, Healing, etc.)
- [x] Moon phase selector (integrate with moon tracker phases)
- [x] Sabbat/timing selector (optional - "Best performed during..." from sabbat data)
- [x] Ingredient selection:
  - [x] Herbs (from herbal database) - multi-select checkboxes
  - [x] Crystals (from crystal database) - multi-select checkboxes
  - [x] Candle colors (dropdown with correspondences)
- [x] Instructions/ritual steps (textarea)
- [x] Notes field (textarea for personal observations)
- [x] Success/results field (filled in after casting)

**2. Grimoire Storage** (2-3 hours)
- [x] Save spells to localStorage with unique IDs
- [x] Data structure: `{ id, name, intent, category, moonPhase, sabbat, herbs, crystals, candleColor, instructions, notes, results, dateCreated, lastCast }`
- [x] Edit existing spells
- [x] Delete spells with confirmation
- [x] Import/Export grimoire as JSON (backup)

**3. Spell Display** (4-5 hours)
- [x] Card-based grid layout (like crystal/herb databases)
- [x] Expandable spell cards showing:
  - Spell name & intent
  - Best timing (moon phase, sabbat)
  - Ingredients (herbs, crystals) with emoji icons
  - Full instructions
  - Notes & results
- [x] "Cast Spell" button to record casting date
- [x] Last cast date display

**4. Filtering & Search** (3-4 hours)
- [x] Filter by intent category
- [x] Filter by moon phase
- [x] Filter by ingredient (search spells using specific herb/crystal)
- [x] Search by spell name
- [x] "Show All" / "My Favorites" toggle
- [x] Result count display

**5. UI/UX Polish** (1-2 hours)
- [x] Form validation (required fields)
- [x] Empty state ("No spells yet - create your first!")
- [x] Success messages ("Spell saved to grimoire!")
- [x] Confirm delete modal
- [x] Mobile responsive form layout

**Tasks:**
- [x] Create `html/spell-builder.html` with form + grimoire sections
- [x] Create `js/spell-builder-script.js` with spell creation logic
- [x] Create `css/spell-builder-styles.css` with 6 theme variants
- [x] Import herb/crystal data for ingredient selection
- [x] Implement localStorage save/load/delete
- [x] Build filtering system using filter-utils.js
- [x] Add to homepage + remove from "Coming Soon"
- [x] Test all 6 themes
- [x] Test mobile responsive layout

**Impact:**
- Users can create personalized spells using app's correspondences
- Personal grimoire builds value over time (collection tracking++)
- Establishes multi-step form pattern for future tools
- Reuses ~60% of existing code (databases, filters, storage)

**Estimated Time:** 16-20 hours

---

### 20% Technical Debt - ARIA Labels for Accessibility (~3-4 hours)

**Priority: HIGH** — Accessibility is important for inclusivity

**Problem:**  
Existing tools lack ARIA labels, making them difficult for screen reader users to navigate. Poor accessibility excludes users with visual impairments.

**Solution:**  
Add semantic ARIA labels to 3 key tools as pilot implementation:
1. **Moon Tracker** - Phase info, rituals, calendar navigation
2. **Crystal Database** - Filter controls, crystal cards, collection buttons
3. **Herbal Database** - Safety warnings, filter controls, herb cards

**Tasks:**
- [x] Research WCAG 2.1 guidelines for ARIA labels
- [x] Add `aria-label` to interactive elements (buttons, inputs, dropdowns)
- [x] Add `aria-describedby` for form hints and errors
- [x] Add `role` attributes where semantic HTML isn't sufficient
- [x] Add `aria-live` regions for dynamic content updates (filter results)
- [x] Add `.sr-only` utility class for screen-reader-only headings
- [x] Test with VoiceOver (macOS screen reader)
- [x] Document ARIA pattern in CLAUDE.md for future tools

**Impact:**
- Improved accessibility for screen reader users
- WCAG 2.1 compliance step
- Establishes pattern for remaining tools
- Inclusive design benefits all users

**Estimated Time:** 3-4 hours

---

## Sprint Metrics

**Estimated:** 19-24 hours total (split across ~1 week)  
**Actual:** ~8-11 hours total

**Breakdown:**
- Spell Builder MVP: ~6-8 hours (vs. estimated 16-20 hours)
- ARIA Labels: ~2-3 hours (vs. estimated 3-4 hours)

**Why faster:**
- Reused ~80% of established patterns (filter-utils.js, expandable-card.css, theme system, localStorage)
- Data structure defined upfront (no mid-development refactoring)
- ARIA pattern more straightforward than expected
- Copied CSS theme variables from existing tools (no undefined variable bugs)
- Development order followed religiously (HTML → JS data → JS functions → CSS)

**Learnings:**
- Multi-step forms easier than expected with established input patterns
- Ingredient selection (20 herbs + 20 crystals) manageable with checkbox grid
- Export/Import JSON is trivial with localStorage pattern
- ARIA labels ~15-20 per tool for good screen reader support
- `aria-live="polite"` critical for dynamic content (filter results, counts)
- `role="alert"` perfect for safety warnings (immediate announcement)
- `.sr-only` utility class enables semantic structure without visual clutter
- Shared utilities continue to accelerate development (filter-utils saved ~4-5 hours)
- Tech debt investment pays immediate dividends (ARIA pattern documented → reusable)

---

## Notes / Blockers

**Testing Checklist (Manual):**
- [x] Test Theme 1: Chaos Magick (default)
- [x] Test Theme 2: Shadow Work  
- [x] Test Theme 3: Golden Dawn
- [x] Test Theme 4: Green Witchcraft
- [x] Test Theme 5: Blood Moon
- [x] Test Theme 6: Lunar Tides
- [x] Create a test spell with all fields filled
- [x] Save spell to grimoire
- [x] Verify spell appears in grimoire
- [x] Test spell expansion/collapse
- [x] Test "Cast Spell" button (updates lastCast date)
- [x] Test Edit spell functionality
- [x] Test Delete spell with confirmation
- [x] Test Search by spell name
- [x] Test Filter by intent
- [x] Test Filter by moon phase
- [x] Test "Clear Filters" button
- [x] Test Export grimoire (downloads JSON)
- [x] Test Import grimoire (merges spells)
- [x] Test mobile responsive layout (< 768px)
- [x] Test keyboard navigation on spell cards

**Line Count:**
- HTML: 243 lines
- JS: 661 lines
- CSS: 776 lines
- **Total: 1,680 lines**

**ARIA Labels Completed:**
- **Moon Tracker:** Added 15+ ARIA attributes (role="region", role="search", role="status", role="navigation", role="list", aria-label, aria-live="polite", aria-labelledby)
- **Crystal Database:** Added 12+ ARIA attributes (role="search", role="tablist", role="tab", role="tabpanel", aria-label, aria-live="polite", aria-selected, aria-controls)
- **Herbal Database:** Added 12+ ARIA attributes (role="alert", role="search", role="tablist", role="tab", role="tabpanel", aria-label, aria-live="polite")
- **Shared CSS:** Added `.sr-only` utility class for screen-reader-only content (shared-theme.css)
- **CLAUDE.md:** Documented comprehensive ARIA pattern (+95 lines)

**Impact:**
- 3 tools now WCAG 2.1 compliant for screen readers
- Dynamic content announces changes (filter results, phase info)
- Navigation controls clearly labeled
- Tabs properly structured for keyboard + screen reader users
- Safety warnings use `role="alert"` for immediate announcement
- Pattern documented for all future tools

---

## Deferred to Future Sprints

**NOT included in Sprint 1:**
- Spell template library (pre-made spells)
- Export to PDF
- Spell sharing (URL encoding)
- Advanced filtering (multiple ingredients AND/OR logic)
- Spell tags/categories beyond basic intent
- Ritual timer integration
- Astrological timing (planetary hours)
- Ingredient substitution suggestions

These features will be considered for Sprint 2 or later after MVP validation.
