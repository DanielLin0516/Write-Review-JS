let str = "ab12cde"
const left = (str) => {
    let arr = str.split("")
    let del = arr.splice(0,2);
    return arr.join("") + del.join("")
}
console.log(left(str))