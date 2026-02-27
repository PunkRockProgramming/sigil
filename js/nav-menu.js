// ========================================
// GLOBAL NAVIGATION MENU
// ========================================

// ========================================
// TOOL LIST DATA
// ========================================

const TOOLS = [
    { name: 'Sigil Generator', emoji: '✨', path: './html/sigil-maker.html', toolPath: '../html/sigil-maker.html' },
    { name: 'Moon Tracker', emoji: '🌙', path: './html/moon-tracker.html', toolPath: '../html/moon-tracker.html' },
    { name: 'Rune Caster', emoji: 'ᚱ', path: './html/rune-caster.html', toolPath: '../html/rune-caster.html' },
    { name: 'Sabbat Calendar', emoji: '🔆', path: './html/sabbat-calendar.html', toolPath: '../html/sabbat-calendar.html' },
    { name: 'Crystal Database', emoji: '💎', path: './html/crystal-database.html', toolPath: '../html/crystal-database.html' },
    { name: 'Herbal Guide', emoji: '🌿', path: './html/herbal-database.html', toolPath: '../html/herbal-database.html' },
    { name: 'Meditation Timer', emoji: '🧘', path: './html/meditation-timer.html', toolPath: '../html/meditation-timer.html' },
    { name: 'Spell Builder', emoji: '📖', path: './html/spell-builder.html', toolPath: '../html/spell-builder.html' },
    { name: 'Numerology', emoji: '🔢', path: './html/numerology-calculator.html', toolPath: '../html/numerology-calculator.html' },
    { name: 'Affirmations', emoji: '💫', path: './html/affirmation-generator.html', toolPath: '../html/affirmation-generator.html' },
    { name: 'Pendulum', emoji: '🔮', path: './html/pendulum-tool.html', toolPath: '../html/pendulum-tool.html' },
    { name: 'Witchy Weather', emoji: '🌦️', path: './html/witchy-weather.html', toolPath: '../html/witchy-weather.html' },
    { name: 'Altar Setup Guide', emoji: '🕯️', path: './html/altar-setup.html', toolPath: '../html/altar-setup.html' },
    { name: 'Candle Magic Guide', emoji: '🔥', path: './html/candle-magic.html', toolPath: '../html/candle-magic.html' },
    { name: 'Angel Numbers', emoji: '🔢', path: './html/angel-numbers.html', toolPath: '../html/angel-numbers.html' },
    { name: 'Home', emoji: '🏠', path: './index.html', toolPath: '../index.html' }
];

// Theme-specific menu icons
const THEME_ICONS = {
    'chaos-magick': '⛤',
    'shadow-work': '☽',
    'golden-dawn': '🪄',
    'green-witchcraft': '🧿',
    'blood-moon': '🕯️',
    'lunar-tides': '🔯'
};

// ========================================
// STATE
// ========================================

let isMenuOpen = false;

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize navigation menu
 */
function initNavMenu() {
    createMenuDOM();
    attachEventListeners();
    loadMenuState();
    highlightCurrentTool();
    updateMenuIcon();
    
    // Listen for theme changes
    const themeSelector = document.getElementById('mystical-path');
    if (themeSelector) {
        themeSelector.addEventListener('change', updateMenuIcon);
    }
}

/**
 * Update menu icon based on current theme
 */
function updateMenuIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'chaos-magick';
    const icon = THEME_ICONS[currentTheme] || '⛤';
    const hamburger = document.getElementById('nav-hamburger');
    
    if (hamburger) {
        hamburger.innerHTML = `<span class="nav-icon">${icon}</span>`;
    }
}

/**
 * Create menu DOM structure
 */
function createMenuDOM() {
    // Check if menu already exists
    if (document.getElementById('nav-menu')) {
        return;
    }
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.id = 'nav-hamburger';
    hamburger.className = 'nav-hamburger';
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = `<span class="nav-icon">⛤</span>`;
    
    // Create menu overlay
    const overlay = document.createElement('div');
    overlay.id = 'nav-overlay';
    overlay.className = 'nav-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    
    // Create menu panel
    const menu = document.createElement('nav');
    menu.id = 'nav-menu';
    menu.className = 'nav-menu';
    menu.setAttribute('role', 'navigation');
    menu.setAttribute('aria-label', 'Tool navigation');
    
    // Create menu header
    const header = document.createElement('div');
    header.className = 'nav-menu-header';
    header.innerHTML = `
        <h2 class="nav-menu-title">Mystical Path Tools</h2>
        <button id="nav-close" class="nav-close-btn" aria-label="Close navigation menu">✕</button>
    `;
    
    // Create tool list
    const toolList = document.createElement('ul');
    toolList.className = 'nav-tool-list';
    toolList.setAttribute('role', 'list');
    
    TOOLS.forEach(tool => {
        const li = document.createElement('li');
        li.setAttribute('role', 'listitem');
        
        const link = document.createElement('a');
        link.href = tool.path;
        link.className = 'nav-tool-link';
        link.setAttribute('data-tool', tool.name);
        link.innerHTML = `
            <span class="nav-tool-emoji">${tool.emoji}</span>
            <span class="nav-tool-name">${tool.name}</span>
        `;
        
        li.appendChild(link);
        toolList.appendChild(li);
    });
    
    // Assemble menu
    menu.appendChild(header);
    menu.appendChild(toolList);
    
    // Add to document
    document.body.appendChild(overlay);
    document.body.appendChild(menu);
    document.body.appendChild(hamburger);
}

/**
 * Attach event listeners
 */
function attachEventListeners() {
    const hamburger = document.getElementById('nav-hamburger');
    const closeBtn = document.getElementById('nav-close');
    const overlay = document.getElementById('nav-overlay');
    const menu = document.getElementById('nav-menu');
    
    // Open menu
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
    
    // Close menu when clicking a tool link (navigation in progress)
    const toolLinks = document.querySelectorAll('.nav-tool-link');
    toolLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
    
    // Trap focus inside menu when open
    menu.addEventListener('keydown', trapFocus);
}

/**
 * Toggle menu open/closed
 */
function toggleMenu() {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

/**
 * Open menu
 */
function openMenu() {
    const hamburger = document.getElementById('nav-hamburger');
    const overlay = document.getElementById('nav-overlay');
    const menu = document.getElementById('nav-menu');
    
    isMenuOpen = true;
    
    // Update DOM
    menu.classList.add('is-open');
    overlay.classList.add('is-visible');
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus first link
    setTimeout(() => {
        const firstLink = menu.querySelector('.nav-tool-link');
        if (firstLink) firstLink.focus();
    }, 100);
    
    // Save state
    saveMenuState();
}

/**
 * Close menu
 */
function closeMenu() {
    const hamburger = document.getElementById('nav-hamburger');
    const overlay = document.getElementById('nav-overlay');
    const menu = document.getElementById('nav-menu');
    
    isMenuOpen = false;
    
    // Update DOM
    menu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to hamburger
    hamburger.focus();
    
    // Save state
    saveMenuState();
}

/**
 * Handle keyboard events
 */
function handleKeyboard(e) {
    // Escape to close menu
    if (e.key === 'Escape' && isMenuOpen) {
        e.preventDefault();
        closeMenu();
    }
}

/**
 * Trap focus inside menu when open
 */
function trapFocus(e) {
    if (!isMenuOpen) return;
    
    const menu = document.getElementById('nav-menu');
    const focusableElements = menu.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Tab forward
    if (e.key === 'Tab' && !e.shiftKey) {
        if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
    
    // Tab backward
    if (e.key === 'Tab' && e.shiftKey) {
        if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        }
    }
}

/**
 * Highlight current tool in menu
 */
function highlightCurrentTool() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-tool-link');
    
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if current page matches this link
        if (currentPath.includes(linkPath.replace('../', '').replace('.html', ''))) {
            link.classList.add('is-current');
            link.setAttribute('aria-current', 'page');
        }
    });
}

/**
 * Save menu state to localStorage
 */
function saveMenuState() {
    try {
        localStorage.setItem('mystical-path-nav-open', isMenuOpen.toString());
    } catch (e) {
        console.error('Failed to save menu state:', e);
    }
}

/**
 * Load menu state from localStorage
 */
function loadMenuState() {
    try {
        const saved = localStorage.getItem('mystical-path-nav-open');
        
        // Don't auto-open menu on page load (would be annoying)
        // This is for future features like "remember last opened state"
        // For now, always start closed
        isMenuOpen = false;
    } catch (e) {
        console.error('Failed to load menu state:', e);
        isMenuOpen = false;
    }
}

// ========================================
// AUTO-INITIALIZE
// ========================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavMenu);
} else {
    initNavMenu();
}
