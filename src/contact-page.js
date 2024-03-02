import './contact-style.css';

function getContactPage() {
    const container = document.getElementById('content');
    function componentContact() {
        const contact = document.createElement('div');
        contact.classList.add('wb-contact');

        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        contact.appendChild(contactInfo);

        const subTitle = document.createElement('h3');
        subTitle.innerText = "Contact Us";
        contactInfo.appendChild(subTitle);

        const contactData = document.createElement('div');
        contactData.classList.add('contact-data');
        contactInfo.appendChild(contactData);

        const email = document.createElement('div');
        const emailIcon = document.createElement('i');
        const emailText = document.createElement('span');
        email.classList.add('credits-link');
        emailIcon.classList.add('fa-solid', 'fa-envelope');
        email.appendChild(emailIcon);
        emailText.innerText = "oceanicfood@gmail.com";
        email.appendChild(emailText);
        contactData.appendChild(email);

        const instagram = document.createElement('div');
        const instagramIcon = document.createElement('i');
        const instagramText = document.createElement('span');
        instagram.classList.add('credits-link');
        instagramIcon.classList.add('fa-brands', 'fa-instagram');
        instagram.appendChild(instagramIcon);
        instagramText.innerText = "oceanic.food";
        instagram.appendChild(instagramText);
        contactData.appendChild(instagram);

        const twitter = document.createElement('div');
        const twitterIcon = document.createElement('i');
        const twitterText = document.createElement('span');
        twitter.classList.add('credits-link');
        twitterIcon.classList.add('fa-brands', 'fa-twitter');
        twitter.appendChild(twitterIcon);
        twitterText.innerText = "OceanicOfficial";
        twitter.appendChild(twitterText);
        contactData.appendChild(twitter);

        const contactService = document.createElement('div');
        contactService.classList.add('contact-info');
        contact.appendChild(contactService);

        const serviceTitle = document.createElement('h3');
        serviceTitle.innerText = "Type Your Email";
        contactService.appendChild(serviceTitle);

        const serviceContainer = document.createElement('div');
        serviceContainer.classList.add('service-container');
        contactService.appendChild(serviceContainer);

        const serviceSubTitle = document.createElement('span');
        serviceSubTitle.innerText = "We're Ready To Help You";
        serviceContainer.appendChild(serviceSubTitle);

        const serviceInput = document.createElement('input');
        serviceInput.type = 'email';
        serviceInput.placeholder = "Your Email";
        serviceContainer.appendChild(serviceInput);

        return contact;
    }

    container.appendChild(componentContact());
};

export default getContactPage;