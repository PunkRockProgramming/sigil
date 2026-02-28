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
        affirmation: 'I am calm, peaceful, and surrounded by loving energy.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
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
        affirmation: 'My mind is clear, my spirit protected, and my path illuminated.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Ceremonial']
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
        affirmation: 'I trust my visions, honor my dreams, and walk between worlds with wisdom.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Heathen', 'Druidry', 'Ceremonial']
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
        affirmation: 'I release what no longer serves me and welcome wisdom into my life.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Ceremonial']
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
        affirmation: 'I am calm, grounded, and attracting prosperity into my life.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
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
        affirmation: 'Love and abundance flow freely into my life.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
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
        affirmation: 'My mind is clear, my energy refreshed, and abundance flows to me.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
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
        affirmation: 'I am protected, courageous, and my wounds are healed.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Heathen', 'Druidry']
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
        affirmation: 'I am victorious, protected, and my visions are clear.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Ceremonial']
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
        affirmation: 'I am brave, healthy, and spiritually cleansed.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
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
        affirmation: 'Success and abundance flow to me in perfect timing.',
        traditions: ['Wiccan', 'Eclectic', 'Kitchen Witch', 'Ceremonial']
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
        affirmation: 'Joy fills my heart, and love surrounds me always.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
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
        affirmation: 'I am healed, protected, and radiate golden light.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
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
        affirmation: 'I am protected, strong, and nourished from within.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Heathen', 'Kitchen Witch']
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
        affirmation: 'I am healthy, protected, and abundance multiplies in my life.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
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
        affirmation: 'I am protected by ancient wisdom and natural healing.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Druidry', 'Heathen']
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
        affirmation: 'My wishes are heard, and the universe answers my call.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
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
        affirmation: 'Light fills my being, and all darkness is banished from my path.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch']
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
        affirmation: 'I am calm, loved, and protected by divine feline energy.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
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
        affirmation: 'I am powerful, protected, and attracting prosperity.',
        traditions: ['Wiccan', 'Eclectic', 'Kitchen Witch', 'Ceremonial']
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
        affirmation: 'I am purified, protected, and connected to the divine.',
        traditions: ['Wiccan', 'Eclectic', 'Ceremonial', 'Druidry']
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
        affirmation: 'I embrace transformation, release the old, and welcome rebirth.',
        traditions: ['Wiccan', 'Eclectic', 'Ceremonial', 'Druidry']
    },
    {
        name: 'Calendula',
        latin: 'Calendula officinalis',
        emoji: '🌻',
        safety: 'safe',
        safety_notes: 'Topically safe for most. Internal use generally safe; avoid medicinal doses in pregnancy. May cause contact allergy in those sensitive to Asteraceae family.',
        intentions: ['Healing', 'Protection', 'Love', 'Prosperity'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Leo', 'Cancer'],
        deities: ['Soleil', 'Apollo', 'Mary'],
        properties: 'The solar herb of radiant healing and joy. Calendula lifts spirits, heals wounds, and brings warmth to any magical working.',
        magical_uses: 'Add to healing sachets, scatter petals around home for protection, use in love spells, carry for legal matters and winning favor.',
        medicinal_uses: 'Anti-inflammatory, wound healing (topical), soothes eczema and rashes, antifungal, lymphatic support.',
        preparation: ['Salve', 'Tea', 'Tincture', 'Compress', 'Infused Oil'],
        growing: 'Annual. Full sun. Sow directly in garden. Flowers prolifically from spring to frost. Deadhead to encourage more blooms.',
        harvesting: 'Harvest open flowers in morning. Dry on screens in single layers. Dry thoroughly to prevent mold.',
        storage: 'Store dried petals in airtight jar away from light. Keeps potency 1 year.',
        substitutions: ['St. John\'s Wort (for sunny energy)', 'Chamomile (for skin healing)'],
        folklore: 'Name derives from the Latin "calends" — it was said to bloom on the first day of every month. Medieval herbalists called it "Mary\'s gold" as offerings to the Virgin Mary.',
        affirmation: 'I radiate warmth, joy, and healing light.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
    },
    {
        name: 'Lemon Balm',
        latin: 'Melissa officinalis',
        emoji: '🍋',
        safety: 'safe',
        safety_notes: 'Generally very safe. May interact with thyroid medications. Sedative effect can be enhanced by other calming herbs.',
        intentions: ['Peace', 'Love', 'Healing', 'Sleep'],
        element: 'Water',
        planet: 'Moon',
        zodiac: ['Cancer', 'Pisces'],
        deities: ['Melissa', 'Diana', 'Artemis'],
        properties: 'The bee herb of joy and restoration. Lemon balm uplifts mood, calms anxiety, and invites gentle love into the home.',
        magical_uses: 'Add to love sachets, burn for emotional healing, use in bath for peace and stress relief, carry to attract friendship and love.',
        medicinal_uses: 'Reduces anxiety and stress, improves sleep, antiviral (especially herpes simplex), aids digestion, mild antidepressant.',
        preparation: ['Tea', 'Tincture', 'Essential Oil', 'Fresh', 'Bath'],
        growing: 'Perennial. Full sun to part shade. Vigorous grower — can spread. Zones 4-9. Cut back after flowering to prevent seeding.',
        harvesting: 'Harvest leaves before flowering for highest essential oil content. Use fresh or dry quickly.',
        storage: 'Best used fresh. Dried loses potency faster than most herbs — use within 6 months.',
        substitutions: ['Chamomile (for calm)', 'Lavender (for sleep)'],
        folklore: 'Melissa is the Greek word for honey bee. Beekeepers rubbed hives with lemon balm to keep bees happy. Associated with healing and immortality in Mediterranean traditions.',
        affirmation: 'My heart is light, my mind is clear, and joy surrounds me.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
    },
    {
        name: 'Elderflower',
        latin: 'Sambucus nigra',
        emoji: '🌸',
        safety: 'caution',
        safety_notes: 'Flowers: generally safe. Raw berries, bark, leaves, and roots: TOXIC — contain cyanogenic glycosides. Always cook elderberries. Avoid raw plant material other than carefully dried flowers.',
        intentions: ['Protection', 'Sleep', 'Healing', 'Love'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Libra', 'Pisces'],
        deities: ['Hulda', 'Freya', 'Holda'],
        properties: 'The Elder Mother\'s sacred tree. Elderflower grants protection from illness, connects to the fae, and opens doorways between worlds.',
        magical_uses: 'Hang flowers over doorways for protection, use in dream pillows, sprinkle on altars for faery contact, burn for healing rituals.',
        medicinal_uses: 'Antiviral, reduces fever, eases cold and flu symptoms, anti-inflammatory, supports immune system.',
        preparation: ['Tea', 'Tincture', 'Syrup', 'Infusion'],
        growing: 'Shrub/small tree. Moist well-drained soil. Full sun to part shade. Zones 3-9. Grows quickly.',
        harvesting: 'Harvest flower heads just before full bloom in late spring. Shake off insects. Dry on screens or use fresh.',
        storage: 'Use flowers fresh or dry carefully. Dried flowers keep 1 year in airtight container.',
        substitutions: ['Rose (for love)', 'Lavender (for protection)'],
        folklore: 'In Germanic tradition, the Elder Mother (Frau Holle/Holda) lived in elder trees. Cutting an elder without asking permission was considered dangerous. Said to ward off witches when planted by the house.',
        affirmation: 'I am protected by ancient wisdom and walk safely between worlds.',
        traditions: ['Wiccan', 'Heathen', 'Druidry', 'Eclectic', 'Green Witch']
    },
    {
        name: 'Hibiscus',
        latin: 'Hibiscus sabdariffa',
        emoji: '🌺',
        safety: 'safe',
        safety_notes: 'Generally safe. May lower blood pressure — use caution if on blood pressure medications. Avoid high doses in pregnancy.',
        intentions: ['Love', 'Divination', 'Protection', 'Peace'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Libra', 'Scorpio'],
        deities: ['Kali', 'Aphrodite', 'Oshun'],
        properties: 'The passion flower of love and psychic opening. Hibiscus awakens desire, heightens intuition, and stirs prophetic dreams.',
        magical_uses: 'Add to love potions and sachets, drink as tea before divination, use in lust spells, add to bath for attraction.',
        medicinal_uses: 'Lowers blood pressure, high in vitamin C and antioxidants, liver protective, mild diuretic, reduces fever.',
        preparation: ['Tea', 'Tincture', 'Infusion', 'Bath'],
        growing: 'Annual or tropical perennial. Full sun, moist well-drained soil. Frost tender — grow as annual in temperate climates.',
        harvesting: 'Harvest calyces after petals drop. Dry in single layers or use fresh.',
        storage: 'Store dried calyces in airtight container. Keeps vivid color and potency for 1 year.',
        substitutions: ['Rose (for love)', 'Elderberry (for immune support)'],
        folklore: 'Sacred to Oshun in Yoruba tradition, associated with beauty and feminine power. Used in Day of the Dead offerings in Mexico.',
        affirmation: 'I open my heart to love and my mind to vision.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
    },
    {
        name: 'Spearmint',
        latin: 'Mentha spicata',
        emoji: '🌿',
        safety: 'safe',
        safety_notes: 'Generally safe. Avoid essential oil use with infants and young children. May worsen heartburn in susceptible individuals.',
        intentions: ['Healing', 'Love', 'Protection', 'Prosperity'],
        element: 'Air',
        planet: 'Venus',
        zodiac: ['Gemini', 'Cancer'],
        deities: ['Pluto', 'Hecate'],
        properties: 'The gentle mint of healing and attraction. Spearmint draws love, enhances mental clarity, and refreshes stagnant energy.',
        magical_uses: 'Add to love sachets, burn for healing, carry for prosperity, use in spring cleaning rituals, add to charm bags for mental clarity.',
        medicinal_uses: 'Digestive aid, antispasmodic, relieves nausea, anti-hormonal (may reduce androgens), antimicrobial.',
        preparation: ['Tea', 'Culinary', 'Essential Oil', 'Tincture', 'Fresh'],
        growing: 'Perennial. Spreads vigorously by runners — grow in containers to contain. Moist soil, part shade. Zones 3-11.',
        harvesting: 'Harvest before flowering for best flavor. Cut sprigs in morning. Dries well or use fresh.',
        storage: 'Store dried leaves in airtight container. Keeps 6-12 months.',
        substitutions: ['Peppermint (stronger, similar uses)'],
        folklore: 'Named for Minthe, a water nymph transformed into a mint plant by Persephone. Romans placed sprigs in wine to prevent intoxication.',
        affirmation: 'I am clear-minded, vibrant, and attracting all good things.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
    },
    {
        name: 'Tulsi',
        latin: 'Ocimum tenuiflorum',
        emoji: '🌱',
        safety: 'safe',
        safety_notes: 'Generally very safe. May have mild blood-thinning effects — use caution before surgery. Avoid medicinal amounts in pregnancy.',
        intentions: ['Protection', 'Love', 'Healing', 'Purification'],
        element: 'Fire',
        planet: 'Jupiter',
        zodiac: ['Sagittarius', 'Scorpio'],
        deities: ['Vishnu', 'Lakshmi', 'Krishna'],
        properties: 'Holy Basil — the sacred herb of spiritual protection and divine connection. Tulsi elevates prayer, protects the home, and opens the heart to devotion.',
        magical_uses: 'Plant near entrance for protection, add to devotional offerings, burn for purification, wear as amulet for spiritual protection.',
        medicinal_uses: 'Adaptogen (reduces stress), antimicrobial, anti-inflammatory, supports immune system, respiratory support, blood sugar balancing.',
        preparation: ['Tea', 'Tincture', 'Infusion', 'Culinary', 'Fresh'],
        growing: 'Annual or short-lived perennial in tropical climates. Full sun, warm weather. Sacred plant — grows well with love and attention.',
        harvesting: 'Harvest leaves and flowering tops before seed set. Regular harvest keeps plant producing.',
        storage: 'Use fresh when possible. Dried leaves keep potency for 6-12 months in airtight container.',
        substitutions: ['Sweet Basil (culinary)', 'Sage (for spiritual protection)'],
        folklore: 'Considered the most sacred herb in Hinduism, present in virtually every Hindu home. Said to be Lakshmi\'s hair or a form of Vishnu. No ritual is complete without Tulsi in many Hindu traditions.',
        affirmation: 'I walk in sacred protection, connected to the divine in all things.',
        traditions: ['Eclectic', 'Ceremonial', 'Wiccan']
    },
    {
        name: 'Valerian',
        latin: 'Valeriana officinalis',
        emoji: '🌾',
        safety: 'caution',
        safety_notes: 'Avoid with CNS depressants, sedatives, and alcohol (additive effect). Not for long-term use (more than 4-6 weeks). May cause vivid dreams. Avoid before driving.',
        intentions: ['Sleep', 'Protection', 'Love', 'Peace'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Virgo', 'Pisces'],
        deities: ['Hecate', 'Hypnos'],
        properties: 'The sedative herb of deep sleep and otherworldly protection. Valerian guards against nightmares and psychic attack while inviting restful dreams.',
        magical_uses: 'Add to dream pillows for deep sleep, use in protection sachets, substitute for graveyard dirt in spells, add to love sachets (controversial — some say it repels!)',
        medicinal_uses: 'Promotes sleep, reduces anxiety, relieves muscle tension, mild sedative, used for restless leg syndrome.',
        preparation: ['Tea', 'Tincture', 'Capsule', 'Dream Pillow', 'Bath'],
        growing: 'Perennial. Full sun to part shade. Moist soil. Zones 3-9. Cats are attracted to dried roots.',
        harvesting: 'Harvest roots in autumn of second year. Clean and dry thoroughly — strong distinctive smell.',
        storage: 'Store dried root in sealed container. The smell intensifies with age due to isovaleric acid formation.',
        substitutions: ['Passionflower (milder sedative)', 'Hops (for sleep)'],
        folklore: 'Medieval cats were said to go crazy for it. Used to lure the Pied Piper\'s rats. During WWII, it was used to treat shell shock. Name may derive from Latin "valere" (to be strong).',
        affirmation: 'I release the day and surrender to deep, healing sleep.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Druidry']
    },
    {
        name: 'Passionflower',
        latin: 'Passiflora incarnata',
        emoji: '💜',
        safety: 'caution',
        safety_notes: 'Avoid during pregnancy (uterine stimulant). May enhance sedatives — use caution with medications. Avoid before driving. Generally safe for short-term use.',
        intentions: ['Peace', 'Sleep', 'Love', 'Divination'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Libra', 'Pisces'],
        deities: ['Venus', 'Aphrodite'],
        properties: 'The flower of peace and transcendence. Passionflower calms the most anxious mind, invites prophetic dreams, and encourages mystical states.',
        magical_uses: 'Place in home for peace and harmony, add to dream pillows, carry for calm during conflict, use in friendship spells.',
        medicinal_uses: 'Reduces anxiety, promotes sleep, relieves muscle tension, mild antispasmodic, adjunct for opiate withdrawal.',
        preparation: ['Tea', 'Tincture', 'Glycerite', 'Dream Pillow'],
        growing: 'Perennial vine. Full sun, well-drained soil. Zones 6-10. Attracts butterflies. Vigorous grower once established.',
        harvesting: 'Harvest aerial parts (leaves, stems, flowers) during flowering. Dry thoroughly.',
        storage: 'Store dried herb in airtight container. Keeps 1 year.',
        substitutions: ['Valerian (stronger sedative)', 'Lemon Balm (gentler)'],
        folklore: 'Spanish missionaries named it after the Passion of Christ, finding symbols of the crucifixion in its distinctive flower structure. Native Americans used it for sleep and anxiety.',
        affirmation: 'Peace flows through me like still water, calm and deep.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Ceremonial']
    },
    {
        name: 'Echinacea',
        latin: 'Echinacea purpurea',
        emoji: '🌸',
        safety: 'caution',
        safety_notes: 'Generally safe for short-term use (up to 8 weeks). Avoid if autoimmune disease (lupus, MS, rheumatoid arthritis) — may stimulate immune system. Rare allergic reactions in Asteraceae-sensitive individuals.',
        intentions: ['Healing', 'Protection', 'Prosperity'],
        element: 'Earth',
        planet: 'Sun',
        zodiac: ['Aries', 'Leo'],
        deities: ['Sol', 'Airmid'],
        properties: 'The purple coneflower of immunity and strength. Echinacea shields against illness and bolsters inner resilience in body and spirit.',
        magical_uses: 'Add to healing sachets, burn during illness for magical support, carry for strength, add to offerings as an amplifier for other herbs.',
        medicinal_uses: 'Stimulates immune system, reduces cold duration, anti-inflammatory, antiviral, wound healing (topical).',
        preparation: ['Tea', 'Tincture', 'Glycerite', 'Capsule', 'Compress'],
        growing: 'Perennial. Full sun, well-drained soil. Drought tolerant once established. Native to North American prairies. Zones 3-9.',
        harvesting: 'Harvest roots in autumn of 3-4 year plants, flowers in summer. All parts medicinal.',
        storage: 'Store dried herb or root in airtight container. Tincture keeps for 5+ years.',
        substitutions: ['Elderberry (for immune support)', 'Boneset (traditional)'],
        folklore: 'Plains Indigenous peoples used echinacea more than any other medicinal herb — for snake bites, toothache, and infectious disease. Rediscovered by German herbalists in the 19th century.',
        affirmation: 'My immune system is strong, my spirit resilient, and I heal with grace.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Heathen']
    },
    {
        name: 'Ginger',
        latin: 'Zingiber officinale',
        emoji: '🫚',
        safety: 'safe',
        safety_notes: 'Generally safe. May interact with blood thinners (warfarin). Large amounts may cause heartburn. Avoid very high doses in pregnancy (culinary amounts are fine).',
        intentions: ['Prosperity', 'Love', 'Courage', 'Healing'],
        element: 'Fire',
        planet: 'Mars',
        zodiac: ['Aries', 'Scorpio'],
        deities: ['Mars', 'Oya'],
        properties: 'The fiery root of action and abundance. Ginger speeds up manifestation, heats love spells, and lights the fires of courage and energy.',
        magical_uses: 'Add to money spells for speed, carry for courage, use in love sachets to heat passion, burn for energy and success.',
        medicinal_uses: 'Relieves nausea and vomiting (including morning sickness and chemotherapy), anti-inflammatory, digestive aid, warming circulatory stimulant.',
        preparation: ['Tea', 'Culinary', 'Tincture', 'Capsule', 'Compress'],
        growing: 'Tropical perennial. Warm, humid, partial shade. Grow indoors in temperate climates. Harvest rhizomes after foliage dies back.',
        harvesting: 'Harvest rhizomes after 8-10 months when foliage yellows. Can harvest small amounts without killing plant.',
        storage: 'Store fresh in refrigerator or freeze. Dried root keeps 1 year in airtight container.',
        substitutions: ['Cinnamon (for fire energy)', 'Pepper (for heat)'],
        folklore: 'One of the first herbs traded along ancient spice routes. Romans and Greeks prized it as medicine. Associated with Oya (Yoruba) as a fierce, transformative force.',
        affirmation: 'I act with fire and purpose, and abundance flows swiftly to me.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Ceremonial']
    },
    {
        name: 'Hawthorn',
        latin: 'Crataegus monogyna',
        emoji: '🌳',
        safety: 'caution',
        safety_notes: 'Generally safe as food/tea. May interact with heart medications and digoxin. Consult a doctor before using medicinally if on cardiac medications.',
        intentions: ['Love', 'Protection', 'Healing', 'Divination'],
        element: 'Fire',
        planet: 'Mars',
        zodiac: ['Taurus', 'Scorpio'],
        deities: ['Cardea', 'Flora', 'Belenus'],
        properties: 'The faery tree of heart and threshold. Hawthorn protects the home, heals the heart, and guards the boundary between worlds.',
        magical_uses: 'Plant as protective hedge, hang branches at Beltane, use in faery magic, carry berries for heart healing, add to love sachets.',
        medicinal_uses: 'Cardiovascular tonic, lowers blood pressure, improves circulation, antioxidant, mild diuretic, reduces cholesterol.',
        preparation: ['Tea', 'Tincture', 'Glycerite', 'Syrup', 'Culinary (berries)'],
        growing: 'Hardy shrub/small tree. Full sun to part shade. Most soils. Zones 4-7. Slow growing but long-lived.',
        harvesting: 'Harvest flowers and leaves in spring, berries in autumn. All parts have therapeutic value.',
        storage: 'Dry berries and flowers separately. Store in airtight containers up to 1 year.',
        substitutions: ['Rose (for heart healing)', 'Motherwort (cardiac tonic)'],
        folklore: 'In Celtic tradition, a lone hawthorn is a faery tree — cutting it is considered very unlucky. Beltane celebrations center on the May tree (hawthorn). Associated with the veil between worlds.',
        affirmation: 'My heart is open, protected, and beating with love for life.',
        traditions: ['Wiccan', 'Druidry', 'Heathen', 'Eclectic', 'Green Witch']
    },
    {
        name: 'Skullcap',
        latin: 'Scutellaria lateriflora',
        emoji: '💙',
        safety: 'caution',
        safety_notes: 'Generally safe at recommended doses. Avoid with sedatives (enhances effect). Liver toxicity reported with some commercial products adulterated with germander — source carefully. Avoid in pregnancy.',
        intentions: ['Peace', 'Sleep', 'Protection', 'Healing'],
        element: 'Water',
        planet: 'Saturn',
        zodiac: ['Capricorn', 'Pisces'],
        deities: ['Saturn', 'Morpheus'],
        properties: 'The nerve herb of deep peace. Skullcap quiets anxiety, soothes frayed nerves, and creates sacred mental stillness for magical work.',
        magical_uses: 'Add to peace sachets, burn for calming a situation, use in protection spells for emotional boundaries, add to dream pillows for deep sleep.',
        medicinal_uses: 'Relieves anxiety, nervous tension, and insomnia. Antispasmodic, mild sedative, supports nervous system recovery.',
        preparation: ['Tea', 'Tincture', 'Glycerite', 'Capsule'],
        growing: 'Perennial wildflower. Moist, shady conditions. Native to North America. Zones 4-8.',
        harvesting: 'Harvest aerial parts during flowering in summer. Dry quickly at low temperature to preserve actives.',
        storage: 'Store dried herb in airtight container. Tincture is the preferred long-term preparation.',
        substitutions: ['Passionflower', 'Valerian (stronger)'],
        folklore: 'Used by the Cherokees for ceremonial purposes and to induce visions. Name comes from the distinctly helmet-shaped flower. American herbalists valued it for "nervous prostration" in the 19th century.',
        affirmation: 'My mind is quiet, my nervous system at peace.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Heathen']
    },
    {
        name: 'Angelica',
        latin: 'Angelica archangelica',
        emoji: '🌿',
        safety: 'caution',
        safety_notes: 'Avoid during pregnancy (emmenagogue and uterine stimulant). Photosensitizing — contact with sap + sunlight causes burns. Do NOT confuse with poisonous wild hemlock or water hemlock. Diabetics use caution (may affect blood sugar).',
        intentions: ['Protection', 'Healing', 'Divination', 'Purification'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Leo', 'Sagittarius'],
        deities: ['Michael', 'Gabriel', 'Sol'],
        properties: 'The archangel herb of holy protection and healing. Angelica calls in angelic forces, repels dark energies, and strengthens the aura.',
        magical_uses: 'Burn for protection and exorcism, add to protection sachets, use in healing rituals, sprinkle around the home, carry root for protection against evil.',
        medicinal_uses: 'Digestive aid, expectorant, warming herb for respiratory conditions, diaphoretic for fever, tonic.',
        preparation: ['Tea (root)', 'Tincture', 'Smoke', 'Culinary (candied stems)'],
        growing: 'Biennial. Moist, rich soil. Full sun to part shade. Zones 4-9. Tall and dramatic — often confused with similar-looking toxic plants; positive ID essential.',
        harvesting: 'Harvest roots in first year autumn or second year spring. Seeds in late summer.',
        storage: 'Store dried root in sealed container. Use within 1 year.',
        substitutions: ['Frankincense (for angelic connection)', 'Rosemary (for protection)'],
        folklore: 'Said to have been revealed by the archangel Michael as a cure for plague. Blooms around the feast day of Michael the Archangel. In Scandinavian tradition used against trolls and evil spirits.',
        affirmation: 'I am surrounded by divine protection and guided by angelic light.',
        traditions: ['Wiccan', 'Ceremonial', 'Eclectic', 'Heathen', 'Druidry']
    },
    {
        name: 'Hops',
        latin: 'Humulus lupulus',
        emoji: '🍺',
        safety: 'caution',
        safety_notes: 'Avoid if depression is present (sedative quality may worsen). Avoid with sedative medications. Avoid in estrogen-sensitive conditions (contains phytoestrogens). Not for long-term daily use.',
        intentions: ['Sleep', 'Healing', 'Peace'],
        element: 'Air',
        planet: 'Mars',
        zodiac: ['Scorpio', 'Virgo'],
        deities: ['Bacchus', 'Ninkasi'],
        properties: 'The sedative vine of deep sleep and healing rest. Hops quiets an overactive mind and invites restorative sleep and healing dreams.',
        magical_uses: 'Add to dream pillows for powerful sleep, burn with mugwort for vision work, use in healing sachets.',
        medicinal_uses: 'Promotes sleep, reduces anxiety, mild sedative, estrogenic, bitter digestive tonic.',
        preparation: ['Tea', 'Tincture', 'Dream Pillow', 'Bath'],
        growing: 'Perennial vine. Full sun. Rich, moist soil. Zones 3-8. Grows 20+ feet in a season. Only female plants produce cones.',
        harvesting: 'Harvest female cones (strobiles) in late summer when papery and fragrant. Dry quickly.',
        storage: 'Store dried cones in airtight container in cool, dark place. Loses potency quickly — use within 6 months.',
        substitutions: ['Valerian (for sleep)', 'Skullcap (for anxiety)'],
        folklore: 'Used in brewing since medieval times. Traditional use in "hop pillows" to promote sleep goes back centuries. Called the poor man\'s opium in the 19th century.',
        affirmation: 'I surrender to rest and trust that healing happens as I sleep.',
        traditions: ['Wiccan', 'Heathen', 'Eclectic', 'Green Witch']
    },
    {
        name: 'Motherwort',
        latin: 'Leonurus cardiaca',
        emoji: '💗',
        safety: 'caution',
        safety_notes: 'AVOID during pregnancy — strong uterine stimulant. Avoid with blood thinners. May enhance cardiac medications. Not for long-term use without professional guidance.',
        intentions: ['Protection', 'Healing', 'Peace', 'Love'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Cancer', 'Virgo'],
        deities: ['Juno', 'Isis', 'Frigg'],
        properties: 'The mother herb of heart healing and protection. Motherwort nurtures the wounded heart, eases anxiety and palpitations, and holds space for grief.',
        magical_uses: 'Add to protection sachets for mothers and children, use in healing rituals for broken hearts, burn to ease grief, carry for courage in difficult situations.',
        medicinal_uses: 'Cardiac tonic, reduces palpitations, relieves anxiety, menstrual cramp relief, uterine stimulant (DO NOT use in pregnancy).',
        preparation: ['Tea (bitter)', 'Tincture', 'Capsule'],
        growing: 'Perennial. Full sun to part shade. Average soil. Self-seeds readily. Zones 3-8.',
        harvesting: 'Harvest aerial parts during early flowering. Dry quickly.',
        storage: 'Store dried herb in airtight container. Tincture preserves well for 5+ years.',
        substitutions: ['Hawthorn (for heart healing)', 'Lemon Balm (for anxiety)'],
        folklore: 'Traditional birth herb — German midwives gave it to ease labor (after baby arrives) and calm post-partum anxiety. Name reflects its association with mothers and the heart.',
        affirmation: 'My heart is brave, healing, and open to love.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Heathen']
    },
    {
        name: 'Black Cohosh',
        latin: 'Actaea racemosa',
        emoji: '🖤',
        safety: 'caution',
        safety_notes: 'Avoid in pregnancy (uterine stimulant). Rare cases of liver toxicity reported — monitor liver enzymes with extended use. Avoid if hormone-sensitive conditions (breast cancer, endometriosis). Not for long-term use without monitoring.',
        intentions: ['Protection', 'Love', 'Courage', 'Divination'],
        element: 'Water',
        planet: 'Saturn',
        zodiac: ['Scorpio', 'Capricorn'],
        deities: ['Hecate', 'Saturn', 'Crone'],
        properties: 'The serpent root of the crone. Black Cohosh is the herb of feminine power in the dark phases of life — menopause, grief, and deep shadow work.',
        magical_uses: 'Add to protection sachets, use in love spells to draw a bold lover, burn for courage in confrontation, use in shadow work rituals.',
        medicinal_uses: 'Relieves menopausal symptoms (hot flashes, mood changes), anti-inflammatory, antispasmodic, historically used for labor induction.',
        preparation: ['Tincture', 'Capsule', 'Tea (root)'],
        growing: 'Perennial woodland plant. Part to full shade. Rich, moist soil. Native to eastern North America. Zones 3-8. Slow growing.',
        harvesting: 'Harvest roots in autumn of 3-5 year plants. Wildcrafting threatens wild populations — source ethically.',
        storage: 'Store dried root in airtight container. Tincture preferred for long-term storage.',
        substitutions: ['Motherwort (gentler, for women\'s issues)', 'Valerian (for tension)'],
        folklore: 'Traditional Cherokee medicine for menstrual and menopausal issues. Colonial American women used it as "squaw root." The name "cohosh" comes from Algonquian.',
        affirmation: 'I claim my power, face my shadows, and emerge transformed.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Heathen']
    },
    {
        name: 'Belladonna',
        latin: 'Atropa belladonna',
        emoji: '🍇',
        safety: 'toxic',
        safety_notes: '⚠️ TOXIC — DO NOT INGEST. Contains atropine, scopolamine, and hyoscyamine. All parts are highly poisonous. Even skin contact with the juice can cause symptoms. Historically used in flying ointments — this caused real poisoning. For magical study and altar use only.',
        intentions: ['Divination', 'Protection', 'Sleep'],
        element: 'Water',
        planet: 'Saturn',
        zodiac: ['Scorpio', 'Capricorn'],
        deities: ['Hecate', 'Circe', 'Saturn', 'Bellona'],
        properties: 'The death-flower witch\'s herb of power and poison. Belladonna is a plant of extremes — sacred to dark goddesses, used in hedgecraft and death rites. Study it; never ingest it.',
        magical_uses: 'Altar decoration and study only. Historically in flying ointments. Associated with hedge-riding and spirit contact in European witchcraft.',
        medicinal_uses: 'TOXIC — medical use only as atropine (pupil dilation, cardiac emergency) under medical supervision.',
        preparation: ['Study/Altar only — NEVER prepare for ingestion'],
        growing: 'Perennial. Partial shade, alkaline soil. Zones 5-9. Ornamental but dangerous — keep away from children and pets.',
        harvesting: 'DO NOT harvest for ingestion. Wear gloves if handling plant material.',
        storage: 'If grown ornamentally, secure away from children and animals.',
        substitutions: ['Mugwort (safe alternative for visionary work)'],
        folklore: 'Name means "beautiful woman" — Italian women dripped juice in eyes for dilated pupils. Used by witches for centuries in flying ointments (which caused hallucinations through skin absorption). Associated with Hecate and the triple goddess.',
        affirmation: 'I respect the power of the dark and approach mystery with wisdom.',
        traditions: ['Ceremonial', 'Eclectic']
    },
    {
        name: 'Mandrake',
        latin: 'Mandragora officinarum',
        emoji: '🌱',
        safety: 'toxic',
        safety_notes: '⚠️ TOXIC — DO NOT INGEST. Contains tropane alkaloids (atropine, scopolamine). All parts are poisonous. Historically, root ingestion caused hallucinations, delirium, and death. For altar and study purposes only.',
        intentions: ['Protection', 'Love', 'Divination', 'Prosperity'],
        element: 'Earth',
        planet: 'Saturn',
        zodiac: ['Scorpio', 'Taurus'],
        deities: ['Hecate', 'Circe', 'Saturn'],
        properties: 'The mythic root of power and magic. Mandrake is one of the most legendary herbs in Western witchcraft — said to scream when pulled, it grants power over the material world.',
        magical_uses: 'Place whole root on altar as a poppet for the home, anoint for protection and luck, use root as powerful magical fetish, include in money spells.',
        medicinal_uses: 'TOXIC — historical use only. Ancient use as narcotic anesthetic and antispasmodic. No modern medicinal use.',
        preparation: ['Study/Altar only — NEVER prepare for ingestion'],
        growing: 'Perennial Mediterranean plant. Well-drained, sandy soil. Full sun to part shade. Not cold-hardy — zones 7-10.',
        harvesting: 'DO NOT harvest for ingestion. Root can be carefully dug and dried for altar use with protective gloves.',
        storage: 'Dried whole roots can be used as magical fetishes and stored safely.',
        substitutions: ['Ginseng root (for power magic)'],
        folklore: 'Said to scream fatally when pulled from the ground — folklore advised tying a dog to the root to harvest it. Featured in the Bible, Shakespeare, and Harry Potter. Shaped root fetishes were used as household spirits (alrunes).',
        affirmation: 'I honor the ancient powers and work with the wisdom of generations.',
        traditions: ['Ceremonial', 'Eclectic', 'Wiccan']
    },
    {
        name: 'Pennyroyal',
        latin: 'Mentha pulegium',
        emoji: '🌿',
        safety: 'toxic',
        safety_notes: '⚠️ TOXIC — NEVER ingest the essential oil. Causes severe liver and kidney failure. The herb as a very weak tea has traditional use, but pennyroyal OIL has caused deaths. Historically used as an abortifacient — AVOID in pregnancy completely. Topical use may cause skin irritation.',
        intentions: ['Protection', 'Purification', 'Peace', 'Banishing'],
        element: 'Fire',
        planet: 'Venus',
        zodiac: ['Gemini', 'Scorpio'],
        deities: ['Hecate', 'Demeter', 'Persephone'],
        properties: 'The purifying mint of fierce protection. Pennyroyal drives away evil, repels insects, and clears negative energy from spaces. Approach with respect for its power.',
        magical_uses: 'Hang in doorways to banish negativity, burn dried herb (never oil) for purification, use in protection sachets, add to floor wash for cleansing.',
        medicinal_uses: 'DANGEROUS — no safe home use. Historical: insect repellent, emmenagogue. The essential oil is a known abortifacient and hepatotoxin.',
        preparation: ['Dried herb only for magical use — NEVER essential oil internally'],
        growing: 'Low-growing perennial creeper. Moist to average soil. Full sun to part shade. Zones 6-9. Aromatic when walked on.',
        harvesting: 'Harvest aerial parts before full flowering. Wear gloves.',
        storage: 'Store dried herb for magical/aromatic use only. Keep essential oil locked away from children.',
        substitutions: ['Spearmint (safer, for purification)', 'Peppermint (similar uses)'],
        folklore: 'Greeks and Romans used it as a culinary herb (in moderation) and insect repellent. Demeter is said to have worn pennyroyal in her hair. Associated with Persephone and the underworld journey.',
        affirmation: 'I cleanse all negativity with fierce and sacred fire.',
        traditions: ['Wiccan', 'Eclectic', 'Druidry']
    },
    {
        name: 'Oatstraw',
        latin: 'Avena sativa',
        emoji: '🌾',
        safety: 'safe',
        safety_notes: 'Very safe. Those with gluten sensitivity should use certified gluten-free sources. Generally excellent long-term tonic herb.',
        intentions: ['Healing', 'Prosperity', 'Peace'],
        element: 'Earth',
        planet: 'Venus',
        zodiac: ['Libra', 'Taurus'],
        deities: ['Ceres', 'Demeter', 'Lugh'],
        properties: 'The nourishing tonic herb of restoration and abundance. Oatstraw rebuilds depleted nerves, grounds the spirit, and brings steady, sustainable prosperity.',
        magical_uses: 'Add to prosperity sachets, burn at harvest sabbats, use in Lammas rituals, add to healing baths for nervous system support.',
        medicinal_uses: 'Nutritive tonic for nervous system, relieves exhaustion and burnout, supports cardiovascular health, improves mood, mildly aphrodisiac.',
        preparation: ['Long infusion (overnight)', 'Tincture', 'Bath', 'Culinary'],
        growing: 'Annual grain. Cool season crop. Sow in early spring or autumn. Full sun, average soil.',
        harvesting: 'Harvest green milky oats in the "milk stage" (squeeze seed — milky fluid emerges) for highest potency. Dry quickly.',
        storage: 'Store dried herb in airtight container. Green milky oat tincture is the most potent form.',
        substitutions: ['Lemon Balm (for nervous exhaustion)', 'Chamomile (for calming)'],
        folklore: 'Associated with Lammas and harvest celebrations across European traditions. "Sowing wild oats" refers to oat\'s traditional reputation as a gentle aphrodisiac. Celtic symbol of abundance.',
        affirmation: 'I am nourished, restored, and growing stronger every day.',
        traditions: ['Wiccan', 'Druidry', 'Heathen', 'Green Witch', 'Eclectic']
    },
    {
        name: 'Violet',
        latin: 'Viola odorata',
        emoji: '💜',
        safety: 'safe',
        safety_notes: 'Leaves and flowers are edible and safe. Root may be emetic in large amounts. Standard culinary and medicinal use has an excellent safety record.',
        intentions: ['Love', 'Peace', 'Healing', 'Protection'],
        element: 'Water',
        planet: 'Venus',
        zodiac: ['Libra', 'Pisces'],
        deities: ['Venus', 'Aphrodite', 'Persephone', 'Io'],
        properties: 'The humble herb of modest power. Violet offers gentle protection, soothing healing, and quiet love — perfect for spells that call for subtlety over force.',
        magical_uses: 'Add to love sachets, combine with lavender for peace and love, use in protection amulets, scatter flowers to honor the dead, add to healing rituals.',
        medicinal_uses: 'Anti-inflammatory, expectorant, soothes sore throats, gentle lymphatic herb, high in vitamins C and A.',
        preparation: ['Tea', 'Infusion', 'Syrup', 'Culinary', 'Poultice'],
        growing: 'Perennial groundcover. Part shade, moist soil. Self-seeds freely. Zones 4-8. Excellent companion plant.',
        harvesting: 'Harvest leaves and flowers in spring. Both edible and medicinal. Dry gently or use fresh.',
        storage: 'Use fresh when possible. Dried flowers and leaves keep 6-12 months.',
        substitutions: ['Rose (for love)', 'Lavender (for peace)'],
        folklore: 'Athens had a violet as its symbol and crowned itself "violet-crowned." Persephone was gathering violets when Hades abducted her. Medieval love potions frequently included violet.',
        affirmation: 'I offer gentle love and receive it in return.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
    },
    {
        name: 'Lemon Verbena',
        latin: 'Aloysia citrodora',
        emoji: '🍃',
        safety: 'safe',
        safety_notes: 'Generally safe. Avoid large medicinal amounts in kidney disease. Contact dermatitis possible in sensitive individuals.',
        intentions: ['Love', 'Purification', 'Peace', 'Healing'],
        element: 'Air',
        planet: 'Mercury',
        zodiac: ['Gemini', 'Virgo'],
        deities: ['Mercury', 'Hermes'],
        properties: 'The clarifying herb of communication and love. Lemon Verbena clears stagnant energy, sharpens the mind, and opens the heart to clear communication in relationships.',
        magical_uses: 'Burn for purification, add to love spells to improve communication, carry to increase attractiveness, use in clearing rituals for home or aura.',
        medicinal_uses: 'Digestive aid, mild sedative, anti-inflammatory, antioxidant, reduces stress and anxiety.',
        preparation: ['Tea', 'Essential Oil', 'Culinary', 'Bath', 'Infusion'],
        growing: 'Tender perennial shrub. Full sun, well-drained soil. Frost tender — bring indoors for winter. Zones 8-10.',
        harvesting: 'Harvest leaves throughout the growing season. Best aroma just before flowering.',
        storage: 'Store dried leaves in airtight container. Loses fragrance faster than some herbs — use within 6-9 months.',
        substitutions: ['Lemon Balm (for calm)', 'Spearmint (for clarity)'],
        folklore: 'Brought to Europe from South America in the 17th century. Popular in Victorian sachets and potpourri. Named after Maria Luisa of Spain. Traditionally used to attract love and soothe troubled hearts.',
        affirmation: 'My words are clear, my heart open, and my energy bright.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch']
    },
    {
        name: 'Turmeric',
        latin: 'Curcuma longa',
        emoji: '🟡',
        safety: 'safe',
        safety_notes: 'Culinary use is very safe. Medicinal doses may interact with blood thinners. May cause nausea in some at high doses. Gallbladder disease: consult before using medicinally.',
        intentions: ['Healing', 'Purification', 'Prosperity', 'Protection'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Aries', 'Leo'],
        deities: ['Vishnu', 'Lakshmi', 'Kali'],
        properties: 'The golden root of solar healing and abundance. Turmeric purifies the body and spirit, brings warmth to cold spaces, and draws the golden light of prosperity.',
        magical_uses: 'Add to purification rituals, use in prosperity spells, sprinkle across doorways for protection, incorporate in healing sachets.',
        medicinal_uses: 'Potent anti-inflammatory (curcumin), antioxidant, liver protective, improves digestion, may help with joint pain and metabolic conditions.',
        preparation: ['Culinary', 'Golden Milk', 'Capsule', 'Poultice'],
        growing: 'Tropical perennial. Warm climate, part shade, rich moist soil. Grow indoors from rhizomes in temperate climates.',
        harvesting: 'Harvest rhizomes 8-10 months after planting when leaves die back. Boil, dry, and grind for powder.',
        storage: 'Store ground turmeric in airtight container away from light. Keeps 1 year.',
        substitutions: ['Ginger (related plant, warming)', 'Calendula (solar energy)'],
        folklore: 'In Hindu tradition, turmeric is sacred and used in weddings, puja, and as a purifying agent. Used in Ayurveda for thousands of years. Said to hold the energy of the sun.',
        affirmation: 'I am purified by golden light and prospering in all directions.',
        traditions: ['Wiccan', 'Eclectic', 'Kitchen Witch', 'Green Witch']
    },
    {
        name: 'Cedar',
        latin: 'Cedrus / Thuja spp.',
        emoji: '🌲',
        safety: 'caution',
        safety_notes: 'Leaves and wood safe for smudging. Do NOT ingest western red cedar essential oil (thuja oil) — toxic. Pregnant women should avoid ingesting any cedar preparations (emmenagogue).',
        intentions: ['Protection', 'Purification', 'Healing', 'Prosperity'],
        element: 'Earth',
        planet: 'Sun',
        zodiac: ['Aries', 'Capricorn'],
        deities: ['Baal', 'Ares', 'The Green Man'],
        properties: 'The ancient tree of incorruptible strength. Cedar cleanses and protects with the enduring energy of old growth forests, inviting strength, longevity, and connection to the earth.',
        magical_uses: 'Burn cedar for purification (especially good for clearing after illness), add shavings to protection sachets, use in home blessing rituals.',
        medicinal_uses: 'Antimicrobial (aromatic), insect repellent, expectorant, traditional use for skin conditions (topical). Respiratory support when burned safely.',
        preparation: ['Smoke', 'Sachet', 'Essential Oil (diluted, topical only)', 'Tea (leaves)'],
        growing: 'Coniferous tree. Full sun. Very long-lived. Many species; red cedar and atlas cedar are most common in magical practice.',
        harvesting: 'Harvest small branches or bark sustainably. Never strip a living tree of bark.',
        storage: 'Store dried wood shavings or leaves in airtight container. Keeps well for years.',
        substitutions: ['Sage (for purification)', 'Juniper (similar properties)'],
        folklore: 'Temples and sacred buildings were built from cedar throughout the ancient Near East — Solomon\'s Temple used cedar from Lebanon. Indigenous peoples of the Pacific Northwest consider western red cedar a living ancestor.',
        affirmation: 'I stand ancient and rooted, protected and purified.',
        traditions: ['Wiccan', 'Heathen', 'Eclectic', 'Druidry', 'Green Witch']
    },
    {
        name: 'Dandelion',
        latin: 'Taraxacum officinale',
        emoji: '🌼',
        safety: 'safe',
        safety_notes: 'Very safe, edible weed. Avoid if allergic to Asteraceae. May enhance diuretic medications. Rarely, contact dermatitis.',
        intentions: ['Divination', 'Healing', 'Prosperity', 'Protection'],
        element: 'Air',
        planet: 'Jupiter',
        zodiac: ['Sagittarius', 'Pisces'],
        deities: ['Hecate', 'Brigid', 'Jupiter'],
        properties: 'The spirit herb of wishes and psychic vision. Dandelion opens pathways to the spirit world, carries wishes to the wind, and nourishes the seeker on their path.',
        magical_uses: 'Blow seeds to carry wishes, use roots in psychic tea, add to communication spells, place on altar for Hecate, use in divination rituals.',
        medicinal_uses: 'Liver tonic, digestive bitter, diuretic, anti-inflammatory, high in vitamins A, C, K; supports gut health.',
        preparation: ['Tea', 'Tincture', 'Culinary', 'Roasted root (coffee substitute)', 'Fresh'],
        growing: 'Hardy perennial weed. Thrives in disturbed soil. Full sun. Every garden has some — work with them!',
        harvesting: 'Harvest leaves in spring before flowering (less bitter), roots in autumn, flowers anytime. Avoid areas treated with pesticides.',
        storage: 'Use fresh or dry roots in autumn. Dried root keeps 1 year.',
        substitutions: ['Yellow Dock (for liver support)', 'Chicory (similar)'],
        folklore: 'Blowing dandelion seeds to make wishes is widespread across European folk magic. In folklore, if seeds all blow away on one breath, your wish will come true. Used to communicate with spirits on Samhain.',
        affirmation: 'I release my wishes to the wind and trust they will be received.',
        traditions: ['Wiccan', 'Eclectic', 'Green Witch', 'Kitchen Witch', 'Druidry']
    },
    {
        name: 'Pine',
        latin: 'Pinus sylvestris',
        emoji: '🌲',
        safety: 'safe',
        safety_notes: 'Needles and resin generally safe for external and aromatic use. Pine needle tea has been used traditionally but avoid Yew (Taxus) — it looks similar and is highly toxic. Always positive ID before harvesting.',
        intentions: ['Healing', 'Prosperity', 'Protection', 'Purification'],
        element: 'Earth',
        planet: 'Mars',
        zodiac: ['Capricorn', 'Pisces'],
        deities: ['Pan', 'Cybele', 'Poseidon', 'Attis'],
        properties: 'The evergreen herb of enduring strength and abundance. Pine maintains vitality through dark seasons, cleanses negativity, and attracts steady, lasting prosperity.',
        magical_uses: 'Burn for purification, use needles in prosperity sachets, hang boughs for protection, incorporate in Yule rituals, use resin as incense.',
        medicinal_uses: 'Antiseptic, expectorant, supports respiratory health, antimicrobial, high in vitamin C (needles), anti-inflammatory (resin).',
        preparation: ['Smoke', 'Tea (needles)', 'Salve (resin)', 'Infused Oil', 'Steam'],
        growing: 'Long-lived coniferous tree. Full sun, acidic well-drained soil. Many species. Major forest tree globally.',
        harvesting: 'Harvest young needles for tea, resin from wounded bark sustainably. Use outer twigs only.',
        storage: 'Dried needles keep well. Resin stores indefinitely.',
        substitutions: ['Cedar (similar uses)', 'Rosemary (for purification)'],
        folklore: 'Sacred to Cybele and Attis in mystery cult tradition. Pan pursued Pitys, who became a pine tree. Yule decorations (Christmas tree) descend from ancient pine worship of immortality through winter.',
        affirmation: 'I stand strong through every season, evergreen in my purpose.',
        traditions: ['Wiccan', 'Druidry', 'Heathen', 'Eclectic', 'Green Witch']
    },
    {
        name: 'St. John\'s Wort',
        latin: 'Hypericum perforatum',
        emoji: '🌞',
        safety: 'caution',
        safety_notes: 'Significant drug interactions — avoid with antidepressants (serotonin syndrome risk), birth control pills, HIV medications, blood thinners, and many other drugs. Photosensitizing (avoid strong sun with fair skin). Avoid in pregnancy.',
        intentions: ['Protection', 'Healing', 'Divination', 'Courage'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Leo', 'Sagittarius'],
        deities: ['Baldur', 'Sol', 'John the Baptist'],
        properties: 'The midsummer sun herb of protection and joy. St. John\'s Wort drives away darkness — literal and metaphorical — uplifting the depressed spirit and banishing malevolent energies.',
        magical_uses: 'Harvest on Midsummer for most power, hang over doors to banish evil, carry for courage and protection, burn for exorcism, add to divinatory rituals.',
        medicinal_uses: 'Mild-to-moderate depression, nerve pain (topical oil), anti-inflammatory, wound healing (topical), antiviral.',
        preparation: ['Tincture', 'Infused Oil (topical)', 'Capsule', 'Tea'],
        growing: 'Perennial. Full sun, well-drained soil. Zones 4-8. Can become invasive. Named for blooming around St. John\'s Day (June 24).',
        harvesting: 'Harvest flowering tops on Midsummer/Summer Solstice (June 21-24) when the red oil in flowers is at its peak. Red fingers when you rub buds = ready.',
        storage: 'Infused oil keeps 1 year. Tincture keeps 5+ years.',
        substitutions: ['Lemon Balm (gentler for mood)', 'Rosemary (for clearing)'],
        folklore: 'In European folk magic, midsummer is the peak of its power. Hung above doors on Midsummer Eve to repel witches and evil. In Germany, called "fuga daemonum" (flight of demons). The red oil was said to be the blood of St. John the Baptist.',
        affirmation: 'I banish darkness and stand in the full light of my courage.',
        traditions: ['Wiccan', 'Heathen', 'Druidry', 'Eclectic', 'Green Witch']
    },
    {
        name: 'Rue',
        latin: 'Ruta graveolens',
        emoji: '🌿',
        safety: 'toxic',
        safety_notes: '⚠️ AVOID during pregnancy — strong abortifacient. Phototoxic — sap + sunlight causes severe burns on skin. Internal use in large amounts can cause vomiting, kidney damage, and death. Medicinal doses require expert guidance. Handle with gloves.',
        intentions: ['Protection', 'Banishing', 'Purification', 'Healing'],
        element: 'Fire',
        planet: 'Mars',
        zodiac: ['Aries', 'Scorpio'],
        deities: ['Aradia', 'Diana', 'Mars', 'Hecate'],
        properties: 'The witch\'s herb of fierce protection and liberation. Rue breaks curses, banishes evil, and clears the heaviest energetic contamination. Wear gloves — this plant has power with consequences.',
        magical_uses: 'Hang above doorways for powerful protection, use in curse-breaking rituals, add to banishing sachets, asperge (sprinkle) blessed rue water for cleansing.',
        medicinal_uses: 'CAUTION: toxic in large amounts. Traditional anti-inflammatory, antispasmodic. Historically used as abortifacient — EXTREMELY DANGEROUS.',
        preparation: ['Smudge (small amounts)', 'Sachet', 'Rue water (very dilute) — NEVER essential oil internally'],
        growing: 'Perennial evergreen herb. Full sun, well-drained soil. Drought tolerant. Zones 4-9. Keep away from children.',
        harvesting: 'Harvest with gloves in morning, avoiding skin contact with sap. Do not harvest in strong sunlight.',
        storage: 'Store dried herb in airtight container for magical use.',
        substitutions: ['Rosemary (safer, for protection)', 'Juniper (for banishing)'],
        folklore: 'Called the "herb of grace" and used to bless holy water in Catholic tradition. In Italian folk magic (stregheria), rue is the primary protective herb. "Cimaruta" amulets in silver feature rue sprigs. Judges wore rue posies in court to ward off jail fever.',
        affirmation: 'I break all curses, cleanse all shadows, and stand free.',
        traditions: ['Wiccan', 'Eclectic', 'Ceremonial', 'Green Witch']
    },
    {
        name: 'Yarrow',
        latin: 'Achillea millefolium',
        emoji: '🌼',
        safety: 'caution',
        safety_notes: 'Avoid during pregnancy (emmenagogue, potential abortifacient in large amounts). May cause allergic reaction in Asteraceae-sensitive individuals. May enhance blood-thinning medications.',
        intentions: ['Protection', 'Love', 'Divination', 'Healing', 'Courage'],
        element: 'Air',
        planet: 'Venus',
        zodiac: ['Aries', 'Libra'],
        deities: ['Achilles', 'Chiron', 'Venus'],
        properties: 'The warrior healer herb of Achilles. Yarrow stops bleeding, wards off evil, and grants courage on the spiritual battlefield. Named for the hero who used it to heal his soldiers.',
        magical_uses: 'Carry for courage, add to love spells and divination, hang in home for protection, use in I Ching divination (traditional stalks), add to handfasting bouquets.',
        medicinal_uses: 'Stops bleeding (styptic), anti-inflammatory, fever reducer, digestive bitter, supports menstrual regulation, wound healing.',
        preparation: ['Tea', 'Tincture', 'Poultice', 'Tincture', 'Salve'],
        growing: 'Perennial wildflower. Full sun. Drought tolerant. Very hardy. Zones 3-9. Spreads by rhizomes.',
        harvesting: 'Harvest flowering tops in summer when in full bloom. Dry on screens.',
        storage: 'Store dried herb in airtight container. Keeps 1 year.',
        substitutions: ['Plantain (for wound healing)', 'Rose (for love)'],
        folklore: 'Achilles was taught its use by the centaur Chiron. Traditional I Ching divination uses yarrow stalks. In Celtic tradition, called "nose bleed plant" for styptic properties. Used across Asia, Europe, and the Americas — one of humanity\'s oldest herbal allies.',
        affirmation: 'I am healed, whole, and brave enough to face what comes.',
        traditions: ['Wiccan', 'Druidry', 'Heathen', 'Eclectic', 'Green Witch', 'Ceremonial']
    },
    {
        name: 'Frankincense',
        latin: 'Boswellia sacra',
        emoji: '🔥',
        safety: 'safe',
        safety_notes: 'Generally safe for incense and aromatherapy use. Essential oil: dilute before skin application. Internal use of resin in moderate amounts is traditional and generally safe; avoid large doses in pregnancy.',
        intentions: ['Purification', 'Protection', 'Healing', 'Divination'],
        element: 'Fire',
        planet: 'Sun',
        zodiac: ['Aries', 'Leo', 'Sagittarius'],
        deities: ['Ra', 'Apollo', 'Baal', 'Jesus', 'Osiris'],
        properties: 'The sacred resin of solar purification and divine connection. Frankincense elevates consciousness, consecrates sacred space, and carries prayers directly to the divine.',
        magical_uses: 'Burn for purification and consecration of space, use to raise the vibration of any magical working, burn before divination and meditation, use in protection rituals.',
        medicinal_uses: 'Anti-inflammatory (boswellic acids), improves focus and memory when inhaled, mood elevating, respiratory support, traditional for arthritis.',
        preparation: ['Incense/Smoke', 'Essential Oil (diluted)', 'Tincture (resin)', 'Tea (small amounts)'],
        growing: 'Tree native to arid regions of Arabian Peninsula and Horn of Africa. Not cultivable in most temperate climates. Source sustainably.',
        harvesting: 'Resin collected by tapping bark and gathering dried tears. Sustainable sourcing is critical — overharvesting threatens wild populations.',
        storage: 'Store resin in sealed container. Lasts indefinitely.',
        substitutions: ['Copal (similar ritual use)', 'Dragon\'s Blood (for protection)'],
        folklore: 'One of the gifts of the Magi. Used in Egyptian temple ritual, Greek, Roman, Jewish, and early Christian worship. In Oman, the legendary "tree of life" is a frankincense tree. The word derives from Old French "franc encens" (noble incense).',
        affirmation: 'I consecrate this space and open myself to the divine.',
        traditions: ['Wiccan', 'Ceremonial', 'Eclectic', 'Druidry']
    },
    {
        name: 'Nettle',
        latin: 'Urtica dioica',
        emoji: '🌿',
        safety: 'safe',
        safety_notes: 'Cooked or dried nettle is very safe. Fresh plant causes stinging dermatitis — wear gloves when harvesting. Root may interact with medications for prostate or blood pressure.',
        intentions: ['Protection', 'Healing', 'Banishing', 'Courage', 'Prosperity'],
        element: 'Fire',
        planet: 'Mars',
        zodiac: ['Aries', 'Scorpio'],
        deities: ['Thor', 'Mars', 'Ares'],
        properties: 'The fierce protector herb. Nettle fights back — literally. It wards off danger, breaks hexes, returns curses to sender, and builds iron strength in body and spirit.',
        magical_uses: 'Stuff poppets for protection from evil, throw nettle into fire to remove fear, use in reversal spells, add to courage sachets, carry for protection against physical danger.',
        medicinal_uses: 'High in iron, vitamins, and minerals, relieves allergies (freeze-dried), joint pain, supports kidney health, prostate tonic (root), builds blood.',
        preparation: ['Tea', 'Tincture', 'Culinary (cooked)', 'Freeze-dried capsule', 'Soup'],
        growing: 'Perennial. Moist, nitrogen-rich soil. Full sun to part shade. Spreads vigorously. Zones 2-10. Wear gloves when handling fresh plant.',
        harvesting: 'Harvest young tops in spring before flowering. Wear gloves and long sleeves. Blanching or drying neutralizes sting.',
        storage: 'Dried nettle keeps 1 year. Freeze-dried is preferred for allergy use.',
        substitutions: ['Thistle (for fierceness)', 'Yarrow (for protection)'],
        folklore: 'Thrown into fire to drive away storms and lightning in Norse tradition. Sacred to Thor. Used to make linen cloth before cotton. Said to grow on fairy mounds. Medieval herbalists recommended it for "iron deficiency" (remarkably accurate).',
        affirmation: 'I stand fierce and protected — my boundaries are real and respected.',
        traditions: ['Wiccan', 'Heathen', 'Druidry', 'Eclectic', 'Green Witch']
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

