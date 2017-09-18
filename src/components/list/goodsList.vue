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
           position: fixed;
           top: 47px;
           left: 0;
           width: 100%;
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
           &--selected{
               color: #2196f3;
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
            <span v-for="(item,index) in typeList" :class="{'goodsList_chenckList--selected':item.select}" @click="typeCheck(index)">{{item.name}}</span>
        </div>
            <div style="padding-top:50px"> 
             <list-compent :commonGoodsList="goodsList"></list-compent>
            </div>
        <div class="goodsList_noGoods" v-show="!goodsList[0]">
            <i class="iconfont">&#xe638;</i>
            <p>抱歉，没有搜索到您想要的商品</p>
        </div>
    </div>
</div>
   
</template>

<script>
import ListCompent from '../list/listCompent.vue';
import { XHeader ,Scroller} from 'vux'
import {API,getQuery} from '../../services';

export default {
  components: {
    XHeader,
    Scroller,
    ListCompent,
  },
  data () {
    return {
      goodsList:[],
      /* 搜索栏目显示的名称 */
      goodsVal:"",
      categoryId:"",
      haveData:false,//是否有未加载的数据
      searchType:0,
      page:1,
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      typeList:[
          {
              name:"默认排序",
              select:true,
          },
          {
              name:"销量优先",
              select:false,
          }
      ]
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      },
       load() {
           console.log(1);
        if (this.haveData) {
            console.log(1);
            } 
        },
      /* 选项的切换，切换默认排序和销量优先 */
      typeCheck(index){
          if(this.typeList[index].select){
              return false;
          }else{
              this.typeList[index].select=true;
              this.typeList[1-index].select=false;
          }
          if(this.categoryId){
              API.main.searchGoods({
              goods_category_id:this.categoryId,
              goods_sort:index,
              page_number:10,
              page:this.page,
          }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;
            if(this.goodsList.length==10){
                this.haveData=true;
            }
          });
          }else{
               API.main.searchGoods({
              goods_name:this.goodsVal,
              goods_sort:index,
              page_number:10,
              page:this.page,
          }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;   
            if(this.goodsList.length==10){
                this.haveData=true;
            }
          });
          }
      },
      /* 数据初始化 */
      Initialization(){
        /* 当前属于从分类中进入的接口*/
      if(this.$route.query.categoryId){
          /* 搜索栏赋值 */
          this.goodsVal=this.$route.query.name;
          this.categoryId=this.$route.query.categoryId;
          API.main.searchGoods({
              goods_category_id:this.$route.query.categoryId,
              goods_sort:this.searchType,
              page_number:10,
              page:this.page,
          }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;
            if(this.goodsList.length==10){
                this.haveData=true;
            }   
          });
      }else{
          /* 来自搜索页面 */
        this.goodsVal=this.$route.query.goods_name;
        API.main.searchGoods({
              goods_name:this.goodsVal,
              goods_sort:this.searchType,
              page_number:10,
              page:this.page,
          }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;   
            if(this.goodsList.length==10){
                this.haveData=true;
            }
          });
      }  
      }
  }
  ,mounted(){
        this.Initialization();
  }
  ,activated(){
        this.Initialization();
  }
}
</script>