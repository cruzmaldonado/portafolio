const menuMobile=document.getElementById("menu-mobile");
const menu=document.getElementById("menu");


menuMobile.addEventListener('click',()=>{
    menu.classList.toggle('main-menu-show');
})
