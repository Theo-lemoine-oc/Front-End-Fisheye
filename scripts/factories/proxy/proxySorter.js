class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sort(medias, property) {
        console.log(this.cache)
            /*const cachedResult = this.cache.find(elt => {
                return elt.key == property
            });

            console.log(cachedResult)
            if (cachedResult) {
                return cachedResult;
            }*/

        const data = await RatingSorterApi.sorter(medias, property);

        //this.cache.push(data);
        return data;
    }
}