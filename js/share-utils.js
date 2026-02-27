/**
 * MYSTICAL PATH TOOLS — SHARE VIA URL UTILITY
 * Encode/decode readings and spells into URL-safe Base64 strings.
 *
 * Usage:
 *   const url = buildShareURL({ spread: 'three-rune', runes: [{idx:0, reversed:false}] });
 *   showShareModal(url);
 *   const data = checkShareParam('reading');
 */

// ─── ENCODE / DECODE ─────────────────────────────────────────────────────────

function encodeReading(data) {
    try {
        const json = JSON.stringify(data);
        // btoa works on ASCII; encode to UTF-8 first via encodeURIComponent
        return btoa(encodeURIComponent(json))
            .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    } catch {
        return null;
    }
}

function decodeReading(str) {
    try {
        // Re-pad and restore standard Base64
        const padded = str.replace(/-/g, '+').replace(/_/g, '/');
        const pad = padded.length % 4;
        const b64 = pad ? padded + '='.repeat(4 - pad) : padded;
        return JSON.parse(decodeURIComponent(atob(b64)));
    } catch {
        return null;
    }
}

// ─── URL HELPERS ─────────────────────────────────────────────────────────────

/**
 * Build a share URL with the given param name and encoded data.
 * @param {string} param  - URL param name ('reading' | 'spell')
 * @param {*} data        - Object to encode
 * @returns {string} Full URL with param
 */
function buildShareURL(param, data) {
    const encoded = encodeReading(data);
    if (!encoded) return null;
    const url = new URL(window.location.href);
    url.search = '';   // strip existing params
    url.hash = '';
    url.searchParams.set(param, encoded);
    return url.toString();
}

/**
 * Check for a URL param on page load and decode it.
 * @param {string} param - URL param name to check
 * @returns {*|null} Decoded object or null
 */
function checkShareParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const raw = urlParams.get(param);
    return raw ? decodeReading(raw) : null;
}

// ─── SHARE MODAL ─────────────────────────────────────────────────────────────

function showShareModal(url) {
    // Remove existing modal if any
    const existing = document.getElementById('share-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'share-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'share-modal-title');
    overlay.style.cssText = [
        'position:fixed', 'inset:0', 'background:rgba(0,0,0,0.6)',
        'z-index:9999', 'display:flex', 'align-items:center', 'justify-content:center',
        'padding:20px'
    ].join(';');

    const modal = document.createElement('div');
    modal.style.cssText = [
        'background:var(--darker,#1a1a2e)', 'border:2px solid var(--primary,#8b5cf6)',
        'border-radius:20px', 'padding:30px', 'max-width:600px', 'width:100%',
        'box-shadow:0 20px 60px rgba(0,0,0,0.5)'
    ].join(';');

    modal.innerHTML = `
        <h3 id="share-modal-title" style="margin:0 0 16px;color:var(--accent,#f59e0b);font-size:1.3rem;">
            ✨ Share This Reading
        </h3>
        <p style="color:var(--text-secondary,#aaa);font-size:0.9rem;margin-bottom:16px;">
            Anyone with this link can view your reading.
        </p>
        <div style="display:flex;gap:8px;align-items:stretch;">
            <input id="share-url-input" type="text" value="${url}" readonly
                style="flex:1;padding:10px 14px;border-radius:10px;border:1px solid var(--card-border,#444);
                       background:var(--input-bg,#2a2a3e);color:var(--text,#e0e0e0);font-size:0.85rem;">
            <button id="share-copy-btn" style="padding:10px 18px;border-radius:10px;
                border:none;background:var(--primary,#8b5cf6);color:#fff;cursor:pointer;
                font-size:0.9rem;white-space:nowrap;">
                📋 Copy
            </button>
        </div>
        <div id="share-copy-confirm" style="color:var(--accent,#f59e0b);font-size:0.85rem;margin-top:8px;min-height:1.2em;"></div>
        <button id="share-close-btn" style="margin-top:20px;padding:10px 24px;border-radius:20px;
            border:1px solid var(--card-border,#444);background:transparent;
            color:var(--text,#e0e0e0);cursor:pointer;font-size:0.9rem;">
            Close
        </button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Focus the URL input
    setTimeout(() => {
        const input = document.getElementById('share-url-input');
        if (input) { input.focus(); input.select(); }
    }, 50);

    // Copy button
    document.getElementById('share-copy-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(url).then(() => {
            document.getElementById('share-copy-confirm').textContent = 'Link copied to clipboard! ✨';
        }).catch(() => {
            // Fallback: select all in input
            const input = document.getElementById('share-url-input');
            input.select();
            document.execCommand('copy');
            document.getElementById('share-copy-confirm').textContent = 'Link copied! ✨';
        });
    });

    // Close
    const closeModal = () => overlay.remove();
    document.getElementById('share-close-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', escHandler); }
    });
}
