function fn() {
    return new Promise((resolve, reject) => {
        const n = Math.random();
        setTimeout(() => {
            if (n > 0.7) {
                resolve(n);
            } else {
                reject(n);
            }
        }, 1000);
    })
}
Promise.retry = (fn, times) => {
    return new Promise(async (resolve, reject) => {
        while (times--) {
            try {
                const res = await fn();
                console.log('成功了结果为',res);
                resolve(res);
                break;
            } catch (error) {
                console.log('失败',error);
                if(!times) {
                    reject(error)
                }
            }
        }
    }).catch(res => {
        console.log('此时全部失败')
    })
}
Promise.retry(fn, 3)