import Vue from 'vue';

var port = false;
var API_ROOT = port?"https//api.zujiekeji.cn/":"http://106.14.135.243:8082/index/";

export const index = {
  getBanner(data) {
    return Vue.http.post(API_ROOT + 'index/banner',data);
  },
  goodsRecom(data) { //1购物车推荐位置 2评价结束推荐位置 3.热租商品
    return Vue.http.get(API_ROOT + 'index/recomandgoods',data);
  },
  goodsIndexRecom(data) {//首页推荐商品
    return Vue.http.get(API_ROOT + 'index/hotgoods',data);
  },
  hotTagLabel(data) {
    return Vue.http.post(API_ROOT + 'index/hotlabel',data);
  },
  searchGoods(data) {
    return Vue.http.get(API_ROOT + 'index/searchgoods',data);
  },
  hotRecord(data) {
    return Vue.http.get(API_ROOT + 'index/goodshotrecord',data);
  },
  goodsInfo(data) {
    return Vue.http.post(API_ROOT + 'index/goodslist',data);
  },
  storeInfo(data) {
    return Vue.http.post(API_ROOT + 'index/storelist',data);
  },
  storeGoods(data) {
    return Vue.http.get(API_ROOT + 'index/storegoodslist',data);
  },
  goodsComment(data) {
    return Vue.http.get(API_ROOT + 'index/goodscommentlist',data);
  },
  goodsSince(data) {
    return Vue.http.get(API_ROOT + 'index/since_sel',data);
  },
  goodsRevert(data) {
    return Vue.http.get(API_ROOT + 'index/revert_sel',data);
  },
  judgeAddress(data) {
    return Vue.http.post(API_ROOT + 'index/is_address',data);
  },
  goodsCategory(data) {
    return Vue.http.post(API_ROOT + 'index/getGoodsCategory',data);
  },
  goodsRule(data) {
    return Vue.http.post(API_ROOT + 'index/goodsleasing',data);
  },
  tplPrice(data) {
    return Vue.http.post(API_ROOT + 'order/tpl_price',data);
  }
}

