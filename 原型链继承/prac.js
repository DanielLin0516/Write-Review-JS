function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
}
function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.subproperty;
}
let instance = new SubType();

class Person {
    constructor(over) {
        this.foo = 'foo'
        if (over) {
            return {
                bar:'bar'
            }
        }
    }
}
let p1 = new Person(true)
console.log(p1.constructor instanceof Person)