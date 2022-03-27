class filterForm {
    constructor(Medias) {
        this.Medias = Medias

        this.$wrapper = document.createElement('div')
        this.$filterFormWrapper = document.querySelector('.filter-form-wrapper')
        this.$moviesWrapper = document.querySelector('.movies-wrapper')

        this.ProxyRatingfilter = new ProxyRatingfilter()
    }

    async filterMovies(filter) {
        this.clearMoviesWrapper()

        if (!!filter) {
            const SortedMovies = sortedData.data

            SortedMovies.forEach(Movie => {
                const Template = new MovieCard(Media)
                this.$moviesWrapper.appendChild(Template.createMovieCard())
            })
        } else {
            this.Movies.forEach(Movie => {
                const Template = new MovieCard(Media)
                this.$moviesWrapper.appendChild(Template.createMovieCard())
            })
        }
    }

    onChangefilter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const filter = e.target.value
                this.filterMovies(filter)
            })
    }

    clearMoviesWrapper() {
        this.$moviesWrapper.innerHTML = ""
    }

    render() {
        const filterForm = `
            <form action="#" method="POST" class="filter-form" id="filters">
                <label for="filter-select">Triez par date de sortie : </label>
                <select name="filter" id="filter">
                    <option value="popularity">Popularité</option>
                    <option value="date">Date</option>
                    <option value="title">Titre</option>
                </select>
            </form>
        `

        this.$wrapper.innerHTML = filterForm
        this.onChangefilter()

        this.$filterFormWrapper.appendChild(this.$wrapper)
    }