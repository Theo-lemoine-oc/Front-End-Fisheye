class LikesCalcul {
    likes = 0;

    getLikes() {
        return this.likes;
    }

    incrementLikes(value) {
        this.likes += value;
    }

    writeLikes() {
        document.getElementById('totalLikes').innerHTML = this.getLikes();
    }
}