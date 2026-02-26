// ========================================
// CRYSTAL PROPERTIES DATABASE
// Healing & magical properties of crystals
// ========================================

// ========================================
// CRYSTAL DATA
// ========================================

const CRYSTALS = [
    {
        name: 'Clear Quartz',
        emoji: '💎',
        color: ['Clear', 'White'],
        chakra: ['Crown', 'All Chakras'],
        element: 'All Elements',
        zodiac: ['All Signs'],
        mohs_hardness: '7',
        intentions: ['Purification', 'Healing', 'Intuition'],
        properties: 'Known as the "Master Healer," Clear Quartz amplifies energy and intention. It can be programmed to assist with any intention and works with all chakras. Enhances clarity of thought, spiritual growth, and manifestation.',
        metaphysical: 'Amplifies the energy of other crystals, clears the mind, enhances psychic abilities, and serves as a universal healing stone. Can be programmed for any purpose.',
        physical_healing: 'Supports immune system, regulates energy flow, and aids overall physical healing.',
        emotional_healing: 'Brings clarity to emotions, releases negative patterns, and promotes inner peace.',
        cleansing: ['Moonlight', 'Sunlight', 'Smudging', 'Sound', 'Running Water'],
        charging: ['Sunlight', 'Moonlight', 'Earth burial', 'Crystal clusters'],
        uses: [
            'Place on altar as centerpiece',
            'Use in crystal grids as amplifier',
            'Meditate while holding to clear mind',
            'Program with specific intentions',
            'Wear as jewelry for constant energy'
        ],
        affirmation: 'I am clear, focused, and aligned with my highest purpose.',
        care_tips: 'Very durable. Can fade in prolonged sunlight. Cleanse regularly as it absorbs energy from surroundings.'
    },
    {
        name: 'Amethyst',
        emoji: '💜',
        color: ['Purple', 'Violet'],
        chakra: ['Third Eye', 'Crown'],
        element: 'Air',
        zodiac: ['Pisces', 'Virgo', 'Aquarius', 'Capricorn'],
        mohs_hardness: '7',
        intentions: ['Intuition', 'Protection', 'Peace', 'Purification'],
        properties: 'A powerful protective stone, Amethyst guards against psychic attack and negative energy. Enhances spiritual awareness, intuition, and connection to higher consciousness. Known as the sobriety stone.',
        metaphysical: 'Opens third eye and crown chakras, enhances meditation, promotes prophetic dreams, blocks geopathic stress, and facilitates spiritual transformation.',
        physical_healing: 'Eases headaches, relieves insomnia, boosts immune system, and supports sobriety from addictions.',
        emotional_healing: 'Calms anxiety, releases anger, balances mood swings, and dispels fear and grief.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Moonlight', 'Amethyst geode'],
        uses: [
            'Place under pillow for peaceful sleep',
            'Meditate with to enhance spiritual connection',
            'Wear to protect against negative energy',
            'Place in bedroom to calm the mind',
            'Use in grids for protection and purification'
        ],
        affirmation: 'I trust my intuition and connect with divine wisdom.',
        care_tips: 'Do not leave in direct sunlight as color will fade. Very durable stone safe for water cleansing.'
    },
    {
        name: 'Rose Quartz',
        emoji: '🌸',
        color: ['Pink', 'Rose'],
        chakra: ['Heart'],
        element: 'Water',
        zodiac: ['Taurus', 'Libra'],
        mohs_hardness: '7',
        intentions: ['Love', 'Healing', 'Peace'],
        properties: 'The stone of unconditional love. Rose Quartz opens the heart chakra to all forms of love: self-love, family love, platonic love, and romantic love. Restores trust and harmony in relationships.',
        metaphysical: 'Attracts love, deepens existing relationships, promotes self-love and self-acceptance, heals emotional wounds, and opens heart to compassion.',
        physical_healing: 'Supports heart health, improves circulation, eases chest and lung problems, and aids fertility.',
        emotional_healing: 'Heals heartbreak, releases unexpressed emotions, dissolves anger, promotes forgiveness, and nurtures self-worth.',
        cleansing: ['Moonlight', 'Smudging', 'Sound', 'Running Water'],
        charging: ['Moonlight', 'Rose quartz cluster'],
        uses: [
            'Place by bed to attract love',
            'Wear over heart for emotional healing',
            'Use in bath for self-love ritual',
            'Give as gift to strengthen relationships',
            'Meditate with to open heart chakra'
        ],
        affirmation: 'I am worthy of love. I give and receive love freely.',
        care_tips: 'Color may fade in direct sunlight. Safe to cleanse with water. Very durable.'
    },
    {
        name: 'Black Tourmaline',
        emoji: '⚫',
        color: ['Black'],
        chakra: ['Root'],
        element: 'Earth',
        zodiac: ['Capricorn'],
        mohs_hardness: '7-7.5',
        intentions: ['Protection', 'Grounding', 'Purification'],
        properties: 'The ultimate protection stone. Black Tourmaline shields against electromagnetic fields, psychic attack, negative entities, and environmental pollutants. Grounds spiritual energy into the physical plane.',
        metaphysical: 'Forms protective shield around the aura, transmutes negative energy, repels psychic attack, blocks geopathic stress, and connects to Earth\'s grounding energies.',
        physical_healing: 'Strengthens immune system, protects from EMF radiation, supports detoxification, and relieves pain.',
        emotional_healing: 'Releases anxiety, anger, and unworthiness. Promotes sense of power and self-confidence.',
        cleansing: ['Smudging', 'Sound', 'Earth burial'],
        charging: ['Sunlight', 'Earth connection'],
        uses: [
            'Place by electronics to block EMF',
            'Carry for psychic protection',
            'Place at four corners of home for protection grid',
            'Meditate with for grounding',
            'Keep by front door to block negative energy'
        ],
        affirmation: 'I am protected, grounded, and safe in all situations.',
        care_tips: 'Do not cleanse with water as it may damage the stone. Use dry methods only.'
    },
    {
        name: 'Citrine',
        emoji: '🍋',
        color: ['Yellow', 'Golden', 'Orange'],
        chakra: ['Solar Plexus', 'Sacral'],
        element: 'Fire',
        zodiac: ['Aries', 'Gemini', 'Leo', 'Libra'],
        mohs_hardness: '7',
        intentions: ['Abundance', 'Creativity', 'Courage'],
        properties: 'The merchant\'s stone and manifestation crystal. Citrine attracts wealth, prosperity, and success. Never needs cleansing as it doesn\'t hold negative energy. Promotes motivation, activates creativity, and encourages self-expression.',
        metaphysical: 'Attracts abundance, manifests intentions, energizes every level of life, raises self-esteem, and encourages joy and optimism.',
        physical_healing: 'Energizes and recharges, supports metabolism, aids digestion, and increases stamina.',
        emotional_healing: 'Releases fear and anxiety, overcomes depression, promotes inner calm, and encourages self-confidence.',
        cleansing: ['Sunlight', 'Smudging'],
        charging: ['Sunlight'],
        uses: [
            'Place in cash register or wallet for prosperity',
            'Wear to boost confidence',
            'Use in manifestation rituals',
            'Keep on desk for creativity',
            'Meditate with for solar plexus activation'
        ],
        affirmation: 'I attract abundance and success in all areas of my life.',
        care_tips: 'Loves sunlight and rarely needs cleansing. Most citrine on market is heat-treated amethyst - natural citrine is pale yellow.'
    },
    {
        name: 'Selenite',
        emoji: '🤍',
        color: ['White', 'Clear'],
        chakra: ['Crown', 'Third Eye'],
        element: 'Air',
        zodiac: ['Taurus'],
        mohs_hardness: '2',
        intentions: ['Purification', 'Intuition', 'Peace'],
        properties: 'A high-vibrational stone that cleanses and charges other crystals. Selenite brings mental clarity, clears blocked energy, and elevates consciousness. Creates peaceful atmosphere and protects space.',
        metaphysical: 'Cleanses auric field, removes energy blocks, enhances telepathy, connects to angelic realm, and facilitates spiritual activation.',
        physical_healing: 'Aligns spine, aids skeletal system, and supports reproductive system.',
        emotional_healing: 'Brings deep peace, clears confusion, promotes honesty, and releases judgment.',
        cleansing: ['Sound', 'Moonlight'],
        charging: ['Moonlight'],
        uses: [
            'Place other crystals on selenite to cleanse them',
            'Use wand to clear aura',
            'Place in corners of room for protection',
            'Meditate with to access higher guidance',
            'Create grid for space clearing'
        ],
        affirmation: 'I am open to divine guidance and higher wisdom.',
        care_tips: 'NEVER use water - selenite dissolves in water! Very soft stone, handle gently. Self-cleansing.'
    },
    {
        name: 'Labradorite',
        emoji: '🌌',
        color: ['Gray', 'Blue', 'Green', 'Gold Iridescence'],
        chakra: ['Third Eye', 'Crown', 'Throat'],
        element: 'Water',
        zodiac: ['Leo', 'Scorpio', 'Sagittarius'],
        mohs_hardness: '6-6.5',
        intentions: ['Intuition', 'Protection', 'Creativity'],
        properties: 'A stone of magic and transformation. Labradorite awakens psychic abilities, protects the aura, and reveals hidden truths. Its iridescent flash represents the light within darkness.',
        metaphysical: 'Enhances psychic abilities, protects aura from energy leaks, facilitates past-life recall, stimulates imagination, and deflects unwanted energies.',
        physical_healing: 'Relieves stress, regulates metabolism, and helps with eye disorders.',
        emotional_healing: 'Banishes fears and insecurities, strengthens faith in self, and calms overactive mind.',
        cleansing: ['Moonlight', 'Smudging', 'Water'],
        charging: ['Moonlight', 'Starlight'],
        uses: [
            'Wear during divination to enhance abilities',
            'Place on third eye during meditation',
            'Carry for psychic protection',
            'Use in magic and ritual work',
            'Keep in workspace for creative inspiration'
        ],
        affirmation: 'I trust my inner magic and embrace transformation.',
        care_tips: 'Can cleanse with water. Protect from scratches. Flash (labradorescence) is best viewed in light.'
    },
    {
        name: 'Carnelian',
        emoji: '🧡',
        color: ['Orange', 'Red', 'Pink'],
        chakra: ['Sacral', 'Root'],
        element: 'Fire',
        zodiac: ['Aries', 'Leo', 'Virgo'],
        mohs_hardness: '6.5-7',
        intentions: ['Courage', 'Creativity', 'Abundance'],
        properties: 'A stone of motivation and endurance. Carnelian stimulates creativity, boosts confidence, and activates the sacral chakra. Enhances vitality, courage, and passion for life.',
        metaphysical: 'Restores vitality, stimulates creativity, promotes courage, attracts prosperity, and enhances sexuality.',
        physical_healing: 'Improves circulation, boosts energy levels, supports reproductive organs, and aids lower back problems.',
        emotional_healing: 'Overcomes negative conditioning, removes apathy, encourages boldness, and releases fear.',
        cleansing: ['Sunlight', 'Water', 'Smudging'],
        charging: ['Sunlight'],
        uses: [
            'Wear for confidence boost',
            'Place on sacral chakra for creativity',
            'Carry when starting new ventures',
            'Use in fertility rituals',
            'Keep in workspace for motivation'
        ],
        affirmation: 'I am creative, confident, and full of vital energy.',
        care_tips: 'Loves sunlight. Safe to cleanse with water. Very stable stone.'
    },
    {
        name: 'Moonstone',
        emoji: '🌙',
        color: ['White', 'Peach', 'Gray', 'Rainbow'],
        chakra: ['Crown', 'Third Eye', 'Sacral'],
        element: 'Water',
        zodiac: ['Cancer', 'Libra', 'Scorpio'],
        mohs_hardness: '6-6.5',
        intentions: ['Intuition', 'Love', 'Protection'],
        properties: 'Sacred stone of the moon. Moonstone enhances intuition, encourages lucid dreaming, and balances emotions. Especially powerful for feminine energy, new beginnings, and inner growth.',
        metaphysical: 'Connects to divine feminine, enhances psychic perception, promotes wishes, protects travelers, and aligns with lunar cycles.',
        physical_healing: 'Supports reproductive system, eases pregnancy and childbirth, balances hormones, and aids digestive system.',
        emotional_healing: 'Calms emotions, releases stress, stabilizes mood swings, and promotes emotional intelligence.',
        cleansing: ['Moonlight', 'Smudging'],
        charging: ['Moonlight (especially full moon)'],
        uses: [
            'Place under pillow for prophetic dreams',
            'Wear during moon rituals',
            'Meditate with during moon phases',
            'Carry for safe travel',
            'Use in fertility and pregnancy work'
        ],
        affirmation: 'I flow with the rhythms of life and trust divine timing.',
        care_tips: 'Charge under full moon. Avoid prolonged sunlight exposure. Handle gently as it can scratch.'
    },
    {
        name: 'Hematite',
        emoji: '⚙️',
        color: ['Metallic Gray', 'Black'],
        chakra: ['Root'],
        element: 'Earth',
        zodiac: ['Aries', 'Aquarius'],
        mohs_hardness: '5.5-6.5',
        intentions: ['Grounding', 'Protection', 'Courage'],
        properties: 'A powerful grounding stone. Hematite connects you deeply to the Earth, strengthens boundaries, and creates a reflective shield that returns negative energy to sender.',
        metaphysical: 'Grounds and protects, strengthens connection to Earth, dissolves negativity, enhances willpower, and boosts self-esteem.',
        physical_healing: 'Supports blood disorders, aids iron absorption, improves circulation, and eases leg cramps.',
        emotional_healing: 'Calms anxiety, improves focus, enhances memory, and promotes courage.',
        cleansing: ['Smudging', 'Sound'],
        charging: ['Earth connection', 'Sunlight'],
        uses: [
            'Hold during meditation for grounding',
            'Place on root chakra for stability',
            'Carry to stay centered',
            'Wear to deflect negative energy',
            'Use in protection grids'
        ],
        affirmation: 'I am grounded, protected, and connected to the Earth.',
        care_tips: 'Can rust with water - use dry cleansing only. Magnetic hematite is man-made.'
    },
    {
        name: 'Lapis Lazuli',
        emoji: '💙',
        color: ['Deep Blue', 'Gold Flecks'],
        chakra: ['Throat', 'Third Eye'],
        element: 'Water',
        zodiac: ['Sagittarius', 'Libra'],
        mohs_hardness: '5-5.5',
        intentions: ['Intuition', 'Courage', 'Protection'],
        properties: 'The stone of total awareness and truth. Lapis Lazuli activates the higher mind, enhances intellectual ability, and stimulates the desire for knowledge. Sacred to ancient Egyptians.',
        metaphysical: 'Enhances psychic abilities, reveals inner truth, encourages self-awareness, protects from psychic attack, and promotes enlightenment.',
        physical_healing: 'Alleviates insomnia, helps with throat issues, reduces blood pressure, and aids nervous system.',
        emotional_healing: 'Releases stress, brings deep peace, encourages honest communication, and alleviates depression.',
        cleansing: ['Moonlight', 'Smudging'],
        charging: ['Moonlight'],
        uses: [
            'Place on third eye for meditation',
            'wear for truthful communication',
            'Use in dream work',
            'Place on altar for wisdom',
            'Carry for psychic protection'
        ],
        affirmation: 'I speak my truth with clarity and confidence.',
        care_tips: 'Avoid water and harsh chemicals. Soft stone - protect from scratches.'
    },
    {
        name: 'Green Aventurine',
        emoji: '🍀',
        color: ['Green'],
        chakra: ['Heart'],
        element: 'Earth',
        zodiac: ['Aries', 'Leo'],
        mohs_hardness: '6.5-7',
        intentions: ['Abundance', 'Love', 'Healing'],
        properties: 'The stone of opportunity and luck. Green Aventurine attracts prosperity, diffuses negative situations, and comforts in times of transition. Known as the gambler\'s stone.',
        metaphysical: 'Attracts luck and abundance, promotes compassion, encourages perseverance, stabilizes one\'s state of mind, and stimulates perception.',
        physical_healing: 'Supports heart and circulatory system, boosts metabolism, lowers cholesterol, and aids skin conditions.',
        emotional_healing: 'Calms anger and irritation, promotes well-being, and encourages emotional recovery.',
        cleansing: ['Water', 'Moonlight', 'Smudging'],
        charging: ['Moonlight', 'Earth burial'],
        uses: [
            'Carry when buying lottery tickets',
            'Place in wallet for prosperity',
            'Wear over heart for emotional healing',
            'Use in abundance rituals',
            'Meditate with for heart chakra opening'
        ],
        affirmation: 'I attract luck and abundance into my life.',
        care_tips: 'Safe to cleanse with water. Durable stone.'
    },
    {
        name: 'Obsidian',
        emoji: '🖤',
        color: ['Black', 'Brown', 'Rainbow'],
        chakra: ['Root'],
        element: 'Earth/Fire',
        zodiac: ['Scorpio', 'Sagittarius'],
        mohs_hardness: '5-5.5',
        intentions: ['Protection', 'Grounding', 'Purification'],
        properties: 'Volcanic glass formed from rapidly cooling lava. Obsidian is a powerful protective stone that shields against negativity and psychic attack. Helps you see your true self without delusion.',
        metaphysical: 'Forms protective shield, blocks psychic attack, removes energy blockages, reveals truth, and grounds spiritual energy.',
        physical_healing: 'Aids digestion, detoxifies, reduces pain, and improves circulation.',
        emotional_healing: 'Brings shadow self to light, promotes deep soul healing, releases trauma, and dissolves emotional blockages.',
        cleansing: ['Smudging', 'Sound'],
        charging: ['Earth connection', 'Moonlight'],
        uses: [
            'Use in shadow work meditation',
            'Place in home for protection',
            'Scrying with polished sphere',
            'Carry for psychic protection',
            'Use in root chakra healing'
        ],
        affirmation: 'I face my shadows with courage and emerge transformed.',
        care_tips: 'Glass-like and brittle - handle with care. Do not expose to water for extended periods.'
    },
    {
        name: 'Tiger\'s Eye',
        emoji: '🐯',
        color: ['Golden Brown', 'Red', 'Blue'],
        chakra: ['Solar Plexus', 'Sacral', 'Root'],
        element: 'Fire/Earth',
        zodiac: ['Capricorn', 'Leo'],
        mohs_hardness: '6.5-7',
        intentions: ['Courage', 'Protection', 'Abundance'],
        properties: 'A stone of protection and personal power. Tiger\'s Eye combines earth energy with sun energy for grounded optimism. Enhances confidence, willpower, and clear thinking.',
        metaphysical: 'Protects from curse or ill-wishing, grounds and centers, enhances psychic abilities, brings good luck, and increases wealth.',
        physical_healing: 'Aids eye health, strengthens bones, supports reproductive system, and slows metabolism.',
        emotional_healing: 'Balances yin-yang, releases fear, promotes mental clarity, and resolves dilemmas.',
        cleansing: ['Sunlight', 'Smudging'],
        charging: ['Sunlight'],
        uses: ['Carry for confidence',
            'Place in business for success',
            'Wear for protection',
            'Meditate with for grounding',
            'Use in manifestation work'
        ],
        affirmation: 'I am confident, powerful, and protected.',
        care_tips: 'Loves sunlight. Safe to cleanse with water. Chatoyancy (cat\'s eye effect) best viewed in light.'
    },
    {
        name: 'Amazonite',
        emoji: '🌊',
        color: ['Turquoise', 'Blue-Green'],
        chakra: ['Heart', 'Throat'],
        element: 'Water',
        zodiac: ['Virgo'],
        mohs_hardness: '6-6.5',
        intentions: ['Peace', 'Courage', 'Protection'],
        properties: 'The stone of courage and truth. Amazonite empowers you to search yourself and discover truth. Soothes the spirit and calms the soul. Filters electromagnetic smog.',
        metaphysical: 'Enhances loving communication, aligns physical and astral bodies, soothes trauma, alleviates worry, and protects from EMF.',
        physical_healing: 'Soothes muscle spasms, aids calcium absorption, and balances thyroid.',
        emotional_healing: 'Calms nervous system, alleviates worry, dispels negative energy, and soothes emotional trauma.',
        cleansing: ['Moonlight', 'Smudging'],
        charging: ['Moonlight', 'Running water (briefly)'],
        uses: [
            'Place by electronics for EMF protection',
            'Wear for truthful communication',
            'Meditate with to process trauma',
            'Carry for courage',
            'Use in throat chakra work'
        ],
        affirmation: 'I speak my truth from the heart with courage and clarity.',
        care_tips: 'Brief water exposure okay but avoid prolonged soaking. Soft stone - protect from scratches.'
    },
    {
        name: 'Garnet',
        emoji: '❤️',
        color: ['Deep Red', 'Pink', 'Green'],
        chakra: ['Root', 'Heart'],
        element: 'Fire',
        zodiac: ['Aquarius', 'Capricorn', 'Leo'],
        mohs_hardness: '6.5-7.5',
        intentions: ['Love', 'Courage', 'Protection'],
        properties: 'A stone of commitment and passion. Garnet revitalizes, purifies and balances energy. Inspires love and devotion, balances sex drive, and alleviates emotional disharmony.',
        metaphysical: 'Cleanses and energizes chakras, revitalizes energy, enhances passion, activates survival instinct, and protects from nightmares.',
        physical_healing: 'Regenerates body, stimulates metabolism, aids blood-related disorders, and supports spinal health.',
        emotional_healing: 'Inspires love and devotion, dissolves unproductive behavior, and brings serenity.',
        cleansing: ['Water', 'Moonlight', 'Smudging'],
        charging: ['Sunlight', 'Moonlight'],
        uses: [
            'Wear to inspire passion',
            'Place under pillow to prevent nightmares',
            'Carry for protection during travel',
            'Meditate with for energy boost',
            'Use in commitment and love rituals'
        ],
        affirmation: 'I am passionate, committed, and full of vital life force.',
        care_tips: 'Safe to cleanse with water. Durable stone. Red garnet most common but exists in many colors.'
    },
    {
        name: 'Fluorite',
        emoji: '🌈',
        color: ['Purple', 'Green', 'Blue', 'Rainbow'],
        chakra: ['Third Eye', 'Heart', 'Throat'],
        element: 'Air/Water',
        zodiac: ['Pisces', 'Capricorn'],
        mohs_hardness: '4',
        intentions: ['Intuition', 'Protection', 'Purification'],
        properties: 'The genius stone. Fluorite heightens mental abilities, cleanses and stabilizes the aura, and grounds excess energy. Protects from electromagnetic stress.',
        metaphysical: 'Enhances focus and concentration, cleanses aura, protects from psychic manipulation, aids spiritual awakening, and stabilizes energy.',
        physical_healing: 'Supports bone health, aids respiratory system, helps with infections, and strengthens teeth.',
        emotional_healing: 'Dispels mental confusion, brings order to chaos, and promotes unbiased reasoning.',
        cleansing: ['Smudging', 'Sound', 'Moonlight'],
        charging: ['Moonlight', 'Crystal cluster'],
        uses: [
            'Place on desk for focus and learning',
            'Meditate with for mental clarity',
            'Create grid for protection',
            'Carry during exams or tests',
            'Use in study or workspace'
        ],
        affirmation: 'My mind is clear, focused, and brilliantly capable.',
        care_tips: 'Avoid water and sunlight (can fade). Very soft - handle gently.'
    },
    {
        name: 'Turquoise',
        emoji: '💚',
        color: ['Blue', 'Green', 'Turquoise'],
        chakra: ['Throat', 'Third Eye', 'Heart'],
        element: 'Air/Water',
        zodiac: ['Scorpio', 'Sagittarius', 'Pisces'],
        mohs_hardness: '5-6',
        intentions: ['Protection', 'Healing', 'Peace'],
        properties: 'Sacred to many Native American cultures. Turquoise purifies and dispels negative energy. Master healer and protector. Enhances communication and brings good fortune.',
        metaphysical: 'Protects from harm, enhances communication, promotes spiritual attunement, dissolves negativity, and brings good luck.',
        physical_healing: 'Aids respiratory system, supports immune system, helps with migraines, and detoxifies.',
        emotional_healing: 'Stabilizes mood swings, relieves stress, and promotes inner calm.',
        cleansing: ['Smudging', 'Sound'],
        charging: ['Moonlight'],
        uses: [
            'Wear for protection',
            'Place on throat chakra for communication',
            'Carry for safe travel',
            'Give as gift for friendship',
            'Meditate with for spiritual connection'
        ],
        affirmation: 'I speak my truth clearly and am protected on my journey.',
        care_tips: 'Never use water or chemicals - very porous. Can change color with body chemistry. Often stabilized or imitation.'
    },
    {
        name: 'Sodalite',
        emoji: '💎',
        color: ['Blue', 'White Veins'],
        chakra: ['Throat', 'Third Eye'],
        element: 'Water/Air',
        zodiac: ['Sagittarius'],
        mohs_hardness: '5.5-6',
        intentions: ['Intuition', 'Peace', 'Courage'],
        properties: 'The stone of logic and truth. Sodalite encourages rational thought, objectivity, and verbalization of feelings. Calms panic attacks and enhances self-esteem.',
        metaphysical: 'Enhances third eye, deepens meditation, encourages truth, releases mental conditioning, and promotes intuition.',
        physical_healing: 'Balances metabolism, helps with throat issues, lowers blood pressure, and supports calcium absorption.',
        emotional_healing: 'Calms panic attacks, releases fears, enhances self-worth, and promotes emotional balance.',
        cleansing: ['Moonlight', 'Smudging'],
        charging: ['Moonlight'],
        uses: [
            'Place on third eye for meditation',
            'Wear for calm communication',
            'Keep in workspace for logical thinking',
            'Carry to overcome fear',
            'Use in throat chakra work'
        ],
        affirmation: 'I trust my intuition and speak my truth calmly.',
        care_tips: 'Avoid prolonged water exposure. Sometimes confused with lapis lazuli.'
    },
    {
        name: 'Malachite',
        emoji: '💚',
        color: ['Green', 'Banded Patterns'],
        chakra: ['Heart', 'Throat'],
        element: 'Earth',
        zodiac: ['Scorpio', 'Capricorn'],
        mohs_hardness: '3.5-4',
        intentions: ['Protection', 'Healing', 'Courage'],
        properties: 'Powerful protection stone. Malachite absorbs negative energies and pollutants. Encourages risk-taking and change, breaks unwanted ties, and draws out deep feelings.',
        metaphysical: 'Absorbs negative energy, clears electromagnetic pollution, guards against radiation, amplifies energies, and facilitates deep emotional healing.',
        physical_healing: 'Supports immune system, aids respiratory problems, helps tissue regeneration, and eases menstrual cramps.',
        emotional_healing: 'Releases inhibitions, draws out traumas, encourages taking responsibility, and heals heartbreak.',
        cleansing: ['Smudging', 'Sound'],
        charging: ['Earth connection'],
        uses: [
            'Place on heart for emotional healing',
            'Carry for protection',
            'Use in transformation rituals',
            'Meditate with to release trauma',
            'Place by electronics for EMF protection'
        ],
        affirmation: 'I release what no longer serves me and embrace transformation.',
        care_tips: 'TOXIC in raw form - only use polished. Never make elixirs. Avoid water. Very soft.'
    },
    {
        name: 'Pyrite',
        emoji: '✨',
        color: ['Gold', 'Metallic'],
        chakra: ['Solar Plexus'],
        element: 'Fire/Earth',
        zodiac: ['Leo'],
        mohs_hardness: '6-6.5',
        intentions: ['Abundance', 'Protection', 'Courage'],
        properties: 'Known as Fool\'s Gold. Pyrite attracts abundance and prosperity. Shields from negative energy, promotes positive outlook, and enhances willpower and confidence.',
        metaphysical: 'Attracts wealth, deflects harmful energies, stimulates intellect, enhances memory, and promotes action.',
        physical_healing: 'Supports respiratory system, improves circulation, aids digestion, and strengthens bones.',
        emotional_healing: 'Overcomes inertia, relieves anxiety, promotes confidence, and encourages leadership.',
        cleansing: ['Smudging', 'Sound'],
        charging: ['Sunlight'],
        uses: [
            'Place in office for success',
            'Carry in wallet for prosperity',
            'Use in manifestation grids',
            'Meditate with for confidence',
            'Display in workspace for ideas'
        ],
        affirmation: 'I attract abundance and prosperity flows to me effortlessly.',
        care_tips: 'Never use water - pyrite oxidizes and creates rust/sulfuric acid. Dry cleansing only.'
    },
    {
        name: 'Rhodonite',
        emoji: '🌺',
        color: ['Pink', 'Black Veins'],
        chakra: ['Heart', 'Root'],
        element: 'Fire/Earth',
        zodiac: ['Taurus'],
        mohs_hardness: '5.5-6.5',
        intentions: ['Love', 'Healing', 'Courage'],
        properties: 'The rescue stone. Rhodonite balances emotions and nurtures love. Excellent for emotional healing after trauma. Promotes forgiveness and releases toxic relationships.',
        metaphysical: 'Heals emotional shock, clears emotional wounds, stimulates heart chakra, supports self-love, and promotes forgiveness.',
        physical_healing: 'Supports heart health, aids fertility, helps with emphysema, and reduces inflammation.',
        emotional_healing: 'Processes emotional pain, heals co-dependency, releases resentment, and promotes self-worth.',
        cleansing: ['Moonlight', 'Smudging', 'Water'],
        charging: ['Moonlight', 'Rose quartz cluster'],
        uses: [
            'Place on heart after trauma',
            'Wear for emotional healing',
            'Meditate with for forgiveness work',
            'Carry during difficult times',
            'Use in self-love rituals'
        ],
        affirmation: 'I forgive, I heal, and I love myself unconditionally.',
        care_tips: 'Safe to cleanse with water. Durable stone.'
    },
    {
        name: 'Smoky Quartz',
        emoji: '💨',
        color: ['Brown', 'Gray', 'Black'],
        chakra: ['Root', 'Solar Plexus'],
        element: 'Earth',
        zodiac: ['Scorpio', 'Capricorn'],
        mohs_hardness: '7',
        intentions: ['Grounding', 'Protection', 'Purification'],
        properties: 'A powerful grounding stone. Smoky Quartz gently neutralizes negative vibrations and detoxifies on all levels. Relieves stress and anxiety.',
        metaphysical: 'Grounds spiritual energy, protects from negative energies, aids manifestation, releases fear, and transmutes negative energy.',
        physical_healing: 'Aids absorption of minerals, strengthens adrenals, supports reproductive system, and relieves pain.',
        emotional_healing: 'Lifts depression, relieves stress, promotes tolerance, and releases negative emotions.',
        cleansing: ['Water', 'Moonlight', 'Smudging'],
        charging: ['Earth burial', 'Sunlight'],
        uses: [
            'Hold during meditation for grounding',
            'Place in corners of home for protection',
            'Carry to absorb negative energy',
            'Use in root chakra healing',
            'Meditate with to release anxiety'
        ],
        affirmation: 'I release negativity and ground myself in the present moment.',
        care_tips: 'Very durable. Safe for water. Color from natural irradiation - don\'t confuse with dyed clear quartz.'
    },
    {
        name: 'Aquamarine',
        emoji: '🌊',
        color: ['Blue', 'Blue-Green'],
        chakra: ['Throat', 'Heart'],
        element: 'Water',
        zodiac: ['Aries', 'Gemini', 'Pisces'],
        mohs_hardness: '7.5-8',
        intentions: ['Peace', 'Courage', 'Protection'],
        properties: 'Stone of courage and the sea. Aquamarine calms the mind, reduces stress, and quiets the mind. Clarifies perception, sharpens intellect, and clears confusion.',
        metaphysical: 'Shields aura, aligns chakras, promotes tolerance, invokes high states of consciousness, and protects travelers.',
        physical_healing: 'Soothes sore throat, supports thyroid, aids eyes, and boosts immune system.',
        emotional_healing: 'Calms fears, reduces stress, brings peace, and promotes self-expression.',
        cleansing: ['Water', 'Moonlight', 'Smudging'],
        charging: ['Moonlight', 'Sea water (natural if possible)'],
        uses: [
            'Wear for calm communication',
            'Carry during travel (especially by water)',
            'Meditate with for inner peace',
            'Place on throat chakra',
            'Use in calming rituals'
        ],
        affirmation: 'I speak and live my truth with courage and clarity.',
        care_tips: 'Very durable. Safe for water (sacred connection to ocean). Can fade in sunlight.'
    },
    {
        name: 'Blue Lace Agate',
        emoji: '🩵',
        color: ['Light Blue', 'White'],
        chakra: ['Throat'],
        element: 'Air',
        zodiac: ['Gemini', 'Pisces'],
        mohs_hardness: '6.5-7',
        intentions: ['Communication', 'Calm', 'Peace'],
        properties: 'A gentle, nurturing stone with soft blue and white banding. Blue Lace Agate promotes calm, clear communication and soothes an overactive mind. Ideal for those who struggle to express feelings or truth.',
        metaphysical: 'Opens and activates the throat chakra. Enhances angelic communication, inspires loyalty, and assists in breaking repressive patterns. Brings peaceful stillness to the mind.',
        physical_healing: 'Supports throat, thyroid, and lymphatic system. May help with arthritis and bone-related issues.',
        emotional_healing: 'Dissolves old patterns of suppression. Eases anxiety, calms nerves, and nurtures confidence in self-expression.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Moonlight', 'Breath intention'],
        uses: [
            'Hold during difficult conversations',
            'Wear as necklace to activate throat chakra',
            'Place in workspace to ease communication',
            'Meditate with for inner calm',
            'Gift to those who feel unheard'
        ],
        affirmation: 'I speak my truth with clarity, confidence, and compassion.',
        care_tips: 'Relatively durable. Avoid prolonged water exposure. Keep from harsh sunlight to preserve banding color.'
    },
    {
        name: 'Howlite',
        emoji: '🤍',
        color: ['White', 'Grey'],
        chakra: ['Crown', 'Third Eye'],
        element: 'Air',
        zodiac: ['Gemini', 'Virgo'],
        mohs_hardness: '3.5',
        intentions: ['Calm', 'Sleep', 'Patience'],
        properties: 'A calming stone with white and grey marbled patterning. Howlite stills the overactive mind, makes an excellent sleep companion, and teaches patience and perspective. Often dyed to resemble turquoise.',
        metaphysical: 'Attunes to higher spiritual consciousness, facilitates access to past lives, and teaches the art of stillness. Calms turbulent emotions before they escalate.',
        physical_healing: 'Balances calcium levels, strengthens bones and teeth. May ease insomnia and stress-related tension.',
        emotional_healing: 'Reduces rage, selfish tendencies, and critical behavior. Encourages emotional expressiveness in a gentle way.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Moonlight', 'Visualization'],
        uses: [
            'Place under pillow for restful sleep',
            'Carry to temper anger and impatience',
            'Use in meditation for mental stillness',
            'Hold during stressful situations',
            'Place on crown chakra for higher connection'
        ],
        affirmation: 'I am patient, peaceful, and open to higher wisdom.',
        care_tips: 'Soft stone — handle with care. Avoid water (water-soluble minerals). Keep away from sunlight and harsh chemicals.'
    },
    {
        name: 'Lepidolite',
        emoji: '💜',
        color: ['Purple', 'Pink', 'Lavender'],
        chakra: ['Heart', 'Third Eye', 'Crown'],
        element: 'Water',
        zodiac: ['Libra', 'Pisces'],
        mohs_hardness: '2.5-3',
        intentions: ['Anxiety', 'Transition', 'Emotional Balance'],
        properties: 'A lilac to pale violet mica mineral containing lithium — the same element used in mood stabilizers. Lepidolite is the supreme stone for emotional balance, bringing deep calm during times of stress, anxiety, and major life change.',
        metaphysical: 'Clears electromagnetic pollution. Opens, activates, and clears the heart and third eye. Assists in major life transitions and helps release old behavioral patterns.',
        physical_healing: 'Supports the nervous system, may ease mood disorders. Helps with sleep disorders and exhaustion.',
        emotional_healing: 'Dissipates negativity, relieves exhaustion, and halts obsessive thoughts. A powerful ally for anxiety and depression.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Moonlight', 'Amethyst cluster'],
        uses: [
            'Hold during anxiety or panic attacks',
            'Place on nightstand to prevent insomnia',
            'Carry through major life transitions',
            'Use in grief rituals',
            'Meditate with to release old patterns'
        ],
        affirmation: 'I release what no longer serves me and trust in peaceful change.',
        care_tips: 'Very soft and fragile — avoid tumbling. Keep dry; sensitive to water. Handle gently to preserve mica layers.'
    },
    {
        name: 'Sunstone',
        emoji: '🌞',
        color: ['Orange', 'Gold', 'Red'],
        chakra: ['Sacral', 'Solar Plexus'],
        element: 'Fire',
        zodiac: ['Leo', 'Libra', 'Aries'],
        mohs_hardness: '6-6.5',
        intentions: ['Joy', 'Abundance', 'Confidence'],
        properties: 'Shimmering with copper-colored inclusions (aventurescence), Sunstone radiates warmth and joy. It carries the energy of Ra, the sun god, restoring life force and sweetness to those in need of optimism and energy.',
        metaphysical: 'Encourages personal power, independence, and originality. Dispels fear and stress, instills good nature, and raises enthusiasm. Linked to luck and good fortune.',
        physical_healing: 'Energizes the entire body, lifts SAD symptoms, supports metabolism and digestion.',
        emotional_healing: 'Transforms negative emotions, removes co-dependent tendencies, and brings joy to the wearer. Excellent for seasonal depression.',
        cleansing: ['Sunlight', 'Smudging', 'Sound'],
        charging: ['Sunlight', 'Candle flame (nearby)'],
        uses: [
            'Carry to invite optimism and good luck',
            'Wear during public speaking for confidence',
            'Use in abundance rituals',
            'Place on altar during solar celebrations',
            'Gift to someone feeling stuck or sad'
        ],
        affirmation: 'I radiate joy, warmth, and confidence in all that I do.',
        care_tips: 'Durable stone. Sunlight is ideal for charging. Cleanse with warm water — avoid harsh chemicals.'
    },
    {
        name: 'Red Jasper',
        emoji: '🔴',
        color: ['Red', 'Brick Red'],
        chakra: ['Root', 'Sacral'],
        element: 'Fire',
        zodiac: ['Aries', 'Scorpio', 'Taurus'],
        mohs_hardness: '6.5-7',
        intentions: ['Grounding', 'Strength', 'Vitality'],
        properties: 'A deep brick-red stone of endurance and vitality. Red Jasper provides a steady, grounding energy that activates survival instincts and reconnects you to the nurturing power of the earth. Known as the "Stone of Endurance."',
        metaphysical: 'Stimulates the life force, activates the base chakra, and strengthens one\'s connection to the earth. Excellent for shamanic journeying and protective dreamwork.',
        physical_healing: 'Supports circulatory system, blood, and detoxification. Boosts stamina and physical energy.',
        emotional_healing: 'Brings courage, determination, and emotional stability. Helps set boundaries and resist manipulation.',
        cleansing: ['Smudging', 'Earth burial', 'Running water'],
        charging: ['Sunlight', 'Earth burial', 'Drumming'],
        uses: [
            'Carry for stamina during physical exertion',
            'Use in root chakra meditations',
            'Place at home foundation for protection',
            'Hold when facing challenges requiring courage',
            'Use in Mars or fire rituals'
        ],
        affirmation: 'I am grounded, strong, and fully alive in my body.',
        care_tips: 'Very durable. Safe for water and sunlight. An excellent daily carry stone.'
    },
    {
        name: 'Orange Calcite',
        emoji: '🟠',
        color: ['Orange', 'Peach'],
        chakra: ['Sacral', 'Solar Plexus'],
        element: 'Fire',
        zodiac: ['Cancer', 'Leo'],
        mohs_hardness: '3',
        intentions: ['Creativity', 'Sexuality', 'Motivation'],
        properties: 'A warm, energizing stone that stimulates the sacral chakra and rekindles motivation and creative flow. Orange Calcite is a powerful amplifier and cleanser of stagnant energy, bringing optimism, joy, and playful curiosity.',
        metaphysical: 'Integrates spiritual realm with creative energy. Removes obstacles from one\'s path, overcomes depression, and maximizes potential. Highly amplifying.',
        physical_healing: 'Supports reproductive system, kidneys, and bladder. May ease fatigue and seasonal blues.',
        emotional_healing: 'Dissolves problems, maximizes potential, and overcomes creative blocks. Rekindles enthusiasm and playfulness.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Sunlight', 'Candle flame (nearby)'],
        uses: [
            'Place on desk for creative inspiration',
            'Hold during journaling or art-making',
            'Use in sacral chakra meditation',
            'Carry to spark motivation',
            'Add to abundance grids'
        ],
        affirmation: 'My creativity flows freely and abundantly in all areas of my life.',
        care_tips: 'Soft and sensitive — handle gently. Avoid water (will dissolve over time). May fade in direct sunlight.'
    },
    {
        name: 'Celestite',
        emoji: '🌌',
        color: ['Blue', 'Light Blue', 'White'],
        chakra: ['Throat', 'Third Eye', 'Crown'],
        element: 'Air',
        zodiac: ['Gemini', 'Libra'],
        mohs_hardness: '3-3.5',
        intentions: ['Angelic Connection', 'Dreams', 'Peace'],
        properties: 'Delicate blue crystal clusters associated with the heavens and angelic realms. Celestite carries a soft, gentle, uplifting energy that promotes peace, higher consciousness, and clear communication with spirit guides and angels.',
        metaphysical: 'Elevates spiritual awareness, aids astral travel, and sharpens intuition. Creates a direct line to angelic guidance and divine wisdom. Excellent for dreamwork.',
        physical_healing: 'Eases stress-related disorders, supports eyes and ears, and may relieve muscle tension and anxiety.',
        emotional_healing: 'Dissolves pain, fear, and anxiety. Brings deep peace and a sense of divine protection.',
        cleansing: ['Moonlight', 'Sound', 'Visualization'],
        charging: ['Moonlight', 'Clear Quartz proximity'],
        uses: [
            'Place in bedroom for peaceful dreams',
            'Use in meditation for angelic communication',
            'Set on altar during spiritual ceremonies',
            'Keep in sacred space to raise vibration',
            'Hold when journaling intuitive messages'
        ],
        affirmation: 'I am surrounded by divine light and guided by angelic wisdom.',
        care_tips: 'Very fragile — do not tumble. Sensitive to water and sunlight. Keep away from high-traffic areas. Dust with soft brush only.'
    },
    {
        name: 'Shungite',
        emoji: '🖤',
        color: ['Black'],
        chakra: ['Root', 'Earth Star'],
        element: 'Earth',
        zodiac: ['Scorpio', 'Capricorn'],
        mohs_hardness: '3.5-4',
        intentions: ['EMF Protection', 'Grounding', 'Purification'],
        properties: 'An ancient, carbon-rich mineral from Russia that is unique in its molecular structure containing fullerenes. Shungite is believed to neutralize EMF radiation, purify water, and provide powerful grounding and protective energy.',
        metaphysical: 'One of the most powerful protective stones. Grounds spiritual energy into physical reality, cleanses the aura, and shields from negative energies including electromagnetic fields.',
        physical_healing: 'Historically used to purify water. May support immune function, ease inflammation, and aid detoxification.',
        emotional_healing: 'Provides deep sense of security and calm. Banishes fear and replaces with steady, grounded presence.',
        cleansing: ['Running water (brief)', 'Sunlight', 'Smudging'],
        charging: ['Sunlight', 'Earth burial'],
        uses: [
            'Place near computers and WiFi routers',
            'Carry for EMF protection while traveling',
            'Use in grid around bedroom',
            'Hold during root chakra meditation',
            'Add to water (only raw Elite shungite) for purification'
        ],
        affirmation: 'I am grounded, protected, and clear of all harmful energies.',
        care_tips: 'Avoid extended water exposure — will leave black residue. Wipe clean with dry cloth. Elite shungite is more fragile than regular.'
    },
    {
        name: 'Kyanite',
        emoji: '💙',
        color: ['Blue', 'Black', 'Green'],
        chakra: ['Throat', 'Third Eye', 'All Chakras'],
        element: 'Air',
        zodiac: ['Aries', 'Taurus', 'Libra'],
        mohs_hardness: '5.5-7',
        intentions: ['Alignment', 'Psychic Ability', 'Communication'],
        properties: 'One of only two minerals that never needs cleansing (the other is citrine). Kyanite instantly aligns all chakras and subtle bodies, transmits and amplifies high frequency energies, and does not accumulate negative energy.',
        metaphysical: 'Bridges blockages between the physical and spiritual worlds. Encourages speaking one\'s truth, cuts through ignorance, and opens the mind to new ideas and spiritual gifts.',
        physical_healing: 'Supports the throat, thyroid, and brain. May aid motor-related disorders and muscular coordination.',
        emotional_healing: 'Dispels anger, frustration, and confusion. Facilitates calm, logical thought and honest communication.',
        cleansing: ['Does not require cleansing', 'Moonlight (optional)'],
        charging: ['Moonlight', 'Meditation'],
        uses: [
            'Sweep over body to align chakras',
            'Place under pillow for lucid dreaming',
            'Hold during meditation for psychic clarity',
            'Use in layouts to bridge energy gaps',
            'Carry for honest, effective communication'
        ],
        affirmation: 'All my energy centers are aligned, clear, and flowing freely.',
        care_tips: 'Never needs cleansing. Avoid water — can weaken the stone. Handle gently; blades can be fragile along cleavage planes.'
    },
    {
        name: 'Peridot',
        emoji: '💚',
        color: ['Green', 'Olive Green', 'Yellow-Green'],
        chakra: ['Heart', 'Solar Plexus'],
        element: 'Earth',
        zodiac: ['Leo', 'Virgo', 'Scorpio', 'Sagittarius'],
        mohs_hardness: '6.5-7',
        intentions: ['Abundance', 'Renewal', 'Release'],
        properties: 'One of only two gems (the other being diamond) formed not in the earth\'s crust but in molten rock of the upper mantle. Peridot carries powerful transformative energy — releasing old wounds, inviting abundance, and aligning with one\'s highest path.',
        metaphysical: 'A visionary stone that helps understand one\'s destiny and spiritual purpose. Opens, cleanses, and activates the heart, creating a warm, caring energy toward others.',
        physical_healing: 'Supports digestion, liver, and spleen. May strengthen metabolism and adrenal glands.',
        emotional_healing: 'Releases guilt, obsession, and old wounds. Teaches how to detach from people and patterns no longer serving growth.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Sunlight', 'Earth burial'],
        uses: [
            'Carry for abundance and prosperity',
            'Use in new moon manifestation rituals',
            'Hold during shadow work to release the past',
            'Wear to attract positive relationships',
            'Add to heart chakra crystal layouts'
        ],
        affirmation: 'I release the past with grace and welcome abundance in all its forms.',
        care_tips: 'Moderately durable. Avoid household acids and prolonged sunlight. Safe for brief water cleansing.'
    },
    {
        name: 'Bloodstone',
        emoji: '🟢',
        color: ['Dark Green', 'Red'],
        chakra: ['Root', 'Heart', 'Sacral'],
        element: 'Earth',
        zodiac: ['Aries', 'Pisces', 'Libra'],
        mohs_hardness: '6.5-7',
        intentions: ['Courage', 'Vitality', 'Protection'],
        properties: 'Dark green with red flecks of iron oxide, resembling drops of blood. Bloodstone (also called Heliotrope) has been used for centuries as a warrior\'s stone of courage, strength, and protection. It grounds and revitalizes.',
        metaphysical: 'Mystically endowed with calming and protective properties. Encourages selflessness and idealism. Protects against bullying, supports those who cannot speak out, and removes energy blocks.',
        physical_healing: 'Powerfully supports the blood, circulation, and detoxification. May help with anemia and blood disorders.',
        emotional_healing: 'Imparts courage and strength in difficult times. Calms in the face of danger, fear, or hostility.',
        cleansing: ['Earth burial', 'Running water', 'Smudging'],
        charging: ['Sunlight', 'Earth burial'],
        uses: [
            'Carry for courage and protection',
            'Use in Mars or warrior rituals',
            'Place on root chakra to ground',
            'Keep in office to combat stress',
            'Hold during difficult confrontations'
        ],
        affirmation: 'I face challenges with courage and my energy is vital and strong.',
        care_tips: 'Durable and great for everyday carry. Safe for water. Avoid prolonged direct sunlight to preserve color.'
    },
    {
        name: 'Unakite',
        emoji: '🌿',
        color: ['Green', 'Pink', 'Orange'],
        chakra: ['Heart', 'Third Eye'],
        element: 'Earth',
        zodiac: ['Scorpio', 'Capricorn'],
        mohs_hardness: '6-7',
        intentions: ['Emotional Healing', 'Balance', 'Rebirth'],
        properties: 'A unique pink and green composite stone made of epidote, pink feldspar, and quartz. Unakite integrates spiritual and emotional bodies, bringing them into balance. Excellent for long-term recovery and healing on all levels.',
        metaphysical: 'Facilitates the re-birthing process. Helps release conditions that inhibit spiritual growth and brings repressed emotions to the surface for transformation. Supports past-life work.',
        physical_healing: 'Supports healthy pregnancy and fetal development. Aids recovery from major illness.',
        emotional_healing: 'Gently releases deep-seated emotional wounds from childhood or past lives. Promotes patience and persistence.',
        cleansing: ['Earth burial', 'Smudging', 'Sound'],
        charging: ['Sunlight', 'Moonlight', 'Earth'],
        uses: [
            'Hold during therapy or inner child work',
            'Carry during long healing journeys',
            'Place on heart chakra for emotional release',
            'Use in rebirth or renewal rituals',
            'Gift to those in recovery'
        ],
        affirmation: 'I heal gently and completely, integrating all parts of myself.',
        care_tips: 'Durable. Safe for brief water exposure. Avoid prolonged sun exposure — pink feldspar may fade slightly.'
    },
    {
        name: 'Chrysocolla',
        emoji: '🩵',
        color: ['Blue', 'Blue-Green', 'Turquoise'],
        chakra: ['Throat', 'Heart', 'Root'],
        element: 'Water',
        zodiac: ['Taurus', 'Gemini', 'Virgo'],
        mohs_hardness: '2.5-3.5',
        intentions: ['Communication', 'Goddess Energy', 'Compassion'],
        properties: 'A rich blue-green silicate mineral associated with the Divine Feminine. Chrysocolla draws off negative energies and calms and cleanses the emotional field. It is the stone of the Goddess — empowering women and inspiring expression.',
        metaphysical: 'Instills patience and allows truth and inner wisdom to surface. Encourages self-awareness and inner balance. Helps men get in touch with feminine aspects and emotional intelligence.',
        physical_healing: 'Supports the thyroid, throat, and blood pressure. Soothing for menstrual pain.',
        emotional_healing: 'Eases guilt, phobias, and deep emotional trauma. Draws out negative emotions and brings in stillness and calm.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Moonlight', 'Earth burial'],
        uses: [
            'Hold during difficult negotiations',
            'Wear to channel goddess wisdom',
            'Place on throat chakra for truth-speaking',
            'Use in lunar rituals',
            'Keep near during emotional conversations'
        ],
        affirmation: 'My voice is sacred. I speak with wisdom, compassion, and truth.',
        care_tips: 'Very soft and fragile — handle with care. Never expose to water. Avoid chemicals and rough surfaces.'
    },
    {
        name: 'Prehnite',
        emoji: '🍏',
        color: ['Pale Green', 'Yellow-Green'],
        chakra: ['Heart', 'Solar Plexus'],
        element: 'Earth',
        zodiac: ['Libra', 'Capricorn'],
        mohs_hardness: '6-6.5',
        intentions: ['Prophecy', 'Inner Peace', 'Organization'],
        properties: 'A soft, translucent pale green stone that "heals the healer." Prehnite enhances precognition and inner knowing, encourages unconditional love, and is the stone of prophecy. It helps one declutter both physical and mental space.',
        metaphysical: 'Connects to the archangel Raphael and divine beings. Seals the auric field and brings inner peace. Teaches how to be in harmony with nature and the elemental forces.',
        physical_healing: 'Supports kidneys, bladder, and shoulders. May help with gout and blood disorders.',
        emotional_healing: 'Helps those who hoard objects or emotions. Promotes letting go of obsessions and past wounds.',
        cleansing: ['Moonlight', 'Smudging', 'Earth burial'],
        charging: ['Moonlight', 'Nature placement'],
        uses: [
            'Use in prophecy or divination work',
            'Place on altar to enhance spiritual connection',
            'Carry for emotional decluttering',
            'Use in layouts for healers (place on solar plexus)',
            'Keep in meditation space for inner knowing'
        ],
        affirmation: 'I trust my inner knowing and align with divine guidance.',
        care_tips: 'Moderately durable. Avoid harsh chemicals. Safe for brief water exposure. Keep from extreme temperatures.'
    },
    {
        name: 'Iolite',
        emoji: '🔵',
        color: ['Blue', 'Violet', 'Purple-Blue'],
        chakra: ['Third Eye', 'Crown', 'Throat'],
        element: 'Air',
        zodiac: ['Libra', 'Sagittarius', 'Taurus'],
        mohs_hardness: '7-7.5',
        intentions: ['Intuition', 'Vision', 'Inner Journey'],
        properties: 'Known as the "Viking\'s Compass," iolite (water sapphire) was used by Norse navigators to find the sun on overcast days. A powerful stone of vision and inner guidance that activates the third eye and connects to higher mind.',
        metaphysical: 'Awakens psychic abilities and expands inner vision. Helps one take responsibility for oneself and overcome codependency. Guides shamanic journeys.',
        physical_healing: 'Supports liver detoxification, migraines, and fatty deposits. May aid those healing from addiction.',
        emotional_healing: 'Releases discord in relationships. Encourages taking ownership of one\'s path and choices.',
        cleansing: ['Moonlight', 'Sound', 'Smudging'],
        charging: ['Moonlight', 'Starlight'],
        uses: [
            'Use during meditation for inner visions',
            'Carry for navigating life transitions',
            'Place on third eye in layouts',
            'Work with in shamanic journeying',
            'Use for addiction recovery support'
        ],
        affirmation: 'I trust my inner compass and navigate my path with clarity.',
        care_tips: 'Durable and safe for most cleansing methods. Avoid harsh chemicals. Brief water exposure is fine.'
    },
    {
        name: 'Larimar',
        emoji: '🌊',
        color: ['Blue', 'White', 'Turquoise'],
        chakra: ['Throat', 'Heart', 'Third Eye', 'Crown'],
        element: 'Water',
        zodiac: ['Leo', 'Pisces'],
        mohs_hardness: '4.5-5',
        intentions: ['Goddess Energy', 'Communication', 'Tranquility'],
        properties: 'Found only in the Dominican Republic, Larimar is the stone of the Caribbean Sea — its swirling blue and white patterns mirror the ocean\'s surface. A rare gift of the earth that carries the energy of the ancient Atlantean legends and the Divine Feminine.',
        metaphysical: 'Removes self-imposed blockages and dissolves self-sabotaging behavior. Connects to earth and sea goddesses. Facilitates deep meditation and opens pathways to the angelic realm.',
        physical_healing: 'Supports throat, fever reduction, and cartilage. Excellent for stress-related disorders.',
        emotional_healing: 'Brings the calm of the sea to turbulent emotions. Heals trauma, releases deep grief, and restores equilibrium.',
        cleansing: ['Moonlight', 'Sound', 'Breath'],
        charging: ['Sunlight (brief)', 'Ocean water (natural)', 'Moonlight'],
        uses: [
            'Meditate with for deep inner peace',
            'Hold during grief or emotional pain',
            'Use in goddess rituals and sea magic',
            'Wear to embody the Divine Feminine',
            'Place near water features or on altars'
        ],
        affirmation: 'I am as calm, deep, and infinite as the ocean.',
        care_tips: 'Somewhat soft — avoid scratching. Brief water exposure is fine but avoid long soaking. Store carefully to prevent chipping.'
    },
    {
        name: 'Charoite',
        emoji: '💜',
        color: ['Purple', 'Violet', 'Lavender'],
        chakra: ['Third Eye', 'Crown', 'Heart'],
        element: 'Wind',
        zodiac: ['Sagittarius', 'Scorpio'],
        mohs_hardness: '5-6',
        intentions: ['Transformation', 'Spiritual Sight', 'Service'],
        properties: 'Found only in the Chara River region of Siberia, Charoite is an exceptionally rare stone of spiritual transformation. Its swirling violet patterns are unmistakable. It transmutes negative energy and helps one perceive life as a path of service.',
        metaphysical: 'Opens the heart to unconditional love. Overcomes fear and offers deep transformation at the soul level. Integrates the spiritual and material worlds. Excellent for healers.',
        physical_healing: 'Supports nervous system, heart, liver, and pancreas. May ease bipolar disorders and autism symptoms.',
        emotional_healing: 'Overcomes deep-rooted fears and compulsions. Converts disease into wellness, dis-ease into ease.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Moonlight', 'Amethyst cluster proximity'],
        uses: [
            'Meditate with for spiritual transformation',
            'Place on crown during deep healing sessions',
            'Carry during life-altering transitions',
            'Use in service-oriented intentions and rituals',
            'Keep on altar as a focus stone for healers'
        ],
        affirmation: 'I embrace transformation and serve the world with an open heart.',
        care_tips: 'Moderate hardness. Avoid water exposure. Store separately to prevent scratching. Handle gently.'
    },
    {
        name: 'Snowflake Obsidian',
        emoji: '🖤',
        color: ['Black', 'White'],
        chakra: ['Root', 'Third Eye'],
        element: 'Earth',
        zodiac: ['Capricorn', 'Virgo'],
        mohs_hardness: '5-5.5',
        intentions: ['Purity', 'Balance', 'Surrender'],
        properties: 'Black volcanic glass with white phenocryst inclusions that form snowflake-like patterns. Snowflake Obsidian teaches the value of mistakes and isolation. It helps recognize and release wrong thinking and stressful mental patterns.',
        metaphysical: 'Brings truths to the surface. Teaches that darkness and light are both needed to evolve. A stone of purity and balance, helping to connect with spirit world in a calm, centered way.',
        physical_healing: 'Eases muscle cramps, improves circulation, and supports detoxification through skin.',
        emotional_healing: 'Helps recognize and release wrong thinking and negative thought patterns. Brings equanimity in times of change.',
        cleansing: ['Smudging', 'Moonlight', 'Sound'],
        charging: ['Moonlight', 'Earth burial'],
        uses: [
            'Use in shadow work and self-reflection',
            'Carry to find peace amid chaos',
            'Place on root chakra to release fear',
            'Use in black/white moon ceremonies',
            'Hold during meditation on balance'
        ],
        affirmation: 'I embrace both my light and shadow with acceptance and grace.',
        care_tips: 'Can be sharp if fractured — handle carefully. Avoid water. Durable for everyday use when tumbled.'
    },
    {
        name: 'Apache Tears',
        emoji: '🖤',
        color: ['Black', 'Translucent Brown'],
        chakra: ['Root', 'Earth Star'],
        element: 'Earth',
        zodiac: ['Aries', 'Capricorn'],
        mohs_hardness: '5-5.5',
        intentions: ['Grief', 'Comfort', 'Protection'],
        properties: 'Small, rounded nodules of black obsidian glass. Legend says they are the frozen tears of Apache women who mourned warriors fallen in battle. Whoever carries an Apache Tear will never need to cry, for the stone cries for them.',
        metaphysical: 'Gently brings to light hidden emotional wounds for healing. Offers comfort in times of grief, and stimulates analytical capabilities and forgiveness.',
        physical_healing: 'Eases muscle spasms and detoxifies the body. Boosts immune system and vitamin absorption.',
        emotional_healing: 'A companion for grief and mourning. Provides comfort in deep sorrow without forcing the healing process.',
        cleansing: ['Smudging', 'Moonlight', 'Earth burial'],
        charging: ['Moonlight', 'Earth burial'],
        uses: [
            'Carry during grief and bereavement',
            'Hold during emotional release rituals',
            'Gift to those in mourning',
            'Use in ancestor honoring ceremonies',
            'Keep at root chakra during grief meditation'
        ],
        affirmation: 'I allow myself to grieve and trust that healing comes in its own time.',
        care_tips: 'Fragile if thin. Avoid water. Handle gently and store safely. Smudge regularly during use for grief work.'
    },
    {
        name: 'Blue Apatite',
        emoji: '🔵',
        color: ['Blue', 'Teal', 'Green-Blue'],
        chakra: ['Throat', 'Third Eye'],
        element: 'Air',
        zodiac: ['Gemini', 'Pisces'],
        mohs_hardness: '5',
        intentions: ['Manifestation', 'Communication', 'Motivation'],
        properties: 'A dual-action stone of manifestation and mental clarity. Blue Apatite clears away confusion, apathy, and negativity and opens the throat and third eye for clear communication and psychic ability. A powerful stone for achieving goals.',
        metaphysical: 'Stimulates the development of psychic gifts. Enhances creativity, intellect, and access to the akashic records. Facilitates deep meditation and creates a profound connection to past lives.',
        physical_healing: 'Supports bones, cartilage, teeth, and motor function. May help with arthritis and metabolic issues.',
        emotional_healing: 'Dissolves alienation, introversion, and grief. Releases blocked energy in the base chakra and restores momentum.',
        cleansing: ['Moonlight', 'Sound', 'Smudging'],
        charging: ['Moonlight', 'Visualization'],
        uses: [
            'Carry to enhance motivation and goal-setting',
            'Place on third eye during meditation',
            'Use in akashic records work',
            'Keep on desk for clarity during study or work',
            'Wear for psychic development'
        ],
        affirmation: 'My mind is clear, my purpose is focused, and my goals manifest with ease.',
        care_tips: 'Relatively soft — avoid scratching surfaces. Not safe for water. Store away from harder stones.'
    },
    {
        name: 'Pink Calcite',
        emoji: '🩷',
        color: ['Pink', 'Pale Pink'],
        chakra: ['Heart'],
        element: 'Water',
        zodiac: ['Cancer', 'Libra'],
        mohs_hardness: '3',
        intentions: ['Unconditional Love', 'Compassion', 'Self-Healing'],
        properties: 'Also called Mangano Calcite, this gentle pink stone resonates with the heart on the deepest level. It holds the energy of universal love, compassion, and forgiveness. Excellent for those healing from trauma, abuse, or grief.',
        metaphysical: 'Connects to angelic realms and guides. Amplifies loving energy and emotional release. Helps recognize love as one\'s highest purpose. Excellent for empaths.',
        physical_healing: 'Supports the heart, lungs, and nervous system. May ease anxiety-related physical symptoms.',
        emotional_healing: 'Releases past traumas stored in the heart. Teaches self-love, helps forgive self and others, and soothes emotional wounds.',
        cleansing: ['Moonlight', 'Sound', 'Rose incense'],
        charging: ['Moonlight', 'Rose Quartz proximity'],
        uses: [
            'Hold during self-love rituals',
            'Place on heart chakra for emotional healing',
            'Use in grief or trauma recovery work',
            'Keep near bed for gentle emotional healing during sleep',
            'Gift to those in need of comfort'
        ],
        affirmation: 'I am worthy of love. I forgive myself and others with compassion.',
        care_tips: 'Very soft — handle gently. Avoid water (will erode). Avoid harsh chemicals and direct sunlight.'
    },
    {
        name: 'Dalmatian Jasper',
        emoji: '🐾',
        color: ['White', 'Black Spots', 'Cream'],
        chakra: ['Root', 'Sacral'],
        element: 'Earth',
        zodiac: ['Virgo', 'Gemini'],
        mohs_hardness: '6.5-7',
        intentions: ['Joy', 'Playfulness', 'Loyalty'],
        properties: 'Cream-colored with black and brown spots of tourmaline — unmistakably reminiscent of a Dalmatian dog. This stone reconnects adults to their sense of play and wonder. It breaks down cynicism and helps one move forward with delight.',
        metaphysical: 'Protects against nightmares and negative thinking. Encourages loyalty and long-term partnerships. Helps ground spiritual energy into tangible reality.',
        physical_healing: 'Boosts immune system and reflexes. May support cartilage and muscular system.',
        emotional_healing: 'Dissolves cynicism and disillusionment. Reunites the inner child with the adult self. Inspires loyalty and commitment.',
        cleansing: ['Smudging', 'Running water', 'Earth burial'],
        charging: ['Sunlight', 'Earth burial'],
        uses: [
            'Carry to lighten serious moods',
            'Use in play therapy or inner child work',
            'Gift to overworked or stressed people',
            'Place in children\'s rooms for protection',
            'Use in pet blessing rituals'
        ],
        affirmation: 'I embrace joy, playfulness, and the wonder of each new day.',
        care_tips: 'Durable and great for everyday carry. Safe for water and sunlight. An excellent worry stone.'
    },
    {
        name: 'Moldavite',
        emoji: '🌿',
        color: ['Green', 'Dark Green', 'Forest Green'],
        chakra: ['Heart', 'Third Eye', 'Crown', 'All Chakras'],
        element: 'Storm',
        zodiac: ['Scorpio', 'All Signs'],
        mohs_hardness: '5.5-7',
        intentions: ['Transformation', 'Cosmic Connection', 'Acceleration'],
        properties: 'A rare tektite formed approximately 15 million years ago when a meteorite impact melted silica rock in what is now the Czech Republic. Moldavite is an extraterrestrial stone of rapid, intense transformation — not for the faint of heart.',
        metaphysical: 'Catalyzes spiritual awakening at an accelerated rate. Connects to higher dimensions and cosmic consciousness. Activates the dreamtime and facilitates channeling. Often triggers the "Moldavite Flush" — a surge of heat felt by sensitive users.',
        physical_healing: 'Supports the nervous system and accelerates healing. May help with chronic conditions but should be used with grounding stones.',
        emotional_healing: 'Releases attachment to what no longer serves. Rapid dissolution of limiting beliefs and patterns. Work slowly if sensitive.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Moonlight', 'Meditation', 'Sunlight (brief)'],
        uses: [
            'Hold for meditation on cosmic connection',
            'Use in transformation and rebirth rituals',
            'Pair with grounding stones (obsidian, hematite)',
            'Place on heart or third eye in layouts',
            'Work with during major life transitions'
        ],
        affirmation: 'I welcome rapid transformation and trust the universe\'s plan for my evolution.',
        care_tips: 'Fairly fragile — avoid dropping. Verify authenticity when purchasing (many fakes exist). Start with short meditation sessions if new to its energy. Always pair with grounding stones.'
    },
    {
        name: 'Seraphinite',
        emoji: '💚',
        color: ['Dark Green', 'Silver'],
        chakra: ['Heart', 'Crown', 'All Chakras'],
        element: 'Earth',
        zodiac: ['Sagittarius', 'Taurus'],
        mohs_hardness: '2-4',
        intentions: ['Angelic Contact', 'Healing', 'Spiritual Enlightenment'],
        properties: 'A deep forest green stone with silver feathery inclusions that resemble angel wings — named for the Seraphim, the highest order of angels. Seraphinite is a powerful stone of spiritual enlightenment and one of the finest healers.',
        metaphysical: 'Opens the crown chakra and creates a direct line to the angelic realm. Activates kundalini energy. One of the most powerful stones for working with the angelic hierarchy and for physical healing.',
        physical_healing: 'Works on a cellular level to bring healing. Particularly potent for heart, lungs, and nervous system.',
        emotional_healing: 'Promotes feelings of joy, love, and connection. Dissolves old emotional blockages and replaces them with higher vibrations.',
        cleansing: ['Moonlight', 'Sound', 'Smudging'],
        charging: ['Moonlight', 'Prayer/intention'],
        uses: [
            'Use in angelic communication meditation',
            'Place on heart chakra for deep healing',
            'Include in spiritual devotion practices',
            'Work with for kundalini or chakra activation',
            'Set on altar during healing ceremonies'
        ],
        affirmation: 'I am held in the wings of the angels and healed on every level.',
        care_tips: 'Soft and fragile — handle with great care. Avoid water and harsh chemicals. Store wrapped in cloth to prevent scratching.'
    },
    {
        name: 'Peacock Ore',
        emoji: '🦚',
        color: ['Blue', 'Purple', 'Gold', 'Green', 'Iridescent'],
        chakra: ['All Chakras'],
        element: 'Fire',
        zodiac: ['Capricorn', 'Aquarius'],
        mohs_hardness: '3-3.5',
        intentions: ['Joy', 'Happiness', 'Creativity'],
        properties: 'Also called Bornite or Chalcopyrite, Peacock Ore displays a stunning iridescent rainbow of blues, purples, and golds. It is considered the stone of happiness and is used to channel positive energy and ward off negativity.',
        metaphysical: 'Aligns all chakras simultaneously. Stimulates inner knowing, enhances intuition, and encourages discovery of new possibilities. Brings renewal and invites magic into everyday life.',
        physical_healing: 'Supports metabolism, regenerative processes, and adrenal glands.',
        emotional_healing: 'Infuses life with joy and wonder. Breaks cycles of negativity. Encourages seeing the rainbow in every storm.',
        cleansing: ['Moonlight', 'Smudging', 'Sound'],
        charging: ['Sunlight (brief)', 'Rainbow light', 'Moonlight'],
        uses: [
            'Place on altar for joy and celebration',
            'Hold to spark creativity and new ideas',
            'Use in rainbow chakra clearing layouts',
            'Gift to those needing joy and upliftment',
            'Use in rituals calling in magic and wonder'
        ],
        affirmation: 'I choose joy. My life is a rainbow of possibility and magic.',
        care_tips: 'Very soft and fragile — display rather than carry. The iridescence is from surface oxidation — avoid polishing or harsh cleansers. Dry display only.'
    },
    {
        name: 'Pietersite',
        emoji: '⚡',
        color: ['Blue', 'Gold', 'Red', 'Chatoyant'],
        chakra: ['Third Eye', 'Solar Plexus', 'Sacral'],
        element: 'Storm',
        zodiac: ['Leo', 'Aquarius'],
        mohs_hardness: '7',
        intentions: ['Transformation', 'Willpower', 'Psychic Vision'],
        properties: 'Known as the "Tempest Stone," Pietersite is a rare chatoyant stone found in Namibia and China, with swirling gold, blue, and red chatoyancy. A powerful catalyst for deep spiritual transformation and accessing higher states of consciousness.',
        metaphysical: 'Holds the keys to higher consciousness. Stimulates the third eye and pineal gland. Links to the akashic records, facilitates vision quests, and accelerates spiritual growth dramatically.',
        physical_healing: 'Supports nervous system, endocrine system, and pituitary gland. May help with hormonal imbalances.',
        emotional_healing: 'Dispels illusions about oneself. Brings up deep-seated fears for acknowledgment and release. Builds unshakeable personal willpower.',
        cleansing: ['Moonlight', 'Sound', 'Smudging'],
        charging: ['Sunlight', 'Storm energy', 'Visualization'],
        uses: [
            'Use in vision quest or trance work',
            'Meditate with for third eye activation',
            'Hold during storm or lightning for amplified energy',
            'Carry for strength of will and personal power',
            'Use in layouts for akashic records access'
        ],
        affirmation: 'I see clearly through all illusions. My will is aligned with my highest truth.',
        care_tips: 'Durable for everyday use. Safe for brief water exposure. The chatoyancy is best seen in direct light. Avoid harsh chemicals.'
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let filteredCrystals = [...CRYSTALS];
let myCollection = {
    owned: [],
    wishlist: [],
    notes: {}
};

// ========================================
// DOM ELEMENTS
// ========================================

const searchInput = document.getElementById('search-input');
const intentionFilter = document.getElementById('intention-filter');
const chakraFilter = document.getElementById('chakra-filter');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const crystalGrid = document.getElementById('crystal-grid');
const crystalCount = document.getElementById('crystal-count');
const ownedTab = document.getElementById('owned-tab');
const wishlistTab = document.getElementById('wishlist-tab');
const ownedCollection = document.getElementById('owned-collection');
const wishlistCollection = document.getElementById('wishlist-collection');

// ========================================
// CORE FUNCTIONS
// ========================================

/**
 * Filter and search crystals
 */
function filterCrystals() {
    const searchTerm = searchInput.value;
    
    // Apply search and filters using shared utilities
    filteredCrystals = filterAndSearch(
        CRYSTALS,
        searchTerm,
        [(item) => item.name, (item) => item.properties],
        {
            intention: intentionFilter.value,
            chakra: chakraFilter.value
        },
        {
            intention: (item) => item.intentions,
            chakra: (item) => item.chakra
        }
    );
    
    renderCrystals();
}

/**
 * Create a crystal card element
 */
function createCrystalCard(crystal) {
    const card = document.createElement('div');
    card.className = 'crystal-card';

    const isOwned = myCollection.owned.includes(crystal.name);
    const isWishlisted = myCollection.wishlist.includes(crystal.name);
    const savedNote = myCollection.notes[crystal.name] || '';
    
    card.innerHTML = `
        <div class="crystal-header">
            <div class="crystal-emoji">${crystal.emoji}</div>
            <h3>${crystal.name}</h3>
            <div class="collection-btns">
                <button class="collection-btn ${isOwned ? 'active' : ''}" 
                        data-crystal="${crystal.name}" 
                        data-type="owned" 
                        title="${isOwned ? 'Remove from collection' : 'Add to collection'}">
                    ♥
                </button>
                <button class="collection-btn ${isWishlisted ? 'active' : ''}" 
                        data-crystal="${crystal.name}" 
                        data-type="wishlist" 
                        title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">
                    ⭐
                </button>
            </div>
        </div>
        
        <div class="crystal-meta">
            <span class="meta-badge color">💧 ${crystal.color.join(', ')}</span>
            <span class="meta-badge chakra">🧘 ${crystal.chakra[0]}</span>
            <span class="meta-badge element">🌍 ${crystal.element}</span>
        </div>
        
        <div class="quick-info">
            <p><strong>Intentions:</strong> ${crystal.intentions.join(', ')}</p>
        </div>
        
        <p class="crystal-description">${crystal.properties}</p>
        
        <span class="expand-toggle">See Full Properties ▼</span>
        
        <div class="crystal-details">
            <div class="details-section">
                <h4>✨ Metaphysical Properties</h4>
                <p>${crystal.metaphysical}</p>
            </div>
            
            <div class="details-section">
                <h4>💚 Emotional Healing</h4>
                <p>${crystal.emotional_healing}</p>
            </div>
            
            <div class="details-section">
                <h4>🌿 Physical Healing</h4>
                <p>${crystal.physical_healing}</p>
            </div>
            
            <div class="details-section">
                <h4>🌙 Cleansing Methods</h4>
                <p>${crystal.cleansing.join(', ')}</p>
            </div>
            
            <div class="details-section">
                <h4>☀️ Charging Methods</h4>
                <p>${crystal.charging.join(', ')}</p>
            </div>
            
            <div class="details-section">
                <h4>🔮 How to Use</h4>
                <ul>
                    ${crystal.uses.map(use => `<li>${use}</li>`).join('')}
                </ul>
            </div>
            
            <div class="details-section full-width">
                <h4>💬 Affirmation</h4>
                <p class="affirmation">"${crystal.affirmation}"</p>
            </div>
            
            <div class="details-section full-width">
                <p><strong>Mohs Hardness:</strong> ${crystal.mohs_hardness} |
                   <strong>Zodiac:</strong> ${crystal.zodiac.join(', ')}</p>
                <p><strong>Care Tips:</strong> ${crystal.care_tips}</p>
            </div>

            ${isOwned ? `
            <div class="details-section full-width crystal-notes-section">
                <h4>📝 My Notes</h4>
                <textarea class="crystal-note-input"
                          placeholder="Add a personal note about this crystal (where you got it, how you use it, experiences...)"
                          aria-label="Personal notes for ${crystal.name}">${savedNote}</textarea>
            </div>
            ` : ''}
        </div>
    `;
    
    // Add click handler for expansion
    const toggle = card.querySelector('.expand-toggle');
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('expanded');
        toggle.textContent = card.classList.contains('expanded') ? 
            'Hide Details ▲' : 'See Full Properties ▼';
    });
    
    // Add collection button handlers
    const collectionBtns = card.querySelectorAll('.collection-btn');
    collectionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCollection(btn.dataset.crystal, btn.dataset.type);
        });
    });

    // Save notes on blur (auto-save, no button needed)
    const noteInput = card.querySelector('.crystal-note-input');
    if (noteInput) {
        noteInput.addEventListener('blur', () => {
            const text = noteInput.value.trim();
            if (text) {
                myCollection.notes[crystal.name] = text;
            } else {
                delete myCollection.notes[crystal.name];
            }
            saveCollection();
            renderCollection();
        });
        // Prevent card expand/collapse when clicking inside textarea
        noteInput.addEventListener('click', (e) => e.stopPropagation());
    }

    return card;
}

/**
 * Render crystal cards
 */
function renderCrystals() {
    crystalGrid.innerHTML = '';
    
    if (filteredCrystals.length === 0) {
        crystalGrid.innerHTML = '<p class="empty-message">No crystals match your search criteria.</p>';
        crystalCount.textContent = '0';
        return;
    }
    
    filteredCrystals.forEach(crystal => {
        const card = createCrystalCard(crystal);
        crystalGrid.appendChild(card);
    });
    
    crystalCount.textContent = filteredCrystals.length;
}

/**
 * Toggle crystal in collection
 */
function toggleCollection(crystalName, type) {
    const collection = type === 'owned' ? myCollection.owned : myCollection.wishlist;
    const index = collection.indexOf(crystalName);
    
    if (index > -1) {
        collection.splice(index, 1);
    } else {
        collection.push(crystalName);
    }
    
    saveCollection();
    renderCrystals();
    renderCollection();
}

/**
 * Render collection
 */
function renderCollection() {
    const activeTab = ownedTab.classList.contains('active') ? 'owned' : 'wishlist';
    const collection = myCollection[activeTab];
    const container = activeTab === 'owned' ? ownedCollection : wishlistCollection;
    
    container.innerHTML = '';
    
    if (collection.length === 0) {
        const message = activeTab === 'owned' ? 
            'No crystals in your collection yet. Click the ♥ on any crystal card to add it!' :
            'No crystals in your wish list yet. Click the ⭐ on any crystal card to add it!';
        container.innerHTML = `<p class="empty-message">${message}</p>`;
        return;
    }
    
    collection.forEach(crystalName => {
        const crystal = CRYSTALS.find(c => c.name === crystalName);
        if (crystal) {
            const note = myCollection.notes[crystalName];
            const miniCard = document.createElement('div');
            miniCard.className = 'mini-crystal-card';
            miniCard.innerHTML = `
                <span class="mini-crystal-emoji">${crystal.emoji}</span>
                <div class="mini-crystal-info">
                    <span class="mini-crystal-name">${crystal.name}</span>
                    ${note ? `<span class="mini-crystal-note">${note}</span>` : ''}
                </div>
                <button class="remove-btn" data-crystal="${crystal.name}" data-type="${activeTab}">✕</button>
            `;
            
            miniCard.querySelector('.remove-btn').addEventListener('click', (e) => {
                toggleCollection(crystal.name, activeTab);
            });
            
            container.appendChild(miniCard);
        }
    });
}

/**
 * Save collection to localStorage
 */
function saveCollection() {
    localStorage.setItem('mystical-path-crystal-collection', JSON.stringify(myCollection));
}

/**
 * Load collection from localStorage
 */
function loadCollection() {
    const saved = localStorage.getItem('mystical-path-crystal-collection');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Backward-compatible: add notes if missing from older saves
        myCollection = { notes: {}, ...parsed };
    }
}

/**
 * Clear all filters
 */
function clearFiltersLocal() {
    clearFilters({
        search: searchInput,
        filters: [intentionFilter, chakraFilter]
    });
    filterCrystals();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    searchInput.addEventListener('input', filterCrystals);
    intentionFilter.addEventListener('change', filterCrystals);
    chakraFilter.addEventListener('change', filterCrystals);
    clearFiltersBtn.addEventListener('click', clearFiltersLocal);
    
    ownedTab.addEventListener('click', () => {
        ownedTab.classList.add('active');
        wishlistTab.classList.remove('active');
        ownedCollection.style.display = 'grid';
        wishlistCollection.style.display = 'none';
        renderCollection();
    });
    
    wishlistTab.addEventListener('click', () => {
        wishlistTab.classList.add('active');
        ownedTab.classList.remove('active');
        wishlistCollection.style.display = 'grid';
        ownedCollection.style.display = 'none';
        renderCollection();
    });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadCollection();
    setupEventListeners();
    renderCrystals();
    renderCollection();
    
    // Enable keyboard navigation for crystal cards
    enableKeyboardNav('crystal-grid', '.crystal-card');
});
