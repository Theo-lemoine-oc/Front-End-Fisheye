//Récupérer l'ID du photographe
const queryString_url_id = window.location.search;
const searchId = new URLSearchParams(queryString_url_id);
const photographerId = searchId.get('id');

async function getInfosPhotographers(type) {
    const response = await fetch('../../data/photographers.json')
    const photographers = await response.json();
    if (type == 'photographer') return photographers.photographers
    else if (type == 'media') return photographers.media
    else return 'error'
}

async function displayDataPhotographers(photographers, medias) {
    const photographersSection = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        if (photographer.id == photographerId) {
            const photographerModel = picturePhotographerFactory(photographer);
            const picturePhotographers = photographerModel.getPicturePhotographers();
            photographersSection.appendChild(picturePhotographers);
        }
    });
};

async function init() {
    // Récupère les datas des photographes
    const photographers = await getInfosPhotographers('photographer');
    const medias = await getInfosPhotographers('media');
    displayDataPhotographers(photographers, medias);
};

init();