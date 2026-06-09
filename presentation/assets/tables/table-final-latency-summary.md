# table-final-latency-summary.png

- Source LaTeX file: `thesis/MiunThesisTemplate-master/MiunThesisTemplate-master/06-result.tex`
- Original table caption: Final workflow latency summary.
- Intended slide usage: Slide 13 or as backup evidence.
- Caution note: Latency values are single-run proof-of-concept observations, not statistical benchmark results. Raspberry Pi validation means middleware/action endpoint ran on Pi while n8n stayed on PC.

| Source | Case | Observed | Success | Latency |
|---|---|---|---|---:|
| Local deterministic | High temp | fan_on | true | 480.398 ms |
| Local deterministic | Low temp | fan_off | true | 176.778 ms |
| Local agent | High temp | fan_on | true | 2668.036 ms |
| Local agent | Low temp | fan_off | true | 1995.094 ms |
| Raspberry Pi validation | High temp | fan_on | true | 437.003 ms |
| Raspberry Pi validation | Low temp | fan_off | true | 200.206 ms |
