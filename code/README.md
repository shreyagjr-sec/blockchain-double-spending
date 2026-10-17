# Run Ledger Lab

Use Node.js 20 or newer. No extra packages are required.

- `node main.js` runs the console demo.
- `node --test test/blockchain.test.js` runs the tests.
- `node server.js` starts the dashboard at http://127.0.0.1:3000.
- `node evidence.js` runs the named demo and tests together.

Keep the server running while using the dashboard. In VS Code, choose a Ledger Lab launch option under Run and Debug. The launch file uses `node` from your PATH.

Alice and Bob each start with 100 demo credits in the dashboard. The console example starts Alice with 100 and Bob with zero. These are separate demonstrations.

See the [main README](../README.md) for the earlier version, changes, screenshots, and report extract.
