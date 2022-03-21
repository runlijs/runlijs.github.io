
# 1567. 乘积为正数的最长子数组长度

> https://leetcode-cn.com/problems/maximum-length-of-subarray-with-positive-product

给你一个整数数组 nums ，请你求出乘积为正数的最长子数组的长度。

一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。

请你返回乘积为正数的最长子数组长度。

----

可以使用动态规划得到乘积为正数的最长子数组长度。

定义两个变量 maxZ 和 maxF，其中 maxZ 表示以下标 i 结尾的乘积为正数的最长子数组长度，

1、当num[i]>0时，之前的乘积乘以nums[i]的时候不会改变正负性

所以 maxZ=maxZ+1，maxF=maxF>0?maxF+1:0。maxF=0的时候是没有办法形成一个乘积的需要特殊判断

2、当num[i]<0时，之前的乘积乘以nums[i]的时候会改变正负性

所以将maxZ和maxF的值交换，maxF=maxZ+1，maxZ = maxF>0?maxF+1:0

3、当nums[i]==0时，maxZ和maxF置为0


所以我们只要维护maxZ的值就可以计算出乘积为正数的最长子数组长度

```js

var getMaxLen = function(nums) {
  let max = 0
  let maxF = 0
  let maxZ = 0 
  for(let i=0;i<nums.length;i++){
    if(nums[i]>0){
      maxZ +=1 // maxZ直接加1
      maxF = maxF>0?maxF+1:0 // maxF需要特殊判断
    }else if(nums[i]<0){
      // maxZ和maxF的值交换
      let temp = maxZ
      maxZ = maxF>0?maxF+1:0 // maxF需要特殊判断
      maxF = temp+1 // temp是上个乘积maxZ的值，直接加1
    }else {
      // num[i] == 0 正负数统计清零
      maxZ=0,maxF=0
    }
    max = Math.max(max,maxZ)
  }
  return max
}

```