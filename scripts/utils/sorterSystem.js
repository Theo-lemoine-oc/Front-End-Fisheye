class RatingSorterApi {
    static async sorter(data, property) {
        console.log("Get from compute")

        return new Promise((resolve) => {
            setTimeout(() => {
                data.sort((a, b) => {
                    let aValue, bValue;
                    switch (property) {
                        case 'popularity':
                            aValue = a.likes;
                            bValue = b.likes;
                            break;
                        case 'date':
                            aValue = new Date(a.date);
                            bValue = new Date(b.date);
                            break;
                        case 'title':
                            aValue = a.title.toLowerCase();
                            bValue = b.title.toLowerCase();
                            break;
                    }
                    if (aValue < bValue) {
                        return -1;
                    }
                    if (aValue > bValue) {
                        return 1;
                    }

                    return 0;
                });

                const dataSort = data;
                console.log(dataSort)
                const result = {
                    key: property,
                    data: dataSort
                }

                console.log(result)
                resolve(result)

            }, 3000)
        })
    }
}