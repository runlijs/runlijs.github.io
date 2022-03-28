
let canJump = (nums)=>{
  if(nums.length<=1) return true
  let step = 0,len = nums.length // step  最大可以跳的步数
  for(let i=0;i<len;i++){  // step<len
    if(i<=step){
      step = Math.max(step,i+nums[i])
      console.log(step,'step')
      if(step>=len-1){
        return true
      }
    } 
  }
  return false

}


console.log('55. 跳跃游戏', canJump([2, 3, 1, 1, 4]))
// console.log(Date.now()-start)
