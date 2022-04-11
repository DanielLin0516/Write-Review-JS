class Temp {
    a = '123'
    static b = 3
    constructor() {
        this.c = 123
    }
    static fn1() {

    }
    fn2() {

    }
}

let obj = new Temp()
console.log(obj.hasOwnProperty('a'))
console.log(obj.hasOwnProperty('b'))
console.log(obj.hasOwnProperty('c'))
console.log(obj.hasOwnProperty('fn1'))
console.log(obj.hasOwnProperty('fn2'))