# 🔥 Sprint: User Power Improvements

**Sprint Goal:** Meaningfully upgrade two tools that users interact with most — save sigil history so nothing is lost, and dramatically expand the crystal reference database.

**Estimated effort:** ~10-12 hours
**Focus:** 100% user-facing improvements, no cross-tool tech debt

---

## 1. Sigil Generator — History Gallery (~3 hrs)

**What:** Auto-save the last 10 generated sigils to localStorage as PNG thumbnails. Show a scrollable gallery below the canvas. Click any thumbnail to reload it, trash icon to delete.

**Why:** Users currently lose every sigil the moment they generate a new one. This is the most common frustration with canvas tools.

**SVG export note:** Descoped — the generator uses 14 canvas algorithms with baked-in randomization. Re-implementing in SVG is a full rewrite (~20+ hrs). PNG history solves the core pain immediately.

**Implementation:**
- localStorage key: `'mystical-path-sigil-history'`
- Store array of `{ dataUrl, word, algorithm, timestamp }` objects (max 10)
- Auto-save on every `generateSigil()` call
- Gallery section: thumbnail grid, click → `ctx.drawImage()` to reload, delete button per item
- "Clear History" button
- Empty state message

**Tasks:**
- [ ] Read sigil HTML to understand existing layout
- [ ] Add history gallery section to `html/sigil-maker.html`
- [ ] Add save/load/delete history functions to `js/sigil-script.js`
- [ ] Add gallery CSS to `css/sigil-styles.css`
- [ ] Test: generate 10+ sigils, verify oldest drops off, verify reload works

---

## 2. Crystal Database — Expand to 50 crystals (~5-6 hrs)

**What:** Double the crystal count from 24 → 50 by adding 26 new crystals following the existing 15-field schema.

**Existing 24:** Clear Quartz, Amethyst, Rose Quartz, Black Tourmaline, Citrine, Selenite, Labradorite, Carnelian, Moonstone, Hematite, Lapis Lazuli, Green Aventurine, Obsidian, Tiger's Eye, Amazonite, Garnet, Fluorite, Turquoise, Sodalite, Malachite, Pyrite, Rhodonite, Smoky Quartz, Aquamarine

**26 to add:** Blue Lace Agate, Howlite, Lepidolite, Sunstone, Red Jasper, Orange Calcite, Celestite, Shungite, Kyanite, Peridot, Bloodstone, Unakite, Chrysocolla, Prehnite, Iolite, Larimar, Charoite, Snowflake Obsidian, Apache Tears, Blue Apatite, Pink Calcite (Mangano Calcite), Dalmatian Jasper, Moldavite, Seraphinite, Peacock Ore, Labradorite Palmstone (skip — already have) → use **Pietersite**

**Schema (all fields required):**
`name`, `emoji`, `color[]`, `chakra[]`, `element`, `zodiac[]`, `mohs_hardness`, `intentions[]`, `properties`, `metaphysical`, `physical_healing`, `emotional_healing`, `cleansing[]`, `charging[]`, `uses[]`, `affirmation`, `care_tips`

**Tasks:**
- [ ] Read end of crystal-script.js to find insertion point
- [ ] Write all 26 crystal objects (biggest time investment — do field-complete upfront)
- [ ] Update ROADMAP.md count (25 → 50)
- [ ] Test: verify all new cards render, filters work, no broken fields

---

## 3. Crystal Database — Notes Field (~2 hrs)

**What:** Let users write personal notes on each crystal in their collection. Stored in localStorage. Shown in the collection mini-cards.

**Why:** "I got this at the Portland market in 2024" or "works best during full moon rituals" — these personal associations are what make a collection meaningful.

**Implementation:**
- Extend `myCollection` to `{ owned: [], wishlist: [], notes: {} }`
- Notes stored as `{ 'Crystal Name': 'note text' }`
- In the full card: show a textarea below collection buttons (only visible when crystal is owned)
- Auto-save on blur (no save button needed)
- In collection mini-cards: show note preview if note exists
- Load existing notes on page init (backward-compatible with existing localStorage data)

**Tasks:**
- [ ] Read crystal-script.js collection functions to understand current localStorage structure
- [ ] Extend myCollection schema and saveCollection/loadCollection
- [ ] Add notes textarea to createCrystalCard() (only shown when owned)
- [ ] Add note preview to collection mini-cards in renderCollection()
- [ ] Add CSS for notes textarea and preview
- [ ] Test: add note, reload page, verify persistence; test existing collections still work

---

## 📋 Ordered Task Checklist

### Phase 1: Sigil History
- [x] Read sigil-maker.html layout
- [x] Add history gallery HTML
- [x] Add history JS functions (save, load, delete, render gallery)
- [x] Add gallery CSS
- [ ] Test

### Phase 2: Crystal Expansion
- [x] Find insertion point in crystal-script.js
- [x] Write all 26 crystal data objects
- [ ] Test filters and rendering

### Phase 3: Crystal Notes
- [x] Extend collection localStorage schema
- [x] Add notes textarea to card + collection mini-cards
- [x] Add CSS
- [ ] Test persistence and backward compat
