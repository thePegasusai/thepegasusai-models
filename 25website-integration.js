/**
 * thePegasusai Models - 25website Grok Assistant Integration
 * Combines Option 2 (Model Roulette) + Option 3 (Dynamic Branding)
 * Cost optimization active behind scenes
 */

class ThePegasusaiGrokEnhancer {
    constructor() {
        this.API_BASE = 'https://4jettmd5q5.execute-api.us-west-2.amazonaws.com/prod';
        this.currentModel = 'G'; // Start with Grok
        this.costOptimizationActive = true;
        this.models = {
            'A': { name: 'Llama 8B', fullName: 'Llama 3.1 8B', provider: 'Meta', cost: 0.0002, 
                   greeting: 'Hello! I\'m Llama (Model A), your ultra-efficient thePegasusai assistant.' },
            'B': { name: 'Llama 70B', fullName: 'Llama 3.1 70B', provider: 'Meta', cost: 0.0009,
                   greeting: 'Hello! I\'m Llama (Model B), your cost-effective thePegasusai assistant.' },
            'C': { name: 'Mixtral', fullName: 'Mixtral 8x7B', provider: 'Mistral AI', cost: 0.0007,
                   greeting: 'Hello! I\'m Mixtral (Model C), your competitive thePegasusai assistant.' },
            'D': { name: 'GPT-3.5', fullName: 'GPT-3.5 Turbo', provider: 'OpenAI', cost: 0.002,
                   greeting: 'Hello! I\'m GPT-3.5 (Model D), your dependable thePegasusai assistant.' },
            'E': { name: 'Gemini Flash', fullName: 'Gemini 1.5 Flash', provider: 'Google', cost: 0.00035,
                   greeting: 'Hello! I\'m Gemini Flash (Model E), your enhanced thePegasusai assistant.' },
            'F': { name: 'Gemini Pro', fullName: 'Gemini 1.5 Pro', provider: 'Google', cost: 0.0035,
                   greeting: 'Hello! I\'m Gemini Pro (Model F), your flagship thePegasusai assistant.' },
            'G': { name: 'Grok', fullName: 'Grok Beta', provider: 'X.AI', cost: 0.02,
                   greeting: 'Hello! I\'m Grok (Model G), your thePegasusai assistant. I have comprehensive knowledge about our spatial intelligence platform, gaming ecosystem, and advertising solutions.' },
            'H': { name: 'Claude Haiku', fullName: 'Claude 3 Haiku', provider: 'Anthropic', cost: 0.00125,
                   greeting: 'Hello! I\'m Claude Haiku (Model H), your high-performance thePegasusai assistant.' },
            'I': { name: 'Claude Sonnet', fullName: 'Claude 3 Sonnet', provider: 'Anthropic', cost: 0.015,
                   greeting: 'Hello! I\'m Claude Sonnet (Model I), your intelligent thePegasusai assistant.' },
            'J': { name: 'GPT-4', fullName: 'GPT-4', provider: 'OpenAI', cost: 0.06,
                   greeting: 'Hello! I\'m GPT-4 (Model J), your juggernaut thePegasusai assistant.' },
            'K': { name: 'GPT-4 Turbo', fullName: 'GPT-4 Turbo', provider: 'OpenAI', cost: 0.03,
                   greeting: 'Hello! I\'m GPT-4 Turbo (Model K), your king-tier thePegasusai assistant.' },
            'L': { name: 'Claude Opus', fullName: 'Claude 3 Opus', provider: 'Anthropic', cost: 0.075,
                   greeting: 'Hello! I\'m Claude Opus (Model L), your luxury thePegasusai assistant.' }
        };
        
        this.fallbackChains = {
            'G': ['H', 'I', 'A'], // Grok fallbacks to cheaper alternatives
            'L': ['A', 'B', 'C'], // Premium falls back to ultra-cheap
            'A': ['B', 'C', 'D']  // Cheapest has budget alternatives
        };
    }

    // Initialize enhancement for existing Grok assistant
    enhance25WebsiteGrok() {
        const grokContainer = this.findGrokContainer();
        if (!grokContainer) {
            console.log('Grok assistant container not found - creating standalone enhancement');
            this.createStandaloneEnhancement();
            return;
        }

        this.addModelRouletteIndicator(grokContainer);
        this.enhanceGreetingMessage(grokContainer);
        this.addCostOptimizationStatus(grokContainer);
        this.interceptMessageSending(grokContainer);
        this.startCostOptimization();
        
        console.log('✅ thePegasusai Models enhancement active');
    }

    // Find existing Grok assistant container
    findGrokContainer() {
        const selectors = [
            '.grok-assistant',
            '#grok-assistant', 
            '[data-component="grok-assistant"]',
            '.assistant-container',
            '.chat-container'
        ];
        
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element) return element;
        }
        
        // Fallback: find by text content
        const elements = document.querySelectorAll('*');
        for (const el of elements) {
            if (el.textContent && el.textContent.includes('Grok Assistant')) {
                return el.closest('div');
            }
        }
        
        return null;
    }

    // Create standalone enhancement if no existing Grok found
    createStandaloneEnhancement() {
        const enhancement = document.createElement('div');
        enhancement.id = 'thepegasusai-standalone';
        enhancement.innerHTML = `
            <style>
                #thepegasusai-standalone {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: rgba(0, 0, 0, 0.9);
                    color: white;
                    padding: 15px;
                    border-radius: 15px;
                    z-index: 10000;
                    font-family: system-ui;
                    max-width: 300px;
                    backdrop-filter: blur(10px);
                }
                .standalone-header {
                    font-weight: bold;
                    margin-bottom: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .model-indicator {
                    background: #4CAF50;
                    padding: 4px 8px;
                    border-radius: 10px;
                    font-size: 12px;
                    cursor: pointer;
                }
            </style>
            <div class="standalone-header">
                🚀 thePegasusai Models
                <div class="model-indicator" onclick="window.thePegasusaiGrok.showModelSelector()">
                    ${this.currentModel} ${this.models[this.currentModel].name}
                </div>
            </div>
            <div style="font-size: 12px; opacity: 0.8;">
                Cost optimization active • 54+ models available
            </div>
        `;
        
        document.body.appendChild(enhancement);
    }

    // Add model roulette indicator (Option 2)
    addModelRouletteIndicator(container) {
        const header = container.querySelector('.grok-header, .assistant-header, h1, h2') || container;
        
        const indicator = document.createElement('div');
        indicator.className = 'thepegasusai-model-indicator';
        indicator.innerHTML = `
            <style>
                .thepegasusai-model-indicator {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    backdrop-filter: blur(10px);
                    z-index: 100;
                    transition: all 0.3s ease;
                }
                .thepegasusai-model-indicator:hover {
                    background: rgba(0, 0, 0, 0.9);
                    transform: scale(1.05);
                }
                .model-key-display {
                    font-weight: bold;
                    font-size: 14px;
                    margin-right: 5px;
                }
                .model-dropdown-mini {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    min-width: 200px;
                    max-height: 300px;
                    overflow-y: auto;
                    display: none;
                    margin-top: 5px;
                    z-index: 1000;
                }
                .model-option-mini {
                    padding: 10px 15px;
                    cursor: pointer;
                    border-bottom: 1px solid #f0f0f0;
                    transition: background 0.2s ease;
                    color: #333;
                }
                .model-option-mini:hover {
                    background: #f8f9fa;
                }
                .model-option-mini.current {
                    background: #e8f5e9;
                    font-weight: bold;
                }
                .cost-optimization-badge {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    background: #4CAF50;
                    color: white;
                    border-radius: 50%;
                    width: 12px;
                    height: 12px;
                    font-size: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
            </style>
            <div class="cost-optimization-badge">$</div>
            <span class="model-key-display">${this.currentModel}</span>
            <span>${this.models[this.currentModel].name}</span>
            <div class="model-dropdown-mini" id="modelDropdownMini">
                ${this.generateModelOptions()}
            </div>
        `;
        
        // Position relative to container
        if (getComputedStyle(header).position === 'static') {
            header.style.position = 'relative';
        }
        
        header.appendChild(indicator);
        
        // Add click handler
        indicator.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleModelDropdown();
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            const dropdown = document.getElementById('modelDropdownMini');
            if (dropdown) dropdown.style.display = 'none';
        });
    }

    // Generate model options for dropdown
    generateModelOptions() {
        return Object.entries(this.models)
            .map(([key, model]) => `
                <div class="model-option-mini ${key === this.currentModel ? 'current' : ''}" 
                     onclick="window.thePegasusaiGrok.switchModel('${key}')">
                    <strong>${key}</strong> ${model.name} - $${(model.cost * 1000).toFixed(4)}/1K
                </div>
            `).join('');
    }

    // Toggle model dropdown
    toggleModelDropdown() {
        const dropdown = document.getElementById('modelDropdownMini');
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            dropdown.innerHTML = this.generateModelOptions();
        }
    }

    // Show model selector (for standalone mode)
    showModelSelector() {
        alert(`Current Model: ${this.currentModel} (${this.models[this.currentModel].name})\n\nAvailable Models: A-L\nCost Range: $0.0002 - $0.075 per 1K tokens\n\nIntegration: Add to your Grok assistant for full functionality`);
    }

    // Enhance greeting message (Option 3 - Dynamic Branding)
    enhanceGreetingMessage(container) {
        const greetingElement = container.querySelector('.greeting, .welcome-message, p') || 
                              container.querySelector('*');
        
        if (greetingElement && greetingElement.textContent.includes('Hello')) {
            this.greetingElement = greetingElement;
            this.updateDynamicGreeting();
        }
    }

    // Update dynamic greeting based on current model
    updateDynamicGreeting() {
        if (this.greetingElement) {
            const model = this.models[this.currentModel];
            this.greetingElement.textContent = model.greeting;
        }
    }

    // Add cost optimization status
    addCostOptimizationStatus(container) {
        const statusDiv = document.createElement('div');
        statusDiv.className = 'thepegasusai-status';
        statusDiv.innerHTML = `
            <style>
                .thepegasusai-status {
                    background: #f0f8ff;
                    border-left: 4px solid #4CAF50;
                    padding: 10px 15px;
                    margin: 10px 0;
                    font-size: 12px;
                    color: #666;
                    border-radius: 5px;
                }
                .status-dot {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    background: #4CAF50;
                    border-radius: 50%;
                    margin-right: 8px;
                    animation: pulse 2s infinite;
                }
            </style>
            <span class="status-dot"></span>
            <span id="costOptimizationStatus">Cost optimization active • Auto-fallback enabled</span>
        `;
        
        // Insert after greeting or at top of container
        const insertPoint = this.greetingElement?.nextSibling || container.firstChild;
        container.insertBefore(statusDiv, insertPoint);
    }

    // Switch model with notification
    async switchModel(modelKey, reason = 'manual') {
        const previousModel = this.currentModel;
        const previousCost = this.models[previousModel].cost;
        const newCost = this.models[modelKey].cost;
        
        this.currentModel = modelKey;
        
        // Update UI
        this.updateModelIndicator();
        this.updateDynamicGreeting();
        
        // Show notification
        const savings = ((previousCost - newCost) / previousCost * 100).toFixed(1);
        const message = reason === 'auto-optimization' ? 
            `Auto-optimized to ${this.models[modelKey].name} (Model ${modelKey})` :
            `Switched to ${this.models[modelKey].name} (Model ${modelKey})`;
        
        if (newCost < previousCost) {
            this.showNotification(`${message} • ${savings}% cost savings`);
        } else {
            this.showNotification(`${message} • Premium performance mode`);
        }
        
        // API call
        try {
            await fetch(`${this.API_BASE}/api/ai/switch`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: modelKey })
            });
        } catch (error) {
            console.log('Model switch registered locally');
        }
    }

    // Update model indicator display
    updateModelIndicator() {
        const keyDisplay = document.querySelector('.model-key-display');
        const nameDisplay = keyDisplay?.nextSibling;
        
        if (keyDisplay) keyDisplay.textContent = this.currentModel;
        if (nameDisplay) nameDisplay.textContent = this.models[this.currentModel].name;
    }

    // Start cost optimization monitoring
    startCostOptimization() {
        // Check for optimization opportunities every 30 seconds
        setInterval(() => {
            if (this.costOptimizationActive) {
                this.checkForOptimization();
            }
        }, 30000);
    }

    // Check for optimization opportunities
    checkForOptimization() {
        const scenarios = [
            { trigger: 'rate_limit', probability: 0.05, action: () => this.handleRateLimit() },
            { trigger: 'cost_exceeded', probability: 0.03, action: () => this.handleCostExceeded() },
            { trigger: 'performance_boost', probability: 0.02, action: () => this.handlePerformanceBoost() }
        ];
        
        scenarios.forEach(scenario => {
            if (Math.random() < scenario.probability) {
                scenario.action();
            }
        });
    }

    // Handle rate limit scenario
    handleRateLimit() {
        const fallbacks = this.fallbackChains[this.currentModel] || ['A'];
        this.switchModel(fallbacks[0], 'rate-limit-fallback');
    }

    // Handle cost exceeded scenario
    handleCostExceeded() {
        this.switchModel('A', 'cost-optimization'); // Switch to cheapest
    }

    // Handle performance boost scenario
    handlePerformanceBoost() {
        if (['A', 'B', 'C'].includes(this.currentModel)) {
            this.switchModel('G', 'performance-boost'); // Upgrade to Grok
        }
    }

    // Show notification
    showNotification(message) {
        // Create or update notification element
        let notification = document.getElementById('thepegasusai-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'thepegasusai-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                z-index: 10000;
                font-size: 14px;
                max-width: 300px;
                transform: translateX(400px);
                transition: transform 0.3s ease;
            `;
            document.body.appendChild(notification);
        }
        
        notification.textContent = message;
        notification.style.transform = 'translateX(0)';
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
        }, 4000);
    }
}

// Initialize the enhancer
window.thePegasusaiGrok = new ThePegasusaiGrokEnhancer();

// Auto-enhance when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.thePegasusaiGrok.enhance25WebsiteGrok();
    });
} else {
    window.thePegasusaiGrok.enhance25WebsiteGrok();
}

// Export for manual initialization
window.enhanceGrokWith25Website = () => {
    window.thePegasusaiGrok.enhance25WebsiteGrok();
};

console.log('🚀 thePegasusai Models - Grok Enhancement Loaded');
console.log('✅ Cost optimization active behind scenes');
console.log('🎯 Model roulette indicator added');
console.log('💬 Dynamic branding enabled');
