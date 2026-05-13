# 缓存管理

本文档介绍数据缓存相关的 API 接口。

## 备份缓存

创建用户数据备份。

### 接口

```http
POST /cache/backup
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
  "data": {}
}
```

### 响应参数

| 字段    | 类型    | 说明     |
| ------- | ------- | -------- |
| success | boolean | 是否成功 |
| msg     | string  | 消息说明 |
| data    | unknown | 备份数据 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/cache/backup \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 备份 Aqua 数据

创建 Aqua 游戏数据备份。

### 接口

```http
POST /cache/backup-aqua-data
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
  "data": {}
}
```

### 响应参数

| 字段    | 类型    | 说明          |
| ------- | ------- | ------------- |
| success | boolean | 是否成功      |
| msg     | string  | 消息说明      |
| data    | unknown | Aqua 备份数据 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/cache/backup-aqua-data \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 恢复缓存

从备份数据恢复用户数据。

### 接口

```http
POST /cache/restore
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "data": {
    "key1": "value1",
    "key2": "value2"
  }
}
```

### 请求参数

| 字段  | 类型   | 必填 | 说明             |
| ----- | ------ | ---- | ---------------- |
| token | string | 是   | 访问 Token       |
| data  | object | 是   | 要恢复的备份数据 |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "count": 10
}
```

### 响应参数

| 字段    | 类型    | 说明           |
| ------- | ------- | -------------- |
| success | boolean | 是否成功       |
| msg     | string  | 消息说明       |
| count   | number  | 恢复的数据条数 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/cache/restore \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "data": {
      "userData": "..."
    }
  }'
```
