
<style lang="scss">
    .collention{
        &_main{
            height: 100%;
            background-color: #f3f3f3;
            &--haveGoods{
                background-color: #fff;
            }
        }
        &_nocoll{
           height: 60%;
           align-items: center;
           display: flex;
           justify-content: center;
            flex-direction: column;
           >i{
               font-size: 150px;
               color: #c1c1c1;
           }
           >p{
               margin-top: 20px;
               color: #272727;
           } 
           &_link{
               font-size: 18px;
               height: 50px;
               width: 150px;
               line-height: 50px;
               color: #fff;
               text-align: center;
               border-radius: 5px;
               background-color: #2196f3;
               margin-top: 40px;
           }
        }
    }
</style>

<template>
<div>
<div class="collention_main" :class="{'collention_main--haveGoods':goodsList[0]}">
    <div class="help_common_title">
     <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">我的收藏</x-header>
    </div>
    <list-compent :commonGoodsList="goodsList"></list-compent>
    <div class="collention_nocoll" v-show="!goodsList[0]">
        <i class="iconfont">&#xe643;</i>
        <p>您还没有收藏宝贝哦</p>
        <router-link class="collention_nocoll_link" to="/index/main">去首页逛逛</router-link>
    </div>
</div>
</div>
</template>
<script>
import ListCompent from '../list/listCompent.vue';
import { XHeader } from 'vux'

export default {
  components: {
    XHeader,
    ListCompent
  },
  data () {
    return {
      goodsList:[1,2,6,4],
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      },
    goIndex(){
        window.location.href="/#/index/main";
    },

  }
}
</script>