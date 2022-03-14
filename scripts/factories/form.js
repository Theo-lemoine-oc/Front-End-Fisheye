function formFactory(data) {
    const { name, city, country, tagline, price, id } = data;

    function contactForm() {
        const divForm = document.createElement('div');
        divForm.classList.add('modal');
        divForm.innerHTML =
            `<header>
                <h2 id="contact-me">Contactez-moi</h2>
                <img src="assets/icons/close.svg" onclick="closeModal()" />
            </header>
            <form>
                <div>
                    <label>Prénom</label>
                    <input />
                </div>
                <button class="contact_button">Envoyer</button>
            </form>`;

        return (divForm);
    }
    return { name, contactForm }
}