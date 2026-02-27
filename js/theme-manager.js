/**
 * MYSTICAL PATH TOOLS - THEME MANAGER
 * Shared theme management across all tools
 */

// Theme color mappings for tools that need specific color values
const themeColors = {
    'chaos-magick': '#8b5cf6',
    'shadow-work': '#4a5568',
    'golden-dawn': '#f59e0b',
    'green-witchcraft': '#10b981',
    'blood-moon': '#dc2626',
    'lunar-tides': '#3b82f6'
};

/**
 * Set the active theme
 * @param {string} themeName - Name of the theme to apply
 */
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('mystical-path', themeName);
    
    // Update theme selector dropdown if it exists
    const themeSelector = document.getElementById('mystical-path');
    if (themeSelector) {
        themeSelector.value = themeName;
    }
    
    // Update color picker if it exists (for sigil generator)
    const colorPicker = document.getElementById('color-picker');
    if (colorPicker && themeColors[themeName]) {
        colorPicker.value = themeColors[themeName];
    }
}

/**
 * Initialize theme on page load
 */
function initializeTheme() {
    // Load saved theme from localStorage, default to 'chaos-magick'
    const savedTheme = localStorage.getItem('mystical-path') || 'chaos-magick';
    setTheme(savedTheme);
    
    // Set up theme selector event listener
    const themeSelector = document.getElementById('mystical-path');
    if (themeSelector) {
        themeSelector.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });
    }
}

// Initialize theme immediately when script loads
initializeTheme();

// ─── SERVICE WORKER UPDATE BANNER ────────────────────────────────────────────

function showUpdateBanner() {
    const existing = document.getElementById('sw-update-banner');
    if (existing) return;

    const banner = document.createElement('div');
    banner.id = 'sw-update-banner';
    banner.setAttribute('role', 'alert');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML = '✨ A new version is available — <button id="sw-refresh-btn">Refresh</button>';
    banner.style.cssText = [
        'position:fixed', 'top:0', 'left:0', 'right:0',
        'background:var(--primary,#8b5cf6)', 'color:#fff',
        'text-align:center', 'padding:12px 16px', 'z-index:10000',
        'font-size:0.95rem', 'cursor:pointer'
    ].join(';');

    const btn = banner.querySelector('#sw-refresh-btn');
    btn.style.cssText = [
        'background:rgba(255,255,255,0.2)', 'border:1px solid rgba(255,255,255,0.5)',
        'color:#fff', 'padding:4px 14px', 'border-radius:20px',
        'cursor:pointer', 'margin-left:10px', 'font-size:0.9rem'
    ].join(';');

    btn.addEventListener('click', (e) => { e.stopPropagation(); location.reload(); });
    banner.addEventListener('click', () => banner.remove());

    document.body.insertBefore(banner, document.body.firstChild);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', showUpdateBanner);
    // Also listen for postMessage from the SW (catches same-tab updates)
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_UPDATED') {
            showUpdateBanner();
        }
    });
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setTheme, themeColors, initializeTheme };
}
