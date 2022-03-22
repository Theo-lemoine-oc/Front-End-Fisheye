function videoPhotographerFactory(data) {
    const { title, video, likes } = data;

    const pictureMedia = `assets/photographers/${video}`;

    function getVideoPhotographers() {
        const sectionVideo = document.createElement('section');
        sectionVideo.classList.add('medias-photographer');
        sectionVideo.innerHTML =
            `<video controls muted width="100%" height="300">
                <source src="${pictureMedia}" type=video/mp4>
            </video>
            <div class="media-bottom">
                <h2 class="photographer_infos_name">${title}</h2>
                <span>${likes} <span class="red-likes">❤</span></span>
            </div>`;
        return (sectionVideo);
    }
    return { getVideoPhotographers }
}