import './navbar-style.css';

(function navButtons() {
    const dropMenu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-slide');
    const closeBtn = document.getElementById('close-menu');
    
    menuBtn.addEventListener('click', () => {
        dropMenu.style.height = "100%";
    });

    closeBtn.addEventListener('click', () => {
        dropMenu.style.height = "0%";
    });
})();