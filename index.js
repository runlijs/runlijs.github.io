// var maxProduct = function(nums) {
//   let max = nums[0]
//   let maxDp = nums[0]
//   let minDp = nums[0]
//   for(let i=1;i<nums.length;i++){
//     let prevMax = nums[i]*maxDp
//     let prevMin = nums[i]*minDp
//     maxDp = Math.max(prevMax,nums[i],prevMin)
//     minDp = Math.min(prevMin,nums[i],prevMax)
//     console.log(maxDp,minDp)
//     console.log()
//     max = Math.max(max,maxDp)
//   }
//   return max

// };
// console.log(' /* 152. 乘积最大子数组 */',maxProduct([2,3,-2,4]))

var getMaxLen = function(nums) {
  let max = 0
  let maxF = 0
  let maxZ = 0 
  for(let i=0;i<nums.length;i++){
    if(nums[i]>0){
      maxZ +=1
      maxF = maxF>0?maxF+1:0
    }else if(nums[i]<0){
      let temp = maxZ
      maxZ = maxF>0?maxF+1:0
      maxF = temp+1
    }else {
      maxZ=0,maxF=0
    }
    max = Math.max(max,maxZ)
  }
  return max
}

console.log('1567. 乘积为正数的最长子数组长度', getMaxLen([-1,-2,-3,4]))