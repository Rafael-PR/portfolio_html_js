const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

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

// Show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const portfolioMenu = document.querySelector('#portfolio-page')
    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    // adds 'highlight' class to menu items
    if(window.innerWidth > 960 && scrollPos < 850) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1996) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        portfolioMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 960 && scrollPos < 3196) {
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 960 && scrollPos < 4000) {
        contactMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        portfolioMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)





