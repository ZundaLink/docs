# 游玩记录

本文档介绍游玩记录相关的 API 接口。

## 获取游玩记录

获取用户的游戏游玩记录列表。

### 接口

```http
POST /playlog/get
```

### 请求头

```http
Content-Type: application/json
```

### 请求体

```json
{
  "token": "YOUR_TOKEN",
  "start": 0,
  "end": 50
}
```

### 请求参数

| 字段  | 类型   | 必填 | 说明       |
| ----- | ------ | ---- | ---------- |
| token | string | 是   | 访问 Token |
| start | number | 是   | 起始索引   |
| end   | number | 是   | 结束索引   |

### 响应

```json
{
  "success": true,
  "msg": "success",
  "total": 1000,
  "playlogList": [
    {
      "userId": 12345,
      "orderId": 1,
      "playlogId": 10001,
      "version": 1,
      "placeId": 1,
      "placeName": "Game Center",
      "loginDate": 1705312800,
      "playDate": "2024-01-15T10:30:00Z",
      "userPlayDate": "2024-01-15T10:30:00Z",
      "type": 0,
      "musicId": 123,
      "level": 3,
      "trackNo": 1,
      "vsMode": 0,
      "vsUserName": "",
      "vsStatus": 0,
      "vsUserRating": 0,
      "vsUserAchievement": 0,
      "vsUserGradeRank": 0,
      "vsRank": 0,
      "playerNum": 1,
      "playedUserId1": 0,
      "playedUserName1": "",
      "playedMusicLevel1": 0,
      "playedUserId2": 0,
      "playedUserName2": "",
      "playedMusicLevel2": 0,
      "playedUserId3": 0,
      "playedUserName3": "",
      "playedMusicLevel3": 0,
      "characterId1": 1,
      "characterLevel1": 10,
      "characterAwakening1": 0,
      "characterId2": 2,
      "characterLevel2": 10,
      "characterAwakening2": 0,
      "characterId3": 3,
      "characterLevel3": 10,
      "characterAwakening3": 0,
      "characterId4": 4,
      "characterLevel4": 10,
      "characterAwakening4": 0,
      "characterId5": 5,
      "characterLevel5": 10,
      "characterAwakening5": 0,
      "achievement": 1005000,
      "deluxscore": 3000,
      "scoreRank": 1,
      "maxCombo": 614,
      "totalCombo": 614,
      "maxSync": 0,
      "totalSync": 0,
      "tapCriticalPerfect": 200,
      "tapPerfect": 50,
      "tapGreat": 10,
      "tapGood": 2,
      "tapMiss": 0,
      "holdCriticalPerfect": 50,
      "holdPerfect": 10,
      "holdGreat": 2,
      "holdGood": 0,
      "holdMiss": 0,
      "slideCriticalPerfect": 100,
      "slidePerfect": 20,
      "slideGreat": 5,
      "slideGood": 1,
      "slideMiss": 0,
      "touchCriticalPerfect": 0,
      "touchPerfect": 0,
      "touchGreat": 0,
      "touchGood": 0,
      "touchMiss": 0,
      "breakCriticalPerfect": 10,
      "breakPerfect": 2,
      "breakGreat": 1,
      "breakGood": 0,
      "breakMiss": 0,
      "isTap": true,
      "isHold": true,
      "isSlide": true,
      "isTouch": false,
      "isBreak": true,
      "isCriticalDisp": true,
      "isFastLateDisp": true,
      "fastCount": 5,
      "lateCount": 3,
      "isAchieveNewRecord": true,
      "isDeluxscoreNewRecord": false,
      "comboStatus": 3,
      "syncStatus": 0,
      "isClear": true,
      "beforeRating": 12000,
      "afterRating": 12100,
      "beforeGrade": 10,
      "afterGrade": 11,
      "afterGradeRank": 1,
      "beforeDeluxRating": 10000,
      "afterDeluxRating": 10100,
      "isPlayTutorial": false,
      "isEventMode": false,
      "isFreedomMode": false,
      "playMode": 0,
      "isNewFree": false,
      "trialPlayAchievement": 0,
      "extNum1": 0,
      "extNum2": 0,
      "extNum4": 0,
      "extBool1": false,
      "playCount": 1
    }
  ]
}
```

### 响应参数

| 字段        | 类型    | 说明         |
| ----------- | ------- | ------------ |
| success     | boolean | 是否成功     |
| msg         | string  | 消息说明     |
| total       | number  | 总记录数     |
| playlogList | array   | 游玩记录列表 |

#### 游玩记录字段说明

| 字段                  | 类型    | 说明                                                                              |
| --------------------- | ------- | --------------------------------------------------------------------------------- |
| userId                | number  | 用户 ID                                                                           |
| orderId               | number  | 订单 ID                                                                           |
| playlogId             | number  | 游玩记录 ID                                                                       |
| version               | number  | 版本号                                                                            |
| placeId               | number  | 场所 ID                                                                           |
| placeName             | string  | 场所名称                                                                          |
| loginDate             | number  | 登录日期（Unix 时间戳）                                                           |
| playDate              | string  | 游玩日期                                                                          |
| userPlayDate          | string  | 用户游玩日期                                                                      |
| type                  | number  | 类型                                                                              |
| musicId               | number  | 音乐 ID                                                                           |
| level                 | number  | 难度等级（0: BASIC, 1: ADVANCED, 2: EXPERT, 3: MASTER, 4: Re:MASTER, 10: 宴会场） |
| trackNo               | number  | 曲目编号                                                                          |
| vsMode                | number  | 对战模式                                                                          |
| vsUserName            | string  | 对战用户名                                                                        |
| vsStatus              | number  | 对战状态                                                                          |
| vsUserRating          | number  | 对战用户 Rating                                                                   |
| vsUserAchievement     | number  | 对战用户达成率                                                                    |
| vsUserGradeRank       | number  | 对战用户等级排名                                                                  |
| vsRank                | number  | 对战排名                                                                          |
| playerNum             | number  | 玩家数量                                                                          |
| playedUserId1-3       | number  | 其他玩家 ID                                                                       |
| playedUserName1-3     | string  | 其他玩家名称                                                                      |
| playedMusicLevel1-3   | number  | 其他玩家音乐等级                                                                  |
| characterId1-5        | number  | 旅行伙伴 ID                                                                       |
| characterLevel1-5     | number  | 旅行伙伴等级                                                                      |
| characterAwakening1-5 | number  | 旅行伙伴觉醒等级                                                                  |
| achievement           | number  | 达成率（乘以 10000 的整数）                                                       |
| deluxscore            | number  | DX 分数                                                                           |
| scoreRank             | number  | 分数排名                                                                          |
| maxCombo              | number  | 最大连击                                                                          |
| totalCombo            | number  | 总连击                                                                            |
| maxSync               | number  | 最大同步数                                                                        |
| totalSync             | number  | 总同步数                                                                          |
| tapCriticalPerfect    | number  | TAP Critical Perfect 数量                                                         |
| tapPerfect            | number  | TAP Perfect 数量                                                                  |
| tapGreat              | number  | TAP Great 数量                                                                    |
| tapGood               | number  | TAP Good 数量                                                                     |
| tapMiss               | number  | TAP Miss 数量                                                                     |
| holdCriticalPerfect   | number  | HOLD Critical Perfect 数量                                                        |
| holdPerfect           | number  | HOLD Perfect 数量                                                                 |
| holdGreat             | number  | HOLD Great 数量                                                                   |
| holdGood              | number  | HOLD Good 数量                                                                    |
| holdMiss              | number  | HOLD Miss 数量                                                                    |
| slideCriticalPerfect  | number  | SLIDE Critical Perfect 数量                                                       |
| slidePerfect          | number  | SLIDE Perfect 数量                                                                |
| slideGreat            | number  | SLIDE Great 数量                                                                  |
| slideGood             | number  | SLIDE Good 数量                                                                   |
| slideMiss             | number  | SLIDE Miss 数量                                                                   |
| touchCriticalPerfect  | number  | TOUCH Critical Perfect 数量                                                       |
| touchPerfect          | number  | TOUCH Perfect 数量                                                                |
| touchGreat            | number  | TOUCH Great 数量                                                                  |
| touchGood             | number  | TOUCH Good 数量                                                                   |
| touchMiss             | number  | TOUCH Miss 数量                                                                   |
| breakCriticalPerfect  | number  | BREAK Critical Perfect 数量                                                       |
| breakPerfect          | number  | BREAK Perfect 数量                                                                |
| breakGreat            | number  | BREAK Great 数量                                                                  |
| breakGood             | number  | BREAK Good 数量                                                                   |
| breakMiss             | number  | BREAK Miss 数量                                                                   |
| isTap                 | boolean | 是否包含 TAP                                                                      |
| isHold                | boolean | 是否包含 HOLD                                                                     |
| isSlide               | boolean | 是否包含 SLIDE                                                                    |
| isTouch               | boolean | 是否包含 TOUCH                                                                    |
| isBreak               | boolean | 是否包含 BREAK                                                                    |
| isCriticalDisp        | boolean | 是否显示 Critical                                                                 |
| isFastLateDisp        | boolean | 是否显示 Fast/Late                                                                |
| fastCount             | number  | Fast 数量                                                                         |
| lateCount             | number  | Late 数量                                                                         |
| isAchieveNewRecord    | boolean | 是否达成新纪录                                                                    |
| isDeluxscoreNewRecord | boolean | 是否 DX 分数新纪录                                                                |
| comboStatus           | number  | Combo 状态（0: 无, 1: FC, 2: FC+, 3: AP, 4: AP+）                                 |
| syncStatus            | number  | 同步状态（0: 无, 1: FS, 2: FS+, 3: FDX, 4: FDX+, 5: SYNC PLAY）                   |
| isClear               | boolean | 是否通关                                                                          |
| beforeRating          | number  | 游玩前 Rating                                                                     |
| afterRating           | number  | 游玩后 Rating                                                                     |
| beforeGrade           | number  | 游玩前 Grade                                                                      |
| afterGrade            | number  | 游玩后 Grade                                                                      |
| afterGradeRank        | number  | 游玩后 Grade Rank                                                                 |
| beforeDeluxRating     | number  | 游玩前 DX Rating                                                                  |
| afterDeluxRating      | number  | 游玩后 DX Rating                                                                  |
| isPlayTutorial        | boolean | 是否游玩教程                                                                      |
| isEventMode           | boolean | 是否活动模式                                                                      |
| isFreedomMode         | boolean | 是否自由模式                                                                      |
| playMode              | number  | 游玩模式                                                                          |
| isNewFree             | boolean | 是否新自由模式                                                                    |
| trialPlayAchievement  | number  | 试玩达成率                                                                        |
| extNum1               | number  | 扩展数字字段 1                                                                    |
| extNum2               | number  | 扩展数字字段 2                                                                    |
| extNum4               | number  | 扩展数字字段 4                                                                    |
| extBool1              | boolean | 扩展布尔字段 1                                                                    |
| playCount             | number  | 游玩次数                                                                          |

### 示例

```bash
curl -X POST https://api.xn--igrr70arr3c.vip/zundalink/api/v0/playlog/get \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN",
    "start": 0,
    "end": 50
  }'
```
