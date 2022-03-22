
# GitHub,443 Operation timed out的解决办法

1、打开https://github.com.ipaddress.com

![github.com.ipaddress.com](../images/1633751320319-8273076c-e2de-4a85-ad3a-dfbdc644c1d4.png)

2、打开https://fastly.net.ipaddress.com/github.global.ssl.fastly.net#ipinfo 

![github.global.ssl.fastly.net](../images/1633751431764-fb1c202e-6b3a-486a-b0f9-5b2073c3d3ce.png)

3、打开https://github.com.ipaddress.com/assets-cdn.github.com 

![assets-cdn.github.com](../images/1633757581276-8f5b7952-77e2-4ae6-a0d9-f6733fb566fa.png)


4、打开电脑的hosts文件，把上面图片记录下来的ip保存即可，也可以下载[SwitchHosts](https://swh.app/zh/)更新hosts文件

```text
140.82.113.4   github.com

199.232.69.194  github.global.ssl.fastly.net

185.199.108.153  assets-cdn.github.com
185.199.109.153  assets-cdn.github.com
185.199.110.153  assets-cdn.github.com
185.199.111.153  assets-cdn.github.com
```
5、更新hosts文件后需要刷新DNS，运行如下2行命令即可

```shell
sudo killall -HUP mDNSResponder
say DNS cache has been flushed
```