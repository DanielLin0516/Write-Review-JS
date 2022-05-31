// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/decode-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"
s = "3[a]2[bc]"
function decodeString(s) {
    let numStack = [];
    let strStack = [];
    let num = 0;
    let str = "";
    for(let char of s) {
        if(!isNaN(char)) {
            num = num * 10 + Number(char);
        }else if(char === "[") {
            numStack.push(num);
            num = 0;
            strStack.push(str);
            str = "";
        }else if(char === "]") {
            let time = numStack.pop();
            str = strStack.pop() + str.repeat(time);
            console.log(str)
        }else {
            str = str + char
        }
    }
    return str;
}
console.log(decodeString(s))
