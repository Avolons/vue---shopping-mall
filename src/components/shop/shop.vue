<style lang="scss">
    .shop_main{
        height: 100%;
        background-color: #fff;
        &_header{
            height: 115px;
            position: relative;
            overflow: hidden;
        }
        &_shopface{

        }
        &_cell{
            height: 40px;   
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 100px;
            >i{
                color: #fff;
                font-size: 20px;
                width: 10px;
            }
        }
        &_logo{
            height: 65px;
            width: 65px;
            display: block;
            position: absolute;
            left: 20px;
            bottom: 7px;  
        }
        &_title{
            font-size: 15px;
            color: #fff; 
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>

<template>
<div>
    <div class="shop_main">
        <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">店铺名称</x-header>
        </div> 
        <header class="shop_main_header">
            <img class="shop_main_shopface" src="https://static.vux.li/demo/1.jpg" alt="shopface">
            <div class="shop_main_cell" @click="goInfo()">
                <img class="shop_main_logo" src="https://static.vux.li/demo/1.jpg" alt="logo">
                <h3 class="shop_main_title">小萝卜</h3>
                <i class="iconfont">&#xe6d7;</i>
            </div>
        </header>
        <list-compent :commonGoodsList="goodsList"></list-compent>
    </div>
</div>
</template>

<script>
import ListCompent from '../list/listCompent.vue';
import { XHeader} from 'vux'

export default {
  components: {
    XHeader,
    ListCompent
  },
  data () {
    return {
      showMenus: false,
      goodsList:[1,5,7,6,8],
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      /* 跳到店铺详情页面 */
      goInfo(){
          window.location.href="/#/shopInfo/ss";
      }
  }
}
</script>