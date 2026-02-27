// ==========================================
// SPELL BUILDER & GRIMOIRE - JavaScript
// ==========================================

// ==========================================
// DATA STRUCTURE
// ==========================================

// Spell Object Template:
// {
//     id: unique timestamp
//     name: string
//     intent: string (category)
//     moonPhase: string or ""
//     sabbat: string or ""
//     herbs: array of herb names
//     crystals: array of crystal names
//     candleColor: string or ""
//     otherTools: string
//     instructions: string (multi-line)
//     notes: string
//     results: string (post-casting feedback)
//     dateCreated: ISO date string
//     lastCast: ISO date string or null
//     castCount: number
// }

// ==========================================
// HERB & CRYSTAL DATA (Subset from databases)
// ==========================================

const COMMON_HERBS = [
    { name: 'Lavender', emoji: '🌸', intentions: ['Peace', 'Sleep', 'Love'] },
    { name: 'Rosemary', emoji: '🌿', intentions: ['Protection', 'Memory', 'Cleansing'] },
    { name: 'Sage', emoji: '🍃', intentions: ['Cleansing', 'Wisdom', 'Protection'] },
    { name: 'Mugwort', emoji: '🌾', intentions: ['Divination', 'Dreams', 'Protection'] },
    { name: 'Rose', emoji: '🌹', intentions: ['Love', 'Peace', 'Divination'] },
    { name: 'Chamomile', emoji: '🌼', intentions: ['Peace', 'Sleep', 'Prosperity'] },
    { name: 'Cinnamon', emoji: '🪵', intentions: ['Prosperity', 'Love', 'Power'] },
    { name: 'Bay Laurel', emoji: '🍂', intentions: ['Protection', 'Wisdom', 'Prosperity'] },
    { name: 'Thyme', emoji: '🌿', intentions: ['Courage', 'Healing', 'Cleansing'] },
    { name: 'Basil', emoji: '🌿', intentions: ['Prosperity', 'Love', 'Protection'] },
    { name: 'Peppermint', emoji: '🌿', intentions: ['Healing', 'Cleansing', 'Prosperity'] },
    { name: 'Jasmine', emoji: '🌸', intentions: ['Love', 'Dreams', 'Prosperity'] },
    { name: 'Yarrow', emoji: '🌼', intentions: ['Courage', 'Love', 'Divination'] },
    { name: 'St John\'s Wort', emoji: '🌼', intentions: ['Protection', 'Healing', 'Power'] },
    { name: 'Nettle', emoji: '🍀', intentions: ['Protection', 'Healing', 'Banishing'] },
    { name: 'Dandelion', emoji: '🌼', intentions: ['Divination', 'Wishes', 'Communication'] },
    { name: 'Cedar', emoji: '🌲', intentions: ['Protection', 'Cleansing', 'Prosperity'] },
    { name: 'Pine', emoji: '🌲', intentions: ['Cleansing', 'Prosperity', 'Healing'] },
    { name: 'Eucalyptus', emoji: '🍃', intentions: ['Healing', 'Cleansing', 'Protection'] },
    { name: 'Frankincense', emoji: '🔥', intentions: ['Spirituality', 'Protection', 'Cleansing'] }
];

const COMMON_CRYSTALS = [
    { name: 'Clear Quartz', emoji: '💎', intentions: ['Amplification', 'Clarity', 'Healing'] },
    { name: 'Amethyst', emoji: '💜', intentions: ['Spirituality', 'Peace', 'Protection'] },
    { name: 'Rose Quartz', emoji: '🌸', intentions: ['Love', 'Compassion', 'Peace'] },
    { name: 'Black Tourmaline', emoji: '🖤', intentions: ['Protection', 'Grounding', 'Banishing'] },
    { name: 'Citrine', emoji: '💛', intentions: ['Prosperity', 'Joy', 'Power'] },
    { name: 'Selenite', emoji: '🤍', intentions: ['Cleansing', 'Clarity', 'Spirituality'] },
    { name: 'Labradorite', emoji: '🌀', intentions: ['Transformation', 'Protection', 'Intuition'] },
    { name: 'Carnelian', emoji: '🧡', intentions: ['Courage', 'Creativity', 'Vitality'] },
    { name: 'Moonstone', emoji: '🌙', intentions: ['Intuition', 'Dreams', 'Femininity'] },
    { name: 'Obsidian', emoji: '🖤', intentions: ['Protection', 'Grounding', 'Truth'] },
    { name: 'Aventurine', emoji: '💚', intentions: ['Prosperity', 'Luck', 'Heart Healing'] },
    { name: 'Lapis Lazuli', emoji: '💙', intentions: ['Wisdom', 'Truth', 'Communication'] },
    { name: 'Tiger\'s Eye', emoji: '🟤', intentions: ['Courage', 'Protection', 'Grounding'] },
    { name: 'Fluorite', emoji: '🌈', intentions: ['Clarity', 'Focus', 'Protection'] },
    { name: 'Smoky Quartz', emoji: '🟫', intentions: ['Grounding', 'Cleansing', 'Protection'] },
    { name: 'Pyrite', emoji: '✨', intentions: ['Prosperity', 'Power', 'Protection'] },
    { name: 'Hematite', emoji: '⚫', intentions: ['Grounding', 'Protection', 'Strength'] },
    { name: 'Sodalite', emoji: '💙', intentions: ['Communication', 'Truth', 'Logic'] },
    { name: 'Amazonite', emoji: '💚', intentions: ['Communication', 'Courage', 'Heart Healing'] },
    { name: 'Jade', emoji: '💚', intentions: ['Prosperity', 'Harmony', 'Protection'] }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================

let grimoire = []; // Array of saved spells
let editingSpellId = null; // ID of spell being edited, or null

// ==========================================
// DOM ELEMENTS
// ==========================================

// View toggle
const createViewBtn = document.getElementById('create-view-btn');
const grimoireViewBtn = document.getElementById('grimoire-view-btn');
const createSection = document.getElementById('create-section');
const grimoireSection = document.getElementById('grimoire-section');

// Form elements
const spellForm = document.getElementById('spell-form');
const spellNameInput = document.getElementById('spell-name');
const spellIntentSelect = document.getElementById('spell-intent');
const spellMoonPhaseSelect = document.getElementById('spell-moon-phase');
const spellSabbatSelect = document.getElementById('spell-sabbat');
const herbSelection = document.getElementById('herb-selection');
const crystalSelection = document.getElementById('crystal-selection');
const spellCandleColorSelect = document.getElementById('spell-candle-color');
const spellOtherToolsInput = document.getElementById('spell-other-tools');
const spellInstructionsTextarea = document.getElementById('spell-instructions');
const spellNotesTextarea = document.getElementById('spell-notes');
const clearFormBtn = document.getElementById('clear-form-btn');

// Grimoire elements
const spellSearch = document.getElementById('spell-search');
const filterIntent = document.getElementById('filter-intent');
const filterMoonPhase = document.getElementById('filter-moon-phase');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const spellCount = document.getElementById('spell-count');
const spellGrid = document.getElementById('spell-grid');
const emptyState = document.getElementById('empty-state');
const exportGrimoireBtn = document.getElementById('export-grimoire-btn');
const importGrimoireBtn = document.getElementById('import-grimoire-btn');
const importFileInput = document.getElementById('import-file-input');

// ==========================================
// INITIALIZATION
// ==========================================

/**
 * Get current moon phase value matching the spell-moon-phase select options
 */
function getCurrentMoonPhaseValue() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let y = year;
    let m = month;
    if (m <= 2) { y -= 1; m += 12; }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
    const daysSinceNew = jd - 2451550.1;
    const synodicMonth = 29.53058867;
    const phase = ((daysSinceNew / synodicMonth) - Math.floor(daysSinceNew / synodicMonth)) * synodicMonth;

    if (phase < 1.84566) return 'new';
    else if (phase < 5.53699) return 'waxing-crescent';
    else if (phase < 9.22831) return 'first-quarter';
    else if (phase < 12.91963) return 'waxing-gibbous';
    else if (phase < 16.61096) return 'full';
    else if (phase < 20.30228) return 'waning-gibbous';
    else if (phase < 23.99361) return 'last-quarter';
    else if (phase < 27.68493) return 'waning-crescent';
    else return 'new';
}

document.addEventListener('DOMContentLoaded', () => {
    loadGrimoire();
    populateIngredientCheckboxes();
    initializeEventListeners();
    renderGrimoire();
    updateSpellCount();

    // Auto-detect current moon phase if user hasn't selected one
    if (spellMoonPhaseSelect && !spellMoonPhaseSelect.value) {
        spellMoonPhaseSelect.value = getCurrentMoonPhaseValue();
    }
});

function initializeEventListeners() {
    // View toggle
    createViewBtn.addEventListener('click', () => switchView('create'));
    grimoireViewBtn.addEventListener('click', () => switchView('grimoire'));
    
    // Form
    spellForm.addEventListener('submit', handleFormSubmit);
    clearFormBtn.addEventListener('click', clearForm);
    
    // Grimoire filters
    spellSearch.addEventListener('input', renderGrimoire);
    filterIntent.addEventListener('change', renderGrimoire);
    filterMoonPhase.addEventListener('change', renderGrimoire);
    clearFiltersBtn.addEventListener('click', () => {
        clearFilters([spellSearch, filterIntent, filterMoonPhase]);
        renderGrimoire();
    });
    
    // Export/Import
    exportGrimoireBtn.addEventListener('click', exportGrimoire);
    importGrimoireBtn.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', importGrimoire);
}

// ==========================================
// VIEW SWITCHING
// ==========================================

function switchView(view) {
    if (view === 'create') {
        createSection.classList.add('active-view');
        grimoireSection.classList.remove('active-view');
        createViewBtn.classList.add('active');
        grimoireViewBtn.classList.remove('active');
    } else {
        createSection.classList.remove('active-view');
        grimoireSection.classList.add('active-view');
        createViewBtn.classList.remove('active');
        grimoireViewBtn.classList.add('active');
    }
}

// ==========================================
// INGREDIENT SELECTION
// ==========================================

function populateIngredientCheckboxes() {
    // Populate herbs
    COMMON_HERBS.forEach(herb => {
        const checkbox = createIngredientCheckbox(herb.name, herb.emoji, 'herb');
        herbSelection.appendChild(checkbox);
    });
    
    // Populate crystals
    COMMON_CRYSTALS.forEach(crystal => {
        const checkbox = createIngredientCheckbox(crystal.name, crystal.emoji, 'crystal');
        crystalSelection.appendChild(checkbox);
    });
}

function createIngredientCheckbox(name, emoji, type) {
    const label = document.createElement('label');
    label.className = 'ingredient-checkbox';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = name;
    checkbox.dataset.type = type;
    
    const span = document.createElement('span');
    span.textContent = `${emoji} ${name}`;
    
    label.appendChild(checkbox);
    label.appendChild(span);
    
    return label;
}

function getSelectedIngredients(type) {
    const checkboxes = document.querySelectorAll(`input[data-type="${type}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

function setSelectedIngredients(type, names) {
    const checkboxes = document.querySelectorAll(`input[data-type="${type}"]`);
    checkboxes.forEach(cb => {
        cb.checked = names.includes(cb.value);
    });
}

// ==========================================
// FORM HANDLING
// ==========================================

function handleFormSubmit(e) {
    e.preventDefault();
    
    const spell = {
        id: editingSpellId || Date.now(),
        name: spellNameInput.value.trim(),
        intent: spellIntentSelect.value,
        moonPhase: spellMoonPhaseSelect.value,
        sabbat: spellSabbatSelect.value,
        herbs: getSelectedIngredients('herb'),
        crystals: getSelectedIngredients('crystal'),
        candleColor: spellCandleColorSelect.value,
        otherTools: spellOtherToolsInput.value.trim(),
        instructions: spellInstructionsTextarea.value.trim(),
        notes: spellNotesTextarea.value.trim(),
        results: editingSpellId ? getSpellById(editingSpellId)?.results || '' : '',
        dateCreated: editingSpellId ? getSpellById(editingSpellId)?.dateCreated : new Date().toISOString(),
        lastCast: editingSpellId ? getSpellById(editingSpellId)?.lastCast : null,
        castCount: editingSpellId ? getSpellById(editingSpellId)?.castCount : 0
    };
    
    if (editingSpellId) {
        updateSpell(spell);
        showMessage('Spell updated successfully! ✨');
        editingSpellId = null;
    } else {
        addSpell(spell);
        showMessage('Spell saved to grimoire! 📖');
    }
    
    clearForm();
    saveGrimoire();
    switchView('grimoire');
    renderGrimoire();
    updateSpellCount();
}

function clearForm() {
    spellForm.reset();
    
    // Uncheck all ingredient checkboxes
    const allCheckboxes = document.querySelectorAll('.ingredient-checkboxes input[type="checkbox"]');
    allCheckboxes.forEach(cb => cb.checked = false);
    
    editingSpellId = null;
    
    // Update submit button text
    const submitBtn = spellForm.querySelector('button[type="submit"]');
    submitBtn.textContent = '💾 Save to Grimoire';
}

function loadSpellIntoForm(spell) {
    spellNameInput.value = spell.name;
    spellIntentSelect.value = spell.intent;
    spellMoonPhaseSelect.value = spell.moonPhase;
    spellSabbatSelect.value = spell.sabbat;
    setSelectedIngredients('herb', spell.herbs);
    setSelectedIngredients('crystal', spell.crystals);
    spellCandleColorSelect.value = spell.candleColor;
    spellOtherToolsInput.value = spell.otherTools;
    spellInstructionsTextarea.value = spell.instructions;
    spellNotesTextarea.value = spell.notes;
    
    editingSpellId = spell.id;
    
    // Update submit button text
    const submitBtn = spellForm.querySelector('button[type="submit"]');
    submitBtn.textContent = '💾 Update Spell';
    
    switchView('create');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// GRIMOIRE STORAGE (localStorage)
// ==========================================

function loadGrimoire() {
    const saved = localStorage.getItem('mystical-path-grimoire');
    if (saved) {
        try {
            grimoire = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load grimoire:', e);
            grimoire = [];
        }
    }
}

function saveGrimoire() {
    localStorage.setItem('mystical-path-grimoire', JSON.stringify(grimoire));
}

function addSpell(spell) {
    grimoire.push(spell);
}

function updateSpell(updatedSpell) {
    const index = grimoire.findIndex(s => s.id === updatedSpell.id);
    if (index !== -1) {
        grimoire[index] = updatedSpell;
    }
}

function deleteSpell(id) {
    grimoire = grimoire.filter(s => s.id !== id);
}

function getSpellById(id) {
    return grimoire.find(s => s.id === id);
}

function castSpell(id) {
    const spell = getSpellById(id);
    if (spell) {
        spell.lastCast = new Date().toISOString();
        spell.castCount = (spell.castCount || 0) + 1;
        saveGrimoire();
        renderGrimoire();
        showMessage(`"${spell.name}" cast successfully! 🔮`);
    }
}

// ==========================================
// GRIMOIRE RENDERING
// ==========================================

function renderGrimoire() {
    const searchTerm = spellSearch.value;
    const intentFilter = filterIntent.value;
    const moonPhaseFilter = filterMoonPhase.value;
    
    // Filter spells
    let filtered = grimoire;
    
    // Apply search
    if (searchTerm) {
        filtered = searchItems(
            filtered,
            searchTerm,
            [
                (spell) => spell.name,
                (spell) => spell.intent,
                (spell) => spell.instructions,
                (spell) => spell.notes
            ]
        );
    }
    
    // Apply filters
    filtered = filterItems(
        filtered,
        {
            intent: intentFilter,
            moonPhase: moonPhaseFilter
        },
        {
            intent: (spell) => spell.intent,
            moonPhase: (spell) => spell.moonPhase
        }
    );
    
    // Sort by most recently created
    filtered.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
    
    // Render
    spellGrid.innerHTML = '';
    
    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        spellGrid.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        spellGrid.style.display = 'grid';
        
        filtered.forEach(spell => {
            const card = createSpellCard(spell);
            spellGrid.appendChild(card);
        });
        
        // Initialize keyboard navigation
        setTimeout(() => {
            enableKeyboardNav('spell-grid', '.spell-card');
        }, 100);
    }
    
    updateSpellCount(filtered.length);
}

function createSpellCard(spell) {
    const card = document.createElement('div');
    card.className = 'spell-card';
    card.setAttribute('role', 'listitem');
    card.dataset.spellId = spell.id;
    
    // Get intent emoji
    const intentEmojis = {
        love: '💖',
        protection: '🛡️',
        prosperity: '💰',
        healing: '💚',
        wisdom: '📚',
        creativity: '🎨',
        peace: '🕊️',
        power: '⚡',
        divination: '🔮',
        cleansing: '✨'
    };
    
    // Get moon emoji
    const moonEmojis = {
        new: '🌑',
        'waxing-crescent': '🌒',
        'first-quarter': '🌓',
        'waxing-gibbous': '🌔',
        full: '🌕',
        'waning-gibbous': '🌖',
        'last-quarter': '🌗',
        'waning-crescent': '🌘'
    };
    
    const intentEmoji = intentEmojis[spell.intent] || '✨';
    const moonEmoji = spell.moonPhase ? moonEmojis[spell.moonPhase] || '' : '';
    
    // Header
    const header = document.createElement('div');
    header.className = 'spell-card-header';
    header.innerHTML = `
        <h3>${intentEmoji} ${spell.name}</h3>
        <div class="spell-meta">
            <span class="spell-intent">${spell.intent.charAt(0).toUpperCase() + spell.intent.slice(1)}</span>
            ${moonEmoji ? `<span class="spell-moon">${moonEmoji}</span>` : ''}
        </div>
    `;
    
    // Quick info
    const info = document.createElement('div');
    info.className = 'spell-info';
    
    const ingredients = [];
    if (spell.herbs.length > 0) ingredients.push(`${spell.herbs.length} herbs`);
    if (spell.crystals.length > 0) ingredients.push(`${spell.crystals.length} crystals`);
    if (spell.candleColor) ingredients.push(`${spell.candleColor} candle`);
    
    info.innerHTML = `
        <p><strong>Ingredients:</strong> ${ingredients.length > 0 ? ingredients.join(', ') : 'None'}</p>
        ${spell.sabbat ? `<p><strong>Sabbat:</strong> ${spell.sabbat.charAt(0).toUpperCase() + spell.sabbat.slice(1)}</p>` : ''}
        ${spell.lastCast ? `<p><strong>Last Cast:</strong> ${formatDate(spell.lastCast)} (${spell.castCount} times)</p>` : '<p class="spell-never-cast">Never cast</p>'}
    `;
    
    // Expand toggle
    const toggle = document.createElement('div');
    toggle.className = 'expand-toggle';
    toggle.textContent = 'Show Details';
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('expanded');
        toggle.textContent = card.classList.contains('expanded') ? 'Hide Details' : 'Show Details';
    });
    
    // Details section
    const details = document.createElement('div');
    details.className = 'spell-details';
    
    let detailsHTML = `
        <div class="spell-section">
            <h4>Ingredients</h4>
            ${spell.herbs.length > 0 ? `<p><strong>Herbs:</strong> ${spell.herbs.map(h => {
                const herb = COMMON_HERBS.find(ch => ch.name === h);
                return herb ? `${herb.emoji} ${h}` : h;
            }).join(', ')}</p>` : ''}
            ${spell.crystals.length > 0 ? `<p><strong>Crystals:</strong> ${spell.crystals.map(c => {
                const crystal = COMMON_CRYSTALS.find(cc => cc.name === c);
                return crystal ? `${crystal.emoji} ${c}` : c;
            }).join(', ')}</p>` : ''}
            ${spell.candleColor ? `<p><strong>Candle:</strong> ${spell.candleColor.charAt(0).toUpperCase() + spell.candleColor.slice(1)}</p>` : ''}
            ${spell.otherTools ? `<p><strong>Other Tools:</strong> ${spell.otherTools}</p>` : ''}
        </div>
        
        <div class="spell-section">
            <h4>Instructions</h4>
            <p class="spell-instructions">${spell.instructions.replace(/\n/g, '<br>')}</p>
        </div>
        
        ${spell.notes ? `
        <div class="spell-section">
            <h4>Notes</h4>
            <p>${spell.notes.replace(/\n/g, '<br>')}</p>
        </div>
        ` : ''}
        
        ${spell.results ? `
        <div class="spell-section">
            <h4>Results</h4>
            <p>${spell.results.replace(/\n/g, '<br>')}</p>
        </div>
        ` : ''}
    `;
    
    details.innerHTML = detailsHTML;
    
    // Actions
    const actions = document.createElement('div');
    actions.className = 'spell-actions';
    
    const castBtn = document.createElement('button');
    castBtn.className = 'btn-cast';
    castBtn.textContent = '🔮 Cast Spell';
    castBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        castSpell(spell.id);
    });
    
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-edit';
    editBtn.textContent = '✏️ Edit';
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        loadSpellIntoForm(spell);
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = '🗑️ Delete';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Delete "${spell.name}"?`)) {
            deleteSpell(spell.id);
            saveGrimoire();
            renderGrimoire();
            updateSpellCount();
            showMessage('Spell deleted.');
        }
    });
    
    actions.appendChild(castBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    details.appendChild(actions);
    
    // Assemble card
    card.appendChild(header);
    card.appendChild(info);
    card.appendChild(toggle);
    card.appendChild(details);
    
    return card;
}

function updateSpellCount(count) {
    const total = count !== undefined ? count : grimoire.length;
    spellCount.textContent = `${total} ${total === 1 ? 'spell' : 'spells'}`;
}

// ==========================================
// EXPORT / IMPORT
// ==========================================

function exportGrimoire() {
    if (grimoire.length === 0) {
        showMessage('Your grimoire is empty. Nothing to export.');
        return;
    }
    
    const dataStr = JSON.stringify(grimoire, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `grimoire-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    showMessage('Grimoire exported! 💾');
}

function importGrimoire(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const imported = JSON.parse(event.target.result);
            
            if (!Array.isArray(imported)) {
                throw new Error('Invalid format');
            }
            
            if (confirm(`Import ${imported.length} spells? This will merge with your existing grimoire.`)) {
                grimoire = [...grimoire, ...imported];
                saveGrimoire();
                renderGrimoire();
                updateSpellCount();
                showMessage(`Imported ${imported.length} spells! 📖`);
            }
        } catch (err) {
            alert('Failed to import grimoire. Invalid file format.');
        }
    };
    
    reader.readAsText(file);
    importFileInput.value = ''; // Reset input
}

// ==========================================
// UTILITIES
// ==========================================

function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function showMessage(msg) {
    // Simple message display (could be enhanced with a toast notification)
    const existingMsg = document.querySelector('.success-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = msg;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 3000);
}
