
<style lang="scss">
.orderInfon {
    &_main {
        height: 100%;
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
        &_card {
            font-size: 15px;
            color: #272727;
            display: flex;
            button {
                border: 1px solid #2196f3;
                color: #2196f3;
                padding: 2px 10px;
                border-radius: 5px;
                margin-right: 10px;
            }
            span:last-of-type {
                color: #f80000;
                flex-grow: 1;
                text-align: right;
                box-sizing: border-box;
                padding-right: 20px;
            }
        }
        &_cardclose {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 50px;
            line-height: 50px;
            background-color: #2196f3;
            font-size: 15px;
            color: #fff;
            text-align: center;
            display: block;
            width: 100%;
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
                    color: #f80000;
                    width: 50%;
                    display: block;
                    >span {
                        color: #272727;
                        font-size: 13px;
                        text-decoration: line-through;
                    }
                }
                &:nth-of-type(3) {
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
    }

    &_footer {
        z-index: 999;
        height: 60px;
        line-height: 60px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        &_price {
            box-sizing: border-box;
            padding-left: 15px;
            flex-grow: 1;
            font-size: 14px;
            color: #272727;
            >span {
                font-size: 18px;
                color: #f80000;
            }
        }
        &_btn {
            font-size: 18px;
            color: #fff;
            line-height: 60px;
            width: 120px;
            text-align: center;
            height: 60px;
            background-color: #2196f3;
        }
    }
}

.orderInfo_main_content {
    height: calc(100% - 107px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
</style>

<template>
    <div>
        <div class="orderInfon_main">
            <div class="help_common_title">
                <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">确认订单</x-header>
            </div>
            <div class="orderInfo_main_content">
                <group class="orderInfon_main_address">
                    <!-- 用户收货地址 -->
                    <cell v-show="haveDefault" :title="getNamePhone" :link="{path:'/addressList?chose=1'}" :inline-desc='getAddress'></cell>
                    <cell v-show="!haveDefault" class="nodefault" title="请选择收货地址" :link="{path:'/addressList?chose=1'}"></cell>
                    <!-- 选择物流方式 -->
                    <cell v-show="haveDefault" :title="returnTpl" :link="orderLogistics"></cell>
                    <div v-show="returnTpl=='自提'" class="main_since_single">
                        <div class="main_since_text">
                            <h2 class="main_since_title">{{tpl.since_name}}</h2>
                            <h2 class="main_since_price">{{tpl.since_tel}}</h2>
                        </div>
                        <p class="main_since_intr twonowarp">{{tpl.province_name}}{{tpl.city_name}}{{tpl.region_name}}{{tpl.since_detailed_address}}</p>
                    </div>
                </group>
                <h3 class="orderInfon_main_shopTitle">
                    {{infoData.store_name}}
                </h3>
                <div class="orderInfon_main_mess">
                    <!-- 商品详情图 -->
                    <img :src="imgFormat(infoData.goodsFace)" alt="" class="orderInfon_main_img">
                    <div class="orderInfon_main_text">
                        <!-- 商品详情名称 -->
                        <span class="orderInfon_main_goodsTitle twonowarp">
                            {{infoData.goodsName}}
                        </span>
                        <!-- 单价租金 -->
                        <span v-if="!act_price" class="orderInfon_main_price">
                            ￥{{infoData.rent_period_now_rent_price}}/{{timeText}}
                        </span>
                        <span v-else class="orderInfon_main_price">
                            ￥{{act_price}}/{{timeText}}
                            <span class="orderInfon_main_price_old">￥{{infoData.rent_period_now_rent_price}}/{{timeText}}</span>
                        </span>
                        <!-- 数量 -->
                        <span class="orderInfon_main_num">数量×{{infoData.cart_content_good_amount}}</span>
                    </div>
                </div>
                <!-- 租赁时间 -->
                <div class="orderInfon_main_timeRange">{{rentRange.start}}&nbsp;至&nbsp;{{rentRange.end}}
                    <span>共{{infoData.cart_time_number}}{{timeText}}</span>
                </div>
                <!-- 收货地址和物流方式 -->
                <group class="orderInfon_main_priceColl">
                    <cell title="运费" :value="returnTplPrice | currency('￥')"></cell>
                    <cell title="商品租金" :value="goodsAllPrice  | currency('￥')"></cell>
                    <cell-box class="orderInfon_main_card" @click.native="cardshow(0)" is-link>
                        <span>店铺优惠券</span>
                        <span v-show="storePrice-0 !=0">{{storePrice | currency('￥')}}</span>
                    </cell-box>
                    <cell-box class="orderInfon_main_card" @click.native="cardshow(1)" is-link>
                        <span>平台优惠券</span>
                        <span v-show="currentPrice-0 !=0">{{currentPrice | currency('￥')}}</span>
                    </cell-box>
                    <div v-transfer-dom>
                        <!-- 时间选择 -->
                        <popup style="border-top:1px solid #eee;background:#fff;z-index:99999 ;overflow:hidden" v-model="cardShow" position="bottom" max-height="60%">
                            <ul style="box-sizing:border-box;padding-bottom:60px;max-height:500px;overflow-y:auto;" class="card_main_list">
                                <li class="card_main_single" v-for="item in cardList" @click="goShop(item)">
                                    <img src="../../assets/img/common/cardbg.png" alt="card">
                                    <div class="card_main_single_box">
                                        <div class="card_main_single_left">
                                            <h3 class="card_main_single_price">￥
                                                <span>{{item.amount}}</span>
                                            </h3>
                                            <template v-if="item.use_range==1">
                                                <h5 class="card_main_single_rules">全平台可用</h5>
                                            </template>
                                            <template v-else>
                                                <h5 class="card_main_single_rules">指定店铺可用</h5>
                                            </template>
                                        </div>
                                        <div class="card_main_single_right">
                                            <template v-if="item.use_range==1">
                                                <h3 class="card_main_single_title">租介红包</h3>
                                            </template>
                                            <template v-else>
                                                <h3 class="card_main_single_title">店铺红包</h3>
                                                <h3 class="card_main_single_store">{{item.store_name}}</h3>
                                            </template>
                                            <p class="card_main_single_time nowarp">使用期限：{{item.use_start_time | dataform}}-{{item.use_end_time | dataform}}</p>
                                            <button class="card_main_single_btn" type="button">去使用</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button class="orderInfon_main_cardclose" type="button" @click="closeCard">不使用优惠券</button>
                        </popup>
                    </div>
                    <cell title="商品押金" :value="goodsDespoit - antDerate | currency('￥')"></cell>
                    <!-- <cell title="商品押金" :value="goodsDespoit | currency('￥')"></cell> -->
                    <div style="font-size:12px;color:red;margin:-12px 0 0 15px">平台已为您减免{{antDerate}}元租金</div>
                    <x-textarea :max="20" v-model="option" placeholder="买家留言"></x-textarea>
                </group>
            </div>

            <footer class="orderInfon_footer">
                <div class="orderInfon_footer_price">
                    合计：
                    <!-- <span>{{goodsTotolPrice | currency('￥')}}</span> -->
                    <span>{{goodsTotolPrice - antDerate | currency('￥')}}</span>
                </div>
                <button class="orderInfon_footer_btn" @click="buygoods" type="button">提交订单</button>
            </footer>
            <toast v-model="toast" type="success">{{confrim}}</toast>
            <toast v-model="toasts" type="cancel">{{confrim}}</toast>
            <actionsheet v-model="payShow" show-cancel :menus="menus" @on-click-menu="browserPay" show-cancel></actionsheet>
        </div>
    </div>
</template>
<script>
import { XHeader, Cell, Actionsheet, Group, XTextarea, dateFormat, Toast, CellBox, TransferDom, Popup } from 'vux';
import { mapGetters } from 'vuex'
import { API, getQuery } from '../../services';

export default {
    directives: {
        TransferDom
    },
    components: {
        Actionsheet,
        XHeader,
        Group,
        Cell,
        XTextarea,
        Toast,
        CellBox,
        Popup
    },
    data() {
        return {
            payShow: false,
            menus: {
                menu1: '微信支付',
                menu2: '支付宝支付'
            },
            /* 当前红包数据集合 */
            cardstate: {
                id: "",//平台红包
                storeId: "",//店铺红包
            },
            /* 平台红包优惠价格是否显示 */
            priceShow: false,
            /* 当前优惠价 平台优惠价格和店铺优惠价格*/
            storePrice: 0,
            currentPrice: 0,
            currentCard: 0,
            cardShow: false,
            confrim: "请选择地址",
            /* 提示信息 */
            toast: false,
            toasts: false,
            /* 自提点数据 */
            tpl: {},
            orderLogistics: '/orderLogistics/',
            /* 是否拥有默认数据 */
            haveDefault: false,
            /* 订单id */
            cartId: 0,
            /* 订单详情数据 */
            infoData: {
                goodsFace:""
            },
            /* 时间对照表 */
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },
            /* 运费规则列表 */
            tplRules: {},
            /* 买家留言 */
            option: "",
            paydata: {
            },
            /* 红包列表 */
            /* 平台红包列表 */
            zjList: [],
            /* 店铺红包列表 */
            storeList: [],
            /* 当前红包列表 */
            cardList: [],
            /* 支付方式 */
            payMethod: 4,
            payTypeData: null,
            /* 当前红包数据类型 */
            currentCardType: 0,
            /* 活动价格 */
            act_price: null,
            storeInfo: null,
            antDerate: 0
        }
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
            'getAddress',
            'getNamePhone'
        ]),
        /* 返回物流方式 */
        returnTpl() {
            this.getTplPrice();
            if (this.$store.state.tplId == 1) {
                return "快递";
            } else if (this.$store.state.tplId == 2) {
                return "上门";
            } else if (this.$store.state.tplId == 3) {
                this.tpl = this.$store.state.sinceData;
                return "自提";
            } else {
                return "请选择物流方式";
            }
        },
        /* 返回初始和结束周期 */
        rentRange() {
            let self = this;
            let start = dateFormat(new Date(self.infoData.cart_start_time * 1000), 'YYYY-MM-DD');
            let end = dateFormat(new Date(self.infoData.cart_end_time * 1000), 'YYYY-MM-DD');
            return { start, end };
        },
        /* 返回周期名称 */
        /* 返回当前周期文字 */
        timeText() {
            return this.timeMap[this.infoData.rent_period_type];
        },
        /* 计算商品押金 */
        goodsDespoit() {
            if (this.infoData.goods_deposit == 0) {
                return 0;
            }
            let despoite = this.infoData.goods_deposit * this.infoData.cart_content_good_amount - (this.goodsAllPrice + this.currentPrice + this.storePrice);
            if (despoite <= 0) {
                return 0;
            } else {
                return despoite;
            }
        },
        /* 计算商品借还押金 */
        goodsalipay(){
            /* 计算后如果押金小于0写原押金，否则写真实押金，原押金也为0则显示0.1 */
            let goodsDespoit=this.goodsDespoit-this.antDerate;
            if(goodsDespoit<=0){
                if(this.infoData.goods_deposit==0){
                    return 0.1;
                }else{
                    return this.infoData.goods_deposit;
                }
            }else{
                return goodsDespoit.toFixed(2);
            }
        },
        /* 计算商品合计租金 */
        goodsTotolPrice() {
            let allPrice = this.goodsAllPrice + this.currentPrice + this.storePrice;
            allPrice = (allPrice <= 0 ? 0 : allPrice);
            return allPrice + this.returnTplPrice + this.goodsDespoit;
        },
        /* 计算商品总租金 */
        /* 租期*金额*数量+押金+运费 */
        goodsAllPrice() {
            let Price;
            if (this.act_price) {
                Price = this.act_price * this.infoData.cart_time_number * this.infoData.cart_content_good_amount;
            } else {
                Price = this.infoData.rent_period_now_rent_price * this.infoData.cart_time_number * this.infoData.cart_content_good_amount;
            }
            return Price;
        },
        /* 运费计算 */
        returnTplPrice() {
            let num = this.infoData.cart_content_good_amount;
            let second = num - 1;
            if (this.$store.state.tplId == 1) {
                return this.tplRules.freight_first_price-0 + ((this.tplRules.freight_continued_price-0) * second) ;
                
            } else if (this.$store.state.tplId == 2) {
                return (this.tplRules.freight_door_cost-0) * num ;
            } else if (this.$store.state.tplId == 3) {
                this.tpl = this.$store.state.sinceData;
                return 0;
            } else {
                return 0;
            }
        }
    },
    methods: {
        /* 获取当前活动价格 */
        getArtPrice(rentType, dataObj) {
            for (let item of dataObj) {
                if (item.rent_period_type == rentType) {
                    return item.act_price;
                }
            }
            return null;
        },
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
            API.order.orderPay({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                info: [{
                    addressId:this.$store.state.addressData.id ,//地址id 物流或者上门选择该字段
                    cartId: this.cartId, //购物车id
                    cart_tpl: this.$store.state.tplId,//物流方式
                    freight_continued_price: this.tplRules.freight_continued_price,//快递续件运费
                    freight_door_cost: this.tplRules.freight_door_cost,//上门的运费
                    freight_first_price: this.tplRules.freight_first_price,//快递的收件运费
                    goodsAmount: this.infoData.cart_content_good_amount,//数量
                    order_time_number: this.infoData.cart_time_number,//租赁周期
                    rentTime: this.infoData.cart_start_time,//租赁开始时间
                    rent_period_id: this.infoData.cart_content_rent_prieod_id,//
                    returnTime: this.infoData.cart_end_time,//租赁结束时间
                    sinceId: this.$store.state.tplId == 3 ? this.$store.state.sinceData.since_id : "",//自提点id
                    coupon_no: this.cardstate.id,//平台红包id,
                    store_coupon_no: this.cardstate.storeId,//店铺红包id,
                    message: this.option,//买家留言
                }]
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
                        self.payTypeData = resopndy.body;
                        if (key == 'menu1') {
                            //微信支付
                            window.location.href = this.payTypeData;
                        } else if (key == 'menu2') {
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
        /* 选择完成 */
        goShop(item) {
            /* 当前数据类型为店铺红包 */
            if (this.currentCardType == 0) {

                this.cardstate.storeId = item.coupon_no;
                this.storePrice = 0 - item.amount;
                if (this.storePrice + this.goodsAllPrice <= 0) {
                    this.storePrice = 0 - this.goodsAllPrice;
                }
                /* 平台红包已经选择的情况下 */
                if (this.currentPrice != 0) {
                    if (this.storePrice + this.goodsAllPrice == 0) {
                        this.currentPrice = 0;
                        this.cardstate.id = "";
                    } else {
                        this.currentPrice = 0 - (this.goodsAllPrice + this.storePrice);
                    }
                }
            } else {
                if (this.storePrice + this.goodsAllPrice == 0) {
                    this.confrim = "已达最大优惠额度";
                    this.toast = true;
                    this.cardShow = false;
                    return false;
                } else {
                    this.cardstate.id = item.coupon_no;
                    this.currentPrice = 0 - item.amount;
                    if (this.currentPrice + this.storePrice + this.goodsAllPrice <= 0) {
                        this.currentPrice = 0 - (this.goodsAllPrice + this.storePrice);
                    }
                }
            }
            /* 当前优惠价格 */
            this.priceShow = true;
            this.cardShow = false;
        },
        /* 关闭红包选择框 */
        closeCard() {
            /* 撤销店铺红包 */
            if (this.currentCardType == 0) {
                /* 存在平台红包的情况下 */
                if (this.currentPrice != 0) {
                    if (this.currentPrice + this.goodsAllPrice <= 0) {
                        this.currentPrice = 0 - this.goodsAllPrice;
                    } else {
                        for (let item of this.zjList) {
                            if (item.coupon_no == this.cardstate.id) {
                                this.currentPrice = 0 - item.amount;
                            }
                        }
                    }
                }
                this.storePrice = 0;
                this.cardstate.storeId = "";
            } else {
                this.cardstate.id = "";
                this.currentPrice = 0;
            }
            this.cardShow = false;
        },
        /* 支付接口  1选择平台红包 0选择店铺红包*/
        cardshow(type) {
            this.currentCardType = type;
            type == 1 ? this.cardList = this.zjList : this.cardList = this.storeList;
            if (this.cardList.length == 0) {
                this.confrim = "暂无可用红包";
                this.toast = true;
                return false;
            }
            this.cardShow = true;
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
                                path: '/index/main/order'
                            });
                        }, 500);
                    }
                    if (res.err_msg == "get_brand_wcpay_request:cancel") {
                        self.$router.push({
                            path: '/index/main/order'
                        });
                    }
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        self.confrim = "支付成功";
                        self.toast = true;
                        setTimeout(() => {
                            self.$router.push({
                                path: '/index/main/order'
                            });
                        }, 500);
                    }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
                }
            );
        },
        routerBack() {
            this.$router.goBack();
        },
        /* 提交订单 */
        buygoods() {
            /* 数值校验 */
            if (this.getAddress == "") {
                this.confrim = "请选择地址";
                this.toasts = true;
                return false;
            }
            if (this.returnTpl == "请选择物流方式") {
                this.confrim = "请选择物流方式";
                this.toasts = true;
                return false;
            }
            let self = this;
            if (this.isAlipay() == 0) {
                API.order.orderPay({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    info: [{
                        addressId:this.$store.state.addressData.id,//地址id 物流或者上门选择该字段
                        cartId: this.cartId, //购物车id
                        cart_tpl: this.$store.state.tplId,//物流方式
                        freight_continued_price: this.tplRules.freight_continued_price,//快递续件运费
                        freight_door_cost: this.tplRules.freight_door_cost,//上门的运费
                        freight_first_price: this.tplRules.freight_first_price,//快递的收件运费
                        goodsAmount: this.infoData.cart_content_good_amount,//数量
                        order_time_number: this.infoData.cart_time_number,//租赁周期
                        rentTime: this.infoData.cart_start_time,//
                        rent_period_id: this.infoData.cart_content_rent_prieod_id,//
                        returnTime: this.infoData.cart_end_time,//
                        sinceId: this.$store.state.tplId == 3 ? this.$store.state.sinceData.since_id : "",//自提点id
                        coupon_no: this.cardstate.id,//平台红包id,
                        store_coupon_no: this.cardstate.storeId,//店铺红包id,
                        message: this.option,
                    }]
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
                /* 当前为支付宝环境 */
            } else if (this.isAlipay() == 1) {
                API.order.orderPay({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    info: [{
                        addressId: this.$store.state.addressData.id,//地址id 物流或者上门选择该字段
                        cartId: this.cartId, //购物车id
                        cart_tpl: this.$store.state.tplId,//物流方式
                        freight_continued_price: this.tplRules.freight_continued_price,//快递续件运费
                        freight_door_cost: this.tplRules.freight_door_cost,//上门的运费
                        freight_first_price: this.tplRules.freight_first_price,//快递的收件运费
                        goodsAmount: this.infoData.cart_content_good_amount,//数量
                        order_time_number: this.infoData.cart_time_number,//租赁周期
                        rentTime: this.infoData.cart_start_time,//
                        rent_period_id: this.infoData.cart_content_rent_prieod_id,//
                        returnTime: this.infoData.cart_end_time,//
                        sinceId: this.$store.state.tplId == 3 ? this.$store.state.sinceData.since_id : "",//自提点id
                        coupon_no: this.cardstate.id,//平台红包id,
                        store_coupon_no: this.cardstate.storeId,//店铺红包id,
                        message: this.option,
                    }]
                }).then((res) => {
                    if (res.body.code == 200) {
                        let self = this;
                        let openId = localStorage.getItem("openId");
                        /* order_id */
                        API.alipay.orderId({
                            userId:this.getUserInfoUserId,
                            Info:{
                                order_sn: res.body.data.order_big_sn,
                                goods_name:this.infoData.goodsName,
                                address:this.getAddress,    
                                shop_name:this.storeInfo,
                                rent_amount:(this.goodsTotolPrice-this.antDerate),/* 总支付价格 */
                                deposit_amount:this.goodsalipay,//押金
                                borrow_time:this.infoData.cart_start_time,
                                expiry_time:this.infoData.cart_end_time,
                                order_id:res.body.data.order_id,
                            }
                        }).then((res)=>{
                                if(res.body.code == 200){
                                    window.location.href=res.body.data.link_url;
                                }
                        },(err)=>{
                        });
                       /*  API.order.OrderWechat({
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
                        }) */
                    }
                });
            } else {
                this.payShow = true;
            }
        },
        /* 数据初始化 */
        Initialization() {
            this.storeInfo = this.$route.query.address;
            this.antDerate = this.$route.query.antDerate;
            this.cartId = this.$route.params.id;
            API.order.orderConfirm({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                cartId: [this.cartId],
            }).then((res) => {
                if (res.body.code != 200) {
                    this.$router.push({
                        path: '/index/main/order'
                    });
                }
                this.infoData = res.body.data.cart_list[0];
                /* 获取当前活动价格 */
                this.act_price = this.getArtPrice(this.infoData.rent_period_type, this.infoData.rent_period);
                this.orderLogistics = "/orderLogistics/" + this.infoData.cart_content_goods_id;
                /* 获取红包 1为平台优惠券 2为店铺优惠券 */
                API.card.storeCard({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    storeId: this.infoData.store_id,
                    type: 1,
                }).then((res) => {
                    if (res.body.code == 200) {
                        this.zjList = res.body.data;
                    }
                });
                /* 分别获取店铺红包和平台红包 */
                API.card.storeCard({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    storeId: this.infoData.store_id,
                    type: 2
                }).then((res) => {
                    if (res.body.code == 200) {
                        this.storeList = res.body.data;
                    }
                });
            }, (res) => {
                this.$router.push({
                    path: '/index/main/order'
                });
            });
            this.getDefaultAddress();
            /* 清除之前的快递信息 */
            this.$store.dispatch('ClearTpl');
        },
        /* 获取用户默认地址，并且出发vuex更新 */
        getDefaultAddress() {
            API.person.addressInfo({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                is_default: 1
            }).then((res) => {
                if (res.body.code == 200) {
                    this.haveDefault = true;
                    res = res.body.data.addressList;
                    this.$store.dispatch('SetAddress', res);
                } else {
                    this.haveDefault = false;
                }
            });
        },
        /* 获取运费模板 */
        getTplPrice() {
            if (this.$store.state.addressData.detail != "") {
                API.order.tplPrice({
                    tpl: this.$store.state.tplId,
                    province: this.$store.state.addressData.province,
                    city: this.$store.state.addressData.city,
                    region: this.$store.state.addressData.district,
                    goodsId: this.infoData.cart_content_goods_id
                }).then((res) => {
                    if (res.body.code == 200) {
                        this.tplRules = res.body.data;
                    }
                });
            }
        }
    }, mounted() {
        overscroll(document.querySelector('.orderInfo_main_content'));
        /* 获取总数据 */
        this.Initialization();
    },
    activated() {
        overscroll(document.querySelector('.orderInfo_main_content'));
        /* 新订单时触发更新 */
        if (localStorage.getItem('orderClick')) {
            localStorage.setItem('orderClick', '');
            this.Initialization();
            this.cardstate = {
                id: "",
                storeId: "",
            };
            this.priceShow = false;
            /* 优惠价格清零 */
            this.currentPrice = 0;
            this.storePrice = 0;
        }
        /* 地址点击函数 */
        if (localStorage.getItem('addressClick')) {
            localStorage.setItem('addressClick', '');
            this.haveDefault = true;
        }
    }
} 
</script>