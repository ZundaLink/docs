# 连接路由器安装

本文档介绍如何通过路由器配置 DNS 劫持来连接 ZundaLink 服务。

## 概述

路由器安装方式通过在路由器层面配置 DNS 劫持，将游戏服务器的域名解析指向 ZundaLink 服务器，从而实现全局代理。

## 适用路由器

以下路由器固件支持本安装方式：

- **OpenWRT** - 开源路由器固件
- **Padavan** - 华硕路由器改版固件
- **Tomato** - 第三方路由器固件
- **梅林固件** - 华硕官方改版固件
- **其他支持 dnsmasq 的固件**

## 准备工作

### 1. 获取必要信息

在配置之前，请确保您已获取：

- ZundaLink 服务器 IP 地址
- 需要劫持的 DNS 列表
- 您的工坊私钥

::: tip 提示
这些信息会在您的申请审核通过后提供，或可以联系管理员获取。
:::

### 2. 确认路由器权限

确保您有路由器的管理权限：

- 知道路由器管理界面的登录地址
- 拥有管理员账号和密码
- 路由器支持 SSH 或 Telnet 访问（可选，用于高级配置）

## 配置步骤

### OpenWRT 配置

#### 通过 Terminal 配置

确保您拥有使用 Terminal 或 SSH 的能力，并**懂得一部分Linux命令行基础知识**。

在您的 Terminal 中输入下面的命令行：

``` bash
cat << EOF > /etc/dnsmasq.hosts
81.70.119.xxx at.sys-xxx.cn # 隐去了部分信息
81.71.193.xxx ai.sys-xxx.cn # 隐去了部分信息
EOF

uci add_list dhcp.@dnsmasq[0].addnhosts='/etc/dnsmasq.hosts'

uci commit dhcp
/etc/init.d/dnsmasq restart
```

随后，请连接到您的 OpenWRT 路由进行一小段测试：

``` bash
nslookup at.sys-xxx.cn
```

测试并查看是否正确显示您配置的IP地址。

#### 通过 Web 界面配置

首先，请登录到您的 OpenWRT 后台（一般多为 http://192.168.1.1 ）:

输入您的账号密码（账户通常为默认的 root，密码通常为 root、passwd、password、12345678 等）并完成登录。

在菜单中依次找到【网络】 -> 【DHCP/DNS】 -> 【DNS记录】 ->【主机名映射】。

在【主机名映射】下方点击【添加】，主机名填写来自 ZundaLink 提供的域名，并对应该域名在下方的 IP 地址处填写对应的 IP 地址。

点击【保存并应用】后，等待配置刷新完成后使用连接到该 OpenWRT 的设备访问 ZundaLink 提供的域名以测试其连通性。

## 下一步

配置完成后，您可以：

1. [查看使用教程](../guide/) - 学习如何使用 ZundaLink 的各项功能
2. [配置转发规则](../api/forward) - 自定义游戏行为
