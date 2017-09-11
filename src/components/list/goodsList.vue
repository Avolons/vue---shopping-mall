<style lang="scss">
   .goodsList{
       &_main{
           height: 100%;
           background-color: #f3f3f3;
         .vux-header{
             display: flex;
             justify-content: center;
         } 
         .vux-header .vux-header-left, .vux-header .vux-header-right{
             position: relative;
             top:5px;
         } 
         .vux-header .vux-header-left .left-arrow{
             top: 0;
         }
         .vux-header-title{
             width: 0;
             margin: 0;
         }
         .vux-header-right{
             flex-grow: 1;
             margin-left: 40px;
         }
       }
       &_search{
        border-radius: 5px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        font-size: 14px;
        color: #6d6d6d;
        height: 30px;
        line-height: 30px;
        
        >i {
            float: left;
            font-size: 20px;
            color: #bfbfbf;
            margin-left: 10px;
        }
       }
       &_chenckList{
           display: flex;
           box-sizing: border-box;
           padding: 0 35px;
           justify-content: flex-start;
           height: 50px;
           line-height: 50px;
           background-color: #fff;
           >span{
               margin-right: 80px;
           }
       }
       &_noGoods{
           height: 60%;
           align-items: center;
           display: flex;
           justify-content: center;
            flex-direction: column;
           >i{
               font-size: 150px;
               color: #999;
           }
           >p{
               margin-top: 20px;
           }
       }
   }
</style>

<template>
<div>
    <div class="goodsList_main">
         <div class="help_common_title">
            <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">
                <div slot="right" class="goodsList_search" @click="routerBack">
                    <i class="iconfont">&#xe60c;</i> {{goodsVal}}
                </div>
            </x-header>
        </div> 
        <div class="goodsList_chenckList">
            <span>默认排序</span>
            <span>销量优先</span>
        </div>
        <list-compent :commonGoodsList="goodsList"></list-compent>
        <div class="goodsList_noGoods" v-show="!goodsList[0]">
            <i class="iconfont">&#xe638;</i>
            <p>抱歉，没有搜索到您想要的商品</p>
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
      goodsList:[],
      goodsVal:"",
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      /* 选项的切换，切换默认排序和销量优先 */
      typeCheck(){

      }
  }
  ,mounted(){
      this.goodsVal=this.$route.params.id;
  }
}
</script>