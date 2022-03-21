
# 俩数相加

> https://leetcode-cn.com/problems/add-two-numbers

给你两个<b style="color:red">非空</b>的链表，表示两个非负的整数。它们每位数字都是按照<b style="color:red">逆序</b>的方式存储的，并且每个节点只能存储 一位数字。<br>
请你将两个数相加，并以相同形式返回一个表示和的链表。<br>
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。<br>

----

解题思路比较简单
- 就是俩个链表从左往右以此相加，长度不够的链表用0补位
- 考虑俩数相加可能会大于10，需要保存这个进位的值(就是 (a+b)%10的取整>0)，用在链表的下一个俩数相加
- 最后在俩个链表遍历完之后，还有处理进位的值是否==1

```js
// 创建链表
function ListNode(val){
  this.val = val
  this.next = null
}
let ln1 = new ListNode(9)
let l1 = ln1;

([9,9,9,9,9,9,9]).forEach((it)=>{
  ln1.next = new ListNode(it)
  ln1 = ln1.next
})
let ln2 = new ListNode(9)
let l2 = ln2;

[9,9,9].forEach((it)=>{
  ln2.next = new ListNode(it)
  ln2 = ln2.next
})


const addTwoNumbers = (l1,l2)=>{
  let head = null,result=null
  let one  = 0 // 近位的值
  while(l1||l2){
    let s1 = l1 ? l1.val : 0
    let s2 = l2 ? l2.val : 0
    
    let sum = s1 + s2 + one
    one = sum>=10?1:0 // 
    let data = sum%10
    if(!head){
      head=result=new ListNode(data)
    }else{
      result.next = new ListNode(data)
      result = result.next
    }
    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }
  if(one>0){
    result.next = new ListNode(one)
  }
  return head
}
addTwoNumbers(l1,l2)
``` 



