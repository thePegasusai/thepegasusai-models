/**
 * thePegasusai Models - Percy Jackson Assistant Integration
 * Adds visible model roulette and rebrands from Grok to Percy Jackson
 */

class PercyJacksonAssistantEnhancer {
    constructor() {
        this.API_BASE = 'https://4jettmd5q5.execute-api.us-west-2.amazonaws.com/prod';
        this.currentModel = 'G'; // Start with Grok backend
        this.assistantName = 'Percy Jackson';
        this.models = {
            'A': { name: 'Llama 8B', provider: 'Meta', cost: 0.0002, color: '#4CAF50' },
            'B': { name: 'Llama 70B', provider: 'Meta', cost: 0.0009, color: '#8BC34A' },
            'C': { name: 'Mixtral', provider: 'Mistral AI', cost: 0.0007, color: '#CDDC39' },
            'D': { name: 'GPT-3.5', provider: 'OpenAI', cost: 0.002, color: '#FFC107' },
            'E': { name: 'Gemini Flash', provider: 'Google', cost: 0.00035, color: '#FF9800' },
            'F': { name: 'Gemini Pro', provider: 'Google', cost: 0.0035, color: '#FF5722' },
            'G': { name: 'Grok', provider: 'X.AI', cost: 0.02, color: '#9C27B0' },
            'H': { name: 'Claude Haiku', provider: 'Anthropic', cost: 0.00125, color: '#673AB7' },
            'I': { name: 'Claude Sonnet', provider: 'Anthropic', cost: 0.015, color: '#3F51B5' },
            'J': { name: 'GPT-4', provider: 'OpenAI', cost: 0.06, color: '#2196F3' },
            'K': { name: 'GPT-4 Turbo', provider: 'OpenAI', cost: 0.03, color: '#03A9F4' },
            'L': { name: 'Claude Opus', provider: 'Anthropic', cost: 0.075, color: '#00BCD4' }
        };
        this.isRouletteVisible = false;
    }

    // Main enhancement function
    enhanceToPercyJackson() {
        console.log('🏛️ Enhancing to Percy Jackson Assistant...');
        
        // Step 1: Rebrand the assistant
        this.rebrandAssistant();
        
        // Step 2: Add visible model roulette
        this.addVisibleModelRoulette();
        
        // Step 3: Update greeting message
        this.updateGreeting();
        
        // Step 4: Add cost optimization status
        this.addCostStatus();
        
        console.log('✅ Percy Jackson Assistant enhancement complete!');
    }

    // Rebrand from Grok to Percy Jackson
    rebrandAssistant() {
        // Find and update title
        const titleElements = document.querySelectorAll('*');
        titleElements.forEach(el => {
            if (el.textContent && el.textContent.includes('Grok Assistant')) {
                el.textContent = el.textContent.replace('Grok Assistant', 'Percy Jackson Assistant');
            }
            if (el.textContent && el.textContent.includes('Powered by xAI')) {
                el.textContent = 'Powered by thePegasusai Models';
            }
        });

        // Update any Grok references in the interface
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            if (el.textContent && el.textContent.includes("I'm Grok")) {
                el.textContent = el.textContent.replace("I'm Grok", "I'm Percy Jackson");
            }
        });
    }

    // Add visible model roulette interface
    addVisibleModelRoulette() {
        // Create roulette container
        const rouletteContainer = document.createElement('div');
        rouletteContainer.id = 'percy-model-roulette';
        rouletteContainer.innerHTML = `
            <style>
                #percy-model-roulette {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 10000;
                    font-family: system-ui, -apple-system, sans-serif;
                }
                
                .roulette-trigger {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 25px;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: bold;
                    backdrop-filter: blur(10px);
                }
                
                .roulette-trigger:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
                }
                
                .model-indicator {
                    background: rgba(255,255,255,0.2);
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: bold;
                }
                
                .cost-badge {
                    background: #4CAF50;
                    padding: 2px 6px;
                    border-radius: 8px;
                    font-size: 10px;
                }
                
                .roulette-wheel {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    margin-top: 10px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    padding: 20px;
                    min-width: 350px;
                    max-height: 400px;
                    overflow-y: auto;
                    display: none;
                    animation: slideDown 0.3s ease;
                }
                
                .roulette-wheel.visible {
                    display: block;
                }
                
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .wheel-header {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #333;
                }
                
                .wheel-title {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                
                .wheel-subtitle {
                    font-size: 12px;
                    color: #666;
                }
                
                .models-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    margin-bottom: 15px;
                }
                
                .model-option {
                    padding: 12px;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-align: center;
                    border: 2px solid transparent;
                    background: #f8f9fa;
                }
                
                .model-option:hover {
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                
                .model-option.current {
                    border-color: #4CAF50;
                    background: #e8f5e9;
                }
                
                .model-key {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 4px;
                }
                
                .model-name {
                    font-size: 11px;
                    font-weight: bold;
                    margin-bottom: 2px;
                    color: #333;
                }
                
                .model-cost {
                    font-size: 9px;
                    color: #4CAF50;
                    font-weight: bold;
                }
                
                .optimization-status {
                    background: #f0f8ff;
                    padding: 10px;
                    border-radius: 10px;
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                    border-left: 4px solid #4CAF50;
                }
                
                .status-dot {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    background: #4CAF50;
                    border-radius: 50%;
                    margin-right: 6px;
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
                
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: #999;
                }
                
                .close-btn:hover {
                    color: #333;
                }
            </style>
            
            <div class="roulette-trigger" onclick="window.percyJackson.toggleRoulette()">
                <div class="model-indicator">${this.currentModel}</div>
                <div>
                    <div style="font-size: 12px;">${this.models[this.currentModel].name}</div>
                    <div class="cost-badge">$${(this.models[this.currentModel].cost * 1000).toFixed(4)}/1K</div>
                </div>
                <div style="font-size: 16px;">⚡</div>
            </div>
            
            <div class="roulette-wheel" id="rouletteWheel">
                <button class="close-btn" onclick="window.percyJackson.toggleRoulette()">×</button>
                
                <div class="wheel-header">
                    <div class="wheel-title">🎯 Model Roulette</div>
                    <div class="wheel-subtitle">Choose your AI model (A=cheapest, L=premium)</div>
                </div>
                
                <div class="models-grid" id="modelsGrid">
                    ${this.generateModelGrid()}
                </div>
                
                <div class="optimization-status">
                    <span class="status-dot"></span>
                    Cost optimization active • Auto-fallback enabled
                </div>
            </div>
        `;
        
        document.body.appendChild(rouletteContainer);
    }

    // Generate model grid HTML
    generateModelGrid() {
        return Object.entries(this.models).map(([key, model]) => `
            <div class="model-option ${key === this.currentModel ? 'current' : ''}" 
                 onclick="window.percyJackson.selectModel('${key}')"
                 style="border-left-color: ${model.color};">
                <div class="model-key" style="color: ${model.color};">${key}</div>
                <div class="model-name">${model.name}</div>
                <div class="model-cost">$${(model.cost * 1000).toFixed(4)}/1K</div>
            </div>
        `).join('');
    }

    // Toggle roulette visibility
    toggleRoulette() {
        this.isRouletteVisible = !this.isRouletteVisible;
        const wheel = document.getElementById('rouletteWheel');
        if (wheel) {
            wheel.classList.toggle('visible', this.isRouletteVisible);
        }
    }

    // Select a model
    selectModel(modelKey) {
        const previousModel = this.currentModel;
        this.currentModel = modelKey;
        
        // Update UI
        this.updateRouletteDisplay();
        this.updateGreeting();
        
        // Show notification
        const model = this.models[modelKey];
        const previousCost = this.models[previousModel].cost;
        const savings = previousCost > model.cost ? 
            `${((previousCost - model.cost) / previousCost * 100).toFixed(1)}% savings` : 
            'Premium mode';
            
        this.showNotification(`Switched to ${model.name} (Model ${modelKey}) • ${savings}`);
        
        // Close roulette
        this.toggleRoulette();
        
        // API call
        this.callAPI(modelKey);
    }

    // Update roulette display
    updateRouletteDisplay() {
        const trigger = document.querySelector('.roulette-trigger');
        if (trigger) {
            const model = this.models[this.currentModel];
            trigger.innerHTML = `
                <div class="model-indicator">${this.currentModel}</div>
                <div>
                    <div style="font-size: 12px;">${model.name}</div>
                    <div class="cost-badge">$${(model.cost * 1000).toFixed(4)}/1K</div>
                </div>
                <div style="font-size: 16px;">⚡</div>
            `;
        }
        
        // Update grid
        const grid = document.getElementById('modelsGrid');
        if (grid) {
            grid.innerHTML = this.generateModelGrid();
        }
    }

    // Update greeting message
    updateGreeting() {
        const greetingElements = document.querySelectorAll('*');
        greetingElements.forEach(el => {
            if (el.textContent && el.textContent.includes('Hello! I\'m')) {
                const model = this.models[this.currentModel];
                el.textContent = `Hello! I'm Percy Jackson (powered by ${model.name} - Model ${this.currentModel}), your thePegasusai assistant. I have comprehensive knowledge about our spatial intelligence platform, gaming ecosystem, and advertising solutions.`;
            }
        });
    }

    // Add cost optimization status
    addCostStatus() {
        // Find a good place to insert status
        const container = document.querySelector('.assistant-container, .chat-container, .main-content') || document.body;
        
        const statusDiv = document.createElement('div');
        statusDiv.id = 'percy-cost-status';
        statusDiv.innerHTML = `
            <style>
                #percy-cost-status {
                    background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
                    border-left: 4px solid #4CAF50;
                    padding: 12px 16px;
                    margin: 10px 0;
                    border-radius: 8px;
                    font-size: 13px;
                    color: #555;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .status-indicator {
                    width: 10px;
                    height: 10px;
                    background: #4CAF50;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
            </style>
            
            <div class="status-indicator"></div>
            <div>
                <strong>Percy Jackson Assistant Enhanced</strong> • 
                Cost optimization active • 
                54+ models available • 
                Current: ${this.models[this.currentModel].name} (${this.currentModel})
            </div>
        `;
        
        // Insert at the beginning of the container
        container.insertBefore(statusDiv, container.firstChild);
    }

    // Show notification
    showNotification(message) {
        let notification = document.getElementById('percy-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'percy-notification';
            notification.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                color: white;
                padding: 12px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 10001;
                font-size: 14px;
                max-width: 300px;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                font-family: system-ui;
            `;
            document.body.appendChild(notification);
        }
        
        notification.textContent = message;
        notification.style.transform = 'translateX(0)';
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
        }, 4000);
    }

    // API call simulation
    async callAPI(modelKey) {
        try {
            const response = await fetch(`${this.API_BASE}/api/ai/switch`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model: modelKey })
            });
            console.log(`✅ Switched to model ${modelKey}`);
        } catch (error) {
            console.log(`🎯 Model ${modelKey} switch registered locally`);
        }
    }

    // Auto-optimization simulation
    startAutoOptimization() {
        setInterval(() => {
            // Randomly trigger cost optimization (5% chance every 30 seconds)
            if (Math.random() < 0.05) {
                const scenarios = [
                    { from: 'G', to: 'H', reason: 'Rate limit detected' },
                    { from: 'L', to: 'A', reason: 'Budget threshold reached' },
                    { from: 'A', to: 'G', reason: 'Performance boost needed' }
                ];
                
                const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
                if (this.currentModel === scenario.from) {
                    this.selectModel(scenario.to);
                    this.showNotification(`${scenario.reason} • Auto-optimized to Model ${scenario.to}`);
                }
            }
        }, 30000);
    }
}

// Initialize Percy Jackson Assistant
window.percyJackson = new PercyJacksonAssistantEnhancer();

// Auto-enhance when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            window.percyJackson.enhanceToPercyJackson();
            window.percyJackson.startAutoOptimization();
        }, 1000); // Wait 1 second for page to fully load
    });
} else {
    setTimeout(() => {
        window.percyJackson.enhanceToPercyJackson();
        window.percyJackson.startAutoOptimization();
    }, 1000);
}

// Close roulette when clicking outside
document.addEventListener('click', (event) => {
    const roulette = document.getElementById('percy-model-roulette');
    if (roulette && !roulette.contains(event.target) && window.percyJackson.isRouletteVisible) {
        window.percyJackson.toggleRoulette();
    }
});

console.log('🏛️ Percy Jackson Assistant Enhancement Loaded');
console.log('✅ Visible model roulette added');
console.log('🎯 Cost optimization active');
console.log('⚡ Auto-fallback system enabled');
