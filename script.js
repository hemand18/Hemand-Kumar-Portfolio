const nav=document.querySelector('.nav nav');
document.querySelector('.menu-btn').addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const theme=document.querySelector('.theme-btn');
if(localStorage.getItem('theme')==='light') document.body.classList.add('light');
theme.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');
  theme.textContent=document.body.classList.contains('light')?'☀':'☾';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  document.querySelector('.progress').style.width=(scrollY/max*100)+'%';
});
