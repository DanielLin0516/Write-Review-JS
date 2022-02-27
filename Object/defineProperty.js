let person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "我草你妈"
})
delete person.name
// console.log(person.name, '11')

dest = {
    set a(val) {
        console.log(`iovwewvwev${val}`);
    }
}
src = {
    get a() {
        console.log('nifwngetter');
        return 'foo'
    }
}
Object.assign(dest,src);
// console.log(dest)
// console.log(NaN === NaN)
// console.log({} === {})
function Person (name,age) {
    this.name = name;
    this.age = age;
}
let personww = new Person("wori",18);
console.log(personww.__proto__ === Person.prototype)
console.log(personww.constructor === Person)
console.log(Object.keys(personww))