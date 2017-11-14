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
    &_container{
        height: 100%;
        background-color: #f1f1f1;
        .weui-cells{
            margin-top: 0;
        }
    }
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
<div>

	<div class="mine_container">
        <header class="mine_header">
            <!-- :src="user.img"  -->
            <img class="mine_avatar"   :src="imgFormat(this.$store.state.userInfo.avatar)"  alt="avatar">
            <span class="mine_name">{{this.$store.state.userInfo.loginname}}</span>
        </header>
   
     <group>
      <cell  title="我的收藏" is-link link="/collection">
          <i slot="icon" class="iconfont">&#xe605;</i>
      </cell>
      <cell  title="我的地址" is-link link="/addressList">
          <i slot="icon" class="iconfont">&#xe71d;</i>
      </cell>
       <cell  title="优惠券" is-link link="/card">
          <i slot="icon" style="width:20px" class="iconfont">&#xe610;</i>
      </cell>
      <cell  title="我的绘本" is-link link="/book/main/mine">
          <i slot="icon" style="width:20px" class="iconfont">&#xe65a;</i>
      </cell>
    </group>
    <group style="margin-top:0.6rem;margin-bottom:100px">
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
      <template v-if="getIsCertify==4 || getIsCertify==2 " >
          <cell  title="芝麻信用" @click.native="authorization">
              <span style="font-size:12px;color:red">{{relief_limit}}</span>
              <i slot="icon" class="iconfont">&#xe60a;</i>
          </cell>
      </template>
      <template v-else>
          <cell  title="芝麻信用" @click.native="authorization">
            <span style="font-size:12px;">未授权</span>
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
</div>
    
</template>
<script>
import {XHeader,Tabbar,TabbarItem,Cell,Group } from 'vux'
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../services';

  export default {
      data() {
          return {
           user:{
               name:"网二",
               img:"../../assets//img//index//avatar.png"
           },
           zmed:false,
           relief_limit:''
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
      'getUserInfoUserId',
    ])
  },
  activated () {
        this.userZMReliefInfo(); 
  },
    mounted(){
      /* 获取当前的认证状态 */ 
      this.$store.dispatch('IsCertify');
      
    },
    methods :{
      /*获取芝麻信用减免额度*/
      
        userZMReliefInfo(){
            API.person.getUserZMReliefInfo({
                user_id: this.getUserInfoUserId
            }).then((res) => {
                if (res.body.code == 200) {
                    this.zmed = true;
                    this.relief_limit = '剩余免押金额度' + res.body.data.tmp_relief_limit + '元';
                }else{
                    this.relief_limit = '去授权';
                }
            })
        },
        authorization(){
            // if(this.zmed){
            //     return;
            // }
            this.$router.push({
                path:'/authInfo'
            })
        }
    }
  }
</script>