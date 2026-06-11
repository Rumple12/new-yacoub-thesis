# Slide 15 - Conclusion and broader relevance

## Point
End the presentation by showing that the fan example is small on purpose, but the workflow-to-action pattern has broader relevance. The thesis contribution is the measured structure around the action, not the fan itself.

## Slide text
Title:
Conclusion and broader relevance

Main:
The fan is small.
The workflow-to-action pattern is the contribution.

What was shown:
- n8n can drive a workflow-to-action pipeline
- deterministic and agent paths can be compared
- middleware can run on Raspberry Pi
- evidence can be recorded

Broader relevance:
- Smart buildings: ventilation, heating, lighting
- Industrial monitoring: alerts and controlled responses
- Environmental sensing: air quality, humidity, water level
- Health / environment monitoring: traceable notifications or approved actions

Limitations:
- simulated fan
- small number of cases
- single-run latency observations
- safety layer mainly documented design

Final line:
The contribution is the measured structure around the fan action, not the fan itself.

## Visual
Use a clean pattern diagram:
event -> workflow decision -> contract/validation -> middleware action -> evidence

Use simple cards for broader relevance:
Smart buildings, industrial monitoring, environmental sensing, health / environment monitoring.

Use a small limitations box near the bottom.

Optional:
Use presentation/assets/tables/table-rq-evidence-map.png only if readable.

## Presenter guidance
Point to the pattern diagram when explaining the thesis contribution.
Point to the broader relevance cards when explaining possible use cases.
Point to the limitations box when explaining scope boundaries.
Look back at the audience when saying the final contribution line.

## Possible opponent question
Are you claiming this is ready for smart buildings or industry?

## Answer
No. I am not claiming operational readiness. The thesis shows a proof-of-concept pattern. The broader use cases show where the same event-validation-action structure could be relevant, but real deployment would require physical actuator testing, stronger runtime validation, safety work, and more evaluation.

## Possible opponent question
Why talk about society if your implementation is only a fan?

## Answer
Because the fan is a controlled proxy. It lets me test the structure clearly without unsafe or unrealistic claims. The broader relevance is the pattern: event input, workflow decision, structured action, middleware boundary, and recorded evidence.
