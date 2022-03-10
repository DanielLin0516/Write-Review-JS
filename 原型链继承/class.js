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
// 原型链继承
function Dad(colors = ['red', 'blue', 'green']) {
    this.colors = colors;
}
function Sun() {

}
Sun.prototype = new Dad();
let ins = new Dad(["red"])
let sun = new Sun();
let sun1= new Sun();
console.log(sun.colors)
sun.colors.push("oo");
console.log(sun.colors,sun1.colors,ins.colors)