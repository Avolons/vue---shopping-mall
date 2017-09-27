
<style lang="scss">
.main_since {
    &_list {}
    &_single {
        background-color: #fff;
        max-height: 110px;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    &_text {
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        color: #272727;
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        flex-grow: 0;
    }
    &_title {
        font-weight: 400;
    }
    &_price {
        font-weight: 400;
    }
    &_intr {
        flex-grow: 1;
        font-size: #666;
        font-size: 15px;
        line-height: 25px;
    }
}

.orderAction {
    &_main {
        &_card {
            .weui-cell__ft {
                color: #f80000 !important;
                font-size: 15px;
            }
        }
        .help_common_title {
            padding-top: 47px;
            .vux-header {
                background-color: #fff;
                border-bottom: 1px solid #dadada;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 9999;
                .vux-header-title {
                    color: #272727;
                }
            }
            .vux-header .vux-header-left,
            .vux-header .vux-header-right {
                color: #272727;
            }
            .vux-header .vux-header-left .left-arrow:before {
                border-color: #272727;
            }
        }
        height: 100%;
        background-color: #f1f1f1;
        overflow-y: auto;
        -webkit-overflow-scrolling : touch; 
        .weui-cells {
            margin: 0;
        }
        .weui-cell:before {
            left: 0;
        }
        .main_since_single {
            margin: 0;
            border-top: 1px solid #eee;
        }
        &_address {
            background-color: #fff;
            .weui-cell {
                &:nth-of-type(1) {
                    height: 54px;
                }
                &:nth-of-type(2) {
                    height: 34px;
                }
            }
            .nodefault {
                height: 34px !important;
            }
        }
        &_timeRange {
            box-sizing: border-box;
            padding: 0 15px;
            height: 40px;
            line-height: 40px;
            color: #272727;
            font-size: 15px;
            background-color: #fff;
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
        }
        &_mess {
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            background-color: #fff;
        }
        &_shopTitle {
            height: 50px;
            text-indent: 15px;
            line-height: 50px;
            font-size: 15px;
            color: #272727;
            margin-top: 10px;
            border-bottom: 1px solid #eee;
            background-color: #fff;
        }
        &_img {
            display: block;
            height: 100px;
            width: 100px;
        }
        &_text {
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 10px;
            padding-right: 0;
            align-content: space-between;
            >span {
                font-size: 15px;
                color: #272727;
                &:nth-of-type(1) {
                    width: 100%;
                    display: block;
                }
                &:nth-of-type(2) {
                    width: 100%;
                    display: block;
                }
                &:nth-of-type(3) {
                    color: #f80000;
                    width: 50%;
                    display: block;
                }
                &:nth-of-type(4) {
                    width: 50%;
                    display: block;
                    text-align: right;
                }
            }
        }
        &_priceColl {
            .weui-cell:not(:last-of-type) {
                height: 34px;
            }
            .weui-cell__ft {
                font-size: 15px;
                color: #666;
            }
            .weui-textarea {
                font-size: 15px;
                color: #272727;
            }
        }
        &_tplType {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 15px;
            font-weight: 400;
            color: #272727;
            height: 50px;
            box-sizing: border-box;
            padding: 0 15px;
            >h3 {
                font-weight: 400;
            }
        }
        &_confrim {
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            padding: 10px 15px;
            padding-right: 0;
            flex-direction: column;
            >h2 {
                font-size: 15px;
                color: #272727;
                font-weight: 400;
            }
            >p {
                font-size: 12px;
                color: #272727;
                font-weight: 400;
                margin-top: 10px;
            }
        }
        &_type {
            display: flex;
            justify-content: center;
            height: 120px;
            padding: 25px 15px;
            box-sizing: border-box;
            background-color: #fff;
            margin-bottom: 10px;
            >i {
                flex-grow: 0;
                display: block;
                height: 70px;
                width: 70px;
                background-color: #2196f3;
                border-radius: 5px;
                line-height: 70px;
                text-align: center;
                font-size: 50px;
                color: #fff;
            }
            >div {
                flex-grow: 1;
            }
        }
    }

    &_footer {
        height: 60px;
        line-height: 60px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        box-sizing: border-box;
        border-top: 1px solid #eee;
        padding: 0 15px;
        justify-content: flex-end;
        align-items: center;
        &>button {
            height: 30px;
            width: 75px;
            text-align: center;
            line-height: 28px;
            font-size: 12px;
            color: #fff;
            background-color: #2196f3;
            border-radius: 5px;
            margin-left: 10px;
            border: 1px solid #2196f3;
        }
        .order_single_btn--confirm {
            color: #666;
            border-color: #666;
            background-color: #fff;
        }
    }
}

.orderAction_main_truePrice {
    .weui-cell__ft {
        color: #f80000;
    }
}

.order_number_collection {
    margin-bottom: 70px;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 15px;
    background: #fff;
    >h3 {
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        font-weight: 400;
        color: #272727;
    }
    >li {
        height: 35px;
        line-height: 35px;
        font-size: 13px;
        color: #272727;
    }
}
</style>

<template>
    <div>
        <div class="orderAction_main">
            <div class="help_common_title">
                <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">订单详情</x-header>
            </div>
            <div class="orderAction_main_type">
                <!-- 订单完成 评价完成 退款成功 退货成功-->
                <i v-show="infoData.orderType==7 || infoData.orderType==9 || infoData.orderType==10" class="iconfont">&#xe613;</i>
                <!-- 订单关闭 -->
                <i v-show="infoData.orderType==8" class="iconfont">&#xe635;</i>
                <!-- 待收货 -->
                <i v-show="infoData.orderType==3" class="iconfont">&#xe739;</i>
                <!-- 待发货 -->
                <i v-show="infoData.orderType==2" class="iconfont">&#xe60f;</i>
                <!-- 待评价 -->
                <i v-show="infoData.orderType==6" class="iconfont">&#xe623;</i>
                <!-- 待结算 -->
                <i v-show="infoData.orderType==11 || infoData.orderType==5" class="iconfont">&#xe620;</i>
                <!-- 结算待确认 -->
                <i v-show="infoData.orderType==12 || infoData.orderType==14" class="iconfont">&#xe620;</i>
                <!-- 待归还 -->
                <i v-show="infoData.orderType==4" class="iconfont">&#xe7b3;</i>
                <!-- 待付款 -->
                <i v-show="infoData.orderType==1" class="iconfont">&#xe624;</i>
                <!-- 退款处理中 -->
                <i v-show="infoData.orderType==13" class="iconfont">&#xe624;</i>

                <div class="orderAction_main_confrim">
                    <h2>{{currentConfrim.title}}</h2>
                    <p v-show="currentConfrim.message">{{currentConfrim.message}}</p>
                </div>
            </div>
            <group class="orderAction_main_address">
                <div class="orderAction_main_tplType">
                    <h3>物流方式</h3>
                    <h3>{{returnTpl}}</h3>
                </div>
                <div class="main_since_single">
                    <div class="main_since_text" v-show="this.infoData.order_express_type==1">
                        <h2 class="main_since_title">{{infoData.order_receiver_name}}</h2>
                        <h2 class="main_since_price">{{infoData.order_mobile}}</h2>
                    </div>
                    <p v-show="this.infoData.order_express_type==1" class="main_since_intr twonowarp">{{infoData.order_province}}{{infoData.order_city}}{{infoData.order_district}}{{infoData.order_detailed}}</p>

                    <div v-show="this.infoData.order_express_type==3" class="main_since_text">
                        <h2 class="main_since_title">{{infoData.since_name}}</h2>
                        <h2 class="main_since_price">{{infoData.since_tel}}</h2>
                    </div>
                    <p v-show="this.infoData.order_express_type==3" class="main_since_intr twonowarp">{{infoData.province_name}}{{infoData.city_name}}{{infoData.region_name}}{{infoData.region_name}}</p>
                </div>
            </group>
            <h3 class="orderAction_main_shopTitle">
                {{infoData.store_name}}
            </h3>
            <div class="orderAction_main_mess">
                <!-- 商品详情图 -->
                <img :src="infoData.shopPic" alt="" class="orderAction_main_img">
                <div class="orderAction_main_text">
                    <!-- 商品详情名称 -->
                    <span class="orderAction_main_goodsTitle twonowarp">
                        {{infoData.shopeName}}
                    </span>
                    <!-- 单价租金 -->
                    <span class="order_single_colorsize">{{infoData.collour}}{{infoData.standard}} </span>

                    <span class="orderAction_main_price">
                        ￥{{infoData.rentPrice}}/{{timeText}}
                    </span>
                    <!-- 数量 -->
                    <span class="orderAction_main_num">数量×{{infoData.shopNum}}</span>
                </div>
            </div>
            <!-- 租赁时间 -->
            <div class="orderAction_main_timeRange">{{rentRange.start}}&nbsp;至&nbsp;{{rentRange.end}}
                <span>共{{infoData.ordertimeNumber}}{{timeText}}</span>
            </div>
            <!-- 收货地址和物流方式 -->
            <group class="orderAction_main_priceColl">
                <cell title="合计租金" :value="(infoData.rentPrice*infoData.ordertimeNumber*infoData.shopNum)  | currency('￥')"></cell>
                <cell title="红包减免" class="orderAction_main_card" :value="-infoData.couponPrice | currency('￥')"></cell>
                <cell title="合计押金" :value="infoData.deposit | currency('￥')"></cell>
                <cell title="运费" :value="infoData.freight | currency('￥')"></cell>
                <cell class="orderAction_main_truePrice" title="实付款" :value="infoData.totalPrice | currency('￥')"></cell>
                <cell title="支付方式" :value="pay_type"></cell>
                <x-textarea readonly v-model="infoData.message" placeholder="买家留言"></x-textarea>
            </group>
            <ul class="order_number_collection">
                <h3>订单编号：{{infoData.orderCardId}}</h3>
                <li v-show="infoData.order_generation_time">订单生成时间：{{infoData.order_generation_time | orderdata }}</li>
                <li v-show="infoData.order_pay_time">订单支付时间：{{infoData.order_pay_time | orderdata }}</li>
                <li v-show="infoData.order_shipping_time">订单发货时间：{{infoData.order_shipping_time | orderdata }}</li>
                <li v-show="infoData.order_delivery_time">确认收货时间：{{infoData.order_delivery_time | orderdata }}</li>
                <li v-show="infoData.order_goods_refund_time">订单归还时间：{{infoData.order_goods_refund_time | orderdata }}</li>
                <li v-show="infoData.order_settlement_bill_generation_time">结算单生成时间：{{infoData.order_settlement_bill_generation_time | orderdata }}</li>
                <li v-show="infoData.order_settlement_bill_confirm_time">结算单确认时间：{{infoData.order_settlement_bill_confirm_time | orderdata }}</li>
            </ul>
            <footer class="orderAction_footer">
                <!-- 待付款 订单关闭 评价完成 退款完成 退货完成 -->
                <button @click.stop="deletOrder(infoData.orderId)" class="order_single_btn--confirm" v-if="infoData.orderType==1 || infoData.orderType==7 || infoData.orderType==8 || infoData.orderType==9 || infoData.orderType==10">删除订单</button>
                <!-- 代付款状态 -->
                <button @click.stop="payOrder(infoData.orderId)" v-if="infoData.orderType==1">付款</button>
                <!-- 待发货状态 -->
                <button @click.stop="download()" class="order_single_btn--confirm" v-if="infoData.orderType==2">申请退款</button>
                <button @click.stop="remind(infoData.orderId,1)" v-if="infoData.orderType==2">提醒发货</button>
                <!-- 待收货状态 退货待结算 退货结算待确认 -->
                <button @click.stop="download()" class="order_single_btn--confirm" v-if="infoData.orderType==3 || infoData.orderType==5">查看物流</button>
                <!-- 退货待结算 待结算-->
                <button @click.stop="remind(infoData.orderId,2)" v-if="infoData.orderType==5  || infoData.orderType==11">提醒结算</button>
                <!-- 待收货状态 -->
                <button @click.stop="download()" class="order_single_btn--confirm" v-if="infoData.orderType==3">申请退货</button>
                <button @click.stop="confrimOrder(infoData.orderId)" v-if="infoData.orderType==3">确认收货</button>
                <!-- 待归还状态   -->
                <button @click.stop="confirmReturn(infoData)" v-if="infoData.orderType==4">归还</button>
                <button @click.stop="download()" class="order_single_btn--confirm" v-if="infoData.orderType==4">申请退货</button>
                <!-- 退货完成 结算完成 评价完成 待评价-->
                <button @click.stop="seeSettlement(infoData.orderId)" class="order_single_btn--confirm" v-if="infoData.orderType==6 ||infoData.orderType==7 || infoData.orderType==10 || infoData.orderType==12 ||infoData.orderType==14">结算单</button>
                <!-- 待评价 -->
                <button @click.stop="download()" v-if="infoData.orderType==6">评价</button>
                <!-- 评价完成 -->
                <button @click.stop="download()" v-if="infoData.orderType==7">查看评论</button>
                <!-- 退货结算待确认 结算待确认 -->
                <button @click.stop="confrimSettlement(infoData.orderId)" v-if="infoData.orderType==14 || infoData.orderType==12">确认结算</button>
            </footer>
            <toast v-model="toast" type="success">{{confrim}}</toast>
                        <actionsheet v-model="payShow"  show-cancel :menus="menus" @on-click-menu="browserPay" show-cancel></actionsheet>
        </div>
    </div>
</template>
<script>
import { XHeader,Actionsheet, Cell, Group, XTextarea, dateFormat, Toast } from 'vux';
import { mapGetters } from 'vuex'
import { API, getQuery } from '../../services';

export default {
    components: {
        Actionsheet,
        XHeader,
        Group,
        Cell,
        XTextarea,
        Toast
    },
    data() {
        return {
            menus:{
                menu1: '微信支付',
                menu2: '支付宝支付'
            },
            /* 页面定时器 */
            inter: null,
            confrim: "请选择地址",
            toast: false,
            orderType: 0,
            /* 自提点数据 */
            tpl: {},
            orderLogistics: '/orderLogistics/',
            /* 订单id */
            orderId: 0,
            /* 订单详情数据 */
            infoData: {},
            /* 时间对照表 */
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },
            /* 提示文字 */
            currentConfrim: {
                title: "等待买家付款",
                message: "还有1小时33分自动关闭"
            },
            /* 支付方式 */
            payMethod: 4,
            payShow:false,
            payTypeData:null,
            titleArray: [
                {
                    title: "等待买家付款",//待付款
                    message: "还有1小时33分自动关闭"
                },
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
                {
                    title: "订单待评价",//待评价
                    message: ""
                },
                {
                    title: "订单已完成",//评价完成
                    message: ""
                },
                {
                    title: "订单已关闭",//订单关闭
                    message: ""
                },
                {
                    title: "退款处理成功",//退款结束
                    message: "退款金额将及时返还至您的付款账户"
                },
                {
                    title: "退货处理成功",//退货完成
                    message: "退款金额将及时返还至您的付款账户"
                },
                {
                    title: "待结算中",//退货待结算
                    message: "等待商家确认收货并出具结算单"
                },
                {
                    title: "结算单已出",//退货结算待确认
                    message: "请及时确认结算单,还有53小时17分自动结算"
                },
                {
                    title: "退款处理中",//退款处理中
                    message: ""
                },
                {
                    title: "结算单已出",//结算待确认
                    message: "请及时确认结算单，还有71小时41分自动结算"
                },
            ]
        }
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
            'getAddress',
            'getNamePhone'
        ]),
        /* 返回初始和结束周期 */
        rentRange() {
            let self = this;
            let start = dateFormat(new Date(self.infoData.order_goods_rent_time * 1000), 'YYYY-MM-DD');
            let end = dateFormat(new Date(self.infoData.order_goods_return_time * 1000), 'YYYY-MM-DD');
            return { start, end };
        },
        /* 返回周期名称 */
        /* 返回当前周期文字 */
        timeText() {
            return this.timeMap[this.infoData.rentType];
        },
        pay_type() {
            if (this.infoData.pay_type == 1) {
                return "微信"
            }
            if (this.infoData.pay_type == 2) {
                return "支付宝"
            }
        },
        returnTpl() {
            if (this.infoData.order_express_type == 1) {
                return "快递";
            } else if (this.infoData.order_express_type == 2) {
                return "上门";
            } else {
                return "自提";
            }
        }
    },
    methods: {
        /* 判断当前；浏览器环境  0 微信 1 支付宝 2 其他浏览器*/
        isAlipay() {
            var userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.match(/Alipay/i) == "alipay") {
                this.payMethod = 4;
                return 1;
            } else if (userAgent.match(/MicroMessenger/i) == "micromessenger") {
                this.payMethod = 3;
                return 0;
            } else {
                return 2;
            }
        },
        /* 时间格式化 */
        timeForm() {
            let flag, start;
            if (this.infoData.orderType == 1) {
                /* 两小时倒计时 */
                flag = 2 * 3600 * 1000;
                start = this.infoData.order_generation_time * 1000;
            } else if (this.infoData.orderType == 12 || this.infoData.orderType == 14) {
                /* 72小时倒计时 */
                flag = 72 * 3600 * 1000;
                start = this.infoData.order_settlement_bill_generation_time * 1000;
            }
            if (this.infoData.orderType == 1 || this.infoData.orderType == 12 || this.infoData.orderType == 14) {
                let now = new Date();
                let leftTime = flag - (now.getTime() - start);
                let leftsecond = parseInt(leftTime / 1000);
                let day = Math.floor(leftsecond / (60 * 60 * 24));
                let hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
                let minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
                if (leftsecond <= 0) {
                    day = 0;
                    hour = 0;
                    minute = 0;
                }
                if (this.infoData.orderType == 1) {
                    this.currentConfrim.message = "还有" + (hour + day * 24) + "小时" + minute + "分自动关闭";
                } else if (this.infoData.orderType == 12 || this.infoData.orderType == 14) {
                    this.currentConfrim.message = "请及时确认结算单,还有" + (hour + day * 24) + "小时" + minute + "分自动结算";
                }
                this.inter = setInterval(() => {
                    let now = new Date();
                    let leftTime = flag - (now.getTime() - start);
                    let leftsecond = parseInt(leftTime / 1000);
                    let day = Math.floor(leftsecond / (60 * 60 * 24));
                    let hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
                    let minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
                    if (leftsecond <= 0) {
                        day = 0;
                        hour = 0;
                        minute = 0;
                    }
                    if (this.infoData.orderType == 1) {
                        this.currentConfrim.message = "还有" + (hour + day * 24) + "小时" + minute + "分自动关闭";
                    } else if (this.infoData.orderType == 12 || this.infoData.orderType == 14) {
                        this.currentConfrim.message = "请及时确认结算单,还有" + (hour + day * 24) + "小时" + minute + "分自动结算";
                    }
                }, 60 * 1000);
            }

        },
        /* 支付接口 */
        onBridgeReady() {
            let self = this;
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', self.paydata,
                function(res) {
                    if (res.err_msg == "get_brand_wcpay_request:fail") {
                        
                    }
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        self.confrim = "支付成功";
                        self.toast = true;
                        self.currentPage = 1;
                        self.Initialization();
                        localStorage.setItem("reload", "1");
                    }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
                }
            );
        },
        routerBack() {
            this.$router.goBack();
        },
        /* 获取当前订单类型 */
        getOrderType(item) {
            if (item.order_is_delect == 0) {
                if (item.orderRefundStatus == 0) {
                    if (item.orderStatus == 1) {
                        if (item.orderShippingStatus == 8) {
                            item.orderType = 8;//订单关闭
                        } else {
                            item.orderType = 1;//代付款
                        }
                    } else if (item.orderStatus == 2) {
                        switch (item.orderShippingStatus) {
                            case 1:
                                item.orderType = 2;//代发货
                                break;
                            case 2:
                                item.orderType = 3;//待收货
                                break;
                            case 3:
                                item.orderType = 4;//待归还
                                break;
                            case 4:
                                item.orderType = 5;//待结算
                                break;
                            case 5:
                                item.orderType = 14;//结算待确认
                                break;
                            case 6:
                                item.orderType = 6;//待评价
                                break;
                            case 7:
                                item.orderType = 7;//评价完成
                                break;
                        }
                    }
                } else if (item.orderRefundStatus == 1) {
                    item.orderType = 9;//退款结束
                } else if (item.orderRefundStatus == 2) {
                    if (item.orderStatus == 2) {//退款退货
                        if (item.orderShippingStatus == 2) {
                            item.orderType = 11;//退货待结算
                        } else if (item.orderShippingStatus == 3) {
                            item.orderType = 11;//退货待结算
                        } else if (item.orderShippingStatus == 5) {
                            item.orderType = 12;//退货待确认结算
                        } else if (item.orderShippingStatus == 6) {
                            item.orderType = 10;//退货完成
                        }
                    }
                } else if (item.orderRefundStatus == 4) {
                    if (item.orderShippingStatus == 6) {
                        item.orderType = 10;//退货完成
                    }
                } else if (item.orderRefundStatus == 3) {
                    item.orderType = 13;//退款处理中
                }
            }
        },
        Initialization() {
            API.order.orderInfo({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                orderId: this.orderId,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.getOrderType(res.body.data);
                    this.infoData = res.body.data;
                    this.infoData.message = '买家留言:' + this.infoData.message;
                    this.currentConfrim = this.titleArray[this.infoData.orderType - 1];
                    this.timeForm();
                }
            });
        },
        /* 删除订单 */
        deletOrder(id) {
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '确定要删除该订单吗',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    API.order.orderDel({
                        userId: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        orderId: id,
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.confrim = "删除成功";
                            self.toast = true;
                            localStorage.setItem("reload", "1");
                            self.routerBack();
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
            if (item.order_express_type == 2) {
                this.$vux.confirm.show({
                    /* title: 'Title', */
                    content: '是否确认归还',
                    onConfirm() {
                        /* 点击确认时执行具体删除操作 */
                        API.order.orderReturn({
                            userId: self.getUserInfoUserId,
                            token: self.getUserInfoToken,
                            orderId: self.orderId,
                            sinceId: "",
                            expressId: "",
                            logisticsName: "",
                            revertId: "",
                            company: "",
                        }).then((res) => {
                            if (res.body.code == 200) {
                                self.confrim = "归还成功";
                                this.Initialization();
                                self.toast = true;
                            }
                        });
                    }
                });
            } else {
                this.$router.push({ path: '/orderReturn?type=' + item.order_express_type + "&orderId=" + self.orderId });
            }

        },
         browserPay(key){
             if(key=='menu1'){
                    /* 微信支付 */
                    this.payMethod=5;
                }else if(key=='menu2'){
                    this.payMethod=4;
                }else{
                    return false;
                }
             API.order.orderShipPay({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                orderId: this.orderId,
            }).then((res) => {
                if (res.body.code == 200) {
                    let self = this;
                    let openId = localStorage.getItem("openId");
                    API.order.OrderWechat({
                        userId: this.getUserInfoUserId,
                        token: this.getUserInfoToken,
                        orderSn: res.body.data.order_big_sn,
                        payMethod: this.payMethod,
                        openId: openId,
                    }).then((resopndy) => {
                        self.payTypeData=resopndy.body;
                        if(key=='menu1'){
                            /* 微信支付 */
                            window.location.href=this.payTypeData;
                        }else  if(key=='menu2'){
                        const div = document.createElement('div');
                        div.innerHTML = this.payTypeData;
                        document.body.appendChild(div);
                        document.forms.alipaysubmit.submit();
                        }
                    }, (err) => {
                        self.confrim = "支付异常";
                        self.toast = true;
                        self.$router.push({
                            path: '/index/main/order'
                        })
                    });
                }
            });
                
        },
        /* 订单付款 */
        payOrder(id) {
            /* 待付款订单生成支付订单 */
           let self=this;
            if(this.isAlipay()==0){
                API.order.orderShipPay({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
               orderId: id,
            }).then((res) => {
                if (res.body.code == 200) {
                    let self = this;
                    let openId = localStorage.getItem("openId");
                    API.order.OrderWechat({
                        userId: this.getUserInfoUserId,
                        token: this.getUserInfoToken,
                        orderSn: res.body.data.order_big_sn,
                        payMethod: this.payMethod,
                        openId: openId,
                    }).then((resopndy) => {
                            /* 微信支付 */
                            this.paydata = resopndy.body;
                            if (typeof WeixinJSBridge == "undefined") {
                                if (document.addEventListener) {
                                    document.addEventListener('WeixinJSBridgeReady', self.onBridgeReady, false);
                                } else if (document.attachEvent) {
                                    document.attachEvent('WeixinJSBridgeReady', self.onBridgeReady);
                                    document.attachEvent('onWeixinJSBridgeReady', self.onBridgeReady);
                                }
                            } else {
                                self.onBridgeReady();
                            }
                    }, (err) => {
                        self.confrim = "支付异常";
                        self.toast = true;
                        self.$router.push({
                            path: '/index/main/order'
                        })
                    });
                }
            });       
            }else if(this.isAlipay()==1){
                 API.order.orderShipPay({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                orderId: id,
            }).then((res) => {
                if (res.body.code == 200) {
                    let self = this;
                    let openId = localStorage.getItem("openId");
                    API.order.OrderWechat({
                        userId: this.getUserInfoUserId,
                        token: this.getUserInfoToken,
                        orderSn: res.body.data.order_big_sn,
                        payMethod: this.payMethod,
                        openId: openId,
                    }).then((resopndy) => {
                            const div = document.createElement('div');
                            div.innerHTML = resopndy.body;
                            document.body.appendChild(div);
                            document.forms.alipaysubmit.submit();
                    }, (err) => {
                        self.confrim = "支付异常";
                        self.toast = true;
                        self.$router.push({
                            path: '/index/main/order'
                        })
                    });
                }
            });    
            }else{
               this.payShow=true;
            }

        },
        /* 确认收货 */
        confrimOrder(id) {
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '是否确认收货',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    API.order.orderReceipt({
                        userId: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        orderId: id,
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.confrim = "确认收货成功";
                            self.Initialization();
                            self.toast = true;
                            localStorage.setItem("reload", "1");
                        }
                    });
                }
            });
        },
        /* 确认结算 */
        confrimSettlement(id) {
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '是否确认结算',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    API.order.orderSettle({
                        userId: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        orderId: id,
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.confrim = "结算成功";
                            self.Initialization();
                            self.toast = true;
                            localStorage.setItem("reload", "1");
                        }
                    });
                }
            });
        },
        /* 查看结算单 */
        seeSettlement(id) {
            this.$router.push({
                path:'/settlement?id='+ id
              })
          
        },
        /* 提醒发货 ,结算 1-提醒发货2-提醒结算*/
        remind(id, type) {
            let self = this;
            API.order.orderRemind({
                userId: self.getUserInfoUserId,
                token: self.getUserInfoToken,
                orderId: id,
                type: type,
            }).then((res) => {
                if (res.body.code == 200) {
                    if (type == 1) {
                        self.confrim = "提醒发货成功";
                    } else {
                        self.confrim = "提醒结算成功";
                    }
                    self.currentPage = 1;
                    self.toast = true;
                    localStorage.setItem("reload", "1");
                }
            });
        },
        /* 查看物流,评价, */
        download() {
            this.$router.push({
                path: '/download'
            })
        }
    }, mounted() {
        overscroll(document.querySelector('.orderAction_main'));
    },
    activated() {
        overscroll(document.querySelector('.orderAction_main'));
        clearInterval(this.inter);
        this.orderId = this.$route.params.id;
        this.Initialization();
    }
} 
</script>