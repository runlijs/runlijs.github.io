
let maxSubArray = (nums)=>{
  if(nums.length==0) return 0
  let max=0,pre=0
  for(let i=0;i<nums.length;i++){
    pre = Math.max(pre+nums[i],nums[i])
    max = Math.max(max,pre)
  }
  return max
}


console.log('53. 最大子数组和', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(Date.now()-start)
