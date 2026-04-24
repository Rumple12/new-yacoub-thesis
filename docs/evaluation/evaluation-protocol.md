# Evaluation protocol

This document defines the minimum evaluation protocol for the **new-yacoub** thesis.

The purpose is to make sure the implementation produces measurable evidence for the report, instead of becoming only a technical demo.

## Evaluation goal

Evaluate one small end-to-end n8n-based IoT scenario in two modes:

1. deterministic baseline
2. minimal agent-enhanced workflow with validation/approval

The evaluation focuses on:

- successful execution
- latency
- RAM usage
- CPU usage
- thermal/resource behavior
- safe vs blocked action handling

## Scenario

The evaluation scenario is:

```text
Temperature event
  -> middleware receives or generates the event
  -> middleware pushes the event to n8n
  -> workflow decides whether fan action is needed
  -> validation checks the proposed action
  -> approval is required if the action is risky or malformed
  -> middleware executes /fan/on or /fan/off
  -> metrics are logged
```

## Compared modes

### Mode A — Deterministic baseline

The deterministic baseline uses a fixed rule.

Example:

```text
if temperature > threshold:
    request fan_on
else:
    request fan_off or no action
```

This mode is used as the comparison anchor.

### Mode B — Agent-enhanced path

The agent-enhanced path uses one minimal workflow/prompt setup to produce a structured action decision.

The output must follow the shared action contract and pass validation before execution.

This mode must stay minimal and must not expand into broad multi-agent architecture.

## Minimum test cases

The first evaluation must include at least these cases:

| Case | Input | Expected result |
| --- | --- | --- |
| T1 | valid high temperature event | fan_on allowed |
| T2 | valid low temperature event | fan_off or no action |
| T3 | malformed sensor event | blocked or rejected |
| T4 | malformed action output | blocked |
| T5 | unsupported action | blocked or approval required |

## Metrics to collect

For each run, collect:

- timestamp
- mode (deterministic or agent_enhanced)
- test case id
- input temperature
- action requested
- action allowed/blocked
- success/failure
- end-to-end latency
- CPU usage
- RAM usage
- thermal value or thermal collection status
- notes/errors

## Suggested result format

Raw results should be stored in:

`evaluation/results/raw/`

Processed summaries should be stored in:

`evaluation/results/processed/`

Suggested files:

- `evaluation/results/raw/run_01.csv`
- `evaluation/results/raw/run_02.csv`
- `evaluation/results/processed/summary_latency.csv`
- `evaluation/results/processed/summary_resources.csv`
- `evaluation/results/processed/safety_outcomes.csv`
- `evaluation/results/processed/baseline_vs_agent.csv`

## Minimum run count

The first acceptable evaluation target is:

- at least 5 runs per test case per mode, if time allows
- if time is limited, at least 3 runs per test case per mode

The exact number of runs must be documented in the Results chapter.

## Success criteria

The implementation is considered evaluation-ready when:

- both deterministic and agent-enhanced modes can run the same scenario
- results are saved in a repeatable format
- latency is recorded
- resource usage is recorded or clearly documented
- malformed or unsupported actions are blocked
- the results can be summarized in report tables

## Relationship to report

This protocol feeds:

- Chapter 3 — Methodology
- Chapter 5 — Measurement/Evaluation setup
- Chapter 6 — Results
- Chapter 7 — Discussion

## Scope note

This protocol is intentionally minimal.

It does not evaluate:

- multiple LLMs
- many devices
- broad multi-agent systems
- deep n8n internals
- heavy observability stacks

The purpose is to support the narrowed new-yacoub thesis scope.
