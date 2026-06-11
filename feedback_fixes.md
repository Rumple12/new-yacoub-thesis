# Examiner Feedback Fixes

Source: `C:/Users/Jake_/Downloads/yada2100_feedback.docx`

## 1. Questions

- [x] (fixed) 5.1. Kan du förklara vad du menar med att "...the workflow selects either the deterministic or agent-enhanced path...".
- [x] (fixed) Fig. 5 (sid. 24). Här står det "Temp >= 30.0 C", men på andra ställen står det fläkt på vid 31,4 och fläkt av vid 24,5. Hur kommer det sig?
- [x] (fixed) Tabell 3, 4 och 8: reduce unnecessary decimal precision and clarify number of tests / single-run latency observations.
  - Note: Latency values are now rounded to approximately 2-3 significant figures. The Results overview now states that the reported latency values are single-run observations from the final successful run per defined case, not repeated-trial averages, and no standard deviation is reported.
- [x] (fixed) Table 7 / Figure 7: use Table 7 as the combined latency table and replace the Raspberry Pi-only graph with a combined graph including Tables 3, 4, and 8.
  - Note: Figure 7 now visualizes all six final full-workflow latency observations from Table 7: local deterministic, local agent-enhanced, and Raspberry Pi validation. Table 8 remains as detailed Raspberry Pi validation evidence.
- [x] (fixed) Hur har contract-valid faktiskt verifierats i runtime? Clarified that the thesis demonstrates contract-shaped output and workflow-level parsing/routing, not measured runtime JSON Schema validation or runtime safety enforcement.
  - Note: The report now distinguishes contract-shaped output from runtime schema validation. It states that full runtime JSON Schema validation and logged safety-enforcement outcomes were not implemented or measured, and that the safety/validation layer is documented design and future work.

## 2. Comments

- [ ] Ta bort list of figures och list of tables eftersom de tillför lite och ska blockas bort ur mallen.
- [ ] Se till att terminologitabellen hamnar på samma sida som rubriken.
- [ ] Fig. 1. Gör bilden större och använd en pil som svänger 180 grader så flödet kan delas upp på två rader.
- [ ] Fig. 2. Begränsningsrutan är förvirrande; förskjut bilden i förhållande till texten så att en halv tom sida undviks.

## 3. References / formatting

- [ ] Referenslistan. Ta bort information om vilka sidor källorna refereras på.
- [ ] Referenslistan. Se över att referenserna är fullständiga, till exempel IEEE-poster på s. 38-40 som saknar konferens/journal samt eventuella sid- och volymnummer.
