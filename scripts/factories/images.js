function imagePhotographerFactory(data) {
    const { title, image, likes, name } = data;

    const pictureMedia = `assets/photographers/${name}/${image}`;

    function getImagePhotographers() {
        const sectionImage = document.createElement('section');
        sectionImage.classList.add('medias-photographer');
        sectionImage.innerHTML =
            `<div>
                <img src="${pictureMedia}" alt="Images du photographe">
                <div>
                    <h2 class="photographer_infos_name">${title}</h2>
                    <span>${likes} <span class="red-likes">❤</span></span>
                </div>
            </div>`;
        return (sectionImage);
    }
    return { getImagePhotographers }
}