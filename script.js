document.addEventListener('click', (e) => {
    const target = e.target;

    const links = {
        give: "https://www.givingtuesday.org/",
        plagde: "https://www.givemiamiday.org/organization/cclsmiami"
    };

    const url = links[target.id];
    if (url) {
        window.location.replace(url);
    }
});


document.addEventListener('click', (e) => {
    const target = e.target;
    const socialMediaLinks = {
        face: "http://www.facebook.com/pages/Catholic-Legal-Services-Archdiocese-of-Miami-Inc/512202842192671",
        twitter: "http://twitter.com/CLSMiami",
        linked: "https://www.linkedin.com/company/catholic-charities-legal-services-archdiocese-of-miami-inc-/",
        instagram: "https://www.instagram.com/catholic.legal.services.miami/"
    };

    const url = socialMediaLinks[target.id];
    if (url) {
        window.location.replace(url);
    }
});
