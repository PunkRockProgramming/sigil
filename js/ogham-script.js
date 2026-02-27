// ========================================
// OGHAM ORACLE
// Celtic Tree Alphabet — 20 Fews
// ========================================

// ─── DOM ──────────────────────────────────────────────────────────────────────

const spreadSelector  = document.getElementById('spread-selector');
const castButton      = document.getElementById('cast-button');
const readingSection  = document.getElementById('reading-section');
const readingGrid     = document.getElementById('reading-grid');
const spreadTitle     = document.getElementById('spread-title');
const fewGrid         = document.getElementById('few-grid');
const fewFilter       = document.getElementById('few-filter');
const historyList     = document.getElementById('history-list');
const historySection  = document.getElementById('history-section');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// ─── OGHAM DATA ───────────────────────────────────────────────────────────────

const OGHAM_FEWS = [
    // AICME BEITHE (First Aicme — B group)
    {
        name: 'Beith',
        letter: 'B',
        symbol: 'ᚁ',
        tree: 'Birch',
        tree_emoji: '🌳',
        aicme: 'Beithe',
        element: 'Air',
        planet: 'Sun',
        keywords: ['New Beginnings', 'Purification', 'Potential', 'Cleansing'],
        upright: {
            meaning: 'The birch is the first tree to colonize open ground after winter, making Beith the great rune of new beginnings. It heralds a clean slate, a fresh start, and the clearing of what was to make way for what will be.',
            guidance: 'Now is the time to begin. Old patterns have cleared. Step into new territory with courage — the ground is ready for what you will plant.'
        },
        reversed: {
            meaning: 'Resistance to change or inability to release the old. A new beginning is calling but something holds you back — fear, attachment, or habit.',
            guidance: 'What must be released before you can begin? Identify and let it go. The new cannot enter while the old still occupies the space.'
        },
        lore: 'Birch was used for Ogham inscriptions on wooden staves and is associated with the goddess Brigid. Its white bark made it a symbol of purity and light returning after darkness.',
        affirmation: 'I release the old and step confidently into the new. I am ready.'
    },
    {
        name: 'Luis',
        letter: 'L',
        symbol: 'ᚂ',
        tree: 'Rowan',
        tree_emoji: '🌿',
        aicme: 'Beithe',
        element: 'Fire',
        planet: 'Sun',
        keywords: ['Protection', 'Vision', 'Insight', 'Warding'],
        upright: {
            meaning: 'Rowan is the tree of protection and second sight. Its red berries and magical associations make Luis a powerful symbol of psychic protection and the ability to see through illusion.',
            guidance: 'Trust your perception now — what you sense is real. You are protected. Your intuitive vision is sharp; let it guide decisions rather than logic alone.'
        },
        reversed: {
            meaning: 'Psychic vulnerability or seeing what you wish rather than what is. Your defenses may be down or your inner vision clouded by wishful thinking.',
            guidance: 'Strengthen your boundaries. Ground yourself before important decisions. Seek clarity before acting on hunches.'
        },
        lore: 'In Celtic tradition rowan was planted near doorways to ward off evil spirits. Its five-pointed star on the base of each berry was seen as a natural protective pentagram.',
        affirmation: 'I see clearly. I am protected. My intuition is a trusted guide.'
    },
    {
        name: 'Fearn',
        letter: 'F',
        symbol: 'ᚃ',
        tree: 'Alder',
        tree_emoji: '🌲',
        aicme: 'Beithe',
        element: 'Water',
        planet: 'Mars',
        keywords: ['Foundation', 'Resilience', 'Shield', 'Standing Ground'],
        upright: {
            meaning: 'Alder grows where land meets water, bridging the seen and unseen worlds. Fearn speaks of building solid foundations and the resilience to stand firm under pressure.',
            guidance: 'Build on what is solid and true. Be the bridge between worlds if needed — between people, ideas, or the practical and spiritual. Hold your ground with gentle strength.'
        },
        reversed: {
            meaning: 'Unstable foundations or capitulating under pressure. You may be trying to build on shaky ground or abandoning your position when you should hold firm.',
            guidance: 'Examine your foundations honestly. What needs reinforcing? Don\'t compromise your core values for short-term peace.'
        },
        lore: 'Alder wood hardens rather than rots when immersed in water, making it legendary for bridges and foundations. Celtic warriors made their shields from alder.',
        affirmation: 'I am grounded and resilient. I stand in my truth with steady strength.'
    },
    {
        name: 'Sail',
        letter: 'S',
        symbol: 'ᚄ',
        tree: 'Willow',
        tree_emoji: '🌿',
        aicme: 'Beithe',
        element: 'Water',
        planet: 'Moon',
        keywords: ['Intuition', 'Dreams', 'Flow', 'Lunar Energy'],
        upright: {
            meaning: 'Willow bends but does not break, teaching the wisdom of flow over force. As a lunar tree deeply connected to water, Sail governs intuition, dreams, and the healing power of emotional truth.',
            guidance: 'Flow rather than force. Trust your intuitive knowing. Your dreams may hold important messages now — pay attention. Emotional truth is more valuable than logical argument.'
        },
        reversed: {
            meaning: 'Emotional rigidity, suppressed feelings, or refusing to adapt. You may be fighting the current when surrender would serve better.',
            guidance: 'Allow yourself to feel and bend. Emotional suppression costs more energy than expression. Where are you resisting flow?'
        },
        lore: 'Willow is sacred to the Moon goddess and Hecate. Its roots reach deep into water-rich soil, symbolizing access to the subconscious. Wands of willow were used in healing and moon magic.',
        affirmation: 'I bend without breaking. I trust the currents of life to carry me where I need to go.'
    },
    {
        name: 'Nion',
        letter: 'N',
        symbol: 'ᚅ',
        tree: 'Ash',
        tree_emoji: '🌳',
        aicme: 'Beithe',
        element: 'Air',
        planet: 'Sun',
        keywords: ['Connection', 'Cosmic Order', 'Link', 'World Tree'],
        upright: {
            meaning: 'Ash is the World Tree — Yggdrasil — connecting all realms. Nion speaks of interconnection, cosmic order, and your place in the larger web of existence.',
            guidance: 'You are not isolated. The situation connects to much larger patterns. Look at the bigger picture and the relationships between parts. Your actions ripple outward.'
        },
        reversed: {
            meaning: 'Disconnection from the greater whole, or failing to see how things connect. Isolated thinking, refusing help, or missing the larger pattern.',
            guidance: 'Reach out and reconnect. No one and nothing exists in isolation. Where have you withdrawn when connection was needed?'
        },
        lore: 'In Norse-Celtic overlap, the Ash is Yggdrasil itself — the axis connecting Asgard, Midgard, and the underworld. Celtic druids carried ash staves as symbols of authority and cosmic connection.',
        affirmation: 'I am connected to the great web of life. I see the patterns that link all things.'
    },
    // AICME HUATHA (Second Aicme — H/C group)
    {
        name: 'Huath',
        letter: 'H',
        symbol: 'ᚆ',
        tree: 'Hawthorn',
        tree_emoji: '🌸',
        aicme: 'Huatha',
        element: 'Fire',
        planet: 'Mars',
        keywords: ['Restraint', 'Patience', 'Caution', 'Threshold'],
        upright: {
            meaning: 'Hawthorn marks the threshold between worlds and warns: do not rush the sacred. Huath is the few of necessary waiting, of purification before initiation, of honoring the time between.',
            guidance: 'Pause before proceeding. This is a threshold moment that demands respect and preparation. Patience is not passivity here — it is wisdom.'
        },
        reversed: {
            meaning: 'Reckless rushing, disrespecting necessary preparation, or charging through thresholds unprepared.',
            guidance: 'Slow down. The obstacle you face may be a necessary guardian, not an enemy. What preparation have you been avoiding?'
        },
        lore: 'Hawthorn marked the boundary between the mundane and faery worlds in Celtic belief. It was considered dangerous to cut or use in building — its flowers should not be brought indoors.',
        affirmation: 'I honor sacred timing. I wait with intention and prepare with care.'
    },
    {
        name: 'Dair',
        letter: 'D',
        symbol: 'ᚇ',
        tree: 'Oak',
        tree_emoji: '🌳',
        aicme: 'Huatha',
        element: 'Earth',
        planet: 'Jupiter',
        keywords: ['Strength', 'Endurance', 'Sovereignty', 'Wisdom'],
        upright: {
            meaning: 'The oak is the king of the Celtic forest, sacred to the Druids whose name means "oak wisdom." Dair brings strength, endurance, and the quiet power of deep roots.',
            guidance: 'Stand in your full power. You have the strength and wisdom to endure and prevail. Lead from a place of rooted authority rather than reactivity.'
        },
        reversed: {
            meaning: 'Brittle strength, stubbornness without wisdom, or power used for domination rather than service.',
            guidance: 'True strength bends when necessary. Examine whether your "strength" is actually rigidity. Wisdom must accompany power.'
        },
        lore: 'Druids (literally "oak-knowers") held their ceremonies in oak groves. Mistletoe growing on oak was considered most sacred. The oak was associated with the sky god Dagda.',
        affirmation: 'I am rooted in wisdom and strength. My sovereignty serves those around me.'
    },
    {
        name: 'Tinne',
        letter: 'T',
        symbol: 'ᚈ',
        tree: 'Holly',
        tree_emoji: '🌿',
        aicme: 'Huatha',
        element: 'Fire',
        planet: 'Mars',
        keywords: ['Balance', 'Challenge', 'Warrior Spirit', 'Justice'],
        upright: {
            meaning: 'Holly, the evergreen warrior-king of winter, brings the fierce energy of action and challenge. Tinne asks: are you fighting the right battle, for the right reasons?',
            guidance: 'Act with courage and decisiveness. A challenge must be met, not avoided. The warrior spirit is needed now — but direct it with precision and justice.'
        },
        reversed: {
            meaning: 'Misdirected aggression, fighting the wrong battle, or avoiding necessary confrontation.',
            guidance: 'Identify the real battle before swinging. Are you fighting defensively out of habit? Or avoiding a confrontation that must happen?'
        },
        lore: 'Holly and Oak were seen as twin kings of the year in Celtic tradition — Holly ruled the dark half (summer solstice to winter solstice), Oak the light half.',
        affirmation: 'I act with courageous precision. I fight for what is just with clarity and control.'
    },
    {
        name: 'Coll',
        letter: 'C',
        symbol: 'ᚉ',
        tree: 'Hazel',
        tree_emoji: '🌰',
        aicme: 'Huatha',
        element: 'Air',
        planet: 'Mercury',
        keywords: ['Wisdom', 'Inspiration', 'Poetry', 'Knowledge'],
        upright: {
            meaning: 'Hazel is the tree of poetic wisdom and the ninth wave of inspiration. The Salmon of Wisdom fed on hazelnuts dropping into the sacred pool. Coll heralds insight, creative inspiration, and access to deep knowing.',
            guidance: 'Trust the sudden flash of insight. Creative and intellectual inspiration is available to you now. Poetry, story, and intuitive knowledge hold more truth than analysis in this moment.'
        },
        reversed: {
            meaning: 'Overthinking that blocks intuitive wisdom, or knowledge without compassion or application.',
            guidance: 'When the mind is too loud, wisdom cannot be heard. Quiet rational chatter and listen for the deeper knowing beneath it.'
        },
        lore: 'Nine hazel trees drop their nuts into Connla\'s Well (the Well of Wisdom). The salmon that eats them becomes the Salmon of Knowledge. Hazel rods were used for divination and water-finding.',
        affirmation: 'Wisdom flows through me. I trust the deep knowing beneath my rational mind.'
    },
    {
        name: 'Quert',
        letter: 'Q',
        symbol: 'ᚊ',
        tree: 'Apple',
        tree_emoji: '🍎',
        aicme: 'Huatha',
        element: 'Water',
        planet: 'Venus',
        keywords: ['Choice', 'Beauty', 'Otherworld', 'Eternal Youth'],
        upright: {
            meaning: 'The apple is the fruit of Avalon, the Otherworld of eternal beauty and youth. Quert speaks of the choice that reveals character, the beauty of the hidden world, and the nourishment of the sacred.',
            guidance: 'You stand at a significant choice point. Choose consciously and from your highest values. Beauty, pleasure, and the sacred are not luxuries — they are necessary nourishment.'
        },
        reversed: {
            meaning: 'Avoidance of a necessary choice, indulging beauty as escapism, or refusing the call of the Otherworld.',
            guidance: 'The choice cannot be avoided indefinitely. What sacred call are you postponing? Address the choice directly rather than circling it.'
        },
        lore: 'Silver boughs with golden apples were gifts from the Otherworld in Irish mythology, granting passage to the blessed realm of Tír na nÓg. The apple\'s cross-section reveals a five-pointed star — a pentagram.',
        affirmation: 'I choose consciously and courageously. I nourish myself with beauty and sacred meaning.'
    },
    // AICME MUINE (Third Aicme — M group)
    {
        name: 'Muin',
        letter: 'M',
        symbol: 'ᚋ',
        tree: 'Vine / Bramble',
        tree_emoji: '🍇',
        aicme: 'Muine',
        element: 'Water',
        planet: 'Venus',
        keywords: ['Prophecy', 'Truth', 'Introspection', 'Harvest'],
        upright: {
            meaning: 'Muin, associated with the vine and the harvest season, is the few of prophecy and the fruit of introspective work. What you have tended is ready to be harvested.',
            guidance: 'The work of the past is bearing fruit now. Look inward with honesty — the truth you find there is the prophecy for your path forward. Harvest with gratitude.'
        },
        reversed: {
            meaning: 'Avoiding the harvest, refusing to look inward, or harvesting before things are ripe.',
            guidance: 'Honest self-reflection cannot be indefinitely postponed. What have you been unwilling to look at? The harvest will spoil if left too long.'
        },
        lore: 'The vine was brought to Celtic lands by Mediterranean traders and quickly entered the sacred lexicon. It represents both the fruit of patient cultivation and the altered states that bring prophetic vision.',
        affirmation: 'I harvest the truth of my own experience with honesty and gratitude.'
    },
    {
        name: 'Gort',
        letter: 'G',
        symbol: 'ᚌ',
        tree: 'Ivy',
        tree_emoji: '🌿',
        aicme: 'Muine',
        element: 'Earth',
        planet: 'Moon',
        keywords: ['Persistence', 'Growth', 'Spiral Path', 'Tenacity'],
        upright: {
            meaning: 'Ivy grows in spirals, finding its way through any obstacle, always reaching toward the light. Gort is the few of persistent growth along the winding, spiral path of the soul\'s journey.',
            guidance: 'Keep moving, even slowly. The path spirals — you will return to familiar ground but at a higher level. Trust the process of gradual, determined growth.'
        },
        reversed: {
            meaning: 'Clinging attachment, entanglement, or growth that strangles rather than supports.',
            guidance: 'Is your persistence becoming clinging? Are you growing toward the light or pulling something else down? Examine what you\'re wrapped around.'
        },
        lore: 'Ivy grows through winter when other plants sleep, symbolizing eternal life and soul-persistence through cycles. It was associated with Dionysus and used in initiation ceremonies.',
        affirmation: 'I persist with purpose. My path spirals upward even when it seems circular.'
    },
    {
        name: 'Ngéadal',
        letter: 'Ng',
        symbol: 'ᚍ',
        tree: 'Reed / Broom',
        tree_emoji: '🌾',
        aicme: 'Muine',
        element: 'Water',
        planet: 'Saturn',
        keywords: ['Healing', 'Harmony', 'Hidden Depths', 'Skill'],
        upright: {
            meaning: 'The reed is the instrument of music and the material of healing and shelter. Ngéadal speaks of the healing power of harmony — inner and outer — and the skill that comes from mastering one\'s craft.',
            guidance: 'Healing is available now — perhaps through music, creative expression, or the restoration of inner harmony. Your skills are deepening. Trust the mastery you are developing.'
        },
        reversed: {
            meaning: 'Disharmony, misuse of skill, or a wound that is being avoided rather than healed.',
            guidance: 'Where is there discord in your life that needs addressing? A wound left unattended does not heal itself. Seek the harmony you have been avoiding.'
        },
        lore: 'Reeds were used for writing (Ogham staves), building, music, and medicine. They represent both the mundane tools of civilization and the breath of spirit made audible in song.',
        affirmation: 'I heal through harmony. I develop my skills with patience and purpose.'
    },
    {
        name: 'Straif',
        letter: 'St/Z',
        symbol: 'ᚎ',
        tree: 'Blackthorn',
        tree_emoji: '🌑',
        aicme: 'Muine',
        element: 'Earth',
        planet: 'Saturn',
        keywords: ['Fate', 'Necessity', 'Difficult Truth', 'Shadow'],
        upright: {
            meaning: 'Blackthorn is the dark twin of the hawthorn — its thorns draw blood, its sloe berries bitter without frost. Straif speaks of fate, necessity, and the difficult truths that cannot be avoided.',
            guidance: 'Something difficult but necessary is being required of you. Do not fight fate here — work with it. The lesson embedded in this hardship is exactly what you need.'
        },
        reversed: {
            meaning: 'Fighting against what is inevitable, or using hardship as an excuse for bitterness.',
            guidance: 'Resistance to necessary difficulty prolongs it. Where are you fighting against what cannot be changed? Work with reality, not against it.'
        },
        lore: 'The blackthorn was the wood of the shillelagh and the rowan-like wands of dark magic. It represents the necessity of shadow — without darkness there is no light, without winter no spring.',
        affirmation: 'I face difficulty with courage. I find the wisdom hidden in every hardship.'
    },
    {
        name: 'Ruis',
        letter: 'R',
        symbol: 'ᚏ',
        tree: 'Elder',
        tree_emoji: '🌿',
        aicme: 'Muine',
        element: 'Water',
        planet: 'Venus',
        keywords: ['Endings', 'Transformation', 'Ancestor Wisdom', 'Completion'],
        upright: {
            meaning: 'Elder is the tree of endings and transformation — the final tree of the Ogham year. Ruis marks completion, honoring what was, and the preparation for what comes after.',
            guidance: 'Something is completing. Honor it fully before moving forward. The wisdom of your ancestors and your own past experience is accessible now — draw on it.'
        },
        reversed: {
            meaning: 'Refusing to complete, premature endings, or cutting off from ancestral wisdom.',
            guidance: 'Are you ending something too soon, or too late? Give completions their proper honor — they deserve acknowledgment before you move on.'
        },
        lore: 'Elder was used for healing and magic but was never burned as fuel — to do so invited misfortune. It was associated with the crone goddess and the ancestors, marking the threshold between life and death.',
        affirmation: 'I honor endings with gratitude. Every completion holds the seed of what comes next.'
    },
    // AICME AILME (Fourth Aicme — A group)
    {
        name: 'Ailm',
        letter: 'A',
        symbol: 'ᚐ',
        tree: 'Silver Fir / Pine',
        tree_emoji: '🌲',
        aicme: 'Ailme',
        element: 'Air',
        planet: 'Jupiter',
        keywords: ['Vision', 'Clarity', 'High Perspective', 'Healing'],
        upright: {
            meaning: 'The silver fir stands tall with a commanding view of the landscape. Ailm is the few of long-range vision and clear-eyed perception from a high vantage point, beyond immediate concerns.',
            guidance: 'Rise above the immediate. The larger view will bring clarity to what seems confusing up close. Take the long view — what matters in five years? In twenty?'
        },
        reversed: {
            meaning: 'Myopic focus on immediate concerns, or detachment that misses important human detail.',
            guidance: 'Balance the long view with present reality. Grand visions without practical grounding remain fantasy. What needs attention today?'
        },
        lore: 'The birth cry of a newborn child was compared to the sound of fir cones falling — the tree was associated with birth and the beginning of long cycles. Fir resin was used for healing.',
        affirmation: 'I see clearly from a high place. My vision encompasses both near and far.'
    },
    {
        name: 'Onn',
        letter: 'O',
        symbol: 'ᚑ',
        tree: 'Gorse / Furze',
        tree_emoji: '🌼',
        aicme: 'Ailme',
        element: 'Fire',
        planet: 'Sun',
        keywords: ['Vitality', 'Attraction', 'Gold', 'Life Force'],
        upright: {
            meaning: 'Gorse blazes yellow in early spring when little else is blooming, radiating pure vitality. Onn brings powerful life force, magnetic attraction, and the gold of unapologetic self-expression.',
            guidance: 'Let your vitality show. You are magnetic right now. Pursue what truly enlivens you — half-hearted action in this period wastes extraordinary energy available to you.'
        },
        reversed: {
            meaning: 'Suppressed vitality, energy wasted on the wrong pursuits, or hiding your light.',
            guidance: 'What is draining your life force? What enlivens you that you\'ve been denying yourself? Vitality cannot be indefinitely stored — it must be expressed.'
        },
        lore: 'Gorse was burned on hilltops at Imbolc to welcome the returning sun. It flowers three times a year (hence "when gorse is out of bloom, kissing is out of fashion"), symbolizing unceasing vitality.',
        affirmation: 'I radiate vital energy. I pursue what enlivens me with full enthusiasm.'
    },
    {
        name: 'Ur',
        letter: 'U',
        symbol: 'ᚒ',
        tree: 'Heather',
        tree_emoji: '🌸',
        aicme: 'Ailme',
        element: 'Water',
        planet: 'Venus',
        keywords: ['Community', 'Luck', 'Healing', 'Generosity'],
        upright: {
            meaning: 'Heather covers the Scottish highlands in communal abundance — it does not grow alone. Ur is the few of community, collective healing, and the good luck that comes from generosity and belonging.',
            guidance: 'Community and generosity are your path forward now. You cannot do this alone, nor should you. The luck that finds you comes through others. Give and receive openly.'
        },
        reversed: {
            meaning: 'Isolation, withholding generosity, or community discord.',
            guidance: 'Have you withdrawn from community? Is there a generous impulse you\'ve been suppressing? The healing you need is in relationship, not solitude.'
        },
        lore: 'White heather has been considered lucky in Scottish tradition for centuries. Heather honey was used for healing and Pictish heather ale (a forgotten recipe) was legendary.',
        affirmation: 'I thrive in community. Generosity flows through me and returns to me multiplied.'
    },
    {
        name: 'Edad',
        letter: 'E',
        symbol: 'ᚓ',
        tree: 'Aspen / White Poplar',
        tree_emoji: '🌿',
        aicme: 'Ailme',
        element: 'Air',
        planet: 'Mercury',
        keywords: ['Communication', 'Courage', 'Language', 'Messages'],
        upright: {
            meaning: 'The aspen quivers and shimmers with the slightest breeze — every whisper moves it. Edad is the few of communication, words with power, and the courage to speak truth even when your voice trembles.',
            guidance: 'Speak what must be said. The message you carry is important. Find the words — even if imperfect, even if difficult. Trembling does not mean stop; it means proceed with care.'
        },
        reversed: {
            meaning: 'Fear of speaking, words withheld at the wrong moment, or communication that scatters without grounding.',
            guidance: 'What are you afraid to say? The silence is costing more than the words would. Ground yourself first, then speak.'
        },
        lore: 'The aspen\'s perpetual shimmering was attributed to its being the wood of shields (shields tremble), of the coffin (the dead tremble), and of the tongue that speaks truth (the voice trembles).',
        affirmation: 'I speak truth with courage. My words carry weight and intention.'
    },
    {
        name: 'Idad',
        letter: 'I',
        symbol: 'ᚔ',
        tree: 'Yew',
        tree_emoji: '🌳',
        aicme: 'Ailme',
        element: 'Earth',
        planet: 'Saturn',
        keywords: ['Eternity', 'Ancestors', 'Death & Rebirth', 'Deep Time'],
        upright: {
            meaning: 'The yew is the oldest living tree in Europe and grows in churchyards because it predated them — it marks sacred ground across deep time. Idad opens a gateway to ancestor wisdom, the long arc of fate, and the mystery of rebirth.',
            guidance: 'Look back before moving forward. Your ancestors and the deep patterns of your lineage hold wisdom for this moment. What has been, will be again in new form. Trust the long cycle.'
        },
        reversed: {
            meaning: 'Ancestral patterns that imprison rather than instruct, or fear of endings that blocks transformation.',
            guidance: 'Not all inherited patterns serve you. Which ancestral wounds are ready to be healed rather than perpetuated? A cycle is ready to complete — let it.'
        },
        lore: 'Individual yew trees can live 5,000+ years. The Fortingall Yew in Scotland may be among the oldest living organisms in Europe. Yew groves were sacred long before Christian churches were built among them.',
        affirmation: 'I am rooted in the wisdom of deep time. I transform what I inherit and pass on what serves.'
    }
];

// ─── SPREADS ──────────────────────────────────────────────────────────────────

const SPREADS = {
    single: {
        name: 'Single Few',
        description: 'One few for daily guidance or a focused question.',
        positions: ['Your Message']
    },
    three: {
        name: 'Past · Present · Future',
        description: 'Three fews revealing the arc of a situation.',
        positions: ['Past', 'Present', 'Future']
    },
    five: {
        name: 'Five-Few Grove',
        description: 'A full reading: situation, challenge, foundation, advice, and outcome.',
        positions: ['Situation', 'Challenge', 'Foundation', 'Advice', 'Outcome']
    }
};

// ─── STATE ────────────────────────────────────────────────────────────────────

let currentCast = [];

// ─── RUNE OF THE DAY (reuses pattern from crystal/rune) ───────────────────────

function initFewOfDay() {
    const today = new Date().toISOString().split('T')[0];
    const stored = JSON.parse(localStorage.getItem('mystical-path-ogham-of-day') || '{}');
    let few;
    if (stored.date === today) {
        few = OGHAM_FEWS.find(f => f.name === stored.name);
    }
    if (!few) {
        few = OGHAM_FEWS[Math.floor(Math.random() * OGHAM_FEWS.length)];
        localStorage.setItem('mystical-path-ogham-of-day', JSON.stringify({
            date: today, name: few.name, emoji: few.symbol
        }));
    }
    const card = document.getElementById('few-of-day-card');
    if (!card) return;
    card.innerHTML = `
        <div class="fotd-label">🌿 Few of the Day</div>
        <div class="fotd-symbol">${few.symbol}</div>
        <div class="fotd-info">
            <h3 class="fotd-name">${few.name}</h3>
            <p class="fotd-tree">${few.tree_emoji} ${few.tree}</p>
            <div class="fotd-keywords">${few.keywords.slice(0, 3).map(k => `<span class="fotd-kw">${k}</span>`).join('')}</div>
        </div>
    `;
}

// ─── CAST LOGIC ───────────────────────────────────────────────────────────────

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function castFews(count) {
    const shuffled = shuffleArray(OGHAM_FEWS);
    return shuffled.slice(0, count).map(few => ({
        few,
        reversed: Math.random() < 0.3   // 30% chance reversed
    }));
}

function displaySpread(spreadKey, results) {
    const spread = SPREADS[spreadKey];
    spreadTitle.textContent = spread.name;
    readingGrid.innerHTML = '';
    readingGrid.className = `reading-grid spread-${spreadKey}`;

    results.forEach((result, i) => {
        const card = createFewCard(result.few, result.reversed, spread.positions[i]);
        readingGrid.appendChild(card);
    });

    readingSection.classList.remove('hidden');
    readingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function createFewCard(few, reversed, positionName) {
    const card = document.createElement('div');
    card.className = 'few-card' + (reversed ? ' reversed' : '');

    const data = reversed ? few.reversed : few.upright;

    card.innerHTML = `
        <div class="few-position">${positionName}</div>
        <div class="few-symbol-display">${few.symbol}</div>
        <div class="few-header">
            <h3 class="few-name">${few.name}${reversed ? ' ᚛' : ''}</h3>
            <p class="few-tree">${few.tree_emoji} ${few.tree}</p>
            ${reversed ? '<span class="reversed-badge">Reversed</span>' : ''}
        </div>
        <div class="few-keywords">
            ${few.keywords.map(k => `<span class="few-kw">${k}</span>`).join('')}
        </div>
        <div class="few-meaning">
            <p>${data.meaning}</p>
        </div>
        <div class="few-guidance">
            <h4>Guidance</h4>
            <p>${data.guidance}</p>
        </div>
        <div class="few-meta">
            <span>🔤 ${few.letter}</span>
            <span>🌊 ${few.element}</span>
            <span>⭐ ${few.planet}</span>
        </div>
        <details class="few-lore">
            <summary>Tree Lore</summary>
            <p>${few.lore}</p>
            <p class="few-affirmation">"${few.affirmation}"</p>
        </details>
    `;
    return card;
}

// ─── FEW GRID (reference view) ────────────────────────────────────────────────

function filterFews() {
    const filterVal = fewFilter.value;
    const filtered = filterVal === 'all'
        ? OGHAM_FEWS
        : OGHAM_FEWS.filter(f => f.aicme === filterVal);

    fewGrid.innerHTML = '';
    filtered.forEach(few => {
        const card = document.createElement('div');
        card.className = 'few-ref-card';
        card.innerHTML = `
            <div class="ref-symbol">${few.symbol}</div>
            <div class="ref-info">
                <strong>${few.name}</strong>
                <span class="ref-tree">${few.tree_emoji} ${few.tree}</span>
                <span class="ref-letter">Letter: ${few.letter}</span>
            </div>
            <div class="ref-keywords">
                ${few.keywords.slice(0, 2).map(k => `<span class="few-kw">${k}</span>`).join('')}
            </div>
        `;
        fewGrid.appendChild(card);
    });
}

// ─── HISTORY ──────────────────────────────────────────────────────────────────

const HISTORY_KEY = 'mystical-path-ogham-history';
const HISTORY_MAX = 20;
let oghamHistory = [];

function loadHistory() {
    try { oghamHistory = JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; }
    catch { oghamHistory = []; }
}

function saveHistory() {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(oghamHistory));
}

function addToHistory(spreadKey, results) {
    const spread = SPREADS[spreadKey];
    oghamHistory.unshift({
        date: new Date().toLocaleString(),
        spread: spread.name,
        fews: results.map((r, i) => ({
            position: spread.positions[i],
            name: r.few.name,
            symbol: r.few.symbol,
            reversed: r.reversed
        }))
    });
    if (oghamHistory.length > HISTORY_MAX) oghamHistory = oghamHistory.slice(0, HISTORY_MAX);
    saveHistory();
    renderHistory();
}

function renderHistory() {
    if (oghamHistory.length === 0) {
        historySection.classList.add('hidden');
        return;
    }
    historySection.classList.remove('hidden');
    historyList.innerHTML = '';
    oghamHistory.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="history-header">
                <span class="history-spread">${entry.spread}</span>
                <span class="history-date">${entry.date}</span>
            </div>
            <div class="history-fews">
                ${entry.fews.map(f =>
                    `<span class="history-few">${f.symbol} ${f.name}${f.reversed ? ' ↩' : ''} <em>${f.position}</em></span>`
                ).join('')}
            </div>
        `;
        historyList.appendChild(item);
    });
}

// ─── EVENT LISTENERS ──────────────────────────────────────────────────────────

castButton.addEventListener('click', () => {
    const spreadKey = spreadSelector.value;
    const count = SPREADS[spreadKey].positions.length;
    currentCast = castFews(count);
    displaySpread(spreadKey, currentCast);
    addToHistory(spreadKey, currentCast);
});

if (fewFilter) {
    fewFilter.addEventListener('change', filterFews);
}

if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
        oghamHistory = [];
        saveHistory();
        renderHistory();
    });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

loadHistory();
renderHistory();
initFewOfDay();
filterFews();
