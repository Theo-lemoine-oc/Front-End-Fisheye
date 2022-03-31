class SorterForm {
    constructor(Medias) {
        this.Medias = Medias

        this.$wrapper = document.createElement('div')
        this.$sorterFormWrapper = document.querySelector('.filter-form-wrapper')
        this.$mediasWrapper = document.querySelector('.photograph-images')

        this.ProxyRatingSorter = new ProxyRatingSorter()
    }

    async sorterMedias(sorter) {
        this.clearMediasWrapper()

        if (!!sorter) {
            const sorterData = await this.ProxyRatingSorter.sort(this.Medias, sorter);
            console.log(sorterData)

            const sorterMedias = sorterData.data

            sorterMedias.forEach(Media => {
                const Template = new MediaCard(Media)
                this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        } else {
            this.Medias.forEach(Media => {
                const Template = new MediaCard(Media)
                this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        }
    }

    onChangeSorter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const sorter = e.target.value
                this.sorterMedias(sorter)
            })
    }

    clearMediasWrapper() {
        this.$mediasWrapper.innerHTML = ""
    }

    render() {
        const sorterForm =
            `
            <form action="#" method="POST" class="filters" id="filters">
                <label for="filter">Triez par date de sortie : </label>
                <select name="filter" id="filter">
                    <option value="popularity">Popularité</option>
                    <option value="date">Date</option>
                    <option value="title">Titre</option>
                </select>
            </form>
        `

        this.$wrapper.innerHTML = sorterForm
        this.onChangeSorter()

        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}