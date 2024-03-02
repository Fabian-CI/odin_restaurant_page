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
        subTitle.innerText = "Contact";
        contactInfo.appendChild(subTitle);

        const contactData = document.createElement('div');
        contactData.classList.add('contact-data');
        contactInfo.appendChild(contactData);

        const email = document.createElement('span');
        email.innerText = "oceanicfood@gmail.com";
        contactData.appendChild(email);
        const instagram = document.createElement('span');
        instagram.innerText = "oceanic.food";
        contactData.appendChild(instagram);
        const twitter = document.createElement('span');
        twitter.innerText = "OceanicOfficial";
        contactData.appendChild(twitter);

        return contact;
    }

    container.appendChild(componentContact());
};

export default getContactPage;