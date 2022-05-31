//input ["a","b","c","d","e","f","g"];
//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}
let input = ["a", "b", "c", "d", "e", "f", "g"];
console.log(input.reduceRight((prev, cur) => {
    let temp = {}
    temp[cur] = prev;
    return temp
}))
const dfs = (input) => {
    if (input.length == 1) return input[0];
    const obj = {};
    const key = input.shift();
    obj[key] = dfs(input);
    return obj;
}
console.log(dfs(input))