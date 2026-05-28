# Removed AI-Assistance Passages

This file records AI-assistance-related passages removed from active project files.

## `README.md`

Removed:

```text
For the full development/report process, see: [docs/plans/new-yacoub-14-step-process.md](docs/plans/new-yacoub-14-step-process.md)
```

Removed the sections:

```text
## How Antigravity should treat this repo

Antigravity is the main IDE and planning environment for this repository.

It should prioritize Yacoub-complete over Obid-complete, keep the scope locked to the new-yacoub plan, prefer one complete vertical slice over many partial systems, and update planning/specification files before broad implementation when things are unclear.

Antigravity should not expand the repo back into the original broader Yacoub/Obid plan, introduce broad multi-agent design, modify n8n core unless explicitly required, or introduce MCP in phase 0.

Relevant workspace controls live in `.agents/rules/`, `.agents/workflows/`, and `.agents/skills/`.

## How Codex should treat this repo

Codex is a reviewer/fixer for this repository, not the main planner.

Use Codex for audit/review of scope and diffs, spotting schema drift, checking missing tests/metrics, and making small targeted repairs.

Keep Codex behavior narrow: `audit-review` thread = critique and inspection only, `repair-fix` thread = bounded fixes only.

Codex should not silently redesign the thesis architecture.
```

Changed:

```text
Do not batch many unrelated AI-generated changes into one commit.
```

to:

```text
Do not batch many unrelated changes into one commit.
```

## `docs/architecture/README.md`

Changed:

```text
keep AI tools aligned with thesis boundaries
```

to:

```text
keep documentation aligned with thesis boundaries
```

## `thesis/MiunThesisTemplate-master/MiunThesisTemplate-master/01-intro.tex`

Removed:

```text
\subsection{Use of AI Tools}\label{subsec:ai-tools}

AI tools were used as support during this thesis in two main ways. During the implementation work, they were used for planning, coding assistance, debugging support, and suggestions for how to structure parts of the repository. Any suggested code was reviewed, tested, and validated against the project evidence before being included.
AI tools were also used during the writing process as language and structure support. This included reformulating sentences, checking phrasing, improving readability, and suggesting alternative wording. The research design, implementation decisions, evaluation setup, result interpretation, references, and final report content remain the responsibility of the author. No measurement value, source file, implementation behavior, or result was accepted only because an AI tool suggested it; such material was checked against repository evidence or cited sources.
```

## Generated LaTeX Metadata

Removed generated table-of-contents and label references to `Use of AI Tools` from:

```text
thesis/MiunThesisTemplate-master/MiunThesisTemplate-master/01-intro.aux
thesis/MiunThesisTemplate-master/MiunThesisTemplate-master/thesis.toc
```
