class Single {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static SingleInstance(name) {
        if (this.instance) {
            return this.instance;
        }
        return this.instance = new Single(name);
    }
}
let p1 = Single.SingleInstance("p1")
let p2 = Single.SingleInstance("p2")
console.log(p1 === p2) //true

class CreateUser {
    constructor(name) {
        this.name = name;
        this.getName();
    }
    getName() {
        return this.name;
    }
}
// 代理实现单例模式
var ProxyMode = (function () {
    var instance = null;
    return function (name) {
        if (!instance) {
            instance = new CreateUser(name);
        }
        return instance;
    }
})();
// 测试单体模式的实例
var a = new ProxyMode("aaa");
var b = new ProxyMode("bbb");
// 因为单体模式是只实例化一次，所以下面的实例是相等的
console.log(a === b);    //true