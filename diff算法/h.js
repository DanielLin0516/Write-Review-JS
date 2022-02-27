function vnode(sel, data, children, text, elm) {
    let key = data.key
    return {
        sel,
        data,
        children,
        text,
        elm,
        key
    }
}
function h(sel, data, params) {
    //没有子元素只有字符串类型
    if (typeof params == "string") {
        return vnode(sel, data, undefined, params, undefined);
    } else if (Array.isArray(params)) {
        let children = [];
        for (let item of params) {
            children.push(item);
        }
        return vnode(sel, data, params, undefined, undefined);
    }
}
function patch(oldVnode, newVnode) {
    //如果旧节点为真实dom
    if (oldVnode.sel == undefined) {
        oldVnode = vnode(
            oldVnode.tagName.toLowerCase(),
            {},
            [],
            undefined,
            oldVnode
        )
    }
    //判断oldVnode和newVnode是否为同一个节点
    if (oldVnode.sel === newVnode.sel) {
        //判断条件复杂
        patchVnode(oldVnode, newVnode)

    } else {
        //不是同一个节点，创建新的虚拟节点为dom节点
        let newVnodeElm = createElement(newVnode);
        //获取旧的虚拟节点
        let oldVnodeElm = oldVnode.elm;
        //创建新的节点
        if (newVnodeElm) {
            oldVnodeElm.parentNode.insertBefore(newVnodeElm, oldVnodeElm)
        }
        //删除旧节点
        oldVnodeElm.parentNode.removeChild(oldVnodeElm)
    }
}
//vnode为新节点，就是要创建的节点
function createElement(vnode) {
    //创建dom节点
    let domNode = document.createElement(vnode.sel);
    //判断有没有children
    if (vnode.children == undefined) {
        domNode.innerText = vnode.text
    } else if (Array.isArray(vnode.children)) {
        //说明内部有子节点，需要递归创建节点
        for (let child of vnode.children) {
            let childDom = createElement(child);
            domNode.appendChild(childDom)
        }
    }
    vnode.elm = domNode;
    return domNode;
}

function patchVnode(oldVnode, newVnode) {
    //判断新节点有没有children
    if (newVnode.children === undefined) {//新的没有子节点 
        //新节点的文本和旧节点的文本内容是不是一样的
        if (newVnode.text !== oldVnode.text) {
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {  //有子节点
        //新的虚拟节点有children  ，旧的虚拟节点有children
        if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
        } else {   //新的虚拟节点有children，旧的虚拟节点“没有”children
            oldVnode.elm.innerText = "";
            //遍历新的子节点，创建Dom元素
            for (let child of newVnode.children) {
                let childDom = createElement(child);
                oldVnode.elm.appendChild(childDom);
            }
        }
    }
}
/*
参数一：真实dom节点
参数二：旧的虚拟节点
参数三：新的虚拟节点
*/
function updateChildren(parentElm, oldCh, newCh) {
    let oldStartIdx = 0;  //旧节点的头指针
    let oldEndIdx = oldCh.length - 1;  //旧节点的尾部指针
    let newStartIdx = 0;  //新节点的头部指针
    let newEndIdx = newCh.length - 1;  //新节点的尾部指针

    let oldStartVnode = oldCh[0];  //旧前虚拟节点
    let oldEndVnode = oldCh[oldEndIdx];  //旧后虚拟节点
    let newStartVnode = newCh[0];  //新前虚拟节点
    let newEndVnode = newCh[newEndIdx]; //新后虚拟节点

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if( oldStartVnode == undefined) {
            oldStartVnode = oldCh[++oldStartIdx];
        }if(oldEndVnode == undefined){
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (sameVnode(oldStartVnode, newStartVnode)) {
            console.log('1')
            //第一种情况：旧前和新前
            patchVnode(oldStartVnode, newStartVnode);
            if (newStartVnode) newStartVnode.elm = oldStartVnode?.elm;
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
            console.log('2')
            //第二种情况：旧后和新后
            patchVnode(oldEndVnode, newEndVnode);
            if (newEndVnode) newEndVnode.elm = oldEndVnode?.elm;
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
            console.log('3')
            //第三种情况：旧前和新后
            patchVnode(oldStartVnode, newEndVnode);
            if (newEndVnode) newEndVnode.elm = oldStartVnode?.elm;
            //把旧前指定的节点移动到旧后指向的节点后面
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];

        } else if (sameVnode(oldEndVnode, newStartVnode)) {
            console.log('4')
            //第四种情况：旧后和新前
            patchVnode(oldEndVnode, newStartVnode);
            if (newStartVnode) newStartVnode.elm = oldEndVnode?.elm;
            //把旧后指定的节点移动到旧前指向的节点前面
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        } else {
            //第五种情况：不满足条件查找
            console.log('5')
            //创建对象，存放虚拟节点，判断新旧有无相同节点
            const keyMap = {};
            for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                const key = oldCh[i]?.key;
                if (key) keyMap[key] = i;
            }
            //在旧节点查找匹配节点
            let idxInOld = keyMap[newStartVnode.key];
            //有的话，说明该节点在新旧虚拟节点都存在
            if (idxInOld) {
                const elmMove = oldCh[idxInOld];
                patchVnode(elmMove,newStartVnode);
                //处理过的节点，在虚拟节点数组设置undefined
                oldCh[idxInOld] = undefined;
                parentElm.insertBefore(elmMove.elm , oldStartVnode.elm)
            } else {
                //没找到节点[创建节点]
                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm)

            }
            //新数据指针++
            newStartVnode = newCh[++newStartIdx]
        }
    }
    //结束循环 只有两种情况 新增或删除
    if(oldStartIdx > oldEndIdx) {
        const before = newCh[newEndIdx+1] ? newCH[newEndIdx+1].elm : null;
        for(let i = newStartIdx;i <= newEndIdx;i++) {
            parentElm.insertBefore(createElement(newCh[i]),before)
        }
    }else {
        //进入删除操作
        for(let i = oldStartIdx; i <= oldEndIdx;i++){
            parentElm.removeChild(oldCh[i].elm);
        }
    }
}
//判断两个虚拟节点是否为同一个节点
function sameVnode(vNode1, vNode2) {
    return vNode1.key == vNode2.key;
}