# Integration contract

The Yacoub runtime side and the minimum workflow side meet through shared interfaces.

## Input

Sensor events are represented in a shared JSON schema.

## Output

Workflow decisions are represented in a shared JSON schema for actions.

## Constraint

No action may bypass validation and approval rules before reaching middleware.

## Initial scenario

Temperature event -> workflow decision -> validation -> approval if needed -> /fan/on

## Sensor input example

```json
{
  "sensor_id": "temp_sensor_1",
  "timestamp": "2026-04-22T18:30:00Z",
  "type": "temperature",
  "value": 31.4,
  "unit": "C"
}
```

## Action output example

```json
{
  "action_id": "fan_on",
  "target": "fan_1",
  "reason": "temperature_above_threshold",
  "requires_approval": false
}
```

## Blocked case example

```json
{
  "action_id": "open_window",
  "target": "unknown_device",
  "reason": "hallucinated_action",
  "requires_approval": true
}
```