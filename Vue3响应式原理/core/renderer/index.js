//虚拟dom转换为真实dom
export function mountElement(vnode, container) {
  //tag
  const { tag, props, children } = vnode
  const el = document.createElement(tag)
  //props
  if(props) {
    for(const key in props) {
      const val = props[key]
      el.setAttribute(key,val)
    }
  }

  //children
  if(typeof children == 'string') {
    const textNode = document.createTextNode(children)
    el.append(textNode)
  }else if(Array.isArray(children)) {
    children.forEach(vnode => {
      mountElement(vnode,el)
    })
  }


  //插入
  container.append(el)
}