async function getInfosPhotographersForm() {
    const response = await fetch('../../data/photographers.json')
    const photographers = await response.json();
    return photographers.photographers;
}

async function displayDataPhotographersForm(photographers) {
    const formSection = document.getElementById("contact_modal");

    photographers.forEach((photographer) => {
        if (photographer.id == getPhotographerId) {
            const formModel = formFactory(photographer);
            const formContact = formModel.contactForm();
            formSection.appendChild(formContact);
        }
    });
};

async function initForm() {
    // Récupère les datas des photographes
    const photographers = await getInfosPhotographersForm('photographer');
    displayDataPhotographersForm(photographers);
};

initForm();