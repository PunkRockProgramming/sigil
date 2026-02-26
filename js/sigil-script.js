// DOM Elements
const intentionInput = document.getElementById('intention-input');
const generateBtn = document.getElementById('generate-btn');
const outputSection = document.getElementById('output-section');
const originalText = document.getElementById('original-text');
const noVowels = document.getElementById('no-vowels');
const noDuplicates = document.getElementById('no-duplicates');
const finalLetters = document.getElementById('final-letters');

// Canvas Elements
const canvasData = initCanvas('sigil-canvas');
const canvas = canvasData.canvas;
const ctx = canvasData.ctx;
const clearBtn = document.getElementById('clear-canvas');
const downloadBtn = document.getElementById('download-sigil');
const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');
const brushSizeLabel = document.getElementById('brush-size-label');
const autoGenerateBtn = document.getElementById('auto-generate');
const generationStyle = document.getElementById('generation-style');
const simplifyRuneBtn = document.getElementById('simplify-rune');

// Store current letters for auto-generation
let currentLetters = '';;

// Sigil Generation Functions
function removeVowels(text) {
    const vowels = 'AEIOUaeiou';
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = i < text.length - 1 ? text[i + 1] : '';
        
        // Keep spaces
        if (char === ' ') {
            result += char;
            continue;
        }
        
        // Handle 'y' and 'w' - treated as consonants when before a vowel
        if (char.toLowerCase() === 'y' || char.toLowerCase() === 'w') {
            if (vowels.includes(nextChar)) {
                result += char;
            }
        } else if (!vowels.includes(char)) {
            // Keep all other consonants
            result += char;
        }
    }
    
    return result.replace(/\s+/g, ' ').trim();
}

function removeDuplicates(text) {
    let result = '';
    const seen = new Set();
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        
        // Skip spaces
        if (char === ' ') {
            continue;
        }
        
        // Only add if not seen before
        if (!seen.has(char)) {
            result += char;
            seen.add(char);
        }
    }
    
    return result;
}

function generateSigil() {
    const intention = intentionInput.value.trim();
    
    if (!intention) {
        alert('Please enter your intention first.');
        return;
    }
    
    // Step 1: Original text
    originalText.textContent = intention;
    
    // Step 2: Remove vowels
    const withoutVowels = removeVowels(intention);
    noVowels.textContent = withoutVowels.toUpperCase();
    
    // Step 3: Remove duplicates
    const withoutDuplicates = removeDuplicates(withoutVowels);
    noDuplicates.textContent = withoutDuplicates;
    
    // Step 4: Display final letters
    displayLetters(withoutDuplicates);
    
    // Show output section
    outputSection.style.display = 'block';
    
    // Smooth scroll to results
    setTimeout(() => {
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function displayLetters(letters) {
    finalLetters.innerHTML = '';
    currentLetters = letters; // Store for auto-generation
    
    // Split into individual letters and create elements
    const letterArray = letters.split('');
    
    letterArray.forEach((letter, index) => {
        const letterDiv = document.createElement('div');
        letterDiv.className = 'letter-item';
        letterDiv.textContent = letter;
        letterDiv.style.animationDelay = `${index * 0.1}s`;
        finalLetters.appendChild(letterDiv);
    });
}

// Auto-generate sigil functions
function autoGenerateSigil() {
    if (!currentLetters) {
        alert('Please generate your sigil letters first!');
        return;
    }
    
    clearCanvas(canvas, ctx);
    const style = generationStyle.value;
    
    switch(style) {
        case 'radial':
            generateRadialSigil();
            break;
        case 'circular':
            generateCircularSigil();
            break;
        case 'overlay':
            generateOverlaySigil();
            break;
        case 'geometric':
            generateGeometricSigil();
            break;
        case 'spiral':
            generateSpiralSigil();
            break;
        case 'goetic':
            generateGoeticSigil();
            break;
        case 'kamea':
            generateKameaSigil();
            break;
        case 'galdrastafir':
            generateGaldrastafirSigil();
            break;
        case 'sigillum':
            generateSigilumDeiSigil();
            break;
        case 'veve':
            generateVeveSigil();
            break;
        case 'geomancy':
            generateGeomancySigil();
            break;
        case 'iching':
            generateIChingSigil();
            break;
        case 'rosecross':
            generateRoseCrossSigil();
            break;
        case 'alchemical':
            generateAlchemicalSigil();
            break;
    }
}

// Utility function for random variations
function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Get color with slight random variation
function getColorVariation() {
    const baseColor = colorPicker.value;
    
    // Convert hex to RGB
    const r = parseInt(baseColor.substr(1, 2), 16);
    const g = parseInt(baseColor.substr(3, 2), 16);
    const b = parseInt(baseColor.substr(5, 2), 16);
    
    // Add random variation (-20 to +20)
    const newR = Math.max(0, Math.min(255, r + randomInt(-20, 20)));
    const newG = Math.max(0, Math.min(255, g + randomInt(-20, 20)));
    const newB = Math.max(0, Math.min(255, b + randomInt(-20, 20)));
    
    return `rgb(${newR}, ${newG}, ${newB})`;
}

// Apply random stroke style
function applyRandomStroke() {
    const styles = [
        [], // Solid
        [random(5, 10), random(3, 6)], // Dashed
        [random(2, 4), random(2, 4)], // Dotted
        [random(8, 12), random(3, 5), random(2, 4), random(3, 5)], // Dash-dot
    ];
    
    const style = randomChoice(styles);
    ctx.setLineDash(style);
}

// Apply random glow effect
function applyRandomGlow(color = colorPicker.value) {
    if (Math.random() > 0.6) {
        ctx.shadowBlur = random(5, 15);
        ctx.shadowColor = color;
    } else {
        ctx.shadowBlur = 0;
    }
}

// Draw random decorative flourish
function drawRandomFlourish(x, y, size) {
    const flourishType = randomInt(0, 5);
    
    ctx.save();
    ctx.globalAlpha = random(0.3, 0.7);
    ctx.lineWidth = random(1, 2);
    
    switch(flourishType) {
        case 0: // Spiral
            ctx.beginPath();
            for (let i = 0; i < 20; i++) {
                const angle = (i / 20) * Math.PI * 2;
                const radius = (i / 20) * size;
                const sx = x + Math.cos(angle) * radius;
                const sy = y + Math.sin(angle) * radius;
                if (i === 0) ctx.moveTo(sx, sy);
                else ctx.lineTo(sx, sy);
            }
            ctx.stroke();
            break;
            
        case 1: // Star burst
            const numRays = randomInt(5, 8);
            for (let i = 0; i < numRays; i++) {
                const angle = (Math.PI * 2 * i) / numRays;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
                ctx.stroke();
            }
            break;
            
        case 2: // Concentric circles
            const numCircles = randomInt(2, 4);
            for (let i = 1; i <= numCircles; i++) {
                ctx.beginPath();
                ctx.arc(x, y, (size / numCircles) * i, 0, Math.PI * 2);
                ctx.stroke();
            }
            break;
            
        case 3: // Random dots
            const numDots = randomInt(5, 10);
            for (let i = 0; i < numDots; i++) {
                const angle = random(0, Math.PI * 2);
                const dist = random(0, size);
                ctx.beginPath();
                ctx.arc(x + Math.cos(angle) * dist, y + Math.sin(angle) * dist, random(1, 3), 0, Math.PI * 2);
                ctx.fill();
            }
            break;
            
        case 4: // Wavy circle
            ctx.beginPath();
            for (let i = 0; i <= 50; i++) {
                const angle = (i / 50) * Math.PI * 2;
                const wave = Math.sin(i * 0.8) * random(2, 5);
                const radius = size + wave;
                const sx = x + Math.cos(angle) * radius;
                const sy = y + Math.sin(angle) * radius;
                if (i === 0) ctx.moveTo(sx, sy);
                else ctx.lineTo(sx, sy);
            }
            ctx.closePath();
            ctx.stroke();
            break;
    }
    
    ctx.restore();
}

// Reset stroke effects
function resetStrokeEffects() {
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;
}

function generateRadialSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    const angleStep = (Math.PI * 2) / letters.length;
    const angleOffset = random(0, Math.PI * 2); // Random starting angle
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = random(2, 4);
    ctx.font = `700 ${randomInt(55, 65)}px "MedievalSharp", "Cinzel", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Random background flourishes
    if (Math.random() > 0.5) {
        const numFlourishes = randomInt(2, 5);
        for (let i = 0; i < numFlourishes; i++) {
            const angle = random(0, Math.PI * 2);
            const dist = random(50, 120);
            drawRandomFlourish(
                centerX + Math.cos(angle) * dist,
                centerY + Math.sin(angle) * dist,
                random(15, 30)
            );
        }
    }
    
    // Draw lines from center with random variations
    letters.forEach((letter, index) => {
        const angle = angleStep * index + angleOffset;
        const radiusVariation = random(180, 220); // Random radius per line
        const x = centerX + Math.cos(angle) * radiusVariation;
        const y = centerY + Math.sin(angle) * radiusVariation;
        
        // Random line style
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(2, 5);
        ctx.globalAlpha = random(0.6, 1.0);
        applyRandomStroke();
        applyRandomGlow();
        
        // Draw line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Randomly add decorative elements
        if (Math.random() > 0.5) {
            const midX = centerX + Math.cos(angle) * radiusVariation * 0.5;
            const midY = centerY + Math.sin(angle) * radiusVariation * 0.5;
            ctx.beginPath();
            ctx.arc(midX, midY, random(3, 8), 0, Math.PI * 2);
            ctx.fill();
        }
        
        resetStrokeEffects();
        ctx.globalAlpha = 1.0;
        
        // Draw letter with slight position variation
        ctx.save();
        ctx.translate(x + random(-5, 5), y + random(-5, 5));
        ctx.rotate(angle + Math.PI / 2 + random(-0.2, 0.2));
        ctx.fillStyle = getColorVariation();
        applyRandomGlow(ctx.fillStyle);
        ctx.fillText(letter, 0, 0);
        ctx.shadowBlur = 0;
        ctx.restore();
    });
    
    // Draw center with random size
    const centerSize = random(15, 30);
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerSize, 0, Math.PI * 2);
    ctx.fillStyle = colorPicker.value;
    ctx.fill();
    
    // Add random connecting arcs
    const numArcs = randomInt(2, 5);
    for (let i = 0; i < numArcs; i++) {
        const arcRadius = random(60, 150);
        const startAngle = random(0, Math.PI * 2);
        const endAngle = startAngle + random(Math.PI / 4, Math.PI);
        
        ctx.strokeStyle = getColorVariation();
        ctx.beginPath();
        ctx.arc(centerX, centerY, arcRadius, startAngle, endAngle);
        ctx.lineWidth = random(1, 3);
        ctx.globalAlpha = random(0.3, 0.7);
        applyRandomStroke();
        ctx.stroke();
        resetStrokeEffects();
        ctx.globalAlpha = 1.0;
    }
    
    // Add random corner flourishes
    if (Math.random() > 0.6) {
        const cornerPositions = [
            [centerX - 200, centerY - 200],
            [centerX + 200, centerY - 200],
            [centerX - 200, centerY + 200],
            [centerX + 200, centerY + 200]
        ];
        
        cornerPositions.forEach(([x, y]) => {
            if (Math.random() > 0.5) {
                drawRandomFlourish(x, y, random(20, 35));
            }
        });
    }
}

function generateCircularSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    const angleStep = (Math.PI * 2) / letters.length;
    const angleOffset = random(0, Math.PI * 2);
    const radius = random(160, 200);
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = random(3, 5);
    ctx.font = `700 ${randomInt(45, 55)}px "MedievalSharp", "Cinzel", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw multiple concentric circles with variation
    const numCircles = randomInt(2, 4);
    for (let i = 0; i < numCircles; i++) {
        const circleRadius = radius + (i * random(20, 40));
        ctx.strokeStyle = getColorVariation();
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
        ctx.lineWidth = random(2, 4);
        ctx.globalAlpha = random(0.5, 1.0);
        applyRandomStroke();
        applyRandomGlow();
        ctx.stroke();
        resetStrokeEffects();
        ctx.globalAlpha = 1.0;
    }
    
    // Place letters and connect them
    const positions = [];
    letters.forEach((letter, index) => {
        const angle = angleStep * index - Math.PI / 2 + angleOffset;
        const radiusVar = radius + random(-10, 10);
        const x = centerX + Math.cos(angle) * radiusVar;
        const y = centerY + Math.sin(angle) * radiusVar;
        positions.push({x, y});
        
        // Draw letter
        ctx.fillStyle = colorPicker.value;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(random(-0.3, 0.3)); // Random rotation
        ctx.fillText(letter, 0, 0);
        ctx.restore();
    });
    
    // Connect letters with random patterns
    if (Math.random() > 0.3) {
        // Star pattern
        ctx.lineWidth = random(1, 3);
        ctx.globalAlpha = random(0.4, 0.8);
        const skip = randomInt(1, Math.floor(letters.length / 2));
        
        ctx.beginPath();
        positions.forEach((pos, i) => {
            const nextPos = positions[(i + skip) % positions.length];
            if (i === 0) {
                ctx.moveTo(pos.x, pos.y);
            }
            ctx.lineTo(nextPos.x, nextPos.y);
        });
        ctx.stroke();
        ctx.globalAlpha = 1.0;
    } else {
        // Sequential connection
        ctx.beginPath();
        positions.forEach((pos, i) => {
            if (i === 0) {
                ctx.moveTo(pos.x, pos.y);
            } else {
                ctx.lineTo(pos.x, pos.y);
            }
        });
        ctx.closePath();
        ctx.lineWidth = random(2, 4);
        ctx.stroke();
    }
    
    // Add random decorative dots
    const numDots = randomInt(3, 8);
    for (let i = 0; i < numDots; i++) {
        const dotAngle = random(0, Math.PI * 2);
        const dotRadius = random(50, radius - 20);
        const dotX = centerX + Math.cos(dotAngle) * dotRadius;
        const dotY = centerY + Math.sin(dotAngle) * dotRadius;
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, random(2, 6), 0, Math.PI * 2);
        ctx.fillStyle = getColorVariation();
        applyRandomGlow(ctx.fillStyle);
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    
    // Add random mystical symbols
    const numSymbols = randomInt(2, 5);
    for (let i = 0; i < numSymbols; i++) {
        const symAngle = random(0, Math.PI * 2);
        const symRadius = random(30, radius - 30);
        drawRandomFlourish(
            centerX + Math.cos(symAngle) * symRadius,
            centerY + Math.sin(symAngle) * symRadius,
            random(10, 25)
        );
    }
}

function generateOverlaySigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    const rotationOffset = random(0, Math.PI * 2);
    
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add background mystical pattern
    if (Math.random() > 0.5) {
        const numBackgroundElements = randomInt(5, 10);
        for (let i = 0; i < numBackgroundElements; i++) {
            drawRandomFlourish(
                centerX + random(-150, 150),
                centerY + random(-150, 150),
                random(20, 40)
            );
        }
    }
    
    letters.forEach((letter, index) => {
        const angle = (Math.PI * 2 * index) / letters.length + rotationOffset;
        const fontSize = randomInt(70, 100) + (index * random(10, 20));
        const offsetX = random(-30, 30);
        const offsetY = random(-30, 30);
        const rotation = angle + random(-0.4, 0.4);
        
        ctx.save();
        ctx.translate(centerX + offsetX, centerY + offsetY);
        ctx.rotate(rotation);
        
        ctx.font = `700 ${fontSize}px "MedievalSharp", "Cinzel", serif`;
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1, 3);
        ctx.fillStyle = getColorVariation();
        
        const alpha = random(0.5, 0.8);
        ctx.globalAlpha = alpha;
        
        // Randomly add glow to some letters
        if (Math.random() > 0.5) {
            applyRandomGlow(ctx.strokeStyle);
        }
        
        // Draw outlined letter
        ctx.strokeText(letter, 0, 0);
        ctx.globalAlpha = alpha * 0.3;
        ctx.fillText(letter, 0, 0);
        ctx.shadowBlur = 0;
        
        ctx.restore();
    });
    
    // Add random mystic symbols between letters
    const numSymbols = randomInt(3, 7);
    for (let i = 0; i < numSymbols; i++) {
        const symAngle = random(0, Math.PI * 2);
        const symDist = random(80, 150);
        const symX = centerX + Math.cos(symAngle) * symDist;
        const symY = centerY + Math.sin(symAngle) * symDist;
        const symSize = random(10, 25);
        
        ctx.strokeStyle = getColorVariation();
        ctx.fillStyle = getColorVariation();
        ctx.globalAlpha = random(0.3, 0.6);
        ctx.lineWidth = random(1, 2);
        
        // Random symbol type
        const symType = randomInt(0, 4);
        switch(symType) {
            case 0: // Circle
                ctx.beginPath();
                ctx.arc(symX, symY, symSize, 0, Math.PI * 2);
                applyRandomStroke();
                ctx.stroke();
                resetStrokeEffects();
                break;
            case 1: // Diamond
                ctx.beginPath();
                ctx.moveTo(symX, symY - symSize);
                ctx.lineTo(symX + symSize, symY);
                ctx.lineTo(symX, symY + symSize);
                ctx.lineTo(symX - symSize, symY);
                ctx.closePath();
                ctx.stroke();
                break;
            case 2: // Cross
                ctx.beginPath();
                ctx.moveTo(symX - symSize, symY);
                ctx.lineTo(symX + symSize, symY);
                ctx.moveTo(symX, symY - symSize);
                ctx.lineTo(symX, symY + symSize);
                ctx.stroke();
                break;
            case 3: // Flourish
                drawRandomFlourish(symX, symY, symSize);
                break;
        }
    }
    
    ctx.globalAlpha = 1.0;
}

function generateGeometricSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    const sides = letters.length;
    const radius = random(170, 190);
    const startAngle = random(0, Math.PI * 2);
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = random(2.5, 4);
    
    // Add random background elements
    if (Math.random() > 0.4) {
        const numBgElements = randomInt(3, 7);
        for (let i = 0; i < numBgElements; i++) {
            const angle = random(0, Math.PI * 2);
            const dist = random(radius + 30, radius + 80);
            drawRandomFlourish(
                centerX + Math.cos(angle) * dist,
                centerY + Math.sin(angle) * dist,
                random(15, 25)
            );
        }
    }
    
    // Draw main polygon with slight irregularity
    ctx.strokeStyle = getColorVariation();
    applyRandomStroke();
    applyRandomGlow();
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
        const angle = (Math.PI * 2 * i) / sides - Math.PI / 2 + startAngle;
        const radiusVar = radius + random(-5, 5);
        const x = centerX + Math.cos(angle) * radiusVar;
        const y = centerY + Math.sin(angle) * radiusVar;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    resetStrokeEffects();
    ctx.shadowBlur = 0;
    
    // Draw random inner geometric patterns
    const patternType = randomInt(0, 3);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2, 3);
    ctx.globalAlpha = random(0.6, 0.9);
    applyRandomStroke();
    
    switch(patternType) {
        case 0: // Star pattern
            ctx.beginPath();
            for (let i = 0; i < sides; i++) {
                const angle = (Math.PI * 2 * i) / sides - Math.PI / 2 + startAngle;
                const radiusVar = radius + random(-5, 5);
                const x = centerX + Math.cos(angle) * radiusVar;
                const y = centerY + Math.sin(angle) * radiusVar;
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                }
                
                const skipPoints = randomInt(2, Math.floor(sides / 2));
                const oppositeIndex = (i + skipPoints) % sides;
                const oppositeAngle = (Math.PI * 2 * oppositeIndex) / sides - Math.PI / 2 + startAngle;
                const oppositeRadius = radius + random(-5, 5);
                const oppositeX = centerX + Math.cos(oppositeAngle) * oppositeRadius;
                const oppositeY = centerY + Math.sin(oppositeAngle) * oppositeRadius;
                
                ctx.lineTo(oppositeX, oppositeY);
            }
            ctx.stroke();
            resetStrokeEffects();
            break;
            
        case 1: // Radial spokes
            for (let i = 0; i < sides; i++) {
                const angle = (Math.PI * 2 * i) / sides - Math.PI / 2 + startAngle;
                const radiusVar = radius + random(-5, 5);
                const x = centerX + Math.cos(angle) * radiusVar;
                const y = centerY + Math.sin(angle) * radiusVar;
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
            resetStrokeEffects();
            break;
            
        case 2: // Inner polygon
            const innerRadius = radius * random(0.5, 0.7);
            ctx.beginPath();
            for (let i = 0; i <= sides; i++) {
                const angle = (Math.PI * 2 * i) / sides - Math.PI / 2 + startAngle + random(-0.1, 0.1);
                const x = centerX + Math.cos(angle) * innerRadius;
                const y = centerY + Math.sin(angle) * innerRadius;
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
            resetStrokeEffects();
            break;
    }
    
    ctx.globalAlpha = 1.0;
    
    // Add decorative circles at vertices with variation
    const numCircles = randomInt(sides, sides + 3);
    for (let i = 0; i < numCircles; i++) {
        const angle = (Math.PI * 2 * i) / sides - Math.PI / 2 + startAngle;
        const radiusVar = radius + random(-8, 8);
        const x = centerX + Math.cos(angle) * radiusVar;
        const y = centerY + Math.sin(angle) * radiusVar;
        const circleSize = random(5, 12);
        
        ctx.beginPath();
        ctx.arc(x, y, circleSize, 0, Math.PI * 2);
        ctx.lineWidth = random(1.5, 2.5);
        ctx.globalAlpha = random(0.6, 1.0);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
    }
    
    // Add letters at vertices with variation
    ctx.font = `700 ${randomInt(42, 48)}px "MedievalSharp", "Cinzel", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = colorPicker.value;
    
    letters.forEach((letter, index) => {
        const angle = (Math.PI * 2 * index) / sides - Math.PI / 2 + startAngle;
        const letterRadius = radius + random(35, 45);
        const x = centerX + Math.cos(angle) * letterRadius;
        const y = centerY + Math.sin(angle) * letterRadius;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(random(-0.2, 0.2));
        ctx.fillText(letter, 0, 0);
        ctx.restore();
    });
}

function generateSpiralSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    const totalRotations = random(2.5, 3.5);
    const maxRadius = random(210, 230);
    const startAngle = random(0, Math.PI * 2);
    
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2.5, 4);
    ctx.font = `700 ${randomInt(48, 54)}px "MedievalSharp", "Cinzel", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = colorPicker.value;
    
    // Add random background flourishes
    if (Math.random() > 0.5) {
        const numFlourishes = randomInt(2, 4);
        for (let i = 0; i < numFlourishes; i++) {
            drawRandomFlourish(
                centerX + random(-180, 180),
                centerY + random(-180, 180),
                random(20, 35)
            );
        }
    }
    
    // Draw main spiral with organic variation
    applyRandomStroke();
    applyRandomGlow();
    ctx.beginPath();
    const spiralPoints = 200;
    for (let i = 0; i <= spiralPoints; i++) {
        const progress = i / spiralPoints;
        const angle = progress * Math.PI * 2 * totalRotations + startAngle;
        const radius = progress * maxRadius;
        
        // Add subtle organic variation
        const noise = Math.sin(i * 0.3) * random(2, 5);
        const x = centerX + Math.cos(angle) * (radius + noise);
        const y = centerY + Math.sin(angle) * (radius + noise);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    resetStrokeEffects();
    ctx.shadowBlur = 0;
    
    // Add secondary spirals for richness
    const numSecondarySpirals = randomInt(1, 3);
    for (let s = 0; s < numSecondarySpirals; s++) {
        const secondaryRotations = random(1.5, 2.5);
        const secondaryMaxRadius = maxRadius * random(0.4, 0.7);
        const secondaryStart = random(0, Math.PI * 2);
        
        ctx.strokeStyle = getColorVariation();
        ctx.globalAlpha = random(0.3, 0.6);
        ctx.lineWidth = random(1.5, 2.5);
        applyRandomStroke();
        ctx.beginPath();
        
        for (let i = 0; i <= spiralPoints / 2; i++) {
            const progress = i / (spiralPoints / 2);
            const angle = progress * Math.PI * 2 * secondaryRotations + secondaryStart;
            const radius = progress * secondaryMaxRadius;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        resetStrokeEffects();
    }
    
    ctx.globalAlpha = 1.0;
    ctx.lineWidth = random(2.5, 3.5);
    
    // Place letters along spiral with variation
    letters.forEach((letter, index) => {
        const progress = (index + 0.5) / letters.length;
        const angle = progress * Math.PI * 2 * totalRotations + startAngle;
        const radius = progress * maxRadius;
        
        // Add positional variation
        const offsetRadius = radius + random(-8, 8);
        const offsetAngle = angle + random(-0.15, 0.15);
        
        const x = centerX + Math.cos(offsetAngle) * offsetRadius;
        const y = centerY + Math.sin(offsetAngle) * offsetRadius;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(offsetAngle + Math.PI / 2 + random(-0.2, 0.2));
        ctx.fillStyle = getColorVariation();
        applyRandomGlow(ctx.fillStyle);
        ctx.fillText(letter, 0, 0);
        ctx.shadowBlur = 0;
        ctx.restore();
        
        // Add decorative elements at letter positions
        if (Math.random() > 0.5) {
            const decorRadius = random(5, 12);
            ctx.globalAlpha = random(0.4, 0.7);
            ctx.beginPath();
            ctx.arc(x, y, decorRadius, 0, Math.PI * 2);
            ctx.lineWidth = random(1, 2);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
        }
    });
    
    // Add random dots along the spiral
    const numDots = randomInt(letters.length, letters.length * 2);
    for (let i = 0; i < numDots; i++) {
        const progress = random(0, 1);
        const angle = progress * Math.PI * 2 * totalRotations + startAngle;
        const radius = progress * maxRadius;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.arc(x, y, random(2, 5), 0, Math.PI * 2);
        ctx.fillStyle = colorPicker.value;
        ctx.globalAlpha = random(0.4, 0.8);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }
}

function generateGoeticSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    const numLetters = letters.length;
    const startAngle = random(0, Math.PI * 2);
    
    ctx.strokeStyle = colorPicker.value;
    ctx.fillStyle = colorPicker.value;
    ctx.lineWidth = random(2, 3.5);
    ctx.font = `700 ${randomInt(32, 38)}px "MedievalSharp", "Cinzel", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add random decorative background patterns
    if (Math.random() > 0.5) {
        const numBg = randomInt(8, 15);
        for (let i = 0; i < numBg; i++) {
            const angle = random(0, Math.PI * 2);
            const dist = random(180, 250);
            ctx.globalAlpha = random(0.1, 0.3);
            drawRandomFlourish(
                centerX + Math.cos(angle) * dist,
                centerY + Math.sin(angle) * dist,
                random(8, 20)
            );
        }
        ctx.globalAlpha = 1.0;
    }
    
    // Draw outer circles with variation
    const outerRadius = random(235, 245);
    ctx.strokeStyle = getColorVariation();
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.lineWidth = random(2, 4);
    applyRandomStroke();
    applyRandomGlow();
    ctx.stroke();
    
    const innerBoundary = outerRadius - random(15, 25);
    ctx.strokeStyle = getColorVariation();
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerBoundary, 0, Math.PI * 2);
    ctx.lineWidth = random(1.5, 3);
    ctx.stroke();
    resetStrokeEffects();
    ctx.shadowBlur = 0;
    
    // Randomly choose central symbol variation
    const centralType = randomInt(0, 3);
    const crossSize = random(70, 90);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2.5, 4);
    applyRandomGlow();
    
    switch(centralType) {
        case 0: // Standard cross with diagonals
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - crossSize);
            ctx.lineTo(centerX, centerY + crossSize);
            ctx.moveTo(centerX - crossSize, centerY);
            ctx.lineTo(centerX + crossSize, centerY);
            ctx.stroke();
            
            const diagSize = random(55, 70);
            ctx.beginPath();
            ctx.moveTo(centerX - diagSize, centerY - diagSize);
            ctx.lineTo(centerX + diagSize, centerY + diagSize);
            ctx.moveTo(centerX + diagSize, centerY - diagSize);
            ctx.lineTo(centerX - diagSize, centerY + diagSize);
            ctx.stroke();
            break;
            
        case 1: // Star pattern
            const numPoints = randomInt(5, 8);
            for (let i = 0; i < numPoints; i++) {
                const angle = (Math.PI * 2 * i) / numPoints;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(
                    centerX + Math.cos(angle) * crossSize,
                    centerY + Math.sin(angle) * crossSize
                );
                ctx.stroke();
            }
            break;
            
        case 2: // Hexagram
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                const nextAngle = (Math.PI * 2 * ((i + 2) % 6)) / 6 - Math.PI / 2;
                ctx.beginPath();
                ctx.moveTo(
                    centerX + Math.cos(angle) * crossSize * 0.7,
                    centerY + Math.sin(angle) * crossSize * 0.7
                );
                ctx.lineTo(
                    centerX + Math.cos(nextAngle) * crossSize * 0.7,
                    centerY + Math.sin(nextAngle) * crossSize * 0.7
                );
                ctx.stroke();
            }
            break;
    }
    
    // Draw center circle with variation
    const centerSize = random(20, 30);
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerSize, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = random(2, 3);
    ctx.stroke();
    
    ctx.lineWidth = 2;
    
    // Create geometric patterns with randomization
    const radius = random(150, 170);
    const angleStep = (Math.PI * 2) / numLetters;
    
    // Randomize which terminus types to use
    const availableTermini = [0, 1, 2, 3];
    
    letters.forEach((letter, index) => {
        const angle = angleStep * index - Math.PI / 2 + startAngle;
        const radiusVar = radius + random(-10, 10);
        const x = centerX + Math.cos(angle) * radiusVar;
        const y = centerY + Math.sin(angle) * radiusVar;
        
        // Draw connecting line from center with variation
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1.5, 3);
        ctx.globalAlpha = random(0.7, 1.0);
        applyRandomStroke();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
        resetStrokeEffects();
        ctx.globalAlpha = 1.0;
        
        // Draw random terminus symbol
        const termType = randomChoice(availableTermini);
        const termSize = random(12, 18);
        
        switch(termType) {
            case 0: // Arrow
                drawArrow(x, y, angle, termSize);
                break;
            case 1: // Circle
                ctx.beginPath();
                ctx.arc(x, y, termSize * 0.8, 0, Math.PI * 2);
                ctx.stroke();
                break;
            case 2: // Triangle
                drawTriangle(x, y, angle, termSize);
                break;
            case 3: // Cross
                drawSmallCross(x, y, termSize);
                break;
        }
        
        // Randomly connect to other points
        if (Math.random() > 0.4) {
            const connectTo = randomInt(1, 3);
            const targetIndex = (index + connectTo) % numLetters;
            const targetAngle = angleStep * targetIndex - Math.PI / 2 + startAngle;
            const targetRadius = radius + random(-10, 10);
            const targetX = centerX + Math.cos(targetAngle) * targetRadius;
            const targetY = centerY + Math.sin(targetAngle) * targetRadius;
            
            ctx.strokeStyle = getColorVariation();
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(targetX, targetY);
            ctx.lineWidth = random(1, 2);
            ctx.globalAlpha = random(0.3, 0.6);
            applyRandomStroke();
            ctx.stroke();
            resetStrokeEffects();
            ctx.globalAlpha = 1.0;
        }
    });
    
    // Add random decorative elements
    const numDecorations = randomInt(numLetters, numLetters * 2);
    const innerRadius = random(90, 110);
    
    for (let i = 0; i < numDecorations; i++) {
        const angle = random(0, Math.PI * 2);
        const dist = random(innerRadius * 0.5, innerRadius * 1.2);
        const x = centerX + Math.cos(angle) * dist;
        const y = centerY + Math.sin(angle) * dist;
        
        const decType = randomInt(0, 2);
        const decSize = random(4, 9);
        
        ctx.fillStyle = getColorVariation();
        ctx.strokeStyle = getColorVariation();
        ctx.globalAlpha = random(0.5, 1.0);
        
        switch(decType) {
            case 0: // Dot
                ctx.beginPath();
                ctx.arc(x, y, decSize, 0, Math.PI * 2);
                ctx.fillStyle = getColorVariation();
                if (Math.random() > 0.7) {
                    applyRandomGlow(ctx.fillStyle);
                }
                ctx.fill();
                ctx.shadowBlur = 0;
                break;
            case 1: // Small circle
                ctx.beginPath();
                ctx.arc(x, y, decSize, 0, Math.PI * 2);
                ctx.lineWidth = random(0.8, 1.5);
                ctx.stroke();
                break;
        }
        
        ctx.globalAlpha = 1.0;
    }
    
    // Place letters around outer circle with variation
    const letterRadius = outerRadius - random(8, 15);
    ctx.fillStyle = colorPicker.value;
    letters.forEach((letter, index) => {
        const angle = angleStep * index - Math.PI / 2 + startAngle;
        const x = centerX + Math.cos(angle) * letterRadius;
        const y = centerY + Math.sin(angle) * letterRadius;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2 + random(-0.15, 0.15));
        ctx.fillStyle = getColorVariation();
        if (Math.random() > 0.6) {
            applyRandomGlow(ctx.fillStyle);
        }
        ctx.fillText(letter, 0, 0);
        ctx.shadowBlur = 0;
        ctx.restore();
    });
}

// Helper functions for Goetic symbols
function drawArrow(x, y, angle, size = 15) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    
    const arrowLength = size * random(1.2, 1.5);
    const arrowWidth = size * random(0.8, 1.0);
    
    ctx.beginPath();
    ctx.moveTo(0, -arrowLength / 2);
    ctx.lineTo(-arrowWidth / 2, arrowLength / 2);
    ctx.lineTo(0, arrowLength / 4);
    ctx.lineTo(arrowWidth / 2, arrowLength / 2);
    ctx.closePath();
    ctx.lineWidth = random(1.5, 2.5);
    ctx.stroke();
    
    ctx.restore();
}

function drawTriangle(x, y, angle, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle + random(-0.2, 0.2));
    
    const sizeVar = size * random(0.9, 1.1);
    
    ctx.beginPath();
    ctx.moveTo(0, -sizeVar);
    ctx.lineTo(-sizeVar * 0.866, sizeVar / 2);
    ctx.lineTo(sizeVar * 0.866, sizeVar / 2);
    ctx.closePath();
    ctx.lineWidth = random(1.5, 2.5);
    ctx.stroke();
    
    ctx.restore();
}

function drawSmallCross(x, y, size) {
    const sizeVar = size * random(0.9, 1.1);
    const rotation = random(0, Math.PI / 4);
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    
    ctx.lineWidth = random(1.5, 2.5);
    ctx.beginPath();
    ctx.moveTo(-sizeVar, 0);
    ctx.lineTo(sizeVar, 0);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, -sizeVar);
    ctx.lineTo(0, sizeVar);
    ctx.stroke();
    
    ctx.restore();
}

// Kamea (Magic Square) Sigil Generation
function generateKameaSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    // Determine grid size based on number of letters (3x3, 4x4, or 5x5)
    let gridSize;
    if (letters.length <= 9) gridSize = 3;
    else if (letters.length <= 16) gridSize = 4;
    else gridSize = 5;
    
    const cellSize = randomInt(70, 90);
    const gridWidth = cellSize * gridSize;
    const startX = centerX - gridWidth / 2;
    const startY = centerY - gridWidth / 2;
    
    // Draw grid with random variations
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(1, 2);
    ctx.globalAlpha = random(0.3, 0.5);
    applyRandomStroke();
    
    // Vertical lines
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(startX + i * cellSize, startY);
        ctx.lineTo(startX + i * cellSize, startY + gridWidth);
        ctx.stroke();
    }
    
    // Horizontal lines
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(startX, startY + i * cellSize);
        ctx.lineTo(startX + gridWidth, startY + i * cellSize);
        ctx.stroke();
    }
    
    resetStrokeEffects();
    
    // Convert letters to numbers (A=1, B=2, etc.)
    const letterPositions = [];
    letters.forEach((letter, index) => {
        const charCode = letter.charCodeAt(0) - 64; // A=1, B=2, etc.
        const num = ((charCode - 1) % (gridSize * gridSize)) + 1;
        
        // Calculate grid position
        const row = Math.floor((num - 1) / gridSize);
        const col = (num - 1) % gridSize;
        
        const x = startX + col * cellSize + cellSize / 2;
        const y = startY + row * cellSize + cellSize / 2;
        
        letterPositions.push({ x, y, letter });
    });
    
    // Draw connecting lines between points
    ctx.globalAlpha = random(0.7, 1.0);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(3, 5);
    applyRandomGlow(ctx.strokeStyle);
    applyRandomStroke();
    
    ctx.beginPath();
    letterPositions.forEach((pos, index) => {
        if (index === 0) {
            ctx.moveTo(pos.x, pos.y);
        } else {
            ctx.lineTo(pos.x, pos.y);
        }
    });
    ctx.stroke();
    
    resetStrokeEffects();
    
    // Draw points at each position with decorations
    ctx.fillStyle = colorPicker.value;
    letterPositions.forEach((pos, index) => {
        ctx.globalAlpha = random(0.8, 1.0);
        
        // Draw circle at point
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, random(4, 7), 0, Math.PI * 2);
        ctx.fill();
        
        // Add start/end markers
        if (index === 0) {
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(2, 3);
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, random(12, 15), 0, Math.PI * 2);
            ctx.stroke();
        }
        if (index === letterPositions.length - 1) {
            drawSmallCross(pos.x, pos.y, random(8, 12));
        }
    });
    
    // Add mystical corners
    ctx.globalAlpha = random(0.4, 0.6);
    [0, 1, 2, 3].forEach(corner => {
        const angle = (Math.PI / 2) * corner;
        const x = centerX + Math.cos(angle) * (gridWidth / 2 + random(20, 30));
        const y = centerY + Math.sin(angle) * (gridWidth / 2 + random(20, 30));
        drawRandomFlourish(x, y, random(10, 18));
    });
}

// Galdrastafir (Icelandic Staves) Generation
function generateGaldrastafirSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = random(3, 5);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Create central cross or main axis
    const mainAxisLength = random(120, 160);
    const numArms = randomChoice([4, 6, 8]); // Number of radiating arms
    
    ctx.globalAlpha = random(0.7, 0.9);
    applyRandomGlow(ctx.strokeStyle);
    
    // Draw main radiating arms based on letter count
    const angleStep = (Math.PI * 2) / numArms;
    const armData = [];
    
    for (let i = 0; i < numArms; i++) {
        const angle = angleStep * i + random(-0.1, 0.1);
        const length = mainAxisLength * random(0.8, 1.2);
        const endX = centerX + Math.cos(angle) * length;
        const endY = centerY + Math.sin(angle) * length;
        
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(3, 5);
        applyRandomStroke();
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        armData.push({ angle, endX, endY, length });
    }
    
    resetStrokeEffects();
    
    // Add runic-style decorations on arms
    armData.forEach((arm, index) => {
        const numMarks = randomInt(1, 3);
        
        for (let i = 0; i < numMarks; i++) {
            const dist = arm.length * random(0.3, 0.9);
            const x = centerX + Math.cos(arm.angle) * dist;
            const y = centerY + Math.sin(arm.angle) * dist;
            
            ctx.globalAlpha = random(0.6, 0.9);
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(2, 3);
            
            const markType = randomInt(0, 4);
            
            switch(markType) {
                case 0: // Perpendicular line
                    const perpAngle = arm.angle + Math.PI / 2;
                    const perpLength = random(15, 25);
                    ctx.beginPath();
                    ctx.moveTo(x - Math.cos(perpAngle) * perpLength / 2, 
                              y - Math.sin(perpAngle) * perpLength / 2);
                    ctx.lineTo(x + Math.cos(perpAngle) * perpLength / 2, 
                              y + Math.sin(perpAngle) * perpLength / 2);
                    ctx.stroke();
                    break;
                    
                case 1: // Hook
                    const hookAngle = arm.angle + randomChoice([Math.PI / 4, -Math.PI / 4]);
                    const hookLength = random(12, 20);
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + Math.cos(hookAngle) * hookLength,
                              y + Math.sin(hookAngle) * hookLength);
                    ctx.stroke();
                    break;
                    
                case 2: // Triangle
                    drawTriangle(x, y, arm.angle, random(8, 12));
                    break;
                    
                case 3: // Small circle
                    ctx.beginPath();
                    ctx.arc(x, y, random(4, 7), 0, Math.PI * 2);
                    ctx.stroke();
                    break;
            }
        }
    });
    
    // Add central symbol
    ctx.globalAlpha = random(0.7, 1.0);
    const centralSymbol = randomInt(0, 3);
    
    switch(centralSymbol) {
        case 0: // Circle
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(2, 4);
            ctx.beginPath();
            ctx.arc(centerX, centerY, random(15, 25), 0, Math.PI * 2);
            ctx.stroke();
            break;
            
        case 1: // Cross
            drawSmallCross(centerX, centerY, random(12, 18));
            break;
            
        case 2: // Multiple concentric circles
            const numCircles = randomInt(2, 3);
            for (let i = 1; i <= numCircles; i++) {
                ctx.strokeStyle = getColorVariation();
                ctx.lineWidth = random(1.5, 2.5);
                ctx.beginPath();
                ctx.arc(centerX, centerY, (20 / numCircles) * i, 0, Math.PI * 2);
                ctx.stroke();
            }
            break;
    }
    
    // Add letter-based embellishments at arm ends
    letters.forEach((letter, index) => {
        if (index < armData.length) {
            const arm = armData[index];
            ctx.globalAlpha = random(0.5, 0.8);
            
            const embellishment = randomInt(0, 2);
            if (embellishment === 0) {
                drawArrow(arm.endX, arm.endY, arm.angle, random(10, 15));
            } else if (embellishment === 1) {
                drawRandomFlourish(arm.endX, arm.endY, random(12, 20));
            }
        }
    });
}

// Sigillum Dei (Seal of God) Generation
function generateSigilumDeiSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.fillStyle = colorPicker.value;
    
    // Draw nested circles (heptagrams/heptagons inspired)
    const numCircles = randomInt(5, 7);
    const baseRadius = random(180, 220);
    
    for (let i = numCircles; i >= 1; i--) {
        const radius = (baseRadius / numCircles) * i;
        
        ctx.globalAlpha = random(0.2, 0.4);
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1, 3);
        applyRandomStroke();
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    resetStrokeEffects();
    
    // Draw heptagram (7-pointed star) or pentagram variations
    const numPoints = randomChoice([5, 7]);
    const starRadius = baseRadius * random(0.6, 0.75);
    
    ctx.globalAlpha = random(0.5, 0.8);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2, 4);
    applyRandomGlow(ctx.strokeStyle);
    
    // Draw star by connecting every nth point
    const skip = numPoints === 7 ? 2 : 2; // Connect every 2nd point for heptagram
    ctx.beginPath();
    
    for (let i = 0; i <= numPoints; i++) {
        const pointIndex = (i * skip) % numPoints;
        const angle = (Math.PI * 2 * pointIndex) / numPoints - Math.PI / 2;
        const x = centerX + Math.cos(angle) * starRadius;
        const y = centerY + Math.sin(angle) * starRadius;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    resetStrokeEffects();
    
    // Add letter-based symbols in outer circle
    const letterRadius = baseRadius * random(0.85, 0.95);
    const letterAngleStep = (Math.PI * 2) / letters.length;
    
    letters.forEach((letter, index) => {
        const angle = letterAngleStep * index - Math.PI / 2 + random(-0.1, 0.1);
        const x = centerX + Math.cos(angle) * letterRadius;
        const y = centerY + Math.sin(angle) * letterRadius;
        
        ctx.globalAlpha = random(0.6, 0.9);
        
        const symbolType = randomInt(0, 4);
        
        switch(symbolType) {
            case 0: // Small mystical glyph
                ctx.strokeStyle = getColorVariation();
                ctx.lineWidth = random(1.5, 2.5);
                drawSmallCross(x, y, random(6, 10));
                break;
                
            case 1: // Triangle
                ctx.strokeStyle = getColorVariation();
                ctx.lineWidth = random(1.5, 2.5);
                drawTriangle(x, y, angle, random(8, 12));
                break;
                
            case 2: // Circle
                ctx.fillStyle = getColorVariation();
                ctx.beginPath();
                ctx.arc(x, y, random(3, 6), 0, Math.PI * 2);
                ctx.fill();
                break;
                
            case 3: // Diamond
                ctx.strokeStyle = getColorVariation();
                ctx.lineWidth = random(1.5, 2);
                const size = random(6, 10);
                ctx.beginPath();
                ctx.moveTo(x, y - size);
                ctx.lineTo(x + size, y);
                ctx.lineTo(x, y + size);
                ctx.lineTo(x - size, y);
                ctx.closePath();
                ctx.stroke();
                break;
        }
    });
    
    // Add inner decorative elements
    const innerRadius = baseRadius * random(0.2, 0.35);
    const numInnerSymbols = randomInt(3, 6);
    
    for (let i = 0; i < numInnerSymbols; i++) {
        const angle = (Math.PI * 2 * i) / numInnerSymbols;
        const x = centerX + Math.cos(angle) * innerRadius;
        const y = centerY + Math.sin(angle) * innerRadius;
        
        ctx.globalAlpha = random(0.4, 0.7);
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1, 2);
        
        // Draw small radiating lines
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
    // Central seal
    ctx.globalAlpha = random(0.8, 1.0);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2, 3);
    
    const centralSize = random(12, 20);
    ctx.beginPath();
    ctx.arc(centerX, centerY, centralSize, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add cross in center
    drawSmallCross(centerX, centerY, centralSize * 0.6);
}

// Veve (Vodou Sacred Symbol) Generation
function generateVeveSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = random(3, 5);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Draw central axis (vertical post)
    const axisHeight = random(180, 240);
    ctx.globalAlpha = random(0.7, 0.9);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(4, 6);
    applyRandomGlow(ctx.strokeStyle);
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - axisHeight / 2);
    ctx.lineTo(centerX, centerY + axisHeight / 2);
    ctx.stroke();
    
    resetStrokeEffects();
    
    // Draw symmetric horizontal elements
    const numLevels = randomInt(3, 5);
    
    for (let i = 0; i < numLevels; i++) {
        const yPos = centerY - axisHeight / 2 + (axisHeight / (numLevels + 1)) * (i + 1);
        const width = random(60, 120) * (1 - i / numLevels * 0.3); // Narrower as you go down
        
        ctx.globalAlpha = random(0.6, 0.9);
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(2, 4);
        applyRandomStroke();
        
        const elementType = randomInt(0, 5);
        
        switch(elementType) {
            case 0: // Simple horizontal line
                ctx.beginPath();
                ctx.moveTo(centerX - width / 2, yPos);
                ctx.lineTo(centerX + width / 2, yPos);
                ctx.stroke();
                break;
                
            case 1: // Curved arms (heart-like)
                ctx.beginPath();
                ctx.moveTo(centerX, yPos);
                ctx.quadraticCurveTo(
                    centerX - width / 4, yPos - random(15, 25),
                    centerX - width / 2, yPos
                );
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(centerX, yPos);
                ctx.quadraticCurveTo(
                    centerX + width / 4, yPos - random(15, 25),
                    centerX + width / 2, yPos
                );
                ctx.stroke();
                break;
                
            case 2: // Zigzag arms
                const zigHeight = random(10, 20);
                ctx.beginPath();
                ctx.moveTo(centerX, yPos);
                ctx.lineTo(centerX - width / 4, yPos - zigHeight);
                ctx.lineTo(centerX - width / 2, yPos);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(centerX, yPos);
                ctx.lineTo(centerX + width / 4, yPos - zigHeight);
                ctx.lineTo(centerX + width / 2, yPos);
                ctx.stroke();
                break;
                
            case 3: // Triple lines
                for (let j = -1; j <= 1; j++) {
                    const offset = j * random(5, 10);
                    ctx.beginPath();
                    ctx.moveTo(centerX - width / 2, yPos + offset);
                    ctx.lineTo(centerX + width / 2, yPos + offset);
                    ctx.stroke();
                }
                break;
                
            case 4: // Crossed ends
                ctx.beginPath();
                ctx.moveTo(centerX - width / 2, yPos);
                ctx.lineTo(centerX + width / 2, yPos);
                ctx.stroke();
                
                drawSmallCross(centerX - width / 2, yPos, random(6, 10));
                drawSmallCross(centerX + width / 2, yPos, random(6, 10));
                break;
        }
    }
    
    resetStrokeEffects();
    
    // Add decorative top element (star or cross)
    const topY = centerY - axisHeight / 2;
    ctx.globalAlpha = random(0.7, 0.9);
    
    const topSymbol = randomInt(0, 3);
    
    switch(topSymbol) {
        case 0: // Star
            const numRays = randomChoice([4, 5, 8]);
            const rayLength = random(20, 35);
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(2, 3);
            
            for (let i = 0; i < numRays; i++) {
                const angle = (Math.PI * 2 * i) / numRays - Math.PI / 2;
                ctx.beginPath();
                ctx.moveTo(centerX, topY);
                ctx.lineTo(
                    centerX + Math.cos(angle) * rayLength,
                    topY + Math.sin(angle) * rayLength
                );
                ctx.stroke();
            }
            break;
            
        case 1: // Cross
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(3, 4);
            drawSmallCross(centerX, topY, random(15, 25));
            break;
            
        case 2: // Circle
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(2, 3);
            ctx.beginPath();
            ctx.arc(centerX, topY, random(15, 22), 0, Math.PI * 2);
            ctx.stroke();
            break;
    }
    
    // Add bottom base element
    const bottomY = centerY + axisHeight / 2;
    ctx.globalAlpha = random(0.6, 0.8);
    
    const baseType = randomInt(0, 2);
    
    switch(baseType) {
        case 0: // Triple horizontal lines
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(2, 3);
            for (let i = 0; i < 3; i++) {
                const width = random(40, 70) - i * 10;
                ctx.beginPath();
                ctx.moveTo(centerX - width / 2, bottomY + i * 8);
                ctx.lineTo(centerX + width / 2, bottomY + i * 8);
                ctx.stroke();
            }
            break;
            
        case 1: // Pointed base
            ctx.strokeStyle = getColorVariation();
            ctx.lineWidth = random(2, 3);
            const baseWidth = random(50, 80);
            const baseHeight = random(20, 30);
            ctx.beginPath();
            ctx.moveTo(centerX - baseWidth / 2, bottomY);
            ctx.lineTo(centerX, bottomY + baseHeight);
            ctx.lineTo(centerX + baseWidth / 2, bottomY);
            ctx.stroke();
            break;
    }
    
    // Add letter-inspired flourishes
    letters.forEach((letter, index) => {
        if (index < 4) {
            const side = index % 2 === 0 ? -1 : 1;
            const yLevel = Math.floor(index / 2);
            const x = centerX + side * random(70, 110);
            const y = centerY - axisHeight / 4 + yLevel * axisHeight / 2;
            
            ctx.globalAlpha = random(0.3, 0.5);
            drawRandomFlourish(x, y, random(15, 25));
        }
    });
    
    // Add central circle/heart
    ctx.globalAlpha = random(0.7, 0.9);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2, 4);
    
    const heartType = randomInt(0, 1);
    
    if (heartType === 0) {
        // Circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, random(20, 30), 0, Math.PI * 2);
        ctx.stroke();
    } else {
        // Heart shape
        const heartSize = random(15, 25);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + heartSize / 2);
        ctx.bezierCurveTo(
            centerX - heartSize, centerY - heartSize / 2,
            centerX - heartSize, centerY - heartSize,
            centerX, centerY - heartSize / 3
        );
        ctx.bezierCurveTo(
            centerX + heartSize, centerY - heartSize,
            centerX + heartSize, centerY - heartSize / 2,
            centerX, centerY + heartSize / 2
        );
        ctx.stroke();
    }
}

// Geomancy - 16 Arabic/European geomantic figures
function generateGeomancySigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    // 16 Geomantic figures (4 rows of dots, each row 1 or 2 dots)
    // Binary representation: 1 = single dot, 2 = double dot
    const geomanticFigures = [
        [2, 1, 1, 1], // Puer
        [1, 2, 2, 2], // Amissio
        [2, 2, 2, 2], // Albus
        [1, 1, 1, 1], // Populus
        [2, 2, 2, 1], // Fortuna Major
        [1, 2, 2, 2], // Fortuna Minor
        [2, 1, 1, 2], // Acquisitio
        [1, 1, 2, 2], // Puella
        [2, 1, 2, 1], // Rubeus
        [1, 2, 1, 2], // Carcer
        [1, 1, 2, 1], // Tristitia
        [1, 2, 1, 1], // Laetitia
        [2, 2, 1, 1], // Caput Draconis
        [1, 1, 2, 2], // Cauda Draconis
        [2, 1, 2, 2], // Coniunctio
        [2, 1, 1, 1]  // Via
    ];
    
    // Select figure based on intention letters
    const figureIndex = letters.length % geomanticFigures.length;
    const figure = geomanticFigures[figureIndex];
    
    // Draw multiple figures in a pattern
    const numFigures = randomInt(3, 5);
    const arrangements = [
        // Cross pattern
        [{x: 0, y: 0}, {x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: -1}, {x: 0, y: 1}],
        // Triangle
        [{x: 0, y: -0.7}, {x: -0.6, y: 0.5}, {x: 0.6, y: 0.5}],
        // Square
        [{x: -0.6, y: -0.6}, {x: 0.6, y: -0.6}, {x: -0.6, y: 0.6}, {x: 0.6, y: 0.6}],
        // Line
        [{x: 0, y: 0}, {x: 0, y: -0.8}, {x: 0, y: 0.8}]
    ];
    
    const arrangement = randomChoice(arrangements);
    const spacing = random(60, 100);
    
    ctx.fillStyle = colorPicker.value;
    ctx.strokeStyle = colorPicker.value;
    
    arrangement.forEach((pos, idx) => {
        const figX = centerX + pos.x * spacing;
        const figY = centerY + pos.y * spacing;
        
        // Select different figures based on position
        const useFigure = idx === 0 ? figure : geomanticFigures[(figureIndex + idx) % geomanticFigures.length];
        
        // Draw the geomantic figure
        drawGeomanticFigure(figX, figY, useFigure, random(0.6, 1.0));
    });
    
    // Add decorative border or circle
    if (randomInt(0, 1) === 0) {
        ctx.globalAlpha = random(0.3, 0.5);
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1, 3);
        
        const borderRadius = random(160, 220);
        ctx.beginPath();
        ctx.arc(centerX, centerY, borderRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Add corner marks
        for (let i = 0; i < 4; i++) {
            const angle = (Math.PI / 2) * i;
            const markX = centerX + Math.cos(angle) * borderRadius;
            const markY = centerY + Math.sin(angle) * borderRadius;
            drawSmallCross(markX, markY, random(8, 12));
        }
    }
}

function drawGeomanticFigure(x, y, pattern, alpha) {
    ctx.globalAlpha = alpha;
    const rowSpacing = 25;
    const dotRadius = random(4, 7);
    const dotSpacing = 18;
    
    pattern.forEach((dots, row) => {
        const rowY = y - (pattern.length - 1) * rowSpacing / 2 + row * rowSpacing;
        
        if (dots === 1) {
            // Single dot
            ctx.beginPath();
            ctx.arc(x, rowY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Double dots
            ctx.beginPath();
            ctx.arc(x - dotSpacing / 2, rowY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(x + dotSpacing / 2, rowY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    });
}

// I Ching - Chinese hexagrams
function generateIChingSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    // Generate hexagram from letters (6 lines, each broken or solid)
    const hexagram = [];
    for (let i = 0; i < 6; i++) {
        const letter = letters[i % letters.length];
        const charCode = letter.charCodeAt(0);
        hexagram.push(charCode % 2 === 0 ? 'solid' : 'broken');
    }
    
    // Number of hexagrams to draw
    const numHexagrams = randomInt(1, 3);
    const positions = [];
    
    if (numHexagrams === 1) {
        positions.push({x: centerX, y: centerY});
    } else if (numHexagrams === 2) {
        positions.push({x: centerX - 80, y: centerY});
        positions.push({x: centerX + 80, y: centerY});
    } else {
        positions.push({x: centerX, y: centerY - 80});
        positions.push({x: centerX - 70, y: centerY + 40});
        positions.push({x: centerX + 70, y: centerY + 40});
    }
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = random(4, 7);
    ctx.lineCap = 'round';
    
    positions.forEach((pos, idx) => {
        // Vary the hexagram slightly for each position
        const useHexagram = hexagram.map((line, i) => {
            if (idx > 0 && i === idx) {
                return line === 'solid' ? 'broken' : 'solid';
            }
            return line;
        });
        
        drawHexagram(pos.x, pos.y, useHexagram, random(0.6, 1.0));
    });
    
    // Add decorative circle
    ctx.globalAlpha = random(0.2, 0.4);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(1, 2);
    ctx.beginPath();
    ctx.arc(centerX, centerY, random(140, 200), 0, Math.PI * 2);
    ctx.stroke();
    
    // Add bagua-style octagon (8 trigrams arrangement symbol)
    if (randomInt(0, 1) === 0) {
        ctx.globalAlpha = random(0.3, 0.5);
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1, 2);
        
        const octRadius = random(100, 140);
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 * i) / 8 - Math.PI / 2;
            const x = centerX + Math.cos(angle) * octRadius;
            const y = centerY + Math.sin(angle) * octRadius;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();
    }
}

function drawHexagram(x, y, hexagram, alpha) {
    ctx.globalAlpha = alpha;
    const lineLength = random(50, 70);
    const lineSpacing = 15;
    const gapSize = 12;
    
    hexagram.forEach((lineType, index) => {
        const lineY = y - (hexagram.length - 1) * lineSpacing / 2 + index * lineSpacing;
        
        if (lineType === 'solid') {
            ctx.beginPath();
            ctx.moveTo(x - lineLength / 2, lineY);
            ctx.lineTo(x + lineLength / 2, lineY);
            ctx.stroke();
        } else {
            // Broken line (two segments with gap)
            ctx.beginPath();
            ctx.moveTo(x - lineLength / 2, lineY);
            ctx.lineTo(x - gapSize / 2, lineY);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(x + gapSize / 2, lineY);
            ctx.lineTo(x + lineLength / 2, lineY);
            ctx.stroke();
        }
    });
}

// Rose Cross - Golden Dawn tradition
function generateRoseCrossSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.fillStyle = colorPicker.value;
    
    // Draw equal-armed cross
    const crossSize = random(140, 180);
    const crossWidth = random(15, 25);
    
    ctx.globalAlpha = random(0.7, 0.9);
    ctx.fillStyle = getColorVariation();
    applyRandomGlow(ctx.fillStyle);
    
    ctx.fillRect(centerX - crossSize / 2, centerY - crossWidth / 2, crossSize, crossWidth);
    ctx.fillRect(centerX - crossWidth / 2, centerY - crossSize / 2, crossWidth, crossSize);
    
    resetStrokeEffects();
    
    // Draw central rose
    const petalCount = randomInt(5, 8);
    const roseRadius = random(30, 45);
    
    ctx.globalAlpha = random(0.8, 1.0);
    ctx.strokeStyle = getColorVariation();
    ctx.fillStyle = getColorVariation();
    ctx.lineWidth = random(1, 2);
    
    // Rose petals
    for (let i = 0; i < petalCount; i++) {
        const angle = (Math.PI * 2 * i) / petalCount;
        const petalX = centerX + Math.cos(angle) * roseRadius * 0.7;
        const petalY = centerY + Math.sin(angle) * roseRadius * 0.7;
        
        ctx.globalAlpha = random(0.5, 0.8);
        ctx.beginPath();
        ctx.arc(petalX, petalY, roseRadius * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    
    // Rose center
    ctx.globalAlpha = random(0.8, 1.0);
    ctx.fillStyle = getColorVariation();
    ctx.beginPath();
    ctx.arc(centerX, centerY, roseRadius * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw outer circle with divisions
    const outerRadius = random(200, 250);
    ctx.globalAlpha = random(0.4, 0.6);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2, 3);
    applyRandomStroke();
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    resetStrokeEffects();
    
    // Draw Hebrew/alchemical letter-symbols around the circle
    letters.forEach((letter, index) => {
        const angle = (Math.PI * 2 * index) / letters.length - Math.PI / 2;
        const x = centerX + Math.cos(angle) * (outerRadius - 20);
        const y = centerY + Math.sin(angle) * (outerRadius - 20);
        
        ctx.globalAlpha = random(0.5, 0.7);
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1, 2);
        
        // Draw small symbols/marks
        const symbolType = index % 4;
        
        switch(symbolType) {
            case 0: // Small cross
                drawSmallCross(x, y, 8);
                break;
            case 1: // Small triangle
                drawTriangle(x, y, 8, angle);
                break;
            case 2: // Small circle
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.stroke();
                break;
            case 3: // Small pentagram
                drawPentagram(x, y, 7);
                break;
        }
    });
    
    // Add four cardinal points
    ctx.globalAlpha = random(0.6, 0.8);
    for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i;
        const tipX = centerX + Math.cos(angle) * (crossSize / 2 + 15);
        const tipY = centerY + Math.sin(angle) * (crossSize / 2 + 15);
        
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(2, 3);
        drawSmallCross(tipX, tipY, 10);
    }
}

function drawPentagram(x, y, radius) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        const pointX = x + Math.cos(angle) * radius;
        const pointY = y + Math.sin(angle) * radius;
        
        if (i === 0) {
            ctx.moveTo(pointX, pointY);
        } else {
            ctx.lineTo(pointX, pointY);
        }
        
        // Connect to the second next point (creates star)
        const nextAngle = (Math.PI * 2 * ((i + 2) % 5)) / 5 - Math.PI / 2;
        const nextX = x + Math.cos(nextAngle) * radius;
        const nextY = y + Math.sin(nextAngle) * radius;
        ctx.lineTo(nextX, nextY);
    }
    ctx.stroke();
}

// Alchemical - Planetary and elemental symbols
function generateAlchemicalSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    // Planetary/elemental symbols
    const alchemicalSymbols = [
        'sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn',
        'fire', 'water', 'air', 'earth', 'salt', 'sulfur', 'spirit'
    ];
    
    // Select symbols based on letters
    const selectedSymbols = letters.map((letter, index) => {
        const charCode = letter.charCodeAt(0);
        return alchemicalSymbols[charCode % alchemicalSymbols.length];
    });
    
    // Draw central symbol (philosopher's stone - squared circle)
    ctx.globalAlpha = random(0.6, 0.8);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(2, 4);
    applyRandomGlow(ctx.strokeStyle);
    
    const circleRadius = random(60, 80);
    ctx.beginPath();
    ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    const squareSize = circleRadius * 1.4;
    ctx.strokeRect(
        centerX - squareSize / 2,
        centerY - squareSize / 2,
        squareSize,
        squareSize
    );
    
    resetStrokeEffects();
    
    // Draw alchemical symbols in circle around center
    const orbitRadius = random(120, 160);
    
    selectedSymbols.forEach((symbol, index) => {
        const angle = (Math.PI * 2 * index) / selectedSymbols.length - Math.PI / 2;
        const x = centerX + Math.cos(angle) * orbitRadius;
        const y = centerY + Math.sin(angle) * orbitRadius;
        
        ctx.globalAlpha = random(0.7, 0.9);
        ctx.strokeStyle = getColorVariation();
        ctx.fillStyle = getColorVariation();
        ctx.lineWidth = random(2, 3);
        
        drawAlchemicalSymbol(x, y, symbol, random(15, 22));
    });
    
    // Add connecting lines forming pattern
    if (selectedSymbols.length >= 3) {
        ctx.globalAlpha = random(0.2, 0.4);
        ctx.strokeStyle = getColorVariation();
        ctx.lineWidth = random(1, 2);
        applyRandomStroke();
        
        const step = selectedSymbols.length >= 5 ? 2 : 1;
        
        for (let i = 0; i < selectedSymbols.length; i++) {
            const angle1 = (Math.PI * 2 * i) / selectedSymbols.length - Math.PI / 2;
            const angle2 = (Math.PI * 2 * ((i + step) % selectedSymbols.length)) / selectedSymbols.length - Math.PI / 2;
            
            const x1 = centerX + Math.cos(angle1) * orbitRadius;
            const y1 = centerY + Math.sin(angle1) * orbitRadius;
            const x2 = centerX + Math.cos(angle2) * orbitRadius;
            const y2 = centerY + Math.sin(angle2) * orbitRadius;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }
    
    resetStrokeEffects();
    
    // Add outer decorative ring
    ctx.globalAlpha = random(0.3, 0.5);
    ctx.strokeStyle = getColorVariation();
    ctx.lineWidth = random(1, 2);
    
    const outerRadius = random(200, 240);
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.stroke();
}

function drawAlchemicalSymbol(x, y, symbol, size) {
    const r = size / 2;
    
    ctx.save();
    ctx.translate(x, y);
    
    switch(symbol) {
        case 'sun': // Circle with dot
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'moon': // Crescent
            ctx.beginPath();
            ctx.arc(-r * 0.2, 0, r, Math.PI * 0.3, Math.PI * 1.7);
            ctx.stroke();
            break;
            
        case 'mercury': // ☿ (circle + cross + horns)
            ctx.beginPath();
            ctx.arc(0, r * 0.2, r * 0.5, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, r * 0.7);
            ctx.lineTo(0, r * 1.5);
            ctx.moveTo(-r * 0.4, r * 1.5);
            ctx.lineTo(r * 0.4, r * 1.5);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(-r * 0.3, -r * 0.5, r * 0.3, 0, Math.PI, true);
            ctx.arc(r * 0.3, -r * 0.5, r * 0.3, 0, Math.PI, true);
            ctx.stroke();
            break;
            
        case 'venus': // ♀ (circle + cross)
            ctx.beginPath();
            ctx.arc(0, -r * 0.3, r * 0.6, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, r * 0.3);
            ctx.lineTo(0, r * 1.2);
            ctx.moveTo(-r * 0.5, r * 0.8);
            ctx.lineTo(r * 0.5, r * 0.8);
            ctx.stroke();
            break;
            
        case 'mars': // ♂ (circle + arrow)
            ctx.beginPath();
            ctx.arc(-r * 0.2, r * 0.2, r * 0.6, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(r * 0.2, -r * 0.2);
            ctx.lineTo(r * 1.2, -r * 1.2);
            drawArrow(r * 1.2, -r * 1.2, -Math.PI / 4, r * 0.3);
            break;
            
        case 'jupiter': // ♃ (4-like shape)
            ctx.beginPath();
            ctx.moveTo(-r * 0.8, -r);
            ctx.lineTo(-r * 0.8, r * 0.3);
            ctx.lineTo(r * 0.6, r * 0.3);
            ctx.moveTo(-r * 0.2, r);
            ctx.lineTo(r * 0.4, r);
            ctx.stroke();
            break;
            
        case 'saturn': // ♄ (h-like cross)
            ctx.beginPath();
            ctx.moveTo(-r, -r * 0.5);
            ctx.lineTo(r, -r * 0.5);
            ctx.moveTo(r * 0.3, -r * 0.5);
            ctx.lineTo(r * 0.3, r * 1.2);
            ctx.stroke();
            break;
            
        case 'fire': // △ (upward triangle)
            drawTriangle(0, 0, r * 1.5, 0);
            break;
            
        case 'water': // ▽ (downward triangle)
            drawTriangle(0, 0, r * 1.5, Math.PI);
            break;
            
        case 'air': // △ with line (upward triangle + line)
            drawTriangle(0, 0, r * 1.5, 0);
            ctx.beginPath();
            ctx.moveTo(-r * 0.6, r * 0.3);
            ctx.lineTo(r * 0.6, r * 0.3);
            ctx.stroke();
            break;
            
        case 'earth': // ▽ with line (downward triangle + line)
            drawTriangle(0, 0, r * 1.5, Math.PI);
            ctx.beginPath();
            ctx.moveTo(-r * 0.6, -r * 0.3);
            ctx.lineTo(r * 0.6, -r * 0.3);
            ctx.stroke();
            break;
            
        case 'salt': // Circle with line through it
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, -r * 1.2);
            ctx.lineTo(0, r * 1.2);
            ctx.stroke();
            break;
            
        case 'sulfur': // Triangle over cross
            drawTriangle(0, -r * 0.3, r, 0);
            ctx.beginPath();
            ctx.moveTo(0, r * 0.5);
            ctx.lineTo(0, r * 1.2);
            ctx.moveTo(-r * 0.5, r * 0.8);
            ctx.lineTo(r * 0.5, r * 0.8);
            ctx.stroke();
            break;
            
        case 'spirit': // Circle
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();
            break;
    }
    
    ctx.restore();
}

// Simplified Rune Generator
function simplifyToRune() {
    if (!currentLetters) {
        alert('Please generate a sigil first!');
        return;
    }
    
    clearCanvas(canvas, ctx);
    
    // Choose a random simplified style
    const styles = ['vertical-stave', 'bind-rune', 'angular-rune', 'linear-sigil'];
    const selectedStyle = randomChoice(styles);
    
    switch(selectedStyle) {
        case 'vertical-stave':
            generateVerticalStave();
            break;
        case 'bind-rune':
            generateBindRune();
            break;
        case 'angular-rune':
            generateAngularRune();
            break;
        case 'linear-sigil':
            generateLinearSigil();
            break;
    }
}

// Vertical Stave - Icelandic stave style with central line and marks
function generateVerticalStave() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    const staveHeight = 260 + Math.random() * 40;
    const staveAngle = (Math.random() - 0.5) * 0.15; // Slight angle variation
    
    // Draw central vertical line with slight angle
    ctx.beginPath();
    const topX = centerX + Math.sin(staveAngle) * staveHeight / 2;
    const topY = centerY - staveHeight / 2;
    const bottomX = centerX - Math.sin(staveAngle) * staveHeight / 2;
    const bottomY = centerY + staveHeight / 2;
    ctx.moveTo(topX, topY);
    ctx.lineTo(bottomX, bottomY);
    ctx.stroke();
    
    // Add marks based on letters with randomization
    const numMarks = Math.min(letters.length, 7);
    const spacing = staveHeight / (numMarks + 1);
    
    letters.slice(0, numMarks).forEach((letter, index) => {
        const progress = (index + 1) / (numMarks + 1);
        const x = centerX + Math.sin(staveAngle) * staveHeight / 2 - Math.sin(staveAngle) * staveHeight * progress;
        const y = centerY - staveHeight / 2 + spacing * (index + 1) + (Math.random() - 0.5) * 10;
        const charCode = letter.charCodeAt(0);
        
        // Different mark types with randomization
        const markType = Math.floor(Math.random() * 8);
        const markLength = 25 + Math.random() * 30 + (charCode % 15);
        const markAngle = (Math.random() - 0.5) * 0.3;
        
        ctx.lineWidth = 2 + Math.random() * 2;
        
        switch(markType) {
            case 0: // Horizontal line (right)
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + markLength * Math.cos(markAngle), y + markLength * Math.sin(markAngle));
                ctx.stroke();
                break;
                
            case 1: // Horizontal line (left)
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - markLength * Math.cos(markAngle), y - markLength * Math.sin(markAngle));
                ctx.stroke();
                break;
                
            case 2: // Diagonal up-right
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + markLength * 0.9, y - markLength * (0.5 + Math.random() * 0.4));
                ctx.stroke();
                break;
                
            case 3: // Diagonal down-right
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + markLength * 0.9, y + markLength * (0.5 + Math.random() * 0.4));
                ctx.stroke();
                break;
                
            case 4: // Both sides horizontal
                ctx.beginPath();
                ctx.moveTo(x - markLength / 2, y);
                ctx.lineTo(x + markLength / 2, y);
                ctx.stroke();
                break;
                
            case 5: // Y-shape
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + markLength * 0.5, y - markLength * 0.4);
                ctx.moveTo(x, y);
                ctx.lineTo(x + markLength * 0.5, y + markLength * 0.4);
                ctx.stroke();
                break;
                
            case 6: // Double diagonal
                ctx.beginPath();
                ctx.moveTo(x, y - 10);
                ctx.lineTo(x + markLength * 0.7, y - 10 - markLength * 0.5);
                ctx.moveTo(x, y + 10);
                ctx.lineTo(x + markLength * 0.7, y + 10 + markLength * 0.5);
                ctx.stroke();
                break;
                
            case 7: // Cross mark
                ctx.beginPath();
                ctx.moveTo(x - markLength * 0.3, y);
                ctx.lineTo(x + markLength * 0.3, y);
                ctx.moveTo(x, y - markLength * 0.3);
                ctx.lineTo(x, y + markLength * 0.3);
                ctx.stroke();
                break;
        }
    });
    
    // Add top mark with variation
    ctx.lineWidth = 3;
    const topMarkStyle = Math.floor(Math.random() * 3);
    const topMarkY = topY - (10 + Math.random() * 10);
    
    ctx.beginPath();
    if (topMarkStyle === 0) {
        ctx.moveTo(topX - 20, topMarkY);
        ctx.lineTo(topX, topY);
        ctx.lineTo(topX + 20, topMarkY);
    } else if (topMarkStyle === 1) {
        ctx.arc(topX, topY - 15, 8, 0, Math.PI * 2);
    } else {
        ctx.moveTo(topX - 15, topY - 20);
        ctx.lineTo(topX, topY - 5);
        ctx.lineTo(topX + 15, topY - 20);
        ctx.lineTo(topX, topY - 25);
        ctx.closePath();
    }
    ctx.stroke();
}

// Bind Rune - Overlapping linear letters
function generateBindRune() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 4 + Math.random() * 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    const size = 180 + Math.random() * 40;
    const centerAngle = Math.random() * Math.PI * 2;
    
    // Draw central line (can be vertical, horizontal, or diagonal)
    const mainLineStyle = Math.floor(Math.random() * 3);
    ctx.beginPath();
    if (mainLineStyle === 0) {
        // Vertical
        ctx.moveTo(centerX, centerY - size / 2);
        ctx.lineTo(centerX, centerY + size / 2);
    } else if (mainLineStyle === 1) {
        // Horizontal
        ctx.moveTo(centerX - size / 2, centerY);
        ctx.lineTo(centerX + size / 2, centerY);
    } else {
        // Diagonal
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
        ctx.moveTo(centerX - Math.cos(angle) * size / 2, centerY - Math.sin(angle) * size / 2);
        ctx.lineTo(centerX + Math.cos(angle) * size / 2, centerY + Math.sin(angle) * size / 2);
    }
    ctx.stroke();
    
    // Add letter-based strokes with randomization
    letters.forEach((letter, index) => {
        const charCode = letter.charCodeAt(0);
        const angle = (charCode % 8) * (Math.PI / 4) + (Math.random() - 0.5) * 0.4;
        const length = size * (0.4 + Math.random() * 0.3);
        
        ctx.lineWidth = 3 + Math.random() * 2;
        
        // Randomly choose pattern
        const pattern = Math.floor(Math.random() * 7);
        const yVariation = (Math.random() - 0.5) * size * 0.3;
        
        switch(pattern) {
            case 0: // Diagonal from center
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(
                    centerX + Math.cos(angle) * length,
                    centerY + Math.sin(angle) * length
                );
                ctx.stroke();
                break;
                
            case 1: // Horizontal bar
                const yPos = centerY - size / 2 + (Math.random()) * size;
                const barLength = length * (0.6 + Math.random() * 0.4);
                ctx.beginPath();
                ctx.moveTo(centerX - barLength / 2, yPos);
                ctx.lineTo(centerX + barLength / 2, yPos);
                ctx.stroke();
                break;
                
            case 2: // V-shape
                const vY = centerY + yVariation;
                const vWidth = 20 + Math.random() * 25;
                const vHeight = 15 + Math.random() * 25;
                ctx.beginPath();
                ctx.moveTo(centerX - vWidth, vY - vHeight);
                ctx.lineTo(centerX, vY + vHeight);
                ctx.lineTo(centerX + vWidth, vY - vHeight);
                ctx.stroke();
                break;
                
            case 3: // Angled cross
                const crossY = centerY + yVariation;
                const crossSize = 15 + Math.random() * 20;
                const crossAngle = Math.random() * Math.PI / 4;
                ctx.beginPath();
                ctx.moveTo(centerX - crossSize, crossY - crossSize);
                ctx.lineTo(centerX + crossSize, crossY + crossSize);
                ctx.moveTo(centerX + crossSize, crossY - crossSize);
                ctx.lineTo(centerX - crossSize, crossY + crossSize);
                ctx.stroke();
                break;
                
            case 4: // Curved branch
                const branchY = centerY + yVariation;
                const branchSide = Math.random() > 0.5 ? 1 : -1;
                ctx.beginPath();
                ctx.moveTo(centerX, branchY);
                ctx.quadraticCurveTo(
                    centerX + branchSide * length * 0.3, branchY - length * 0.3,
                    centerX + branchSide * length * 0.6, branchY - length * 0.1
                );
                ctx.stroke();
                break;
                
            case 5: // Y-fork
                const forkY = centerY + yVariation;
                const forkLength = 20 + Math.random() * 25;
                ctx.beginPath();
                ctx.moveTo(centerX, forkY + forkLength);
                ctx.lineTo(centerX, forkY);
                ctx.lineTo(centerX - forkLength * 0.6, forkY - forkLength * 0.5);
                ctx.moveTo(centerX, forkY);
                ctx.lineTo(centerX + forkLength * 0.6, forkY - forkLength * 0.5);
                ctx.stroke();
                break;
                
            case 6: // Circle or arc
                const arcY = centerY + yVariation;
                const arcRadius = 8 + Math.random() * 12;
                ctx.beginPath();
                ctx.arc(centerX + (Math.random() - 0.5) * length * 0.5, arcY, arcRadius, 0, Math.PI * (1 + Math.random()));
                ctx.stroke();
                break;
        }
    });
}

// Angular Rune - Sharp geometric Nordic style
function generateAngularRune() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 4 + Math.random() * 2;
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';
    
    const size = 160 + Math.random() * 50;
    const startAngle = Math.random() * Math.PI * 2;
    
    // Create angular path based on letters with randomization
    ctx.beginPath();
    const startX = centerX + Math.cos(startAngle) * size * 0.8;
    const startY = centerY + Math.sin(startAngle) * size * 0.8;
    ctx.moveTo(startX, startY);
    
    let currentX = startX;
    let currentY = startY;
    
    letters.forEach((letter, index) => {
        const charCode = letter.charCodeAt(0);
        
        // Randomize direction and length more
        const angle = (Math.random() * Math.PI * 2);
        const stepSize = size * (0.15 + Math.random() * 0.35);
        
        const dx = Math.cos(angle) * stepSize;
        const dy = Math.sin(angle) * stepSize;
        
        currentX += dx;
        currentY += dy;
        
        // Keep within bounds
        currentX = Math.max(centerX - size, Math.min(centerX + size, currentX));
        currentY = Math.max(centerY - size, Math.min(centerY + size, currentY));
        
        ctx.lineTo(currentX, currentY);
        
        // Occasionally add a sharp angle
        if (Math.random() > 0.6) {
            const sharpAngle = angle + (Math.random() - 0.5) * Math.PI;
            const sharpStep = stepSize * (0.3 + Math.random() * 0.4);
            currentX += Math.cos(sharpAngle) * sharpStep;
            currentY += Math.sin(sharpAngle) * sharpStep;
            ctx.lineTo(currentX, currentY);
        }
    });
    
    // Maybe close the path
    if (Math.random() > 0.5) {
        ctx.closePath();
    }
    
    ctx.stroke();
    
    // Add angular decorations with more variety
    ctx.lineWidth = 2 + Math.random() * 2;
    const numDecorations = Math.min(Math.floor(2 + Math.random() * 4), letters.length);
    
    for (let i = 0; i < numDecorations; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = size * (0.4 + Math.random() * 0.5);
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        const decorType = Math.floor(Math.random() * 5);
        const decorSize = 10 + Math.random() * 15;
        
        ctx.beginPath();
        switch(decorType) {
            case 0: // Triangle
                ctx.moveTo(x - decorSize, y + decorSize * 0.7);
                ctx.lineTo(x, y - decorSize);
                ctx.lineTo(x + decorSize, y + decorSize * 0.7);
                break;
                
            case 1: // Diamond
                ctx.moveTo(x, y - decorSize);
                ctx.lineTo(x + decorSize, y);
                ctx.lineTo(x, y + decorSize);
                ctx.lineTo(x - decorSize, y);
                ctx.closePath();
                break;
                
            case 2: // Cross
                ctx.moveTo(x - decorSize, y);
                ctx.lineTo(x + decorSize, y);
                ctx.moveTo(x, y - decorSize);
                ctx.lineTo(x, y + decorSize);
                break;
                
            case 3: // Arrow
                ctx.moveTo(x - decorSize, y);
                ctx.lineTo(x + decorSize, y);
                ctx.lineTo(x + decorSize * 0.5, y - decorSize * 0.5);
                ctx.moveTo(x + decorSize, y);
                ctx.lineTo(x + decorSize * 0.5, y + decorSize * 0.5);
                break;
                
            case 4: // Zigzag
                const zigSize = decorSize * 0.4;
                ctx.moveTo(x - decorSize, y - zigSize);
                ctx.lineTo(x - zigSize, y + zigSize);
                ctx.lineTo(x + zigSize, y - zigSize);
                ctx.lineTo(x + decorSize, y + zigSize);
                break;
        }
        ctx.stroke();
    }
}

// Linear Sigil - Minimal continuous line
function generateLinearSigil() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const letters = currentLetters.split('');
    
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = 3 + Math.random() * 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Create a single continuous linear path with more variation
    const baseRadius = 100 + Math.random() * 50;
    const radiusVariation = 30 + Math.random() * 40;
    const spiralEffect = Math.random() * 0.3;
    const startAngle = Math.random() * Math.PI * 2;
    
    ctx.beginPath();
    
    letters.forEach((letter, index) => {
        const charCode = letter.charCodeAt(0);
        const progress = index / letters.length;
        
        // Create points with random distribution
        const baseAngle = startAngle + progress * Math.PI * 2 + (Math.random() - 0.5) * 0.8;
        const offset = (Math.random() - 0.5) * Math.PI / 2;
        const angle = baseAngle + offset;
        
        // More dynamic radius
        const r = baseRadius + Math.sin(progress * Math.PI * 4) * radiusVariation * 0.5 + (Math.random() - 0.5) * radiusVariation;
        const spiralFactor = 1 + progress * spiralEffect;
        
        const x = centerX + Math.cos(angle) * r * spiralFactor;
        const y = centerY + Math.sin(angle) * r * spiralFactor;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            // Randomly use straight lines, curves, or loops
            const lineStyle = Math.random();
            
            if (lineStyle < 0.3) {
                // Straight line
                ctx.lineTo(x, y);
            } else if (lineStyle < 0.7) {
                // Quadratic curve with random control point
                const prevAngle = startAngle + ((index - 1) / letters.length) * Math.PI * 2;
                const ctrlAngle = (angle + prevAngle) / 2 + (Math.random() - 0.5) * Math.PI / 2;
                const ctrlRadius = r * (0.4 + Math.random() * 0.6);
                const ctrlX = centerX + Math.cos(ctrlAngle) * ctrlRadius;
                const ctrlY = centerY + Math.sin(ctrlAngle) * ctrlRadius;
                
                ctx.quadraticCurveTo(ctrlX, ctrlY, x, y);
            } else {
                // Bezier curve for more complex flow
                const ctrl1Angle = angle + (Math.random() - 0.5) * Math.PI;
                const ctrl2Angle = angle + (Math.random() - 0.5) * Math.PI;
                const ctrl1X = centerX + Math.cos(ctrl1Angle) * r * 0.7;
                const ctrl1Y = centerY + Math.sin(ctrl1Angle) * r * 0.7;
                const ctrl2X = centerX + Math.cos(ctrl2Angle) * r * 0.9;
                const ctrl2Y = centerY + Math.sin(ctrl2Angle) * r * 0.9;
                
                ctx.bezierCurveTo(ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, x, y);
            }
        }
    });
    
    // Randomly close the shape or leave open
    if (Math.random() > 0.4) {
        ctx.closePath();
    }
    
    ctx.stroke();
    
    // Add decorative elements
    const numDecorations = Math.floor(Math.random() * 4);
    for (let i = 0; i < numDecorations; i++) {
        const decorAngle = Math.random() * Math.PI * 2;
        const decorRadius = baseRadius * (0.3 + Math.random() * 0.5);
        const decorX = centerX + Math.cos(decorAngle) * decorRadius;
        const decorY = centerY + Math.sin(decorAngle) * decorRadius;
        const decorSize = 3 + Math.random() * 6;
        
        ctx.beginPath();
        if (Math.random() > 0.5) {
            // Small circle
            ctx.arc(decorX, decorY, decorSize, 0, Math.PI * 2);
            ctx.stroke();
        } else {
            // Small dot
            ctx.arc(decorX, decorY, decorSize, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Add center point variation
    if (Math.random() > 0.3) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        const centerSize = 4 + Math.random() * 5;
        if (Math.random() > 0.5) {
            ctx.arc(centerX, centerY, centerSize, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.arc(centerX, centerY, centerSize, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
}

// Event Listeners
generateBtn.addEventListener('click', generateSigil);

intentionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        generateSigil();
    }
});

// Add drawing events to canvas
addDrawingEvents(canvas, ctx, {
    colorPicker: colorPicker,
    brushSize: brushSize
});

clearBtn.addEventListener('click', () => clearCanvas(canvas, ctx));
downloadBtn.addEventListener('click', () => exportCanvasPNG(canvas, 'my-sigil.png'));
autoGenerateBtn.addEventListener('click', () => { autoGenerateSigil(); saveToHistory(); });
simplifyRuneBtn.addEventListener('click', () => { simplifyToRune(); saveToHistory(); });

brushSize.addEventListener('input', (e) => {
    brushSizeLabel.textContent = `${e.target.value}px`;
});

// Initialize brush size label
brushSizeLabel.textContent = `${brushSize.value}px`;

// ─── Sigil History ────────────────────────────────────────────────────────────

const HISTORY_KEY = 'mystical-path-sigil-history';
const HISTORY_MAX = 10;

const historySection = document.getElementById('history-section');
const historyGrid = document.getElementById('history-grid');
const historyCount = document.getElementById('history-count');
const clearHistoryBtn = document.getElementById('clear-history-btn');

function loadHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch {
        return [];
    }
}

function saveHistory(history) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function saveToHistory() {
    // Only save if a sigil was actually drawn (currentLetters is set)
    if (!currentLetters) return;

    const entry = {
        dataUrl: canvas.toDataURL('image/png'),
        intention: intentionInput.value.trim(),
        algorithm: generationStyle.value,
        timestamp: Date.now()
    };

    const history = loadHistory();
    history.unshift(entry);
    if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
    saveHistory(history);
    renderHistory();
}

function deleteFromHistory(index) {
    const history = loadHistory();
    history.splice(index, 1);
    saveHistory(history);
    renderHistory();
}

function clearHistory() {
    saveHistory([]);
    renderHistory();
}

function reloadFromHistory(dataUrl) {
    const img = new Image();
    img.onload = () => {
        clearCanvas(canvas, ctx);
        ctx.drawImage(img, 0, 0);
    };
    img.src = dataUrl;
    // Scroll up to canvas
    canvas.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function formatTimestamp(ts) {
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) +
        ' ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function renderHistory() {
    const history = loadHistory();
    historyCount.textContent = history.length;

    if (history.length === 0) {
        historySection.style.display = 'none';
        return;
    }

    historySection.style.display = 'block';
    historyGrid.innerHTML = '';

    history.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.setAttribute('role', 'listitem');

        const label = entry.algorithm
            ? entry.algorithm.charAt(0).toUpperCase() + entry.algorithm.slice(1)
            : 'Custom';

        item.innerHTML = `
            <img class="history-thumb" src="${entry.dataUrl}" alt="Sigil ${index + 1}: ${entry.intention || 'unnamed'}" loading="lazy">
            <div class="history-meta">
                <span class="history-intention" title="${entry.intention}">${entry.intention || '(no intention)'}</span>
                <span class="history-label">${label}</span>
                <span class="history-time">${formatTimestamp(entry.timestamp)}</span>
            </div>
            <div class="history-actions">
                <button class="history-load-btn" aria-label="Reload sigil ${index + 1} onto canvas">↩ Load</button>
                <button class="history-delete-btn" aria-label="Delete sigil ${index + 1} from history">✕</button>
            </div>
        `;

        item.querySelector('.history-load-btn').addEventListener('click', () => reloadFromHistory(entry.dataUrl));
        item.querySelector('.history-delete-btn').addEventListener('click', () => deleteFromHistory(index));

        historyGrid.appendChild(item);
    });
}

clearHistoryBtn.addEventListener('click', clearHistory);

// Render history on page load
renderHistory();
