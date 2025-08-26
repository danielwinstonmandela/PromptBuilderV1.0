// Shared utility functions and common functionality

// Page transition system for smooth SPA navigation
let isTransitioning = false;
let currentPage = 'home';

// Initialize floating elements animation
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 20 + 's';
        element.style.animationDuration = (20 + Math.random() * 10) + 's';
        container.appendChild(element);
    }
}

/**
 * Smooth page transition function
 * @param {string} targetPage - The ID of the target page (without #)
 * @param {Function} callback - Optional callback to run after transition
 */
function showPage(targetPage, callback = null) {
    // Prevent multiple transitions at once
    if (isTransitioning) return;
    
    // Don't transition if we're already on the target page
    if (currentPage === targetPage) return;
    
    isTransitioning = true;
    
    // Get current and target page elements
    const currentPageElement = document.querySelector('.page.visible');
    const targetPageElement = document.getElementById(targetPage + '-page');
    
    if (!targetPageElement) {
        console.warn(`Target page element not found: ${targetPage}-page`);
        isTransitioning = false;
        return;
    }
    
    // Add transition overlay for smooth effect
    showTransitionOverlay();
    
    // Phase 1: Fade out current page (300ms)
    if (currentPageElement && currentPageElement !== targetPageElement) {
        currentPageElement.classList.add('fade-out');
        
        setTimeout(() => {
            // Hide current page completely
            currentPageElement.classList.remove('visible', 'page-transition-active', 'fade-out');
        }, 300);
    }
    
    // Phase 2: Prepare and fade in new page (400ms total, starting after 100ms)
    setTimeout(() => {
        // Show target page with fade-in animation
        targetPageElement.classList.add('page-transition-active', 'fade-in');
        
        // After fade-in animation completes
        setTimeout(() => {
            // Finalize page transition
            targetPageElement.classList.remove('fade-in');
            targetPageElement.classList.add('visible');
            targetPageElement.classList.remove('page-transition-active');
            
            // Update current page tracker
            currentPage = targetPage;
            
            // Remove transition overlay
            hideTransitionOverlay();
            
            // Mark transition as complete
            isTransitioning = false;
            
            // Run callback if provided
            if (callback) callback();
            
            // Update URL without page reload (optional)
            updateURL(targetPage);
            
        }, 400);
    }, 100);
}

/**
 * Show transition overlay for smooth visual effect
 */
function showTransitionOverlay() {
    let overlay = document.getElementById('transitionOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'transitionOverlay';
        overlay.className = 'transition-overlay';
        document.body.appendChild(overlay);
    }
    
    setTimeout(() => overlay.classList.add('active'), 10);
}

/**
 * Hide transition overlay
 */
function hideTransitionOverlay() {
    const overlay = document.getElementById('transitionOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

/**
 * Update URL for better UX (optional - doesn't cause page reload)
 */
function updateURL(page) {
    if (window.history && window.history.pushState) {
        const newURL = page === 'home' ? '/' : `/#${page}`;
        window.history.pushState({ page }, '', newURL);
    }
}

/**
 * Enhanced navigation with smooth transitions
 * Call this function when nav links are clicked
 */
function navigateToPage(targetPage, event = null) {
    if (event) {
        event.preventDefault(); // Prevent default link behavior
    }
    
    // Update active nav tab
    setActiveNavTab(targetPage);
    
    // Perform smooth page transition
    showPage(targetPage, () => {
        // Callback: Run any page-specific initialization
        initializePage(targetPage);
    });
}

/**
 * Initialize page-specific functionality after transition
 */
function initializePage(page) {
    switch (page) {
        case 'builder':
            if (typeof updatePrompt === 'function') {
                updatePrompt();
            }
            break;
        case 'analyzer':
            if (typeof analyzePrompt === 'function') {
                setTimeout(analyzePrompt, 200);
            }
            break;
        case 'missions':
            if (typeof initializeMissions === 'function') {
                initializeMissions();
            }
            break;
        case 'learning':
            if (typeof filterContent === 'function') {
                filterContent('all');
            }
            break;
    }
}

// Copy text to clipboard
function copyToClipboard(text, buttonElement = null) {
    if (text && !text.includes('Select components') && !text.includes('Build your')) {
        navigator.clipboard.writeText(text).then(() => {
            if (buttonElement) {
                const originalHTML = buttonElement.innerHTML;
                buttonElement.innerHTML = '<span>✅</span>Copied!';
                buttonElement.style.background = 'var(--success)';
                setTimeout(() => {
                    buttonElement.innerHTML = originalHTML;
                    buttonElement.style.background = 'var(--accent)';
                }, 2000);
            }
        });
    }
}

// Navigation functionality
function setActiveNavTab(currentPage) {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.classList.remove('active');
        const tabPage = tab.getAttribute('data-page');
        if (tabPage === currentPage) {
            tab.classList.add('active');
        }
    });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        navigateToPage(event.state.page);
    }
});

// Initialize common elements on page load
document.addEventListener('DOMContentLoaded', function() {
    createFloatingElements();
    
    // Auto-detect current page and set active nav
    const currentPath = window.location.pathname + window.location.hash;
    let detectedPage = 'home';
    
    if (currentPath.includes('builder')) {
        detectedPage = 'builder';
    } else if (currentPath.includes('analyzer')) {
        detectedPage = 'analyzer';
    } else if (currentPath.includes('missions')) {
        detectedPage = 'missions';
    } else if (currentPath.includes('learning')) {
        detectedPage = 'learning';
    }
    
    currentPage = detectedPage;
    setActiveNavTab(detectedPage);
    
    // Setup navigation event listeners
    setupNavigationListeners();
});

/**
 * Setup click listeners for navigation elements
 */
function setupNavigationListeners() {
    // Add click listeners to navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the target page from data-page attribute
            const targetPage = this.getAttribute('data-page') || 'home';
            
            navigateToPage(targetPage, event);
        });
    });
    
    // Add listeners to feature links and other navigation elements
    document.querySelectorAll('.feature-link, .btn[href]').forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                event.preventDefault();
                
                let targetPage = 'home';
                if (href.includes('builder')) targetPage = 'builder';
                else if (href.includes('analyzer')) targetPage = 'analyzer';
                else if (href.includes('missions')) targetPage = 'missions';
                else if (href.includes('learning')) targetPage = 'learning';
                
                navigateToPage(targetPage, event);
            }
        });
    });
}

// Shared animation utilities
function fadeInUp(element, delay = 0) {
    setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 50);
    }, delay);
}

// Form validation utilities
function validateRequired(value, fieldName) {
    if (!value || value.trim() === '') {
        return `${fieldName} is required`;
    }
    return null;
}

function showNotification(message, type = 'info') {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        document.body.appendChild(notification);
    }
    
    // Set type-specific styling
    switch (type) {
        case 'success':
            notification.style.background = 'var(--success)';
            break;
        case 'error':
            notification.style.background = 'var(--error)';
            break;
        case 'warning':
            notification.style.background = 'var(--warning)';
            break;
        default:
            notification.style.background = 'var(--accent)';
            notification.style.color = 'var(--bg-primary)';
    }
    
    notification.textContent = message;
    notification.style.transform = 'translateX(0)';
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
    }, 3000);
}
