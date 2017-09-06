<style  lang="scss">
    #register_main{
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
        .register_link{
          float: left;
          margin-left: 15px;
          color:#349ced;
          margin-top: 7.5px;
         font-size: 14px;
        }
        .register_lforget{
          float: right;
          margin-right: 15px;
          margin-top: 7.5px;
          color:#999;
         font-size: 14px;
        }
        .register{
        &_header{
            background-color: #fff;  
            height: 45px;
            color: #333;
            border-bottom:1px solid #dddddd;
            }
        &_img{
          display: block;
          height: 160px;;
          margin: 30px  auto;
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
	<div id="register_main">
    <x-header class="register_header"   @on-click-back="routerback" :left-options="{backText:'取消',showBack: true,preventGoBack:true}">
        注册
    </x-header>
    <group class="register_group">
      <x-input  placeholder="请输入账号"  v-model="form.userName">
          <i class="iconfont" slot="label">&#xe666;</i>
        
      </x-input>
      <x-input  class="register_getcode" placeholder="请输入验证码"  type="password"  v-model="form.password">
        <i class="iconfont" slot="label">&#xe601;</i>
      </x-input>
      <x-button class="register_code register_btn"  @click.native="getcode">获取验证码</x-button>
        <x-input style="margin-top:60px" placeholder="请输入密码"  type="password"  v-model="form.password">
        <i class="iconfont" slot="label">&#xe600;</i>
      </x-input>
        <p class="register_book">注册即同意 <a href="">《租介用户协议》</a></p> 
      <x-button class="register_btn"  @click.native="login">立即注册</x-button>
    </group>
    
    <toast v-model="toast" type="warn">{{text}}</toast>
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