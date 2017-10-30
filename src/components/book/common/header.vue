<style lang="scss" >
    .book_common{
        >.vux-header{
        height: 50px;
        box-sizing: border-box;
        background-color: #2196f3!important;
        box-shadow: 0 3px 3px 0px rgba(0,0,0,0.2);
        }
        .vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button{
            color: #fff;
        }
        .vux-header .vux-header-left .left-arrow:before{
            border-color: #fff;
        }
    }
</style>

<template lang="pug">
    .book_common.
        <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">{{heder_title}}</x-header>
            <div v-transfer-dom>
                <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
            </div>    
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux';
export default {
    directives: {
    TransferDom
  },
  props:['heder_title'],
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
         menus: {
        menu1: '返回绘本首页',
        menu2: '返回租介首页'
      },
      showMenus: false
    }
  }  
}
</script>