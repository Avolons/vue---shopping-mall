/**
 * 个人中心相关api
 */
import Vue from 'vue';

var API_ROOT = "http://106.14.135.243:8082/index/";


export const person = {
  /**
   * 获取用户地址
   * @param {any} data 
   * userId
   * token
   * @returns 
   */
  getAddressList(data) {
    return Vue.http.get(API_ROOT + 'user/useraddresssel',{params:data});
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
    return Vue.http.post(API_ROOT + 'user/useraddressadd',data);
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
    return Vue.http.post(API_ROOT + 'user/useraddressedit',data);
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
    return Vue.http.post(API_ROOT + 'user/defaultaddress',data);
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
    return Vue.http.post(API_ROOT + 'user/useraddressdel',data);
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
    return Vue.http.post(API_ROOT + 'user/useraddressinfo',data);
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
    return Vue.http.get(API_ROOT + 'user/usercollect',{params:data});
  },
  /**
   * userId
   * token
   * shopId
   * @param {any} data 
   * @returns 
   */
  collectShop(data) {
    return Vue.http.post(API_ROOT + 'user/usercollectadd',data);
  },
  /**
   * userId
   * token
   * shopId
   * @param {any} data 
   * @returns 
   */
  unCollectShop(data) {
    return Vue.http.post(API_ROOT + 'user/usercollectdel',data);
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
    return Vue.http.post(API_ROOT + 'user/useridentiadd',data);
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
    return Vue.http.post(API_ROOT + 'user/opinionAdd',data);
  }
}
