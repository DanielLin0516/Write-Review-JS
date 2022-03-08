/**
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//二维数组写法
// var canPartition = function (nums) {
//     let sum = 0;
//     let n = nums.length;
//     for (let item of nums) {
//         sum = sum + item;
//     }
//     let target = sum % 2 ? false : sum / 2;
//     if (target === false) {
//         return target;
//     }

//     let dp = new Array(n).fill(0).map(() => new Array(target + 1).fill(0))
//     for(let i = 0; i < n ;i++) {
//         dp[i][0] = 0;
//     }
//     for(let i = 1;i <= target + 1;i++) {
//         if(i >= nums[0]) {
//             dp[0][i] = nums[0]
//         }else {
//             dp[0][i] = 0;
//         }
//     }
//     for(let i = 1; i < n ; i++) {
//         for(let j = 0;j <= target + 1 ;j++) {
//             if(j < nums[i]) {
//                 dp[i][j] = dp[i-1][j];
//             }else {
//                 dp[i][j] = Math.max(dp[i - 1][j],dp[i - 1][j - nums[i]] + nums[i]);
//             }
//         }
//     }
//     return target === dp[n - 1][target] ? true : false;
// };
// 一维数组写法
var canPartition = function (nums) {
    let sum = 0;
    let n = nums.length;
    for (let item of nums) {
        sum = sum + item;
    }
    let target = sum % 2 ? false : sum / 2;
    if (target === false) {
        return target;
    }
    let dp = new Array(target + 1).fill(0);
    for(let i = 0; i < n ; i++) {
        for(let j = target;j >= nums[i] ;j--) {
            dp[j] = Math.max(dp[j],dp[j - nums[i]] + nums[i]);
            if(dp[j] === target) return true;
        }
    }
    return dp[target] === target;
};
console.log(canPartition([1, 5, 11, 5]))