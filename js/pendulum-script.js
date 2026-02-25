// ========================================
// PENDULUM DECISION TOOL
// ========================================

// ========================================
// ANSWER DATA
// ========================================

const ANSWERS = [
    {
        answer: "Yes",
        description: "A clear affirmative. The energies align favorably with your question. Move forward with confidence.",
        direction: "right" // Swings right
    },
    {
        answer: "No",
        description: "A clear negative. The path ahead may not be in your highest good at this time. Consider alternatives.",
        direction: "left" // Swings left
    },
    {
        answer: "Maybe",
        description: "The answer is unclear or conditional. More information may be needed, or the timing is uncertain.",
        direction: "center" // Stays centered
    },
    {
        answer: "Ask Again Later",
        description: "The energies are too chaotic to provide clarity right now. Revisit this question after some time has passed.",
        direction: "random" // Random movement
    }
];

// ========================================
// STATE
// ========================================

let canvas, ctx;
let isAnimating = false;
let currentAnswer = null;
let questionHistory = [];

// ========================================
// CANVAS & ANIMATION
// ========================================

/**
 * Initialize pendulum canvas
 */
function initPendulum() {
    const canvasEl = document.getElementById('pendulum-canvas');
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    
    drawPendulumStatic();
}

/**
 * Draw pendulum in resting position
 */
function drawPendulumStatic() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const chainTop = 50;
    const chainLength = 300;
    const crystalY = chainTop + chainLength;
    
    // Draw chain
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, chainTop);
    ctx.lineTo(centerX, crystalY);
    ctx.stroke();
    
    // Draw crystal
    drawCrystal(centerX, crystalY);
    
    // Draw position labels
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
    ctx.font = '14px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('No', 80, chainTop + chainLength / 2);
    ctx.fillText('Yes', canvas.width - 80, chainTop + chainLength / 2);
    ctx.fillText('Maybe', centerX, chainTop + chainLength + 60);
}

/**
 * Draw crystal weight
 */
function drawCrystal(x, y) {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    
    // Crystal body (hexagon)
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x + 15, y - 10);
    ctx.lineTo(x + 15, y + 10);
    ctx.lineTo(x, y + 20);
    ctx.lineTo(x - 15, y + 10);
    ctx.lineTo(x - 15, y - 10);
    ctx.closePath();
    ctx.fill();
    
    // Crystal highlight
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    ctx.moveTo(x - 5, y - 10);
    ctx.lineTo(x + 5, y - 10);
    ctx.lineTo(x + 5, y);
    ctx.lineTo(x - 5, y);
    ctx.closePath();
    ctx.fill();
    
    // Crystal glow
    ctx.shadowBlur = 20;
    ctx.shadowColor = primaryColor;
    ctx.stroke();
    ctx.shadowBlur = 0;
}

/**
 * Animate pendulum swing
 */
function animatePendulum(answer) {
    const centerX = canvas.width / 2;
    const chainTop = 50;
    const chainLength = 300;
    
    let targetAngle;
    
    // Determine target angle based on answer
    switch(answer.direction) {
        case 'left':
            targetAngle = -0.5; // Swing left (No)
            break;
        case 'right':
            targetAngle = 0.5; // Swing right (Yes)
            break;
        case 'center':
            targetAngle = 0; // Stay center (Maybe)
            break;
        case 'random':
            targetAngle = (Math.random() - 0.5) * 0.6; // Random small swing
            break;
    }
    
    let currentAngle = 0;
    let velocity = 0;
    const dampening = 0.98;
    const spring = 0.02;
    let time = 0;
    const duration = 3000; // 3 seconds
    const startTime = Date.now();
    
    function animate() {
        time = Date.now() - startTime;
        
        // Spring physics
        const force = (targetAngle - currentAngle) * spring;
        velocity += force;
        velocity *= dampening;
        currentAngle += velocity;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate pendulum position
        const crystalX = centerX + Math.sin(currentAngle) * chainLength;
        const crystalY = chainTop + Math.cos(currentAngle) * chainLength;
        
        // Draw chain
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, chainTop);
        ctx.lineTo(crystalX, crystalY);
        ctx.stroke();
        
        // Draw crystal
        drawCrystal(crystalX, crystalY);
        
        // Draw labels
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
        ctx.font = '14px Cinzel, serif';
        ctx.textAlign = 'center';
        ctx.fillText('No', 80, chainTop + chainLength / 2);
        ctx.fillText('Yes', canvas.width - 80, chainTop + chainLength / 2);
        ctx.fillText('Maybe', centerX, chainTop + chainLength + 60);
        
        // Continue animation or stop
        if (time < duration) {
            requestAnimationFrame(animate);
        } else {
            // Settle to final position
            currentAngle = targetAngle;
            isAnimating = false;
            showAnswer(answer);
        }
    }
    
    isAnimating = true;
    animate();
}

// ========================================
// QUESTION & ANSWER LOGIC
// ========================================

/**
 * Handle question submission
 */
function askQuestion() {
    const questionInput = document.getElementById('question-input');
    const question = questionInput.value.trim();
    
    if (!question) {
        alert('Please enter a question.');
        return;
    }
    
    if (isAnimating) {
        return;
    }
    
    // Hide answer section
    document.getElementById('answer-section').style.display = 'none';
    
    // Get random answer
    const answer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    currentAnswer = answer;
    
    // Animate pendulum
    animatePendulum(answer);
    
    // Save to history
    saveToHistory(question, answer.answer);
    
    // Clear input
    questionInput.value = '';
}

/**
 * Display answer after animation
 */
function showAnswer(answer) {
    const answerSection = document.getElementById('answer-section');
    const answerText = document.getElementById('answer-text');
    const answerDescription = document.getElementById('answer-description');
    
    answerText.textContent = answer.answer;
    answerDescription.textContent = answer.description;
    
    answerSection.style.display = 'block';
    answerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Reset for new question
 */
function resetPendulum() {
    document.getElementById('answer-section').style.display = 'none';
    document.getElementById('question-input').focus();
    drawPendulumStatic();
}

// ========================================
// QUESTION HISTORY
// ========================================

/**
 * Load history from localStorage
 */
function loadHistory() {
    const stored = localStorage.getItem('mystical-path-pendulum-history');
    if (stored) {
        try {
            questionHistory = JSON.parse(stored);
        } catch (e) {
            questionHistory = [];
        }
    }
    updateHistoryDisplay();
}

/**
 * Save question to history
 */
function saveToHistory(question, answer) {
    const historyItem = {
        question: question,
        answer: answer,
        timestamp: Date.now()
    };
    
    questionHistory.unshift(historyItem); // Add to beginning
    
    // Keep only last 20
    if (questionHistory.length > 20) {
        questionHistory = questionHistory.slice(0, 20);
    }
    
    localStorage.setItem('mystical-path-pendulum-history', JSON.stringify(questionHistory));
    updateHistoryDisplay();
}

/**
 * Update history display
 */
function updateHistoryDisplay() {
    const historyList = document.getElementById('history-list');
    const emptyState = document.getElementById('history-empty');
    
    if (questionHistory.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    historyList.innerHTML = '';
    
    questionHistory.forEach(item => {
        const card = document.createElement('div');
        card.className = 'history-card';
        card.setAttribute('role', 'listitem');
        
        const date = new Date(item.timestamp);
        const timeStr = date.toLocaleString();
        
        card.innerHTML = `
            <div class="history-content">
                <p class="history-question">${item.question}</p>
                <div class="history-meta">
                    <span class="history-answer answer-${item.answer.toLowerCase().replace(/\s+/g, '-')}">${item.answer}</span>
                    <span class="history-time">${timeStr}</span>
                </div>
            </div>
        `;
        
        historyList.appendChild(card);
    });
}

/**
 * Toggle history visibility
 */
function toggleHistory() {
    const historyList = document.getElementById('history-list');
    const toggleBtn = document.getElementById('toggle-history-btn');
    const toggleIcon = toggleBtn.querySelector('.toggle-icon');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    
    if (historyList.style.display === 'none') {
        historyList.style.display = 'block';
        toggleIcon.textContent = '▲';
        toggleText.textContent = 'Hide History';
    } else {
        historyList.style.display = 'none';
        toggleIcon.textContent = '▼';
        toggleText.textContent = 'Show History';
    }
}

/**
 * Clear all history
 */
function clearHistory() {
    if (questionHistory.length === 0) return;
    
    if (confirm('Clear all question history?')) {
        questionHistory = [];
        localStorage.removeItem('mystical-path-pendulum-history');
        updateHistoryDisplay();
        
        // Hide history if open
        const historyList = document.getElementById('history-list');
        const toggleBtn = document.getElementById('toggle-history-btn');
        const toggleIcon = toggleBtn.querySelector('.toggle-icon');
        const toggleText = toggleBtn.querySelector('.toggle-text');
        
        historyList.style.display = 'none';
        toggleIcon.textContent = '▼';
        toggleText.textContent = 'Show History';
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initPendulum();
    loadHistory();
    
    // Ask button
    document.getElementById('ask-btn').addEventListener('click', askQuestion);
    
    // Ask again button
    document.getElementById('ask-again-btn').addEventListener('click', resetPendulum);
    
    // Enter key to submit
    document.getElementById('question-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') askQuestion();
    });
    
    // History controls
    document.getElementById('toggle-history-btn').addEventListener('click', toggleHistory);
    document.getElementById('clear-history-btn').addEventListener('click', clearHistory);
});
