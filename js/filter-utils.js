// ========================================
// FILTER UTILITIES
// Shared filtering logic for all tools
// ========================================

/**
 * Generic multi-filter function for array of objects
 * @param {Array} items - Array of items to filter
 * @param {Object} filters - Object with filter key-value pairs (e.g., {category: 'Protection', difficulty: 'Beginner'})
 * @param {Object} propertyMap - Maps filter keys to item property accessors
 * @returns {Array} Filtered items
 * 
 * @example
 * const filtered = filterItems(rituals, 
 *   {category: 'Protection', difficulty: 'Beginner'},
 *   {
 *     category: (item) => item.category,
 *     difficulty: (item) => item.difficulty
 *   }
 * );
 */
function filterItems(items, filters, propertyMap) {
    return items.filter(item => {
        return Object.entries(filters).every(([filterKey, filterValue]) => {
            // Skip if filter is set to 'all'
            if (filterValue === 'all') return true;
            
            // Get the item's value for this property
            const itemValue = propertyMap[filterKey](item);
            
            // Handle array values (e.g., crystal.chakra = ['Root', 'Heart'])
            if (Array.isArray(itemValue)) {
                return itemValue.includes(filterValue);
            }
            
            // Handle single values
            return itemValue === filterValue;
        });
    });
}

/**
 * Search filter - checks if search term exists in specified properties
 * @param {Array} items - Array of items to search
 * @param {string} searchTerm - Term to search for (case-insensitive)
 * @param {Array<Function>} searchProperties - Array of functions that extract searchable text from items
 * @returns {Array} Items matching search term
 * 
 * @example
 * const results = searchItems(crystals, 'quartz', [
 *   (item) => item.name,
 *   (item) => item.properties
 * ]);
 */
function searchItems(items, searchTerm, searchProperties) {
    if (!searchTerm || searchTerm.trim() === '') return items;
    
    const term = searchTerm.toLowerCase().trim();
    
    return items.filter(item => {
        return searchProperties.some(getProp => {
            const value = getProp(item);
            if (typeof value === 'string') {
                return value.toLowerCase().includes(term);
            }
            if (Array.isArray(value)) {
                return value.some(v => v.toLowerCase().includes(term));
            }
            return false;
        });
    });
}

/**
 * Combined filter and search
 * @param {Array} items - Array of items
 * @param {string} searchTerm - Search term
 * @param {Array<Function>} searchProperties - Properties to search in
 * @param {Object} filters - Filter key-value pairs
 * @param {Object} propertyMap - Property accessor map
 * @returns {Array} Filtered and searched items
 */
function filterAndSearch(items, searchTerm, searchProperties, filters, propertyMap) {
    // First apply search
    let results = searchItems(items, searchTerm, searchProperties);
    
    // Then apply filters
    results = filterItems(results, filters, propertyMap);
    
    return results;
}

/**
 * Clear all filter dropdowns and search inputs
 * @param {Object} elements - Object containing DOM elements {search: input, filters: [select1, select2, ...]}
 */
function clearFilters(elements) {
    // Clear search input
    if (elements.search) {
        elements.search.value = '';
    }
    
    // Reset all filter dropdowns to 'all'
    if (elements.filters) {
        elements.filters.forEach(filter => {
            filter.value = 'all';
        });
    }
}

/**
 * Update results count display
 * @param {HTMLElement} countElement - Element to update with count
 * @param {number} count - Number of filtered results
 * @param {string} itemType - Type of items (e.g., 'crystals', 'rituals')
 */
function updateResultCount(countElement, count, itemType = 'items') {
    if (!countElement) return;
    
    countElement.textContent = count;
    
    // Optional: Add contextual text
    if (countElement.dataset.showContext === 'true') {
        const plural = count !== 1;
        countElement.textContent = `${count} ${itemType}${plural ? 's' : ''}`;
    }
}
