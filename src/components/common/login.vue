<style  lang="scss">
#router-container{
  height: 100%;
  background-color: #fff;
}
  #login_main{
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
        .login_link{
          float: left;
          margin-left: 15px;
          color:#349ced;
          margin-top: 7.5px;
         font-size: 14px;
        }
        .login_lforget{
          float: right;
          margin-right: 15px;
          margin-top: 7.5px;
          color:#999;
         font-size: 14px;
        }
        .login{
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
            margin-top: 15px;
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
    .left-arrow{
        display: none;
    }
</style>
<template>
<div>
	<div id="login_main">
    <x-header class="login_header"  @on-click-back="routerback" :left-options="{backText:'取消',showBack: true,preventGoBack:true}">
        密码登录
        <a href="/#/register"  slot="right">注册</a>
    </x-header>
    <img src="../../assets/img/common/logo.png" class="login_img"  alt="logo">
    <group class="login_group">
      <x-input  placeholder="请输入账号"  v-model="form.userName">
          <i class="iconfont" slot="label">&#xe666;</i>
        
      </x-input>
      <x-input  placeholder="请输入密码"  type="password"  v-model="form.password">
        <i class="iconfont" slot="label">&#xe600;</i>
      </x-input>
      <x-button class="login_btn"  @click.native="login">登录</x-button>
    </group>
    
    <router-link to="/logincode" class="login_link">验证码登录</router-link>
    <router-link to="/forget" class="login_lforget">忘记密码</router-link>
    <toast v-model="toast" type="warn">{{text}}</toast>
	</div>
</div>
</template>
<script>
import {XInput, Group, XButton,XHeader,Toast } from 'vux'
/* import {API,getQuery} from '../services' */
  export default {
      data() {
        return {
           text:"",
           toast:false,
           state:true,
           form:{
            userName:"",
            password:""
           }
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
        document.title="登陆"
    },
    methods :{
      routerback(){
        this.$router.goBack();
      },
      login(){
        /* if(this.state){
           API.user.login(this.form).then(
              (resp) => {
              if(resp.body.errmsg=="登录成功"){
                localStorage.setItem("login", JSON.stringify(resp.body.result))
                this.state = false
                if( localStorage.getItem("jump")){
                  window.location.href="/"+localStorage.getItem("jump")
                }else{
                  window.location.href="/index"
                }
                
              }else{
                this.toast = !this.toast
                this.text=resp.body.errmsg
              }         
            }
          )
        } */
      },
      regist(){
        window.location.href="/regist"
      }
    }
  }
</script>