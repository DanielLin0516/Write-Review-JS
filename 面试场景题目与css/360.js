function write(n1,n2,n3,main,wei,bin,number,...args) {
    let map = new Map();
    main.split(" ").forEach(item => {
        map.set(item,"0");
    })
    wei.split(" ").forEach(item => {
        map.set(item,"1");
    })
    bin.split(" ").forEach(item => {
        map.set(item,"2");
    })
    let answer = [];
    let right = [];
    [...args].forEach(item => {
        let str = "";
        item.split(" ").forEach(i => {
            str += map.get(i);
        })
        answer.push(str);
    })
    answer.forEach(item => {
        if(item.split("")[0] === "0" && item.split("")[1] === "1" && item.split("")[2] === "2") {
            right.push("YES")
        }else {
            right.push("NO")
        }
    })
    return right
}
console.log(write(3, 3, 3,
    "i you he",
    "am is are",
    "yours his hers",
    5,
    "i am yours",
    "you is his",
    "he are hers yours",
    "i am am yours",
    "is his"))