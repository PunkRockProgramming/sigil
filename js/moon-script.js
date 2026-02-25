// DOM Elements
const moonCanvas = document.getElementById('moon-canvas');
const ctx = moonCanvas.getContext('2d');
const phaseName = document.getElementById('phase-name');
const currentDateEl = document.getElementById('current-date');
const illuminationEl = document.getElementById('illumination');
const moonAgeEl = document.getElementById('moon-age');
const energyDesc = document.getElementById('energy-desc');
const magickDesc = document.getElementById('magick-desc');
const bestForDesc = document.getElementById('best-for-desc');
const avoidDesc = document.getElementById('avoid-desc');
const ritualSuggestions = document.getElementById('ritual-suggestions');
const moonCalendar = document.getElementById('moon-calendar');
const calendarMonth = document.getElementById('calendar-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

// State
let currentCalendarDate = new Date();

// Moon Phase Calculations
function getMoonPhase(date) {
    // Use more accurate algorithm
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Julian Day calculation
    let y = year;
    let m = month;
    if (m <= 2) {
        y -= 1;
        m += 12;
    }
    
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
    
    // Days since known new moon epoch (Jan 6, 2000 18:14 UTC)
    const daysSinceNew = jd - 2451550.1;
    
    // Synodic month (average lunar cycle)
    const synodicMonth = 29.53058867;
    
    // Current phase of the moon
    const newMoons = daysSinceNew / synodicMonth;
    const phase = (newMoons - Math.floor(newMoons)) * synodicMonth;
    
    // Calculate illumination (0 to 1)
    const illumination = (1 - Math.cos((phase / synodicMonth) * 2 * Math.PI)) / 2;
    
    return {
        age: phase,
        illumination: illumination,
        phaseName: getPhaseName(phase),
        phaseEmoji: getPhaseEmoji(phase)
    };
}

function getPhaseName(age) {
    if (age < 1.84566) return 'New Moon';
    else if (age < 5.53699) return 'Waxing Crescent';
    else if (age < 9.22831) return 'First Quarter';
    else if (age < 12.91963) return 'Waxing Gibbous';
    else if (age < 16.61096) return 'Full Moon';
    else if (age < 20.30228) return 'Waning Gibbous';
    else if (age < 23.99361) return 'Last Quarter';
    else if (age < 27.68493) return 'Waning Crescent';
    else return 'New Moon';
}

function getPhaseEmoji(age) {
    if (age < 1.84566) return '🌑';
    else if (age < 5.53699) return '🌒';
    else if (age < 9.22831) return '🌓';
    else if (age < 12.91963) return '🌔';
    else if (age < 16.61096) return '🌕';
    else if (age < 20.30228) return '🌖';
    else if (age < 23.99361) return '🌗';
    else if (age < 27.68493) return '🌘';
    else return '🌑';
}

// Draw Moon on Canvas
function drawMoon(illumination, age) {
    const centerX = moonCanvas.width / 2;
    const centerY = moonCanvas.height / 2;
    const radius = 120;
    
    ctx.clearRect(0, 0, moonCanvas.width, moonCanvas.height);
    
    // Determine if waxing or waning
    const isWaxing = age < 14.765;
    
    // Draw full moon circle
    ctx.fillStyle = '#f0f0f0';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw shadow for phase
    ctx.fillStyle = '#1a1a2e';
    ctx.beginPath();
    
    if (illumination < 0.5) {
        // New moon to first quarter or last quarter to new moon
        const shadowWidth = radius * 2 * (1 - illumination * 2);
        const curveDirection = isWaxing ? -1 : 1;
        
        ctx.arc(centerX, centerY, radius, Math.PI / 2, Math.PI * 1.5);
        ctx.quadraticCurveTo(
            centerX + curveDirection * shadowWidth / 2, centerY,
            centerX, centerY + radius
        );
    } else {
        // First quarter to full or full to last quarter
        const lightWidth = radius * 2 * (illumination * 2 - 1);
        const curveDirection = isWaxing ? 1 : -1;
        
        if (isWaxing) {
            ctx.arc(centerX, centerY, radius, Math.PI * 1.5, Math.PI / 2);
            ctx.quadraticCurveTo(
                centerX - lightWidth / 2, centerY,
                centerX, centerY - radius
            );
        } else {
            ctx.arc(centerX, centerY, radius, Math.PI / 2, Math.PI * 1.5);
            ctx.quadraticCurveTo(
                centerX + lightWidth / 2, centerY,
                centerX, centerY + radius
            );
        }
    }
    
    ctx.fill();
    
    // Add crater details
    ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
    const craters = [
        {x: 0.3, y: -0.2, r: 0.15},
        {x: -0.4, y: 0.1, r: 0.12},
        {x: 0.1, y: 0.4, r: 0.1},
        {x: -0.2, y: -0.3, r: 0.08},
        {x: 0.4, y: 0.3, r: 0.09}
    ];
    
    craters.forEach(crater => {
        ctx.beginPath();
        ctx.arc(
            centerX + crater.x * radius,
            centerY + crater.y * radius,
            crater.r * radius,
            0,
            Math.PI * 2
        );
        ctx.fill();
    });
}

// Moon Phase Correspondences
const phaseCorrespondences = {
    'New Moon': {
        energy: 'New beginnings, fresh starts, planting seeds of intention',
        magick: 'Setting intentions, new projects, personal growth, attraction',
        bestFor: 'Starting new ventures, job hunting, self-improvement, beauty rituals',
        avoid: 'Completion work, banishing (use Dark Moon instead)',
        rituals: [
            {
                title: 'New Moon Intention Setting',
                category: 'Manifestation',
                difficulty: 'Beginner',
                time: '15-20 minutes',
                description: 'A powerful ritual to set clear intentions for the lunar cycle ahead.',
                tools: ['White candle', 'Paper and pen', 'Clear quartz crystal', 'Matches'],
                steps: [
                    'Create sacred space by cleansing the area with sage or opening a window',
                    'Light your white candle and place the clear quartz nearby',
                    'Take 3 deep breaths to center yourself',
                    'Write down 3-5 specific intentions for this lunar cycle',
                    'Read each intention aloud to the universe with conviction',
                    'Hold the quartz and visualize your intentions manifesting',
                    'Place the paper under the crystal on your altar for the full cycle',
                    'Express gratitude and extinguish the candle'
                ],
                safety: 'Never leave candles unattended. Use a fireproof surface.'
            },
            {
                title: 'Fresh Start Ritual Bath',
                category: 'Cleansing',
                difficulty: 'Beginner',
                time: '30-40 minutes',
                description: 'Wash away the old and prepare for new beginnings.',
                tools: ['Sea salt', 'Fresh herbs (rosemary, mint, lavender)', 'White candle', 'Bath'],
                steps: [
                    'Draw a warm bath and light your white candle',
                    'Add 1 cup of sea salt to the water',
                    'Add fresh herbs - rosemary for cleansing, mint for new beginnings, lavender for peace',
                    'Before entering, state: "I release what no longer serves and welcome new blessings"',
                    'Soak for at least 20 minutes, visualizing old energy washing away',
                    'When ready to drain, imagine all negativity flowing away',
                    'Air dry if possible to keep the energy close',
                    'Thank the water and herbs for their cleansing'
                ],
                safety: 'Check for herb allergies. Ensure bath isn\'t too hot.'
            },
            {
                title: 'Vision Board Creation',
                category: 'Manifestation',
                difficulty: 'Beginner',
                time: '1-2 hours',
                description: 'Create a visual representation of your goals and charge it with new moon energy.',
                tools: ['Images from magazines or printouts', 'Poster board or canvas', 'Glue', 'Scissors', 'Markers', 'Clear quartz'],
                steps: [
                    'Gather magazines or print images that resonate with your intentions',
                    'Create a calm, inspiring workspace',
                    'Set an intention: "I create my reality"',
                    'Cut out images, words, and phrases that represent your goals',
                    'Arrange them on your board in a way that feels right',
                    'Glue everything down and add personal touches with markers',
                    'Hold your hands over the board and visualize your goals manifesting',
                    'Place clear quartz on the board overnight to charge it',
                    'Hang in a place you\'ll see daily'
                ],
                safety: null
            },
            {
                title: 'New Beginnings Candle Spell',
                category: 'Prosperity',
                difficulty: 'Intermediate',
                time: '20-30 minutes',
                description: 'Charge a candle to burn throughout the lunar cycle for manifestation.',
                tools: ['White or gold candle', 'Carving tool', 'Anointing oil (olive oil works)', 'Cinnamon', 'Matches'],
                steps: [
                    'Cleanse your candle by passing it through incense smoke or visualizing white light',
                    'Carve symbols or words into the candle representing your intention',
                    'Anoint the candle with oil from bottom to top (drawing energy in)',
                    'Roll the candle in cinnamon for prosperity and success',
                    'Hold the candle and speak your intention 3 times',
                    'Light the candle and say: "As this flame burns bright, my intention takes flight"',
                    'Let it burn for at least 15 minutes while visualizing your goal',
                    'Extinguish and relight each day during the waxing moon',
                    'Let it burn completely on the full moon'
                ],
                safety: 'Never leave burning candles unattended. Keep away from flammable materials.'
            }
        ]
    },
    'Waxing Crescent': {
        energy: 'Growth, expansion, building momentum, determination',
        magick: 'Attraction spells, growth work, courage, motivation',
        bestFor: 'Building on new moon intentions, increasing anything, constructive magick',
        avoid: 'Banishing, releasing, letting go',
        rituals: [
            {
                title: 'Growth Candle Spell',
                category: 'Prosperity',
                difficulty: 'Beginner',
                time: '10 minutes daily',
                description: 'Daily ritual to amplify growth energy as the moon expands.',
                tools: ['Green candle', 'Carving tool', 'Basil or mint', 'Olive oil'],
                steps: [
                    'Carve your specific goal into the green candle',
                    'Anoint with olive oil mixed with crushed basil or mint',
                    'Light the candle each evening during the waxing crescent',
                    'Visualize your goal growing with the moon',
                    'Speak: "As the moon grows, so does [your intention]"',
                    'Let burn for 5-10 minutes while maintaining focus',
                    'Extinguish and repeat nightly',
                    'On the first quarter moon, let it burn completely'
                ],
                safety: 'Never leave candles unattended.'
            },
            {
                title: 'Prosperity Jar Spell',
                category: 'Prosperity',
                difficulty: 'Beginner',
                time: '30 minutes setup, 2 minutes daily',
                description: 'Create a magickal jar that builds prosperity energy throughout the waxing phase.',
                tools: ['Glass jar with lid', 'Coins', 'Cinnamon', 'Basil', 'Bay leaf', 'Green ribbon', 'Paper', 'Pen'],
                steps: [
                    'Write your prosperity intention on paper',
                    'Fold the paper toward you 3 times',
                    'Place in the jar along with coins',
                    'Add cinnamon for quick money and basil for abundance',
                    'Add a bay leaf with a specific dollar amount written on it',
                    'Seal the jar and tie with green ribbon',
                    'Hold and declare: "Abundance flows to me easily and frequently"',
                    'Shake the jar 3 times daily while visualizing wealth',
                    'Continue through the waxing phases',
                    'Bury the herbs at the full moon as an offering'
                ],
                safety: null
            },
            {
                title: 'Courage Building Ritual',
                category: 'Personal Growth',
                difficulty: 'Intermediate',
                time: '20-25 minutes',
                description: 'Draw upon growing lunar energy to build confidence and courage.',
                tools: ['Orange or red candle', 'Tiger eye or carnelian', 'Paper', 'Pen'],
                steps: [
                    'List 3 fears or areas where you need courage',
                    'Light your orange or red candle',
                    'Hold the crystal in your dominant hand',
                    'For each fear, say: "I am stronger than this. I am courageous."',
                    'Visualize yourself acting with confidence in that situation',
                    'Feel the crystal absorbing moon energy and building your courage',
                    'Carry the crystal with you for the next 7 days',
                    'Recharge it under each waxing moon'
                ],
                safety:  null
            },
            {
                title: 'Friendship Drawing Spell',
                category: 'Love & Connection',
                difficulty: 'Beginner',
                time: '15 minutes',
                description: 'Attract new friendships or strengthen existing bonds.',
                tools: ['Pink candle', 'Rose quartz', 'Honey', 'Paper', 'Pen'],
                steps: [
                    'Write qualities you seek in friendships',
                    'Light the pink candle',
                    'Dab a tiny bit of honey on the paper corners',
                    'Hold rose quartz and say: "Like attracts like, friends come to me"',
                    'Visualize yourself surrounded by loving, supportive friends',
                    'Sleep with the rose quartz under your pillow',
                    'Carry it with you when socializing',
                    'Burn the paper at the full moon in gratitude'
                ],
                safety: 'Keep honey away from flame.'
            }
        ]
    },
    'First Quarter': {
        energy: 'Action, decision-making, overcoming obstacles, commitment',
        magick: 'Breaking through barriers, making tough choices, courage spells',
        bestFor: 'Taking action on goals, making commitments, pushing through resistance',
        avoid: 'Indecision, passivity, waiting',
        rituals: [
            {
                title: 'Obstacle Removal Spell',
                category: 'Protection',
                difficulty: 'Intermediate',
                time: '20 minutes',
                description: 'Break through barriers blocking your path forward.',
                tools: ['Black candle', 'White candle', 'Paper', 'Pen', 'Fireproof bowl', 'Matches'],
                steps: [
                    'Light the white candle (your goal) first',
                    'Write each obstacle on separate paper strips',
                    'Light the black candle (banishing energy)',
                    'For each obstacle, declare: "This no longer has power over me"',
                    'Burn the paper in the fireproof bowl',
                    'Watch it burn and visualize the obstacle dissolving',
                    'When finished, say: "The path is clear, success is near"',
                    'Let both candles burn for 15 minutes',
                    'Dispose of ashes away from your home (bury or running water)'
                ],
                safety: 'Burn paper in well-ventilated area. Have water nearby. Never leave flames unattended.'
            },
            {
                title: 'Decision Clarity Ritual',
                category: 'Divination',
                difficulty: 'Beginner',
                time: '30 minutes',
                description: 'Gain clear insight into difficult decisions using moon energy.',
                tools: ['Clear quartz', 'Two white candles', 'Two pieces of paper', 'Pen'],
                steps: [
                    'Write each option on separate papers',
                    'Place them on opposite sides of your workspace',
                    'Put a white candle on each paper',
                    'Sit with your back straight, holding clear quartz',
                    'Take 10 deep breaths to center yourself',
                    'Light the left candle, meditate on option 1 for 5 minutes',
                    'Pay attention to feelings, images, or sensations',
                    'Light the right candle, meditate on option 2 for 5 minutes',
                    'Hold the quartz between both candles',
                    'Ask: "What is for my highest good?" and listen',
                    'Trust your intuition - the right answer will feel lighter'
                ],
                safety: null
            },
            {
                title: 'Commitment Spell',
                category: 'Personal Growth',
                difficulty: 'Intermediate',
                time: '25 minutes',
                description: 'Seal your dedication to a goal or promise.',
                tools: ['Red candle', 'Hematite stone', 'Red thread', 'Paper', 'Pen'],
                steps: [
                    'Write your commitment as a contract with yourself',
                    'Light the red candle (willpower and commitment)',
                    'Read your commitment aloud 3 times',
                    'Tie the red thread around your finger',
                    'Hold the hematite and say: "My word is my bond"',
                    'Visualize yourself successfully following through',
                    'Sign and date the commitment paper',
                    'Keep the paper where you will see it daily',
                    'Wear the tied thread until it falls off naturally',
                    'Carry hematite to strengthen your resolve'
                ],
                safety: 'Ensure thread is not too tight on finger.'
            },
            {
                title: 'Breaking Through Barriers Meditation',
                category: 'Personal Growth',
                difficulty: 'Beginner',
                time: '15-20 minutes',
                description: 'Energetic work to push through mental or emotional blocks.',
                tools: ['Red or orange candle', 'Comfortable seat', 'Optional: drumming music'],
                steps: [
                    'Light your candle and sit comfortably',
                    'Close your eyes and take deep breaths',
                    'Visualize a wall representing your obstacle',
                    'With each exhale, see yourself pushing against it',
                    'Feel the first quarter moon energy building your strength',
                    'See cracks forming in the wall with each push',
                    'Give one final push and watch the wall crumble',
                    'Step through the rubble into your desired future',
                    'Open your eyes and take action within 24 hours'
                ],
                safety: null
            }
        ]
    },
    'Waxing Gibbous': {
        energy: 'Refinement, adjustment, perfecting, honing your craft',
        magick: 'Fine-tuning spells, increasing power, final preparations',
        bestFor: 'Perfecting details, building energy before manifestation, patience work',
        avoid: 'Starting completely new things, rushing',
        rituals: [
            {
                title: 'Power Building Meditation',
                category: 'Personal Growth',
                difficulty: 'Intermediate',
                time: '20-30 minutes daily',
                description: 'Multi-day practice to build and refine your manifestation energy as the moon approaches fullness.',
                tools: ['Purple or gold candle', 'Amethyst or citrine', 'Incense (frankincense or sandalwood)', 'Your manifestation symbol'],
                steps: [
                    'Each evening, light your candle and incense in a quiet space',
                    'Hold your crystal and close your eyes',
                    'Visualize your goal as 90% complete, nearly manifested',
                    'Notice specific details: colors, textures, emotions',
                    'Feel the anticipation and excitement of imminent success',
                    'Imagine making small refinements and adjustments',
                    'Breathe into the feeling of "almost there"',
                    'Thank the universe for bringing it to fruition',
                    'Let the candle burn for at least 15 minutes',
                    'Repeat nightly until the full moon'
                ],
                safety: null
            },
            {
                title: 'Ritual Tool Charging',
                category: 'Manifestation',
                difficulty: 'Beginner',
                time: '30 minutes plus overnight',
                description: 'Cleanse and supercharge your magickal tools under the powerful waxing gibbous moonlight.',
                tools: ['Your ritual tools (athame, wand, crystals, tarot deck, etc.)', 'Bowl of salt water', 'White cloth', 'Moonlight access'],
                steps: [
                    'Gather all tools that need cleansing and charging',
                    'Wipe each tool with salt water while stating: "I cleanse you of all previous energy"',
                    'Dry each tool with the white cloth',
                    'Lay tools on the cloth in moonlight (windowsill or outdoors)',
                    'Hold hands over tools and say: "By the waxing gibbous moon, I charge you with power"',
                    'Visualize silvery moonlight pouring into each tool',
                    'Leave tools in moonlight overnight',
                    'Retrieve before sunrise',
                    'Store tools wrapped in the white cloth until use'
                ],
                safety: 'Some stones (like amethyst) may fade in direct sunlight. Retrieve before dawn.'
            },
            {
                title: 'Spell Refinement Work',
                category: 'Manifestation',
                difficulty: 'Intermediate',
                time: '45 minutes',
                description: 'Review and perfect spells cast during the waxing moon, adding final touches for maximum power.',
                tools: ['Your spell notes or materials', 'Silver or purple candle', 'Bay leaf', 'Pen'],
                steps: [
                    'Light your candle and review the spell you cast earlier this cycle',
                    'Ask yourself: "What details can I perfect?"',
                    'Make small adjustments to correspondences, words, or timing',
                    'Rewrite the spell with improvements on a bay leaf',
                    'Hold the bay leaf over the candle flame (or place beside it)',
                    'Speak the refined spell aloud with conviction',
                    'Visualize your spell growing 50% more powerful',
                    'See every detail clicking perfectly into place',
                    'Burn the bay leaf safely in the candle flame',
                    'Trust that your refinements seal the spell\'s success'
                ],
                safety: 'Use caution when burning bay leaf. Have water nearby.'
            },
            {
                title: 'Patience Cultivation Ritual',
                category: 'Personal Growth',
                difficulty: 'Beginner',
                time: '15 minutes',
                description: 'Work with the waxing gibbous energy to develop patience as manifestation approaches.',
                tools: ['Blue candle', 'Lavender (dried or essential oil)', 'Journal'],
                steps: [
                    'Light the blue candle and add lavender nearby',
                    'Take three deep, slow breaths',
                    'Reflect: "What am I rushing or forcing?"',
                    'Write down areas where you feel impatient',
                    'For each one, write: "I trust in divine timing"',
                    'Close your eyes and imagine a flower slowly opening',
                    'Know that your desires are unfolding at the perfect pace',
                    'Say: "I honor the process of becoming"',
                    'Sit peacefully until the candle burns down',
                    'Carry lavender with you as a patience reminder'
                ],
                safety: null
            }
        ]
    },
    'Full Moon': {
        energy: 'Peak power, completion, abundance, celebration, psychic abilities',
        magick: 'All magick amplified, divination, charging tools, manifestation',
        bestFor: 'Any magickal work, charging crystals/tools, divination, healing',
        avoid: 'Nothing - the full moon empowers all intentions',
        rituals: [
            {
                title: 'Full Moon Water',
                category: 'Cleansing',
                difficulty: 'Beginner',
                time: '5 minutes prep, overnight charge',
                description: 'Create sacred moon water infused with peak lunar energy for all your magickal needs.',
                tools: ['Clear glass jar or bowl', 'Fresh spring or filtered water', 'Optional: clear quartz crystal'],
                steps: [
                    'Fill your glass container with fresh water',
                    'If using a crystal, place it in the water',
                    'Hold the container in your hands',
                    'Say: "Water, receive the full moon\'s blessing"',
                    'Place the container where moonlight will directly touch it',
                    'Leave outside or on a windowsill overnight',
                    'Retrieve before sunrise (sunlight changes the energy)',
                    'Store in a dark bottle or cupboard',
                    'Use for cleansing, ritual baths, watering plants, drinking (if purified), anointing candles'
                ],
                safety: 'Only drink moon water if the water source is safe for consumption.'
            },
            {
                title: 'Gratitude Ceremony',
                category: 'Personal Growth',
                difficulty: 'Beginner',
                time: '20 minutes',
                description: 'Honor and celebrate all you have manifested this lunar cycle with a gratitude offering.',
                tools: ['Silver or white candle', 'Paper and pen', 'Fireproof bowl or cauldron', 'Optional: offering (flowers, honey, crystals)'],
                steps: [
                    'Light your candle under or facing the full moon',
                    'Take several deep breaths and center yourself',
                    'Write a list of everything you\'re grateful for from this lunar cycle',
                    'Include manifestations, lessons, challenges overcome, and blessings',
                    'Read your list aloud, feeling genuine appreciation',
                    'Thank each element: "I give thanks for [specific item]"',
                    'Carefully burn the list in your fireproof bowl',
                    'As it burns, visualize gratitude ascending to the universe',
                    'If you have an offering, place it on your altar or outside',
                    'Sit in appreciation until the candle burns down'
                ],
                safety: 'Burn paper safely. Never leave flames unattended.'
            },
            {
                title: 'Full Moon Divination',
                category: 'Divination',
                difficulty: 'Intermediate',
                time: '30-60 minutes',
                description: 'The veil between worlds is thinnest during the full moon. Seek guidance and clarity.',
                tools: ['Divination tool (tarot, oracle cards, runes, pendulum, or scrying mirror)', 'White or silver candle', 'Moonstone or labradorite', 'Quiet sacred space'],
                steps: [
                    'Cleanse your divination tool with sage or moonlight',
                    'Light your candle and hold your crystal',
                    'Ground and center with deep breathing',
                    'Set clear intention: "I seek [type of guidance]"',
                    'Open sacred space by calling in protection',
                    'Perform your divination with heightened awareness',
                    'Pay attention to intuitive hits and symbols',
                    'Record all messages, even if they don\'t make sense yet',
                    'Thank your guides and close sacred space',
                    'Journal about insights and how to apply them'
                ],
                safety: null
            },
            {
                title: 'Crystal Charging Ritual',
                category: 'Manifestation',
                difficulty: 'Beginner',
                time: '10 minutes plus overnight',
                description: 'Charge all your crystals with potent full moon energy to amplify their properties.',
                tools: ['All your crystals', 'Bowl of salt water', 'White cloth or tray'],
                steps: [
                    'Gather all crystals that need charging',
                    'Cleanse each by passing through sage smoke or using salt water',
                    'Pat dry and arrange on white cloth',
                    'Place cloth where moonlight will directly touch crystals',
                    'Hold hands over crystals and visualize moonlight pouring into them',
                    'Say: "Stones of the earth, receive the moon\'s full power"',
                    'State specific intentions for each crystal type',
                    'Leave overnight in direct moonlight',
                    'Retrieve at sunrise and store appropriately'
                ],
                safety: 'Avoid direct sunlight for crystals that fade (amethyst, rose quartz, fluorite, etc.).'
            },
            {
                title: 'Abundance Manifestation Circle',
                category: 'Prosperity',
                difficulty: 'Intermediate',
                time: '45 minutes',
                description: 'Create a powerful abundance ritual using the full moon\'s peak manifestation energy.',
                tools: ['Green or gold candle', 'Coins or bills', 'Cinnamon', 'Bay leaves', 'Green aventurine or citrine', 'Small bowl'],
                steps: [
                    'Create a circle with your coins or bills on your altar',
                    'Place the candle in the center of the circle',
                    'Position your crystal(s) around the candle',
                    'Sprinkle cinnamon around the circle (prosperity)',
                    'Write abundance intentions on bay leaves',
                    'Light the candle and place bay leaves in the bowl',
                    'Say: "Under this full moon, abundance flows to me effortlessly"',
                    'Visualize money, opportunities, and resources coming to you',
                    'Feel the emotion of having more than enough',
                    'Let candle burn completely while focusing on abundance',
                    'Carry a charged coin and crystal with you',
                    'Place bay leaves in your wallet or cash box'
                ],
                safety: null
            }
        ]
    },
    'Waning Gibbous': {
        energy: 'Gratitude, sharing wisdom, teaching, giving back',
        magick: 'Banishing what no longer serves, undoing spells, cleansing',
        bestFor: 'Sharing knowledge, helping others, beginning release work',
        avoid: 'Attracting new things, starting projects',
        rituals: [
            {
                title: 'Wisdom Sharing Journal',
                category: 'Personal Growth',
                difficulty: 'Beginner',
                time: '30 minutes',
                description: 'Reflect on and record the wisdom gained during this lunar cycle to share with others.',
                tools: ['Journal or grimoire', 'Blue candle', 'Herbal tea (chamomile or peppermint)', 'Lapis lazuli or sodalite'],
                steps: [
                    'Brew your tea and light the blue candle',
                    'Hold your crystal and take a moment to reflect',
                    'Ask: "What did this lunar cycle teach me?"',
                    'Write down all lessons, both joyful and challenging',
                    'Note patterns you noticed in yourself or others',
                    'Record any insights about your practice or path',
                    'Write how you can share this wisdom with your community',
                    'Consider: teaching, mentoring, or simply being an example',
                    'Thank yourself for being open to growth',
                    'Commit to sharing at least one lesson this week'
                ],
                safety: null
            },
            {
                title: 'Gentle Release Bath',
                category: 'Cleansing',
                difficulty: 'Beginner',
                time: '30-45 minutes',
                description: 'Begin the releasing process with a cleansing bath that washes away stress and what no longer serves.',
                tools: ['Sea salt or Epsom salt', 'Lavender (dried or essential oil)', 'Black or white candle', 'Optional: rose petals, rosemary'],
                steps: [
                    'Clean your bathtub to create sacred space',
                    'Light your candle in the bathroom',
                    'Run warm (not too hot) bath water',
                    'Add 1-2 cups of salt while saying: "I release all that weighs me down"',
                    'Add lavender and any other herbs',
                    'Step into the bath mindfully',
                    'Visualize stress, negativity, and burdens as dark energy',
                    'See this energy leaving your body and dissolving in the water',
                    'Soak for at least 20 minutes, breathing deeply',
                    'When you drain the tub, know all negativity goes with it',
                    'Thank the water and the moon for cleansing'
                ],
                safety: 'Test essential oils on skin first. Avoid if pregnant or have skin conditions without researching safety.'
            },
            {
                title: 'Gratitude Altar',
                category: 'Personal Growth',
                difficulty: 'Beginner',
                time: '20 minutes',
                description: 'Create a temporary altar celebrating what manifested during the waxing moon.',
                tools: ['Small table or space', 'White or gold cloth', 'Candle', 'Photos or symbols of manifestations', 'Flowers or offerings'],
                steps: [
                    'Clear a space and lay down your cloth',
                    'Place your candle in the center',
                    'Arrange items representing what you manifested this cycle',
                    'Add photos, symbols, or written notes of achievements',
                    'Include flowers, crystals, or offerings',
                    'Light the candle',
                    'Speak aloud all you\'re grateful for',
                    'Sit before your altar for a few minutes in appreciation',
                    'Leave the altar up for 2-3 days',
                    'When you dismantle it, thank each item before putting it away'
                ],
                safety: null
            },
            {
                title: 'Teaching and Mentoring Spell',
                category: 'Love & Connection',
                difficulty: 'Intermediate',
                time: '30 minutes',
                description: 'Cast a spell to attract opportunities to share your knowledge and mentor others.',
                tools: ['Yellow or orange candle', 'Paper and pen', 'Rosemary (wisdom)', 'Clear quartz', 'Small pouch'],
                steps: [
                    'Light your candle and center yourself',
                    'Write what knowledge and skills you have to share',
                    'List the type of people you wish to teach or mentor',
                    'Hold the rosemary and say: "My wisdom is needed"',
                    'Hold the crystal and say: "I attract those ready to learn"',
                    'Fold the paper and place in the pouch with rosemary',
                    'Add the crystal to the pouch',
                    'Hold pouch over the candle (not in flame) to charge it',
                    'Say: "Opportunities to teach come easily to me"',
                    'Carry the pouch until teaching opportunities appear',
                    'When they do, give thanks and bury the herbs in gratitude'
                ],
                safety: 'Keep pouch away from open flame.'
            }
        ]
    },
    'Last Quarter': {
        energy: 'Release, forgiveness, breaking bad habits, letting go',
        magick: 'Banishing, breaking hexes, releasing attachments, forgiveness',
        bestFor: 'Ending toxic situations, breaking addictions, cord cutting',
        avoid: 'Attraction work, beginning new things',
        rituals: [
            {
                title: 'Cord Cutting Ritual',
                category: 'Protection',
                difficulty: 'Intermediate',
                time: '30-40 minutes',
                description: 'Sever energetic attachments to people, situations, or habits that drain your energy.',
                tools: ['Two candles (white or black)', 'String or yarn (12-18 inches)', 'Scissors', 'Sage or cleansing herb', 'Black tourmaline'],
                steps: [
                    'Cleanse your space with sage',
                    'Place two candles about 12 inches apart',
                    'Tie the string between them, connecting the candles',
                    'Light both candles',
                    'One candle represents you, the other represents what you\'re releasing',
                    'Visualize energetic cords connecting you to this person/situation',
                    'Feel the drain of energy through these cords',
                    'Hold scissors and say: "I release all that no longer serves me"',
                    'Cut the string with conviction',
                    'Visualize all cords dissolving',
                    'Move your candle away from the other one',
                    'Let your candle burn completely, let the other one extinguish naturally',
                    'Carry black tourmaline to prevent reattachment'
                ],
                safety: 'Never leave burning candles unattended. Have water nearby.'
            },
            {
                title: 'Bad Habit Banishing',
                category: 'Protection',
                difficulty: 'Intermediate',
                time: '25 minutes',
                description: 'Bind and banish unwanted habits or addictions by returning them to the earth.',
                tools: ['Paper and black pen', 'Black thread or ribbon', 'Small shovel or spoon', 'Black candle', 'Graveyard dirt or soil'],
                steps: [
                    'Light the black candle',
                    'Write the habit you\'re banishing in detail on paper',
                    'Don\'t hold back - include why it hurts you',
                    'Fold the paper away from you multiple times',
                    'Wrap it tightly with black thread while saying: "I bind you"',
                    'Wrap until you cannot unwrap it easily',
                    'Take the bound paper outside',
                    'Dig a small hole in the earth',
                    'Place the paper in the hole and cover with dirt',
                    'Say: "Earth, take this from me. It no longer controls me"',
                    'Walk away without looking back',
                    'Do not dig it up - let the earth transform it'
                ],
                safety: 'Choose a place where you can bury it undisturbed. Respect property boundaries.'
            },
            {
                title: 'Forgiveness Release Ceremony',
                category: 'Healing',
                difficulty: 'Beginner',
                time: '20-30 minutes',
                description: 'Let go of grudges and resentment through forgiveness - freeing yourself, not condoning harm.',
                tools: ['Pink or white candle', 'Paper and pen', 'Fireproof bowl', 'Rose quartz', 'Optional: rose petals'],
                steps: [
                    'Light your candle and hold the rose quartz',
                    'Take deep breaths and center your heart',
                    'Write a letter to someone you need to forgive (including yourself)',
                    'Express your hurt, anger, and pain honestly',
                    'Then write: "I release you. I forgive you. I am free."',
                    'Understand that forgiveness frees YOU, not them',
                    'Read the letter aloud',
                    'Burn it safely in the bowl',
                    'As it burns, visualize releasing the weight you\'ve carried',
                    'Feel yourself becoming lighter',
                    'Keep rose quartz with you as a reminder of your freedom'
                ],
                safety: 'Forgiveness is for you, not them. You do not need to reconcile or forget. Burn safely.'
            },
            {
                title: 'Banishing Negativity Spell',
                category: 'Protection',
                difficulty: 'Advanced',
                time: '1 hour',
                description: 'Powerful banishing work to remove negative energy, entities, or hexes from your life.',
                tools: ['Black candle', 'White candle', 'Salt', 'Vinegar', 'Hot pepper or black pepper', 'Jar with lid', 'Mirror (small)', 'Protection oil'],
                steps: [
                    'Cleanse yourself and your space thoroughly',
                    'Cast a protective circle',
                    'Light the white candle (your protection)',
                    'Fill jar halfway with vinegar',
                    'Add three pinches of salt (banishing)',
                    'Add pepper (to make negativity uncomfortable)',
                    'Write what you\'re banishing on paper, fold away from you',
                    'Place paper in jar',
                    'Light black candle and say: "All negativity is banished from my life"',
                    'Drip black wax to seal the jar',
                    'Place mirror face-down on top to reflect negativity back',
                    'Bury jar far from your home or dispose in running water',
                    'Anoint yourself with protection oil',
                    'Close your circle'
                ],
                safety: 'This is advanced work. Only use if you feel truly under attack. Ground thoroughly after. Do not open jar once sealed.'
            }
        ]
    },
    'Waning Crescent': {
        energy: 'Rest, recuperation, reflection, the void, surrender',
        magick: 'Deep cleansing, rest, meditation, void work, shadow work',
        bestFor: 'Resting, reflecting on the cycle, preparing for new beginnings',
        avoid: 'High-energy work, forcing outcomes',
        rituals: [
            {
                title: 'Shadow Work Meditation',
                category: 'Personal Growth',
                difficulty: 'Advanced',
                time: '45-60 minutes',
                description: 'Deep inner work to face and integrate the shadow self revealed during this lunar cycle.',
                tools: ['Black candle', 'Journal or grimoire', 'Obsidian or black tourmaline', 'Comfortable meditation space', 'Tissues (emotional release is common)'],
                steps: [
                    'Create a safe, private space where you won\'t be disturbed',
                    'Light the black candle',
                    'Hold your black crystal for grounding',
                    'Close your eyes and take grounding breaths',
                    'Ask: "What did this cycle reveal about my shadow?"',
                    'Notice any uncomfortable emotions, patterns, or behaviors',
                    'Do not judge - simply observe with curiosity',
                    'Journal honestly about what arises: fears, shame, anger, jealousy',
                    'Ask each shadow part: "What are you trying to protect me from?"',
                    'Thank these parts for trying to keep you safe',
                    'Commit to one small integration step',
                    'Ground by touching the earth or eating something',
                    'Be gentle with yourself after this work'
                ],
                safety: 'Shadow work can bring up intense emotions. Have support available. Stop if you feel overwhelmed. Consider working with a therapist alongside spiritual practice.'
            },
            {
                title: 'Deep Cleansing Bath Ritual',
                category: 'Cleansing',
                difficulty: 'Beginner',
                time: '45 minutes',
                description: 'Final purification bath before the new moon to release everything from this entire lunar cycle.',
                tools: ['Salt (sea salt or Epsom)', 'Rosemary (cleansing)', 'Lavender (peace)', 'White candle', 'Optional: lemon slices, sage, hyssop'],
                steps: [
                    'Deep clean your bathroom to purify the space',
                    'Light white candle(s) around the bathroom',
                    'Fill the tub with comfortably warm water',
                    'Add 2-3 cups of salt',
                    'Add generous amounts of rosemary and lavender',
                    'Optional: add lemon slices for extra cleansing',
                    'Before entering, say: "I release this entire cycle - the good, the bad, all of it"',
                    'Step in and submerge yourself completely if possible',
                    'Visualize the entire lunar cycle washing away',
                    'See yourself as a blank slate, the void before creation',
                    'Soak for at least 30 minutes',
                    'When you drain the water, see all old energy leaving',
                    'Air dry or pat gently - you are now purified and ready for new beginnings'
                ],
                safety: 'Test herbs/oils for allergies first. Avoid if pregnant without research. Tub may be slippery.'
            },
            {
                title: 'Restorative Rest Ritual',
                category: 'Healing',
                difficulty: 'Beginner',
                time: '30 minutes to several hours',
                description: 'Honor the waning crescent\'s call for deep rest and recuperation.',
                tools: ['Comfortable bed or couch', 'Lavender essential oil or sachet', 'Amethyst or lepidolite', 'Soft blanket', 'Eye mask (optional)'],
                steps: [
                    'Silence your phone and create a do-not-disturb environment',
                    'Dab lavender on your pillow or temples',
                    'Place crystal under pillow or hold in hand',
                    'Lie down in a comfortable position',
                    'Cover yourself with the blanket',
                    'Take deep belly breaths',
                    'Release all obligations and to-do lists',
                    'Say: "I deserve rest. I honor the sacred pause."',
                    'Let yourself drift, nap, or simply be',
                    'Stay as long as your body needs',
                    'This is not laziness - this is essential spiritual work',
                    'Trust that rest is productive'
                ],
                safety: null
            },
            {
                title: 'Void Meditation',
                category: 'Personal Growth',
                difficulty: 'Advanced',
                time: '30-45 minutes',
                description: 'Sit with the void, the space of infinite possibility before the new moon begins again.',
                tools: ['Black candle', 'Comfortable meditation cushion', 'Obsidian sphere or egg (optional)', 'Timer'],
                steps: [
                    'Sit in complete darkness or light only a black candle',
                    'Set a timer for at least 20 minutes',
                    'Close your eyes and focus on your breath',
                    'Notice the space between thoughts',
                    'Notice the space between breaths',
                    'Notice the space between heartbeats',
                    'Sink into this emptiness - it is not nothing, it is everything',
                    'This is the void from which all creation springs',
                    'Do not try to fill it or understand it',
                    'Simply be with it',
                    'When timer sounds, slowly open your eyes',
                    'Journal any insights about emptiness and fullness',
                    'Know that from this void, a new moon will birth'
                ],
                safety: 'Void work can be disorienting. Ground thoroughly after. Do not operate machinery immediately after. Have a plan to return to normal consciousness.'
            }
        ]
    }
};

// Update Display
function updateMoonDisplay(date = new Date()) {
    const moonData = getMoonPhase(date);
    
    // Update text
    phaseName.textContent = moonData.phaseName;
    currentDateEl.textContent = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    illuminationEl.textContent = `${(moonData.illumination * 100).toFixed(1)}% Illuminated`;
    moonAgeEl.textContent = `Day ${Math.floor(moonData.age)} of Lunar Cycle`;
    
    // Draw moon
    drawMoon(moonData.illumination, moonData.age);
    
    // Update correspondences
    const corr = phaseCorrespondences[moonData.phaseName];
    energyDesc.textContent = corr.energy;
    magickDesc.textContent = corr.magick;
    bestForDesc.textContent = corr.bestFor;
    avoidDesc.textContent = corr.avoid;
    
    // Update rituals with filtering
    displayRituals(corr.rituals);
}

// Display Rituals with Filtering
let currentRituals = [];

function displayRituals(rituals) {
    currentRituals = rituals;
    filterAndDisplayRituals();
}

function filterAndDisplayRituals() {
    const categoryFilter = document.getElementById('category-filter').value;
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    
    // Use shared filter utility
    let filtered = filterItems(
        currentRituals,
        {
            category: categoryFilter,
            difficulty: difficultyFilter
        },
        {
            category: (item) => item.category,
            difficulty: (item) => item.difficulty
        }
    );
    
    ritualSuggestions.innerHTML = '';
    
    filtered.forEach((ritual, index) => {
        const card = document.createElement('div');
        card.className = 'ritual-card';
        card.dataset.index = index;
        
        const stepsHTML = ritual.steps ? `
            <h5>Steps:</h5>
            <ol>
                ${ritual.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        ` : '';
        
        const toolsHTML = ritual.tools ? `
            <h5>You'll Need:</h5>
            <ul class="tools-list">
                ${ritual.tools.map(tool => `<li>${tool}</li>`).join('')}
            </ul>
        ` : '';
        
        const safetyHTML = ritual.safety ? `
            <div class="safety-note">
                <strong>⚠️ Safety:</strong> ${ritual.safety}
            </div>
        ` : '';
        
        card.innerHTML = `
            <div class="ritual-header">
                <h4>${ritual.title}</h4>
            </div>
            <div class="ritual-meta">
                <span class="meta-badge category">${ritual.category}</span>
                <span class="meta-badge difficulty ${ritual.difficulty}">${ritual.difficulty}</span>
                <span class="meta-badge time">⏱️ ${ritual.time}</span>
            </div>
            <p>${ritual.description}</p>
            <span class="expand-toggle">See Full Instructions</span>
            <div class="ritual-details">
                ${stepsHTML}
                ${toolsHTML}
                ${safetyHTML}
            </div>
        `;
        
        // Add click handler for expansion
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
        
        ritualSuggestions.appendChild(card);
    });
}

// Add filter event listeners
document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('category-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndDisplayRituals);
    }
    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', filterAndDisplayRituals);
    }
});

// Calendar Functions
function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    const today = new Date();
    
    calendarMonth.textContent = firstDay.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
    });
    
    moonCalendar.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day';
        header.style.background = 'transparent';
        header.style.border = 'none';
        header.innerHTML = `<strong style=" color: var(--accent)">${day}</strong>`;
        moonCalendar.appendChild(header);
    });
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day';
        emptyDay.style.opacity = '0';
        moonCalendar.appendChild(emptyDay);
    }
    
    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const moonData = getMoonPhase(date);
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        
        // Check if today
        if (date.toDateString() === today.toDateString()) {
            dayEl.classList.add('today');
        }
        
        dayEl.innerHTML = `
            <div class="date-number">${day}</div>
            <div class="mini-moon">${moonData.phaseEmoji}</div>
            <div class="phase-label">${moonData.phaseName.split(' ')[0]}</div>
        `;
        
        // Click to view that day's moon
        dayEl.addEventListener('click', () => {
            updateMoonDisplay(date);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        moonCalendar.appendChild(dayEl);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    generateCalendar(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth());
});

nextMonthBtn.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    generateCalendar(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth());
});

// Initialize
updateMoonDisplay();
generateCalendar(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth());

// Enable keyboard navigation for ritual cards
enableKeyboardNav('ritual-suggestions', '.ritual-card');
