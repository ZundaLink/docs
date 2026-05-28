# 使用U盘安装

本文档介绍如何通过 U 盘来安装 ZundaLink 服务到您的设备重。

::: warning 注意
若您的U盘容量小于或等于 16GB，可能会引发不必要的麻烦。推荐使用**大于或等于 64GB 的U盘或移动硬盘**。
:::

## 准备工作

### 下载与准备

首先，在管理员提供的网盘链接中下载**全部文件**到您的 PC 或 Mac 中。

插入您的移动设备到 PC 或者 Mac 上。Windows 用户请在文件资源管理器->您的移动设备->右键属性->格式化，将其格式化为 **exFAT** 格式，卷标为 **SEGA_INS** 。 Mac 用户请在 Finder 处找到移动设备，先修改其卷标，再通过 Mac 上的磁盘管理工具，将其格式化为 exFAT 格式。

另外，您还需要对移动设备的盘符进行修改。使用 [DiskGenius](https://www.diskgenius.cn/) 或者[傲梅分区助手](https://www.disktool.cn/)等软件将 SEGA_INS 分区的盘符设置为 Q: 以供机台正确读取内容。

::: tip Tips
如果您需要在 Mac 下配置盘符，我们建议您使用 [Parallels Desktop](https://www.parallels.cn/) 来运行 Windows 虚拟机来设置。
:::

然后，将下载的全部文件移动到您的移动设备中。使其文件树类似于下面的结构：
```
  SEGA_INS
  - ACA_00XX.XX.0X_XXXXXXXXXXXX_0.pack
  - SDGX_1.XX.00_**************_0.app
  - SDGX_1.XX.00_**************_X_1.XX.00.app
  - ..........
  - SDGX_ACA.icf
  - MDAUXXXX_X_XX_XX
```

## 安装步骤

先将机台关机。然后打开机台前面板，找到前置的USB接口并插入。如果配置正确，机台将会自行启动升级程序以安装。在完成安装后如果遇到 `Net 认证 坏` 或者 `标题服务器 坏` ，请联系管理员以处理。

## 下一步

配置完成后，您可以：

1. [查看使用教程](../guide/) - 学习如何使用 ZundaLink
2. [配置转发规则](../api/forward) - 自定义游戏行为
