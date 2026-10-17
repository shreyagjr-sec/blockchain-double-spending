// Rejections must never rewrite confirmed history.
class PeerAlert {
 constructor(reason){this.reason=reason;}
 process(){return {status:'blocked',reason:this.reason};}
}
module.exports={PeerAlert};
