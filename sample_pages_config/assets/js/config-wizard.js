/**
 * Euystacio-Helmi AI Configuration Wizard
 * Interactive setup guide for ethical AI development
 */

class EthicalConfigWizard {
    constructor() {
        this.userConfig = {
            platform: null,
            name: '',
            email: '',
            preferences: {}
        };
        this.init();
    }

    init() {
        this.detectPlatform();
        this.setupEventListeners();
        this.loadUserPreferences();
    }

    detectPlatform() {
        const userAgent = navigator.userAgent;
        
        // Attempt to detect common development environments
        if (userAgent.includes('VSCode') || localStorage.getItem('vscode-detected')) {
            this.suggestPlatform('vscode');
        } else if (userAgent.includes('IntelliJ') || localStorage.getItem('jetbrains-detected')) {
            this.suggestPlatform('jetbrains');
        } else {
            this.suggestPlatform('vscode'); // Default to VSCode
        }
    }

    suggestPlatform(platform) {
        const suggestion = document.getElementById('platform-suggestion');
        if (suggestion) {
            suggestion.innerHTML = `
                <div class="platform-suggestion">
                    <p>🤖 We detected you might be using <strong>${this.getPlatformName(platform)}</strong></p>
                    <button onclick="wizard.selectPlatform('${platform}')" class="btn btn-primary">
                        Configure for ${this.getPlatformName(platform)}
                    </button>
                </div>
            `;
        }
    }

    getPlatformName(platform) {
        const names = {
            'vscode': 'Visual Studio Code',
            'jetbrains': 'JetBrains IDEs',
            'neovim': 'Neovim',
            'visual-studio': 'Visual Studio'
        };
        return names[platform] || platform;
    }

    selectPlatform(platform) {
        this.userConfig.platform = platform;
        this.showStep('personal-info');
        this.updateProgress(25);
    }

    showStep(stepId) {
        // Hide all steps
        document.querySelectorAll('.wizard-step').forEach(step => {
            step.style.display = 'none';
        });
        
        // Show selected step
        const step = document.getElementById(stepId);
        if (step) {
            step.style.display = 'block';
        }
    }

    updateProgress(percentage) {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
            progressBar.setAttribute('aria-valuenow', percentage);
        }
    }

    generateConfiguration() {
        const config = this.buildConfiguration();
        this.displayConfiguration(config);
        this.showStep('download');
        this.updateProgress(100);
    }

    buildConfiguration() {
        const { platform, name, email, preferences } = this.userConfig;
        
        let config = {
            platform: platform,
            files: {},
            instructions: []
        };

        switch (platform) {
            case 'vscode':
                config.files['settings.json'] = this.generateVSCodeSettings();
                config.files['keybindings.json'] = this.generateVSCodeKeybindings();
                config.instructions.push('Install GitHub Copilot extension');
                config.instructions.push('Copy settings.json to .vscode/ folder');
                config.instructions.push('Restart VSCode');
                break;
                
            case 'jetbrains':
                config.files['CopilotSettings.xml'] = this.generateJetBrainsSettings();
                config.instructions.push('Install GitHub Copilot plugin');
                config.instructions.push('Import CopilotSettings.xml');
                config.instructions.push('Restart IDE');
                break;
                
            case 'neovim':
                config.files['init.lua'] = this.generateNeovimConfig();
                config.instructions.push('Install copilot.vim plugin');
                config.instructions.push('Add configuration to init.lua');
                config.instructions.push('Restart Neovim');
                break;
                
            case 'visual-studio':
                config.instructions.push('Install GitHub Copilot extension');
                config.instructions.push('Configure settings in Tools > Options');
                config.instructions.push('Apply ethical boundaries');
                break;
        }

        // Add universal files
        config.files['.copilot-ethical-guidelines.md'] = this.generateEthicalGuidelines();
        config.files['.gitmessage'] = this.generateGitTemplate();
        
        return config;
    }

    generateVSCodeSettings() {
        return JSON.stringify({
            "github.copilot.enable": {
                "*": true,
                "yaml": false,
                "plaintext": false,
                "json": false,
                "env": false,
                "properties": false
            },
            "editor.inlineSuggest.enabled": true,
            "github.copilot.advanced": {
                "listCount": 3,
                "inlineSuggestCount": 3
            },
            "editor.acceptSuggestionOnCommitCharacter": false,
            "editor.acceptSuggestionOnEnter": "off",
            "github.copilot.editor.enableCodeActions": true,
            "files.associations": {
                ".copilot-instructions": "markdown",
                ".ethical-guidelines": "markdown"
            }
        }, null, 2);
    }

    generateVSCodeKeybindings() {
        return JSON.stringify([
            {
                "key": "ctrl+shift+a",
                "command": "github.copilot.generate",
                "when": "editorTextFocus && !editorReadonly"
            },
            {
                "key": "ctrl+shift+e",
                "command": "github.copilot.explain"
            },
            {
                "key": "alt+\\",
                "command": "editor.action.inlineSuggest.trigger"
            }
        ], null, 2);
    }

    generateJetBrainsSettings() {
        return `<component name="CopilotSettings">
  <option name="enabledLanguages">
    <map>
      <entry key="Python" value="true" />
      <entry key="Java" value="true" />
      <entry key="JavaScript" value="true" />
      <entry key="TypeScript" value="true" />
      <entry key="YAML" value="false" />
      <entry key="Properties" value="false" />
    </map>
  </option>
</component>`;
    }

    generateNeovimConfig() {
        return `-- Euystacio-Helmi AI Ethical Configuration for Neovim
vim.g.copilot_filetypes = {
  yaml = false,
  markdown = true,
  help = false,
  gitcommit = false,
  gitrebase = false,
  ['*'] = true
}

-- Ethical keybindings
vim.keymap.set('i', '<C-J>', 'copilot#Accept("\\<CR>")', {
  expr = true,
  replace_keycodes = false
})
vim.keymap.set('i', '<C-L>', '<Plug>(copilot-accept-line)')`;
    }

    generateEthicalGuidelines() {
        const { name, email } = this.userConfig;
        return `# Personal AI Ethics Pledge

I commit to the Euystacio-Helmi AI covenant:

## Core Commitments
- ✅ AI assists; I decide and review all suggestions
- ✅ All AI help is documented and attributed  
- ✅ I respect Red Code boundaries
- ❌ No AI assistance with secrets, credentials, or PII
- ❌ No bias amplification or discriminatory code

## Red Code Boundaries
- No assistance with authentication secrets
- No processing of personal data without consent  
- No generation of harmful or discriminatory content
- No autonomous decision-making in critical areas

## Dual Signature Commitment
Every AI-assisted change will include:
- AI Provider identification
- Human review and approval
- Ethical validation checklist
- Proper attribution in commits

**Human Guardian:** ${name || '[Your Name]'} <${email || 'your.email@domain.com'}>
**Date:** ${new Date().toISOString().split('T')[0]}
**Framework Version:** Comprehensive v0.2
`;
    }

    generateGitTemplate() {
        const { name, email } = this.userConfig;
        return `[AI-assisted] Brief description

- AI Provider(s): GitHub Copilot / ChatGPT
- Human Guardian: ${name || '[Your Name]'} <${email || 'your.email@domain.com'}>
- Ethics Check: [privacy/security/accessibility notes]
- Tests: [added/updated]

Dual Signature:
- AI: [AI system used]
- Human: ${name || '[Your Name]'} <${email || 'your.email@domain.com'}>
- Date: ${new Date().toISOString().split('T')[0]}
`;
    }

    displayConfiguration(config) {
        const container = document.getElementById('generated-config');
        if (!container) return;

        let html = '<div class="configuration-result">';
        html += '<h3>🎉 Your Ethical AI Configuration</h3>';
        
        // Platform-specific instructions
        html += '<div class="instructions">';
        html += '<h4>Setup Instructions</h4>';
        html += '<ol>';
        config.instructions.forEach(instruction => {
            html += `<li>${instruction}</li>`;
        });
        html += '</ol>';
        html += '</div>';

        // Generated files
        html += '<div class="config-files">';
        Object.entries(config.files).forEach(([filename, content]) => {
            html += `<div class="config-file">`;
            html += `<h5>${filename}</h5>`;
            html += `<pre><code>${this.escapeHtml(content)}</code></pre>`;
            html += `<button onclick="wizard.downloadFile('${filename}', \`${content.replace(/`/g, '\\`')}\`)" class="btn btn-sm">
                📥 Download
            </button>`;
            html += `</div>`;
        });
        html += '</div>';

        html += '</div>';
        container.innerHTML = html;
    }

    downloadFile(filename, content) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    downloadAllFiles() {
        const config = this.buildConfiguration();
        
        // Create a zip-like structure (simplified for demo)
        let allContent = '# Euystacio-Helmi AI Configuration Package\n\n';
        allContent += `Generated on: ${new Date().toISOString()}\n`;
        allContent += `Platform: ${this.getPlatformName(this.userConfig.platform)}\n\n`;
        
        Object.entries(config.files).forEach(([filename, content]) => {
            allContent += `## ${filename}\n\n`;
            allContent += '```\n' + content + '\n```\n\n';
        });

        this.downloadFile('euystacio-ethical-config.txt', allContent);
    }

    setupEventListeners() {
        // Form submission handlers
        const personalForm = document.getElementById('personal-info-form');
        if (personalForm) {
            personalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.userConfig.name = document.getElementById('user-name').value;
                this.userConfig.email = document.getElementById('user-email').value;
                this.showStep('preferences');
                this.updateProgress(50);
            });
        }

        const preferencesForm = document.getElementById('preferences-form');
        if (preferencesForm) {
            preferencesForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.collectPreferences();
                this.showStep('generation');
                this.updateProgress(75);
                setTimeout(() => this.generateConfiguration(), 1000);
            });
        }
    }

    collectPreferences() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            this.userConfig.preferences[checkbox.name] = checkbox.value;
        });
    }

    loadUserPreferences() {
        // Load saved preferences from localStorage
        const saved = localStorage.getItem('euystacio-config');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.userConfig = { ...this.userConfig, ...data };
            } catch (e) {
                console.log('Could not load saved preferences');
            }
        }
    }

    saveUserPreferences() {
        localStorage.setItem('euystacio-config', JSON.stringify(this.userConfig));
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the wizard when the page loads
let wizard;
document.addEventListener('DOMContentLoaded', function() {
    wizard = new EthicalConfigWizard();
});

/**
 * Dual Signature:
 * - AI: GitHub Copilot (JavaScript configuration wizard generation)
 * - Human: [Requires validation per ethical framework]
 * - Date: 2025-08-25
 */