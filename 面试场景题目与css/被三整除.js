const max = (nums) => {
    let dp = [0, -Infinity, -Infinity];
    for (let num of nums) {
        if (num % 3 === 0) {
            dp = [dp[0] + num, dp[1] + num, dp[2] + num ]
        } else if (num % 3 === 1) {
            const a = Math.max(dp[2] + num, dp[0]);
            const b = Math.max(dp[0] + num, dp[1]);
            const c = Math.max(dp[1] + num, dp[2]);
            dp = [a, b, c];
        } else if (num % 3 === 2) {
            const a = Math.max(dp[1] + num, dp[0]);
            const b = Math.max(dp[2] + num, dp[1]);
            const c = Math.max(dp[0] + num, dp[2]);
            dp = [a, b, c];
        }
    }
    return dp[0];
};
console.log(max([3,6,1,8,5]))
