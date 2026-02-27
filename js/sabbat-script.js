// ========================================
// SABBAT CALENDAR - WHEEL OF THE YEAR
// Track and celebrate the 8 sacred sabbats
// ========================================

// ========================================
// SABBAT DATA - NORTHERN HEMISPHERE
// ========================================

const SABBATS_NORTHERN = [
    {
        name: 'Samhain',
        emoji: '🎃',
        month: 10,
        day: 31,
        also_known_as: ['Halloween', 'Ancestor Night', 'Third Harvest', 'Feast of the Dead'],
        season: 'Autumn',
        type: 'Cross-Quarter',
        themes: [
            'Death and rebirth',
            'Honoring ancestors',
            'Thinning of the veil',
            'Final harvest',
            'Reflection and release'
        ],
        deities: ['Hecate', 'Cernunnos', 'The Crone', 'Persephone', 'Hel', 'The Morrigan'],
        correspondences: {
            colors: ['Black', 'Orange', 'Deep purple', 'Crimson', 'Gold'],
            herbs: ['Mugwort', 'Sage', 'Rosemary', 'Wormwood', 'Apple'],
            crystals: ['Obsidian', 'Onyx', 'Smoky quartz', 'Black tourmaline', 'Bloodstone'],
            element: 'Earth/Water',
            direction: 'West'
        },
        traditions: [
            'Dumb supper for ancestors (silent meal with place settings for the departed)',
            'Divination and scrying (tarot, runes, crystal ball)',
            'Ancestor altar with photos, heirlooms, and offerings',
            'Carving pumpkins or turnips to ward off spirits',
            'Fire rituals for release and transformation'
        ],
        foods: ['Soul cakes', 'Pomegranate', 'Apples', 'Root vegetables', 'Mulled wine', 'Roasted squash', 'Corn bread'],
        altar_ideas: [
            'Photos of deceased loved ones',
            'Marigolds and chrysanthemums',
            'Black and orange candles',
            'Pumpkins and gourds',
            'Ancestor offerings (favorite foods, drinks)',
            'Divination tools prominently displayed'
        ],
        ritual_focus: 'This is the witch\'s New Year, when the veil between worlds is thinnest. Honor those who came before, release what no longer serves, and prepare for the dark half of the year.',
        activities: [
            'Host a dumb supper',
            'Practice divination',
            'Tell ghost stories',
            'Make offerings at crossroads',
            'Write and burn release lists'
        ]
    },
    {
        name: 'Yule',
        emoji: '❄️',
        month: 12,
        day: 21,
        also_known_as: ['Winter Solstice', 'Midwinter', 'Alban Arthan'],
        season: 'Winter',
        type: 'Solar (Solstice)',
        themes: [
            'Rebirth of the sun',
            'Return of light',
            'Hope in darkness',
            'Rest and renewal',
            'Family and community'
        ],
        deities: ['The Holly King', 'The Oak King', 'Saturn', 'Odin', 'Frau Holle', 'Brighid'],
        correspondences: {
            colors: ['Deep green', 'Red', 'Gold', 'Silver', 'White'],
            herbs: ['Pine', 'Holly', 'Mistletoe', 'Cedar', 'Cinnamon', 'Frankincense'],
            crystals: ['Clear quartz', 'Bloodstone', 'Ruby', 'Emerald', 'Diamond'],
            element: 'Earth',
            direction: 'North'
        },
        traditions: [
            'Yule log ceremony (burn oak log, save ash for protection)',
            'Decorating evergreen trees (symbol of eternal life)',
            'Hanging mistletoe for protection and love',
            'Wassailing (blessing fruit trees)',
            'All-night vigil to welcome the sun\'s return'
        ],
        foods: ['Roasted meats', 'Mulled cider', 'Gingerbread', 'Fruitcake', 'Nuts', 'Dried fruits', 'Eggnog'],
        altar_ideas: [
            'Yule log decorated with holly and candles',
            'Evergreen boughs (pine, fir, cedar)',
            'Gold and silver candles',
            'Pinecones',
            'Sun symbols and wheels',
            'Strings of cranberries and popcorn'
        ],
        ritual_focus: 'The longest night marks the sun\'s rebirth. Light candles to welcome back the light, rest in the darkness, and celebrate the turning of the wheel toward longer days.',
        activities: [
            'Burn a Yule log',
            'Make evergreen wreaths',
            'Exchange handmade gifts',
            'Bake solstice cookies',
            'Stay up to greet the dawn'
        ]
    },
    {
        name: 'Imbolc',
        emoji: '🕯️',
        month: 2,
        day: 1,
        also_known_as: ['Candlemas', 'Brigid\'s Day', 'Oimelc', 'Festival of Lights'],
        season: 'Late Winter',
        type: 'Cross-Quarter',
        themes: [
            'First stirrings of spring',
            'Purification and cleansing',
            'Inspiration and creativity',
            'Healing and renewal',
            'Lactation and new life (lambing season)'
        ],
        deities: ['Brighid', 'Brigantia', 'Vesta', 'Februa'],
        correspondences: {
            colors: ['White', 'Light blue', 'Silver', 'Pale green', 'Yellow'],
            herbs: ['Angelica', 'Basil', 'Bay laurel', 'Heather', 'Rosemary', 'Violets'],
            crystals: ['Amethyst', 'Bloodstone', 'Garnet', 'Moonstone', 'Clear quartz'],
            element: 'Fire',
            direction: 'East'
        },
        traditions: [
            'Lighting candles in every window to welcome Brighid',
            'Spring cleaning and purification rituals',
            'Making Brighid\'s crosses from rushes or wheat',
            'Leaving offerings for Brighid (milk, butter, bread)',
            'Divination for the coming agricultural season'
        ],
        foods: ['Milk', 'Cheese', 'Butter', 'Seeds', 'Breads', 'Cream-based dishes', 'Blackberry items'],
        altar_ideas: [
            'Many white and silver candles',
            'Brighid\'s cross',
            'Bowl of fresh milk',
            'Snowdrops or early spring flowers',
            'Corn dolly from last harvest',
            'White cloth or altar covering'
        ],
        ritual_focus: 'Brighid\'s festival marks the first whispers of spring. Light candles to honor her flame of inspiration, cleanse your space, and plant seeds of intention for the coming year.',
        activities: [
            'Make Brighid\'s crosses',
            'Light candles in every room',
            'Write poetry or create art',
            'Deep clean and declutter',
            'Plan your garden'
        ]
    },
    {
        name: 'Ostara',
        emoji: '🌸',
        month: 3,
        day: 20,
        also_known_as: ['Spring Equinox', 'Vernal Equinox', 'Alban Eilir', 'Eostre'],
        season: 'Spring',
        type: 'Solar (Equinox)',
        themes: [
            'Balance of light and dark',
            'Fertility and new growth',
            'Renewal and rebirth',
            'Planting and beginnings',
            'Awakening of nature'
        ],
        deities: ['Eostre', 'Persephone', 'Freya', 'Aphrodite', 'The Green Man'],
        correspondences: {
            colors: ['Pastel pink', 'Yellow', 'Light green', 'Robin egg blue', 'Lavender'],
            herbs: ['Jasmine', 'Daffodil', 'Honeysuckle', 'Lemon balm', 'Rose', 'Violet'],
            crystals: ['Rose quartz', 'Aquamarine', 'Moonstone', 'Green aventurine', 'Jasper'],
            element: 'Air',
            direction: 'East'
        },
        traditions: [
            'Decorating eggs (symbol of potential and new life)',
            'Planting seeds with intentions',
            'Balance rituals (dark/light, masculine/feminine)',
            'Blessing gardens and seeds',
            'Sunrise celebrations'
        ],
        foods: ['Eggs', 'Honey cakes', 'Fresh greens', 'Sprouts', 'Flower salads', 'Hot cross buns', 'Dairy'],
        altar_ideas: [
            'Decorated eggs (real or wooden)',
            'Spring flowers (daffodils, tulips, crocuses)',
            'Seeds in small bowls',
            'Pastel-colored candles',
            'Symbols of rabbits or hares',
            'Feathers'
        ],
        ritual_focus: 'Day and night stand in perfect balance as spring arrives in full. Plant physical or metaphorical seeds, celebrate fertility and growth, and embrace new beginnings.',
        activities: [
            'Dye eggs naturally',
            'Plant a garden',
            'Take a sunrise walk',
            'Balance an egg on its end',
            'Create flower crowns'
        ]
    },
    {
        name: 'Beltane',
        emoji: '🔥',
        month: 5,
        day: 1,
        also_known_as: ['May Day', 'Walpurgis Night', 'Cetsamhain'],
        season: 'Late Spring',
        type: 'Cross-Quarter',
        themes: [
            'Passion and sexuality',
            'Fertility and abundance',
            'Joy and vitality',
            'Union of masculine and feminine',
            'Fire and purification'
        ],
        deities: ['The Green Man', 'Pan', 'Aphrodite', 'Flora', 'Freya', 'Cernunnos'],
        correspondences: {
            colors: ['Bright green', 'Red', 'White', 'Pink', 'Yellow'],
            herbs: ['Hawthorn', 'Rose', 'Marigold', 'Primrose', 'Rowan', 'Woodruff'],
            crystals: ['Rose quartz', 'Emerald', 'Malachite', 'Garnet', 'Carnelian'],
            element: 'Fire',
            direction: 'South'
        },
        traditions: [
            'Dancing around the Maypole (union of Earth and Sky)',
            'Jumping the balefire for fertility, purification, and luck',
            'Gathering morning dew (believed to bring beauty and health)',
            'Hanging flower garlands and greenery',
            'Handfasting ceremonies (pagan weddings)'
        ],
        foods: ['Oat cakes', 'Honey', 'Berries', 'Dairy', 'Edible flowers', 'May wine', 'Sweet breads'],
        altar_ideas: [
            'Fresh flowers in abundance',
            'Red and white candles',
            'Maypole (small decorative version)',
            'Symbols of union (linked rings, etc.)',
            'Honey and oats',
            'Colorful ribbons'
        ],
        ritual_focus: 'The energies of earth and sky unite in passionate celebration. Honor fertility in all forms, jump the fire to purify and energize, and celebrate the joy of life.',
        activities: [
            'Dance around a Maypole',
            'Light a bonfire',
            'Make flower crowns',
            'Collect morning dew',
            'Celebrate love and partnership'
        ]
    },
    {
        name: 'Litha',
        emoji: '☀️',
        month: 6,
        day: 21,
        also_known_as: ['Summer Solstice', 'Midsummer', 'Alban Hefin'],
        season: 'Summer',
        type: 'Solar (Solstice)',
        themes: [
            'Peak of solar power',
            'Abundance and fullness',
            'Fairy magic',
            'Strength and vitality',
            'Gratitude for blessings'
        ],
        deities: ['The Oak King', 'Lugh', 'Áine', 'Ra', 'Apollo', 'Helios'],
        correspondences: {
            colors: ['Gold', 'Yellow', 'Orange', 'Red', 'Green'],
            herbs: ['St. John\'s Wort', 'Lavender', 'Chamomile', 'Yarrow', 'Elderflower', 'Mugwort'],
            crystals: ['Sunstone', 'Citrine', 'Tiger\'s eye', 'Amber', 'Diamond'],
            element: 'Fire',
            direction: 'South'
        },
        traditions: [
            'All-night bonfires and fire jumping',
            'Gathering herbs at peak potency (especially before dawn)',
            'Fairy offerings and communication',
            'Sun wheels and solar magic',
            'Watching sunrise from special locations (Stonehenge, etc.)'
        ],
        foods: ['Fresh fruits', 'Summer vegetables', 'Honey', 'Mead', 'Grilled foods', 'Light salads', 'Lemonade'],
        altar_ideas: [
            'Sunflowers and summer blooms',
            'Gold and yellow candles',
            'Sun symbols and wheels',
            'Fresh herbs hung to dry',
            'Citrus fruits',
            'Fairy offerings (milk, honey, cakes)'
        ],
        ritual_focus: 'The sun reaches its zenith on the longest day. Celebrate abundance, gather powerful herbs, work solar magic, and honor the fairies in their full glory.',
        activities: [
            'Stay up all night around a bonfire',
            'Harvest magical herbs',
            'Make sun tea',
            'Leave fairy offerings',
            'Practice sun magic'
        ]
    },
    {
        name: 'Lughnasadh',
        emoji: '🌾',
        month: 8,
        day: 1,
        also_known_as: ['Lammas', 'First Harvest', 'Lughnasa', 'Bread Festival'],
        season: 'Late Summer',
        type: 'Cross-Quarter',
        themes: [
            'First harvest and gratitude',
            'Sacrifice for sustenance',
            'Grain and bread mysteries',
            'Honoring the dying god',
            'Community and sharing'
        ],
        deities: ['Lugh', 'Tailtiu', 'Ceres', 'Demeter', 'John Barleycorn'],
        correspondences: {
            colors: ['Gold', 'Orange', 'Yellow', 'Brown', 'Bronze'],
            herbs: ['Wheat', 'Corn', 'Barley', 'Sunflower', 'Heather', 'Blackberry'],
            crystals: ['Citrine', 'Peridot', 'Carnelian', 'Golden topaz', 'Amber'],
            element: 'Fire/Earth',
            direction: 'South/North'
        },
        traditions: [
            'Baking bread from first harvest',
            'Corn dollies or grain mother figures',
            'Games and athletic competitions (funeral games for Tailtiu)',
            'Berry picking',
            'Handfasting trial marriages (traditionally lasted a year and a day)'
        ],
        foods: ['Fresh bread', 'Beer', 'Berries', 'Grains', 'Corn', 'Squash', 'Early apples'],
        altar_ideas: [
            'Sheaves of wheat or corn',
            'Loaves of fresh bread',
            'Corn dollies',
            'Gold and bronze candles',
            'Sickle or scythe (if available)',
            'Late summer flowers (sunflowers)'
        ],
        ritual_focus: 'The first harvest reminds us that life feeds on life. Bake sacred bread, give thanks for abundance, and honor the sacrifice that sustains us.',
        activities: [
            'Bake bread from scratch',
            'Make corn dollies',
            'Pick berries',
            'Compete in games',
            'Share food with community'
        ]
    },
    {
        name: 'Mabon',
        emoji: '🍂',
        month: 9,
        day: 21,
        also_known_as: ['Autumn Equinox', 'Fall Equinox', 'Alban Elfed', 'Second Harvest'],
        season: 'Autumn',
        type: 'Solar (Equinox)',
        themes: [
            'Balance and equilibrium',
            'Gratitude and thanksgiving',
            'Preparation for winter',
            'Reflection and assessment',
            'Mysteries and descent'
        ],
        deities: ['Mabon', 'Persephone', 'Demeter', 'Modron', 'The Green Man', 'Bacchus'],
        correspondences: {
            colors: ['Orange', 'Red', 'Brown', 'Gold', 'Deep purple'],
            herbs: ['Sage', 'Rosemary', 'Yarrow', 'Marigold', 'Ivy', 'Hazel'],
            crystals: ['Yellow topaz', 'Carnelian', 'Sapphire', 'Lapis lazuli', 'Amethyst'],
            element: 'Water',
            direction: 'West'
        },
        traditions: [
            'Gratitude rituals and thanksgiving',
            'Making wine (grape harvest)',
            'Gathering and preserving final harvest',
            'Balance magic (light/dark, giving/receiving)',
            'Offerings to the land'
        ],
        foods: ['Apples', 'Grapes', 'Wine', 'Squash', 'Corn', 'Pomegranate', 'Root vegetables', 'Nuts'],
        altar_ideas: [
            'Cornucopia (horn of plenty)',
            'Autumn leaves',
            'Apples and grapes',
            'Balance scales or symbols',
            'Acorns and pinecones',
            'Candles in autumn colors'
        ],
        ritual_focus: 'Day and night balance once more as autumn arrives. Give thanks for the harvest, prepare for the dark months ahead, and reflect on what you\'ve cultivated this year.',
        activities: [
            'Make wine or apple cider',
            'Create a gratitude list',
            'Harvest final garden produce',
            'Practice balance meditation',
            'Preserve foods for winter'
        ]
    }
];

// ========================================
// SABBAT DATA - SOUTHERN HEMISPHERE
// (Dates offset by ~6 months)
// ========================================

const SABBATS_SOUTHERN = [
    {
        ...SABBATS_NORTHERN[0],
        name: 'Samhain',
        month: 4,
        day: 30
    },
    {
        ...SABBATS_NORTHERN[1],
        name: 'Yule',
        month: 6,
        day: 21
    },
    {
        ...SABBATS_NORTHERN[2],
        name: 'Imbolc',
        month: 8,
        day: 1
    },
    {
        ...SABBATS_NORTHERN[3],
        name: 'Ostara',
        month: 9,
        day: 21
    },
    {
        ...SABBATS_NORTHERN[4],
        name: 'Beltane',
        month: 10,
        day: 31
    },
    {
        ...SABBATS_NORTHERN[5],
        name: 'Litha',
        month: 12,
        day: 21
    },
    {
        ...SABBATS_NORTHERN[6],
        name: 'Lughnasadh',
        month: 2,
        day: 1
    },
    {
        ...SABBATS_NORTHERN[7],
        name: 'Mabon',
        month: 3,
        day: 20
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let currentHemisphere = 'northern';
let activeSabbats = SABBATS_NORTHERN;
let countdownInterval = null;

// ========================================
// DOM ELEMENTS
// ========================================

const northernBtn = document.getElementById('northern-btn');
const southernBtn = document.getElementById('southern-btn');
const sabbatGrid = document.getElementById('sabbat-grid');
const nextSabbatName = document.getElementById('next-sabbat-name');
const nextSabbatDate = document.getElementById('next-sabbat-date');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// ========================================
// CORE FUNCTIONS
// ========================================

/**
 * Get next N upcoming sabbats, handling year wrap
 */
function getUpcomingSabbats(count = 3) {
    const today = new Date();
    const currentYear = today.getFullYear();

    const candidates = [];
    [currentYear, currentYear + 1].forEach(year => {
        activeSabbats.forEach(s => {
            candidates.push({
                ...s,
                date: new Date(year, s.month - 1, s.day, 0, 0, 0)
            });
        });
    });

    return candidates
        .filter(s => s.date > today)
        .sort((a, b) => a.date - b.date)
        .slice(0, count);
}

/**
 * Find the next upcoming sabbat
 */
function getNextSabbat() {
    return getUpcomingSabbats(1)[0];
}

/**
 * Render the 2nd and 3rd upcoming sabbats below the countdown
 */
function renderUpcomingSabbats() {
    const upcomingEl = document.getElementById('upcoming-sabbats');
    if (!upcomingEl) return;

    const upcoming = getUpcomingSabbats(3).slice(1);
    upcomingEl.innerHTML = upcoming.map(s => {
        const dateStr = s.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        return `
            <div class="upcoming-sabbat-item" role="listitem">
                <span class="upcoming-emoji">${s.emoji}</span>
                <span class="upcoming-name">${s.name}</span>
                <span class="upcoming-date">${dateStr}</span>
            </div>`;
    }).join('');
}

/**
 * Update countdown timer display
 */
function updateCountdown() {
    const next = getNextSabbat();
    const now = new Date();
    const diff = next.date - now;
    
    if (diff <= 0) {
        // Sabbat is today or passed, recalculate
        return updateNextSabbat();
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
}

/**
 * Update next sabbat display and start countdown
 */
function updateNextSabbat() {
    const next = getNextSabbat();
    
    nextSabbatName.textContent = `${next.emoji} ${next.name}`;
    nextSabbatDate.textContent = next.date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
    });
    
    // Clear existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    // Update immediately
    updateCountdown();
    renderUpcomingSabbats();

    // Update every second
    countdownInterval = setInterval(updateCountdown, 1000);
}

/**
 * Create a sabbat card element
 */
function createSabbatCard(sabbat) {
    const card = document.createElement('div');
    card.className = 'sabbat-card';
    card.setAttribute('role', 'listitem');
    
    // Get this year's date for display
    const currentYear = new Date().getFullYear();
    const sabbatDate = new Date(currentYear, sabbat.month - 1, sabbat.day);
    const dateString = sabbatDate.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric' 
    });
    
    card.innerHTML = `
        <div class="sabbat-header">
            <div class="sabbat-emoji">${sabbat.emoji}</div>
            <h3>${sabbat.name}</h3>
            <span class="sabbat-date-badge">${dateString}</span>
        </div>
        
        <div class="sabbat-meta">
            <span class="meta-badge type">${sabbat.type}</span>
            <span class="meta-badge season">${sabbat.season}</span>
        </div>
        
        <div class="sabbat-preview">
            <p><strong>Also known as:</strong> ${sabbat.also_known_as.join(', ')}</p>
            <p class="ritual-focus-preview">${sabbat.ritual_focus}</p>
        </div>
        
        <span class="expand-toggle">See Full Details ▼</span>
        
        <div class="sabbat-details">
            <div class="details-section">
                <h4>🎭 Themes</h4>
                <ul>
                    ${sabbat.themes.map(theme => `<li>${theme}</li>`).join('')}
                </ul>
            </div>
            
            <div class="details-section">
                <h4>✨ Deities</h4>
                <p>${sabbat.deities.join(', ')}</p>
            </div>
            
            <div class="details-section">
                <h4>🎨 Correspondences</h4>
                <p><strong>Colors:</strong> ${sabbat.correspondences.colors.join(', ')}</p>
                <p><strong>Herbs:</strong> ${sabbat.correspondences.herbs.join(', ')}</p>
                <p><strong>Crystals:</strong> ${sabbat.correspondences.crystals.join(', ')}</p>
                <p><strong>Element:</strong> ${sabbat.correspondences.element}</p>
                <p><strong>Direction:</strong> ${sabbat.correspondences.direction}</p>
            </div>
            
            <div class="details-section">
                <h4>🕯️ Traditions</h4>
                <ul>
                    ${sabbat.traditions.map(tradition => `<li>${tradition}</li>`).join('')}
                </ul>
            </div>
            
            <div class="details-section">
                <h4>🍽️ Traditional Foods</h4>
                <p>${sabbat.foods.join(', ')}</p>
            </div>
            
            <div class="details-section">
                <h4>🏺 Altar Ideas</h4>
                <ul>
                    ${sabbat.altar_ideas.map(idea => `<li>${idea}</li>`).join('')}
                </ul>
            </div>
            
            <div class="details-section">
                <h4>🌟 Activities</h4>
                <ul>
                    ${sabbat.activities.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Add click handler for expansion
    card.addEventListener('click', (e) => {
        // Don't toggle if clicking a link
        if (e.target.tagName === 'A') return;
        
        card.classList.toggle('expanded');
        const toggle = card.querySelector('.expand-toggle');
        if (card.classList.contains('expanded')) {
            toggle.textContent = 'Hide Details ▲';
        } else {
            toggle.textContent = 'See Full Details ▼';
        }
    });
    
    return card;
}

/**
 * Render all sabbat cards
 */
function renderSabbatCards() {
    sabbatGrid.innerHTML = '';
    
    activeSabbats.forEach(sabbat => {
        const card = createSabbatCard(sabbat);
        sabbatGrid.appendChild(card);
    });
}

/**
 * Switch between hemispheres
 */
function switchHemisphere(hemisphere) {
    currentHemisphere = hemisphere;
    
    if (hemisphere === 'northern') {
        activeSabbats = SABBATS_NORTHERN;
        northernBtn.classList.add('active');
        southernBtn.classList.remove('active');
    } else {
        activeSabbats = SABBATS_SOUTHERN;
        southernBtn.classList.add('active');
        northernBtn.classList.remove('active');
    }
    
    // Re-render everything
    renderSabbatCards();
    updateNextSabbat();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    northernBtn.addEventListener('click', () => switchHemisphere('northern'));
    southernBtn.addEventListener('click', () => switchHemisphere('southern'));
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderSabbatCards();
    updateNextSabbat();
    
    // Enable keyboard navigation for sabbat cards
    enableKeyboardNav('sabbat-grid', '.sabbat-card');
});
