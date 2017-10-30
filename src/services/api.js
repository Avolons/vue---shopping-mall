"use strict";

import Vue from 'vue';

var sourceStr = '/?source=4&version=1.1.9';

/* var API_ROOT = "https://api.zujiekeji.cn/index/"; */
var API_ROOT = "https://isapi.zujiekeji.cn/index/";
/* var API_ROOT = "http://106.14.135.243:8082/index/" */; 
/* 个人中心相关api */

/**
 * 登录注册通用接口部分
 */

export const login = {
  /**
   * 密码登录接口
   * @param {any} data 
   * user_phone
   * user_password 
   * @returns 
   */
  pwdLogin(data) {
    return Vue.http.post(API_ROOT + 'user/app_login' + sourceStr, data);
  },
  /**
   * 注册接口
   * @param {any} data 
   * user_phone
   * code
   * user_password
   * @returns 
   */
  register(data){
    return Vue.http.post(API_ROOT + 'user/app_register' + sourceStr, data);
  },
  /**
   * 忘记密码接口
   * @param {any} data 
   * user_phone
   * code
   * user_password
   * @returns 
   */
  updatePwd(data){
    return Vue.http.post(API_ROOT + 'user/update_password' + sourceStr,data);
  },
  /**
   * 发送验证码接口
   * @param {any} data 
   * user_phone
   * type //短信类型 1 register:注册短信 2 back：密码找回短信 3: logo:短信登录 4：replace 找回密码
   * @returns 
   */
  sendCode(data){
    return Vue.http.post(API_ROOT + 'user/send_phone_code' + sourceStr,data);
  },
  /**
   * 验证码登录接口
   * @param {any} data 
   * user_phone
   * code
   * @returns 
   */
  codeLogin(data){
    return Vue.http.post(API_ROOT + 'user/code_login' + sourceStr,data);
  }
}


/**
 * 新版本首页接口
 */
export const newMain = {
  /**
   * 获取频道
   * @param {any} data 
   * @returns 
   */
  channelList(data) {
    return Vue.http.get(API_ROOT + 'index/channelList' + sourceStr,{params:data});
  },
  /**
   * 获取标签
   * @param {any} data 
   * @returns 
   */
  iconList(data) {
    return Vue.http.get(API_ROOT + 'index/iconList' + sourceStr,{params:data});
  },
  /**
   * 获取标签详情
   * @param {any} data 
   * @returns 
   * icon_id
   * page
   * page_name
   */
  iconDetail(data) {
    return Vue.http.get(API_ROOT + 'index/iconDetail' + sourceStr,{params:data});
  },
  /**
   * 新品特惠
   * @param {any} data 
   * @returns 
   * page
   * page_number
   */
  newGoods(data) {
    return Vue.http.get(API_ROOT + 'index/newGoods' + sourceStr,{params:data});
  },
  /**
   * 精选商家
   * @param {any} data 
   * @returns 
   * icon_id
   * page
   * page_number
   */
  iconShop(data) {
    return Vue.http.get(API_ROOT + 'index/iconShop' + sourceStr,{params:data});
  },
  /**
   * 频道详情
   * @param {any} data 
   * @returns 
   */
  channelDetail(data) {
    return Vue.http.get(API_ROOT + 'index/channelDetail' + sourceStr,{params:data});
  },
}




/**
 * 首页相关api
 */


export const main = {
  /**
   * 获取首页轮播图
   * @param {any} data 
   * @returns 
   */
  getBanner(data) {
    return Vue.http.get(API_ROOT + 'index/banner' + sourceStr,{params:data});
  },
  /**
   * 获取首页热租商品以及更多
   * @param {any} data 
   * recomandId //1购物车推荐位置 2评价结束推荐位置 3.热租商品
   * page_number 每页数据量 默认为6
   * page 页码
   * @returns 
   */
  goodsHot(data) { 
    return Vue.http.get(API_ROOT + 'index/recomandgoods' + sourceStr,{params:data});
  },
  /**
   * 首页推荐商品
   * @param {any} data 
   * @returns 
   */
  goodsIndexRecom(data) {
    return Vue.http.get(API_ROOT + 'index/hotgoods' + sourceStr,{params:data});
  },
  /**
   * 首页热门标签位置
   * @param {any} data 
   * @returns 
   */
  hotTagLabel(data) {
    return Vue.http.get(API_ROOT + 'index/hotlabel' + sourceStr,{params:data});
  },
  /**
   * 搜索商品
   * @param {any} data 
   * chooseId
   * page_number
   * @returns 
   */
  searchGoods(data) {
    return Vue.http.get(API_ROOT + 'index/searchgoods' + sourceStr,{params:data});
  },
  /**
   * 获取热门标签对应具体商品
   * @param {any} data 
   * chooseId
   * page_number
   * @returns 
   */
  searchGoodsCategory(data) {
    return Vue.http.get(API_ROOT + 'index/searchgoodscategory' + sourceStr,{params:data});
  },
  /**
   * 热门推荐商品
   * @param {any} data 
   * @returns 
   */
  hotRecord(data) {
    return Vue.http.get(API_ROOT + 'index/goodshotrecord' + sourceStr,{params:data});
  },
  /**
   * 获取商品详情
   * @param {any} data 
   * goodsId
   * userId
   * @returns 
   */
  goodsInfo(data) {
    return Vue.http.post(API_ROOT + 'index/goodslist' + sourceStr,data);
  },
  /**
   * 店铺信息
   * @param {any} data 
   * storeId
   * @returns 
   */
  storeInfo(data) {
    return Vue.http.post(API_ROOT + 'index/storelist' + sourceStr,data);
  },
  /**
   * 店铺商品列表
   * @param {any} data 
   * storeId
   * @returns 
   */
  storeGoods(data) {
    return Vue.http.get(API_ROOT + 'index/storegoodslist' + sourceStr,{params:data});
  },
  /**
   * 商品评论列表
   * @param {any} data 
   * @returns 
   */
  goodsComment(data) {
    return Vue.http.get(API_ROOT + 'index/goodscommentlist' + sourceStr,{params:data});
  },
  /**
   * 判断商品是否支持该地址
   * @param {any} data 
   * province
   * city
   * region
   * goodsId
   * @returns 
   */
  judgeAddress(data) {
    return Vue.http.post(API_ROOT + 'index/is_address' + sourceStr,data);
  },
  /**
   * 获取商品分类
   * @param {any} data 
   * @returns 
   */
  goodsCategory(data) {
    return Vue.http.get(API_ROOT + 'index/getGoodsCategory' + sourceStr,{params:data});
  },
  /**
   * 获取商品租赁规则
   * @param {any} data 
   * goodsId
   * @returns 
   */
  goodsRule(data) {
    return Vue.http.post(API_ROOT + 'index/goodsleasing' + sourceStr,data);
  },
  /**
   * 添加到购物车
   * @param {any} data
   * userId
   * token 
   * goodsid
   * rent_prieod_id 
   * province
   * city
   * region
   * attr_id1 没有传0
   * attr_id2 没有传0
   * start_time 秒
   * end_time 秒
   * time_number
   * cart_type 0 加入购物车 1 确认租赁
   * @returns 
   */
  addCar(data) {
    return Vue.http.post(API_ROOT + 'index/cartContentAdd' + sourceStr,data);
  },
  
}





/**
 * 个人中心相关api
 */



export const person = {
  /**
   * 获取用户地址
   * @param {any} data 
   * userId
   * token
   * @returns 
   */
  getAddressList(data) {
    return Vue.http.get(API_ROOT + 'user/useraddresssel' + sourceStr,{params:data});
  },
  /**
   * 添加用户地址
   * @param {any} data 
   * userId
   * token
   * address_name 收货人名称
   * province 省
   * city 市
   * district 区
   * address 具体地址
   * postcode 邮编
   * mobile 电话
   * is_set_default 是否为默认选中
   * @returns 
   */
  addressAdd(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressadd' + sourceStr,data);
  },
  /**
   * 更改地址数据
   * id
   * userId
   * token
   * address_name 收货人名称
   * province 省
   * city 市
   * district 区
   * address 具体地址
   * postcode 邮编
   * mobile 电话
   * is_set_default 是否为默认选中
   * @param {any} data 
   * @returns 
   */
  addressEdit(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressedit' + sourceStr,data);
  },
  /**
   * 设置默认地址
   * @param {any} data 
   * userId
   * token 
   * id 
   * @returns 
   */
  addressDefault(data) {
    return Vue.http.post(API_ROOT + 'user/defaultaddress' + sourceStr,data);
  },
  /*
  * 获取用户芝麻信用分信息
  */
  getUserZMScore(data){
    return Vue.http.post(API_ROOT + 'zhima/getUserZMScore' + sourceStr,data);
  },
  /**
   * 处理用户实名信息
   */
  handleUserIdentityInfo(data){
    return Vue.http.post(API_ROOT + 'zhima/handleUserIdentityInfo' + sourceStr,data);
  },
  /**
   * 更新用户芝麻信用分
   */
  updateUserZMScore(data){
    return Vue.http.post(API_ROOT + 'zhima/updateUserZMScore' + sourceStr,data);
  },
  /**
   * 查询芝麻减免信息
   */
  getUserZMReliefInfo(data){
    return Vue.http.post(API_ROOT + 'zhima/getUserZMReliefInfo' + sourceStr,data);
  },
  /**
   * 删除地址
   * userId
   * token 
   * id 
   * @param {any} data 
   * @returns 
   */
  addressDelete(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressdel' + sourceStr,data);
  },
  /**
   * 获取用户默认地址
   * @param {any} data
   * userId
   * token 
   * is_default //为1时获取用户的默认地址
   * id //获取单个地址时需要传入id 此时is_default为0
   * @returns 
   */
  addressInfo(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressinfo' + sourceStr,data);
  },
  /**
   * 获取商品收藏列表
   * @param {any} data 
   * userId
   * token
   * pageSize
   * page
   * @returns 
   */
  shopCollectList(data) {
    return Vue.http.get(API_ROOT + 'user/usercollect' + sourceStr,{params:data});
  },
  /**
   * userId
   * token
   * shopId
   * @param {any} data 
   * @returns 
   */
  collectShop(data) {
    return Vue.http.post(API_ROOT + 'user/usercollectadd' + sourceStr,data);
  },
  /**
   * userId
   * token
   * shopId
   * @param {any} data 
   * @returns 
   */
  unCollectShop(data) {
    return Vue.http.post(API_ROOT + 'user/usercollectdel' + sourceStr,data);
  },
  /**
   * 用户实名认证
   * @param {any} data 
   * userId
   * realName
   * idCard
   * token
   * @returns 
   */
  userIdentify(data) {
    return Vue.http.post(API_ROOT + 'user/useridentiadd' + sourceStr,data);
  },
  /**
   * 用户反馈
   * @param {any} data 
   * userId
   * token
   * content
   * contact
   * @returns 
   */
  feedback(data) {
    return Vue.http.post(API_ROOT + 'user/opinionAdd' + sourceStr,data);
  }
};





/**
 * 订单部分接口
 */


export const order = {
  /**
   * 获取购物车订单确认列表
   * @param {any} data 
   * userId
   * token
   * cartId
   * @returns 
   */
  orderConfirm(data) {
    return Vue.http.post(API_ROOT + 'index/confirmorder' + sourceStr,data);
  },
  /**
   * 获取物流信息
   * @param {any} data 
   * userId
   * token
   * com
   * cn
   * @returns 
   */
  expressInfo(data) {
    return Vue.http.post(API_ROOT + 'user/alicloudapi' + sourceStr,data);
  },
  /**
   * 获取物流方式
   * @param {any} data 
   * province
   * city
   * region
   * goodsId
   * @returns 
   */
  orderTpl(data) {
    return Vue.http.post(API_ROOT + 'index/tpl_list' + sourceStr,data);
  },
  /**
   * 运费模板
   * @param {any} data 
   * tpl
   * province
   * city
   * region
   * goodsId
   * @returns 
   */
  tplPrice(data) {
    return Vue.http.post(API_ROOT + 'order/tpl_price' + sourceStr,data);
  },
   /**
   * 自提点列表
   * @param {any} data 
   * userId
   * token
   * goodsId
   * province
   * city
   * region
   * page_number
   * page
   * @returns 
   */
  goodsSince(data) {
    return Vue.http.get(API_ROOT + 'index/since_sel' + sourceStr,{params:data});
  },
  /**
   * 商品归还地址列表
   * @param {any} data 
   * userId
   * token
   * goodsId
   * page_number
   * page
   * @returns 
   */
  goodsRevert(data) {
    return Vue.http.get(API_ROOT + 'index/revert_sel' + sourceStr,{params:data});
  },
  /**
   * 订单列表
   * @param {any} data 
   * orderStatus [{"key":"orderStatus","value":"1","description":"订单状态0是全部 1是待付款，2是待发货，3是待收货，4是待归还，5是待结算，6是待评价 7退款退货订单"},{"key":"page_number","value":"10","description":"分页数，默认为10，可以不填"}]
   * userId
   * token
   * page_number
   * page
   * @returns 
   */
  /* 获取openid */
  getOpenId(data){
    return Vue.http.get('https://api.zujiekeji.cn/pay/jsapi/getWxOpenid',{params:data});
  },
  /**
   * 订单列表
   * @param {any} data 
   * @returns 
   */
  orderlist(data) {
    return Vue.http.get(API_ROOT + 'order/orderlist' + sourceStr,{params:data});
  },
  /**
   * 删除订单
   * @param {any} data 
   * userId
   * token
   * orderId
   * @returns 
   */
  orderDel(data) {
    return Vue.http.post(API_ROOT + 'order/orderdel' + sourceStr,data);
  },
  /**
   * 确认收货
   * @param {any} data 
   * userId
   * token
   * orderId
   * @returns 
   */
  orderReceipt(data) { //确认收货
    return Vue.http.post(API_ROOT + 'order/orderreceipt' + sourceStr,data);
  },
  /**
   * 确认归还
   * @param {any} data 
   * userId
   * token
   * orderId 
   * sinceId 自提点编号
   * expressId 物流单号
   * logisticsName 物流公司简拼
   * revertId 归还地址编号
   * company 物流公司名
   * @returns 
   */
  orderReturn(data) {
    return Vue.http.post(API_ROOT + 'order/orderreturn' + sourceStr,data);
  },
 /**
   * 确认结算
   * @param {any} data 
   * userId
   * token
   * orderId 
   * @returns 
   */
  orderSettle(data) {
    return Vue.http.post(API_ROOT + 'order/ordersettlement' + sourceStr,data);
  },
  /**
   * 获取单个订单详情
   * @param {any} data 
   * userId
   * token
   * orderId 
   * @returns 
   */
  orderInfo(data) {
    return Vue.http.post(API_ROOT + 'order/orderfind' + sourceStr,data);
  },
   /**
   * 生成支付订单
   * @param {any} data 
   * "addressId": "46",//地址id 物流或者上门选择该字段
   * "cartId": "3106", //购物车id
   * "cart_tpl": 1,//物流方式
   * "freight_continued_price": "0.00",//快递续件运费
   * "freight_door_cost": "0.00",//上门的运费
   * "freight_first_price": "0.00",//快递的收件运费
   * "goodsAmount": 1,//数量
   * "order_time_number": 5,//租赁周期
   * "rentTime": "1505562717",//开始时间
   * "rent_period_id": "13505",// 周期id
   * "returnTime": "1505908317",//结束时间
   * "sinceId": ""//自提点id 无传0 
   * @returns 
   */
  orderPay(data) {
    return Vue.http.post(API_ROOT + 'order/orderadd' + sourceStr,data);
  },
  /**
   * 待付款订单生成支付订单
   * @param {any} data
   * userId
   * token
   * orderId 
   * @returns 
   */
  orderShipPay(data) {
    return Vue.http.post(API_ROOT + 'order/ordershippingpay' + sourceStr,data);
  },
  /**
   * 获取用户某状态订单情况
   * @param {any} data 
   * userId
   * token
   * @returns 
   */
  orderNum(data) {
    return Vue.http.post(API_ROOT + 'Order/orderInfoto' + sourceStr,data);
  },
  /**
   * 获取订单结算单信息
   * @param {any} data
   * userId
   * token
   * orderId 
   * @returns 
   */
  orderSettleInfo(data) {
    return Vue.http.post(API_ROOT + 'order/setbill' + sourceStr,data);
  },
  /**
   * 提交订单评论
   * userId
   * token
   * orderId 
   * @param {any} data 
   * content
   * @returns 
   */
  orderComment(data) {
    return Vue.http.post(API_ROOT + 'Order/orderComment' + sourceStr,data);
  },
  /**
   * 获取订单部评论
   * userId
   * token
   * orderId 
   * @param {any} data 
   * @returns 
   */
  myOrderComment(data) {
    return Vue.http.post(API_ROOT + 'order/mycomment' + sourceStr,data);
  },
  /* 微信支付 */
  /* userId
  token
  orderSn  生成支付订单接口返回的订单编号
  payMethod   2 */
  OrderWechat(data) {
    return Vue.http.post("https://api.zujiekeji.cn/pay/jsapi/index" + sourceStr,data);
  },
  /**
   * 提醒结     算
   * userId
   * token
   * orderId
   * type
   */
  orderRemind(data){
    return Vue.http.post(API_ROOT +"message/subOrderMsg" + sourceStr,data);
  }
  
}


/**
 * 红包接口
 */
export const card={
    /**
     * 我的红包列表
     * userId
     * token
     * useType 0未使用 1已经使用 2已经过期
     * page_number
     * page
     */
    myCardList(data){
      return Vue.http.get(API_ROOT + 'coupon/index' + sourceStr,{params:data});
      
    },
    /**
     * 店铺红包列表
     */
    stordCardList(data){
      return Vue.http.get(API_ROOT + 'coupon/storeCoupon' + sourceStr,{params:data});
    },
    /**
     * 
     * 获取用户可用红包
     * 
     * @param {any} data 
     * @returns 
     */
    storeCard(data){
      return Vue.http.post(API_ROOT + 'coupon/userCoupon' + sourceStr,data);
    },
    /**
     * 领取店铺优惠券
     */
    receiveStoreCoupon(data){
      return Vue.http.post(API_ROOT + 'coupon/receiveStoreCoupon' + sourceStr,data);
    },
    /**
     * 获取新人红包
     * @param {any} data 
     * @returns 
     */
    receiveNewerCoupon(data){
      return Vue.http.post(API_ROOT + 'coupon/receiveNewerCoupon' + sourceStr,data);
    },
    /**
     * 微信分享接口
     */
    wxShare(data){
      return Vue.http.get('https://www.zujiekeji.cn/index/wechat/getSignature' + sourceStr,{params:data});
    },
    /**
     * 是否有活动
     * @param {any} data 
     * @returns 
     */
    getCouponActive(data){
      return Vue.http.get(API_ROOT + 'coupon/getCouponActive' + sourceStr,{params:data});
    },
    /**
     * 提醒是否是红包
     * @param {any} data 
     * @returns 
     */
    remindCard(data){
      return Vue.http.post(API_ROOT + 'coupon/couponRemind' + sourceStr,data);
    },
}



/*
 * 活动相关接口
 */
 export const activity={
  getMoreGood(data){
    return Vue.http.get(API_ROOT + 'store/getActivityStore' + sourceStr,{params:data});
  },
 }



/**
 * 支付宝借还相关接口
 */
export const alipay={
    /**
     * 借还订单接口
     * @param {any} data 
     * @returns 
     */
    orderId(data){  
      return Vue.http.post('https://api.zujiekeji.cn/index/Zmjiehuan/createRentOrder' + sourceStr,data);
    }, 
    /**
     * 撤销订单
     * @param {any} data 
     * @returns 
     */
    return(data){  
      return Vue.http.post('https://api.zujiekeji.cn/index/Zmjiehuan/deleteRentOrder' + sourceStr,data);
    }, 
    /**
     * 成功订单
     * @param {any} data 
     * @returns 
     */
    success(data){  
      return Vue.http.post('https://api.zujiekeji.cn/index/Zmjiehuan/chanelSuccessOrder' + sourceStr,data);
    }, 
    
}
