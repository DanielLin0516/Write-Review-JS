/**给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。 */
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if(n == 2) return 1;
    if(n == 3) return 2;
    if(n == 4) return 4;
    result = 1;
    while(n > 4 ) {
        result *= 3;
        n = n - 3;
    }
    result *= n;
    return result;
};
console.log(integerBreak(10))