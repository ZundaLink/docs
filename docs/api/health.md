# 健康检查

本文档介绍系统健康检查相关的 API 接口。

## 获取健康检查数据

获取工坊设备的健康检查数据。

### 接口

```http
POST /m2lctl/health/get
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
  "code": 200,
  "message": "success",
  "data": {
    "keyChip": "key_chip_value",
    "online": true,
    "data": {
      "timestamp": "2024-01-15T10:30:00Z",
      "key_chip": "key_chip_value",
      "private_key": "private_key_value",
      "http_checks": [
        {
          "name": "api_check",
          "success": true,
          "ping_ms": 25,
          "error_msg": ""
        }
      ],
      "tcp_checks": [
        {
          "name": "tcp_check",
          "success": true,
          "ping_ms": 15,
          "error_msg": ""
        }
      ],
      "machine_health": {
        "cpu_usage": "30%",
        "memory_usage": "45%",
        "ram_usage": "40%",
        "local_ip": "192.168.1.100",
        "gateway_ip": "192.168.1.1",
        "public_ip": "1.2.3.4",
        "system_uptime": "10d 5h 30m",
        "network_status": "connected"
      },
      "sideload": {
        "branch": "main"
      },
      "order_health": {
        "total_orders": 100,
        "completed_orders": 80,
        "pending_orders": 20,
        "current_order": "order_001",
        "current_item": "item_001",
        "current_status": "downloading",
        "download_progress": 75,
        "order_details": [
          {
            "name": "item_001",
            "status": "downloading",
            "progress": 75,
            "rf_state": 1,
            "rf_state_desc": "下载中"
          }
        ]
      },
      "storage": {
        "disks": [
          {
            "drive_letter": "C:",
            "total_gb": 500,
            "free_gb": 200,
            "read_speed": 100,
            "write_speed": 80
          }
        ]
      },
      "network_speed": {
        "download_speed": 50,
        "upload_speed": 20
      },
      "install_path_stats": [
        {
          "path": "/game/data",
          "count": "1500"
        }
      ]
    },
    "reported_at": "2024-01-15T10:30:00Z",
    "message": "success"
  }
}
```

### 响应参数

| 字段    | 类型   | 说明         |
| ------- | ------ | ------------ |
| code    | number | HTTP 状态码  |
| message | string | 消息说明     |
| data    | object | 健康检查数据 |

#### data 字段说明

| 字段        | 类型    | 说明         |
| ----------- | ------- | ------------ |
| keyChip     | string  | KeyChip 标识 |
| online      | boolean | 设备是否在线 |
| data        | object  | 详细健康数据 |
| reported_at | string  | 报告时间     |
| message     | string  | 状态消息     |

#### 详细健康数据字段

| 字段               | 类型   | 说明          |
| ------------------ | ------ | ------------- |
| timestamp          | string | 时间戳        |
| key_chip           | string | KeyChip 标识  |
| private_key        | string | 私钥          |
| http_checks        | array  | HTTP 检查结果 |
| tcp_checks         | array  | TCP 检查结果  |
| machine_health     | object | 机器健康信息  |
| sideload           | object | Sideload 信息 |
| order_health       | object | 订单健康信息  |
| storage            | object | 存储信息      |
| network_speed      | object | 网络速度      |
| install_path_stats | array  | 安装路径统计  |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/m2lctl/health/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN"
  }'
```
