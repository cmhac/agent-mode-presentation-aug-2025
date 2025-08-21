---
marp: true
theme: agentic-coding
title: "Part 3: How It Works"
paginate: true
transition: fade
---

<!-- _class: lead -->

# **Part 3: How It Works**

## _Under the Hood & Context Management_

---

# How It Works Under the Hood

## Autonomous Workflow

1. **Plan** → Break request into steps
2. **Execute** → Edit code, run tools
3. **Check** → Read results, validate
4. **Adjust** → Continue or seek guidance

<div class="process-loop">
Plan <span class="arrow">→</span> Execute <span class="arrow">→</span> Check <span class="arrow">→</span> Adjust <span class="arrow">🔄</span>
</div>

<!-- _class: invert -->

---

# Context Awareness

The agent reads your **codebase context** to find relevant sections:

- 🔍 **Automatic discovery**: No need to specify file names
- 🎯 **Smart targeting**: "Add logout button" → finds UI & auth code
- 📊 **Pattern recognition**: Uses training data to predict changes

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
