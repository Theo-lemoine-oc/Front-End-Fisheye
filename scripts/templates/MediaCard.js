class MediaCard {
    constructor(media) {
        this._media = media

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('media-card-wrapper')
    }

    get media() {
        return this._media
    }

    createMediaCard() {
        if (media.hasOwnProperty('image')) {
            const ImageCard =
                `<img src="${image()}" alt="Images du photographe">
            <div class="media-bottom">
                <h2 class="photographer_infos_name">${title()}</h2>
                <span>${likes()} <span class="red-likes">❤</span></span>
            </div>`

            this.$wrapper.innerHTML = ImageCard
        }
        // if media his a video
        else if (media.hasOwnProperty('video')) {
            const VideoCard =
                `<video controls muted width="100%" height="300">
                <source src="${video()}" type=video/mp4>
            </video>
            <div class="media-bottom">
                <h2 class="photographer_infos_name">${title()}</h2>
                <span>${likes()} <span class="red-likes">❤</span></span>
            </div>`;

            this.$wrapper.innerHTML = VideoCard
        }

        return this.$wrapper

    }
}