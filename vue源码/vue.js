class Vue {
    constructor(options) {
        this.obj = {}
        options.beforeCreate.bind(this)()
        this.$data = options.data
        //把this.$data的属性 ，给vue对象赋值
        // 就可以使用this.str获取值
        this.proxyData()
        // 劫持并监听所有属性
        this.observer()
        options.created.bind(this)()
        options.beforeMount.bind(this)()
        this.$el = document.querySelector(options.el)
        options.mounted.bind(this)()
        this.compile(this.$el)

    }
    observer() {
        for (let key in this.$data) {
            let value = this.$data[key]
            let _this = this
            Object.defineProperty(this.$data, key, {
                get() {
                    return value
                },
                set(val) {
                    value = val
                    // 双向绑定，从所有订阅者，筛选出来要更新的订阅者
                    _this.obj[key].forEach(v => {
                        v.updated()
                    })
                }
            })
        }
    }
    //负责模板解析编译
    compile(parent) {
        let nodes = parent.childNodes
        for (var i = 0; i < nodes.length; i++) {
            //元素节点
            if (nodes[i].nodeType == 1) {
                let node = nodes[i]
                // 是双向绑定
                if (nodes[i].hasAttribute('v-model')) {
                    //v-model等于的值,获取值
                    let key = nodes[i].getAttribute('v-model').trim()
                    nodes[i].value = this[key]
                    nodes[i].addEventListener('input', () => {
                        this[key] = node.value

                    })
                }

                this.compile(nodes[i])
            }
            //文本节点
            if (nodes[i].nodeType == 3) {
                let reg = /{{(.*)}}/g
                let text = nodes[i].textContent
                let node = nodes[i]
                let _this = this
                text.replace(reg, function (a, b) {
                    // 添加所有订阅者
                    let key = b.trim()
                    let watcher = new Watcher(_this, b, node, 'textContent')
                    if (_this.obj[key]) {
                        _this.obj[key].push(watcher)
                    } else {
                        _this.obj[key] = []
                        _this.obj[key].push(watcher)
                    }

                    nodes[i].textContent = _this.$data[b.trim()]

                })

            }

        }
    }
    proxyData() {
        for (let key in this.$data) {
            Object.defineProperty(this, key, {
                get() {
                    return this.$data[key]
                },
                set(val) {
                    this.$data[key] = val
                }
            })

        }
    }
}
class Watcher {
    constructor(vm, key, node, attr) {
        this.vm = vm
        this.key = key
        this.node = node
        this.attr = attr
    }
    // 触发update方法进行更新视图
    updated() {
        this.node[this.attr] = this.vm[this.key]
    }

}