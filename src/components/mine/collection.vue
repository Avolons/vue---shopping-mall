
<style lang="scss">
    .collention{
        &_main{
            background-color: #fff;
            height: 100%;
            overflow-y: auto;
             -webkit-overflow-scrolling : touch; 
            &--haveGoods{
                background-color: #fff;
            }
            .weui-loadmore_line .weui-loadmore__tips{
                background-color: #fff !important;
            }
        }
        &_nocoll{
           height: 60%;
           align-items: center;
           display: flex;
           justify-content: center;
           margin-top: 40px;
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
    <div class="help_common_title">
            <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">我的收藏</x-header>
            </div>
        <div class="collention_main" :class="{'collention_main--haveGoods':goodsList[0]}">
            <list-compent :commonGoodsList="goodsList"></list-compent>
            <div class="collention_nocoll" v-show="!goodsList[0]">
                <i class="iconfont">&#xe643;</i>
                <p>您还没有收藏宝贝哦</p>
                <router-link class="collention_nocoll_link" to="/index/main">去首页逛逛</router-link>
            </div>
            <load-more v-show="loadshow" tip="加载更多"></load-more>
            <load-more v-show="!loadshow && goodsList[0]" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
        </div>
</div>
</template>
<script>
import ListCompent from '../list/listCompent.vue';
import { XHeader,LoadMore } from 'vux'
import { mapGetters } from 'vuex'
import {API,getQuery} from '../../services'

export default {
  components: {
    XHeader,
    ListCompent,
    LoadMore
  },
  data () {
    return {
        canBottom:true,
        loadshow:false,
        haveData:false,
        page:1,
        goodsList:[1,2,6,4],
    }
  },
  computed:{
    ...mapGetters([
      'getUserInfoUserId',
      'getUserInfoToken',
    ])
  },
  methods:{
      routerBack(){
          localStorage.setItem('collection','11');
          localStorage.setItem("collentionTop",0);
          this.$router.goBack();
      },
      /* 跳转到首页 */
      goIndex(){
          this.$router.push({
                path: '/index/main'
            });
      },
      /* 获取数据 */
      getData(){
          API.person.shopCollectList({
            userId:this.getUserInfoUserId,  
            token:this.getUserInfoToken,
            page:this.page,
            pageSize:10,
      }).then((res)=>{
          this.goodsList=res.body.data.shopList.data;
          if(res.body.data.shopList.data.length==10){
                        this.haveData=true;
                        this.page++;
                    }else{
                        this.haveData=false;
                    }
      });
      },
      getMoreData(){
          if(this.haveData){
              this.loadshow=true;
               API.person.shopCollectList({
                userId:this.getUserInfoUserId,  
                token:this.getUserInfoToken,
                page:this.page,
                pageSize:10,
            }).then((res)=>{
                setTimeout(()=>{
                this.goodsList=this.goodsList.concat(res.body.data.shopList.data);
                this.canBottom=true;
                this.loadshow=false;
                },500);
                if(res.body.data.shopList.data.length==10){
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
  },
  mounted(){
      /* 收据初始化 */
      this.page=1;
      this.haveData=true;
      this.getData();
       overscroll(document.querySelector('.collention_main'));
        let self = this;
        function getScrollTop() {
            　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            　　if (document.querySelector('.collention_main')) {
                　　　　bodyScrollTop = document.querySelector('.collention_main').scrollTop;
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
            　　if (document.querySelector('.collention_main')) {
                　　　　bodyScrollHeight = document.querySelector('.collention_main').scrollHeight;
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
        document.querySelector('.collention_main').onscroll = function() {
        　　if (getScrollTop() + getWindowHeight() >= (getScrollHeight()-10)) {
                if(self.canBottom==true){
                    self.canBottom=false;
                    self.getMoreData();
                }
        　　}
        }; 
  },
  activated(){
      setTimeout(()=>{
          document.querySelector(".collention_main").scrollTop=localStorage.getItem("collentionTop");
      },50);
      overscroll(document.querySelector('.collention_main'));
      if(localStorage.getItem('collection')){
            localStorage.setItem('collection','');
            this.page=1;
            this.haveData=true;
            this.getData();
      }
      
  }
}
</script>