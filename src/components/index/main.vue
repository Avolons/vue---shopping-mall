
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
    width: 450px;
    font-size: 0;
    border-bottom: 1px solid #f3f3f3;
    background-color: #fff;
}

.main_typelist_item {
    width: 90px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
}

.main_typelist_bottomline {
    height: 2px;
    width: 90px;
    position: absolute;
    background-color: #2196f3;
    left: 0;
    bottom: 0;
    transition: all 0.2s ease-in;
}


/* 选中滚动条函数 */

@for $i from 1 through 10 {
    .main_typelist_item:nth-of-type(#{$i})[class*="main_typelist_item--selected"]~.main_typelist_bottomline {
        left: (90px * $i) - 90px;
    }
}

.main {
    &_swiper {}
    &_listbox {
        position: fixed;
        top: 91px;
        width: 100%;
        height: calc(100% - 144px);
        overflow-y: auto;
        background-color: #dadada;
    }
    &_typelist {
        margin-top: 50px;
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
        &>img {
            display: block;
            margin: 0 auto;
            height: 100%;
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
            white-space: nowrap;
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
            color: #272727;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
        }
        &_price {
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
                <div class="main_typelist_item" v-for="item in typeList" :class="{'main_typelist_item--selected':item.click}" @click="typeselect(item.type)">
                    <span>{{item.name}}</span>
                </div>
                <div class="main_typelist_bottomline"></div>
            </div>
        </scroller>
        <div class="main_listbox">
            <!-- 轮播图组件 -->
            <swiper v-show="currentType==0" class="main_swiper" dots-position="center" :aspect-ratio="300/800" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerlist" :key="index">
                    <img :src="item">
                </swiper-item>
            </swiper>
            <!-- 热门商品 -->
            <div class="main_hot" v-show="currentType==0">
                <img src="../../assets/img/index/hot.png" alt="hot">
                <span></span>
            </div>
            <ul class="main_hot_list" v-show="currentType==0">
                <li v-for="i in 4" class="main_hot_single">
                    <div class="main_hot_img">
                        <img src="https://static.vux.li/demo/1.jpg" alt="">
                    </div>
                    <div class="main_hot_text">
                        <h2 class="main_hot_title">小萝卜健身器材</h2>
                        <h2 class="main_hot_price">￥500.00/月</h2>
                    </div>
                </li>
            </ul>
            <!-- 推荐商品 -->
            <div class="main_recommend" v-show="currentType==0">
                <img src="../../assets/img/index/recommend.png" alt="hot">
                <span></span>
            </div>
            <ul class="main_recommend_list" v-show="currentType==0">
                <li v-for="i in 6" class="main_recommend_single">
                    <div class="main_recommend_img">
                        <img src="https://static.vux.li/demo/1.jpg" alt="">
                    </div>
                    <div class="main_recommend_text">
                        <h2 class="main_recommend_title">小萝卜健身器材</h2>
                        <h2 class="main_recommend_price">￥500.00/月</h2>
                    </div>
                </li>
            </ul>
            <ul class="main_recommend_list" >
                <li v-for="i in 6" class="main_recommend_single">
                    <div class="main_recommend_img">
                        <img src="https://static.vux.li/demo/1.jpg" alt="">
                    </div>
                    <div class="main_recommend_text">
                        <h2 class="main_recommend_title">小萝卜健身器材</h2>
                        <h2 class="main_recommend_price">￥500.00/月</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Scroller, Swiper, SwiperItem, Spinner, XButton, Group, Cell, LoadMore } from 'vux'

export default {
    components: {
        Scroller,
        Spinner,
        XButton,
        Group,
        Cell,
        LoadMore,
        Swiper,
        SwiperItem
    },
    data() {
        return {
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
            /* 当前被选中列表 */
            currentType: 0,
            /* 分类数据集合 */
            typeList: [{
                name: "精选",
                type: 0,
                click: true,
            }, {
                name: "玩具",
                type: 1,
                click: false,
            }, {
                name: "跑步机",
                type: 2,
                click: false,
            }, {
                name: "动感单车",
                type: 3,
                click: false,
            }, {
                name: "轮椅",
                type: 4,
                click: false,
            },]
        }
    },
    methods: {
        onSwiperItemIndexChange() {

        },
        /* 列表点击切换函数 */
        typeselect(index) {
            for (let item of this.typeList) {
                item.click = false;
            }
            this.currentType=index;
            this.typeList[index].click = true;
            var data = this.typeList;
            this.typeList = null;
            this.typeList = data;
        },
        /* 列表滚动选择函数 */
        onScroll(pos) {
            this.scrollTop = pos.top
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
        }

    }
}
</script>
