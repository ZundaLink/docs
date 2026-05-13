# 使用统计

本文档介绍使用统计相关的 API 接口。

## 获取使用统计

获取系统的使用统计数据。

### 接口

```http
POST /usage/get
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
  "usageData": {
    "playerNum": 1000,
    "chimeBindPlayerNum": 800,
    "machineNum": 50,
    "specialMachineNum": 5,
    "forwardRuleNum": 200,
    "totalRequestNum": 500000,
    "onlineMachineNum": 30,
    "onlinePlayerNum": 150,
    "pullDataNum": 10000,
    "pullDataAvgTime": 1500,
    "pullDataTolTime": 500
  }
}
```

### 响应参数

| 字段      | 类型    | 说明         |
| --------- | ------- | ------------ |
| success   | boolean | 是否成功     |
| msg       | string  | 消息说明     |
| usageData | object  | 使用统计数据 |

#### usageData 字段说明

| 字段               | 类型   | 说明                         |
| ------------------ | ------ | ---------------------------- |
| playerNum          | number | 总玩家数                     |
| chimeBindPlayerNum | number | 绑定 Chime 的玩家数          |
| machineNum         | number | 总工坊数                     |
| specialMachineNum  | number | 特殊工坊数                   |
| forwardRuleNum     | number | 转发规则数                   |
| totalRequestNum    | number | 总请求数                     |
| onlineMachineNum   | number | 在线工坊数                   |
| onlinePlayerNum    | number | 在线玩家数                   |
| pullDataNum        | number | 数据拉取统计次数             |
| pullDataAvgTime    | number | 当前平均登录时间（毫秒）     |
| pullDataTolTime    | number | 当前登录时间的标准差（毫秒） |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/usage/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```
