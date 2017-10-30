<style lang="scss">
.order_typelist {
    position: relative;
    background-color: #fff;
    margin-top: 46px;
}

.order_typelist_box {
    height: 40px;
    width: 630px;
    font-size: 0;
    border-bottom: 1px solid #f3f3f3;
}

.order_typelist_item {
    width: 90px;
    height: 40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
}

.order_typelist_item--selected {
    color: #2196f3;
}

.order_title {
    color: #272727;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 18px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-weight: 400;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;
}

.order_changeAll {
    position: absolute;
    right: 15px;
    font-size: 15px;
}

.order {
    &_noAnyList {
        position: fixed;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        top: 87px;
        height: 70%;
        >i {
            font-size: 160px;
            color: #666;
        }
        >P {
            font-size: 15px;
            color: #272727;
        }
    }
    &_list {
        .weui-loadmore_line .weui-loadmore__tips {
            background: #f1f1f1 !important;
        }
        position: fixed;
        width: 100%;
        top: 87px;
        height: calc(100% - 138px);
        overflow-y: auto;
        background-color: #f3f3f3;
        -webkit-overflow-scrolling: touch;
    }
    &_single {
        background-color: #fff;
        margin-bottom: 10px;
        &_shop {
            color: #272727;
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            padding: 0 15px;
            display: flex;
            justify-content: space-between;
            >h2 {
                flex-grow: 1;
                box-sizing: border-box;
                padding-right: 15px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #272727;
                font-weight: 400;
            }
        }
        &_type {
            color: #f80000;
            font-size: 14px;
            right: 15px;
            top: 0;
            line-height: 60px;
        }
        &_content {
            border-top: 1px solid #f3f3f3;
            border-bottom: 1px solid #f3f3f3;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            height: 130px;
        }
        &_img {
            width: 100px;
            height: 100px;
            display: block;
            flex-grow: 0;
            flex: 1;
        }
        &_text {
            flex-grow: 0;
            width: calc(100% - 100px);
            box-sizing: border-box;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &_title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-weight: 400;
            font-size: 15px;
        }
        &_box {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &_price {
            color: #f80000;
            font-size: 15px;
        }
        &_relet{
            color: #333;
            font-size: 13px;
            >span{
                color: #f80000;
                font-size: 13px; 
            }
        }
        &_colorsize {
            font-size: 14px;
            color: #272727;
        }
        &_num {
            color: #666;
            font-size: 14px;
        }
        &_time {
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 15px;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #f3f3f3;
            color: #666;
            font-size: 14px;
        }
        &_despoite {
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 15px;
            font-size: 13px;
            color: #666666;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #f3f3f3;
            color: #666;
            &>span:last-of-type {
                color: #f80000;
                font-size: 15px;
            }
        }
        &_allprice {
            box-sizing: border-box;
            padding: 0 15px;
            height: 45px;
            line-height: 45px;
            text-align: right;
            color: #333;
            font-size: 13px;
            border-bottom: 1px solid #f3f3f3;
            >b {
                font-size: 16px;
                color: #f80000;
            }
        }
        &_btncoll {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 15px;
            height: 45px;
            line-height: 45px;
            &>button {
                height: 30px;
                width: 75px;
                text-align: center;
                line-height: 28px;
                font-size: 12px;
                color: #fff;
                border: 1px solid #2196f3;
                background-color: #2196f3;
                border-radius: 5px;
                margin-left: 10px;
            }
        }
    }
}

.order_single_btncoll .order_single_btn--confirm {
    color: #666;
    border-color: #666;
    background-color: #fff;
}
</style>
<template>
    <div class="order_container">
        <actionsheet v-model="payShow" show-cancel :menus="menus" @on-click-menu="browserPay" show-cancel></actionsheet>
        <h1 class="order_title">我的订单
        </h1>
        <scroller class="order_typelist" lock-y :scrollbar-x=false>
            <div class="order_typelist_box">
                <div @click="typeselect(item.type)" class="order_typelist_item" v-for="item in typeList">
                    <span :class='{"order_typelist_item--selected":item.type==currentType}'>{{item.name}}</span>
                </div>
            </div>
        </scroller>
        <ul class="order_list">
            <!-- 此处进行显示判断，当前选中类型等于当前item类型时候才显示 -->
            <li @click="getInfo(item.order_id)" class="order_single" v-for="item in orderList[this.currentType]">
                <div class="order_single_shop">
                    <h2>{{item.store_name}}</h2>
                    <span v-if="item.orderType==1" class="order_single_type">待付款</span>
                    <span v-if="item.orderType==2" class="order_single_type">待发货</span>
                    <span v-if="item.orderType==3" class="order_single_type">待收货</span>
                    <span v-if="item.orderType==4" class="order_single_type">待归还</span>
                    <span v-if="item.orderType==5 && !item.srcorderType" class="order_single_type">待结算</span>
                    <span v-if="item.srcorderType==0" class="order_single_type">退货待结算</span>
                    <span v-if="item.srcorderType==1" class="order_single_type">退货结算待确认</span>
                    <span v-if="item.srcorderType==2" class="order_single_type">结算待确认</span>
                    <span v-if="item.orderType==6" class="order_single_type">待评价</span>
                    <span v-if="item.orderType==7" class="order_single_type">已评价</span>
                    <span v-if="item.orderType==8" class="order_single_type">订单关闭</span>
                    <span v-if="item.orderType==9" class="order_single_type">退款成功</span>
                    <span v-if="item.orderType==10" class="order_single_type">退货完成</span>
                    <span v-if="item.srcOrderType==3" class="order_single_type">退款中</span>
                </div>
                <div class="order_single_content">
                    <x-img :src="imgFormat(item.goods_main_pic)" default-src="http://oss.zujiekeji.cn/img/default.png" class="order_single_img" :offset="-100" container=".order_list"></x-img>

                    <div class="order_single_text">
                        <h3 class="order_single_title">
                            {{item.goods_name}}
                        </h3>
                        <span class="order_single_colorsize">{{item.collour}}{{item.standard}}</span>
                        <!-- 单价添加类型判断 -->
                        <p class="order_single_box">
                            <span v-if="item.act_rent!=0" class="order_single_price">￥{{item.act_rent}}/{{timeMap[item.rentType]}}
                            </span>
                            <span v-else class="order_single_price">￥{{item.rentPrice}}/{{timeMap[item.rentType]}}
                            </span>
                            <span class="order_single_num">数量：{{item.goods_amount}}</span>
                        </p>
                        <p class="order_single_relet">
                            续期价：<span>￥{{item.relet_price}}/{{timeMap[item.rentType]}}</span>
                        </p>
                    </div>
                </div>
                <div class="order_single_time">
                    <span>{{item.order_goods_rent_time | dataform}} 至 {{item.order_goods_return_time | dataform }}</span>
                    <span>共{{item.order_time_number}}{{timeMap[item.rentType]}}</span>
                </div>
                <div class="order_single_despoite">
                    <span>押金</span>
                    <span>￥{{item.order_deposit}}</span>
                </div>
                <div class="order_single_allprice">
                    总计{{item.goods_amount}}件商品 &nbsp;&nbsp;合计&nbsp;
                    <b>￥{{item.actual_price}}</b>&nbsp;&nbsp;(含运费￥{{item.order_freight}})
                </div>

                <div class="order_single_btncoll" v-show="item.srcOrderType!=3">
                    <!-- 七种状态的button，对应其中操作 -->
                    <!-- 订单关闭 评价完成 退款完成 退货完成 -->
                    <button @click.stop="deletOrder(item.order_id)" class="order_single_btn--confirm" v-if="item.orderType==1 || item.orderType==7 || item.orderType==8 || item.orderType==9 || item.orderType==10">删除订单</button>
                    <!-- 代付款状态 -->
                    <button @click.stop="payOrder(item.order_id,item)" v-if="item.orderType==1">付款</button>
                    <!-- 待发货状态 -->
                    <button @click.stop="remind(item.order_id,1)" v-if="item.orderType==2">提醒发货</button>
                    <!-- 待收货状态 退货待结算 退货结算待确认 -->
                    <button @click.stop="download()" v-if="(item.orderType==3 || item.srcorderType==0) && item.order_express_type!=3">查看物流</button>
                    <!-- 退货待结算 待结算-->
                    <button @click.stop="remind(item.order_id,2)" v-if="(item.orderType==5 && !item.srcorderType) || item.srcorderType==0">提醒结算</button>
                    <!-- 待收货状态 -->
                    <button @click.stop="confrimOrder(item.order_id)" v-if="item.orderType==3">确认收货</button>
                    <!-- 待归还状态   -->
                    <button @click.stop="confirmReturn(item)" v-if="item.orderType==4">归还</button>
                    <!-- 退货完成 结算完成 评价完成 -->
                    <button @click.stop="seeSettlement(item.order_id)" class="order_single_btn--confirm" v-if="item.orderType==7 || item.orderType==6">结算单</button>
                    <!-- 待评价 -->
                    <button @click.stop="download()" v-if="item.orderType==6">评价</button>
                    <!-- 评价完成 -->
                    <button @click.stop="download()" v-if="item.orderType==7">查看评论</button>
                    <!-- 退货结算待确认 结算待确认 -->
                    <button @click.stop="confrimSettlement(item.order_id)" v-if="item.srcorderType==1 || (item.orderType==5 && item.srcorderType==2)">确认结算</button>
                </div>
            </li>
            <masker v-show='loading' color="000" fullscreen :opacity="0.1">
                <div slot="content">
                    <i class="weui-loading weui-icon_toast center"></i>
                </div>
            </masker>
            <toast v-model="toast" type="success">{{confrim}}</toast>
            <load-more v-show="loadshow" tip="加载更多"></load-more>
            <load-more v-show="!loadshow && orderList[this.currentType].length>8" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
        </ul>
        <div v-show="!orderList[this.currentType][0]" class="order_noAnyList">
            <i class="iconfont">&#xe8b5;</i>
            <p>暂无相关订单</p>
        </div>
    </div>
</template>

<script>
import { Scroller, XImg, Masker, Actionsheet, Spinner, XButton, Group, Cell, LoadMore, Toast } from 'vux';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../services';

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
        Toast
    },
    data() {
        return {
            loading: false,
            /* 临时数据 */
            temporary: [],
            paydata: {},
            confrim: "",
            toast: false,
            showList1: true,
            scrollTop: 0,
            onFetching: false,
            bottomCount: 20,
            currentType: 0,/* 0-6分辨对应7种状态 */
            /* 订单状态 */
            typeList: [{
                name: "全部订单",
                type: 0,
            }, {
                name: "待付款",
                type: 1,
            }, {
                name: "待发货",
                type: 2,
            }, {
                name: "待收货",
                type: 3,
            }, {
                name: "待归还",
                type: 4,
            }, {
                name: "待结算",
                type: 5,
            }, {
                name: "待评价",
                type: 6,
            },],
            /* 时间对照表 */
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },
            /* 假数据模拟订单 */
            orderList: [[], [], [], [], [], [], []],
            /* 当前7大列表对应数据 */
            currentPage: 1,
            canBottom: true,
            loadshow: false,
            haveData: false,
            /* 支付方式 */
            payMethod: 4,
            menus: {
                menu1: '微信支付',
                menu2: '支付宝支付'
            },
            orderId: null,
            payShow: false,
            payTypeData: null,
        }
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
    mounted() {
        window.location.href="/?#/index/main/order";
        overscroll(document.querySelector('.order_list'));
        /* 当前滚动距离为0 */
        localStorage.setItem("orderScroll", 0);
        this.loading = true;
        /* 数据重载永远只重新加载当前显示列表数据 */
        this.orderList[this.currentType] = [];
        /* 数据重载永远只重新加载当前显示列表数据 */
        this.currentPage = 1;
        this.haveData = true;
        this.getTypeData(this.currentType);
        let self = this;
        /* self.getTypeData(this.currentType); */
        function getScrollTop() {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.querySelector('.order_list')) {
                bodyScrollTop = document.querySelector('.order_list').scrollTop;
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
            if (document.querySelector('.order_list')) {
                bodyScrollHeight = document.querySelector('.order_list').scrollHeight;
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
        document.querySelector('.order_list').onscroll = function() {
            if (getScrollTop() + getWindowHeight() >= (getScrollHeight() - 10)) {
                if (self.canBottom == true) {
                    self.canBottom = false;
                    self.getTypeData(self.currentType);
                }
            }
        };
    },
    activated() {
        sessionStorage.setItem("mainReload",'ss');
        /* 获取当前url参数 */
        let biz_content = this.$route.query.biz_content;
        /* 支付宝借还成功后的回调 */
        if (biz_content) {
            biz_content = JSON.parse(biz_content);
            let timetamp = JSON.parse(biz_content.invoke_state).timestamp;
            if (((new Date().getTime() / 1000) - timetamp) <= 30) {
                this.success(biz_content);
            }
        }
        overscroll(document.querySelector('.order_list'));
        /* 当前页面需要重载数据 */
        if (localStorage.getItem("reload")) {
            this.loading = true;
            /* 数据重载永远只重新加载当前显示列表数据 */
            this.orderList[this.currentType] = [];
            /* 数据重载永远只重新加载当前显示列表数据 */
            this.currentPage = 1;
            this.haveData = true;
            this.getTypeData(this.currentType);
            localStorage.setItem("reload", "");
        }
        /* 重置滚动距离 */
        setTimeout(() => {
            if (localStorage.getItem("orderScroll")) {
                document.querySelector(".order_list").scrollTop = localStorage.getItem("orderScroll");
            }
        }, 100);
    },
    methods: {
        /* 支付宝付款成功后的回调函数 */
        success(item) {
            let self=this;
            API.alipay.success({
                out_order_no: item.out_order_no,
                order_no: item.order_no,
                invoke_state: item.invoke_state,
                user_id: item.user_id,
                admit_state: item.admit_state,
            }).then((res) => {
                if (res.body.code == 200) {
                    let openId = localStorage.getItem("openId");
                    API.order.OrderWechat({
                        userId: this.getUserInfoUserId,
                        token: this.getUserInfoToken,
                        orderSn: JSON.parse(item.invoke_state).order_sn,
                        payMethod: 4,
                        openId: item.user_id,
                    }).then((resopndy) => {
                        if (resopndy.body.code == 250) {
                            self.confrim = "支付完成";
                            self.toast = true;
                            setTimeout(() => {
                                self.orderList[self.currentType] = [];
                                self.currentPage = 1;
                                self.haveData = true;
                                self.getTypeData(self.currentType);
                            }, 1500);
                        } else if (resopndy.body.code == 300) {
                            self.confrim = resopndy.body.msg;
                            self.toast = true;
                            setTimeout(() => {
                                self.orderList[self.currentType] = [];
                                self.currentPage = 1;
                                self.haveData = true;
                                self.getTypeData(self.currentType);
                            }, 1500);
                        } else {
                            const div = document.createElement('div');
                            div.innerHTML = resopndy.body;
                            document.body.appendChild(div);
                            document.forms.alipaysubmit.submit();
                        }
                    })
                }else{
                    alert(res.body.msg);  
                }
            }, (err) => {
                alert(JSON.stringify(err));
            });
        },
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
        /* typelist点击选中函数 */
        typeselect(index) {
            if (!this.canBottom) {
                return false;
            }
            if (index == this.currentType) {
                return false;
            }
            this.currentType = index;
            this.orderList[this.currentType] = [];
            this.currentPage = 1;
            this.haveData = true;
            this.getTypeData(this.currentType);
        },
        /* 进入订单详情 */
        getInfo(id) {
            this.$router.push({
                path: '/orderAction/' + id
            });

            localStorage.setItem("orderScroll", document.querySelector(".order_list").scrollTop);
        },
        /* 确认订单状态 */
        confrimType(item) {
            if (item.order_is_delete == 0) {
                if (item.order_refund_goods_status == 0) {
                    if (item.order_status == 1) {
                        if (item.order_shipping_status == 8) {
                            item.orderType = 8;//订单关闭
                        } else {
                            item.orderType = 1;//代付款
                        }
                    } else if (item.order_status == 2) {
                        switch (item.order_shipping_status) {
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
                                item.orderType = 5;//待确认结算
                                item.srcorderType = 2;
                                break;
                            case 6:
                                item.orderType = 6;//待评价
                                break;
                            case 7:
                                item.orderType = 7;//评价完成
                                break;
                        }
                    }
                } else if (item.order_refund_goods_status == 1) {
                    item.orderType = 9;//退款结束
                } else if (item.order_refund_goods_status == 2) {
                    if (item.order_status == 2) {//退款退货
                        if (item.order_shipping_status == 2) {
                            item.srcorderType = 0;//退货待结算
                        } else if (item.order_shipping_status == 3) {
                            item.srcorderType = 0;//退货待结算
                        } else if (item.order_shipping_status == 5) {
                            item.srcorderType = 1;//退货待确认结算
                        } else if (item.order_shipping_status == 6) {
                            item.orderType = 10;//退货完成
                        }
                    }
                } else if (item.order_refund_goods_status == 4) {
                    if (item.order_shipping_status == 6) {
                        item.orderType = 10;//退货完成
                    }
                } else if (item.order_refund_goods_status == 3) {
                    item.srcOrderType = 3;//退款处理中
                }
            }
        },
        /* 获取对应的数据 */
        /* 使用分页结构数据,使用同一个div，根据类型进行数据替换 */
        /* 使用类型判断是分页数据还是 */
        getTypeData(status) {
            if (this.haveData) {
                this.loadshow = true;
                API.order.orderlist({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    orderStatus: status,
                    page_number: 10,
                    orderStatus: status,
                    page: this.currentPage,
                }).then((res) => {
                    if (res.body.code == 200) {
                        let list = res.body.data.orderList.data
                        for (let item of list) {
                            this.confrimType(item);
                        }
                        this.orderList[this.currentType] = this.orderList[this.currentType].concat(list);
                        this.loadshow = false;
                        this.canBottom = true;
                        /* 显示当前 */
                        this.loading = false;
                        overscroll(document.querySelector('.order_list'));
                        if (res.body.data.hasNext) {
                            this.currentPage++;
                            this.haveData = true;
                        } else {
                            this.haveData = false;
                        }
                         return false;
                    }
                });
            } else {
                this.canBottom = true;
            }
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
                            self.loading = true;
                            self.confrim = "删除成功";
                            self.toast = true;
                            self.orderList[self.currentType] = [];
                            self.currentPage = 1;
                            self.haveData = true;
                            self.getTypeData(self.currentType);
                        }
                    });
                }
            });

        },
        /* 支付接口 */
        onBridgeReady() {
            let self = this;
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', self.paydata,
                function(res) {
                    if (res.err_msg == "get_brand_wcpay_request:fail") {
                        self.confrim = "支付异常";
                        self.toast = true;
                        self.orderList[self.currentType] = [];
                        self.currentPage = 1;
                        self.haveData = true;
                        self.getTypeData(self.currentType);
                    }
                    if (res.err_msg == "get_brand_wcpay_request:cancel") {
                        self.orderList[self.currentType] = [];
                        self.currentPage = 1;
                        self.haveData = true;
                        self.getTypeData(self.currentType);
                    }
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        self.confrim = "支付成功";
                        self.toast = true;
                        self.orderList[self.currentType] = [];
                        self.currentPage = 1;
                        self.haveData = true;
                        self.getTypeData(self.currentType);

                    }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
                }
            );
        },
        browserPay(key) {
            if (key == 'menu1') {
                /* 微信支付 */
                this.payMethod = 5;
            } else if (key == 'menu2') {
                this.payMethod = 4;
            } else {
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
                        if (resopndy.body.code == 250) {
                            self.confrim = "支付完成";
                            self.toast = true;
                            setTimeout(() => {
                                self.orderList[this.currentType] = [];
                                self.currentPage = 1;
                                self.haveData = true;
                                self.getTypeData(self.currentType);
                            }, 1500);
                        } else if (resopndy.body.code == 300) {
                            self.confrim = resopndy.body.msg;
                            self.toast = true;
                            setTimeout(() => {
                                self.orderList[this.currentType] = [];
                                self.currentPage = 1;
                                self.haveData = true;
                                self.getTypeData(self.currentType);
                            }, 1500);
                        } else {
                            self.payTypeData = resopndy.body;
                            if (key == 'menu1') {
                                /* 微信支付 */
                                window.location.href = this.payTypeData;
                            } else if (key == 'menu2') {
                                const div = document.createElement('div');
                                div.innerHTML = this.payTypeData;
                                document.body.appendChild(div);
                                document.forms.alipaysubmit.submit();
                            }
                        }
                    }, (err) => {
                        self.confrim = "支付异常";
                        self.toast = true;
                        setTimeout(() => {
                            self.orderList[this.currentType] = [];
                            self.currentPage = 1;
                            self.haveData = true;
                            self.getTypeData(self.currentType);
                        }, 1500);
                    });
                }
            });

        },
        /* 订单付款 */
        payOrder(id, item) {
            this.orderId = id;
            /* 待付款订单生成支付订单 */
            let self = this;
            if (this.isAlipay() == 0) {
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
                            if (resopndy.body.code == 250) {
                                self.confrim = "支付完成";
                                self.toast = true;
                                setTimeout(() => {
                                    self.orderList[self.currentType] = [];
                                    self.currentPage = 1;
                                    self.haveData = true;
                                    self.getTypeData(self.currentType);
                                }, 1500);
                            } else if (resopndy.body.code == 300) {
                                self.confrim = resopndy.body.msg;
                                self.toast = true;
                                setTimeout(() => {
                                    self.orderList[self.currentType] = [];
                                    self.currentPage = 1;
                                    self.haveData = true;
                                    self.getTypeData(self.currentType);
                                }, 1500);
                            } else {
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
                            }
                        }, (err) => {
                            self.confrim = "支付异常";
                            self.toast = true;
                            setTimeout(() => {
                                self.orderList[this.currentType] = [];
                                self.currentPage = 1;
                                self.haveData = true;
                                self.getTypeData(self.currentType);
                            }, 1500);
                        });
                    }
                });
                /* 当前状态为支付宝的情况下 */
            } else if (this.isAlipay() == 1) {
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
                            if (resopndy.body.code == 250) {
                                self.confrim = "支付完成";
                                self.toast = true;
                                setTimeout(() => {
                                    self.orderList[this.currentType] = [];
                                    self.currentPage = 1;
                                    self.haveData = true;
                                    self.getTypeData(self.currentType);
                                }, 1500);
                            } else if (resopndy.body.code == 300) {
                                self.confrim = resopndy.body.msg;
                                self.toast = true;
                                setTimeout(() => {
                                    self.orderList[this.currentType] = [];
                                    self.currentPage = 1;
                                    self.haveData = true;
                                    self.getTypeData(self.currentType);
                                }, 1500);
                            } else {
                                const div = document.createElement('div');
                                div.innerHTML = resopndy.body;
                                document.body.appendChild(div);
                                document.forms.alipaysubmit.submit();
                            }
                        })
                        /* order_id */
                        /*  API.alipay.orderId({
                             userId:this.getUserInfoUserId,
                             Info:{
                                 goods_name:item.goods_name,
                                 address:item.recevie_address,    
                                 shop_name:item.store_name,
                                 rent_amount:item.actual_price,
                                 deposit_amount:item.order_deposit,
                                 borrow_time:item.order_goods_rent_time,
                                 expiry_time:item.order_goods_return_time,
                                 order_id:id,
                             }
                         }).then((res)=>{
                                 if(res.body.code == 200){
                                     window.location.href=res.body.data.link_url;
                                 }
                         },(err)=>{
                         }); */
                    }
                });
            } else {
                this.payShow = true;
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
                            self.orderList[this.currentType] = [];
                            self.currentPage = 1;
                            self.haveData = true;
                            self.getTypeData(self.currentType);
                            self.toast = true;
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
            this.$router.push({ path: '/orderReturn?type=' + item.order_express_type + "&orderId=" + item.order_id });
            localStorage.setItem("orderScroll", document.querySelector(".order_list").scrollTop);
        },
        /* 确认结算 */
        confrimSettlement(id) {
            this.$router.push({
                path: '/settlement', query: {
                    type: 1,
                    id: id,
                }
            });
            localStorage.setItem("orderScroll", document.querySelector(".order_list").scrollTop);
        },
        /* 查看结算单 */
        seeSettlement(id) {
            this.$router.push({
                path: '/settlement/?id=' + id
            });

            localStorage.setItem("orderScroll", document.querySelector(".order_list").scrollTop);
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
                    self.toast = true;
                }
            });
        },
        /* 查看物流,评价, */
        download(id) {
            this.$router.push({
                path: '/download'
            });
            localStorage.setItem("orderScroll", document.querySelector(".order_list").scrollTop);
        }
    }
}



</script>

