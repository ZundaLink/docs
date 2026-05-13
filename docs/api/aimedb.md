# AimeDB 管理

本文档介绍 AimeDB 相关的 API 接口。

## 注册 AimeDB

为当前 Token 注册 AimeDB 访问码。

### 接口

```http
POST /aimedb/reg
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

| 字段  | 类型   | 必填 | 说明       |
| ----- | ------ | ---- | ---------- |
| token | string | 是   | 访问 Token |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "accessCode": "1234567890123456"
}
```

### 响应参数

| 字段       | 类型    | 说明          |
| ---------- | ------- | ------------- |
| success    | boolean | 是否成功      |
| msg        | string  | 消息说明      |
| accessCode | string  | AimeDB 访问码 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/aimedb/reg \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 注册临时 AimeDB

为当前 Token 注册临时 AimeDB 访问码。

### 接口

```http
POST /aimedb/reg-temp
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

| 字段  | 类型   | 必填 | 说明       |
| ----- | ------ | ---- | ---------- |
| token | string | 是   | 访问 Token |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "accessCode": "1234567890123456"
}
```

### 响应参数

| 字段       | 类型    | 说明               |
| ---------- | ------- | ------------------ |
| success    | boolean | 是否成功           |
| msg        | string  | 消息说明           |
| accessCode | string  | 临时 AimeDB 访问码 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/aimedb/reg-temp \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 通过 Token 注册 AimeDB

使用 SGWCMAID 和客户端 ID 注册 AimeDB。

### 接口

```http
POST /aimedb/reg-token
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "SGWCMAID": "SGWCMAID_VALUE",
  "clientId": "client_id_value",
  "token": "YOUR_TOKEN",
  "cf_token": "cloudflare_turnstile_token"
}
```

### 请求参数

| 字段     | 类型   | 必填 | 说明                          |
| -------- | ------ | ---- | ----------------------------- |
| SGWCMAID | string | 是   | SGWCMAID 值                   |
| clientId | string | 是   | 客户端 ID                     |
| token    | string | 是   | 访问 Token                    |
| cf_token | string | 是   | Cloudflare Turnstile 验证令牌 |

### 响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/aimedb/reg-token \
  -H "Content-Type: application/json" \
  -d '{
    "SGWCMAID": "SGWCMAID_VALUE",
    "clientId": "client_id_value",
    "token": "YOUR_TOKEN",
    "cf_token": "0x4AAAAAA..."
  }'
```
