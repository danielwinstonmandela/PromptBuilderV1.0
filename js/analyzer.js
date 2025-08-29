// Analyzer-specific functionality

function analyzePrompt() {
    const savedPrompt = localStorage.getItem('currentPrompt');
    const savedComponents = localStorage.getItem('promptComponents');
    
    if (!savedPrompt || !savedComponents) {
        // Show no prompt message
        document.getElementById('noPromptMessage').style.display = 'block';
        document.getElementById('comparisonContent').style.display = 'none';
        return;
    }
    
    try {
        const components = JSON.parse(savedComponents);
        
        // Hide no prompt message and show comparison
        document.getElementById('noPromptMessage').style.display = 'none';
        document.getElementById('comparisonContent').style.display = 'block';
        
        // Calculate quality score based on components
        let score = 0;
        
        if (components.persona) score += 30;
        if (components.task) score += 35;
        if (components.context) score += 25;
        if (components.format) score += 10;
        
        // Update the analyzer display with animation
        document.getElementById('analyzedPrompt').textContent = savedPrompt;
        document.getElementById('analyzedPrompt').classList.remove('empty');
        
        // Animate quality bar
        setTimeout(() => {
            document.getElementById('qualityBar').style.width = score + '%';
        }, 500);
        
        document.getElementById('qualityScore').textContent = `Quality: ${score}%`;
        
        // Generate explanation based on score
        let explanation = '';
        if (score >= 90) {
            explanation = 'Exceptional! Your prompt demonstrates mastery with comprehensive persona, specific task, clear context, and structured format guidance.';
        } else if (score >= 75) {
            explanation = 'Excellent! Strong prompt structure with clear role definition, specific objectives, and detailed formatting instructions.';
        } else if (score >= 60) {
            explanation = 'Good foundation! Your prompt has solid structure but could benefit from additional specificity in context or formatting.';
        } else if (score >= 40) {
            explanation = 'Developing well! Adding more comprehensive components will significantly improve AI response quality.';
        } else {
            explanation = 'Getting started! Focus on building complete prompts with persona, task, context, and format for optimal results.';
        }
        
        document.getElementById('qualityExplanation').textContent = explanation;
        
        // Show detailed breakdown
        showComponentBreakdown(components);
        
    } catch (e) {
        console.error('Error parsing saved components:', e);
        document.getElementById('noPromptMessage').style.display = 'block';
        document.getElementById('comparisonContent').style.display = 'none';
    }
}

function showComponentBreakdown(components) {
    // Create detailed breakdown if it doesn't exist
    let breakdownSection = document.getElementById('componentBreakdown');
    if (!breakdownSection) {
        breakdownSection = document.createElement('div');
        breakdownSection.id = 'componentBreakdown';
        breakdownSection.innerHTML = `
            <div style="margin-top: 40px; padding: 32px; background: var(--bg-secondary); border-radius: 16px;">
                <h4 style="color: var(--text-primary); margin-bottom: 24px; text-align: center;">Component Analysis</h4>
                <div id="componentList" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;"></div>
            </div>
        `;
        document.querySelector('.comparison-section').appendChild(breakdownSection);
    }
    
    const componentList = document.getElementById('componentList');
    componentList.innerHTML = '';
    
    const componentData = [
        { name: 'Persona', value: components.persona, score: components.persona ? 30 : 0, max: 30 },
        { name: 'Task', value: components.task, score: components.task ? 35 : 0, max: 35 },
        { name: 'Context', value: components.context, score: components.context ? 25 : 0, max: 25 },
        { name: 'Format', value: components.format, score: components.format ? 10 : 0, max: 10 }
    ];
    
    componentData.forEach(component => {
        const componentCard = document.createElement('div');
        componentCard.style.cssText = `
            padding: 16px;
            background: var(--bg-tertiary);
            border-radius: 12px;
            border-left: 4px solid ${component.value ? 'var(--success)' : 'var(--error)'};
        `;
        
        componentCard.innerHTML = `
            <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">
                ${component.name}
            </div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">
                ${component.score}/${component.max} points
            </div>
            <div style="background: var(--bg-primary); height: 4px; border-radius: 2px; overflow: hidden;">
                <div style="height: 100%; background: ${component.value ? 'var(--success)' : 'var(--error)'}; width: ${(component.score / component.max) * 100}%; transition: width 0.8s ease;"></div>
            </div>
        `;
        
        componentList.appendChild(componentCard);
    });
}

// Run analysis on page load
document.addEventListener('DOMContentLoaded', function() {
    analyzePrompt();
    
    document.getElementById('analyzeAIContent').addEventListener('click', function () {
        // Check if there is a prompt to copy
        if (currentPrompt.trim() === '') {
            alert('Please build a prompt before analyzing!');
            return;
        }

        // Copy the prompt to the clipboard
        navigator.clipboard.writeText(currentPrompt).then(() => {
            // Redirect to GPTZero
            window.open('https://gptzero.me', '_blank');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
}); 
  
