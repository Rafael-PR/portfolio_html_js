const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

//add eventlistener
menu.addEventListener('click',mobileMenu);

//So könnte man es auch schreiben !!
//menu.addEcemntListener('click',function() {
//    menu.classList.toggle('is-active')
//    menuLinks.classList.toggle('active')
//    })

