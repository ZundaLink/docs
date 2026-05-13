# M2L ID 管理

本文档介绍 M2L ID 管理相关的 API 接口。

## 获取 M2L ID

获取当前 Token 绑定的 M2L ID 信息。

### 接口

```http
POST /m2l-id/get
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
  "m2lId": "m2l_id_value",
  "userId": "user_id_value"
}
```

### 响应参数

| 字段    | 类型    | 说明          |
| ------- | ------- | ------------- |
| success | boolean | 是否成功      |
| msg     | string  | 消息说明      |
| m2lId   | string  | M2L ID        |
| userId  | string  | 绑定的用户 ID |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/m2l-id/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 绑定用户 ID

将 M2L ID 绑定到指定用户 ID。

### 接口

```http
POST /m2l-id/bind/userid
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "userId": 12345,
  "cf_token": "cloudflare_turnstile_token"
}
```

### 请求参数

| 字段     | 类型   | 必填 | 说明                          |
| -------- | ------ | ---- | ----------------------------- |
| token    | string | 是   | 访问 Token                    |
| userId   | number | 是   | 要绑定的用户 ID               |
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
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/m2l-id/bind/userid \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "userId": 12345,
    "cf_token": "0x4AAAAAA..."
  }'
```

## 绑定二维码

将 M2L ID 绑定到二维码。

### 接口

```http
POST /m2l-id/bind/qrcode
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "qrcode": "SGWCMAID0001234567890"
}
```

### 请求参数

| 字段   | 类型   | 必填 | 说明       |
| ------ | ------ | ---- | ---------- |
| token  | string | 是   | 访问 Token |
| qrcode | string | 是   | 二维码数据 |

### 响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/m2l-id/bind/qrcode \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "qrcode": "SGWCMAID0001234567890"
  }'
```


