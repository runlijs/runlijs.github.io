# 53. 最大子数组和

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。


----

解题思路

- 此题还是比较简单的一个题目，我们用动态规划可以简单实现
- 给定整数数组nums是有正数和负数，所以我们在计算下标<i>num[i]+nums[i-1]</i>的时候会存在正负性。
- 下标<i>num[i]+nums[i-1]</i>会存在正负性，所以我们需要判断<i>Math.max(num[i]+nums[i-1],num[i])</i>的最大值，这样我们只需要记录下这个最大值即可

```js
let maxSubArray = (nums)=>{
  if(nums.length==0) return 0
  let max=0,pre=0
  for(let i=0;i<nums.length;i++){
    pre = Math.max(pre+nums[i],nums[i])
    max = Math.max(max,pre)
  }
  return max
}
```

