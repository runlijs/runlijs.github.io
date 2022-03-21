

# 数组去重

方法一：使用ES6的 new Set 对象完成去重

```js

const removeRepeat = arr => [...new Set(arr)]
removeRepeat([1,'1',{},{},1,[],[],null,undefined,false,0,true,'1']) //  [1, "1", {…}, {…}, Array(0), Array(0), null, undefined, false, 0, true]

removeRepeat([1,2,453,2,453,'33',3,'name','key','33']) // [1, 2, 453, "33", 3, "name", "key"]
```

方法二：使用ES5的filter方法和Array.indexOf过滤，判断当前值的索引是否等于它在数组中的索引，等于就是没有重复返回true，不等于就是重复返回false

```js
const removeRepeatByFilter= arr =>{
  let list = arr.filter((item,index,array)=>{
    return array.indexOf(item)===index
  })
  return list
}
removeRepeatByFilter([1,'1',{},{},1,[],[],null,undefined,false,0,true,'1']) // [1, "1", {…}, {…}, Array(0), Array(0), null, undefined, false, 0, true]
removeRepeatByFilter([1,2,453,2,453,'33',3,'name','key','33']) // [1, 2, 453, "33", 3, "name", "key"]
```


方法三：使用ES5的reduce方法和Array.includes判断，includes方法返回true和false，判断值是否在新数组中
```js
const removeRepeatByReduce = arr=>{
  return list = arr.reduce((data,item)=>{
    !data.includes(item) && data.push(item)
    return data
  },[])
}
removeRepeatByReduce([1,'1',{},{},1,[],[],null,undefined,false,0,true,'1']) // [1, "1", {…}, {…}, Array(0), Array(0), null, undefined, false, 0, true]
removeRepeatByReduce([1,2,453,2,453,'33',3,'name','key','33']) // [1, 2, 453, "33", 3, "name", "key"]
```


