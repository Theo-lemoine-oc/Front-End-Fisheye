class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sort(medias, property) {
        console.log(this.cache)
        const cachedResult = this.cache.find(elt => {
            console.log(elt)
            console.log(property)
            return elt.key == property
        });

        console.log(cachedResult)
        if (cachedResult) {
            return cachedResult;
        }

        const data = await RatingSorterApi.sorter(medias, property);
        console.log(data)

        console.log(this.cache)
        this.cache.push(data);
        console.log(this.cache)
        return data;
    }
}