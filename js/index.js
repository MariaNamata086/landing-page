const btn = document.getElementById('menu-btn');
const mobileMenu = document.querySelector('#menu');
console.log(mobileMenu);

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
})