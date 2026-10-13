# Double Spending Detection in a Blockchain Prototype

**Network observers · Peer alerts · Transaction integrity**

An educational JavaScript blockchain project that explores how pending-transaction monitoring can identify payments that exceed a sender’s available balance. The report demonstrates an observer warning and a peer-alert response alongside block validation, mining rewards, and signed transactions.

**Author:** Shreya Gajjar  
**Project context:** GTU Graduate School of Engineering and Technology internship, January–April 2024  
**Status:** Project documentation available. Source code and replacement images pending upload.

## Security Problem

The report’s example begins with a sender holding **10 units** and submitting **two payments of 10 units** to different recipients. The pending payments require **20 units**, exceeding the available balance. The prototype uses this scenario to demonstrate a suspected double-spending attempt.

This example illustrates conflicting pending payments in a simplified ledger. It does not demonstrate an attack against a live cryptocurrency network.

## Technical Stack

| Component | Technology described in the report |
| --- | --- |
| Implementation language | JavaScript |
| Runtime | Node.js |
| Transaction signatures | Elliptic-curve cryptography through `elliptic` |
| Block integrity | Recomputed block hashes and previous-hash linkage |
| Demonstration interface | Terminal output |

## Approach

1. **Validate the chain.** Recompute each block’s hash and check its link to the preceding block. The report demonstrates validation before and after changing transaction data.
2. **Authenticate transactions.** Use signing keys and elliptic-curve signatures in the transaction demonstration.
3. **Inspect pending payments.** Monitor transactions associated with a sender and compare their combined value with the sender’s balance.
4. **Flag suspicious activity.** Display an abort warning when the demonstration’s observer condition is met.
5. **Demonstrate peer response.** Illustrate alerts, removal of suspicious transactions, and a model-specific chain response before updating balances.

## Demonstration Highlights

### Conflicting pending payments

The report highlights the same sender submitting payments to different recipients.

### Observer warning

The observer reports a suspected double-spending attempt and asks the sender to cancel the last transaction or try again later.

### Peer response

The report’s peer-alert walkthrough reduces four pending transactions to two after removing the suspicious payments.

[Read the report demonstration notes](docs/FIGURES.md).

## What the Report Demonstrates

| Scenario | Documented observation | Figures |
| --- | --- | --- |
| Chain integrity | Validation returns true before modification and false after tampering | 5.6–5.7 |
| Mining and transactions | Console output shows rewards and signed transactions | 5.8–5.9 |
| Conflicting payments | Two payments exceed the example sender balance | 5.10 |
| Observer check | An abort warning is displayed | 5.11 |
| Peer-alert walkthrough | Suspicious transactions are removed and remaining balances updated | 5.12–5.18 |

These observations come from the report. Runtime behavior will need verification once the source code is uploaded.

## Run Command from the Report

The report instructs the reader to enter the directory containing the entry-point file, then run:

```bash
node CryptoBlockchain.js
```

**This command cannot run from this repository yet:** `CryptoBlockchain.js` has not been uploaded. The report mentions the `elliptic` library but does not specify dependency versions or a complete installation procedure. Setup instructions will be completed alongside the source code.

## Repository Guide

| Path | Contents |
| --- | --- |
| `README.md` | Project overview, demonstration evidence, and documented run command |
| `DESCRIPTION.md` | Concise project description and context |
| `docs/DESIGN.md` | Observer logic and peer-alert workflow |
| `docs/FIGURES.md` | Text notes on the report’s demonstration figures |
| `docs/SOURCE.md` | Source attribution and documentation scope |
| `images/` | Reserved for replacement project images |
| `code/` | Reserved for source upload; contains only an empty `.gitkeep` |

## Scope and Limitations

This is an academic prototype. The report does not supply reproducible performance measurements, detection accuracy, distributed consensus tests, or a production security assessment.

The observer example is a limited pending-payment heuristic. Equal payment amounts alone are not evidence of double spending, and digital signatures authenticate transactions without independently preventing conflicting spends.

The report’s response includes changing hash links and creating a replacement genesis block. This is a model-specific demonstration and should not be interpreted as a valid recovery procedure for a production blockchain.

## Next Implementation Step

Upload the original source files into `code/`, identify the entry point and dependencies, and verify the documented command against the complete implementation.
