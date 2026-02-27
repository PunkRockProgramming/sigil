// ========================================
// DAILY PRACTICE DASHBOARD
// Self-contained: moon phase + sabbat calcs inline, Crystal/Rune of Day from localStorage
// ========================================

// ─── Today's date display ─────────────────────────────────────────────────────

const todayEl = document.getElementById('today-date');
todayEl.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// ─── Moon Phase (inlined from moon-script.js) ─────────────────────────────────

function getMoonPhase(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let y = year, m = month;
    if (m <= 2) { y -= 1; m += 12; }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
    const daysSinceNew = jd - 2451550.1;
    const synodicMonth = 29.53058867;
    const phase = ((daysSinceNew / synodicMonth) % 1) * synodicMonth;
    const illumination = (1 - Math.cos((phase / synodicMonth) * 2 * Math.PI)) / 2;
    return { phase, illumination, name: getPhaseName(phase), emoji: getPhaseEmoji(phase) };
}

function getPhaseName(age) {
    if (age < 1.84566)  return 'New Moon';
    if (age < 5.53699)  return 'Waxing Crescent';
    if (age < 9.22831)  return 'First Quarter';
    if (age < 12.91963) return 'Waxing Gibbous';
    if (age < 16.61096) return 'Full Moon';
    if (age < 20.30228) return 'Waning Gibbous';
    if (age < 23.99361) return 'Last Quarter';
    if (age < 27.68493) return 'Waning Crescent';
    return 'New Moon';
}

function getPhaseEmoji(age) {
    if (age < 1.84566)  return '🌑';
    if (age < 5.53699)  return '🌒';
    if (age < 9.22831)  return '🌓';
    if (age < 12.91963) return '🌔';
    if (age < 16.61096) return '🌕';
    if (age < 20.30228) return '🌖';
    if (age < 23.99361) return '🌗';
    if (age < 27.68493) return '🌘';
    return '🌑';
}

function renderMoon() {
    const moon = getMoonPhase(new Date());
    document.getElementById('moon-emoji').textContent = moon.emoji;
    document.getElementById('moon-heading').textContent = moon.name;
    document.getElementById('moon-illumination').textContent =
        `${Math.round(moon.illumination * 100)}% illuminated`;
}

// ─── Next Sabbat (inlined from sabbat-script.js) ──────────────────────────────

const SABBATS = [
    { name: 'Samhain',    emoji: '🎃', month: 10, day: 31 },
    { name: 'Yule',       emoji: '❄️', month: 12, day: 21 },
    { name: 'Imbolc',     emoji: '🌱', month: 2,  day: 1  },
    { name: 'Ostara',     emoji: '🐣', month: 3,  day: 20 },
    { name: 'Beltane',    emoji: '🌸', month: 5,  day: 1  },
    { name: 'Litha',      emoji: '☀️', month: 6,  day: 21 },
    { name: 'Lughnasadh', emoji: '🌾', month: 8,  day: 1  },
    { name: 'Mabon',      emoji: '🍂', month: 9,  day: 21 }
];

function getNextSabbat() {
    const today = new Date();
    const year = today.getFullYear();
    const candidates = [];
    [year, year + 1].forEach(y => {
        SABBATS.forEach(s => {
            candidates.push({ ...s, date: new Date(y, s.month - 1, s.day) });
        });
    });
    return candidates.filter(s => s.date > today).sort((a, b) => a.date - b.date)[0];
}

function renderSabbat() {
    const next = getNextSabbat();
    document.getElementById('sabbat-emoji').textContent = next.emoji;
    document.getElementById('sabbat-heading').textContent = next.name;
    document.getElementById('sabbat-date').textContent = next.date.toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    });
    const days = Math.ceil((next.date - new Date()) / (1000 * 60 * 60 * 24));
    document.getElementById('sabbat-countdown').textContent =
        days === 1 ? 'Tomorrow' : `${days} days away`;
}

// ─── Crystal of the Day (from localStorage) ───────────────────────────────────

function renderCrystal() {
    const stored = JSON.parse(localStorage.getItem('mystical-path-crystal-of-day') || '{}');
    const today = new Date().toISOString().split('T')[0];

    if (stored.name) {
        document.getElementById('crystal-emoji').textContent = stored.emoji || '💎';
        document.getElementById('crystal-heading').textContent = stored.name;
        if (stored.date !== today) {
            document.getElementById('crystal-note').textContent = 'Visit Crystal Database to refresh today\'s crystal';
        }
    } else {
        document.getElementById('crystal-emoji').textContent = '💎';
        document.getElementById('crystal-heading').textContent = 'Not set yet';
        document.getElementById('crystal-note').textContent = 'Open Crystal Database to reveal today\'s crystal';
    }
}

// ─── Rune of the Day (from localStorage) ──────────────────────────────────────

function renderRune() {
    const stored = JSON.parse(localStorage.getItem('mystical-path-rune-of-day') || '{}');
    const today = new Date().toISOString().split('T')[0];

    if (stored.name) {
        document.getElementById('rune-symbol').textContent = stored.emoji || 'ᚠ';
        document.getElementById('rune-heading').textContent = stored.name;
        if (stored.date !== today) {
            document.getElementById('rune-keywords').textContent = 'Visit Rune Caster to refresh today\'s rune';
        }
    } else {
        document.getElementById('rune-symbol').textContent = 'ᚠ';
        document.getElementById('rune-heading').textContent = 'Not set yet';
        document.getElementById('rune-keywords').textContent = 'Open Rune Caster to reveal today\'s rune';
    }
}

// ─── Daily Affirmation ────────────────────────────────────────────────────────

const AFFIRMATIONS = [
    { category: 'Self-Love',    text: 'I am worthy of love, respect, and all the blessings the universe offers.' },
    { category: 'Self-Love',    text: 'I honor my body, mind, and spirit as sacred vessels of divine energy.' },
    { category: 'Self-Love',    text: 'I am enough, exactly as I am in this present moment.' },
    { category: 'Abundance',    text: 'I am a magnet for prosperity, and abundance flows to me effortlessly.' },
    { category: 'Abundance',    text: 'The universe provides for all my needs in perfect timing.' },
    { category: 'Abundance',    text: 'I am open to receiving blessings from expected and unexpected sources.' },
    { category: 'Protection',   text: 'I am surrounded by a shield of divine white light that deflects all negativity.' },
    { category: 'Protection',   text: 'I am safe, protected, and supported by the universe at all times.' },
    { category: 'Protection',   text: 'My energy field is strong, and I choose what I allow into my space.' },
    { category: 'Healing',      text: 'I release all that no longer serves my highest good.' },
    { category: 'Healing',      text: 'Every cell in my body vibrates with health and healing energy.' },
    { category: 'Healing',      text: 'I am constantly healing, growing, and evolving into my best self.' },
    { category: 'Intuition',    text: 'I trust my intuition as the voice of my higher self.' },
    { category: 'Intuition',    text: 'I am deeply connected to the wisdom of the universe.' },
    { category: 'Intuition',    text: 'My inner knowing guides me toward my highest path.' },
    { category: 'Manifestation', text: 'I am a powerful creator, and my intentions shape my reality.' },
    { category: 'Manifestation', text: 'What I focus on expands. I choose to focus on beauty, love, and joy.' },
    { category: 'Manifestation', text: 'I plant seeds of intention with clarity, patience, and trust.' },
    { category: 'Gratitude',    text: 'I am grateful for the magic woven into each ordinary moment.' },
    { category: 'Gratitude',    text: 'My heart overflows with gratitude for all that I am and all that I have.' },
    { category: 'Courage',      text: 'I walk forward with courage, knowing the universe walks with me.' },
    { category: 'Courage',      text: 'I embrace challenges as sacred invitations to grow.' },
    { category: 'Peace',        text: 'I breathe in peace and exhale anything that disturbs my center.' },
    { category: 'Peace',        text: 'I am the calm in the storm, rooted and unshakable.' },
];

const AFF_STORAGE_KEY = 'mystical-path-dashboard-affirmation';

function getDailyAffirmation() {
    const today = new Date().toISOString().split('T')[0];
    const stored = JSON.parse(localStorage.getItem(AFF_STORAGE_KEY) || '{}');
    if (stored.date === today && stored.index !== undefined) {
        return AFFIRMATIONS[stored.index] || AFFIRMATIONS[0];
    }
    const index = Math.floor(Math.random() * AFFIRMATIONS.length);
    localStorage.setItem(AFF_STORAGE_KEY, JSON.stringify({ date: today, index }));
    return AFFIRMATIONS[index];
}

function renderAffirmation(aff) {
    document.getElementById('affirmation-text').textContent = aff.text;
    document.getElementById('affirmation-category').textContent = aff.category;
}

document.getElementById('new-affirmation').addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0];
    const index = Math.floor(Math.random() * AFFIRMATIONS.length);
    localStorage.setItem(AFF_STORAGE_KEY, JSON.stringify({ date: today, index }));
    renderAffirmation(AFFIRMATIONS[index]);
});

// ─── Init ─────────────────────────────────────────────────────────────────────

renderMoon();
renderSabbat();
renderCrystal();
renderRune();
renderAffirmation(getDailyAffirmation());
