---
layout: page
title: "Interactive Configuration Wizard"
permalink: /wizard/
---

# 🧙‍♂️ Ethical AI Configuration Wizard

Get your personalized ethical AI setup in just a few steps!

<div class="wizard-container">
  <div class="progress-container">
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <p class="progress-text">Let's get started with your ethical AI journey!</p>
  </div>

  <!-- Platform Detection -->
  <div id="platform-suggestion" class="suggestion-area"></div>

  <!-- Step 1: Platform Selection -->
  <div id="platform-selection" class="wizard-step">
    <h2>🎯 Choose Your Development Platform</h2>
    <p>Select your primary development environment for ethical AI configuration:</p>
    
    <div class="platform-grid">
      <div class="platform-option" onclick="wizard.selectPlatform('vscode')">
        <div class="platform-icon">🆚</div>
        <h3>Visual Studio Code</h3>
        <p>Most popular code editor with excellent Copilot support</p>
        <ul class="feature-list">
          <li>✅ Rich extension ecosystem</li>
          <li>✅ Built-in Git integration</li>
          <li>✅ Customizable ethical boundaries</li>
        </ul>
      </div>
      
      <div class="platform-option" onclick="wizard.selectPlatform('jetbrains')">
        <div class="platform-icon">🧠</div>
        <h3>JetBrains IDEs</h3>
        <p>Professional IDEs including IntelliJ, PyCharm, WebStorm</p>
        <ul class="feature-list">
          <li>✅ Advanced code analysis</li>
          <li>✅ Integrated debugging</li>
          <li>✅ Enterprise-grade features</li>
        </ul>
      </div>
      
      <div class="platform-option" onclick="wizard.selectPlatform('neovim')">
        <div class="platform-icon">⚡</div>
        <h3>Neovim</h3>
        <p>Modern terminal-based editor for power users</p>
        <ul class="feature-list">
          <li>✅ Lightning fast performance</li>
          <li>✅ Highly customizable</li>
          <li>✅ Terminal-native workflow</li>
        </ul>
      </div>
      
      <div class="platform-option" onclick="wizard.selectPlatform('visual-studio')">
        <div class="platform-icon">🏢</div>
        <h3>Visual Studio</h3>
        <p>Full-featured IDE for Windows development</p>
        <ul class="feature-list">
          <li>✅ Complete development suite</li>
          <li>✅ Enterprise integration</li>
          <li>✅ Advanced debugging tools</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Step 2: Personal Information -->
  <div id="personal-info" class="wizard-step" style="display: none;">
    <h2>👤 Personal Information</h2>
    <p>Help us personalize your ethical configuration:</p>
    
    <form id="personal-info-form" class="wizard-form">
      <div class="form-group">
        <label for="user-name">Full Name *</label>
        <input type="text" id="user-name" name="name" required placeholder="e.g., Jane Developer">
        <small>Used in dual signatures and ethical pledges</small>
      </div>
      
      <div class="form-group">
        <label for="user-email">Email Address *</label>
        <input type="email" id="user-email" name="email" required placeholder="jane@example.com">
        <small>For accountability in commit signatures</small>
      </div>
      
      <div class="form-group">
        <label for="user-role">Role (Optional)</label>
        <select id="user-role" name="role">
          <option value="">Select your role</option>
          <option value="individual">Individual Developer</option>
          <option value="team-lead">Team Lead</option>
          <option value="architect">Software Architect</option>
          <option value="manager">Engineering Manager</option>
          <option value="student">Student</option>
          <option value="researcher">Researcher</option>
        </select>
      </div>
      
      <button type="submit" class="btn btn-primary">Continue →</button>
    </form>
  </div>

  <!-- Step 3: Ethical Preferences -->
  <div id="preferences" class="wizard-step" style="display: none;">
    <h2>⚖️ Ethical Preferences</h2>
    <p>Customize your ethical AI boundaries:</p>
    
    <form id="preferences-form" class="wizard-form">
      <div class="preference-section">
        <h3>🛡️ Red Code Boundaries</h3>
        <p>Select areas where AI assistance should be restricted:</p>
        
        <div class="checkbox-group">
          <label class="checkbox-item">
            <input type="checkbox" name="no-secrets" value="true" checked disabled>
            <span class="checkmark"></span>
            Block AI on secret/credential files (.env, .secret, etc.)
            <em>Required for security</em>
          </label>
          
          <label class="checkbox-item">
            <input type="checkbox" name="no-config" value="true" checked>
            <span class="checkmark"></span>
            Restrict AI on configuration files (YAML, JSON config)
          </label>
          
          <label class="checkbox-item">
            <input type="checkbox" name="no-auth" value="true" checked>
            <span class="checkmark"></span>
            Require manual review for authentication code
          </label>
          
          <label class="checkbox-item">
            <input type="checkbox" name="no-database" value="true">
            <span class="checkmark"></span>
            Restrict AI on database queries and migrations
          </label>
        </div>
      </div>
      
      <div class="preference-section">
        <h3>📝 Documentation Preferences</h3>
        
        <div class="checkbox-group">
          <label class="checkbox-item">
            <input type="checkbox" name="doc-ai" value="true" checked>
            <span class="checkmark"></span>
            Allow AI assistance with documentation and comments
          </label>
          
          <label class="checkbox-item">
            <input type="checkbox" name="doc-tests" value="true" checked>
            <span class="checkmark"></span>
            Enable AI help with test generation
          </label>
          
          <label class="checkbox-item">
            <input type="checkbox" name="doc-readme" value="true">
            <span class="checkmark"></span>
            Allow AI assistance with README and markdown files
          </label>
        </div>
      </div>
      
      <div class="preference-section">
        <h3>🔍 Review Level</h3>
        <p>Choose your default review rigor:</p>
        
        <div class="radio-group">
          <label class="radio-item">
            <input type="radio" name="review-level" value="standard" checked>
            <span class="radio-mark"></span>
            <strong>Standard</strong> - Basic dual signature for all AI assistance
          </label>
          
          <label class="radio-item">
            <input type="radio" name="review-level" value="enhanced">
            <span class="radio-mark"></span>
            <strong>Enhanced</strong> - Additional security checks for sensitive code
          </label>
          
          <label class="radio-item">
            <input type="radio" name="review-level" value="maximum">
            <span class="radio-mark"></span>
            <strong>Maximum</strong> - Full audit trail for all AI interactions
          </label>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary">Generate Configuration →</button>
    </form>
  </div>

  <!-- Step 4: Configuration Generation -->
  <div id="generation" class="wizard-step" style="display: none;">
    <h2>⚙️ Generating Your Configuration...</h2>
    
    <div class="generation-status">
      <div class="spinner"></div>
      <p>Creating your personalized ethical AI setup...</p>
      
      <div class="generation-steps">
        <div class="step-item">✅ Analyzing platform requirements</div>
        <div class="step-item">⚙️ Building ethical boundaries</div>
        <div class="step-item">📝 Generating configuration files</div>
        <div class="step-item">🔍 Validating dual signature setup</div>
      </div>
    </div>
  </div>

  <!-- Step 5: Download Results -->
  <div id="download" class="wizard-step" style="display: none;">
    <h2>🎉 Your Configuration is Ready!</h2>
    
    <div id="generated-config"></div>
    
    <div class="download-actions">
      <button onclick="wizard.downloadAllFiles()" class="btn btn-primary btn-large">
        📦 Download Complete Package
      </button>
      
      <button onclick="wizard.showStep('platform-selection'); wizard.updateProgress(0);" class="btn btn-secondary">
        🔄 Start Over
      </button>
    </div>
    
    <div class="next-steps">
      <h3>🚀 Next Steps</h3>
      <ol>
        <li>Download and apply your configuration files</li>
        <li>Test your setup with a simple AI suggestion</li>
        <li>Join our <a href="https://github.com/hannesmitterer/euystacio_ethics/discussions">community discussions</a></li>
        <li>Share your experience and help improve the framework</li>
      </ol>
    </div>
  </div>
</div>

<script src="/assets/js/config-wizard.js"></script>

<style>
.wizard-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.progress-container {
  margin-bottom: 3rem;
}

.progress {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #0366d6, #28a745);
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  margin-top: 1rem;
  color: #586069;
}

.suggestion-area {
  background: #f1f8ff;
  border: 1px solid #c8e1ff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
}

.platform-suggestion {
  text-align: center;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.platform-option {
  border: 2px solid #e1e4e8;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}

.platform-option:hover {
  border-color: #0366d6;
  box-shadow: 0 4px 12px rgba(3, 102, 214, 0.1);
  transform: translateY(-2px);
}

.platform-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  text-align: left;
}

.feature-list li {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #586069;
}

.wizard-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e1e4e8;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #24292e;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 1rem;
}

.form-group small {
  display: block;
  margin-top: 0.25rem;
  color: #656d76;
  font-size: 0.875rem;
}

.preference-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #d0d7de;
}

.preference-section:last-child {
  border-bottom: none;
}

.checkbox-group, .radio-group {
  margin: 1rem 0;
}

.checkbox-item, .radio-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.checkbox-item:hover, .radio-item:hover {
  background-color: #f6f8fa;
}

.checkbox-item input, .radio-item input {
  width: auto;
  margin-right: 0.75rem;
  margin-top: 0.25rem;
}

.checkbox-item em {
  color: #656d76;
  font-style: italic;
  margin-left: 0.5rem;
}

.generation-status {
  text-align: center;
  padding: 3rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0366d6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 2rem auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.generation-steps {
  text-align: left;
  max-width: 300px;
  margin: 2rem auto;
}

.step-item {
  margin: 1rem 0;
  padding: 0.5rem;
  background: #f1f8ff;
  border-radius: 4px;
}

.configuration-result {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 2rem;
}

.config-file {
  margin: 2rem 0;
  background: white;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  overflow: hidden;
}

.config-file h5 {
  background: #f6f8fa;
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid #d0d7de;
  font-family: 'SFMono-Regular', Consolas, monospace;
}

.config-file pre {
  margin: 0;
  padding: 1rem;
  background: #f6f8fa;
  overflow-x: auto;
}

.config-file code {
  background: none;
  padding: 0;
  font-size: 0.875rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #0366d6;
  color: white;
}

.btn-primary:hover {
  background: #0256cc;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.download-actions {
  text-align: center;
  margin: 2rem 0;
}

.download-actions .btn {
  margin: 0 1rem;
}

.next-steps {
  background: #f1f8ff;
  border: 1px solid #c8e1ff;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 2rem;
}

.next-steps ol {
  margin: 1rem 0;
}

.next-steps li {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .wizard-container {
    padding: 1rem;
  }
  
  .platform-grid {
    grid-template-columns: 1fr;
  }
  
  .download-actions .btn {
    display: block;
    margin: 1rem 0;
  }
}
</style>