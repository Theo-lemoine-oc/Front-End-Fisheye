//Récupérer l'ID du photographe
const queryString_url_id = window.location.search;
const searchId = new URLSearchParams(queryString_url_id);
const getPhotographerId = parseInt(searchId.get('id'));


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

    const mediaPhotographer = medias.filter(media => {
        return media.photographerId === getPhotographerId;
    })

    const Filter = new SorterForm(mediaPhotographer);
    Filter.render();

    const likeCalcul = new LikesCalcul();

    mediaPhotographer.forEach((media) => {
        // if media his a image
        imagesSection.appendChild(new ImageFactory(media).createMediaCard())

        likeCalcul.incrementLikes(media.likes);
    });

    likeCalcul.writeLikes();
};


async function init() {
    // Récupère les datas des photographes et des médias
    const photographers = await getInfosPhotographers('photographer');
    const medias = await getInfosPhotographers('media');
    displayDataPhotographers(photographers);
    displayDataMedias(medias);
};

init();