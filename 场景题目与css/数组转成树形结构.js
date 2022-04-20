//input ["a","b","c","d","e","f","g"];
//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}
let input = ["a","b","c","d","e","f","g"];
console.log(input.reduceRight((prev,cur) => {
    let temp ={}
    temp[cur] = prev;
    return temp
}))