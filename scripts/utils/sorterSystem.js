class RatingSorterApi {
    static async sorter(data, property) {
        console.log("Get from compute")

        if (property == 'popularity') {
            property = 'likes';
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = {
                    key: property,
                    data: Array.from(data).sort((a, b) => a[property] - b[property])
                }

                resolve(result)

            }, 1000)
        })
    }
}