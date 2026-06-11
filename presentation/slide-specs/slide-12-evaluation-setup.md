# Slide 12 - Evaluation setup

## Point
Explain what was measured in the evaluation. The evaluation uses controlled high and low temperature cases and records proof-of-concept evidence, not broad benchmark results.

## Slide text
Title:
Evaluation setup

Main:
Proof-of-concept evidence, not a broad benchmark.

Evaluation evidence:
- high / low temperature cases
- selected action
- success / failure
- latency observations
- resource observations

Bottom:
The goal is measurable proof-of-concept evidence.

## Visual
Use a clean evaluation checklist or evidence-flow diagram.

Controlled test cases:
31.4 C → expected fan_on
24.5 C → expected fan_off

Evidence recorded:
selected action, success/failure, latency observations, resource observations

Optional table:
presentation/assets/tables/table-defined-test-cases.png

## Presenter guidance
Point to the controlled test cases when explaining high and low temperature inputs.
Point to selected action when explaining fan_on and fan_off.
Point to success/failure when explaining workflow completion.
Point to latency observations when explaining measured runtime behavior.
Point to resource observations when explaining supporting CPU, memory, and temperature observations.
Look back at the audience when saying this is proof-of-concept evidence, not a broad benchmark.

## Possible opponent question
Is this enough evaluation?

## Answer
For the scope of this thesis, yes, because the goal was proof-of-concept evaluation of a small workflow-to-action architecture. I tested defined high and low temperature cases, checked selected actions, success or failure, latency observations, and supporting resource observations. I do not claim it is a broad benchmark.

## Possible opponent question
Are the latency numbers statistically reliable?

## Answer
No, I treat them as latency observations, not statistical benchmarks. They show that the runs were measurable and give an indication of behavior in the tested setup, but they should not be generalized without more repeated measurements.
