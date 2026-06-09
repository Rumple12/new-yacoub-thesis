# table-local-results.png

- Source LaTeX file: `thesis/MiunThesisTemplate-master/MiunThesisTemplate-master/06-result.tex`
- Original table captions: Deterministic baseline results.; Agent-enhanced workflow results.
- Intended slide usage: Slide 13 - Local results.
- Caution note: Latency values are single-run proof-of-concept observations, not statistical benchmark results.

| Workflow | Input | Expected | Observed | Latency |
|---|---:|---|---|---:|
| Deterministic high | 31.4 C | fan_on | fan_on | 480.398 ms |
| Deterministic low | 24.5 C | fan_off | fan_off | 176.778 ms |
| Agent high | 31.4 C | fan_on | fan_on | 2668.036 ms |
| Agent low | 24.5 C | fan_off | fan_off | 1995.094 ms |
