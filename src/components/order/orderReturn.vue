<style lang="scss">
.help_common_text {
    padding: 0 15px;
    >h3 {
        padding-top: 20px;
        font-size: 14px;
        color: #272727;
        font-weight: 400;
    }
    >p {
        font-size: 14px;
        color: #272727;
        margin-top: 20px;
    }
}

.return_main {
    height: 100%;
    background-color: #f1f1f1;
    .weui-cell__ft {
        font-size: 15px;
        font-weight: 400;
    }
    .weui-cells {
        margin: 0;
    }
    .weui-cell {
        height: 34px;
    }
    .weui-cells:before {
        display: none;
    }
    &_input {
        text-indent: 15px;
        height: 50px;
        line-height: 50px;
        border: none;
        font-size: 15px;
        color: #272727;
        width: 100%;
    }
    &_tplSingle {
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        text-align: center;
        color: #272727;
    }
    &_tplList {}
    &_sinceList {
        max-height: 350px;
        overflow-y: auto;
        box-sizing: border-box;
    }
    &_addressInfo {
        background-color: #fff;
        max-height: 110px;
        padding: 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        .main_since {
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
    }
    &_prompt {
        height: 50px;
        line-height: 50px;
        width: 90%;
        margin: 70px auto;
        display: block;
        background-color: #2196f3;
        font-size: 15px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
    }
    &_tpl {
        position: absolute;
        bottom: 0;
        height: 40px;
        left: 0;
        line-height: 40px;
        width: 100%;
        font-size: 15px;
        text-align: center;
        color: #fff;
        background-color: #2196f3;
    }
    &_title {
        box-sizing: border-box;
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        font-size: 15px;
        color: #272727;
        background-color: #f3f3f3;
    }
}

.return_main_tplbox {
    height: 350px;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 70px;
}
</style>

<template>
    <div>
        <div class="return_main">
            <div class="help_common_title">
                <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">商品归还</x-header>
            </div>
            <h3 class="return_main_title">选择归还地址</h3>
            <div class="return_main_address">
                <group>
                    <cell title="归还地址" @click.native="openPoup(1)" :value="isSelect" is-link></cell>
                </group>
                <div class="return_main_addressInfo">
                    <div class="main_since_text">
                        <h2 class="main_since_title">{{sincedata.revent_receiver_name}}</h2>
                        <h2 class="main_since_price">{{sincedata.revent_tel}}</h2>
                    </div>
                    <p class="main_since_intr twonowarp">{{sincedata.revent_province}}{{sincedata.revent_city}}{{sincedata.revent_region}}{{sincedata.revent_detailed_address}}</p>
                </div>
                <group>
                    <cell title="物流公司" @click.native="openPoup(0)" :value="tplisSelect" is-link></cell>
                </group>
                <input class="return_main_input" v-model="code" type="text" placeholder="请输入运单号码">
                <button @click="orderBack" class="return_main_prompt">
                    提交
                </button>
            </div>
            <!-- 选择自提点 -->
            <div v-transfer-dom>
                <popup style="border-top:1px solid #eee;background:#fff" v-model="tplShow" position="bottom">
                    <div class="return_main_tplbox">
                        <ul class="return_main_tplList">
                            <li @click="confrimTpl(item)" class="return_main_tplSingle" v-for="item in tplList">{{item.name}}</li>
                        </ul>
                    </div>
                    <button type="button" @click="close()" class="return_main_tpl">取消</button>
                </popup>
            </div>
            <!-- 选择快递公司 -->
            <div v-transfer-dom>
                <popup style="border-top:1px solid #eee;background:#f3f3f3;padding-bottom:40px;padding-top:10px;" v-model="sinceShow" position="bottom">
                    <div class="return_main_sinceList">
                        <ul class="main_since_list">
                            <li v-for="(item,index) in sinceList" class="main_since_single" @click="confrimSince(item)">
                                <div class="main_since_text">
                                    <h2 class="main_since_title">{{item.revent_receiver_name}}</h2>
                                    <h2 class="main_since_price">{{item.revent_tel}}</h2>
                                </div>
                                <p class="main_since_intr twonowarp">{{item.revent_province}}{{item.revent_city}}{{item.revent_region}}{{item.revent_detailed_address}}</p>
                            </li>
                        </ul>
                    </div>
                    <button type="button" @click="close()" class="return_main_tpl">取消</button>
                </popup>
            </div>
            <toast v-model="toast" type="success">{{confrim}}</toast>
            <toast v-model="toasts" type="cancel">{{confrim}}</toast>
        </div>

    </div>
</template>
<script>
import { XHeader, Cell, Group, CellBox, TransferDom, Popup, Toast } from 'vux'
import { mapGetters } from 'vuex';
import SinceCompent from '../order/sinceCompent.vue';
import { API, getQuery } from '../../services';

export default {
    directives: {
        TransferDom
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ])
    },
    components: {
        SinceCompent,
        XHeader,
        Group,
        Cell,
        CellBox,
        Popup,
        Toast
    },
    data() {
        return {
            orderId: "",
            from: "",
            /* 是否选择地址 */
            isSelect: "",
            tplisSelect: "",
            returnType: "",
            confrim: "",
            toast: false,
            toasts: false,
            /* 快递显示 */
            tplShow: false,
            /* 地址显示 */
            sinceShow: false,
            /* 快递公司列表 */
            tplList: [
                {
                    name: "顺丰快递",
                    id: "shunfeng",
                },
                {
                    name: "申通快递",
                    id: "shentong",
                },
                {
                    name: "中通快递",
                    id: "zhongtong",
                },
                {
                    name: "圆通快递",
                    id: "yuantong",
                },
                {
                    name: "韵达快递",
                    id: "yunda",
                },
                {
                    name: "EMS快递",
                    id: "emsinten",
                },
                {
                    name: "全峰快递",
                    id: "quanfeng",
                },
                {
                    name: "天天快递",
                    id: "tiantian",
                },
                {
                    name: "德邦快递",
                    id: "debang",
                },
                {
                    name: "百世快递",
                    id: "huitong",
                },
                {
                    name: "宅急送",
                    id: "zhaijisong",
                },
                {
                    name: "其他",
                    id: "auto",
                }, {
                    name: "无",
                    id: "wu"
                }
            ],
            /* 归还地址 */
            sinceList: [],
            infoData: {},
            page: 1,
            sincedata: {},
            currentTpl: "",
            code: "",
            book_id: ""
        }
    },

    methods: {
        close() {
            this.tplShow = false;
            this.sinceShow = false;
        },
        /* 获取数据 */
        getData() {
            API.order.orderInfo({
                userId: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                orderId: this.orderId,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.infoData = res.body.data;
                    this.getReturnList();
                }
            });
        },
        /* 获取归还地址列表 */
        getReturnList() {
            if (this.from == "book") {
                API.book.revert_sel({
                    user_id: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    book_id: this.book_id,
                    page: this.page,
                    page_number: 10,
                }).then((res) => {
                    /*  */
                    if (res.body.code == 200) {
                        this.sinceList = this.sinceList.concat(res.body.data);
                        this.sincedata = this.sinceList[0];
                        this.isSelect = "已选择",
                        this.sinceShow = false;
                        if (res.body.data.length == 10) {
                            this.page++;
                            this.getReturnList();
                        }
                    }
                });
            } else {
                API.order.goodsRevert({
                    userId: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    goodsId: this.infoData.goodsId,
                    page: this.page,
                    page_number: 10,
                }).then((res) => {
                    /*  */
                    if (res.body.code == 200) {
                        this.sinceList = this.sinceList.concat(res.body.data.revert.data);
                        if (res.body.data.revert.data.length == 10) {
                            this.page++;
                            this.getReturnList();
                        }
                    }
                });
            }

        },
        /* 路由返回 */
        routerBack() {
            this.$router.goBack();
        },
        /* 打开弹窗 */
        openPoup(type) {
            if (type == 0) {
                this.tplShow = true;
            } else {
                this.sinceShow = true;
            }
        },
        /* 确认地址 */
        confrimSince(item) {
            this.sincedata = item;
            this.isSelect = "已选择",
                this.sinceShow = false;
        },
        /* 确认物流公司 */
        confrimTpl(item) {
            this.currentTpl = item.id;
            this.tplisSelect = item.name,
                this.tplShow = false;
        },
        /* 确认归还 */
        orderBack() {
            let self = this;
            /* 快递 */
            if (!this.isSelect) {
                this.confrim = "请输入归还地址";
                this.toasts = true;
                return false;
            }
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '是否确认归还',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    if (self.from == "book") {
                        API.book.orderreturn({
                            user_id: self.getUserInfoUserId,
                            token: self.getUserInfoToken,
                            order_id: self.orderId,
                            express_id: self.code,
                            logistics_name: self.currentTpl,
                            revert_id: self.sincedata.revert_id,
                            company: self.tplisSelect,
                        }).then((res) => {
                            if (res.body.code == 200) {
                                self.confrim = "归还成功";
                                localStorage.setItem("reload", "1");
                                setTimeout(() => {
                                    self.routerBack();
                                }, 500);
                            }else{
                                self.confrim = res.body.msg;
                                self.toast=true;
                            }
                        });
                    } else {
                        API.order.orderReturn({
                            userId: self.getUserInfoUserId,
                            token: self.getUserInfoToken,
                            orderId: self.orderId,
                            sinceId: "",
                            expressId: self.code,
                            logisticsName: self.currentTpl,
                            revertId: self.sincedata.revert_id,
                            company: self.tplisSelect,
                        }).then((res) => {
                            if (res.body.code == 200) {
                                self.confrim = "归还成功";
                                localStorage.setItem("reload", "1");
                                setTimeout(() => {
                                    self.$router.push({ path: '/index/main/order' });
                                }, 500);
                            }
                        });

                    }


                }
            });


        }
    },
    activated() {
        overscroll(document.querySelector('.return_main_tplbox'));
        overscroll(document.querySelector('.return_main_sinceList'));
        this.page = 1;
        this.isSelect = "";
        this.tplisSelect = "";
        this.infoData = "";
        this.sincedata = "";
        this.code = "";
        this.orderId = this.$route.query.orderId;
        this.from = this.$route.query.from;
        this.book_id = this.$route.query.book_id;
        this.sinceList = [];
        this.getData();
    },
    mounted() {
        overscroll(document.querySelector('.return_main_tplbox'));
        overscroll(document.querySelector('.return_main_sinceList'));
    }
}
</script>