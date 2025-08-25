# Visual Studio Configuration for Ethical Copilot Usage

## Installation & Setup

1. **Install GitHub Copilot Extension**
   - Open Visual Studio
   - Go to Extensions → Manage Extensions
   - Search for "GitHub Copilot" and install
   - Restart Visual Studio and sign in with your GitHub account

2. **Recommended Settings**

### Tools → Options → GitHub Copilot

**Basic Settings:**
- Enable GitHub Copilot: ✓ Checked
- Auto-accept suggestions: ✗ Unchecked (manual review required)
- Show suggestions automatically: ✓ Checked
- Max suggestions per request: 3
- Suggestion delay: 250ms

**File Type Settings:**
- Enable for C#: ✓ Checked
- Enable for C++: ✓ Checked  
- Enable for JavaScript: ✓ Checked
- Enable for TypeScript: ✓ Checked
- Enable for Python: ✓ Checked
- Enable for HTML: ✓ Checked
- Enable for CSS: ✓ Checked
- Enable for JSON: ✗ Unchecked (security)
- Enable for XML: ✗ Unchecked (config files)
- Enable for config files (.config, .settings): ✗ Unchecked

**Privacy & Security:**
- Block suggestions in comments: ✓ Checked
- Block suggestions matching public code: ✓ Checked
- Telemetry: Limited (follow your org policy)

### Keyboard Shortcuts (Tools → Options → Keyboard)

**Recommended Key Bindings:**
- `Ctrl+Shift+A`: Generate Copilot suggestions
- `Ctrl+Alt+\`: Accept inline suggestion
- `Ctrl+Alt+[`: Previous suggestion
- `Ctrl+Alt+]`: Next suggestion
- `Ctrl+Alt+Escape`: Dismiss suggestion
- `Ctrl+Shift+C`: Open Copilot Chat

## Ethical Usage Guidelines

### Pre-Development Checklist
- [ ] Verify Copilot is disabled for sensitive file types
- [ ] Confirm manual acceptance mode is enabled
- [ ] Review project-specific ethical guidelines

### During Development
- [ ] Review each suggestion before accepting
- [ ] Validate security implications manually
- [ ] Test AI-generated code thoroughly
- [ ] Document AI assistance in commit messages

### Security-Sensitive Areas (Manual Only)
- Authentication and authorization code
- Cryptographic operations
- Database connection strings
- API key management
- User data processing
- Production configuration

## Project Configuration File

Save as `[ProjectName].vsconfig` in your solution root:

```json
{
  "version": "1.0",
  "extensions": [
    "GitHub.copilot",
    "GitHub.copilot-chat"
  ],
  "copilot": {
    "enabled": true,
    "autoAccept": false,
    "maxSuggestions": 3,
    "delay": 250,
    "disabledFileTypes": [
      ".config",
      ".settings", 
      ".env",
      ".key",
      ".secret",
      "web.config",
      "app.config"
    ]
  }
}
```

## Integration with Team Workflow

### EditorConfig (.editorconfig)
```ini
root = true

[*.cs]
# Copilot-friendly formatting
indent_style = space
indent_size = 4
end_of_line = crlf
insert_final_newline = true
trim_trailing_whitespace = true

[*.{json,yml,yaml}]
# Disable Copilot for config files
# Add comment: AI-DISABLED for security
```

---

**AI Signature & Accountability:** GitHub Copilot (Configuration Guidelines)  
**Human Guardian:** Seedbringer hannes.mitterer@gmail.com  
**Date:** 2025-08-25  
**Version:** Comprehensive v0.2