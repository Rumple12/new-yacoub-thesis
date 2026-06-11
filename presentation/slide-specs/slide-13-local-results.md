# Slide 13 - Local results

## Point
Show that both local workflow paths produced the expected actions for the defined high and low temperature cases. The deterministic path worked as the stable baseline, and the agent-enhanced path also produced the expected structured action output, but with higher latency observations.

## Slide text
Title:
Local results

Main:
Both local workflow paths produced the expected action.
The agent-enhanced path had higher latency observations.

Bullets:
- High temperature -> fan_on
- Low temperature -> fan_off
- Agent path produced structured action output
- Agent path had higher latency than the deterministic baseline

Bottom:
Local workflow-to-action chain worked and produced recorded evidence.

## Visual
Use:
presentation/assets/tables/table-local-results.png

If missing, create this table:
Deterministic high - 31.4 C - expected fan_on - observed fan_on - 480.398 ms
Deterministic low - 24.5 C - expected fan_off - observed fan_off - 176.778 ms
Agent high - 31.4 C - expected fan_on - observed fan_on - 2668.036 ms
Agent low - 24.5 C - expected fan_off - observed fan_off - 1995.094 ms

## Presenter guidance
Point to the deterministic rows when explaining the baseline.
Point to the agent rows when explaining the agent-enhanced workflow.
Point to the latency column when explaining that the agent path had higher latency observations.
Look back at the audience when saying the result is proof-of-concept evidence, not a broad benchmark.

## Possible opponent question
Can you conclude that the deterministic workflow is faster than the agent workflow?

## Answer
Only within these proof-of-concept observations. The measured local runs show lower latency for the deterministic path and higher latency for the agent path, but I do not claim this as a broad statistical benchmark. More repeated measurements would be needed for that.

## Possible opponent question
What is the most important result here?

## Answer
The most important result is that both local workflows selected the expected action for the defined high and low temperature cases. The deterministic path worked as a stable baseline, and the agent path also produced structured action output, but with higher latency observations.
