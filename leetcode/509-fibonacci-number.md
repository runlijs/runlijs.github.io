
# 509. 斐波那契数

> https://leetcode-cn.com/problems/fibonacci-number/

斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

```text
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
``` 

给定 n ，请计算 F(n) 。

----

1、动态规划解题
```js
var fib = function(n) {
  if(n<=1) return n
  let dp=[0,1]
  for(let i=2;i<=n;i++){
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
```

动态规划代码可以稍微优化一下

```js
var fib = function(n) {
  if(n<=1) return n
  let prev=0,next=1,temp=0
  for(let i=2;i<=n;i++){
    temp = next+prev
    prev = next
    next = temp
  }
  return next
}
```


2、迭代，暴力解题非常消耗性能

```js
var fib = function(n) {
  if(n<=1) return n

  return fib(n-1)+fib(n-2)
}
```
迭代代码稍微优化一下

```js
var fib = function(obj,n){
  if(n==0) return 0
  if(n==1 || n==2) return 1
  if(obj[n]) return obj[n] // 缓存已经n计算过的值
  obj[n] = fib(obj,n-1)+fib(obj,n-2)
  return obj[n]
}

```

