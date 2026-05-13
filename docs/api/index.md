# API 概述

本文档介绍 ZundaLink API 的基本信息和使用方法。

## 简介

ZundaLink 提供了一套完整的 RESTful API，允许开发者程序化地访问和管理 ZundaLink 的各项功能。

## 基础信息

### API 地址

```
https://api.xn--igrr70arr3c.vip/zundalink/api/v0
```

### 请求格式

所有请求和响应均使用 JSON 格式：

```http
Content-Type: application/json
```

### 字符编码

所有接口使用 UTF-8 编码。

## 认证方式

### Token 认证

大多数 API 需要在请求体中携带 `token` 字段：

```json
{
  "token": "YOUR_TOKEN"
}
```

### 获取 Token

通过登录接口获取 Token：

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/token/get \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

响应示例：

```json
{
  "success": true,
  "msg": "success",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "isMachine": false
}
```

## 响应格式

### 成功响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 错误响应

```json
{
  "success": false,
  "msg": "错误描述"
}
```

## 通用响应字段

| 字段    | 类型    | 说明         |
| ------- | ------- | ------------ |
| success | boolean | 请求是否成功 |
| msg     | string  | 消息说明     |

## 接口列表

| 分类                       | 说明                   |
| -------------------------- | ---------------------- |
| [认证相关](./auth)         | 用户注册、密码修改等   |
| [Token 管理](./token)      | 获取、验证、登出 Token |
| [AimeDB 管理](./aimedb)    | AimeDB 注册和管理      |
| [转发调料](./forward)      | 转发规则配置           |
| [相片管理](./photo)        | 游戏相片管理           |
| [缓存管理](./cache)        | 数据备份和恢复         |
| [上传缓存](./upload-cache) | 上传缓存管理           |
| [使用统计](./usage)        | 系统使用统计           |
| [工坊控制](./m2lctl)       | 工坊设备控制           |
| [工坊查卡](./player-queue) | 玩家队列统计           |
| [健康检查](./health)       | 设备健康检查           |
| [地区统计](./region)       | 地区分布统计           |
| [游玩记录](./playlog)      | 游戏游玩记录           |
| [M2L ID 管理](./m2l-id)    | M2L ID 绑定管理        |
