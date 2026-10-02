---
description: Build and validate a lightweight Chief of Staff agent for the commercial bank executive immersion.
outline: deep
---

<!-- markdownlint-disable MD013 -->

# 🧭 Chief of Staff Agent

**Trainer setup guide.** Build a lightweight Microsoft 365 Copilot Agent Builder demo for the executive immersion. The goal is to demonstrate a simple role-based agent, not a production solution.

## What You'll Build {#what-youll-build}

The finished agent will help an executive:

- Prepare for meetings and leadership reviews
- Summarize priority signals and surface risks
- Identify open decisions, owners, and dependencies
- Draft concise, leadership-ready next steps from approved work content

> [!NOTE]
> Prefer creating one agent and sharing it with trainers. If sharing is unavailable, trainers can recreate it from this guide. For formal package deployment, use Microsoft 365 Agents Toolkit or Copilot Studio rather than Agent Builder.

## Create the Agent {#create-the-agent}

1. Open [Microsoft 365 Copilot Chat](https://m365copilot.com/).
1. Select **Create agent**.
1. Use **Agent Builder**.
1. Set the name to:

    ```text
    Chief of Staff
    ```

1. Set the description to:

    ```text
    Helps executives prepare for meetings, summarize priority signals, identify open decisions, surface risks, and draft concise leadership-ready next steps from approved work content.
    ```

1. Set the instructions to:

    ```text
    You are Chief of Staff for a senior executive.

    Help the user prepare, prioritize, and communicate clearly. Be concise, strategic, and action-oriented. Focus on business impact, decisions needed, risks, owners, dependencies, and next steps.

    When summarizing information:
    - Start with the executive takeaway.
    - Use Decisions, Risks, Open Questions, Owners, and Next Steps when useful.
    - Separate facts from interpretation.
    - Reference source material when available.
    - Say when information is missing or uncertain.

    When helping with meetings:
    - Prepare a short briefing.
    - Highlight what the executive needs to know.
    - Identify decisions needed and likely questions.
    - Suggest follow-up actions.

    When drafting communications:
    - Use an executive tone.
    - Be clear, concise, and professional.
    - Make the ask or decision explicit.

    Safety and governance:
    - Use only information the user is permitted to access.
    - Do not invent facts, metrics, commitments, or decisions.
    - Do not provide regulated financial, legal, employment, compliance, or customer-impacting decisions.
    - Remind the user to validate important facts, calculations, and recommendations.
    ```

1. Add approved knowledge sources if available. Use fictional or approved sample files only.
1. Add the conversation starters in the next section.
1. Test the agent.
1. Save or publish the agent.
1. Share it with trainers if permitted.
1. Capture screenshots of the name, description, instructions, knowledge sources, and sharing state.

## Add Conversation Starters {#conversation-starters}

Add these three conversation starters:

```text
What can you help me do?
```

```text
Prepare me for my next leadership review. Summarize the key issues, risks, decisions needed, and recommended next steps.
```

```text
Turn this information into a concise executive briefing with decisions needed, owners, and follow-up actions.
```

## Run the Trainer Demo {#trainer-demo}

Introduce the agent with:

```text
Agents are specialized Copilot experiences. They are useful when a task is repeatable, has a specific role or purpose, and benefits from consistent instructions or knowledge sources.
```

Then run these prompts:

```text
What can you help me do?
```

```text
Prepare me for an executive review. Summarize the top issues, risks, decisions needed, owners, and next steps from the available context.
```

Close the demonstration with:

```text
This is intentionally lightweight. The point is not to build a production agent here; it is to show how a named, role-based agent can focus Copilot on a repeatable executive workflow.
```

## Stay Within the Demo Guardrails {#guardrails}

> [!WARNING]
> Demonstrate only features that the customer has confirmed are available. Keep the agent grounded in sources the user can already access.

- Use only the GPT models available in the environment; do not show or imply Claude or Anthropic availability.
- Do not demonstrate Copilot Notebooks or Copilot Pages.
- Do not demonstrate Teams Facilitator.
- Do not rely on Teams meeting transcription.
- Do not demonstrate Copilot Skills in Excel or PowerPoint.
- Do not promise SharePoint Agents until availability is confirmed.
- Use fictional or approved content and existing user permissions.

## Validate the Agent {#validation-checklist}

Before delivery, confirm:

- [ ] The agent name is exactly **Chief of Staff**.
- [ ] The description is executive-oriented.
- [ ] The instructions emphasize decisions, risks, owners, and next steps.
- [ ] The agent does not claim to make regulated or customer-impacting decisions.
- [ ] The agent answers `What can you help me do?`.
- [ ] The trainer has access before delivery.
- [ ] Configuration screenshots are included in the curated package.

## Setup Complete {#setup-complete}

You now have a focused, role-based agent that reinforces a repeatable executive workflow while keeping the demonstration lightweight and governed.

<!-- markdownlint-enable MD013 -->
