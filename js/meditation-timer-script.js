/* ========================================
   MEDITATION TIMER SCRIPT
   Customizable meditation sessions with bells
   ======================================== */

// ========================================
// DATA
// ========================================

const PRESETS = [
    { name: '5 Minutes', duration: 5, icon: '🕐', description: 'Quick reset' },
    { name: '10 Minutes', duration: 10, icon: '🕐', description: 'Morning practice' },
    { name: '15 Minutes', duration: 15, icon: '🕑', description: 'Daily session' },
    { name: '20 Minutes', duration: 20, icon: '🕑', description: 'Deep focus' },
    { name: '30 Minutes', duration: 30, icon: '🕒', description: 'Extended practice' },
    { name: '45 Minutes', duration: 45, icon: '🕒', description: 'Advanced session' },
    { name: '60 Minutes', duration: 60, icon: '🕓', description: 'Full hour' }
];

// Web Audio API context (initialized on first user interaction)
let audioContext = null;

// ========================================
// STATE
// ========================================

let timerState = {
    isRunning: false,
    isPaused: false,
    totalSeconds: 0,
    remainingSeconds: 0,
    selectedDuration: 0,
    intervalId: null,
    lastIntervalBellAt: 0
};

// ========================================
// DOM ELEMENTS
// ========================================

const timeRemaining = document.getElementById('timeRemaining');
const sessionLabel = document.getElementById('sessionLabel');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const presetsGrid = document.getElementById('presetsGrid');
const customMinutes = document.getElementById('customMinutes');
const setCustomBtn = document.getElementById('setCustomBtn');
const intervalBells = document.getElementById('intervalBells');
const bellSound = document.getElementById('bellSound');
const autoStart = document.getElementById('autoStart');
const progressCircle = document.getElementById('progressCircle');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    renderPresets();
    updateDisplay();
    setupEventListeners();
    initializeProgressRing();

    // Check for ?duration=N URL param (set by Candle Magic ritual timer button)
    const params = new URLSearchParams(window.location.search);
    const durationParam = params.get('duration');
    if (durationParam) {
        const minutes = parseInt(durationParam, 10);
        if (minutes > 0 && minutes <= 180) {
            selectDuration(minutes);
        }
    }
});

// ========================================
// SETTINGS PERSISTENCE
// ========================================

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('meditation-timer-settings') || '{}');
    
    intervalBells.value = settings.intervalBells || '0';
    bellSound.value = settings.bellSound || 'singing-bowl';
    autoStart.checked = settings.autoStart || false;
    customMinutes.value = settings.lastDuration || 15;
}

function saveSettings() {
    const settings = {
        intervalBells: intervalBells.value,
        bellSound: bellSound.value,
        autoStart: autoStart.checked,
        lastDuration: timerState.selectedDuration / 60 || 15
    };
    
    localStorage.setItem('meditation-timer-settings', JSON.stringify(settings));
}

// ========================================
// RENDERING
// ========================================

function renderPresets() {
    presetsGrid.innerHTML = PRESETS.map(preset => `
        <div class="preset-card" data-duration="${preset.duration}" role="listitem">
            <span class="preset-icon">${preset.icon}</span>
            <h3>${preset.name}</h3>
            <p>${preset.description}</p>
        </div>`).join('');

    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.preset-card').forEach(card => {
        card.addEventListener('click', () => {
            const duration = parseInt(card.dataset.duration);
            selectDuration(duration);
            
            if (autoStart.checked && !timerState.isRunning) {
                startTimer();
            }
        });
    });
}

function updateDisplay() {
    const minutes = Math.floor(timerState.remainingSeconds / 60);
    const seconds = timerState.remainingSeconds % 60;
    timeRemaining.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update button states
    if (timerState.isRunning) {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        resetBtn.disabled = false;
        pauseBtn.textContent = 'Pause';
    } else if (timerState.isPaused) {
        startBtn.disabled = false;
        pauseBtn.disabled = false;
        resetBtn.disabled = false;
        startBtn.textContent = 'Resume';
        pauseBtn.textContent = 'Pause';
    } else {
        startBtn.disabled = timerState.selectedDuration === 0;
        pauseBtn.disabled = true;
        resetBtn.disabled = true;
        startBtn.textContent = 'Start';
    }
    
    // Update progress ring
    updateProgressRing();
}

function updateProgressRing() {
    if (timerState.totalSeconds === 0) {
        progressCircle.style.strokeDashoffset = 848.23; // Full circle
        return;
    }
    
    const progress = timerState.remainingSeconds / timerState.totalSeconds;
    const offset = 848.23 * (1 - progress); // Circumference = 2πr = 2π(135) ≈ 848.23
    progressCircle.style.strokeDashoffset = offset;
}

function initializeProgressRing() {
    const radius = 135;
    const circumference = 2 * Math.PI * radius;
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;
}

// ========================================
// TIMER LOGIC
// ========================================

function selectDuration(minutes) {
    if (timerState.isRunning) {
        stopTimer();
    }
    
    timerState.selectedDuration = minutes * 60;
    timerState.totalSeconds = minutes * 60;
    timerState.remainingSeconds = minutes * 60;
    timerState.lastIntervalBellAt = 0;
    
    sessionLabel.textContent = `${minutes} Minute Session`;
    updateDisplay();
    saveSettings();
}

function startTimer() {
    if (timerState.selectedDuration === 0) return;
    
    initializeAudioContext();
    
    timerState.isRunning = true;
    timerState.isPaused = false;
    timerState.lastIntervalBellAt = timerState.totalSeconds - timerState.remainingSeconds;
    
    sessionLabel.textContent = 'Meditating...';
    
    timerState.intervalId = setInterval(() => {
        timerState.remainingSeconds--;
        
        // Check for interval bell
        const elapsedSeconds = timerState.totalSeconds - timerState.remainingSeconds;
        const bellInterval = parseInt(intervalBells.value) * 60;
        
        if (bellInterval > 0 && elapsedSeconds > 0 && elapsedSeconds % bellInterval === 0) {
            playSound();
        }
        
        updateDisplay();
        
        // Timer complete
        if (timerState.remainingSeconds <= 0) {
            completeSession();
        }
    }, 1000);
    
    updateDisplay();
}

function pauseTimer() {
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
    timerState.isPaused = true;
    sessionLabel.textContent = 'Paused';
    updateDisplay();
}

function stopTimer() {
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
    timerState.isPaused = false;
    timerState.remainingSeconds = timerState.selectedDuration;
    sessionLabel.textContent = timerState.selectedDuration > 0 
        ? `${timerState.selectedDuration / 60} Minute Session` 
        : 'Select Duration';
    updateDisplay();
}

function completeSession() {
    clearInterval(timerState.intervalId);
    timerState.isRunning = false;
    timerState.remainingSeconds = 0;
    
    sessionLabel.textContent = '✨ Session Complete! ✨';
    playSound(true); // Completion chime
    
    // Flash the display
    timeRemaining.style.animation = 'pulse 1s ease-in-out 3';
    setTimeout(() => {
        timeRemaining.style.animation = '';
    }, 3000);
    
    updateDisplay();
}

// ========================================
// AUDIO (WEB AUDIO API)
// ========================================

function initializeAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(isCompletion = false) {
    const sound = bellSound.value;
    if (sound === 'silence') return;
    
    initializeAudioContext();
    
    // Generate sound based on selection
    switch (sound) {
        case 'singing-bowl':
            playSingingBowl(isCompletion);
            break;
        case 'bell':
            playBell(isCompletion);
            break;
        case 'chime':
            playChime(isCompletion);
            break;
    }
}

function playSingingBowl(isCompletion) {
    const duration = isCompletion ? 3 : 1.5;
    const baseFreq = 480; // A4 ≈ 480 Hz (singing bowl fundamental)
    
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    osc1.type = 'sine';
    osc1.frequency.value = baseFreq;
    osc2.type = 'sine';
    osc2.frequency.value = baseFreq * 2.0; // Harmonic
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    osc1.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);
    osc1.stop(audioContext.currentTime + duration);
    osc2.stop(audioContext.currentTime + duration);
}

function playBell(isCompletion) {
    const duration = isCompletion ? 2 : 1;
    const baseFreq = 800; // Temple bell frequency
    
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    osc.type = 'triangle';
    osc.frequency.value = baseFreq;
    
    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    osc.start(audioContext.currentTime);
    osc.stop(audioContext.currentTime + duration);
}

function playChime(isCompletion) {
    const duration = isCompletion ? 2.5 : 1.2;
    const freqs = [659.25, 783.99, 987.77]; // E5, G5, B5 (wind chime chord)
    
    freqs.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        osc.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime + i * 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration + i * 0.1);
        
        osc.start(audioContext.currentTime + i * 0.1);
        osc.stop(audioContext.currentTime + duration + i * 0.1);
    });
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    startBtn.addEventListener('click', () => {
        if (timerState.isPaused) {
            startTimer();
        } else {
            startTimer();
        }
    });
    
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', stopTimer);
    
    setCustomBtn.addEventListener('click', () => {
        const minutes = parseInt(customMinutes.value);
        if (minutes > 0 && minutes <= 180) {
            selectDuration(minutes);
            if (autoStart.checked) {
                startTimer();
            }
        }
    });
    
    // Save settings when changed
    intervalBells.addEventListener('change', saveSettings);
    bellSound.addEventListener('change', saveSettings);
    autoStart.addEventListener('change', saveSettings);
}
