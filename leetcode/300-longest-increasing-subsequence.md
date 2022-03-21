
# 最长递增子序列
> https://leetcode-cn.com/problems/longest-increasing-subsequence/

给你一个整数数组 nums ，找到其中最长严格**递增子序列**的长度。<br>

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

---
解题思路

- 首先定义一个 *dp=[]* 空数组来存放元素**nums索引i**的最长上升子序列的长度
- 这个时候需要状态转移，当后面一个数值大于前面一个数字，这里就形成了一个**上升子序列**
- 就是nums[i](后面的值)>nums[j](前面的值)的值，那么dp[i] = (dp[j]+1)，dp数组中j索引所在的位置**最多升子序列的长度**+1
- 最终规则就是 dp[i] = 0≤j<i,nums[j]<nums[i],Math.max(dp[i],dp[j]+1) 
- 代码如下

```js
let arr = [10,9,2,5,3,7,101]
const lengthOfLIS = nums=>{
  let dp=[1]
  let len = nums.length
  for(let i=1;i<len;i++){
    dp[i] = 1
    for(let j=0;j<i;j++){
      // 索引i的值<索引j的值时
      if(nums[j] < nums[i]){
        // 在dp数组中的值代表原数组(nums)对应的 #子序列的长度# 的长度
        dp[i] = Math.max(dp[i],dp[j]+1)
      }
    }
  }
  return Math.max(...dp)
}
console.log(lengthOfLIS(arr))
```
----

方法2：贪心+二分法

```js
let arr = [10,9,2,5,3,7,101]
const lengthOfLIS = nums=>{
  let dp=['',nums[0]]
  let len = nums.length
  for(let i=1;i<len;i++){
    let last = dp[dp.length-1]
    if(nums[i]>last){
      // 当前元素大于 dp 数组的最后一个值是，将当前元素添加到 dp 末尾
      dp.push(nums[i])
    }else{
      let left = 0
      let right = dp.length
      let s = 0 // 
      console.log('dp',dp)
      while(left<right){
        let mid = left+((right-left)>>1)
        console.log('mid',mid)
        // 判断当前i元素的值是否大于mid元素的值
        if(nums[i]>dp[mid]){
          // 记录当前大于mid元素值的索引
          s = mid
          // 将left的值偏移到mid的下一位，在去查找left和right元素区间的值是否满足条件
          left = mid+1
        }else{
          // 如果i元素的值没有大于mid元素的值，将right赋值为mid，然后在去查找left和right元素区间的值是否满足条件
          right = mid
        }
      }
      // 最后将i元素的值添加到(s+1)的位置，
      // 因为dp[0]==''值，所以在添加值的时候需要(s+1)
      dp[s+1] = nums[i]
    }
  }
  return dp.length-1
}
console.log(lengthOfLIS(arr))
```