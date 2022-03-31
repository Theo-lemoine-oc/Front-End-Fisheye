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

// Display photographers
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

// Display medias
async function displayDataMedias(medias) {
    const imagesSection = document.querySelector(".photograph-images");

    const Filter = new SorterForm(medias);
    Filter.render();

    medias.forEach((media) => {
        if (media.photographerId == getPhotographerId) {
            // if media his a image
            const Template = new ImageFactory(new MediaCard(media));
            imagesSection.appendChild(
                Template.createMediaCard()
            )

        }
    });
};

async function init() {
    // Récupère les datas des photographes et des médias
    const photographers = await getInfosPhotographers('photographer');
    const medias = await getInfosPhotographers('media');
    displayDataPhotographers(photographers);
    displayDataMedias(medias);
};

init();