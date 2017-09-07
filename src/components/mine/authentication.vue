<style lang="scss">
    .help_main{
        .weui-cells__title{
            background-color: #f3f3f3;
            margin: 0;
            height: 50px;
            line-height: 50px;
        }
        .weui-cell{
            height: 45px;
            line-height: 45px;
        }
        .weui-cell__ft{
            font-size: 15px;
        }
    }
    .authent_main{
        height: 100%;
        background-color: #f3f3f3;
        .weui-label{
            font-size: 15px;
        }
        .vux-x-input{
            height: 30px;
        }
        .weui-input{
            font-size: 15px;    
            font-weight: 400;
        }
        .weui-cells{
            margin: 0;
            &:after{
                display: none;
            }
            &:before{
                display: none;
            }
        }
        &_confrim{
            margin: 20px 0;
            font-size: 15px;
            color: #999;
            text-indent: 40px;
        }
        &_btn{
            width: 90%;
            background-color: #2196f3;
            color: #fff;
            font-size: 15px;
            line-height: 40px;
            height: 40px;
            text-align: center;
            margin: 0 auto;
            border-radius: 5px;
            display: block;
        }
    }
</style>

<template>
    <div class="help_common_title">
        <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">实名认证</x-header>
        <div class="authent_main">
            <group>
                <x-input placeholder="请输入您的真实姓名" :required=true  title="真实姓名" v-model="data.name"></x-input>
                <x-input placeholder="请输入您的身份证号码" :required=true  title="身份证号" v-model="data.code"></x-input>
            </group>
            <p class="authent_main_confrim" >为了保障您的安全，请进行实名认证</p>
            <button class="authent_main_btn" type="button">立即认证</button>
        </div>
    </div> 
</template>

<script>
import { XHeader,Cell,Group,XInput } from 'vux'

export default {
  components: {
    XHeader,
     Group,
    Cell,
    XInput
  },
  data () {
    return {
      data: {
        name: '',
        code: ''
      },
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      }
  }
}
</script>