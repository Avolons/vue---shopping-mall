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
        color: #2196f3 !important;
        .iconfont{
            color: #2196f3 !important;
        }
    }
    .weui-tabbar__label{
        color: #2196f3 !important;
    }
}
</style>
<template>
<div class="index_container">
    <transition  :name="transitionName" class="router">
            <keep-alive>
                 <router-view class="router-view Router"></router-view>
            </keep-alive>
    </transition>
   <tabbar class="index_tabbar"  style="position:fixed;bottom:0;left:0;overflow:hidden">
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
     Loading,
    },
    computed:{
        
    },
    watch: {
　　　
　  },
  	mounted : function() {
  	},
    methods :{
        /* 路由切换函数 */
        routerchange(index){
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