# 工坊查卡

本文档介绍玩家队列统计相关的 API 接口。

## 获取玩家队列

获取指定工坊的玩家队列统计信息。

### 接口

```http
POST /player/queue/get
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "clientId": "client_id"
}
```

### 请求参数

| 字段     | 类型   | 必填 | 说明       |
| -------- | ------ | ---- | ---------- |
| token    | string | 是   | 访问 Token |
| clientId | string | 是   | 工坊 ID    |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "playerQueueData": {
    "clientId": "client_id",
    "statistics": {
      "currentOnlineCount": 5,
      "isOnline": true,
      "last30MinutesCount": 12,
      "last1HourCount": 20,
      "last2HoursCount": 35,
      "last3HoursCount": 48,
      "last6HoursCount": 65,
      "last12HoursCount": 80,
      "last24HoursCount": 120,
      "totalPlayRecords": 5000,
      "totalSessionRecords": 4500
    },
    "currentOnlinePlayers": [
      {
        "userName": "Player1",
        "loginTime": "2024-01-15T10:00:00Z",
        "playDuration": 1800,
        "playDurationFormatted": "30m"
      }
    ],
    "timeRangeStatistics": [
      {
        "timeRange": "last1Hour",
        "duration": 3600,
        "playerCount": 20,
        "uniquePlayerCount": 15
      }
    ],
    "playerActivityAnalysis": {
      "durationGroups": [
        {
          "groupName": "0-30分钟",
          "minDuration": 0,
          "maxDuration": 1800,
          "playerCount": 50,
          "percentage": 50
        }
      ],
      "averagePlayDuration": 3600,
      "averagePlayDurationFormatted": "1h",
      "maxPlayDuration": 7200,
      "maxPlayDurationFormatted": "2h",
      "minPlayDuration": 300,
      "minPlayDurationFormatted": "5m"
    },
    "recentPlayRecords": [
      {
        "userName": "Player1",
        "loginTime": "2024-01-15T10:00:00Z",
        "logoutTime": "2024-01-15T10:30:00Z",
        "duration": 1800,
        "durationFormatted": "30m"
      }
    ],
    "peakHoursAnalysis": {
      "hourlyStatistics": [
        {
          "hour": 14,
          "playerCount": 25,
          "timeRange": "14:00-15:00"
        }
      ],
      "peakHour": 14,
      "peakHourCount": 25,
      "peakTimeRange": "14:00-15:00"
    },
    "sessionStatistics": {
      "last30MinutesSessionCount": 3,
      "last1HourSessionCount": 8,
      "last2HoursSessionCount": 15,
      "last3HoursSessionCount": 22,
      "last6HoursSessionCount": 35,
      "last12HoursSessionCount": 50,
      "last24HoursSessionCount": 80,
      "last7DaysSessionCount": 500,
      "averageSessionsPerDay": 71,
      "averageSessionsPerUser": 5,
      "totalSessions": 4500
    },
    "sessionDurationAnalysis": {
      "durationGroups": [
        {
          "groupName": "0-30分钟",
          "minDuration": 0,
          "maxDuration": 1800,
          "sessionCount": 100,
          "percentage": 40
        }
      ],
      "averageSessionDuration": 2400,
      "averageSessionDurationFormatted": "40m",
      "maxSessionDuration": 10800,
      "maxSessionDurationFormatted": "3h",
      "minSessionDuration": 60,
      "minSessionDurationFormatted": "1m",
      "medianSessionDuration": 1800,
      "medianSessionDurationFormatted": "30m"
    },
    "playerSessionFrequencyAnalysis": {
      "topActiveUsers": [
        {
          "userName": "Player1",
          "sessionCount": 100,
          "totalDuration": 360000,
          "totalDurationFormatted": "100h",
          "averageDuration": 3600,
          "averageDurationFormatted": "1h",
          "firstLoginTime": "2024-01-01T00:00:00Z",
          "lastLoginTime": "2024-01-15T10:00:00Z"
        }
      ],
      "frequencyGroups": [
        {
          "groupName": "高频用户",
          "minSessions": 50,
          "maxSessions": 9999,
          "playerCount": 10,
          "percentage": 5
        }
      ],
      "returningPlayersCount": 80,
      "returningPlayersRate": 0.8
    },
    "sessionHourlyDistribution": {
      "hourlySessionStats": [
        {
          "hour": 14,
          "sessionCount": 30,
          "timeRange": "14:00-15:00"
        }
      ],
      "peakSessionHour": 14,
      "peakSessionHourCount": 30,
      "peakSessionTimeRange": "14:00-15:00"
    },
    "generatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### 响应参数

| 字段            | 类型    | 说明             |
| --------------- | ------- | ---------------- |
| success         | boolean | 是否成功         |
| msg             | string  | 消息说明         |
| playerQueueData | object  | 玩家队列统计数据 |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/player/queue/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "clientId": "client_id"
  }'
```
