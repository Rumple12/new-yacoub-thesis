````md

\\# Architecture overview



This folder contains the high-level architecture summary for the \\\*\\\*new-yacoub\\\*\\\* thesis system.



The thesis is intentionally built around \\\*\\\*one small, complete, end-to-end IoT scenario\\\*\\\* so that it stays measurable, explainable, and finishable within the available time.



\\## Core system flow



```text

Sensor event

\&#x20; -> Middleware

\&#x20; -> n8n workflow

\&#x20; -> Validation / Approval

\&#x20; -> Action execution

\&#x20; -> Metrics logging

````



\## Current intended scenario



```text

Temperature event

\&#x20; -> Python middleware receives or generates the event

\&#x20; -> Middleware pushes the event to n8n through webhook flow

\&#x20; -> n8n evaluates whether fan action is needed

\&#x20; -> Safety layer validates the output

\&#x20; -> Approval is required if the action is risky or malformed

\&#x20; -> Middleware executes /fan/on or /fan/off

\&#x20; -> Latency and resource metrics are recorded

```



\## Main design principle



The system is split into small layers with a clear contract boundary.



This is done to:



\* keep the thesis narrow

\* reduce scope creep

\* make implementation testable

\* make the report easier to explain

\* prevent workflow logic from directly controlling hardware behavior without checks



\## Top-level folder responsibilities



\### `infrastructure/`



Contains runtime and deployment-related material.



Purpose:



\* local self-hosted n8n baseline

\* Docker configuration

\* Raspberry Pi deployment assumptions

\* monitoring hooks or runtime notes



\### `middleware/`



Contains the Python bridge between sensors/actions and n8n.



Purpose:



\* receive or generate sensor events

\* expose endpoints such as `/status`, `/fan/on`, `/fan/off`

\* push events into n8n through webhook flow

\* act as the controlled execution layer for hardware-facing actions



\### `cognitive\\\_logic/`



Contains the minimum workflow logic required for integration.



Purpose:



\* one workflow

\* one prompt set

\* one memory choice



In \*\*new-yacoub\*\*, this is minimum integration only.

It is not a full cognitive architecture project.



\### `safety\\\_layer/`



Contains the minimum safety logic required for the integrated system.



Purpose:



\* validate workflow output

\* decide whether approval is required

\* block malformed or unsafe actions

\* preserve one safe case and one blocked case for evaluation



\### `shared\\\_interfaces/`



This is the \*\*contract boundary\*\* between middleware and workflow/safety logic.



Purpose:



\* define sensor-event schemas

\* define action schemas

\* store example payloads

\* prevent schema drift



This is where Yacoub’s runtime side and the minimum Obid-compatible layer meet.



\### `evaluation/`



Contains the measurement and result material that will feed the thesis report.



Purpose:



\* datasets or fixtures

\* metrics output

\* result files

\* baseline-vs-agent comparison evidence



\### `docs/`



Contains planning, scope, decision, and report-support material.



Purpose:



\* lock the narrowed scope

\* document architecture decisions

\* support report writing

\* keep AI tools aligned with thesis boundaries



\## Contract boundary



The most important architectural boundary in this thesis is:



```text

Middleware <-> Shared Interfaces <-> Workflow / Safety logic

```



\### Input side



Middleware creates or receives sensor events and represents them using a shared schema.



\### Output side



Workflow logic produces a proposed action using a shared schema.



\### Safety rule



No risky or malformed action may reach middleware execution without passing validation and, when needed, approval.



\## Current communication model



The first implementation uses a \*\*push-based\*\* communication flow:



\* middleware pushes events to n8n through webhook flow

\* n8n does not poll middleware in the first version



\## Scope note



This architecture is intentionally designed for:



\* one complete vertical slice

\* one measurable scenario

\* one deterministic baseline

\* one minimal agent-enhanced path



It is not currently intended to support broad multi-agent expansion, many devices, or deep n8n internals work.



```

```



