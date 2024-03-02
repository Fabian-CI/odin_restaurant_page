import './menu-page-style.css';

function getMenuPage() {
    const container = document.getElementById('content');
    function componentMenu() {
        const menu = document.createElement('div');
        menu.classList.add('wb-menu');

        return menu;
    }

    container.appendChild(componentMenu());
}

export default getMenuPage;