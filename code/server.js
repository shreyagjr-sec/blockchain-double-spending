const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const {CryptoBlockchain,Transaction,createWallet}=require('./CryptoBlockchain');
const {NetworkObserver}=require('./NetworkObserver');
const wallets=['Alice','Bob','Miner'].map(name=>({name,...createWallet()}));
let chain,observer;
function reset(){chain=new CryptoBlockchain(wallets.slice(0,2).map(w=>({address:w.publicKey,amount:100})));observer=new NetworkObserver(chain);}
reset();
function send(from,to,amount){
 const a=wallets.find(w=>w.name===from),b=wallets.find(w=>w.name===to);
 if(!a||!b||a===b)throw Error('Choose two different wallets.');
 const t=new Transaction(a.publicKey,b.publicKey,amount,chain.nextNonce(a.publicKey));t.signTransaction(a.privateKey);observer.submit(t);
}
function state(){
 const label=a=>wallets.find(w=>w.publicKey===a)?.name||'Protocol';
 const transfer=t=>({id:t.id,fromAddress:label(t.fromAddress),toAddress:label(t.toAddress),amount:t.amount,nonce:t.nonce});
 return {valid:chain.checkChainValidity(),difficulty:chain.difficulty,reward:chain.miningReward,wallets:wallets.map(w=>({name:w.name,address:require('node:crypto').createHash('sha256').update(w.publicKey).digest('hex'),balance:chain.getBalanceOfAddress(w.publicKey),available:chain.availableBalance(w.publicKey)})),pending:chain.pendingTransactions.map(transfer),blocks:chain.blockchain.map(b=>({...b,transactions:b.transactions.map(transfer)})),events:observer.events};
}
const server=http.createServer(async(req,res)=>{
 const json=(code,data)=>{res.writeHead(code,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
 try{
  if(req.method==='GET'&&req.url==='/api/state')return json(200,state());
  if(req.method==='POST'&&['/api/transfer','/api/mine','/api/attack','/api/reset'].includes(req.url)){
   if(req.headers.origin&&req.headers.origin!==`http://${req.headers.host}`)return json(403,{error:'Origin rejected.'});
   let raw='';for await(const part of req){raw+=part;if(raw.length>4096)return json(413,{error:'Request too large.'});}
   const b=JSON.parse(raw||'{}');let message='';
   if(req.url==='/api/transfer'){send(b.from,b.to,b.amount);message='Transfer signed and queued.';}
   if(req.url==='/api/mine'){chain.minePendingTransactions(wallets[2].publicKey);message='Block mined. Miner received 10 LGR.';}
   if(req.url==='/api/reset'){reset();message='Fresh ledger created.';}
   if(req.url==='/api/attack'){
    const available=chain.availableBalance(wallets[0].publicKey);
    if(available<2)throw Error('Reset the lab to fund Alice for this demonstration.');
    const amount=Math.floor(available/2)+1;send('Alice','Bob',amount);
    try{send('Alice','Bob',amount);throw Error('Unexpected attack result.');}
    catch(e){if(!e.message.startsWith('Insufficient'))throw e;message=`Attack blocked: first transfer reserved ${amount} LGR; the second exceeded the remaining funds.`;}
   }
   return json(200,{...state(),message});
  }
  const files={'/':'index.html','/app.js':'app.js','/style.css':'style.css'};
  if(req.method!=='GET'||!files[req.url])return json(404,{error:'Not found.'});
  const file=files[req.url];res.writeHead(200,{'Content-Type':file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html'});res.end(fs.readFileSync(path.join(__dirname,'public',file)));
 }catch(e){json(400,{error:e.message});}
});
server.on('error',e=>{console.error('Unable to start Ledger Lab:',e.message);process.exitCode=1;});
server.listen(3000,'127.0.0.1',()=>console.log('Ledger Lab: http://127.0.0.1:3000 — Ctrl+C to stop.'));
