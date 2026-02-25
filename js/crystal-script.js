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
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let filteredCrystals = [...CRYSTALS];
let myCollection = {
    owned: [],
    wishlist: []
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
            const miniCard = document.createElement('div');
            miniCard.className = 'mini-crystal-card';
            miniCard.innerHTML = `
                <span class="mini-crystal-emoji">${crystal.emoji}</span>
                <span class="mini-crystal-name">${crystal.name}</span>
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
        myCollection = JSON.parse(saved);
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
