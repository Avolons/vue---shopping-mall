/**
 * 登录注册通用接口部分
 */
import Vue from 'vue';

var API_ROOT = "http://106.14.135.243:8082/index/";

export const login = {
  /**
   * 密码登录接口
   * @param {any} data 
   * user_phone
   * user_password 
   * @returns 
   */
  pwdLogin(data) {
    return Vue.http.post(API_ROOT + 'user/app_login', data);
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
    return Vue.http.post(API_ROOT + 'user/app_register',data);
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
    return Vue.http.post(API_ROOT + 'user/update_password',data);
  },
  /**
   * 发送验证码接口
   * @param {any} data 
   * user_phone
   * type //短信类型 1 register:注册短信 2 back：密码找回短信 3: logo:短信登录 4：replace 找回密码
   * @returns 
   */
  sendCode(data){
    return Vue.http.post(API_ROOT + 'user/send_phone_code',data);
  },
  /**
   * 验证码登录接口
   * @param {any} data 
   * user_phone
   * code
   * @returns 
   */
  codeLogin(data){
    return Vue.http.post(API_ROOT + 'user/code_login',data);
  }
}
