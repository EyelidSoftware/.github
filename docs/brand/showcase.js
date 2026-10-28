const body=document.body;
const theme=document.querySelector('#theme');
let remembered;try{remembered=localStorage.getItem('eyelid-theme')}catch{}
const dark=remembered?remembered==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
function applyTheme(value){body.classList.toggle('dark',value);theme.setAttribute('aria-pressed',String(value));theme.textContent=value?'Usar tema claro':'Usar tema escuro'}
applyTheme(dark);
theme.addEventListener('click',()=>{const value=!body.classList.contains('dark');applyTheme(value);try{localStorage.setItem('eyelid-theme',value?'dark':'light')}catch{}});
document.querySelector('#save').addEventListener('click',()=>{document.querySelector('#feedback').textContent='Alterações salvas neste exemplo.'});
const dialog=document.querySelector('#details');document.querySelector('#open').addEventListener('click',()=>dialog.showModal());
const input=document.querySelector('#project');
document.querySelector('#demo').addEventListener('submit',e=>{e.preventDefault();const valid=Boolean(input.value.trim());input.setAttribute('aria-invalid',String(!valid));document.querySelector('#error').textContent=valid?'':'Informe o nome do projeto para continuar.';document.querySelector('#form-status').textContent=valid?'Exemplo criado. Nenhum dado foi enviado.':'';if(!valid)input.focus()});
input.addEventListener('input',()=>{if(input.value.trim()){input.setAttribute('aria-invalid','false');document.querySelector('#error').textContent=''}});
document.querySelector('#new-project').addEventListener('click',()=>{document.querySelector('#componentes').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});input.focus({preventScroll:true})});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('tbody tr').forEach(row=>{row.hidden=button.dataset.filter!=='all'&&row.dataset.state!==button.dataset.filter;if(!row.hidden)count++});document.querySelector('#filter-status').textContent=`${count} ${count===1?'projeto exibido':'projetos exibidos'}`}));
