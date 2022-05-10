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

export function effectWatch(effect) {
  currentEffect = effect
  effect()
  currentEffect = null
}

// const dep = new Dep(10)
// let b
// effectWatch(() => {
//   b = dep.value + 10
//   console.log(b)
// })
// dep.value = 20

let targetMap = new Map()

function getDep(target,key) {
  let depsMap = targetMap.get(target)
  if(!depsMap) {
    depsMap = new Map()
    targetMap.set(target,depsMap)
  }
  let dep = depsMap.get(key)
  if(!dep) {
    dep = new Dep()
    depsMap.set(key,dep)
  }
  return dep
}
export function reactive(raw) {
  return new Proxy(raw,{
    get(target, key) {
      const dep = getDep(target,key)
      dep.depend()
      return Reflect.get(target,key)
    },
    set(target,key,value) {
      //触发依赖
      const dep = getDep(target,key)
      let result = Reflect.set(target,key,value)
      dep.notify()
      return result
    }
  })
}
// let user = reactive({
//   age:18
// })
// let double;
// effectWatch(() => {
//   double = user.age
//   console.log(double)
// })
// user.age = 19