// ========================================
// CORRESPONDENCE LOOKUP
// Depends on: correspondence-data.js (CORRESPONDENCE_DATA)
//             filter-utils.js (not used — custom search below for match highlighting)
// ========================================

// ─── DOM ──────────────────────────────────────────────────────────────────────

const searchInput    = document.getElementById('correspondence-search');
const clearSearchBtn = document.getElementById('clear-search');
const toolFilter     = document.getElementById('tool-filter');
const elementFilter  = document.getElementById('element-filter');
const planetFilter   = document.getElementById('planet-filter');
const clearFiltersBtn = document.getElementById('clear-filters');
const resultCount    = document.getElementById('result-count');
const resultHint     = document.getElementById('result-hint');
const noResults      = document.getElementById('no-results');

const TOOLS = ['Crystal', 'Herb', 'Rune', 'Candle'];

// ─── Search & Filter ──────────────────────────────────────────────────────────

function getMatchedTerms(item, term) {
    if (!term) return [];
    const t = term.toLowerCase();
    const matched = [];
    item.intentions.forEach(i => { if (i.toLowerCase().includes(t)) matched.push(i); });
    if (item.element && item.element.toLowerCase().includes(t)) matched.push(item.element);
    if (item.planet && item.planet.toLowerCase().includes(t)) matched.push(item.planet);
    if (item.chakra && item.chakra.toLowerCase().includes(t)) matched.push(item.chakra);
    if (item.zodiac) item.zodiac.forEach(z => { if (z.toLowerCase().includes(t)) matched.push(z); });
    return [...new Set(matched)];
}

function itemMatchesSearch(item, term) {
    if (!term) return true;
    const t = term.toLowerCase();
    return (
        item.name.toLowerCase().includes(t) ||
        item.intentions.some(i => i.toLowerCase().includes(t)) ||
        (item.element && item.element.toLowerCase().includes(t)) ||
        (item.planet && item.planet.toLowerCase().includes(t)) ||
        (item.chakra && item.chakra.toLowerCase().includes(t)) ||
        (item.zodiac && item.zodiac.some(z => z.toLowerCase().includes(t)))
    );
}

function filterData() {
    const term = searchInput.value.trim();
    const tool = toolFilter.value;
    const element = elementFilter.value;
    const planet = planetFilter.value;

    return CORRESPONDENCE_DATA.filter(item => {
        if (tool !== 'all' && item.tool !== tool) return false;
        if (element !== 'all' && item.element !== element) return false;
        if (planet !== 'all') {
            if (!item.planet) return false;
            // planet field can be "Mercury / Saturn" — check contains
            if (!item.planet.toLowerCase().includes(planet.toLowerCase())) return false;
        }
        if (!itemMatchesSearch(item, term)) return false;
        return true;
    });
}

// ─── Render ───────────────────────────────────────────────────────────────────

function createCard(item, term) {
    const matched = getMatchedTerms(item, term);
    const matchSet = new Set(matched.map(m => m.toLowerCase()));

    const card = document.createElement('div');
    card.className = 'corr-card';
    card.setAttribute('role', 'listitem');

    // Top row: emoji/dot + name
    const topDiv = document.createElement('div');
    topDiv.className = 'corr-card-top';

    if (item.tool === 'Candle' && item.hex) {
        const dot = document.createElement('span');
        dot.className = 'candle-dot';
        dot.style.backgroundColor = item.hex;
        topDiv.appendChild(dot);
    } else {
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'corr-emoji';
        emojiSpan.textContent = item.emoji;
        topDiv.appendChild(emojiSpan);
    }

    const nameSpan = document.createElement('span');
    nameSpan.className = 'corr-name';
    nameSpan.textContent = item.name;
    topDiv.appendChild(nameSpan);

    // Tool badge
    const badge = document.createElement('span');
    badge.className = `tool-badge ${item.tool}`;
    badge.textContent = item.tool;

    // Intention tags (show up to 4, highlight matches)
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'corr-tags';
    item.intentions.slice(0, 4).forEach(intention => {
        const tag = document.createElement('span');
        tag.className = 'corr-tag' + (matchSet.has(intention.toLowerCase()) ? ' match' : '');
        tag.textContent = intention;
        tagsDiv.appendChild(tag);
    });

    // Meta pills: element, chakra/planet
    const metaDiv = document.createElement('div');
    metaDiv.className = 'corr-meta';
    const addPill = (text) => {
        if (!text) return;
        const pill = document.createElement('span');
        pill.className = 'meta-pill';
        pill.textContent = text;
        metaDiv.appendChild(pill);
    };
    addPill(item.element);
    addPill(item.chakra);
    addPill(item.planet);

    // Link to full tool
    const link = document.createElement('a');
    link.href = item.link;
    link.className = 'corr-link';
    link.textContent = `Open in ${item.tool} tool →`;

    card.appendChild(topDiv);
    card.appendChild(badge);
    card.appendChild(tagsDiv);
    if (metaDiv.children.length > 0) card.appendChild(metaDiv);
    card.appendChild(link);

    return card;
}

function render() {
    const term = searchInput.value.trim();
    const filtered = filterData();

    // Group by tool
    const groups = {};
    TOOLS.forEach(t => { groups[t] = []; });
    filtered.forEach(item => groups[item.tool].push(item));

    let totalVisible = 0;

    TOOLS.forEach(tool => {
        const group = document.getElementById(`group-${tool}`);
        const grid  = document.getElementById(`grid-${tool}`);
        const count = document.getElementById(`count-${tool}`);
        const items = groups[tool];

        if (items.length === 0) {
            group.classList.add('hidden');
        } else {
            group.classList.remove('hidden');
            grid.innerHTML = '';
            items.forEach(item => grid.appendChild(createCard(item, term)));
            count.textContent = `${items.length}`;
            totalVisible += items.length;
        }
    });

    // Update count bar
    resultCount.textContent = `${totalVisible} correspondence${totalVisible !== 1 ? 's' : ''}`;
    resultHint.textContent = term ? `matching "${term}"` : '';

    // No results state
    noResults.classList.toggle('hidden', totalVisible > 0);
}

// ─── Event Listeners ──────────────────────────────────────────────────────────

searchInput.addEventListener('input', render);

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    render();
});

toolFilter.addEventListener('change', render);
elementFilter.addEventListener('change', render);
planetFilter.addEventListener('change', render);

clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    toolFilter.value = 'all';
    elementFilter.value = 'all';
    planetFilter.value = 'all';
    render();
});

// ─── Init ─────────────────────────────────────────────────────────────────────

render();
