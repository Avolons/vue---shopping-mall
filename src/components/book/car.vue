<style lang="scss" scoped>
.bookMain {
    /* 主体部分 */
    &_content {
        height: 100%;
    }
    &_carContent {
        height: calc(100% - 51px);
        overflow-y: auto;
        &_title {
            height: 44px;
            line-height: 44px;
            background-color: #fff;
            padding: 0 15px;
            box-sizing: border-box;
            font-size: 16px;
            color: #333;
            >span {
                color: #ff0000;
                font-size: 16px;
            }
        }
        &_del {
            float: right;
            line-height: 44px;
            font-size: 16px;
            color: #2196f3;
        }
        &_single {
            height: 75px;
            box-sizing: border-box;
            background-color: #fff;
            padding: 7.5px 15px;
            display: flex;
            align-items: center;
            position: relative;
            border-top: 1px solid #efefef;
            &--disabled {
                background-color: #f9f9f9;
            }
            >img {
                height: 60px;
                width: 60px;
                margin-right: 15px;
                display: block;
                flex-shrink: 0;
                flex-grow: 0;
            }
            >input {
                margin-right: 15px;
                flex-shrink: 0;
            }
            >h3 {
                font-size: 14px;
                color: #666;
                line-height: 15px;
            }
            >h4 {
                position: absolute;
                bottom: 0px;
                left: 115px;
                color: #ff0000;
                font-size: 12px;
                margin-left: 15px;
            }
            >label {
                position: absolute;
                top: 0;
                left: 0;
                width: 55px;
                height: 100%;
                font-size: 16px;
            }
            >a {
                position: absolute;
                top: 0;
                right: 0;
                width: calc(100% - 55px);
                height: 100%;
            }
        }
    }
    &_del {
        float: right;
        line-height: 44px;
        font-size: 16px;
        color: #2196f3;
    }
    &_single {
        height: 75px;
        box-sizing: border-box;
        background-color: #fff;
        padding: 7.5px 15px;
        display: flex;
        align-items: center;
        position: relative;
        border-top: 1px solid #efefef;
        &--disabled {
            background-color: #f9f9f9;
        }
        &_haveSel {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #333;
            >span {
                color: #ff0000;
                font-size: 16px;
            }
        }
        >h3 {
            font-size: 12px;
            color: #666;
            line-height: 15px;
        }
        >h4 {
            color: #ff0000;
            font-size: 9px;
            margin-left: 15px;
            position: absolute;
            top: 5px;
            left: 115px;
        }
        >label {
            position: absolute;
            top: 0;
            left: 0;
            width: 55px;
            height: 100%;
        }
        >a {
            position: absolute;
            top: 0;
            right: 0;
            width: calc(100% - 55px);
            height: 100%;
        }
    }
    &_fixed {
        position: absolute;
        bottom: 0px;
        z-index: 9999;
        display: flex;
        left: 0;
        align-items: center;
        justify-content: space-between;
        padding-left: 15px;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        border-top: 1px solid #dadada;
        background-color: #fff;
        &_allCheck {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #333;
        }
        &_haveSel {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #333;
            >span {
                color: #ff0000;
                font-size: 15px;
            }
        }
        &_btnList {
            display: flex;
            width: 220px;
            height: 100%;
        }
        &_ok {
            width: 110px;
            height: 100%;
            text-align: center;
            line-height: 50px;
            color: #fff;
            font-size: 18px;
            background-color: #2196f3;
        }
        &_del {
            background-color: #ff0000;
        }
    }
    &_nodata {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        >i {
            margin-top: 150px;
            font-size: 180px;
            color: #dadada;
            transform-origin: 50% 100%;
            animation: rote_car 2s 0s linear infinite;
        }
        >h3 {
            font-size: 16px;
            margin-top: 25px;
            margin-bottom: 40px;
            color: #666;
            text-align: center;
        }

        >a {
            height: 50px;
            width: 150px;
            border-radius: 10px;
            background-color: #2196f3;
            font-size: 16px;
            color: #fff;
            text-align: center;
            line-height: 50px;
        }
        @keyframes rote_car {
            0% {
                transform: rotate(15deg);
            }
            25% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(-15deg);
            }
            75% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(15deg);
            }
        }
    
    }  

}

</style>

<style lang="scss">
.bookMain_carContent {
    .weui-cell {
        padding: 12px 15px;
    }
    .vux-label {
        font-size: 16px;
    }
    .wapper {
        height: calc(100% - 87px);
    }
}

body {
    .weui-cells {
        margin-top: 0;
    }
}

@mixin checkedCon($fs:18px) {
    &:before {
        display: block;
        width: 60%;
        position: absolute;
        border-radius: 50%;
        height: 60%;
        background-color: #2196f3;
        left: 20%;
        top: 20%;
        content: "";
        color: #FFFFFF;
        font-size: $fs;
    }
}

$duration: .4s;
.mui-checkbox {
    -webkit-appearance: none;
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background-color: #FFFFFF;
    border: solid 1px #999;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-clip: padding-box;
    display: inline-block;
    &:focus {
        outline: 0 none;
        outline-offset: -2px
    }
    &--select{
        @include checkedCon(); 
    }
    &:checked {
        /* background-color: #18b4ed; */
        @include checkedCon();
    }
    &:disabled {
        background-color: #d9d9d9;
        border: solid 1px #d9d9d9;
        @include checkedCon();
        &:before {
            background-color: #eee;
        }
    }
    &.checkbox-green:checked {
        background-color: #5cb85c;
    }
    &.checkbox-orange:checked {
        background-color: #f0ad4e;
    }
    &.checkbox-s {
        width: 19px;
        height: 19px;
        @include checkedCon(13px);
    }
}

.mui-checkbox-anim {
    //border等其他元素不做过渡效果，增加视觉差，更有动画效果
    transition: background-color ease $duration/2;
}

body {
    .vux-prev-icon,
    .vux-next-icon {
        color: #2196f3;
        border-color: #2196f3;
    }
    .vux-popup-header-title {
        color: #333;
        font-size: 16px;
    }
    .vux-popup-header-right {
        color: #2196f3;
    }
    .inline-calendar td.is-today,
    .inline-calendar td.is-today.is-disabled {
        color: #2196f3;
    }
    .inline-calendar td.current>span.vux-calendar-each-date {
        background-color: #2196f3
    }
}
</style>




<template lang="pug">
    //- 借书架
    .bookMain
        .bookMain_content
            //- 商品列表筛选
            .bookMain_fixed(v-show="!noData&&!noPlan")
                .bookMain_fixed_allCheck
                    i(@click="allCheck",:class="{'mui-checkbox--select':selectAll==1}").mui-checkbox    
                    span 全选
                .bookMain_fixed_haveSel(v-show="isEdit==0") 已选：
                    span {{selectResult.length}}本
                button(type="button",v-show="isEdit==0",@click="enterInfo").bookMain_fixed_ok  确认({{selectResult.length}})
                .bookMain_fixed_btnList(v-show="isEdit!=0")
                    button(type="button",@click="addColl").bookMain_fixed_ok  收藏({{selectResult.length}})
                    button(type="button",@click="delCar").bookMain_fixed_ok.bookMain_fixed_del   删除({{selectResult.length}})
            //- 暂无可用的计划
            .bookMain_nodata(v-show="noPlan")
                i(class="iconfont")  &#xe62a; 
                h3.bookMain_nodata_title 您还没有借阅计划，快去添加吧
                router-link(to="/book_bookCard",class="bookMain_nodata_link") 立即购买
            //- 借书架为空 首先判断
            .bookMain_nodata(v-show="noData&&!noPlan")
                i(class="iconfont")  &#xe724; 
                h3.bookMain_nodata_title 您的借书架是空的哦
                router-link(to="/book/main",class="bookMain_nodata_link") 去首页逛逛
            //-推荐书本列表
            toast(v-model="toast",type="success") {{confrim}}
            .bookMain_carContent(v-show="!noData&&!noPlan")
                h2.bookMain_carContent_title 本次最多可借 
                    span {{max}}本
                    button.bookMain_carContent_del(type="button",v-show="isEdit==0",@click="checkType") 编辑
                    button.bookMain_carContent_del(type="button",v-show="isEdit==1",@click="checkType") 完成
                group
                    calendar( 
                        @on-change="onChange" 
                        v-model="time" 
                        title="选择借阅时间" 
                        show-popup-header
                        popup-header-title="请首先选择借阅开始时间"
                        :start-date="startTime"
                        :end-date="endTime"
                        :replace-text-list="replaceTextList" 
                        :weeks-list="weeksList"
                        )
                b-scroll(
                    :data="bookList",
                    @pulldown="listRefresh",
                    @scrollToEnd="getList",
                    pullup=true,
                    pulldown=true,
                    ref="scollView",
                    :swiper_pullUp="swiper_pullUp",
                    :swiper_nodata="swiper_nodata"
                )
                    ul.bookMain_carContent_list    
                        li(v-for="item,index in bookList",:class="{'bookMain_carContent_single--disabled':item.has_stock==0}").bookMain_carContent_single
                            input(:disabled="item.has_stock==0 && isEdit==0",type="checkbox",v-model="selectResult",:id='"check"+index',:value="item.book_id").mui-checkbox
                            label(:for='"check"+index')
                            a(:href="'/#/book_bookInfo/'+item.book_id")
                            img(@load="scollRefresh",:src="imgFormat(item.img_medium)")
                            h3.twonowarp {{item.title}}
                            br
                            h4(v-show="item.has_stock==0") 已借完


</template>         

<script>
import BookList from './common/bookList.vue';
import BScroll from 'vue-betterscroll';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../services';
import { Toast, Icon, XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Group, Calendar } from 'vux';
export default {
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem,
        BScroll,
        Calendar,
        Group,
        Icon,
        Toast
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
    data() {
        return {
            /* 上拉加载更多 */
            swiper_pullUp: false,//显示加载
            swiper_nodata: false,//没有更多数据
            bookList: [],
            title: "借书架",
            page: 1,
            noData: false,
            time: "",
            weeksList: ['日', '一', '二', '三', '四', '五', '六 '],
            replaceTextList: { 'TODAY': '今' },
            startTime: "",
            endTime: "",
            delResult: [],//删除选中的列表
            selectResult: [],//选中的列表
            elseResult: [],//备份列表
            selectAll: 0,//全选
            max: 0,//当前最多可借
            isEdit: 0,//处于编辑状态
            confrim: "",
            toast: false,
            loading: false,
            noPlan: false,
        }
    }, 
    watch: {
        "selectResult":function(){
            this.itemChange();
        },
    },
    methods: {
        /* 菜单确认 */
        enterInfo() {
            if(this.max==0){
                this.confrim = "已超出本月可借阅次数";
                this.toast = true;
                return false;
            }
            if (this.selectResult.length > this.max) {
                this.confrim = "已超出可借阅数量";
                this.toast = true;
                return false;
            }
            if (this.selectResult.length == 0) {
                this.confrim = "您未选择任何图书";
                this.toast = true;
                return false;
            }
            if (this.time == "") {
                this.confrim = "请选择起租时间";
                this.toast = true;
                return false;
            }
            let localData = [];
            for (let i of this.selectResult) {
                for (let j of this.bookList) {
                    if (i == j.book_id) {
                        localData.push(j);
                        break;
                    }
                }
            }
            /* 存储本地数据 */
            localStorage.setItem("bookOrder", JSON.stringify({
                time: this.time,
                data: localData
            }));
            this.$router.push({
                path: "/book_bookOrderInfo"
            })
        },
        checkType() {
            if (this.isEdit == 0) {
                this.elseResult = this.selectResult;
                this.selectResult = this.delResult;
            } else {
                this.delResult = this.selectResult;
                this.selectResult = this.elseResult;
            }
            this.isEdit = 1 - this.isEdit;
            this.itemChange();
        },
        /**@argument
         * 添加到收藏
         */
        addColl() {
            API.book.addColl({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                book_ids: this.selectResult
            }).then((res) => {
                if (res.body.code == 200) {
                    this.confrim = "收藏成功";
                    this.toast = true;
                }
            })
        },
        /**@argument
         * 移除购书架
         */
        delCar() {
            let self = this;
            this.$vux.confirm.show({
                /* title: 'Title', */
                content: '确定移出借书架吗？',
                onConfirm() {
                    /* 点击确认时执行具体删除操作 */
                    API.book.cancelCar({
                        user_id: self.getUserInfoUserId,
                        token: self.getUserInfoToken,
                        book_ids: self.selectResult
                    }).then((res) => {
                        if (res.body.code == 200) {
                            self.listRefresh();
                            self.confrim = "移除成功";
                            self.toast = true;
                        }
                    })
                }
            });

        },
        /* checkbox变化 */
        itemChange() {
            if (this.selectResult.length == this.bookList.length&&this.selectResult.length!=0) {
                this.selectAll = 1;
            } else {
                this.selectAll = 0;
            }
        },
        /* 全选 */
        allCheck() {
            this.selectAll=1-this.selectAll;
            if (this.selectAll == 0) {
                this.selectResult = [];
            } else {
                this.selectResult = [];
                for (const item of this.bookList) {
                    if ((item.has_stock == 1 && this.isEdit == 0) || this.isEdit == 1) {
                        this.selectResult.push(item.book_id);
                    }
                }
            }
        },
        /* 时间更改函数 */
        onChange(val) {
            window.startTime = this.time;
            this.listRefresh();
        },
        /**@argument
         * 列表刷新
         */
        listRefresh() {
            /* 直接刷新页面 */
            this.bookList = [];
            this.isEdit = 0;
            this.swiper_nodata = false;
            this.page = 1;
            this.selectResult = [];
            this.delResult = [];
            this.selectAll = 0;
            this.elseResult = [];
            this.getList();
        },
        /**
         * 获取当前可租最大数量
         */
        getMax() {
            API.book.maxCar({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.max = res.body.data.max_book_num;
                    let current = new Date().getTime();
                    this.startTime = this.dateFormat(current + res.body.data.min_days * 864e5, 'YYYY-MM-DD');
                    this.endTime = this.dateFormat(current + res.body.data.max_days * 864e5, 'YYYY-MM-DD');
                    this.noPlan = false;
                } else {
                    this.noPlan = true;
                }
            });
        },
        /**@argument
         * 获取列表数据
         */
        getList() {
            if (this.loading) {
                return false;
            }
            this.loading = true;
            if (this.bookList.length >= 10) {
                this.swiper_pullUp = true;
                this.swiper_nodata = false;
            }
            API.book.getCar({
                page: this.page,
                page_number: 10,
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                start_date: this.time
            }).then((res) => {
                if (res.body.code == 200) {
                    let time = 0;
                    if (this.bookList.length != 0) {
                        time = 500;
                    }
                    setTimeout(() => {
                        if (res.body.data.length > 0 || this.page == 1) {
                            this.swiper_pullUp = false;
                            this.bookList = this.bookList.concat(res.body.data);
                            this.page++;
                        } else {
                            this.swiper_pullUp = false;
                            if (this.bookList.length >= 10) {
                                this.swiper_nodata = true;
                            }
                        }
                        this.$nextTick(() => {
                            this.scollRefresh();
                            this.loading = false;
                            if(this.page==2&&!window.startTime&&this.bookList.length!= 0){
                                setTimeout(()=>{
                                    document.querySelector(".bookMain_carContent .vux-tap-active").click();
                                },20);
                            }
                        });
                        if (this.bookList.length == 0) {
                            this.noData = true;
                        } else {
                            this.noData = false;
                        }
                    }, time);
                }
            })
        },
        /* 滚动列表重置刷新 */
        scollRefresh() {
            this.$refs.scollView.scroll.refresh();
        },
    },
    mounted() {

    },
    activated() {
        this.getMax();
        this.listRefresh();
        localStorage.setItem("choosePlan","");
    }
}
</script>
