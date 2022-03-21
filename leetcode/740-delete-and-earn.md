
# 740. 删除并获得点数

> https://leetcode-cn.com/problems/delete-and-earn

给你一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

-----

解题思路，动态规划
- 看完题目思考过后觉得这个和打家劫舍题目有点类似，我们可以这样看待题目
- 选择任意一个nums[i]房间开始偷，偷完nums[i]房间后要避开等于 nums[i] - 1 和 nums[i] + 1的房间
- 这个时候我看理解成这样
- 1、如果不偷nums[i]房间的点数时，就要等前一个num[i-1]房间的点数
- 2、如果偷nums[i]房间的点数时，同时要得到num[i-2]房间的最大点数和num[i]房间的点数乘以数量
----
思路写的也许不是很明白，举个例子,

在原来的nums基础上遍历出一个新的数组，这个新数组以旧数组元素的值来做下标，下标对应值是原来的元素的个数。

打印出来的的新数组[ 0, 0, 2, 3, 3, 0, 0, 0 ]，这里可以看到2有2个，3有3个，4有4个<br >
这个时候我们就可以用的[198、打家劫舍](/leetcode/198-house-robber)思路去解题了
```js
let nums = [2, 2, 4, 3, 3,4, 3, 4]
let newNums = nums.reduce((arr,it)=>{
  arr[it] = arr[it] ? arr[it]+1:1
  return arr
},Array(nums.length).fill(0))
// 新数组的值
// [ 0, 0, 2, 3, 3, 0, 0, 0 ]
console.log(newNums)
```

- 打家劫舍公式如下
```js
dp[i]=Math.max(dp[i-1],nums[i]+dp[i-2])
```
- 把打家劫舍的公式稍微改一下 
- 之前重新遍历出新的数组，i表示旧数组对应的值，newNums[i]下标对应值在旧数组中的个数。
```js
dp[i] = Math.max(dp[i-1],dp[i-1]+(i*newNums[i]))
```


- 最后给出打家劫舍代码如下

```js
var rob = function(nums) {
  let newNums = nums.reduce((arr,it)=>{
    arr[it] = arr[it] ? arr[it]+1:1
    return arr
  },Array(Math.max(...nums)).fill(0))
  if(newNums.length==1) return newNums[0]
  if(newNums.length==2) return Math.max(newNums[0],newNums[1])

  let first = newNums[0]
  let sec   = Math.max(newNums[0],newNums[1])
  for(let i=2;i<newNums.length;i++){
    let tem = sec
    sec = Math.max(sec,(newNums[i]*i)+first)
    first = tem
  }
  return sec
}
```
- 时间复杂度:O(n)
- 空间复杂度:O(1)
