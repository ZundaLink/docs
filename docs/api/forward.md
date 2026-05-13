# 转发调料

本文档介绍转发规则（烘焙配方）相关的 API 接口。

## 获取转发规则

获取当前用户的转发规则配置。

### 接口

```http
POST /forward/get
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "clientId": "client_id",
  "clientPwd": "client_password"
}
```

### 请求参数

| 字段      | 类型   | 必填 | 说明                                  |
| --------- | ------ | ---- | ------------------------------------- |
| token     | string | 是   | 访问 Token                            |
| clientId  | string | 否   | 工坊 ID（仅在编辑工坊行为调料时填写） |
| clientPwd | string | 否   | 工坊密钥（可选）                      |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "forwardData": {
    "autoUpload": {
      "enable": true,
      "value": "true"
    },
    "hideProfile": {
      "enable": false,
      "value": "false"
    }
  }
}
```

### 响应参数

| 字段        | 类型    | 说明                                                      |
| ----------- | ------- | --------------------------------------------------------- |
| success     | boolean | 是否成功                                                  |
| msg         | string  | 消息说明                                                  |
| forwardData | object  | 转发规则数据，键为规则名，值为包含 enable 和 value 的对象 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/forward/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```

## 添加/更新转发规则

添加或更新转发规则配置。

### 接口

```http
POST /forward/add
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "rule": "autoUpload",
  "enable": true,
  "value": "true",
  "clientId": "client_id",
  "clientPwd": "client_password"
}
```

### 请求参数

| 字段      | 类型    | 必填 | 说明                                  |
| --------- | ------- | ---- | ------------------------------------- |
| token     | string  | 是   | 访问 Token                            |
| rule      | string  | 是   | 规则名称                              |
| enable    | boolean | 是   | 是否启用                              |
| value     | string  | 是   | 规则值                                |
| clientId  | string  | 否   | 工坊 ID（仅在编辑工坊行为调料时填写） |
| clientPwd | string  | 否   | 工坊密钥（可选）                      |

### 响应

```json
{
  "success": true,
  "msg": "success"
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/forward/add \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "rule": "autoUpload",
    "enable": true,
    "value": "true"
  }'
```

## 删除转发规则

删除转发规则配置。

### 接口

```http
POST /forward/del
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "clientId": "client_id",
  "clientPwd": "client_password"
}
```

### 请求参数

| 字段      | 类型   | 必填 | 说明                                  |
| --------- | ------ | ---- | ------------------------------------- |
| token     | string | 是   | 访问 Token                            |
| clientId  | string | 否   | 工坊 ID（仅在编辑工坊行为调料时填写） |
| clientPwd | string | 否   | 工坊密钥（可选）                      |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "forwardData": {}
}
```

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/forward/del \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```
