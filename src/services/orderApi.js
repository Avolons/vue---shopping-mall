/**
 * 订单部分接口
 */

import Vue from 'vue';
var API_ROOT = "http://106.14.135.243:8082/index/";


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
    return Vue.http.post(API_ROOT + 'index/confirmorder',data);
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
    return Vue.http.post(API_ROOT + 'user/alicloudapi',data);
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
    return Vue.http.post(API_ROOT + 'index/tpl_list',data);
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
    return Vue.http.post(API_ROOT + 'order/tpl_price',data);
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
    return Vue.http.get(API_ROOT + 'index/since_sel',{params:data});
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
    return Vue.http.get(API_ROOT + 'index/revert_sel',{params:data});
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
  orderlist(data) {
    return Vue.http.get(API_ROOT + 'order/orderlist',{params:data});
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
    return Vue.http.post(API_ROOT + 'order/orderdel',data);
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
    return Vue.http.post(API_ROOT + 'order/orderreceipt',data);
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
    return Vue.http.post(API_ROOT + 'order/orderreturn',data);
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
    return Vue.http.post(API_ROOT + 'order/ordersettlement',data);
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
    return Vue.http.post(API_ROOT + 'order/orderfind',data);
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
    return Vue.http.post(API_ROOT + 'order/orderadd',data);
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
    return Vue.http.post(API_ROOT + 'order/ordershippingpay',data);
  },
  /**
   * 获取用户某状态订单情况
   * @param {any} data 
   * userId
   * token
   * @returns 
   */
  orderNum(data) {
    return Vue.http.post(API_ROOT + 'Order/orderInfoto',data);
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
    return Vue.http.post(API_ROOT + 'order/setbill',data);
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
    return Vue.http.post(API_ROOT + 'Order/orderComment',data);
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
    return Vue.http.post(API_ROOT + 'order/mycomment',data);
  },
}
