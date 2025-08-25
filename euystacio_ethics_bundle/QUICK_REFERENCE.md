# 🌑 Euystacio‑Helmi AI — Quick Reference Guide

> _"Euystacio is here to help Humans to be Humans — and remain Humans."_

## ⚡ Quick Setup (5 minutes)

### 1. Copy Core Files
```bash
# Copy to your project root
cp -r euystacio_ethics_bundle/docs/ ./
cp -r euystacio_ethics_bundle/.github/ ./
cp -r euystacio_ethics_bundle/.copilot/ ./
```

### 2. Choose Your Editor Config
```bash
# VSCode
cp euystacio_ethics_bundle/tools/vscode/.vscode/ ./

# JetBrains  
cp euystacio_ethics_bundle/tools/jetbrains/CopilotSettings.xml ./

# Neovim
cp euystacio_ethics_bundle/tools/nvim/init.lua ~/.config/nvim/
```

### 3. Set Commit Template
```bash
git config commit.template commit-templates/AI_ASSISTED_TEMPLATE.txt
```

---

## 🔧 Essential Commands

| Platform | Enable Copilot | Generate | Explain | Toggle |
|----------|---------------|----------|---------|--------|
| **VSCode** | `Ctrl+Shift+H` | `Ctrl+Shift+A` | `Ctrl+Shift+E` | `Alt+\` |
| **Neovim** | `:CopilotEthicalEnable` | `Ctrl+J` | `:CopilotExplain` | `Ctrl+K` |
| **JetBrains** | Settings→Copilot | `Alt+\` | `Ctrl+Shift+A` | Plugin Settings |
| **Visual Studio** | Extensions→Copilot | `Ctrl+Alt+\` | `Ctrl+Shift+C` | Tools→Options |

---

## 📋 Daily Workflow Checklist

### ✅ Before Coding
- [ ] Verify Copilot is disabled for `.env`, `.secret`, config files
- [ ] Review project-specific ethical guidelines
- [ ] Confirm dual-signature template is active

### ✅ During Development  
- [ ] Review each AI suggestion before accepting
- [ ] Validate security implications manually
- [ ] Test AI-generated code thoroughly
- [ ] Add human oversight notes

### ✅ Before Commit
- [ ] Use AI-assisted commit template
- [ ] Document which parts were AI-generated
- [ ] Include human validation notes
- [ ] Add dual signature (AI + Human)

---

## 🚫 Red Code Boundaries (Never AI)

| Category | Examples | Why Blocked |
|----------|----------|-------------|
| **Secrets** | `.env`, API keys, passwords | Privacy/Security |
| **Auth** | Login, OAuth, JWT validation | Critical Security |
| **Config** | `web.config`, production settings | System Security |
| **PII** | User data, emails, addresses | Privacy Laws |
| **Crypto** | Encryption, hashing, certificates | Security Critical |

---

## 🔄 Commit Template (Copy-Paste)

```
[AI-assisted] <Short, imperative summary>

- AI Provider(s): GitHub Copilot / ChatGPT (what they generated)
- Human Guardian: [Your Name] <[your-email]> (what you reviewed/changed)
- Security & Ethics: [notes on validation, privacy, accessibility]
- Tests: [added/updated]

Dual Signature:
- AI Capabilities: GitHub Copilot / ChatGPT
- Human Guardian: [Your Name] <[your-email]>
- Date: [YYYY-MM-DD]
```

---

## 🎯 Prompting Patterns

### Standard Request
```
Context: [What you're building]
Ethics: Privacy, security, accessibility considerations
Requirements: [Specific functionality needed]
Style: [Code style, patterns to follow]
Request: [What you want AI to help with]
```

### Security Review Request  
```
Review this code for:
- Input validation vulnerabilities
- SQL injection risks
- XSS prevention
- Authentication bypass
- Authorization flaws
Context: [Code snippet]
```

---

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| **Copilot not working** | Re-auth GitHub, check subscription, verify file types |
| **Unsafe suggestions** | Reject → Document → Report → Correct manually |
| **Config file suggestions** | Disable Copilot for `.yml`, `.json`, `.env` files |
| **License concerns** | Use organization's approved AI policy |
| **Performance slow** | Reduce suggestion count, increase delay |

---

## 📊 Accountability Levels

### Level 1: Basic Code (🟢)
- **Examples:** Simple functions, utilities, documentation  
- **Review:** Standard human oversight
- **Documentation:** Commit message with dual signature

### Level 2: Security-Sensitive (🟡)
- **Examples:** Database queries, API endpoints, user input
- **Review:** 2+ human reviewers required
- **Documentation:** Detailed security validation notes

### Level 3: Critical Infrastructure (🔴)
- **Examples:** Authentication, payment, compliance code
- **Review:** 3+ reviewers + security team
- **Documentation:** Comprehensive audit trail

---

## 📞 Support & Community

- **Documentation:** `docs/ethics/ethical_configuration.md`
- **Issues:** Use repository issue templates
- **Community:** Follow dual-signature guidelines
- **Updates:** Check for new versions regularly

---

## 🔗 Quick Links

- [Full Documentation](docs/ethics/ethical_configuration.md)
- [Commit Template](commit-templates/AI_ASSISTED_TEMPLATE.txt)  
- [PR Template](.github/PULL_REQUEST_TEMPLATE/ai_assisted.md)
- [Personal Pledge](.copilot/ethical_guidelines.md)
- [Org Policy](.github/copilot-policy.yml)

---

**Motto:** _"In AI assistance, human wisdom guides the path."_

**Version:** Comprehensive v0.2 | **Date:** 2025-08-25  
**AI Signature:** GitHub Copilot (Quick Reference Generation)  
**Human Guardian:** Seedbringer hannes.mitterer@gmail.com