// ========================================
// ANGEL NUMBERS GUIDE
// Decode repeating number sequences
// ========================================

const ANGEL_NUMBERS = [
    // ── MASTER NUMBERS ──────────────────
    {
        number: '11',
        emoji: '✨',
        category: 'master',
        keywords: ['Intuition', 'Awakening', 'Illumination'],
        meaning: 'The first master number, 11 is the gateway to spiritual awakening. It amplifies your intuition and psychic sensitivity, urging you to trust your inner knowing. You are being called to a higher purpose.',
        message: 'Pay attention to your dreams, gut feelings, and sudden insights right now. Your intuition is your compass.',
        affirmation: 'I trust my intuition and follow the light within me.'
    },
    {
        number: '22',
        emoji: '🏗️',
        category: 'master',
        keywords: ['Master builder', 'Manifestation', 'Vision'],
        meaning: 'The master builder number, 22 holds the power to turn the grandest dreams into reality. It combines vision with practicality, urging you to build something of lasting value.',
        message: 'Your biggest dreams are within reach if you take steady, practical steps. Think big, act deliberately.',
        affirmation: 'I have the power to build the life I envision.'
    },
    {
        number: '33',
        emoji: '💗',
        category: 'master',
        keywords: ['Master teacher', 'Compassion', 'Healing'],
        meaning: 'The master teacher number, 33 resonates with compassion, healing, and service to others. It calls you to uplift those around you and share your gifts generously.',
        message: 'You are here to guide and heal. Lead with love and your presence will transform the lives around you.',
        affirmation: 'I serve others with compassion and my light uplifts the world.'
    },

    // ── TRIPLE SEQUENCES ────────────────
    {
        number: '000',
        emoji: '∞',
        category: 'triple',
        keywords: ['Infinity', 'Divine presence', 'Reset'],
        meaning: 'A powerful reset signal from the universe. 000 represents the infinite loop of creation, the void before manifestation. You are at a point of complete openness — a blank slate charged with potential.',
        message: 'You are fully supported by the universe. This is a moment of infinite possibility. What will you create?',
        affirmation: 'I am one with the infinite flow of the universe.'
    },
    {
        number: '111',
        emoji: '🌱',
        category: 'triple',
        keywords: ['Manifestation', 'New beginnings', 'Alignment'],
        meaning: 'The gateway number. 111 signals that your thoughts are manifesting rapidly — the universe is listening intently. Your mind, body, and spirit are aligned. What you focus on now has extra power.',
        message: 'Your thoughts are seeds. Plant intentionally. Focus on what you want, not what you fear.',
        affirmation: 'My thoughts create my reality and I choose abundance.'
    },
    {
        number: '222',
        emoji: '⚖️',
        category: 'triple',
        keywords: ['Balance', 'Trust', 'Partnership'],
        meaning: 'A message of balance and patience. 222 appears when things are aligning behind the scenes. Trust the process, trust your partnerships, and trust divine timing. Everything is unfolding as it should.',
        message: 'Keep the faith. You are exactly where you need to be. Balance your energy and trust the timing.',
        affirmation: 'I trust the divine timing of my life. Everything is in perfect balance.'
    },
    {
        number: '333',
        emoji: '🎨',
        category: 'triple',
        keywords: ['Creativity', 'Expansion', 'Ascended masters'],
        meaning: 'The ascended masters are near. 333 carries the energy of the Trinity — mind, body, spirit — in perfect harmony. It amplifies creativity, self-expression, and spiritual growth. You are being encouraged and supported.',
        message: 'Your creative gifts are needed right now. Express yourself freely and trust the guidance you receive.',
        affirmation: 'I am divinely guided, protected, and supported in my creative expression.'
    },
    {
        number: '444',
        emoji: '🏛️',
        category: 'triple',
        keywords: ['Angels present', 'Stability', 'Foundation'],
        meaning: 'Your angels are surrounding you right now. 444 is one of the most protective numbers — a sign that you are safe, supported, and on solid ground. Build your foundations with confidence.',
        message: 'You are not alone. Your angels are walking beside you. Keep building — your hard work is being seen.',
        affirmation: 'I am safe, supported, and surrounded by divine protection.'
    },
    {
        number: '555',
        emoji: '🦋',
        category: 'triple',
        keywords: ['Change', 'Transformation', 'Freedom'],
        meaning: 'Major change is on the horizon. 555 signals a significant shift — in your circumstances, mindset, or direction. This transformation is aligned with your growth. Release resistance and embrace what is coming.',
        message: 'Change is your friend right now. Let go of what no longer serves you and step boldly into the new.',
        affirmation: 'I embrace change with an open heart and trust my transformation.'
    },
    {
        number: '666',
        emoji: '🔄',
        category: 'triple',
        keywords: ['Rebalance', 'Refocus', 'Harmony'],
        meaning: 'A call to rebalance, not a warning. 666 appears when your focus has drifted too heavily toward material concerns — work, money, worry. The angels ask you to return to spiritual harmony and reconnect with your higher self.',
        message: 'Lift your thoughts above fear and material worry. Reconnect with what truly matters. Balance is the key.',
        affirmation: 'I release worry and return to love, balance, and inner harmony.'
    },
    {
        number: '777',
        emoji: '🍀',
        category: 'triple',
        keywords: ['Spiritual luck', 'Divine guidance', 'Wisdom'],
        meaning: 'The luckiest spiritual number. 777 signals that you are in alignment with your highest path. Divine wisdom is flowing through you, your spiritual practice is deepening, and good fortune is following.',
        message: 'You are on the right track — spiritually and practically. Keep going. The universe is rewarding your faith.',
        affirmation: 'I am aligned with divine wisdom and worthy of all the blessings flowing to me.'
    },
    {
        number: '888',
        emoji: '💰',
        category: 'triple',
        keywords: ['Abundance', 'Infinity', 'Prosperity'],
        meaning: 'The number of infinite abundance. 888 is shaped like the infinity symbol on its side — a continuous flow of energy, wealth, and opportunity. Financial blessings and material abundance are flowing toward you.',
        message: 'Abundance is your birthright. Open your hands and heart to receive. Wealth flows to you as you give generously.',
        affirmation: 'I am a magnet for abundance and I receive blessings gracefully.'
    },
    {
        number: '999',
        emoji: '🌅',
        category: 'triple',
        keywords: ['Completion', 'Endings', 'Divine purpose'],
        meaning: 'A significant chapter is closing. 999 marks the completion of a cycle and prepares you for a new beginning. You may be called to release old patterns, relationships, or situations that have run their course.',
        message: 'Something is complete. Honor what was, release with gratitude, and prepare for the new dawn ahead.',
        affirmation: 'I release the past with gratitude and open myself to the new beginning that awaits.'
    },

    // ── QUAD SEQUENCES ──────────────────
    {
        number: '1111',
        emoji: '🌟',
        category: 'quad',
        keywords: ['Portal', 'Wish', 'Awakening'],
        meaning: 'The most powerful manifestation portal. 1111 is a direct line to the universe — a moment when your thoughts can instantly set events in motion. Many traditions hold that when you see 1111, you should make a wish.',
        message: 'Make your wish. The portal is open. Your intentions carry extraordinary power in this moment.',
        affirmation: 'I set my intentions clearly into the open portal of infinite possibility.'
    },
    {
        number: '2222',
        emoji: '🕊️',
        category: 'quad',
        keywords: ['Divine timing', 'Trust', 'Alignment'],
        meaning: 'An amplified message of trust and divine timing. 2222 asks you to hold your vision steady even when results aren\'t visible yet. Everything is aligning perfectly, just not on your timeline.',
        message: 'Trust completely. What you have been working toward is closer than you think. Hold your vision.',
        affirmation: 'I trust divine timing completely and know all is unfolding for my highest good.'
    },
    {
        number: '4444',
        emoji: '🛡️',
        category: 'quad',
        keywords: ['Protection', 'Angelic support', 'Strength'],
        meaning: 'Maximum angelic protection. 4444 is an intensified message that you are completely surrounded by angelic support. No matter how challenging things feel, you are never without guidance and protection.',
        message: 'Your angels are working overtime on your behalf. You are fully protected. Trust and move forward.',
        affirmation: 'I am completely surrounded by divine protection and angelic love.'
    },

    // ── SPECIAL SEQUENCES ───────────────
    {
        number: '1010',
        emoji: '🚪',
        category: 'sequence',
        keywords: ['Spiritual awakening', 'New path', 'Divine guidance'],
        meaning: '1010 combines new beginnings (1) with infinite potential (0), repeated for emphasis. It signals a spiritual awakening and marks the opening of a new path aligned with your soul\'s purpose.',
        message: 'A new spiritual path is opening for you. Pay attention to signs, synchronicities, and inner promptings.',
        affirmation: 'I am awakening to my true spiritual path and embrace all that it brings.'
    },
    {
        number: '1212',
        emoji: '💫',
        category: 'sequence',
        keywords: ['Stay positive', 'Divine support', 'Cycles'],
        meaning: '1212 is a reminder to maintain positive thoughts and a high vibration. You are supported by divine forces as you work through cycles of growth. Your positive outlook is your most powerful tool right now.',
        message: 'Keep your thoughts elevated. What you think about, you bring about. Divine support is all around you.',
        affirmation: 'I maintain a positive vibration and trust that I am divinely guided and supported.'
    },
    {
        number: '1234',
        emoji: '📈',
        category: 'sequence',
        keywords: ['Steps in order', 'Progress', 'Momentum'],
        meaning: '1-2-3-4 is a sequential climbing energy — a sign that your steps are in the right order and you are making meaningful progress. Like climbing stairs, each step is building toward your destination.',
        message: 'You are moving forward perfectly. Don\'t skip steps. Trust the process and keep climbing.',
        affirmation: 'I trust the steps of my journey and celebrate each stage of my growth.'
    },
    {
        number: '911',
        emoji: '⚡',
        category: 'sequence',
        keywords: ['Urgent awakening', 'Lightworker call', 'Purpose'],
        meaning: '911 is a spiritual wake-up call, carrying the energy of the lightworker\'s path. If you see this repeatedly, you are being urged to step into your highest purpose without delay. Your gifts are needed.',
        message: 'There is urgency in this message. You have a purpose to fulfill. Take inspired action now.',
        affirmation: 'I answer the call of my highest purpose with courage and clarity.'
    }
];

// ========================================
// STATE
// ========================================

let filteredNumbers = [...ANGEL_NUMBERS];

// ========================================
// DOM ELEMENTS
// ========================================

const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const clearBtn = document.getElementById('clear-filters');
const numbersGrid = document.getElementById('numbers-grid');
const resultCount = document.getElementById('result-count');

// ========================================
// RENDER
// ========================================

function createNumberCard(entry) {
    const card = document.createElement('div');
    card.className = 'number-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');

    const categoryLabel = {
        master: 'Master Number',
        triple: 'Triple Sequence',
        quad: 'Quad Sequence',
        sequence: 'Special Sequence'
    }[entry.category] || entry.category;

    card.innerHTML = `
        <div class="number-display">${entry.number}</div>
        <div class="number-emoji">${entry.emoji}</div>
        <span class="category-badge category-${entry.category}">${categoryLabel}</span>
        <div class="number-keywords">
            ${entry.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
        </div>
        <p class="number-meaning-preview">${entry.meaning.slice(0, 100)}...</p>
        <span class="expand-toggle">See Full Message ▼</span>
        <div class="number-details">
            <p class="number-meaning">${entry.meaning}</p>
            <div class="number-message">
                <h4>📬 Message for You</h4>
                <p>${entry.message}</p>
            </div>
            <div class="number-affirmation">
                <h4>🙏 Affirmation</h4>
                <p><em>"${entry.affirmation}"</em></p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        const toggle = card.querySelector('.expand-toggle');
        toggle.textContent = card.classList.contains('expanded')
            ? 'Hide Message ▲'
            : 'See Full Message ▼';
    });

    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });

    return card;
}

function renderNumbers(numbers) {
    numbersGrid.innerHTML = '';
    numbers.forEach(entry => numbersGrid.appendChild(createNumberCard(entry)));
    updateResultCount(resultCount, numbers.length, 'angel numbers');
}

// ========================================
// FILTERING
// ========================================

function applyFilters() {
    filteredNumbers = filterAndSearch(
        ANGEL_NUMBERS,
        searchInput.value,
        [(item) => item.number, (item) => item.keywords.join(' '), (item) => item.meaning],
        { category: categoryFilter.value },
        { category: (item) => [item.category] }
    );
    renderNumbers(filteredNumbers);
}

// ========================================
// EVENT LISTENERS
// ========================================

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
clearBtn.addEventListener('click', () => {
    clearFilters([searchInput, categoryFilter]);
    applyFilters();
});

// ========================================
// INIT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderNumbers(ANGEL_NUMBERS);
});
