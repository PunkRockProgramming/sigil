// ========================================
// AFFIRMATION GENERATOR
// ========================================

// ========================================
// AFFIRMATION DATA (80 total)
// ========================================

// Moon phase values: new, waxing-crescent, first-quarter, waxing-gibbous,
//                   full, waning-gibbous, last-quarter, waning-crescent
// Mapping intent:
//   new moon         → new beginnings, manifestation, intention-setting
//   waxing phases    → growth, abundance, self-love, strength
//   full moon        → peak power, intuition, healing, gratitude
//   waning phases    → release, protection, peace, banishing
//   (most categories span multiple phases — narrower ones get 3-4, universal get 6+)

const AFFIRMATIONS = [
    // Self-Love (10)
    { category: "Self-Love", moonPhases: ["new", "waxing-crescent", "full", "waning-crescent"], text: "I am worthy of love, respect, and all the blessings the universe offers." },
    { category: "Self-Love", moonPhases: ["new", "waxing-crescent", "first-quarter", "full"], text: "I honor my body, mind, and spirit as sacred vessels of divine energy." },
    { category: "Self-Love", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent", "new"], text: "I release all judgment and embrace myself with unconditional compassion." },
    { category: "Self-Love", moonPhases: ["new", "full", "waning-crescent"], text: "I am enough, exactly as I am in this present moment." },
    { category: "Self-Love", moonPhases: ["full", "waxing-gibbous", "waning-gibbous"], text: "I treat myself with the same kindness I offer to those I cherish." },
    { category: "Self-Love", moonPhases: ["new", "waxing-crescent", "first-quarter", "waxing-gibbous"], text: "I celebrate my uniqueness and honor my authentic self." },
    { category: "Self-Love", moonPhases: ["waning-crescent", "new", "last-quarter"], text: "I am deserving of care, rest, and gentle nurturing." },
    { category: "Self-Love", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent"], text: "I forgive myself for past mistakes and choose to grow with grace." },
    { category: "Self-Love", moonPhases: ["waxing-crescent", "first-quarter", "full"], text: "I speak to myself with words of encouragement and love." },
    { category: "Self-Love", moonPhases: ["full", "waxing-gibbous"], text: "I am a radiant being of light, worthy of my own devotion." },

    // Abundance (10)
    { category: "Abundance", moonPhases: ["new", "waxing-crescent", "first-quarter", "waxing-gibbous"], text: "I am a magnet for prosperity, and abundance flows to me effortlessly." },
    { category: "Abundance", moonPhases: ["waxing-crescent", "first-quarter", "full"], text: "The universe provides for all my needs in perfect timing." },
    { category: "Abundance", moonPhases: ["new", "waxing-crescent"], text: "I release scarcity thinking and welcome infinite possibilities." },
    { category: "Abundance", moonPhases: ["waxing-gibbous", "full"], text: "Wealth and opportunities align with my highest good." },
    { category: "Abundance", moonPhases: ["waxing-crescent", "first-quarter", "waxing-gibbous", "full"], text: "I am open to receiving blessings from expected and unexpected sources." },
    { category: "Abundance", moonPhases: ["full", "waning-gibbous"], text: "My cup overflows with gratitude, health, love, and prosperity." },
    { category: "Abundance", moonPhases: ["new", "waxing-crescent", "first-quarter"], text: "I deserve financial freedom and create it with joy and ease." },
    { category: "Abundance", moonPhases: ["new", "waxing-crescent"], text: "Every action I take plants seeds of abundance in my life." },
    { category: "Abundance", moonPhases: ["full", "waxing-gibbous", "waning-gibbous"], text: "I celebrate the wealth I have now and the wealth that is coming." },
    { category: "Abundance", moonPhases: ["waxing-crescent", "first-quarter", "full"], text: "I am worthy of living a life of comfort, beauty, and plenty." },

    // Protection (10)
    { category: "Protection", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent", "new"], text: "I am surrounded by a shield of divine white light that deflects all negativity." },
    { category: "Protection", moonPhases: ["full", "waning-gibbous", "last-quarter"], text: "My energy field is strong, and I choose what I allow into my space." },
    { category: "Protection", moonPhases: ["new", "waning-crescent", "last-quarter", "waning-gibbous"], text: "I am safe, protected, and supported by the universe at all times." },
    { category: "Protection", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent"], text: "I release all fear and trust in my spiritual protection." },
    { category: "Protection", moonPhases: ["new", "full", "waning-crescent"], text: "My boundaries are sacred, and I honor them without guilt." },
    { category: "Protection", moonPhases: ["new", "waning-crescent", "full"], text: "I call upon my guides and ancestors to watch over me." },
    { category: "Protection", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent", "new"], text: "No energy can harm me that is not aligned with my highest good." },
    { category: "Protection", moonPhases: ["full", "last-quarter", "waning-crescent"], text: "I am grounded, centered, and unshakeable in my power." },
    { category: "Protection", moonPhases: ["last-quarter", "waning-gibbous", "waning-crescent"], text: "I protect my peace by choosing my battles with wisdom." },
    { category: "Protection", moonPhases: ["new", "waning-crescent"], text: "My home is a sacred sanctuary, sealed against all malicious intent." },

    // Healing (10)
    { category: "Healing", moonPhases: ["full", "waxing-gibbous", "waning-gibbous"], text: "Every cell in my body vibrates with healing energy and radiant health." },
    { category: "Healing", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent"], text: "I release all pain, trauma, and wounds that no longer serve me." },
    { category: "Healing", moonPhases: ["new", "waxing-crescent", "full"], text: "I am worthy of deep healing on all levels: body, mind, and spirit." },
    { category: "Healing", moonPhases: ["waxing-crescent", "first-quarter", "full"], text: "I trust in my body's natural ability to restore balance and wellness." },
    { category: "Healing", moonPhases: ["full", "waning-gibbous"], text: "With each breath, I draw in healing light and exhale what needs to be released." },
    { category: "Healing", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent", "new"], text: "I forgive those who have hurt me and set myself free." },
    { category: "Healing", moonPhases: ["waning-crescent", "new", "waning-gibbous"], text: "I am patient with my healing process and honor its perfect timing." },
    { category: "Healing", moonPhases: ["waning-gibbous", "last-quarter", "full"], text: "I allow myself to feel, heal, and transform." },
    { category: "Healing", moonPhases: ["waning-crescent", "new", "waxing-crescent"], text: "Old patterns dissolve, and I emerge renewed and whole." },
    { category: "Healing", moonPhases: ["full", "waning-gibbous", "waxing-gibbous"], text: "I am a vessel of divine healing energy for myself and others." },

    // Manifestation (10)
    { category: "Manifestation", moonPhases: ["new", "waxing-crescent"], text: "I am a powerful creator, and my thoughts shape my reality." },
    { category: "Manifestation", moonPhases: ["new", "waxing-crescent", "first-quarter"], text: "What I focus on expands, and I focus on my desires with clarity and faith." },
    { category: "Manifestation", moonPhases: ["new", "waxing-crescent", "waxing-gibbous"], text: "I align my energy with my intentions and watch them materialize." },
    { category: "Manifestation", moonPhases: ["waxing-gibbous", "full"], text: "The universe conspires in my favor to bring my dreams to life." },
    { category: "Manifestation", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent"], text: "I release attachment to outcomes and trust the divine plan." },
    { category: "Manifestation", moonPhases: ["new", "waxing-crescent", "first-quarter", "full"], text: "I am worthy of manifesting my deepest desires with ease and grace." },
    { category: "Manifestation", moonPhases: ["first-quarter", "waxing-gibbous"], text: "My actions are aligned with my goals, and success is inevitable." },
    { category: "Manifestation", moonPhases: ["new", "waxing-crescent", "full"], text: "I visualize my desired reality and feel it as already done." },
    { category: "Manifestation", moonPhases: ["full", "waxing-gibbous"], text: "Miracles happen for me every day in both small and significant ways." },
    { category: "Manifestation", moonPhases: ["waxing-crescent", "first-quarter", "waxing-gibbous"], text: "I am a magnet for synchronicities and divinely timed opportunities." },

    // Intuition (10)
    { category: "Intuition", moonPhases: ["full", "waxing-gibbous", "waning-gibbous"], text: "I trust my inner voice and follow its guidance with confidence." },
    { category: "Intuition", moonPhases: ["full", "waning-gibbous"], text: "My intuition is a powerful compass that always leads me true." },
    { category: "Intuition", moonPhases: ["full", "waxing-gibbous", "waning-crescent"], text: "I am open to receiving messages from my higher self and spirit guides." },
    { category: "Intuition", moonPhases: ["waxing-gibbous", "full", "waning-gibbous"], text: "I honor my psychic gifts and allow them to develop naturally." },
    { category: "Intuition", moonPhases: ["waning-crescent", "new", "full"], text: "I distinguish clearly between fear and intuition." },
    { category: "Intuition", moonPhases: ["full", "waxing-gibbous"], text: "My third eye is open, and I perceive truth with clarity." },
    { category: "Intuition", moonPhases: ["waxing-crescent", "full", "waning-gibbous"], text: "I trust the wisdom of my body and the signs it shows me." },
    { category: "Intuition", moonPhases: ["full", "waning-gibbous", "waxing-gibbous"], text: "I am attuned to the subtle energies around me and read them with accuracy." },
    { category: "Intuition", moonPhases: ["waning-crescent", "new", "last-quarter"], text: "I silence the noise of the world to hear the whispers of my soul." },
    { category: "Intuition", moonPhases: ["waning-crescent", "full", "waning-gibbous"], text: "My dreams carry messages, and I remember and interpret them with ease." },

    // Strength (10)
    { category: "Strength", moonPhases: ["first-quarter", "waxing-gibbous", "full"], text: "I am resilient, and I rise stronger from every challenge I face." },
    { category: "Strength", moonPhases: ["full", "waning-gibbous", "first-quarter"], text: "I have survived 100% of my worst days, and I trust in my ability to endure." },
    { category: "Strength", moonPhases: ["first-quarter", "full"], text: "I draw upon the infinite well of strength within me." },
    { category: "Strength", moonPhases: ["waxing-crescent", "first-quarter", "full"], text: "I am a warrior of light, and I face my battles with courage and grace." },
    { category: "Strength", moonPhases: ["first-quarter", "waxing-gibbous", "full"], text: "My inner fire cannot be extinguished by external circumstances." },
    { category: "Strength", moonPhases: ["first-quarter", "full", "waxing-gibbous"], text: "I am capable of handling whatever life brings to my path." },
    { category: "Strength", moonPhases: ["waxing-crescent", "first-quarter", "waxing-gibbous"], text: "I transform obstacles into opportunities for growth and empowerment." },
    { category: "Strength", moonPhases: ["first-quarter", "full"], text: "I stand in my power and speak my truth with unwavering conviction." },
    { category: "Strength", moonPhases: ["last-quarter", "waning-crescent", "new"], text: "I am not broken by my struggles; I am forged by them." },
    { category: "Strength", moonPhases: ["last-quarter", "waning-gibbous", "full"], text: "I embrace my shadows and integrate them into my wholeness." },

    // Peace (10)
    { category: "Peace", moonPhases: ["waning-crescent", "new", "last-quarter", "waning-gibbous"], text: "I am calm, centered, and at peace with all that is." },
    { category: "Peace", moonPhases: ["last-quarter", "waning-crescent", "waning-gibbous"], text: "I release the need to control and surrender to the flow of life." },
    { category: "Peace", moonPhases: ["waning-crescent", "new", "last-quarter"], text: "Peace is my natural state, and I return to it with ease." },
    { category: "Peace", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent"], text: "I let go of worry and trust that all is unfolding for my highest good." },
    { category: "Peace", moonPhases: ["waning-crescent", "new", "waning-gibbous"], text: "I find serenity in the present moment and release anxiety about the future." },
    { category: "Peace", moonPhases: ["waning-gibbous", "last-quarter", "waning-crescent", "new"], text: "I forgive myself and others, choosing peace over resentment." },
    { category: "Peace", moonPhases: ["waning-crescent", "new", "last-quarter"], text: "I create sacred stillness within, even amidst external chaos." },
    { category: "Peace", moonPhases: ["waning-crescent", "waning-gibbous", "new"], text: "I breathe in calm and exhale tension, finding balance in each breath." },
    { category: "Peace", moonPhases: ["full", "waning-gibbous", "last-quarter", "waning-crescent"], text: "I am a vessel of peace, radiating tranquility to all I encounter." },
    { category: "Peace", moonPhases: ["last-quarter", "waning-crescent", "new"], text: "I release all that disturbs my inner harmony and choose serenity." }
];

// ========================================
// CUSTOM AFFIRMATIONS
// ========================================

const CUSTOM_KEY = 'mystical-path-custom-affirmations';
let customAffirmations = [];

function loadCustomAffirmations() {
    try {
        customAffirmations = JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]');
    } catch (e) {
        customAffirmations = [];
    }
    updateCustomCount();
}

function saveCustomAffirmation(text, category, moonPhase) {
    const entry = {
        id: Date.now().toString(),
        text,
        category,
        moonPhases: moonPhase ? [moonPhase] : [],
        isCustom: true,
        created: new Date().toISOString()
    };
    customAffirmations.unshift(entry);
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customAffirmations));
    updateCustomCount();
    renderCustomList();
    applyFilters();
}

function deleteCustomAffirmation(id) {
    customAffirmations = customAffirmations.filter(a => a.id !== id);
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customAffirmations));
    updateCustomCount();
    renderCustomList();
    applyFilters();
}

function updateCustomCount() {
    const el = document.getElementById('custom-count');
    if (el) el.textContent = customAffirmations.length;
}

function renderCustomList() {
    const list = document.getElementById('custom-list');
    const empty = document.getElementById('custom-empty');
    if (!list) return;

    if (customAffirmations.length === 0) {
        list.innerHTML = '';
        if (empty) empty.style.display = 'block';
        return;
    }

    if (empty) empty.style.display = 'none';
    list.innerHTML = '';

    customAffirmations.forEach(aff => {
        const card = document.createElement('div');
        card.className = 'custom-card';
        card.setAttribute('role', 'listitem');
        card.innerHTML = `
            <div class="custom-card-content">
                <p class="custom-card-text">${aff.text}</p>
                <div class="custom-card-meta">
                    <span class="custom-badge">${aff.category}</span>
                    ${aff.moonPhases.length ? `<span class="custom-moon-badge">${aff.moonPhases[0]}</span>` : ''}
                </div>
            </div>
            <button class="remove-btn" aria-label="Delete this custom affirmation">✕</button>
        `;
        card.querySelector('.remove-btn').addEventListener('click', () => deleteCustomAffirmation(aff.id));
        list.appendChild(card);
    });
}

// ========================================
// STATE MANAGEMENT
// ========================================

let currentAffirmation = null;
let lastAffirmation = null;
let favorites = [];
let filteredAffirmations = [...AFFIRMATIONS];
let currentCategoryFilter = 'all';
let currentMoonFilter = 'all';

// ========================================
// MOON PHASE CALCULATION
// ========================================

function getCurrentMoonPhase() {
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

const MOON_PHASE_LABELS = {
    'new': '🌑 New Moon',
    'waxing-crescent': '🌒 Waxing Crescent',
    'first-quarter': '🌓 First Quarter',
    'waxing-gibbous': '🌔 Waxing Gibbous',
    'full': '🌕 Full Moon',
    'waning-gibbous': '🌖 Waning Gibbous',
    'last-quarter': '🌗 Last Quarter',
    'waning-crescent': '🌘 Waning Crescent'
};

// ========================================
// FAVORITES MANAGEMENT
// ========================================

/**
 * Load favorites from localStorage
 */
function loadFavorites() {
    const stored = localStorage.getItem('mystical-path-affirmations-favorites');
    if (stored) {
        try {
            favorites = JSON.parse(stored);
        } catch (e) {
            favorites = [];
        }
    }
    updateFavoritesCount();
}

/**
 * Save favorites to localStorage
 */
function saveFavorites() {
    localStorage.setItem('mystical-path-affirmations-favorites', JSON.stringify(favorites));
    updateFavoritesCount();
}

/**
 * Check if affirmation is in favorites
 */
function isFavorite(affirmation) {
    return favorites.some(fav => fav.text === affirmation.text);
}

/**
 * Toggle affirmation in favorites
 */
function toggleFavorite() {
    if (!currentAffirmation) return;

    if (isFavorite(currentAffirmation)) {
        // Remove from favorites
        favorites = favorites.filter(fav => fav.text !== currentAffirmation.text);
    } else {
        // Add to favorites
        favorites.push(currentAffirmation);
    }

    saveFavorites();
    updateFavoriteButton();
    renderFavorites();
}

/**
 * Remove from favorites
 */
function removeFavorite(affirmation) {
    favorites = favorites.filter(fav => fav.text !== affirmation.text);
    saveFavorites();
    renderFavorites();
    
    // Update heart button if this is the current affirmation
    if (currentAffirmation && currentAffirmation.text === affirmation.text) {
        updateFavoriteButton();
    }
}

/**
 * Update favorites count display
 */
function updateFavoritesCount() {
    const countEl = document.getElementById('favorites-count');
    countEl.textContent = favorites.length;
}

// ========================================
// AFFIRMATION GENERATION
// ========================================

/**
 * Get random affirmation from filtered list
 */
function getRandomAffirmation() {
    if (filteredAffirmations.length === 0) {
        return null;
    }

    // If only one affirmation in filtered list, return it
    if (filteredAffirmations.length === 1) {
        return filteredAffirmations[0];
    }

    // Get random affirmation, avoiding immediate repeat
    let affirmation;
    let attempts = 0;
    do {
        const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
        affirmation = filteredAffirmations[randomIndex];
        attempts++;
    } while (lastAffirmation && affirmation.text === lastAffirmation.text && attempts < 10);

    return affirmation;
}

/**
 * Display new affirmation
 */
function showNextAffirmation() {
    const affirmation = getRandomAffirmation();
    
    if (!affirmation) {
        const moonLabel = currentMoonFilter !== 'all' ? ` for ${MOON_PHASE_LABELS[currentMoonFilter] || currentMoonFilter}` : '';
        document.getElementById('affirmation-text').textContent = `No affirmations found${moonLabel} in this category. Try clearing a filter.`;
        document.getElementById('category-badge').style.display = 'none';
        document.getElementById('favorite-btn').style.display = 'none';
        return;
    }

    currentAffirmation = affirmation;
    lastAffirmation = affirmation;

    // Update display with fade animation
    const textEl = document.getElementById('affirmation-text');
    const badgeEl = document.getElementById('category-badge');
    const favoriteBtn = document.getElementById('favorite-btn');

    textEl.style.opacity = '0';
    
    setTimeout(() => {
        textEl.textContent = affirmation.text;
        badgeEl.textContent = affirmation.isCustom ? '✍️ Custom' : affirmation.category;
        badgeEl.className = `category-badge${affirmation.isCustom ? ' custom-affirmation-badge' : ''}`;
        badgeEl.style.display = 'inline-block';
        favoriteBtn.style.display = 'flex';

        textEl.style.opacity = '1';
        updateFavoriteButton();
    }, 200);
}

/**
 * Update favorite button state
 */
function updateFavoriteButton() {
    const btn = document.getElementById('favorite-btn');
    const heart = btn.querySelector('.heart');
    const text = btn.querySelector('.text');

    if (currentAffirmation && isFavorite(currentAffirmation)) {
        heart.textContent = '♥';
        text.textContent = 'Remove from Favorites';
        btn.classList.add('favorited');
    } else {
        heart.textContent = '♡';
        text.textContent = 'Add to Favorites';
        btn.classList.remove('favorited');
    }
}

// ========================================
// FILTERING
// ========================================

/**
 * Apply both category and moon phase filters
 * Merges custom affirmations into the pool
 */
function applyFilters() {
    let pool = [...AFFIRMATIONS, ...customAffirmations];
    if (currentCategoryFilter !== 'all') {
        pool = pool.filter(aff => aff.category === currentCategoryFilter);
    }
    if (currentMoonFilter !== 'all') {
        pool = pool.filter(aff => (aff.moonPhases || []).includes(currentMoonFilter));
    }
    filteredAffirmations = pool;
}

// ========================================
// FAVORITES UI
// ========================================

/**
 * Render favorites grid
 */
function renderFavorites() {
    const grid = document.getElementById('favorites-grid');
    const emptyState = document.getElementById('favorites-empty');

    if (favorites.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    grid.innerHTML = '';

    favorites.forEach(affirmation => {
        const card = document.createElement('div');
        card.className = 'favorite-card';
        card.setAttribute('role', 'listitem');

        card.innerHTML = `
            <div class="favorite-content">
                <p class="favorite-text">${affirmation.text}</p>
                <span class="favorite-category">${affirmation.category}</span>
            </div>
            <button class="remove-btn" aria-label="Remove ${affirmation.category} affirmation from favorites">
                ✕
            </button>
        `;

        card.querySelector('.remove-btn').addEventListener('click', () => {
            removeFavorite(affirmation);
        });

        grid.appendChild(card);
    });
}

// ========================================
// VIEW TOGGLE
// ========================================

/**
 * Switch between Generate, Favorites, and Custom views
 */
function switchView(view) {
    const tabs = ['generate', 'favorites', 'custom'];
    tabs.forEach(t => {
        const tab = document.getElementById(`${t}-tab`);
        const section = document.getElementById(`${t}-section`);
        const isActive = t === view;
        if (tab) {
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        }
        if (section) {
            section.style.display = isActive ? 'block' : 'none';
        }
    });

    if (view === 'favorites') renderFavorites();
    if (view === 'custom') renderCustomList();
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    loadCustomAffirmations();

    // Auto-detect current moon phase and set filter + indicator
    const currentPhase = getCurrentMoonPhase();
    currentMoonFilter = currentPhase;

    const moonFilterEl = document.getElementById('moon-filter');
    if (moonFilterEl) {
        moonFilterEl.value = currentPhase;
    }

    const moonIndicatorEl = document.getElementById('current-moon-indicator');
    if (moonIndicatorEl) {
        moonIndicatorEl.textContent = `Current: ${MOON_PHASE_LABELS[currentPhase] || currentPhase}`;
    }

    applyFilters();

    // Next affirmation button
    document.getElementById('next-btn').addEventListener('click', showNextAffirmation);

    // Favorite button
    document.getElementById('favorite-btn').addEventListener('click', toggleFavorite);

    // Category filter
    document.getElementById('category-filter').addEventListener('change', (e) => {
        currentCategoryFilter = e.target.value;
        applyFilters();
        showNextAffirmation();
    });

    // Moon phase filter
    if (moonFilterEl) {
        moonFilterEl.addEventListener('change', (e) => {
            currentMoonFilter = e.target.value;
            applyFilters();
            showNextAffirmation();
        });
    }

    // View toggle tabs
    document.getElementById('generate-tab').addEventListener('click', () => switchView('generate'));
    document.getElementById('favorites-tab').addEventListener('click', () => switchView('favorites'));
    const customTabBtn = document.getElementById('custom-tab');
    if (customTabBtn) customTabBtn.addEventListener('click', () => switchView('custom'));

    // Custom affirmation form
    const customForm = document.getElementById('custom-form');
    if (customForm) {
        customForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = document.getElementById('custom-text').value.trim();
            if (!text) return;
            const category = document.getElementById('custom-category').value;
            const moon = document.getElementById('custom-moon').value;
            saveCustomAffirmation(text, category, moon);
            document.getElementById('custom-text').value = '';
        });
    }

    // Show first affirmation on load
    showNextAffirmation();
});
