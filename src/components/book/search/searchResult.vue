
<style lang="scss" scoped>
.bookMain_nodata {
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    flex-direction: column;
    >i {
        margin-top: 150px;
        font-size: 160px;
        font-weight: 100;
        color: #dadada;
        display: block;
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
}

.bookMain_list {
    background-color: #f1f1f1 !important;
}

.bookMain_chooseList {
    height: 45px;
    background-color: #fff;
    display: flex;
    >span {
        height: 44px;
        text-align: center;
        line-height: 44px;
        color: #333;
        font-size: 16px;
        border-bottom: 1px solid #fff;
        flex: 1;
    }
    .bookMain_chooseList--sel {
        color: #2196f3;
        border-color: #2196f3;
    }
}

.bookMain_listContent {
    height: calc(100% - 95px);
}
</style>
<style lang="scss">
.vux-loading{
    .weui-toast{
        min-height:auto !important;
        height:40px;
        display:block;
        .weui-toast__content{
            display:none;
        }
        .weui-loading {
            margin:0;
        }
    }
}
</style>



<template lang="pug">
    //- 首页主体
    .bookMain_list
        header-cop(:heder_title="title")
        .bookMain_chooseList(v-show="!haveData")
            span(@click="chooseType(0)",:class="{'bookMain_chooseList--sel':chooseId==0}") 默认
            span(@click="chooseType(1)",:class="{'bookMain_chooseList--sel':chooseId==1}") 销量
            span(@click="chooseType(2)",:class="{'bookMain_chooseList--sel':chooseId==2}") 最新
        .bookMain_nodata(v-show="haveData")
            i(class="iconfont")  &#xe62a; 
            h3.bookMain_nodata_title 抱歉，没有搜索到相关图书
        .bookMain_listContent(v-show="!haveData")
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
import HeaderCop from '../common/header.vue';
import BookList from '../common/bookList.vue';
import BScroll from '../common/scrollView.vue';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';
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
        HeaderCop,
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
            haveData: false,
            /* 上拉加载更多 */
            swiper_pullUp: false,//显示加载
            swiper_nodata: false,//没有更多数据
            bookList: [],
            title: "选书",
            iconList: [],
            page: 1,
            chooseId: 0,
            dataRefrese: false,//数据是否刷新完成
            param: {
            },
            loading: false,
        }
    },
    methods: {
        chooseType(index) {
            if (index == this.chooseId) {
                return false;
            }
            if (this.dataRefrese) {
                this.chooseId = index;
            }
            this.param.order_method = index;
            this.$vux.loading.show({
                text: 'Loading'
            });
            // 隐藏
            
            this.listRefresh();
        },
        /**@argument
         * 列表刷新
         */
        listRefresh() {
            this.param.page = 1;
            this.bookList = [];
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
            this.dataRefrese = false;
            API.book.search(this.param).then((res) => {
                if (res.body.code == 200) {
                    let time = 0;
                    if (this.bookList.length != 0) {
                        time = 500;
                    }
                    setTimeout(() => {
                        if (res.body.data.length > 0) {
                            this.swiper_pullUp = false;
                            this.bookList = this.bookList.concat(res.body.data);
                            this.param.page++;
                        } else {
                            this.swiper_pullUp = false;
                            if (this.bookList.length >= 6) {
                                this.swiper_nodata = true;
                            }
                        }
                        this.$nextTick(() => {
                            this.scollRefresh();
                            this.dataRefrese = true;
                            this.loading = false;
                            this.$vux.loading.hide();
                        })
                        if (this.bookList.length == 0) {
                            this.haveData = true;
                        } else {
                            this.haveData = false;
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
    mounted() {

    },
    activated() {
        this.param = JSON.parse(this.$route.query.param);
        this.listRefresh();
    }
}
</script>
