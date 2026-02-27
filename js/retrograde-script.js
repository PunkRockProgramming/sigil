// ========================================
// RETROGRADE TRACKER
// Track planetary retrograde periods
// ========================================

// ========================================
// RETROGRADE DATA
// Dates are approximate — retrograde timing
// shifts slightly year to year.
// ========================================

const PLANETS = [
    {
        name: 'Mercury',
        emoji: '☿',
        symbol: '☿',
        keywords: ['Communication', 'Travel', 'Technology', 'Contracts'],
        rulership: 'Gemini & Virgo',
        retrograde_meaning: 'Mercury rules communication, transportation, and technology. When retrograde, expect miscommunications, travel delays, tech glitches, and contracts gone awry. A time for review, reflection, and revision — not new starts.',
        what_to_avoid: ['Signing contracts', 'Launching new projects', 'Buying electronics', 'Making major decisions', 'Starting new relationships'],
        what_to_embrace: ['Reviewing old plans', 'Reconnecting with the past', 'Editing and revising work', 'Deep reflection', 'Finishing unfinished business'],
        affirmation: 'I pause, reflect, and communicate with intention. All is unfolding in divine timing.',
        color: '#a8d4f5',
        frequency: '3–4 times per year, ~3 weeks each'
    },
    {
        name: 'Venus',
        emoji: '♀',
        symbol: '♀',
        keywords: ['Love', 'Beauty', 'Values', 'Money'],
        rulership: 'Taurus & Libra',
        retrograde_meaning: 'Venus rules love, relationships, beauty, and finances. When retrograde, past lovers may reappear, aesthetic tastes shift, and financial matters require review. Not the time for new love commitments or major purchases.',
        what_to_avoid: ['Getting married or engaged', 'Major cosmetic changes (haircuts, plastic surgery)', 'Starting new relationships', 'Large financial investments', 'Buying luxury items'],
        what_to_embrace: ['Reassessing your values', 'Healing past relationship wounds', 'Budget review', 'Deepening existing relationships', 'Inner beauty work'],
        affirmation: 'I honor my worth and trust that love flows to me in the right time.',
        color: '#f9a8d4',
        frequency: 'Every ~18 months, ~40 days each'
    },
    {
        name: 'Mars',
        emoji: '♂',
        symbol: '♂',
        keywords: ['Action', 'Energy', 'Drive', 'Conflict'],
        rulership: 'Aries & Scorpio',
        retrograde_meaning: 'Mars rules ambition, drive, sex drive, and conflict. When retrograde, energy levels drop, anger turns inward, and forward momentum stalls. Frustration and passive aggression increase. Redirect energy toward inner work.',
        what_to_avoid: ['Starting wars or major confrontations', 'Launching new ambitious projects', 'High-risk physical activities', 'Acting on impulse', 'Making rash decisions'],
        what_to_embrace: ['Reassessing your goals and motivations', 'Redirecting anger productively', 'Completing existing projects', 'Internal strength work', 'Strategic planning for later'],
        affirmation: 'I channel my energy wisely and act from a place of calm intention.',
        color: '#fca5a5',
        frequency: 'Every ~26 months, ~10 weeks each'
    },
    {
        name: 'Jupiter',
        emoji: '♃',
        symbol: '♃',
        keywords: ['Expansion', 'Luck', 'Philosophy', 'Abundance'],
        rulership: 'Sagittarius & Pisces',
        retrograde_meaning: 'Jupiter rules expansion, luck, wisdom, and abundance. When retrograde, growth turns inward. External luck diminishes but internal wisdom deepens. A time to consolidate gains, re-examine beliefs, and develop genuine understanding rather than surface-level expansion.',
        what_to_avoid: ['Over-extending financially', 'Gambling or speculation', 'Excessive optimism without groundwork', 'Starting new philosophical or spiritual systems'],
        what_to_embrace: ['Deepening spiritual practice', 'Reviewing educational goals', 'Inner moral development', 'Consolidating existing abundance', 'Wisdom seeking'],
        affirmation: 'True abundance grows from within. I expand in wisdom and gratitude.',
        color: '#fcd34d',
        frequency: 'Once per year, ~4 months each'
    },
    {
        name: 'Saturn',
        emoji: '♄',
        symbol: '♄',
        keywords: ['Structure', 'Discipline', 'Karma', 'Time'],
        rulership: 'Capricorn & Aquarius',
        retrograde_meaning: 'Saturn rules structure, discipline, karma, and long-term goals. When retrograde, karmic lessons resurface for review. Old restrictions loosen temporarily. A deep time for reassessing responsibilities, renegotiating obligations, and restructuring your life foundations.',
        what_to_avoid: ['Shirking important responsibilities', 'Ignoring recurring karmic patterns', 'Making permanent structural changes impulsively'],
        what_to_embrace: ['Reviewing life structures and rules you live by', 'Working through karmic debts', 'Releasing guilt and outdated obligations', 'Long-term planning and strategy'],
        affirmation: 'I honor my commitments and release what no longer serves my highest path.',
        color: '#d1d5db',
        frequency: 'Once per year, ~4.5 months each'
    }
];

// Retrograde periods per planet for 2025–2026
// Sources: approximate astronomical data
const RETROGRADES = [
    // Mercury 2025
    { planet: 'Mercury', start: new Date('2025-01-15'), end: new Date('2025-02-05'), year: 2025 },
    { planet: 'Mercury', start: new Date('2025-05-29'), end: new Date('2025-06-22'), year: 2025 },
    { planet: 'Mercury', start: new Date('2025-09-22'), end: new Date('2025-10-15'), year: 2025 },

    // Venus 2025
    { planet: 'Venus', start: new Date('2025-03-01'), end: new Date('2025-04-12'), year: 2025 },

    // Mars 2025
    { planet: 'Mars', start: new Date('2024-12-07'), end: new Date('2025-02-24'), year: 2025 },

    // Jupiter 2025
    { planet: 'Jupiter', start: new Date('2025-11-11'), end: new Date('2026-03-10'), year: 2025 },

    // Saturn 2025
    { planet: 'Saturn', start: new Date('2025-07-13'), end: new Date('2025-11-28'), year: 2025 },

    // Mercury 2026
    { planet: 'Mercury', start: new Date('2026-01-10'), end: new Date('2026-01-31'), year: 2026 },
    { planet: 'Mercury', start: new Date('2026-05-10'), end: new Date('2026-06-03'), year: 2026 },
    { planet: 'Mercury', start: new Date('2026-09-05'), end: new Date('2026-09-28'), year: 2026 },

    // Saturn 2026
    { planet: 'Saturn', start: new Date('2026-07-27'), end: new Date('2026-12-14'), year: 2026 },

    // Jupiter 2026
    { planet: 'Jupiter', start: new Date('2026-11-03'), end: new Date('2027-03-02'), year: 2026 },
];

// ========================================
// STATE
// ========================================

let activeFilter = 'all';

// ========================================
// DOM ELEMENTS
// ========================================

const planetFilter = document.getElementById('planet-filter');
const planetGrid = document.getElementById('planet-grid');
const currentRetrogrades = document.getElementById('current-retrogrades');
const currentContent = document.getElementById('current-content');

// ========================================
// DATE HELPERS
// ========================================

function today() {
    return new Date();
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function daysUntil(date) {
    const diff = date - today();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function daysAgo(date) {
    const diff = today() - date;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Get current retrograde status for a planet
 * Returns: { status: 'active'|'upcoming'|'none', period, daysLeft, daysUntil }
 */
function getPlanetStatus(planetName) {
    const now = today();

    // Check if currently retrograde
    const active = RETROGRADES.find(r =>
        r.planet === planetName && r.start <= now && r.end >= now
    );
    if (active) {
        return {
            status: 'active',
            period: active,
            daysLeft: daysUntil(active.end)
        };
    }

    // Find next upcoming retrograde
    const upcoming = RETROGRADES
        .filter(r => r.planet === planetName && r.start > now)
        .sort((a, b) => a.start - b.start)[0];

    if (upcoming) {
        return {
            status: 'upcoming',
            period: upcoming,
            daysUntil: daysUntil(upcoming.start)
        };
    }

    return { status: 'none' };
}

// ========================================
// RENDER
// ========================================

function renderCurrentRetrogrades() {
    const now = today();
    const active = RETROGRADES.filter(r => r.start <= now && r.end >= now);

    if (active.length === 0) {
        currentContent.innerHTML = `
            <p class="no-retrogrades">No planets are currently retrograde. ✨ Good time for forward momentum!</p>`;
        return;
    }

    currentContent.innerHTML = active.map(r => {
        const planet = PLANETS.find(p => p.name === r.planet);
        return `
            <div class="active-retrograde-item" style="border-color: ${planet.color}">
                <span class="active-planet-emoji">${planet.emoji}</span>
                <div class="active-info">
                    <strong>${planet.name} Retrograde</strong>
                    <span>Ends ${formatDate(r.end)} · ${daysUntil(r.end)} days remaining</span>
                </div>
            </div>`;
    }).join('');
}

function createPlanetCard(planet) {
    const status = getPlanetStatus(planet.name);
    const card = document.createElement('div');
    card.className = 'planet-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.style.setProperty('--planet-color', planet.color);

    let statusHTML = '';
    if (status.status === 'active') {
        statusHTML = `
            <div class="status-badge status-active">
                🔴 Currently Retrograde — ends ${formatDate(status.period.end)} (${status.daysLeft} days)
            </div>`;
    } else if (status.status === 'upcoming') {
        statusHTML = `
            <div class="status-badge status-upcoming">
                ⏳ Next: ${formatDate(status.period.start)} — ${formatDate(status.period.end)} (in ${status.daysUntil} days)
            </div>`;
    } else {
        statusHTML = `<div class="status-badge status-none">✓ Direct motion</div>`;
    }

    // Get all upcoming periods for this planet
    const now = today();
    const upcomingPeriods = RETROGRADES
        .filter(r => r.planet === planet.name && r.end >= now)
        .sort((a, b) => a.start - b.start)
        .slice(0, 4);

    const periodsHTML = upcomingPeriods.map(r => {
        const isActive = r.start <= now && r.end >= now;
        return `
            <div class="period-row ${isActive ? 'period-active' : ''}">
                <span>${isActive ? '🔴 NOW' : formatDate(r.start)}</span>
                <span>→</span>
                <span>${formatDate(r.end)}</span>
            </div>`;
    }).join('');

    card.innerHTML = `
        <div class="planet-header">
            <div class="planet-symbol" style="color: ${planet.color}">${planet.symbol}</div>
            <div class="planet-title">
                <h3>${planet.name}</h3>
                <span class="planet-rules">Rules: ${planet.rulership}</span>
            </div>
        </div>

        <div class="planet-keywords">
            ${planet.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
        </div>

        ${statusHTML}

        <p class="planet-meaning-preview">${planet.retrograde_meaning.slice(0, 110)}...</p>

        <span class="expand-toggle">See Full Guide ▼</span>

        <div class="planet-details">
            <p class="planet-meaning">${planet.retrograde_meaning}</p>

            <div class="planet-advice">
                <div class="advice-block avoid">
                    <h4>🚫 Avoid</h4>
                    <ul>${planet.what_to_avoid.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="advice-block embrace">
                    <h4>✨ Embrace</h4>
                    <ul>${planet.what_to_embrace.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
            </div>

            <div class="upcoming-periods">
                <h4>📅 Upcoming Periods</h4>
                <div class="periods-list">${periodsHTML || '<p>No upcoming periods in range.</p>'}</div>
                <p class="frequency-note">Frequency: ${planet.frequency}</p>
            </div>

            <div class="planet-affirmation">
                <h4>🙏 Affirmation</h4>
                <p><em>"${planet.affirmation}"</em></p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        const toggle = card.querySelector('.expand-toggle');
        toggle.textContent = card.classList.contains('expanded')
            ? 'Hide Guide ▲'
            : 'See Full Guide ▼';
    });

    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });

    return card;
}

function renderPlanetCards() {
    planetGrid.innerHTML = '';

    const filtered = activeFilter === 'all'
        ? PLANETS
        : PLANETS.filter(p => p.name === activeFilter);

    filtered.forEach(planet => {
        planetGrid.appendChild(createPlanetCard(planet));
    });
}

// ========================================
// EVENT LISTENERS
// ========================================

planetFilter.addEventListener('change', () => {
    activeFilter = planetFilter.value;
    renderPlanetCards();
});

// ========================================
// INIT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderCurrentRetrogrades();
    renderPlanetCards();
});
