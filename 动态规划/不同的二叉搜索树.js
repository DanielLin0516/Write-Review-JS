/**
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 */
/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      for (let j = 0; j <= i - 1; j++) {
        dp[i] += dp[j] * dp[i - j - 1];
      }
    }
    return dp[n];  
};
console.log(numTrees(2))