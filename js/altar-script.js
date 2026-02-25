// ========================================
// ALTAR SETUP GUIDE - DATA & LOGIC
// ========================================

// ========================================
// DATA: ALTAR TOOLS
// ========================================

const ALTAR_TOOLS = [
    {
        name: 'Athame',
        emoji: '🗡️',
        element: 'Air',
        direction: 'East',
        purpose: 'Directing energy, casting circles, cutting ties with negative energy. Never used for physical cutting.',
        essential: true,
        alternatives: ['Kitchen knife (dedicated to ritual only)', 'Wand', 'Your finger'],
        care: 'Cleanse after each use with salt water or smoke. Some traditions keep the blade dull.',
        correspondences: {
            gender: 'Masculine',
            planet: 'Mars',
            tarot: 'Swords suit'
        },
        notes: 'Traditionally black-handled. In some traditions, exchange with wand for different element associations.'
    },
    {
        name: 'Chalice',
        emoji: '🏆',
        element: 'Water',
        direction: 'West',
        purpose: 'Holds ritual beverages, represents the womb, feminine divine energy. Used in cakes and ale ceremony.',
        essential: true,
        alternatives: ['Wine glass', 'Ceramic mug', 'Natural shell', 'Wooden bowl'],
        care: 'Wash after each use. Can be dedicated with salt water and moonlight.',
        correspondences: {
            gender: 'Feminine',
            planet: 'Venus',
            tarot: 'Cups suit'
        },
        notes: 'Silver, glass, or ceramic work well. Avoid lead crystal for consumables.'
    },
    {
        name: 'Wand',
        emoji: '🪄',
        element: 'Fire',
        direction: 'South',
        purpose: 'Channeling and directing energy, invoking deities, stirring potions. Extension of your will.',
        essential: true,
        alternatives: ['Stick from a fallen tree branch', 'Dowel rod', 'Crystal point', 'Your hand'],
        care: 'Cleanse regularly with sage or moonlight. Store wrapped in natural cloth',
        correspondences: {
            gender: 'Masculine',
            planet: 'Sun',
            tarot: 'Wands suit'
        },
        notes: 'Traditionally wood (oak, willow, hazel are popular). Length should be forearm to fingertip.'
    },
    {
        name: 'Pentacle',
        emoji: '⭐',
        element: 'Earth',
        direction: 'North',
        purpose: 'Grounding energy, blessing objects, representing the material plane. Symbol of protection.',
        essential: true,
        alternatives: ['Draw on thick paper/wood', 'Pentacle necklace', 'Coin with pentacle', 'Stone with pentacle'],
        care: 'Cleanse with salt or bury in earth overnight.',
        correspondences: {
            gender: 'Feminine',
            planet: 'Saturn',
            tarot: 'Pentacles suit'
        },
        notes: 'Can be ceramic, wood, metal, or stone. Size ranges from 3-8 inches in diameter.'
    },
    {
        name: 'Altar Cloth',
        emoji: '🧣',
        element: 'Spirit',
        direction: 'Center',
        purpose: 'Protects altar surface, creates sacred boundary, adds color correspondences to your work.',
        essential: false,
        alternatives: ['Scarf', 'Bandana', 'Fabric remnant', 'Bare altar surface'],
        care: 'Wash as needed. Change colors with seasons or spellwork.',
        correspondences: {
            colors: {
                black: 'Protection, banishing, grounding',
                white: 'Purity, all-purpose, new beginnings',
                purple: 'Spiritual power, crown chakra',
                green: 'Prosperity, growth, healing',
                red: 'Passion, courage, blood magic'
            }
        },
        notes: 'Natural fibers (cotton, silk, linen) hold energy better than synthetic. Multiple cloths let you layer.'
    },
    {
        name: 'Candles',
        emoji: '🕯️',
        element: 'Fire',
        direction: 'South',
        purpose: 'Illuminate sacred space, represent the divine spark, focus intentions through color magic.',
        essential: true,
        alternatives: ['Tea lights', 'LED candles (for safety)', 'Oil lamp'],
        care: 'Trim wicks before lighting. Dispose of remnants respectfully (burn completely or bury).',
        correspondences: {
            colors: {
                white: 'Universal, cleansing, truth',
                black: 'Banishing, protection, breaking hexes',
                red: 'Love, passion, strength, courage',
                pink: 'Self-love, friendship, emotional healing',
                orange: 'Success, creativity, attraction',
                yellow: 'Mental clarity, communication, happiness',
                green: 'Money, prosperity, growth, fertility',
                blue: 'Healing, peace, wisdom, communication',
                purple: 'Psychic power, spiritual growth, royalty',
                brown: 'Grounding, animal magic, home protection',
                silver: 'Moon magic, goddess energy, reflection',
                gold: 'Sun magic, god energy, success'
            }
        },
        notes: 'Pair: white (goddess) and red/dark (god) on either side of center. NEVER leave burning unattended.'
    },
    {
        name: 'Incense',
        emoji: '💨',
        element: 'Air',
        direction: 'East',
        purpose: 'Carry prayers to deities, cleanse energy, create atmosphere, offerings.',
        essential: true,
        alternatives: ['Essential oil diffuser', 'Smoke from herbs on charcoal', 'Opened window for fresh air'],
        care: 'Store in airtight container. Use fireproof burner. Ventilate room.',
        correspondences: {
            types: {
                frankincense: 'Purification, meditation, protection',
                myrrh: 'Healing, spirituality, protection',
                sandalwood: 'Healing, protection, exorcism',
                sage: 'Cleansing, wisdom, removing negativity',
                lavender: 'Peace, sleep, love, happiness',
                dragon_blood: 'Power, protection, love, banishing',
                copal: 'Love, purification, cleansing',
                patchouli: 'Money, fertility, lust'
            }
        },
        notes: 'Stick, cone, or loose (resin) on charcoal. Avoid if you have asthma/respiratory issues.'
    },
    {
        name: 'Bowl of Water',
        emoji: '💧',
        element: 'Water',
        direction: 'West',
        purpose: 'Purification, scrying, blessing rituals, representing the emotional realm.',
        essential: true,
        alternatives: ['Small dish', 'Natural shell', 'Chalice can double as water bowl'],
        care: 'Empty and refresh regularly. Cleanse bowl with salt water monthly.',
        correspondences: {
            types: {
                spring: 'Renewal, fresh beginnings',
                rain: 'Cleansing, sky magic, storm energy',
                moon: 'Charged under full moon - psychic work',
                sea: 'Protection, purification, banishing',
                river: 'Movement, change, letting go',
                snow: 'Transformation, pause, reflection'
            }
        },
        notes: 'Can add salt for purification, herbs for specific intentions, or moon charged for divination.'
    },
    {
        name: 'Bowl of Salt',
        emoji: '🧂',
        element: 'Earth',
        direction: 'North',
        purpose: 'Grounding, purification, protection, absorption of negative energy, circle casting.',
        essential: true,
        alternatives: ['Sea salt', 'Himalayan salt', 'Kosher salt', 'Earth/soil for outdoor work'],
        care: 'Replace monthly or when it feels heavy/dull. Dispose in running water or bury.',
        correspondences: {
            types: {
                sea: 'Most versatile, balanced energy',
                himalayan: 'Cleansing, high vibration',
                black: 'Banishing, protection, hex breaking',
                epsom: 'Healing, purification baths'
            }
        },
        notes: 'Never reuse salt used for cleansing/banishing. Black salt can be made with ash and sea salt.'
    },
    {
        name: 'Deity Representations',
        emoji: '🗿',
        element: 'Spirit',
        direction: 'Center',
        purpose: 'Honor your chosen deities, create focal point for devotion, channel divine energy.',
        essential: false,
        alternatives: ['Printed images', 'Natural objects (pinecone for Pan, shell for Aphrodite)', 'Candles designated for deity'],
        care: 'Dust regularly. Offer respect - speak aloud before moving.',
        correspondences: {
            placement: {
                goddess: 'Left side (west/north)',
                god: 'Right side (east/south)',
                both: 'Flank central candle or working space'
            }
        },
        notes: 'Start simple. Connection matters more than expensive statues. Some traditions avoid deity representations entirely.'
    },
    {
        name: 'Book of Shadows',
        emoji: '📖',
        element: 'Spirit',
        direction: 'Center',
        purpose: 'Record spells, rituals, experiences, correspondences. Your magical journal and grimoire.',
        essential: true,
        alternatives: ['Blank journal', 'Binder with loose pages', 'Digital document (less traditional)', 'Blank recipe book'],
        care: 'Keep private. Some keep on altar, others store separately. Protect from water/fire.',
        correspondences: {
            sections: {
                spells: 'What you\'ve performed and results',
                rituals: 'Sabbat ceremonies, personal rites',
                correspondences: 'Herbs, crystals, moon phases',
                dreams: 'Divination, visions, symbols',
                dedications: 'Oaths, initiations, commitments'
            }
        },
        notes: 'There is NO ancient Book of Shadows passed down. Yours is personal and valid. Start now.'
    },
    {
        name: 'Offering Bowl',
        emoji: '🫚',
        element: 'Spirit',
        direction: 'Center',
        purpose: 'Hold offerings to deities/spirits - food, herbs, crystals, written petitions.',
        essential: false,
        alternatives: ['Small dish', 'Natural wood bowl', 'Miniature cauldron', 'Shell'],
        care: 'Remove food offerings within 24 hours (bury, burn, or compost). Cleanse bowl after.',
        correspondences: {
            offerings: {
                deities: 'Food, drink, flowers, incense, honey',
                ancestors: 'Favorite foods/drinks, photos, mementos',
                land_spirits: 'Bread, milk, herbs from your garden',
                fae: 'Cream, butter, shiny objects, flowers'
            }
        },
        notes: 'NEVER consume food/drink offered to entities. Dispose respectfully (earth burial or fire).'
    },
    {
        name: 'Cauldron',
        emoji: '🫕',
        element: 'Fire',
        direction: 'Center',
        purpose: 'Fire-safe burning, mixing ingredients, scrying, represents divine womb and transformation.',
        essential: false,
        alternatives: ['Cast iron pot', 'Fire-safe bowl with sand', 'Terracotta pot', 'Heat-proof glass'],
        care: 'Season cast iron with oil. Clean ash and residue. Store in dry place.',
        correspondences: {
            uses: {
                fire: 'Burn petitions, herbs, old spells',
                water: 'Scrying, brewing teas/washes',
                earth: 'Mix herbs, salts, incense',
                divination: 'Fill with water, add ink/oil, scry in moonlight'
            }
        },
        notes: 'Three-legged cauldrons are traditional (maiden/mother/crone). Size: small (6") to large (12"+).'
    },
    {
        name: 'Bell',
        emoji: '🔔',
        element: 'Air',
        direction: 'East',
        purpose: 'Signal ritual beginning/end, banish negative energy, invoke blessings, call quarters.',
        essential: false,
        alternatives: ['Singing bowl', 'Chime', 'Clap hands', 'Snap fingers'],
        care: 'Polish metal bells occasionally. Store where it won\'t ring accidentally.',
        correspondences: {
            timing: {
                open: 'Ring 3 times to begin, clear space',
                close: 'Ring 1-3 times to release energy, close circle',
                cleansing: 'Ring around person/space to banish negativity',
                invocation: 'Ring to call deity attention'
            }
        },
        notes: 'Higher pitch = air/uplifting. Lower pitch = earth/grounding. Brass and silver are traditional.'
    },
    {
        name: 'Crystals',
        emoji: '💎',
        element: 'Earth',
        direction: 'North',
        purpose: 'Amplify intentions, specific correspondences, grid work, decorative focal points.',
        essential: false,
        alternatives: ['River stones', 'Natural rocks', 'Beach glass', 'No stones (totally valid)'],
        care: 'Cleanse monthly (moonlight, smoke, sound). Charge with intention before use.',
        correspondences: {
            altar: {
                clear_quartz: 'Amplify energy, programmable, all-purpose',
                amethyst: 'Spiritual connection, protection, intuition',
                black_tourmaline: 'Protection, grounding, EMF blocking',
                selenite: 'Cleansing, moon magic, never needs cleansing',
                citrine: 'Abundance, manifestation, joy',
                rose_quartz: 'Love, self-care, emotional healing'
            }
        },
        notes: 'Start with what calls to you. See our Crystal Database for full correspondences.'
    },
    {
        name: 'Herbs',
        emoji: '🌿',
        element: 'Earth',
        direction: 'North',
        purpose: 'Burn as offerings, add to spell bags, create potions/teas, seasonal decorations.',
        essential: false,
        alternatives: ['Kitchen herbs', 'Garden clippings', 'Dried flowers', 'Essential oils'],
        care: 'Store in airtight jars away from light. Label clearly. Dispose of old herbs respectfully.',
        correspondences: {
            protection: 'Rosemary, sage, basil, bay leaf, black salt',
            love: 'Rose, lavender, jasmine, yerba mate, cinnamon',
            prosperity: 'Basil, mint, cinnamon, clove, bay leaf',
            cleansing: 'Sage, rosemary, lemon balm, salt, cedar',
            psychic: 'Mugwort, wormwood, star anise, bay leaf'
        },
        notes: 'Check our Herbal Database for full correspondences and safety info. NEVER ingest unknown herbs.'
    }
];

// ========================================
// DATA: ALTAR LAYOUTS
// ========================================

const ALTAR_LAYOUTS = [
    {
        name: 'Traditional Wiccan Altar',
        tradition: 'Wiccan',
        difficulty: 'Beginner',
        description: 'Classic Gerald Gardner-style layout emphasizing balance of god/goddess energy and cardinal directions.',
        placements: {
            north: ['Pentacle', 'Bowl of Salt', 'Green candle', 'Crystals'],
            east: ['Athame', 'Incense', 'Yellow candle'],
            south: ['Wand', 'Red candle', 'Matches'],
            west: ['Chalice', 'Bowl of Water', 'Blue candle'],
            centerLeft: ['Goddess candle (white/silver)', 'Goddess statue'],
            centerRight: ['God candle (red/gold)', 'God statue'],
            centerFront: ['Working space for spells, Book of Shadows']
        },
        items: [
            '4 small candles (NESW colors)',
            '2 deity candles (god/goddess)',
            'All 4 elemental tools',
            'Altar cloth (black or seasonal)',
            'Deity representations',
            'Book of Shadows',
            'Small offering bowl'
        ],
        seasonalAdaptations: 'Change altar cloth and deity candle colors to match sabbats. Add seasonal herbs/flowers to center.',
        budgetVersion: 'Use 1 white candle instead of deity pair. Draw pentacle on cardboard. Use kitchen knife for athame. Total cost: $10-15.',
        tips: 'Start here if new to Wicca. This layout teaches elemental correspondences through daily interaction.'
    },
    {
        name: 'Minimalist Eclectic Altar',
        tradition: 'Eclectic',
        difficulty: 'Beginner',
        description: 'Perfect for small spaces, dorm rooms, or those who prefer simple, personal practice.',
        placements: {
            back: ['1-3 meaningful items (statue, photo, symbol)', 'Incense holder'],
            center: ['Single white candle (all-purpose)', 'Small offering bowl or shell'],
            front: ['Personal power object', 'Journal/notebook for quick notes']
        },
        items: [
            'White candle',
            'Incense or oil diffuser',
            '1-3 meaningful objects',
            'Small cloth or placemat',
            'Optional: single crystal, photo, or natural object'
        ],
        seasonalAdaptations: 'Swap the personal objects with seasonal finds (leaves, flowers, pinecones). Change candle color quarterly.',
        budgetVersion: 'This is ALREADY budget-friendly! Scavenge meaningful natural objects. DIY candle from household supplies. Total: $5-8.',
        tips: 'Less is more. Focus on quality of intention rather than quantity of tools. Perfect for broom closet practitioners.'
    },
    {
        name: 'Green Witch Garden Altar',
        tradition: 'Green Witch',
        difficulty: 'Beginner',
        description: 'Nature-focused altar celebrating herbs, plants, and the cycles of growth.',
        placements: {
            back: ['Plant (living altar connection)', 'Goddess figure or Green Man'],
            center: ['Large bowl filled with seasonal herbs/flowers', 'Green or brown candle'],
            front: ['Mortar & pestle', 'Seed packets or garden journal']
        },
        items: [
            'Living plant (pothos, basil, rosemary)',
            'Mortar and pestle',
            'Seasonal herbs (fresh or dried)',
            'Natural wood or stone items',
            'Earth-tone altar cloth',
            'Offering bowl for compost/earth magic',
            'Seeds, acorns, or other earth treasures'
        ],
        seasonalAdaptations: 'Refresh herbs monthly. Spring: seeds/new growth. Summer: flowers. Autumn: leaves/grains. Winter: evergreen branches.',
        budgetVersion': 'Use whatʼs in your kitchen (basil, rosemary). Find stones/sticks on nature walks. Repurpose glass jar as offering bowl. Total: $0-5.',
        tips: 'Water your altar plant as a daily devotional act. Compost spent herbs back to earth. Offer first harvest to your altar.'
    },
    {
        name: 'Hearth & Kitchen Altar',
        tradition: 'Kitchen Witch',
        difficulty: 'Beginner',
        description: 'Disguised altar for shared living spaces, blends seamlessly with kitchen decor.',
        placements: {
            back: ['Decorative canisters (secretly holding salt, sugar for spells)', 'Plant (herbs in window)'],
            center: ['Beautiful bowl or plate (offering dish)', 'Tea light or decorative candle'],
            front: ['Spoon or whisk (wand equivalent)', 'Recipe box or binder (Book of Shadows)']
        },
        items: [
            'Decorative kitchen items with dual purpose',
            'Herb pots on windowsill',
            'Canisters for magical ingredients',
            'Wooden spoon (wand)',
            'Favorite mug (chalice)',
            'Cutting board with intention',
            'Recipe box for spells'
        ],
        seasonalAdaptations: 'Swap decorative bowls seasonally. Bake sabbat-appropriate foods. Add seasonal fruits/vegetables as offerings.',
        budgetVersion: 'Use existing kitchen items! Everything has a magical equivalent. Add intention to what you already own. Total: $0.',
        tips: 'Stir clockwise to attract, counterclockwise to banish. Everything you cook is a spell. Name your tools.'
    },
    {
        name: 'Ceremonial Magick Altar',
        tradition: 'Ceremonial',
        difficulty: 'Advanced',
        description: 'Structured Golden Dawn/Thelema-style altar for formal ritual work and invocations.',
        placements: {
            north: ['Pentacle', 'Hexagram of Earth', 'Black or green candle'],
            east: ['Dagger or sword', 'Hexagram of Air', 'Yellow candle'],
            south: ['Wand or scepter', 'Hexagram of Fire', 'Red candle'],
            west: ['Chalice', 'Hexagram of Water', 'Blue candle'],
            center: ['Hexagram of Spirit', 'Working triangle or square', 'Incense (frankincense/myrrh)', 'Lamp of Art (main candle)'],
            additional: ['Rose cross', 'Magical weapons', 'Grimoire', 'Talisman being charged']
        },
        items: [
            'Complete four elemental weapons',
            '5 candles (4 quarters + center)',
            'Hexagrams or drawn sigils for each element',
            'White altar cloth or precise grid layout',
            'Ritual robe and crown/circlet',
            'Incense (frankincense, myrrh, storax)',
            'Grimoire with precise rituals',
            'Additional tools: Triangle of Art, magic circle, planetary symbols'
        ],
        seasonalAdaptations: 'Align workings with planetary hours, astrological timing, and lunar phases rather than sabbats.',
        budgetVersion: 'Print hexagrams on cardstock. Use found wood for wand. Focus on precision of ritual over expensive tools. Total: $30-50.',
        tips: 'Study ceremonial magic thoroughly before this layout. Precision in ritual matters. Consider joining an order (OTO, AMORC) for training.'
    },
    {
        name: 'Ancestor & Spirit Work Altar',
        tradition: 'Eclectic',
        difficulty: 'Intermediate',
        description: 'Dedicated space for honoring ancestors, communicating with spirits, and trance work.',
        placements: {
            back: ['Photos of deceased loved ones', 'Ancestor altar cloth (white or black)'],
            center: ['White candle (always lit when working)', 'Offering bowl with food/drink'],
            front: ['Incense (sandalwood or copal)', 'Divination tools (pendulum, cards)'],
            side: ['Glass of water (refreshed daily)', 'Flowers or plants']
        },
        items: [
            'Photos or heirlooms from ancestors',
            'White candle (never blow out - snuff only)',
            'Fresh water glass (change daily)',
            'Offering bowl',
            'Incense (sandalwood, frankincense, or ancestor-specific scents)',
            'Black or white altar cloth',
            'Foods/drinks ancestors enjoyed',
            'Optional: skeleton key, cemetery dirt, bones, graveyard flowers'
        ],
        seasonalAdaptations: 'Honor especially during Samhain (Oct 31) and ancestral cultural days (Día de los Muertos, All Saints). Quiet the altar near Beltane/summer.',
        budgetVersion: 'Print favorite photos. Use kitchen candle. Tap water in a glass. Offer part of your own meals. Total: $3-5.',
        tips: 'Always ask permission before working. Respect boundaries. Some ancestors arenʼt helpful—work with loving ones. Keep separate from main working altar.'
    },
    {
        name: 'Traveling or Portable Altar',
        tradition: 'Eclectic',
        difficulty: 'Beginner',
        description: 'Compact altar-in-a-box for travel, outdoor rituals, or hotel rooms.',
        placements: {
            container: 'Small wooden box, tin, or cloth bag (the container IS the altar)',
            inside: [
                'Tea light or chime candle',
                'Matches',
                'Small incense cones or essential oil',
                'Mini crystals or stones',
                'Tiny dish for offerings',
                'Printed symbol or deity image',
                'Cord or ribbon (circle casting)',
                'Pen and paper for quick spells'
            ]
        },
        items: [
            'Altoids tin, wooden box, or small bag',
            'Tea lights',
            'Incense cones',
            '3-5 small tumbled stones',
            'Mini deity representation',
            'Matches/lighter',
            'Small notepad',
            'Tiny dish or shell',
            'Everything fits in a container smaller than a book!'
        ],
        seasonalAdaptations: 'Swap stones or deity image by season. Add pressed flowers or seasonal herbs to container.',
        budgetVersion: 'This is basically a pocket altar. Scavenge an old tin. Use birthday candles. Collect pebbles outside. Total: $2-3.',
        tips: 'Perfect for vacations, camping, or visiting family. TSA-friendly (skip lighter, buy on arrival). Set up anywhere in 30 seconds.'
    },
    {
        name: 'Lunar Devotional Altar',
        tradition: 'Eclectic',
        difficulty: 'Intermediate',
        description: 'Moon-focused altar for esbat celebrations, lunar magic, and goddess work.',
        placements: {
            back: ['Moon phase calendar or artwork', 'Silver or white goddess statue'],
            center: ['White or silver candle', 'Bowl of moon water (charged under full moon)', 'Moonstone or selenite'],
            front: ['Chalice for ritual beverage', 'Mirror for scrying', 'Divination tools']
        },
        items: [
            'Silver/white goddess figure (Selene, Diana, Hecate, etc.)',
            'White or silver candles',
            'Moon water in glass or crystal bowl',
            'Moonstone, selenite, or labradorite',
            'Silver altar cloth or midnight blue',
            'Chalice (preferably silver or glass)',
            'Scrying mirror',
            'Journal for dream work',
            'Optional: lunar phase wheel, star maps'
        ],
        seasonalAdaptations: 'Intensify during full moons. Add seasonal elements at blue moons. Change offerings with astrological sign of the moon.',
        budgetVersion: 'Use white candle. Make moon water from tap water under full moon (free!). Print moon phases from online. Total: $5-8.',
        tips: 'Charge water and crystals under full moon monthly. Track moon phases and work accordingly. See our Moon Tracker tool for ritual timing.'
    }
];

// ========================================
// DATA: SEASONAL ALTAR GUIDE
// ========================================

const SEASONAL_ALTARS = [
    {
        sabbat: 'Samhain',
        date: 'October 31',
        emoji: '🎃',
        colors: ['Black', 'Orange', 'Deep Purple', 'Silver'],
        herbs: ['Mugwort', 'Wormwood', 'Sage', 'Rosemary', 'Apple'],
        crystals: ['Obsidian', 'Onyx', 'Smoky Quartz', 'Jet'],
        decorations: 'Pumpkins, autumn leaves, photos of ancestors, skulls, apples, pomegranates, dried corn, black candles',
        focus: 'Honor ancestors, divination, thinning veil between worlds, endings and new beginnings',
        offerings: 'Apples, wine, bread, favorite foods of deceased loved ones, written messages to burn'
    },
    {
        sabbat: 'Yule',
        date: 'Winter Solstice (~Dec 21)',
        emoji: '🎄',
        colors: ['Red', 'Green', 'Gold', 'White', 'Silver'],
        herbs: ['Pine', 'Cedar', 'Cinnamon', 'Frankincense', 'Myrrh', 'Holly', 'Mistletoe', 'Ivy'],
        crystals: ['Clear Quartz', 'Bloodstone', 'Garnet', 'Ruby'],
        decorations: 'Evergreen boughs, yule log, sun symbols, gold candles, pinecones, mistletoe, holly, cranberries, cinnamon sticks',
        focus: 'Rebirth of the sun, light returning, inner reflection, rest and renewal',
        offerings: 'Mulled wine, bread, honey cakes, evergreen sprigs, gold coins'
    },
    {
        sabbat: 'Imbolc',
        date: 'February 1-2',
        emoji: '🕯️',
       colors: ['White', 'Silver', 'Pale Yellow', 'Light Blue'],
        herbs: ['Basil', 'Bay Leaf', 'Chamomile', 'Rosemary', 'Dried Violets'],
        crystals: ['Amethyst', 'Moonstone', 'Garnet'],
        decorations: 'White candles, Brigid\'s cross, snowdrops, white flowers, milk, seeds, corn dollies, wheat, candles in every color',
        focus: 'Purification, initiation, creativity, Brigid\'s fire, early stirrings of spring',
        offerings: 'Milk, bread, butter, seeds for spring planting, poems or creative works'
    },
    {
        sabbat: 'Ostara',
        date: 'Spring Equinox (~March 21)',
        emoji: '🐇',
        colors: ['Pastel Pink', 'Yellow', 'Green', 'Lavender'],
        herbs: ['Jasmine', 'Rose', 'Violet', 'Lemon Balm', 'Sage'],
        crystals: ['Rose Quartz', 'Aquamarine', 'Moonstone', 'Green Aventurine'],
        decorations: 'Eggs (decorated), rabbits, spring flowers (daffodils, tulips), seeds, feathers, pastel candles, nests',
        focus: 'Balance, renewal, fertility, planting intentions, new growth',
        offerings: 'Decorated eggs, seeds, flowers, honey, breads baked with herbs'
    },
    {
        sabbat: 'Beltane',
        date: 'May 1',
        emoji: '💐',
        colors: ['Green', 'Red', 'White', 'Pink', 'Yellow'],
        herbs: ['Hawthorn', 'Rose', 'Marigold', 'Ivy', 'Rowan', 'Meadowsweet'],
        crystals: ['Emerald', 'Malachite', 'Rose Quartz', 'Carnelian'],
        decorations: 'Flowers (everywhere!), maypole ribbons, roses, greenery, fertility symbols, honey, honey cakes, bright colors',
        focus: 'Fertility, passion, union of god and goddess, peak of spring, sensuality',
        offerings: 'Flowers, honey, oat cakes, wine, ribbons tied to trees'
    },
    {
        sabbat: 'Litha',
        date: 'Summer Solstice (~June 21)',
        emoji: '☀️',
        colors: ['Gold', 'Yellow', 'Orange', 'Red'],
        herbs: ['St. John\'s Wort', 'Chamomile', 'Lavender', 'Yarrow', 'Sunflower'],
        crystals: ['Citrine', 'Tiger\'s Eye', 'Amber', 'Carnelian', 'Sunstone'],
        decorations: 'Sunflowers, sun symbols, gold candles, summer flowers, honey, fresh fruits, oak leaves, bright yellow/gold cloths',
        focus: 'Peak of sun\'s power, abundance, gratitude, strength, faerie magic',
        offerings: 'Fresh fruits, mead, honey, summer flowers, bonfires (if possible)'
    },
    {
        sabbat: 'Lughnasadh',
        date: 'August 1',
        emoji: '🌾',
        colors: ['Gold', 'Orange', 'Yellow', 'Brown'],
        herbs: ['Wheat', 'Corn', 'Heather', 'Blackberry', 'Meadowsweet'],
        crystals: ['Citrine', 'Peridot', 'Cat\'s Eye', 'Aventurine'],
        decorations: 'Grains (wheat, corn, barley), bread, corn dollies, sunflowers, harvest produce, scythes, sickles, brown/gold candles',
        focus: 'First harvest, sacrifice, gratitude, abundance, skills and crafts',
        offerings: 'Fresh baked bread, grains, corn, first fruits of harvest, beer or whiskey'
    },
    {
        sabbat: 'Mabon',
        date: 'Autumn Equinox (~Sept 21)',
        emoji: '🍂',
        colors: ['Brown', 'Orange', 'Red', 'Gold', 'Deep Green'],
        herbs: ['Sage', 'Chamomile', 'Myrrh', 'Marigold', 'Passionflower'],
        crystals: ['Amber', 'Citrine', 'Topaz', 'Carnelian', 'Sapphire'],
        decorations: 'Autumn leaves, gourds, apples, corn, pinecones, acorns, horn of plenty (cornucopia), wine, cider',
        focus: 'Second harvest, balance, gratitude, preparation for winter, letting go',
        offerings: 'Apples, wine, cider, bread, grains, autumn vegetables'
    }
];

// ========================================
// STATE & FILTERING
// ========================================

let toolsData = ALTAR_TOOLS;
let layoutsData = ALTAR_LAYOUTS;

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderTools(toolsData);
    renderLayouts(layoutsData);
    renderSeasonalGuide();
    setupEventListeners();
    enableKeyboardNav('tools-grid', '.tool-card');
    enableKeyboardNav('layouts-grid', '.layout-card');
});

// ========================================
// RENDERING FUNCTIONS
// ========================================

function renderTools(tools) {
    const grid = document.getElementById('tools-grid');
    const countElement = document.getElementById('tools-count');
    
    if (tools.length === 0) {
        grid.innerHTML = '<p class="empty-message">No tools match your filters. Try adjusting your search.</p>';
        updateResultCount(countElement, 0, 'tool');
        return;
    }
    
    grid.innerHTML = tools.map(tool => `
        <div class="tool-card" role="listitem" tabindex="0">
            <div class="card-header">
                <span class="tool-emoji">${tool.emoji}</span>
                <h3 class="tool-name">${tool.name}</h3>
                ${tool.essential ? '<span class="essential-badge">Essential</span>' : '<span class="optional-badge">Optional</span>'}
            </div>
            
            <div class="tool-preview">
                <div class="tool-meta">
                    <span class="element-tag" data-element="${tool.element}">${tool.element}</span>
                    <span class="direction-tag">${tool.direction}</span>
                </div>
                <p class="tool-purpose">${tool.purpose}</p>
            </div>
            
            <div class="expand-toggle" role="button" aria-label="Show more details about ${tool.name}">Show Details</div>
            
            <div class="tool-details">
                <div class="detail-section">
                    <h4>Alternatives</h4>
                    <ul>
                        ${tool.alternatives.map(alt => `<li>${alt}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h4>Care Instructions</h4>
                    <p>${tool.care}</p>
                </div>
                
                ${tool.correspondences ? `
                    <div class="detail-section">
                        <h4>Correspondences</h4>
                        <div class="correspondences">
                            ${Object.entries(tool.correspondences).map(([key, value]) => {
                                if (typeof value === 'object' && !Array.isArray(value)) {
                                    return `
                                        <div><strong>${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</strong></div>
                                        <ul>
                                            ${Object.entries(value).map(([k, v]) => `<li><strong>${k.replace(/_/g, ' ')}:</strong> ${v}</li>`).join('')}
                                        </ul>
                                    `;
                                }
                                return `<div><strong>${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</strong> ${value}</div>`;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${tool.notes ? `
                    <div class="detail-section">
                        <h4>Notes</h4>
                        <p class="tool-notes">${tool.notes}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    updateResultCount(countElement, tools.length, 'tool');
}

function renderLayouts(layouts) {
    const grid = document.getElementById('layouts-grid');
    const countElement = document.getElementById('layouts-count');
    
    if (layouts.length === 0) {
        grid.innerHTML = '<p class="empty-message">No layouts match your filters.</p>';
        updateResultCount(countElement, 0, 'layout');
        return;
    }
    
    grid.innerHTML = layouts.map(layout => `
        <div class="layout-card" role="listitem" tabindex="0">
            <div class="card-header">
                <h3 class="layout-name">${layout.name}</h3>
                <div class="layout-meta">
                    <span class="tradition-badge">${layout.tradition}</span>
                    <span class="difficulty-badge difficulty-${layout.difficulty.toLowerCase()}">${layout.difficulty}</span>
                </div>
            </div>
            
            <p class="layout-description">${layout.description}</p>
            
            <div class="expand-toggle" role="button" aria-label="Show more details about ${layout.name}">Show Details</div>
            
            <div class="layout-details">
                <div class="detail-section">
                    <h4>Placement Guide</h4>
                    <div class="placements">
                        ${Object.entries(layout.placements).map(([position, items]) => `
                            <div class="placement-item">
                                <strong>${position.replace(/([A-Z])/g, ' $1').trim()}:</strong>
                                <ul>
                                    ${Array.isArray(items) ? items.map(item => `<li>${item}</li>`).join('') : `<li>${items}</li>`}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Required Items</h4>
                    <ul>
                        ${layout.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h4>Seasonal Adaptations</h4>
                    <p>${layout.seasonalAdaptations}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Budget-Friendly Version</h4>
                    <p class="budget-tip">${layout.budgetVersion}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Tips</h4>
                    <p class="layout-tips">${layout.tips}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    updateResultCount(countElement, layouts.length, 'layout');
}

function renderSeasonalGuide() {
    const grid = document.getElementById('seasonal-grid');
    
    grid.innerHTML = SEASONAL_ALTARS.map(sabbat => `
        <div class="seasonal-card">
            <div class="seasonal-header">
                <span class="seasonal-emoji">${sabbat.emoji}</span>
                <h3>${sabbat.sabbat}</h3>
                <span class="seasonal-date">${sabbat.date}</span>
            </div>
            
            <div class="seasonal-content">
                <div class="seasonal-item">
                    <strong>Colors:</strong> ${sabbat.colors.join(', ')}
                </div>
                
                <div class="seasonal-item">
                    <strong>Herbs:</strong> ${sabbat.herbs.join(', ')}
                </div>
                
                <div class="seasonal-item">
                    <strong>Crystals:</strong> ${sabbat.crystals.join(', ')}
                </div>
                
                <div class="seasonal-item">
                    <strong>Decorations:</strong> ${sabbat.decorations}
                </div>
                
                <div class="seasonal-item">
                    <strong>Focus:</strong> ${sabbat.focus}
                </div>
                
                <div class="seasonal-item">
                    <strong>Offerings:</strong> ${sabbat.offerings}
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// EVENT LISTENERS & FILTERING
// ========================================

function setupEventListeners() {
    // Tools filtering
    const toolSearch = document.getElementById('tool-search');
    const elementFilter = document.getElementById('element-filter');
    const essentialFilter = document.getElementById('essential-filter');
    const clearToolsBtn = document.getElementById('clear-tools-btn');
    
    [toolSearch, elementFilter, essentialFilter].forEach(element => {
        element.addEventListener('input', filterTools);
        element.addEventListener('change', filterTools);
    });
    
    clearToolsBtn.addEventListener('click', () => {
        clearFilters({
            search: toolSearch,
            filters: [elementFilter, essentialFilter]
        });
        toolsData = ALTAR_TOOLS;
        renderTools(toolsData);
    });
    
    // Layouts filtering
    const traditionFilter = document.getElementById('tradition-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const clearLayoutsBtn = document.getElementById('clear-layouts-btn');
    
    [traditionFilter, difficultyFilter].forEach(element => {
        element.addEventListener('change', filterLayouts);
    });
    
    clearLayoutsBtn.addEventListener('click', () => {
        clearFilters({
            filters: [traditionFilter, difficultyFilter]
        });
        layoutsData = ALTAR_LAYOUTS;
        renderLayouts(layoutsData);
    });
}

function filterTools() {
    const searchTerm = document.getElementById('tool-search').value;
    const element = document.getElementById('element-filter').value;
    const essentialValue = document.getElementById('essential-filter').value;
    
    toolsData = filterAndSearch(
        ALTAR_TOOLS,
        searchTerm,
        [
            (tool) => tool.name,
            (tool) => tool.purpose,
            (tool) => tool.alternatives.join(' ')
        ],
        {
            element: element,
            essential: essentialValue
        },
        {
            element: (tool) => tool.element,
            essential: (tool) => essentialValue === 'all' ? true : tool.essential.toString() === essentialValue
        }
    );
    
    renderTools(toolsData);
}

function filterLayouts() {
    const tradition = document.getElementById('tradition-filter').value;
    const difficulty = document.getElementById('difficulty-filter').value;
    
    layoutsData = filterItems(
        ALTAR_LAYOUTS,
        {
            tradition: tradition,
            difficulty: difficulty
        },
        {
            tradition: (layout) => layout.tradition,
            difficulty: (layout) => layout.difficulty
        }
    );
    
    renderLayouts(layoutsData);
}
