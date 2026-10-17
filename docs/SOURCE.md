# Source and Attribution

The original project documentation is based on **Preventing Double Spending Attacks in Cryptocurrency Blockchains Using Network Observer and Peer-Alert System**, the April 2024 Computer Engineering internship report submitted by **Shreya Gajjar** to Gujarat Technological University. The report describes work at GTU Graduate School of Engineering and Technology during January 15–April 15, 2024.

The supplied report is `201040107003_8th_Sem_Report.docx`. The original JavaScript source was supplied as `Blockchain.zip`.

## Historical material

`DESIGN.md` and `FIGURES.md` describe the earlier report demonstration. Its elliptic-curve signing and model-specific peer-alert behavior should not be confused with the revised implementation. The complete report contains additional IoT and internship material.

## Revised implementation

The Ledger Lab revision was developed with AI assistance in this workspace at Shreya's request. It replaces the transaction and block logic, adds tests, and provides a local dashboard. It uses Ed25519 rather than the original secp256k1 library, rejects conflicting transfers before mining, and preserves confirmed history. Old keys and transactions are incompatible.

The original repository history and report attribution are preserved. The named execution banner records who the demonstration is prepared for; it is not proof of sole authorship.

The original full report is retained locally. Its GitHub upload is pending because automatic approval review could not process the large binary payload. No screenshots have been fabricated; genuine visual capture remains pending local VS Code execution approval.
