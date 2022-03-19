var name = "window"
var person1 = {
    name:"person1",
    show1:function() {
        console.log(this.name);
    },
    show2:() => console.log(this.name),
    show3:function() {
        return function() {
            console.log(this)
        }
    },
    show4:function() {
        return () => console.log(this.name)
    }
}
var person2 = {name:'person2'}
person1.show1();
person1.show1.call(person2);
person1.show2()
person1.show2.call(person2);