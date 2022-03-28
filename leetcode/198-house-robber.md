
# 打家劫舍

> https://leetcode-cn.com/problems/house-robber/

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是<b>相邻的房屋装有相互连通的防盗系统</b>，

如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

-----

解题思路，动态规划
- 考虑简单情况，一间房的时候就偷它没得选，两间房的时候因为不能偷相邻的房屋就选择一间现金大的偷
- 房间数大于2的时候，因为不能偷相邻的房屋这个时候应该怎么偷？这是个时候有个两个选择
- 1、偷第x间房的时候就不能偷x-1的房间，这个时候就可以偷x-2间房的最多现金和x间房的现金之和
- 2、不偷第x间房的现金，而是偷x-1间房的现金之和
- 在这2个选择中选一个最大的金额，就是我们第x间房能偷的最大现金数
- 得出公式如下
```js
dp[i]=Math.max(dp[i-1],nums[i]+dp[i-2])
```


- 最后给出打家劫舍代码如下
```js
var rob = function(nums) {
    if(nums.length==1) return nums[0]
    if(nums.length==2) return Math.max(nums[0],nums[1])
    let dp = [nums[0],Math.max(nums[0],nums[1])]
    for(let i=2;i<nums.length;i++){
      dp[i] = Math.max(dp[i-1],nums[i]+dp[i-2])
    }
    return dp[nums.length-1]
}
```
- 时间复杂度:O(n)
- 空间复杂度:O(n)

- 但是由于这里的 dp[i] 只和 dp[i-1] 与 dp[-2] 有关，所以我们可以用「滚动数组思想」把空间复杂度优化成 O(1),下面的代码中给出的就是这种实现。

```js
var rob = function(nums) {
  if(nums.length==1) return nums[0]
  if(nums.length==2) return Math.max(nums[0],nums[1])
  let f = nums[0]   // 表示第一间房，也就是dp[i-2] 
  let s = Math.max(nums[0],nums[1])  // 表示第二间房，也就是dp[i-1]，也就是相邻的房间
  for(let i=2;i<nums.length;i++){
    let tem = s
    s = Math.max(s,nums[i]+f)  
    f = tem
  }
  return s
}
```
- 时间复杂度:O(n)
- 空间复杂度:O(1)