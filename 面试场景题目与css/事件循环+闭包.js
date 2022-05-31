let p = [];
(function () {
    setTimeout(() => {
        console.log('timeout 0');
    }, 0);
    let i = 0;
    for (; i < 3; i++) {
        p[i] = function () {
            return new Promise(function (resolve) {
                console.log(`promise ${i}`);
                resolve(`promise ${i * i}`);
            })
        }
    }
})();
async function b() {
    console.log('async -1');
}
function a() {
    console.log(`async ${p.length}`);
    return async function () {
        console.log(`async ${p.length}`);
        await b();
        console.log('async -2')
    };
}
p.push(a());
p[1]().then(console.log);
p[3](); 