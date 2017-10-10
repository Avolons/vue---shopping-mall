<style lang="scss">
@import "./goodsinfo.scss";
</style>

<template>
    <div>
        <div class="goodsinfo_container">
            <!--头部区域，返回按钮 -->
            <header class="goodsinfo_header">
                <!-- 返回按钮 -->
                <div class="goodsinfo_header_back" @click="routerBack()">
                    <i class="iconfont">&#xe7a7;</i>
                </div>
                <!-- 商品简介轮播图 -->
                <swiper class="main_swiper" dots-position="center" :aspect-ratio="400/400" width="100%">
                    <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerlist" :key="index">
                        <img :src="item.goodsFace">
                    </swiper-item>
                </swiper>
                <h2 class="goodsinfo_title twonowarp">{{goodsTitle}}</h2>
                <div class="goodsinfo_box">
                    <div class="goodsinfo_price">
                        <span class="goodsinfo_newprice">￥{{currentGoodsData.rent_period_now_rent_price}}/{{timeText}}</span>
                        <span class="goodsinfo_oldprice">￥{{currentGoodsData.rent_period_old_rent_price}}/{{timeText}}</span>
                    </div>
                    <!-- 日期选择框 -->
                    <ul class="goodsinfo_datetime">
                        <template v-for="(item,index) in currentTypedata.rent_period">
                            <li class="goodsinfo_datetime_single" :class='{"goodsinfo_datetime_single--select":item.sel==1}' @click="timeClick(item,index)">{{timeMap[item.rent_period_type]}}</li>
                        </template>
                    </ul>
                </div>
                <div class="goodsinfo_box">
                    <div class="goodsinfo_allprice">
                        总租金：
                        <span>{{totalRent | currency('￥') }}</span>
                    </div>
                    <div class="goodsinfo_rentTime">
                        租期
                        <div class="goodsinfo_rentTime_num">
                            <span @click="numcouter(0,0)">-</span>
                            <input type="number" style="font-size:14px" @blur="goodsNumCheck(0)" v-model="currentGoodsData.rentTime">
                            <span @click="numcouter(0,1)">+</span>
                        </div>
                    </div>
                </div>
            </header>
            <article class="goodsinfo_content">
                <!-- 日期选择 -->
                <div @click="haveSelect()" class="goodsinfo_content_alltime" v-show="havestart">
                    选择起租时间
                    <span>
                        <i style="color: #989898;" class="iconfont">&#xe6d7;</i>
                    </span>
                </div>
                <div @click="haveSelect()" v-show="!havestart" class="goodsinfo_content_alltime">
                    您将租用 &nbsp;&nbsp; {{timeValue}}&nbsp;至&nbsp;{{despoiteRange}}&nbsp;({{currentGoodsData.rentTime}}{{timeText}})
                    <span>
                        <i style="color: #989898;" class="iconfont">&#xe6d7;</i>
                    </span>
                </div>

                <div v-transfer-dom>
                    <!-- 时间选择 -->
                    <popup style="border-top:1px solid #eee;background:#fff" v-model="timeselectshow" position="bottom" max-height="100%">
                        <div class="goodsinfo_content_timeselect">
                            <div class="goodsinfo_content_close">
                                <span>请选择起租日期</span>
                                <button @click="timehaveSelect()">完成</button>
                            </div>
                            <inline-calendar @on-change='timehaveSelect' class="inline-calendar-demo" :show.sync="timeconfig.show" v-model="timeValue" :start-date="timerange.startTime" :end-date="timerange.endTime" :range="timeconfig.range" :render-on-value-change="timeconfig.changerender" :show-last-month="timeconfig.showLastMonth" :show-next-month="timeconfig.showNextMonth" :highlight-weekend="timeconfig.highlightWeekend" :return-six-rows="timeconfig.return6Rows" :hide-header="timeconfig.hideHeader" :hide-week-list="timeconfig.hideWeekList" :replace-text-list="timeconfig.replaceTextList" :weeks-list="timeconfig.weeksList" :render-function="timeconfig.buildSlotFn" :disable-past="timeconfig.disablePast" :disable-future="timeconfig.disableFuture">
                            </inline-calendar>
                        </div>
                    </popup>
                </div>
                <div class="goodsinfo_content_time">

                    <!-- 商品特性 -->
                    <ul class="goodsinfo_typelist">
                        <li class="goodsinfo_typelist_single" v-show="staticdata.goods_is_free_deposit==1">
                            <i class="iconfont">&#xe6c1;</i>
                            免押金
                        </li>
                        <li class="goodsinfo_typelist_single" v-show="staticdata.goods_is_free_shipping==1">
                            <i class="iconfont">&#xe6c1;</i>
                            包邮
                        </li>
                        <li class="goodsinfo_typelist_single" v-show="staticdata.goods_is_deductible==1">
                            <i class="iconfont">&#xe6c1;</i>
                            免赔
                        </li>
                        <li class="goodsinfo_typelist_single" v-show="staticdata.goods_is_door==1">
                            <i class="iconfont">&#xe6c1;</i>
                            送货上门
                        </li>
                        <li class="goodsinfo_typelist_single" v-show="staticdata.goods_is_since==1">
                            <i class="iconfont">&#xe6c1;</i>
                            自提
                        </li>
                        <li class="goodsinfo_typelist_single" v-show="staticdata.goods_is_follow_lease==1">
                            <i class="iconfont">&#xe6c1;</i>
                            随租随还
                        </li>
                        <i class="iconfont">&#xe6d7;</i>
                        <label for="goodstypelist"></label>
                        <input style="display:none" id="goodstypelist" type="checkbox" v-model="goodstypelist"></input>
                    </ul>
                    <!-- 商品特性说明 -->
                    <div v-transfer-dom>
                        <popup class="goodsinfo_typelist_content" v-model="goodstypelist" position="bottom">
                            <h3>服务</h3>
                            <ul>
                                <li v-show="staticdata.goods_is_free_deposit==1">
                                    <i class="iconfont">&#xe6c1;</i>
                                    免押金
                                    <p>消费者下单时不需支付商品押金</p>
                                </li>
                                <li v-show="staticdata.goods_is_free_shipping==1">
                                    <i class="iconfont">&#xe6c1;</i>
                                    包邮
                                    <p>商品支持选择区域内，寄送的快递费由商家承担，归还的快递费由消费者承担</p>
                                </li>
                                <li v-show="staticdata.goods_is_deductible==1">
                                    <i class="iconfont">&#xe6c1;</i>
                                    免赔
                                    <p>物品轻微损坏无需赔偿，轻微损坏范围见商家说明</p>
                                </li>
                                <li v-show="staticdata.goods_is_door==1">
                                    <i class="iconfont">&#xe6c1;</i>
                                    送货上门
                                    <p>商家负责送货上门，同时负责归还上门取货</p>
                                </li>
                                <li v-show="staticdata.goods_is_since==1">
                                    <i class="iconfont">&#xe6c1;</i>
                                    自提
                                    <p>消费者可到商家设置的自提点，进行取货和归还</p>
                                </li>
                                <li v-show="staticdata.goods_is_follow_lease==1">
                                    <i class="iconfont">&#xe6c1;</i>
                                    随租随还
                                    <p>租赁的商品提前归还时，不收取提前归还违约金</p>
                                </li>
                            </ul>
                            <button @click="goodstypelist = false" type="button" class="goodsinfo_sizeSelect_btn">确定</button>
                        </popup>
                    </div>
                    <!-- 商品特性说明 -->
                    <!-- 市场价 -->
                    <div class="goodsinfo_content_price">
                        市场价
                        <span>{{currentTypedata.market_price | currency('￥') }}</span>
                    </div>
                    <!-- 押金 -->
                    <div class="goodsinfo_content_despoite">
                        押金
                        <span>{{couterDespoite | currency('￥') }}</span>
                        <!-- <span>{{couterDespoite - antDerate | currency('￥') }}</span> -->
                    </div>
                    <!-- 芝麻信用授权 -->
                    <!-- <div @click="authorization()" class="goodsinfo_content_alltime">
                        芝麻信用押金减免额
                        <span class="authorization" v-show="!zmed">去授权</span>
                        <i style="color: #989898;" class="iconfont" v-show="!zmed">&#xe6d7;</i>
                        <span v-show="zmed" style="color:red">{{antDerate}}元</span>
                    </div> -->
                    <!-- 配送地址 -->
                    <div class="goodsinfo_content_address">
                        <group label-width="5em" label-align="left">
                            <x-address @on-hide="checkAddress" title="" raw-value v-model="goodsAddress" :list="ChinaAddressV3Data">
                                <template slot="title" scope="props">
                                    <span style="height:24px;">
                                        <span style="vertical-align:middle;">配送至</span>
                                        <span v-show="provideAddress" style="vertical-align:middle;color:#f80000">暂不支持</span>
                                    </span>
                                </template>
                            </x-address>
                        </group>
                    </div>
                    <!-- 规格和数量 -->
                    <div class="goodsinfo_content_size">
                        <label for="colorSize">
                            选择规格和数量
                            <span>{{afterSelectData.val}}&nbsp;&nbsp; ×{{currentGoodsData.goodsnum}}</span>
                            <i class="iconfont">&#xe6d7;</i>
                        </label>
                    </div>

                    <group v-show="haveRules!=0">
                        <cell style="height:44px;" title="租赁规则/合约" :link="'/goodslease/'+goodsId"></cell>
                    </group>

                    <group>
                        <input style="display:none" id="colorSize" type="checkbox" v-model="colorSizeShow"></input>
                    </group>
                    <div v-transfer-dom>
                        <!-- 规格选择区域 -->
                        <popup @on-show="sizeRember" class="goodsinfo_sizeSelect_content" v-model="colorSizeShow" position="bottom" max-height="100%">
                            <img :src="returnImg" alt="img" class="goodsinfo_sizeSelect_img">
                            <div class="goodsinfo_sizeSelect_message">
                                <h3 class="goodsinfo_sizeSelect_title">
                                    ￥{{currentGoodsData.rent_period_now_rent_price}}/{{timeText}}
                                </h3>
                                <span class="goodsinfo_sizeSelect_color">
                                    {{afterSelectData.val}}
                                </span>
                                <div class="goodsinfo_sizeSelect_number">
                                    商品数量
                                    <div class="goodsinfo_rentTime_num">
                                        <span @click="numcouter(1,0)">-</span>
                                        <input type="number" @blur="goodsNumCheck(1)" v-model="currentGoodsData.goodsnum">
                                        <span @click="numcouter(1,1)">+</span>
                                    </div>
                                </div>
                            </div>
                            <ul v-show="colorlist[0]" class="goodsinfo_sizeSelect_typelist">
                                <h3>颜色</h3>
                                <li v-for="(item,index) in colorlist" :class="{'goodsinfo_sizeSelect_typelist--selected':item.sel==1}" @click="selectSize(colorlist,item)">{{item.value}}</li>
                            </ul>
                            <ul v-show="sizelist[0]" class="goodsinfo_sizeSelect_typelist">
                                <h3>规格</h3>
                                <li v-for="(item,index) in sizelist" :class="{'goodsinfo_sizeSelect_typelist--selected':item.sel==1}" @click="selectSize(sizelist,item)">{{item.value}}</li>
                            </ul>
                            <!-- 选择颜色和规格 -->
                            <button @click="selectType" type="button" class="goodsinfo_sizeSelect_btn">确定</button>
                        </popup>
                    </div>
                </div>
                <div class="goodsinfo_content_text">
                    <img src="../../assets/img//goods/goodsrules.png" width="100%" alt="">
                    <!-- 租赁清单图片 -->
                    <template v-if="staticdata.rentlist[0]">
                        <h3 class="goodsinfo_content_rentTitle">租赁清单</h3>
                        <ul class="goodsinfo_content_rentlist">
                            <li v-for="item in staticdata.rentlist" class="goodsinfo_content_rentsingle">
                                <img :src="item.goodsFace" alt="goodsFace">
                                <span class="nowarp">{{item.goods_rentlist_name}}</span>
                            </li>
                        </ul>
                    </template>
                    <img src="../../assets/img//goods/goodsinfo.png" style="height:50px;margin:0 auto;display:block" alt="">
                    <!-- 商品详情图片渲染 -->
                    <template v-for="item in staticdata.goods_details_content">
                        <img :src="item.image" alt="mainImg" class="goodsinfo_content_mainimg">
                    </template>
                    <divider>我是有底线的</divider>
                </div>
            </article>
            <!-- 底部区域 -->
            <!-- 加入购物车，立即租赁，固定位置按钮 -->
            <footer class="goodsinfo_footer">
                <div class="goodsinfo_btnlist">
                    <ul class="goodsinfo_funlist">
                        <li class="goodsinfo_funlist_single" @click="goShop()">
                            <i class="iconfont">&#xe607;</i>
                            <span>店铺</span>
                        </li>
                        <li class="goodsinfo_funlist_single" @click="addCollection()">
                            <i v-show="!isCollection" class="iconfont">&#xe605;</i>
                            <i v-show="isCollection" style="color:#f80000" class="iconfont">&#xe64d;</i>
                            <span>收藏</span>
                        </li>
                        <li class="goodsinfo_funlist_single" @click="goCar()">
                            <i class="iconfont">&#xe604;</i>
                            <span>购物车</span>
                        </li>
                    </ul>
                    <button type="button" @click="addCar()" class="goodsinfo_btnlist_car">加入购物车</button>
                    <button type="button" @click="buyGoods()" class="goodsinfo_btnlist_buy">立即租赁</button>
                </div>
            </footer>
            <toast v-model="toast" type="success">{{confrim}}</toast>
            <toast v-model="toasts" type="cancel">{{confrim}}</toast>

        </div>
    </div>
</template>

<script>
import { Swiper, Divider, querystring, Toast, Value2nameFilter as value2name, dateFormat, SwiperItem, InlineCalendar, XAddress, Group, ChinaAddressV3Data, TransferDom, Popup, Cell, XButton, XSwitch } from 'vux';
import { API, getQuery } from '../../services';
import { mapGetters } from 'vuex';



export default {
    directives: {
        TransferDom
    },
    components: {
        Divider,
        Swiper,
        SwiperItem,
        InlineCalendar,
        XAddress,
        Group,
        Popup,
        Cell,
        XButton,
        XSwitch,
        Toast
    },
    data() {
        return {
            zmed: false,
            reliefLimit: 0,//芝麻分减免额度
            reliefRate:0,
            havestart: true,
            timeselectshow: false,
            haveRules: false,
            confrim: "",
            toasts: false,
            toast: false,
            isCertify: 1,//是否需要实名认证 1是需要 2是不需要
            storeId: null,//店铺信息
            goodsId: null,//商品id
            goodsTitle: "",//商品名称
            /* 规格选择触发时当前的规格id */
            typeSizeChange: null,
            /* 是否被收藏 */
            isCollection: false,
            /* 日期控件配置参数 */
            timeconfig: {
                show: false,
                value: '',
                listValue: '',
                range: true,
                showLastMonth: false,
                showNextMonth: false,
                highlightWeekend: true,
                return6Rows: true,
                hideHeader: false,
                hideWeekList: false,
                replaceTextList: { 'TODAY': '今' },
                replace: false,
                changeWeeksList: false,
                useCustomFn: false,
                buildSlotFn: () => '',
                disablePast: false,
                disableFuture: false,
                weeksList: ['日', '一', '二', '三', '四', '五', '六 '],
                changerender: true,
            },
            ChinaAddressV3Data,/* 中国省市数据 */
            /* 起始和结束时间范围 */
            start_date: "2016-04-01",
            end_date: "2018-04-01",
            /* 选中的日期 */
            timeValue: '',
            /* 轮播图数据集合 */
            bannerlist: [
                'https://static.vux.li/demo/1.jpg',
            ],
            /* 具体逻辑数据 */
            /* 现租价和原租价 */
            /* 静态数据 */
            staticdata: {
                goodsName: "短袖衣服",//商品名称
                goods_is_free_deposit: 2,//免押金  1true/2false
                goods_is_free_shipping: 2,//包邮
                goods_is_deductible: 2,//免赔
                goods_is_door: 2,//上门
                goods_is_since: 2,//自提
                goods_is_follow_lease: 2,//随租随换
                goods_is_off_restitution: 2,
                goods_is_verify_real_name: 2,
                goods_max_count: 50,//最大购买量
                store_name: "店铺3",//店铺名称
                rentlist: [],//租赁清单数组
                goods_details_content: [],//商品详情数组
            },
            /* 颜色列表 */
            colorlist: [{ sel: 1, value: "", content_id: 1 }],
            /* 规格列表 */
            sizelist: [{ sel: 0, value: "", content_id: 1 }],
            /* 数据列表 */
            datalist: [],
            /* 当前地址 */
            goodsAddress: ['北京市', '市辖区', '东城区'],
            /* 是否是支持的地址 */
            provideAddress: false,
            /* 颜色规格选择框显示隐藏 */
            colorSizeShow: false,
            /* 商品特性显示隐藏 */
            goodstypelist: false,
            /* 最大数量限制 */
            goods_sales_count: 0,
            /* 时间对照表 */
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },
            /* 当前被选中的颜色规格整体对象,默认是第一个数据 */
            currentTypedata: {},
            /* 当前商品所具备的属性，所有数据渲染根据这个来 */
            currentGoodsData: {
                goodsnum: 1,//商品的数量
                rentTime: 3,//当前的租用周期
                rent_period_type: 1,//1 2 3 4 5 日 周 月 季 年
                rent_period_min_rent: 5,//最小租期,按类型换算
                rent_period_max_rent: 12,//最大租期,按类型换算
                rent_period_old_rent_price: "40.00",//原租价
                rent_period_now_rent_price: "20.00",//现租价
                rent_period_min_advance: 6,//最少提前
                rent_period_max_advance: 1,//最大提前

            },
            currentTimeIndex: 0//当前被选中的日渐周期index
        }
    },
    mounted() {
        overscroll(document.querySelector('.goodsinfo_container'));
        API.main.goodsInfo({
            goodsId: this.$route.params.id
        }).then((Response) => {
            /* 初始数据赋值操作 */
            let goodsData = Response.body.data;
            this.Initialization(goodsData);
        });
        /* 获取商品详情数据 */
        /*获取芝麻信用分减免额度*/
        this.userZMReliefInfo();
    },
    activated() {
        overscroll(document.querySelector('.goodsinfo_container'));
        if (localStorage.getItem('goodsInfo')) {
            if (localStorage.getItem('goodsInfo') == 'login') {
                window.location.reload();
            } else {
                setTimeout(() => {
                    this.havestart = true;
                }, 500);
                this.getData();
            }
            localStorage.setItem("goodsInfo", "");
        }

    },
    /* 计算属性 */
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
            'getIsCertify',
            'getUserInfoUserId'
        ]),
        /* 返回商品主图，数据列表存在时使用列表图片，不存在时使用商品主图 */
        returnImg() {
            let id = this.afterSelectData.id;
            for (let item of this.datalist) {
                if (item.content_var_attr_id == id) {
                    if (item.img != "") {
                        return item.img;
                    }
                }
            }
            return this.bannerlist[0].goodsFace;

        },
        /* 返回当前周期文字 */
        timeText() {
            return this.timeMap[this.currentGoodsData.rent_period_type];
        },
        /* 返回当前被选中的具体规格id */
        afterSelectData() {
            let color = { content_id: "", value: "" },
                size = { content_id: "", value: "" };
            if (this.colorlist[0]) {
                for (let item of this.colorlist) {
                    if (item.sel === 1) {
                        color = item;
                    }
                }
            }
            if (this.sizelist[0]) {
                for (let item of this.sizelist) {
                    if (item.sel === 1) {
                        size = item;
                    }
                }
            }
            /* 进行类型判断 */
            if (color.content_id && size.content_id) {
                return {
                    id: (color.content_id + ',' + size.content_id),
                    val: color.value + "," + size.value
                };
            } else if (!color.content_id && size.content_id) {
                return {
                    id: size.content_id,
                    val: size.value
                };
            } else if (color.content_id && !size.content_id) {
                return {
                    id: (color.content_id),
                    val: color.value
                };
            } else {
                return {
                    id: -1,
                    val: ""
                };
            }

        },
        /* 返回已选择租用周期 */
        despoiteRange() {
            let self = this;
            let endtime;
            /* 当前租用周期数量 */
            let num = this.currentGoodsData.rentTime;
            /* 获取日月季 */
            let year = new Date(self.timeValue).getFullYear(),
                month = new Date(self.timeValue).getMonth() + 1,
                /* 当前天数 */
                day = new Date(self.timeValue).getDate(),
                time = new Date(self.timeValue).getTime();
            /* 每个月的的当天的前一天， */
            switch (self.currentGoodsData.rent_period_type) {
                /* 1 2 3 4 5  日 周 月 季 年 */
                case 1:
                    return dateFormat(new Date(time + (num - 1) * 24 * 3600 * 1000), 'YYYY-MM-DD');
                    break;
                case 2:
                    return dateFormat(new Date(time + num * 24 * 3600 * 1000 * 7 - 24 * 3600 * 1000), 'YYYY-MM-DD');
                    break;
                case 3:
                    /* 月份相加超出一年的情况需要考虑 */
                    let year_3 = Math.floor((month + num) / 12);
                    let month_3 = (month + num) % 12;
                    if (month_3 == 0) {
                        month_3 = 12;
                        year_3--;
                    }
                    return dateFormat(new Date(year + year_3 + "-" + month_3 + "-" + (day - 1)), 'YYYY-MM-DD');
                    break;
                case 4:
                    /* 季度相加超出一年 */
                    let year_4 = Math.floor((month + num * 3) / 12);
                    let month_4 = (month + num * 3) % 12;
                    if (month_4 == 0) {
                        month_4 = 12;
                        year_4--;
                    }
                    return dateFormat(new Date(year + year_4 + "-" + month_4 + "-" + (day - 1)), 'YYYY-MM-DD');
                    break;
                case 5:
                    return dateFormat(new Date((year + num) + "-" + month + "-" + (day - 1)), 'YYYY-MM-DD');
                    break;
            }
        },
        /* 返回可选时间范围 */
        timerange() {
            let min_advance = this.currentGoodsData.rent_period_min_advance * 24 * 3600 * 1000;
            let max_advance = this.currentGoodsData.rent_period_max_advance * 24 * 3600 * 1000;
            let currenttime = new Date().getTime();
            let startTime = dateFormat(new Date(currenttime + min_advance), 'YYYY-MM-DD')
            let endTime = dateFormat(new Date(currenttime + max_advance), 'YYYY-MM-DD')
            return { startTime, endTime };
        },
        /* 返回计算后的押金 */
        /**
         * 押金计算规则
         * 最终押金=押金-单间商品总租金*数量
         * 负数时显示为0,
         * 
         */
        couterDespoite() {
            if (this.currentTypedata.goods_deposit == 0) {
                return 0;
            }
            let despoite;
            if (this.currentTypedata.act_price) {
                despoite = this.currentTypedata.goods_deposit * this.currentGoodsData.goodsnum - this.currentGoodsData.act_price * this.currentGoodsData.rentTime * this.currentGoodsData.goodsnum;
            } else {
                despoite = this.currentTypedata.goods_deposit * this.currentGoodsData.goodsnum - this.currentGoodsData.rent_period_now_rent_price * this.currentGoodsData.rentTime * this.currentGoodsData.goodsnum;
            }

            return despoite>=0?despoite:0;

        },
        /**
         * 计算总租金
         */
        totalRent(){
            let rentAmount;
            if (this.currentTypedata.act_price) {
                rentAmount = this.currentGoodsData.act_price * this.currentGoodsData.goodsnum  * this.currentGoodsData.rentTime;
            } else {
                rentAmount = this.currentGoodsData.rent_period_now_rent_price * this.currentGoodsData.goodsnum  * this.currentGoodsData.rentTime;
            }

            return rentAmount;
        },
        /**
         * 计算芝麻信用押金减免额度
         */
        antDerate(){
            if(this.couterDespoite == 0 || this.currentTypedata.goods_deposit - this.totalRent < 0){
                return 0;
            }else{
               return (this.couterDespoite * this.reliefRate).toFixed(2);
            }
        },
        /**
         * 返回颜色规格id
         */
        typeArray() {
            let arr = new Array(2);
            if (this.colorlist[0]) {
                for (let item of this.colorlist) {
                    if (item.sel == 1) {
                        arr[0] = item.content_id;
                    }
                }

            } else {
                arr[0] = 0;
            }
            if (this.sizelist[0]) {
                for (let item of this.sizelist) {
                    if (item.sel == 1) {
                        arr[1] = item.content_id;
                    }
                }
            } else {
                arr[1] = 0;
            }

            return arr;
        }
    },
    methods: {
        timehaveSelect() {
            this.havestart = false;
            this.timeselectshow = false;
        },
        haveSelect() {
            this.timeselectshow = true;
        },
        /*获取芝麻信用减免额度*/
        userZMReliefInfo() {
            API.person.getUserZMReliefInfo({
                user_id: this.getUserInfoUserId
            }).then((res) => {
                if (res.body.code == 200) {
                    this.zmed = true;
                    this.reliefLimit = res.body.data.relief_limit;
                    this.reliefRate = res.body.data.relief_rate / 100;
                }
            })
        },
        /* 检查是否支持该地址 */
        checkAddress() {
            let addresslist = (this.getName(this.goodsAddress)).split(" ");
            API.main.judgeAddress({
                province: addresslist[0],
                city: addresslist[1],
                region: addresslist[2],
                goodsId: this.goodsId
            }).then((res) => {
                if (res.body.code == 200) {
                    this.provideAddress = false;
                } else {
                    this.provideAddress = true;
                }
            })
        },
        /*芝麻信用授权*/
        authorization(){
            this.$router.push({
                path: '/authInfo'
            })
        },
        /* 获取默认地址 */
        getDefaultAddress() {
            API.person.addressInfo({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                is_default: 1
            }).then((res) => {
                if (res.body.code == 200) {
                    res = res.body.data.addressList;
                    let address = [];
                    address[0] = res.province;
                    address[1] = res.city;
                    address[2] = res.district;
                    this.goodsAddress = address;
                }
            });
        },
        /* 获取数据 */
        getData() {
            API.main.goodsInfo({
                goodsId: this.$route.params.id,
                userId: this.getUserInfoUserId
            }).then((Response) => {
                /* 初始数据赋值操作 */
                let goodsData = Response.body.data;
                this.Initialization(goodsData);
            });
        },
        /* 记录当前规格id组 */
        sizeRember() {
            this.typeSizeChange = this.afterSelectData;
        },

        /* 数据初始化 */
        Initialization(goodsData) {
            /* 地址初始化 */
            this.getDefaultAddress();
            /* 颜色规格格式化，添加选中属性 */
            for (let item of goodsData.goodsattrcontent.ys) {
                item.sel = 0;
            }
            for (let item of goodsData.goodsattrcontent.gg) {
                item.sel = 0;
            }
            if (goodsData.goodsattrcontent.ys[0]) {
                goodsData.goodsattrcontent.ys[0].sel = 1;
            }
            if (goodsData.goodsattrcontent.gg[0]) {
                goodsData.goodsattrcontent.gg[0].sel = 1;
            }
            this.colorlist = goodsData.goodsattrcontent.ys;
            this.sizelist = goodsData.goodsattrcontent.gg;
            /* 商品id */
            this.goodsId = goodsData.goodsId;
            /* 是否有规则 */
            this.haveRules = goodsData.goods_leasing_rules;
            /* 是否收藏 */
            this.isCollection = goodsData.isCollect == 1 ? true : false;
            /* 店铺ID */
            this.storeId = goodsData.goods_store_id;
            /* 最大商品库存量 */
            this.goods_sales_count = goodsData.goods_max_count;
            /* 静态数据赋值 */
            this.staticdata = {
                goodsName: goodsData.goodsName,
                goods_is_free_deposit: goodsData.goods_is_free_deposit,
                goods_is_free_shipping: goodsData.goods_is_free_shipping,
                goods_is_deductible: goodsData.goods_is_deductible,
                goods_is_door: goodsData.goods_is_door,
                goods_is_since: goodsData.goods_is_since,
                goods_is_follow_lease: goodsData.goods_is_follow_lease,
                goods_is_off_restitution: goodsData.goods_is_off_restitution,
                goods_is_verify_real_name: goodsData.goods_is_verify_real_name,
                goods_max_count: goodsData.goods_max_count,
                store_name: goodsData.store_name,
                rentlist: goodsData.rentlist,//租赁清单数组
                goods_details_content: goodsData.goods_details_content,//商品详情数组
            };
            /* 商品主图赋值 */
            this.bannerlist = goodsData.shopBanner;
            /* 列表数据赋值 */
            this.datalist = goodsData.goodsAttrList;
            /* 初始化当前数据的最终赋值 ,默认使用第一个颜色的第一个规格*/
            this.currentTypedata = this.datalist[0];
            /* 部分数据赋值 */
            let temporary = this.currentTypedata.rent_period[0];
            this.currentGoodsData.goodsnum = 1;
            this.currentGoodsData.rentTime = temporary.rent_period_min_rent;
            this.currentGoodsData.rent_period_type = temporary.rent_period_type;
            this.currentGoodsData.rent_period_min_rent = temporary.rent_period_min_rent;
            this.currentGoodsData.rent_period_max_rent = temporary.rent_period_max_rent;
            this.currentGoodsData.rent_period_old_rent_price = temporary.rent_period_old_rent_price;
            this.currentGoodsData.rent_period_now_rent_price = temporary.rent_period_now_rent_price;
            this.currentGoodsData.rent_period_min_advance = temporary.rent_period_min_advance;
            this.currentGoodsData.rent_period_max_advance = temporary.rent_period_max_advance;
            if(temporary.act_price){
                this.currentGoodsData.act_price = temporary.act_price;
            }

            /* 是否需要认证 */
            this.isCertify = goodsData.goods_is_verify_real_name;
            /* 初始被选中时间 */
            this.timeValue = this.timerange.startTime;
            /* 初始周期被选中 */
            for (let item of this.currentTypedata.rent_period) {
                item.sel = 0;
            }
            this.currentTypedata.rent_period[0].sel = 1;
            /* 商品名称对应 */
            this.goodsTitle = goodsData.goodsName;
            /* 分享数据重置 */

        },

        /* 商品规格选择函数 */
        selectSize(size, item) {
            if (item.sel === 1) {
                item.sel = 0;
            } else {
                for (let ite of size) {
                    ite.sel = 0;
                    item.sel = 1;
                }
            }

            let self = this;
            if (!this.afterSelectData.id) {
                return false;
            }
            /* 获取对应规格的id */
            for (let item of this.datalist) {
                if (item.content_var_attr_id == this.afterSelectData.id) {
                    console.log(item);
                    self.currentTypedata = item;
                    break;
                }
            }
            this.timeDataChange(self.currentTypedata.rent_period[0]);
            /* 第一个周期默认为选中状态 */
            for (let item of self.currentTypedata.rent_period) {
                item.sel = 0;
            }
            self.currentTypedata.rent_period[0].sel = 1;
            this.currentTimeIndex = 0;
        },
        /* 商品选择,判断是否有未完成的选择状态 */
        selectType() {
            /* 先做选中状态判断 */
            /* 首先判断颜色，没有颜色存在时，此时flag为-1 */
            let flag = 0;
            if (this.colorlist[0]) {
                for (let item of this.colorlist) {
                    if (item.sel === 1) {
                        flag++;
                    }
                }
            } else {
                flag--;
            };
            if (this.sizelist[0]) {
                for (let item of this.sizelist) {
                    if (item.sel === 1) {
                        flag++;
                    }
                }
            } else {
                flag--;
            };
            if (flag == -2 || flag == 0 || flag == 2) {
                this.colorSizeShow = false;
                /*   this.typeDataChange(this.afterSelectData.id); */
            } else {
                alert("请选择规格");
            };

        },
        /* 商品数量失去焦点数值验证 */
        /* 0 租用周期  1 商品数量 */
        goodsNumCheck(type) {
            if (type === 1) {
                if (this.currentGoodsData.goodsnum > this.goods_sales_count) {
                    this.currentGoodsData.goodsnum = this.goods_sales_count;
                } else if (this.currentGoodsData.goodsnum < 1) {
                    this.currentGoodsData.goodsnum = 1;
                }
                this.currentGoodsData.goodsnum = Math.ceil(this.currentGoodsData.goodsnum);
            } else {
                /* 当前输入值大于最大租用周期且当前租用周期不为无限期的情况下 */
                if (this.currentGoodsData.rentTime > this.currentGoodsData.rent_period_max_rent) {
                    this.currentGoodsData.rentTime = this.currentGoodsData.rent_period_max_rent
                } else if (this.currentGoodsData.rentTime < this.currentGoodsData.rent_period_min_rent) {
                    this.currentGoodsData.rentTime = this.currentGoodsData.rent_period_min_rent;
                }
                this.currentGoodsData.rentTime = Math.ceil(this.currentGoodsData.rentTime);
            }

        },
        /* 时间周期切换数据变化 */
        timeClick(time, index) {
            /* 当前日期不为选中状态时 */
            if (time.sel !== 1) {
                for (let item of this.currentTypedata.rent_period) {
                    item.sel = 0;
                }
                time.sel = 1;
                this.currentTimeIndex = index;
                /* 开始进行数据替换 */
                this.timeDataChange(this.currentTypedata.rent_period[index]);
            }
        },
        /* 时间周期变化数据更换具体操作 */
        timeDataChange(temporary) {
            this.currentGoodsData.rentTime = temporary.rent_period_min_rent;
            this.currentGoodsData.rent_period_type = temporary.rent_period_type;
            this.currentGoodsData.rent_period_min_rent = temporary.rent_period_min_rent;
            this.currentGoodsData.rent_period_max_rent = temporary.rent_period_max_rent;
            this.currentGoodsData.rent_period_old_rent_price = temporary.rent_period_old_rent_price;
            this.currentGoodsData.rent_period_now_rent_price = temporary.rent_period_now_rent_price;
            this.currentGoodsData.rent_period_min_advance = temporary.rent_period_min_advance;
            this.currentGoodsData.rent_period_max_advance = temporary.rent_period_max_advance;
            if(temporary.act_price){
                this.currentGoodsData.act_price = temporary.act_price; 
            }

            /* 初始被选中时间 */
            this.timeValue = this.timerange.startTime;
            /* 初始周期被选中 */
        },


        /* 商品数量,日期加减计算 */
        /* size:需要操作的源数据 type:0，减法 1，加法 */
        numcouter(size, type) {
            if (type == 0) {
                /* 租期选择情况下要考虑最小租期和最大租期 */
                if (size == 1) {
                    if (this.currentGoodsData.goodsnum > 1) {
                        this.currentGoodsData.goodsnum--;
                    }
                } else {

                    if (this.currentGoodsData.rentTime > this.currentGoodsData.rent_period_min_rent) {
                        this.currentGoodsData.rentTime--;
                    }
                }
                size--;
            } else {
                /* 租期选择情况下要考虑最小租期和最大租期 */
                if (size == 1) {
                    if (this.currentGoodsData.goodsnum < this.goods_sales_count) {
                        this.currentGoodsData.goodsnum++;
                    }
                } else {
                    /* 无限期情况下页可以增加 */
                    if (this.currentGoodsData.rentTime < this.currentGoodsData.rent_period_max_rent) {
                        this.currentGoodsData.rentTime++;
                    }
                }
            }
        },
        getName(value) {
            return value2name(value, ChinaAddressV3Data)
        },
        /* 路由回退 */
        routerBack() {
            this.$router.goBack();
        },
        /* 进入店铺主页面 */
        goShop() {
            window.localStorage.setItem("store", '11');
            this.$router.push({
                path: '/shop/' + this.storeId
            })
        },
        /* 进入购物车 */
        goCar() {
            this.$router.push({
                path: '/download'
            })
        },
        /* 加入购物车 */
        addCar() {
            let addresslist = (this.getName(this.goodsAddress)).split(" ");
            let perId;
            for (let item of this.currentTypedata.rent_period) {
                if (item.sel == 1) {
                    perId = item.rent_period_id;
                }
            }
            API.main.addCar({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                goodsId: this.goodsId,
                province: addresslist[0],
                city: addresslist[1],
                attr_id1: this.typeArray[0],
                attr_id2: this.typeArray[1],
                district: addresslist[2],
                amount: this.currentGoodsData.goodsnum,
                rent_prieod_id: perId,
                time_number: this.currentGoodsData.rentTime,
                start_time: (new Date(this.timeValue)) / 1000,
                end_time: (new Date(this.despoiteRange)) / 1000,
                cart_type: 1,
                goods_content_id: this.currentTypedata.content_id
            }).then((res) => {
                if (res.body.code == 200) {
                    this.confrim = "添加成功";
                    this.toast = true;
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
        /* 立即租赁按钮点击 */
        buyGoods() {
            /* 登录认证 */
            if (!localStorage.getItem("userInfo")) {
                this.$router.push({
                    path: '/login?type=good'
                });

                return false;
            }
            /* 实名认证 */
            if (localStorage.getItem("isCertify") != 2 && localStorage.getItem("isCertify") != 4 && this.isCertify == 1) {
                this.$router.push({
                    path: '/authentication'
                });

                return false;
            }
            /* 判断当前浏览器是否为支付宝环境 */
            if (this.isAlipay() == 1) {
                if (localStorage.getItem("isCertify") != 2 && localStorage.getItem("isCertify") != 4) {
                    this.$router.push({
                        path: '/authentication'
                    });
                }
            }
            /* 地址认证 */
            if (this.provideAddress) {
                this.confrim = "暂不支持该地址，请重新选择";
                this.toasts = true;
                return false;
            }
            if (this.havestart) {
                this.confrim = "请选择起租日期";
                this.toasts = true;
                this.timeselectshow = true;
                return false;
            }

            let addresslist = (this.getName(this.goodsAddress)).split(" ");
            let perId;
            for (let item of this.currentTypedata.rent_period) {
                if (item.sel == 1) {
                    perId = item.rent_period_id;
                }
            }
            let userInfo = JSON.parse(localStorage.getItem("userInfo"));
            API.main.addCar({
                userId: userInfo.id,
                token: userInfo.token,
                goodsId: this.goodsId,
                province: addresslist[0],
                city: addresslist[1],
                district: addresslist[2],
                attr_id1: this.typeArray[0],
                attr_id2: this.typeArray[1],
                amount: this.currentGoodsData.goodsnum,
                rent_prieod_id: perId,
                time_number: this.currentGoodsData.rentTime,
                start_time: ((new Date(this.timeValue)).getTime() - 3600 * 8 * 1000) / 1000,
                end_time: ((new Date(this.despoiteRange)).getTime() + 3600 * 16 * 1000 - 1000) / 1000,
                cart_type: 2,
                goods_content_id: this.currentTypedata.content_id
            }).then((res) => {
                if (res.body.code == 200) {
                    let cartId = res.body.data.cartId;
                    this.$store.dispatch('SetOrder', cartId);
                    API.main.storeInfo({
                        storeId: this.storeId
                    }).then((res) => {
                        if (res.body.code == 200) {
                            localStorage.setItem('orderClick', '11');
                            this.$router.push({
                                path: '/orderInfo/' + cartId + '/?address=' + res.body.data.enterprise_license_location + '&antDerate=' + this.antDerate
                            });
                        }
                    });


                }
            });

        },
        /* 加入收藏 */
        addCollection() {
            if (this.isCollection == false) {
                API.person.collectShop({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    goods_list: [this.goodsId],
                }).then((res) => {
                    if (res.body.code == 200) {
                        this.isCollection = true;
                    } else {
                        this.confrim = "请登录后收藏";
                        this.toasts = true;
                        setTimeout(() => {
                            this.$router.push({
                                path: '/login?type=good'
                            });

                        }, 500);
                    }
                });
            } else {
                API.person.unCollectShop({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    shopId: this.goodsId,
                }).then((res) => {
                    if (res.body.code == 200) {
                        this.isCollection = false;
                    }
                });
            }
        }
    }
}
</script>