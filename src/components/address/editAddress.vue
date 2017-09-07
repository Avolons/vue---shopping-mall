<style lang="scss">
    .help_common_title{
        .vux-header{
            background-color:#fff;
            border-bottom: 1px solid #dadada;
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
    .editAddress_main{
        overflow: hidden;
        height: 100%;
        background-color: #f3f3f3;
        box-sizing: border-box;
        .weui-cells{
            &:before{
                display: none;
            }   
            &:after{
                display: none;
            }    
            margin: 0;        
        }
        .vux-x-textarea{
            font-size: 14px;
        }
        .vux-x-input{
            font-size: 15px;
            color: #272727;
            height: 30px;
        }
        .vux-cell-box{
            font-size: 15px;
            color: #272727;
            height: 46px;
            line-height: 33px;
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
            width: 90%;
            text-align: center;
            line-height: 40px;
            font-size: 15px;
            color: #fff;
            background-color:#2196f3;
            border-radius: 5px;
            display: block;
            margin: 0 auto;
            margin-top: 40px;
        }
        &_default{
            height: 45px;
            line-height: 45px;
            background-color: #fff;
            margin-top: 15px;
            box-sizing: border-box;
            padding: 0 15px;
            .vux-check-icon{
                float: right;
            }
            .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
                color:#2196f3;
            }
        }
    }
</style>

<template>
  <div class="help_common_title">
    <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">地址编辑</x-header>
    <div class="editAddress_main">
      <group>
        <x-input v-model="name" title="收货人" name="username"  is-type="china-name"></x-input>
        <x-input v-model="phone" title="联系电话" name="mobile"  keyboard="number" is-type="china-mobile"></x-input>
      <x-address 
      title="所在省市区" 
      v-model="address" 
      :list="addressData" 
      placeholder="请选择" 
      >
      </x-address>
      <x-textarea :rows="6" :max="40" placeholder="请填写详细地址" ></x-textarea>  
    </group>
    <div class="editAddress_main_default">
        设为默认地址
    <check-icon   :value.sync="isDefault"></check-icon>
    </div>
    <button type="button" class="editAddress_main_btn">保存</button>
    </div>
  </div>
</template>
<script>
import {CheckIcon, XHeader,Cell,Group,XButton,XInput,XAddress,XTextarea,ChinaAddressV3Data } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    XTextarea,
    XInput,
    XAddress,
    CheckIcon
  },
  data () {
    return {
    addressData:ChinaAddressV3Data,
     name:"",
     phone:"",
     address:[],
     addressDetils:"",
     isDefault:false,
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      }
  }
}
</script>