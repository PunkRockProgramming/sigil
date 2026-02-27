// ========================================
// HERBAL CORRESPONDENCES DATABASE
// ========================================

const HERBS = [
    {
        name: 'Lavender',
        latin: 'Lavandula angustifolia',
        emoji: '💜',
        safety: 'safe',
        safety_notes: 'Generally safe. Avoid large amounts during pregnancy. May cause drowsiness.',
        intentions: ['Peace', 'Sleep', 'Love', 'Purification'],
        element: 'Air',
        planet: 'Mercury',
        zodiac: ['Gemini', 'Virgo'],
        deities: ['Hecate', 'Circe', 'Saturn'],
        properties: 'The herb of peace and purification. Lavender promotes calm, restful sleep, and attracts love. Sacred to witches and healers for centuries.',
        magical_uses: 'Burn for purification, add to love sachets, place under pillow for peaceful sleep, use in bath for cleansing, add to protection spells.',
        medicinal_uses: 'Calms anxiety, promotes sleep, relieves headaches, antiseptic for minor burns and cuts, digestive aid.',
        preparation: ['Tea', 'Tincture', 'Essential Oil', 'Sachet', 'Smoke'],
        growing: 'Perennial. Full sun, well-drained soil. Drought tolerant. Zones 5-9. Prune after flowering.',
        harvesting: 'Harvest flowers just before full bloom in morning after dew dries. Hang bundles upside down to dry.',
        storage: 'Store dried flowers in airtight container away from light. Keeps potency for 1 year.',
        substitutions: ['Rose', 'Chamomile (for sleep)'],
        folklore: 'Victorian women would hide lavender in their clothing to attract suitors. Romans used it in their baths, giving it the name from "lavare" (to wash).',
        affirmation: 'I am calm, peaceful, and surrounded by loving energy.'
    },
    {
        name: 'Rosemary',
        latin: 'Rosmarinus officinalis',
        emoji: '🌿',
        safety: 'caution',
        safety_notes: 'Avoid large amounts during pregnancy. May interact with blood thinners and blood pressure medications.',
        intentions: ['Protection', 'Purification', 'Healing', 'Love'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Aries', 'Leo'],
        deities: ['Aphrodite', 'Virgin Mary'],
        properties: 'Herb of remembrance andprotection. Rosemary strengthens memory, wards off negative energy, and brings clarity.',
        magical_uses: 'Burn for purification, hang over doorways for protection, add to poppets, use in bath for cleansing, place under pillow for clarity in dreams.',
        medicinal_uses: 'Improves memory and concentration, stimulates circulation, relieves muscle pain, aids digestion, antimicrobial.',
        preparation: ['Tea', 'Tincture', 'Essential Oil', 'Culinary', 'Smoke'],
        growing: 'Perennial evergreen. Full sun, well-drained soil. Drought tolerant once established. Zones 7-10. Can grow indoors.',
        harvesting: 'Harvest stems year-round, best flavor before flowering. Cut in morning after dew dries.',
        storage: 'Hang bundles to dry or freeze fresh. Store dried in airtight container. Keeps potency for 6-12 months.',
        substitutions: ['Basil (for protection)', 'Sage (for cleansing)'],
        folklore: 'Ancient Greeks believed rosemary strengthened memory and wore it in their hair during exams. Associated with remembrance in funeral rites.',
        affirmation: 'My mind is clear, my spirit protected, and my path illuminated.'
    },
    {
        name: 'Mugwort',
        latin: 'Artemisia vulgaris',
        emoji: '🌙',
        safety: 'caution',
        safety_notes: 'AVOID during pregnancy (can stimulate uterus). Allergic reactions possible in those sensitive to Asteraceae family. Not for long-term internal use.',
        intentions: ['Divination', 'Sleep', 'Protection', 'Purification'],
        element: 'Earth',
        planet: 'Moon',
        zodiac: ['Cancer', 'Pisces'],
        deities: ['Artemis', 'Diana', 'Hecate'],
        properties: 'The witch\'s herb par excellence. Mugwort opens the third eye, enhances psychic abilities, and brings vivid dreams.',
        magical_uses: 'Burn before divination, place under pillow for prophetic dreams, add to scrying water, use in protection amulets, burn for spirit communication.',
        medicinal_uses: 'Digestive aid, menstrual cramp relief, mild sedative. EXTERNAL: relieves muscle aches (as compress).',
        preparation: ['Tea (small amounts)', 'Smoke', 'Dream Pillow', 'Tincture', 'Compress'],
        growing: 'Perennial. Full sun to partial shade. Very hardy and can become invasive. Zones 3-9. Spreads by rhizomes.',
        harvesting: 'Harvest leaves before flowering in summer. Cut stalks and hang to dry.',
        storage: 'Store dried leaves in airtight container away from light. Keeps potency for 1 year.',
        substitutions: ['Wormwood (similar properties, also use caution)', 'Chamomile (for dreams, safer)'],
        folklore: 'Roman soldiers placed mugwort in their sandals to prevent fatigue on long marches. Used by Celtic druids for protection and prophecy.',
        affirmation: 'I trust my visions, honor my dreams, and walk between worlds with wisdom.'
    },
    {
        name: 'Sage',
        latin: 'Salvia officinalis',
        emoji: '🍃',
        safety: 'caution',
        safety_notes: 'Common culinary sage is generally safe. Avoid large medicinal amounts during pregnancy and while nursing. Contains thujone - limit long-term use.',
        intentions: ['Purification', 'Protection', 'Healing', 'Prosperity'],
        element: 'Air',
        planet: 'Jupiter',
        zodiac: ['Sagittarius'],
        deities: ['Zeus', 'Jupiter', 'Consus'],
        properties: 'Sacred sage of wisdom and purification. Cleanses spaces, banishes negativity, and brings mental clarity.',
        magical_uses: 'Burn (smudge) for purification, add to protection sachets, use in banishing rituals, burn before meditation, add to prosperity spells.',
        medicinal_uses: 'Antimicrobial, improves memory, relieves sore throat, reduces hot flashes, aids digestion.',
        preparation: ['Smudge', 'Tea', 'Tincture', 'Culinary', 'Compress'],
        growing: 'Perennial. Full sun, well-drained soil. Drought tolerant. Zones 4-8. Prune to prevent legginess.',
        harvesting: 'Harvest leaves before flowering for best flavor. Cut stems in morning after dew dries.',
        storage: 'Hang bundles to dry. Store dried leaves in airtight container. Keeps potency for 1 year.',
        substitutions: ['Rosemary (for purification)', 'Cedar (for smudging)'],
        folklore: 'Medieval saying: "Why should a man die whilst sage grows in his garden?" Associated with longevity and wisdom.',
        affirmation: 'I release what no longer serves me and welcome wisdom into my life.'
    },
    {
        name: 'Chamomile',
        latin: 'Matricaria chamomilla',
        emoji: '🌼',
        safety: 'safe',
        safety_notes: 'Generally very safe. Rare allergic reactions in those sensitive to ragweed/daisies. Avoid if allergic to Asteraceae family.',
        intentions: ['Peace', 'Sleep', 'Healing', 'Prosperity'],
        element: 'Water',
        planet: 'Sun',
        zodiac: ['Leo'],
        deities: ['Ra', 'Apollo', 'Cernunnos'],
        properties: 'The gentle healer. Chamomile soothes, calms, and attracts good fortune. Brings peace to any situation.',
        magical_uses: 'Add to prosperity sachets, sprinkle around home for protection, wash hands in tea before gambling, use in meditation for peace, add to bath for purification.',
        medicinal_uses: 'Calms anxiety, promotes sleep, soothes digestive upset, anti-inflammatory, gentle for children.',
        preparation: ['Tea', 'Tincture', 'Compress', 'Bath', 'Steam'],
        growing: 'Annual. Full sun to part shade. Self-seeds readily. Cool season crop. Grows well in containers.',
        harvesting: 'Harvest flowers when petals are horizontal. Pick in morning after dew dries. Dries quickly.',
        storage: 'Store dried flowers in airtight container away from light. Keeps potency for 6-12 months.',
        substitutions: ['Lavender (for calming)', 'Lemon balm (for sleep)'],
        folklore: 'Ancient Egyptians dedicated chamomile to Ra, the sun god. Used as a strewing herb in medieval times for its pleasant scent.',
        affirmation: 'I am calm, grounded, and attracting prosperity into my life.'
    },
    {
        name: 'Basil',
        latin: 'Ocimum basilicum',
        emoji: '🌱',
        safety: 'safe',
        safety_notes: 'Culinary use is safe. Avoid medicinal amounts during pregnancy. Basil oil can be irritating - dilute if using topically.',
        intentions: ['Love', 'Prosperity', 'Protection', 'Purification'],
        element: 'Fire',
        planet: 'Mars',
        zodiac: ['Aries', 'Scorpio'],
        deities: ['Krishna', 'Vishnu', 'Mars'],
        properties: 'Holy basil of love and abundance. Draws wealth, protects from evil, and sparks passion.',
        magical_uses: 'Place in wallet for prosperity, add to love spells, burn for protection, sprinkle on doorstep to prevent unwanted visitors, use in exorcism.',
        medicinal_uses: 'Digestive aid, reduces stress, anti-inflammatory, antibacterial, supports immune system.',
        preparation: ['Culinary', 'Tea', 'Tincture', 'Essential Oil', 'Fresh'],
        growing: 'Annual. Full sun, warm weather. Needs consistent moisture. Pinch flowers to encourage leaf growth. Grows well in pots.',
        harvesting: 'Harvest leaves before flowering for best flavor. Pick in morning. Regular harvesting encourages bushier growth.',
        storage: 'Best used fresh. Can freeze in ice cubes with olive oil or water. Dried basil loses flavor quickly - use within 3-6 months.',
        substitutions: ['Mint (for prosperity)', 'Cinnamon (for love)'],
        folklore: 'Sacred in Hindu tradition (especially Holy Basil/Tulsi). In Italy, a pot of basil on the balcony signaled a woman was ready to receive suitors.',
        affirmation: 'Love and abundance flow freely into my life.'
    },
    {
        name: 'Peppermint',
        latin: 'Mentha × piperita',
        emoji: '🍵',
        safety: 'safe',
        safety_notes: 'Generally safe for most. Avoid peppermint oil in infants and young children (can cause breathing issues). May worsen GERD/heartburn.',
        intentions: ['Purification', 'Healing', 'Prosperity', 'Sleep'],
        element: 'Air',
        planet: 'Mercury',
        zodiac: ['Gemini', 'Virgo'],
        deities: ['Pluto', 'Hecate'],
        properties: 'Refreshing and invigorating. Peppermint clears energy, enhances psychic abilities, and draws prosperity.',
        magical_uses: 'Rub on wallet for money, add to healing poppets, use in purification incense, place in dream pillows for prophetic dreams, burn to raise vibrations.',
        medicinal_uses: 'Relieves digestive issues, eases headaches, clears congestion, improves focus, reduces nausea.',
        preparation: ['Tea', 'Essential Oil', 'Tincture', 'Fresh', 'Steam'],
        growing: 'Perennial. Partial shade to full sun. Very invasive - grow in containers. Spreads rapidly by runners. Hardy zones 3-11.',
        harvesting: 'Harvest leaves just before flowering for maximum oil content. Cut stems in morning.',
        storage: 'Dry quickly to preserve oils. Store in airtight container away from light. Keeps potency for 1 year.',
        substitutions: ['Spearmint (milder)', 'Eucalyptus (for clarity)'],
        folklore: 'Greek myth: Menthe, a nymph loved by Hades, was transformed into mint by Persephone. Romans crowned banquet guests with peppermint.',
        affirmation: 'My mind is clear, my energy refreshed, and abundance flows to me.'
    },
    {
        name: 'Yarrow',
        latin: 'Achillea millefolium',
        emoji: '🌸',
        safety: 'caution',
        safety_notes: 'AVOID during pregnancy (stimulates uterus). Can cause photosensitivity. Allergic reactions possible in those sensitive to Asteraceae. May interact with blood thinners.',
        intentions: ['Protection', 'Courage', 'Healing', 'Divination'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Libra'],
        deities: ['Achilles', 'Aphrodite', 'Hercules'],
        properties: 'Warrior\'s  wound herb. Yarrow protects, heals, and enhances psychic abilities. Brings courage in difficult times.',
        magical_uses: 'Carry for protection, use in I Ching divination, hang over marriage bed for 7 years of love, add to amulets, use in exorcism.',
        medicinal_uses: 'Stops bleeding (topical), reduces fever, anti-inflammatory, tones blood vessels. EXTERNAL: Wound healing.',
        preparation: ['Tea', 'Tincture', 'Poultice', 'Compress', 'Bath'],
        growing: 'Perennial. Full sun, drought tolerant once established. Tolerates poor soil. Zones 3-9. Can be invasive.',
        harvesting: 'Harvest flowers and leaves mid-summer during flowering. Cut stems and hang to dry.',
        storage: 'Store dried flowers and leaves separately in airtight containers. Keeps potency for 1 year.',
        substitutions: ['Cayenne (for courage)', 'Calendula (for healing)'],
        folklore: 'Named for Achilles, who used it to heal warriors. I Ching divination traditionally uses yarrow stalks. "Seven years love" charm involves hanging over marriage bed.',
        affirmation: 'I am protected, courageous, and my wounds are healed.'
    },
    {
        name: 'Bay Laurel',
        latin: 'Laurus nobilis',
        emoji: '🍂',
        safety: 'safe',
        safety_notes: 'Culinary use is safe. Avoid large medicinal amounts during pregnancy. Remove whole leaves from food before eating (choking hazard).',
        intentions: ['Protection', 'Purification', 'Divination', 'Prosperity'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Leo'],
        deities: ['Apollo', 'Aesculapius', 'Cernunnos'],
        properties: 'Sacred laurel of victory and prophecy. Bay enhances psychic visions, grants protection, and brings success.',
        magical_uses: 'Burn for purification and visions, write wishes on leaves and burn, place under pillow for prophetic dreams, add to prosperity charms, crown of success.',
        medicinal_uses: 'Digestive aid, relieves muscle aches (oil), expectorant, dandruff treatment (infused oil).',
        preparation: ['Culinary', 'Tea', 'Infused Oil', 'Smoke', 'Tincture'],
        growing: 'Perennial tree/shrub. Full sun to part shade. Slow growing. Zones 8-11. Can grow in containers and bring indoors.',
        harvesting: 'Harvest mature leaves year-round. Morning harvest best. Flavor intensifies with drying.',
        storage: 'Store whole dried leaves in airtight container away from light. Keeps potency for 1-2 years.',
        substitutions: ['Basil (for protection)', 'Cinnamon (for success)'],
        folklore: 'Ancient Greeks crowned Olympic victors and poets with bay laurel. Priests at Delphi chewed bay leaves for prophetic visions.',
        affirmation: 'I am victorious, protected, and my visions are clear.'
    },
    {
        name: 'Thyme',
        latin: 'Thymus vulgaris',
        emoji: '🌿',
        safety: 'safe',
        safety_notes: 'Culinary amounts are safe. Avoid large medicinal amounts during pregnancy. Thyme oil is strong - dilute before topical use.',
        intentions: ['Courage', 'Healing', 'Purification', 'Sleep'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Taurus', 'Libra'],
        deities: ['Aphrodite', 'Freya'],
        properties: 'Herb of courage and health. Thyme purifies, brings healing dreams, and instills bravery.',
        magical_uses: 'Burn for purification and courage, place under pillow for restful sleep, add to healing sachets, wear for courage, use in faery magic.',
        medicinal_uses: 'Antimicrobial, expectorant for coughs, digestive aid, immune booster, antiseptic.',
        preparation: ['Tea', 'Tincture', 'Essential Oil', 'Culinary', 'Steam'],
        growing: 'Perennial. Full sun, well-drained alkaline soil. Drought tolerant. Zones 5-9. Trim regularly.',
        harvesting: 'Harvest before flowering for strongest flavor. Cut stems in morning after dew dries.',
        storage: 'Dry quickly to preserve volatile oils. Store in airtight container. Keeps potency for 6-12 months.',
        substitutions: ['Oregano (for purification)', 'Hyssop (for cleansing)'],
        folklore: 'Ancient Greeks burned thyme in temples. Roman soldiers bathed in thyme water for courage. Associated with faery sight.',
        affirmation: 'I am brave, healthy, and spiritually cleansed.'
    },
    {
        name: 'Cinnamon',
        latin: 'Cinnamomum verum',
        emoji: '🪵',
        safety: 'safe',
        safety_notes: 'Culinary use is safe. Avoid large amounts during pregnancy. Cinnamon oil can irritate skin - always dilute. May interact with diabetes medications.',
        intentions: ['Prosperity', 'Love', 'Protection', 'Healing'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Aries', 'Leo'],
        deities: ['Aphrodite', 'Venus', 'Ra'],
        properties: 'Spice of success and passion. Cinnamon raises vibrations, attracts wealth, and ignites desire.',
        magical_uses: 'Burn for prosperity, add to love spells, sprinkle on money, raise spiritual vibrations, use in success spells.',
        medicinal_uses: 'Regulates blood sugar, antimicrobial, anti-inflammatory, warming circulatory stimulant.',
        preparation: ['Culinary', 'Tea', 'Tincture', 'Essential Oil', 'Powder'],
        growing: 'Tropical tree. Cannot grow in most climates. Zones 10-12. Requires consistent warmth and humidity.',
        harvesting: 'Bark harvested from mature trees (2+ years). Inner bark is dried and rolled into quills.',
        storage: 'Store cinnamon sticks in airtight container. Ground cinnamon loses potency quickly - use within 6 months.',
        substitutions: ['Ginger (for prosperity)', 'Clove (for love)'],
        folklore: 'Once worth more than gold. Ancient Egyptians used it in mummification. Mentioned in the Song of Solomon.',
        affirmation: 'Success and abundance flow to me in perfect timing.'
    },
    {
        name: 'Lemon Balm',
        latin: 'Melissa officinalis',
        emoji: '🍋',
        safety: 'safe',
        safety_notes: 'Very safe. May interact with thyroid medications. Avoid large amounts with sedative drugs (additive effect).',
        intentions: ['Love', 'Healing', 'Peace', 'Prosperity'],
        element: 'Water',
        planet: 'Moon',
        zodiac: ['Cancer'],
        deities: ['Diana', 'Artemis'],
        properties: 'Bee balm of joy and love. Lemon balm lifts spirits, attracts love, and brings emotional healing.',
        magical_uses: 'Use in love spells, soak in wine for love potions, carry for love, burn to attract spirits, add to lunar rituals.',
        medicinal_uses: 'Reduces anxiety and stress, aids sleep, antiviral (especially for cold sores), digestive aid, mood elevator.',
        preparation: ['Tea', 'Tincture', 'Essential Oil', 'Fresh', 'Compress'],
        growing: 'Perennial. Partial shade to full sun. Spreads vigorously - contain or it will take over. Zones 4-9. Attracts bees.',
        harvesting: 'Harvest leaves before flowering for best lemon scent. Cut in morning after dew dries. Multiple harvests per season.',
        storage: 'Best used fresh (freezes well). Dried lemon balm loses scent quickly. Store dried in airtight container, use within 3-6 months.',
        substitutions: ['Mint (for prosperity)', 'Rose (for love)'],
        folklore: 'Greek name "Melissa" means honey bee. Medieval beekeepers rubbed hives with lemon balm. Associated with longevity.',
        affirmation: 'Joy fills my heart, and love surrounds me always.'
    },
    {
        name: 'Calendula',
        latin: 'Calendula officinalis',
        emoji: '🌻',
        safety: 'safe',
        safety_notes: 'Generally very safe for topical use. Avoid if allergic to Asteraceae family. Not recommended during pregnancy (traditional use as emmenagogue).',
        intentions: ['Healing', 'Protection', 'Divination', 'Love'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Leo'],
        deities: ['Sunna', 'Apollo', 'Brighid'],
        properties: 'Marigold of the sun. Calendula heals, protects, and enhances psychic visions.',
        magical_uses: 'Add to charm bags for protection, scatter under bed for prophetic dreams, use in legal proceedings for favorable outcome, wear for respect.',
        medicinal_uses: 'Powerful wound healer (topical), anti-inflammatory, lymphatic stimulant, gentle for skin conditions. SAFE for children topically.',
        preparation: ['Salve', 'Oil', 'Tea', 'Tincture', 'Compress'],
        growing: 'Annual. Full sun, tolerates part shade. Easy to grow. Self-seeds readily. Deadhead for continuous blooms. Cool season preferred.',
        harvesting: 'Harvest flowers after dew dries. Regular picking encourages more blooms. Pick when fully open.',
        storage: 'Dry flowers whole on screens. Store in airtight container away from light. Keeps potency for 1 year.',
        substitutions: ['Chamomile (for healing)', 'Sunflower (for solar energy)'],
        folklore: 'Also called "pot marigold." Used to predict weather - flowers close before rain. Associated with legal victory charms.',
        affirmation: 'I am healed, protected, and radiate golden light.'
    },
    {
        name: 'Nettle',
        latin: 'Urtica dioica',
        emoji: '🌿',
        safety: 'caution',
        safety_notes: 'FRESH nettles sting! Wear gloves when handling. Cooked or dried nettles are safe and nutritious. May interact with blood pressure and diabetes medications.',
        intentions: ['Protection', 'Healing', 'Banishing', 'Courage'],
        element: 'Fire',
        planet: 'Mars',
        zodiac: ['Aries', 'Scorpio'],
        deities: ['Thor', 'Mars'],
        properties: 'Warrior plant of protection and strength. Nettle defends, nourishes, and breaks curses.',
        magical_uses: 'Carry for courage, stuff poppets to send back evil, scatter around home for protection, burn to reverse spells, use in banishing.',
        medicinal_uses: 'Nutrient-rich (iron, vitamins), supports kidneys, reduces inflammation, helps allergies, supports hair growth.',
        preparation: ['Tea', 'Tincture', 'Cooked as vegetable', 'Infused Oil', 'Freeze-dried'],
        growing: 'Perennial. Part shade to full sun. Very hardy and can become invasive. Zones 3-10. Harvest with gloves!',
        harvesting: 'Harvest young leaves in spring (most tender). Wear gloves! Stinging hairs neutralize when dried or cooked.',
        storage: 'Dry leaves thoroughly. Store in airtight container. Keeps potency for 1 year. Very nutritious dried.',
        substitutions: ['Rosemary (for protection)', 'Cayenne (for banishing)'],
        folklore: 'Associated with Norse god Thor. Used in "urtication" - whipping with nettles to relieve rheumatism. "Grasp the nettle firmly" proverb.',
        affirmation: 'I am protected, strong, and nourished from within.'
    },
    {
        name: 'Echinacea',
        latin: 'Echinacea purpurea',
        emoji: '🌺',
        safety: 'safe',
        safety_notes: 'Generally safe. Avoid if allergic to Asteraceae family or have autoimmune conditions. Not for long-term daily use (immune system stimulant).',
        intentions: ['Healing', 'Protection', 'Prosperity'],
        element: 'Earth',
        planet: 'Jupiter',
        zodiac: ['Sagittarius'],
        deities: ['Gaia', 'Cernunnos'],
        properties: 'Purple coneflower of immunity and prosperity. Echinacea strengthens boundaries and draws abundance.',
        magical_uses: 'Add to prosperity spells (multiply money), offer in earth rituals, use in healing charms, strengthen spell work.',
        medicinal_uses: 'Immune system booster, reduces cold/flu duration, lymphatic support, wound healing (topical).',
        preparation: ['Tea', 'Tincture', 'Capsules', 'Fresh', 'Compress'],
        growing: 'Perennial. Full sun, drought tolerant once established. Attracts pollinators. Zones 3-9. Native prairie plant.',
        harvesting: 'Harvest roots in fall from 3+ year plants. Harvest flowers and leaves during blooming. Roots are most potent.',
        storage: 'Dry roots thoroughly and store in airtight container. Tincture preserves best. Use dried within 1 year.',
        substitutions: ['Goldenseal (for immunity - endangered, use sustainably)', 'Astragalus (for immune support)'],
        folklore: 'Native American medicine - Plains tribes used for infections and snakebite. Roots were valuable trade items.',
        affirmation: 'I am healthy, protected, and abundance multiplies in my life.'
    },
    {
        name: 'Elderflower',
        latin: 'Sambucus nigra',
        emoji: '🌸',
        safety: 'caution',
        safety_notes: 'FLOWERS and BERRIES (cooked) are safe. RAW berries, bark, leaves, and roots are TOXIC. Never eat raw berries. Remove all stems before consuming.',
        intentions: ['Protection', 'Healing', 'Purification', 'Prosperity'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Pisces', 'Cancer'],
        deities: ['Holda', 'Freya', 'Hel'],
        properties: 'The sacred eldern tree. Elderflower protects, heals, and grants access to faery realm.',
        magical_uses: 'Hang over doorways for protection, use flowers for blessing, ask permission before harvesting, faery offerings, protection charms.',
        medicinal_uses: 'Reduces fever, fights cold/flu, anti-inflammatory, supports immune system. Flowers and cooked berries only!',
        preparation: ['Tea', 'Cordial', 'Tincture', 'Syrup', 'Wine'],
        growing: 'Perennial shrub/tree. Prefers moist soil. Fast growing. Zones 4-9. Can be pruned heavily.',
        harvesting: 'Harvest flowers when fully open, before pollen falls. Berries in late summer when dark purple. Always remove stems!',
        storage: 'Dry flowers on screens - use within 6 months. Berries best used fresh or as syrup/tincture.',
        substitutions: ['Yarrow (for protection)', 'Ginger (for immunity)'],
        folklore: 'Never cut elder without asking permission. Associated with witches, faeries, and the underworld. Wands made from elder are powerful.',
        affirmation: 'I am protected by ancient wisdom and natural healing.'
    },
    {
        name: 'Dandelion',
        latin: 'Taraxacum officinale',
        emoji: '🌼',
        safety: 'safe',
        safety_notes: 'Very safe and edible! Ensure plants haven\'t been treated with pesticides. May interact with diuretic medications and some antibiotics.',
        intentions: ['Divination', 'Prosperity', 'Healing', 'Purification'],
        element: 'Air',
        planet: 'Jupiter',
        zodiac: ['Sagittarius'],
        deities: ['Hecate', 'Brighid'],
        properties: 'The wish maker. Dandelion grants wishes, opens psychic abilities, and brings messages from spirits.',
        magical_uses: 'Blow seeds to send messages to loved ones, use in divination, bury for wishes to come true, make into wish-granting wine.',
        medicinal_uses: 'Liver tonic, diuretic, digestive bitter, nutrient-rich (vitamins A, C, K), supports kidney function.',
        preparation: ['Tea', 'Tincture', 'Food (leaves, roots)', 'Wine', 'Fresh'],
        growing: 'Perennial "weed." Impossible to not grow! Tap root makes it hard to eradicate. Zones 3-10. Harvest from chemical-free areas.',
        harvesting: 'Leaves best in spring. Roots in fall. Flowers in late spring. Harvest from clean areas only.',
        storage: 'Dry roots and roast for "coffee." Store dried leaves and roots in airtight container. Use within 1 year.',
        substitutions: ['Chicory (for divination)', 'Burdock (for cleansing root)'],
        folklore: 'Name from French "dent de lion" (lion\'s tooth). Folklore says if you can blow all seeds off in one breath, your wish comes true.',
        affirmation: 'My wishes are heard, and the universe answers my call.'
    },
    {
        name: 'St. John\'s Wort',
        latin: 'Hypericum perforatum',
        emoji: '☀',
        safety: 'caution',
        safety_notes: 'IMPORTANT: Interacts with MANY medications (birth control, antidepressants, blood thinners). Causes photosensitivity. Consult doctor before internal use.',
        intentions: ['Protection', 'Healing', 'Banishing', 'Courage'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Leo'],
        deities: ['St. John', 'Balder', 'Apollo'],
        properties: 'Luminous herb of the summer sun. St. John\'s Wort banishes darkness, heals depression, and protects against evil.',
        magical_uses: 'Burn to banish negativity, hang over doors on Midsummer, wear for courage, add to protection amulets, use in exorcism.',
        medicinal_uses: 'Mild-to-moderate depression and anxiety, wound healing (topical in oil), nerve pain. See drug interactions!',
        preparation: ['Tea', 'Tincture', 'Infused Oil', 'Capsules', 'Fresh'],
        growing: 'Perennial. Full sun, well-drained soil. Can be invasive. Zones 5-9. Yellow flowers in midsummer.',
        harvesting: 'Harvest flowering tops on St. John\'s Day (June 24) traditionally, or when flowers are fully open. Leaves and flowers.',
        storage: 'Dry quickly to preserve yellow color. Store away from light. Best as fresh plant tincture. Use dried within 6 months.',
        substitutions: ['Rue (for protection - also caution)', 'Sunflower (for solar energy)'],
        folklore: 'Named for St. John the Baptist. Traditionally harvested on Midsummer. Used against demons and faeries. Red oil from flowers symbolizes blood of St. John.',
        affirmation: 'Light fills my being, and all darkness is banished from my path.'
    },
    {
        name: 'Catnip',
        latin: 'Nepeta cataria',
        emoji: '🐱',
        safety: 'safe',
        safety_notes: 'Very safe for humans (cats love it!). Avoid large amounts during pregnancy (traditional emmenagogue). May cause drowsiness.',
        intentions: ['Love', 'Peace', 'Sleep', 'Courage'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Taurus'],
        deities: ['Bast', 'Freya'],
        properties: 'Sacred to cat goddesses. Catnip attracts good spirits, brings love, and creates psychic bonds with felines.',
        magical_uses: 'Use in cat magic, give as offering to Bast, add to love sachets, create psychic bond with familiar, carry for courage.',
        medicinal_uses: 'Calms anxiety, promotes sleep, eases digestive upset, reduces fever, mild sedative for humans.',
        preparation: ['Tea', 'Tincture', 'Fresh for cats', 'Sachet', 'Smoke'],
        growing: 'Perennial. Full sun to part shade. Very easy to grow. Spreads vigorously. Zones 3-9. Cats will destroy plants - protect!',
        harvesting: 'Harvest leaves and flowers just before full bloom. Dry quickly to preserve oils. Keep away from cats until dried.',
        storage: 'Store dried in very airtight container (cats will find it!). Keeps potency for 6-12 months.',
        substitutions: ['Chamomile (for calming)', 'Valerian (for sleep)'],
        folklore: 'Cats go wild for nepetalactone compound. Hangmen used catnip to gain courage. Associated with cat  magic and Egyptian Bast.',
        affirmation: 'I am calm, loved, and protected by divine feline energy.'
    },
    {
        name: 'Clove',
        latin: 'Syzygium aromaticum',
        emoji: '🌰',
        safety: 'safe',
        safety_notes: 'Culinary use is safe. Clove oil is very strong - always dilute and avoid during pregnancy. Can cause skin irritation if used undiluted.',
        intentions: ['Protection', 'Love', 'Prosperity', 'Banishing'],
        element: 'Fire',
        planet: 'Jupiter',
        zodiac: ['Aries'],
        deities: ['Jupiter'],
        properties: 'Potent spice of power. Clove banishes negativity, attracts wealth, and ignites passion.',
        magical_uses: 'Burn to drive away enemies, stick in oranges for protection, add to money spells, use to stop gossip, carry to attract love.',
        medicinal_uses: 'Toothache pain relief, antimicrobial, digestive aid, analgesic. Clove oil very strong - use sparingly.',
        preparation: ['Culinary', 'Essential Oil', 'Tea', 'Tincture', 'Ground'],
        growing: 'Tropical tree. Cannot grow in most climates. Zones 10-12. Requires specific tropical conditions.',
        harvesting: 'Cloves are dried unopened flower buds. Harvested when pink, then dried until brown.',
        storage: 'Store whole cloves in airtight container (last years). Ground cloves lose potency quickly - use within 6 months.',
        substitutions: ['Cinnamon (for prosperity)', 'Ginger (for protection)'],
        folklore: 'Chinese courtiers held cloves in mouth to freshen breath before addressing emperor. Once worth their weight in gold.',
        affirmation: 'I am powerful, protected, and attracting prosperity.'
    },
    {
        name: 'Frankincense',
        latin: 'Boswellia sp.',
        emoji: '🪔',
        safety: 'safe',
        safety_notes: 'Generally safe for burning and topical use (diluted). Avoid large amounts internally during pregnancy. Pure resin for burning preferred.',
        intentions: ['Purification', 'Protection', 'Divination', 'Healing'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Leo'],
        deities: ['Ra', 'Baal', 'Apollo'],
        properties: 'Sacred resin of the gods. Frankincense purifies, protects, and elevates consciousness for divine connection.',
        magical_uses: 'Burn during meditation, add to purification incense, consecrate tools, enhance psychic visions, exorcism, blessing.',
        medicinal_uses: 'Anti-inflammatory (especially for arthritis), supports immune system, reduces anxiety, wound healing.',
        preparation: ['Resin for burning', 'Essential Oil', 'Tincture', 'Incense'],
        growing: 'Desert tree. Very difficult to grow. Zones 10-11. Prefers arid conditions. Resin harvested by cutting bark.',
        harvesting: 'Resin "tears" harvested by making cuts in bark and collecting dried sap. Sustainable harvesting important.',
        storage: 'Store resin tears in airtight container away from heat. Lasts indefinitely.',
        substitutions: ['Myrrh (similar properties)', 'Copal (for purification)'],
        folklore: 'One of the gifts of the Magi to baby Jesus. Used in ancient Egyptian temples and mummification. Worth more than gold historically.',
        affirmation: 'I am purified, protected, and connected to the divine.'
    },
    {
        name: 'Myrrh',
        latin: 'Commiphora myrrha',
        emoji: '💧',
        safety: 'caution',
        safety_notes: 'AVOID during pregnancy and while nursing (stimulates uterus). Can interact with diabetes and blood thinning medications. External use generally safe.',
        intentions: ['Protection', 'Purification', 'Healing', 'Banishing'],
        element: 'Water',
        planet: 'Moon',
        zodiac: ['Cancer'],
        deities: ['Isis', 'Adonis', 'Ra'],
        properties: 'Ancient resin of death and rebirth. Myrrh protects, purifies, and aids in shadow work and transformation.',
        magical_uses: 'Burn for purification and protection, use in funerary rites, add to healing incense, break hexes, meditation on death/rebirth.',
        medicinal_uses: 'Antimicrobial, supports oral health (mouthwash), wound healing, anti-inflammatory. EXTERNAL use preferred.',
        preparation: ['Resin for burning', 'Tincture', 'Essential Oil', 'Incense'],
        growing: 'Desert shrub/tree. Very difficult to grow. Zones 10-11. Prefers rocky, arid conditions.',
        harvesting: 'Resin harvested by cutting bark and collecting dried sap tears. Sustainable sourcing important.',
        storage: 'Store resin in airtight container. Can last indefinitely.',
        substitutions: ['Frankincense (for purification)', 'Pine resin (for protection)'],
        folklore: 'Gift of the Magi. Ancient Egyptians used in mummification. Associated with death mysteries and underworld deities.',
        affirmation: 'I embrace transformation, release the old, and welcome rebirth.'
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let filteredHerbs = [...HERBS];
let myApothecary = {
    owned: [],
    wishlist: []
};

// ========================================
// DOM ELEMENTS
// ========================================

const searchInput = document.getElementById('search-input');
const intentionFilter = document.getElementById('intention-filter');
const elementFilter = document.getElementById('element-filter');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const herbGrid = document.getElementById('herb-grid');
const herbCount = document.getElementById('herb-count');
const ownedTab = document.getElementById('owned-tab');
const wishlistTab = document.getElementById('wishlist-tab');
const ownedCollection = document.getElementById('owned-collection');
const wishlistCollection = document.getElementById('wishlist-collection');

// ========================================
// CORE FUNCTIONS
// ========================================

/**
 * Filter and search herbs
 */
function filterHerbs() {
    const searchTerm = searchInput.value;
    
    // Use shared filter utilities
    filteredHerbs = filterAndSearch(
        HERBS,
        searchTerm,
        [(item) => item.name, (item) => item.latin, (item) => item.properties],
        {
            intention: intentionFilter.value,
            element: elementFilter.value
        },
        {
            intention: (item) => item.intentions,
            element: (item) => item.element
        }
    );
    
    renderHerbs();
}

/**
 * Create herb card element
 */
function createHerbCard(herb) {
    const card = document.createElement('div');
    card.className = 'herb-card';
    
    // Safety badge
    let safetyBadge = '';
    if (herb.safety === 'toxic') {
        safetyBadge = '<span class="safety-badge toxic">🔴 TOXIC</span>';
    } else if (herb.safety === 'caution') {
        safetyBadge = '<span class="safety-badge caution">⚠️ CAUTION</span>';
    } else {
        safetyBadge = '<span class="safety-badge safe">✓ Generally Safe</span>';
    }
    
    const isOwned = myApothecary.owned.includes(herb.name);
    const isWishlisted = myApothecary.wishlist.includes(herb.name);
    
    card.innerHTML = `
        <div class="herb-header">
            <div class="herb-emoji">${herb.emoji}</div>
            <div class="herb-title">
                <h3>${herb.name}</h3>
                <p class="latin-name">${herb.latin}</p>
            </div>
            <div class="collection-btns">
                <button class="collection-btn ${isOwned ? 'active' : ''}" 
                        data-herb="${herb.name}" 
                        data-type="owned" 
                        title="${isOwned ? 'Remove from apothecary' : 'Add to apothecary'}">
                    ♥
                </button>
                <button class="collection-btn ${isWishlisted ? 'active' : ''}" 
                        data-herb="${herb.name}" 
                        data-type="wishlist" 
                        title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">
                    ⭐
                </button>
            </div>
        </div>
        
        ${safetyBadge}
        
        <div class="herb-meta">
            <span class="meta-badge element">${herb.element}</span>
            <span class="meta-badge planet">${herb.planet}</span>
            <span class="meta-badge">${herb.intentions[0]}</span>
        </div>
        
        <p class="herb-description">${herb.properties}</p>
        
        <div class="safety-note-preview">
            <strong>Safety:</strong> ${herb.safety_notes.substring(0, 100)}${herb.safety_notes.length > 100 ? '...' : ''}
        </div>
        
        <span class="expand-toggle">See Full Information ▼</span>
        
        <div class="herb-details">
            <div class="details-section full-width safety-highlight">
                <h4>⚠️ Safety Information</h4>
                <p>${herb.safety_notes}</p>
            </div>
            
            <div class="details-section">
                <h4>✨ Magical Uses</h4>
               <p>${herb.magical_uses}</p>
            </div>
            
            <div class="details-section">
                <h4>🌿 Medicinal Uses</h4>
                <p>${herb.medicinal_uses}</p>
            </div>
            
            <div class="details-section">
                <h4>📋 Intentions</h4>
                <p>${herb.intentions.join(', ')}</p>
            </div>
            
            <div class="details-section">
                <h4>🔮 Correspondences</h4>
                <p><strong>Element:</strong> ${herb.element}<br>
                <strong>Planet:</strong> ${herb.planet}<br>
                <strong>Zodiac:</strong> ${herb.zodiac.join(', ')}<br>
                <strong>Deities:</strong> ${herb.deities.join(', ')}</p>
            </div>
            
            <div class="details-section">
                <h4>🪴 Growing</h4>
                <p>${herb.growing}</p>
            </div>
            
            <div class="details-section">
                <h4>✂️ Harvesting</h4>
                <p>${herb.harvesting}</p>
            </div>
            
            <div class="details-section">
                <h4>🏺 Storage</h4>
                <p>${herb.storage}</p>
            </div>
            
            <div class="details-section">
                <h4>⚗️ Preparation Methods</h4>
                <p>${herb.preparation.join(', ')}</p>
            </div>
            
            <div class="details-section">
                <h4>🔄 Substitutions</h4>
                <p>${herb.substitutions.join(', ')}</p>
            </div>
            
            <div class="details-section full-width">
                <h4>📜 Folklore & History</h4>
                <p>${herb.folklore}</p>
            </div>
            
            <div class="details-section full-width affirmation">
                <h4>💬 Affirmation</h4>
                <p>"${herb.affirmation}"</p>
            </div>
        </div>
    `;
    
    // Add click handler for expansion
    const toggle = card.querySelector('.expand-toggle');
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('expanded');
        toggle.textContent = card.classList.contains('expanded') ? 
            'Hide Details ▲' : 'See Full Information ▼';
    });
    
    // Add collection button handlers
    const collectionBtns = card.querySelectorAll('.collection-btn');
    collectionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCollection(btn.dataset.herb, btn.dataset.type);
        });
    });
    
    return card;
}

/**
 * Render herb cards
 */
function renderHerbs() {
    herbGrid.innerHTML = '';
    
    if (filteredHerbs.length === 0) {
        herbGrid.innerHTML = '<p class="empty-message">No herbs match your search criteria.</p>';
        herbCount.textContent = '0';
        return;
    }
    
    filteredHerbs.forEach(herb => {
        const card = createHerbCard(herb);
        herbGrid.appendChild(card);
    });
    
    herbCount.textContent = filteredHerbs.length;
}

/**
 * Toggle herb in collection
 */
function toggleCollection(herbName, type) {
    const collection = type === 'owned' ? myApothecary.owned : myApothecary.wishlist;
    const index = collection.indexOf(herbName);
    
    if (index > -1) {
        collection.splice(index, 1);
    } else {
        collection.push(herbName);
    }
    
    saveCollection();
    renderHerbs();
    renderCollection();
}

/**
 * Render collection
 */
function renderCollection() {
    const activeTab = ownedTab.classList.contains('active') ? 'owned' : 'wishlist';
    const collection = myApothecary[activeTab];
    const container = activeTab === 'owned' ? ownedCollection : wishlistCollection;
    
    container.innerHTML = '';
    
    if (collection.length === 0) {
        const message = activeTab === 'owned' ? 
            'No herbs in your apothecary yet. Click the ♥ on any herb card to add it!' :
            'No herbs in your wish list yet. Click the ⭐ on any herb card to add it!';
        container.innerHTML = `<p class="empty-message">${message}</p>`;
        return;
    }
    
    collection.forEach(herbName => {
        const herb = HERBS.find(h => h.name === herbName);
        if (herb) {
            const miniCard = document.createElement('div');
            miniCard.className = 'mini-herb-card';
            miniCard.innerHTML = `
                <span class="mini-herb-emoji">${herb.emoji}</span>
                <span class="mini-herb-name">${herb.name}</span>
                <button class="remove-btn" data-herb="${herb.name}" data-type="${activeTab}">✕</button>
            `;
            
            miniCard.querySelector('.remove-btn').addEventListener('click', (e) => {
                toggleCollection(herb.name, activeTab);
            });
            
            container.appendChild(miniCard);
        }
    });
}

/**
 * Save collection to localStorage
 */
function saveCollection() {
    localStorage.setItem('mystical-path-herb-collection', JSON.stringify(myApothecary));
}

/**
 * Load collection from localStorage
 */
function loadCollection() {
    const saved = localStorage.getItem('mystical-path-herb-collection');
    if (saved) {
        myApothecary = JSON.parse(saved);
    }
}

/**
 * Save filter state to localStorage
 */
function saveFilterState() {
    localStorage.setItem('mystical-path-herbal-filters', JSON.stringify({
        intention: intentionFilter.value,
        element: elementFilter.value
    }));
}

/**
 * Load filter state from localStorage
 */
function loadFilterState() {
    const saved = localStorage.getItem('mystical-path-herbal-filters');
    if (saved) {
        const state = JSON.parse(saved);
        intentionFilter.value = state.intention || 'all';
        elementFilter.value = state.element || 'all';
    }
}

/**
 * Clear all filters
 */
function clearFiltersLocal() {
    clearFilters({
        search: searchInput,
        filters: [intentionFilter, elementFilter]
    });
    saveFilterState();
    filterHerbs();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    searchInput.addEventListener('input', filterHerbs);
    intentionFilter.addEventListener('change', () => { saveFilterState(); filterHerbs(); });
    elementFilter.addEventListener('change', () => { saveFilterState(); filterHerbs(); });
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
    loadFilterState();
    setupEventListeners();
    filterHerbs();
    renderCollection();
    
    // Enable keyboard navigation for herb cards
    enableKeyboardNav('herb-grid', '.herb-card');
});

