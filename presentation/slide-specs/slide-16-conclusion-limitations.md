# Slide 16 - Conclusion and limitations

## Point
Conclude the presentation by summarizing what was shown and what the limitations are. Broader societal relevance is handled on Slide 15, so this slide focuses only on conclusion and scope boundaries.

## Slide text
Title:
Conclusion and limitations

Main:
A complete workflow-to-action proof of concept was built and evaluated.

Research questions:
RQ1: How accurately does the deterministic workflow produce expected fan actions?
RQ2: How accurately does the agent-enhanced workflow produce contract-valid action output?
RQ3: What latency, resource, and deployment behavior is observed locally and in Pi middleware validation?

What was shown:
- n8n selected actions from temperature input
- deterministic and agent paths produced expected actions
- Python middleware handled the simulated fan action
- Raspberry Pi validation showed separate-hardware action endpoint behavior
- evidence was recorded

Limitations:
- simulated fan
- small number of test cases
- single-run latency observations
- safety layer mainly documented design
- full runtime schema validation and HITL approval remain future work

Final line:
The contribution is the measured structure around the fan action, not the fan itself.

## Visual
Use two clean boxes: "What was shown" and "Limitations".
Use a strong final-line box at the bottom.

## Presenter guidance
Point to "What was shown" when summarizing the proof of concept.
Point to "Limitations" when explaining scope boundaries.
Look back at the audience for the final contribution line.
