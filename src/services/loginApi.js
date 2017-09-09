import Vue from 'vue';

var port = false;
var API_ROOT = port?"https//api.zujiekeji.cn/":"http://106.14.135.243:8082/index/";

export const login = {
  pwdLogin(data) {
    return Vue.http.post(API_ROOT + 'user/app_login', data);
  },
  register(data){
    return Vue.http.post(API_ROOT + 'user/app_register',data);
  },
  updatePwd(data){
    return Vue.http.post(API_ROOT + 'user/update_password',data);
  },
  sendCode(data){//短信类型 1 register:注册短信 2 back：密码找回短信 3: logo:短信登录 4：replace 找回密码
    return Vue.http.post(API_ROOT + 'user/send_phone_code',data);
  },
  codeLogin(data){
    return Vue.http.post(API_ROOT + 'user/code_login',data);
  }
}
