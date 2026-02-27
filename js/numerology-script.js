// ========================================
// NUMEROLOGY CALCULATOR
// ========================================

// ========================================
// NUMBER INTERPRETATIONS
// ========================================

const NUMBER_MEANINGS = {
    1: {
        name: "The Leader",
        emoji: "👑",
        keywords: ["Independence", "Leadership", "Innovation", "Courage"],
        meaning: "You are a natural-born leader with pioneering spirit. Your path is about developing independence, courage, and the ability to stand alone.",
        strengths: "Original thinking, determination, self-reliance, ambition, and the courage to forge new paths.",
        challenges: "Learning to balance independence with cooperation, avoiding arrogance, and not being overly dominant.",
        purpose: "To initiate new projects, lead others, and blaze trails in your chosen field."
    },
    2: {
        name: "The Peacemaker",
        emoji: "☯️",
        keywords: ["Harmony", "Cooperation", "Diplomacy", "Sensitivity"],
        meaning: "You are a natural diplomat and peacemaker. Your path involves creating harmony, building partnerships, and developing intuition.",
        strengths: "Empathy, cooperation, attention to detail, diplomatic skills, and the ability to see both sides.",
        challenges: "Avoiding co-dependency, speaking up for yourself, and not sacrificing your needs for peace.",
        purpose: "To bring people together, mediate conflicts, and create harmonious relationships and environments."
    },
    3: {
        name: "The Creative",
        emoji: "🎨",
        keywords: ["Creativity", "Expression", "Joy", "Communication"],
        meaning: "You are blessed with creative expression and the gift of communication. Your path is about sharing your unique voice with the world.",
        strengths: "Artistic talent, optimism, excellent communication, imagination, and the ability to inspire others.",
        challenges: "Maintaining focus, avoiding scattered energy, and developing discipline in your creative pursuits.",
        purpose: "To create, communicate, and bring joy and beauty into the world through your unique expression."
    },
    4: {
        name: "The Builder",
        emoji: "🏗️",
        keywords: ["Stability", "Structure", "Discipline", "Practicality"],
        meaning: "You are the master builder, creating solid foundations. Your path involves bringing ideas into practical reality through hard work.",
        strengths: "Organization, reliability, strong work ethic, practical problem-solving, and creating lasting structures.",
        challenges: "Avoiding rigidity, learning to adapt to change, and not becoming overly controlling.",
        purpose: "To build stable foundations, create systems and structures, and manifest ideas into physical reality."
    },
    5: {
        name: "The Freedom Seeker",
        emoji: "🦅",
        keywords: ["Freedom", "Adventure", "Change", "Versatility"],
        meaning: "You are a free spirit who craves adventure and change. Your path involves experiencing life fully and embracing transformation.",
        strengths: "Adaptability, versatility, charisma, courage to take risks, and ability to embrace change.",
        challenges: "Finding balance between freedom and responsibility, avoiding restlessness, and seeing things through.",
        purpose: "To experience diverse aspects of life, promote freedom, and help others embrace change and adventure."
    },
    6: {
        name: "The Nurturer",
        emoji: "💚",
        keywords: ["Responsibility", "Nurturing", "Service", "Harmony"],
        meaning: "You are a natural caretaker and teacher. Your path involves service to others, creating beauty, and nurturing growth.",
        strengths: "Compassion, responsibility, artistic sensibility, counseling abilities, and creating harmonious environments.",
        challenges: "Avoiding martyrdom, setting healthy boundaries, and not becoming overly responsible for others.",
        purpose: "To serve, nurture, and create beauty and harmony in your family, community, and the world."
    },
    7: {
        name: "The Seeker",
        emoji: "🔮",
        keywords: ["Wisdom", "Spirituality", "Analysis", "Inner Truth"],
        meaning: "You are a spiritual seeker and analyst. Your path involves developing inner wisdom, seeking truth, and understanding life's mysteries.",
        strengths: "Intuition, analytical mind, spiritual depth, research abilities, and connection to higher wisdom.",
        challenges: "Avoiding isolation, trusting others, and balancing spiritual pursuits with practical life.",
        purpose: "To seek truth, develop spiritual understanding, and share your wisdom with those ready to receive it."
    },
    8: {
        name: "The Powerhouse",
        emoji: "💎",
        keywords: ["Abundance", "Power", "Achievement", "Material Success"],
        meaning: "You are destined for material success and positions of power. Your path involves mastering the material world and using power wisely.",
        strengths: "Business acumen, organizational skills, ambition, ability to manifest abundance, and executive abilities.",
        challenges: "Using power ethically, balancing material and spiritual, and avoiding workaholism or greed.",
        purpose: "To achieve material success, lead organizations, and use your power and resources for the greater good."
    },
    9: {
        name: "The Humanitarian",
        emoji: "🌍",
        keywords: ["Compassion", "Completion", "Universal Love", "Service"],
        meaning: "You are an old soul with universal compassion. Your path involves serving humanity, completing cycles, and embracing forgiveness.",
        strengths: "Deep compassion, artistic talent, universal perspective, healing abilities, and selfless service.",
        challenges: "Letting go of the past, avoiding martyrdom, and accepting that you cannot save everyone.",
        purpose: "To serve humanity, complete karmic cycles, and be a light for others through compassionate action."
    },
    11: {
        name: "The Illuminator",
        emoji: "⚡",
        keywords: ["Intuition", "Illumination", "Spiritual Insight", "Inspiration"],
        meaning: "MASTER NUMBER: You are a spiritual messenger with heightened intuition. Your path involves bringing spiritual insight and inspiration to others.",
        strengths: "Psychic abilities, profound intuition, visionary ideas, ability to inspire and uplift others.",
        challenges: "Managing intense sensitivity, grounding spiritual energy, and avoiding nervous tension from high vibration.",
        purpose: "To illuminate spiritual truths, inspire others through your vision, and serve as a bridge between worlds.",
        masterNumber: true
    },
    22: {
        name: "The Master Builder",
        emoji: "🏛️",
        keywords: ["Mastery", "Large-scale Creation", "Practical Idealism", "Global Impact"],
        meaning: "MASTER NUMBER: You are capable of turning grand visions into reality. Your path involves building something of lasting value for humanity.",
        strengths: "Combining vision with practicality, building on a grand scale, manifesting dreams into reality.",
        challenges: "Handling immense responsibility, avoiding overwhelm, and staying grounded while thinking big.",
        purpose: "To build lasting structures, create systems that benefit many, and manifest grand visions for humanity.",
        masterNumber: true
    },
    33: {
        name: "The Master Teacher",
        emoji: "🕊️",
        keywords: ["Unconditional Love", "Healing", "Spiritual Teaching", "Service"],
        meaning: "MASTER NUMBER: You are a master teacher and healer with the vibration of unconditional love. Your path involves uplifting humanity.",
        strengths: "Profound healing abilities, unconditional love, spiritual teaching, and selfless service to humanity.",
        challenges: "Carrying the weight of others' suffering, maintaining energetic boundaries, and avoiding burnout.",
        purpose: "To teach, heal, and embody unconditional love, serving as a beacon of spiritual light for humanity.",
        masterNumber: true
    }
};

// ========================================
// CALCULATION FUNCTIONS
// ========================================

/**
 * Convert letter to numerology number (A=1, B=2, ..., Z=26)
 */
function letterToNumber(letter) {
    const upperLetter = letter.toUpperCase();
    if (upperLetter < 'A' || upperLetter > 'Z') return 0;
    return upperLetter.charCodeAt(0) - 64; // A=65 in ASCII, so A=1
}

/**
 * Reduce number to single digit, preserving master numbers 11, 22, 33
 */
function reduceToSingleDigit(num, keepMasterNumbers = true) {
    // Keep master numbers
    if (keepMasterNumbers && (num === 11 || num === 22 || num === 33)) {
        return num;
    }
    
    // Reduce to single digit
    while (num > 9) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        
        // Check for master numbers during reduction
        if (keepMasterNumbers && (num === 11 || num === 22 || num === 33)) {
            return num;
        }
    }
    
    return num;
}

/**
 * Calculate Life Path Number from birth date
 */
function calculateLifePath(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // 0-indexed
    const day = date.getDate();
    const year = date.getFullYear();
    
    // Reduce each component separately, then add
    const reducedMonth = reduceToSingleDigit(month);
    const reducedDay = reduceToSingleDigit(day);
    const reducedYear = reduceToSingleDigit(year);
    
    const sum = reducedMonth + reducedDay + reducedYear;
    return reduceToSingleDigit(sum);
}

/**
 * Calculate Soul Urge Number (from vowels in name)
 */
function calculateSoulUrge(fullName) {
    const vowels = 'AEIOU';
    const name = fullName.toUpperCase().replace(/[^A-Z]/g, '');
    
    let sum = 0;
    for (let char of name) {
        if (vowels.includes(char)) {
            sum += letterToNumber(char);
        }
    }
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculate Destiny/Expression Number (from full name)
 */
function calculateDestiny(fullName) {
    const name = fullName.toUpperCase().replace(/[^A-Z]/g, '');
    
    let sum = 0;
    for (let char of name) {
        sum += letterToNumber(char);
    }
    
    return reduceToSingleDigit(sum);
}

/**
 * Calculate Personality Number (from consonants in name)
 */
function calculatePersonality(fullName) {
    const vowels = 'AEIOU';
    const name = fullName.toUpperCase().replace(/[^A-Z]/g, '');
    
    let sum = 0;
    for (let char of name) {
        if (!vowels.includes(char)) {
            sum += letterToNumber(char);
        }
    }
    
    return reduceToSingleDigit(sum);
}

// ========================================
// UI FUNCTIONS
// ========================================

/**
 * Display results in the grid
 */
function displayResults(results) {
    const grid = document.getElementById('results-grid');
    grid.innerHTML = ''; // Clear previous results
    
    const types = [
        { key: 'lifePath', title: 'Life Path Number', icon: '🌟' },
        { key: 'soulUrge', title: 'Soul Urge Number', icon: '💜' },
        { key: 'destiny', title: 'Destiny Number', icon: '✨' },
        { key: 'personality', title: 'Personality Number', icon: '🎭' }
    ];
    
    types.forEach(type => {
        const number = results[type.key];
        const meaning = NUMBER_MEANINGS[number];
        
        const card = document.createElement('div');
        card.className = 'result-card';
        card.setAttribute('role', 'listitem');
        
        card.innerHTML = `
            <div class="card-header">
                <span class="card-icon">${type.icon}</span>
                <h3>${type.title}</h3>
            </div>
            <div class="number-display">
                <span class="number-value">${number}</span>
                <span class="number-emoji">${meaning.emoji}</span>
            </div>
            <h4 class="number-name">${meaning.name}</h4>
            <div class="keywords">
                ${meaning.keywords.map(kw => `<span class="keyword-badge">${kw}</span>`).join('')}
            </div>
            <div class="number-details">
                <p class="meaning"><strong>Meaning:</strong> ${meaning.meaning}</p>
                <p class="strengths"><strong>Strengths:</strong> ${meaning.strengths}</p>
                <p class="challenges"><strong>Challenges:</strong> ${meaning.challenges}</p>
                <p class="purpose"><strong>Life Purpose:</strong> ${meaning.purpose}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Scroll to results
    document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Handle calculate button click
 */
function handleCalculate() {
    const fullName = document.getElementById('full-name').value.trim();
    const birthDate = document.getElementById('birth-date').value;
    
    // Validation
    if (!fullName) {
        alert('Please enter your full name.');
        return;
    }
    
    if (!birthDate) {
        alert('Please enter your birth date.');
        return;
    }
    
    // Calculate all numbers
    const results = {
        lifePath: calculateLifePath(birthDate),
        soulUrge: calculateSoulUrge(fullName),
        destiny: calculateDestiny(fullName),
        personality: calculatePersonality(fullName)
    };
    
    // Display results
    displayResults(results);
}

// ========================================
// COMPATIBILITY CALCULATOR
// ========================================

/**
 * Generate compatibility note for two numerology numbers
 */
function getCompatibilityNote(numA, numB) {
    if (numA === numB) {
        return { icon: '🔮', label: 'Deep Resonance', desc: 'Shared energy and mirrored strengths — you understand each other on an instinctive level.' };
    }
    const diff = Math.abs(numA - numB);
    if (diff === 1 || diff === 9) {
        return { icon: '✨', label: 'Complementary', desc: 'Adjacent vibrations that flow naturally together, each balancing the other\'s edges.' };
    }
    if ((numA === 11 || numA === 22 || numA === 33) && (numB === 11 || numB === 22 || numB === 33)) {
        return { icon: '⚡', label: 'Rare Spiritual Connection', desc: 'Two master numbers in harmony — an uncommon and intensely spiritual bond.' };
    }
    // General pairings
    const pairs = {
        '1-4': 'Builder and Pioneer — structure meets innovation for lasting results.',
        '1-7': 'Leader and Seeker — ambition guided by wisdom and introspection.',
        '2-8': 'Diplomat and Powerhouse — sensitivity tempers strength, strength protects sensitivity.',
        '3-9': 'Creative and Humanitarian — expression in service of a higher cause.',
        '4-8': 'Two Builders — immense practical power, grounded manifestation.',
        '5-3': 'Freedom and Creativity — adventure and expression spark each other.',
        '6-9': 'Nurturer and Humanitarian — deep care for family and world alike.',
        '2-6': 'Harmony and Service — both seek peace and love; deeply supportive.',
        '1-9': 'Pioneer and Sage — the beginner and the completer, a full-cycle bond.',
        '3-6': 'Creator and Caretaker — joy and beauty meet responsibility.',
        '5-9': 'Free Spirit and Old Soul — restless adventure meets universal wisdom.'
    };
    const key1 = `${Math.min(numA, numB)}-${Math.max(numA, numB)}`;
    if (pairs[key1]) {
        return { icon: '🌟', label: 'Dynamic Pair', desc: pairs[key1] };
    }
    return { icon: '🌙', label: 'Unique Connection', desc: `${NUMBER_MEANINGS[numA]?.name || numA} and ${NUMBER_MEANINGS[numB]?.name || numB} energies weave a distinctive, one-of-a-kind dynamic.` };
}

/**
 * Calculate and display compatibility
 */
function handleCompatibility() {
    const nameA = document.getElementById('compat-name-a').value.trim();
    const dateA = document.getElementById('compat-date-a').value;
    const nameB = document.getElementById('compat-name-b').value.trim();
    const dateB = document.getElementById('compat-date-b').value;

    if (!nameA || !dateA) { alert('Please enter Person A\'s full name and birth date.'); return; }
    if (!nameB || !dateB) { alert('Please enter Person B\'s full name and birth date.'); return; }

    const resultsA = {
        lifePath: calculateLifePath(dateA),
        soulUrge: calculateSoulUrge(nameA),
        destiny: calculateDestiny(nameA),
        personality: calculatePersonality(nameA)
    };
    const resultsB = {
        lifePath: calculateLifePath(dateB),
        soulUrge: calculateSoulUrge(nameB),
        destiny: calculateDestiny(nameB),
        personality: calculatePersonality(nameB)
    };

    const types = [
        { key: 'lifePath', title: 'Life Path', icon: '🌟' },
        { key: 'soulUrge', title: 'Soul Urge', icon: '💜' },
        { key: 'destiny', title: 'Destiny', icon: '✨' },
        { key: 'personality', title: 'Personality', icon: '🎭' }
    ];

    const resultsEl = document.getElementById('compat-results');
    const firstNameA = nameA.split(' ')[0];
    const firstNameB = nameB.split(' ')[0];

    resultsEl.innerHTML = `
        <h3 class="compat-results-title">${firstNameA} & ${firstNameB}</h3>
        <div class="compat-grid">
            ${types.map(type => {
                const nA = resultsA[type.key];
                const nB = resultsB[type.key];
                const compat = getCompatibilityNote(nA, nB);
                const meaningA = NUMBER_MEANINGS[nA];
                const meaningB = NUMBER_MEANINGS[nB];
                return `
                <div class="compat-row">
                    <div class="compat-person">
                        <span class="compat-type-label">${type.icon} ${type.title}</span>
                        <span class="compat-number">${nA}</span>
                        <span class="compat-name-label">${meaningA ? meaningA.name : ''}</span>
                    </div>
                    <div class="compat-center">
                        <span class="compat-icon">${compat.icon}</span>
                        <span class="compat-label">${compat.label}</span>
                        <p class="compat-desc">${compat.desc}</p>
                    </div>
                    <div class="compat-person">
                        <span class="compat-type-label">${type.icon} ${type.title}</span>
                        <span class="compat-number">${nB}</span>
                        <span class="compat-name-label">${meaningB ? meaningB.name : ''}</span>
                    </div>
                </div>
                `;
            }).join('')}
        </div>
    `;

    resultsEl.style.display = 'block';
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', handleCalculate);

    // Allow Enter key to calculate
    document.getElementById('full-name').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleCalculate();
    });

    document.getElementById('birth-date').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleCalculate();
    });

    // Compatibility calculator
    const compatBtn = document.getElementById('compat-calculate-btn');
    if (compatBtn) {
        compatBtn.addEventListener('click', handleCompatibility);
    }
});
