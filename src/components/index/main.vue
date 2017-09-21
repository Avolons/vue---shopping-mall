
<style lang="scss">
body {
    background-color: #f3f3f3;
    .weui-tabbar {
        background-color: #fff;
    }
}

.main_container .main_typelist_box {
    height: 40px;
    position: relative;
    width: 560px;
    font-size: 0;
    border-bottom: 1px solid #f3f3f3;
    background-color: #fff;
}

.main_typelist_item {
    width: 70px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
}

.main_typelist_bottomline {
    height: 2px;
    width: 70px;
    position: absolute;
    background-color: #2196f3;
    left: 0;
    bottom: 0;
    transition: all 0.2s ease-in;
}


/* 选中滚动条函数 */

@for $i from 1 through 10 {
    .main_typelist_item:nth-of-type(#{$i})[class*="main_typelist_item--selected"]~.main_typelist_bottomline {
        left: (70px * $i) - 70px;
    }
}

.main {
    &_swiper {
        .vux-swiper-item{
            position: relative;
            width: 100%;
        }
        .vux-swiper-item img{
           height: 100%;
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%,-50%);
        }
    }
    &_listbox {
        margin-top: 91px;
        width: 100%;
        height: calc(100% - 142px);
        overflow-y: auto;
        /* background-color: #f3f3f3; */
        .vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{
            background-color:#2196f3;
        }
        .list_compent_list_box{
         height:calc(100% - 142px);
         position:fixed;
         top:91px;
         width:100%;
         overflow-y: auto;
         padding-bottom: 40px;
         .weui-loadmore_line .weui-loadmore__tips{
             background-color: #fff !important;
         }
        }
    }
    &_typelist {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
    }
    &_header {
        box-sizing: border-box;
        padding: 10px 20px;
        height: 50px;
        background-color: #fff;
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        border-bottom: 1px solid #f3f3f3;
    }
    &_search {
        width: 85%;
        border-radius: 5px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        font-size: 14px;
        color: #6d6d6d;
        height: 30px;
        line-height: 30px;
        flex-grow: 1;
        >i {
            float: left;
            font-size: 20px;
            color: #bfbfbf;
            margin-left: 10px;
        }
    }
    &_menu {
        width: 40px;
        flex-grow: 0;
        display: block;
        text-align: left;
        line-height: 30px;
        font-size: 25px;
        color: #bfbfbf;
        >i{
           font-size: 20px; 
        }
    }
    &_hot {
        background-color: #f6f6f6;
        height: 45px;
        border-bottom: 1px solid #dddddd;
        position: relative;
        &>img {
            display: block;
            margin: 0 auto;
            height: 100%;
        }
        &_more{
            position: absolute;
            right: 15px;
            display: block;
            top: 50%;
            transform: translateY(-50%);
            background: #2196f3;
            border-radius: 50%;
            font-size: 16px;
            color: #fff;
            width: 20px;
            height: 20px;
            line-height: 18px;
            text-align: center;
        }
    }
    &_recommend {
        @extend .main_hot;
    }
    &_recommend {}
    &_hot {
        &_list {
            background-color: #fff;
        }
        &_single {
            height: 130px;
            display: flex;
            border-bottom: 1px solid #f3f3f3;
        }
        &_img {
            height: 130px;
            width: 130px;
            display: block;
            flex-grow: 0;
            box-sizing: border-box;
            padding: 15px;
            &>img {
                height: 100px;
                width: 100px;
                display: block;
            }
        }
        &_title {
            color: #666;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 400;
        }
        &_price {
            color: #f80000;
            font-size: 15px;
        }
        &_text {
            box-sizing: border-box;
            padding: 20px 10px;
            flex-grow: 1;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
        }
    }
    &_recommend {
        &_list {
            background-color: #fff;
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        &_single {
            width: 49%;
            box-sizing: border-box;
            padding: 10px;
        }
        &_img {
            display: block;
            box-sizing: border-box;
            &>img {
                margin: 0 auto;
                width: 100%;
                display: block;
            }
        }
        &_title {
            margin-top: 5px;
            
            color: #272727;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
        }
        &_price {
            margin-top: 5px;
            color: #f80000;
            font-size: 15px;
        }
        &_text {
            box-sizing: border-box;
            flex-direction: column;
        }
    }
}
</style>
<template>
    <div class="main_container">
        <header class="main_header">
            <span class="main_menu" @click="golist()">
                <i class="iconfont">&#xe606;</i>
            </span>
            <div class="main_search" @click="gosearch">
                <i class="iconfont">&#xe60c;</i> 请输入商品名
            </div>
        </header>
        <scroller class="main_typelist" lock-y :scrollbar-x=false>
            <div class="main_typelist_box">
                <div class="main_typelist_item" v-for="(item,index) in typeList" :class="{'main_typelist_item--selected':item.click}" @click="typeselect(index,item.goods_category_id)">
                    <span>{{item.hot_label_name}}</span>
                </div>
                <div class="main_typelist_bottomline"></div>
            </div>
        </scroller>
        <div class="main_listbox">
            <!-- 轮播图组件 -->
            <swiper v-show="currentType==0" loop class="main_swiper" dots-position="center"  height="200px"  @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
                <swiper-item  class="swiper-demo-img" v-for="(item, index) in bannerlist" :key="index">
                    <img @click="bannerClick(item.extras,item.bannerType)" :src="item.imagePath">
                </swiper-item>
            </swiper>
            <!-- 热门商品 -->
            <div class="main_hot" v-show="currentType==0">
                <img src="../../assets/img/index/hot.png" alt="hot">
                <span @click="getMoreHot" class="main_hot_more">></span>
            </div>
            <ul class="main_hot_list" v-show="currentType==0">
                <li v-for="item in hotGoodsList" class="main_hot_single" @click="goInfo(item.goodsId)">
                    <div class="main_hot_img">
                        <img :src="item.goodsFace" alt="img">
                    </div>
                    <div class="main_hot_text">
                        <h2 class="main_hot_title twonowarp">{{item.goodsName}}</h2>
                        <h2 class="main_hot_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                    </div>
                </li>
            </ul>
            <!-- 推荐商品 -->
            <div class="main_recommend" v-show="currentType==0">
                <img src="../../assets/img/index/recommend.png" alt="hot">
                <span></span>
            </div>
            <ul class="main_recommend_list" v-show="currentType==0">
                <li v-for="item in recGoodsList" class="main_recommend_single" @click="goInfo(item.goodsId)">
                    <div class="main_recommend_img">
                        <img :src="item.goodsFace" alt="img">
                    </div>
                    <div class="main_recommend_text">
                        <h2 class="main_recommend_title">{{item.goodsName}}</h2>
                        <h2 class="main_recommend_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                    </div>
                </li>
            </ul>
            <load-more v-show="currentType==0" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
            <div v-show="currentType!=0" class="list_compent_list_box">
                <list-compent style=""  :commonGoodsList="currentGoods"></list-compent>
                <load-more  v-show="loadshow" tip="加载更多"></load-more>
                <load-more v-show="!loadshow || currentType==0" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
            </div>
        </div>
    </div>
</template>

<script>
import ListCompent from '../list/listCompent.vue';
import { Scroller, Swiper, SwiperItem, Spinner, XButton, Group, Cell, LoadMore } from 'vux'
import {API,getQuery} from '../../services';


export default {
    components: {
        Scroller,
        Spinner,
        XButton,
        Group,
        Cell,
        LoadMore,
        Swiper,
        SwiperItem,
        ListCompent
    },
    data() {
        return {
            canBottom:true,
            loadshow:false,
            swiperItemIndex: 0,
            showList1: true,
            scrollTop: 0,
            onFetching: false,
            bottomCount: 20,
            /* 轮播图数据集合 */
            bannerlist: [
                'https://static.vux.li/demo/1.jpg',
                'https://static.vux.li/demo/1.jpg',
                'https://static.vux.li/demo/1.jpg',
            ],
            /* 时间周期对照表 */
            timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},
            /* 当前被选中列表 */
            currentType: 0,
            /* 分类数据集合 */
            typeList: [],
            /* 首页热租商品 */
            hotGoodsList:[],
            /* 首页推荐商品 */
            recGoodsList:[],
            /* 根据首页商品标签页长度进行商品数据列表缓存，防止重复请求数据 */
             goodsList:[],
             /* 当前被选中状态的商品信息列表 */ 
             currentGoods:[],
        }
    },
    methods: {
        onSwiperItemIndexChange() {

        },
         /* 进入商品详情 */
           goInfo(id){
               window.location.href="/#/goodsInfo/"+id;
           },
        /* 列表点击切换函数 */
        /* 根据焦点位置判断 */
        typeselect(index,id) {
            for (let item of this.typeList) {
                item.click = false;
            }
            /* 传入对应的商品信息id */
            this.currentType=index;
            this.typeList[index].click = true;
            var data = this.typeList;
            this.typeList = null;
            this.typeList = data;
            this.getData(id,index);
        },
        /* 列表滚动选择函数 */
        onScroll(pos) {
            this.scrollTop = pos.top
        },
       /* 根据列表id获取当前列表对应数据 */
       getData(id,index){
           
           document.querySelector(".main_listbox").scrollTop=0;
           if(this.goodsList[index]||index==0){
               this.currentGoods=this.goodsList[index];
               return false;
           }
           API.main.searchGoodsCategory({
                chooseId:id ,
                page:1, 
           }).then((Response)=>{
            this.goodsList[index]=Response.body.data.shopList.data;
             document.querySelector(".list_compent_list_box").scrollTop=100;
             document.querySelector(".list_compent_list_box").scrollTop=0;
            if(Response.body.data.shopList.data.length==10){
                this.typeList[index].havedata=true;
            }else{
               this.typeList[index].havedata=false; 
            }
            this.currentGoods=this.goodsList[index];
        });
       },
       /* 分页获取更多数据 */
       getMoreData(){
           if(this.currentType==0 || !this.typeList[this.currentType].havedata){
               this.canBottom=true;
                return false;
           }else{
               this.loadshow=true;
                   API.main.searchGoodsCategory({
                    chooseId:this.typeList[this.currentType].goods_category_id,  
                    page:this.goodsList[this.currentType].length/10+1
                }).then((Response)=>{
                    setTimeout(()=>{
                    this.loadshow=false;
                    this.goodsList[this.currentType]=this.goodsList[this.currentType].concat(Response.body.data.shopList.data);
                    this.currentGoods=this.goodsList[this.currentType];
                    this.canBottom=true;
                    },500);
                    if(Response.body.data.shopList.data.length==10){
                        this.typeList[this.currentType].havedata=true;
                    }else{
                        this.typeList[this.currentType].havedata=false;  
                    }
                });
           }
           
       },
        /* 列表页跳转 */
        golist(){
            window.location.href="/#/list";
        },
        /* 跳转到搜索页面 */
        gosearch(){
            window.location.href="/#/search";
        },
        changeList() {
            this.showList1 = false
            this.$nextTick(() => {
                this.$refs.scroller.reset({
                    top: 0
                })
            })
        },
        getMoreHot(){
            window.location.href="/#/moreHot"
        },
        /* 轮播图点击函数 */
        bannerClick(id,type){
            /* 1：店铺 2：商品 3：url */
            if(type==1){
                window.location.href="/#/shop/"+id;
            }else if(type==2){
                window.location.href="/#/goodsInfo/"+id;
            }else{
                window.location.href="/#/";
            }
        }
    },
    mounted(){
        /* 获取轮播图信息 */
        API.main.getBanner().then((Response)=>{
            this.bannerlist=Response.body.data.bannerList;
        });
        /* 获取首页标签 */
        API.main.hotTagLabel().then((Response)=>{
            let firstLabel={
                 hot_label_name: "精选",
                click:true
            }
            let shopList=Response.body.data.shopList;
            for(let item of shopList) {
              item.click=false;
            }
            shopList.splice(0,0,firstLabel);
            this.goodsList=new Array(shopList.length);
            this.typeList=shopList;
            setTimeout((res)=>{
                 document.querySelectorAll(".main_typelist_item")[1].click();
                 document.querySelectorAll(".main_typelist_item")[0].click();
            },500);
        });        
        /* 获取热门商品 */
        API.main.goodsHot({
            recomandId:3,
            page_number:4
        }).then((Response)=>{
            this.hotGoodsList=Response.body.data.shopList.data;
        });
        /* 获取推荐商品 */
        API.main.goodsIndexRecom({
            page_number:30,
        }).then((Response)=>{
            this.recGoodsList=Response.body.data.shopList.data;
        });
        let self = this;
        let mainbox=document.querySelector(".list_compent_list_box");
        function getScrollTop() {
            　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            　　if (mainbox) {
                　　　　bodyScrollTop = mainbox.scrollTop;
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
            　　if (mainbox) {
                　　　　bodyScrollHeight = mainbox.scrollHeight;
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
            　　return windowHeight-104;
        }
                document.querySelector(".list_compent_list_box").onscroll = function() {
            　　if ( (getScrollTop() + getWindowHeight()) >= (getScrollHeight()-10)) {
                if(self.canBottom==true){
                    self.canBottom=false;
                    self.getMoreData();
                }
            　　}
        };
    }
}
</script>
