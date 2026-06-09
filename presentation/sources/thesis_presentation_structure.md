# Presentation Structure - 15 Minutes

## Slide 1 - Title

**Design and Evaluation of an n8n-Based Workflow-to-Action Architecture for IoT-Style Fan Control**

Yacoub Dawli  
DT099G Bachelor Thesis

**Say:**

My thesis is about building and evaluating a small IoT-style workflow system. The example is a fan that turns on or off depending on temperature, but the important part is not the fan itself. The important part is the architecture around it.

## Slide 2 - Problem / Motivation

**Message:**

Workflow systems can make decisions, but if they trigger actions, the action side needs structure and evidence.

**Say:**

The problem I looked at is what happens when a workflow is not just moving data, but also triggering an action. Then we need to know what decided the action, how the action was represented, where it was executed, and what evidence we have that it behaved as expected.

## Slide 3 - Aim and Research Questions

**Aim:**

Design, implement, and evaluate a self-hosted n8n proof-of-concept for a temperature-to-fan action pipeline.

**Research questions:**

- RQ1: deterministic workflow accuracy
- RQ2: agent-enhanced structured output
- RQ3: latency/resource/deployment observations

Do not over-explain.

## Slide 4 - System Overview

**Flow:**

```text
temperature test input
-> n8n workflow
-> decision
-> Python middleware
-> simulated fan action
-> CSV/evidence
```

**Say:**

In the final setup, the temperature test input goes into n8n. n8n decides whether the fan should be on or off. Then n8n calls my Python middleware, which handles the action side. In this version the fan is simulated, but the structure is prepared so the Python side could later connect to real hardware.

## Slide 5 - n8n and Docker

**Human wording:**

- n8n runs through Docker.
- Docker Compose starts the n8n environment.
- n8n is opened at `localhost:5678`.

**Say:**

For n8n, I used Docker. So instead of installing n8n directly on my computer, I could start it with Docker Compose and open it at localhost port 5678. That made the setup easier to repeat and document.

## Slide 6 - Python Middleware

**Message:**

n8n decides.  
Python handles the action.

**Say:**

The Python middleware is basically the middle layer between n8n and the fan action. n8n does not need to know the details of the fan. It only calls fan on or fan off. The Python program receives that request and updates the simulated fan state.

**Important endpoints:**

- `/fan/on`
- `/fan/off`
- `/status`

## Slide 7 - Deterministic vs Agent-Enhanced Workflow

**Say:**

I evaluated two workflow paths. The deterministic workflow is the baseline. It uses a simple threshold: if the temperature is high, `fan_on`, otherwise `fan_off`.

The agent-enhanced workflow tests whether an LLM step can produce structured action output for the same simple task. The point is not to prove that AI is better here. The point is to test whether the output can be shaped into a contract-valid action.

## Slide 8 - JSON Contracts and Validation Design

**Say:**

The JSON contracts define what a valid sensor event and action output should look like. This matters because generated output from an agent step should not be treated as valid just because it looks convincing. It needs to match an expected structure.

Do not overtalk safety.

**Say clearly:**

The safety part in this thesis is mainly documented validation design, not a full runtime safety system.

## Slide 9 - Evaluation Setup

**Say:**

The evaluation used defined high- and low-temperature cases. The system recorded results in CSV files, including the chosen action and latency observations. This is not a large benchmark. It is proof-of-concept evidence for the defined cases.

## Slide 10 - Results

**Simple:**

- High temperature -> `fan_on`
- Low temperature -> `fan_off`
- Agent path also produced contract-shaped action output
- Agent path had higher latency than deterministic baseline

**Say:**

The final successful local runs produced the expected fan actions for the defined high- and low-temperature cases. The agent-enhanced workflow also produced the expected structured fan action, but with higher latency than the deterministic baseline.

## Slide 11 - Raspberry Pi Validation

**Say:**

For the Raspberry Pi part, I did not move the full n8n stack to the Pi. n8n stayed on the PC. I moved the Python middleware/action endpoint to the Raspberry Pi. This tested whether the PC-hosted workflow could call the Pi-hosted action side over the network.

**Important sentence:**

This validates the edge/action endpoint idea, not full n8n-on-Pi deployment.

## Slide 12 - Limitations and Conclusion

**Say:**

The main limitations are that the evaluation uses a small number of defined cases, the fan action is simulated, the latency values are single-run observations, and the safety layer is documented validation design rather than measured runtime enforcement.

The conclusion is that the architecture can be implemented and evaluated as a clear workflow-to-action architecture.
