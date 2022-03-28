
# 55. 跳跃游戏

> https://leetcode-cn.com/problems/jump-game

给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

----
解题思路，贪心

- 我们将第一个格子作为起跳点，如果第一个格子为0就不要想了这个是跳不过去的
- 假如第一个格子为4，那么后面的4个格子都可以作为起跳点
- 我们将每一个起跳点的格子都跳一偏，然后计算出最大长度的
- 如果能跳到最后就成功了

思路有了就可以写公式了

索引<i>x</i>下标，每个格子的最大长度跳跃距离为<i>x+nums[x]</i>，如果这个值大于等于nums.length，即<i>x+nums[x]≥nums.length</i>那么位置 nums.length 也可以到达


```js
let canJump = (nums)=>{
  if(nums.length<=1) return true
  let step = 0,len = nums.length // step  最大可以跳的步数
  for(let i=0;i<len;i++){  // step<len
    if(i<=step){
      step = Math.max(step,i+nums[i])
      if(step>=len-1){
        return true
      }
    } 
  }
  return false
}

```

