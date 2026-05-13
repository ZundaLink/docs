# 认证相关

本文档介绍认证相关的 API 接口。

## 用户注册

注册新用户账号。

### 接口

```http
POST /token/reg
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "username": "newuser",
  "password": "securepassword",
  "cf_token": "cloudflare_turnstile_token"
}
```

### 请求参数

| 字段     | 类型   | 必填 | 说明                          |
| -------- | ------ | ---- | ----------------------------- |
| username | string | 是   | 用户名                        |
| password | string | 是   | 密码                          |
| cf_token | string | 是   | Cloudflare Turnstile 验证令牌 |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### 响应参数

| 字段    | 类型    | 说明       |
| ------- | ------- | ---------- |
| success | boolean | 是否成功   |
| msg     | string  | 消息说明   |
| token   | string  | 访问 Token |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/token/reg \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newuser",
    "password": "securepassword",
    "cf_token": "0x4AAAAAA..."
  }'
```

## 修改密码

修改用户密码（Token 绑定新密码）。

### 接口

```http
POST /token/bind
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "current_token",
  "username": "myuser",
  "old_password": "oldpassword",
  "new_password": "newpassword"
}
```

### 请求参数

| 字段         | 类型   | 必填 | 说明           |
| ------------ | ------ | ---- | -------------- |
| token        | string | 是   | 当前 Token     |
| username     | string | 是   | 用户名         |
| old_password | string | 否   | 旧密码（可选） |
| new_password | string | 是   | 新密码         |

### 响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/token/bind \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "username": "myuser",
    "old_password": "oldpassword",
    "new_password": "newpassword"
  }'
```

## 相关接口

- [Token 管理](./token) - 获取和管理 Token
