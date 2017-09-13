/**
 * 首页相关api
 */
import Vue from 'vue';

var API_ROOT = "http://106.14.135.243:8082/index/";

export const main = {
  /**
   * 获取首页轮播图
   * @param {any} data 
   * @returns 
   */
  getBanner(data) {
    return Vue.http.get(API_ROOT + 'index/banner',{params:data});
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
    return Vue.http.get(API_ROOT + 'index/recomandgoods',{params:data});
  },
  /**
   * 首页推荐商品
   * @param {any} data 
   * @returns 
   */
  goodsIndexRecom(data) {
    return Vue.http.get(API_ROOT + 'index/hotgoods',{params:data});
  },
  /**
   * 首页热门标签位置
   * @param {any} data 
   * @returns 
   */
  hotTagLabel(data) {
    return Vue.http.get(API_ROOT + 'index/hotlabel',{params:data});
  },
  /**
   * 搜索商品
   * @param {any} data 
   * chooseId
   * page_number
   * @returns 
   */
  searchGoods(data) {
    return Vue.http.get(API_ROOT + 'index/searchgoods',{params:data});
  },
  /**
   * 获取热门标签对应具体商品
   * @param {any} data 
   * chooseId
   * page_number
   * @returns 
   */
  searchGoodsCategory(data) {
    return Vue.http.get(API_ROOT + 'index/searchgoodscategory',{params:data});
  },
  /**
   * 热门推荐商品
   * @param {any} data 
   * @returns 
   */
  hotRecord(data) {
    return Vue.http.get(API_ROOT + 'index/goodshotrecord',{params:data});
  },
  /**
   * 获取商品详情
   * @param {any} data 
   * goodsId
   * userId
   * @returns 
   */
  goodsInfo(data) {
    return Vue.http.post(API_ROOT + 'index/goodslist',data);
  },
  storeInfo(data) {
    return Vue.http.post(API_ROOT + 'index/storelist',data);
  },
  storeGoods(data) {
    return Vue.http.get(API_ROOT + 'index/storegoodslist',{params:data});
  },
  goodsComment(data) {
    return Vue.http.get(API_ROOT + 'index/goodscommentlist',{params:data});
  },
  goodsSince(data) {
    return Vue.http.get(API_ROOT + 'index/since_sel',{params:data});
  },
  goodsRevert(data) {
    return Vue.http.get(API_ROOT + 'index/revert_sel',{params:data});
  },
  judgeAddress(data) {
    return Vue.http.post(API_ROOT + 'index/is_address',data);
  },
  /**
   * 获取商品分类
   * @param {any} data 
   * @returns 
   */
  goodsCategory(data) {
    return Vue.http.get(API_ROOT + 'index/getGoodsCategory',{params:data});
  },
  goodsRule(data) {
    return Vue.http.post(API_ROOT + 'index/goodsleasing',data);
  },
  tplPrice(data) {
    return Vue.http.post(API_ROOT + 'order/tpl_price',data);
  }
}

