/* ========================================
   KEYBOARD NAVIGATION UTILITY
   Arrow key navigation for card grids
   ======================================== */

/**
 * Enable keyboard navigation for a card grid
 * 
 * @param {string} gridId - ID of the grid container
 * @param {string} cardSelector - CSS selector for cards (e.g., '.ritual-card')
 * @param {Object} options - Optional configuration
 * @param {Function} options.onActivate - Callback when Enter/Space pressed on card
 * @param {number} options.columns - Number of columns (auto-detected if not provided)
 * @param {boolean} options.wrap - Whether to wrap at edges (default: true)
 */
function enableKeyboardNav(gridId, cardSelector, options = {}) {
    const grid = document.getElementById(gridId);
    if (!grid) {
        console.warn(`Grid element with ID "${gridId}" not found`);
        return;
    }
    
    const config = {
        onActivate: options.onActivate || defaultActivateHandler,
        columns: options.columns || null,
        wrap: options.wrap !== false
    };
    
    let focusedIndex = -1;
    
    // Get visible cards (for filtered grids)
    function getVisibleCards() {
        const cards = Array.from(grid.querySelectorAll(cardSelector));
        return cards.filter(card => {
            const style = window.getComputedStyle(card);
            return style.display !== 'none' && style.visibility !== 'hidden';
        });
    }
    
    // Detect grid columns
    function getColumnCount() {
        if (config.columns) return config.columns;
        
        const cards = getVisibleCards();
        if (cards.length < 2) return 1;
        
        // Calculate based on actual card positions
        const firstCardTop = cards[0].getBoundingClientRect().top;
        let columns = 1;
        for (let i = 1; i < cards.length; i++) {
            const cardTop = cards[i].getBoundingClientRect().top;
            if (Math.abs(cardTop - firstCardTop) < 5) {
                columns++;
            } else {
                break;
            }
        }
        return columns;
    }
    
    // Set focus on a card
    function focusCard(index) {
        const cards = getVisibleCards();
        if (index < 0 || index >= cards.length) return;
        
        // Remove tabindex from all cards
        cards.forEach(card => card.setAttribute('tabindex', '-1'));
        
        // Set focus on target card
        cards[index].setAttribute('tabindex', '0');
        cards[index].focus();
        focusedIndex = index;
    }
    
    // Default activation handler (toggle expand)
   function defaultActivateHandler(card) {
        const toggle = card.querySelector('.expand-toggle');
        if (toggle) {
            toggle.click();
        } else {
            // If no expand toggle, just toggle expanded class
            card.classList.toggle('expanded');
        }
    }
    
    // Handle arrow keys
    function handleKeyDown(event) {
        const cards = getVisibleCards();
        if (cards.length === 0) return;
        
        // Only handle if focus is on a card or grid
        const activeElement = document.activeElement;
        const isOnCard = activeElement.matches(cardSelector);
        const isOnGrid = activeElement === grid;
        
        if (!isOnCard && !isOnGrid) return;
        
        const columns = getColumnCount();
        const rows = Math.ceil(cards.length / columns);
        
        let newIndex = focusedIndex;
        
        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                newIndex = focusedIndex + 1;
                if (newIndex >= cards.length) {
                    newIndex = config.wrap ? 0 : focusedIndex;
                }
                break;
                
            case 'ArrowLeft':
                event.preventDefault();
                newIndex = focusedIndex - 1;
                if (newIndex < 0) {
                    newIndex = config.wrap ? cards.length - 1 : focusedIndex;
                }
                break;
                
            case 'ArrowDown':
                event.preventDefault();
                newIndex = focusedIndex + columns;
                if (newIndex >= cards.length) {
                    newIndex = config.wrap ? newIndex % columns : focusedIndex;
                }
                break;
                
            case 'ArrowUp':
                event.preventDefault();
                newIndex = focusedIndex - columns;
                if (newIndex < 0) {
                    const col = focusedIndex % columns;
                    const lastRowStart = (rows - 1) * columns;
                    newIndex = config.wrap ? lastRowStart + col : focusedIndex;
                    if (newIndex >= cards.length) newIndex = cards.length - 1;
                }
                break;
                
            case 'Home':
                event.preventDefault();
                newIndex = 0;
                break;
                
            case 'End':
                event.preventDefault();
                newIndex = cards.length - 1;
                break;
                
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (focusedIndex >= 0 && focusedIndex < cards.length) {
                    config.onActivate(cards[focusedIndex]);
                }
                return;
                
            default:
                return;
        }
        
        if (newIndex !== focusedIndex) {
            focusCard(newIndex);
        }
    }
    
    // Handle card clicks (update focus index)
    function handleCardClick(event) {
        const cards = getVisibleCards();
        const clickedCard = event.currentTarget;
        const index = cards.indexOf(clickedCard);
        if (index >= 0) {
            focusedIndex = index;
        }
    }
    
    // Initialize
    function init() {
        // Make grid focusable
        if (!grid.hasAttribute('tabindex')) {
            grid.setAttribute('tabindex', '-1');
        }
        
        // Add keyboard listener to document (works even when focus is elsewhere)
        document.addEventListener('keydown', handleKeyDown);
        
        // Add click listeners to cards
        grid.addEventListener('click', (event) => {
            const card = event.target.closest(cardSelector);
            if (card) {
                handleCardClick.call(card, event);
            }
        });
        
        // Focus first card when grid receives focus
        grid.addEventListener('focus', () => {
            if (focusedIndex < 0) {
                focusCard(0);
            }
        });
        
        // Make all cards initially non-focusable (tabindex=-1)
        const cards = getVisibleCards();
        cards.forEach(card => {
            card.setAttribute('tabindex', '-1');
        });
        
        // Make first card focusable
        if (cards.length > 0) {
            cards[0].setAttribute('tabindex', '0');
            focusedIndex = 0;
        }
    }
    
    // Reinitialize on grid content changes (for filtered grids)
    const observer = new MutationObserver(() => {
        const cards = getVisibleCards();
        if (focusedIndex >= cards.length) {
            focusedIndex = Math.max(0, cards.length - 1);
        }
        if (focusedIndex >= 0 && cards[focusedIndex]) {
            focusCard(focusedIndex);
        }
    });
    
    observer.observe(grid, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
    
    init();
    
    // Return cleanup function
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        observer.disconnect();
    };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { enableKeyboardNav };
}
