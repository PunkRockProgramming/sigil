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

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setTheme, themeColors, initializeTheme };
}
