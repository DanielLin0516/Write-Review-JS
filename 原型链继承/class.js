class Father {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}
class Son extends Father {
    constructor(name,color) {
        super(name);
        this.color = color;
    }
}
let son = new Son('red','red');
console.log(son.name)