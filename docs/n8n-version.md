\# n8n version pin



This file records the exact n8n version and documentation assumptions used in the \*\*new-yacoub\*\* thesis.



The purpose is to prevent source-of-truth drift during implementation and report writing.



\---



\## Status



Version pin status: \*\*temporary placeholder until Docker baseline is finalized\*\*



This file must be updated as soon as the first working local n8n baseline is created.



\---



\## Chosen n8n version



n8n version: `TBD`

Docker image tag: `n8nio/n8n:TBD`



Reason:

The exact version/image tag has not yet been locked.

It will be pinned when the first reproducible Docker-based local setup is confirmed working.



\---



\## Date pinned



Date pinned: `TBD`



Update this with the real date when the version is finalized.



\---



\## Thesis usage context



This thesis uses n8n as:



\- the self-hosted workflow engine

\- the runtime for the deterministic baseline path

\- the runtime for the minimal agent-enhanced path

\- the integration point between middleware and workflow logic



The thesis does \*\*not\*\* treat n8n version comparison as a research goal.



\---



\## Docs/pages relied on



The following categories of n8n documentation are relevant to this thesis:



\- workflow fundamentals

\- webhook behavior

\- AI Agent node or equivalent workflow node behavior

\- evaluation/measurement-relevant workflow behavior

\- MCP-related documentation (reference only, not phase 0)

\- self-hosting / Docker deployment guidance



When the exact version is pinned, add the specific docs pages and/or URLs actually relied upon during implementation.



Suggested format:



\- `Doc/page name` — purpose in thesis

\- `Doc/page name` — purpose in thesis

\- `Doc/page name` — purpose in thesis



\---



\## Locked assumptions



The current assumptions are:



1\. n8n will be used in a self-hosted local setup first.

2\. Development starts on PC before Raspberry Pi deployment.

3\. n8n is part of the workflow orchestration layer, not the thesis subject by itself.

4\. The thesis evaluates system behavior and integration, not broad n8n version benchmarking.

5\. n8n core will not be modified unless explicitly required.



\---



\## Update rule



If any of the following changes:

\- n8n version

\- Docker image tag

\- relevant docs relied upon

\- runtime assumptions tied to n8n behavior



then this file must be updated together with:

\- `docs/decisions.md`

\- `docs/plans/implementation-plan.md`

\- `docs/ongoing/integration-contract.md` (if interface behavior changes)



\---



\## Finalization checklist



Before implementation moves beyond the local baseline, replace the placeholders above with:



\- exact n8n version

\- exact Docker image tag

\- pin date

\- concrete docs pages actually used

\- any version-specific limitations or notes

