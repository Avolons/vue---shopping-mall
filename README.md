# zujieh5
### 租借科技H5 

```
.
├── App.vue 总vue
├── assets  静态资源文件夹 
│   ├── css css文件夹
│   │   └── reset.css 初始化css样式重置文件
│   └── img
│       ├── common 通用图片文件夹
│       ├── goods 商品图片文件夹
│       └── index 主页面图片文件夹
├── components 组件库
│   ├── address 地址组件
│   │   ├── addressList.vue 地址列表组件
│   │   ├── addresslist.json 地址假数据
│   │   └── editAddress.vue 编辑地址组件
│   ├── common 登录相关组件
│   │   ├── agreement.vue  注册协议组件
│   │   ├── download.vue 跳转到下载页组件
│   │   ├── forget.vue 忘记密码组件
│   │   ├── login.vue 登录组件
│   │   ├── logincode.vue 验证码组件
│   │   └── register.vue 注册组件
│   ├── goods 商品组件
│   │   ├── data.json 商品假数据
│   │   ├── goods.json 商品假数据
│   │   ├── goodsinfo.scss 商品详情css样式表
│   │   └── goodsinfo.vue 商品详情组件
│   ├── help 帮助组件
│   │   ├── logistics.vue 商家相关协议文件
│   │   ├── service.vue 商家相关协议文件
│   │   └── transaction.vue 商家相关协议文件
│   ├── index 首页组件
│   │   ├── car.vue 我的购物车组件
│   │   ├── index.vue 首页组件父组件
│   │   ├── main.vue  首页组件
│   │   ├── mine.vue 个人中心组件
│   │   └── order.vue 订单组件
│   ├── list 列表组件
│   │   ├── goodsList.vue 商品列表组件
│   │   ├── list.vue 商品分类组件
│   │   └── listCompent.vue 列表模块组件
│   ├── mine 个人中心组件列表
│   │   ├── about.vue 关于
│   │   ├── authentication.vue  实名认证
│   │   ├── collection.vue  我的收藏
│   │   ├── help.vue 帮助
│   │   ├── opinion.vue 提交建议
│   │   └── setting.vue 设置
│   ├── order 订单组件
│   │   ├── map.json 假数据
│   │   ├── order.json 假数据
│   │   ├── orderAction.vue 订单列表点击详情组件
│   │   ├── orderInfo.vue 订单详情组件
│   │   ├── orderLogistics.vue 订单确认组件
│   │   ├── orderSuccess.vue 下单成功组件
│   │   ├── ordermap.json 假数据
│   │   └── sinceCompent.vue 自提点模块
│   ├── search 搜索模块
│   │   └── search.vue 搜索组件
│   ├── shop 店铺
│   │   ├── shop.vue 店铺商品列表
│   │   └── shopInfo.vue 店铺详情
│   └── user 用户 
├── main.js 文件主入口
├── router 路由
│   └── index.js 路由控制器
├── services api服务
│   ├── api.js  接口汇聚
│   ├── getQuery.js 参数解析
│   ├── index.js 接口抛出
│   ├── loginApi.js 登录相关接口
│   ├── mainApi.js 主页面相关接口
│   ├── orderApi.js 订单相关api
│   ├── personApi.js 个人中心相关api
│   └── read.txt
└── store 状态管理
    └── index.js 全局状态管理器
```
