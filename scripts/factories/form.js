function formFactory(data) {
    const { name, city, country, tagline, price, id } = data;

    function contactForm() {
        const divForm = document.createElement('div');
        divForm.classList.add('modal');
        divForm.innerHTML =
            `<header>
                <h2 id="contact-me">Contactez-moi ${ name }</h2>
                <img src="assets/icons/close.svg" onclick="closeModal()" />
            </header>
            <form class="formContact">
                <div>
                    <label>Prénom</label>
                    <input required />
                </div>
                <div>
                    <label>Nom</label>
                    <input required />
                </div>
                <div>
                    <label>Email</label>
                    <input required />
                </div>
                <div>
                    <label>Votre message</label>
                    <textarea required></textarea>
                </div>
                <button class="contact_button" type="submit">Envoyer</button>
            </form>`;

        return (divForm);
    }
    return { name, contactForm }
}