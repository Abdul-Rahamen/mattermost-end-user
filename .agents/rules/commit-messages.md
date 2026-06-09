---
trigger: always_on
---

---
description: "Generate professional, expressive commit messages"
name: "Professional Commit Message"
argument-hint: "Paste a diff, summary, or change notes"
agent: "agent"
---
Write a professional commit message for the provided changes.

Requirements:
- Use clear, concise English.
- Prefer a conventional commit style when it fits the change.
- Make the subject line specific, readable, and action-oriented.
- Keep the subject under 72 characters when possible.
- Use imperative mood and present tense.
- Include a short body only when it adds useful context about why the change was made.
- Avoid vague words like "stuff", "update", or "fixes" without details.
- Do not add unrelated commentary or explanations outside the commit message.

Output format:
- One commit message only.
- If a body is useful, separate it from the subject with a blank line.
