const crypto = require('node:crypto');
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
function createWallet() {
 const p=crypto.generateKeyPairSync('ed25519');
 return {publicKey:p.publicKey.export({type:'spki',format:'pem'}),privateKey:p.privateKey};
}
class Transaction {
 constructor(fromAddress,toAddress,amount,nonce=0) {Object.assign(this,{fromAddress,toAddress,amount,nonce});this.id=this.calculateHash();}
 calculateHash() {return hash(JSON.stringify([this.fromAddress,this.toAddress,this.amount,this.nonce]));}
 signTransaction(key) {
  if(crypto.createPublicKey(key).export({type:'spki',format:'pem'})!==this.fromAddress) throw Error('Key does not own this wallet.');
  this.signature=crypto.sign(null,Buffer.from(this.calculateHash()),key).toString('hex');
 }
 isValid() {
  if(!Number.isSafeInteger(this.amount)||this.amount<=0||!this.toAddress||!Number.isSafeInteger(this.nonce)||this.nonce<0||this.id!==this.calculateHash()) return false;
  if(this.fromAddress===null) return !this.signature;
  try {return !!this.signature && crypto.verify(null,Buffer.from(this.calculateHash()),this.fromAddress,Buffer.from(this.signature,'hex'));} catch {return false;}
 }
}
class CryptoBlock {
 constructor(timestamp,transactions,precedingHash='0',height=0) {Object.assign(this,{timestamp,transactions:structuredClone(transactions),precedingHash,height,nonce:0});this.hash=this.computeHash();}
 computeHash() {return hash(JSON.stringify([this.height,this.timestamp,this.precedingHash,this.transactions,this.nonce]));}
 mineBlock(difficulty) {while(!this.hash.startsWith('0'.repeat(difficulty))){this.nonce++;this.hash=this.computeHash();}}
 hasValidTransactions() {return this.transactions.every(t=>Object.assign(new Transaction(),t).isValid());}
}
class CryptoBlockchain {
 constructor(allocations=[],{difficulty=3,miningReward=10}={}) {
  if(!Number.isInteger(difficulty)||difficulty<1||difficulty>5||!Number.isSafeInteger(miningReward)||miningReward<=0) throw Error('Invalid configuration.');
  this.difficulty=difficulty;this.miningReward=miningReward;
  const genesis=new CryptoBlock(0,allocations.map(a=>new Transaction(null,a.address,a.amount)),'0',0);
  if(!genesis.hasValidTransactions()) throw Error('Invalid starting allocation.');
  this.blockchain=[genesis];this.genesisHash=genesis.hash;this.pendingTransactions=[];
 }
 obtainLatestBlock(){return this.blockchain.at(-1);}
 getBalanceOfAddress(address){return this.blockchain.flatMap(b=>b.transactions).reduce((n,t)=>n+(t.toAddress===address?t.amount:0)-(t.fromAddress===address?t.amount:0),0);}
 availableBalance(address){return this.getBalanceOfAddress(address)-this.pendingTransactions.filter(t=>t.fromAddress===address).reduce((n,t)=>n+t.amount,0);}
 nextNonce(address){return [...this.blockchain.flatMap(b=>b.transactions),...this.pendingTransactions].filter(t=>t.fromAddress===address).length;}
 addTransaction(t){
  if(!t.fromAddress||!t.isValid()) throw Error('Invalid transaction or signature.');
  if([...this.blockchain.flatMap(b=>b.transactions),...this.pendingTransactions].some(x=>x.id===t.id)) throw Error('Duplicate transaction rejected.');
  if(t.nonce!==this.nextNonce(t.fromAddress)) throw Error('Invalid transaction sequence.');
  if(t.amount>this.availableBalance(t.fromAddress)) throw Error('Insufficient available funds: pending transfers already reserve this balance.');
  this.pendingTransactions.push(structuredClone(t));return t.id;
 }
 minePendingTransactions(address){
  if(!address) throw Error('Choose a reward wallet.');
  if(!this.checkChainValidity()) throw Error('Cannot mine an invalid chain.');
  const height=this.blockchain.length;
  const b=new CryptoBlock(Date.now(),[...this.pendingTransactions,new Transaction(null,address,this.miningReward,height)],this.obtainLatestBlock().hash,height);
  b.mineBlock(this.difficulty);
  const candidate=Object.assign(Object.create(CryptoBlockchain.prototype),this,{blockchain:[...this.blockchain,b]});
  if(!candidate.checkChainValidity())throw Error('Pending pool contains invalid transactions.');
  this.blockchain.push(b);this.pendingTransactions=[];return b;
 }
 checkChainValidity(){
  if(!this.blockchain.length)return false;
  const balances=new Map(),nonces=new Map(),seen=new Set();
  for(let i=0;i<this.blockchain.length;i++){
   const b=this.blockchain[i];
   if(b.height!==i||b.hash!==b.computeHash()||!b.hasValidTransactions())return false;
   if(i===0?b.hash!==this.genesisHash:b.precedingHash!==this.blockchain[i-1].hash||!b.hash.startsWith('0'.repeat(this.difficulty)))return false;
   let rewards=0;
   for(let j=0;j<b.transactions.length;j++){
    const t=b.transactions[j];if(seen.has(t.id))return false;seen.add(t.id);
    if(t.fromAddress===null){if(i>0&&(++rewards!==1||j!==b.transactions.length-1||t.amount!==this.miningReward||t.nonce!==i))return false;}
    else {
     if(i===0||t.nonce!==(nonces.get(t.fromAddress)||0)||(balances.get(t.fromAddress)||0)<t.amount)return false;
     nonces.set(t.fromAddress,t.nonce+1);balances.set(t.fromAddress,balances.get(t.fromAddress)-t.amount);
    }
    balances.set(t.toAddress,(balances.get(t.toAddress)||0)+t.amount);
   }
   if(i>0&&rewards!==1)return false;
  }
  return true;
 }
}
module.exports={CryptoBlockchain,CryptoBlock,Transaction,createWallet};
