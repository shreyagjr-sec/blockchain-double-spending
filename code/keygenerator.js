const {createWallet}=require('./CryptoBlockchain');
const w=createWallet();
console.log('Public key:\n'+w.publicKey);
console.log('Private key (keep secret):\n'+w.privateKey.export({type:'pkcs8',format:'pem'}));
