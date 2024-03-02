import './navbar-style.css';
import getHomePage from './home-page.js';
import getMenuPage from './menu-page.js';
import getContactPage from './contact-page.js';

const navButtons = (function() {
    const dropMenu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-slide');
    const closeBtn = document.getElementById('close-menu');
    
    menuBtn.addEventListener('click', openMenu);

    closeBtn.addEventListener('click', closeMenu);

    function openMenu() {
        dropMenu.style.height = "100%";
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        dropMenu.style.height = "0%";
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
    }

    return {
        openMenu,
        closeMenu
    };
})();

const loadPage = (function() {
    const content = document.getElementById('content')
    const homeBtn = document.getElementById('home_btn');
    const menuBtn = document.getElementById('menu_btn');
    const contactBtn = document.getElementById('contact_btn');
    let isPageLoaded = false;
    homeBtn.addEventListener('click', () => {
        if(isPageLoaded){
            clearPage();
            getHomePage();
            isPageLoaded = true;
        }
    });
    menuBtn.addEventListener('click', () => {
        if(isPageLoaded){
            clearPage();
            getMenuPage();
            isPageLoaded = true;
        }
    });
    contactBtn.addEventListener('click', () => {
        if(isPageLoaded){
            clearPage();
            getContactPage();
            isPageLoaded = true;
        }
    });

    (function loadHomePage() {
        if (!isPageLoaded){
            getHomePage();
            isPageLoaded = true;
        }
    })();

    function clearPage() {
        content.innerHTML = "";
        navButtons.closeMenu();
    }

    return {
        clearPage
    };    
})();
