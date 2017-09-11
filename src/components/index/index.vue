<style  lang="scss">
.index_container{
    background-color: #f3f3f3;
}
.Router {
     position: absolute;
     width: 100%;
     transition: all .4s ease;
     top: 0;
}
.index_tabbar{
    background-color: #fff;
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
.weui-bar__item_on{
    .weui-tabbar__icon{
        color: #4d7ad2 !important;
        .iconfont{
            color: #4d7ad2 !important;
        }
    }
    .weui-tabbar__label{
        color: #4d7ad2 !important;
    }
}
</style>
<template>
<div class="index_container">
    <transition  :name="transitionName" class="router">
          <router-view class="router-view Router"></router-view>
    </transition>
   <tabbar class="index_tabbar"  style="position:fixed;bottom:0;left:0">
      <tabbar-item :selected="this.$route.fullPath=='/index/main'" :link="{path:'/index/main'}" >
         <i @click="routerchange(0)" class="iconfont" slot="icon">&#xe608;</i>
        <span slot="label" >首页</span>
      </tabbar-item>
       <tabbar-item :selected="this.$route.fullPath=='/index/main/car'" :link="{path:'/index/main/car'}">
      <i  @click="routerchange(1)" class="iconfont" slot="icon">&#xe604;</i>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item :selected="this.$route.fullPath=='/index/main/order'" :link="{path:'/index/main/order'}" >
         <i @click="routerchange(2)" class="iconfont" slot="icon">&#xe603;</i>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item :selected="this.$route.fullPath=='/index/main/mine'" :link="{path:'/index/main/mine'}" >
        <i @click="routerchange(3)" class="iconfont" slot="icon">&#xe612;</i>
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
</div>
</template>
<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Search,Tabbar, TabbarItem ,Loading} from 'vux';
  import { mapState, mapActions } from 'vuex';
  /* import {API,getQuery} from '../services'; */
	export default {
    	data() {
          return {
            transitionName: 'slide-right' , // 默认动态路由变化为slide-right
            currentindex:0,/* 当前路由index值 */
          }
  		},
    components: {
     Swiper,
     GroupTitle,
     SwiperItem,
     XButton,
     Divider,
     Search,
     Tabbar,
     TabbarItem ,
     Loading
    },
    computed:{
        
    },
    watch: {
　　　
　  },
  	mounted : function() {/* 
        localStorage.removeItem("goodname")
  			document.title="主页"
        //openid丢失时获取openid
        if(localStorage.getItem("openid")==null){
          if(getQuery.getQueryString("code")==null){
          let fromurl=location.href;
          let url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx066707bb3a2536a&redirect_uri="+fromurl+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"
            //window.location.href=url
        }else{
           API.user.getopenid({"code":getQuery.getQueryString("code")}).then(
          (resp) => {
              localStorage.setItem("openid",resp.body.result)
          }
        )
        }
      }

      //获取openid
      if(getQuery.getQueryString("openid")){
        localStorage.setItem("openid",getQuery.getQueryString("openid"));
        }

      API.goods.listScrollPic({"shopGroupCode":"0","equipment":"equipment"}).then(
          (resp) => {

           for(let i=0;i<resp.body.result.length;i++){
           	let item={
           		"img":'http://oidluqi4c.bkt.clouddn.com/'+resp.body.result[i].picUrl,
           		"url": '/index/goods?id='+resp.body.result[i].link,
             	" title": ''
           	}
           	this.demo01_list.push(item)
           }
          }
        )
       API.goods.listGoods(this.form).then(
          (resp)=>{
           this.goods = resp.body.result.datas.slice(0,4)
           this.load = false
          }
        )

        API.goods.listGoodsType({"shopGroupCode":0}).then(
          (resp)=>{
           this.sort = resp.body.result
           for(let i=0;i<resp.body.result.length;i++){
            if(resp.body.result[i].parentId!="0"){
              this.child.push(resp.body.result[i])
            }
           }
          }
        ) */
  	},
    methods :{
        /* 路由切换函数 */
        routerchange(index){
            console.log(this.$route.fullPath);
            if(index<this.currentindex){
                this.transitionName = 'slide-right'
            }else{
                this.transitionName = 'slide-left'
            }
            this.currentindex=index;
        }
    }
	}
 
</script>