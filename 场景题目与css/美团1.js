// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 小美现在相信一些数字能给他带来好运。
// 这些数字至少满足以下两个特征中的一种：
// 1. 数字是11的整数倍。
// 2. 数字中至少包含两个1。
// 小美现在给你若干数字，希望你回答这个数字是不是幸运数。
// 例如：132是11的12倍，满足条件1，101有两个1，满足条件2。
function luckyNumber(n,...args) {
    let answer = [];
    [...args].forEach(item => {
        if (item % 11) {
            let str = item.toString().split("");
            count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '1') {
                    count++;
                }
            }
            if (count >= 2) {
                answer.push("yes");
            } else {
                answer.push("no")
            }
        } else {
            answer.push("yes");
        }
    })
    return answer
}
let arr = luckyNumber(6, 22, 101, 1234, 555, 10001, 132)
arr.forEach(item => {
    console.log(item)
})