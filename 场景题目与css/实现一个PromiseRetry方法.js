function fn() {
    return new Promise((resolve,reject) => {
        const n = Math.random();
        setTimeout(() => {
            if(n > 0.7) {
                resolve(n);
            }else {
                reject(n);
            }
        }, 1000);
    })
}
Promise.retry = (fn,times) => {
    return new Promise(async (resolve,reject) => {
        while(times--) {
            try {
                const res = await fn();
                console.log('执行成功，得到的结果是：',res);
                resolve(res);
                break;
            } catch (error) {
                console.log('执行失败一次，得到的结果是：',error);
                if(!times) {
                    reject(error);
                }
            }
        }
    }).catch(() => {
        console.log('全部此时尝试完成，仍然失败')
    })
}
Promise.retry(fn,3)