function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
function sleep(time, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve();
        }, time);
    })
}
function step() {
    Promise.resolve().then(() => {
        return sleep(3000, red)
    }).then(() => {
        return sleep(2000, green)
    }).then(() => {
        return sleep(1000, yellow)
    }).then(() => {
        return step()
    })
}
step()
