---
layout: page
title: "Quick Start Guide"
permalink: /implementation/quick-start/
---

# 🚀 5-Minute Ethical AI Setup

Get your development environment configured for ethical AI assistance in just a few steps.

## Step 1: Choose Your Platform

<div class="platform-selector">
  <button class="platform-btn" onclick="showPlatform('vscode')">VSCode</button>
  <button class="platform-btn" onclick="showPlatform('jetbrains')">JetBrains</button>
  <button class="platform-btn" onclick="showPlatform('neovim')">Neovim</button>
  <button class="platform-btn" onclick="showPlatform('visual-studio')">Visual Studio</button>
</div>

<div id="vscode" class="platform-config" style="display: none;">
  <h3>VSCode Configuration</h3>
  
  <p><strong>1. Install GitHub Copilot Extension</strong></p>
  <pre><code># Install via command palette
Ctrl+Shift+P > Extensions: Install Extensions > "GitHub Copilot"</code></pre>
  
  <p><strong>2. Add Ethical Settings</strong></p>
  <p>Copy this configuration to your <code>settings.json</code>:</p>
  
  <pre><code class="language-json">{
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "json": false,
    "env": false
  },
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.acceptSuggestionOnEnter": "off"
}</code></pre>
  
  <p><strong>3. Download Complete Configuration</strong></p>
  <a href="/assets/downloads/vscode-ethical-config.zip" class="download-btn">📦 Download VSCode Package</a>
</div>

<div id="jetbrains" class="platform-config" style="display: none;">
  <h3>JetBrains Configuration</h3>
  
  <p><strong>1. Install GitHub Copilot Plugin</strong></p>
  <pre><code>File > Settings > Plugins > Browse repositories > "GitHub Copilot"</code></pre>
  
  <p><strong>2. Configure Ethical Boundaries</strong></p>
  <pre><code class="language-xml">&lt;component name="CopilotSettings"&gt;
  &lt;option name="enabledLanguages"&gt;
    &lt;map&gt;
      &lt;entry key="Python" value="true" /&gt;
      &lt;entry key="Java" value="true" /&gt;
      &lt;entry key="YAML" value="false" /&gt;
      &lt;entry key="Properties" value="false" /&gt;
    &lt;/map&gt;
  &lt;/option&gt;
&lt;/component&gt;</code></pre>
  
  <a href="/assets/downloads/jetbrains-ethical-config.zip" class="download-btn">📦 Download JetBrains Package</a>
</div>

<div id="neovim" class="platform-config" style="display: none;">
  <h3>Neovim Configuration</h3>
  
  <p><strong>1. Install Copilot Plugin</strong></p>
  <pre><code class="language-lua">-- Using packer.nvim
use {
  "github/copilot.vim",
  config = function()
    -- Ethical configuration
    vim.g.copilot_filetypes = {
      yaml = false,
      markdown = true,
      help = false,
      gitcommit = false,
      gitrebase = false,
    }
  end
}</code></pre>
  
  <a href="/assets/downloads/neovim-ethical-config.zip" class="download-btn">📦 Download Neovim Package</a>
</div>

<div id="visual-studio" class="platform-config" style="display: none;">
  <h3>Visual Studio Configuration</h3>
  
  <p><strong>1. Install GitHub Copilot Extension</strong></p>
  <p>Extensions > Manage Extensions > Search "GitHub Copilot"</p>
  
  <p><strong>2. Configure Ethical Settings</strong></p>
  <ul>
    <li>Tools > Options > GitHub Copilot</li>
    <li>Max suggestions: 3</li>
    <li>Delay: 250ms</li>
    <li>Disable for config files</li>
  </ul>
  
  <a href="/assets/downloads/visual-studio-ethical-config.zip" class="download-btn">📦 Download VS Package</a>
</div>

## Step 2: Set Up Dual Signatures

### Create Personal Ethics File

Create `~/.copilot/ethical_guidelines.md`:

```markdown
# Personal AI Ethics Pledge

I commit to the Euystacio-Helmi AI covenant:

- ✅ AI assists; I decide and review all suggestions
- ✅ All AI help is documented and attributed  
- ✅ I respect Red Code boundaries
- ❌ No AI assistance with secrets, credentials, or PII
- ❌ No bias amplification or discriminatory code

**Signature:** [Your Name] <your.email@domain.com>
**Date:** {{ site.euystacio.date }}
```

### Configure Git Templates

```bash
# Set up commit template
git config --global commit.template ~/.gitmessage

# Create the template
cat > ~/.gitmessage << 'EOF'
[AI-assisted] Brief description

- AI Provider(s): GitHub Copilot / ChatGPT
- Human Guardian: [Your Name] <your.email>  
- Ethics Check: [privacy/security/accessibility notes]

Dual Signature:
- AI: [AI system used]
- Human: [Your Name] <your.email>
EOF
```

## Step 3: Verify Your Setup

### ✅ Configuration Checklist

- [ ] AI assistant installed and configured
- [ ] Sensitive files (.env, .secret) blocked from AI
- [ ] Personal ethics pledge created
- [ ] Commit template configured
- [ ] Test AI suggestion and manual review process

### 🧪 Test Your Configuration

1. **Create a test file** with some code
2. **Request AI suggestion** using your platform's method
3. **Verify suggestions appear** but require manual acceptance
4. **Check sensitive files** are blocked (try editing a .env file)
5. **Make a commit** using the dual signature template

## Step 4: Join the Community

### Download Full Bundle

Get the complete ethical configuration package:

<a href="https://github.com/hannesmitterer/euystacio_ethics/archive/refs/heads/main.zip" class="download-btn large">📦 Download Complete Bundle</a>

### Organizational Adoption

If you're setting up for a team or organization:

- [📋 Copilot Policy Template](/governance/policies/)
- [🔍 PR Review Templates](/governance/templates/) 
- [📊 Compliance Monitoring](/governance/compliance/)

---

## Need Help?

- 💬 [Community Discussions](https://github.com/hannesmitterer/euystacio_ethics/discussions)
- 🐛 [Report Issues](https://github.com/hannesmitterer/euystacio_ethics/issues)
- 📖 [Full Documentation](/philosophy/)

<style>
.platform-selector {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.platform-btn {
  background: #0366d6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.platform-btn:hover, .platform-btn.active {
  background: #0256cc;
}

.platform-config {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
}

.download-btn {
  display: inline-block;
  background: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  margin: 1rem 0;
}

.download-btn.large {
  font-size: 1.2rem;
  padding: 1rem 2rem;
}

.download-btn:hover {
  background: #1e7e34;
  text-decoration: none;
}

pre {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
}

code {
  background: #f6f8fa;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9rem;
}
</style>

<script>
function showPlatform(platform) {
  // Hide all platform configs
  var configs = document.querySelectorAll('.platform-config');
  configs.forEach(function(config) {
    config.style.display = 'none';
  });
  
  // Remove active class from all buttons
  var buttons = document.querySelectorAll('.platform-btn');
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });
  
  // Show selected platform
  document.getElementById(platform).style.display = 'block';
  
  // Add active class to clicked button
  event.target.classList.add('active');
}

// Show VSCode by default
document.addEventListener('DOMContentLoaded', function() {
  showPlatform('vscode');
  document.querySelector('.platform-btn').classList.add('active');
});
</script>