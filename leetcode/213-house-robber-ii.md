
# 打家劫舍 II

> https://leetcode-cn.com/problems/house-robber-ii

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

-----


解题思路，动态规划
- 这个题目就是 [198、打家劫舍](/leetcode/198-house-robber)的升级版
- 唯一不同的地方就是第一间房和最后一间房是紧挨着的，因此第一间房屋和最后一间房屋不能在同一晚上偷窃
- 假设偷窃房屋的下标范围是 [start,end]，用 dp[i] 表示在下标范围 [start,i] 内可以偷窃到的最高总金额，
- 这个时候 分别取 (start,end)=(0,n−1) 和 (start,end)=(1,n) 进行计算，取两个 dp[end] 中的最大值，即可得到最终结果

- 最后给出打家劫舍代码如下

```js
var rob = function(nums) {
  let len = nums.length
  if(len==1){
    return nums[0]
  }else if(len==2){
    return Math.max(nums[0],nums[1])
  }
  // 计算出 偷第一个房屋就不偷最后一个房屋
  // 计算出 不偷第一个房屋就偷最后一个房屋
  return Math.max(robRange(0,len-1,nums),robRange(1,len,nums))
}
const robRange = (start,end,nums)=>{
  let f = nums[start] // 第一间房子
  let s = Math.max(nums[start],nums[start+1]) // 第二间房子
  for(let i=start+2;i<end;i++){  // 
    let tem = s
    s = Math.max(s,nums[i]+f)  
    f = tem
  }
  return s
}
```
- 时间复杂度:O(n)
- 空间复杂度:O(1)