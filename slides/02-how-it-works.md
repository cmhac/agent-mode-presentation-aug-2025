---
marp: true
theme: nord
title: "Part 3: How It Works"
paginate: true
transition: fade
---

<!-- _class: lead -->

# **How It Works**

## _Under the Hood & Context Management_

---

# Agent Workflow

1. **Reason** → Understand the task
2. **Act** → Use tools to make changes
3. **Observe** → Check results and adjust

---

# Tools

- Agents use **tools** (functions with JSON in/out) to act.
- They decide when to call them, provide inputs, and use outputs to continue.

---

# MCP Servers

MCP (model context protocol) is standard way for agents to connect to external data and tools. They give agents groups of tools to work with.

---

# The Context Problem

LLMs can handle huge context, but too much slows them down.

The solution:

- Give the agents lots of info they do need
- Minimize irrelevant context
