<style lang="scss">
    .help_common_title{
        padding-top: 47px; 
        .vux-header{
            background-color:#fff;
            border-bottom: 1px solid #dadada;
            position: fixed;
            top:0;
            left: 0;
            width: 100%;
            z-index: 9999;
            .vux-header-title{
                color: #272727; 
            }
        }
        .vux-header .vux-header-left, .vux-header .vux-header-right{
            color: #272727;
        }
        .vux-header .vux-header-left .left-arrow:before{
            border-color: #272727;
        }
    }
    .opinion_main{
        overflow: hidden;
        height: 100%;
        background-color: #f3f3f3;
        box-sizing: border-box;
        padding: 0 15px;
        .weui-cells{
            &:before{
                display: none;
            }   
            &:after{
                display: none;
            }            
        }
        &_textarea{
           border: 1px solid #dadada;    
        }
        &_title{
            font-weight: 400;
            font-size: 14px;
            color: #272727;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        &_input{
            border-radius: 5px;
            height: 40px;
            width: 100%;
            line-height: 40px;
            border: none;
            border: 1px solid #dadada;
            box-sizing: border-box;
            padding: 5px;
        }
        &_btn{
            height: 40px;
            width: 100%;
            text-align: center;
            line-height: 40px;
            font-size: 15px;
            color: #fff;
            background-color:#2196f3;
            border-radius: 5px;
            display: block;
            margin: 0 auto;
            margin-top: 20px;
        }
    }
</style>

<template>
  <div class="help_common_title">
    <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">意见反馈</x-header>
    <div class="opinion_main">
        <group>
        <x-textarea class="opinion_main_textarea" :max="100"  ></x-textarea>
        </group>
        <h3 class="opinion_main_title">留下您的联系方式，方便我们与您联系</h3>
        <input class="opinion_main_input" type="text" placeholder="手机号码/QQ/邮箱">
        <button class="opinion_main_btn" type="button">提交</button>
    </div>
  </div>
</template>
<script>
import { XHeader,Cell,Group,XButton,XInput,XTextarea } from 'vux'

export default {
  components: {
    XHeader,
     Group,
    Cell,
    XButton,
    XTextarea,
    XInput
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      }
  }
}
</script>