# Examiner Feedback Fixes

Source: `C:/Users/Jake_/Downloads/yada2100_feedback.docx`

## 1. Questions

- [x] (fixed) 5.1. Kan du förklara vad du menar med att "...the workflow selects either the deterministic or agent-enhanced path...".
- [x] (fixed) Fig. 5 (sid. 24). Här står det "Temp >= 30.0 C", men på andra ställen står det fläkt på vid 31,4 och fläkt av vid 24,5. Hur kommer det sig?
- [x] (fixed) Tabell 3, 4 och 8: reduce unnecessary decimal precision and clarify number of tests / single-run latency observations.
  - Note: Latency values are now rounded to approximately 2-3 significant figures. The Results overview now states that the reported latency values are single-run observations from the final successful run per defined case, not repeated-trial averages, and no standard deviation is reported.
- [ ] Tabell 7. Om tabell 8 visualiseras med en graf bör även informationen från tabell 3 och 4 övervägas.
- [ ] Hur har "contract-valid" faktiskt verifierats i runtime? Rapporten skiljer mellan kontraktsformad output och faktisk validering, men säkerhets-/valideringsdelen verkar snarare vara dokumenterad design än implementerad och mätt runtime-validering.

## 2. Comments

- [ ] Ta bort list of figures och list of tables eftersom de tillför lite och ska blockas bort ur mallen.
- [ ] Se till att terminologitabellen hamnar på samma sida som rubriken.
- [ ] Fig. 1. Gör bilden större och använd en pil som svänger 180 grader så flödet kan delas upp på två rader.
- [ ] Fig. 2. Begränsningsrutan är förvirrande; förskjut bilden i förhållande till texten så att en halv tom sida undviks.

## 3. References / formatting

- [ ] Referenslistan. Ta bort information om vilka sidor källorna refereras på.
- [ ] Referenslistan. Se över att referenserna är fullständiga, till exempel IEEE-poster på s. 38-40 som saknar konferens/journal samt eventuella sid- och volymnummer.
