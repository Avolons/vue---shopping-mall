import Vue from 'vue';

var port = false;
var API_ROOT = port?"https//api.zujiekeji.cn/":"http://106.14.135.243:8082/pay/";

export const index = {
  pay(data) {
    return Vue.http.post(API_ROOT + 'index/index',data);
  },
  refundMoney(data) {
    return Vue.http.post(API_ROOT + 'index/refund',data);
  },
  refundGoods(data) {
    return Vue.http.post(API_ROOT + 'index/returnGoods',data);
  }
}
