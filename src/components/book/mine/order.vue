<style lang="scss" scoped>
.order {
    &_container {
        height: calc(100% - 50px);
        background-color: #f1f1f1;
    }
    &_list {
        position: static;
    }
    &_single {
        &_bookList {
            transition: all 0.15s ease-in;
            &--height {
                height: 105px;
                overflow: hidden;
            }
        }
        &_shop {
            height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            align-items: center;
            font-size: 16px;
            color: #333;
            box-sizing: border-box;
            >span {
                color: #ff0000;
            }
        }
        &_bookSingle {
            height: 105px;
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            background-color: #efefef;
            border-bottom: 1px solid #fff;
            >img {
                height: 85px;
                width: 85px;
                display: block;
                margin-right: 10px;
            }
        }
        &_content {
            border: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 95px);
            height: 100%;
            padding: 0;
            >h4 {
                color: #666;
                font-size: 14px;
                line-height: 16px;
            }
            >p {
                font-size: 12px;
                color: #999;
            }
            >ul {
                height: 15px;
                display: flex;
                width: calc(100% - 95px);
                padding: 0;
                >h4 {
                    color: #666;
                    font-size: 16px;
                    line-height: 16px;
                }
                >p {
                    font-size: 12px;
                    color: #999;
                }

                >li {
                    height: 15px;
                    border-radius: 3px;
                    padding: 0 5px;
                    font-size: 13px;
                    color: #999;
                    background-color: #fbfbfb;
                    line-height: 15px;
                    margin-right: 5px;
                }
                >button {
                    width: 50px;
                    height: 15px;
                    border: 1px solid #2196f3;
                    box-sizing: border-box;
                    position: absolute;
                    right: 0;
                    font-size: 9px;
                    color: #2196f3;
                    bottom: 0;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 13px;
                }
            }
            &_haveMore {
                height: 25px;
                line-height: 25px;
                display: flex; flex-direction: column;
                justify-content: space-between;
                width: calc(100% - 95px);
                height: 100%;
                padding: 0;
                >h4 {
                    color: #666;
                    font-size: 16px;
                    line-height: 16px;
                }
                >p {
                    font-size: 12px;
                    color: #999;
                }
                >ul {
                    height: 15px;
                    display: flex;
                    position: relative;
                    >li {
                        height: 15px;
                        border-radius: 3px;
                        padding: 0 5px;
                        font-size: 16px;
                        color: #999;
                        background-color: #eee;
                        line-height: 15px;
                        margin-right: 5px;
                    }
                    >button {
                        width: 50px;
                        height: 15px;
                        border: 1px solid #2196f3;
                        box-sizing: border-box;
                        position: absolute;
                        right: 0;
                        font-size: 9px;
                        color: #2196f3;
                        bottom: 0;
                        border-radius: 5px;
                        text-align: center;
                        line-height: 13px;
                    }
                }
            }
            &_haveMore {
                height: 25px;
                line-height: 25px;
                display: flex;align-items: center;
                justify-content: center;
                border-bottom: 1px solid #efefef;
                >i {
                    font-size: 20px;color: #999;
                    background-color: #eee;
                    line-height: 15px;
                    margin-right: 5px;
                }
                >button {
                    width: 50px;
                    height: 15px;
                    border: 1px solid #2196f3;
                    box-sizing: border-box;
                    position: absolute;
                    right: 0;
                    font-size: 9px;
                    color: #2196f3;
                    bottom: 0;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 13px;
                }
            }
        }
        &_haveMore {
            height: 25px;
            line-height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #efefef;
            >i {
                font-size: 20px;
                color: #999;
            }
            &--height {
                transform: rotate(180deg);
            }
        }
        &_btnlist {
            height: 35px;
            padding: 0 15px;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            >button {
                margin-left: 15px;
                height: 25px;
                width: 75px;
                border: 1px solid #2196f3;
                color: #2196f3;
                font-size: 13px;
                line-height: 25px;
                text-align: center;
                border-radius: 4px;
            }
        }
    }
}

.bookMain_nodata {
    height: 100%;
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
</style>
<template lang="pug">
    .order_main
        header-cop(:heder_title="title")
        .order_container
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
                .bookMain_nodata(v-show="haveData")
                    i(class="iconfont")  &#xe62a; 
                    h3.bookMain_nodata_title 您还没有任何订单，快去借阅吧

                ul.order_list
                    li(v-for="item in bookList").order_single
                        .order_single_shop
                            h2 {{item.store_name}}  
                            span {{typeList[item.status]}} 
                        ul.order_single_bookList(@click="getInfo(item.order_id)",:class="{'order_single_bookList--height':!item.isHeight}")
                            li(v-for="ite in item.books").order_single_bookSingle
                                img(:src="imgFormat(ite.img_medium)").order_single_img
                                .order_single_content  
                                    h4.book_common_title.twonowarp {{ite.title}}
                                    p.book_common_info.nowarp  {{ite.summary}}
                                    ul.book_common_typeList
                                        li.book_common_typeSingle {{ite.age_range}}
                                        li.book_common_typeSingle(v-show="ite.category") {{ite.category}}  
                        .order_single_haveMore(v-show="item.books.length>1")
                            i.iconfont(@click="maxHeight(item)",:class="{'order_single_haveMore--height':item.isHeight}") &#xe619;
                        .order_single_time
                            span {{item.rent_start_time | dataform}} 至 {{item.rent_end_time | dataform }}
                            span 共1个月
                        .order_single_btnlist
                            button(type=button,@click="remind(item.order_id,1)",v-show="item.status==2")  提醒发货
                            button(type=button,@click="cancelOrder(item.order_id)",v-show="item.status==2")  取消订单
                            button(type=button,@click="download",v-show="item.status==3||item.status==5")  查看物流
                            button(type=button,@click="confrimOrder(item.order_id)",v-show="item.status==3")  确认收货
                            button(type=button,@click="confirmReturn(item)",v-show="item.status==4")  归还
                            button(type=button,@click="remind(item.order_id,2)",v-show="item.status==5")  提醒结算
                            button(type=button,@click="download",v-show="item.status==7")  去评价
                            button(type=button,@click="deletOrder(item.order_id)",v-show="item.status==8||item.status==9")  删除订单
                            button(type=button,@click="download",v-show="item.status==8")  我的评价

                toast(v-model="toast" , type="success") {{confrim}}
    </div>
</template>

<script>
import HeaderCop from '../common/header.vue';
import BScroll from 'vue-betterscroll';
import { Scroller, XImg, Masker, Actionsheet, Spinner, XButton, Group, Cell, LoadMore, Toast } from 'vux';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';

export default {
    components: {
        XImg,
        LoadMore,
        Actionsheet,
        Scroller,
        Masker,
        Spinner,
        XButton,
        Group,
        Cell,
        Toast,
        BScroll,
        HeaderCop
    },
    data() {
        return {
            title: "我的订单",
            haveData: false,//是否有数据
            page: 1,
            /* 上拉加载更多 */
            swiper_pullUp: false,//显示加载
            swiper_nodata: false,//没有更多数据
            bookList: [],//数据列表
            typeList: [
                "", "", "待发货", "待确认收货", "待归还", "待结算", "", "待评价", "已完成", "订单取消"
            ],//状态列表
            confrim: "",
            toast: false,
            scrollTop: 0,
            onFetching: false,
            page: 1,
            orderId: null,
            loading: false,
        }
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
    mounted() {
        
    },
    activated() {
        this.listRefresh();
    },
    methods: {
        maxHeight(item) {
            item.isHeight = !item.isHeight;
            let data = this.bookList;
            this.bookList = [];
            this.bookList = data;
            setTimeout(()=>{
                this.scollRefresh();
            },20);
        },
        /**
         * 进入订单详情
         */
        getInfo(id) {
            this.$router.push({
                path: '/book_bookOrderMessage/' + id
            });
        },
        /**@argument
       * 列表刷新
       */
        listRefresh() {
            this.swiper_nodata = false;
            this.page = 1;
            this.bookList = [];
            this.getList();
        },
        /**@argument
          * 获取我的计划列表
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
            API.book.orderList({
                page: this.page,
                page_number: 10,
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
            }).then((res) => {
                if (res.body.code == 200) {
                    let time = 0;
                    if (this.bookList.length != 0) {
                        time = 500;
                    }
                    setTimeout(() => {
                        if (res.body.data.length > 0) {
                            this.swiper_pullUp = false;
                            this.bookList = this.bookList.concat(res.body.data);
                            this.page++;
                        } else {
                            this.swiper_pullUp = false;
                            if (this.bookList.length >= 10) {
                                this.swiper_nodata = true;
                            }
                        }
                        this.$nextTick(() => {
                            this.scollRefresh();
                            this.loading = false;
                        });

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
        /* 删除订单 */
        deletOrder(id) {
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '确定要删除该订单吗',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    API.book.orderDel({
                        user_id: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        order_id: id,
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.confrim = "删除成功";
                            self.toast = true;

                            self.listRefresh();
                        }
                    });
                }
            });

        },
        /**取消订单 */
        cancelOrder(id) {
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '确定要取消该订单吗?',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    API.book.orderCancel({
                        user_id: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        order_id: id,
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.confrim = "取消成功";
                            self.toast = true;

                            self.listRefresh();
                        }
                    });
                }
            });
        },
        /* 确认收货 */
        confrimOrder(id) {
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '是否确认收货',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    API.book.orderreceipt({
                        user_id: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        order_id: id,
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.confrim = "确认收货成功";
                            self.toast = true;
                            /**@argument
                           * 此处进行删除后的重置工作
                           */
                            self.listRefresh();
                        }
                    });
                }
            });
        },
        /* 确认归还 */
        confirmReturn(item) {
            /* * sinceId 自提点编号
            * expressId 物流单号
            * logisticsName 物流公司简拼
            * revertId 归还地址编号
            * company 物流公司名 */
            let self = this;
            this.$router.push({ path: '/orderReturn?orderId=' + item.order_id + '&from=book&book_id=' + item.books[0].book_id });
        },
        /* 提醒发货 ,结算 1-提醒发货2-提醒结算*/
        remind(id, type) {
            let self = this;
            API.book.subOrderMsg({
                user_id: self.getUserInfoUserId,
                token: self.getUserInfoToken,
                order_id: id,
                type: type,
            }).then((res) => {
                if (res.body.code == 200) {
                    if (type == 1) {
                        self.confrim = "提醒发货成功";
                    } else {
                        self.confrim = "提醒结算成功";
                    }
                    self.toast = true;
                }
            });
        },
        /* 查看物流,评价, */
        download(id) {
            this.$router.push({
                path: '/download'
            });
        }
    }
}



</script>

