// ========================================
// ELDER FUTHARK RUNE CASTING SIMULATOR
// ========================================

// DOM Elements
const spreadSelector = document.getElementById('spread-selector');
const castButton = document.getElementById('cast-button');
const runeDisplaySection = document.getElementById('rune-display');
const runeGrid = document.getElementById('rune-grid');
const aettFilter = document.getElementById('aett-filter');
const elementFilter = document.getElementById('element-filter');

// Bind Rune Creator Elements
const bindCanvasData = initCanvas('bind-canvas', { guideLine: true });
const bindCanvas = bindCanvasData ? bindCanvasData.canvas : null;
const bindCtx = bindCanvasData ? bindCanvasData.ctx : null;
const combineButton = document.getElementById('combine-button');
const downloadBindButton = document.getElementById('download-bind');
const clearBindButton = document.getElementById('clear-bind');

// State
let currentCast = [];
let selectedRunesForBind = [];

// ========================================
// ELDER FUTHARK DATA
// ========================================

const ELDER_FUTHARK = [
    // FREYA'S AETT
    {
        name: 'Fehu',
        symbol: 'ᚠ',
        unicode: '\u16A0',
        aett: 'Freya',
        element: 'Fire',
        upright: {
            keywords: ['Wealth', 'Abundance', 'Prosperity', 'Success'],
            meaning: 'Cattle, mobile property. Represents wealth that can be earned and shared.',
            interpretation: 'A time of prosperity and material success. New opportunities bring financial gain. Share your abundance generously. Energy and ambition fuel your endeavors.',
            advice: 'Use your resources wisely. Success comes through effort and generosity.'
        },
        reversed: {
            keywords: ['Loss', 'Greed', 'Poverty', 'Stagnation'],
            meaning: 'Blocked prosperity, material loss, or greed preventing growth.',
            interpretation: 'Financial setback or loss may occur. Examine your relationship with material possessions. Greed or selfishness blocks abundance. Energy is scattered or misdirected.',
            advice: 'Release attachment to outcomes. Reassess your values and spending habits.'
        },
        correspondences: {
            deity: 'Freya, Freyr',
            tarot: 'The Emperor',
            planet: 'Mars'
        }
    },
    {
        name: 'Uruz',
        symbol: 'ᚢ',
        unicode: '\u16A2',
        aett: 'Freya',
        element: 'Earth',
        upright: {
            keywords: ['Strength', 'Vitality', 'Courage', 'Primal Power'],
            meaning: 'The aurochs (wild ox). Raw physical and spiritual strength.',
            interpretation: 'Great strength and vitality are yours. Health improves. Face challenges with courage. Primal energy surges through you. Take decisive action with confidence.',
            advice: 'Trust your inner strength. Act with boldness and integrity.'
        },
        reversed: {
            keywords: ['Weakness', 'Illness', 'Missed Opportunity', 'Brutality'],
            meaning: 'Strength misused, health issues, or lack of willpower.',
            interpretation: 'Physical weakness or illness drains energy. Opportunities slip away due to hesitation. Strength used for domination rather than growth. Aggression without wisdom.',
            advice: 'Rest and restore your energy. Temper strength with compassion.'
        },
        correspondences: {
            deity: 'Thor',
            tarot: 'Strength',
            planet: 'Mars'
        }
    },
    {
        name: 'Thurisaz',
        symbol: 'ᚦ',
        unicode: '\u16A6',
        aett: 'Freya',
        element: 'Fire',
        upright: {
            keywords: ['Gateway', 'Protection', 'Defense', 'Breakthrough'],
            meaning: 'Thorn or giant. The gateway through danger, protected by thorns.',
            interpretation: 'You stand at a threshold requiring courage. Protection surrounds you. Defensive energy wards off negativity. A breakthrough comes after facing challenges. The giant guards the path forward.',
            advice: 'Proceed cautiously but confidently. Protect your boundaries fiercely.'
        },
        reversed: {
            keywords: ['Danger', 'Haste', 'Conflict', 'Vulnerability'],
            meaning: 'Unprotected, hasty action, or walking into danger unprepared.',
            interpretation: 'Rushing forward brings conflict. Defenses are down, leaving you vulnerable. Reactive energy creates more problems. Unresolved anger causes harm. Think before acting.',
            advice: 'Slow down and assess the situation. Strengthen your defenses before proceeding.'
        },
        correspondences: {
            deity: 'Thor',
            tarot: 'The Tower',
            planet: 'Mars'
        }
    },
    {
        name: 'Ansuz',
        symbol: 'ᚨ',
        unicode: '\u16A8',
        aett: 'Freya',
        element: 'Air',
        upright: {
            keywords: ['Communication', 'Wisdom', 'Divine Inspiration', 'Signals'],
            meaning: 'The mouth, breath, or Odin himself. Divine messages and communication.',
            interpretation: 'Wisdom flows through you. Messages arrive from unexpected sources. Communication brings clarity and connection. Listen for divine guidance. Your words carry power and truth.',
            advice: 'Speak your truth clearly. Pay attention to signs and synchronicities.'
        },
        reversed: {
            keywords: ['Miscommunication', 'Deception', 'Blocked Creativity', 'Ignored Warnings'],
            meaning: 'Communication breakdown, lies, or failing to hear important messages.',
            interpretation: 'Messages are misunderstood or ignored. Deception clouds truth. Creative expression is blocked. You talk but don\'t listen. Important warnings go unheeded.',
            advice: 'Listen more carefully. Seek clarity before speaking or acting.'
        },
        correspondences: {
            deity: 'Odin',
            tarot: 'The Magician',
            planet: 'Mercury'
        }
    },
    {
        name: 'Raidho',
        symbol: 'ᚱ',
        unicode: '\u16B1',
        aett: 'Freya',
        element: 'Air',
        upright: {
            keywords: ['Journey', 'Movement', 'Quest', 'Right Action'],
            meaning: 'The wheel, ride, or journey. Movement in alignment with cosmic order.',
            interpretation: 'A journey begins—physical or spiritual. Movement brings growth. Follow the right path with integrity. Trust the process and timing. Adventure calls you forward.',
            advice: 'Take action toward your goals. Trust the journey, not just the destination.'
        },
        reversed: {
            keywords: ['Delays', 'Stagnation', 'Detours', 'Wrong Path'],
            meaning: 'Journey blocked, wrong direction, or movement without purpose.',
            interpretation: 'Travel plans face delays or disruption. You\'re on the wrong path. Movement lacks direction or purpose. Restlessness without progress. The journey stalls.',
            advice: 'Reassess your direction. Sometimes staying still is the right move.'
        },
        correspondences: {
            deity: 'Thor',
            tarot: 'The Chariot',
            planet: 'Mercury'
        }
    },
    {
        name: 'Kenaz',
        symbol: 'ᚲ',
        unicode: '\u16B2',
        aett: 'Freya',
        element: 'Fire',
        upright: {
            keywords: ['Knowledge', 'Creativity', 'Inspiration', 'Illumination'],
            meaning: 'Torch or controlled fire. The light of knowledge and creative flame.',
            interpretation: 'Creative inspiration ignites within you. Knowledge illuminates your path. Passion fuels your projects. Skills and talents shine brightly. Transformation through creative work.',
            advice: 'Pursue creative projects with passion. Share your knowledge and gifts.'
        },
        reversed: {
            keywords: ['Ignorance', 'Creative Block', 'Burnout', 'False Knowledge'],
            meaning: 'Creative burnout, false teachings, or knowledge hoarded selfishly.',
            interpretation: 'Creative energy depletes. Burnout from overwork. False information misleads you. Knowledge used to manipulate. The fire dies or burns destructively.',
            advice: 'Rest and recharge your creative energy. Question what you think you know.'
        },
        correspondences: {
            deity: 'Freya, Heimdall',
            tarot: 'The Hermit',
            planet: 'Venus'
        }
    },
    {
        name: 'Gebo',
        symbol: 'ᚷ',
        unicode: '\u16B7',
        aett: 'Freya',
        element: 'Air',
        upright: {
            keywords: ['Gift', 'Partnership', 'Exchange', 'Balance'],
            meaning: 'Gift or exchange. Sacred balance between giving and receiving.',
            interpretation: 'Gifts arrive—material or spiritual. Partnerships thrive through equal exchange. Generosity flows both ways. Balance in relationships. What you give returns multiplied.',
            advice: 'Give freely without expectation. Honor balanced reciprocity in relationships.'
        },
        reversed: {
            keywords: ['Imbalance', 'Obligation', 'Debt', 'One-Sided'],
            meaning: 'Imbalanced exchange, gifts with strings, or taking without giving.',
            interpretation: 'Relationships feel one-sided. Gifts come with obligations. You give too much or take too much. Partnerships lack balance. Debt—emotional or material—burdens you.',
            advice: 'Restore balance through honest communication. Release toxic obligations.'
        },
        correspondences: {
            deity: 'Odin, Freya',
            tarot: 'The Lovers',
            planet: 'Venus'
        }
    },
    {
        name: 'Wunjo',
        symbol: 'ᚹ',
        unicode: '\u16B9',
        aett: 'Freya',
        element: 'Earth',
        upright: {
            keywords: ['Joy', 'Harmony', 'Success', 'Fellowship'],
            meaning: 'Joy, perfection, the banner of victory. True happiness and harmony.',
            interpretation: 'Joy and harmony fill your life. Success is achieved or imminent. Fellowship and community support you. Wishes come true. A time of celebration and contentment.',
            advice: 'Celebrate your victories. Share joy with others and express gratitude.'
        },
        reversed: {
            keywords: ['Sorrow', 'Discord', 'Alienation', 'Delayed Success'],
            meaning: 'Unhappiness, isolation, or joy postponed.',
            interpretation: 'Sorrow or disappointment clouds your mood. Feeling isolated from community. Success delayed or tainted. Discord in relationships. Happiness feels out of reach.',
            advice: 'Address what blocks your joy. Reconnect with supportive community.'
        },
        correspondences: {
            deity: 'Odin, Frigg',
            tarot: 'The Sun',
            planet: 'Jupiter'
        }
    },

    // HEIMDALL'S AETT
    {
        name: 'Hagalaz',
        symbol: 'ᚺ',
        unicode: '\u16BA',
        aett: 'Heimdall',
        element: 'Ice',
        upright: {
            keywords: ['Disruption', 'Natural Forces', 'Cleansing', 'Transformation'],
            meaning: 'Hail. Sudden disruption that clears the way for new growth.',
            interpretation: 'Sudden disruption or crisis arrives. Natural forces beyond your control. Destruction clears space for renewal. What breaks down makes room for better. Transformation through chaos.',
            advice: 'Accept what you cannot control. Find the gift within the crisis.'
        },
        reversed: {
            keywords: ['Controlled Change', 'Slow Transformation', 'Preparation'],
            meaning: 'Note: Hagalaz is often read the same reversed as upright—crisis as teacher.',
            interpretation: 'Change comes more gradually. You have time to prepare. Disruption is controlled or minimized. Lessons learned without major catastrophe. Transformation begins internally.',
            advice: 'Use this time to prepare for inevitable changes ahead.'
        },
        correspondences: {
            deity: 'Urd (Fate)',
            tarot: 'The Tower',
            planet: 'Uranus'
        }
    },
    {
        name: 'Nauthiz',
        symbol: 'ᚾ',
        unicode: '\u16BE',
        aett: 'Heimdall',
        element: 'Fire',
        upright: {
            keywords: ['Need', 'Constraint', 'Necessity', 'Resilience'],
            meaning: 'Need or necessity. Constraints that forge strength and resilience.',
            interpretation: 'Necessity drives innovation. Constraints force creative solutions. Needs go unmet temporarily, teaching patience. Hardship builds character. What you lack makes you resourceful.',
            advice: 'Work within your limitations creatively. Need teaches valuable lessons.'
        },
        reversed: {
            keywords: ['Desperation', 'Want vs Need', 'Freedom from Constraint'],
            meaning: 'Excessive need, confusing wants with needs, or freedom approaching.',
            interpretation: 'Desperation clouds judgment. Confusing wants with genuine needs. Constraints lift soon. Freedom from limitation approaches. Release unnecessary attachments.',
            advice: 'Distinguish true needs from desires. Relief is coming—have patience.'
        },
        correspondences: {
            deity: 'Skuld (Fate)',
            tarot: 'The Devil',
            planet: 'Saturn'
        }
    },
    {
        name: 'Isa',
        symbol: 'ᛁ',
        unicode: '\u16C1',
        aett: 'Heimdall',
        element: 'Ice',
        upright: {
            keywords: ['Stillness', 'Ice', 'Standstill', 'Preservation'],
            meaning: 'Ice. A time of stillness, waiting, and preservation.',
            interpretation: 'Everything freezes in place. Movement halts temporarily. Stillness allows reflection and preservation. Rest and conserve energy. What is frozen will eventually thaw.',
            advice: 'Be patient and still. Use this time for inner work and reflection.'
        },
        reversed: {
            keywords: ['Thawing', 'Movement Returns', 'Release'],
            meaning: 'Ice begins to melt, movement resumes, or release from standstill.',
            interpretation: 'The freeze ends. Movement and progress resume. Energy flows again. What was stuck begins to shift. Spring follows winter. Patience pays off.',
            advice: 'Prepare for movement. The waiting period concludes soon.'
        },
        correspondences: {
            deity: 'Verdandi (Fate)',
            tarot: 'The Hanged Man',
            planet: 'Saturn'
        }
    },
    {
        name: 'Jera',
        symbol: 'ᛃ',
        unicode: '\u16C3',
        aett: 'Heimdall',
        element: 'Earth',
        upright: {
            keywords: ['Harvest', 'Cycles', 'Reward', 'Right Timing'],
            meaning: 'Year or harvest. The natural cycles and rewards of right effort.',
            interpretation: 'Harvest what you\'ve sown. Efforts pay off in due time. Natural cycles complete. Patience rewarded. Everything happens in its proper season. Abundance comes from past work.',
            advice: 'Trust natural timing. Reap your rewards with gratitude.'
        },
        reversed: {
            keywords: ['Poor Harvest', 'Bad Timing', 'Impatience'],
            meaning: 'Harvest delayed, poor results, or acting against natural timing.',
            interpretation: 'Results disappoint. Harvest comes late or sparse. Wrong timing causes setbacks. Impatience disrupts natural cycles. Insufficient preparation yields poor results.',
            advice: 'Reassess your timing and effort. Some seasons require more work.'
        },
        correspondences: {
            deity: 'Freyr, Sif',
            tarot: 'Justice',
            planet: 'Earth'
        }
    },
    {
        name: 'Eihwaz',
        symbol: 'ᛇ',
        unicode: '\u16C7',
        aett: 'Heimdall',
        element: 'All',
        upright: {
            keywords: ['Endurance', 'Yew Tree', 'Death-Life', 'Transformation'],
            meaning: 'The yew tree. Connection between life and death, endurance through all.',
            interpretation: 'Deep transformation occurs. Life and death dance together. Endurance through difficulty. Spiritual initiation. The world tree connects all realms. Strength through flexibility.',
            advice: 'Endure with flexibility. Trust the deep transformation occurring within you.'
        },
        reversed: {
            keywords: ['Resistance', 'Rigidity', 'Avoiding Transformation'],
            meaning: 'Resisting necessary change, rigidity, or breaking under pressure.',
            interpretation: 'Resistance to change causes suffering. Rigidity makes you brittle. Avoiding necessary transformation. Fear of death/endings blocks new life. Inflexibility breaks you.',
            advice: 'Release resistance. Bend with change rather than break against it.'
        },
        correspondences: {
            deity: 'Odin, Ullr',
            tarot: 'Death',
            planet: 'Pluto'
        }
    },
    {
        name: 'Perthro',
        symbol: 'ᛈ',
        unicode: '\u16C8',
        aett: 'Heimdall',
        element: 'Water',
        upright: {
            keywords: ['Mystery', 'Fate', 'Hidden Things', 'Initiation'],
            meaning: 'The dice cup. Mysteries, fate, and things yet to be revealed.',
            interpretation: 'Secrets revealed in time. Mysteries unfold. Fate plays its hand. Hidden knowledge surfaces. The unknown holds gifts. Trust the process of revelation.',
            advice: 'Embrace mystery. Not all must be known immediately—trust the unfolding.'
        },
        reversed: {
            keywords: ['Secrets Exposed', 'Bad Luck', 'Disappointment'],
            meaning: 'Unwanted revelations, bad luck, or mysteries that disappoint.',
            interpretation: 'Secrets come to light uncomfortably. Bad luck or unfortunate surprises. Revelations disappoint. What hidden comes forward at the wrong time. Mysteries lose their magic.',
            advice: 'Face revelations with courage. Some secrets were meant to stay hidden.'
        },
        correspondences: {
            deity: 'Frigg, Norns',
            tarot: 'Wheel of Fortune',
            planet: 'Neptune'
        }
    },
    {
        name: 'Algiz',
        symbol: 'ᛉ',
        unicode: '\u16C9',
        aett: 'Heimdall',
        element: 'Air',
        upright: {
            keywords: ['Protection', 'Higher Self', 'Divine Connection', 'Sanctuary'],
            meaning: 'Elk or protection. The raised hand reaching toward divine protection.',
            interpretation: 'Divine protection surrounds you. Connection to higher self strengthens. You are shielded and guided. Sanctuary available. Intuition guides you correctly. Angels and spirits guard you.',
            advice: 'Trust your intuition and inner guidance. You are protected.'
        },
        reversed: {
            keywords: ['Vulnerability', 'Disconnection', 'Ignoring Warnings'],
            meaning: 'Spiritual disconnection, ignored warnings, or lost protection.',
            interpretation: 'Feeling spiritually disconnected. Protection weakens. Intuition ignored leads to trouble. Warnings go unheeded. Vulnerability to negative energies. Guards are down.',
            advice: 'Reconnect with spiritual practices. Heed warnings and strengthen your shields.'
        },
        correspondences: {
            deity: 'Heimdall',
            tarot: 'The Star',
            planet: 'Neptune'
        }
    },
    {
        name: 'Sowilo',
        symbol: 'ᛊ',
        unicode: '\u16CA',
        aett: 'Heimdall',
        element: 'Fire',
        upright: {
            keywords: ['Success', 'Wholeness', 'Sun', 'Life Force'],
            meaning: 'The sun. Success, victory, wholeness, and life-giving force.',
            interpretation: 'Success is assured. Victory and achievement. Wholeness and integration. Life force strong and vital. The sun illuminates your path. Clarity and confidence prevail.',
            advice: 'Shine your light confidently. Success comes through staying true to yourself.'
        },
        reversed: {
            keywords: ['False Goals', 'Burnout', 'Clouded Vision'],
            meaning: 'Note: Some traditions don\'t reverse Sowilo—sun always shines. When reversed: false success or burnout.',
            interpretation: 'Success hollow or short-lived. Seeking wrong goals. Burnout from overextension. Light obscured by clouds. Energy depleted. Victory feels empty.',
            advice: 'Reassess what success means to you. Rest before burnout occurs.'
        },
        correspondences: {
            deity: 'Balder, Sol',
            tarot: 'The Sun',
            planet: 'Sun'
        }
    },

    // TYR'S AETT
    {
        name: 'Tiwaz',
        symbol: 'ᛏ',
        unicode: '\u16CF',
        aett: 'Tyr',
        element: 'Air',
        upright: {
            keywords: ['Justice', 'Honor', 'Sacrifice', 'Warrior Spirit'],
            meaning: 'The god Tyr. Justice, honor, and the warrior\'s path of sacrifice.',
            interpretation: 'Justice prevails. Honor guides your actions. Necessary sacrifice brings growth. The warrior spirit awakens. Stand for what is right. Legal matters resolve favorably.',
            advice: 'Act with integrity and honor. Be willing to sacrifice for the greater good.'
        },
        reversed: {
            keywords: ['Injustice', 'Dishonor', 'Imbalance', 'Misplaced Loyalty'],
            meaning: 'Injustice, lack of integrity, or meaningless sacrifice.',
            interpretation: 'Injustice or unfair treatment. Honor compromised. Sacrifice without purpose. Misplaced loyalty. Legal issues unfavorable. Fighting the wrong battles.',
            advice: 'Examine where you\'ve compromised your values. Choose your battles wisely.'
        },
        correspondences: {
            deity: 'Tyr',
            tarot: 'Justice',
            planet: 'Mars'
        }
    },
    {
        name: 'Berkano',
        symbol: 'ᛒ',
        unicode: '\u16D2',
        aett: 'Tyr',
        element: 'Earth',
        upright: {
            keywords: ['Birth', 'Growth', 'Fertility', 'Nurturing'],
            meaning: 'Birch tree or goddess. New beginnings, birth, growth, and nurturing energy.',
            interpretation: 'New life begins—literal or metaphorical. Growth and fertility. Nurturing energy surrounds you. Motherhood or creative projects. New ideas take root. Spring returns.',
            advice: 'Nurture new beginnings gently. Provide what is needed for growth.'
        },
        reversed: {
            keywords: ['Stagnation', 'Neglect', 'Family Issues', 'Stunted Growth'],
            meaning: 'Growth blocked, neglect, or family troubles.',
            interpretation: 'Growth stunted or delayed. Neglecting what needs care. Family issues or difficulties with nurturing. Creative projects stall. What should grow struggles.',
            advice: 'Address what you\'ve been neglecting. Seek support where needed.'
        },
        correspondences: {
            deity: 'Frigg, Berchta',
            tarot: 'The Empress',
            planet: 'Moon'
        }
    },
    {
        name: 'Ehwaz',
        symbol: 'ᛖ',
        unicode: '\u16D6',
        aett: 'Tyr',
        element: 'Earth',
        upright: {
            keywords: ['Partnership', 'Trust', 'Movement', 'Horse'],
            meaning: 'Horse. Partnership, teamwork, and harmonious movement forward.',
            interpretation: 'Partnerships thrive through trust. Teamwork achieves goals. Movement forward in harmony. Loyal allies support you. Like horse and rider, work together seamlessly.',
            advice: 'Build trust in partnerships. Move forward together rather than alone.'
        },
        reversed: {
            keywords: ['Betrayal', 'Distrust', 'Broken Partnership', 'Working Against Each Other'],
            meaning: 'Partnership problems, betrayal, or lack of cooperation.',
            interpretation: 'Partnership struggles or ends. Trust broken. Working at cross-purposes. Betrayal possible. Horse and rider out of sync. Goals misaligned with partners.',
            advice: 'Address partnership issues directly. Sometimes you must part ways.'
        },
        correspondences: {
            deity: 'Freyr',
            tarot: 'The Lovers',
            planet: 'Mercury'
        }
    },
    {
        name: 'Mannaz',
        symbol: 'ᛗ',
        unicode: '\u16D7',
        aett: 'Tyr',
        element: 'Air',
        upright: {
            keywords: ['Humanity', 'Self', 'Community', 'Intelligence'],
            meaning: 'Humanity or self. The divine human, community, and self-awareness.',
            interpretation: 'Self-awareness deepens. Understanding your place in humanity. Community connection. Intelligence and reason guide you. The divine human awakens. Both individual and collective.',
            advice: 'Balance individual needs with community. Use your mind wisely.'
        },
        reversed: {
            keywords: ['Isolation', 'Selfishness', 'Denial', 'Disconnection'],
            meaning: 'Isolation from community, excessive self-focus, or denying humanity.',
            interpretation: 'Isolated from others. Self-absorption blocks connection. Denying parts of yourself. Community feels distant. Intellect disconnected from heart. Loneliness.',
            advice: 'Reconnect with community and your authentic self. Balance mind and heart.'
        },
        correspondences: {
            deity: 'Heimdall, Odin',
            tarot: 'The Hierophant',
            planet: 'Jupiter'
        }
    },
    {
        name: 'Laguz',
        symbol: 'ᛚ',
        unicode: '\u16DA',
        aett: 'Tyr',
        element: 'Water',
        upright: {
            keywords: ['Flow', 'Water', 'Intuition', 'Emotion'],
            meaning: 'Water or lake. Flow, intuition, dreams, and emotional depths.',
            interpretation: 'Go with the flow. Intuition guides accurately. Emotional depths explored. Dreams carry messages. Like water, adapt to circumstances. The unconscious reveals wisdom.',
            advice: 'Trust your intuition. Flow with rather than against circumstances.'
        },
        reversed: {
            keywords: ['Overwhelm', 'Confusion', 'Against the Current', 'Emotional Turmoil'],
            meaning: 'Overwhelmed by emotions, confusion, or fighting natural flow.',
            interpretation: 'Drowning in emotions. Intuition clouded by fear. Fighting against natural flow. Confusion about direction. Dreams troubled. Overwhelmed by the unconscious.',
            advice: 'Don\'t fight the current. Seek clarity before making emotional decisions.'
        },
        correspondences: {
            deity: 'Njord',
            tarot: 'The Moon',
            planet: 'Moon'
        }
    },
    {
        name: 'Ingwaz',
        symbol: 'ᛝ',
        unicode: '\u16DD',
        aett: 'Tyr',
        element: 'Earth',
        upright: {
            keywords: ['Potential', 'Gestation', 'Fertility', 'Internal Growth'],
            meaning: 'The god Ing. Seed potential, gestation period, and internal growth.',
            interpretation: 'Potential gestates within. The seed of new life. Internal growth before external manifestation. Fertility and creativity incubate. Patience required before birth.',
            advice: 'Trust the gestation period. Great things develop in hidden silence.'
        },
        reversed: {
            keywords: ['Stagnation', 'Premature Action', 'Infertility'],
            meaning: 'Premature action, stagnation, or potential unrealized.',
            interpretation: 'Acting before ready. Rushing natural processes. Potential fails to develop. Seeds don\'t germinate. Impatience disrupts growth. Creative block.',
            advice: 'Give ideas time to mature. Rushing will abort the process.'
        },
        correspondences: {
            deity: 'Freyr, Ing',
            tarot: 'Judgment',
            planet: 'Earth'
        }
    },
    {
        name: 'Dagaz',
        symbol: 'ᛞ',
        unicode: '\u16DE',
        aett: 'Tyr',
        element: 'Fire',
        upright: {
            keywords: ['Dawn', 'Breakthrough', 'Awakening', 'Transformation'],
            meaning: 'Day or dawn. Breakthrough, enlightenment, and the light of new awareness.',
            interpretation: 'Dawn breaks after darkness. Sudden breakthrough or awakening. Transformation completes. Enlightenment arrives. New day, new perspective. The light of clarity.',
            advice: 'Embrace the breakthrough. A new day of understanding has dawned.'
        },
        reversed: {
            keywords: ['False Dawn', 'Incomplete Transformation', 'Resistance'],
            meaning: 'Note: Often read same as upright. When reversed: false dawn or resisting breakthrough.',
            interpretation: 'False hope or premature celebration. Transformation incomplete. Resisting awakening. Not ready for the new day. Clinging to old darkness. Growth arrested.',
            advice: 'Ensure the breakthrough is real. Complete the transformation fully.'
        },
        correspondences: {
            deity: 'Heimdall',
            tarot: 'The World',
            planet: 'Sun'
        }
    },
    {
        name: 'Othala',
        symbol: 'ᛟ',
        unicode: '\u16DF',
        aett: 'Tyr',
        element: 'Earth',
        upright: {
            keywords: ['Heritage', 'Home', 'Ancestral Property', 'Legacy'],
            meaning: 'Ancestral property or homeland. Heritage, roots, and legacy.',
            interpretation: 'Connection to ancestry and heritage. Home and property matters. Receiving inheritance—material or spiritual. Roots run deep. Legacy and tradition honor you. True belonging.',
            advice: 'Honor your roots and heritage. Consider what legacy you create.'
        },
        reversed: {
            keywords: ['Displacement', 'Lost Heritage', 'Family Discord', 'Rootlessness'],
            meaning: 'Loss of home, disconnection from roots, or family troubles.',
            interpretation: 'Feeling displaced or rootless. Family discord or inheritance disputes. Lost connection to heritage. Home unstable. Traditions broken. Cultural disconnection.',
            advice: 'Seek to reconnect with your roots. Create new traditions if old ones fail.'
        },
        correspondences: {
            deity: 'Odin, Ancestral Spirits',
            tarot: 'The Hierophant',
            planet: 'Saturn'
        }
    }
];

// ========================================
// SPREAD DEFINITIONS
// ========================================

const SPREADS = {
    'daily-draw': {
        name: 'Daily Rune',
        positions: 1,
        description: 'A single rune for daily guidance and reflection.',
        layout: [
            { name: 'Today\'s Guidance', gridArea: 'center' }
        ]
    },
    'three-rune': {
        name: 'Past-Present-Future',
        positions: 3,
        description: 'Classic three rune spread showing the flow of time.',
        layout: [
            { name: 'Past Influences', gridArea: 'past' },
            { name: 'Present Situation', gridArea: 'present' },
            { name: 'Future Outcome', gridArea: 'future' }
        ]
    },
    'five-cross': {
        name: 'Five Rune Cross',
        positions: 5,
        description: 'Deep insight into challenges and outcomes.',
        layout: [
            { name: 'The Self', gridArea: 'self' },
            { name: 'The Challenge', gridArea: 'challenge' },
            { name: 'Past Foundation', gridArea: 'past' },
            { name: 'Future Path', gridArea: 'future' },
            { name: 'The Outcome', gridArea: 'outcome' }
        ]
    },
    'runic-cross': {
        name: 'Runic Cross (6)',
        positions: 6,
        description: 'Comprehensive reading with spiritual and material aspects.',
        layout: [
            { name: 'Present Position', gridArea: 'present' },
            { name: 'Challenge/Opposition', gridArea: 'challenge' },
            { name: 'Past/Foundation', gridArea: 'past' },
            { name: 'Future', gridArea: 'future' },
            { name: 'Above (Spiritual)', gridArea: 'above' },
            { name: 'Below (Material)', gridArea: 'below' }
        ]
    }
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = randomInt(0, i);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ========================================
// CORE CASTING FUNCTIONS
// ========================================

function castRunes(count) {
    const shuffled = shuffleArray(ELDER_FUTHARK);
    const cast = [];
    
    for (let i = 0; i < count; i++) {
        const rune = shuffled[i];
        const reversed = Math.random() < 0.5;
        cast.push({ rune, reversed });
    }
    
    return cast;
}

function displaySpread(spreadKey, castResults) {
    const spread = SPREADS[spreadKey];
    runeGrid.innerHTML = '';
    runeGrid.className = `rune-grid spread-${spreadKey}`;
    
    castResults.forEach((cast, index) => {
        const position = spread.layout[index];
        const card = createRuneCard(cast.rune, cast.reversed, position.name);
        card.style.gridArea = position.gridArea;
        runeGrid.appendChild(card);
    });
    
    runeDisplaySection.style.display = 'block';
    runeDisplaySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function createRuneCard(rune, reversed, positionName) {
    const card = document.createElement('div');
    card.className = 'rune-card';
    
    const symbol = document.createElement('div');
    symbol.className = `rune-symbol ${reversed ? 'reversed' : ''}`;
    symbol.textContent = rune.symbol;
    
    const positionLabel = document.createElement('div');
    positionLabel.className = 'position-label';
    positionLabel.textContent = positionName;
    
    const runeName = document.createElement('h3');
    runeName.textContent = `${rune.name}${reversed ? ' (Reversed)' : ''}`;
    
    const keywords = document.createElement('div');
    keywords.className = 'rune-keywords';
    const relevantKeywords = reversed ? rune.reversed.keywords : rune.upright.keywords;
    keywords.textContent = relevantKeywords.join(' • ');
    
    const meaning = document.createElement('p');
    meaning.className = 'rune-meaning';
    meaning.textContent = reversed ? rune.reversed.meaning : rune.upright.meaning;
    
    // Expandable details
    const details = document.createElement('div');
    details.className = 'rune-details';
    
    const interpretation = document.createElement('div');
    interpretation.className = 'interpretation-section';
    interpretation.innerHTML = `
        <h4>Interpretation</h4>
        <p>${reversed ? rune.reversed.interpretation : rune.upright.interpretation}</p>
    `;
    
    const advice = document.createElement('div');
    advice.className = 'advice-section';
    advice.innerHTML = `
        <h4>Guidance</h4>
        <p>${reversed ? rune.reversed.advice : rune.upright.advice}</p>
    `;
    
    const correspondences = document.createElement('div');
    correspondences.className = 'correspondences-section';
    correspondences.innerHTML = `
        <h4>Correspondences</h4>
        <p><strong>Aett:</strong> ${rune.aett} | <strong>Element:</strong> ${rune.element}</p>
        <p><strong>Deity:</strong> ${rune.correspondences.deity} | <strong>Tarot:</strong> ${rune.correspondences.tarot}</p>
    `;
    
    details.appendChild(interpretation);
    details.appendChild(advice);
    details.appendChild(correspondences);
    
    const expandLabel = document.createElement('div');
    expandLabel.className = 'expand-label';
    expandLabel.textContent = 'Click for full interpretation';
    
    card.appendChild(positionLabel);
    card.appendChild(symbol);
    card.appendChild(runeName);
    card.appendChild(keywords);
    card.appendChild(meaning);
    card.appendChild(expandLabel);
    card.appendChild(details);
    
    // Click to expand
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        expandLabel.textContent = card.classList.contains('expanded') 
            ? 'Click to collapse' 
            : 'Click for full interpretation';
    });
    
    return card;
}

// ========================================
// BIND RUNE CREATOR
// ========================================

function drawBindRune() {
    if (!bindCtx || selectedRunesForBind.length < 2) {
        alert('Please select at least 2 runes to create a bind rune.');
        return;
    }
    
    // Clear and reinitialize with guide line
    clearCanvas(bindCanvas, bindCtx);
    if (bindCanvas) {
        // Redraw center guide line
        bindCtx.strokeStyle = '#e0e0e0';
        bindCtx.lineWidth = 1;
        bindCtx.setLineDash([5, 5]);
        bindCtx.beginPath();
        bindCtx.moveTo(bindCanvas.width / 2, 0);
        bindCtx.lineTo(bindCanvas.width / 2, bindCanvas.height);
        bindCtx.stroke();
        bindCtx.moveTo(0, bindCanvas.height / 2);
        bindCtx.lineTo(bindCanvas.width, bindCanvas.height / 2);
        bindCtx.stroke();
        bindCtx.setLineDash([]);
    }
    
    const centerX = bindCanvas.width / 2;
    const centerY = bindCanvas.height / 2;
    const runeSize = 200;
    
    bindCtx.strokeStyle = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary').trim() || '#8b5cf6';
    bindCtx.lineWidth = 8;
    bindCtx.lineCap = 'round';
    bindCtx.lineJoin = 'round';
    
    bindCtx.font = `${runeSize}px 'Noto Sans Runic', serif`;
    bindCtx.textAlign = 'center';
    bindCtx.textBaseline = 'middle';
    
    selectedRunesForBind.forEach((rune, index) => {
        const angle = (index / selectedRunesForBind.length) * Math.PI * 2;
        const offsetX = Math.cos(angle) * 30;
        const offsetY = Math.sin(angle) * 30;
        
        bindCtx.globalAlpha = 0.7;
        bindCtx.fillStyle = bindCtx.strokeStyle;
        bindCtx.fillText(rune.symbol, centerX + offsetX, centerY + offsetY);
    });
    
    bindCtx.globalAlpha = 1;
}

// ========================================
// EVENT LISTENERS
// ========================================

if (castButton) {
    castButton.addEventListener('click', () => {
        const spreadKey = spreadSelector.value;
        const spread = SPREADS[spreadKey];
        currentCast = castRunes(spread.positions);
        displaySpread(spreadKey, currentCast);
    });
}

if (combineButton) {
    combineButton.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.bind-rune-checkbox:checked');
        selectedRunesForBind = Array.from(checkboxes).map(cb => {
            return ELDER_FUTHARK.find(r => r.name === cb.value);
        });
        drawBindRune();
    });
}

if (downloadBindButton) {
    downloadBindButton.addEventListener('click', () => exportCanvasPNG(bindCanvas, 'bind-rune.png'));
}

if (clearBindButton) {
    clearBindButton.addEventListener('click', () => {
        if (bindCanvas && bindCtx) {
            clearCanvas(bindCanvas, bindCtx);
            // Redraw guide lines
            bindCtx.strokeStyle = '#e0e0e0';
            bindCtx.lineWidth = 1;
            bindCtx.setLineDash([5, 5]);
            bindCtx.beginPath();
            bindCtx.moveTo(bindCanvas.width / 2, 0);
            bindCtx.lineTo(bindCanvas.width / 2, bindCanvas.height);
            bindCtx.stroke();
            bindCtx.moveTo(0, bindCanvas.height / 2);
            bindCtx.lineTo(bindCanvas.width, bindCanvas.height / 2);
            bindCtx.stroke();
            bindCtx.setLineDash([]);
        }
        document.querySelectorAll('.bind-rune-checkbox').forEach(cb => cb.checked = false);
        selectedRunesForBind = [];
    });
}
