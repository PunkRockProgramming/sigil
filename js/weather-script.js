// WEATHER CORRESPONDENCES DATA

const WEATHER_CORRESPONDENCES = {
    clear: {
        name: 'Clear Skies',
        emoji: '☀️',
        element: 'Fire',
        energy: 'Vitality, clarity, manifestation, success',
        deities: ['Apollo', 'Ra', 'Brigid', 'Amaterasu', 'Helios'],
        planet: 'Sun',
        chakra: 'Solar Plexus',
        correspondences: [
            'Gold, yellow, orange colors',
            'Sunflower, calendula, chamomile',
            'Citrine, amber, sunstone',
            'Frankincense, cinnamon, rosemary'
        ],
        rituals: [
            'Manifestation and goal-setting spells',
            'Charging crystals and tools in sunlight',
            'Success and abundance rituals',
            'Clarity and truth-seeking work',
            'Solar deity invocations'
        ],
        moon_combos: {
            'New Moon': 'Perfect for planting seeds of intention',
            'Waxing Crescent': 'Build momentum for new projects',
            'First Quarter': 'Take decisive action on goals',
            'Waxing Gibbous': 'Amplify success energy',
            'Full Moon': 'Peak manifestation power',
            'Waning Gibbous': 'Share wisdom and success',
            'Last Quarter': 'Release obstacles to success',
            'Waning Crescent': 'Rest and recharge before new cycle'
        },
        affirmation: 'I radiate success and abundance. My path is clear and bright.'
    },
    
    rain: {
        name: 'Rain',
        emoji: '🌧️',
        element: 'Water',
        energy: 'Cleansing, renewal, emotional healing, release',
        deities: ['Mazu', 'Tlaloc', 'Indra', 'Freyr', 'Chalchiuhtlicue'],
        planet: 'Moon',
        chakra: 'Sacral',
        correspondences: [
            'Blue, silver, grey colors',
            'Willow, lily, lotus, jasmine',
            'Aquamarine, moonstone, pearl',
            'Myrrh, sandalwood, lotus oil'
        ],
        rituals: [
            'Cleansing and purification baths',
            'Releasing hexes and negative energy',
            'Emotional healing work',
            'Collecting rain water for spells',
            'Grief and letting go rituals'
        ],
        moon_combos: {
            'New Moon': 'Deep emotional cleansing',
            'Waxing Crescent': 'Nurture new emotional growth',
            'First Quarter': 'Wash away obstacles',
            'Waxing Gibbous': 'Feed your emotional needs',
            'Full Moon': 'Ultimate purification ritual',
            'Waning Gibbous': 'Release old emotional patterns',
            'Last Quarter': 'Let tears wash away the past',
            'Waning Crescent': 'Quiet healing and rest'
        },
        affirmation: 'I release what no longer serves me. I am cleansed and renewed.'
    },
    
    clouds: {
        name: 'Cloudy',
        emoji: '☁️',
        element: 'Air',
        energy: 'Mystery, introspection, dreams, hidden knowledge',
        deities: ['Nyx', 'Hecate', 'Odin', 'Nephthys', 'Arianrhod'],
        planet: 'Neptune',
        chakra: 'Third Eye',
        correspondences: [
            'Grey, silver, lavender colors',
            'Mugwort, wormwood, lavender',
            'Amethyst, labradorite, selenite',
            'Lavender, sage, clary sage'
        ],
        rituals: [
            'Divination and scrying',
            'Dream work and lucid dreaming',
            'Shadow work journaling',
            'Meditation and contemplation',
            'Psychic development exercises'
        ],
        moon_combos: {
            'New Moon': 'Journey into the unknown',
            'Waxing Crescent': 'Develop psychic abilities',
            'First Quarter': 'Uncover hidden truths',
            'Waxing Gibbous': 'Expand consciousness',
            'Full Moon': 'Peak psychic power',
            'Waning Gibbous': 'Share mystical insights',
            'Last Quarter': 'Release illusions',
            'Waning Crescent': 'Rest in the void'
        },
        affirmation: 'I trust my intuition. The veiled truth reveals itself to me.'
    },
    
    snow: {
        name: 'Snow',
        emoji: '❄️',
        element: 'Earth/Water',
        energy: 'Stillness, purity, transformation, rest',
        deities: ['Skadi', 'Khione', 'Cailleach', 'Jack Frost', 'Boreas'],
        planet: 'Saturn',
        chakra: 'Crown',
        correspondences: [
            'White, silver, ice blue colors',
            'Pine, wintergreen, holly, cedar',
            'Clear quartz, howlite, selenite',
            'Peppermint, eucalyptus, pine'
        ],
        rituals: [
            'Winter solstice celebrations',
            'Stillness and meditation practices',
            'Purity and protection spells',
            'Collecting snow for water magic',
            'Ancestral honoring in quiet times'
        ],
        moon_combos: {
            'New Moon': 'Embrace the void and stillness',
            'Waxing Crescent': 'Slow, steady transformation',
            'First Quarter': 'Crystallize intentions',
            'Waxing Gibbous': 'Build protective barriers',
            'Full Moon': 'Pure, crystalline magic',
            'Waning Gibbous': 'Share winter wisdom',
            'Last Quarter': 'Freeze out negativity',
            'Waning Crescent': 'Sacred hibernation'
        },
        affirmation: 'I embrace stillness and transformation. Purity flows through me.'
    },
    
    wind: {
        name: 'Windy',
        emoji: '💨',
        element: 'Air',
        energy: 'Change, communication, movement, inspiration',
        deities: ['Hermes', 'Shu', 'Fujin', 'Ehecatl', 'Vayu'],
        planet: 'Mercury',
        chakra: 'Throat',
        correspondences: [
            'Yellow, white, light blue colors',
            'Dandelion, mint, lemongrass',
            'Citrine, clear quartz, blue lace agate',
            'Peppermint, eucalyptus, lemon'
        ],
        rituals: [
            'Communication and clarity spells',
            'Sending prayers to the wind',
            'Change and transformation work',
            'Inspiration and creativity rituals',
            'Banishing unwanted energies'
        ],
        moon_combos: {
            'New Moon': 'Whisper new intentions to the wind',
            'Waxing Crescent': 'Let ideas take flight',
            'First Quarter': 'Speak your truth boldly',
            'Waxing Gibbous': 'Spread your message far',
            'Full Moon': 'Peak communication power',
            'Waning Gibbous': 'Share wisdom on the breeze',
            'Last Quarter': 'Blow away obstacles',
            'Waning Crescent': 'Quiet contemplation'
        },
        affirmation: 'I speak my truth clearly. Change flows through me with ease.'
    },
    
    fog: {
        name: 'Fog/Mist',
        emoji: '🌫️',
        element: 'Water/Air',
        energy: 'Mystery, veiling, protection, otherworld',
        deities: ['Morrigan', 'Hecate', 'Morgan le Fay', 'Nehalennia', 'Manannan'],
        planet: 'Neptune',
        chakra: 'Third Eye',
        correspondences: [
            'Grey, silver, white colors',
            'Mugwort, bay laurel, dittany',
            'Moonstone, opal, labradorite',
            'Myrrh, copal, dragon\'s blood'
        ],
        rituals: [
            'Shadow work and inner journeys',
            'Protection and cloaking spells',
            'Ancestral communication',
            'Hedge riding and trance work',
            'Mystery school initiations'
        ],
        moon_combos: {
            'New Moon': 'Walk the veil into darkness',
            'Waxing Crescent': 'Mysteries slowly revealed',
            'First Quarter': 'See through the mist',
            'Waxing Gibbous': 'Embrace the unknown',
            'Full Moon': 'Veil between worlds thinnest',
            'Waning Gibbous': 'Share hidden knowledge',
            'Last Quarter': 'Release fear of the unknown',
            'Waning Crescent': 'Rest in liminality'
        },
        affirmation: 'I walk between worlds with protection. Mystery guides my path.'
    },
    
    storm: {
        name: 'Thunderstorm',
        emoji: '⛈️',
        element: 'All Elements',
        energy: 'Power, transformation, destruction, rebirth',
        deities: ['Thor', 'Zeus', 'Jupiter', 'Shango', 'Perun', 'Indra'],
        planet: 'Mars/Jupiter',
        chakra: 'All Chakras',
        correspondences: [
            'Dark blue, purple, electric blue colors',
            'Oak, rowan, ash, hawthorn',
            'Obsidian, tourmaline, labradorite',
            'Dragon\'s blood, pine, ozone'
        ],
        rituals: [
            'Major transformation spells',
            'Power raising and charging',
            'Banishing and destruction work',
            'Breakthrough and breakthrough',
            'Collecting storm water for potent magic'
        ],
        moon_combos: {
            'New Moon': 'Destruction before creation',
            'Waxing Crescent': 'Harness raw power',
            'First Quarter': 'Break through barriers',
            'Waxing Gibbous': 'Build unstoppable force',
            'Full Moon': 'Peak transformational power',
            'Waning Gibbous': 'Release with thunder',
            'Last Quarter': 'Destroy what must end',
            'Waning Crescent': 'Calm after the storm'
        },
        affirmation: 'I embrace transformation. My power is unstoppable like the storm.'
    },
    
    partly_cloudy: {
        name: 'Partly Cloudy',
        emoji: '⛅',
        element: 'Air/Fire',
        energy: 'Balance, opportunity, choice, potential',
        deities: ['Janus', 'Iris', 'Thoth', 'Maat', 'Athena'],
        planet: 'Jupiter',
        chakra: 'Heart',
        correspondences: [
            'Gold, silver, pink, green colors',
            'Hawthorn, rose, yarrow',
            'Rose quartz, aventurine, citrine',
            'Rose, bergamot, neroli'
        ],
        rituals: [
            'Decision-making divination',
            'Balance and harmony work',
            'Opportunity and luck spells',
            'Choice and free will rituals',
            'Finding middle paths'
        ],
        moon_combos: {
            'New Moon': 'Plant seeds in balanced soil',
            'Waxing Crescent': 'Choose growth path wisely',
            'First Quarter': 'Decide and take action',
            'Waxing Gibbous': 'Balance light and shadow',
            'Full Moon': 'See all options clearly',
            'Waning Gibbous': 'Share balanced wisdom',
            'Last Quarter': 'Release extremes',
            'Waning Crescent': 'Rest in equilibrium'
        },
        affirmation: 'I balance light and shadow. I choose my path with wisdom.'
    }
};

// MOON PHASE CALCULATION (simplified version from moon-tracker)

function getMoonPhase() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    // Simple lunation calculation
    const c = e = jd = b = 0;
    if (month < 3) {
        year--;
        month += 12;
    }
    
    const a = Math.floor(year / 100);
    const calc_b = 2 - a + Math.floor(a / 4);
    const jd_calc = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + calc_b - 1524.5;
    
    const daysSinceNew = (jd_calc - 2451550.1) % 29.530588853;
    const phase = (daysSinceNew / 29.530588853);
    
    // Determine phase name
    if (phase < 0.0625) return 'New Moon';
    if (phase < 0.1875) return 'Waxing Crescent';
    if (phase < 0.3125) return 'First Quarter';
    if (phase < 0.4375) return 'Waxing Gibbous';
    if (phase < 0.5625) return 'Full Moon';
    if (phase < 0.6875) return 'Waning Gibbous';
    if (phase < 0.8125) return 'Last Quarter';
    return 'Waning Crescent';
}

// API AND WEATHER FETCHING

let apiKey = '';

function loadAPIKey() {
    const saved = localStorage.getItem('mystical-path-weather-api-key');
    if (saved) {
        apiKey = saved;
        document.getElementById('api-key-input').value = apiKey;
    }
}

function saveAPIKey() {
    const input = document.getElementById('api-key-input');
    apiKey = input.value.trim();
    if (apiKey) {
        localStorage.setItem('mystical-path-weather-api-key', apiKey);
        alert('API key saved! You can now search for weather.');
    } else {
        alert('Please enter a valid API key.');
    }
}

async function fetchWeather(city) {
    if (!apiKey) {
        alert('Please enter your OpenWeatherMap API key first, or use Demo Mode.');
        return null;
    }
    
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
        );
        
        if (!response.ok) {
            if (response.status === 401) {
                alert('Invalid API key. Please check your key.');
            } else if (response.status === 404) {
                alert('City not found. Please check the spelling.');
            } else {
                alert('Error fetching weather. Please try again.');
            }
            return null;
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Weather fetch error:', error);
        alert('Network error. Please check your connection.');
        return null;
    }
}

async function fetchWeatherByCoords(lat, lon) {
    if (!apiKey) {
        alert('Please enter your OpenWeatherMap API key first, or use Demo Mode.');
        return null;
    }
    
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        
        if (!response.ok) {
            alert('Error fetching weather. Please try again.');
            return null;
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Weather fetch error:', error);
        alert('Network error. Please check your connection.');
        return null;
    }
}

function getDemoWeather() {
    // Demo weather data for testing without API key
    const demoOptions = [
        {
            name: 'San Francisco, US',
            main: { temp: 18, feels_like: 17, humidity: 75 },
            weather: [{ main: 'Clouds', description: 'partly cloudy' }],
            wind: { speed: 5.2 },
            sys: { country: 'US' }
        },
        {
            name: 'London, GB',
            main: { temp: 12, feels_like: 11, humidity: 82 },
            weather: [{ main: 'Rain', description: 'light rain' }],
            wind: { speed: 3.8 },
            sys: { country: 'GB' }
        },
        {
            name: 'Seattle, US',
            main: { temp: 15, feels_like: 14, humidity: 88 },
            weather: [{ main: 'Fog', description: 'fog' }],
            wind: { speed: 2.1 },
            sys: { country: 'US' }
        }
    ];
    
    return demoOptions[Math.floor(Math.random() * demoOptions.length)];
}

// WEATHER TYPE MAPPING

function mapWeatherToType(weatherMain, description) {
    const main = weatherMain.toLowerCase();
    const desc = description.toLowerCase();
    
    if (main === 'clear') return 'clear';
    if (main === 'rain' || main === 'drizzle') return 'rain';
    if (main === 'clouds') {
        if (desc.includes('few') || desc.includes('scattered') || desc.includes('partly')) {
            return 'partly_cloudy';
        }
        return 'clouds';
    }
    if (main === 'snow') return 'snow';
    if (main === 'thunderstorm') return 'storm';
    if (main === 'mist' || main === 'fog' || main === 'haze') return 'fog';
    if (desc.includes('wind')) return 'wind';
    
    return 'partly_cloudy'; // Default
}

// DISPLAY FUNCTIONS

function displayWeather(weatherData) {
    const display = document.getElementById('weather-display');
    const weatherType = mapWeatherToType(weatherData.weather[0].main, weatherData.weather[0].description);
    const correspondence = WEATHER_CORRESPONDENCES[weatherType];
    
    const tempC = Math.round(weatherData.main.temp);
    const tempF = Math.round((tempC * 9/5) + 32);
    
    display.innerHTML = `
        <div class="weather-card">
            <div class="weather-icon">${correspondence.emoji}</div>
            <h3>${weatherData.name}, ${weatherData.sys.country}</h3>
            <p class="weather-desc">${weatherData.weather[0].description}</p>
            <p class="weather-temp">${tempC}°C / ${tempF}°F</p>
            <p class="weather-feels">Feels like ${Math.round(weatherData.main.feels_like)}°C</p>
            <div class="weather-details">
                <span>💧 Humidity: ${weatherData.main.humidity}%</span>
                <span>💨 Wind: ${weatherData.wind.speed} m/s</span>
            </div>
            <div class="element-badge ${correspondence.element.toLowerCase().replace('/', '-')}-element">
                ${correspondence.element} Energy
            </div>
        </div>
    `;
    
    display.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    displayCorrespondences(correspondence);
    displayRituals(correspondence);
    displayMoonCombo(correspondence);
}

function displayCorrespondences(correspondence) {
    const card = document.getElementById('correspondence-card');
    
    card.innerHTML = `
        <h3>${correspondence.emoji} ${correspondence.name}</h3>
        
        <div class="correspondence-grid">
            <div class="corr-item">
                <strong>Element:</strong> ${correspondence.element}
            </div>
            <div class="corr-item">
                <strong>Planet:</strong> ${correspondence.planet}
            </div>
            <div class="corr-item">
                <strong>Chakra:</strong> ${correspondence.chakra}
            </div>
            <div class="corr-item">
                <strong>Energy:</strong> ${correspondence.energy}
            </div>
        </div>
        
        <div class="deity-list">
            <strong>Associated Deities:</strong>
            <p>${correspondence.deities.join(', ')}</p>
        </div>
        
        <div class="correspondence-list">
            <strong>Correspondences:</strong>
            <ul>
                ${correspondence.correspondences.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
        
        <div class="affirmation">
            <strong>Affirmation:</strong>
            <p><em>"${correspondence.affirmation}"</em></p>
        </div>
    `;
    
    document.getElementById('correspondences-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function displayRituals(correspondence) {
    const section = document.getElementById('ritual-suggestions');
    
    section.innerHTML = `
        <div class="ritual-list">
            ${correspondence.rituals.map(ritual => `
                <div class="ritual-item">
                    <span class="ritual-bullet">✦</span>
                    <span>${ritual}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function displayMoonCombo(correspondence) {
    const section = document.getElementById('moon-weather-combo');
    const currentMoon = getMoonPhase();
    const moonEmojis = {
        'New Moon': '🌑',
        'Waxing Crescent': '🌒',
        'First Quarter': '🌓',
        'Waxing Gibbous': '🌔',
        'Full Moon': '🌕',
        'Waning Gibbous': '🌖',
        'Last Quarter': '🌗',
        'Waning Crescent': '🌘'
    };
    
    const suggestion = correspondence.moon_combos[currentMoon];
    
    section.innerHTML = `
        <div class="moon-combo-card">
            <div class="combo-header">
                <span class="combo-weather">${correspondence.emoji}</span>
                <span class="combo-plus">+</span>
                <span class="combo-moon">${moonEmojis[currentMoon]}</span>
            </div>
            <h3>${correspondence.name} + ${currentMoon}</h3>
            <p class="combo-suggestion">${suggestion}</p>
            <p class="combo-hint">This combination creates unique magical opportunities. Use this time wisely!</p>
        </div>
    `;
}

// EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    loadAPIKey();
    
    // Save API key
    document.getElementById('save-key-btn').addEventListener('click', saveAPIKey);
    
    // Search by city
    document.getElementById('search-btn').addEventListener('click', async () => {
        const city = document.getElementById('city-input').value.trim();
        if (!city) {
            alert('Please enter a city name.');
            return;
        }
        
        const weatherData = await fetchWeather(city);
        if (weatherData) {
            displayWeather(weatherData);
        }
    });
    
    // Enter key in city input
    document.getElementById('city-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('search-btn').click();
        }
    });
    
    // Geolocation
    document.getElementById('geolocation-btn').addEventListener('click', () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
            return;
        }
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const weatherData = await fetchWeatherByCoords(latitude, longitude);
                if (weatherData) {
                    displayWeather(weatherData);
                }
            },
            (error) => {
                alert('Unable to retrieve your location. Please enter a city manually.');
            }
        );
    });
    
    // Demo mode
    document.getElementById('demo-btn').addEventListener('click', () => {
        const demoData = getDemoWeather();
        displayWeather(demoData);
    });
});
