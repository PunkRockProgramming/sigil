/* ========================================
   CANVAS UTILITIES
   Shared canvas initialization and export functions
   ======================================== */

/**
 * Initialize a canvas with default settings
 * 
 * @param {string} canvasId - ID of the canvas element
 * @param {Object} options - Optional configuration
 * @param {number} options.width - Canvas width (default: 600)
 * @param {number} options.height - Canvas height (default: 600)
 * @param {string} options.bgColor - Background color (default: '#ffffff')
 * @param {boolean} options.guideLine - Draw center guide line (default: false)
 * @returns {Object} { canvas, ctx } - Canvas element and 2D context
 */
function initCanvas(canvasId, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas element with ID "${canvasId}" not found`);
        return null;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Set dimensions
    canvas.width = options.width || 600;
    canvas.height = options.height || 600;
    
    // Clear and set background
    const bgColor = options.bgColor || '#ffffff';
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Optional: Draw center guide line
    if (options.guideLine) {
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    return { canvas, ctx };
}

/**
 * Clear canvas and reset to background color
 * 
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {CanvasRenderingContext2D} ctx - Canvas 2D context
 * @param {string} bgColor - Background color (default: '#ffffff')
 */
function clearCanvas(canvas, ctx, bgColor = '#ffffff') {
    if (!canvas || !ctx) {
        console.error('Invalid canvas or context');
        return;
    }
    
    // Reset all canvas state
    ctx.globalAlpha = 1.0;
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.setLineDash([]);
    ctx.filter = 'none';
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#000000';
    
    // Clear with background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Export canvas as PNG and trigger download
 * 
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {string} filename - Download filename (default: 'canvas-export.png')
 */
function exportCanvasPNG(canvas, filename = 'canvas-export.png') {
    if (!canvas) {
        console.error('Invalid canvas element');
        return;
    }
    
    // Ensure filename ends with .png
    if (!filename.endsWith('.png')) {
        filename += '.png';
    }
    
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

/**
 * Add mouse and touch drawing events to a canvas
 * 
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {CanvasRenderingContext2D} ctx - Canvas 2D context
 * @param {Object} options - Drawing options
 * @param {HTMLElement} options.colorPicker - Color input element
 * @param {HTMLElement} options.brushSize - Brush size input element
 * @returns {Object} Event listener cleanup function
 */
function addDrawingEvents(canvas, ctx, options = {}) {
    if (!canvas || !ctx) {
        console.error('Invalid canvas or context');
        return;
    }
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    // Get canvas coordinates from mouse/touch event
    function getCanvasCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        let clientX, clientY;
        
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }
    
    // Start drawing
    function startDrawing(e) {
        isDrawing = true;
        const coords = getCanvasCoordinates(e);
        lastX = coords.x;
        lastY = coords.y;
        e.preventDefault();
    }
    
    // Draw line
    function draw(e) {
        if (!isDrawing) return;
        
        const coords = getCanvasCoordinates(e);
        
        // Apply options
        if (options.colorPicker) {
            ctx.strokeStyle = options.colorPicker.value;
        }
        if (options.brushSize) {
            ctx.lineWidth = options.brushSize.value;
        }
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        
        lastX = coords.x;
        lastY = coords.y;
        e.preventDefault();
    }
    
    // Stop drawing
    function stopDrawing() {
        isDrawing = false;
    }
    
    // Add event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    
    // Return cleanup function
    return () => {
        canvas.removeEventListener('mousedown', startDrawing);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopDrawing);
        canvas.removeEventListener('mouseout', stopDrawing);
        canvas.removeEventListener('touchstart', startDrawing);
        canvas.removeEventListener('touchmove', draw);
        canvas.removeEventListener('touchend', stopDrawing);
    };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initCanvas,
        clearCanvas,
        exportCanvasPNG,
        addDrawingEvents
    };
}
