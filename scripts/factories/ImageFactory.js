let data = "";
class ImageFactory {
    constructor(data) {
        this.data = data;
    }
    createMediaCard() {
        return new MediaCard(this.data).createMediaCard();
    }
}