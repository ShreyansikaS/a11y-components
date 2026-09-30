// Tabs (WAI-ARIA Authoring Practices: automatic activation, roving tabindex)
const tabs=[...document.querySelectorAll('[role=tab]')];
function selectTab(t){tabs.forEach(x=>{const on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;
  document.getElementById(x.getAttribute('aria-controls')).hidden=!on});t.focus()}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectTab(t));
 t.addEventListener('keydown',e=>{const k={ArrowRight:(i+1)%tabs.length,ArrowLeft:(i-1+tabs.length)%tabs.length,Home:0,End:tabs.length-1}[e.key];
  if(k!==undefined){e.preventDefault();selectTab(tabs[k])}})});

// Disclosure
document.querySelectorAll('.disc').forEach(b=>b.addEventListener('click',()=>{
 const open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!open);
 document.getElementById(b.getAttribute('aria-controls')).hidden=open}));

// Modal with focus trap and focus return
const modal=document.getElementById('modal'),openBtn=document.getElementById('open');
const focusables=()=>[...modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')];
function openModal(){modal.hidden=false;document.body.style.overflow='hidden';focusables()[0].focus()}
function closeModal(){modal.hidden=true;document.body.style.overflow='';openBtn.focus()}
openBtn.onclick=openModal;document.getElementById('cancel').onclick=closeModal;
document.getElementById('confirm').onclick=()=>{closeModal();toast('Draft deleted')};
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(modal.hidden)return;
 if(e.key==='Escape')closeModal();
 if(e.key==='Tab'){const f=focusables(),a=f[0],z=f[f.length-1];
  if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}
  else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});

// Toast (announced through the aria-live region)
function toast(msg){const d=document.createElement('div');d.className='toast';d.textContent=msg;
 document.getElementById('toasts').append(d);setTimeout(()=>d.remove(),4000)}
document.getElementById('toastBtn').onclick=()=>toast('Changes saved');
