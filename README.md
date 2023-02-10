# @vkcyan/show-loading

## 介绍

**通过函数的方式，唤起loading框，使用方法与微信小程序的API`wx.showLoading`类似。**

**0依赖，10kb以内的loading工具库**



## 基本用法

### 安装

```
npm i @vkcyan/show-loading
```

### 使用示例

```ts
import { showLoading } from '@vkcyan/show-loading'

let loading = showLoading({
  title: '正在加载中...',
})

// 停止
loading.close()
```

## API

| 属性  | 类型    | 默认值        | 说明                |
| ----- | ------- | ------------- | ------------------- |
| title | string  | 正在加载中... | loading内的提示文字 |
| mask  | boolean | true          | toast是否存在遮罩层 |



## function

| 方法  | 返回值 |      | 说明                    |
| ----- | ------ | ---- | ----------------------- |
| close | void   |      | 手动关闭进行中的loading |

