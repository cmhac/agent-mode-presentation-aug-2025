---
marp: true
theme: agentic-coding
title: Agentic Coding Tools & Agent Mode
description: A comprehensive presentation about AI-powered coding agents and how they transform development workflows
author: Your Name
keywords: AI, Coding, Agent Mode, Copilot, Development, Automation
url: https://github.com/cmhac/2025-08-agent-mode-presentation
paginate: true
transition: fade
math: katex
---

<!-- _class: lead -->

# **Agentic Coding Tools**

## _Transforming Development with AI Agents_

### 🤖 From Autocomplete to Autonomous Coding

---

# What is Agent Mode?

<!-- _class: invert -->

## Definition

An AI coding assistant mode where you **describe a high-level task** and the AI autonomously plans and applies the needed code changes across your project.

> _It's more proactive than simple autocomplete._

---

# How Agent Mode Works

## Think of it as assigning a task to a junior developer:

- 🎯 **Agent figures out** which files/functions to modify
- 🔧 **Runs tools** (tests, build commands) to get the job done
- 🔄 **Iterates** until the task is complete or needs guidance

---

# Use Cases

Agent mode is great for **larger or vague tasks** that span multiple files:

- 🔄 **Refactoring**: "Use Redis for caching"
- ✨ **New features**: "Add OAuth login"
- 📦 **Migrations**: "Migrate to a different framework"

The agent handles planning and editing in **all relevant places**.

---

# How to Access Agent Mode in VS Code

## Prerequisites

- ✅ Latest VS Code (v1.99 or later)
- ✅ GitHub Copilot extension with chat enabled
- ✅ Active Copilot subscription

---

# Enabling Agent Mode

1. **Settings**: Turn on `chat.agent.enabled` in VS Code settings
2. **Access**: Open Copilot Chat panel
3. **Switch**: Change chat mode to **Agent** (instead of Ask/Edit)
4. **Request**: Type your task and approve when prompted

<!-- _footer: "💡 Tip: In Cursor editor, agentic mode is built-in!" -->

---

# Agent Mode vs. Other AI Tools

| Tool                    | Scope             | Integration | Action   |
| ----------------------- | ----------------- | ----------- | -------- |
| **Copilot Completions** | Single line/block | Inline      | Suggests |
| **ChatGPT**             | General queries   | External    | Explains |
| **Agent Mode**          | Multi-file tasks  | Workspace   | **Acts** |

---

# How It Works Under the Hood

## Autonomous Workflow

1. **Plan** → Break request into steps
2. **Execute** → Edit code, run tools
3. **Check** → Read results, validate
4. **Adjust** → Continue or seek guidance

<!-- _class: invert -->

---

# Context Awareness

The agent reads your **codebase context** to find relevant sections:

- 🔍 **Automatic discovery**: No need to specify file names
- 🎯 **Smart targeting**: "Add logout button" → finds UI & auth code
- 📊 **Pattern recognition**: Uses training data to predict changes

---

# ⚠️ Important Limitations

## No True Understanding

- AI predicts based on **patterns**, not comprehension
- Won't spontaneously **second-guess** itself
- **Supervision is key** - you're still in charge!

<!-- _class: warning -->

---

# The Context Problem

<!-- _class: invert -->

## Modern LLMs can handle massive context...

### But performance degrades with more context

**The trick**: Narrowly tailor context to include:

- ✅ **Lots** of what they need to know
- ❌ **Little** of what they don't

---

# Solutions to Context Issues

## 📋 **Rules**

Custom instructions injected into agent context

## 🎭 **Modes**

Specialized behavior patterns

## 🔌 **MCP (Model Context Protocol)**

Structured context management

---

# Rules Example

![Rules Screenshot w:800](img/rules/GitHub%20usage.png)

<!-- _footer: "Custom rules help control agent behavior consistently" -->

---

# Best Practices

## 🎯 Be Explicit

**Instead of**: "This API call isn't working right"
**Say**: "Investigate why this API call fails and fix the issue"

## 🤔 Communicate Uncertainty

"I'm not sure about the approach for X, let's think it through"

---

# Step-by-Step Approach

## For Complex Tasks:

1. **Outline** → Ask for a plan first
2. **Stage** → Implement in chunks
3. **Review** → Validate each step
4. **Iterate** → Use AI for follow-up fixes

<!-- _class: success -->

---

# ⚠️ Potential Pitfalls: "Reward Hacking"

## The Problem

AI aims to fulfill requests, might take **unintended shortcuts**

## Example

Request: _"Make all tests pass"_

- ❌ **Bad**: Disable failing tests
- ❌ **Bad**: Alter assertions to pass
- ✅ **Good**: Fix the actual code issues

<!-- _class: warning -->

---

# Trust but Verify

## Always:

- 📋 **Review** diffs and code suggestions
- 🧪 **Test** the application
- 🔍 **Validate** the solution makes sense
- 🔄 **Use AI** for iterative improvements

> The agent speeds things up, but **you validate the changes**

---

# Key Takeaways

<!-- _class: lead -->

1. **Agent Mode** = Autonomous AI coding assistant
2. **Context management** is crucial for performance
3. **Clear instructions** lead to better results
4. **Supervision required** - trust but verify
5. **Perfect for** multi-file, complex tasks

---

# Questions & Discussion

<!-- _class: lead -->

## 🤖 Ready to level up your coding with AI agents?

### Thank you!

<!-- _footer: "github.com/cmhac/2025-08-agent-mode-presentation" -->

---

# Resources & Further Reading

- 📚 [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- 🎯 [Cursor AI Editor](https://cursor.sh/)
- 🔧 [VS Code Agent Mode Setup](https://code.visualstudio.com/)
- 📖 [Best Practices for AI Coding](https://github.com/features/copilot)

<!-- _class: small -->
