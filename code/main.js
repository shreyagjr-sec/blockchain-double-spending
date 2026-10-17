const {CryptoBlockchain,Transaction,createWallet}=require('./CryptoBlockchain');
const {NetworkObserver}=require('./NetworkObserver');
const alice=createWallet(),bob=createWallet(),miner=createWallet();
const chain=new CryptoBlockchain([{address:alice.publicKey,amount:100}]);
const observer=new NetworkObserver(chain);
function send(amount){const t=new Transaction(alice.publicKey,bob.publicKey,amount,chain.nextNonce(alice.publicKey));t.signTransaction(alice.privateKey);observer.submit(t);}
console.log('\n LEDGER LAB / double-spending defense\n');
send(70);
try{send(70);}catch(e){console.log('ATTACK BLOCKED:',e.message);}
console.log('Block mined:',chain.minePendingTransactions(miner.publicKey).hash);
console.table({Alice:chain.getBalanceOfAddress(alice.publicKey),Bob:chain.getBalanceOfAddress(bob.publicKey),Miner:chain.getBalanceOfAddress(miner.publicKey)});
console.log('Chain integrity:',chain.checkChainValidity()?'VERIFIED':'FAILED');
