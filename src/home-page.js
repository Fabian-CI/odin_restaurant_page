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
        
        const subTitle = document.createElement('h3');
        schedule.appendChild(subTitle);
        subTitle.innerText = "Hours";

        const tableWrp = document.createElement('div');
        tableWrp.classList.add('table-wrapper');
        schedule.appendChild(tableWrp);

        const weekPeriod = document.createElement('span');
        weekPeriod.innerText = "Monday - Friday: 6am - 10pm";
        tableWrp.appendChild(weekPeriod);

        const saturday = document.createElement('span');
        saturday.innerText = "Saturday: 8am - 10pm";
        tableWrp.appendChild(saturday);

        const sunday = document.createElement('span');
        sunday.innerText = "Sunday: 8am - 8pm";
        tableWrp.appendChild(sunday);

        return schedule;
    }

    function componentLocation() {
        const location = document.createElement('div');
        location.classList.add('home-content');

        const subTitle = document.createElement('h3');
        subTitle.innerText = "Location";
        location.appendChild(subTitle);

        const details = document.createElement('div');
        details.classList.add('wb-location');
        location.appendChild(details);

        const locationText = document.createElement('span');
        details.appendChild(locationText);
        locationText.innerText = "123 Ocean View Drive, Coral Bay, Seaside Haven, USA";

        return location;
    }
    
    container.appendChild(componentAbout());
    container.appendChild(componentSchedule());
    container.appendChild(componentLocation());
}

export default getHomePage;

