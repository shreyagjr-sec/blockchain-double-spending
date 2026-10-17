class NetworkObserver {
 constructor(chain){this.chain=chain;this.events=[];}
 submit(t){
  try {const id=this.chain.addTransaction(t);this.events.unshift({time:new Date().toISOString(),status:'accepted',message:'Signed transfer accepted into the pending pool.',id});return id;}
  catch(e){this.events.unshift({time:new Date().toISOString(),status:'blocked',message:e.message,id:t.id});throw e;}
 }
}
module.exports={NetworkObserver};
