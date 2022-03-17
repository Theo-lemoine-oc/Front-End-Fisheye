function imagePhotographerFactory(data) {
    const { title, image, likes } = data;

    const pictureMedia = `assets/photographers/${image}`;

    function getImagePhotographers() {
        const sectionImage = document.createElement('section');
        sectionImage.classList.add('medias-photographer');
        sectionImage.innerHTML =
            `<img src="${pictureMedia}" alt="Images du photographe">
            <div class="media-bottom">
                <h2 class="photographer_infos_name">${title}</h2>
                <span>${likes} <span class="red-likes">❤</span></span>
            </div>`;
        return (sectionImage);
    }
    return { getImagePhotographers }
}