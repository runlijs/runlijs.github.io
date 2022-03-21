var maxProduct = function(nums) {
  let max = nums[0]
  let maxDp = nums[0]
  let minDp = nums[0]
  for(let i=1;i<nums.length;i++){
    let prevMax = nums[i]*maxDp
    let prevMin = nums[i]*minDp
    maxDp = Math.max(prevMax,nums[i],prevMin)
    minDp = Math.min(prevMin,nums[i],prevMax)
    console.log(maxDp,minDp)
    console.log()
    max = Math.max(max,maxDp)
  }
  return max

};
console.log(' /* 152. 乘积最大子数组 */',maxProduct([2,3,-2,4]))