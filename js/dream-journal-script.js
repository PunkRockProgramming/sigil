// ==========================================
// DREAM JOURNAL - JavaScript
// ==========================================

// ==========================================
// STATE
// ==========================================

let journal = [];
let editingEntryId = null;

const STORAGE_KEY = 'mystical-path-dream-journal';

// ==========================================
// DOM ELEMENTS
// ==========================================

const dreamForm = document.getElementById('dream-form');
const dreamDateInput = document.getElementById('dream-date');
const dreamTitleInput = document.getElementById('dream-title');
const dreamDescriptionTextarea = document.getElementById('dream-description');
const dreamSymbolsInput = document.getElementById('dream-symbols');
const dreamLuciditySelect = document.getElementById('dream-lucidity');
const dreamInterpretationTextarea = document.getElementById('dream-interpretation');
const formSubmitBtn = document.getElementById('form-submit-btn');
const clearFormBtn = document.getElementById('clear-form-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');

const searchInput = document.getElementById('search-input');
const tagFilter = document.getElementById('tag-filter');
const lucidityFilter = document.getElementById('lucidity-filter');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const entryCount = document.getElementById('entry-count');
const exportJournalBtn = document.getElementById('export-journal-btn');

const journalList = document.getElementById('journal-list');
const emptyState = document.getElementById('empty-state');
const patternsSection = document.getElementById('patterns-section');

// ==========================================
// MOON PHASE HELPER
// ==========================================

function moonPhaseEmoji(dateString) {
    const parts = dateString.split('-');
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);

    let y = year;
    let m = month;
    if (m <= 2) { y -= 1; m += 12; }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
    const daysSinceNew = jd - 2451550.1;
    const synodicMonth = 29.53058867;
    const phase = ((daysSinceNew / synodicMonth) - Math.floor(daysSinceNew / synodicMonth)) * synodicMonth;

    if (phase < 1.84566) return '🌑';
    else if (phase < 5.53699) return '🌒';
    else if (phase < 9.22831) return '🌓';
    else if (phase < 12.91963) return '🌔';
    else if (phase < 16.61096) return '🌕';
    else if (phase < 20.30228) return '🌖';
    else if (phase < 23.99361) return '🌗';
    else if (phase < 27.68493) return '🌘';
    else return '🌑';
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Default date to today
    const today = new Date().toISOString().split('T')[0];
    dreamDateInput.value = today;

    loadJournal();
    initToggleButtons();
    initEventListeners();
    renderJournal();
    updatePatterns();

    // Restore shared dream from URL param
    if (typeof checkShareParam === 'function') {
        const sharedDream = checkShareParam('dream');
        if (sharedDream && sharedDream.description) {
            showSharedDream(sharedDream);
        }
    }
});

function initToggleButtons() {
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            btn.setAttribute('aria-pressed', btn.classList.contains('active'));
        });
        btn.setAttribute('aria-pressed', 'false');
    });
}

function initEventListeners() {
    dreamForm.addEventListener('submit', handleFormSubmit);
    clearFormBtn.addEventListener('click', clearForm);
    cancelEditBtn.addEventListener('click', () => {
        editingEntryId = null;
        clearForm();
    });

    searchInput.addEventListener('input', renderJournal);
    tagFilter.addEventListener('change', renderJournal);
    lucidityFilter.addEventListener('change', renderJournal);
    clearFiltersBtn.addEventListener('click', () => {
        clearFilters([searchInput, tagFilter, lucidityFilter]);
        renderJournal();
    });

    exportJournalBtn.addEventListener('click', exportJournal);
}

// ==========================================
// TOGGLE HELPERS
// ==========================================

function getSelectedToggles(containerId) {
    const container = document.getElementById(containerId);
    return Array.from(container.querySelectorAll('.toggle-btn.active')).map(btn => btn.dataset.value);
}

function setSelectedToggles(containerId, values) {
    const container = document.getElementById(containerId);
    container.querySelectorAll('.toggle-btn').forEach(btn => {
        const active = values.includes(btn.dataset.value);
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
}

function clearToggles(containerId) {
    const container = document.getElementById(containerId);
    container.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
}

// ==========================================
// FORM HANDLING
// ==========================================

function handleFormSubmit(e) {
    e.preventDefault();

    const description = dreamDescriptionTextarea.value.trim();
    if (!description) {
        dreamDescriptionTextarea.focus();
        return;
    }

    const symbolsRaw = dreamSymbolsInput.value.trim();
    const symbols = symbolsRaw
        ? symbolsRaw.split(',').map(s => s.trim()).filter(s => s.length > 0)
        : [];

    const entry = {
        id: editingEntryId || Date.now(),
        date: dreamDateInput.value,
        title: dreamTitleInput.value.trim(),
        description,
        emotions: getSelectedToggles('emotion-toggles'),
        symbols,
        tags: getSelectedToggles('tag-toggles'),
        lucidity: dreamLuciditySelect.value,
        interpretation: dreamInterpretationTextarea.value.trim()
    };

    if (editingEntryId) {
        updateEntry(entry);
        showMessage('Dream entry updated! 💭');
        editingEntryId = null;
    } else {
        journal.push(entry);
        showMessage('Dream saved to journal! ✨');
    }

    saveJournal();
    clearForm();
    renderJournal();
    updatePatterns();
}

function clearForm() {
    const today = new Date().toISOString().split('T')[0];
    dreamDateInput.value = today;
    dreamTitleInput.value = '';
    dreamDescriptionTextarea.value = '';
    dreamSymbolsInput.value = '';
    dreamLuciditySelect.value = 'none';
    dreamInterpretationTextarea.value = '';
    clearToggles('emotion-toggles');
    clearToggles('tag-toggles');

    editingEntryId = null;
    formSubmitBtn.textContent = '💭 Save Dream';
    cancelEditBtn.classList.add('hidden');
}

function loadEntryIntoForm(entry) {
    dreamDateInput.value = entry.date;
    dreamTitleInput.value = entry.title || '';
    dreamDescriptionTextarea.value = entry.description;
    dreamSymbolsInput.value = entry.symbols ? entry.symbols.join(', ') : '';
    dreamLuciditySelect.value = entry.lucidity || 'none';
    dreamInterpretationTextarea.value = entry.interpretation || '';
    setSelectedToggles('emotion-toggles', entry.emotions || []);
    setSelectedToggles('tag-toggles', entry.tags || []);

    editingEntryId = entry.id;
    formSubmitBtn.textContent = '💭 Update Dream';
    cancelEditBtn.classList.remove('hidden');

    document.getElementById('entry-form-section').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// STORAGE
// ==========================================

function loadJournal() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            journal = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load dream journal:', e);
            journal = [];
        }
    }
}

function saveJournal() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(journal));
}

function updateEntry(updatedEntry) {
    const idx = journal.findIndex(e => e.id === updatedEntry.id);
    if (idx !== -1) journal[idx] = updatedEntry;
}

function deleteEntry(id) {
    journal = journal.filter(e => e.id !== id);
}

// ==========================================
// RENDERING
// ==========================================

function renderJournal() {
    const searchTerm = searchInput.value.toLowerCase();
    const tagVal = tagFilter.value;
    const lucidityVal = lucidityFilter.value;

    let filtered = journal.slice();

    // Search across title, description, symbols, interpretation
    if (searchTerm) {
        filtered = filtered.filter(entry => {
            const symbolsText = (entry.symbols || []).join(' ').toLowerCase();
            return (
                (entry.title || '').toLowerCase().includes(searchTerm) ||
                (entry.description || '').toLowerCase().includes(searchTerm) ||
                symbolsText.includes(searchTerm) ||
                (entry.interpretation || '').toLowerCase().includes(searchTerm)
            );
        });
    }

    // Tag filter
    if (tagVal !== 'all') {
        filtered = filtered.filter(entry => (entry.tags || []).includes(tagVal));
    }

    // Lucidity filter
    if (lucidityVal !== 'all') {
        filtered = filtered.filter(entry => entry.lucidity === lucidityVal);
    }

    // Sort newest first
    filtered.sort((a, b) => {
        if (a.date !== b.date) return b.date.localeCompare(a.date);
        return b.id - a.id;
    });

    journalList.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        journalList.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        journalList.style.display = 'flex';
        filtered.forEach(entry => {
            journalList.appendChild(createEntryCard(entry));
        });
    }

    const total = filtered.length;
    entryCount.textContent = `${total} ${total === 1 ? 'entry' : 'entries'}`;
}

function createEntryCard(entry) {
    const card = document.createElement('div');
    card.className = 'entry-card';
    card.setAttribute('role', 'listitem');
    card.dataset.entryId = entry.id;

    const moonEmoji = entry.date ? moonPhaseEmoji(entry.date) : '';
    const lucidityLabel = { none: '', partial: '⟳ Partial Lucidity', full: '★ Fully Lucid' };
    const lucidityText = lucidityLabel[entry.lucidity] || '';

    const formattedDate = formatDate(entry.date);
    const title = entry.title || 'Untitled Dream';

    // Tags badges
    const tagBadges = (entry.tags || []).map(t =>
        `<span class="tag-badge">${t}</span>`
    ).join('');

    // Emotion badges (truncated in summary)
    const emotionBadges = (entry.emotions || []).slice(0, 4).map(e =>
        `<span class="emotion-badge">${e}</span>`
    ).join('');
    const moreEmotions = (entry.emotions || []).length > 4
        ? `<span class="emotion-badge more">+${entry.emotions.length - 4}</span>` : '';

    // Symbols preview
    const symbolsPreview = entry.symbols && entry.symbols.length > 0
        ? entry.symbols.slice(0, 5).join(', ') + (entry.symbols.length > 5 ? '...' : '')
        : '';

    // Description truncated
    const descPreview = entry.description.length > 140
        ? entry.description.slice(0, 140) + '...'
        : entry.description;

    card.innerHTML = `
        <div class="entry-card-header">
            <div class="entry-date-row">
                <span class="entry-date">${moonEmoji} ${formattedDate}</span>
                ${lucidityText ? `<span class="lucidity-badge lucidity-${entry.lucidity}">${lucidityText}</span>` : ''}
            </div>
            <h3 class="entry-title">${escapeHtml(title)}</h3>
            ${tagBadges ? `<div class="entry-tags">${tagBadges}</div>` : ''}
        </div>

        <div class="entry-summary">
            <p class="entry-desc-preview">${escapeHtml(descPreview)}</p>
            ${emotionBadges ? `<div class="entry-emotions">${emotionBadges}${moreEmotions}</div>` : ''}
            ${symbolsPreview ? `<p class="entry-symbols-preview">🔮 ${escapeHtml(symbolsPreview)}</p>` : ''}
        </div>

        <div class="expand-toggle" role="button" tabindex="0" aria-expanded="false">Show Full Entry</div>

        <div class="entry-details">
            <div class="entry-section">
                <h4>Dream Narrative</h4>
                <p>${escapeHtml(entry.description).replace(/\n/g, '<br>')}</p>
            </div>

            ${entry.symbols && entry.symbols.length > 0 ? `
            <div class="entry-section">
                <h4>Symbols</h4>
                <p>${entry.symbols.map(s => `<span class="symbol-chip">${escapeHtml(s)}</span>`).join('')}</p>
            </div>` : ''}

            ${entry.emotions && entry.emotions.length > 0 ? `
            <div class="entry-section">
                <h4>Emotions</h4>
                <div class="entry-emotions-full">${entry.emotions.map(e => `<span class="emotion-badge">${e}</span>`).join('')}</div>
            </div>` : ''}

            ${entry.interpretation ? `
            <div class="entry-section">
                <h4>Interpretation</h4>
                <p>${escapeHtml(entry.interpretation).replace(/\n/g, '<br>')}</p>
            </div>` : ''}

            <div class="entry-actions">
                <button class="btn-edit" data-id="${entry.id}" aria-label="Edit dream entry">✏️ Edit</button>
                <button class="btn-share" data-id="${entry.id}" aria-label="Share dream entry: ${escapeHtml(title)}">🔗 Share</button>
                <button class="btn-delete" data-id="${entry.id}" aria-label="Delete dream entry">🗑️ Delete</button>
            </div>
        </div>
    `;

    // Expand toggle
    const toggle = card.querySelector('.expand-toggle');
    const details = card.querySelector('.entry-details');
    toggle.addEventListener('click', () => {
        const expanded = card.classList.toggle('expanded');
        toggle.textContent = expanded ? 'Hide Entry' : 'Show Full Entry';
        toggle.setAttribute('aria-expanded', expanded);
    });
    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle.click(); }
    });

    // Share button
    card.querySelector('.btn-share').addEventListener('click', (e) => {
        e.stopPropagation();
        const entryData = journal.find(en => en.id === entry.id);
        if (entryData && typeof buildShareURL === 'function') {
            const url = buildShareURL('dream', entryData);
            if (url) showShareModal(url);
        }
    });

    // Edit button
    card.querySelector('.btn-edit').addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(e.currentTarget.dataset.id);
        const entryToEdit = journal.find(en => en.id === id);
        if (entryToEdit) loadEntryIntoForm(entryToEdit);
    });

    // Delete button
    card.querySelector('.btn-delete').addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(e.currentTarget.dataset.id);
        const entryToDelete = journal.find(en => en.id === id);
        const label = entryToDelete?.title || 'this dream entry';
        if (confirm(`Delete "${label}"? This cannot be undone.`)) {
            deleteEntry(id);
            saveJournal();
            renderJournal();
            updatePatterns();
            showMessage('Entry deleted.');
        }
    });

    return card;
}

// ==========================================
// PATTERN RECOGNITION
// ==========================================

function updatePatterns() {
    if (journal.length < 3) {
        patternsSection.classList.add('hidden');
        return;
    }

    patternsSection.classList.remove('hidden');

    const symbolCounts = {};
    const emotionCounts = {};
    const tagCounts = {};
    const lucidityCounts = { none: 0, partial: 0, full: 0 };

    journal.forEach(entry => {
        (entry.symbols || []).forEach(s => {
            const key = s.toLowerCase().trim();
            if (key) symbolCounts[key] = (symbolCounts[key] || 0) + 1;
        });
        (entry.emotions || []).forEach(e => {
            emotionCounts[e] = (emotionCounts[e] || 0) + 1;
        });
        (entry.tags || []).forEach(t => {
            tagCounts[t] = (tagCounts[t] || 0) + 1;
        });
        if (entry.lucidity) {
            lucidityCounts[entry.lucidity] = (lucidityCounts[entry.lucidity] || 0) + 1;
        }
    });

    renderPatternList('pattern-symbols-list', symbolCounts, 10);
    renderPatternList('pattern-emotions-list', emotionCounts, 12);
    renderPatternList('pattern-tags-list', tagCounts, 8);

    // Lucidity breakdown
    const lucidityEl = document.getElementById('pattern-lucidity-list');
    const total = journal.length;
    lucidityEl.innerHTML = [
        { key: 'full', label: 'Fully Lucid', emoji: '★' },
        { key: 'partial', label: 'Partial', emoji: '⟳' },
        { key: 'none', label: 'Non-lucid', emoji: '💤' }
    ].map(({ key, label, emoji }) => {
        const count = lucidityCounts[key] || 0;
        const pct = total > 0 ? Math.round((count / total) * 100) : 0;
        return `<div class="pattern-item">
            <span class="pattern-label">${emoji} ${label}</span>
            <span class="pattern-bar">
                <span class="pattern-fill" style="width:${pct}%"></span>
            </span>
            <span class="pattern-count">${count}</span>
        </div>`;
    }).join('');
}

function renderPatternList(containerId, countsObj, maxItems) {
    const container = document.getElementById(containerId);
    const sorted = Object.entries(countsObj)
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxItems);

    if (sorted.length === 0) {
        container.innerHTML = '<p class="pattern-empty">None recorded yet</p>';
        return;
    }

    const maxCount = sorted[0][1];
    container.innerHTML = sorted.map(([name, count], i) => {
        const pct = maxCount > 0 ? Math.round((count / maxCount) * 100) : 0;
        const rank = i + 1;
        return `<div class="pattern-item">
            <span class="pattern-rank">${rank}</span>
            <span class="pattern-label">${escapeHtml(name)}</span>
            <span class="pattern-bar">
                <span class="pattern-fill" style="width:${pct}%"></span>
            </span>
            <span class="pattern-count">${count}</span>
        </div>`;
    }).join('');
}

// ==========================================
// SHARED DREAM OVERLAY
// ==========================================

function showSharedDream(entry) {
    const overlay = document.createElement('div');
    overlay.id = 'shared-dream-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.style.cssText = [
        'position:fixed', 'inset:0', 'background:rgba(0,0,0,0.75)',
        'z-index:9999', 'display:flex', 'align-items:center', 'justify-content:center',
        'padding:20px', 'overflow-y:auto'
    ].join(';');

    const modal = document.createElement('div');
    modal.style.cssText = [
        'background:var(--darker,#0f0d29)', 'border:2px solid var(--primary,#8b5cf6)',
        'border-radius:20px', 'padding:30px', 'max-width:560px', 'width:100%',
        'box-shadow:0 20px 60px rgba(0,0,0,0.5)'
    ].join(';');

    const moonEmoji = entry.date ? moonPhaseEmoji(entry.date) : '';
    const dateStr = entry.date ? formatDate(entry.date) : '';
    const title = entry.title || 'Untitled Dream';
    const lucidityLabel = { none: '', partial: '⟳ Partial Lucidity', full: '★ Fully Lucid' };
    const tags = (entry.tags || []).map(t => `<span style="font-size:0.75rem;padding:2px 8px;border-radius:8px;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);color:var(--accent,#a78bfa);margin:0 3px 3px 0;display:inline-block">${escapeHtml(t)}</span>`).join('');
    const emotions = (entry.emotions || []).map(e => `<span style="font-size:0.75rem;padding:2px 8px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--text-secondary,#94a3b8);margin:0 3px 3px 0;display:inline-block">${escapeHtml(e)}</span>`).join('');
    const symbolsStr = entry.symbols && entry.symbols.length ? entry.symbols.join(', ') : '';

    modal.innerHTML = `
        <p style="color:var(--accent,#a78bfa);font-size:0.82rem;margin:0 0 4px;">💭 Shared Dream</p>
        <h3 style="margin:0 0 6px;color:var(--text,#e2e8f0);font-size:1.3rem;">${escapeHtml(title)}</h3>
        <p style="color:var(--text-secondary,#94a3b8);font-size:0.85rem;margin-bottom:12px;">${moonEmoji} ${dateStr}${entry.lucidity && entry.lucidity !== 'none' ? ' · ' + lucidityLabel[entry.lucidity] : ''}</p>
        ${tags ? `<div style="margin-bottom:10px;">${tags}</div>` : ''}
        <div style="background:rgba(0,0,0,0.2);border-radius:10px;padding:14px;margin-bottom:14px;">
            <p style="color:var(--text,#e2e8f0);font-size:0.9rem;line-height:1.7;margin:0;">${escapeHtml(entry.description).replace(/\n/g, '<br>')}</p>
        </div>
        ${symbolsStr ? `<p style="color:var(--text-secondary,#94a3b8);font-size:0.85rem;margin-bottom:10px;">🔮 ${escapeHtml(symbolsStr)}</p>` : ''}
        ${emotions ? `<div style="margin-bottom:12px;">${emotions}</div>` : ''}
        ${entry.interpretation ? `<div style="background:rgba(0,0,0,0.15);border-radius:10px;padding:12px;margin-bottom:14px;"><p style="color:var(--text-secondary,#94a3b8);font-size:0.82rem;font-style:italic;margin:0;">${escapeHtml(entry.interpretation).replace(/\n/g, '<br>')}</p></div>` : ''}
        <button id="close-shared-dream-btn" style="padding:10px 22px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:var(--text,#e2e8f0);cursor:pointer;font-family:inherit;font-size:0.9rem;">Close</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const close = () => overlay.remove();
    document.getElementById('close-shared-dream-btn').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
}

// ==========================================
// EXPORT
// ==========================================

function exportJournal() {
    if (journal.length === 0) {
        showMessage('Your journal is empty. Nothing to export.');
        return;
    }

    const dataStr = JSON.stringify(journal, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dream-journal-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Journal exported! 💾');
}

// ==========================================
// UTILITIES
// ==========================================

function formatDate(dateStr) {
    if (!dateStr) return '';
    // Parse as local date to avoid timezone offset issues
    const [year, month, day] = dateStr.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function showMessage(msg) {
    const existing = document.querySelector('.success-message');
    if (existing) existing.remove();

    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = msg;
    document.body.appendChild(message);

    setTimeout(() => message.classList.add('show'), 10);
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => message.remove(), 300);
    }, 3000);
}
