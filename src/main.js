import Vue from 'vue';
import store from './store';
import App from './App';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import router from './router';


/* 路由全局函数 */
Router.prototype.goBack = function () { 
	if(history.length==1){
		window.location.href="/";
	}else{
		this.isBack = true;
		　　window.history.go(-1);
	}
};


// 登录跳转判断
router.beforeEach((to, from, next) => {
	// 判断该路由是否需要登录权限
	if (to.meta.requireAuth) {
		// 通过vuex state获取当前的token是否存在
		if(store.state.userInfo.token) {   
			next();
		}
		else { 
			next({
				path: '/login',
			   	query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
		   });
		}
	}
	else {
		next();
	}
});



window.overscroll = function(el) {
	el.addEventListener('touchstart', function() {
		var top = el.scrollTop
			, totalScroll = el.scrollHeight
			, currentScroll = top + el.offsetHeight;
		if (top === 0) {
			el.scrollTop = 1;
		} else if (currentScroll === totalScroll) {
			el.scrollTop = top - 1;
		}
	});

	el.addEventListener('touchmove', function(evt) {
		if (el.offsetHeight < el.scrollHeight)
			evt._isScroller = true;
	});
}

var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isiOS){
	document.body.addEventListener('touchmove', function(evt) {
		if (!evt._isScroller) {
			evt.preventDefault();
		}
	});
}



/* 取出本地数据，赋值到store的state中 */
const userInfo=localStorage.getItem("userInfo");
if(userInfo){
	store.state.userInfo= JSON.parse(userInfo);
}
const isCertify=localStorage.getItem("isCertify");
if(isCertify){
	store.state.isCertify= isCertify;
}

/* 全局注册md5函数 */
import { md5 } from 'vux';
Vue.prototype.md5=md5;
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
import { ConfirmPlugin } from 'vux';
Vue.use(ConfirmPlugin);
import { dateFormat } from 'vux'
Vue.prototype.dateFormat=dateFormat;

/* 过滤器注册,直接抄的的1.0中的货币过滤器 */
Vue.filter('currency', function(value, _currency, decimals) {  
    value = parseFloat(value);  
    if (!isFinite(value) || !value && value !== 0) return '';  
    _currency = _currency != null ? _currency : '$';  
    decimals = decimals != null ? decimals : 2;  
    var stringified = Math.abs(value).toFixed(decimals);  
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;  
    var i = _int.length % 3;  
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';  
    var _float = decimals ? stringified.slice(-1 - decimals) : '';  
    var sign = value < 0 ? '-' : '';  
    var digitsRE = /(\d{3})(?=\d)/g;  
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;  
}); 
Vue.filter('dataform', function(value) {  
	return dateFormat(value*1000, 'YYYY-MM-DD');
});

Vue.filter('orderdata', function(value) {  
	if(value){
		return dateFormat(value*1000, 'YYYY-MM-DD HH:mm:ss');
	}
});

//引入css重置文件,基本的样式文件
require('./assets/css/reset.css')



// HTTP相关
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;// = headers: {'Content-Type': 'application/x-www-form-urlencoded'}
Vue.http.options.emulateHTTP = true;
Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials: true};
window.Vue = Vue;


/* eslint-disable no-new */
new Vue({
  	template: '<App/>',
	router,
  	store,
  	components: { App }
}).$mount('#app');


