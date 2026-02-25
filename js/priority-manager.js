// ========================================
// PRIORITY MANAGER - DRAG & DROP TOOL
// Development roadmap organizer
// ========================================

// DOM Elements
const dropZones = {
    current: document.getElementById('current-sprint'),
    high: document.getElementById('high-priority'),
    medium: document.getElementById('medium-priority'),
    backlog: document.getElementById('backlog')
};

const counts = {
    current: document.getElementById('count-current'),
    high: document.getElementById('count-high'),
    medium: document.getElementById('count-medium'),
    backlog: document.getElementById('count-backlog')
};

const newToolNameInput = document.getElementById('new-tool-name');
const newToolComplexity = document.getElementById('new-tool-complexity');
const addToolBtn = document.getElementById('add-tool-btn');
const generateMarkdownBtn = document.getElementById('generate-markdown-btn');
const copyMarkdownBtn = document.getElementById('copy-markdown-btn');
const resetBtn = document.getElementById('reset-btn');
const loadFromRoadmapBtn = document.getElementById('load-roadmap-btn');
const markdownOutput = document.getElementById('markdown-output');

// State
let tools = {
    current: [],
    high: [],
    medium: [],
    backlog: []
};

let draggedElement = null;

// ========================================
// DEFAULT TOOL IDEAS
// Updated: February 25, 2026 (synced with ROADMAP.md)
// ========================================

const DEFAULT_TOOLS = {
    current: [],
    high: [],
    medium: [
        { name: 'Herbal Correspondences Guide', complexity: 'medium', notes: 'Pairs with Crystal Database - safety warnings critical' }
    ],
    backlog: [
        { name: 'Tarot Spread Generator', complexity: 'complex', notes: '78 card database required' },
        { name: 'Planetary Hours Calculator', complexity: 'medium', notes: 'Geolocation & sunrise/sunset' },
        { name: 'Pendulum Decision Tool', complexity: 'simple', notes: 'Canvas visualization' },
        { name: 'Dream Journal', complexity: 'medium', notes: 'LocalStorage + pattern recognition' },
        { name: 'Spell Builder & Grimoire', complexity: 'complex', notes: 'Combines all correspondences' },
        { name: 'Numerology Calculator', complexity: 'simple', notes: 'Math algorithms' },
        { name: 'Sacred Geometry Generator', complexity: 'medium', notes: 'Canvas drawing' },
        { name: 'Witchy Weather', complexity: 'simple', notes: 'Weather API + correspondences' },
        { name: 'Affirmation Generator', complexity: 'simple', notes: 'Random selection + categories' },
        { name: 'Meditation Timer', complexity: 'simple', notes: 'Timer with chimes' }
    ]
};

// ========================================
// INITIALIZATION
// ========================================

function init() {
    loadFromLocalStorage();
    renderAllZones();
    setupEventListeners();
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('mystical-path-priorities');
    if (saved) {
        tools = JSON.parse(saved);
    } else {
        tools = JSON.parse(JSON.stringify(DEFAULT_TOOLS));
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('mystical-path-priorities', JSON.stringify(tools));
}

// ========================================
// RENDERING
// ========================================

function renderAllZones() {
    Object.keys(dropZones).forEach(priority => {
        renderZone(priority);
    });
    updateCounts();
}

function renderZone(priority) {
    const zone = dropZones[priority];
    const toolList = tools[priority];
    
    // Clear zone
    zone.innerHTML = '';
    
    if (toolList.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = getEmptyMessage(priority);
        zone.appendChild(emptyState);
    } else {
        toolList.forEach((tool, index) => {
            const card = createToolCard(tool, priority, index);
            zone.appendChild(card);
        });
    }
}

function getEmptyMessage(priority) {
    const messages = {
        current: 'Drag a tool here to start working on it',
        high: 'Next 3-5 tools to build',
        medium: 'Moderate complexity, good candidates',
        backlog: 'Future ideas and experiments'
    };
    return messages[priority] || 'Drop tools here';
}

function createToolCard(tool, priority, index) {
    const card = document.createElement('div');
    card.className = `tool-item ${tool.complexity}-complexity`;
    card.draggable = true;
    card.dataset.priority = priority;
    card.dataset.index = index;
    
    const header = document.createElement('div');
    header.className = 'tool-header';
    
    const dragHandle = document.createElement('span');
    dragHandle.className = 'drag-handle';
    dragHandle.textContent = '⋮⋮';
    
    const name = document.createElement('span');
    name.className = 'tool-name';
    name.textContent = tool.name;
    
    const complexity = document.createElement('span');
    complexity.className = `complexity-badge ${tool.complexity}`;
    complexity.textContent = tool.complexity;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteTool(priority, index);
    };
    
    header.appendChild(dragHandle);
    header.appendChild(name);
    header.appendChild(complexity);
    header.appendChild(deleteBtn);
    
    card.appendChild(header);
    
    if (tool.notes) {
        const notes = document.createElement('div');
        notes.className = 'tool-notes';
        notes.textContent = tool.notes;
        card.appendChild(notes);
    }
    
    // Drag events
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
    
    return card;
}

function updateCounts() {
    Object.keys(counts).forEach(priority => {
        const count = tools[priority].length;
        counts[priority].textContent = `${count} item${count !== 1 ? 's' : ''}`;
    });
}

// ========================================
// DRAG AND DROP
// ========================================

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    if (e.target.classList.contains('drop-zone')) {
        e.target.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    if (e.target.classList.contains('drop-zone')) {
        e.target.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    e.preventDefault();
    
    const targetZone = e.target.closest('.drop-zone');
    if (!targetZone || !draggedElement) return;
    
    targetZone.classList.remove('drag-over');
    
    const fromPriority = draggedElement.dataset.priority;
    const fromIndex = parseInt(draggedElement.dataset.index);
    const toPriority = targetZone.dataset.priority;
    
    // Move tool between lists
    const tool = tools[fromPriority][fromIndex];
    tools[fromPriority].splice(fromIndex, 1);
    tools[toPriority].push(tool);
    
    saveToLocalStorage();
    renderAllZones();
    
    return false;
}

// ========================================
// ADD NEW TOOL
// ========================================

function addNewTool() {
    const name = newToolNameInput.value.trim();
    if (!name) {
        alert('Please enter a tool name');
        return;
    }
    
    const newTool = {
        name: name,
        complexity: newToolComplexity.value,
        notes: ''
    };
    
    tools.backlog.push(newTool);
    saveToLocalStorage();
    renderAllZones();
    
    newToolNameInput.value = '';
    newToolComplexity.value = 'medium';
}

// ========================================
// DELETE TOOL
// ========================================

function deleteTool(priority, index) {
    const tool = tools[priority][index];
    if (confirm(`Delete "${tool.name}"?`)) {
        tools[priority].splice(index, 1);
        saveToLocalStorage();
        renderAllZones();
    }
}

// ========================================
// MARKDOWN EXPORT
// ========================================

function generateMarkdown() {
    let markdown = '# 🔮 Development Priorities\n\n';
    markdown += `**Generated:** ${new Date().toLocaleDateString()}\n\n`;
    markdown += '---\n\n';
    
    // Current Sprint
    if (tools.current.length > 0) {
        markdown += '## 🎯 CURRENT SPRINT\n\n';
        tools.current.forEach((tool, i) => {
            markdown += `### ${i + 1}. ${tool.name}\n`;
            markdown += `**Complexity:** ${tool.complexity}\n`;
            if (tool.notes) markdown += `**Notes:** ${tool.notes}\n`;
            markdown += '\n';
        });
        markdown += '---\n\n';
    }
    
    // High Priority
    if (tools.high.length > 0) {
        markdown += '## 🔥 HIGH PRIORITY (Next Up)\n\n';
        tools.high.forEach((tool, i) => {
            markdown += `${i + 1}. **${tool.name}** (${tool.complexity})`;
            if (tool.notes) markdown += ` - ${tool.notes}`;
            markdown += '\n';
        });
        markdown += '\n---\n\n';
    }
    
    // Medium Priority
    if (tools.medium.length > 0) {
        markdown += '## 📋 MEDIUM PRIORITY\n\n';
        tools.medium.forEach((tool, i) => {
            markdown += `${i + 1}. **${tool.name}** (${tool.complexity})`;
            if (tool.notes) markdown += ` - ${tool.notes}`;
            markdown += '\n';
        });
        markdown += '\n---\n\n';
    }
    
    // Backlog
    if (tools.backlog.length > 0) {
        markdown += '## 💭 BACKLOG\n\n';
        tools.backlog.forEach((tool, i) => {
            markdown += `- ${tool.name} (${tool.complexity})`;
            if (tool.notes) markdown += ` - ${tool.notes}`;
            markdown += '\n';
        });
        markdown += '\n';
    }
    
    markdown += '---\n\n';
    markdown += '*Generated by Priority Manager - Mystical Path Tools*\n';
    
    markdownOutput.value = markdown;
}

async function copyToClipboard() {
    if (!markdownOutput.value) {
        generateMarkdown();
    }
    
    try {
        await navigator.clipboard.writeText(markdownOutput.value);
        
        const originalText = copyMarkdownBtn.textContent;
        copyMarkdownBtn.textContent = '✓ Copied!';
        copyMarkdownBtn.style.background = 'var(--primary)';
        
        setTimeout(() => {
            copyMarkdownBtn.textContent = originalText;
            copyMarkdownBtn.style.background = '';
        }, 2000);
    } catch (err) {
        alert('Failed to copy. Please select and copy manually.');
    }
}

// ========================================
// LOAD FROM ROADMAP.MD
// ========================================

async function loadFromRoadmap() {
    try {
        const response = await fetch('../ROADMAP.md');
        if (!response.ok) throw new Error('Failed to load ROADMAP.md');
        
        const markdown = await response.text();
        const parsed = parseRoadmap(markdown);
        
        if (confirm(`Load ${parsed.high.length + parsed.medium.length + parsed.backlog.length} tools from ROADMAP.md? This will replace your current list.`)) {
            tools.current = [];
            tools.high = parsed.high;
            tools.medium = parsed.medium;
            tools.backlog = parsed.backlog;
            
            saveToLocalStorage();
            renderAllZones();
            markdownOutput.value = '';
            
            alert('✓ Successfully loaded from ROADMAP.md!');
        }
    } catch (err) {
        alert(`Error loading ROADMAP.md: ${err.message}`);
        console.error(err);
    }
}

function parseRoadmap(markdown) {
    const tools = {
        high: [],
        medium: [],
        backlog: []
    };
    
    // Extract HIGH PRIORITY section
    const highMatch = markdown.match(/## 🔥 HIGH PRIORITY[\s\S]*?(?=##|$)/);
    if (highMatch) {
        const highSection = highMatch[0];
        
        // Parse tool entries like: ### 💎 Tool Name
        const toolMatches = highSection.matchAll(/###\s+[^\s]+\s+(.+?)\n\*\*Complexity:\*\*\s+(\w+)/g);
        for (const match of toolMatches) {
            const name = match[1].trim();
            const complexity = match[2].toLowerCase();
            
            // Extract notes from "Why Next:" section if exists
            const noteMatch = highSection.match(new RegExp(`###[^#]*?${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?\\*\\*Why.*?:\\*\\*\\s*\\n-\\s*(.+?)\\n`, 'i'));
            const notes = noteMatch ? noteMatch[1].trim() : '';
            
            tools.high.push({ name, complexity, notes });
        }
    }
    
    // Extract MEDIUM PRIORITY section
    const mediumMatch = markdown.match(/## 📋 MEDIUM PRIORITY[\s\S]*?(?=##|$)/);
    if (mediumMatch) {
        const mediumSection = mediumMatch[0];
        
        const toolMatches = mediumSection.matchAll(/###\s+[^\s]+\s+(.+?)\n\*\*Complexity:\*\*\s+(\w+)/g);
        for (const match of toolMatches) {
            const name = match[1].trim();
            const complexity = match[2].toLowerCase();
            
            const noteMatch = mediumSection.match(new RegExp(`###[^#]*?${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?\\*\\*Why.*?:\\*\\*\\s*\\n-\\s*(.+?)\\n`, 'i'));
            const notes = noteMatch ? noteMatch[1].trim() : '';
            
            tools.medium.push({ name, complexity, notes });
        }
    }
    
    // Extract BACKLOG section
    const backlogMatch = markdown.match(/## 💭 BACKLOG[\s\S]*?(?=##|$)/);
    if (backlogMatch) {
        const backlogSection = backlogMatch[0];
        
        // Parse backlog items like: - Tool Name (complexity) - notes
        const itemMatches = backlogSection.matchAll(/-\s+(.+?)\s+\((\w+)\)(?:\s+-\s+(.+))?$/gm);
        for (const match of itemMatches) {
            const name = match[1].trim();
            const complexity = match[2].toLowerCase();
            const notes = match[3] ? match[3].trim() : '';
            
            tools.backlog.push({ name, complexity, notes });
        }
    }
    
    return tools;
}

// ========================================
// RESET
// ========================================

function resetToDefaults() {
    if (confirm('Reset all priorities to defaults? This will erase your current organization.')) {
        tools = JSON.parse(JSON.stringify(DEFAULT_TOOLS));
        saveToLocalStorage();
        renderAllZones();
        markdownOutput.value = '';
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Drop zones
    Object.values(dropZones).forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
    
    // Buttons
    addToolBtn.addEventListener('click', addNewTool);
    generateMarkdownBtn.addEventListener('click', generateMarkdown);
    copyMarkdownBtn.addEventListener('click', copyToClipboard);
    resetBtn.addEventListener('click', resetToDefaults);
    if (loadFromRoadmapBtn) {
        loadFromRoadmapBtn.addEventListener('click', loadFromRoadmap);
    }
    
    // Enter key in input
    newToolNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addNewTool();
        }
    });
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================

init();
