const $=id=>document.getElementById(id);
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let toastTimer;
function toast(message,error=false){$('toast').textContent=message;$('toast').className=`visible ${error?'error':''}`;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').className='',6500);}
function render(s){
 $('height').textContent=s.blocks.length-1;$('pending-count').textContent=s.pending.length;$('pool-badge').textContent=s.pending.length;
 $('blocked').textContent=s.events.filter(e=>e.status==='blocked').length;$('integrity').textContent=s.valid?'Verified ↗':'Invalid !';
 $('wallets').innerHTML=s.wallets.map(w=>`<div class="wallet"><div class="avatar">${w.name[0]}</div><div class="wallet-name">${w.name}</div><div class="wallet-address">${w.address.slice(0,6)}…${w.address.slice(-4)}</div><div class="balance">${w.balance}<small>LGR</small></div><div class="available">${w.available} available</div></div>`).join('');
 $('pending').innerHTML=s.pending.length?s.pending.map(t=>`<div class="tx-row"><div><div class="tx-route">${escape(t.fromAddress)} &nbsp; → &nbsp; ${escape(t.toAddress)}</div><div class="tx-id">${t.id.slice(0,22)}… · #${t.nonce}</div></div><div class="tx-amount">${t.amount} <small>LGR</small></div></div>`).join(''):'<div class="empty"><span class="empty-icon">◇</span>All clear. Your next transfer starts here.</div>';
 $('events').innerHTML=s.events.length?s.events.slice(0,6).map(e=>`<div class="event ${e.status}"><strong>${e.status==='blocked'?'● BLOCKED':'● ACCEPTED'}</strong><time>${new Date(e.time).toLocaleTimeString()}</time><p>${escape(e.message)}</p></div>`).join(''):'<div class="empty">No attempts yet. Put the defense to the test.</div>';
 $('blocks').innerHTML=[...s.blocks].reverse().map(b=>`<article class="block"><div class="block-head"><div class="block-title"><span>▣</span> ${b.height?'Block '+String(b.height).padStart(3,'0'):'Genesis block'}</div><time>${b.height?new Date(b.timestamp).toLocaleTimeString():'Origin of the ledger'}</time></div><div class="hash">${b.hash}</div><div class="block-meta"><span>RECORDS <b>${b.transactions.length}</b></span><span>NONCE <b>${b.nonce}</b></span><span>STATUS <b>Confirmed</b></span></div><details><summary>Inspect transactions & parent hash</summary><p>Parent: ${b.precedingHash}</p>${b.transactions.map(t=>`<p>${escape(t.fromAddress)} → ${escape(t.toAddress)} · ${t.amount} LGR</p>`).join('')}</details></article>`).join('');
}
async function action(route,body={}){
 const buttons=[...document.querySelectorAll('button')];buttons.forEach(b=>b.disabled=true);
 try{const response=await fetch('/api/'+route,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const s=await response.json();if(!response.ok)throw Error(s.error);render(s);toast(s.message);}
 catch(e){toast(e.message,true);try{const r=await fetch('/api/state');if(r.ok)render(await r.json());}catch{}}
 finally{buttons.forEach(b=>b.disabled=false);}
}
 $('transfer').addEventListener('submit',e=>{e.preventDefault();action('transfer',{from:$('from').value,to:$('to').value,amount:Number($('amount').value)});});
 $('mine').onclick=()=>action('mine');$('attack').onclick=()=>action('attack');
 $('reset').onclick=()=>{if(confirm('Reset all demo blocks, transfers, and balances?'))action('reset');};
fetch('/api/state').then(r=>{if(!r.ok)throw Error('Cannot load the ledger.');return r.json();}).then(render).catch(e=>toast(e.message,true));
