
# 批量删除本地分支

```bash
git branch

# 过滤出 dev_ 开头的分支
git branch | grep -E 'dev_'

# 读取输入数据重新格式化后输出
git branch | grep -E 'dev_' | xargs

# 删除本地分支
git branch | grep -E 'dev_' | xargs git branch -D
```