# 🧹 Cleanup + Altar Setup Guide Sprint

**Sprint Start:** February 25, 2026  
**Sprint Goal:** Polish codebase with JSDoc documentation + Build Altar Setup Guide tool  
**Estimated Duration:** 10-12 hours  
**Sprint Type:** 20% Tech Debt (Cleanup) + 80% New Feature

---

## 🎯 Why This Sprint?

**Strategic Value:**
- ✅ JSDoc documentation improves maintainability for all shared utilities
- ✅ Altar Setup Guide fills a practical gap (physical sacred space design)
- ✅ Combines quick wins (cleanup) with valuable new tool
- ✅ Perfect finale sprint before shipping v1.0

**80/20 Rule:**
- **20% Tech Debt:** JSDoc comments for shared utilities (~2-3 hours)
- **80% New Feature:** Altar Setup Guide (~7-9 hours)

---

## 📋 Sprint Tasks

### Task 1: Tech Debt - JSDoc Documentation (~2-3 hours)

**Goal:** Add comprehensive JSDoc comments to all shared JavaScript utilities

**Files to Document:**
- [ ] `js/theme-manager.js` - Theme switching and localStorage
- [ ] `js/filter-utils.js` - Search and filtering utilities (5 functions)
- [ ] `js/canvas-utils.js` - Canvas initialization and drawing (4 functions)
- [ ] `js/pdf-utils.js` - PDF export utilities (4 functions)
- [ ] `js/nav-menu.js` - Global navigation menu
- [ ] `js/keyboard-nav.js` - Keyboard navigation for card grids

**JSDoc Pattern:**
```javascript
/**
 * Filters an array of items based on multiple filter criteria
 * @param {Array} items - Array of items to filter
 * @param {Object} filters - Object with filter key-value pairs
 * @param {Object} propertyMap - Maps filter keys to item property accessors
 * @returns {Array} Filtered array of items
 * @example
 * const filtered = filterItems(crystals, {chakra: 'Heart'}, {chakra: (c) => c.chakra});
 */
function filterItems(items, filters, propertyMap) { ... }
```

**Benefits:**
- Easier onboarding for future developers
- Better IDE autocomplete and type hints
- Self-documenting code
- Professional codebase quality

---

### Task 2: New Feature - Altar Setup Guide (~7-9 hours)

**Goal:** Build a comprehensive altar design and setup tool

**Core Features:**
- **Element Placement Guide** - Traditional cardinal directions, center placement
- **Tool Correspondences** - What tools go where and why (athame, chalice, wand, pentacle)
- **Seasonal Altar Guide** - Sabbat-specific setups with color/herb/crystal recommendations
- **Layout Templates** - 4-6 pre-designed altar layouts (beginner, eclectic, traditional, etc.)
- **Interactive Planner** - Drag-and-drop altar design (canvas or grid-based)
- **Photo Gallery** - Example altar photos for inspiration (inline base64 or placeholder)
- **Checklist** - Essential vs. optional tools, budget-friendly alternatives

**Data Structure:**
```javascript
const ALTAR_LAYOUTS = [
    {
        name: 'Traditional Wiccan',
        difficulty: 'beginner',
        description: '...',
        elements: {
            north: {tool: 'Pentacle', element: 'Earth', items: ['Salt', 'Stones']},
            east: {tool: 'Athame', element: 'Air', items: ['Incense', 'Feather']},
            south: {tool: 'Wand', element: 'Fire', items: ['Candles', 'Matches']},
            west: {tool: 'Chalice', element: 'Water', items: ['Water Bowl', 'Shells']},
            center: {tool: 'Altar Cloth', items: ['Goddess/God figures', 'Offering bowl']}
        },
        seasonalTips: '...',
        budgetAlternatives: {...}
    }
];

const ALTAR_TOOLS = [
    {
        name: 'Athame',
        element: 'Air',
        direction: 'East',
        purpose: 'Directing energy, casting circles',
        essential: true,
        alternatives: ['Kitchen knife', 'Wand', 'Finger'],
        care: '...',
        correspondences: {...}
    }
];
```

**UI Sections:**
1. **Intro & Philosophy** - What is an altar, why create one
2. **Element Placement Guide** - Visual diagram with explanations
3. **Essential Tools Database** - Filterable list with correspondences
4. **Seasonal Setups** - Sabbat-specific altar guides (links to Sabbat Calendar)
5. **Layout Templates** - Browse pre-designed setups
6. **Custom Planner** (Phase 2 - optional) - Interactive drag-and-drop builder
7. **Photo Gallery** - Inspiration examples

**Implementation Plan:**
- **HTML** (~120 lines) - Sections, filters, grid layouts
- **JavaScript** (~800 lines) - Data arrays, filtering, rendering
- **CSS** (~500 lines) - Card layouts, element direction visuals, responsive
- **Reuses:** filter-utils.js, expandable-card.css, theme system, keyboard-nav.js

**Estimated Breakdown:**
- Data research & structure: 2 hours
- HTML/JS implementation: 3-4 hours  
- CSS styling: 2 hours
- Testing & polish: 1 hour

**Nice-to-Have (if time permits):**
- Canvas-based altar planner (drag items onto altar surface)
- Photo upload for personal altar documentation
- Printable altar setup checklist

---

## 🔄 Development Order

**Phase 1: Tech Debt (Hours 1-3)**
1. Add JSDoc to filter-utils.js (30 min)
2. Add JSDoc to canvas-utils.js (30 min)
3. Add JSDoc to pdf-utils.js (30 min)
4. Add JSDoc to theme-manager.js (20 min)
5. Add JSDoc to nav-menu.js (30 min)
6. Add JSDoc to keyboard-nav.js (30 min)

**Phase 2: Altar Setup Guide - Data (Hours 4-5)**
7. Research altar traditions and tool correspondences
8. Define data structure (ALTAR_LAYOUTS, ALTAR_TOOLS, SEASONAL_SETUPS)
9. Create comprehensive data arrays (10-15 layouts, 15-20 tools)

**Phase 3: Altar Setup Guide - Implementation (Hours 6-9)**
10. Create HTML structure with all sections
11. Implement JavaScript rendering and filtering
12. Add CSS styling with element direction visuals
13. Integrate shared utilities (filter-utils, expandable-card)

**Phase 4: Testing & Polish (Hours 10-12)**
14. Test all 6 themes
15. Mobile responsive testing
16. Add ARIA labels for accessibility
17. Update homepage and nav-menu
18. Update PWA cache (sw.js)
19. Test offline functionality
20. Update documentation (CLAUDE.md, ROADMAP.md)

---

## ✅ Definition of Done

**Tech Debt:**
- [ ] All 6 shared JS files have comprehensive JSDoc comments
- [ ] All functions documented with @param, @returns, @example
- [ ] No linting warnings in documented files

**Altar Setup Guide:**
- [ ] 10+ altar layout templates with full data
- [ ] 15+ altar tool entries with correspondences
- [ ] Seasonal altar guide for all 8 sabbats
- [ ] Search and filter functionality working
- [ ] All 6 themes styled correctly
- [ ] Mobile responsive (768px, 480px breakpoints)
- [ ] ARIA labels for accessibility
- [ ] Print-friendly CSS works
- [ ] Added to homepage and nav-menu
- [ ] PWA cache updated (sw.js)
- [ ] Tested offline

**Documentation:**
- [ ] CLAUDE.md updated with Altar Setup Guide patterns
- [ ] ROADMAP.md updated with completion metrics
- [ ] Sprint archived (SPRINT.md → SPRINT-YYYY-MM-DD.md)

---

## 🎯 Success Metrics

- **Codebase Quality:** All shared utilities professionally documented
- **New Value:** Practical tool for physical sacred space design
- **Reusability:** Uses 100% existing patterns (zero new infrastructure)
- **Velocity:** Complete in 10-12 hours
- **Ready to Ship:** v1.0 launch-ready with 13 tools

---

**Note:** This is the final sprint before v1.0 launch! 🚀
