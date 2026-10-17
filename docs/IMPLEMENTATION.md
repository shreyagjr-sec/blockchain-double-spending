# Changes made

## Transaction checks

The earlier code did not fully check a sender's funds before accepting a payment. I changed it so pending transfers reserve the money they need. This stops another transfer from using the same funds.

Transactions also have an ID and a sequence number. The code rejects repeated transfers, incorrect sequences, invalid signatures, and amounts that are zero, negative, or not whole numbers.

## Mining and block validation

Each mined block now has a separate copy of its transactions. Mining adds a reward and clears the pending pool, so earlier payments are not processed again.

The validation code checks the block hashes, links, signatures, balances, transaction order, and rewards. It also detects changes to the genesis block.

## Attack handling

The earlier peer-alert example removed blocks and changed their links. I replaced this with rejection before mining. The observer records the rejected attempt while leaving confirmed blocks unchanged.

## Interface and setup

I added a dashboard with wallet balances, transfer controls, a block explorer, and an attack simulation. The console demo is still available. The project uses Node.js built-in cryptography, so it no longer needs the original external signing libraries.

## Tests

The 9 tests cover normal transfers, rewards, double spending, repeated transactions, signatures, invalid amounts, transaction order, tampering, and observer records. All passed in the recorded run.

## Still to improve

The project does not yet save its data or connect multiple nodes. Wallets are managed by the local demo server. These are future improvements; the current version is intended for learning and demonstrations.
