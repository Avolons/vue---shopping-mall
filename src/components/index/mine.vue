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
            <img class="mine_avatar"   src="../../assets//img/index/avatar.png"  alt="avatar">
            <span class="mine_name">{{user.name}}</span>
        </header>
   
     <group style="margin-top:0.6rem;">
      <cell  title="我的收藏" is-link>
          <i slot="icon" class="iconfont">&#xe605;</i>
      </cell>
      <cell  title="我的地址" is-link link="/editAddress">
          <i slot="icon" class="iconfont">&#xe71d;</i>
      </cell>
    </group>
    <group style="margin-top:0.6rem">
      
      <cell  title="实名认证" is-link link="/authentication">
          <span style="font-size:12px;padding-right:20px">未认证</span>
          <i slot="icon" class="iconfont">&#xe63c;</i>
      </cell>
      <cell  title="芝麻信用" is-link link="/">
          <i slot="icon" class="iconfont">&#xe60a;</i>
      </cell>
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
/* import {API,getQuery} from '../services'; */
  export default {
      data() {
          return {
           user:{
               name:"网二",
               img:"../../assets//img//index//avatar.png"
           },
            form:{
              memberId:"",
              offSet:0,
              pageSize:5,
              equipment:"original",
              orderCondition:"createDatetime",
              orderDirection:"desc"
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
    mounted : function() {
       /*  document.title="用户中心"
        if( localStorage.getItem("login")){
          this.name= JSON.parse(localStorage.getItem("login")).username
          this.form.memberId = JSON.parse(localStorage.getItem("login")).id
          //检查是否关注公众号
          if(localStorage.getItem("openid")){
          API.user.checkIsSubScribe({"openid":localStorage.getItem("openid")})
          .then(
            (resp)=>{
               this.head=resp.body.result.headImgUrl
            }
            )
         }
        }
        let that = this
        API.user.order(that.form).then(
          (resp) => {
           that.orders= resp.body.result.datas
           for(let i=0;i<that.orders.length;i++){
              if(that.orders[i].orderStatus=="1"){
                that.orders[i].orderStatus="未支付" 
                that.nopay.push(that.orders[i])
                this.daifuk++
              }
              else if(that.orders[i].orderStatus=="2"){
                that.orders[i].orderStatus="已取消" 
                that.cansel.push(that.orders[i])
              }
              else{
                that.orders[i].orderStatus="已完成 " 
                that.finish.push(that.orders[i])
                this.yiwancheng++
              }
           }
          }
        )
        if(getQuery.getQueryString("state")=="yiwancheng"){
          this.show_1=false
          this.show_2=false
          this.show_3=true
          this.demo1="已完成"
        }
 */
    },
    methods :{
      loginot(){
        localStorage.removeItem("login")
        window.location.href="/login"
      },
    }
  }
</script>