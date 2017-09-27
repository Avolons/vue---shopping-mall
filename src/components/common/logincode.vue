<style  lang="scss">
 #login_code{
     .left-arrow{
        display: none;
    }
      width: 100%;
       .vux-header-right{
          right: 20px;
        }
        .vux-header-left{
          left:20px;
        }
        .vux-header-right,.vux-header-left{
          height: 45px;
            line-height:45px; 
            top: 0;
        }
        .vux-no-group-title{
            margin-top: 0;
        }
        .vux-header-title{
            color: #333;
            font-size: 18px;
            height: 45px ;
            line-height: 45px  ;
        }
        .vux-header{
          padding:0;
        }
        .iconfont{
          margin-right: 20px;
          font-size: 25px;
        }
        .weui-cell{
            &:after{
              display: none;
          }
          &:before{
            display: none;
          }
        }
        .weui-cells{
          &:after{
              display: none;
          }
          &:before{
            display: none;
          }
        }
        .vux-header-back,.vux-header-right{
          padding: 0;
            color: #333;
            font-size: 16px;
            &>a{
              color: #333;
              
            }
        }
        .vux-x-input{
            clear: both;
          margin-top: 7.5px;
          height: 45px;
          line-height: 45px;
          color: #c1c1c1;
          border: 1px solid #dddddd;
          box-sizing: border-box;
         font-size: 14px;
          border-radius: 5px;
        }
        .logincode_link{
          float: left;
          margin-left: 15px;
          color:#349ced;
          margin-top: 7.5px;
         font-size: 14px;
        }
        .logincode_lforget{
          float: right;
          margin-right: 15px;
          margin-top: 7.5px;
          color:#999;
         font-size: 14px;
        }
        .logincode{
        &_header{
            background-color: #fff;  
            height: 45px;
            color: #333;
            border-bottom:1px solid #dddddd;
            }
        &_img{
          display: block;
          height: 80px;;
          margin: 15px  auto;
          margin-bottom: 0;
        }
        &_group{
          box-sizing: border-box;
          padding: 15px;
        }
        &_getcode{
            width: 60%;
            float: left;
        }
        &_btn{
           height: 45px;
            background-color: #2196f3;
            margin-top: 65px;
            font-size: 15px;
            color: #fff;
             border-radius: 5px;
        }
        &_code{
          width: 37%;
          float: right;
          margin-top:7.5px!important;
          background-color: #f3f3f3;
          color: #333;
          &--disable{
            background-color: transparent;
          }
        }
        &_book{
            font-size: 13px;
            color: #999;
            margin-top:10px;
            >a{
                color: #2196f3;
            }
        }
        }
       
    }
  
</style>
<template>
    <div>
	<div id="login_code">
    <x-header class="logincode_header"   @on-click-back="routerback" :left-options="{backText:'取消',showBack: true,preventGoBack:true}">
        验证码登录
        <a href="/?#/register"  slot="right">注册</a>
    </x-header>
    <img src="../../assets/img/common/logo.png" class="logincode_img"  alt="logo">
    <group class="logincode_group">
      <x-input  placeholder="请输入手机号码" is-type="china-mobile" required  v-model="form.user_phone">
          <i class="iconfont" slot="label">&#xe666;</i>
        
      </x-input>
      <x-input  class="logincode_getcode" placeholder="请输入验证码" required type="text"  v-model="form.code">
        <i class="iconfont" slot="label">&#xe601;</i>
      </x-input>
      <x-button class="logincode_code logincode_btn" :class="{'logincode_code--disable':isDisable}" required  @click.native="getcode">{{codeText}}</x-button>
      <x-button class="logincode_btn"  @click.native="login">登录</x-button>
    </group>
    
    <a hvoderef="javascript:void(0);" @click="routerback" class="logincode_link">密码登录</a>
    <router-link to="/forget  " class="logincode_lforget">忘记密码</router-link>
    <toast v-model="toast" type="cancel">{{confrim}}</toast>
	</div>
  </div>
</template>
<script>
import {XInput, Group, XButton,XHeader,Toast } from 'vux'
import {API,getQuery} from '../../services'
  export default {
      data() {
        return {
           confrim:"",
           toast:false,
           state:true,
           type:"",
           form:{
            user_phone:"",
            code:"",
           },
           /* 验证码内容 */
           codeText:"获取验证码",
           isDisable:false,
        }
      },
    components: {
     XInput,
     Group,
     XButton,
     XHeader,
     Toast
    },
    mounted : function() {
    },
    methods :{
      routerback(){
        this.$router.goBack();
      },
      /* 获取验证码 */
      getcode(){
        /* 判断手机号是否有值 */
        if(!this.form.user_phone){
            this.confrim="请输入手机号码";
            this.toast=true;
            return false;
        }
        if(!this.isDisable){
          API.login.sendCode({
            user_phone:this.form.user_phone,
            type:"logo"
          }).then((res)=>{
            if(res.body.code==200){
              this.isDisable=true;
                this.codeText=60;
                let inter=setInterval(()=>{
                this.codeText--;
                if(this.codeText==1){
                  clearInterval(inter);
                  this.isDisable=false;
                  this.codeText="获取验证码";
                }
            },1000);
            }else{
                this.confrim=res.body.msg;
            this.toast=true; 
            }
          });
        }
      },
      /* 登录 */
      login(){
        /* 值判断 */
        if(!this.form.user_phone){
            this.confrim="请输入手机号码";
            this.toast=true;
            return false;
        }
        if(!this.form.code){
            this.confrim="请输入验证码";
            this.toast=true;
            return false;
        }
        API.login.codeLogin(this.form).then((Response)=>{
          if(Response.body.code==200){
            Response=Response.body.data;
              /* 触发vuex登录状态更改操作 */
            let token=this.md5(Response.user_id)+Response.user_id;
            let userInfo={
            loginname : Response.nickname,
            avatar : Response.face,
            id : Response.user_id,
            token : token,
          };
          localStorage.setItem("userInfo",JSON.stringify(userInfo));
          localStorage.setItem("isCertify",Response.isCertify);
          this.$store.dispatch('IsCertify');
          this.$store.dispatch('SetUserInfo',userInfo); 
           if(!this.type){
              this.$router.push({
                path:'/index/main'
              })
            }else{
              localStorage.setItem("goodsInfo","login");
              window.history.go(-2)
            }  
          }else{
             this.confrim=Response.body.msg;
            this.toast=true; 
          }
        });
      },
      regist(){
        this.$router.push({
                path:'/regist'
              });
      }
    },
    activated(){
      this.type=this.$route.query.type;
    }
  }
</script>