<style lang="scss" scoped>

.orderAction_main_type > .orderAction_main_icon{
    text-align: center;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: #2196f3;
    padding: 0;
    flex-grow:0;
    border-radius: 10px;
    position: relative;
    >i{
        color: #fff;
        font-size: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
    .main_since_text{
        justify-content: flex-start;
        .main_since_price{
            margin-left: 30px;
        }
    }
    .order{
        &_container{
            height: calc(100% - 100px);
            background-color: #f1f1f1;
        }
        &_list{
            position: static;
        }
        &_single{
            &_cardType{
                height: 44px;
                font-size: 15px;
                color: #333;
                align-items: center;
                display: flex;
                justify-content: space-between;
                padding: 0 15px;
                box-sizing: border-box;
                >span{
                    color: #ff0000;
                }
            }
            &_bookList{
                transition: all 0.15s ease-in;
                &--height{
                    height:105px ;
                    overflow: hidden;
                }
            }
            &_shop{
                height: 44px;
                display: flex;
                justify-content: space-between;
                padding: 0 15px;
                align-items: center;
                font-size: 16px;
                color: #333;
                box-sizing: border-box;
                >span{
                    color: #ff0000;
                }
            }
            &_bookSingle{
                height: 105px;
                box-sizing: border-box;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                background-color: #efefef;
                border-bottom: 1px solid #fff;
                >img{
                    height: 85px;
                    width: 85px;
                    display: block;
                    margin-right: 10px;
                }
            
            }
            &_content{
                border: none;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: calc(100% - 95px);
                height: 100%;
                padding: 0;
                >h4{
                    color: #666;
                    font-size: 14px;
                    line-height: 16px;
                }
                >p{
                    font-size: 12px;
                    color: #999;
                }
                >ul{
                    height: 15px;
                    display: flex;
                    position: relative;
                    >li{
                        height: 15px;
                        border-radius: 3px;
                        padding: 0 5px;
                        font-size: 11px;
                        color: #999;
                        background-color: #fbfbfb;
                        line-height: 15px;
                        margin-right: 5px;
                    }
                    >button{
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
            &_haveMore{
                height: 25px;
                line-height: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom: 1px solid #efefef;
                >i{
                    font-size: 20px;
                    color: #999;
                }
                &--height{
                    transform: rotate(180deg);
                }
            }
            &_btnlist{
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: #fff;
                height: 44px;
                padding: 0 15px;
                box-sizing: border-box;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                >button{
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
</style>
<style lang="scss">

 .weui-textarea{
    font-size: 15px;
}
</style>

<template lang="pug">
    .order_main
        header-cop(:heder_title="title")
        .order_container
            b-scroll(
                :data="bookList.books",
                @pulldown="getList",
                pulldown=true,
                ref="scollView"
                )
                .orderAction_main
                    .orderAction_main_type
                        .orderAction_main_icon
                        
                            i(v-show="bookList.status==2" class="iconfont") &#xe60f; 
                            i(v-show="bookList.status==3" class="iconfont") &#xe739; 
                            i(v-show="bookList.status==4" class="iconfont") &#xe7b3; 
                            i(v-show="bookList.status==5" class="iconfont") &#xe620;
                            i(v-show="bookList.status==7" class="iconfont") &#xe623; 
                            i(v-show="bookList.status==8" class="iconfont") &#xe613;
                            i(v-show="bookList.status==9" class="iconfont") &#xe635; 

                        .orderAction_main_confrim
                            h2 {{titleArray[bookList.status].title}}
                            p(v-show="titleArray[bookList.status].message") {{titleArray[bookList.status].message}}
                .main_since_single
                    .main_since_text
                        h2.main_since_title {{bookList.address_name}}
                        h2.main_since_price {{bookList.mobile}}
                    p.main_since_intr.twonowarp {{bookList.province}}{{bookList.city}}{{bookList.district}}{{bookList.address}}
                .order_single
                    .order_single_shop
                        h2 {{bookList.store_name}}  
                    ul.order_single_bookList(:class="{'order_single_bookList--height':!bookList.isHeight}")
                        li(v-for="ite in bookList.books").order_single_bookSingle
                            x-img(:src="imgFormat(ite.img_medium)",
                                default-src="http://oss.zujiekeji.cn/img/default.png",
                                :offset="100",
                                container=".order_list").order_single_img
                            .order_single_content  
                                h4.book_common_title.twonowarp {{ite.title}}
                                p.book_common_info.nowarp  {{ite.summary}}
                                ul.book_common_typeList
                                    li.book_common_typeSingle {{ite.age_range}}
                                    li.book_common_typeSingle(v-show="ite.category") {{ite.category}}  
                    .order_single_haveMore(v-show="bookList.books.length>1")
                        i.iconfont(@click="maxHeight(bookList)",:class="{'order_single_haveMore--height':bookList.isHeight}") &#xe619;
                    .order_single_time
                        span {{bookList.rent_start_time | dataform}} 至 {{bookList.rent_end_time | dataform }}
                        span 共1个月
                    .order_single_cardType 借阅计划
                        span {{bookList.plan_name}}
                    group.
                        <x-textarea readonly v-model="bookList.user_message" placeholder="买家留言"></x-textarea>
                    ul.order_number_collection
                        <h3>订单编号：{{bookList.orderCardId}}</h3>
                        li(v-show="bookList.order_generation_time") 订单生成时间：{{bookList.order_generation_time | orderdata }} 
                        li(v-show="bookList.order_pay_time") 订单支付时间：{{bookList.order_pay_time | orderdata }} 
                        li(v-show="bookList.cancel_time") 订单取消时间：{{bookList.cancel_time | orderdata }} 
                        li(v-show="bookList.order_shipping_time") 订单发货时间：{{bookList.order_shipping_time | orderdata }} 
                        li(v-show="bookList.order_delivery_time") 确认收货时间：{{bookList.order_delivery_time | orderdata }} 
                        li(v-show="bookList.order_goods_refund_time") 订单归还时间：{{bookList.order_goods_refund_time | orderdata }} 
                   
            .order_single_btnlist
                button(type=button,@click="remind(bookList.order_id,1)",v-show="bookList.status==2")  提醒发货
                button(type=button,@click="cancelOrder(bookList.order_id)",v-show="bookList.status==2")  取消订单
                button(type=button,@click="download",v-show="bookList.status==3||bookList.status==5")  查看物流
                button(type=button,@click="confrimOrder(bookList.order_id)",v-show="bookList.status==3")  确认收货
                button(type=button,@click="confirmReturn(bookList)",v-show="bookList.status==4")  归还
                button(type=button,@click="remind(bookList.order_id,2)",v-show="bookList.status==5")  提醒结算
                button(type=button,@click="download",v-show="bookList.status==7")  去评价
                button(type=button,@click="deletOrder(bookList.order_id)",v-show="bookList.status==8||bookList.status==9")  删除订单
                button(type=button,@click="download",v-show="bookList.status==8")  我的评价

            toast(v-model="toast" , type="success") {{confrim}}
    </div>
</template>

<script>
import HeaderCop from '../common/header.vue';
import BScroll from '../common/scrollView.vue';
import { Scroller, XImg, Masker, XTextarea,Actionsheet, Spinner, XButton, Group, Cell, LoadMore, Toast } from 'vux';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';

export default {
    components: {
        XImg,
        Actionsheet,
        Group,
        Cell,
        Toast,
        BScroll,
        HeaderCop,
        XTextarea
    },
    data() {
        return {
            title: "我的订单",
            haveData: false,//是否有数据
            confrim: "",
            bookList: {
                status:0,
                books:[]
            },//数据列表
            typeList:[
                "","","待发货","待确认收货","待归还","待结算","","待评价","已完成","取消" 
            ],//状态列表
            titleArray: [
                {},{},
                {
                    title: "等待商家发货",//待发货
                    message: ""
                },
                {
                    title: "商家已发货",//待收货
                    message: "请及时确认收货"
                },
                {
                    title: "待归还",//待归还
                    message: ""
                },
                {
                    title: "待结算中",//待结算
                    message: "等待商家确认收货并出具结算单"
                },
                {},
                {
                    title: "订单待评价",//待评价
                    message: ""
                },
                {
                    title: "订单已完成",//评价完成
                    message: ""
                },
                {
                    title: "订单已取消",//订单关闭
                    message: ""
                }
            ],
            toast: false,
            scrollTop: 0,
            page: 1,
            orderId: null,
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
        /* 获取orderId */
        this.orderId=this.$route.params.id;
        this.getList();
    },
    methods: {
        maxHeight(item){
            item.isHeight=!item.isHeight;
            let data=this.bookList;
            this.bookList=[];
            this.bookList=data;
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
            this.page = 1;
            this.bookList = [];
            this.getList();
        },
        /**@argument
          * 获取我的计划列表
          */
        getList() {
            API.book.orderDetail({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                order_id:this.orderId
            }).then((res) => {
               if(res.body.code==200){
                    this.bookList=res.body.data;
                    
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
                    API.book.orderComment({
                        user_id: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        order_id: id,
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.loading = true;
                            self.confrim = "删除成功";
                            self.toast = true;
                            /**@argument
                             * 此处进行删除后的重置工作
                             */
                            self.getList();
                        }
                    });
                }
            });

        },
        /**取消订单 */
        cancelOrder(id){
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
                            self.loading = true;
                            self.confrim = "取消成功";
                            self.toast = true;
                            /**@argument
                             * 此处进行删除后的重置工作
                             */
                            self.getList();
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
                            self.getList();
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

