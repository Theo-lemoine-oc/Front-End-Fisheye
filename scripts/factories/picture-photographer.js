function picturePhotographerFactory(data) {
    const { name, city, country, tagline, price, id, portrait } = data;

    const picture = `assets/photographers/portraits/${portrait}`;

    function getPicturePhotographers() {
        const section = document.createElement('section');
        section.classList.add('infos-photographer');
        section.innerHTML =
            `<div>
                <h1 class="photographer_infos_name">${name}</h1>
                <p class="photographer_infos_city">${city}, ${country}</p>
                <p class="photographer_infos_tagline">${tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img src="${picture}" alt="Image du photographe">`;
        return (section);
    }
    return { getPicturePhotographers }
}