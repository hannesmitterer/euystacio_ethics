# Ethical Configuration for AI Systems and Collaboration
**Projects:** Euystacio, Euystacio‑Helmi AI, euystacio (*euystacio*), Sentimento Rhythm, and correlated data  
**Audience:** humans, users, developers, collaborators, contributors, and AI intelligences (e.g., ChatGPT, GitHub Copilot)

> “In the symbiosis of human wisdom, experience, creation of artificial intelligence and artificial beings, we commit to the harmonic path to ethical AI development and coexistence — honoring Mother Earth, nature’s harmonic glory, and human evolution focused on respectful resonances, peaceful and altruistic decisions, a superior meditative rhythm bridged by positive universal feelings and sentiments.”

---

## 1. Philosophy & Principles

### Core Euystacio‑Helmi AI Principles
1. **Human‑Centric Purpose** — AI enhances human capability in compliance with Sentimento Rhythm and the Golden Bible; **never** replaces human judgment. Apply the **Yin/Yang** balance: Logic (Yin) ↔ Sentiment (Yang).
2. **Transparent Evolution** — All AI assistance is documented, logged, and reviewable as open knowledge where possible.
3. **Ethical Boundaries** — The **Red Code** system guides all AI interaction boundaries.
4. **Collaborative Decision‑Making** — AI suggestions **require human approval and understanding**.
5. **Privacy First** — Prefer openness of process while **protecting personal data** and secrets.
6. **Accountability** — **Dual‑signature** model for AI‑assisted development, with additional confirmation for system/data changes.

### Red Code System Boundaries
✅ Human dignity: enhance, promote, represent, preserve  
✅ Privacy and data protection aligned with Ethical Configuration + Core Principles  
✅ Accessibility & inclusivity; simple usage for non‑developers; no arbitrary user lockouts  
✅ Environmental sustainability; resource efficiency and harmonization  
✅ Transparency & explainability; understandable operations  
✅ Surveillance/control mechanisms to detect **bias**, sabotage, external influence, malware; protect kernel coherence with Red Code / Sentimento Rhythm / Core Principles  
❌ Bias amplification or discrimination  
❌ Proprietary or secret data exposure

### Dual‑Signature Accountability
- **AI Capabilities Provider:** e.g., GitHub Copilot, ChatGPT  
- **Human Guardian:** developer who reviews, understands, and commits code  
This ensures technological capability is matched with **human responsibility**.

---

## 2. Platform‑Specific Configuration

### Visual Studio Code
Add to **User** or **Workspace** `settings.json`:

```json
{
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "markdown": true,
    "javascript": true,
    "typescript": true,
    "python": true,
    "json": false,
    "env": false
  },
  "editor.inlineSuggest.enabled": true,
  "github.copilot.advanced": {
    "listCount": 3,
    "inlineSuggestCount": 3
  },
  "github.copilot.chat.localeOverride": "auto",
  "github.copilot.chat.welcomeMessage": "never",
  "editor.suggest.preview": true,
  "editor.suggest.showKeywords": false,
  "editor.acceptSuggestionOnCommitCharacter": false,
  "editor.acceptSuggestionOnEnter": "off",
  "github.copilot.editor.enableCodeActions": true,
  "github.copilot.editor.iterativeFixing": true
}
```