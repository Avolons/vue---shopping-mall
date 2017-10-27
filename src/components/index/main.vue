
<style lang="scss">
body {
    height: 100%;
    background-color: #f1f1f1;
    .weui-tabbar {
        background-color: #fff;
    }
}

.main_typelist_list_fixed{
        -webkit-overflow-scrolling: touch;
        height: 40.5px;
        padding-left: 15px;
        font-size: 0;
        white-space: nowrap;
        overflow-x: auto;
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
}
.main_container .main_typelist_box {
    height: 40px;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    overflow-y: auto;
}

.main_typelist_item {
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    margin-right: 35px;
    &--selected{
        color: #2196f3;
    }
}






/* 选中滚动条函数 */



@keyframes hongbao {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-30deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(30deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

.main {
    &_fun{
       &_list{
           background-color: #fff;
           height: 80px;
           box-sizing: border-box;
           padding: 12.5px 30px 0 30px;
           display: flex;
           justify-content: space-between;
       }
       &_single{
           display: flex;
           flex-direction: column;
           align-items: center;
           >img{
               display: block;
               height: 35px;
               width: 35px;
           }
           >h3{
               font-size: 12px;
               color: #333;
               margin-top: 7.5px;
           }
       }
    }
    &_channel{
        &_list{
            margin-bottom: 20px;
        }
        &_single{
            margin-top: 10px;
        }
        &_goodsList{
            white-space: nowrap;
            padding: 10px 15px;
            overflow-x: auto;
            width: 100%;
            box-sizing: border-box;

            background-color: #fff;
        }
        &_goodsSingle{
            display: inline-block;
            width: 110px;
            &:not(:last-of-type){
                margin-right: 25px;
            }
        }
        &_goodsTitle{
            font-size: 13px;
            color: #666;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 15px 0;
        }
        &_goodsText{
            font-size: 12px;
            text-align: center;
            color: #e31111;
            >span{
                font-size: 11px;
                color: #666;
                text-decoration: line-through;
            }
        }
        &_goodsImg{
            display: black;
            height: 110px;
            width: 110px;
        }
        &_img{
            width: 100%;
            display: block;
        }
    }
    &_card {
       &_title{
           top: 5.08%;
           color: #fff;
           font-size: 15px;
           text-align: center;
           position: absolute;
           width: 100%;
           text-indent: 10px;
       }
       &_price{
           top: 12.92%;
           color: #fff;
           font-size: 25px;
           text-align: center;
           position: absolute;
           width: 100%;
           >span{
               font-size: 15px;
           }
       }
       &_list{
            position: absolute;
            height: 42.37%;
            bottom: 16%;
            left: 13.63%;
            width: 72.72%;
            overflow-y: auto;
       }
       &_single{
            margin-bottom: 10px;
            position: relative;
            overflow: hidden;
            >img{
                display: block;
                width: 100%;
                left: 0;
                top: 0;
            }
            >div{
                display: flex;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                >h3{
                    position: relative;
                    z-index: 1;
                    width: 28.75%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ff6000;
                    font-size: 20px;
                }
                >h4{
                    color: #ff6000;
                    font-size: 15px;
                    position: relative;
                    z-index: 1;
                    width: 71.25%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                >span{
                    position: absolute;
                    z-index: 1;
                    font-size: 10px;
                    right: 0px;
                    bottom: 3px;
                    color: #ff6000;
                    transform: scale(0.5);
                }
            }
       }
        &_fixed {
            position: fixed;
            top: 50%;
            right: 10px;
            height: 50px;
            animation: hongbao 0.5s ease-in 1s infinite;
            &--select {
                animation-name: nouu;
            }
        }
        &_content {
            position: absolute;
            top: 43%;
            width: 60%;
            left: 50%;
            color: #fff;
            transform: translateX(-50%);
            >h3 {
                font-size: 27px;
                color: #fcec2b;
                text-align: center;
                margin-bottom: 10px;
            }
            >p {
                font-size: 12px;
            }
        }
        &_mask {
            width: 70%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            >img {
                width: 100%;
            }
        }
        &_maskClose {
            height: 30px;
            width: 30px !important;
            position: absolute;
            right: 10px;
            top: -15px;
        }
        &_gouse{
            position: absolute;
            bottom: 1%;
            background-color: transparent;
            height: 14.28%;
            width: 89.63%;
            display: block;
            left:5.45%;
        }
    }
    &_container {
        .weui-loadmore_line .weui-loadmore__tips {
            background-color: #f1f1f1 !important;
        }
    }
    &_swiper {
        .vux-swiper-item {
            position: relative;
            width: 100%;
        }
        .vux-swiper-item img {
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    &_listbox {
        height: calc(100% - 191px);
        box-sizing: border-box;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        background-color: #f1f1f1;
        /* background-color: #f3f3f3; */
        .vux-slider>.vux-indicator>a>.vux-icon-dot.active,
        .vux-slider .vux-indicator-right>a>.vux-icon-dot.active {
            background-color: #2196f3;
        }
        .list_compent_list_box {
            -webkit-overflow-scrolling: touch;
            height: calc(100% - 192px);
            position: fixed;
            top: 141px;
            width: 100%;
            overflow-y: auto;
            padding-bottom: 40px;
            .weui-loadmore_line .weui-loadmore__tips {
                background-color: #f1f1f1 !important;
            }
        }
    }
    &_typelist {
        /* -webkit-overflow-scrolling: touch;
        z-index: 9999;
        left: 0;
        width: 100%; */
    }
    &_header {
        box-sizing: border-box;
        padding: 10px 20px;
        height: 50px;
        background-color: #fff;
        display: flex;
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
        color: #666;
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
        text-align: right;
        line-height: 30px;
        font-size: 25px;
        color: #bfbfbf;
        >i {
            font-size: 20px;
        }
    }
    &_hot {
        color: #2196f3;
        background-color: #fff;
        height: 45px;
        border-bottom: 5px solid #f1f1f1;
        position: relative;
        line-height: 45px;
        display: flex;
        align-items: center;
        font-size: 17px;
        padding-left: 15px;
        box-sizing: border-box;
        >i{
            margin-left: 12.5px;
        }
    }
    &_recommend {
        @extend .main_hot;
    }
    &_hot {
        &_list {
            margin-bottom: 15px;
            background-color: #f1f1f1;
        }
        &_single {
            display: flex;
            margin-bottom: 5px;
            background-color: #fff;

        }
        &_img {
            height: 150px;
            width: 150px;
            display: block;
            flex-grow: 0;
            padding: 15px;
            padding-right: 17.5px;
            flex-shrink: 0;
            &>img {
                height: 150px;
                width: 150px;
                display: block;
            }
        }
        &_address{
            font-size: 11px;
            color: #999;
            display: flex;
            align-items: flex-end;
            flex-shrink: 0;
        }
        &_contentbox{
            display: flex;
            flex-grow: 1;
            align-items: flex-end;
        }
        &_typeList{
            flex-grow: 1;
            flex-shrink: 1;
        }
        &_type{
            height: 17px;
            line-height: 15px;
            border: 1px solid #2196f3;
            box-sizing: border-box;
            padding: 0 5px;
            border-radius: 3px;
            display: inline-block;
            font-size: 11px;
            color: #2196f3;
            margin-right: 5px;
        }
        &_title {
            width: 100%;
            color: #666;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 400;
        }
        &_price {
            margin-top: 12.5px;
            width: 100%;
            color: #e81010;
            font-size: 15px;
        }
        &_oldprice{
            color: #666;
            font-size: 13px;
            text-decoration: line-through;
        }
        &_text {
            width: 100%;
            box-sizing: border-box;
            padding-top: 40px;
            flex-grow: 1;
            flex-shrink: 1;
            padding-right: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            flex-direction: column;
            padding-bottom: 20px;
        }
    }
    &_recommend {
        &_list {
            background-color: #f1f1f1;
            margin-bottom: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        &_single {
            background-color: #fff;
            width: 49.5%;
            margin-bottom: 5px;
            box-sizing: border-box;
            padding: 10px;
            flex-direction: column;
            flex-wrap: wrap;
            display: flex;
        }
        &_img {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            &>img {
                margin: 0 auto;
                width: 100%;
                display: block;
            }
        }
        &_title {
            margin-top: 20px;
            color: #666;
            font-size: 13px;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
        }
        &_typeList{
            height: 45px;
            display: flex;
            align-items: flex-end;
            flex-wrap: wrap;
        }
        &_type{
            height: 17px;
            line-height: 15px;
            border: 1px solid #2196f3;
            box-sizing: border-box;
            padding: 0 5px;
            border-radius: 3px;
            display: inline-block;
            font-size: 11px;
            color: #2196f3;
            margin-right: 5px;
        }
        &_price {
            flex-grow: 1;
            margin-top: 10px;
            color: #e81010;
            font-size: 12px;
        }
        &_address{
            flex-shrink: 1;
            font-size: 11px;
            color: #999;
            display: flex;
            align-items: flex-end;
        }
        &_box{
            display: flex;
        }
        &_oldprice{
            color: #666;
            font-size: 11px;
            text-decoration: line-through;
        }
        &_text {
            width: 100%;
            flex-wrap: wrap;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
        }
    }
}
.main_zjDownload{
    height: 50px;
    background-color: #eeeeee;
    position: relative;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    >img{
        position: absolute;
        display: block;
        left: 50%;
        height: 100%;
        transform: translateX(-50%);
    }
    >a{
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        z-index:999;
        background-color: transparent;
    }
}
</style>
<template>
    <div class="main_container">
        <header class="main_header">
            <div class="main_search" @click="gosearch">
                <i class="iconfont">&#xe60c;</i> 请输入商品名
            </div>
            <span class="main_menu" @click="golist()">
                <i class="iconfont">&#xe606;</i>
            </span>
        </header>
            <div class="main_typelist_box">
                 <ul>
                <li >
                    <ul class="main_typelist_list_fixed">
                        <li class="main_typelist_item" v-for="(item,index) in typeList" :class="{'main_typelist_item--selected':item.click}" @click="typeselect(index,item.goods_category_id)">
                            <span>{{item.hot_label_name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
             <div class="main_zjDownload">
                 <a  v-if="iswexin" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie"></a>
                  <a v-else-if="isIOS" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie"></a>
                 <a  v-else href="https://www.zujiekeji.cn/download/app-guanwang-release-1.1.9.apk"></a>
                <img src="../../assets/img/common/download.png" alt="">
            </div>
        <div class="main_listbox">

            <!-- 轮播图组件 -->
            <swiper v-show="currentType==0" loop class="main_swiper" dots-position="center" height="auto" :aspect-ratio="300/750" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerlist" :key="index">
                    <img @click="bannerClick(item.extras,item.bannerType)" :src="imgFormat(item.imagePath)">
                </swiper-item>
            </swiper>
            <!-- table功能区域 -->
            <!-- 1商品列表 2精选商家 3运营活动 -->
            <ul v-show="currentType==0" class="main_fun_list">
                <li v-for="item in iconList" class="main_fun_single" @click="funClick(item.name,item.type,item.icon_id)">
                    <img :src="imgFormat(item.img)" alt="icon">
                    <h3>{{item.name}}</h3>
                </li>
            </ul>

            <!-- 频道列表区域 -->
            <ul v-show="currentType==0" class="main_channel_list">
                <li v-for="item in channelList" class="main_channel_single" >
                    <img class="main_channel_img" @click="channelClick(item.title,item.channel_id)"   :src="imgFormat(item.bg_image)" alt="channel">
                    <ul class="main_channel_goodsList">
                        <li @click="goInfo(ite.goods_id)" v-for="ite in item.goods" class="main_channel_goodsSingle">

                            <img class="main_channel_goodsImg" :src="imgFormat(ite.goods_main_pic)" alt="">
                            <h3 class="main_channel_goodsTitle">{{ite.goods_name}}</h3>
                            <p  v-if="!ite.act_price" class="main_channel_goodsText"> ￥{{ite.rent_price}}/{{timeMap[ite.rent_period_type]}}
                            </p>
                            <p v-else class="main_channel_goodsText"> ￥{{ite.act_price}}/{{timeMap[ite.rent_period_type]}}
                                <span>￥{{ite.rent_price}}/{{timeMap[ite.rent_period_type]}}</span>
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- 热门商品,只能放3个 -->
            <div class="main_hot" v-show="currentType==0" @click="funClick('热门单品',1)">
                热门单品 <i class="iconfont">&#xe6d7;</i>
            </div>
            <ul class="main_hot_list" v-show="currentType==0">
                <li v-for="item in hotGoodsList" class="main_hot_single" @click="goInfo(item.goodsId)">
                    <div class="main_hot_img">
                        <x-img default-src="http://oss.zujiekeji.cn/img/default.png" :src="imgFormat(item.goodsFace)" :webp-src="item.goodsFace"  class="ximg-demo"  :offset="-100" container=".main_listbox"></x-img>
                    </div>
                    <div class="main_hot_text">
                        <h2 class="main_hot_title twonowarp">{{item.goodsName}}</h2>
                        <div class="main_hot_contentbox">
                            <ul class="main_hot_typeList">
                                <li class="main_hot_type"  v-for="ite in item.serviceSign">
                                    {{ite}}
                                </li>
                            </ul>
                           <!--  <ul class="main_hot_typeList">
                                <li class="main_hot_type" v-show="item.goods_is_free_deposit==1">
                                    免押金
                                </li>
                                <li class="main_hot_type" v-show="item.goods_is_free_shipping==1">
                                    包邮
                                </li>
                                <li class="main_hot_type" v-show="item.goods_is_deductible==1">
                                    免赔
                                </li>
                                <li class="main_hot_type" v-show="item.goods_is_door==1">
                                    送货上门
                                </li>
                                <li class="main_hot_type" v-show="item.goods_is_since==1">
                                    自提
                                </li>
                                <li class="main_hot_type" v-show="item.goods_is_follow_lease==1">
                                    随租随还
                                </li>
                            </ul> -->
                            <h2 class="main_hot_address">{{item.region}}</h2>
                        </div>
                        <h2 v-if="!item.act_price" class="main_hot_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                        <h2 v-else class="main_hot_price">
                            ￥{{item.act_price}}/{{timeMap[item.rent_period_type]}}
                            <span  class="main_hot_oldprice">
                                ￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}
                            </span>
                        </h2>
                    </div>
                </li>
            </ul>

             <!-- 新品特惠 -->
            <div class="main_recommend" v-show="currentType==0" @click="funClick('新品特惠',1)">
                新品特惠 <i class="iconfont">&#xe6d7;</i>
            </div>
            <!-- 新品特惠商品列表 -->
            <ul class="main_recommend_list" v-show="currentType==0">
                <li v-for="item in newGoodsList" class="main_recommend_single" @click="goInfo(item.goodsId)">
                    <div class="main_recommend_img">
                        <x-img default-src="http://oss.zujiekeji.cn/img/default.png" :src="imgFormat(item.goodsFace)" :webp-src="item.goodsFace"  class="ximg-demo"  :offset="-100" container=".main_listbox"></x-img>
                    </div>
                    <div class="main_recommend_text">
                        <h2 class="main_recommend_title">{{item.goodsName}}</h2>
                        <ul class="main_recommend_typeList">
                                <li class="main_recommend_type"  v-for="ite in item.serviceSign">
                                    {{ite}}
                                </li>
                        </ul>
                        <div class="main_recommend_box">
                            <h2 v-if="!item.act_price" class="main_recommend_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                        <h2 v-else class="main_recommend_price">￥{{item.act_price}}/{{timeMap[item.rent_period_type]}}
                            <span  class="main_recommend_oldprice">
                                ￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}
                            </span>
                        </h2>
                        <h2 class="main_recommend_address">{{item.region}}</h2>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- 推荐商品 -->
            <div class="main_recommend" v-show="currentType==0">
                推荐商品
            </div>
            <!-- 推荐商品列表 -->
            <ul class="main_recommend_list" v-show="currentType==0">
                <li v-for="item in recGoodsList" class="main_recommend_single" @click="goInfo(item.goodsId)">
                    <div class="main_recommend_img">
                        <x-img default-src="http://oss.zujiekeji.cn/img/default.png" :src="imgFormat(item.goodsFace)" :webp-src="item.goodsFace"  class="ximg-demo"  :offset="-100" container=".main_listbox"></x-img>
                    </div>
                    <div class="main_recommend_text">
                        <h2 class="main_recommend_title">{{item.goodsName}}</h2>
                        <ul class="main_recommend_typeList">
                                <li class="main_recommend_type"  v-for="ite in item.serviceSign">
                                    {{ite}}
                                </li>
                        </ul>
                        <div class="main_recommend_box">
                        <h2 v-if="!item.act_price" class="main_recommend_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                        <h2 v-else class="main_recommend_price">￥{{item.act_price}}/{{timeMap[item.rent_period_type]}}
                            <span  class="main_recommend_oldprice">
                                ￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}
                            </span>
                        </h2>
                        <h2 class="main_recommend_address">{{item.region}}</h2>
                        </div>
                    </div>
                </li>
            </ul>
            <load-more v-show="currentType==0" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
            <div v-show="currentType!=0" class="list_compent_list_box">
                <list-compent style="" :commonGoodsList="currentGoods"></list-compent>
                <load-more v-show="loadshow" tip="加载更多"></load-more>
                <load-more v-show="!loadshow || currentType==0" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
            </div>
            <!-- 红包 -->
            <div class="main_card">
                <masker v-show="cardShow" :fullscreen=true color="000" :opacity="0.5">
                    <div class="main_card_mask" slot="content">
                        <img src="../../assets/img/common/money.png" alt="">
                        <img @click="closeCard" class="main_card_maskClose" src="../../assets/img/common/close.png" alt="">
                        <h2 class="main_card_title">新人大礼包</h2>
                        <span class="main_card_price"><span>￥</span>30</span>
                        <ul class="main_card_list">
                            <li class="main_card_single" v-for="item in cardobj.list">
                                <img src="../../assets/img/common/maincard.png" alt="">
                                <div>
                                    <h3>￥{{item.amount}}</h3>
                                    <h4>全场通用</h4>
                                    <span>新人专享</span>
                                </div>
                            </li>
                        </ul>
                        <button @click="gouese" type="button" class="main_card_gouse"></button>
                    </div>
                </masker>
            </div>
        </div>
    </div>
</template>

<script>
import ListCompent from '../list/listCompent.vue';
import { Scroller, XImg,Swiper, SwiperItem, Spinner, XButton, Group, Cell, LoadMore, Masker } from 'vux'
import { API, getQuery } from '../../services';
import { mapGetters } from 'vuex';


export default {
    components: {
        XImg,
        Masker,
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
            cardUrl: "",
            /* 红包内容 */
            cardContent: {
                price: 10,
                text: "",
            },
            /* 新人红包是否显示 */
            cardShow: false,
            /*是否可以进行下拉加载 */
            canBottom: true,
            loadshow: false,
            swiperItemIndex: 0,
            showList1: true,
            scrollTop: 0,
            onFetching: false,
            bottomCount: 20,
            /* 轮播图数据集合 */
            bannerlist: [

            ],
            cardobj:{
                title:"新人大礼包",
                price:"30",
                list:[
                    {
                        amount:"10",
                        title:"全场通用",
                        type:"新人专享",
                    },
                    {
                        amount:"20",
                        title:"全场通用",
                        type:"新人专享",
                    },
                ]
            },
            /* 时间周期对照表 */
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },
            /* 当前被选中列表 */
            currentType: 0,
            /* 分类数据集合 */
            typeList: [],
            /* 首页热租商品 */
            hotGoodsList: [],
            /* 首页频道列表 */
            channelList:[],
            /* 首页标签 */
            iconList:[],
            /* 新品特惠商品列表 */
            newGoodsList:[],
            /* 首页推荐商品 */
            recGoodsList: [],
            /* 根据首页商品标签页长度进行商品数据列表缓存，防止重复请求数据 */
            goodsList: [],
            /* 当前被选中状态的商品信息列表 */
            currentGoods: [],
        }
    },
    activated() {
        if(sessionStorage.getItem("mainReload")){
            window.location.href="/#/index/main";
            sessionStorage.setItem("mainReload",'');
        }
        overscroll(document.querySelector('.main_typelist_box'));
        overscroll(document.querySelector('.main_listbox'));
        overscroll(document.querySelector('.list_compent_list_box'));
        setTimeout(() => {
            document.querySelector(".main_listbox").scrollTop = localStorage.getItem("scrolltop");
            document.querySelector(".list_compent_list_box").scrollTop = localStorage.getItem("scrolltop");
        }, 50);
    },
    computed: {
         iswexin(){
      var ua = window.navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
          } else {
            return false;
          }
      },
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
            'getIsCertify',
            'getUserInfoUserId'
        ]),
        isIOS(){
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
          /*  */
          if(isiOS){
            return true;
          }else{
            return false;
          }
        }
    },
    methods: {
        /* 频道点击函数 */
        channelClick(name,id){
            let scrollTop = document.querySelector(".main_listbox").scrollTop;
            localStorage.setItem("scrolltop", scrollTop);
            this.$router.push({
                path:'/chaneel?name='+name+"&id="+id,
            })
        },
        /* 功能table点击函数 */
        funClick(name,type,id=1){
            let scrollTop = document.querySelector(".main_listbox").scrollTop;
            localStorage.setItem("scrolltop", scrollTop);
            if(type==1){
                this.$router.push({
                    path:'/moreHot/?name='+name+'&id='+id+'&type=icon'
                })
            }else if(type==2){
                this.$router.push({
                    path:'/selected/?id='+id
                })
            }else{
                window.location.href="/down.html";
            }
        },
        /* 是否显示活动红包 */
        isShowCard() {
            API.card.getCouponActive().then((res) => {
                if (res.body.code == 200) {
                    this.smallCard = true;
                    this.cardUrl = res.body.data.url;
                }
            })
        },
        /* 获取红包 */
        getCard() {
            API.card.remindCard({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.cardobj.list=res.body.data
                    this.cardShow = true;
                }
            });
        },
        gouese(){
            this.cardShow=false;
            this.$router.push({
                path: '/card'
            });
        },
        /* 红包点击 */
        cardClick() {
            window.location.href = this.cardUrl;
        },
        closeCard() {
            this.cardShow = false;
        },
        onSwiperItemIndexChange() {

        },
        /* 进入商品详情 */
        goInfo(id) {
            if (document.querySelector(".main_listbox")) {
                let scrollTop = document.querySelector(".main_listbox").scrollTop;
                localStorage.setItem("scrolltop", scrollTop);
            }
            localStorage.setItem("goodsInfo", "11");
            this.$router.push({
                path: '/goodsInfo/' + id
            });

        },
        /* 列表点击切换函数 */
        /* 根据焦点位置判断 */
        typeselect(index, id) {
            let scrollTop = document.querySelector(".main_listbox").scrollTop;
            localStorage.setItem("scrolltop", scrollTop);
            for (let item of this.typeList) {
                item.click = false;
            }
            /* 传入对应的商品信息id */
            this.currentType = index;
            this.typeList[index].click = true;
            var data = this.typeList;
            this.typeList = null;
            this.typeList = data;
            this.getData(id, index);
        },
        /* 列表滚动选择函数 */
        onScroll(pos) {
            this.scrollTop = pos.top
        },
        /* 根据列表id获取当前列表对应数据 */
        getData(id, index) {

            document.querySelector(".main_listbox").scrollTop = 0;
            if (this.goodsList[index] || index == 0) {
                this.currentGoods = this.goodsList[index];
                return false;
            }
            API.main.searchGoodsCategory({
                chooseId: id,
                page: 1,
            }).then((Response) => {
                this.goodsList[index] = Response.body.data.shopList.data;
                document.querySelector(".list_compent_list_box").scrollTop = 100;
                document.querySelector(".list_compent_list_box").scrollTop = 0;
                if (Response.body.data.shopList.data.length == 10) {
                    this.typeList[index].havedata = true;
                } else {
                    this.typeList[index].havedata = false;
                }
                this.currentGoods = this.goodsList[index];
            });
        },
        /* 分页获取更多数据 */
        getMoreData() {
            if (this.currentType == 0 || !this.typeList[this.currentType].havedata) {
                this.canBottom = true;
                return false;
            } else {
                this.loadshow = true;
                API.main.searchGoodsCategory({
                    chooseId: this.typeList[this.currentType].goods_category_id,
                    page: this.goodsList[this.currentType].length / 10 + 1
                }).then((Response) => {
                    setTimeout(() => {
                        this.loadshow = false;
                        this.goodsList[this.currentType] = this.goodsList[this.currentType].concat(Response.body.data.shopList.data);
                        this.currentGoods = this.goodsList[this.currentType];
                        this.canBottom = true;
                    }, 500);
                    if (Response.body.data.shopList.data.length == 10) {
                        this.typeList[this.currentType].havedata = true;
                    } else {
                        this.typeList[this.currentType].havedata = false;
                    }
                });
            }

        },
        /* 列表页跳转 */
        golist() {
            this.$router.push({
                path: '/list'
            });

        },
        /* 跳转到搜索页面 */
        gosearch() {
            this.$router.push({
                path: '/search'
            });
        },
        /* 跳转多更多商品页面 */
        getMoreHot() {
            this.$router.push({
                path: '/moreHot'
            });

        },
        /* 轮播图点击函数 */
        bannerClick(id, type) {
            /* 1：店铺 2：商品 3：url */
            if (type == 1) {
                this.$router.push({
                    path: '/shop/' + id
                });
            } else if (type == 2) {
                localStorage.setItem("goodsInfo", "11");
                this.$router.push({
                    path: '/goodsInfo/' + id
                });
            } else {
                if(id.indexOf('wap')>-1){
                    id=id.replace("wap","m");
                }
                window.location.href = id+'?type=H5';
            }
        },
    },
    mounted() {
       /* 可拖动返回列表滚动初始化 */
       overscroll(document.querySelector('.main_typelist_box'));
        overscroll(document.querySelector('.main_listbox'));
        overscroll(document.querySelector('.list_compent_list_box'));
        /* 获取轮播图信息 */
        API.main.getBanner({
        }).then((Response) => {
            this.bannerlist = Response.body.data.bannerList;
        });
        /* 获取频道信息 */
        API.newMain.channelList().then((res)=>{
            if(res.body.code==200){
                this.channelList=res.body.data;
            }
        });
        /* 获取活动标签信息 */
        API.newMain.iconList().then((res)=>{
            if(res.body.code==200){
                this.iconList=res.body.data;
            }
        });
        /* 获取新品特惠信息 */
        API.newMain.newGoods().then((res)=>{
            if(res.body.code==200){
                this.newGoodsList=res.body.data.data;
            }
        })
        /* 获取首页标签 */
        API.main.hotTagLabel().then((Response) => {
            let firstLabel = {
                hot_label_name: "精选",
                click: true
            }
            let shopList = Response.body.data.shopList;
            for (let item of shopList) {
                item.click = false;
            }
            shopList.splice(0, 0, firstLabel);
            this.goodsList = new Array(shopList.length);
            this.typeList = shopList;
             /* 防止数据卡死 */
            /* setTimeout((res) => {
                document.querySelectorAll(".main_typelist_item")[1].click();
                document.querySelectorAll(".main_typelist_item")[0].click();
            }, 500); */
        });
        /* 获取热门商品 */
        API.main.goodsHot({
            recomandId: 3,
            page_number: 3
        }).then((Response) => {
            this.hotGoodsList = Response.body.data.shopList.data;
        });
        /* 获取新人红包 */
        this.isShowCard();
        this.getCard();
        /* 获取推荐商品 */
        API.main.goodsIndexRecom({
            page_number: 30,
        }).then((Response) => {
            this.recGoodsList = Response.body.data.shopList.data;
        });
        /* 下拉加载更多操作 */
        let self = this;
        let mainbox = document.querySelector(".list_compent_list_box");
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
        function getWindowHeight() {
            var windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }
            return windowHeight - 104;
        }
        document.querySelector(".list_compent_list_box").onscroll = function() {
            if ((getScrollTop() + getWindowHeight()) >= (getScrollHeight() - 10)) {
                if (self.canBottom == true) {
                    self.canBottom = false;
                    self.getMoreData();
                }
            }
        };


    }
}
</script>
