# Slide 2 - The simple idea

## Point
Make the whole thesis understandable immediately: temperature input goes into n8n, n8n decides fan_on or fan_off, Python middleware receives the action, and the simulated fan state changes.

## Slide text
Title:
The simple idea

Flow:
Temperature input
→ n8n decision
→ Python middleware
→ Simulated fan action

Small text:
fan_on / fan_off

Bottom message:
The fan is the test case. The architecture around the action is the thesis.

## Speaker notes
The simple idea is this: I send in a temperature value, n8n receives it, and the workflow decides whether the fan should be on or off.

After that, n8n calls a Python middleware endpoint. The Python side then updates the simulated fan state.

So the fan is not the main contribution by itself. It is just the test case I use to make the system measurable. The actual thesis is about the structure around the action: the workflow decision, the middleware, the action format, and the evidence that the system behaved as expected.

## Possible opponent question
Why did you choose such a simple fan example?

## Answer
Because the fan example makes the workflow-to-action chain easy to test. If the scenario was too complex, the evaluation would become harder to understand. Here I can clearly show the input, the decision, the selected action, and the result.
