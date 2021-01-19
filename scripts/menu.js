let btnMenu = document.querySelector('.btnMenu');
let menu = document.querySelector('.menu');

btnMenu.addEventListener('click', ()=>{
    $(menu).toggleClass('visible');
})