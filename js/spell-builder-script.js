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
    refreshGrimoireStats();

    // Auto-detect current moon phase if user hasn't selected one
    if (spellMoonPhaseSelect && !spellMoonPhaseSelect.value) {
        spellMoonPhaseSelect.value = getCurrentMoonPhaseValue();
    }

    // ─── Restore shared spell from URL param ──────────────────────
    if (typeof checkShareParam === 'function') {
        const sharedSpell = checkShareParam('spell');
        if (sharedSpell && sharedSpell.name) {
            showSharedSpell(sharedSpell);
        }
    }
});

function showSharedSpell(spell) {
    // Show a read-only view of the shared spell with "Add to Grimoire" option
    const overlay = document.createElement('div');
    overlay.id = 'shared-spell-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.style.cssText = [
        'position:fixed', 'inset:0', 'background:rgba(0,0,0,0.7)',
        'z-index:9999', 'display:flex', 'align-items:center', 'justify-content:center',
        'padding:20px', 'overflow-y:auto'
    ].join(';');

    const intentEmojis = { love:'💖', protection:'🛡️', prosperity:'💰', healing:'💚',
        wisdom:'📚', creativity:'🎨', peace:'🕊️', power:'⚡', divination:'🔮', cleansing:'✨' };
    const intentEmoji = intentEmojis[spell.intent] || '✨';

    const modal = document.createElement('div');
    modal.style.cssText = [
        'background:var(--darker,#1a1a2e)', 'border:2px solid var(--primary,#8b5cf6)',
        'border-radius:20px', 'padding:30px', 'max-width:600px', 'width:100%',
        'box-shadow:0 20px 60px rgba(0,0,0,0.5)'
    ].join(';');

    const herbs = spell.herbs && spell.herbs.length ? spell.herbs.join(', ') : '—';
    const crystals = spell.crystals && spell.crystals.length ? spell.crystals.join(', ') : '—';
    const instructions = spell.instructions ? spell.instructions.replace(/\n/g, '<br>') : '—';

    modal.innerHTML = `
        <p style="color:var(--accent,#f59e0b);font-size:0.85rem;margin:0 0 4px;">✨ Shared Spell</p>
        <h3 style="margin:0 0 16px;color:var(--text,#e0e0e0);font-size:1.4rem;">${intentEmoji} ${spell.name}</h3>
        <p style="color:var(--text-secondary,#aaa);font-size:0.9rem;margin-bottom:4px;"><strong>Intent:</strong> ${spell.intent || '—'}</p>
        ${spell.moonPhase ? `<p style="color:var(--text-secondary,#aaa);font-size:0.9rem;margin-bottom:4px;"><strong>Moon Phase:</strong> ${spell.moonPhase}</p>` : ''}
        <p style="color:var(--text-secondary,#aaa);font-size:0.9rem;margin-bottom:4px;"><strong>Herbs:</strong> ${herbs}</p>
        <p style="color:var(--text-secondary,#aaa);font-size:0.9rem;margin-bottom:16px;"><strong>Crystals:</strong> ${crystals}</p>
        <div style="background:var(--card-bg,rgba(255,255,255,0.05));border-radius:12px;padding:16px;margin-bottom:20px;">
            <p style="color:var(--text,#e0e0e0);font-size:0.9rem;line-height:1.7;">${instructions}</p>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <button id="add-to-grimoire-btn" style="padding:10px 20px;border-radius:20px;border:none;
                background:var(--primary,#8b5cf6);color:#fff;cursor:pointer;font-size:0.9rem;">
                📖 Add to My Grimoire
            </button>
            <button id="close-shared-spell-btn" style="padding:10px 20px;border-radius:20px;
                border:1px solid var(--card-border,#444);background:transparent;
                color:var(--text,#e0e0e0);cursor:pointer;font-size:0.9rem;">
                Close
            </button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    document.getElementById('add-to-grimoire-btn').addEventListener('click', () => {
        // Add to grimoire with a new ID and today's date
        const newSpell = {
            ...spell,
            id: Date.now(),
            dateCreated: new Date().toISOString(),
            lastCast: null,
            castCount: 0
        };
        grimoire.push(newSpell);
        saveGrimoire();
        renderGrimoire();
        updateSpellCount();
        refreshGrimoireStats();
        overlay.remove();
        showMessage(`"${spell.name}" added to your grimoire! 📖`);
    });

    document.getElementById('close-shared-spell-btn').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}

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
    refreshGrimoireStats();
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
            refreshGrimoireStats();
            showMessage('Spell deleted.');
        }
    });
    
    const shareBtn = document.createElement('button');
    shareBtn.className = 'btn-share';
    shareBtn.textContent = '🔗 Share';
    shareBtn.setAttribute('aria-label', `Share spell: ${spell.name}`);
    shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof buildShareURL === 'function') {
            const url = buildShareURL('spell', spell);
            if (url) showShareModal(url);
        }
    });

    actions.appendChild(castBtn);
    actions.appendChild(editBtn);
    actions.appendChild(shareBtn);
    actions.appendChild(deleteBtn);

    // Results button — only for spells that have been cast at least once
    if (spell.castCount > 0) {
        const resultsBtn = document.createElement('button');
        resultsBtn.className = 'btn-results';
        resultsBtn.textContent = spell.results ? '📝 Edit Results' : '📝 Record Results';
        resultsBtn.setAttribute('aria-label', `Record results for spell: ${spell.name}`);
        resultsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Expand card first if not already
            if (!card.classList.contains('expanded')) {
                card.classList.add('expanded');
                toggle.textContent = 'Hide Details';
            }
            toggleResultsEditor(details, spell);
        });
        actions.appendChild(resultsBtn);
    }

    details.appendChild(actions);
    
    // Assemble card
    card.appendChild(header);
    card.appendChild(info);
    card.appendChild(toggle);
    card.appendChild(details);
    
    return card;
}

function toggleResultsEditor(details, spell) {
    // If editor already exists on this card, toggle it
    let editor = details.querySelector('.spell-results-editor');
    if (editor) {
        editor.style.display = editor.style.display === 'none' ? 'block' : 'none';
        if (editor.style.display !== 'none') editor.querySelector('textarea').focus();
        return;
    }

    // Create inline results editor
    editor = document.createElement('div');
    editor.className = 'spell-results-editor';
    editor.innerHTML = `
        <h4>📝 Record Results</h4>
        <textarea class="results-textarea" rows="4" placeholder="What happened when you cast this spell? Any signs, outcomes, or observations...">${spell.results || ''}</textarea>
        <div class="results-actions">
            <button class="btn-save-results">💾 Save Results</button>
            <button class="btn-cancel-results">Cancel</button>
        </div>
    `;

    // Insert before the actions div
    const actionsEl = details.querySelector('.spell-actions');
    details.insertBefore(editor, actionsEl);
    editor.querySelector('textarea').focus();

    editor.querySelector('.btn-save-results').addEventListener('click', () => {
        const newResults = editor.querySelector('textarea').value.trim();
        const spellObj = getSpellById(spell.id);
        if (spellObj) {
            spellObj.results = newResults;
            saveGrimoire();
            renderGrimoire();
            showMessage('Results saved! ✨');
        }
    });

    editor.querySelector('.btn-cancel-results').addEventListener('click', () => {
        editor.style.display = 'none';
    });
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
                refreshGrimoireStats();
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

// ==========================================
// GRIMOIRE STATS
// ==========================================

function computeGrimoireStats(spells) {
    const total = spells.length;
    const castCount = spells.filter(s => s.castCount > 0).length;

    const byIntent = {};
    const byMoonPhase = {};
    const herbCounts = {};
    const crystalCounts = {};

    spells.forEach(spell => {
        if (spell.intent) byIntent[spell.intent] = (byIntent[spell.intent] || 0) + 1;
        if (spell.moonPhase) byMoonPhase[spell.moonPhase] = (byMoonPhase[spell.moonPhase] || 0) + 1;
        (spell.herbs || []).forEach(h => { herbCounts[h] = (herbCounts[h] || 0) + 1; });
        (spell.crystals || []).forEach(c => { crystalCounts[c] = (crystalCounts[c] || 0) + 1; });
    });

    const topHerbs = Object.entries(herbCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const topCrystals = Object.entries(crystalCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

    return { total, castCount, byIntent, byMoonPhase, topHerbs, topCrystals };
}

function renderGrimoireStats(stats) {
    const statsSection = document.getElementById('grimoire-stats');
    if (!statsSection) return;

    if (stats.total === 0) {
        statsSection.classList.add('hidden');
        return;
    }
    statsSection.classList.remove('hidden');

    // Overview
    const overviewEl = document.getElementById('stats-overview-content');
    if (overviewEl) {
        overviewEl.innerHTML = `
            <div class="stat-number">${stats.total}</div>
            <div class="stat-label">total spell${stats.total !== 1 ? 's' : ''}</div>
            <div class="stat-row">
                <span class="stat-bar-label">Cast</span>
                <span class="stat-bar-count">${stats.castCount}</span>
            </div>
            <div class="stat-row">
                <span class="stat-bar-label">Uncast</span>
                <span class="stat-bar-count">${stats.total - stats.castCount}</span>
            </div>
        `;
    }

    // By intent
    const intentEl = document.getElementById('stats-intent-content');
    if (intentEl) {
        const intentEntries = Object.entries(stats.byIntent).sort((a, b) => b[1] - a[1]);
        const maxIntent = intentEntries[0]?.[1] || 1;
        intentEl.innerHTML = intentEntries.map(([name, count]) => {
            const pct = Math.round((count / maxIntent) * 100);
            return `<div class="stat-row">
                <span class="stat-bar-label">${name}</span>
                <span class="stat-bar"><span class="stat-bar-fill" style="width:${pct}%"></span></span>
                <span class="stat-bar-count">${count}</span>
            </div>`;
        }).join('') || '<p style="color:var(--text-secondary);font-size:0.85rem">No data</p>';
    }

    // By moon phase
    const moonEl = document.getElementById('stats-moon-content');
    const moonEmojis = {
        new: '🌑', 'waxing-crescent': '🌒', 'first-quarter': '🌓',
        'waxing-gibbous': '🌔', full: '🌕', 'waning-gibbous': '🌖',
        'last-quarter': '🌗', 'waning-crescent': '🌘'
    };
    if (moonEl) {
        const moonEntries = Object.entries(stats.byMoonPhase).sort((a, b) => b[1] - a[1]);
        const maxMoon = moonEntries[0]?.[1] || 1;
        moonEl.innerHTML = moonEntries.map(([phase, count]) => {
            const pct = Math.round((count / maxMoon) * 100);
            const label = `${moonEmojis[phase] || ''} ${phase.replace(/-/g, ' ')}`;
            return `<div class="stat-row">
                <span class="stat-bar-label">${label}</span>
                <span class="stat-bar"><span class="stat-bar-fill" style="width:${pct}%"></span></span>
                <span class="stat-bar-count">${count}</span>
            </div>`;
        }).join('') || '<p style="color:var(--text-secondary);font-size:0.85rem">No data</p>';
    }

    // Top ingredients
    const ingredientsEl = document.getElementById('stats-ingredients-content');
    if (ingredientsEl) {
        const maxIngredient = Math.max(
            stats.topHerbs[0]?.[1] || 0,
            stats.topCrystals[0]?.[1] || 0,
            1
        );
        const herbRows = stats.topHerbs.map(([name, count]) => {
            const pct = Math.round((count / maxIngredient) * 100);
            return `<div class="stat-row">
                <span class="stat-bar-label">🌿 ${name}</span>
                <span class="stat-bar"><span class="stat-bar-fill" style="width:${pct}%"></span></span>
                <span class="stat-bar-count">${count}</span>
            </div>`;
        });
        const crystalRows = stats.topCrystals.map(([name, count]) => {
            const pct = Math.round((count / maxIngredient) * 100);
            return `<div class="stat-row">
                <span class="stat-bar-label">💎 ${name}</span>
                <span class="stat-bar"><span class="stat-bar-fill" style="width:${pct}%"></span></span>
                <span class="stat-bar-count">${count}</span>
            </div>`;
        });
        const herbSection = herbRows.length
            ? `<p class="stat-sub-heading">Herbs</p>${herbRows.join('')}` : '';
        const crystalSection = crystalRows.length
            ? `<p class="stat-sub-heading">Crystals</p>${crystalRows.join('')}` : '';
        ingredientsEl.innerHTML = herbSection + crystalSection ||
            '<p style="color:var(--text-secondary);font-size:0.85rem">No ingredients recorded</p>';
    }
}

function refreshGrimoireStats() {
    const stats = computeGrimoireStats(grimoire);
    renderGrimoireStats(stats);
}

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
