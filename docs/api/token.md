# Token 管理

本文档介绍 Token 相关的 API 接口。

## 获取 Token

通过用户名密码或二维码获取访问 Token。

### 接口

```http
POST /token/get
```

### 请求头

```http
Content-Type: application/json
```

### 请求参数

#### 方式一：用户名密码

```json
{
  "username": "string",
  "password": "string"
}
```

| 字段     | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| username | string | 是   | 用户名 |
| password | string | 是   | 密码   |

#### 方式二：二维码

```json
{
  "qrcode": "string"
}
```

| 字段   | 类型   | 必填 | 说明       |
| ------ | ------ | ---- | ---------- |
| qrcode | string | 是   | 二维码数据 |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "isMachine": false
}
```

| 字段      | 类型    | 说明           |
| --------- | ------- | -------------- |
| success   | boolean | 是否成功       |
| msg       | string  | 消息说明       |
| token     | string  | 访问 Token     |
| isMachine | boolean | 是否为工坊账号 |

### 示例

```bash
# 用户名密码方式
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/token/get \
  -H "Content-Type: application/json" \
  -d '{
    "username": "myuser",
    "password": "mypassword"
  }'

# 二维码方式
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/token/get \
  -H "Content-Type: application/json" \
  -d '{
    "qrcode": "SGWCMAID0001234567890"
  }'
```

## 验证 Token

验证 Token 是否有效。

### 接口

```http
POST /token/validate
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN"
}
```

### 请求参数

| 字段  | 类型   | 必填 | 说明           |
| ----- | ------ | ---- | -------------- |
| token | string | 是   | 要验证的 Token |

### 响应

```json
{
  "valid": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_at": "2024-02-15T10:30:00Z",
  "expired": false
}
```

### 响应参数

| 字段       | 类型    | 说明                         |
| ---------- | ------- | ---------------------------- |
| valid      | boolean | Token 是否有效               |
| token      | string  | Token 字符串                 |
| expires_at | string  | 过期时间（RFC3339 UTC 格式） |
| expired    | boolean | 是否已过期                   |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/token/validate \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## Token 登出

使当前 Token 失效。

### 接口

```http
POST /token/logout
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN"
}
```

### 请求参数

| 字段  | 类型   | 必填 | 说明           |
| ----- | ------ | ---- | -------------- |
| token | string | 是   | 要登出的 Token |

### 响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/token/logout \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 相关接口

- [认证相关](./auth) - 用户注册和密码修改
