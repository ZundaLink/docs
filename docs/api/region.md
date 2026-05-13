# 地区统计

本文档介绍地区分布统计相关的 API 接口。

## 获取地区统计

获取玩家的地区分布统计。

### 接口

```http
GET /region/get
```

### 请求头

```http
Content-Type: application/json
```

### 请求参数

无

### 响应

```json
{
  "success": true,
  "msg": "success",
  "data": [
    {
      "regionName": "北京",
      "count": 45
    },
    {
      "regionName": "上海",
      "count": 38
    },
    {
      "regionName": "广州",
      "count": 25
    }
  ]
}
```

### 响应参数

| 字段    | 类型    | 说明         |
| ------- | ------- | ------------ |
| success | boolean | 是否成功     |
| msg     | string  | 消息说明     |
| data    | array   | 地区统计数据 |

#### data 字段说明

| 字段       | 类型   | 说明           |
| ---------- | ------ | -------------- |
| regionName | string | 地区名称       |
| count      | number | 该地区玩家数量 |

### 示例

```bash
curl -X GET https://api.xn--igrr70arr3c.vip/zundalink/api/v0/region/get \
  -H "Content-Type: application/json"
```
