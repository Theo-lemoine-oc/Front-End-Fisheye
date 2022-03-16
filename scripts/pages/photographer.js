//Récupérer l'ID du photographe
const queryString_url_id = window.location.search;
const searchId = new URLSearchParams(queryString_url_id);
const getPhotographerId = searchId.get('id');

async function getInfosPhotographers(type) {
    const response = await fetch('../../data/photographers.json')
    const photographers = await response.json();
    switch (type) {
        case 'photographer':
            return photographers.photographers;
            break;
        case 'media':
            return photographers.media;
            break;
        default:
            return 'error';
    }
}

async function displayDataPhotographers(photographers) {
    const photographersSection = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        if (photographer.id == getPhotographerId) {
            const photographerModel = picturePhotographerFactory(photographer);
            const picturePhotographers = photographerModel.getPicturePhotographers();
            photographersSection.appendChild(picturePhotographers);
        }
    });
};

async function displayDataImages(medias) {
    const imagesSection = document.querySelector(".photograph-images");

    medias.forEach((media) => {
        if (media.photographerId == getPhotographerId) {
            const imageModel = imagePhotographerFactory(media);
            const imagePhotographer = imageModel.getImagePhotographers();
            imagesSection.appendChild(imagePhotographer);
        }
    });
};

async function init() {
    // Récupère les datas des photographes et des médias
    const photographers = await getInfosPhotographers('photographer');
    const medias = await getInfosPhotographers('media');
    displayDataPhotographers(photographers);
    displayDataImages(medias);
};

init();