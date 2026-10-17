# Original design

The original project used a network observer to check pending payments from a wallet. It compared the total payment amount with the wallet balance. When the payments exceeded that balance, it raised a warning.

A peer-alert step then removed suspicious transactions and changed parts of the demonstration chain. This was the approach shown in the original report.

The updated code rejects invalid transfers before mining and keeps confirmed blocks unchanged. See [Changes made](IMPLEMENTATION.md) for the differences and [the original blockchain report chapter](REPORT-TEXT.md) for the earlier design.
