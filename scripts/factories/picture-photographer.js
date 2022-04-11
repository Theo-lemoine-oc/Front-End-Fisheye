function picturePhotographerFactory(data) {
    const { name, city, country, tagline, portrait, price } = data;

    const picture = `assets/photographers/portraits/${portrait}`;


    function getPicturePhotographers() {
        const section = document.createElement('section');
        const salaryPhotographer = document.getElementById('salary');

        section.classList.add('infos-photographer');
        section.innerHTML =
            `<div>
                <h1 class="photographer_infos_name">${name}</h1>
                <p class="photographer_infos_city">${city}, ${country}</p>
                <p class="photographer_infos_tagline">${tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img src="${picture}" alt="Image du photographe">`;

        //add salary photographer on bottom informations
        salaryPhotographer.textContent = `${price}€/jours`;

        return (section);
    }
    return { getPicturePhotographers }
}