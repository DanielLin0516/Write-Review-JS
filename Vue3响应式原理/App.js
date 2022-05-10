import { effectWatch, reactive } from "./core/reactivity/index.js";
import { h } from './core/h.js'
let user = reactive({
  age: 18
})
let double;
effectWatch(() => {
  double = user.age
  console.log(double)
})
user.age = 19


// vue3

export default {
  render(context) {
    const div = document.createElement("div")
    div.innerText = context.state.count
    return h("div",{
      id:"app - id",
      class:"showTime"
    },[h("p",null,"ooo"),h("p",null,"123")])
  },
  setup() {
    const state = reactive({
      count: 0
    })
    window.state = state
    return {
      state
    }
  }
}