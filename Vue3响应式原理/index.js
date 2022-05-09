let currentEffect = null;
class Dep {
  constructor(val) {
    this.effects = new Set()
    this._val = val
  }
  get value() {
    this.depend()
    return this._val
  }
  set value(newVal) {
    this._val = newVal;
    this.notify()
  }
  //1.收集依赖
  depend() {
    if(currentEffect) {
      this.effects.add(currentEffect)
    }
  }
  notify() {
    this.effects.forEach((effect) => {
      effect()
    })
  }
}

function effectWatch(effect) {
  currentEffect = effect
  effect()
  currentEffect = null
}

const dep = new Dep(10)
let b
effectWatch(() => {
  b = dep.value + 10
  console.log(b)
})
dep.value = 20

