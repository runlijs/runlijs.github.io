




let start = Date.now()

var fib = function(obj,n){
  if(n==0) return 0
  if(n==1 || n==2) return 1
  if(obj[n]) return obj[n] // 缓存已经n计算过的值
  obj[n] = fib(obj,n-1)+fib(obj,n-2)
  return obj[n]
}

// var fib = function(n) {
//   if(n<=1) return n

//   // return fib(n-1)+fib(n-2)
//   let obj = {}
//   return mapData(obj,n)
// }

console.log('509. 斐波那契数', fib({},0))
console.log(Date.now()-start)
