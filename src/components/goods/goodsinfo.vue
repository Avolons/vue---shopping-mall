<style lang="scss">
@import "./goodsinfo.scss";
</style>

<template>
    <div class="goodsinfo_ciontaner">
        <!--头部区域，返回按钮 -->
        <header class="goodsinfo_header">
            <!-- 返回按钮 -->
            <div class="goodsinfo_header_back">

            </div>
            <!-- 商品简介轮播图 -->
            <swiper class="main_swiper" dots-position="center" :aspect-ratio="300/800">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerlist" :key="index">
                    <img :src="item">
                </swiper-item>
            </swiper>
            <h2 class="goodsinfo_title twonowarp">这是商品名称这是商品名称这是商品名称不超过两行不超过两行不超过两行</h2>
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
                    <span>￥{{currentGoodsData.rent_period_now_rent_price*currentGoodsData.rentTime}}</span>
                </div>
                <div class="goodsinfo_rentTime">
                    租期
                    <div class="goodsinfo_rentTime_num">
                        <span @click="numcouter(currentGoodsData.rentTime,0)">-</span>
                        <input type="number" @input="goodsNumCheck(0)" v-model="currentGoodsData.rentTime">
                        <span @click="numcouter(currentGoodsData.rentTime,1)">+</span>
                    </div>
                </div>
            </div>
        </header>
        <article class="goodsinfo_content">
            <!-- 日期选择 -->
            <div class="goodsinfo_content_alltime">
                您将租用 &nbsp;&nbsp; {{timeValue}}&nbsp;至&nbsp;{{despoiteRange}}
                <span>{{currentGoodsData.rentTime}}{{timeText}}</span>
            </div>
            <div class="goodsinfo_content_time">
                <inline-calendar class="inline-calendar-demo" 
                @on-change="changeTime" 
                :show.sync="timeconfig.show" 
                v-model="timeValue" 
                :start-date="timerange.startTime" 
                :end-date="timerange.endTime" 
                :range="timeconfig.range" 
                :render-on-value-change="timeconfig.changerender" 
                :show-last-month="timeconfig.showLastMonth" 
                :show-next-month="timeconfig.showNextMonth" 
                :highlight-weekend="timeconfig.highlightWeekend" 
                :return-six-rows="timeconfig.return6Rows" 
                :hide-header="timeconfig.hideHeader" 
                :hide-week-list="timeconfig.hideWeekList" 
                :replace-text-list="timeconfig.replaceTextList" 
                :weeks-list="timeconfig.weeksList" 
                :render-function="timeconfig.buildSlotFn" 
                :disable-past="timeconfig.disablePast" 
                :disable-future="timeconfig.disableFuture">
                </inline-calendar>
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
                    <span>￥{{currentTypedata.market_price}}</span>
                </div>
                <!-- 押金 -->
                <div class="goodsinfo_content_despoite">
                    押金
                    <span>￥{{couterDespoite}}</span>
                </div>
                <!-- 配送地址 -->
                <div class="goodsinfo_content_address">
                    <group label-width="5em" label-align="left">
                        <x-address title="配送至" v-model="goodsAddress" raw-value :list="ChinaAddressV3Data" value-text-align="left"></x-address>
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
                <group>
                    <input style="display:none" id="colorSize" type="checkbox" v-model="colorSize"></input>
                </group>
                <div v-transfer-dom>
                    <!-- 规格选择区域 -->
                    <popup class="goodsinfo_sizeSelect_content" v-model="colorSize" position="bottom" max-height="50%">
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
                                    <span @click="numcouter(currentGoodsData.goodsnum,0)">-</span>
                                    <input type="number" @input="goodsNumCheck(1)" v-model="currentGoodsData.goodsnum">
                                    <span @click="numcouter(currentGoodsData.goodsnum,1)">+</span>
                                </div>
                            </div>
                        </div>
                        <ul class="goodsinfo_sizeSelect_typelist">
                            <h3>颜色</h3>
                            <li v-for="(item,index) in colorlist" :class="{'goodsinfo_sizeSelect_typelist--selected':item.sel==1}" @click="selectSize(colorlist,item)">{{item.value}}</li>
                        </ul>
                        <ul class="goodsinfo_sizeSelect_typelist">
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
                        <img  :src="item.image"  alt="mainImg">
                </template>
            </div>
        </article>
        <!-- 底部区域 -->
        <!-- 加入购物车，立即租赁，固定位置按钮 -->
        <footer class="goodsinfo_footer">
            <div class="goodsinfo_btnlist">
                <ul class="goodsinfo_funlist">
                    <li class="goodsinfo_funlist_single">
                        <i class="iconfont">&#xe607;</i>
                        <span>店铺</span>
                    </li>
                    <li class="goodsinfo_funlist_single">
                        <i class="iconfont">&#xe605;</i>
                        <span>收藏</span>
                    </li>
                    <li class="goodsinfo_funlist_single">
                        <i class="iconfont">&#xe604;</i>
                        <span>购物车</span>
                    </li>
                </ul>
                <button type="button" class="goodsinfo_btnlist_car">加入购物车</button>
                <button type="button" class="goodsinfo_btnlist_buy">立即租赁</button>
            </div>
        </footer>
    </div>
</template>

<script>
import { Swiper, dateFormat, SwiperItem, InlineCalendar, XAddress, Group, ChinaAddressV3Data, TransferDom, Popup, Cell, XButton, XSwitch } from 'vux';
import jsondata from './goods.json';
export default {
    directives: {
        TransferDom
    },
    components: {
        Swiper,
        SwiperItem,
        InlineCalendar,
        XAddress,
        Group,
        Popup,
        Cell,
        XButton,
        XSwitch
    },
    data() {
        return {
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
                rentlist:[],//租赁清单数组
                goods_details_content:[],//商品详情数组
            },
            /* 颜色列表 */
            colorlist: [{ sel: 1, value: "", content_id: 1 }],
            /* 规格列表 */
            sizelist: [{ sel: 0, value: "", content_id: 1 }],
            /* 数据列表 */
            datalist: null,
            /* 当前地址 */
            goodsAddress: [],
            /* 颜色规格选择框显示隐藏 */
            colorSize: false,
            /* 商品特性显示隐藏 */
            goodstypelist: false,
            /* 最大数量限制 */
            goods_sales_count: 0,
            /* 时间对照表 */
            timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},
            /* 当前被选中的颜色规格整体对象,默认是第一个数据 */
            currentTypedata:{},
            /* 当前商品所具备的属性，所有数据渲染根据这个来 */
            currentGoodsData: {
                goodsnum: 1,//商品的数量
                rentTime:3,//当前的租用周期
                rent_period_type: 1,//1 2 3 4 5 日 周 月 季 年
                rent_period_min_rent: 5,//最小租期,按类型换算
                rent_period_max_rent: 12,//最大租期,按类型换算
                rent_period_old_rent_price: "40.00",//原租价
                rent_period_now_rent_price: "20.00",//现租价
                rent_period_min_advance: 6,//最少提前
                rent_period_max_advance: 1,//最大提前
            },
            currentTimeIndex:0//当前被选中的日渐周期index
        }
    },
    mounted() {
        /* 获取商品详情数据 */
        /* 初始数据赋值操作 */
        let goodsData = jsondata.data;

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
        /* 颜色规格格式化，添加选中属性*/

        this.goods_sales_count = goodsData.goods_sales_count;
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
            rentlist:goodsData.rentlist,//租赁清单数组
            goods_details_content:goodsData.goods_details_content,//商品详情数组
        };
        /* 商品主图赋值 */
        this.bannerlist[0]=goodsData.goodsFace;
        /* 列表数据赋值 */
        this.datalist=goodsData.goodsAttrList;
        /* 初始化当前数据的最终赋值 ,默认使用第一个颜色的第一个规格*/
        this.currentTypedata=this.datalist[0];
        /* 部分数据赋值 */
        let temporary=this.currentTypedata.rent_period[0];
        this.currentGoodsData.goodsnum=1;
        this.currentGoodsData.rentTime=temporary.rent_period_min_rent;
        this.currentGoodsData.rent_period_type=temporary.rent_period_type;
        this.currentGoodsData.rent_period_min_rent=temporary.rent_period_min_rent;
        this.currentGoodsData.rent_period_max_rent=temporary.rent_period_max_rent;
        this.currentGoodsData.rent_period_old_rent_price=temporary.rent_period_old_rent_price;
        this.currentGoodsData.rent_period_now_rent_price=temporary.rent_period_now_rent_price;
        this.currentGoodsData.rent_period_min_advance=temporary.rent_period_min_advance;
        this.currentGoodsData.rent_period_max_advance=temporary.rent_period_max_advance;
        /* 初始被选中时间 */
        this.timeValue=this.timerange.startTime;
       /* 初始周期被选中 */
        this.currentTypedata.rent_period[0].sel=1;
    },
    /* 计算属性 */
    computed: {
        /* 返回商品主图，数据列表存在时使用列表图片，不存在时使用商品主图 */
        returnImg(){
            let id=this.afterSelectData.id
            for(let item of this.datalist) {
                if(item.content_var_attr_id===id){
                    if(item.img!=""){
                        return item.img;
                    }
                }
            }
            return this.bannerlist[0];
            
        },
        /* 返回当前周期文字 */
        timeText(){
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
        despoiteRange(){
            let self=this;
            let endtime;
            /* 当前租用周期数量 */
            let num=this.currentGoodsData.rentTime;
            let year=new Date(self.timeValue).getFullYear(),
                month=new Date(self.timeValue).getMonth(),
                /* 当前天数 */
                day=new Date(self.timeValue).getDate(),
                time=new Date(self.timeValue).getTime();
                /* 每个月的的当天的前一天， */
            switch (self.currentGoodsData.rent_period_type) {
                /* 1 2 3 4 5  日 周 月 季 年 */
                case 1:
                    return dateFormat(new Date(time+(num-1)*24*3600*1000),'YYYY-MM-DD');
                break;
                case 2: 
                    return dateFormat(new Date(time+num*24*3600*1000*7-24*60*1000),'YYYY-MM-DD');
                break;
                case 3:
                    return dateFormat(new Date(year+"-"+(month+num)+"-"+(day-1)),'YYYY-MM-DD');
                break; 
                case 4:
                    return dateFormat(new Date(year+"-"+(month+num*3)+"-"+(day-1)),'YYYY-MM-DD'); 
                break; 
                case 5: 
                    return dateFormat(new Date((year+num)+"-"+month+"-"+(day-1)),'YYYY-MM-DD');
                break; 
            }
        },
        /* 返回可选时间范围 */
        timerange() {
            let min_advance = this.currentGoodsData.rent_period_min_advance * 24 * 3600 * 1000;
            let max_advance = this.currentGoodsData.rent_period_max_advance * 24 * 3600 * 30 * 1000;
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
        couterDespoite(){
            if(this.currentTypedata.goods_deposit==0){
                return 0;
            }
            let despoite=this.currentTypedata.goods_deposit-this.currentGoodsData.rent_period_now_rent_price*this.currentGoodsData.rentTime;
            if(despoite<=0){
                return 0;
            }else{
                return 0;
            }
       }
    },
    methods: {
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
        },
        /* 商品选择,判断是否有未完成的选择状态 */
        selectType() {
            /* 先做选中状态判断 */
            /* 首先判断颜色，没有颜色存在时，此时flag为-1 */
            let flag = 0;
            if(this.colorlist[0]) {
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
                this.colorSize = false;
                this.typeDataChange(this.afterSelectData.id);
            } else {
                alert("请选择规格");
            };

        },
        /* 商品数量失去焦点数值验证 */
        /* 0 租用周期  1 商品数量 */
        goodsNumCheck(type) {
            if(type===1){
                if (this.currentGoodsData.goodsnum > this.goods_sales_count) {
                     this.currentGoodsData.goodsnum = this.goods_sales_count;
                 }
            }else{
                if(this.currentGoodsData.rentTime>this.currentGoodsData.rent_period_max_rent){
                        this.currentGoodsData.rentTime=this.currentGoodsData.rent_period_max_rent
                    }
            }
            
        },
        /* 时间周期切换数据变化 */
        timeClick(time,index){
            console.log(1);
            /* 当前日期不为选中状态时 */
            if(time.sel!==1){
                time.sel=1;
                this.currentTypedata.rent_period[this.currentTimeIndex].sel=0;
                this.currentTimeIndex=index;
                /* 开始进行数据替换 */
                this.timeDataChange(this.currentTypedata.rent_period[index]);
            }
        },
        /* 时间周期变化数据更换具体操作 */
        timeDataChange(temporary){
            this.currentGoodsData.goodsnum=1;
            this.currentGoodsData.rentTime=temporary.rent_period_min_rent;
            this.currentGoodsData.rent_period_type=temporary.rent_period_type;
            this.currentGoodsData.rent_period_min_rent=temporary.rent_period_min_rent;
            this.currentGoodsData.rent_period_max_rent=temporary.rent_period_max_rent;
            this.currentGoodsData.rent_period_old_rent_price=temporary.rent_period_old_rent_price;
            this.currentGoodsData.rent_period_now_rent_price=temporary.rent_period_now_rent_price;
            this.currentGoodsData.rent_period_min_advance=temporary.rent_period_min_advance;
            this.currentGoodsData.rent_period_max_advance=temporary.rent_period_max_advance;
            /* 初始被选中时间 */
            this.timeValue=this.timerange.startTime;
             /* 初始周期被选中 */
        },
        /* 颜色规格变化数据重置 */
        typeDataChange(id){
            let self=this;
            /* 获取对应规格的id */
            for(let item of this.datalist) {
                if(item.content_var_attr_id===id){
                    self.currentTypedata=item;
                    break;
                }
            }
            this.timeDataChange(self.currentTypedata.rent_period[0]);
            self.currentTypedata.rent_period[0].sel=1;
            
        },
        /* 时间选择变化 */
        changeTime(){

        },
        /* 商品数量,日期加减计算 */
        /* size:需要操作的源数据 type:0，减法 1，加法 */
        numcouter(size, type) {
            if (type == 0) {
                /* 租期选择情况下要考虑最小租期和最大租期 */
                if (size == this.currentGoodsData.goodsnum) {
                    if (this.currentGoodsData.goodsnum > 1) {
                        this.currentGoodsData.goodsnum--;
                    }
                } else {
                    
                    if(this.currentGoodsData.rentTime>this.currentGoodsData.rent_period_min_rent){
                        this.currentGoodsData.rentTime--;
                    }
                }
                size--
            } else {
                /* 租期选择情况下要考虑最小租期和最大租期 */
                if (size == this.currentGoodsData.goodsnum) {
                    if (this.currentGoodsData.goodsnum < this.goods_sales_count) {
                        this.currentGoodsData.goodsnum++;
                    }
                } else {
                    if(this.currentGoodsData.rentTime<this.currentGoodsData.rent_period_max_rent){
                        this.currentGoodsData.rentTime++;
                    }
                }
            }
        },
    }
}
</script>