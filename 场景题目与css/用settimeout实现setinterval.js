function mySetInterval(callback,time) {
    (function inner() {
        const timer = setTimeout(() => {
            callback();
            clearInterval(timer);
            inner()
        }, time);
    })()
}
mySetInterval(() => {
    console.log(11)
},1000)