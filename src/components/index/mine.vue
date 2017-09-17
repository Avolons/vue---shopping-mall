<style lang="scss" >
body{
    background-color: #f3f3f3;
    .weui-cell{
        padding: 8px 15px;
    }
    .vux-label{
        font-size: 15px;
        color: #272727;
    }
    .mine_container{
        .iconfont{
        font-size: 20px;
        margin-right: 10px;
    }
    }
}
.mine{
 &_header{
     height: 200px;
     background-image: url("../../assets//img/index/minebc.png");
     overflow: hidden;
 }
 &_avatar{
        display: block;
        height: 75px;
        width: 75px;
        border-radius: 50%;
        padding: 5px;
        border: 2px solid #fff;
        margin: 0 auto;
        margin-top: 45px;
 }
 &_name{
     display: block;
      margin: 10px auto;
      overflow: hidden;   
      font-size: 18px;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 200px;
      text-align: center;
 }
}

</style>

</style>
<template>
	<div class="mine_container">
        <header class="mine_header">
            <!-- :src="user.img"  -->
            <img class="mine_avatar"   :src="this.$store.state.userInfo.avatar"  alt="avatar">
            <span class="mine_name">{{this.$store.state.userInfo.loginname}}</span>
        </header>
   
     <group style="margin-top:0.6rem;">
      <cell  title="我的收藏" is-link link="/collection">
          <i slot="icon" class="iconfont">&#xe605;</i>
      </cell>
      <cell  title="我的地址" is-link link="/addressList">
          <i slot="icon" class="iconfont">&#xe71d;</i>
      </cell>
    </group>
    <group style="margin-top:0.6rem">
      <!-- 两种状态，已经认证和未认证状态 -->
      <template v-if="getIsCertify==2 || getIsCertify==4 ">
        <cell  title="实名认证">
            <span style="font-size:12px;">已认证</span>
            <i slot="icon" class="iconfont">&#xe63c;</i>
        </cell>
      </template>
      <template v-else>
         <cell  title="实名认证" is-link link="/authentication">
          <span style="font-size:12px;padding-right:20px">未认证</span>
          <i slot="icon" class="iconfont">&#xe63c;</i>
         </cell>
      </template>
      
      <!-- 两种状态，授权状态和未授权状态 -->
      <template v-if="getIsCertify==4 ">
          <cell  title="芝麻信用" >
              <span style="font-size:12px;">已授权</span>
              <i slot="icon" class="iconfont">&#xe60a;</i>
          </cell>
      </template>
      <template v-else>
          <cell  title="芝麻信用" is-link link="/download">
            <span style="font-size:12px;padding-right:20px">未授权</span>
            <i slot="icon" class="iconfont">&#xe60a;</i>
          </cell>
      </template>
      
      <cell  title="设置" is-link link="/setting">
            <i slot="icon" class="iconfont">&#xe63b;</i>
      </cell>
       <cell  title="帮助与客服" is-link link="/help">
            <i slot="icon" class="iconfont">&#xe602;</i>
      </cell>
      <cell  title="意见反馈" is-link link="/opinion">
        <i slot="icon" class="iconfont">&#xe64a;</i>  
      </cell>
      
    </group>
   
	</div>
</template>
<script>
import {XHeader,Tabbar,TabbarItem,Cell,Group } from 'vux'
import { mapGetters } from 'vuex'

  export default {
      data() {
          return {
           user:{
               name:"网二",
               img:"../../assets//img//index//avatar.png"
           },
           
          }
      },
    components: {
      XHeader,
      Tabbar, 
      TabbarItem,
      Cell,
      Group
    },
    computed:{
    ...mapGetters([
      'getIsCertify',
    ])
  },
    mounted(){
      /* 获取当前的认证状态 */ 
      this.$store.dispatch('IsCertify');
    },
    methods :{
      
    }
  }
</script>