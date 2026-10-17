console.log('============================================================');
console.log(' LEDGER LAB | Run by Shreya Gajjar');
console.log(' Blockchain transaction integrity and double-spending defense');
console.log('============================================================');
console.log('Executed: '+new Date().toISOString());
require('./main');
const {spawnSync}=require('node:child_process');
const result=spawnSync(process.execPath,['--test','--test-reporter=spec','test/blockchain.test.js'],{cwd:__dirname,encoding:'utf8',env:{...process.env,NODE_OPTIONS:'',VSCODE_INSPECTOR_OPTIONS:''}});
console.log('\nAUTOMATED VERIFICATION');
console.log(result.stdout);if(result.stderr)console.error(result.stderr);
process.exitCode=result.status===0?0:1;
console.log(result.status===0?'Execution complete: demo verified and 9 tests passed.':'Verification failed.');

