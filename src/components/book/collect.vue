
<style lang="scss" scoped>
.bookMain {
    /* 主体部分 */
    &_content {
        height: 100%;
    }
    &_nodata {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        >i {
            margin-top: 150px;
            font-size: 180px;
            font-weight: 100;
            color: #dadada;
            transform-origin: 50% 100%;
            animation: rote 2s 0s linear infinite;
        }
        >h3 {
            font-size: 16px;
            margin-top: 25px;
            margin-bottom: 40px;
            color: #666;
            text-align: center;
        }
        >a {
            height: 50px;
            width: 150px;
            border-radius: 10px;
            background-color: #2196f3;
            font-size: 16px;
            color: #fff;
            text-align: center;
            line-height: 50px;
        }
        @keyframes rote {
            0% {
                transform: rotate(15deg);
            }
            25% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(-15deg);
            }
            75% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(15deg);
            }
        }
    }
}
</style>


<template lang="pug">
    //- 收藏主体
    .bookMain
        .bookMain_nodata(v-show="noData")
            i(class="iconfont")  &#xe724; 
            h3.bookMain_nodata_title 您还没有收藏宝贝哦
            router-link(to="/book/main",class="bookMain_nodata_link") 去首页逛逛
        .bookMain_content(v-show="!noData")
            b-scroll(
            :data="bookList",
            pullup=true,
            pulldown=true,
            @pulldown="listRefresh",
            @scrollToEnd="getList",
            ref="scollView",
            :swiper_pullUp="swiper_pullUp",
            :swiper_nodata="swiper_nodata"
            )
                book-list(:commonBookList="bookList",type="0",:refresh.native="scollRefresh")
                //-推荐书本列表
</template>

<script>
import BookList from './common/bookList.vue';
import BScroll from 'vue-betterscroll';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../services';
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux';
export default {
    directives: {
        TransferDom
    },
    components: {
        BookList,
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem,
        BScroll
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
    data() {
        return {
            /* 上拉加载更多 */
            swiper_pullUp: false,//显示加载
            swiper_nodata: false,//没有更多数据
            bookList: [],
            title: "我的收藏",
            page: 1,
            noData: false,
            loading: false,
        }
    }, methods: {
        /**@argument
         * 列表刷新
         */
        listRefresh() {
            this.page = 1;
            this.getList();
        },
        /**@argument
         * 获取列表数据
         */
        getList() {
            if (this.loading) {
                return false;
            }
            this.loading = true;
            if (this.bookList.length >= 10) {
                this.swiper_pullUp = true;
                this.swiper_nodata = false;
            }
            API.book.getColl({
                page: this.page,
                page_number: 10,
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                start_date: window.startTime
            }).then((res) => {
                if (res.body.code == 200) {
                    let time = 0;
                    if (this.bookList.length != 0) {
                        time = 1500;
                    }
                    
                    setTimeout(() => {
                        if (res.body.data.length > 0) {
                            this.swiper_pullUp = false;
                            if(this.page==1){
                                this.bookList=[];
                            }
                            this.bookList = this.bookList.concat(res.body.data);
                            this.page++;
                        } else {
                            this.swiper_pullUp = false;
                            if (this.bookList.length >= 6) {
                                this.swiper_nodata = true;
                            }
                        }
                        this.$nextTick(() => {
                            this.scollRefresh();
                            this.loading=false;
                        });

                        if (this.bookList.length == 0) {
                            this.noData = true;
                        } else {
                            this.noData = false;
                        }

                    }, time);
                }
            })
        },
        /* 滚动列表重置刷新 */
        scollRefresh() {
            this.$refs.scollView.scroll.refresh();
        },

    },
    watch: {
        "bookList":function(item){
                if(item.length==0){
                    this.noData=true; 
                }else{
                    this.noData=false; 
                }
        }
    },
    mounted() {

    },
    activated() {
         if(window.stopReload){
            setTimeout(()=>{
                console.log(localStorage.getItem("bookScroll"));
                this.$refs.scollView.scroll.scrollTo(0,localStorage.getItem("bookScroll")-0,10);
           },20);
            window.stopReload=false;
        }else{
        this.listRefresh();}
    }
}
</script>
