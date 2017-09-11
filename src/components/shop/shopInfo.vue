<style lang="scss">
    .shopInfo_main{
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
        height: 100%;
        background-color: #fff;
        &_header{
            height: 115px;
            position: relative;
            margin-bottom: 80px;
        }
        &_shopface{
            height: 115px;
            width: 100%;
        }
        &_cell{
            position: absolute;
            top: 80px;
            height: 100px;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        &_logo{
            height: 65px;
            width: 65px;
            display: block;
        }
        &_title{
            font-size: 15px;
            color: #272727; 
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>

<template>
<div>
    <div class="shopInfo_main">
        <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">店铺详情</x-header>
        </div> 
        <header class="shopInfo_main_header">
            <img class="shopInfo_main_shopface" src="https://static.vux.li/demo/1.jpg" alt="shopface">
            <div class="shopInfo_main_cell">
                <img class="shopInfo_main_logo" src="https://static.vux.li/demo/1.jpg" alt="logo">
                <h3 class="shopInfo_main_title">小萝卜</h3>
                
            </div>
        </header>
        <group>
            <cell title="开店时间" value="2017-08-29" ></cell>
            <cell title="所在地" value="浙江省杭州市" ></cell>
        </group>
    </div>
</div>
</template>

<script>
import { XHeader,Cell,Group } from 'vux'

export default {
  components: {
    XHeader,
    Cell,
    Group 
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
      }
  }
}
</script>