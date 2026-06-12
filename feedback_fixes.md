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

- [x] (fixed) Remove List of Figures and List of Tables.
- [x] (fixed) Keep Terminology / Notation table on the same page as its heading.
  - Note: Removed front-matter List of Figures and List of Tables from thesis.tex. Changed the terminology table to a non-floating [H] table and started the terminology section cleanly so the heading and table remain together.
- [x] (fixed) Fig. 1: make image larger/readable by splitting the workflow diagram into two rows with a return/downward flow.
  - Note: Replaced the wide one-row Figure 1 with a two-row version of the same conceptual event-to-action chain. The LaTeX include now uses normal text width so the diagram is larger and easier to read.
- [x] (fixed) Fig. 2: remove confusing scope-limits box and adjust figure placement to avoid half-empty page.
  - Note: Removed the scope-limits box from the architecture diagram and kept scope limitations in the surrounding text. Changed Figure 2 placement from forced [H] to flexible placement with max height so the figure no longer causes a large blank area before it.

## 3. References / formatting

- [x] (fixed) Reference list: remove page-reference/backref information from bibliography.
  - Note: Removed the biblatex `backref` option from miunthesis.cls so the reference list no longer lists the pages where each source is cited.
- [x] Referenslistan. Se över att referenserna är fullständiga, till exempel IEEE-poster på s. 38-40 som saknar konferens/journal samt eventuella sid- och volymnummer.
  - Note: IEEE-related references were checked so the reference list shows full journal names such as Proceedings of the IEEE, IEEE Internet of Things Journal, and IEEE Access, with volume/page/DOI fields where applicable. Page backrefs remain disabled.
