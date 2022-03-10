function picturePhotographerFactory(data) {
    const { name, city, country, tagline, price, id, portrait } = data;

    const picture = `assets/photographers/portraits/${portrait}`;

    function getPicturePhotographers() {
        const article = document.createElement('article');

        const a = document.createElement('a');
        a.href = `photographer.html?id=${id}`;

        const img = document.createElement('img');
        img.setAttribute("src", picture)

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const location = document.createElement('span');
        location.textContent = `${city}, ${country}`;
        location.classList.add('location')

        const p = document.createElement('p');
        p.textContent = tagline;

        const salary = document.createElement('span');
        salary.textContent = `${price}€/jour`;
        salary.classList.add('price')

        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(location);
        article.appendChild(p);
        article.appendChild(salary);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}