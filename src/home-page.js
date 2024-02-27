import './home-page-style.css';
console.log("Testing home-page.js");

function getHomePage() {
    const container = document.getElementById('content');
    function componentAbout() {
        const about = document.createElement('div');
        about.classList.add('home-content');

        const introduction = document.createElement('div');
        introduction.classList.add('wb-introduction');
        about.appendChild(introduction);

        const subTitle = document.createElement('h3');
        introduction.appendChild(subTitle);
        subTitle.innerText = "Welcome to Oceanic!";

        const introductionText = document.createElement('span');
        introduction.appendChild(introductionText);
        introductionText.innerText = "Welcome to Oceanic, where the ocean's bounty meets culinary excellence. Dive into a world of tantalizing flavors and fresh seafood delights. From succulent shrimp to savory crab legs, experience the taste of the sea like never before. Come join us and embark on a culinary journey that celebrates the ocean's finest offerings."

        return about;
    }

    function componentSchedule() {
        const schedule = document.createElement('div');
        schedule.classList.add('home-content'); 
    }
    
    container.appendChild(componentAbout());
}

export default getHomePage;

