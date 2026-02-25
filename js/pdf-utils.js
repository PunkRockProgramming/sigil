/**
 * PDF Export Utilities for Mystical Path Tools
 * Leverages browser's native print-to-PDF functionality
 * Works with existing css/print.css for formatting
 */

/**
 * Trigger print dialog for PDF download
 * @param {string} filename - Suggested filename (without .pdf extension)
 */
function downloadAsPDF(filename = 'mystical-path-export') {
    // Update document title temporarily for PDF filename suggestion
    const originalTitle = document.title;
    document.title = filename;
    
    // Trigger print dialog
    window.print();
    
    // Restore original title after print dialog closes
    setTimeout(() => {
        document.title = originalTitle;
    }, 100);
}

/**
 * Generate filename with tool name and current date
 * @param {string} toolName - Name of the tool
 * @param {string} contentType - Type of content (e.g., 'reading', 'collection', 'ritual')
 * @returns {string} Formatted filename
 */
function generatePDFFilename(toolName, contentType = '') {
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
    
    const parts = [
        toolName.toLowerCase().replace(/\s+/g, '-'),
        contentType ? contentType.toLowerCase().replace(/\s+/g, '-') : '',
        dateStr
    ].filter(Boolean);
    
    return parts.join('-');
}

/**
 * Download current page as PDF with auto-generated filename
 * @param {string} toolName - Name of the tool
 * @param {string} contentType - Type of content being exported
 */
function downloadToolAsPDF(toolName, contentType = 'export') {
    const filename = generatePDFFilename(toolName, contentType);
    downloadAsPDF(filename);
}

/**
 * Create and return a PDF download button element
 * @param {string} toolName - Name of the tool
 * @param {string} contentType - Type of content
 * @param {string} buttonText - Button label
 * @returns {Element} Button element
 */
function createPDFButton(toolName, contentType = 'export', buttonText = '📄 Download as PDF') {
    const button = document.createElement('button');
    button.className = 'pdf-download-btn';
    button.textContent = buttonText;
    button.setAttribute('aria-label', `Download ${toolName} ${contentType} as PDF`);
    
    button.addEventListener('click', () => {
        downloadToolAsPDF(toolName, contentType);
    });
    
    return button;
}

// Instructions for use:
// 1. Include this script in your HTML: <script src="../js/pdf-utils.js"></script>
// 2. Add a button: <button onclick="downloadToolAsPDF('Moon Tracker', 'rituals')">📄 Download PDF</button>
// 3. Or create programmatically: document.body.appendChild(createPDFButton('Rune Caster', 'reading'));
