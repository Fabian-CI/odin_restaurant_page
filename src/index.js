import './navbar-style.css';
import getHomePage from './home-page.js';

(function navButtons() {
    const dropMenu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-slide');
    const closeBtn = document.getElementById('close-menu');
    const footer = document.getElementById('footer');
    
    menuBtn.addEventListener('click', () => {
        dropMenu.style.height = "100%";
        footer.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        dropMenu.style.height = "0%";
        footer.style.display = 'grid';
    });
})();

(function loadPage() {
    let isPageLoaded = false;
    let isHomeSelected = false;
    const homeBtn = document.getElementById('home_btn');
    homeBtn.addEventListener('click', () => {
        isHomeSelected = true;
        console.log('user has selected Home page');
    });

    (function loadHomePage() {
        if(!isPageLoaded || isHomeSelected) {
            getHomePage();
            isPageLoaded = true;
        }
        else {
            console.log('Page is already selected');
        }
    })()
})()
