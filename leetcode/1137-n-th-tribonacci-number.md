
# 1137. 第 N 个泰波那契数

> https://leetcode-cn.com/problems/n-th-tribonacci-number

泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

看到这个道题就想到之前做过的[509. 斐波那契数](/leetcode/509-fibonacci-number)，几乎是没有什么大的差别

---

1、动态规划

```js
var tribonacci = function(n) {
  if(n==0) return 0
  if(n==2 || n==1) return 1
  
  let [a,b,c] = [0,1,1]
  for(let i=3;i<=n;i++){
    [a,b,c] = [b,c,a+b+c]
  }
  return c
};
```

2、创建一个dp数组了存放第n个泰波那契数值

```js
var tribonacci = function(n) {
  let dp = [0,1,1]
  for(let i=3;i<=n;i++){
    dp[i] = dp[i-1]+dp[i-2]+dp[i-3]
  }
  return dp[n]
}
```

3、递归
```js
var tribonacci = function(obj,n){
  if(n==0) return 0
  if(n==1 || n==2) return 1
  if(obj[n]) return obj[n] // 缓存已经n计算过的值
  obj[n] = fib(obj,n-1)+fib(obj,n-2)+fib(obj,n-3)
  return obj[n]
}
tribonacci({},5) 
```