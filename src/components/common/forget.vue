<style  lang="scss">
    #forget_main{
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
            line-height: 45px; 
            top: 0;
        }
        .vux-header-title{
            color: #333;
            font-size: 18px;
            height: 45px;
            line-height: 45px; 
        }
        .vux-header{
          padding:0;
        }
        .iconfont{
          margin-right: 20px;
          font-size: 25px;
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
          border-radius:5px;
        }
        .forget_link{
          float: left;
          margin-left: 15px;
          color:#349ced;
          margin-top: 7.5px;
          font-size: 14px;
        }
        .forget_lforget{
          float: right;
          margin-right: 15px;
          margin-top: 7.5px;
          color:#999;
         font-size: 14px;
        }
        .forget{
        &_header{
            background-color: #fff;  
            height: 45px;
            color: #333;
            border-bottom:1px solid #dddddd;
            }
        &_img{
          display: block;
          height: 80px;
          margin: 15px auto;
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
          margin-top:7.5px !important;
          background-color: #f3f3f3;
          color: #333;
          &--disable{
            background-color: transparent;
          }
        }
        &_book{
            font-size: 13px;
            color: #999;
            margin-top: 10px;
            >a{
                color: #2196f3;
            }
            }
        }
       
    }
    
</style>
<template>
    <div>
	<div id="forget_main">
    <x-header class="forget_header"   @on-click-back="routerback" :left-options="{backText:'取消',showBack: true,preventGoBack:true}">
        忘记密码
    </x-header>
    <group class="forget_group">
      <x-input  placeholder="请输入手机号" is-type="china-mobile"  required v-model="form.user_phone">
          <i class="iconfont" slot="label">&#xe666;</i>
        
      </x-input>
      <x-input  class="forget_getcode" placeholder="请输入验证码" required type="text"  v-model="form.code">
        <i class="iconfont" slot="label">&#xe601;</i>
      </x-input>
      <x-button class="forget_code forget_btn" :class="{'forget_code--disable':isDisable}"  @click.native="getcode">{{codeText}}</x-button>
        <x-input style="margin-top:60px" placeholder="请输入密码" required  type="password"  v-model="form.user_password">
        <i class="iconfont" slot="label">&#xe600;</i>
      </x-input>
      <x-button class="forget_btn"  @click.native="changePassword">提交</x-button>
    </group>
    
    <toast v-model="toast" type="cancel">{{confrim}}</toast>
	</div>
  </div>
</template>
<script>
import {XInput, Group, XButton,XHeader,Toast } from 'vux';
import {API,getQuery} from '../../services'
  export default {
      data() {
        return {
          /* 警告信息 */
           confrim:"",
           toast:false,
           state:true,
           /* 用户手机号，验证码，新密码 */
           form:{
            user_phone:"",
            code:"",
            user_password:""
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
            type:"back"
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
      /* 密码修改 */
      changePassword(){
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
        if(!this.form.user_password){
            this.confrim="请输入新密码";
            this.toast=true;
            return false;
        }
        API.login.updatePwd(this.form).then((res)=>{
          if(res.body.code==200){
            this.$router.push({
              path:'/login',
            })
          }else{
             this.confrim=res.body.msg;
              this.toast=true; 
          }
        },(res)=>{
            this.confrim="操作失败";
              this.toast=true; 
        });
      },
    }
  }
</script>