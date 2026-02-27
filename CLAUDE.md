# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

No build process. Open `index.html` directly in a browser:

```bash
open index.html
# or open a specific tool:
open html/sigil-maker.html
```

For local development with live reload, any static file server works:

```bash
python3 -m http.server 8000
```

## Sprint Workflow

This project uses three files to manage development: **CLAUDE.md** (this file), **ROADMAP.md**, and **SPRINT.md**.

### File Responsibilities

**`CLAUDE.md` (this file)** — Practitioner guidance and project knowledge base:
- Architecture patterns and conventions
- Development best practices and velocity data
- Tool templates and reusable patterns
- Pre-launch checklist
- Sprint workflow rules (this section)

**`ROADMAP.md`** — Source of truth for all features and priorities:
- Completed tools with metrics
- Backlog organized by priority
- Technical debt tracking
- Status tags: `[ ]` not started, `[in-progress]` selected for sprint, `[in-sprint]` actively worked, `[done]` completed

**`SPRINT.md`** — Active sprint workspace (temporary):
- Current sprint goal and context
- Ordered task checklist for this sprint only
- Created during sprint planning, archived after sprint close
- Provides clean focus without backlog noise

### Sprint Planning

When starting a new sprint:

1. **Read first** — Review `CLAUDE.md` (development practices) and `ROADMAP.md` (priorities) in full
2. **Select tasks** — Choose realistic scope for 1-week sprint:
   - Apply 80/20 rule: 80% new features, 20% technical debt
   - Prioritize tech debt FIRST (builds foundation for features)
   - Consider dependencies and reuse opportunities
3. **Create `SPRINT.md`** with:
   - Sprint goal (what & why)
   - Feature work (80% effort) with rationale and reuse patterns
   - Tech debt work (20% effort) with problem/solution/impact
   - Ordered task checklist
4. **Update `ROADMAP.md`** — Mark selected items `[in-progress]`
5. **Update `CLAUDE.md`** — Note sprint goal in this section if needed

### During Sprint (Implementation)

1. **Tech debt first** — Complete all tech debt before features (accelerates feature work)
2. **Work sequentially** — Follow `SPRINT.md` checklist top to bottom
3. **For each task:**
   - Mark `[in-sprint]` in `ROADMAP.md` when starting
   - Follow development order: HTML → JS (data) → JS (functions) → CSS
   - Check off in `SPRINT.md` when complete
   - Mark `[done]` in `ROADMAP.md` when verified
4. **If blocked** — Note in `SPRINT.md`, move to next task
5. **Pre-launch checklist** — Verify before marking tool complete (see below)

### Sprint Close

After completing all sprint tasks:

1. **Update `ROADMAP.md`:**
   - Move completed tools to "Completed Tools" section with metrics
   - Update sprint section with actual results vs. estimates
   - Document learnings and velocity
2. **Archive `SPRINT.md`** — Rename to `SPRINT-YYYY-MM-DD.md` or delete
3. **Update `CLAUDE.md`** — Add any new patterns or conventions discovered:
   - New shared utilities (like filter-utils.js, expandable-card.css)
   - Reusable code patterns (Web Audio, SVG animations, localStorage patterns)
   - Technical decisions worth documenting (frequency choices, calculation methods)
   - Updated velocity data or estimation improvements
4. **Git commit** — Commit all changes with sprint summary

### General Rules

- Always read relevant files before making changes
- `ROADMAP.md` structure can evolve thoughtfully (add sections, improve organization)
- Keep `CLAUDE.md` focused on practitioner guidance, not change logs
- When uncertain, check `CLAUDE.md` patterns first

## Architecture

**Mystical Path Tools** is a collection of standalone static web pages — pure HTML5, CSS3, and vanilla JavaScript with zero dependencies or build steps. Everything runs offline via `file://` protocol.

### File Layout

```
index.html              # Homepage / tool selector
ROADMAP.md              # Source of truth: all features, priorities, status
SPRINT.md               # Active sprint workspace (temporary, archived after sprint)
CLAUDE.md               # This file: practitioner guidance and patterns
html/
  sigil-maker.html      # Sigil Generator (~3000 lines JS)
  moon-tracker.html     # Lunar Tracker (~1100 lines JS)
  rune-caster.html      # Rune Caster (~850 lines JS)
  sabbat-calendar.html  # Sabbat Calendar (~750 lines JS)
  crystal-database.html # Crystal Properties Database (~650 lines JS)
  herbal-database.html  # Herbal Correspondences Guide (~1140 lines JS)
  meditation-timer.html # Meditation Timer (~378 lines JS)
css/
  shared-theme.css      # 6 themes as CSS custom properties (30+ vars each)
  expandable-card.css   # Shared expandable card pattern (164 lines)
  homepage-styles.css
  sigil-styles.css
  moon-styles.css
  rune-styles.css
  sabbat-styles.css
  crystal-styles.css
  herbal-styles.css
  meditation-timer-styles.css
js/
  theme-manager.js         # Centralized theme switching + localStorage
  filter-utils.js          # Shared filtering/search utilities (5 functions)
  sigil-script.js
  moon-script.js
  rune-script.js
  sabbat-script.js
  crystal-script.js
  herbal-script.js
  meditation-timer-script.js
```

### Shared Theme System

All tools share a single theme system:

- **`css/shared-theme.css`** — defines 30+ CSS custom properties per theme using `[data-theme="..."]` selectors. `:root` defaults to `chaos-magick`.
- **`js/theme-manager.js`** — reads/writes `localStorage` key `'mystical-path'`, sets `data-theme` attribute on `<html>`, and wires up the dropdown.
- The theme selector dropdown **must use `id="mystical-path"`** for `theme-manager.js` to bind to it automatically.
- Every tool page loads both `css/shared-theme.css` and `js/theme-manager.js`.

The 6 themes are: `chaos-magick`, `shadow-work`, `golden-dawn`, `green-witchcraft`, `blood-moon`, `lunar-tides`.

### CSS Architecture & Theme Variables

**CRITICAL:** Tool-specific CSS files MUST define their own theme variables at the top. The `shared-theme.css` provides global styles (fonts, buttons, inputs) but does NOT provide card/component-specific variables like `--card-bg`, `--border`, `--shadow`.

**Pattern to Follow:**

Each tool CSS file should start with theme variable definitions for all 6 themes:

```css
/* Tool-Specific Theme Variables */
:root {
    --primary: #8b5cf6;
    --secondary: #6366f1;
    --text: #e2e8f0;
    --text-secondary: #94a3b8;
    --accent: #a78bfa;
    --background: #0f0d29;
    --card-bg: rgba(139, 92, 246, 0.1);
    --border: rgba(139, 92, 246, 0.3);
    --shadow: rgba(139, 92, 246, 0.3);
    /* Add other needed variables */
}

[data-theme="shadow-work"] {
    --primary: #4a5568;
    /* ... repeat all variables with shadow-work colors */
}

/* Repeat for all 6 themes */
```

**Reference Files:**
- `css/moon-styles.css` — Good example (defines all theme vars)
- `css/crystal-styles.css` — Good example (defines all theme vars)
- `css/herbal-styles.css` — Good example (defines all theme vars)

**Common Mistake:** Using undefined variables like `var(--bg-primary)`, `var(--accent-primary)`, `var(--font-body)` that don't exist. Always reference an existing tool CSS file when creating a new one.

**Variables from shared-theme.css (available globally):**
- Fonts: Google Fonts import (Cinzel, MedievalSharp)
- Button/input base styles
- `.back-link` navigation style
- Responsive breakpoints
- Utility animations (`fadeIn`, `popIn`, `shimmer`)

**Per-Tool Variables (must define yourself):**
- `--card-bg`, `--card-border` (for glassmorphism cards)
- `--background`, `--border`, `--shadow` (component-specific)
- Any tool-specific colors or effects

### Shared Filter Utilities

**NEW:** As of Feb 25, 2026, filtering logic is centralized in `js/filter-utils.js`:

- **`filterItems(items, filters, propertyMap)`** — Generic multi-filter that handles both single values and arrays. Automatically skips filters set to `'all'`.
- **`searchItems(items, searchTerm, searchProperties)`** — Case-insensitive search across multiple properties.
- **`filterAndSearch(items, searchTerm, searchProperties, filters, propertyMap)`** — Combined search + filter.
- **`clearFilters(elements)`** — Resets search inputs and dropdowns to default state.
- **`updateResultCount(countElement, count, itemType)`** — Updates result count display.

**Usage Example:**
```javascript
// In tool HTML: Load filter-utils.js before tool script
<script src="../js/filter-utils.js"></script>
<script src="../js/tool-script.js"></script>

// In tool JS: Use shared utilities
const filtered = filterAndSearch(
    CRYSTALS,
    searchInput.value,
    [(item) => item.name, (item) => item.properties],  // Search in these fields
    {
        intention: intentionFilter.value,  // Filter dropdowns
        chakra: chakraFilter.value
    },
    {
        intention: (item) => item.intentions,  // Array property
        chakra: (item) => item.chakra          // Array property
    }
);
```

**Currently Used By:** Moon Tracker (rituals), Crystal Database (crystals), Herbal Database (herbs). **Use this pattern for all future tools with filtering.**

### Shared Expandable Card Pattern

**NEW:** As of Feb 26, 2026, expandable card CSS is centralized in `css/expandable-card.css`:

- **Purpose:** Provides consistent expand/collapse behavior across all tools with card-based layouts
- **Covers:** `.expand-toggle` button styles, `-details` section display logic, animations, responsive behavior
- **Works with:** Any card class ending in `-card` (`.ritual-card`, `.rune-card`, `.sabbat-card`, `.crystal-card`, `.herb-card`)

**Usage Pattern:**
```html
<!-- In tool HTML: Load expandable-card.css AFTER tool-specific CSS -->
<link rel="stylesheet" href="../css/shared-theme.css">
<link rel="stylesheet" href="../css/tool-styles.css">
<link rel="stylesheet" href="../css/expandable-card.css">

<!-- Card structure -->
<div class="tool-card">
    <div class="card-content">...</div>
    <div class="expand-toggle">Show Details</div>
    <div class="tool-details">...</div>  <!-- Hidden by default -->
</div>
```

**Tool CSS only needs to define:**
- Card-specific layout properties (grid columns, specific spacing)
- Detail section backgrounds/borders
- Any tool-specific overrides

**What expandable-card.css provides:**
- `.expand-toggle` button (all states: default, hover, active)
- Display logic for `[class*="-details"]` (hidden by default, shown when `.expanded`)
- Arrow indicators (`▼` → `▲`)
- `fadeIn` animation
- Responsive breakpoints

**Currently Used By:** Moon Tracker, Rune Caster, Sabbat Calendar, Crystal Database, Herbal Database. **Use this pattern for all future tools with expandable cards.**

### Global Navigation Menu

**NEW:** As of Feb 26, 2026, navigation menu centralized in `js/nav-menu.js` and `css/nav-menu.css`:

- **Purpose:** Consistent navigation across all 12 tools with theme-specific witchy icons
- **Benefits:** Easy access to all tools, mobile-friendly, keyboard accessible, theme-aware icons
- **Uses:** All tools + homepage

**Pattern:**
```html
<!-- In tool HTML: Load nav-menu.css BEFORE print.css, nav-menu.js AFTER theme-manager.js -->
<link rel="stylesheet" href="../css/shared-theme.css">
<link rel="stylesheet" href="../css/tool-styles.css">
<link rel="stylesheet" href="../css/nav-menu.css">
<link rel="stylesheet" href="../css/print.css">

<script src="../js/theme-manager.js"></script>
<script src="../js/nav-menu.js"></script>
<script src="../js/tool-script.js"></script>
```

**Features:**
- **Fixed navigation button** — Top-right corner, 48×48px, z-index 1001
- **Theme-specific icons** — Dynamic icons change with theme (⛤, ☽, 🪄, 🧿, 🕯️, 🔯)
- **Slide-out panel** — 320px width, full height, slides from right (translateX animation)
- **13 tool links** — All 12 tools + Home, with emoji icons
- **Current page highlight** — `.is-current` class, `aria-current="page"`
- **Overlay background** — Full screen, 70% opacity, z-index 999
- **Keyboard accessible** — Tab navigation, Escape to close, focus trapping
- **Theme-aware** — 6 complete theme variants with CSS custom properties
- **localStorage** — Persists open/closed state (default: closed)

**JavaScript (js/nav-menu.js - 345 lines):**
```javascript
// Theme-specific icon mapping
const THEME_ICONS = {
    'chaos-magick': '⛤',      // Pentacle
    'shadow-work': '☽',        // Crescent Moon
    'golden-dawn': '🪄',       // Magic Wand
    'green-witchcraft': '🧿',  // Evil Eye/Nazar
    'blood-moon': '🕯️',        // Candle
    'lunar-tides': '🔯'        // Hexagram
};

// TOOLS array defines all navigation links
const TOOLS = [
    { name: 'Home', emoji: '🏠', path: '../index.html', toolPath: './index.html' },
    { name: 'Sigil Generator', emoji: '✨', path: './sigil-maker.html' },
    // ... 12 total tools
];

// Dynamic icon update
function updateMenuIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'chaos-magick';
    const icon = THEME_ICONS[currentTheme] || '⛤';
    const hamburger = document.getElementById('nav-hamburger');
    if (hamburger) {
        hamburger.innerHTML = `<span class="nav-icon">${icon}</span>`;
    }
}

// Auto-initializes on DOMContentLoaded
function initNavMenu() {
    createMenuDOM();
    attachEventListeners();
    loadMenuState();
    highlightCurrentTool();
    updateMenuIcon();  // Set initial icon
    
    // Update icon when theme changes
    const themeSelector = document.getElementById('mystical-path');
    if (themeSelector) {
        themeSelector.addEventListener('change', updateMenuIcon);
    }
}
```

**CSS (css/nav-menu.css - 391 lines):**
- All 6 theme variants (Chaos Magick, Shadow Work, Golden Dawn, etc.)
- Icon display (`.nav-icon` with font-size, color, rotation animation)
- Slide animations (transform: translateX(100%) → 0)
- Responsive breakpoints (768px: 280px menu, 480px: 260px + smaller icon)
- Accessibility features (focus styles, prefers-reduced-motion, prefers-contrast)

**Currently Used By:** All 12 tools + homepage. **Include in all future tools for consistent navigation.**

### Web Audio API for Procedural Sound Generation

**NEW:** As of Feb 26, 2026, audio generation pattern established via Meditation Timer:

- **Purpose:** Generate calming sounds without audio files (pure JavaScript synthesis)
- **Benefits:** No external dependencies, tiny file size, customizable frequencies
- **Uses:** Meditation bells, ritual chimes, ambient sounds

**Pattern:**
```javascript
// Initialize AudioContext (do this on user interaction to avoid autoplay blocking)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Example: Singing Bowl (fundamental + harmonic)
function playSingingBowl() {
    const duration = 1.5;
    const baseFreq = 480; // A4
    
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    osc1.type = 'sine';
    osc1.frequency.value = baseFreq;
    osc2.type = 'sine';
    osc2.frequency.value = baseFreq * 2.0; // Harmonic
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    osc1.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);
    osc1.stop(audioContext.currentTime + duration);
    osc2.stop(audioContext.currentTime + duration);
}
```

**Common Frequencies:**
- **Singing Bowl:** 480 Hz (sine) + 960 Hz harmonic
- **Temple Bell:** 800 Hz (triangle wave)
- **Wind Chime:** E5-G5-B5 chord (659/784/988 Hz, staggered)
- **Om/AUM:** 136.1 Hz (sine wave, long decay)

**Currently Used By:** Meditation Timer. **Use for ritual bells, sound healing, ambient meditation sounds.**

### SVG Progress Visualization

**NEW:** As of Feb 26, 2026, circular progress pattern established via Meditation Timer:

- **Purpose:** Animated circular progress indicator using SVG
- **Benefits:** Scalable, themeable, smooth animations, no external libraries
- **Uses:** Timers, loading states, progress tracking

**Pattern:**
```html
<!-- SVG markup -->
<svg class="progress-ring" width="300" height="300">
    <circle class="progress-ring-background" cx="150" cy="150" r="135" />
    <circle class="progress-ring-circle" cx="150" cy="150" r="135" id="progressCircle" />
</svg>
```

```css
/* CSS styling */
.progress-ring-background {
    fill: none;
    stroke: var(--card-border);
    stroke-width: 8;
}

.progress-ring-circle {
    fill: none;
    stroke: var(--progress-color);
    stroke-width: 8;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: stroke-dashoffset 0.5s ease;
}
```

```javascript
// JavaScript initialization
const circle = document.getElementById('progressCircle');
const radius = 135;
const circumference = 2 * Math.PI * radius; // ≈ 848.23

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

// Update progress (0-1)
function updateProgress(progress) {
    const offset = circumference * (1 - progress);
    circle.style.strokeDashoffset = offset;
}
```

**Currently Used By:** Meditation Timer. **Use for countdown timers, loading indicators, skill/stat visualizations.**

### Keyboard Navigation for Card Grids

**NEW:** As of Feb 26, 2026, keyboard navigation centralized in `js/keyboard-nav.js` (244 lines):

- **Purpose:** Accessibility-compliant arrow key navigation for card-based tools
- **Benefits:** WCAG compliance, screen reader support, power user UX
- **Uses:** Browse card grids without mouse/touch (Moon, Sabbat, Crystal, Herbal)

**Pattern:**
```javascript
// In tool HTML: Load keyboard-nav.js before tool script
<script src="../js/keyboard-nav.js"></script>
<script src="../js/tool-script.js"></script>

// In tool JS: Initialize with grid container ID and card selector
enableKeyboardNav('grid-id', '.card-class');

// Example with options
enableKeyboardNav('crystal-grid', '.crystal-card', {
    onActivate: (card) => card.classList.toggle('expanded'), // Custom activation
    columns: 3,  // Manual column count (auto-detected if omitted)
    wrap: true   // Wrap at edges (default: true)
});
```

**Features:**
- **Arrow Keys:** Navigate between cards (up/down/left/right)
- **Enter/Space:** Expand/collapse card details
- **Home/End:** Jump to first/last card
- **Tab/Shift+Tab:** Standard focus navigation
- **Visual Focus:** Automatically styled via [expandable-card.css](../css/expandable-card.css) `:focus-visible` rules
- **Filtered Grids:** Automatically adapts to visible cards only (works with search/filter)
- **Auto-detection:** Calculates grid columns from actual card positions
- **Mutation Observer:** Updates when cards are added/removed/hidden

**CSS Focus Styles (in expandable-card.css):**
```css
[class*="-card"]:focus-visible {
    outline: 3px solid var(--primary);
    outline-offset: 4px;
    box-shadow: 0 0 0 4px var(--background), 0 0 20px var(--shadow);
    transform: scale(1.02);
    z-index: 10;
}
```

**Currently Used By:** Moon Tracker (rituals), Sabbat Calendar, Crystal Database, Herbal Database. **Use for all tools with browsable card grids.**

### Canvas Utilities for Drawing Tools

**NEW:** As of Feb 26, 2026, canvas operations centralized in `js/canvas-utils.js` (219 lines):

- **Purpose:** DRY pattern for Canvas API initialization and export
- **Benefits:** Reduces duplication, consistent UX, easier maintenance
- **Uses:** Sigil drawing, bind rune creation, any future canvas tools

**Pattern:**
```javascript
// In tool HTML: Load canvas-utils.js before tool script
<script src="../js/canvas-utils.js"></script>
<script src="../js/tool-script.js"></script>

// Initialize canvas with defaults
const { canvas, ctx } = initCanvas('canvas-id', {
    width: 600,           // Default: 600
    height: 600,          // Default: 600
    bgColor: '#ffffff',   // Default: '#ffffff'
    guideLine: true       // Draw center guide lines (default: false)
});

// Clear canvas and reset to background
clearCanvas(canvas, ctx, '#ffffff');

// Export as PNG and trigger download
exportCanvasPNG(canvas, 'my-drawing.png');

// Add mouse/touch drawing events
const cleanup = addDrawingEvents(canvas, ctx, {
    colorPicker: document.getElementById('color-picker'),
    brushSize: document.getElementById('brush-size')
});
```

**Functions Provided:**
- **`initCanvas(canvasId, options)`** — Setup canvas with white background, optional guide lines
- **`clearCanvas(canvas, ctx, bgColor)`** — Clear and reset all canvas state
- **`exportCanvasPNG(canvas, filename)`** — Download canvas as PNG file
- **`addDrawingEvents(canvas, ctx, options)`** — Mouse + touch drawing with color/brush size support

**Impact:**
- Sigil Maker: Reduced from 3026 lines → 2944 lines (82 lines saved)
- Rune Caster: Simplified bind rune canvas setup
- Future canvas tools can reuse without duplication

**Currently Used By:** Sigil Maker (freehand drawing), Rune Caster (bind rune generation). **Use for any tool needing canvas drawing or image export.**

### Print-Friendly CSS

**NEW:** As of Feb 26, 2026, print styles centralized in `css/print.css` (354 lines):

- **Purpose:** Professional print output for all tools
- **Benefits:** Ink-efficient, clean formatting, enables printing readings/collections
- **Uses:** Print rune readings, ritual lists, crystal collections, sabbat info

**Pattern:**
```html
<!-- In tool HTML: Load print.css after all other CSS -->
<link rel="stylesheet" href="../css/shared-theme.css">
<link rel="stylesheet" href="../css/tool-styles.css">
<link rel="stylesheet" href="../css/expandable-card.css">
<link rel="stylesheet" href="../css/print.css">
```

**What It Does:**
- **Hides** — Navigation, controls, buttons, inputs, theme selector, canvas, decorative elements
- **Shows** — All content cards (auto-expanded), readings, calendars, collections
- **Formats** — Black text on white background, removes shadows/gradients, page breaks
- **Typography** — Readable font sizes (11pt body, 20pt headers), proper line spacing
- **Page Setup** — 0.5in margins, portrait orientation, avoids splitting cards across pages

**Per-Tool Adaptations:**
- **Moon Tracker:** Calendar and phase info in bordered sections
- **Sabbat Calendar:** Each sabbat on own section with date prominent
- **Crystal/Herbal:** Safety tags with borders (toxic = bold double border)
- **Rune Caster:** Reading positions in bordered boxes, large rune symbols
- **Sigil Maker:** Final letters displayed in large, bold, centered format

**Utility Classes:**
```html
<div class="print-only">Only shown when printing</div>
<div class="no-print">Hidden when printing</div>
<h2 class="force-page-break">Starts on new page</h2>
```

**Currently Used By:** All 7 completed tools. **Always include in new tools for professional polish.**

### Progressive Web App (PWA) Infrastructure

**NEW:** As of Feb 27, 2026, all tools are installable as a Progressive Web App:

- **Purpose:** Offline functionality, app-like installation, home screen shortcuts
- **Benefits:** Works offline, fast loading, native app feel, no app store required
- **Uses:** Offline ritual planning, traveling without internet, reduced data usage

**Files Structure:**
```
manifest.json          # App metadata, icons, shortcuts, theme colors
sw.js                  # Service worker with cache-first strategy (~180 lines)
offline.html           # Fallback page when offline with links to cached tools
```

**Pattern:**
```html
<!-- In every tool HTML: Add to <head> section -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#8b5cf6">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- At end of <body>, before tool scripts -->
<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('✨ SW registered:', reg.scope))
                .catch(err => console.log('SW registration failed:', err));
        });
    }
</script>
```

**Service Worker Strategy (sw.js):**
- **Cache-first** for all app resources (HTML, CSS, JS)
- **Network-first** for API calls (none currently, but ready for future)
- **Precaches** all 12 tools + homepage + shared assets on install
- **Automatic cache cleanup** when new version deployed
- **Offline fallback** to `offline.html` for uncached routes

**manifest.json Configuration:**
```json
{
    "name": "Mystical Path Tools",
    "short_name": "Mystical Path",
    "theme_color": "#8b5cf6",
    "background_color": "#0f0d29",
    "display": "standalone",
    "icons": [
        { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
        { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" },
        { "src": "/icons/icon-192-maskable.png", "sizes": "192x192", "purpose": "maskable" },
        { "src": "/icons/icon-512-maskable.png", "sizes": "512x512", "purpose": "maskable" }
    ],
    "shortcuts": [
        { "name": "Sigil Generator", "url": "/html/sigil-maker.html", "icons": [...] },
        { "name": "Moon Tracker", "url": "/html/moon-tracker.html", "icons": [...] },
        { "name": "Rune Caster", "url": "/html/rune-caster.html", "icons": [...] },
        { "name": "Crystal Database", "url": "/html/crystal-database.html", "icons": [...] }
    ]
}
```

**Testing PWA:**
1. Start local server: `python3 -m http.server 8000`
2. Open in Chrome: `http://localhost:8000/index.html`
3. Check DevTools Console for "✨ SW registered" message
4. DevTools → Application tab → Service Workers (verify installed)
5. Go offline (Network tab → Offline or airplane mode)
6. Navigate to all 12 tools - should load from cache
7. Install app: Chrome menu → Install app / Add to Home Screen

**Currently Used By:** All 12 tools + homepage. **Required for all new tools.**

### PDF Export Functionality

**NEW:** As of Feb 27, 2026, key tools support one-click PDF export:

- **Purpose:** Save readings, collections, rituals for offline reference/printing
- **Benefits:** No external libraries, uses browser's native print-to-PDF, auto-dated filenames
- **Uses:** Export rune readings, crystal collections, sabbat info, ritual lists

**Files:**
```
js/pdf-utils.js              # Shared PDF export utilities (65 lines)
css/shared-theme.css         # PDF button styles (added to existing file)
```

**Pattern:**
```html
<!-- In tool HTML: Load pdf-utils.js before tool script -->
<script src="../js/pdf-utils.js"></script>
<script src="../js/tool-script.js"></script>

<!-- Add PDF button in appropriate section (tabs, filters, etc.) -->
<button class="pdf-download-btn" 
        onclick="downloadToolAsPDF('Tool Name', 'content-type')" 
        aria-label="Download as PDF">
    📄 Download PDF
</button>
```

**JavaScript Functions (pdf-utils.js):**
```javascript
// Trigger browser's print dialog (user saves as PDF)
downloadAsPDF(filename);

// Generate timestamped filename: {tool}-{type}-{YYYY-MM-DD}.pdf
generatePDFFilename(toolName, contentType);

// Combined function for easy use
downloadToolAsPDF(toolName, contentType);

// Programmatic button creation (for dynamic UIs)
createPDFButton(toolName, contentType, buttonText);
```

**CSS Styling:**
```css
.pdf-download-btn {
    background: linear-gradient(135deg, var(--accent), var(--primary));
    color: white;
    padding: 12px 30px;
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'Cinzel', serif;
    cursor: pointer;
    transition: all 0.3s ease;
}

@media print {
    .pdf-download-btn { display: none !important; }
}
```

**How It Works:**
1. User clicks PDF button
2. `downloadToolAsPDF()` generates filename: `moon-tracker-rituals-2026-02-27.pdf`
3. Triggers `window.print()` with temporary document title
4. Browser's print dialog opens with "Save as PDF" option
5. `print.css` applies (buttons hidden, clean formatting)
6. User saves PDF with auto-generated filename suggestion

**Integration Examples:**
- **Moon Tracker:** Button in ritual-filters section
- **Herbal Database:** Button in apothecary-tabs (collection tracking)
- **Crystal Database:** Button in collection-tabs
- **Spell Builder:** Button after grimoire filters
- **Sabbat Calendar:** Button in hemisphere-toggle
- **Rune Caster:** Button in reading results header

**Currently Used By:** Moon Tracker, Herbal Database, Crystal Database, Spell Builder, Sabbat Calendar, Rune Caster. **Use for tools with exportable content (readings, collections, calendars).**

### Data Conventions

- All content data (rune objects, ritual arrays, etc.) is inline in the tool's JS file — no external JSON. This is intentional to preserve `file://` compatibility.
- Data arrays follow a correspondences structure with fields like `element`, `deity`, `planet`, `chakra`, `upright`, `reversed`, etc.

### Canvas Tools

Tools using the Canvas API (Sigil Generator, Rune Caster bind rune, Pendulum Decision Tool) use a 600×600px canvas for drawing tools or custom sizes for animations (400x500px for pendulum).

**Drawing Tools Pattern:**
- Initialize with white background
- Support mouse + touch events
- Export via `canvas.toDataURL('image/png')`
- Uses canvas-utils.js for DRY pattern

**Animation Pattern (NEW - Feb 26, 2026):**
- **Spring Physics Simulation** (established via Pendulum Decision Tool):
  ```javascript
  let currentAngle = 0;
  let velocity = 0;
  const dampening = 0.98;      // Slow down over time
  const spring = 0.02;          // Pull toward target
  
  function animate() {
      const force = (targetAngle - currentAngle) * spring;
      velocity += force;
      velocity *= dampening;
      currentAngle += velocity;
      
      // Update canvas drawing
      requestAnimationFrame(animate);
  }
  ```
- **Uses:** Realistic pendulum swing, physics-based animations, smooth transitions
- **Benefits:** Natural-looking motion without complex physics engines
- **Pattern:** Force = (target - current) × spring; velocity += force; velocity × dampening

**Currently Used By:** Sigil Maker (freehand drawing), Rune Caster (bind rune), Pendulum Tool (spring animation). **Use canvas-utils.js for all new canvas tools.**

### Responsive Breakpoints

- **768px** — tablet layout (grid collapses)
- **480px** — mobile layout (single column, touch sizing)

## Adding a New Tool

Based on established patterns:

1. **Create `html/new-tool.html`**
   - Include `<link rel="stylesheet" href="../css/shared-theme.css">`
   - Include `<link rel="stylesheet" href="../css/new-tool-styles.css">`
   - Include `<link rel="stylesheet" href="../css/nav-menu.css">` (before print.css)
   - Include `<link rel="stylesheet" href="../css/print.css">` (always last CSS file)
   - Add PWA manifest: `<link rel="manifest" href="/manifest.json">`
   - Add theme color meta: `<meta name="theme-color" content="#8b5cf6">`
   - Add theme selector dropdown with `id="mystical-path"`
   - Load scripts in order: `theme-manager.js`, `nav-menu.js`, optionally `pdf-utils.js`, optionally `filter-utils.js`, then tool script
   - Add service worker registration before closing `</body>` tag

2. **Create `css/new-tool-styles.css`**
   - **START WITH THEME VARIABLES** — Copy from `moon-styles.css` or `crystal-styles.css` as template
   - Define all 6 theme variants (`:root`, `[data-theme="shadow-work"]`, etc.)
   - Define tool-specific variables: `--card-bg`, `--border`, `--shadow`, etc.
   - Use `font-family: 'Cinzel', serif` (from shared-theme.css)
   - Test theme switching before proceeding

3. **Create `js/new-script.js`**
   - Inline data arrays (no external JSON)
   - Use `filter-utils.js` if tool has search/filtering
   - Follow established patterns for DOM manipulation

4. **Update PWA files:**
   - Add new tool to `PRECACHE_ASSETS` array in `sw.js`
   - Update `sw.js` version number to bust cache: `const VERSION = 'v1.x.x'`
   - Optionally add to shortcuts in `manifest.json` if it's a top-4 tool
   - Add link to `offline.html` cached tools list

5. **Update `index.html`**
   - Add tool card with icon, features, tagline
   - Update TOOLS array in `nav-menu.js` with new tool
   - Remove from "Coming Soon" section

6. **Update `ROADMAP.md`**
   - Move tool to Completed Tools section
   - Add metrics (lines of code, data count)

**Golden Rule:** Copy an existing tool's CSS file as starting point. Never write theme variables from scratch.

Reuse existing patterns: `.tool-card`, `.ritual-card`, `.rune-card` (glassmorphism), expandable detail sections, dual-dropdown filter patterns, filter-utils.js for search/filtering.

## Pre-Launch Checklist

Before marking a tool as complete, verify:

**CSS & Theming:**
- [ ] Theme variables defined for ALL 6 themes at top of CSS file
- [ ] Test theme switching — all 6 themes render correctly
- [ ] No undefined CSS variables (check browser console)
- [ ] Glassmorphism cards use `backdrop-filter: blur(10px)`
- [ ] Responsive breakpoints work (768px, 480px)

**JavaScript:**
- [ ] Filter utilities imported if tool has search/filtering
- [ ] localStorage keys use `'mystical-path-'` prefix
- [ ] No console errors on page load
- [ ] Data arrays are inline (no external JSON)

**HTML:**
- [ ] Theme selector has `id="mystical-path"`
- [ ] Back link to `../index.html` exists
- [ ] Navigation menu CSS and JS included (nav-menu.css before print.css, nav-menu.js after theme-manager.js)
- [ ] Print CSS included as last stylesheet
- [ ] PWA manifest link present: `<link rel="manifest" href="/manifest.json">`
- [ ] Service worker registration script before closing `</body>` tag
- [ ] Scripts loaded in correct order (shared-theme → tool CSS → nav-menu CSS → print CSS → theme-manager → nav-menu → pdf-utils (if needed) → filter-utils (if needed) → tool script)

**PWA Integration:**
- [ ] Tool added to `PRECACHE_ASSETS` in `sw.js`
- [ ] Service worker version bumped in `sw.js`
- [ ] Tool link added to `offline.html` cached tools list
- [ ] Test offline: Go offline and verify tool loads from cache
- [ ] DevTools console shows "✨ SW registered" message

**PDF Export (if applicable):**
- [ ] pdf-utils.js loaded before tool script
- [ ] PDF button added in logical location (tabs, filters, results header)
- [ ] Button uses `downloadToolAsPDF('Tool Name', 'content-type')`
- [ ] Button includes aria-label for accessibility
- [ ] Test: Click PDF button, verify print dialog appears
- [ ] Verify filename format: `{tool-name}-{type}-{YYYY-MM-DD}.pdf`
- [ ] Print preview shows clean formatting (print.css applied)

**Integration:**
- [ ] Tool card added to `index.html`
- [ ] Tool added to TOOLS array in `nav-menu.js`
- [ ] Removed from "Coming Soon" section
- [ ] `ROADMAP.md` updated with completion details
- [ ] Default theme set appropriately (e.g., `green-witchcraft` for herbal tool)

**Testing:**
- [ ] Open via `file://` protocol (works offline)
- [ ] Open via localhost (works with server)
- [ ] Mobile responsive layout works
- [ ] All interactive elements functional

## Development Best Practices

### Sprint Planning (80/20 Rule)

Balance new features with technical debt:
- **80% time** on new user-facing features
- **20% time** on refactoring, shared utilities, code quality

**Key Insight:** Do tech debt FIRST in the sprint. Shared utilities built early accelerate feature work.

**Example from Feb 2026 Sprint:**
- Tech debt: Created `filter-utils.js` shared library (~3 hours)
- Feature: Herbal Database used those utilities from day one
- Result: Completed in ~7 hours vs estimated 2-3 days

### Development Order

Follow this sequence when building a new tool:

1. **HTML structure** — Complete layout with semantic sections
2. **JavaScript data** — Define complete data structure upfront (all fields, even if some are placeholder)
3. **JavaScript functions** — Implement filtering, rendering, interactions
4. **CSS styling** — Apply theme variables and styling last

**Why this order?**
- Data structure decisions affect everything downstream
- Can test functionality without styling
- CSS is easiest to iterate on
- Prevents "add another field later" scope creep

**Example:** Herbal Database defined 18 fields per herb upfront. No fields were added mid-development — this prevented refactoring.

### Data Structure Design

**Principle:** Be comprehensive from the start.

When designing data objects, include ALL fields you might need:
- Basic info (name, emoji, type)
- Categorization (element, planet, zodiac, deity)
- Core content (properties, uses, correspondences)
- Safety/warnings (especially for herbs, crystals)
- Practical info (storage, care, substitutions)
- Spiritual (affirmations, folklore, ritual uses)

**Better to have unused fields than to refactor later.**

Example herb object (18 fields):
```javascript
{
    name: 'Lavender',
    latin: 'Lavandula angustifolia',
    emoji: '🌸',
    safety: 'safe',
    safety_notes: '...',
    intentions: ['Peace', 'Sleep'],
    element: 'Air',
    planet: 'Mercury',
    zodiac: ['Gemini', 'Virgo'],
    deities: ['Hecate', 'Mercury'],
    properties: '...',
    magical_uses: '...',
    medicinal_uses: '...',
    preparation: ['Tea', 'Oil'],
    growing: '...',
    harvesting: '...',
    storage: '...',
    substitutions: ['Chamomile'],
    folklore: '...',
    affirmation: '...'
}
```

### Collection Tracking Pattern

For reference databases (crystals, herbs, tarot), use the owned/wishlist pattern:

**localStorage structure:**
```javascript
{
    owned: ['Item Name 1', 'Item Name 2'],
    wishlist: ['Item Name 3', 'Item Name 4']
}
```

**UI pattern:**
- ♥ button for "owned" collection
- ⭐ button for "wishlist"
- Tabs to toggle between views
- Empty state messages for each collection
- Mini cards in collection view with remove buttons

**Implementation:**
- `toggleCollection(itemName, type)` - Add/remove from collection
- `saveCollection()` - Persist to localStorage
- `loadCollection()` - Restore on page load
- `renderCollection()` - Display current collection

See `crystal-script.js` or `herbal-script.js` for reference implementations.

### Safety-Critical Design

When building tools with potentially dangerous content (herbs, chemicals, spells involving fire):

**Three-tier warning system:**
- ✓ **Safe** — Generally safe for most users (green accent)
- ⚠️ **Caution** — Requires specific warnings/contraindications (yellow/orange, bold)
- 🔴 **Toxic/Dangerous** — Serious hazards requiring prominent warnings (red, pulsing animation)

**Design requirements:**
1. **Page-level disclaimer** at the top (medical, legal, identification warnings)
2. **Per-item safety badges** with visual hierarchy
3. **Detailed safety notes** in expandable section
4. **Never downplay risks** — err on the side of caution
5. **External use only** warnings where appropriate

**Example from Herbal Database:**
- Prominent safety disclaimer section (3 paragraphs)
- Color-coded badges (toxic = red gradient with pulse animation)
- Safety notes field for every herb
- Contraindications clearly listed

### Velocity & Estimation

**Actual completion times (with established patterns):**
- Simple tool (timer, affirmation, pendulum): 2-3 hours
- Medium tool (sabbat calendar, rune caster): 1-2 days
- Complex tool (sigil generator with canvas): 3-5 days
- Database tool (crystals, herbs with filters): 6-8 hours with shared utilities
- Canvas animation tool (with physics): 2-3 hours with canvas-utils.js

**Factors that accelerate development:**
- ✓ Shared utilities already exist (filter-utils.js, canvas-utils.js)
- ✓ Similar tool exists to copy from
- ✓ Data structure defined upfront
- ✓ Clear requirements (no scope changes)
- ✓ ARIA labels added from the start (not retrofitted)
- ✓ CSS theme variables copied from existing tool

**Factors that slow development:**
- ✗ Building new utility functions from scratch
- ✗ Undefined data structure (adding fields mid-development)
- ✗ Complex interactions (canvas, animations) without existing patterns
- ✗ Safety-critical content requiring research
- ✗ Retrofitting ARIA labels (3x slower than building in from start)

**Latest Sprint Data:**

**Weather + Navigation Sprint (Feb 26, 2026):**
- Global Navigation Menu: 1 hour (345 lines JS, 391 lines CSS)
- Witchy Weather: 6 hours (1,432 lines total)
- Total: ~7 hours (estimated 8-10 hours) ✅ Ahead of schedule
- **Learnings:** 
  * Top-right menu position better UX (avoids back link/theme selector conflicts)
  * Theme-specific icons (⛤, ☽, 🪄, 🧿, 🕯️, 🔯) > generic hamburger for mystical tools
  * Dynamic icon switching via theme listener adds polish
  * Navigation menu now shared infrastructure for all 12 tools + homepage

**Simple Tools Blitz (Feb 26, 2026):**
- Numerology Calculator: 2.5 hours (901 lines)
- Affirmation Generator: 2.5 hours (1,154 lines)
- Pendulum Decision Tool: 2.5 hours (1,103 lines)
- ARIA accessibility per tool: ~30 minutes (when added to existing tools)
- **Insight:** Simple tools with established patterns now consistently 2-3 hours

**Infrastructure Sprint (Feb 27, 2026):**
- PWA Infrastructure: ~3 hours (manifest.json, sw.js ~180 lines, offline.html, 13 file updates)
- PDF Export System: ~2 hours (pdf-utils.js 65 lines, button styles, 6 tool integrations)
- Total: ~5 hours (estimated 6-8 hours) ✅ Ahead of schedule
- **Learnings:**
  * PWA service worker easier than expected with cache-first strategy
  * Browser's native print-to-PDF sufficient for PDF export (no libraries needed)
  * Batch file operations accelerate integration (manifest + SW in all 13 files)
  * Infrastructure sprints unlock capabilities for all future tools
  * Auto-dated filenames improve UX (tool-type-YYYY-MM-DD.pdf pattern)
  * PWA offline functionality with zero config per tool (just manifest link + SW registration)

**Enhancement Sprint (Feb 26, 2026):**
- Filter persistence (3 tools): ~1 hour total — same 10-line pattern per tool
- Spell Builder moon auto-detect: ~30 min — inline Julian Day calc, no import needed
- Crystal of the Day: ~1 hour (banner HTML + JS logic + CSS)
- Rune of the Day: ~1 hour (same pattern as Crystal of the Day)
- Rune Caster reading journal: ~2 hours (auto-save on cast, toggle UI, render entries)
- Moon Tracker ritual journal: ~2.5 hours (Record button injection, modal, journal render)
- Numerology compatibility calculator: ~2 hours (form HTML + reused calc functions + CSS)
- Crystal Database 50→93: ~3 hours (43 entries × 17 fields data entry)
- Total: ~13 hours estimated | 1 session actual ✅
- **Learnings:**
  * "X of the Day" pattern: store `{date, name}` in localStorage, compare ISO date string — highly reusable
  * Record modal (inline dialog) beats native prompt() for journaling — more control, better UX, no browser inconsistencies
  * Filter persistence is a 10-line addition with high perceived UX value — add to every new filter tool
  * Compatibility calculators are nearly free when calc functions already exist
  * For journals tracking live state (moon phase), read from DOM element not recalculate
  * Crystal data at scale: 43 objects × 17 fields is mechanical but worth it for daily feature quality

### ARIA Labels & Accessibility

**NEW:** As of Feb 26, 2026, accessibility pattern established via Moon Tracker, Crystal Database, and Herbal Database:

- **Purpose:** Make tools usable for screen reader users (WCAG 2.1 compliance)
- **Benefits:** Inclusive design, better SEO, improved navigation for all users
- **Uses:** All tools with interactive elements, dynamic content, complex layouts

**Pattern:**
```html
<!-- Main Sections -->
<section class="tool-section" role="region" aria-labelledby="section-heading">
    <h2 id="section-heading">Section Title</h2>
</section>

<!-- Search/Filter Controls -->
<section role="search" aria-label="Filter tools">
    <input type="text" id="search" aria-label="Search by name" />
    <select id="filter" aria-label="Filter by category">...</select>
    <button aria-label="Clear all filters">Clear</button>
</section>

<!-- Dynamic Content -->
<div role="status" aria-live="polite">
    Showing <span id="count">0</span> results
</div>

<!-- Grid Results -->
<div id="results" role="region" aria-live="polite" aria-label="Filtered results">
    <!-- Cards populated by JS -->
</div>

<!-- Navigation Controls -->
<div role="navigation" aria-label="Calendar navigation">
    <button aria-label="Previous month">← Previous</button>
    <h4 aria-live="polite">January 2026</h4>
    <button aria-label="Next month">Next →</button>
</div>

<!-- Tabs -->
<div role="tablist" aria-label="Collection tabs">
    <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
    <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
</div>
<div id="panel-1" role="tabpanel" aria-labelledby="tab-1">...</div>
<div id="panel-2" role="tabpanel" aria-labelledby="tab-2">...</div>

<!-- Lists (for grid layouts) -->
<div role="list">
    <div role="listitem">...</div>
</div>

<!-- Alerts (for safety warnings) -->
<section role="alert" aria-labelledby="warning-heading">
    <h2 id="warning-heading">⚠️ Warning</h2>
</section>

<!-- Screen-reader-only headings -->
<h2 class="sr-only">Hidden from visual users</h2>
```

**CSS Utility (in shared-theme.css):**
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

**Key ARIA Attributes:**
- **`role`** — Semantic role (region, search, navigation, alert, tablist, tab, tabpanel, list, listitem, status)
- **`aria-label`** — Direct label for elements without visible text
- **`aria-labelledby`** — References ID of element containing label
- **`aria-live="polite"`** — Announces dynamic content changes to screen readers
- **`aria-selected`** — Current tab selection state
- **`aria-controls`** — Links control to the element it controls
- **`aria-describedby`** — References ID of element containing description

**Common Patterns:**
- **Search sections:** `role="search"` + `aria-label` on inputs
- **Filter results:** `aria-live="polite"` so count changes are announced
- **Navigation:** `role="navigation"` + `aria-label="Navigation type"`
- **Tabs:** `role="tablist"`, `role="tab"`, `role="tabpanel"` with `aria-controls` linking
- **Safety warnings:** `role="alert"` for immediate announcement
- **Hidden headings:** `.sr-only` class for semantic structure

**Currently Used By:** Moon Tracker, Crystal Database, Herbal Database. **Use for all future tools.**

