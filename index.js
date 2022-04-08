
let maxSubarraySumCircular = (nums)=>{
  let pre = nums[0]
  let max = pre // 最大子数组和在中间的情况
  let sum = pre // 数组的总和
  let min = 0   // 

  // 计算最大数组和在中间的情况
  for(let i=1;i<nums.length;i++){
    sum += nums[i]
    pre = nums[i]+Math.max(pre,0)
    max = Math.max(pre,max) // 最大子数组和
  }
  pre = nums[0]
  for(let i=1;i<nums.length-1;i++){
    pre = nums[i]+Math.min(0,pre)
    min = Math.min(min,pre)
  }
  return Math.max(sum-min,max)
  
}


// console.log('918. 环形子数组的最大和', maxSubarraySumCircular([-2]))
console.log('918. 环形子数组的最大和', maxSubarraySumCircular([3,-2,2,-1,-3,-3]))
// console.log(Date.now()-start)


// let maxSubArray = (nums)=>{
//   if(nums.length==0) return 0
//   let max=0,pre=0
//   for(let i=0;i<nums.length;i++){
//     // pre = Math.max(pre+nums[i],nums[i])
//     pre = nums[i]+Math.max(pre,0)
//     max = Math.max(max,pre)
//   }
//   return max
// }

// console.log('53. 最大子数组和', maxSubArray([-1,-2,-3,-2]))
