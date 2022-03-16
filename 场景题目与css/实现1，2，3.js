const arr = [1, 2, 3]

arr.reduce((p,x) => {
    return p.then(() => {
        return new Promise(r => {
            setTimeout(() => {
                r(console.log(x))
            }, 1000);
        })
    })
},Promise.resolve())