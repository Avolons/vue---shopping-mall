<style lang="scss">
.orderInfon_main{
     .weui-cell__ft{
            color: #ff0000;
            font-size: 15px;
        }  
        .vux-cell-bd .vux-label{
            font-size:15px !important;
            color:#666;
        }
}
</style>

<style lang="scss" scoped>
.orderInfon_main_defaultAddress{
    padding: 12px 15px;
    box-sizing: border-box;
    font-size: 15px;
    color: #333;
    background-color: #fff;
    >span{
        color: #ff0000;        font-size: 15px;
        margin-left: 10px;
    }
}
.orderInfon {
    &_main {
        .weui-cell__ft{
            color: #ff0000;
            font-size: 16px;
        }
        
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
            color: #272727;
            font-size: 15px;
            background-color: #fff;
            margin-top: 10px;
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
        }
        &_plan{
            height: 44px;
            .weui-cell{
                padding: 12px 15px;
            }
            .weui-cells{
                &:after{
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
        &_price{
            font-size: 18px;
            color: #333;
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
        &_noControl{
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
.bookMain_carContent_list{
    margin-top: 10px;
}
.bookMain_carContent_single{
                height: 75px;
                box-sizing: border-box;
                background-color: #fff;
                padding: 7.5px 15px;
                display: flex;
                align-items: center;
                position: relative;
                border-top: 1px solid #efefef;
                >img{
                    height: 60px;
                    width: 60px;
                    margin-right: 15px;
                }
                >i{
                  color: #666;
                  font-size: 16px;      
               }
                >h3{
                    font-size: 16px;
                    color: #666;
                    line-height: 15px;
                    flex-grow: 1;
                }
            }
.orderInfo_main_content {
    height: calc(100% - 107px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
</style>

<template lang="pug">
    div
        header-cop(:heder_title="title")
        div.orderInfon_main
            b-scroll(
                :data="localdata.data",
                pulldown=true,
                ref="scollView"
                    )
                div.orderInfo_main_content
                    h3.orderInfon_main_defaultAddress 配送地址
                        span {{service_area}}
                    group.orderInfon_main_address
                        //-- 用户收货地址 -->
                        cell(v-show="haveDefault" ,:title="getNamePhone",:link="{path:'/addressList?chose=1'}" ,:inline-desc='getAddress')
                        cell(v-show="!haveDefault", class="nodefault", title="请选择收货地址" ,:link="{path:'/addressList?chose=1'}")
                        //-- 选择物流方式 -->
                    //-- 订单列表 -->
                    ul.bookMain_carContent_list    
                        li(v-for="item,index in localdata.data").bookMain_carContent_single
                            img(@load="scollRefresh",:src="imgFormat(item.img_medium)")
                            h3.twonowarp {{item.title}}
                            i(@click="delItem(index)").iconfont &#xe618;
                    //-- 租赁时间 -->
                    div.orderInfon_main_timeRange 借阅时间：{{rentRange.start}}&nbsp;至&nbsp;{{rentRange.end}}
                        span 共1个月
                    group.orderInfon_main_plan
                        cell(title="请选择计划",
                        is-link,
                        :link="'/mine_plan?choose=1&&num='+localdata.data.length",
                        :value="choosePlan.name"
                        )
                    //-- 收货地址和物流方式 -->
                    group.orderInfon_main_priceColl
                        x-textarea(:max="20", v-model="option", placeholder="买家留言")

            footer.orderInfon_footer
                div.orderInfon_footer_price 合计：
                    span {{localdata.data.length}}本
                button(@click="buygoods", type="button",v-show="canPay").orderInfon_footer_btn 借阅
                button(type="button",v-show="!canPay").orderInfon_footer_noControl 暂不支持该地区
            toast(v-model="toast",type="success")  {{confrim}}
</template>
<script>
import { XHeader, Cell, Group, XTextarea, dateFormat, Toast, CellBox } from 'vux';
import { mapGetters } from 'vuex'
import { API, getQuery } from '../../../services';
import HeaderCop from '../common/header.vue';
import BScroll from '../common/scrollView.vue';
export default {
    components: {
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
            canPay:true,
            confrim: "请选择地址",
            /* 提示信息 */
            toast: false,
            orderLogistics: '/orderLogistics/',
            /* 是否拥有默认数据 */
            haveDefault: false,
            /* 订单详情数据 */
            localdata: {
                data:[]
            },
            /* 买家留言 */
            option: "",
            title:"订单详情",
            choosePlan:{},
            service_area:""//支持的地址
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
            let start = this.localdata.time;
            let num = 1;
            /* 获取日月季 */
            let year = new Date(start).getFullYear(),
                month = new Date(start).getMonth() + 1,
                /* 当前天数 */
                day = new Date(start).getDate(),
                /* 获取当前时间数（毫秒） */
                time = new Date(start).getTime();
            let year_3 = Math.floor((month + num) / 12);
            let month_3 = (month + num) % 12;
            if (month_3 == 0) {
                month_3 = 12;
                year_3--;
            }
            let monthTime=new Date(year + year_3 + "/" + month_3 + "/" +day).getTime();
            let end =dateFormat(monthTime-24 * 3600 * 1000, 'YYYY-MM-DD');
            return { start, end };
        },
    },
    methods: {
        delItem(index){
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '确定删除该绘本',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                   self.localdata.data.splice(index,1); 
                   if(self.localdata.data.length==0){
                       self.routerBack();
                   }
                }
            });
            
        },
        /* 滚动列表重置刷新 */
        scollRefresh(){
            /* this.$refs.scollView.scroll.refresh(); */
        },
        routerBack() {
            this.$router.goBack();
        },
        /* 提交订单 */
        buygoods() {
            /* 数值校验 */
            if (this.getAddress == "") {
                this.confrim = "请选择地址";
                this.toast = true;
                return false;
            }
            if (!this.choosePlan.id) {
                this.confrim = "请选择借阅计划";
                this.toast = true;
                return false;
            }
            let self = this;
             let book_ids=[];
            for (const item of this.localdata.data) {
                book_ids.push(item.book_id);
            }
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '确认借阅？',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                     API.book.createOrder({
                        user_id: self.getUserInfoUserId,
                        token: self.getUserInfoToken,   
                        address_id:self.$store.state.addressData.id||self.$store.state.addressData.address_id,
                        card_id:self.choosePlan.id,
                        start_date:self.rentRange.start,
                        end_date:self.rentRange.end,
                        books:book_ids,
                        message:self.option,
                    }).then((res)=>{
                        if(res.body.code==200){
                            window.startTime=null;
                            self.$router.push({
                                path:"/book_bookSuccess"
                            })  
                        }else{
                            self.confrim = res.body.msg;
                            self.toast = true;
                            return false;
                        }
                    })
                }
            });
            
           
        },
        /* 数据初始化 */
        Initialization() {
            this.getDefaultAddress();
        },
        /* 获取用户默认地址，并且出发vuex更新 */
        getDefaultAddress() {
            API.book.defaultAddress({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.service_area=res.body.data.service_area;
                    if(res.body.data.default_address){
                        this.haveDefault = true;
                        this.$store.dispatch('SetAddress', res.body.data.default_address);   
                    }else{
                        this.haveDefault = false;
                    }
                }
            });
        },

    }, mounted() {
        this.Initialization();
        
    },
    activated() {
        /* 地址点击函数 */
        if (localStorage.getItem('addressClick')) {
            localStorage.setItem('addressClick', '');
            API.book.checkAddress({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                address_id:this.$store.state.addressData.id||this.$store.state.addressData.address_id
            }).then((res) => {
                if (res.body.code != 200) {
                   this.confrim=res.body.msg;
                   this.canPay=false;
                   this.toast=true;
                }else{
                   this.canPay=true; 
                }
            });
            this.haveDefault = true;
        }
        /* 获取当前数据 */
        this.localdata=JSON.parse(localStorage.getItem("bookOrder"));
        this.choosePlan={};

        let choosePlan=localStorage.getItem("choosePlan");
        if(choosePlan){
            this.choosePlan=JSON.parse(choosePlan);
        }else{
            API.book.myValidCards({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                book_num:this.localdata.data.length,
            }).then((res) => {
               if(res.body.code==200){
                    if(res.body.data.length==1){
                        this.choosePlan={
                            name:res.body.data[0].name,
                            id:res.body.data[0].user_card_id
                        }
                    }
                 }
            })
        }

        
    }
} 
</script>