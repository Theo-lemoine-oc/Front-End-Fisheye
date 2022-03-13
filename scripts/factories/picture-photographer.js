function picturePhotographerFactory(data) {
    const { name, city, country, tagline, price, id, portrait } = data;

    const picture = `assets/photographers/portraits/${portrait}`;

    function getPicturePhotographers() {
        const section = document.createElement('section');
        section.innerHTML =
            `<h1 class="photographer_infos_name">${name}</h1>
            <p class="photographer_infos_city">${city}, ${country}</p>
            <p class="photographer_infos_tagline">${tagline}</p>`;

        return (section);
    }
    return { name, picture, getPicturePhotographers }
}