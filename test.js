
/**
 * 45. 跳跃游戏 II
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  // // 反向查找出发位置
  // let last = nums.length-1
  // let step = 0 // 默认步数 
  // while(last>0){ 
  //   for(let i=0;i<last;i++){
  //     let num = nums[i]==0?1:nums[i]
  //     if(i+num>=last){
  //       last = i
  //       step++
  //       break
  //     }
  //   }
  // }
  // return step
  let len = nums.length-1
  let end = 0 // 
  let step = 0
  let max = 0
  for(let i=0;i<len;i++){
    max = Math.max(max,i+nums[i])
    
    if(i==end){
      end = max // 
      // console.log(end,'end') 
      step++
      // if(end>len){
      //   step++
      //   return step
      // }
    }
    
  }
  return step
}
console.log(' /* 45. 跳跃游戏 II */',jump([2,3,1,2,4,2,3]))
console.log(' /* 45. 跳跃游戏 II */',jump([2,3,1,1,4]))

/**
 * 53. 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = 0,prevMax=0
  for(let i=0;i<nums.length;i++){
    prevMax = Math.max(nums[i],prevMax+nums[i])
    max = Math.max(max,prevMax)
  }
  return max
};
console.log(' /* 53. 最大子序和 */',maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(' /* 45. 跳跃游戏 II */',jump([3,2,1,0,4]))
/**
 * 55. 跳跃游戏
 * 贪心方法一
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length<=1) return true
  let reach = 0,len = nums.length

  for(let i=0;i<=reach && reach<len;i++){
    // reach 最多能跳步数小于i需要到达的位置，就表示跳不到，直接return
    // if(reach<i){
    //   return false
    // }
    reach = Math.max(reach,i+nums[i])
  }
  return reach >=len-1
}
/**
 * 55. 跳跃游戏
 * 从后面往前判断能不能跳到下一步
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump2 = function(nums) {
  if(nums.length<=1) return true
  let step = 1 // 默认 后面往前能跳一步，
  for(let i=nums.length-2;i>=0;i--){
    // 如果nums[i]能跳的步数小于step需要跳的步数，就将step+1,然后再判断nump[i-1]是不是大于等于step需要跳的步数
    if(nums[i]<step){
      step += 1
    }else{
      step = 1
    }
  }
  return step==1
}

console.log(' /* 55. 跳跃游戏 */',canJump([2,3,1,1,4]))
// console.log(' /* 55. 跳跃游戏 */',canJump([3,2,1,0,4]))



/**
 * 198. 打家劫舍
 * @param {number} n
 * @return {number}
 */
var rob = function(nums) {
  // if(nums.length==1) return nums[0]
  // if(nums.length==2) return Math.max(nums[0],nums[1])
  // let dp = [nums[0],Math.max(nums[0],nums[1])]
  // for(let i=2;i<nums.length;i++){
  //   dp[i] = Math.max(dp[i-1],nums[i]+dp[i-2])
  // }
  // // console.log(dp)
  // return dp[nums.length-1]
  if(nums.length==1) return nums[0]
  if(nums.length==2) return Math.max(nums[0],nums[1])
  let f = nums[0] // 第一间房子
  let s = Math.max(nums[0],nums[1]) // 第二间房子
  for(let i=2;i<nums.length;i++){
    let tem = s
    s = Math.max(s,nums[i]+f)  
    f = tem
  }
  return s
}
console.log(' /* 198. 打家劫舍 */',rob([2,1,1,2]))

/**
 * 740. 删除并获得点数 打家劫舍3
 * @param {number} n
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let maxVal = 0;
  for (const val of nums) {
      maxVal = Math.max(maxVal, val);
  }
  const sum = new Array(maxVal + 1).fill(0);
  for (const val of nums) {
      sum[val] += val;
  }
  return rob(sum);
  // for
};
console.log(' /* 740. 删除并获得点数 打家劫舍3 */',deleteAndEarn([3,4,2]))


/**
 * 746. 使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let n = cost.length
  let dp = [0,0]
  for(let i=2;i<=n;i++){
    dp[i] = Math.min((dp[i-1]+cost[i-1]),(dp[i-2]+cost[i-2]))
  }
  return dp[n]
  // 代码优化一下，
  // 注意到当 i≥2 时，dp[i] 只和 dp[i−1] 与 dp[i−2] 有关，因此可以使用滚动数组的思想，将空间复杂度优化到O(1)。
  // 定义2个变量，pre代表dp[i-2],cur代表dp[i-1]

  // let [pre,cur] = [0,0]
  // for(let i=2;i<=n;i++){
  //   let min =  Math.min((cur+cost[i-1]),(pre+cost[i-2]))
  //   pre = cur
  //   cur = min
  // }
  // return cur
};
console.log(' /* 746. 使用最小花费爬楼梯 */',minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
var maxProduct = function(nums) {
  let max = nums[0]
  let maxDp = nums[0]
  let minDp = nums[0]
  for(let i=1;i<nums.length;i++){
    let prevMax = nums[i]*maxDp
    let prevMin = nums[i]*minDp
    maxDp = Math.max(prevMax,nums[i],prevMin)
    minDp = Math.min(prevMin,nums[i],prevMax)
    max = Math.max(max,maxDp)
  }
  return max
  // console.log(maxDp)
  // console.log(minDp)
  // nums.forEach(num=>{
  //   numSum += num
  //   prevMax = Math.max(num,prevMax+num)
  //   maxNum = Math.max(maxNum,prevMax)
  //   prevMin = Math.min(num,prevMin+num)
  //   minNum = Math.min(minNum,prevMin)
  // })
  // console.log(numSum,'numSum')
  // console.log(maxNum,'maxNum')
  // console.log(minNum,'minNum')
  // if (maxNum<0){
  //   return maxNum;
  // }
  // return Math.max(numSum-minNum,maxNum);

};
console.log(' /* 152. 乘积最大子数组 */',maxProduct([2,3,-2,4,-2]))

var maxSubarraySumCircular = function(nums) {
  let minNum = maxNum = nums[0],prevMax = prevMin = numSum = 0
  nums.forEach(num=>{
    numSum += num
    prevMax = Math.max(num,prevMax+num)
    maxNum = Math.max(maxNum,prevMax)
    prevMin = Math.min(num,prevMin+num)
    minNum = Math.min(minNum,prevMin)
  })
  if (maxNum<0){
    return maxNum;
  }
  return Math.max(numSum-minNum,maxNum);

};
console.log(' /* 918. 环形子数组的最大和 */',maxSubarraySumCircular([1,-2,3,-2]))


var getMaxLen = function(nums) {
  let maxZnum = nums[0]>0?1:0 // 正数
  let maxFnum = nums[0]<0?1:0 // 负数
  let max = maxZnum
  for(let i=1;i<nums.length;i++){
    if(nums[i]>0){
      maxZnum = maxZnum+1
      maxFnum = maxFnum==0?0:maxFnum+1
    }else if(nums[i]<0){
      let temp = maxZnum
      maxZnum = maxFnum==0?0:maxFnum+1
      maxFnum = temp+1
    }else{
      maxZnum = 0
      maxFnum = 0
    }
    max = Math.max(max,maxZnum)
  }
  return max
  /*
  [10,22,13,1,8,-6,7,8,-9]
  [1,2,3,4,5,0,1,2,9]
  [0,0,0,0,0,6,7,8,3]
  */
};
console.log(' /* 1567. 乘积为正数的最长子数组长度 */',getMaxLen([1,-2,3,-2]))
