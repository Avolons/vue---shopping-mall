<template>
  <transition :name="transitionName" class="router">
      <keep-alive>
      <router-view  class="Router" id="router-container"></router-view>
      </keep-alive>
  </transition>
</template>

<script>
import {API,getQuery} from './services/';


export default {
    data() {
　　　　return {
　　　　　　transitionName: 'slide-right'  // 默认动态路由变化为slide-right
　　　　}
　　},
　　watch: {
　　　'$route' (to, from) {
　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
　　　　　　if(isBack) {
　　　　　　　　this.transitionName = 'slide-right'
　　　　　　} else {
　　　　　　       this.transitionName = 'slide-left'
　　　　　}
　　this.$router.isBack = false
　　}
　  },
    mounted(){

        
            
function getQueryString(name) {  
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
	var r = location.search.substr(1).match(reg);  
	if (r != null)  
		return unescape(decodeURI(r[2]));  
	return null;  
} 
let openId=localStorage.getItem("openId");

var access_code = getQueryString('code'); 

if(!openId){
    if(access_code == null ){
	 var fromurl = location.href;//获取授权code的回调地址，获取到code，直接返回到当前页  
	 var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe67019703f582d76&redirect_uri=' + encodeURIComponent("http://wap.zujiekeji.cn") + '&response_type=code&scope=snsapi_base&state=0#wechat_redirect';  
	location.href = url; 
    }else{
        if(!openId){
            API.order.getOpenId({
                code:access_code,
            }).then((res)=>{
                let openid=res.body.data;
                localStorage.setItem("openId",openid);
            },(res)=>{
            });
        }
        
    }
}
    }
  }
</script>

<style>

.Router {
     position: absolute;
     width: 100%;
     transition: all .4s ease;
     top: 0;
     height: 100%;
}

.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
