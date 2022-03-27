async function getMediasPhotographers(type) {
    const res = await fetch('../../data/photographers.json');
    const mediasPhotos = await res.json();
    const photos = mediasPhotos.media;
}

class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async filter() {}
}