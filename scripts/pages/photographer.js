//Récupérer l'ID du photographe
const queryString_url_id = window.location.search;
const searchId = new URLSearchParams(queryString_url_id);
const photographerId = searchId.get('id');

async function getInfosPhotographers() {
    const response = await fetch('../../data/photographers.json')
    const photographers = await response.json();
    return photographers.photographers;

    return ({
        photographers: [...photographers, ...photographers, ...photographers]
    })
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        const photographerModel = picturePhotographerFactory(photographer);
        const picturePhotographers = photographerModel.getPicturePhotographers();
        photographersSection.appendChild(picturePhotographers);
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getInfosPhotographers();
    displayData(photographers);
};

init();