
# git中tag命令的简单用法

***

### 创建标签

Git支持两种标签：轻量标签与附注标签。

##### 附注标签
最简单的方式是当你在运行 tag 命令时指定 -a 选项是指定tag name , -m 选项是指定了一条将会存储在标签中的信息

```bash
git tag -a v1.0 -m 'my tag message'
git tag # 查看所有tags
v1.0.0
v1.0
```

---
##### 轻量标签
创建轻量标签，不需要使用 -a、-s 或 -m 选项，只需要提供标签名字
```bash
git tag v1.0-lw
git tag 
v1.0.0
v1.0
v1.0-lw
```

---
##### 后期打标签
当我们对历史记某个版本忘记打标签的时候可以这个补打标签，首先查看历史提交记录
```bash
git log --pretty=oneline
19959f13a85a21b8442f804cdac46aff5d3aef71 合并分支 'feature-0329-优惠卷推广/hwd' 到 'master'
2aafcbe8a780db9b4cb145386932ce8fa73b878b 合并分支 'feature-0401-UI调整/zzf' 到 'master'
2812244b93b332fb35b5323dc14902c9e17b79f7 解决未登录时返回‘我的’页面‘未登录’字样丢失的bug
6c0c3eedb9eab340aff098c1ce4904530852a8a7 增加‘跳过,看好货’按钮，跳转至首页
3d11ace72cd31347496284051228e5c7a5aeb91b (origin/feature-0329-优惠卷推广/hwd) 领取成功延迟跳转
fb9cade3b6a404a231f1b8ef38b28cf851e0e712 层级问题修复
45fed21678a7267d55fc3de039dadee66abb2fbd 新增 获取优惠卷 参数
baf27d7ad464bb475c07cfa6964c54fc93f5ba94 优惠卷 样式优化
2e7b16042cbd26e79e7f8109b5f9f19c95a8d60f 商品详情样式
5e9787dcee2ec19574d463f831c5ca6ac99f4120 (origin/feature-0331-商品详情接口调用顺序/hwd) 商品详情接口调用顺序调整
f4e1fe87007a7f9fa623933e524780c23aed655e 领取成功跳转首页
a8434d99adf6b56088d5779473d93c57629154fd 冲突合并 3-30/hwd
```
找到要打标签的对应commit记录id,比如我们我补打 ”冲突合并 3-30/hwd“这次提交，这样就可以补打成功

```bash
git tag -a v0.9 a8434d99adf6 -m 'my tag message'
git tag
v0.9
v1.0.0
v1.0
v1.0-lw

```
---

### 上传标签

默认情况下，git push 命令并不会传送标签到远程仓库服务器上。在创建完标签后你必须显式地推送标签到共享服务器上。这个过程就像上传本地分支一样，你可以运行git push origin tagname。

```bash
git push origin v1.0.0
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 193 bytes | 193.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To http://马赛克地址
 * [new tag]         v1.0.0 -> v1.0.0
```
也可以一次性推送所有标签
```bash
git push origin --tags
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 172 bytes | 172.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To http://马赛克地址
 * [new tag]         v0.9 -> v0.9
 * [new tag]         v1.0.0-lw -> v1.0.0-lw
```

### 删除标签
可以使用命令删除本地标签，
```bash
git tag -d v1.0.0-lw
Deleted tag 'v1.0.0-lw' (was 41ac265)
```
上述命令只是删除本地标签，并不会从任何远程仓库中移除这个标签，你必须执行下面命令才能删除仓库标签
```bash
git push origin :refs/tags/v1.0.0-lw
To http://马赛克地址
 - [deleted]         v1.0.0-lw
```
上面这种操作的含义是，将冒号前面的空值推送到远程标签名，从而高效地删除它。

第二种更直观的删除远程标签的方式是：
```bash
git push origin --delete v0.9
To http://马赛克地址
 - [deleted]         v0.9
```

### 检出标签
我们可以使用 git checkout 命令查看某个标签所指向的文件版本， 虽然这会使你的仓库处于“分离头指针（detached HEAD）”的状态，

```bash
git checkout v1.0.0
Note: switching to 'v1.0.0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 41ac265 合并分支 'feature-0401-UI调整/zzf' 到 'master'
```
如果你做了某些更改然后提交它们，标签不会发生变化， 但你的新提交将不属于任何分支，并且将无法访问，除非通过确切的提交哈希才能访问。 因此，如果你需要进行更改，比如你要修复旧版本中的错误，那么通常需要创建一个新分支：
```bash
git checkout -b version2 v1.0.0
Switched to a new branch 'version2'
```

### clone指定仓库分支
git clone --branch [tags标签] [git地址] 或者 git clone --b [tags标签] [git地址]

```bash
git clone -b v1.0.0  https://github.com/path/name.git
```
