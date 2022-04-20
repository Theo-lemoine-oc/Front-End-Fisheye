function displayModal(e) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    document.addEventListener('keyup', onKey)
}

function closeModal(e) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.removeEventListener('keyup', onKey);
}

function onKey(e) {
    if (e.key == 'Escape') {
        closeModal(e);
    }
}