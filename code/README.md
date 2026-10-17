# Ledger Lab

A local, interactive blockchain laboratory with signed transfers, proof-of-work mining, wallet balances, and double-spending prevention.

## Run in VS Code
Select **Ledger Lab — Dashboard** under Run and Debug and press F5. It opens http://127.0.0.1:3000. The server must be running to use the dashboard. If port 3000 is occupied by an earlier run, stop that run first.

Node.js 20 or newer is required. No third-party packages or install step are needed. The launch configurations use the Node runtime already available on this computer; update runtimeExecutable if moving the project.

Terminal alternatives:
- node server.js — dashboard
- node main.js — console demonstration
- node --test test/blockchain.test.js — tests

## Try it
Alice and Bob each begin with 100 LGR; Miner begins with zero. Queue a transfer, inspect reserved funds, and mine it. The miner earns 10 LGR per block. Simulate double spending to submit two transfers whose combined value exceeds Alice's available balance. The first enters the pool; the second is rejected and recorded. Mine the accepted transfer or reset the lab.

## What changed
The core was rewritten around SHA-256 block hashes and Ed25519 transaction signatures using Node's built-in cryptography. Transactions have sequence numbers and stable IDs. Pending transfers reserve confirmed funds, duplicates and invalid signatures are rejected, and mining clears the pool and adds a reward. Validation checks hashes, links, proof of work, balances, signatures, sequences, and rewards. Rejections never remove confirmed blocks.

The interface, API, automated tests, and launch configurations are new. The original ZIP remains untouched. This version changes the original secp256k1 signing scheme to Ed25519; old keys and transactions are incompatible.

## Scope
This is an in-memory educational simulation with three server-managed demonstration wallets. Private keys stay in the local server. There is no peer-to-peer network, production wallet authentication, persistent storage, or real currency. Restarting the server discards the ledger. The block difficulty is intentionally low for responsive demonstrations. Retain attribution to any original project or report when presenting this derivative work.
