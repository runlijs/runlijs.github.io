

# 最长连续递增序列

> https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

给定一个未经排序的整数数组，找到最长且 **连续递增的子序列**，并返回该序列的长度。

---

解题思路

- 遍历当前数组，记录当前连**连续递增子序列**的开始和结束索引，如果当前索引<em>i<=[i-1]</em>就不满足**连续递增子序列**的判定<br/>
- 在<em>i<=[i-1]</em>时，开始索引就是当前的<em>i</em>索引
- 如果 {nums}[l-1]<{nums}[l]，则将 {nums}[l-1] 加到 {nums}[l] 的前面，可以得到更长的连续递增序列.
- 如果 {nums}[r+1]>{nums}[r]，则将 {nums}[r+1] 加到 {nums}[r] 的后面，可以得到更长的连续递增序列。

```js
const findLengthOfLCIS = (nums)=>{
  let start=0, maxLen = 0
  for (let i=0;i<nums.length;i++){
    // 在nums[i]<=nums[i-1]时就不是连续递增子序列，start=i就是改变当前开始的索引
    if(i>0&&nums[i]<=nums[i-1]){
      start = i
    }
    // i-start+1 计算当前连续递增子序列的长度
    maxLen = Math.max(maxLen,i-start+1)
  }
  return maxLen
}
findLengthOfLCIS([1,3,5,4,7])
```