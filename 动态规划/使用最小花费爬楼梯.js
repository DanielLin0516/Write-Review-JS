/*
给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-cost-climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} cost
 * @return {number}
 */
//  var minCostClimbingStairs = function(cost) {
//     dp = new Array(cost.length - 1);
//     dp[0] = cost[0];
//     dp[1] = cost[1];    
//     for(let i = 2; i < cost.length; i++) {
//         dp[i] = Math.min(dp[i - 1],dp[i - 2]) + cost[i]
//     }
//     return Math.min(dp[cost.length - 1],dp[cost.length - 2]);
// };
// 空间复杂度On
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
var minCostClimbingStairs = function(cost) {
    dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i = 2; i < cost.length; i++) {
        let sum = Math.min(dp[0],dp[1]) + cost[i];
        dp[0] = dp[1];
        dp[1] = sum;
    };
    return Math.min(dp[0],dp[1]);
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
