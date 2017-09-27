<style lang="scss">
.order_logmain {
    background-color: #f3f3f3;
    height: 100%;
    .vux-header-right>span {
        font-size: 18px;
        color: #272727;
    }
    .weui-loadmore_line .weui-loadmore__tips{
        background-color: #f3f3f3;
    }
}

.order_type {
    &_list {
        padding: 10px 0;
        background-color: #fff;
    }
    &_title {
        height: 50px;
        line-height: 50px;
        text-indent: 15px;
        font-size: 15px;
        color: #272727;
    }
    &_single {
        font-size: 15px;
        color: #272727;
        position: relative;
        padding-left: 25px;
        height: 20px;
        margin-left: 15px;
        &:after {
            top: 0;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            left: 0;
            display: block;
            content: "";
            position: absolute;
            border: 1px solid #dadada;
        }
        &:before {
            height: 10px;
            width: 10px;
            background-color: #2196f3;
            position: absolute;
            left: 5px;
            top: 5px;
            display: none;
            content: "";
            border-radius: 50%;
            position: absolute;
        }
        &--selected {
            &:after {
                border-color: #2196f3;
            }
            &:before {
                display: block;
            }
        }
    }
}
</style>

<template>
    <div>
        <div class="order_logmain">
            <div class="help_common_title">
                <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">物流方式
                    <span slot="right" @click="stateChange">完成</span>
                </x-header>
                <h3 class="order_type_title">物流方式</h3>
                <checker class="order_type_list" v-model="val" default-item-class="order_type_single" selected-item-class="order_type_single--selected">
                    <span v-show="noTpl" style="display: block;;text-indent:15px;font-size:15px;color:#f80000">暂不支持地区</span>
                    <checker-item v-show="tplobj[1]" value="1">快递</checker-item>
                    <checker-item v-show="tplobj[2]" value="2">上门</checker-item>
                    <checker-item v-show="tplobj[3]" value="3">自提</checker-item>
                </checker>
                <h3 v-show="val==3" class="order_type_title">自提地址</h3>
            </div>
            <since-compent style="margin-bottom:30px" v-show="val==3" :commonSinceList="sinceList"></since-compent>
            <toast v-model="toast" type="cancel">{{confrim}}</toast>
            <load-more v-show="loadshow" tip="加载更多"></load-more>
            <load-more v-show="!loadshow  && val==3 && sinceList.length>8" :show-loading="false" tip="到底了" ></load-more>
        </div>
    </div>
</template>
<script>
import { XHeader, Group, Checker, CheckerItem, Toast ,LoadMore} from 'vux';
import { mapGetters } from 'vuex'
import SinceCompent from '../order/sinceCompent.vue';
import { API, getQuery } from '../../services';

export default {
    components: {
        XHeader,
        Group,
        Checker,
        CheckerItem,
        SinceCompent,
        Toast,
        LoadMore
    },
    data() {
        return {
            canBottom:true,//是否可以到达最底部
            loadshow:false,//显示更多
            haveData:true,//是否有数据
            page:1,//当前页码
            confrim: "请选择物流方式",
            toast: false,
            val: "",
            noTpl: false,
            tplobj: {},
            sinceList: [],//获取自提点列表
        }
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ])
    },
    methods: {
        /* 路由回退 */
        routerBack(){
            if(this.val!=3){
                this.$store.dispatch("CurrentTpl", this.val);
            }
            this.$router.goBack();
        },
        /* 数据初始化 */
        dataForm() {
            /* 获取物流方式 */
            API.order.orderTpl({
                province: this.$store.state.addressData.province,
                city: this.$store.state.addressData.city,
                region: this.$store.state.addressData.district,
                goodsId: this.$route.params.id
            }).then((res) => {
                if (res.body.code == 200) {
                    if (!res.body.data.tpl[0]) {
                        this.noTpl = true;
                    } else {
                        this.noTpl = false;
                    }
                    let tpl = {};
                    for (let item of res.body.data.tpl) {
                        tpl[item.goods_shipping_tpl_type] = 1;
                    }
                    this.tplobj = tpl;
                    if (tpl[3]) {
                        /* 获取自提点列表 */
                        API.order.goodsSince({
                            userId: this.getUserInfoUserId,
                            token: this.getUserInfoToken,
                            province: this.$store.state.addressData.province,
                            city: this.$store.state.addressData.city,
                            region: this.$store.state.addressData.district,
                            goodsId: this.$route.params.id,
                            page:this.page,
                            page_number:10,
                        }).then((res) => {
                            /*  */
                            if (res.body.code == 200) {
                                this.sinceList = res.body.data.ztd.data;
                                if(res.body.data.ztd.data.length==10){
                                    this.haveData=true;
                                    this.page++;
                                }else{
                                    this.haveData=false;
                                }
                            }
                        });
                    }
                }
            });

        },
        /* 获取更多数据 */
        getMoreData(){
            if(this.val==3 && this.haveData){
                this.loadshow=true;
                API.order.goodsSince({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    province: this.$store.state.addressData.province,
                    city: this.$store.state.addressData.city,
                    region: this.$store.state.addressData.district,
                    goodsId: this.$route.params.id,
                    page:this.page,
                    page_number:10,
                }).then((res) => {
                    /*  */
                    if (res.body.code == 200) {
                        setTimeout(()=>{
                        this.sinceList = this.sinceList.concat(res.body.data.ztd.data);
                        this.canBottom=true;
                        this.loadshow=false;
                        },500);
                        if(res.body.data.ztd.data.length==10){
                            this.haveData=true;
                            this.page++;
                        }else{
                            this.haveData=false;
                        }
                    }
                });
                    
            }else{
                this.canBottom=true;  
            }
        },
        /* 触发状态管理 */
        stateChange() {
            if (this.val == "") {
                this.toast = true;
                return false;

            } else if (this.val == "3") {
                this.confrim = "请选择自提点";
                this.toast = true;
                return false;
            }
            else {
                this.$store.dispatch("CurrentTpl", this.val);
                this.$router.goBack();
            }
        },

    },
    mounted() {
        overscroll(document.querySelector('.order_logmain'));
        
        let self = this;
        function getScrollTop() {
            　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            　　if (document.body) {
                　　　　bodyScrollTop = document.body.scrollTop;
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
            　　if (document.body) {
                　　　　bodyScrollHeight = document.body.scrollHeight;
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
        window.onscroll = function() {
            　　if (getScrollTop() + getWindowHeight() <= (getScrollHeight()-10)) {
                   if(self.canBottom==true){
                        self.canBottom=false;
                        self.getMoreData();
                    }
            　　}
        };
    },
    activated() {
        overscroll(document.querySelector('.order_logmain'));
        this.val=0,
        this.page=1;
        this.canBottom=true;
        this.haveData=true;
        this.sinceList=[];
        this.dataForm();
    }
}
</script>