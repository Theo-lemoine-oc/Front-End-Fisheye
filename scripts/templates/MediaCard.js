let mediaData = "";
class MediaCard {
    constructor(media) {
        this.mediaData = media;

        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('media-card-wrapper');
    }

    get media() {
        return this.mediaData;
    }

    createMediaCard() {
        if (this.mediaData.hasOwnProperty('image')) {
            const ImageCard = `
            <a href="/assets/photographers/${this.mediaData.image}">
                <img src="/assets/photographers/${this.mediaData.image}" alt="Images du photographe">
            </a>
            <div class="media-bottom">
                <h2 class="photographer_infos_name">${this.mediaData.title}</h2>
                <span>${this.mediaData.likes} <span class="red-likes">❤</span></span>
            </div>`

            this.$wrapper.innerHTML = ImageCard
        }
        // if media his a video
        else if (this.mediaData.hasOwnProperty('video')) {
            const VideoCard = `
            <a href="/assets/photographers/${this.mediaData.video}">
                <video controls muted width="100%" height="300">
                    <source src="/assets/photographers/${this.mediaData.video}" type=video/mp4>
                </video>
            </a>
            <div class="media-bottom">
                <h2 class="photographer_infos_name">${this.mediaData.title}</h2>
                <span>${this.mediaData.likes} <span class="red-likes">❤</span></span>
            </div>`;

            this.$wrapper.innerHTML = VideoCard;
        }

        return this.$wrapper;
    }

}