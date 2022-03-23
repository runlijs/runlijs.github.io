




let start = Date.now()

var fib = function(obj,n){
  if(n==0) return 0
  if(n==1 || n==2) return 1
  if(obj[n]) return obj[n] // 缓存已经n计算过的值
  obj[n] = fib(obj,n-1)+fib(obj,n-2)+fib(obj,n-3)
  return obj[n]
}

// var fib = function(n) {
//   if(n<=1) return n

//   // return fib(n-1)+fib(n-2)
//   let obj = {}
//   return mapData(obj,n)
// }
var tribonacci = function(n) {
  let dp = [0,1,1]
  for(let i=3;i<=n;i++){
    dp[i] = dp[i-1]+dp[i-2]+dp[i-3]
  }
  return dp[n]
};

console.log('509. 斐波那契数', tribonacci(8))
// console.log(Date.now()-start)
