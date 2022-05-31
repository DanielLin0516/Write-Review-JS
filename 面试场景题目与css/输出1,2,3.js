function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}
function print() {
    for(let i = 0 ; i < 5;i++) {
        sleep(1000 * i).then(res => {
            console.log(i)
        })
    }
}
print()