<style lang="scss">
.order_logmain{
    background-color: #f3f3f3;
    height: 100%;
}
    .order_type{
        &_list{
            padding: 10px 0;
            background-color: #fff;
        }
        &_title{
            height: 50px;
            line-height: 50px;
            text-indent: 15px;
            font-size: 15px;
            color: #272727;
        }
        &_single{
            font-size: 15px;
            color: #272727;
            position: relative;
            padding-left: 25px;
            height: 20px;
            margin-left: 15px;
            &:after{
                top: 0;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                left: 0;
                display: block;
                content:"";
                position: absolute;
                border: 1px solid #dadada;
            }
            &:before{
                height: 10px;
                width: 10px;
                background-color: #2196f3;
                position: absolute;
                left: 5px;
                top: 5px;
                display: none;
                content:"";
                border-radius: 50%;
                position: absolute;

            }
            &--selected{
                 &:after{
                    border-color: #2196f3;   
                 }
                &:before{
                    display: block;    

                }
            }
        }
    }
</style>

<template>
<div>
    <div class="order_logmain">
        <div class="help_common_title">
    <x-header 
    @on-click-back="routerBack" 
    :left-options="{backText: '',preventGoBack:true}" >物流方式
    <a slot="right">完成</a>
    </x-header>
    <h3 class="order_type_title">物流方式</h3>
    <checker class="order_type_list" v-model="val" default-item-class="order_type_single" selected-item-class="order_type_single--selected">
      <checker-item value="1">快递</checker-item>
      <checker-item value="2">上门</checker-item>
      <checker-item value="3">自提</checker-item>
      </checker>
      <h3 class="order_type_title">自提地址</h3>
  </div>
    </div>
</div>
  
</template>
<script>
import { XHeader,Group, Checker,CheckerItem } from 'vux';

export default {
  components: {
    XHeader,
     Group,
      Checker,
    CheckerItem,
  },
  data () {
    return {
        val:""
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      }
  }
}
</script>