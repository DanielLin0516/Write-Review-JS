let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 },
]
function formate(data) {
    let _data = JSON.parse(JSON.stringify(data));
    return _data.filter(p => {
        const arr = _data.filter(c => c.pid === p.id);
        arr.length && (p.children = arr);
        return p.pid === 0
    })
}
console.log(formate(arr))
function dfs(data) {
    const res = [];
    const map ={};
    data.forEach(item => {
        map[item.id] = item;
    })
    data.forEach(item => {
        let parent = map[item.pid];
        if(parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            res.push(item);
        }
    })
    return res;
}
console.log(dfs(arr))