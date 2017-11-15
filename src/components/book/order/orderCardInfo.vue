
<style lang="scss" scoped>
.orderInfon {
    &_main {
        height: calc(100% - 101px);
        box-sizing: border-box;
        overflow-y: auto;
        background-color: #f3f3f3;
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
            height: 44px;
            line-height: 44px;
            color: #666;
            font-size: 16px;
            background-color: #fff;
            margin-top: 10px;
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
        }
        &_price {
            height: 44px;
            line-height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            font-size: 16px;
            color: #666;
            box-sizing: border-box;
            align-items: center;
            background-color: #fff;
            ;
            border-top: 1px solid #efefef;
            >span {
                color: #ff0000;
            }
        }
        &_coupon {
            .weui-cell {
                padding: 12px 15px;
            }
            &_title {
                font-size: 16px;
                color: #666;
            }
        }
        &_despote {
            display: flex;
            justify-content: space-between;
            padding: 12px 15px;
            font-size: 16px;
            color: #666;
            box-sizing: border-box;
            align-items: center;
            background-color: #fff;
            ;
            border-top: 1px solid #efefef;
            flex-wrap: wrap;
            >span {
                color: #ff0000;
            }
            >p {
                width: 100%;
                color: #ff0000;
                font-size: 14px;
                margin-top: 3px;
            }
        }
        &_plan {
            height: 44px;
            .weui-cell {
                padding: 12px 15px;
            }
            .weui-cells {
                &:after {
                    display: none;
                }
            }
        }
    }

    &_footer {
        z-index: 999;
        height: 50px;
        line-height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        &_price {
            font-size: 18px;
            color: #333;
            display: flex;
            padding: 5px 15px;
            box-sizing: border-box;
            line-height: 20px;
            flex-wrap: wrap;
            >span {
                height: 20px;
                color: #333;
                &:last-of-type {
                    color: #ff0000;
                }
            }
            >p {
                width: 100%;
                height: 20px;
                font-size: 14px;
                color: #999;
            }
        }
        &_btn {
            font-size: 18px;
            color: #fff;
            line-height: 50px;
            width: 120px;
            text-align: center;
            height: 50px;
            background-color: #2196f3;
        }
        &_noControl {
            font-size: 18px;
            color: #fff;
            line-height: 50px;
            width: 150px;
            text-align: center;
            height: 50px;
            background-color: #a9a9a9;
        }
    }
}

.orderInfon_main_defaultAddress {
    padding: 12px 15px;
    box-sizing: border-box;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    >span {
        color: #ff0000;
        font-size: 16px;
        margin-left: 10px;
    }
}

.bookMain_carContent_list {
    margin-top: 10px;
}

.bookMain_carContent_single {
    >i {
        color: #666;
        font-size: 15px;
    }
    >h3 {
        font-size: 12px;
        color: #666;
        line-height: 15px;
        flex-grow: 1;
    }

    &_content {
        box-sizing: border-box;
        background-color: #f1f1f1;
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px;
        padding-right: 15px;
        >img {
            height: 85px;
            width: 85px;
            margin-right: 15px;
        }
        >div {
            flex-grow: 1;
            >h2 {
                font-size: 16px;
                color: #666;
                margin-bottom: 19.5px;
            }
            >h3 {
                font-size: 12px;
                color: #999;
                margin-bottom: 19.5px;
            }
            >div {
                display: flex;
                justify-content: space-between;
                >h3 {
                    font-size: 16px;
                    color: #ff0000;
                }
                >div {
                    font-size: 13px;
                    color: #666;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    >div {
                        display: flex;
                    }
                    span {
                        border: 1px solid #666;
                        border-left: none;
                        height: 30px;
                        display: block;
                        line-height: 30px;
                        text-align: center;
                        font-size: 16px;
                        color: #666;
                        width: 30px;
                        &:nth-of-type(2) {
                            width: 45px;
                        }
                        &:nth-of-type(1) {
                            border-left: 1px solid #666;
                            margin-left: 12px;
                        }
                    }
                }
            }
        }
    }
}

.orderInfo_main_content {
    overflow-y: auto;
    height: 100%;
    -webkit-overflow-scrolling: touch;
}
</style>
<style lang="scss">
.orderInfon_main_priceColl .weui-textarea {
    font-size: 16px;
    color: #999;
}
</style>


<template lang="pug">
    div.orderInfon_main
        header-cop(:heder_title="title")
        div.orderInfon_main
            b-scroll(
                :data="data",
                pulldown=true,
                ref="scollView"
                    )
                div.orderInfo_main_content
                    h3.orderInfon_main_defaultAddress 配送地址
                        span {{service_area}}
                    group.orderInfon_main_address
                        //-- 用户收货地址 -->
                        cell(v-show="haveDefault" ,:title="getNamePhone",:link="{path:'/addressList?chose=1'}" ,:inline-desc='getAddress')
                        cell(v-show="!haveDefault", class="nodefault", title="请选择配送地址" ,:link="{path:'/addressList?chose=1'}")
                        //-- 选择物流方式 -->
                    //-- 订单列表 -->
                    ul.bookMain_carContent_list    
                        li(v-for="item,index in data").bookMain_carContent_single
                            .bookMain_carContent_single_content
                                img(:src="imgFormat(item.img)")
                                div 
                                    h2 {{item.name}}
                                    h3 每次可借阅：{{item.one_rent_num}} ;总借阅次数：{{item.total_use_times}}
                                    div 
                                        h3 {{item.price | currency('￥')}}
                                        div 
                                            |数量
                                            .bookMain_carContent_single_couter
                                                span(@click="numberCheck(item,0)") -
                                                span {{item.num}}
                                                span(@click="numberCheck(item,1)") +
                            div.orderInfon_main_timeRange 有效期：{{item.start}}&nbsp; - &nbsp;{{item.end}}
                                span 共{{item.type==1?"1":item.type==2?"3":item.type==3?"6":"12"}}个月   
                            div.orderInfon_main_price 价格
                                span {{item.price | currency('￥')}}
                            group.orderInfon_main_coupon
                                 cell-box.orderInfon_main_card(@click.native="cardshow(item)",is-link)
                                    span.orderInfon_main_coupon_title 平台优惠券
                                    span(v-show="item.coupon-0 !=0") {{-item.coupon | currency('￥')}}
                            div.orderInfon_main_despote 实际押金
                                span {{zmScore>650?0:item.deposit | currency('￥')}}
                                p(v-show="zmScore>650") 芝麻信用已为您减免 {{item.deposit | currency('￥')}}
                    //-- 租赁时间 -->
                    
                    group.orderInfon_main_priceColl
                        x-textarea(:max="20" v-model="option" placeholder="买家留言")
                    //- 红包选择
                    div.
                        <div v-transfer-dom>
                             <popup style="border-top:1px solid #eee;background:#fff;z-index:99999 ;overflow:hidden" v-model="cardShow" position="bottom" max-height="60%">
                            <ul style="box-sizing:border-box;padding-bottom:60px;max-height:500px;overflow-y:auto;" class="card_main_list">
                                <li class="card_main_single" v-for="item,index in cardList" @click="goShop(item,index)">
                                    <img src="../../../assets/img/common/cardbg.png" alt="card">
                                    <div class="card_main_single_box">
                                        <div class="card_main_single_left">
                                            <h3 class="card_main_single_price">￥
                                                <span>{{item.amount}}</span>
                                            </h3>
                                            <template v-if="item.use_range==1">
                                                <h5 class="card_main_single_rules">全平台可用</h5>
                                            </template>
                                        </div>
                                        <div class="card_main_single_right">
                                            <template v-if="item.use_range==1">
                                                <h3 class="card_main_single_title">租介红包</h3>
                                            </template>
                                            <p class="card_main_single_time nowarp">使用期限：{{item.use_start_time | dataform}}-{{item.use_end_time | dataform}}</p>
                                            <button class="card_main_single_btn" type="button">去使用</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button class="orderInfon_main_cardclose" type="button" @click="closeCard">不使用优惠券</button>
                        </popup> </div>
        footer.orderInfon_footer
            div.orderInfon_footer_price 
                span 合计：
                span {{allPrice | currency('￥')}}
                p 押金可退: {{zmScore>650?0:returnDesopte | currency('￥')}}
            button(@click="buygoods", type="button",v-show="canPay").orderInfon_footer_btn 提交订单
            button(type="button",v-show="!canPay").orderInfon_footer_noControl 暂不支持该地区
        toast(v-model="toast",type="success")  {{confrim}}
        actionsheet(v-model="payShow" ,show-cancel ,:menus="menus", @on-click-menu="browserPay" )
</template>
<script>
import { TransferDom, Popup, Actionsheet, XHeader, Cell, Group, XTextarea, dateFormat, Toast, CellBox } from 'vux';
import { mapGetters } from 'vuex'
import { API, getQuery } from '../../../services';
import HeaderCop from '../common/header.vue';
import BScroll from 'vue-betterscroll';
export default {
    directives: {
        TransferDom
    },
    components: {
        Popup,
        Actionsheet,
        XHeader,
        Group,
        Cell,
        XTextarea,
        Toast,
        CellBox,
        BScroll,
        HeaderCop
    },
    data() {
        return {
            payShow: false,
            menus: {
                menu1: '微信支付',
                menu2: '支付宝支付'
            },
            /* 支付方式 */
            payMethod: 4,
            canPay: true,
            currentItem: {},//当前被选中的书本
            cardShow: false,
            confrim: "请选择地址",
            /* 提示信息 */
            toast: false,
            orderLogistics: '/orderLogistics/',
            /* 是否拥有默认数据 */
            haveDefault: false,
            /* 订单详情数据 */
            data: [],
            cardList: [],//红包列表
            /* 买家留言 */
            option: "",
            title: "结算",
            zmScore: 0,
            maxNumber: 0,
            haveUseList: [],//已经使用的红包列表
            service_area: ""//支持的地址
        }
    },
    computed: {
        returnDesopte() {
            let counter = 0;
            for (const item of this.data) {
                counter += (item.deposit - 0);
            }
            return counter;
        },
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
            'getAddress',
            'getNamePhone'
        ]),
        /**@argument
         * 总计价格
         */
        allPrice() {
            let counter = 0;
            for (const item of this.data) {
                let despote = 0;
                if (this.zmScore < 650) {
                    despote = item.deposit - 0;
                }
                counter += (item.price - 0 + despote) * item.num;
            }
            counter -= this.allcoupon;
            return counter < 0 ? 0 : counter;
        },
        allcoupon() {
            let counter = 0;
            for (const item of this.data) {
                counter += (item.coupon - 0);
            }
            return counter;
        },
        deposit() {
            let counter = 0;
            for (const item of this.data) {
                let despote = 0;
                if (this.zmScore < 650) {
                    despote = item.deposit - 0;
                } else {
                    return 0;
                }
                counter += despote * item.num;
            }
            return counter;
        }
    },
    methods: {
        /* 浏览器支付 */
        browserPay(key) {
            if (key == 'menu1') {
                /* 微信支付 */
                this.payMethod = 5;
            } else if (key == 'menu2') {
                this.payMethod = 4;
            } else {
                return false;
            }
            /* 数据拼接 */
            let cardsList = [];
            for (const item of this.data) {
                cardsList.push({
                    card_id: item.card_id,
                    zujie_coupon: item.couponId ? item.couponId : "",
                    store_coupon: "",
                    num: item.num
                })
            }
            let self=this;
            API.book.cardOrder({
                user_id: self.getUserInfoUserId,
                token: self.getUserInfoToken,
                address_id: self.$store.state.addressData.id || self.$store.state.addressData.address_id,
                message: self.option,
                cards: cardsList
            }).then((res) => {
                if (res.body.code == 200) {
                    let self = this;
                    let openId = localStorage.getItem("openId");
                    API.book.H5Pay({
                        userId: this.getUserInfoUserId,
                        token: this.getUserInfoToken,
                        orderSn: res.body.data.order_sn,
                        payMethod: this.payMethod,
                        openId: openId,
                    }).then((res) => {
                        if (res.body.code == 250) {
                            return false;
                            self.confrim = "支付完成";
                            self.toast = true;
                            setTimeout(() => {
                                self.$router.push({
                                    path: '/book'
                                });
                            }, 1500);
                        } else if (res.body.code == 300) {
                            self.confrim = res.body.msg;
                            self.toast = true;
                            setTimeout(() => {
                                self.$router.push({
                                    path: '/book'
                                });
                            }, 1500);
                        } else {
                            self.payTypeData = res.body;
                            if (key == 'menu1') {
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
                        self.$router.push({
                            path: '/book'
                        })
                    });
                }
            });

        },
        onBridgeReady() {
            let self = this;
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', self.paydata,
                function(res) {
                    localStorage.setItem("reload", "1");
                    if (res.err_msg == "get_brand_wcpay_request:fail") {
                        self.confrim = "支付异常";
                        self.toast = true;
                        setTimeout(() => {
                            self.$router.push({
                                path: '/book'
                            })
                        }, 500);
                    }
                    if (res.err_msg == "get_brand_wcpay_request:cancel") {
                        self.$router.push({
                            path: '/book'
                        })
                    }
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        self.confrim = "支付成功";
                        self.toast = true;
                        setTimeout(() => {
                            self.$router.push({
                                path: '/book'
                            })
                        }, 500);
                    }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
                }
            );
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
        cardshow(item) {
            this.cardShow = true;
            this.currentItem = item;
        },
        /* 不使用优惠券 */
        closeCard() {
            for (let i = 0; i < this.haveUseList.length; i++) {
                if (this.haveUseList[i].coupon_no == this.currentItem.couponId) {
                    this.currentItem.couponId = "";
                    this.currentItem.coupon = 0;
                    this.cardList.push(this.haveUseList[i]);
                    this.haveUseList.splice(i, 1);
                }
            }
            this.cardShow = false;
            let i = [];
            i = this.data;
            this.data = [];
            this.data = i;

        },
        goShop(item, index) {
            this.closeCard();
            this.currentItem.couponId = item.coupon_no;
            this.currentItem.coupon = item.amount;
            /* 清除当前红包 */
            this.haveUseList.push(item);
            this.cardList.splice(index, 1);
            this.cardShow = false;
            let i = [];
            i = this.data;
            this.data = [];
            this.data = i;
        },
        /**@argument
        数目增减   
        0 减少 1 增加 
         */
        numberCheck(item, type) {
            if (type == 0) {
                if (item.num == 1
                ) {
                    return false;
                } else {
                    item.num--;
                    this.maxNumber--;
                    let data = this.data;
                    this.data = [];
                    this.data = data;
                }
            } else {
                if (this.maxNumber == 4) {
                    this.confrim = "最多只能购买4张计划";
                    this.toast = true;
                    return false;
                } else {
                    item.num++;
                    this.maxNumber++;
                    let data = this.data;
                    this.data = [];
                    this.data = data;
                }
            }

        },
        /**@argument
         * 获取芝麻信用分
         */
        userZMScore() {
            API.person.getUserZMScore({
                user_id: this.getUserInfoUserId
            }).then((res) => {
                // console.log(res);
                if (res.body.code == 200) {
                    if (res.body.msg == "获取成功") {
                        this.zmScore = res.body.data.zmscore;
                    }
                }
            })
        },
        /* 返回初始和结束周期 */
        rentRange(type) {
            let num = (type == 1 ? "1" : type == 2 ? "3" : type == 3 ? "6" : "12") - 0;
            let self = this;
            /* 获取日月季 */
            let year = new Date().getFullYear(),
                month = new Date().getMonth() + 1,
                /* 当前天数 */
                day = new Date().getDate(),
                /* 获取当前时间数（毫秒） */
                time = new Date().getTime();
            let year_3 = Math.floor((month + num) / 12);
            let month_3 = (month + num) % 12;
            if (month_3 == 0) {
                month_3 = 12;
                year_3--;
            }
            let monthTime = new Date(year + year_3 + "/" + month_3 + "/" + day).getTime();
            let start = dateFormat((new Date().getTime()), 'YYYY.MM.DD');
            let end = dateFormat(monthTime - 24 * 3600 * 1000, 'YYYY.MM.DD');
            return { start, end };
        },
        /* 滚动列表重置刷新 */
        scollRefresh() {
            this.$refs.scollView.scroll.refresh();
        },
        routerBack() {
            this.$router.goBack();
        },
        /* 提交订单 */
        buygoods() {
            let self = this;
            /* 数值校验 */
            if (!self.$store.state.addressData.mobile) {
                this.confrim = "请选择地址";
                this.toast = true;
                return false;
            }
            /* 数据拼接 */
            let cardsList = [];
            for (const item of this.data) {
                cardsList.push({
                    card_id: item.card_id,
                    zujie_coupon: item.couponId ? item.couponId : "",
                    store_coupon: "",
                    num: item.num
                })
            }
            if (this.isAlipay() == 0) {
                API.book.cardOrder({
                    user_id: self.getUserInfoUserId,
                    token: self.getUserInfoToken,
                    address_id: self.$store.state.addressData.id || self.$store.state.addressData.address_id,
                    message: self.option,
                    cards: cardsList
                }).then((res) => {
                    if (res.body.code == 200) {
                        let openId = localStorage.getItem("openId");
                        API.book.H5Pay({
                            userId: this.getUserInfoUserId,
                            token: this.getUserInfoToken,
                            orderSn: res.body.data.order_sn,
                            payMethod: this.payMethod,
                            openId: openId,
                        }).then((res) => {
                            /* 微信支付 */
                            if (res.body.code == 250) {
                                self.confrim = "支付完成";
                                self.toast = true;
                                setTimeout(() => {
                                    self.$router.push({
                                        path: '/book'
                                    });
                                }, 1500);
                            } else if (res.body.code == 300) {
                                self.confrim = res.body.msg;
                                self.toast = true;
                                setTimeout(() => {
                                    self.$router.push({
                                        path: '/book'
                                    });
                                }, 1500);
                            } else {
                                self.paydata = res.body;
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
                            self.$router.push({
                                path: '/book'
                            })
                        });
                    } else {
                        this.confrim = res.body.msg;
                        this.toast = true;
                        return false;
                    }
                })
                /* 当前为支付宝环境 */
            } else if (this.isAlipay() == 1) {

            } else {
                this.payShow = true;
            }
            /* 点击确认时执行具体删除操作 */
        },
        getCardList() {
            API.card.storeCard({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                type: 1,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.cardList = res.body.data;
                }
            });
        },
        /* 获取用户默认地址，并且出发vuex更新 */
        getDefaultAddress() {
            API.book.defaultAddress({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.service_area = res.body.data.service_area;
                    if (res.body.data.default_address) {
                        this.haveDefault = true;
                        if (res.body.data.default_address) {
                            this.$store.dispatch('SetAddress', res.body.data.default_address);
                        }
                    } else {
                        this.haveDefault = false;
                    }
                }
            }).then(() => {
                this.getCardList();
            });
        },

    }, mounted() {
        this.getDefaultAddress();
        this.userZMScore();
    },
    activated() {
        /* 地址点击函数 */
        if (localStorage.getItem('addressClick')) {
            localStorage.setItem('addressClick', '');
            API.book.checkAddress({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                address_id: this.$store.state.addressData.id || this.$store.state.addressData.address_id
            }).then((res) => {
                if (res.body.code != 200) {
                    this.confrim = res.body.msg;
                    this.canPay = false;
                    this.toast = true;
                } else {
                    this.canPay = true;
                }
            });
            this.haveDefault = true;
        }
        this.data = JSON.parse(localStorage.getItem("resultList"));
        this.maxNumber = 0;
        for (let item of this.data) {
            this.maxNumber++;
            item.num = 1;
            item.coupon = 0;
            item.start = this.rentRange(item.type).start;
            item.end = this.rentRange(item.type).end;
        }
    }
} 
</script>