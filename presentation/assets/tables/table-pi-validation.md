# table-pi-validation.png

- Source LaTeX file: `thesis/MiunThesisTemplate-master/MiunThesisTemplate-master/06-result.tex`
- Original table caption: Raspberry Pi middleware/action-endpoint full-workflow validation.
- Intended slide usage: Slide 14 - Raspberry Pi validation.
- Caution note: Raspberry Pi validation means middleware/action endpoint ran on Pi while n8n stayed on PC. Latency values are single-run proof-of-concept observations, not statistical benchmark results.

| Test case | Input | Expected | Observed | HTTP | Latency |
|---|---:|---|---|---:|---:|
| deterministic_high_temp | 31.4 C | fan_on | fan_on | 200 | 437.003 ms |
| deterministic_low_temp | 24.5 C | fan_off | fan_off | 200 | 200.206 ms |
