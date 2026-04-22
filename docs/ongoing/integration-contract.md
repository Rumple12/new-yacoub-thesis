\# Integration contract



The Yacoub runtime side and the minimum workflow side meet through shared interfaces.



\## Input

Sensor events are represented in a shared JSON schema.



\## Output

Workflow decisions are represented in a shared JSON schema for actions.



\## Constraint

No action may bypass validation and approval rules before reaching middleware.



\## Initial scenario

Temperature event -> workflow decision -> validation -> approval if needed -> /fan/on

