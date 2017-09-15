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
  /**
   * 店铺信息
   * @param {any} data 
   * storeId
   * @returns 
   */
  storeInfo(data) {
    return Vue.http.post(API_ROOT + 'index/storelist',data);
  },
  /**
   * 店铺商品列表
   * @param {any} data 
   * storeId
   * @returns 
   */
  storeGoods(data) {
    return Vue.http.get(API_ROOT + 'index/storegoodslist',{params:data});
  },
  /**
   * 商品评论列表
   * @param {any} data 
   * @returns 
   */
  goodsComment(data) {
    return Vue.http.get(API_ROOT + 'index/goodscommentlist',{params:data});
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
  /**
   * 获取商品租赁规则
   * @param {any} data 
   * goodsId
   * @returns 
   */
  goodsRule(data) {
    return Vue.http.post(API_ROOT + 'index/goodsleasing',data);
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
    return Vue.http.post(API_ROOT + 'index/cartContentAdd',data);
  },
  
}

