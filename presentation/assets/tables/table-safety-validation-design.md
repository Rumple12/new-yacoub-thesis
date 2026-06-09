# table-safety-validation-design.png

- Source LaTeX file: `thesis/MiunThesisTemplate-master/MiunThesisTemplate-master/06-result.tex`
- Original table caption: Documented safety and validation cases from Step 8.
- Intended slide usage: Slide 11 - Contracts and safety design.
- Caution note: This is documented validation design, not full runtime enforcement.

| Case | Input summary | Expected outcome | Endpoint |
|---|---|---|---|
| Allowed | Complete fan_on action for fan_1 | Allow after validation | POST /fan/on |
| Blocked | fan_on action missing required fields | Block | None |
| Risky / approval | open_window targeting unknown_device | Reject direct execution / review only | None |
