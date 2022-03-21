# 使用最小花费爬楼梯

>https://leetcode-cn.com/problems/min-cost-climbing-stairs

数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。

请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

---

解题思路，动态规划
- 注意 达到楼层顶部 的是要爬到cost.length的高度，也是就要跨过第 cost.length-1
- 题目说"可以选择从下标为 0 或 1 的元素作为初始阶梯"，那我们的初始值可以定义为 dp[0]=dp[1]=0
- 也就说我们要在 i=2的时候开始爬楼梯，同时达到楼层(cost.length),那我们的判断条件就是 2≤i≤cost.length
- 怎么获取最小体力值？要想到达 第i个台阶就要花费cost[i-2]的体力爬2步或者花费cost[i-1]的体力爬1步，同时加上dp[i-2]和dp[i-1]的体力值，最后就是 达到楼层顶部 的最小体力值

```js
var minCostClimbingStairs = function(cost) {
  let n = cost.length
  let dp = [0,0]
  for(let i=2;i<=n;i++){
    dp[i] = Math.min((dp[i-1]+cost[i-1]),(dp[i-2]+cost[i-2]))
  }
  return dp[n]
}
```
时间和空间复杂度：O(n)

- 注意到当 i≥2 时，dp[i] 只和 dp[i−1] 与 dp[i−2] 有关，因此可以使用滚动数组的思想，将空间复杂度优化到O(1)。
```js
var minCostClimbingStairs = function(cost) {
  let n = cost.length
  // 定义2个变量，pre代表dp[i-2],cur代表dp[i-1]
  let [pre,cur] = [0,0]
  for(let i=2;i<=n;i++){
    let min =  Math.min((cur+cost[i-1]),(pre+cost[i-2]))
    pre = cur
    cur = min
  }
  return cur
}
```
- 时间复杂度：O(n)
- 空间复杂度：O(1)