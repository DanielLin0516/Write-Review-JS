function sleep(time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}
for (let i = 0; i < 5; i++) {
    sleep(i * 1000).then(data => {
        console.log(i)
    })
}
