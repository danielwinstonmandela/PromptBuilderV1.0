// Builder-specific functionality
let currentPrompt = '';

function updatePrompt() {
    const persona = document.getElementById('persona').value;
    const task = document.getElementById('task').value;
    const context = document.getElementById('context').value;
    const format = document.getElementById('format').value;

    let prompt = '';
    let componentCount = 0;
    
    if (persona) {
        prompt += persona + '. ';
        componentCount++;
    }
    if (task && context) {
        prompt += 'Please ' + task + ' ' + context + '. ';
        componentCount++;
    }
    if (format) {
        prompt += format + '.';
        componentCount++;
    }

    const promptElement = document.getElementById('promptText');
    
    if (!prompt) {
        promptElement.textContent = 'Select components from the left to build your structured prompt...';
        promptElement.classList.add('empty');
        document.getElementById('buildingStatus').innerHTML = '<div class="pulse"></div>Building...';
        document.getElementById('buildingStatus').className = 'status-indicator building';
    } else {
        promptElement.textContent = prompt;
        promptElement.classList.remove('empty');
        
        if (componentCount >= 3) {
            document.getElementById('buildingStatus').innerHTML = '<div class="pulse"></div>Complete!';
            document.getElementById('buildingStatus').className = 'status-indicator complete';
        } else {
            document.getElementById('buildingStatus').innerHTML = '<div class="pulse"></div>Building...';
            document.getElementById('buildingStatus').className = 'status-indicator building';
        }
    }

    // Update progress indicators
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        if (index < componentCount) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentPrompt = prompt;
    
    // Store in localStorage for other pages to access
    localStorage.setItem('currentPrompt', prompt);
    localStorage.setItem('promptComponents', JSON.stringify({
        persona,
        task,
        context,
        format,
        componentCount
    }));
}

function copyPrompt() {
    const promptText = document.getElementById('promptText').textContent;
    const copyBtn = document.querySelector('.copy-btn');
    
    copyToClipboard(promptText, copyBtn);
    
    if (promptText && !document.getElementById('promptText').classList.contains('empty')) {
        showNotification('Prompt copied to clipboard!', 'success');
    }
}

// Load saved prompt data on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedPrompt = localStorage.getItem('currentPrompt');
    const savedComponents = localStorage.getItem('promptComponents');
    
    if (savedComponents) {
        try {
            const components = JSON.parse(savedComponents);
            
            if (components.persona) document.getElementById('persona').value = components.persona;
            if (components.task) document.getElementById('task').value = components.task;
            if (components.context) document.getElementById('context').value = components.context;
            if (components.format) document.getElementById('format').value = components.format;
            
            updatePrompt();
        } catch (e) {
            console.log('No saved components found');
        }
    }
});
