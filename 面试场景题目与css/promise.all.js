function promiseMap(list, concurrency = Infinity) {
    list = Array.from(list);
    return new Promise((resolve, reject) => {
        let currentIndex = 0;
        let res = [];
        let resolveCount = 0;
        let len = list.length;
        function next() {
            const index = currentIndex;
            currentIndex++;
            Promise.resolve(list[index]).then((o) => {
                res[index] = o;
                resolveCount++;
                if (resolveCount === len) {
                    resolve(res);
                }
                if (currentIndex < len) {
                    next();
                }
            });
        }

        for (let i = 0; i < concurrency && i < len; i++) {
            next();
        }
    });
}