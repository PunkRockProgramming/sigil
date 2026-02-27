// ========================================
// UNIVERSAL SEARCH — Homepage
// Depends on: correspondence-data.js (CORRESPONDENCE_DATA)
// ========================================

const searchInput   = document.getElementById('universal-search-input');
const clearBtn      = document.getElementById('universal-search-clear');
const resultsPanel  = document.getElementById('universal-search-results');
const searchMeta    = document.getElementById('universal-search-meta');
const searchGroups  = document.getElementById('universal-search-groups');

const TOOL_CONFIG = {
    Crystal: { emoji: '💎', label: 'Crystals' },
    Herb:    { emoji: '🌿', label: 'Herbs' },
    Rune:    { emoji: 'ᚱ',  label: 'Runes' },
    Candle:  { emoji: '🕯️', label: 'Candles' },
};

let debounceTimer = null;

function search(term) {
    const t = term.toLowerCase().trim();
    if (!t) return [];

    return CORRESPONDENCE_DATA.filter(item =>
        item.name.toLowerCase().includes(t) ||
        item.intentions.some(i => i.toLowerCase().includes(t)) ||
        (item.element && item.element.toLowerCase().includes(t)) ||
        (item.planet && item.planet.toLowerCase().includes(t)) ||
        (item.chakra && item.chakra.toLowerCase().includes(t)) ||
        (item.zodiac && item.zodiac.some(z => z.toLowerCase().includes(t)))
    );
}

function highlight(text, term) {
    if (!term) return text;
    const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
}

function renderResults(results, term) {
    const groups = {};
    Object.keys(TOOL_CONFIG).forEach(t => { groups[t] = []; });
    results.forEach(item => groups[item.tool].push(item));

    const total = results.length;
    searchMeta.textContent = total === 0
        ? `No results for "${term}"`
        : `${total} result${total !== 1 ? 's' : ''} for "${term}"`;

    searchGroups.innerHTML = '';

    if (total === 0) {
        const empty = document.createElement('p');
        empty.className = 'search-no-results';
        empty.textContent = 'Try a broader keyword — like an element (Fire), planet (Venus), or intention (protection).';
        searchGroups.appendChild(empty);
        return;
    }

    Object.entries(groups).forEach(([tool, items]) => {
        if (items.length === 0) return;
        const cfg = TOOL_CONFIG[tool];

        const group = document.createElement('div');
        group.className = 'search-group';

        const heading = document.createElement('h3');
        heading.className = 'search-group-heading';
        heading.innerHTML = `<span>${cfg.emoji}</span> ${cfg.label} <span class="search-group-count">${items.length}</span>`;
        group.appendChild(heading);

        const list = document.createElement('div');
        list.className = 'search-result-list';

        items.slice(0, 8).forEach(item => {
            const card = document.createElement('a');
            card.href = item.link;
            card.className = `search-result-card search-result-${tool.toLowerCase()}`;

            const top = document.createElement('div');
            top.className = 'result-top';

            if (tool === 'Candle' && item.hex) {
                const dot = document.createElement('span');
                dot.className = 'result-dot';
                dot.style.backgroundColor = item.hex;
                top.appendChild(dot);
            } else {
                const em = document.createElement('span');
                em.className = 'result-emoji';
                em.textContent = item.emoji;
                top.appendChild(em);
            }

            const name = document.createElement('span');
            name.className = 'result-name';
            name.innerHTML = highlight(item.name, term);
            top.appendChild(name);

            const tags = document.createElement('div');
            tags.className = 'result-tags';
            item.intentions.slice(0, 3).forEach(intention => {
                const tag = document.createElement('span');
                tag.className = 'result-tag';
                tag.innerHTML = highlight(intention, term);
                tags.appendChild(tag);
            });

            card.appendChild(top);
            card.appendChild(tags);
            list.appendChild(card);
        });

        if (items.length > 8) {
            const more = document.createElement('a');
            more.href = `html/correspondence-lookup.html`;
            more.className = 'search-see-more';
            more.textContent = `+${items.length - 8} more — open Correspondence Lookup →`;
            list.appendChild(more);
        }

        group.appendChild(list);
        searchGroups.appendChild(group);
    });
}

function handleInput() {
    const term = searchInput.value.trim();
    clearBtn.hidden = term.length === 0;

    if (term.length < 2) {
        resultsPanel.hidden = true;
        return;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const results = search(term);
        renderResults(results, term);
        resultsPanel.hidden = false;
    }, 150);
}

function clearSearch() {
    searchInput.value = '';
    clearBtn.hidden = true;
    resultsPanel.hidden = true;
    searchInput.focus();
}

searchInput.addEventListener('input', handleInput);
clearBtn.addEventListener('click', clearSearch);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !resultsPanel.hidden) {
        clearSearch();
    }
});
