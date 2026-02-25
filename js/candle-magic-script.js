// ========================================
// CANDLE MAGIC GUIDE
// ========================================

// ========================================
// DATA: CANDLE COLORS
// ========================================

const CANDLE_COLORS = [
    {
        name: 'White',
        hex: '#f8f4e8',
        emoji: '🕯️',
        element: 'Spirit',
        planet: 'Moon',
        chakra: 'Crown',
        intentions: ['Purification', 'New Beginnings', 'Peace', 'Clarity', 'Truth', 'Protection', 'Spiritual Growth'],
        meaning: 'White candles carry the energy of purity, clarity, and new beginnings. The most versatile color in any witch\'s toolkit, white can substitute for any other candle color in spellwork. It holds lunar energy and connects to the divine, making it ideal for consecration, purification, and spiritual work of all kinds.',
        magical_uses: 'Purification rituals, new moon intentions, truth-seeking spells, consecrating tools and sacred space, calling spirit guides and ancestors, healing work, cleansing negative energy, all-purpose spellwork.',
        dressing: 'Frankincense, sandalwood, white sage, jasmine oil, rose water, myrrh. Clear quartz enhances white candle workings.',
        timing: 'New Moon for intentions, Full Moon for amplification, Monday (Moon\'s day). Effective at any time — truly versatile.',
        day_of_week: 'Monday'
    },
    {
        name: 'Black',
        hex: '#1c1c1c',
        emoji: '🖤',
        element: 'Earth',
        planet: 'Saturn',
        chakra: 'Root',
        intentions: ['Protection', 'Banishing', 'Binding', 'Shadow Work', 'Reversal', 'Grounding'],
        meaning: 'Black candles absorb and transmute negative energy. Contrary to common misconceptions, they are powerful protective tools — used to banish harmful influences, create energetic boundaries, and do deep shadow work. Black holds Saturn\'s energy of discipline, endings, and transformation through darkness.',
        magical_uses: 'Banishing unwanted energies, binding harmful people or patterns, reversing spells sent your way, protection wards, shadow work and exploring the subconscious, breaking bad habits, endings and closure.',
        dressing: 'Dragon\'s blood resin, black pepper, obsidian chips, myrrh, clove. Roll outward (away from you) to banish.',
        timing: 'Waning Moon for banishing and releasing, Saturday (Saturn\'s day), midnight or the dark of the moon.',
        day_of_week: 'Saturday'
    },
    {
        name: 'Red',
        hex: '#cc0000',
        emoji: '❤️‍🔥',
        element: 'Fire',
        planet: 'Mars',
        chakra: 'Root',
        intentions: ['Love', 'Passion', 'Courage', 'Strength', 'Vitality', 'Power', 'Protection'],
        meaning: 'Red candles burn with the fierce energy of Mars — passion, courage, and primal life force. They invoke desire, athletic strength, and the will to act boldly. Red is the color of blood and fire, representing the vitality that drives all living things forward.',
        magical_uses: 'Passionate love spells, courage-building workings, raising energy for spellwork, protection through strength, vitality and health magic, justice and revenge (use carefully), competitive edge.',
        dressing: 'Rose oil, cinnamon, dragon\'s blood, ginger, black pepper. Carnelian or garnet chips amplify.',
        timing: 'Waxing to Full Moon for passion and attraction, Tuesday (Mars\' day), noon when the sun is highest.',
        day_of_week: 'Tuesday'
    },
    {
        name: 'Pink',
        hex: '#ff8fab',
        emoji: '🌸',
        element: 'Water',
        planet: 'Venus',
        chakra: 'Heart',
        intentions: ['Love', 'Self-Love', 'Friendship', 'Healing', 'Compassion', 'Peace'],
        meaning: 'Pink candles carry the gentle, nurturing energy of Venus — romantic love, emotional healing, and the sweetness of friendship. Where red ignites passion, pink cultivates tender affection and self-worth. It\'s the color of the heart chakra in its softest expression.',
        magical_uses: 'Attracting romantic love (gentle, lasting), self-love rituals, healing broken relationships, friendship spells, emotional healing, forgiveness work, opening the heart after hurt.',
        dressing: 'Rose oil, rose petals, vanilla, ylang-ylang, jasmine. Rose quartz is the ideal crystal companion.',
        timing: 'Full Moon for self-love, Waxing Moon for attracting love, Friday (Venus\' day), dawn.',
        day_of_week: 'Friday'
    },
    {
        name: 'Orange',
        hex: '#ff7c2a',
        emoji: '🍊',
        element: 'Fire',
        planet: 'Mercury / Sun',
        chakra: 'Sacral',
        intentions: ['Success', 'Creativity', 'Abundance', 'Confidence', 'Clarity', 'Attraction'],
        meaning: 'Orange candles spark creative fire and attract opportunity with joyful enthusiasm. Blending red\'s action with yellow\'s intellect, orange carries the optimistic energy of Mercury and Sun — quick thinking, bold communication, and the confidence to seize the moment.',
        magical_uses: 'Career success and job interviews, creative projects and artistic work, boosting confidence and charisma, attracting opportunity, legal matters, overcoming obstacles with wit and speed.',
        dressing: 'Cinnamon, orange peel, bergamot, sunflower petals, sweet orange essential oil. Carnelian or sunstone amplifies.',
        timing: 'Waxing Moon for building opportunities, Wednesday (Mercury) or Sunday (Sun), sunrise.',
        day_of_week: 'Wednesday'
    },
    {
        name: 'Yellow',
        hex: '#f9c74f',
        emoji: '🌟',
        element: 'Air',
        planet: 'Mercury',
        chakra: 'Solar Plexus',
        intentions: ['Clarity', 'Creativity', 'Confidence', 'Success', 'Peace', 'Spiritual Growth'],
        meaning: 'Yellow candles illuminate the mind with Mercury\'s quick, communicative energy. They enhance mental clarity, creativity, and the power of the spoken and written word. Yellow connects to the solar plexus — personal power and self-confidence — and to air\'s quality of clear, swift thought.',
        magical_uses: 'Studying and passing exams, communication spells (letters, contracts, difficult conversations), travel protection, confidence building, mental clarity and focus, divination to enhance clarity of vision.',
        dressing: 'Lemon oil, eucalyptus, mint, bay leaf, lemon verbena. Citrine or yellow topaz enhances.',
        timing: 'Any Moon phase, Wednesday (Mercury\'s day), sunrise for maximum mental clarity.',
        day_of_week: 'Wednesday'
    },
    {
        name: 'Green',
        hex: '#2d8a4e',
        emoji: '🌿',
        element: 'Earth',
        planet: 'Venus',
        chakra: 'Heart',
        intentions: ['Abundance', 'Healing', 'Growth', 'Love', 'Peace', 'Spiritual Growth'],
        meaning: 'Green candles connect to earth\'s abundant generosity. Venus rules green\'s heart-centered prosperity — not just wealth, but growth in all areas of life: health, relationships, projects, and spiritual development. Green is the color of spring, renewal, and the living world.',
        magical_uses: 'Money and prosperity spells, healing work (physical and emotional), fertility magic, connecting with nature spirits and plant allies, abundance in career or creative projects, growth and renewal rituals.',
        dressing: 'Basil, patchouli, mint, cinnamon, bergamot, green aventurine chips. Bay leaf inscribed with intention works well.',
        timing: 'Waxing to Full Moon for growth and abundance, Thursday (Jupiter) for expansion, Friday (Venus) for heart-centered work.',
        day_of_week: 'Thursday'
    },
    {
        name: 'Light Blue',
        hex: '#87ceeb',
        emoji: '💧',
        element: 'Water',
        planet: 'Moon',
        chakra: 'Throat',
        intentions: ['Peace', 'Healing', 'Clarity', 'Protection', 'Spiritual Growth'],
        meaning: 'Light blue candles carry the serene energy of still water and clear skies. They bring deep peace, facilitate honest communication, and soothe anxiety and conflict. Connected to the throat chakra, they help find the right words and support healing after strife.',
        magical_uses: 'Peace rituals and calming conflict, healing after emotional wounds, throat chakra work and communication, truth-speaking in difficult situations, calming anxiety and sleep spells, water elemental work.',
        dressing: 'Chamomile, eucalyptus, blue lotus, aquamarine chips, spearmint. Celestite or blue lace agate amplifies.',
        timing: 'Full Moon for deep healing, Waning Moon for releasing anxiety, Monday (Moon\'s day), evening.',
        day_of_week: 'Monday'
    },
    {
        name: 'Dark Blue',
        hex: '#1a237e',
        emoji: '🌊',
        element: 'Water',
        planet: 'Jupiter / Saturn',
        chakra: 'Third Eye',
        intentions: ['Intuition', 'Spiritual Growth', 'Clarity', 'Power', 'Protection'],
        meaning: 'Dark blue and indigo candles open the third eye and deepen intuitive wisdom. They pierce the veil between worlds and invoke Jupiter\'s higher knowledge and Saturn\'s penetrating insight — ideal for prophetic work, meditation, and accessing the deeper layers of consciousness.',
        magical_uses: 'Psychic development and strengthening intuition, prophetic dreaming, deep meditation and trance work, divination of all kinds, accessing higher wisdom and guides, astral travel, justice workings.',
        dressing: 'Mugwort, wormwood, lapis lazuli chips, frankincense, blue lotus oil. Amethyst and lapis amplify.',
        timing: 'Full Moon for visions, Thursday (Jupiter) for wisdom, Saturday (Saturn) for serious work, midnight.',
        day_of_week: 'Thursday'
    },
    {
        name: 'Purple',
        hex: '#7b2d8b',
        emoji: '💜',
        element: 'Spirit',
        planet: 'Jupiter / Neptune',
        chakra: 'Crown',
        intentions: ['Power', 'Spiritual Growth', 'Intuition', 'Abundance', 'Protection', 'Healing'],
        meaning: 'Purple candles hold the highest spiritual vibration in the color spectrum, combining red\'s power with blue\'s wisdom into royal authority and cosmic connection. They amplify all spellwork, connect to higher consciousness, and are used by those working at an advanced level of magical practice.',
        magical_uses: 'Amplifying any other spell, spiritual development and advancement, contacting spirit guides and higher self, manifestation work with deep will, power rituals, transformation and transmutation, royalty and recognition.',
        dressing: 'Frankincense, lavender, amethyst chips, violet flowers, sandalwood, myrrh. Amethyst is the natural companion.',
        timing: 'Full Moon for maximum power, Thursday (Jupiter) for wisdom and expansion, spiritual new moons.',
        day_of_week: 'Thursday'
    },
    {
        name: 'Brown',
        hex: '#8b5e3c',
        emoji: '🪨',
        element: 'Earth',
        planet: 'Saturn / Earth',
        chakra: 'Root',
        intentions: ['Grounding', 'Protection', 'Abundance', 'Healing'],
        meaning: 'Brown candles anchor spellwork in physical reality with earth\'s steady, practical energy. They\'re perfect for anything related to the material world — home, money that requires sustained effort, animals, and grounding after intense ritual work. Brown is underused but deeply powerful for practical magic.',
        magical_uses: 'Home protection and blessing, grounding rituals and releasing overwhelm, connecting with animal guides and familiars, stability in finances, earth elemental work, locating lost objects, gardening and nature magic.',
        dressing: 'Patchouli, vetiver, cedar, oak bark, obsidian. Smoky quartz, tiger\'s eye, or petrified wood amplifies.',
        timing: 'Any Moon phase for stability work, Saturday for long-term practical matters, midday.',
        day_of_week: 'Saturday'
    },
    {
        name: 'Silver',
        hex: '#c0c0c0',
        emoji: '🌙',
        element: 'Water',
        planet: 'Moon',
        chakra: 'Crown',
        intentions: ['Intuition', 'Spiritual Growth', 'Peace', 'Protection', 'Clarity'],
        meaning: 'Silver candles embody the light of the full moon reflected on still water. They honor the Goddess in her lunar aspect, enhance all psychic and intuitive work, and amplify the reflective, receptive qualities of water energy. Silver is the moon made manifest.',
        magical_uses: 'Full moon rituals and lunar workings, working with moon goddesses (Artemis, Selene, Hecate), dream magic and prophetic dreaming, scrying and mirror magic, honoring feminine divine energy, psychic amplification.',
        dressing: 'Moonstone chips, jasmine, white sandalwood, myrrh, silver moonflower oil. Moonstone or selenite amplifies.',
        timing: 'Full Moon is essential — silver is the moon\'s candle. Monday (Moon\'s day), midnight.',
        day_of_week: 'Monday'
    },
    {
        name: 'Gold',
        hex: '#d4a017',
        emoji: '☀️',
        element: 'Fire',
        planet: 'Sun',
        chakra: 'Solar Plexus',
        intentions: ['Success', 'Abundance', 'Power', 'Confidence', 'Spiritual Growth'],
        meaning: 'Gold candles carry the power of the sun at its zenith — radiant authority, achievement, and prosperous vitality. They honor solar deities and masculine divine energy, drawing success through confident, inspired action. Gold is the candle of kings, champions, and those claiming their rightful power.',
        magical_uses: 'Career advancement and leadership recognition, solar rituals and Litha/Midsummer celebrations, honoring solar gods (Ra, Apollo, Lugh), drawing wealth through effort and deserving, confidence and authority spells.',
        dressing: 'Cinnamon, frankincense, sunflower petals, citrine chips, orange peel, gold flake oil. Citrine or pyrite amplifies.',
        timing: 'Full Moon for maximum power, Sunday (Sun\'s day), noon at the sun\'s height, Midsummer/Litha.',
        day_of_week: 'Sunday'
    },
    {
        name: 'Gray',
        hex: '#9e9e9e',
        emoji: '🌫️',
        element: 'Spirit',
        planet: 'Mercury / Saturn',
        chakra: 'All',
        intentions: ['Protection', 'Clarity', 'Banishing', 'Peace', 'Grounding'],
        meaning: 'Gray candles exist in the liminal space between opposites — neither light nor dark, neither positive nor negative. They are the candle of wise neutrality, used for binding work that neutralizes rather than banishes, navigating impossible decisions, and working in the ambiguous space that most magic ignores.',
        magical_uses: 'Binding harmful energy without banishing it (neutralizing), canceling unwanted spells, making complex decisions where there is no clear right answer, shadow examination from a neutral perspective, legal matters requiring balance.',
        dressing: 'Benzoin, mugwort, clear quartz, frankincense. Gray moonstone or hematite for neutrality.',
        timing: 'Waning Moon for neutralizing, Wednesday (Mercury) for decisions, Saturday (Saturn) for binding.',
        day_of_week: 'Wednesday'
    },
    {
        name: 'Lavender',
        hex: '#9b72cf',
        emoji: '🪻',
        element: 'Air',
        planet: 'Mercury / Neptune',
        chakra: 'Crown',
        intentions: ['Spiritual Growth', 'Peace', 'Healing', 'Intuition', 'Clarity'],
        meaning: 'Lavender candles carry a gentle, high-vibrational energy that bridges the physical and spiritual worlds. Softer than purple, they\'re ideal for quiet spiritual development — enhancing dreams, supporting meditation, and working with fairy and nature spirits. Lavender calms without sedating consciousness.',
        magical_uses: 'Sleep enhancement and dream recall, gentle psychic development and third eye opening, meditation and trance support, memory work, connecting to fairy realms and nature spirits, gentle healing of spirit and mind.',
        dressing: 'Lavender essential oil, chamomile, moonstone, amethyst, butterfly pea flowers. Amethyst or lepidolite amplifies.',
        timing: 'Waning Moon for sleep and releasing anxiety, New Moon for spiritual beginnings, Monday at dusk.',
        day_of_week: 'Monday'
    }
];

// ========================================
// DATA: SPELL TEMPLATES
// ========================================

const SPELL_TEMPLATES = [
    {
        name: 'Love Attraction Spell',
        emoji: '💕',
        intent: 'Love',
        candle_color: 'Pink',
        moon_phase: 'Waxing Moon',
        day_of_week: 'Friday',
        ingredients: ['Pink candle', 'Rose petals', 'Rose quartz', 'Rose oil', 'Paper and pen'],
        instructions: [
            'On paper, write qualities you desire in a partner — focus on character and feeling, not a specific person.',
            'Anoint the pink candle with rose oil, rubbing from the center toward you to attract.',
            'Create a circle of rose petals around the candle base.',
            'Place rose quartz in front of the candle and hold it briefly, breathing your intention in.',
            'Light the candle. Visualize warm, loving energy flowing toward you — feel the joy as if it has arrived.',
            'Speak your intention aloud three times, then fold the paper toward you and place it under the candle holder.',
            'Let the candle burn safely. Carry the rose quartz with you.'
        ],
        timing_notes: 'Friday is Venus\' day — ideal for all love workings. Waxing moon draws things toward you. Perform at dusk for sweetest energy.',
        affirmation: 'I am worthy of deep, loving partnership. Love flows toward me freely and joyfully.'
    },
    {
        name: 'Protection Ward',
        emoji: '🛡️',
        intent: 'Protection',
        candle_color: 'Black',
        moon_phase: 'Waning Moon',
        day_of_week: 'Saturday',
        ingredients: ['Black candle', 'Sea salt', 'Rosemary', 'Black tourmaline', 'Basil'],
        instructions: [
            'Create a circle of sea salt around your candle holder.',
            'Place rosemary and basil at the four cardinal points (N, S, E, W) around the candle.',
            'Hold the black tourmaline in your dominant hand.',
            'Light the candle. Visualize a strong, impenetrable boundary of protective dark energy surrounding your home and self.',
            'State clearly and firmly: "Nothing harmful may pass this threshold. I am protected on all sides."',
            'Let the tourmaline charge in the candle\'s light for the full burn.',
            'When done, bury any remaining wax off your property (at a crossroads or in the earth).'
        ],
        timing_notes: 'Waning moon draws away threats. Saturday is Saturn\'s day — ideal for binding and protection. Perform at night.',
        affirmation: 'I am surrounded by an unbreakable shield of protective energy. I am safe.'
    },
    {
        name: 'Abundance Manifestation',
        emoji: '💚',
        intent: 'Abundance',
        candle_color: 'Green',
        moon_phase: 'Waxing Moon',
        day_of_week: 'Thursday',
        ingredients: ['Green candle', 'Cinnamon stick', 'Fresh mint', 'Green aventurine', 'Coins or a dollar bill', 'Patchouli oil', 'Basil'],
        instructions: [
            'Anoint the green candle with patchouli oil, rubbing from center toward you to attract.',
            'Arrange cinnamon, mint, and basil around the base. Place coins and green aventurine near the candle.',
            'Hold the green aventurine in both hands.',
            'Light the candle. Close your eyes and feel deep gratitude as if abundance has already arrived — not desperation, but satisfied joy.',
            'State your specific financial intention clearly, as if already achieved.',
            'Hold this feeling for at least 5 minutes, letting the candle\'s light fill your visualized scene.',
            'Leave the aventurine on your altar or carry it in your wallet.'
        ],
        timing_notes: 'Thursday is Jupiter\'s day of expansion. Waxing moon builds and grows energy. Best performed in the morning.',
        affirmation: 'Abundance flows to me in expected and unexpected ways. I receive gracefully and gratefully.'
    },
    {
        name: 'Mental Clarity Spell',
        emoji: '💡',
        intent: 'Clarity',
        candle_color: 'Yellow',
        moon_phase: 'Waxing Moon',
        day_of_week: 'Wednesday',
        ingredients: ['Yellow candle', 'Clear quartz point', 'Fresh mint or mint oil', 'Lemon peel', 'Paper and pen'],
        instructions: [
            'Write down the decision or communication challenge that needs clarity.',
            'Rub lemon peel around the candle base — lemon clears mental fog.',
            'Place clear quartz in front of the candle, pointing toward you.',
            'Light the candle. Take three slow breaths and let your mind become still like water.',
            'Read what you wrote. Then set it aside and let your mind simply observe — don\'t force answers.',
            'Write down any impressions, images, or feelings that arise without judgment.',
            'The clarity may come during the working or in the following days — trust the process.'
        ],
        timing_notes: 'Wednesday is Mercury\'s day for intellect and communication. Perform at sunrise for sharpest mental energy. Waxing moon builds toward revelation.',
        affirmation: 'My mind is clear and sharp. Answers come to me easily. I communicate with confidence and truth.'
    },
    {
        name: 'Banishing Negativity',
        emoji: '🌑',
        intent: 'Banishing',
        candle_color: 'Black',
        moon_phase: 'Waning Moon',
        day_of_week: 'Saturday',
        ingredients: ['Black candle', 'White candle', 'Sea salt', 'Black pepper', 'Myrrh incense', 'Obsidian or black tourmaline'],
        instructions: [
            'Light the white candle first and ask for protection and divine light.',
            'Write what you want to banish on paper — be specific. Name it clearly.',
            'Light the black candle from the white candle\'s flame.',
            'Place obsidian between the two candles. Sprinkle black pepper around the black candle.',
            'Read what you wrote aloud. Feel it releasing from you — it no longer has power.',
            'When finished, let the white candle burn longer than the black. Let the black burn out first.',
            'After the ritual, scatter black pepper at your front doorway. Bury or dispose of the paper away from home.'
        ],
        timing_notes: 'Waning moon is essential — the decreasing light mirrors the diminishing of what you release. Saturday and the dark of the moon are most powerful for banishing.',
        affirmation: 'I release all that no longer serves me. I am free, protected, and moving forward.'
    },
    {
        name: 'Self-Love Ritual',
        emoji: '🌹',
        intent: 'Self-Love',
        candle_color: 'Pink',
        moon_phase: 'Full Moon',
        day_of_week: 'Friday',
        ingredients: ['Pink candle', 'Small mirror', 'Rose petals', 'Rose or jasmine oil', 'Rose quartz', 'Journal'],
        instructions: [
            'Create a sacred space: scatter rose petals around the mirror and candle.',
            'Anoint your candle and your pulse points (wrists, throat, heart) with rose oil.',
            'Sit comfortably facing the mirror with the candle between you and your reflection.',
            'Light the candle. Look into your own eyes — softly, not critically.',
            'Speak aloud three things you genuinely appreciate about yourself. Take your time. Mean it.',
            'Write these, and anything else that surfaces, in your journal.',
            'Sit with the candle for as long as feels right. Let yourself be witnessed by yourself.'
        ],
        timing_notes: 'Full Moon amplifies self-love and visibility. This ritual is most powerful at the height of the moon, outside if possible.',
        affirmation: 'I am enough. I am worthy of my own love and the love of others. I see my own beauty and light.'
    },
    {
        name: 'Career Success Spell',
        emoji: '🌟',
        intent: 'Success',
        candle_color: 'Gold',
        moon_phase: 'Waxing Moon',
        day_of_week: 'Sunday',
        ingredients: ['Gold or orange candle', 'Bay leaf', 'Cinnamon', 'Citrine', 'Pen', 'Sunflower petals (optional)'],
        instructions: [
            'Write your career goal on the bay leaf in as much detail as possible.',
            'Anoint the candle with cinnamon oil (or rub dry cinnamon onto it), rolling toward you.',
            'Place citrine and sunflower petals around the candle base.',
            'Hold the bay leaf in both hands and visualize your success clearly — see it, feel the pride.',
            'Light the candle. Continue holding your success visualization for 5–10 minutes.',
            'Place the bay leaf under the candle holder and let it charge.',
            'After the candle is done, safely burn the bay leaf and release its energy to the universe.'
        ],
        timing_notes: 'Sunday is the Sun\'s day — ideal for recognition, leadership, and achievement. Waxing moon builds momentum toward your goal.',
        affirmation: 'My talents are seen and valued. Opportunities flow to me. I step fully into my success.'
    },
    {
        name: 'Healing Recovery Spell',
        emoji: '💙',
        intent: 'Healing',
        candle_color: 'Light Blue',
        moon_phase: 'Full Moon',
        day_of_week: 'Monday',
        ingredients: ['Light blue or white candle', 'Chamomile', 'Blue lace agate or clear quartz', 'Lavender oil', 'Photo or written name of who needs healing'],
        instructions: [
            'Place the photo or write the name of the person needing healing near the candle.',
            'Anoint the candle with lavender oil, working from center outward with healing intention.',
            'Sprinkle chamomile around the candle. Hold the crystal, charging it with healing intention.',
            'Light the candle. Visualize warm, healing white or blue light surrounding the person completely.',
            'See them whole, healthy, and comfortable — not struggling, but well.',
            'Hold this visualization for at least 5 minutes, letting love and healing energy flow through you.',
            'Leave the charged crystal with the person or photo as a healing talisman.'
        ],
        timing_notes: 'IMPORTANT: Candle magic supports healing alongside medical care — never instead of it. Full Moon amplifies healing energy. Monday honors the healing qualities of the Moon.',
        affirmation: 'Healing energy flows freely and completely. Every cell vibrates with health and wholeness.'
    },
    {
        name: 'Psychic Development Ritual',
        emoji: '🔮',
        intent: 'Divination',
        candle_color: 'Purple',
        moon_phase: 'Full Moon',
        day_of_week: 'Monday',
        ingredients: ['Purple or dark blue candle', 'Amethyst', 'Mugwort (loose or sachet)', 'Frankincense incense', 'Scrying mirror, crystal ball, or dark bowl of water'],
        instructions: [
            'Burn frankincense incense to cleanse the space and open psychic channels.',
            'Place amethyst at your third eye (center of forehead) briefly, then set before you.',
            'Light the candle. Close your eyes and take 7 slow, deep breaths.',
            'If using mugwort: hold it near your nose briefly before opening your eyes — it enhances vision.',
            'Gaze softly into your scrying tool with soft, unfocused eyes — not staring, but receiving.',
            'Don\'t force images; let them come. Note any impressions: shapes, feelings, words, colors.',
            'When finished, record everything in a journal immediately — even fragments matter.'
        ],
        timing_notes: 'New Moon for new psychic practices; Full Moon for deepest and clearest visions. Perform in complete darkness except for the candle.',
        affirmation: 'My intuition is clear and trustworthy. I am open to guidance from my highest self and the unseen world.'
    },
    {
        name: 'Home Blessing Ritual',
        emoji: '🏡',
        intent: 'Home',
        candle_color: 'White',
        moon_phase: 'New Moon',
        day_of_week: 'Sunday',
        ingredients: ['White or brown candle', 'Sea salt', 'Rosemary sprigs', 'Cinnamon sticks', 'Lavender', 'Small bowl of honey (optional)'],
        instructions: [
            'Start at the front door. Sprinkle sea salt and rosemary at the threshold.',
            'Moving clockwise through each room, speak a specific blessing for that room\'s purpose aloud.',
            'Light your candle in the most central space of your home.',
            'If using honey: place a small bowl beside the candle as an offering for abundance and sweetness.',
            'Stand at the center and extend your arms, feeling your home\'s energy settle and brighten.',
            'Complete the clockwise circuit, returning to the front door.',
            'Let the candle burn completely in a safe central location.'
        ],
        timing_notes: 'New Moon is ideal for fresh starts and new beginnings in a home. Moving in, beginning of seasons, after conflict, or when energy feels heavy are all excellent timing.',
        affirmation: 'This home is filled with love, protection, peace, and abundance. All who enter here are blessed and safe.'
    },
    {
        name: 'Peace & Release Spell',
        emoji: '🕊️',
        intent: 'Peace',
        candle_color: 'Light Blue',
        moon_phase: 'Waning Moon',
        day_of_week: 'Monday',
        ingredients: ['Light blue candle', 'Chamomile tea (brewed)', 'Lavender', 'Aquamarine or blue calcite', 'White paper', 'Pen'],
        instructions: [
            'Brew chamomile tea and let it cool slightly. Hold the warm cup in both hands as you settle.',
            'Write what is disturbing your peace on white paper — be honest and thorough.',
            'Read it aloud. Acknowledge it fully. Then say: "I have seen you. I release you."',
            'Place the paper beneath the candle holder. Arrange lavender around it.',
            'Light the candle. Sip your chamomile tea slowly, breathing peace in with each sip.',
            'Let the waning moon\'s energy draw the worry away as the candle burns.',
            'When safe to do so, burn the paper and let the smoke carry it away.'
        ],
        timing_notes: 'Waning moon diminishes what you release. Monday and water energy support emotional release. Perform in the evening as day winds down.',
        affirmation: 'I release what I cannot control. Peace is my natural state. I return to calm, centered stillness.'
    },
    {
        name: 'New Moon Intention Setting',
        emoji: '🌑',
        intent: 'Manifestation',
        candle_color: 'White',
        moon_phase: 'New Moon',
        day_of_week: 'Monday',
        ingredients: ['White or silver candle', 'Paper and pen', 'Small jar with lid', 'Herbs matching your intention', 'Moonstone or clear quartz'],
        instructions: [
            'In the darkness of the new moon, write your intention as already achieved ("I am..." or "I have...").',
            'Read it aloud once — slowly, feeling the truth of it.',
            'Fold the paper toward you three times (always toward you, to draw it in).',
            'Place the folded paper in your jar with herbs that match your goal.',
            'Light the candle over the open jar. Let wax drip into the jar as a seal of intention.',
            'Close the jar tightly. Hold it in both hands and breathe your will into it.',
            'Keep the jar on your altar until the intention manifests or the next new moon cycle.'
        ],
        timing_notes: 'New Moon is the most potent time for planting seeds of intention. The darkness holds maximum potential before the light grows. Work at the exact time of the new moon if possible.',
        affirmation: 'The seeds I plant tonight grow with the increasing light. My intentions manifest in perfect time and form.'
    }
];

// ========================================
// STATE
// ========================================

let activeTab = 'colors';

// ========================================
// TAB SWITCHING
// ========================================

/**
 * Switch between Color Reference and Spell Templates tabs
 * @param {string} tabName - 'colors' or 'spells'
 */
function switchTab(tabName) {
    activeTab = tabName;

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const isActive = btn.dataset.tab === tabName;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive);
    });

    // Update tab sections
    document.querySelectorAll('.tab-section').forEach(section => {
        section.classList.toggle('hidden', section.id !== `${tabName}-section`);
    });
}

// ========================================
// COLOR REFERENCE
// ========================================

/**
 * Build and return a candle color card element
 * @param {Object} color - Color data object
 * @returns {HTMLElement}
 */
function createColorCard(color) {
    const card = document.createElement('div');
    card.className = 'candle-card';
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
        <div class="candle-header">
            <div class="color-swatch" style="background: ${color.hex};" aria-hidden="true"></div>
            <div class="candle-title">
                <h3>${color.name}</h3>
                <span class="candle-emoji">${color.emoji}</span>
            </div>
        </div>

        <div class="candle-meta">
            <span class="meta-badge element">${color.element}</span>
            <span class="meta-badge planet">☿ ${color.planet}</span>
            <span class="meta-badge chakra">🧘 ${color.chakra}</span>
        </div>

        <div class="intentions-preview">
            ${color.intentions.slice(0, 4).map(i => `<span class="intention-tag">${i}</span>`).join('')}
        </div>

        <p class="candle-description">${color.meaning}</p>

        <span class="expand-toggle" aria-expanded="false">See Full Correspondences ▼</span>

        <div class="candle-details">
            <div class="details-section">
                <h4>✨ Magical Uses</h4>
                <p>${color.magical_uses}</p>
            </div>
            <div class="details-section">
                <h4>🫙 Dressing & Companions</h4>
                <p>${color.dressing}</p>
            </div>
            <div class="details-section">
                <h4>🌙 Best Timing</h4>
                <p>${color.timing}</p>
            </div>
            <div class="details-section full-width">
                <h4>🎯 All Intentions</h4>
                <p>${color.intentions.join(' • ')}</p>
            </div>
        </div>
    `;

    const toggle = card.querySelector('.expand-toggle');
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = card.classList.toggle('expanded');
        toggle.textContent = expanded ? 'Hide Details ▲' : 'See Full Correspondences ▼';
        toggle.setAttribute('aria-expanded', expanded);
    });

    return card;
}

/**
 * Filter and render candle color cards
 */
function renderColors() {
    const searchTerm = document.getElementById('color-search').value;
    const elementVal = document.getElementById('element-filter').value;
    const intentionVal = document.getElementById('intention-filter').value;

    const filtered = filterAndSearch(
        CANDLE_COLORS,
        searchTerm,
        [(c) => c.name, (c) => c.intentions.join(' '), (c) => c.meaning],
        { element: elementVal, intention: intentionVal },
        {
            element: (c) => c.element,
            intention: (c) => c.intentions
        }
    );

    const grid = document.getElementById('colors-grid');
    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="empty-message">No colors match your search. Try different filters.</p>';
    } else {
        filtered.forEach(color => grid.appendChild(createColorCard(color)));
    }

    updateResultCount(document.getElementById('color-count'), filtered.length, 'colors');
}

// ========================================
// SPELL TEMPLATES
// ========================================

/**
 * Build and return a spell template card element
 * @param {Object} spell - Spell data object
 * @returns {HTMLElement}
 */
function createSpellCard(spell) {
    const card = document.createElement('div');
    card.className = 'candle-card spell-card';
    card.setAttribute('tabindex', '0');

    const stepsHTML = spell.instructions.map((step, i) =>
        `<li>${step}</li>`
    ).join('');

    const ingredientsHTML = spell.ingredients.map(i =>
        `<li>${i}</li>`
    ).join('');

    card.innerHTML = `
        <div class="spell-header">
            <span class="spell-emoji">${spell.emoji}</span>
            <div class="spell-title">
                <h3>${spell.name}</h3>
                <div class="spell-tags">
                    <span class="meta-badge intent">${spell.intent}</span>
                    <span class="meta-badge candle-color-badge">🕯️ ${spell.candle_color}</span>
                </div>
            </div>
        </div>

        <div class="spell-timing">
            <span class="timing-badge">🌙 ${spell.moon_phase}</span>
            <span class="timing-badge">📅 ${spell.day_of_week}</span>
        </div>

        <p class="spell-affirmation">"${spell.affirmation}"</p>

        <span class="expand-toggle" aria-expanded="false">See Full Spell ▼</span>

        <div class="candle-details">
            <div class="details-section">
                <h4>🧪 You Will Need</h4>
                <ul class="ingredients-list">${ingredientsHTML}</ul>
            </div>
            <div class="details-section full-width">
                <h4>📋 Instructions</h4>
                <ol class="steps-list">${stepsHTML}</ol>
            </div>
            <div class="details-section full-width">
                <h4>⏰ Timing Notes</h4>
                <p>${spell.timing_notes}</p>
            </div>
        </div>
    `;

    const toggle = card.querySelector('.expand-toggle');
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const expanded = card.classList.toggle('expanded');
        toggle.textContent = expanded ? 'Collapse Spell ▲' : 'See Full Spell ▼';
        toggle.setAttribute('aria-expanded', expanded);
    });

    return card;
}

/**
 * Filter and render spell template cards
 */
function renderSpells() {
    const searchTerm = document.getElementById('spell-search').value;
    const intentVal = document.getElementById('intent-filter').value;
    const moonVal = document.getElementById('moon-filter').value;

    const filtered = filterAndSearch(
        SPELL_TEMPLATES,
        searchTerm,
        [(s) => s.name, (s) => s.intent, (s) => s.candle_color, (s) => s.affirmation],
        { intent: intentVal, moon_phase: moonVal },
        {
            intent: (s) => s.intent,
            moon_phase: (s) => s.moon_phase
        }
    );

    const grid = document.getElementById('spells-grid');
    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="empty-message">No spells match your search. Try different filters.</p>';
    } else {
        filtered.forEach(spell => grid.appendChild(createSpellCard(spell)));
    }

    updateResultCount(document.getElementById('spell-count'), filtered.length, 'spells');
}

// ========================================
// INIT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderColors();
    renderSpells();

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Color filter listeners
    document.getElementById('color-search').addEventListener('input', renderColors);
    document.getElementById('element-filter').addEventListener('change', renderColors);
    document.getElementById('intention-filter').addEventListener('change', renderColors);
    document.getElementById('clear-color-filters').addEventListener('click', () => {
        clearFilters([
            document.getElementById('color-search'),
            document.getElementById('element-filter'),
            document.getElementById('intention-filter')
        ]);
        renderColors();
    });

    // Spell filter listeners
    document.getElementById('spell-search').addEventListener('input', renderSpells);
    document.getElementById('intent-filter').addEventListener('change', renderSpells);
    document.getElementById('moon-filter').addEventListener('change', renderSpells);
    document.getElementById('clear-spell-filters').addEventListener('click', () => {
        clearFilters([
            document.getElementById('spell-search'),
            document.getElementById('intent-filter'),
            document.getElementById('moon-filter')
        ]);
        renderSpells();
    });

    // Keyboard navigation for both grids
    enableKeyboardNav('colors-grid', '.candle-card');
    enableKeyboardNav('spells-grid', '.spell-card');
});
