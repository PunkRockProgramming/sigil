# 🔮 Sprint: Witchy Weather + Navigation Menu

**Sprint Start:** February 26, 2026  
**Sprint End:** February 26, 2026  
**Estimated Duration:** 8-10 hours  
**Actual Duration:** ~7 hours ✅ AHEAD OF SCHEDULE  
**Sprint Goal:** Add global navigation menu + build weather correspondences tool

**STATUS: ✅ COMPLETE**

---

## 🎉 Sprint Results

**Completed:**
✅ Global Navigation Menu (1 hour - faster than 2h estimate)
- js/nav-menu.js: 310 lines
- css/nav-menu.css: 372 lines
- Integrated into all 11 tools + homepage
- Full keyboard navigation, focus trapping, ARIA labels
- 6 theme variants, mobile responsive
- Documented in CLAUDE.md

✅ Witchy Weather Tool (~6 hours)
- 1,432 lines total (141 HTML, 616 JS, 675 CSS)
- 8 complete weather correspondences
- OpenWeatherMap API integration + demo mode
- Moon phase combination suggestions (64 unique combos)
- All 6 themes, ARIA accessible, mobile responsive

**Key Learnings:**
- Tech debt first = massive time savings (nav menu took 1h vs 2h estimated)
- Shared navigation pattern dramatically improves UX across entire app
- API integration simpler than expected (OpenWeatherMap straightforward)
- Reusing moon phase calculation from moon-tracker saved significant time
- 80/20 sprint structure continues to work perfectly

---

## 📋 Sprint Composition

**80/20 Rule:**
- **20% Tech Debt** (~2 hours actual: ~1 hour): Global hamburger navigation menu
- **80% Features** (~6-8 hours actual: ~6 hours): Witchy Weather tool

**Rationale:**
- Navigation menu improves UX across all 11 existing tools (high ROI)
- Witchy Weather is last remaining simple tool in backlog
- Both reuse established patterns (shared CSS, API integration)
- Hamburger menu first = all tools get better navigation immediately

---

## 🔨 Tech Debt (20% - ~2 hours)

### Hamburger Navigation Menu

**Problem:**  
Users must return to homepage to navigate between tools. No quick way to jump between tools.

**Solution:**  
Global slide-out navigation menu accessible from all tool pages.

**Features:**
- Fixed position hamburger icon (☰) in top-left corner
- Slide-out menu showing all 11 tools with emojis
- Smooth CSS transitions (slide from left)
- Close on tool selection or outside click
- localStorage to remember open/closed preference
- All 6 theme variants (menu background matches theme)
- Mobile responsive (always visible)
- ARIA labels for accessibility
- Keyboard navigation support (Escape to close, Tab to navigate)

**Implementation Plan:**

**1. Create Shared Navigation Component** (~1 hour)
- [x] Create `js/nav-menu.js` (shared utility)
  - `initNavMenu()` - Setup DOM, event listeners
  - `toggleMenu()` - Open/close with animation
  - `closeMenu()` - Close via outside click or Escape key
  - `saveMenuState()` - localStorage persistence
  - `loadMenuState()` - Restore state on page load
- [ ] Create `css/nav-menu.css` (shared stylesheet)
  - Fixed hamburger button (top-left, z-index: 1000)
  - Slide-out menu panel (300px width, full height)
  - Tool list styling (grid of tool links with icons)
  - CSS transitions (transform: translateX(-100%) to 0)
  - All 6 theme variants
  - Mobile responsive (smaller menu on mobile)
  - Focus states for keyboard navigation

**2. Integrate Into All Tools** (~1 hour)
- [ ] Update all 11 HTML files to include:
  ```html
  <link rel="stylesheet" href="../css/nav-menu.css">
  <script src="../js/nav-menu.js"></script>
  ```
- [ ] Add menu markup to each tool (or generate dynamically in JS)
- [ ] Test on 3 tools (Sigil, Moon, Crystal)
- [ ] Verify theme switching works with menu open
- [ ] Test keyboard navigation (Tab, Escape)
- [ ] Test mobile responsive behavior

**Reuses:**
- Theme system (CSS custom properties)
- localStorage patterns
- ARIA patterns (role="navigation", aria-label)
- Shared CSS/JS architecture

**Expected Outcome:**
- Every tool page has quick navigation to all other tools
- Consistent UX across entire app
- Foundation for future navigation features (tool favorites, recent tools)

---

## ✨ Feature Work (80% - ~6-8 hours)

### Witchy Weather Tool

**Problem:**  
Users want to know magical correspondences for current weather conditions to align rituals with natural energies.

**Solution:**  
Weather app that shows current conditions + magical interpretations and ritual suggestions.

**Data Structure:**
```javascript
// Weather correspondences
const WEATHER_CORRESPONDENCES = {
    clear: {
        element: 'Fire',
        energy: 'Clarity, manifestation, success',
        deities: ['Apollo', 'Ra', 'Brigid'],
        correspondences: 'Gold, citrine, sunflower, frankincense',
        rituals: ['Sun magic', 'Success spells', 'Confidence work'],
        moon_combos: {
            full: 'Peak power for manifestation',
            new: 'Plant seeds of intention'
        }
    },
    rain: {
        element: 'Water',
        energy: 'Cleansing, emotional healing, renewal',
        deities: ['Mazu', 'Tlaloc', 'Tefnut'],
        correspondences: 'Silver, moonstone, lotus, myrrh',
        rituals: ['Cleansing rituals', 'Emotional release', 'Banishing'],
        moon_combos: {
            waning: 'Perfect for releasing and letting go',
            dark: 'Deep shadow work and transformation'
        }
    },
    // ... 8-10 weather types total
};
```

**Features:**
- [ ] **Weather Data** (~1-2 hours)
  - Fetch from OpenWeatherMap API (free tier)
  - User location input (city name or geolocation)
  - Display current conditions (temp, description, icon)
  - Save last location to localStorage
  - Handle API errors gracefully
  
- [ ] **Magical Correspondences** (~2-3 hours)
  - 8-10 weather type objects (clear, rain, clouds, snow, wind, fog, storm, etc.)
  - Element associations (rain=Water, sun=Fire, wind=Air, snow=Earth)
  - Deity correspondences for each weather type
  - Ritual suggestions based on conditions
  - Moon phase + weather combinations (e.g., "Rain during waning moon is perfect for releasing")
  - Color, crystal, herb correspondences
  - Energy/magical properties
  
- [ ] **Current Conditions Display** (~1 hour)
  - Large weather icon with current temp
  - Location and timestamp
  - Element badge (color-coded)
  - Expandable details card with all correspondences
  - "Refresh" button to update conditions
  
- [ ] **Ritual Suggestions** (~1 hour)
  - Auto-generate suggestions based on:
    * Current weather type
    * Current moon phase (integrate with moon-tracker logic)
    * Time of day (sunrise, sunset, noon, midnight)
  - Display 3-5 suggested practices
  - Examples: "Rain + waning moon + evening = perfect for releasing old patterns"
  
- [ ] **CSS Styling** (~1-2 hours)
  - Copy theme variables from existing tool
  - Weather icon display (large, prominent)
  - Correspondence cards (glassmorphism)
  - Element badges (color-coded: Fire=red, Water=blue, Air=yellow, Earth=green)
  - Location input styling
  - All 6 theme variants
  - Mobile responsive

**Implementation Order:**
1. HTML structure (location input, weather display, correspondences section)
2. Data: Create 8-10 WEATHER_CORRESPONDENCES objects
3. JavaScript: API integration, data fetching, error handling
4. JavaScript: Display logic, moon phase integration
5. CSS: All 6 themes, responsive design

**API Choice:**
- **OpenWeatherMap** (recommended)
  - Free tier: 1000 calls/day
  - Current weather endpoint: `api.openweathermap.org/data/2.5/weather`
  - Returns: temp, description, icon code, humidity, wind, etc.
  - No API key in repo (user provides their own or uses demo mode)

**Demo Mode:**
- If no API key, show example weather data
- "Demo Mode" banner
- Link to OpenWeatherMap to get free API key
- Instructions in tool for adding API key to localStorage

**Reuses:**
- Theme system (6 themes)
- localStorage (last location, API key)
- Card/grid layouts (correspondence cards)
- Element associations (from existing tools)
- Moon phase logic (from moon-tracker)
- ARIA patterns

**Expected Outcome:**
- Users can check current weather + magical timing
- Integration with moon phases for optimal ritual timing
- Educational (teaches weather correspondences)
- Practical (suggests rituals for current conditions)
- Works globally (any city with OpenWeatherMap coverage)

---

## 📋 Task Checklist

### Tech Debt: Navigation Menu
- [ ] Create `js/nav-menu.js` with menu logic
- [ ] Create `css/nav-menu.css` with all 6 themes
- [ ] Add menu to all 11 HTML files
- [ ] Test menu on 3 representative tools
- [ ] Verify keyboard navigation works
- [ ] Test mobile responsive behavior
- [ ] Update CLAUDE.md with navigation pattern

### Feature: Witchy Weather
- [ ] Create `html/witchy-weather.html` structure
- [ ] Create 8-10 weather correspondence objects
- [ ] Create `js/weather-script.js` with API integration
- [ ] Implement location input and saving
- [ ] Integrate moon phase calculations
- [ ] Create ritual suggestion logic
- [ ] Create `css/weather-styles.css` with all 6 themes
- [ ] Test with live API (or demo mode)
- [ ] Add to homepage (tool card)
- [ ] Update ROADMAP.md (move to completed)

### Integration & Testing
- [ ] Test navigation menu across all tools
- [ ] Test weather tool with different conditions
- [ ] Test API error handling
- [ ] Verify all 6 themes work
- [ ] Test mobile responsive on both features
- [ ] Update SPRINT.md with completion notes

---

## 🎯 Success Criteria

**Navigation Menu:**
- ✅ All 11 tools have working hamburger menu
- ✅ Menu slides smoothly with CSS transitions
- ✅ Theme-aware (matches current theme)
- ✅ Keyboard accessible (Tab, Escape)
- ✅ Mobile responsive
- ✅ State persists in localStorage

**Witchy Weather:**
- ✅ Fetches real weather data from API
- ✅ Displays 8-10 weather type correspondences
- ✅ Integrates moon phase for enhanced suggestions
- ✅ Saves last location to localStorage
- ✅ Works in demo mode without API key
- ✅ All 6 themes implemented
- ✅ Mobile responsive
- ✅ ARIA accessible

**Documentation:**
- ✅ ROADMAP.md updated with completed tool
- ✅ CLAUDE.md updated with navigation pattern
- ✅ Sprint metrics documented

---

## 📊 Estimated Velocity

**Based on Recent Sprints:**
- Simple tools: 2-3 hours (consistent)
- Shared utilities: 1-2 hours (based on filter-utils, canvas-utils)
- API integration: +1-2 hours (new pattern)

**This Sprint:**
- Navigation menu: ~2 hours (similar to keyboard-nav.js)
- Witchy Weather: ~6-8 hours (simple tool + API learning curve)
- **Total: 8-10 hours**

**Confidence:** High (established patterns + one new API integration)

---

## 🚀 Ready to Start!

**Next Action:** Start with navigation menu (tech debt first = all tools benefit immediately), then build Witchy Weather tool.
