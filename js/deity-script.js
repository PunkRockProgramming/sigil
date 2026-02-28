// ========================================
// DEITY DATABASE
// Gods & Goddesses across Celtic, Greek/Roman, Norse, Egyptian pantheons
// ========================================

// ========================================
// DEITY DATA
// ========================================

const DEITIES = [

    // ========================================
    // CELTIC (8)
    // ========================================

    {
        name: 'Brigid',
        epithet: 'Goddess of Fire, Poetry & Healing',
        emoji: '🔥',
        pantheon: 'Celtic',
        gender: 'feminine',
        domains: ['Fire', 'Poetry', 'Healing', 'Smithcraft', 'Inspiration', 'Arts & Craft'],
        element: 'Fire',
        planet: 'Sun',
        symbols: ["Brigid's Cross", 'Eternal Flame', 'Anvil', 'Sacred Well'],
        sacred_animals: ['Swan', 'Snake'],
        sacred_plants: ['Blackberry', 'Dandelion', 'Oak'],
        crystals: ['Citrine', 'Carnelian', 'Amber'],
        colors: ['Red', 'Orange', 'White'],
        offerings: ['Poetry', 'Flame', 'Milk', 'Bread', 'Crafted Objects'],
        festivals: ['Imbolc (Feb 1–2)'],
        mythology: 'Brigid is one of the most beloved goddesses of the Celtic world, daughter of the Dagda and one of the Tuatha Dé Danann. She rules three sacred fires: the fire of inspiration that lights the forge of poetry, the fire of the smith that shapes tools and weapons, and the fire of the hearth that heals the body. At Imbolc she is honored as the returning light — the first stirring of spring after winter\'s grip. Her sacred flame burned for centuries at Kildare, tended by nineteen priestesses, and was later adopted by St. Brigid of Ireland, allowing her to endure through the Christian era.',
        working_with: 'Call on Brigid for creative blocks, healing work, or craft projects. Light a red or orange candle at your altar and speak your intention aloud — she responds to the spoken word. Her sacred flame can be kept as a small perpetual candle on your altar, re-lit each morning with intention. Imbolc (Feb 1–2) is her primary festival; build a Brigid\'s cross from reeds and sleep it by her flame for blessings. She welcomes poets, healers, midwives, and anyone learning a new craft.',
        affirmation: '"I am inspired, creative, and burning with sacred purpose."',
        traditions: ['Wiccan', 'Druidry', 'Celtic Paganism', 'Eclectic']
    },

    {
        name: 'Cernunnos',
        epithet: 'Lord of the Wild, Animals & Abundance',
        emoji: '🦌',
        pantheon: 'Celtic',
        gender: 'masculine',
        domains: ['Nature', 'Animals', 'Fertility', 'Abundance', 'Death', 'Underworld'],
        element: 'Earth',
        planet: 'Venus',
        symbols: ['Torc', 'Antlers', 'Ram-Headed Serpent', 'Bag of Coins'],
        sacred_animals: ['Stag', 'Serpent', 'Ram', 'Boar'],
        sacred_plants: ['Oak', 'Ivy', 'Holly', 'Moss'],
        crystals: ['Green Tourmaline', 'Bloodstone', 'Moss Agate', 'Jade'],
        colors: ['Green', 'Brown', 'Gold'],
        offerings: ['Grain', 'Wine', 'Acorns', 'Forest Herbs', 'Antler imagery'],
        festivals: ['Beltane (May 1)', 'Samhain (Oct 31)', 'Winter Solstice'],
        mythology: 'Cernunnos is the antlered god of the wild, known primarily from the Gundestrup Cauldron and other Celtic artifacts. He sits cross-legged in the posture of meditation, wearing or holding a great torc of sovereignty, grasping a ram-headed serpent in one hand. He presides over the liminal spaces between worlds — the edge of the forest, the boundary between life and death. He is both predator and prey, the hunter who becomes the hunted, embodying the full cycle of nature\'s abundance and its necessary endings.',
        working_with: 'Cernunnos is called on for abundance, connection to nature, animal communication, and shadow work. He governs the spaces between — transition, liminality, the turning of seasons. Work with him at forest altars, with offerings of grain and wine left at the roots of an oak. He responds to drum rhythms and the sound of wind through branches. Call on him when navigating major life transitions or when you need to make peace with endings.',
        affirmation: '"I am wild, abundant, and connected to the living web of all things."',
        traditions: ['Druidry', 'Celtic Paganism', 'Eclectic', 'Wiccan']
    },

    {
        name: 'The Morrigan',
        epithet: 'Queen of Fate, War & Sovereignty',
        emoji: '🐦‍⬛',
        pantheon: 'Celtic',
        gender: 'feminine',
        domains: ['War', 'Fate', 'Death', 'Prophecy', 'Sovereignty', 'Magic'],
        element: 'Air',
        planet: 'Mars',
        symbols: ['Crow', 'Raven', 'Red Cloak', 'Washing at the Ford'],
        sacred_animals: ['Crow', 'Raven', 'Eel', 'Cow', 'Wolf'],
        sacred_plants: ['Yew', 'Mugwort', 'Crow Garlic', 'Elder', 'Blackthorn'],
        crystals: ['Obsidian', 'Black Tourmaline', 'Garnet', 'Bloodstone'],
        colors: ['Black', 'Red', 'Crimson'],
        offerings: ['Red wine', 'Crow feathers', 'Whiskey', 'Blood-red stones', 'Bone'],
        festivals: ['Samhain (Oct 31)', 'Bealtaine (May 1)'],
        mythology: 'The Morrigan is a triple goddess of Irish mythology — appearing as Badb (crow of battle), Macha (sovereignty of the land), and Anand or Nemain (frenzy). She is not a war goddess who fights, but one who shapes fate: she washes the armor of those who will die, appears as a crow on the battlefield, and grants or withholds sovereignty from kings. In the Ulster Cycle she tests and challenges the hero Cú Chulainn, offering him love and then prophecy when he refuses. She is fierce, complex, and calls those willing to face their shadow.',
        working_with: 'The Morrigan calls to those doing deep shadow work, reclaiming personal power, or facing death and transformation. She is not easily approached — she demands honesty and strength. Leave offerings at crossroads or near water on dark moon nights. She responds to raw honesty and the willingness to face what is difficult. If you begin working with her, expect challenges that purify and strengthen. She is a guardian for those who fight for sovereignty — personal and collective.',
        affirmation: '"I embrace my power and face truth without flinching."',
        traditions: ['Celtic Paganism', 'Eclectic', 'Druidry', 'Chaos Magick']
    },

    {
        name: 'Lugh',
        epithet: 'God of Light, Skill & Mastery',
        emoji: '☀️',
        pantheon: 'Celtic',
        gender: 'masculine',
        domains: ['Sun & Light', 'Arts & Craft', 'Wisdom', 'War', 'Healing', 'Inspiration'],
        element: 'Fire',
        planet: 'Sun',
        symbols: ['Spear of Lugh', 'Sling', 'Long Arm', 'All-Crafts'],
        sacred_animals: ['Raven', 'Eagle', 'Lynx'],
        sacred_plants: ["St. John's Wort", 'Meadowsweet', 'Corn', 'Sunflower'],
        crystals: ['Sunstone', 'Topaz', 'Gold Calcite', 'Citrine'],
        colors: ['Gold', 'Orange', 'Yellow', 'White'],
        offerings: ['First harvest grain', 'Handcrafted objects', 'Athletic competitions', 'Sunflowers'],
        festivals: ['Lughnasadh (Aug 1)'],
        mythology: 'Lugh Lámhfhada — Lugh of the Long Arm — is the Irish god of all skills, a solar deity and divine craftsman of the highest order. Son of the sun god Cian and the Fomorian Ethniu, he came to the court of the Tuatha Dé Danann as a master of every art: harper, smith, champion, sorcerer, poet. He led the Tuatha in the Second Battle of Mag Tuired, slaying his own grandfather Balor of the Evil Eye with his sunbeam spear. He is the patron of harvest and skilled work, and the festival Lughnasadh is held in honor of his foster mother Tailtiu.',
        working_with: 'Lugh is a magnificent patron for mastery of skills, learning, craftsmanship, competition, and creative excellence. He favors those who work hard to become proficient. Begin a new skill or creative project at Lughnasadh and dedicate it to him. Offerings of bread from first-harvest grain or personal crafts honor him deeply. He aids with athletic endeavors, competitions, and healing of the hands and eyes. His energy is bright, confident, and masterful.',
        affirmation: '"I master my craft with passion and bring light wherever I go."',
        traditions: ['Druidry', 'Celtic Paganism', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Danu',
        epithet: 'Mother of the Gods & Divine Waters',
        emoji: '💧',
        pantheon: 'Celtic',
        gender: 'feminine',
        domains: ['Fertility', 'Earth', 'Wisdom', 'Nature', 'Protection'],
        element: 'Water',
        planet: 'Moon',
        symbols: ['River', 'Flowing Waters', 'Ancient Mound', 'Winds'],
        sacred_animals: ['Salmon', 'Cow', 'Serpent'],
        sacred_plants: ['Dandelion', 'Water Lily', 'Fern', 'Birch', 'Willow'],
        crystals: ['Moonstone', 'Aquamarine', 'Clear Quartz', 'Blue Calcite'],
        colors: ['Blue', 'Silver', 'White', 'Deep Green'],
        offerings: ['Water from sacred springs', 'Flowers', 'Honey', 'Grain', 'Silver coins in water'],
        festivals: ['Samhain (Oct 31)', 'Imbolc (Feb 1–2)', 'Spring Equinox'],
        mythology: 'Danu is the great mother goddess of the Tuatha Dé Danann — "the peoples of the goddess Danu" — though she is paradoxically little-mentioned by name in surviving Irish texts. She is understood as the primordial mother, the divine river whose waters nourish all life, an ancient force that precedes the gods themselves. Scholars connect her to the Vedic Danu and the Indo-European root *dʰen- (to flow, to run). She is the wellspring from which the divine family emerges — vast, nurturing, and older than memory.',
        working_with: 'Danu is called upon for ancestral healing, connection to Celtic heritage, mother energy, and working with flow states. She governs the deep wisdom that runs beneath the surface. Approach her at rivers, springs, or wells with offerings of flowers and silver. She is especially welcoming to those doing ancestral work or seeking the deep roots of their spiritual practice. She holds space without judgment and her energy is vast and patient.',
        affirmation: '"I flow with wisdom, nurturing life and trusting the deep currents."',
        traditions: ['Druidry', 'Celtic Paganism', 'Eclectic', 'Wiccan']
    },

    {
        name: 'The Dagda',
        epithet: 'Good God of Earth, Plenty & Magic',
        emoji: '🌳',
        pantheon: 'Celtic',
        gender: 'masculine',
        domains: ['Earth', 'Abundance', 'Wisdom', 'Protection', 'Death', 'Fertility', 'Magic'],
        element: 'Earth',
        planet: 'Jupiter',
        symbols: ['Cauldron of Plenty', 'Club of Life and Death', 'Harp of Seasons', 'Pigs'],
        sacred_animals: ['Pig', 'Horse', 'Crow'],
        sacred_plants: ['Oak', 'Hazel', 'Apple', 'Hawthorn'],
        crystals: ['Jade', 'Brown Jasper', 'Amber', 'Green Aventurine'],
        colors: ['Brown', 'Green', 'Dark Red', 'Black'],
        offerings: ['Porridge', 'Oat cakes', 'Whiskey', 'First harvest', 'Meat'],
        festivals: ['Samhain (Oct 31)', 'Lughnasadh (Aug 1)', 'Winter Solstice'],
        mythology: 'The Dagda — "the Good God" — is the all-father of Irish mythology, chieftain of the Tuatha Dé Danann and master of life and death. His great iron club could slay nine men with one end and restore the dead to life with the other. His Cauldron of the Dagda, brought from the city of Murias, was bottomless — no one ever left it hungry. His magical harp Uaithne could command the seasons to change. Though he appears comical and earthy compared to the elegant Tuatha, his power is supreme: he is the keeper of cosmic order.',
        working_with: 'The Dagda is a powerful patron for abundance magic, earth connection, protection, and wisdom. He is particularly helpful for those seeking food security, home protection, and the kind of earthy, no-nonsense spirituality that works through action. Offer him hearty food and drink at a rooted oak or earth altar. He responds to humor, groundedness, and direct requests. Call on him when you need the strength to carry heavy burdens.',
        affirmation: '"I am nourished, protected, and abundant — I give as freely as I receive."',
        traditions: ['Druidry', 'Celtic Paganism', 'Eclectic']
    },

    {
        name: 'Rhiannon',
        epithet: 'Sovereign Queen of the White Horse',
        emoji: '🐎',
        pantheon: 'Celtic',
        gender: 'feminine',
        domains: ['Magic', 'Death', 'Rebirth', 'Moon', 'Sovereignty', 'Animals'],
        element: 'Air',
        planet: 'Moon',
        symbols: ['White Mare', 'Birds of Rhiannon', 'Golden Bowl', 'Otherworldly Birds'],
        sacred_animals: ['White Horse', 'Bird (Three Sacred)'],
        sacred_plants: ['White Rose', 'Hawthorn', 'Willow', 'Apple'],
        crystals: ['Moonstone', 'White Opal', 'Pearl', 'Selenite'],
        colors: ['White', 'Silver', 'Gold'],
        offerings: ['Bird seed', 'Silver coins', 'White flowers', 'Honey mead', 'Horse imagery'],
        festivals: ['Imbolc (Feb 1–2)', 'Midsummer (Jun 21)'],
        mythology: 'Rhiannon is a major figure of Welsh mythology, appearing in the Mabinogi as a supernatural woman from the Otherworld who rides an impossibly swift white horse. She is wrongly accused of killing her son Pryderi and made to carry guests on her back like a horse as punishment — yet she endures with grace and dignity. Her name derives from *Rigantona, "Great Queen," and she is associated with the horse goddess Epona. Her three birds sing the living to sleep and wake the dead. She embodies endurance, sovereignty wrongly stripped and reclaimed, and the Otherworld\'s deep magic.',
        working_with: 'Rhiannon is a patron for those who have suffered false accusations, who are processing grief and loss, and who are reclaiming their sovereignty after difficult experiences. She also helps with connecting to horse energy, Otherworld journeys, and working with ancestral wisdom. Offer her white flowers, birdsong recordings, or time spent near horses. She is patient, deep, and steady. Working with her involves releasing old shame and riding forward.',
        affirmation: '"I reclaim my power and ride with grace through every trial."',
        traditions: ['Druidry', 'Celtic Paganism', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Manannán mac Lir',
        epithet: 'Lord of the Sea & Keeper of the Otherworld',
        emoji: '🌊',
        pantheon: 'Celtic',
        gender: 'masculine',
        domains: ['Sea & Water', 'Magic', 'Death', 'Illusion', 'Otherworld', 'Wisdom'],
        element: 'Water',
        planet: 'Moon',
        symbols: ['Mantle of Mists', 'Wave Sweeper', 'Sword of Light', 'Crane Bag'],
        sacred_animals: ['Sea Eagle', 'Crane', 'Pig', 'Salmon'],
        sacred_plants: ['Seaweed', 'Apple', 'Hazel'],
        crystals: ['Aquamarine', 'Blue Lace Agate', 'Sea Glass', 'Clear Quartz'],
        colors: ['Blue', 'Green', 'Silver', 'Gray'],
        offerings: ['Sea glass', 'Salt water', 'Shells', 'Hazelnuts', 'Apple slices'],
        festivals: ['Midsummer (Jun 21)', 'Samhain (Oct 31)'],
        mythology: 'Manannán mac Lir is the Irish god of the sea and the Otherworld, keeper of the Blessed Isles beyond the western horizon — Tír na nÓg and the Mag Mell. He rides the waves in his chariot and his horse Enbarr can travel equally on sea and land. His Crane Bag contained the treasures of the Otherworld — visible only at high tide. He is a master of illusion, shaping mist and perception to guide souls and conceal sacred things. In Isle of Man tradition he is the island\'s founder and first ruler.',
        working_with: 'Manannán is called upon for sea magic, veil-thinning work, Otherworld journeys, and seeing through illusion. He is a guide for the recently bereaved and for those doing work with the ancestral dead. Approach him at the ocean\'s edge or through scrying with water. He is playful but vast — do not mistake his humor for shallowness. Offerings of sea glass and shells left at tidelines reach him. He helps with psychic development and the art of sacred deception.',
        affirmation: '"I move between worlds with ease, seeing through illusion to the deeper truth."',
        traditions: ['Celtic Paganism', 'Druidry', 'Eclectic']
    },

    // ========================================
    // GREEK / ROMAN (10)
    // ========================================

    {
        name: 'Hecate',
        epithet: 'Goddess of Magic, Crossroads & Witchcraft',
        emoji: '🗝️',
        pantheon: 'Greek',
        gender: 'feminine',
        domains: ['Magic', 'Crossroads', 'Death', 'Moon', 'Protection', 'Wisdom'],
        element: 'Fire',
        planet: 'Moon',
        symbols: ['Twin Torches', 'Keys', 'Three-Way Crossroads', 'Dogs', 'Torch'],
        sacred_animals: ['Dog', 'Polecat', 'Owl', 'Snake', 'Frog'],
        sacred_plants: ['Yew', 'Garlic', 'Mandrake', 'Mugwort', 'Lavender', 'Belladonna'],
        crystals: ['Black Tourmaline', 'Moonstone', 'Obsidian', 'Labradorite'],
        colors: ['Black', 'Silver', 'White', 'Saffron Yellow'],
        offerings: ['Garlic', 'Eggs', 'Honey', 'Fish', 'Black dog imagery', 'Keys'],
        festivals: ['Samhain (Oct 31)', 'August 13 (Hecate Festival)', 'Dark Moon monthly'],
        mythology: 'Hecate is one of the most ancient and complex Greek goddesses, a Titaness who retained her powers even after the Olympian order took hold. In Hesiod she is a goddess of supreme power: she grants strength in battle, wisdom in council, and luck to sailors and athletes. Over time she became associated with the liminal — crossroads, night, magic, and the dead. In later traditions she appears as a triple-formed goddess, holding two torches, standing at the three-way crossing. She is the torchbearer who illuminates what others cannot see, and the key-keeper who opens the locked doors of the underworld.',
        working_with: 'Hecate is a profound ally for witches, magic workers, and those walking shadow paths. Leave deipna (Hecate\'s supper) — garlic, eggs, honey, fish — at a three-way crossroads on the dark moon. She welcomes those working with death magic, ancestor contact, and the liminal spaces. Light black and white candles at her altar. She will strip away illusion and show you what is true, which can be confronting but deeply liberating. She is particularly helpful for protection, uncrossings, and magic involving revelation.',
        affirmation: '"I stand at the crossroads of power, torch held high, unafraid of the dark."',
        traditions: ['Wiccan', 'Hellenic', 'Eclectic', 'Chaos Magick']
    },

    {
        name: 'Aphrodite',
        epithet: 'Goddess of Love, Beauty & Desire',
        emoji: '🌹',
        pantheon: 'Greek',
        gender: 'feminine',
        domains: ['Love', 'Beauty', 'Fertility', 'Pleasure', 'Sea & Water'],
        element: 'Water',
        planet: 'Venus',
        symbols: ['Dove', 'Swan', 'Rose', 'Shell', 'Myrtle Wreath', 'Mirror'],
        sacred_animals: ['Dove', 'Swan', 'Sparrow', 'Dolphin', 'Hare'],
        sacred_plants: ['Rose', 'Myrtle', 'Apple', 'Anemone', 'Verbena'],
        crystals: ['Rose Quartz', 'Pink Tourmaline', 'Emerald', 'Pearl', 'Rhodonite'],
        colors: ['Pink', 'Red', 'Gold', 'White', 'Sea Blue'],
        offerings: ['Roses', 'Honey cakes', 'Rose incense', 'Wine', 'Shells', 'Mirror'],
        festivals: ['Aphrodisia (July/August)', 'Beltane (May 1)', 'Friday Veneration'],
        mythology: 'Aphrodite arose from the sea-foam (aphros) where Uranus\'s severed form fell — born of sky meeting sea, desire from cosmic disruption. Her Roman counterpart Venus was equally powerful; her son Aeneas founded Rome. She governs all forms of love and union: romantic love, sensual pleasure, creative desire, the magnetism between polarities. She gave the golden apple to Paris and launched the Trojan War. Her power is irresistible — even the other gods fell under her spell. She shows that desire itself is a divine force, not to be suppressed but channeled.',
        working_with: 'Aphrodite assists with love spells, self-love cultivation, beauty rituals, and magnetizing what your heart desires. Approach her on Fridays with roses, honey offerings, and rose incense. She rewards those who cultivate beauty in themselves and their environment. For self-love work, bathe with rose petals and sea salt while invoking her. She helps with all matters of the heart — both opening it and healing it after loss. She is generous to those who respect her domain and honor pleasure without shame.',
        affirmation: '"I am worthy of love, beautiful in my essence, and magnetic to my heart\'s desire."',
        traditions: ['Wiccan', 'Hellenic', 'Eclectic']
    },

    {
        name: 'Artemis',
        epithet: 'Goddess of the Hunt, Moon & Wild Places',
        emoji: '🏹',
        pantheon: 'Greek',
        gender: 'feminine',
        domains: ['Nature', 'Moon', 'Protection', 'Animals', 'Healing', 'Childbirth'],
        element: 'Air',
        planet: 'Moon',
        symbols: ['Silver Bow & Arrow', 'Crescent Moon', 'Stag', 'Cypress Tree'],
        sacred_animals: ['Deer', 'Bear', 'Boar', 'Guinea Fowl', 'Wolf'],
        sacred_plants: ['Cypress', 'Amaranth', 'Wormwood', 'Hazel', 'Mugwort'],
        crystals: ['Moonstone', 'Selenite', 'Clear Quartz', 'Labradorite'],
        colors: ['Silver', 'White', 'Green', 'Midnight Blue'],
        offerings: ['Moonwater', 'Silver items', 'Animal images', 'Hunting imagery', 'Crescent Moon cakes'],
        festivals: ['Full Moon nights', 'Artemia festival (April)', 'August 13'],
        mythology: 'Artemis, twin of Apollo, asked her father Zeus on her third birthday for eternal chastity, a silver bow, and the forest as her domain. Born on the island of Delos, she assisted her mother Leto in delivering Apollo — making her also a goddess of childbirth. She is the eternal virgin hunter, leading her band of nymphs through wild places, fiercely protective of her companions and terrible in her vengeance against violation. She transformed Actaeon into a stag when he spied on her bathing. Her Roman counterpart Diana was one of the most widely worshipped deities in the ancient world.',
        working_with: 'Artemis is a powerful ally for those who value independence, protection of the vulnerable, and connection with wild nature. She is called on for protection of children and women, for hunting and gathering, for animal communication, and for full moon work. Approach her at the full moon with silver offerings or moonwater. She helps those healing from violation or boundary-crossing. She particularly supports those who choose their own path, unbothered by social expectations. Spend time in wild nature to strengthen your connection with her.',
        affirmation: '"I am sovereign over my own body and path, free and fierce in my independence."',
        traditions: ['Wiccan', 'Hellenic', 'Eclectic', 'Green Witch']
    },

    {
        name: 'Hermes',
        epithet: 'Divine Messenger, Guide of Souls & Trickster',
        emoji: '🪶',
        pantheon: 'Greek',
        gender: 'masculine',
        domains: ['Communication', 'Wisdom', 'Magic', 'Death', 'Travel', 'Arts & Craft'],
        element: 'Air',
        planet: 'Mercury',
        symbols: ['Caduceus', 'Winged Sandals', 'Winged Cap', 'Tortoise Shell Lyre'],
        sacred_animals: ['Tortoise', 'Ram', 'Rooster', 'Hawk'],
        sacred_plants: ['Crocus', 'Strawberry Tree', 'Palm Tree', 'Mint'],
        crystals: ['Agate', 'Citrine', 'Yellow Jasper', 'Amber', 'Fluorite'],
        colors: ['Yellow', 'Orange', 'Silver', 'Purple'],
        offerings: ['Honey', 'Incense', 'Cakes', 'Wine', 'Small coins', 'Writing tools'],
        festivals: ['May 15 (Mercuralia)', 'Wednesday (his day)', 'New Moon'],
        mythology: 'Hermes was born at dawn in a cave on Mount Cyllene. By that afternoon the infant prodigy had invented the lyre from a tortoise shell, stolen Apollo\'s sacred cattle, and negotiated his own divine status with Zeus. He is the Psychopomp — guide of souls to the underworld — and the sole Olympian who could freely move between the three realms: sky, earth, and underworld. He is patron of travelers, merchants, thieves, and messengers. In Hermeticism his Egyptian counterpart Thoth-Hermes became the divine source of occult knowledge.',
        working_with: 'Hermes is called upon for communication magic, safe travel, intellectual work, trickster wisdom, and psychopomp work with the dying or dead. He aids writers, speakers, merchants, and thieves. Approach him on Wednesdays with winged imagery, yellow candles, and offerings of honey or small coins. He works quickly and often unexpectedly. Invoke him before important negotiations, job interviews, or creative presentations. He also helps with divination, being so close to the thresholds of knowing.',
        affirmation: '"I communicate clearly, move freely, and carry wisdom between worlds."',
        traditions: ['Hellenic', 'Hermetic', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Persephone',
        epithet: 'Queen of the Underworld & Daughter of Spring',
        emoji: '🌸',
        pantheon: 'Greek',
        gender: 'feminine',
        domains: ['Death', 'Rebirth', 'Fertility', 'Spring', 'Magic', 'Underworld'],
        element: 'Earth',
        planet: 'Pluto',
        symbols: ['Pomegranate', 'Torch', 'Flowers', 'Wheat', 'Narcissus'],
        sacred_animals: ['Bat', 'Parrot', 'Deer', 'Ram'],
        sacred_plants: ['Pomegranate', 'Narcissus', 'Lavender', 'Lily', 'Mint', 'Asphodel'],
        crystals: ['Garnet', 'Obsidian', 'Rose Quartz', 'Malachite'],
        colors: ['Pomegranate Red', 'Black', 'Pink', 'White', 'Spring Green'],
        offerings: ['Pomegranate seeds', 'Flowers', 'Honey', 'Black sesame seeds', 'Spring water'],
        festivals: ['Thesmophoria (Oct)', 'Spring Equinox (Mar)', 'Autumn Equinox (Sep)'],
        mythology: 'Persephone, daughter of Demeter, was gathering flowers when Hades opened the earth and pulled her into the underworld. Her mother\'s grief turned the earth barren until Zeus negotiated her return — but Persephone had eaten six pomegranate seeds, binding her to the underworld for six months of each year. Her descent and return became the mythological explanation for winter and spring. In time she became not a victim but a queen in her own right: co-ruler of the dead, wielder of underworld power, a figure of profound transformation and of life found through death.',
        working_with: 'Persephone is a powerful ally for shadow integration, descent work, processing grief, and navigating major life transitions. She represents the part of us that must go into the dark to emerge transformed. Work with her in autumn and winter for deep underworld journeys, or in spring for resurrection and renewal themes. Pomegranate seeds are her primary offering. She is particularly helpful for those dealing with loss, abuse recovery, or any "descent" experience — relationship breakdown, illness, depression.',
        affirmation: '"I descend with grace and ascend transformed, holding power in both realms."',
        traditions: ['Hellenic', 'Wiccan', 'Eclectic']
    },

    {
        name: 'Zeus',
        epithet: 'King of the Gods & Lord of Thunder',
        emoji: '🌩️',
        pantheon: 'Greek',
        gender: 'masculine',
        domains: ['Protection', 'Wisdom', 'War', 'Fate', 'Sun & Light', 'Justice'],
        element: 'Air',
        planet: 'Jupiter',
        symbols: ['Thunderbolt', 'Eagle', 'Oak', 'Bull', 'Scepter', 'Aegis'],
        sacred_animals: ['Eagle', 'Bull', 'Swan', 'Cuckoo'],
        sacred_plants: ['Oak', 'Olive', 'Laurel', 'Cedar'],
        crystals: ['Sapphire', 'Lapis Lazuli', 'Gold Citrine', 'Blue Kyanite'],
        colors: ['Blue', 'Gold', 'White', 'Royal Purple'],
        offerings: ['Wine', 'Grain', 'Oak wood incense', 'Gold items', 'Eagle imagery'],
        festivals: ['Olympic Games', 'Diasia (Feb)', 'Thursday (Jupiter\'s day)'],
        mythology: 'Zeus overthrew his father Cronus to become king of Olympus, ruler of sky and thunder, final arbiter of fate among gods and mortals. He drew the lot of sky when the cosmos was divided among the three brothers; Poseidon got the sea and Hades the underworld. His thunderbolt was his supreme weapon, forged by the Cyclopes. As the cosmic lawgiver he upheld xenia (sacred hospitality) and divine justice — but his mythology is also complex, including many acts of power and transformation. The Romans identified him with Jupiter, and Thursday (Jovis dies) remains his day.',
        working_with: 'Zeus is invoked for justice, legal matters, authority, leadership, and large-scale protection. He is the cosmic order-keeper — call on him when you need things to be set right on a large scale, or when you need the backing of divine authority. Approach him on Thursdays with oak wood incense, blue candles, and grain offerings. He works well for protection of households and communities. His energy is large, powerful, and impersonal — he sees the broad view.',
        affirmation: '"I stand in my authority with integrity, wielding power in service of justice."',
        traditions: ['Hellenic', 'Eclectic']
    },

    {
        name: 'Apollo',
        epithet: 'God of Sun, Music, Poetry & Prophecy',
        emoji: '🌞',
        pantheon: 'Greek',
        gender: 'masculine',
        domains: ['Sun & Light', 'Arts & Craft', 'Healing', 'Wisdom', 'Prophecy', 'Protection'],
        element: 'Fire',
        planet: 'Sun',
        symbols: ['Lyre', 'Laurel Wreath', 'Silver Bow', 'Sun Chariot', 'Tripod'],
        sacred_animals: ['Raven', 'Dolphin', 'Swan', 'Wolf', 'Mouse'],
        sacred_plants: ['Laurel', 'Hyacinth', 'Larkspur', 'Cypress', 'Sunflower'],
        crystals: ['Sunstone', 'Topaz', 'Amber', 'Gold Calcite', 'Chrysolite'],
        colors: ['Gold', 'White', 'Yellow', 'Silver'],
        offerings: ['Laurel branches', 'Honey', 'Sunflowers', 'Music offerings', 'Poetry', 'White animals'],
        festivals: ['Pythian Games (Aug)', 'Thargelia (May 7)', 'Sunday (Sol Invictus)'],
        mythology: 'Apollo is the quintessential divine artist and healer, twin brother of Artemis, son of Zeus and Leto. He drove the sun chariot across the sky, played the golden lyre that moved stones and calmed seas, and presided over the Oracle at Delphi — the most influential prophecy site in the ancient world. He slew the serpent Python to claim Delphi and became the god of purification. He taught medicine to Chiron and is father of Asclepius, god of healing. His is the ideal of the civilized, rational, and beautiful — the Apollonian balance to the Dionysian.',
        working_with: 'Apollo is a patron for musicians, poets, healers, prophets, and anyone working with solar energy. Invoke him for creative projects, healing work, divination, and clarity of mind. Work with him on Sundays with gold candles, laurel, and honey offerings. He helps with artistic block, performance anxiety, and the courage to speak truth. Spend time in sunlight to connect with his energy. He aids with healing of eyes and distance-perception — both physical and psychic sight.',
        affirmation: '"I shine my truth with clarity and create beauty wherever I go."',
        traditions: ['Hellenic', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Athena',
        epithet: 'Goddess of Wisdom, Strategy & Crafts',
        emoji: '🦉',
        pantheon: 'Greek',
        gender: 'feminine',
        domains: ['Wisdom', 'War', 'Arts & Craft', 'Protection', 'Justice'],
        element: 'Air',
        planet: 'Mercury',
        symbols: ['Owl', 'Olive Tree', 'Aegis', 'Spear', 'Helmet', 'Gorgon Shield'],
        sacred_animals: ['Owl', 'Serpent', 'Crane', 'Rooster'],
        sacred_plants: ['Olive', 'Oak', 'Hellebore'],
        crystals: ['Lapis Lazuli', 'Sapphire', 'Blue Agate', 'Clear Quartz', 'Sodalite'],
        colors: ['Gray', 'Blue', 'Gold', 'White'],
        offerings: ['Olive oil', 'Owl imagery', 'Handcrafts', 'Writing tools', 'Helmet imagery'],
        festivals: ['Panathenaia (Athens, Jul/Aug)', 'March 19 (Quinquatria)', 'Monday'],
        mythology: 'Athena leaped fully formed and armored from the forehead of Zeus — born not of woman but of divine intellect itself. She is the goddess of wisdom applied: strategic thinking, skilled craftsmanship, just warfare, and the arts of civilization. Her rivalry with Poseidon for Athens ended when she gave the city an olive tree — judged more valuable than a saltwater spring. She is Odysseus\'s divine patron, guiding his mind and disguises throughout the Odyssey. Her owl sees in the dark; her wisdom illuminates the hidden.',
        working_with: 'Athena is a powerful patron for students, strategists, craftspeople, lawyers, and warriors of all kinds. She is particularly helpful with intellectual challenges, difficult decisions requiring strategy, and protection through wisdom rather than force. Approach her with olive oil, owl imagery, and blue or gray candles. She rewards careful preparation and skillful execution. Call on her before examinations, negotiations, or any situation requiring clear-headed strategy.',
        affirmation: '"I think before I act, craft with intention, and protect what is just."',
        traditions: ['Hellenic', 'Eclectic', 'Ceremonial']
    },

    {
        name: 'Hephaestus',
        epithet: 'God of the Forge, Fire & Craftsmanship',
        emoji: '⚒️',
        pantheon: 'Greek',
        gender: 'masculine',
        domains: ['Fire', 'Arts & Craft', 'Protection', 'Healing'],
        element: 'Fire',
        planet: 'Mars',
        symbols: ['Hammer', 'Tongs', 'Anvil', 'Volcanic Fire', 'Net'],
        sacred_animals: ['Donkey', 'Crane', 'Dog', 'Dove'],
        sacred_plants: ['Alder', 'Fennel', 'Juniper'],
        crystals: ['Fire Opal', 'Garnet', 'Pyrite', 'Red Jasper', 'Hematite'],
        colors: ['Red', 'Orange', 'Gold', 'Black'],
        offerings: ['Handmade objects', 'Metal items', 'Incense', 'Wine', 'Fire', 'Craft tools'],
        festivals: ['Hephaistia (Athens, July)', 'Vulcanalia (Aug 23)', 'Tuesday'],
        mythology: 'Hephaestus is the divine craftsman, the only Olympian who works with his hands. Cast from Olympus by his mother Hera for his lameness, he later took his revenge by trapping her on a magical throne of his own creation. He forged the armor of Achilles, the chains that bound Prometheus, the net that caught Ares and Aphrodite in their affair, and countless divine objects. His forge is beneath the volcano — his fires are the earth\'s creative heat, the transformative power that turns raw material into art. He is the patron of all makers.',
        working_with: 'Hephaestus is the ultimate patron of makers, craftspeople, blacksmiths, jewelers, potters, and anyone who transforms raw materials into beautiful or useful things. He is also a patron of those who have been cast out, overlooked, or rejected — he knows the divine worth of the one who does not fit. Leave offerings of handmade things, metal scraps, or tools at his altar. Work with him when beginning a new craft or technical skill. He responds to dedication and honest work.',
        affirmation: '"I transform raw materials into beauty through my skilled and devoted hands."',
        traditions: ['Hellenic', 'Eclectic']
    },

    {
        name: 'Demeter',
        epithet: 'Goddess of the Harvest, Grain & Sacred Law',
        emoji: '🌾',
        pantheon: 'Greek',
        gender: 'feminine',
        domains: ['Fertility', 'Earth', 'Healing', 'Protection', 'Abundance', 'Nature'],
        element: 'Earth',
        planet: 'Moon',
        symbols: ['Sheaf of Wheat', 'Cornucopia', 'Poppy', 'Torch', 'Serpent'],
        sacred_animals: ['Serpent', 'Gecko', 'Pig', 'Crane'],
        sacred_plants: ['Wheat', 'Poppy', 'Mint', 'Sunflower', 'Barley'],
        crystals: ['Green Calcite', 'Peridot', 'Citrine', 'Brown Jasper', 'Amber'],
        colors: ['Green', 'Gold', 'Brown', 'Red'],
        offerings: ['First fruits', 'Grain', 'Poppies', 'Honey cakes', 'Bread', 'Earth'],
        festivals: ['Thesmophoria (Oct)', 'Eleusinian Mysteries (Sep)', 'Autumn Equinox (Sep)'],
        mythology: 'Demeter is the Greek goddess of grain and harvest, mother of Persephone, and one of the twelve Olympians. When Hades took her daughter, Demeter\'s grief brought winter to the world — she withdrew her gifts and the earth went barren. It was she who taught humanity agriculture and the sacred laws of civilization. The Eleusinian Mysteries, the most sacred initiatory rites in ancient Greece, centered on her myth and Persephone\'s descent. Initiates were said to lose their fear of death through participation in this cycle of descent and return.',
        working_with: 'Demeter is a patron of abundance magic, garden work, feeding the hungry, maternal protection, and grief work. She is a goddess who understands mourning — invoke her when processing loss or supporting others through grief. She also helps with food abundance, agricultural projects, and protection of children. Approach her with grain, bread, and green candles. She responds well to time spent in gardens and the growing of food. Autumn is her season of harvest and lamentation.',
        affirmation: '"I nourish and am nourished. My love sustains the world."',
        traditions: ['Hellenic', 'Wiccan', 'Eclectic', 'Green Witch']
    },

    // ========================================
    // NORSE (8)
    // ========================================

    {
        name: 'Odin',
        epithet: 'Allfather, God of Wisdom, War & Magic',
        emoji: '🌀',
        pantheon: 'Norse',
        gender: 'masculine',
        domains: ['Wisdom', 'War', 'Magic', 'Death', 'Prophecy', 'Poetry'],
        element: 'Air',
        planet: 'Mercury',
        symbols: ['Gungnir (Spear)', 'Valknut', 'Ravens Huginn & Muninn', 'Wolves Geri & Freki', 'Mjolnir'],
        sacred_animals: ['Raven', 'Wolf', 'Eight-legged Horse Sleipnir'],
        sacred_plants: ['Ash', 'Yew', 'Mistletoe', 'Norse Runes'],
        crystals: ['Blue Kyanite', 'Lapis Lazuli', 'Obsidian', 'Sodalite'],
        colors: ['Blue', 'Black', 'Gray', 'Gold'],
        offerings: ['Mead', 'Poetry', 'Self-made runes', 'Blood (symbolic)', 'Battle relics', 'Eye imagery'],
        festivals: ['Winter Solstice / Yule (Dec 21)', 'Wednesday (Woden\'s day)', 'Wild Hunt nights'],
        mythology: 'Odin hung nine days and nights on Yggdrasil, the World Tree, wounded by his own spear, sacrificing himself to himself to discover the runes — the primal symbols of power and knowledge. He gave one eye to Mimir\'s well to drink its wisdom. His ravens Huginn (Thought) and Muninn (Memory) fly the nine worlds and report back at his shoulders. He is not a comfortable god: he abandons warriors at the moment of victory, demands sacrifice, and is the gatherer of the heroic dead for Ragnarök. To know him is to be tested.',
        working_with: 'Odin is called by those who pursue wisdom at great cost, who work with the runes, who engage in seidr (Norse shamanic magic), or who serve the war dead. He responds to sacrifice and is not easily petitioned for small matters. Hang in effigy, or spend a night of vigil in deep contemplation, to reach him. Offerings of mead, poetry, and self-made runic art honor him. He works best with those who have something to give — knowledge, creativity, sacrifice. Wednesday is his day.',
        affirmation: '"I pursue wisdom without fear of the cost, for knowledge transforms all things."',
        traditions: ['Heathen', 'Asatru', 'Eclectic']
    },

    {
        name: 'Freya',
        epithet: 'Goddess of Love, War & Seidr Magic',
        emoji: '🐈',
        pantheon: 'Norse',
        gender: 'feminine',
        domains: ['Love', 'War', 'Magic', 'Fertility', 'Death', 'Prophecy'],
        element: 'Fire',
        planet: 'Venus',
        symbols: ['Brisingamen Necklace', 'Cloak of Feathers', 'Chariot pulled by Cats', 'Boar Hildisvíni'],
        sacred_animals: ['Cat', 'Boar', 'Falcon', 'Hawk'],
        sacred_plants: ['Birch', 'Rose', 'Cowberry', 'Primrose'],
        crystals: ['Amber', 'Rose Quartz', 'Garnet', 'Gold'],
        colors: ['Gold', 'Red', 'Amber', 'Green'],
        offerings: ['Amber', 'Honey mead', 'Roses', 'Gold items', 'Cats (imagery)', 'Chocolate'],
        festivals: ['Beltane (May 1)', 'Friday (Freya\'s day)', 'Summer Solstice (Jun 21)'],
        mythology: 'Freya is the preeminent goddess of the Vanir, sister of Freyr, daughter of Njörðr. She is both love goddess and völva — a practitioner of seidr magic so powerful that she taught it to Odin himself. She chooses half of the battle-slain, bringing them to her hall Fólkvangr while Odin takes the other half to Valhalla. She wears the legendary necklace Brisingamen, obtained through her own agency. Her tears fall as red gold, and she has wept for her missing husband Óðr throughout time — her grief is as great as her joy.',
        working_with: 'Freya is a beautiful, fierce, and generous patron for love magic, seidr and Norse divination, battle protection, and magic work in general. She is excellent for self-love cultivation, attracting romantic partners, fertility work, and grief support. Approach her on Fridays with amber, honey mead, and rose offerings. She rewards directness and passion. Her cats (imagined or real) are sacred to her. She holds the space between love and war, life and death — her help comes from that powerful, full-spectrum knowing.',
        affirmation: '"I love deeply, fight fiercely, and weave my magic with unapologetic power."',
        traditions: ['Heathen', 'Asatru', 'Wiccan', 'Eclectic']
    },

    {
        name: 'Thor',
        epithet: 'God of Thunder, Protection & Strength',
        emoji: '🔨',
        pantheon: 'Norse',
        gender: 'masculine',
        domains: ['Protection', 'War', 'Nature', 'Fertility', 'Healing'],
        element: 'Air',
        planet: 'Mars',
        symbols: ['Mjolnir (Hammer)', 'Lightning Bolt', 'Iron Gloves', 'Belt of Strength'],
        sacred_animals: ['Goat', 'Ram', 'Ox'],
        sacred_plants: ['Oak', 'Houseleek', 'Mistletoe', 'Rowan'],
        crystals: ['Red Jasper', 'Bloodstone', 'Carnelian', 'Garnet', 'Pyrite'],
        colors: ['Red', 'Orange', 'Gold', 'Blue'],
        offerings: ['Mead', 'Meat', 'Oak wood', 'Lightning imagery', 'Mjolnir pendants'],
        festivals: ['Midsummer (Jun 21)', 'Thursday (Thor\'s day)', 'Storms'],
        mythology: 'Thor is the son of Odin and the earth goddess Jörð, champion of Asgard and humanity\'s greatest protector. He drives his chariot across the sky — the rumbling of wheels becoming thunder, the flash of Mjolnir becoming lightning. He is immensely strong, quick to anger, and ferociously protective of gods and mortals alike. His hammer Mjolnir blesses marriages and the dead; it hallows sacred space. Despite his battle prowess, Thor is beloved for his directness, loyalty, and deep humanity — he is the warrior who fights for common people.',
        working_with: 'Thor is the most accessible of the Norse gods — direct, loyal, and deeply protective. Call on him for protection of home and family, courage in conflict, strength in difficult times, and blessing of tools or new projects. He is particularly helpful for those dealing with bullying, injustice, or physical threats. Approach him on Thursdays with mead, oak offerings, and Mjolnir imagery. He responds to honest directness and hard work. He is the god who gets things done.',
        affirmation: '"I am strong, protective, and unstoppable in defense of what I love."',
        traditions: ['Heathen', 'Asatru', 'Eclectic']
    },

    {
        name: 'Loki',
        epithet: 'Trickster God of Chaos, Change & Fire',
        emoji: '🔥',
        pantheon: 'Norse',
        gender: 'all',
        domains: ['Magic', 'Fire', 'Wisdom', 'Death', 'Fate'],
        element: 'Fire',
        planet: 'Mercury',
        symbols: ['Flame', 'Snake', 'Net', 'Mistletoe', 'Shapeshifting'],
        sacred_animals: ['Snake', 'Fly', 'Salmon', 'Wolf', 'Horse (as mare)'],
        sacred_plants: ['Nettle', 'Loki\'s Oats (nightshade)', 'Wildfire herbs'],
        crystals: ['Obsidian', 'Pyrite', 'Fire Agate', 'Red Garnet'],
        colors: ['Red', 'Black', 'Orange', 'Flame Yellow'],
        offerings: ['Spicy food', 'Fire', 'Chaotic humor', 'Puzzle games', 'Photographs of trickery', 'Salmon'],
        festivals: ['Samhain (Oct 31)', 'Summer Solstice (Jun 21)', 'Unpredictable moments'],
        mythology: 'Loki is the most complex figure in Norse mythology — blood-brother to Odin, father of monsters (Fenrir, Jörmungandr, Hel), and mother of Sleipnir (shapeshifted as a mare). He is an agent of change who brings both catastrophic harm and essential innovation. He helped retrieve Thor\'s hammer. He caused the death of Baldr. He outwitted giants and helped build Asgard\'s walls. He is chaos given form — the unpredictable principle that breaks what is rigid and forces evolution. His children will end the world; without him it would never have been shaped.',
        working_with: 'Loki is an ally for breaking through stuck situations, creative rule-breaking, shadow work with the trickster archetype, and working with chaos as a generative force. He is not for the faint-hearted — he will expose what is rigid and brittle in you. Approach him with humor, spicy food, and genuine respect for the unknown. He is a good patron for writers who bend genre, comedians, and activists who use unexpected methods. Never approach him seeking control — he will eat that impulse whole.',
        affirmation: '"I embrace change and chaos as teachers, finding wisdom in unexpected forms."',
        traditions: ['Heathen', 'Eclectic', 'Chaos Magick']
    },

    {
        name: 'Hel',
        epithet: 'Ruler of the Realm of the Dead',
        emoji: '☽',
        pantheon: 'Norse',
        gender: 'feminine',
        domains: ['Death', 'Underworld', 'Fate', 'Healing', 'Wisdom'],
        element: 'Earth',
        planet: 'Saturn',
        symbols: ['Half-Living, Half-Dead Face', 'Niflheim Gates', 'Hunger & Famine (companions)'],
        sacred_animals: ['Serpent', 'Crow', 'Dog', 'Wolf'],
        sacred_plants: ['Yew', 'Nightshade', 'Cypress', 'Rue'],
        crystals: ['Obsidian', 'Jet', 'Black Onyx', 'Smoky Quartz'],
        colors: ['Black', 'White', 'Gray', 'Bone'],
        offerings: ['Bones', 'Cold water', 'Dark bread', 'Dead flowers', 'Dark mead'],
        festivals: ['Samhain (Oct 31)', 'Winter Solstice (Dec 21)', 'New Moon'],
        mythology: 'Hel is the daughter of Loki and the giantess Angrboða, ruler of Niflheim — the realm of those who die of illness, old age, or any death that is not in battle. Her body is half-living flesh and half-rotted death, a physical manifestation of the border between states. Odin cast her into the underworld realm and gave her authority over the dead. She is not cruel but implacable — when Baldr died and the gods begged for his return, she set an impossible condition: every being in the nine worlds must weep for him. Loki, disguised, refused. And so Baldr remained.',
        working_with: 'Hel is an ally for death work, ancestor communication, hospice support, deep grief processing, and confronting mortality. She governs the vast majority of the dead — those who lived and died quietly, in illness, in age — and honors ordinary life lived well. Approach her with cold water, dark bread, and bone imagery. She is clear-eyed and undeceivable. She receives the dead without judgment. Working with her brings a paradoxical peace about the reality of death.',
        affirmation: '"I accept both life and death as sacred, finding peace in every transition."',
        traditions: ['Heathen', 'Asatru', 'Eclectic']
    },

    {
        name: 'Frigg',
        epithet: 'Queen of Asgard, Goddess of Fate & Home',
        emoji: '🌿',
        pantheon: 'Norse',
        gender: 'feminine',
        domains: ['Fertility', 'Wisdom', 'Fate', 'Healing', 'Protection'],
        element: 'Air',
        planet: 'Venus',
        symbols: ['Distaff', 'Spinning Wheel', 'Keys', 'Falcon Cloak', 'Mistletoe'],
        sacred_animals: ['Raven', 'Hawk', 'Sheep'],
        sacred_plants: ['Birch', 'Flax', 'Mistletoe', 'Lily of the Valley'],
        crystals: ['Moonstone', 'Silver', 'Pearl', 'White Opal'],
        colors: ['White', 'Silver', 'Blue', 'Gold'],
        offerings: ['Wool', 'White flowers', 'Honey mead', 'Baby imagery', 'Birch branches'],
        festivals: ['Friday (Frigg\'s day)', 'Winter Solstice (Dec 21)', 'Spring Equinox'],
        mythology: 'Frigg is Odin\'s wife and Queen of Asgard, the only goddess besides Odin permitted to sit on the high seat Hliðskjálf and see all the nine worlds. She knows all fates but speaks of none — her power is her silence. She wept for her son Baldr before his death, extracting oaths from every being not to harm him, all except mistletoe. She is the goddess of weaving, spinning fate into form, and the mistress of the domestic arts that create civilized life. She and Freya are often confused but are distinct beings.',
        working_with: 'Frigg is a patron for mothers, keepers of the home, those working with fate, and weavers and fiber artists. She holds enormous power in her quiet knowing. Approach her on Fridays with white flowers and wool offerings, or any craft involving fiber and weaving. She helps with protection of children and households, fertility, and domestic magic. She is an ally for those who carry knowledge they cannot yet speak. Working with her deepens the ability to hold space for difficult processes.',
        affirmation: '"I hold the threads of fate with quiet wisdom and weave my life with love."',
        traditions: ['Heathen', 'Asatru', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Skadi',
        epithet: 'Goddess of Winter, Skiing & the Hunt',
        emoji: '🏔️',
        pantheon: 'Norse',
        gender: 'feminine',
        domains: ['Nature', 'War', 'Wisdom', 'Protection', 'Healing'],
        element: 'Earth',
        planet: 'Saturn',
        symbols: ['Skis', 'Bow & Arrow', 'Mountains', 'Snowshoes', 'Eagle'],
        sacred_animals: ['Wolf', 'Elk', 'Eagle', 'Snow Owl'],
        sacred_plants: ['Spruce', 'Pine', 'Arctic Moss', 'Snowdrop'],
        crystals: ['Clear Quartz', 'Howlite', 'White Calcite', 'Blue Agate'],
        colors: ['White', 'Gray', 'Ice Blue', 'Black'],
        offerings: ['Meat', 'Winter berries', 'Fir branches', 'Ice water', 'Bow imagery'],
        festivals: ['Winter Solstice (Dec 21)', 'Imbolc (Feb 1–2)', 'Candlemas'],
        mythology: 'Skadi is a giantess (jötunn) who came to Asgard armored and armed to avenge the killing of her father Þjazi, whom the gods had slain. Rather than fight, the Aesir offered her marriage as weregild — she chose her husband by looking only at feet, hoping to choose Baldr but selecting Njörðr instead. Their marriage failed because she could not bear the sea\'s sound and he could not endure the wolf-howl of mountains. She returned to her cold peaks and hunted alone. She is the goddess who refused compromise and claimed her own terms.',
        working_with: 'Skadi is a patron for those who are self-sufficient, fiercely independent, and at home in wild winter places. She helps with setting boundaries, protecting the self, and refusing unacceptable compromises. Work with her in winter, outdoors if possible, with cold water and winter offerings. She is excellent for those recovering from failed relationships or learning to live fully alone. She teaches the power and dignity of solitude. She guards mountain and wilderness spaces.',
        affirmation: '"I am at home in my own wilderness, strong and self-sufficient."',
        traditions: ['Heathen', 'Asatru', 'Eclectic']
    },

    {
        name: 'Tyr',
        epithet: 'God of Justice, Law & Honorable Sacrifice',
        emoji: '⚖️',
        pantheon: 'Norse',
        gender: 'masculine',
        domains: ['War', 'Wisdom', 'Protection', 'Fate'],
        element: 'Air',
        planet: 'Mars',
        symbols: ['Single Arm', 'Tyr Rune (↑)', 'Sword', 'Scales of Justice'],
        sacred_animals: ['Wolf (symbolically — he gave his hand to one)'],
        sacred_plants: ['Ash', 'Oak'],
        crystals: ['Garnet', 'Red Jasper', 'Iron Pyrite', 'Hematite'],
        colors: ['Red', 'Gold', 'Silver', 'Blood Red'],
        offerings: ['Sword imagery', 'Blood (symbolic)', 'Written oaths', 'Iron items', 'Mead'],
        festivals: ['Tuesday (Tyr\'s day)', 'Legal victories', 'Battle'],
        mythology: 'Tyr is an ancient sky god predating Odin in the Germanic pantheon — his name shares a root with Zeus and Jupiter (all from Proto-Indo-European *Dyeus, sky father). He is the god of honorable battle and law. The wolves were to be bound — but Fenrir would not allow it unless one of the gods placed their hand in his mouth as a pledge. Only Tyr stepped forward. When Fenrir was bound and Tyr\'s hand was bitten off, Tyr said nothing of treachery. He gave his hand to bind chaos, knowing the cost. His is the sacrifice of justice.',
        working_with: 'Tyr is invoked for legal matters, justice, honorable competition, and the courage to act rightly at great personal cost. He is a god of the kept promise and righteous sacrifice. Approach him on Tuesdays with sword imagery, iron, and oaths written by your own hand. He responds to those who are willing to accept consequences for doing the right thing. He helps legal situations, contract negotiations, and any conflict where justice must be sought through formal processes.',
        affirmation: '"I act with honor and accept the cost of doing right."',
        traditions: ['Heathen', 'Asatru', 'Eclectic']
    },

    // ========================================
    // EGYPTIAN (8)
    // ========================================

    {
        name: 'Isis',
        epithet: 'Great Mother, Goddess of Magic & Healing',
        emoji: '⭐',
        pantheon: 'Egyptian',
        gender: 'feminine',
        domains: ['Magic', 'Healing', 'Fertility', 'Protection', 'Death', 'Wisdom'],
        element: 'Air',
        planet: 'Moon',
        symbols: ['Ankh', 'Throne Headdress', 'Outstretched Wings', 'Sistrum', 'Tyet Knot'],
        sacred_animals: ['Kite (bird)', 'Cobra', 'Cow', 'Scorpion', 'Swallow'],
        sacred_plants: ['Lotus', 'Rose', 'Papyrus', 'Tamarisk', 'Heliotrope'],
        crystals: ['Lapis Lazuli', 'Moonstone', 'Turquoise', 'Carnelian', 'Clear Quartz'],
        colors: ['Blue', 'Black', 'Gold', 'White', 'Green'],
        offerings: ['Lotus flowers', 'Incense', 'Milk', 'Wine', 'Honey', 'Gold items'],
        festivals: ['Isia (Oct/Nov)', 'Night of the Teardrop (Jun 17)', 'Full Moon'],
        mythology: 'Isis is the greatest goddess of ancient Egypt, worshipped from the Nile delta to Rome and beyond. After Set killed and dismembered Osiris, Isis searched the length of Egypt to gather his pieces, reassembled him, and breathed life into him long enough to conceive their son Horus. She is the supreme magician — even Ra feared her magic and she extracted his secret name. She nursed Horus in hiding in the papyrus marshes, protecting him from Set. Her cult spread throughout the Mediterranean world and she became the template for later goddess figures including the Virgin Mary.',
        working_with: 'Isis is one of the most approachable and powerful goddess partners for any magical work. She is particularly helpful for healing, protection, magic study, grief work, and mother energy. She responds to invocations, ritual, and respectful petition. Approach her with lotus, incense, and lapis lazuli. She is excellent for healing work involving loss, for fertility support, and for any practice requiring deep magic. Her winged protection is among the most powerful in any tradition.',
        affirmation: '"My love is stronger than death, my magic recreates what has been lost."',
        traditions: ['Wiccan', 'Eclectic', 'Ceremonial', 'Kemetic']
    },

    {
        name: 'Osiris',
        epithet: 'Lord of the Dead, God of Resurrection & Fertility',
        emoji: '🌿',
        pantheon: 'Egyptian',
        gender: 'masculine',
        domains: ['Death', 'Rebirth', 'Fertility', 'Wisdom', 'Abundance', 'Earth'],
        element: 'Earth',
        planet: 'Saturn',
        symbols: ['Crook & Flail', 'White Mummy Wrappings', 'Green Skin', 'Atef Crown', 'Djed Pillar'],
        sacred_animals: ['Bull (Apis)', 'Phoenix', 'Ram', 'Crocodile'],
        sacred_plants: ['Barley', 'Wheat', 'Lotus', 'Ivy', 'Tamarisk'],
        crystals: ['Malachite', 'Green Jade', 'Emerald', 'Turquoise', 'Moss Agate'],
        colors: ['Green', 'Black', 'White', 'Gold'],
        offerings: ['Grain', 'Green plants', 'Water', 'Incense', 'Canopic images'],
        festivals: ['Mysteries of Osiris (Khoiak festival)', 'Autumn Equinox', 'Flooding of the Nile'],
        mythology: 'Osiris was the first king of Egypt who brought agriculture and civilization. His jealous brother Set killed him, dismembered him, and scattered his parts across the land. Isis reassembled him and, with Nephthys\'s help, restored him temporarily. He became the ruler of the Duat (underworld) and the judge of the dead. His resurrection and the weighing of hearts ceremony defined Egyptian concepts of the afterlife. He is the dying-and-rising god par excellence — the green man, the grain god, the promise that what dies will return.',
        working_with: 'Osiris is a patron for resurrection work — any project of renewal after destruction, healing after illness, life after grief. He is also a god of fertile abundance and excellent for agricultural magic. Approach him with grain offerings, green candles, and water. He governs the weighing of hearts — invoke him for work involving karmic justice, integrity, and the honesty of one\'s own soul. He is patient and just, a guide for the dead and for the many ways we die and are reborn in a single lifetime.',
        affirmation: '"I die and rise, renewed in every ending, fertile as the Nile\'s dark earth."',
        traditions: ['Kemetic', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Thoth',
        epithet: 'God of Writing, Wisdom & the Moon',
        emoji: '📜',
        pantheon: 'Egyptian',
        gender: 'masculine',
        domains: ['Wisdom', 'Moon', 'Arts & Craft', 'Magic', 'Healing', 'Prophecy'],
        element: 'Air',
        planet: 'Mercury',
        symbols: ['Ibis Head', 'Baboon', 'Writing Palette', 'Moon Disc', 'Was Scepter'],
        sacred_animals: ['Ibis', 'Baboon'],
        sacred_plants: ['Papyrus', 'Lotus', 'Palm'],
        crystals: ['Lapis Lazuli', 'Clear Quartz', 'Amazonite', 'Citrine'],
        colors: ['Blue', 'White', 'Silver', 'Gold'],
        offerings: ['Writing tools', 'Books', 'Scrolls', 'Blue candles', 'Ibis imagery', 'Moon offerings'],
        festivals: ['New Moon', 'Wednesday (Mercury day)', 'Thoth (Egyptian month 8)'],
        mythology: 'Thoth is the ibis-headed Egyptian god of writing, wisdom, knowledge, and the moon. He is the divine scribe who records every human act in the Hall of Ma\'at and counts the days with his reed pen and palette. He invented writing, mathematics, medicine, and magic. In the weighing of the heart ceremony he records the judgment. He mediated conflicts between the gods and could not be destroyed, only outmaneuvered. The Greeks identified him with Hermes, and from this fusion emerged Hermes Trismegistus, the legendary source of the Hermetic tradition.',
        working_with: 'Thoth is an incomparable patron for writers, scholars, historians, magicians, and students of esoteric tradition. He is the keeper of the Akashic record and aids those who wish to access deep knowledge. Approach him with writing tools, blue candles, and moon offerings. He helps with research, learning new languages, passing examinations, and understanding complex magical systems. He responds to intellectual dedication and the love of knowledge for its own sake.',
        affirmation: '"I seek knowledge with devotion and write my truth with clear eyes."',
        traditions: ['Kemetic', 'Hermetic', 'Eclectic', 'Ceremonial']
    },

    {
        name: 'Anubis',
        epithet: 'Guide of Souls & Keeper of the Weighing',
        emoji: '🐕‍🦺',
        pantheon: 'Egyptian',
        gender: 'masculine',
        domains: ['Death', 'Protection', 'Healing', 'Fate', 'Wisdom'],
        element: 'Earth',
        planet: 'Saturn',
        symbols: ['Jackal Head', 'Black Scales', 'Crook & Flail', 'Imiut Fetish', 'Embalming Tools'],
        sacred_animals: ['Jackal', 'Dog'],
        sacred_plants: ['Acacia', 'Myrrh', 'Natron herbs'],
        crystals: ['Obsidian', 'Black Tourmaline', 'Jet', 'Hematite', 'Labradorite'],
        colors: ['Black', 'Gold', 'White'],
        offerings: ['Incense (myrrh)', 'Black candles', 'Gold items', 'Protective imagery', 'Dog imagery'],
        festivals: ['Samhain (Oct 31)', 'Days of the Dead', 'New Moon'],
        mythology: 'Anubis was the original lord of the dead before Osiris took that role, and became the god of embalming, funerary rites, and the precise moment of judgment. His jackal form — associated with cemetery-haunting jackals — made him appropriate guardian of the boundary between life and death. In the Hall of Ma\'at it is Anubis who places the heart on the scales against the feather of Ma\'at. He invented the art of mummification to preserve Osiris\'s body. He is unfailing in his impartiality — he weighs all hearts equally.',
        working_with: 'Anubis is a guide for death work, ancestor communication, soul retrieval, and navigating liminal spaces. He is gentle with the dying and those who grieve. Approach him with myrrh incense, black and gold candles, and sincerity. He helps those dealing with death (of loved ones or of aspects of self), those working in hospice or death-adjacent work, and those seeking communication with the recently dead. His protective energy in liminal spaces is exceptional. He does not judge — he simply weighs.',
        affirmation: '"I navigate the threshold between worlds with guidance, grace, and protection."',
        traditions: ['Kemetic', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Bastet',
        epithet: 'Goddess of Cats, Home & Joyful Protection',
        emoji: '🐈‍⬛',
        pantheon: 'Egyptian',
        gender: 'feminine',
        domains: ['Protection', 'Healing', 'Fertility', 'Love', 'Nature'],
        element: 'Fire',
        planet: 'Venus',
        symbols: ['Cat', 'Sistrum', 'Basket', 'Papyrus', 'Aegis of Lioness'],
        sacred_animals: ['Cat', 'Lioness', 'Scarab'],
        sacred_plants: ['Catnip', 'Jasmine', 'Cinnamon', 'Myrrh'],
        crystals: ['Carnelian', 'Cat\'s Eye', 'Gold', 'Tiger\'s Eye', 'Amber'],
        colors: ['Gold', 'Black', 'Red', 'Bright Colors'],
        offerings: ['Catnip', 'Milk', 'Music (sistrum)', 'Cat imagery', 'Perfume', 'Jewelry'],
        festivals: ['Bubastis festival (April/May)', 'New Moon', 'Friday'],
        mythology: 'Bastet was originally a fierce lioness war goddess who became the gentler cat goddess over time — though she never lost her ferocious protective nature. At Bubastis, her sacred city, her festival was the largest and most joyful in Egypt — featuring music, dancing, wine, and ecstatic celebration. Herodotus reported that more wine was consumed at the Bubastis festival than at any other time of year. She protected homes from evil spirits and disease, guarded women and children, and ensured good harvests. She was the eye of Ra in his protective aspect.',
        working_with: 'Bastet is an approachable and joyful goddess, patron of cats, music, dance, pleasure, and protective home magic. She is excellent for protection of the home and family, fertility, healing, and any magical work you wish to approach with joy rather than gravity. Approach her with catnip, milk, music, and cat imagery. She rewards celebration and sensory pleasure. She is excellent for those who need to reclaim joy, who love cats, or who work with pleasure as a spiritual practice.',
        affirmation: '"I protect my home and loved ones with fierce joy and playful grace."',
        traditions: ['Kemetic', 'Wiccan', 'Eclectic']
    },

    {
        name: 'Ra',
        epithet: 'God of the Sun, Creation & Divine Kingship',
        emoji: '🌅',
        pantheon: 'Egyptian',
        gender: 'masculine',
        domains: ['Sun & Light', 'Wisdom', 'Protection', 'Fate', 'Healing'],
        element: 'Fire',
        planet: 'Sun',
        symbols: ['Solar Disc', 'Falcon Head', 'Solar Barque', 'Uraeus Serpent', 'Was Scepter'],
        sacred_animals: ['Falcon', 'Serpent (Apep, his enemy)', 'Phoenix (Bennu)', 'Scarab (as Khepri)'],
        sacred_plants: ['Frankincense', 'Myrrh', 'Sunflower', 'Lotus'],
        crystals: ['Sunstone', 'Topaz', 'Citrine', 'Gold', 'Amber'],
        colors: ['Gold', 'Orange', 'Red', 'White', 'Yellow'],
        offerings: ['Frankincense', 'Gold items', 'Sunflowers', 'Solar imagery', 'Dawn prayers'],
        festivals: ['Summer Solstice (Jun 21)', 'Sunday (Sun day)', 'Ra festival (2nd month Akhet)'],
        mythology: 'Ra is the supreme solar deity of Egypt, the creator who sailed across the sky each day in his solar barque and through the underworld each night, battling the chaos serpent Apep to return at dawn. He was merged with other deities to create composite forms: Ra-Atum (creator), Ra-Horakhty (with Horus the Elder), and Amun-Ra (the hidden and manifest together). All pharaohs were considered sons of Ra. He is the primordial creative force — the first light that separated from the primordial chaos at the beginning of creation.',
        working_with: 'Ra is invoked for solar magic, creative power, divine authority, and large-scale protection. He is best approached at dawn, facing east, with frankincense and gold. He is a powerful ally for those in leadership positions, those doing creative work, and those seeking the energy to overcome a persistent enemy or obstacle (like Apep who must be defeated nightly). Dawn prayers to Ra are an ancient practice with remarkable effectiveness. He governs the life-giving power of the sun in all its aspects.',
        affirmation: '"I rise each day renewed, shining my light and defeating the darkness."',
        traditions: ['Kemetic', 'Eclectic', 'Wiccan']
    },

    {
        name: 'Sekhmet',
        epithet: 'Fierce Goddess of War, Healing & Divine Destruction',
        emoji: '🦁',
        pantheon: 'Egyptian',
        gender: 'feminine',
        domains: ['War', 'Healing', 'Protection', 'Fire', 'Death'],
        element: 'Fire',
        planet: 'Mars',
        symbols: ['Lioness Head', 'Solar Disc', 'Red Linen', 'Staff of Papyrus', 'Khepesh Sword'],
        sacred_animals: ['Lioness', 'Cat', 'Cobra'],
        sacred_plants: ['Catnip', 'Blood-red flowers', 'Saffron', 'Intoxicating red beer'],
        crystals: ['Garnet', 'Red Jasper', 'Carnelian', 'Fire Opal', 'Ruby'],
        colors: ['Red', 'Gold', 'Black'],
        offerings: ['Red beer', 'Blood-red wine', 'Red candles', 'Lioness imagery', 'Red flowers'],
        festivals: ['New Year festival (to appease her)', 'Summer Solstice', 'Days of plague prevention'],
        mythology: 'Sekhmet was created when Ra sent his eye as a lioness to punish humanity for their rebellion against him. She became so enraged in her destruction that she could not stop, and the gods feared she would kill everyone. They flooded the fields with red-dyed beer; she drank it thinking it was blood and fell asleep, and the world was saved. This myth encapsulates her dual nature: she is the same power that destroys and heals, the force of disease and its cure. Her priests were the physicians and healers of ancient Egypt. She is fiercer than any other goddess in Egypt\'s pantheon.',
        working_with: 'Sekhmet is called upon by those doing serious healing work, by warrior women, and by those who need to access truly fierce protective energy. She is not gentle — she will burn out what must be removed. She is excellent for banishment, breaking through serious blocks, and healing of a deep or difficult nature. Approach her with red offerings and respect. She responds to fearlessness and genuine need. She is the patron of healers who must do hard things. Once she has agreed to help, she is implacable in your defense.',
        affirmation: '"My fierce love destroys what harms and heals what remains — I am the eye of Ra."',
        traditions: ['Kemetic', 'Eclectic', 'Chaos Magick']
    },

    {
        name: 'Hathor',
        epithet: 'Goddess of Love, Beauty, Music & Joy',
        emoji: '🐄',
        pantheon: 'Egyptian',
        gender: 'feminine',
        domains: ['Love', 'Fertility', 'Arts & Craft', 'Healing', 'Death', 'Wisdom'],
        element: 'Water',
        planet: 'Venus',
        symbols: ['Cow Horns with Solar Disc', 'Sistrum', 'Menat Necklace', 'Mirror', 'Turquoise'],
        sacred_animals: ['Cow', 'Lion', 'Cobra', 'Sparrow'],
        sacred_plants: ['Turquoise (sacred stone)', 'Sycamore', 'Malachite', 'Rose'],
        crystals: ['Turquoise', 'Malachite', 'Rose Quartz', 'Amber', 'Gold'],
        colors: ['Gold', 'Turquoise', 'Red', 'Pale Yellow'],
        offerings: ['Mirrors', 'Sistrum rattles', 'Turquoise', 'Music', 'Wine', 'Honey'],
        festivals: ['New Year (feast of drunkeness)', 'Beltane (May 1)', 'Friday'],
        mythology: 'Hathor is one of the oldest and most beloved Egyptian goddesses, the golden cow who gave birth to the sun each morning. She is the patron of the arts and all that makes life beautiful and worth living — music, dance, cosmetics, jewelry, sex, childbirth, and the fertile abundance of Egypt. She greeted the dead at the western horizon and gave them nourishment. She is the mother of mothers and can appear as a woman with a cow\'s horns and solar disc. Her temple at Dendera was one of the greatest in Egypt. She is the mirror held up to show the divine within.',
        working_with: 'Hathor is one of the most generous and accessible goddesses for love work, beauty rituals, artistic endeavors, and the cultivation of joy. She responds to music and the sistrum rattle. Approach her with mirrors, turquoise, and beautiful offerings. She aids with self-love, attracting romantic love, fertility, creative inspiration, and the ability to receive pleasure gracefully. She is particularly helpful for those who have lost their capacity for joy or beauty — she can restore it. Dance and sing in her honor.',
        affirmation: '"I am the divine joy in all things beautiful — love, music, and pleasure are sacred."',
        traditions: ['Kemetic', 'Wiccan', 'Eclectic']
    }
];

// ========================================
// STATE
// ========================================

let filteredDeities = [...DEITIES];
let myCollection = {
    patron: [],
    curious: []
};

// ========================================
// DOM ELEMENTS
// ========================================

const searchInput = document.getElementById('search-input');
const pantheonFilter = document.getElementById('pantheon-filter');
const domainFilter = document.getElementById('domain-filter');
const traditionFilter = document.getElementById('tradition-filter');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const deityGrid = document.getElementById('deity-grid');
const deityCount = document.getElementById('deity-count');
const patronTab = document.getElementById('patron-tab');
const curiousTab = document.getElementById('curious-tab');
const patronCollection = document.getElementById('patron-collection');
const curiousCollection = document.getElementById('curious-collection');

// ========================================
// DEITY OF THE DAY
// ========================================

function initDeityOfDay() {
    const today = new Date().toISOString().split('T')[0];
    const stored = JSON.parse(localStorage.getItem('mystical-path-deity-of-day') || '{}');

    let deity;
    if (stored.date === today) {
        deity = DEITIES.find(d => d.name === stored.name);
    }
    if (!deity) {
        deity = DEITIES[Math.floor(Math.random() * DEITIES.length)];
        localStorage.setItem('mystical-path-deity-of-day', JSON.stringify({
            date: today,
            name: deity.name,
            emoji: deity.emoji
        }));
    }

    const card = document.getElementById('deity-of-day-card');
    if (!card) return;

    card.innerHTML = `
        <div class="dotd-label">✨ Deity of the Day</div>
        <div class="dotd-emoji">${deity.emoji}</div>
        <div class="dotd-info">
            <h3 class="dotd-name">${deity.name}</h3>
            <p class="dotd-epithet">${deity.epithet}</p>
            <div class="dotd-tags">
                <span class="dotd-tag pantheon-${deity.pantheon.toLowerCase()}">${deity.pantheon}</span>
                ${deity.domains.slice(0, 2).map(d => `<span class="dotd-tag">${d}</span>`).join('')}
            </div>
            <p class="dotd-affirmation">${deity.affirmation}</p>
            <p class="dotd-refresh">Refreshes tomorrow at midnight</p>
        </div>
    `;
}

// ========================================
// FILTERING
// ========================================

function filterDeities() {
    const searchTerm = searchInput.value;

    // filterAndSearch handles search + pantheon dropdown
    let results = filterAndSearch(
        DEITIES,
        searchTerm,
        [
            (d) => d.name,
            (d) => d.epithet,
            (d) => d.mythology,
            (d) => d.domains,
            (d) => d.symbols,
            (d) => d.offerings
        ],
        { pantheon: pantheonFilter.value },
        { pantheon: (d) => d.pantheon }
    );

    // Domain post-filter: check if any domain in deity.domains includes the filter value
    const domainVal = domainFilter.value;
    if (domainVal !== 'all') {
        results = results.filter(d =>
            d.domains.some(dom => dom.includes(domainVal) || domainVal.includes(dom))
        );
    }

    // Tradition post-filter
    const tradVal = traditionFilter.value;
    if (tradVal !== 'all') {
        results = results.filter(d => d.traditions.includes(tradVal));
    }

    filteredDeities = results;
    renderDeities();
}

// ========================================
// RENDERING — MAIN GRID
// ========================================

function renderDeities() {
    deityCount.textContent = filteredDeities.length;

    if (filteredDeities.length === 0) {
        deityGrid.innerHTML = `
            <div class="empty-state">
                <p>🔍 No deities found matching your search.</p>
                <p>Try adjusting your filters or search term.</p>
            </div>
        `;
        return;
    }

    deityGrid.innerHTML = '';
    filteredDeities.forEach(deity => {
        const card = createDeityCard(deity);
        deityGrid.appendChild(card);
    });

    enableKeyboardNav(deityGrid, '.deity-card');
}

function createDeityCard(deity) {
    const isPatron = myCollection.patron.includes(deity.name);
    const isCurious = myCollection.curious.includes(deity.name);
    const mythExcerpt = deity.mythology.slice(0, 120) + '…';

    const card = document.createElement('div');
    card.className = 'deity-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `${deity.name}: ${deity.epithet}`);

    card.innerHTML = `
        <div class="deity-header">
            <div class="deity-emoji">${deity.emoji}</div>
            <div class="deity-title">
                <h3>${deity.name}</h3>
                <p class="deity-epithet">${deity.epithet}</p>
            </div>
            <div class="collection-btns">
                <button class="collection-btn patron-btn ${isPatron ? 'active' : ''}"
                    data-deity="${deity.name}" data-type="patron"
                    aria-label="${isPatron ? 'Remove from' : 'Add to'} Patron/Matron"
                    title="${isPatron ? 'Remove from' : 'Add to'} Patron/Matron">♥</button>
                <button class="collection-btn curious-btn ${isCurious ? 'active' : ''}"
                    data-deity="${deity.name}" data-type="curious"
                    aria-label="${isCurious ? 'Remove from' : 'Add to'} Curious About"
                    title="${isCurious ? 'Remove from' : 'Add to'} Curious About">⭐</button>
            </div>
        </div>

        <div class="deity-meta">
            <span class="meta-badge pantheon-badge pantheon-${deity.pantheon.toLowerCase()}">${deity.pantheon}</span>
            <span class="meta-badge element-badge">✦ ${deity.element}</span>
            <span class="meta-badge planet-badge">☽ ${deity.planet}</span>
        </div>

        <div class="deity-domains">${deity.domains.slice(0, 4).join(' · ')}</div>

        <p class="deity-description">${mythExcerpt}</p>

        <button class="expand-toggle" aria-expanded="false">Learn More ▼</button>

        <div class="deity-details" hidden>
            <div class="details-section full-width">
                <h4>📖 Mythology</h4>
                <p>${deity.mythology}</p>
            </div>
            <div class="details-section">
                <h4>✨ Domains & Aspects</h4>
                <p>${deity.domains.join(', ')}</p>
            </div>
            <div class="details-section">
                <h4>🌿 Sacred Correspondences</h4>
                <p>
                    <strong>Symbols:</strong> ${deity.symbols.join(', ')}<br>
                    <strong>Animals:</strong> ${deity.sacred_animals.join(', ')}<br>
                    <strong>Plants:</strong> ${deity.sacred_plants.join(', ')}<br>
                    <strong>Crystals:</strong> ${deity.crystals.join(', ')}<br>
                    <strong>Colors:</strong> ${deity.colors.join(', ')}
                </p>
            </div>
            <div class="details-section">
                <h4>🕯️ Offerings</h4>
                <p>${deity.offerings.join(', ')}</p>
            </div>
            <div class="details-section">
                <h4>📅 Festivals & Timing</h4>
                <p>${deity.festivals.join(', ')}</p>
            </div>
            <div class="details-section full-width">
                <h4>🔮 Working With ${deity.name}</h4>
                <p>${deity.working_with}</p>
            </div>
            <div class="details-section full-width">
                <h4>💬 Affirmation</h4>
                <p class="deity-affirmation">${deity.affirmation}</p>
            </div>
        </div>
    `;

    // Expand/collapse toggle
    const toggle = card.querySelector('.expand-toggle');
    const details = card.querySelector('.deity-details');
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        toggle.textContent = isExpanded ? 'Learn More ▼' : 'Show Less ▲';
        details.hidden = isExpanded;
        card.classList.toggle('expanded', !isExpanded);
    });

    // Collection buttons
    card.querySelectorAll('.collection-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCollection(btn.dataset.deity, btn.dataset.type);
        });
    });

    return card;
}

// ========================================
// COLLECTION
// ========================================

function loadCollection() {
    const saved = localStorage.getItem('mystical-path-deity-collection');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            myCollection.patron = data.patron || [];
            myCollection.curious = data.curious || [];
        } catch (e) {
            myCollection = { patron: [], curious: [] };
        }
    }
}

function saveCollection() {
    localStorage.setItem('mystical-path-deity-collection', JSON.stringify(myCollection));
}

function toggleCollection(deityName, type) {
    const list = type === 'patron' ? myCollection.patron : myCollection.curious;
    const idx = list.indexOf(deityName);

    if (idx === -1) {
        list.push(deityName);
    } else {
        list.splice(idx, 1);
    }

    saveCollection();
    renderDeities();
    renderCollection();
}

function renderCollection() {
    const isPatronActive = patronTab.getAttribute('aria-selected') === 'true';
    const activeType = isPatronActive ? 'patron' : 'curious';
    const activeList = myCollection[activeType];
    const container = isPatronActive ? patronCollection : curiousCollection;

    const emptyMsg = isPatronActive
        ? 'No patron deities yet. Click the ♥ on any deity card to mark them as your Patron or Matron!'
        : 'No deities in your Curious About list yet. Click the ⭐ on any deity card to add them!';

    if (activeList.length === 0) {
        container.innerHTML = `<p class="empty-message">${emptyMsg}</p>`;
        return;
    }

    container.innerHTML = '';
    activeList.forEach(name => {
        const deity = DEITIES.find(d => d.name === name);
        if (!deity) return;

        const mini = document.createElement('div');
        mini.className = 'mini-card';
        mini.innerHTML = `
            <span class="mini-emoji">${deity.emoji}</span>
            <div class="mini-info">
                <strong>${deity.name}</strong>
                <span class="mini-pantheon">${deity.pantheon}</span>
            </div>
            <button class="remove-btn" data-deity="${deity.name}" data-type="${activeType}" aria-label="Remove ${deity.name}">✕</button>
        `;

        mini.querySelector('.remove-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCollection(deity.name, activeType);
        });

        container.appendChild(mini);
    });
}

// ========================================
// PROFILE INTEGRATION
// ========================================

function applyProfileTradition() {
    const profile = typeof getProfile === 'function' ? getProfile() : null;
    if (profile && profile.tradition && traditionFilter) {
        const options = Array.from(traditionFilter.options);
        const match = options.find(opt => opt.value === profile.tradition);
        if (match) {
            traditionFilter.value = profile.tradition;
        }
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    searchInput.addEventListener('input', filterDeities);
    pantheonFilter.addEventListener('change', filterDeities);
    domainFilter.addEventListener('change', filterDeities);
    traditionFilter.addEventListener('change', filterDeities);

    clearFiltersBtn.addEventListener('click', () => {
        clearFilters({ search: searchInput, filters: [pantheonFilter, domainFilter, traditionFilter] });
        filterDeities();
    });

    patronTab.addEventListener('click', () => {
        patronTab.setAttribute('aria-selected', 'true');
        patronTab.classList.add('active');
        curiousTab.setAttribute('aria-selected', 'false');
        curiousTab.classList.remove('active');
        patronCollection.style.display = 'grid';
        curiousCollection.style.display = 'none';
        renderCollection();
    });

    curiousTab.addEventListener('click', () => {
        curiousTab.setAttribute('aria-selected', 'true');
        curiousTab.classList.add('active');
        patronTab.setAttribute('aria-selected', 'false');
        patronTab.classList.remove('active');
        curiousCollection.style.display = 'grid';
        patronCollection.style.display = 'none';
        renderCollection();
    });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initDeityOfDay();
    loadCollection();
    setupEventListeners();
    applyProfileTradition();
    filterDeities();
    renderCollection();
});
