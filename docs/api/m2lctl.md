# 工坊控制

本文档介绍工坊设备远程控制相关的 API 接口。

## 发送控制命令

向工坊设备发送控制命令。

### 接口

```http
POST /m2lctl/add
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "pwd": "device_password",
  "data": "command_data"
}
```

### 请求参数

| 字段  | 类型   | 必填 | 说明               |
| ----- | ------ | ---- | ------------------ |
| token | string | 是   | 访问 Token         |
| pwd   | string | 是   | 设备密码（彩蛋码） |
| data  | string | 是   | 命令数据           |

### 响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/m2lctl/add \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "pwd": "device_password",
    "data": "reboot"
  }'
```

## 获取命令返回结果

获取控制命令的执行返回结果。

### 接口

```http
POST /m2lctl/ret/get
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
  "returnData": "command_result"
}
```

### 响应参数

| 字段       | 类型    | 说明         |
| ---------- | ------- | ------------ |
| success    | boolean | 是否成功     |
| msg        | string  | 消息说明     |
| returnData | string  | 命令返回数据 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/m2lctl/ret/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 获取 IPC 配置

获取工坊设备的 IPC 配置。

### 接口

```http
POST /m2lctl/ipc/config/get
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
  "configs": {
    "config1": "value1",
    "config2": "value2"
  }
}
```

### 响应参数

| 字段    | 类型    | 说明           |
| ------- | ------- | -------------- |
| success | boolean | 是否成功       |
| msg     | string  | 消息说明       |
| configs | object  | IPC 配置键值对 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/m2lctl/ipc/config/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```
