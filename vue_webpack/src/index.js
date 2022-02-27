let obj ={};
let temp;
Object.defineProperty(obj, 'a', {
    get() {
        return temp;
    },
    set(newValue) {
      temp = newValue;
    }
})
obj.a = 9;
console.log(obj.a)
