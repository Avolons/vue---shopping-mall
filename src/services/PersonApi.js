import Vue from 'vue';

var port = false;
var API_ROOT = port?"https//api.zujiekeji.cn/":"http://106.14.135.243:8082/index/";

export const person = {
  getAddressList(data) {
    return Vue.http.get(API_ROOT + 'user/useraddresssel',data);
  },
  addressAdd(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressadd',data);
  },
  addressEdit(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressedit',data);
  },
  addressDefault(data) {
    return Vue.http.post(API_ROOT + 'user/defaultaddress',data);
  },
  addressDelete(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressdel',data);
  },
  addressInfo(data) {
    return Vue.http.post(API_ROOT + 'user/useraddressinfo',data);
  },
  shopCollectList(data) {
    return Vue.http.get(API_ROOT + 'user/usercollect',data);
  },
  collectShop(data) {
    return Vue.http.post(API_ROOT + 'user/usercollectadd',data);
  },
  unCollectShop(data) {
    return Vue.http.post(API_ROOT + 'user/usercollectdel',data);
  },
  userIdentify(data) {
    return Vue.http.post(API_ROOT + 'user/useridentiadd',data);
  },
  feedback(data) {
    return Vue.http.post(API_ROOT + 'user/useridentiadd',data);
  }
}
