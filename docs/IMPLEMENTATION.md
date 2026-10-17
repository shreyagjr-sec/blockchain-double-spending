# Revised implementation notes

The original peer-alert prototype modified links and removed blocks after detecting suspicious transactions. The revised implementation rejects invalid transfers before mining. The observer records each accepted or rejected submission, and confirmed history stays intact.

Wallets use Node's Ed25519 key generation and signatures. Transaction IDs hash sender, recipient, integer amount, and sender sequence. Validation checks signatures, unique IDs, sequence ordering, balance sufficiency, block links, hashes, proof of work, genesis integrity, and one correctly sized reward per mined block.

Pending transfers reserve only confirmed balances. Incoming pending credits cannot be spent until mined. Mining copies the pool, adds a reward, validates the candidate chain, appends the block, and clears pending entries. The demonstration difficulty is intentionally low.

Tests cover transfer settlement, pool clearing, rewards, pending overspending, duplicates and replay, signatures and mutation, invalid amounts, sequence gaps, reward injection, tampering, pool isolation, and observer records. Nine tests passed in the recorded execution.

The local server keeps three demonstration wallets in memory and only listens on loopback. Browser responses omit private keys. The simulation has no persistence, multi-node consensus, authentication, transaction fees, or production security claim.
