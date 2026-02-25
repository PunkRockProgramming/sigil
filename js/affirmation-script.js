// ========================================
// AFFIRMATION GENERATOR
// ========================================

// ========================================
// AFFIRMATION DATA (80 total)
// ========================================

const AFFIRMATIONS = [
    // Self-Love (10)
    { category: "Self-Love", text: "I am worthy of love, respect, and all the blessings the universe offers." },
    { category: "Self-Love", text: "I honor my body, mind, and spirit as sacred vessels of divine energy." },
    { category: "Self-Love", text: "I release all judgment and embrace myself with unconditional compassion." },
    { category: "Self-Love", text: "I am enough, exactly as I am in this present moment." },
    { category: "Self-Love", text: "I treat myself with the same kindness I offer to those I cherish." },
    { category: "Self-Love", text: "I celebrate my uniqueness and honor my authentic self." },
    { category: "Self-Love", text: "I am deserving of care, rest, and gentle nurturing." },
    { category: "Self-Love", text: "I forgive myself for past mistakes and choose to grow with grace." },
    { category: "Self-Love", text: "I speak to myself with words of encouragement and love." },
    { category: "Self-Love", text: "I am a radiant being of light, worthy of my own devotion." },

    // Abundance (10)
    { category: "Abundance", text: "I am a magnet for prosperity, and abundance flows to me effortlessly." },
    { category: "Abundance", text: "The universe provides for all my needs in perfect timing." },
    { category: "Abundance", text: "I release scarcity thinking and welcome infinite possibilities." },
    { category: "Abundance", text: "Wealth and opportunities align with my highest good." },
    { category: "Abundance", text: "I am open to receiving blessings from expected and unexpected sources." },
    { category: "Abundance", text: "My cup overflows with gratitude, health, love, and prosperity." },
    { category: "Abundance", text: "I deserve financial freedom and create it with joy and ease." },
    { category: "Abundance", text: "Every action I take plants seeds of abundance in my life." },
    { category: "Abundance", text: "I celebrate the wealth I have now and the wealth that is coming." },
    { category: "Abundance", text: "I am worthy of living a life of comfort, beauty, and plenty." },

    // Protection (10)
    { category: "Protection", text: "I am surrounded by a shield of divine white light that deflects all negativity." },
    { category: "Protection", text: "My energy field is strong, and I choose what I allow into my space." },
    { category: "Protection", text: "I am safe, protected, and supported by the universe at all times." },
    { category: "Protection", text: "I release all fear and trust in my spiritual protection." },
    { category: "Protection", text: "My boundaries are sacred, and I honor them without guilt." },
    { category: "Protection", text: "I call upon my guides and ancestors to watch over me." },
    { category: "Protection", text: "No energy can harm me that is not aligned with my highest good." },
    { category: "Protection", text: "I am grounded, centered, and unshakeable in my power." },
    { category: "Protection", text: "I protect my peace by choosing my battles with wisdom." },
    { category: "Protection", text: "My home is a sacred sanctuary, sealed against all malicious intent." },

    // Healing (10)
    { category: "Healing", text: "Every cell in my body vibrates with healing energy and radiant health." },
    { category: "Healing", text: "I release all pain, trauma, and wounds that no longer serve me." },
    { category: "Healing", text: "I am worthy of deep healing on all levels: body, mind, and spirit." },
    { category: "Healing", text: "I trust in my body's natural ability to restore balance and wellness." },
    { category: "Healing", text: "With each breath, I draw in healing light and exhale what needs to be released." },
    { category: "Healing", text: "I forgive those who have hurt me and set myself free." },
    { category: "Healing", text: "I am patient with my healing process and honor its perfect timing." },
    { category: "Healing", text: "I allow myself to feel, heal, and transform." },
    { category: "Healing", text: "Old patterns dissolve, and I emerge renewed and whole." },
    { category: "Healing", text: "I am a vessel of divine healing energy for myself and others." },

    // Manifestation (10)
    { category: "Manifestation", text: "I am a powerful creator, and my thoughts shape my reality." },
    { category: "Manifestation", text: "What I focus on expands, and I focus on my desires with clarity and faith." },
    { category: "Manifestation", text: "I align my energy with my intentions and watch them materialize." },
    { category: "Manifestation", text: "The universe conspires in my favor to bring my dreams to life." },
    { category: "Manifestation", text: "I release attachment to outcomes and trust the divine plan." },
    { category: "Manifestation", text: "I am worthy of manifesting my deepest desires with ease and grace." },
    { category: "Manifestation", text: "My actions are aligned with my goals, and success is inevitable." },
    { category: "Manifestation", text: "I visualize my desired reality and feel it as already done." },
    { category: "Manifestation", text: "Miracles happen for me every day in both small and significant ways." },
    { category: "Manifestation", text: "I am a magnet for synchronicities and divinely timed opportunities." },

    // Intuition (10)
    { category: "Intuition", text: "I trust my inner voice and follow its guidance with confidence." },
    { category: "Intuition", text: "My intuition is a powerful compass that always leads me true." },
    { category: "Intuition", text: "I am open to receiving messages from my higher self and spirit guides." },
    { category: "Intuition", text: "I honor my psychic gifts and allow them to develop naturally." },
    { category: "Intuition", text: "I distinguish clearly between fear and intuition." },
    { category: "Intuition", text: "My third eye is open, and I perceive truth with clarity." },
    { category: "Intuition", text: "I trust the wisdom of my body and the signs it shows me." },
    { category: "Intuition", text: "I am attuned to the subtle energies around me and read them with accuracy." },
    { category: "Intuition", text: "I silence the noise of the world to hear the whispers of my soul." },
    { category: "Intuition", text: "My dreams carry messages, and I remember and interpret them with ease." },

    // Strength (10)
    { category: "Strength", text: "I am resilient, and I rise stronger from every challenge I face." },
    { category: "Strength", text: "I have survived 100% of my worst days, and I trust in my ability to endure." },
    { category: "Strength", text: "I draw upon the infinite well of strength within me." },
    { category: "Strength", text: "I am a warrior of light, and I face my battles with courage and grace." },
    { category: "Strength", text: "My inner fire cannot be extinguished by external circumstances." },
    { category: "Strength", text: "I am capable of handling whatever life brings to my path." },
    { category: "Strength", text: "I transform obstacles into opportunities for growth and empowerment." },
    { category: "Strength", text: "I stand in my power and speak my truth with unwavering conviction." },
    { category: "Strength", text: "I am not broken by my struggles; I am forged by them." },
    { category: "Strength", text: "I embrace my shadows and integrate them into my wholeness." },

    // Peace (10)
    { category: "Peace", text: "I am calm, centered, and at peace with all that is." },
    { category: "Peace", text: "I release the need to control and surrender to the flow of life." },
    { category: "Peace", text: "Peace is my natural state, and I return to it with ease." },
    { category: "Peace", text: "I let go of worry and trust that all is unfolding for my highest good." },
    { category: "Peace", text: "I find serenity in the present moment and release anxiety about the future." },
    { category: "Peace", text: "I forgive myself and others, choosing peace over resentment." },
    { category: "Peace", text: "I create sacred stillness within, even amidst external chaos." },
    { category: "Peace", text: "I breathe in calm and exhale tension, finding balance in each breath." },
    { category: "Peace", text: "I am a vessel of peace, radiating tranquility to all I encounter." },
    { category: "Peace", text: "I release all that disturbs my inner harmony and choose serenity." }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let currentAffirmation = null;
let lastAffirmation = null;
let favorites = [];
let filteredAffirmations = [...AFFIRMATIONS];

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
        document.getElementById('affirmation-text').textContent = 'No affirmations found for this category.';
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
        badgeEl.textContent = affirmation.category;
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
 * Filter affirmations by category
 */
function filterByCategory(category) {
    if (category === 'all') {
        filteredAffirmations = [...AFFIRMATIONS];
    } else {
        filteredAffirmations = AFFIRMATIONS.filter(aff => aff.category === category);
    }
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
 * Switch between Generate and Favorites views
 */
function switchView(view) {
    const generateTab = document.getElementById('generate-tab');
    const favoritesTab = document.getElementById('favorites-tab');
    const generateSection = document.getElementById('generate-section');
    const favoritesSection = document.getElementById('favorites-section');

    if (view === 'generate') {
        generateTab.classList.add('active');
        favoritesTab.classList.remove('active');
        generateTab.setAttribute('aria-selected', 'true');
        favoritesTab.setAttribute('aria-selected', 'false');
        generateSection.style.display = 'block';
        favoritesSection.style.display = 'none';
    } else {
        generateTab.classList.remove('active');
        favoritesTab.classList.add('active');
        generateTab.setAttribute('aria-selected', 'false');
        favoritesTab.setAttribute('aria-selected', 'true');
        generateSection.style.display = 'none';
        favoritesSection.style.display = 'block';
        renderFavorites();
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();

    // Next affirmation button
    document.getElementById('next-btn').addEventListener('click', showNextAffirmation);

    // Favorite button
    document.getElementById('favorite-btn').addEventListener('click', toggleFavorite);

    // Category filter
    document.getElementById('category-filter').addEventListener('change', (e) => {
        filterByCategory(e.target.value);
        showNextAffirmation();
    });

    // View toggle tabs
    document.getElementById('generate-tab').addEventListener('click', () => switchView('generate'));
    document.getElementById('favorites-tab').addEventListener('click', () => switchView('favorites'));

    // Show first affirmation on load
    showNextAffirmation();
});
