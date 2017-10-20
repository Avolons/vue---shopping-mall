<style lang="scss">
   .goodsList{
       &_List{
           height: calc(100% - 47px);
           box-sizing: border-box;
           overflow-y: auto;
           -webkit-overflow-scrolling : touch; 
           padding-top:40px;
           padding-bottom:40px;
       }
       &_main{
           height: 100%;
           background-color: #f1f1f1;
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
         .weui-loadmore_line .weui-loadmore__tips{
             background-color: #f3f3f3 !important;
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
           z-index: 999;
           position: fixed;
           top: 46px;
           left: 0;
           width: 100%;
           display: flex;
           box-sizing: border-box;
           padding: 0 35px;
           justify-content: flex-start;
           height: 41px;
           line-height: 40px;
           background-color: #f1f1f1;
           >span{
               margin-right: 60px;
               width: 100px;
               white-space: nowrap;
           }
           &--selected{
               color: #2196f3;
           }
       }
       &_noGoods{
           position: fixed;
           width: 100%;
           top: 88px;
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
            <div  class="goodsList_List"> 
             <list-compent  :commonGoodsList="goodsList"></list-compent>
                <load-more style="padding-bottom:20px;" v-show="loadshow" tip="加载更多"></load-more>
                <load-more v-show="!loadshow && goodsList.length>8 " :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
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
import { XHeader ,Scroller,LoadMore} from 'vux'
import {API,getQuery} from '../../services';

export default {
  components: {
    XHeader,
    Scroller,
    ListCompent,
    LoadMore
  },
  data () {
    return {
        canBottom:true,
        loadshow:false,
        goodsList:[],
      /* 搜索栏目显示的名称 */
        goodsVal:"",
        categoryId:"",
        haveData:true,//是否有未加载的数据
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
      /* 选项的切换，切换默认排序和销量优先 */
      typeCheck(index){
          /* 当前按钮已经处于被选中该状态 */
          if(this.typeList[index].select){
              return false;
          }else{
              this.typeList[index].select=true;
              this.typeList[1-index].select=false;
              /* 分页重置 */
              this.page=1;
              this.canBottom=true; 
          }
          /* 当前页面拥有categoryId,说明属于分类详情页面 */
          if(this.categoryId){
              API.main.searchGoods({
              goods_category_id:this.categoryId,
              goods_sort:index,
              page_number:10,
              page:this.page,
          }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;
            if(Response.body.data.shopList.data.length==10){
                this.haveData=true;
                this.page++;
            }else{
                this.haveData=false;
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
                if(Response.body.data.shopList.data.length==10){
                    this.haveData=true;
                    this.page++;
                }else{
                    this.haveData=false;
                }
             });
          }
      },
      /* 数据初始化 */
      Initialization(){
        /* 当前属于从分类中进入的接口*/
      if(this.$route.query.categoryId){
          /* 搜索栏赋值 */
          this.goodsVal='';
          this.categoryId=this.$route.query.categoryId;
          API.main.searchGoods({
              goods_category_id:this.$route.query.categoryId,
              goods_sort:this.searchType,
              page_number:10,
              page:this.page,
          }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;
            if(Response.body.data.shopList.data.length==10){
                this.haveData=true;
                this.page++;
            }else{
                this.haveData=false;
            }   
          });
      }else{
          /* 来自搜索页面 */
        this.goodsVal=this.$route.query.goods_name;
        this.categoryId="";
        API.main.searchGoods({
              goods_name:this.goodsVal,
              goods_sort:this.searchType,
              page_number:10,
              page:this.page,
          }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;   
            if(Response.body.data.shopList.data.length==10){
                this.haveData=true;
                this.page++;
            }else{
                this.haveData=false;
            }
          });
      }  
      },
      /* 加载更多 */
      getMoreData(){
            if(this.haveData){
                this.loadshow=true;
                let ajaxData={};
                if(this.categoryId){
                    ajaxData={
                        goods_category_id:this.$route.query.categoryId,
                        goods_sort:this.searchType,
                        page_number:10,
                        page:this.page,
                    }
                }else{
                    ajaxData={
                        goods_name:this.goodsVal,
                        goods_sort:this.searchType,
                        page_number:10,
                        page:this.page,
                    }
                }
                API.main.searchGoods(ajaxData).then((Response)=>{
                    setTimeout(()=>{
                    this.goodsList=this.goodsList.concat(Response.body.data.shopList.data);   
                    this.canBottom=true;
                    this.loadshow=false;
                    },500);
                    if(Response.body.data.shopList.data.length==10){
                        this.haveData=true;
                        this.page++;
                    }else{
                        this.haveData=false;
                    }
                });
            }else{
                this.canBottom=true; 
            }
      }
  }
  ,mounted(){
        overscroll(document.querySelector('.goodsList_List'));
        this.page=1;
        this.canBottom=true;
        this.haveData=true;
        this.Initialization();
        let self = this;
        function getScrollTop() {
            　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            　　if (document.querySelector(".goodsList_List")) {
                　　　　bodyScrollTop = document.querySelector(".goodsList_List").scrollTop;
            　　}
            　　if (document.documentElement) {
                　　　　documentScrollTop = document.documentElement.scrollTop;
            　　}
            　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            　　return scrollTop;
        }
        //文档的总高度
        function getScrollHeight() {
            　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            　　if (document.querySelector(".goodsList_List")) {
                　　　　bodyScrollHeight = document.querySelector(".goodsList_List").scrollHeight;
            　　}
            　　if (document.documentElement) {
                　　　　documentScrollHeight = document.documentElement.scrollHeight;
            　　}
            　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            　　return scrollHeight;
        }
        //浏览器视口的高度
        function getWindowHeight() {
            　　var windowHeight = 0;
            　　if (document.compatMode == "CSS1Compat") {
                　　　　windowHeight = document.documentElement.clientHeight;
            　　} else {
                　　　　windowHeight = document.body.clientHeight;
            　　}
            　　return windowHeight;
        }
                document.querySelector(".goodsList_List").onscroll = function() {
            　　if (getScrollTop() + getWindowHeight() >= (getScrollHeight()-10)) {
                   if(self.canBottom==true){
                        self.canBottom=false;
                        self.getMoreData();
                    }
            　　}
        };
  }
  ,activated(){
         overscroll(document.querySelector('.goodsList_List'));
        if(window.localStorage.getItem("listReload")){
            this.page=1;
            this.canBottom=true;
            this.haveData=true;
            this.Initialization();
            window.localStorage.setItem("listReload",'');
        }else{
            setTimeout(() => {
            document.querySelector(".goodsList_List").scrollTop = localStorage.getItem("scrolltop");
        }, 50);
        }
      
  }
}
</script>