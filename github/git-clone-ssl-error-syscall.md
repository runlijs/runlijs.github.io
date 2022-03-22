
# git clone时SSL_ERROR_SYSCALL 问题解决

最近我发现在使用 git clone 或 git pull 访问远程仓库的时候，总是无法连接 GitHub 服务器。出现如下错误

```shell
git clone https://github.com/xxx/xxx.git
fatal: unable to access 'https://github.com/xxx/xxx.git/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443 

```

在使用 HTTPS 连接 GitHub 进行 push/pull 时，需要更改本地 git 的配置，使用代理向 GitHub 发起请求。这里我们需要一个梯子

执行命令打开git配置文件

```shell
git config --global -e
```

在配置文件中加入如下内容：

```shell
[http]
  proxy = socks5://127.0.0.1:1086
[https]
  proxy = socks5://127.0.0.1:1086
```

其中“1086”为你的梯子代理软件的指定出入端口，请根据实际情况自行修改

修改之后就可以正常的git clone仓库了