class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sort(medias, property) {
        const cachedResult = this.cache.find(elt => elt.key == property);

        if (cachedResult) {
            console.log('get from cache');
            return cachedResult;
        }

        const data = await RatingSorterApi.sorter(medias, property);

        this.cache.push(data);
        return data;
    }
}