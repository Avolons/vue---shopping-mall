import Vue from 'vue';

var port = false;
var API_ROOT = port?"https//api.zujiekeji.cn/":"http://106.14.135.243:8082/index/";

export const order = {
  orderConfirm(data) {
    return Vue.http.get(API_ROOT + 'index/confirmorder',data);
  },
  expressInfo(data) {
    return Vue.http.post(API_ROOT + 'user/alicloudapi',data);
  },
  orderTpl(data) {//获取订单可选物流方式
    return Vue.http.post(API_ROOT + 'index/tpl_list',data);
  },
  orderlist(data) {
    return Vue.http.get(API_ROOT + 'order/orderlist',data);
  },
  orderDel(data) {
    return Vue.http.post(API_ROOT + 'order/orderdel',data);
  },
  orderReceipt(data) { //确认收货
    return Vue.http.post(API_ROOT + 'order/orderreceipt',data);
  },
  orderReturn(data) {
    return Vue.http.post(API_ROOT + 'order/orderreturn',data);
  },
  orderSettle(data) {
    return Vue.http.post(API_ROOT + 'order/ordersettlement',data);
  },
  orderInfo(data) {
    return Vue.http.post(API_ROOT + 'order/orderfind',data);
  },
  orderPay(data) {
    return Vue.http.post(API_ROOT + 'order/orderadd',data);
  },
  orderShipPay(data) {
    return Vue.http.post(API_ROOT + 'order/ordershippingpay',data);
  },
  orderNum(data) {
    return Vue.http.post(API_ROOT + 'Order/orderInfoto',data);
  },
  orderSettleInfo(data) {
    return Vue.http.post(API_ROOT + 'order/setbill',data);
  },
  orderComment(data) {
    return Vue.http.post(API_ROOT + 'Order/orderComment',data);
  },
  myOrderComment(data) {
    return Vue.http.post(API_ROOT + 'order/mycomment',data);
  },
  orderRemind(data) {
    return Vue.http.post(API_ROOT + 'order/tpl_price',data);
  }
}
