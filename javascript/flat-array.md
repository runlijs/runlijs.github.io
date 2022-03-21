
# 扁平化数组

数组扁平化就是将 [1, [0],[2, [3, [4]]]] 这种多层的数组格式化平成一层 [1, 0,2, 3,4]

方法一：使用Array.prototype.flat(depth)方法扁平化数组，depth参数是指可以遍历数组深度的值，默认为1

```js
let arr = [1, [0],[2, [3, [4]]]]
arr.flat(1) // [1,0,2,[3,[4]]]
arr.flat(2) // [1,0,2,3,[4]]
arr.flat(Infinity) // [1,0,2,3,4]
```

方法二：使用递归方法来实现数组扁平化
```js
let arr = [1, [0],[2, [3, [4]]]]
const flatArray = arr=>{
  return arr.reduce((data,item)=>data.concat(Array.isArray(item)?flatArray(item):item),[])
}
flatArray(arr)
```

上面的代码可以优化一下，加多一个参数控制扁平化的深度

```js
let arr = [1, [0],[2, [3, [4]]]]
const flatArray = (arr,deep=1)=>{
  return deep>0?arr.reduce((data,item)=>data.concat(Array.isArray(item)?flatArray(item,deep-1):item),[]):arr
}
flatArray(arr)
```


