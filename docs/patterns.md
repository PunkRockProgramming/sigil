# Pattern Reference

Code examples and API details for shared utilities. Read this during sprint planning or when implementing a pattern for the first time.

---

## CSS Theme Variables

Every tool CSS file must define all 6 theme variants at the top. Copy this block from `css/moon-styles.css`:

```css
/* === THEME VARIABLES (copy from moon-styles.css and adjust colors) === */
:root {
    --primary: #8b5cf6;
    --secondary: #6366f1;
    --dark: #1a1a2e;
    --darker: #0f0d29;
    --text: #e2e8f0;
    --text-secondary: #94a3b8;
    --accent: #a78bfa;
    --card-bg: rgba(139, 92, 246, 0.1);
    --card-border: rgba(139, 92, 246, 0.3);
    --input-bg: rgba(15, 13, 41, 0.8);
    --shadow: rgba(139, 92, 246, 0.3);
    --glow: rgba(167, 139, 250, 0.4);
    --background: #0f0d29;
    --border: rgba(139, 92, 246, 0.3);
}

[data-theme="shadow-work"] {
    --primary: #4a5568;
    --secondary: #2d3748;
    --dark: #1a1a1a;
    --darker: #0d0d0d;
    --text: #cbd5e0;
    --text-secondary: #718096;
    --accent: #667eea;
    --card-bg: rgba(74, 85, 104, 0.15);
    --card-border: rgba(74, 85, 104, 0.4);
    --input-bg: rgba(13, 13, 13, 0.8);
    --shadow: rgba(74, 85, 104, 0.4);
    --glow: rgba(102, 126, 234, 0.3);
    --background: #0d0d0d;
    --border: rgba(74, 85, 104, 0.4);
}

[data-theme="golden-dawn"] {
    --primary: #d4af37;
    --secondary: #b8860b;
    --dark: #1a1200;
    --darker: #0d0900;
    --text: #fef3c7;
    --text-secondary: #d97706;
    --accent: #f59e0b;
    --card-bg: rgba(212, 175, 55, 0.1);
    --card-border: rgba(212, 175, 55, 0.3);
    --input-bg: rgba(13, 9, 0, 0.8);
    --shadow: rgba(212, 175, 55, 0.3);
    --glow: rgba(245, 158, 11, 0.4);
    --background: #0d0900;
    --border: rgba(212, 175, 55, 0.3);
}

[data-theme="green-witchcraft"] {
    --primary: #48bb78;
    --secondary: #276749;
    --dark: #1a2e1a;
    --darker: #0d1a0d;
    --text: #c6f6d5;
    --text-secondary: #68d391;
    --accent: #9ae6b4;
    --card-bg: rgba(72, 187, 120, 0.1);
    --card-border: rgba(72, 187, 120, 0.3);
    --input-bg: rgba(13, 26, 13, 0.8);
    --shadow: rgba(72, 187, 120, 0.3);
    --glow: rgba(154, 230, 180, 0.4);
    --background: #0d1a0d;
    --border: rgba(72, 187, 120, 0.3);
}

[data-theme="blood-moon"] {
    --primary: #e53e3e;
    --secondary: #9b2c2c;
    --dark: #2d1515;
    --darker: #1a0a0a;
    --text: #fed7d7;
    --text-secondary: #fc8181;
    --accent: #fc8181;
    --card-bg: rgba(229, 62, 62, 0.1);
    --card-border: rgba(229, 62, 62, 0.3);
    --input-bg: rgba(26, 10, 10, 0.8);
    --shadow: rgba(229, 62, 62, 0.3);
    --glow: rgba(252, 129, 129, 0.4);
    --background: #1a0a0a;
    --border: rgba(229, 62, 62, 0.3);
}

[data-theme="lunar-tides"] {
    --primary: #63b3ed;
    --secondary: #2b6cb0;
    --dark: #0a1628;
    --darker: #060e1a;
    --text: #bee3f8;
    --text-secondary: #90cdf4;
    --accent: #90cdf4;
    --card-bg: rgba(99, 179, 237, 0.1);
    --card-border: rgba(99, 179, 237, 0.3);
    --input-bg: rgba(6, 14, 26, 0.8);
    --shadow: rgba(99, 179, 237, 0.3);
    --glow: rgba(144, 205, 244, 0.4);
    --background: #060e1a;
    --border: rgba(99, 179, 237, 0.3);
}
```

---

## filter-utils.js

**Functions:**
- `filterItems(items, filters, propertyMap)` — multi-filter, skips `'all'` values, handles array properties
- `searchItems(items, searchTerm, searchProperties)` — case-insensitive search across multiple fields
- `filterAndSearch(items, searchTerm, searchProperties, filters, propertyMap)` — combined
- `clearFilters(elements)` — resets inputs and dropdowns
- `updateResultCount(countElement, count, itemType)` — updates count display

```javascript
const filtered = filterAndSearch(
    CRYSTALS,
    searchInput.value,
    [(item) => item.name, (item) => item.properties],
    {
        intention: intentionFilter.value,
        chakra: chakraFilter.value
    },
    {
        intention: (item) => item.intentions,  // array property
        chakra: (item) => item.chakra           // array property
    }
);
```

**Used by:** Crystal Database, Herbal Database, Moon Tracker rituals.

---

## expandable-card.css

Load after tool CSS. Works with any card class ending in `-card` (`.ritual-card`, `.crystal-card`, etc.).

```html
<div class="crystal-card">
    <div class="card-content">...</div>
    <div class="expand-toggle">Show Details</div>
    <div class="crystal-details">...</div>  <!-- hidden by default -->
</div>
```

JS to toggle:
```javascript
card.querySelector('.expand-toggle').addEventListener('click', () => {
    card.classList.toggle('expanded');
});
```

---

## Global Navigation Menu

Always include in all tools. Updates automatically based on current page.

```html
<!-- CSS: nav-menu.css before print.css -->
<!-- JS: nav-menu.js after theme-manager.js -->
```

**When adding a new tool**, add it to the `TOOLS` array in `js/nav-menu.js`:
```javascript
{ name: 'Tool Name', emoji: '🔮', path: './tool-name.html' }
```

Theme-specific icons: `chaos-magick: ⛤`, `shadow-work: ☽`, `golden-dawn: 🪄`, `green-witchcraft: 🧿`, `blood-moon: 🕯️`, `lunar-tides: 🔯`

---

## keyboard-nav.js

Arrow key navigation for card grids.

```javascript
enableKeyboardNav('grid-container-id', '.card-class');

// With options:
enableKeyboardNav('crystal-grid', '.crystal-card', {
    onActivate: (card) => card.classList.toggle('expanded'),
    columns: 3,   // auto-detected if omitted
    wrap: true    // default: true
});
```

**Used by:** Moon Tracker, Sabbat Calendar, Crystal Database, Herbal Database.

---

## canvas-utils.js

```javascript
const { canvas, ctx } = initCanvas('canvas-id', {
    width: 600,
    height: 600,
    bgColor: '#ffffff',
    guideLine: false
});

clearCanvas(canvas, ctx, '#ffffff');
exportCanvasPNG(canvas, 'my-sigil.png');

const cleanup = addDrawingEvents(canvas, ctx, {
    colorPicker: document.getElementById('color-picker'),
    brushSize: document.getElementById('brush-size')
});
```

**Used by:** Sigil Maker, Rune Caster.

---

## pdf-utils.js

```html
<button class="pdf-download-btn"
        onclick="downloadToolAsPDF('Moon Tracker', 'rituals')"
        aria-label="Download rituals as PDF">
    📄 Download PDF
</button>
```

Filename format: `moon-tracker-rituals-2026-02-27.pdf`

Functions: `downloadToolAsPDF(toolName, contentType)`, `generatePDFFilename(toolName, contentType)`, `createPDFButton(toolName, contentType, buttonText)`

**Used by:** Moon Tracker, Herbal Database, Crystal Database, Sabbat Calendar, Rune Caster, Spell Builder.

---

## PWA Infrastructure

### In `<head>` of every tool:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#8b5cf6">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

### Before `</body>` of every tool:
```html
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

### When adding a new tool, update `sw.js`:
```javascript
const CACHE_NAME = 'mystical-path-v1.X';  // bump version

const PRECACHE_ASSETS = [
    // ... existing assets ...
    '/html/new-tool.html',
    '/css/new-tool-styles.css',
    '/js/new-tool-script.js',
];
```

Also add a link to the tool in `offline.html`.

---

## Web Audio API (Procedural Sound)

```javascript
// Initialize on user interaction (not page load — autoplay policy)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSingingBowl() {
    const duration = 1.5;
    const baseFreq = 480;

    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    osc1.type = 'sine';
    osc1.frequency.value = baseFreq;
    osc2.type = 'sine';
    osc2.frequency.value = baseFreq * 2.0;

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

**Frequency reference:**
- Singing Bowl: 480 Hz (sine) + 960 Hz harmonic
- Temple Bell: 800 Hz (triangle)
- Wind Chime: 659/784/988 Hz staggered (E5/G5/B5)
- Om/AUM: 136.1 Hz (sine, long decay)

**Used by:** Meditation Timer.

---

## SVG Circular Progress

```html
<svg class="progress-ring" width="300" height="300">
    <circle class="progress-ring-background" cx="150" cy="150" r="135" />
    <circle class="progress-ring-circle" cx="150" cy="150" r="135" id="progressCircle" />
</svg>
```

```css
.progress-ring-background { fill: none; stroke: var(--card-border); stroke-width: 8; }
.progress-ring-circle {
    fill: none; stroke: var(--primary); stroke-width: 8;
    stroke-linecap: round;
    transform: rotate(-90deg); transform-origin: 50% 50%;
    transition: stroke-dashoffset 0.5s ease;
}
```

```javascript
const circle = document.getElementById('progressCircle');
const circumference = 2 * Math.PI * 135; // 848.23

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function updateProgress(progress) { // 0–1
    circle.style.strokeDashoffset = circumference * (1 - progress);
}
```

**Used by:** Meditation Timer.

---

## Canvas Spring Physics Animation

```javascript
let currentAngle = 0;
let velocity = 0;
const dampening = 0.98;
const spring = 0.02;

function animate() {
    const force = (targetAngle - currentAngle) * spring;
    velocity += force;
    velocity *= dampening;
    currentAngle += velocity;

    // redraw canvas here
    requestAnimationFrame(animate);
}
```

**Used by:** Pendulum Decision Tool.

---

## ARIA & Accessibility

Apply from the start — retrofitting takes 3× longer.

```html
<!-- Search/filter section -->
<section role="search" aria-label="Filter crystals">
    <input type="text" aria-label="Search by name" />
    <select aria-label="Filter by chakra">...</select>
    <button aria-label="Clear all filters">Clear</button>
</section>

<!-- Live result count -->
<div role="status" aria-live="polite">Showing <span id="count">0</span> results</div>

<!-- Card grid -->
<div id="crystal-grid" role="region" aria-live="polite" aria-label="Crystal results">
    <!-- cards -->
</div>

<!-- Navigation controls -->
<nav aria-label="Calendar navigation">
    <button aria-label="Previous month">← Prev</button>
    <h4 aria-live="polite">January 2026</h4>
    <button aria-label="Next month">Next →</button>
</nav>

<!-- Tabs -->
<div role="tablist" aria-label="Collection tabs">
    <button role="tab" aria-selected="true" aria-controls="panel-owned">Owned</button>
    <button role="tab" aria-selected="false" aria-controls="panel-wishlist">Wishlist</button>
</div>
<div id="panel-owned" role="tabpanel">...</div>
<div id="panel-wishlist" role="tabpanel">...</div>

<!-- Safety warning -->
<section role="alert" aria-labelledby="warning-heading">
    <h2 id="warning-heading">⚠️ Safety Warning</h2>
</section>
```

**Key attributes:** `role`, `aria-label`, `aria-labelledby`, `aria-live="polite"`, `aria-selected`, `aria-controls`

**`.sr-only`** class (defined in `shared-theme.css`) — visually hidden but readable by screen readers.

---

## Collection Tracking Pattern

```javascript
// localStorage structure
{ owned: ['Amethyst', 'Rose Quartz'], wishlist: ['Obsidian'] }

// Functions
function toggleCollection(itemName, type) { /* add/remove from owned or wishlist */ }
function saveCollection() { localStorage.setItem('mystical-path-collection', JSON.stringify(collection)); }
function loadCollection() { return JSON.parse(localStorage.getItem('mystical-path-collection')) || { owned: [], wishlist: [] }; }
```

UI: ♥ = owned, ⭐ = wishlist. Tabs to switch views. Mini cards with remove button.

**Reference:** `crystal-script.js`, `herbal-script.js`.

---

## "X of the Day" Pattern

```javascript
function getDailyItem(items) {
    const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
    const stored = JSON.parse(localStorage.getItem('mystical-path-daily') || '{}');

    if (stored.date === today) {
        return items.find(i => i.name === stored.name) || pickRandom(items);
    }

    const item = pickRandom(items);
    localStorage.setItem('mystical-path-daily', JSON.stringify({ date: today, name: item.name }));
    return item;
}
```

**Used by:** Crystal Database (Crystal of the Day), Rune Caster (Rune of the Day).

---

## Dual-Tab Layout Pattern

For tools with two distinct content types (e.g., colors + spells in Candle Magic).

```html
<div role="tablist" aria-label="Content tabs">
    <button class="tab-btn active" data-tab="colors" role="tab" aria-selected="true">Colors</button>
    <button class="tab-btn" data-tab="spells" role="tab" aria-selected="false">Spells</button>
</div>

<section class="tab-section" id="tab-colors">...</section>
<section class="tab-section hidden" id="tab-spells">...</section>
```

```javascript
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
        btn.setAttribute('aria-selected', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.toggle('hidden', section.id !== `tab-${tabName}`);
    });
}
```

**Reference:** `html/candle-magic.html`, `js/candle-magic-script.js`.

---

## Data Object Schemas

### Herb (18 fields)
```javascript
{
    name, latin, emoji, safety, safety_notes,
    intentions: [],    // array
    element, planet,
    zodiac: [],
    deities: [],
    properties, magical_uses, medicinal_uses,
    preparation: [],
    growing, harvesting, storage,
    substitutions: [],
    folklore, affirmation
}
```

### Crystal
See `js/crystal-script.js` for full 17-field schema.

### Candle (dual-type)
See `js/candle-magic-script.js` for color + spell schemas.
