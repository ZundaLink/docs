# 上传缓存

本文档介绍上传缓存相关的 API 接口。

## 获取上传缓存列表

获取当前用户的上传缓存列表。

### 接口

```http
POST /upload-cache/get
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
  "data": ["cache_item_1", "cache_item_2"]
}
```

### 响应参数

| 字段    | 类型    | 说明         |
| ------- | ------- | ------------ |
| success | boolean | 是否成功     |
| msg     | string  | 消息说明     |
| data    | array   | 缓存条目列表 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/upload-cache/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 上传缓存

上传数据到缓存。

### 接口

```http
POST /upload-cache/upload
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "indexName": "upload_index",
  "SGWCMAID": "SGWCMAID_VALUE"
}
```

### 请求参数

| 字段      | 类型   | 必填 | 说明        |
| --------- | ------ | ---- | ----------- |
| token     | string | 是   | 访问 Token  |
| indexName | string | 是   | 索引名称    |
| SGWCMAID  | string | 是   | SGWCMAID 值 |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "data": "uploaded_data",
  "music": "music_data"
}
```

### 响应参数

| 字段    | 类型    | 说明       |
| ------- | ------- | ---------- |
| success | boolean | 是否成功   |
| msg     | string  | 消息说明   |
| data    | string  | 上传的数据 |
| music   | string  | 音乐数据   |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/upload-cache/upload \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "indexName": "my_upload",
    "SGWCMAID": "SGWCMAID_VALUE"
  }'
```

## 删除上传缓存

删除指定的上传缓存。

### 接口

```http
POST /upload-cache/del
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "indexName": "upload_index"
}
```

### 请求参数

| 字段      | 类型   | 必填 | 说明             |
| --------- | ------ | ---- | ---------------- |
| token     | string | 是   | 访问 Token       |
| indexName | string | 是   | 要删除的索引名称 |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "data": []
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/upload-cache/del \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "indexName": "my_upload"
  }'
```

## 获取上传缓存文件

获取指定的上传缓存文件。

### 接口

```http
POST /upload-cache/get-file
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "indexName": "upload_index"
}
```

### 请求参数

| 字段      | 类型   | 必填 | 说明       |
| --------- | ------ | ---- | ---------- |
| token     | string | 是   | 访问 Token |
| indexName | string | 是   | 索引名称   |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "data": {}
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/upload-cache/get-file \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "indexName": "my_upload"
  }'
```
