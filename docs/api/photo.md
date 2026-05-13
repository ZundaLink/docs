# 相片管理

本文档介绍相片相关的 API 接口。

## 获取相片列表

获取用户的游戏相片列表。

### 接口

```http
POST /photo/get
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
  "fileList": ["photo_001.jpg", "photo_002.jpg"]
}
```

### 响应参数

| 字段     | 类型    | 说明           |
| -------- | ------- | -------------- |
| success  | boolean | 是否成功       |
| msg      | string  | 消息说明       |
| fileList | array   | 相片文件名列表 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/photo/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 获取相片文件

获取指定的相片文件。

### 接口

```http
POST /photo/get-file
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "fileName": "photo_001.jpg"
}
```

### 请求参数

| 字段     | 类型   | 必填 | 说明       |
| -------- | ------ | ---- | ---------- |
| token    | string | 是   | 访问 Token |
| fileName | string | 是   | 相片文件名 |

### 响应

正常情况返回图片文件（Blob）：

```
Content-Type: image/jpeg
```

错误情况返回 JSON：

```json
{
  "success": false,
  "msg": "文件不存在"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/photo/get-file \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "fileName": "photo_001.jpg"
  }' \
  --output photo_001.jpg
```

## 删除所有相片

删除用户的所有相片。

### 接口

```http
POST /photo/del
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
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/photo/del \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 删除指定相片

删除指定的相片文件。

### 接口

```http
POST /photo/del-file
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "fileName": "photo_001.jpg"
}
```

### 请求参数

| 字段     | 类型   | 必填 | 说明       |
| -------- | ------ | ---- | ---------- |
| token    | string | 是   | 访问 Token |
| fileName | string | 是   | 相片文件名 |

### 响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/photo/del-file \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "fileName": "photo_001.jpg"
  }'
```
