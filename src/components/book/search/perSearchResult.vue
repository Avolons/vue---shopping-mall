
<style lang="scss" scoped>
@mixin checkedCon($fs:18px) {
    &:before {
        display: block;
        width: 50%;
        position: absolute;
        height: 30%;
        color: #2196f3;
        left: 20%;
        border: 2px solid #2196f3;
        border-top: none;
        border-right: none;
        content: "";
        transform: skewX(-15deg) rotate(-45deg);
        top: 20%;
        font-size: $fs;
        font-weight: 700;
    }
}

$duration: .4s;
.mui-checkboxs {
    -webkit-appearance: none;
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background-color: #f1f1f1;
    border-radius: 3px;
    border: none;
    background-clip: padding-box;
    display: inline-block;
    &:focus {
        outline: 0 none;
        outline-offset: -2px
    }
    &:checked {
        @include checkedCon();
    }
    &:disabled {
        background-color: #d9d9d9;
        border: solid 1px #d9d9d9;
        @include checkedCon();
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

.bookMain_nodata {
    height: calc(100% - 50px);
    display: flex;
    align-items: center;
    flex-direction: column;
    >i {
        margin-top: 150px;
        font-size: 160px;
        font-weight: 100;
        color: #dadada;
        display: block;
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
}

.bookMain_list {
    background-color: #f1f1f1 !important;
}

.bookMain_listContent {
    height: calc(100% - 100px);
    &_header {
        height: 65px;
        padding: 10px 15px;
        box-sizing: border-box;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 16px;
        color: #666;
        background-color: #fff;
        >span {
            color: #2196f3;
        }
        >p {
            font-size: 16px;
            color: #2196f3;
            width: 100%
        }
    }
    &_list {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        background-color: #f1f1f1;
    }
    &_single {
        padding-top: 15px;
        width: 33.33%;
        background-color: #fff;
        position: relative;
        display: flex;
        border-bottom: 15px solid #f1f1f1;
        flex-direction: column;
        align-items: center;
        >h3 {
            font-size: 14px;
            color: #333;
            height: 30px;
            line-height: 15px;
            box-sizing: border-box;
            width: 90%;
            margin-top: 5px;
            text-align: center;
        }
        >input {
            position: absolute;
            top: 15px;
            right: 5px;
        }
        >button {
            display: flex;
            justify-content: center;
            width: 100%;
            align-items: center;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            color: #666;
            margin-top: 10px;
            padding-bottom: 5px;
            >i {
                color: #2196f3;
                margin-right: 10px;
            }
        }
    }
    &_imgbox {
       width: 110px;
       height: 110px;
       display: flex;
       justify-content: center;
       align-items: center;
       overflow: hidden;
       >img{
           width: 100%;
           display: block;
       }
    }
}

.bookMain_search_fixed {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    display: flex;
    width: 100%;
    >button {
        width: 50%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 22px;
        color: #fff;
        background-color: #2196f3;
    }
    >.bookMain_search_reset {
        background-color: #55b4ff;
    }
}
</style>


<template lang="pug">
    //- 首页主体
    .bookMain_list
        header-cop(:heder_title="title")
        .bookMain_nodata(v-show="haveData")
            i(class="iconfont")  &#xe62a; 
            h3.bookMain_nodata_title 抱歉，没有搜索到相关图书
        .bookMain_listContent(v-show="!haveData")
            b-scroll(
            :data="bookList",
            pulldown=true,
            @pulldown="getList",
            ref="scollView",
            )
                h3.bookMain_listContent_header 当前选中的关键词和本数
                    span(@click="routerBack") 重新选择
                    p 
                        template(v-for="item in iconList")
                            |{{item}},
                ul.bookMain_listContent_list
                    li.bookMain_listContent_single(v-for="item,index in bookList")
                        input(type="checkbox",:value="item.book_id",v-model="idList").mui-checkboxs
                        .bookMain_listContent_imgbox(@click="goInfo(item.book_id)")
                            img(:src="imgFormat(item.img_medium)",alt="img",@load="scollRefresh")
                        h3.twonowarp {{item.title}}
                        button(type="button",@click="change(1,item,index)") 
                            i.iconfont &#xe67c; 
                            |换一本
                //-推荐书本列表
            toast(v-model="toast",type="success") {{confrim}}
            .bookMain_search_fixed
                button(type="button",@click="change(2)").bookMain_search_reset 换一批
                button(type="button",@click="addCar") 加入借书架
</template>

<script>
import HeaderCop from '../common/header.vue';
import BookList from '../common/bookList.vue';
import BScroll from '../common/scrollView.vue';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';
import { XHeader, Toast, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux';
export default {
    directives: {
        TransferDom
    },
    components: {
        BookList,
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem,
        HeaderCop,
        BScroll,
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
            confrim: "",
            toast: false,
            haveData: false,
            
            bookList: [],
            title: "智能选书",
            iconList: [],
            idList: [],
            chooseId: 0,
            dataRefrese: false,//数据是否刷新完成
            param: {
            }
        }
    },
    methods: {
        goInfo(id){
           window.location.href="/#/book_bookInfo/"+id; 
        },
        routerBack() {
            this.$router.goBack();
        },
        /* 更换 type 1单选 2多选  */
        change(type, item={}, index = -1) {
            let book_ids = [];
            for (const item of this.bookList) {
                  book_ids.push(item.book_id);
            }
            this.param.type = type;
            this.param.book_ids = book_ids;
            API.book.intelligentChange(
                this.param
            ).then((res) => {
                if (res.body.code == 200) {
                    if (type == 1) {
                        this.bookList[index] = res.body.data[0];
                    } else {
                        this.bookList = [];
                        this.bookList = res.body.data;
                    }
                    this.$nextTick(() => {
                        this.scollRefresh();
                        this.idList = [];
                        for (const item of this.bookList) {
                            this.idList.push(item.book_id);
                        }
                    })
                }
            })

        },
        /**@argument
           * 加入购物车
           */
        addCar(item) {
            if (!this.getUserInfoUserId) {
                this.$router.push({
                    path: "/login"
                });
                return false;
            }
            API.book.addCar({
                    user_id: this.getUserInfoUserId,
                    token: this.getUserInfoToken,
                    book_ids: this.idList
            }).then((res) => {
                if (res.body.code == 200) {
                    this.confrim="加入成功";
                    this.toast=true;
                }else if(res.body.code == 250){
                    this.$router.push({
                        path:"/book_bookCard"
                    })
                }
            })

        },
        /**@argument
         * 列表刷新
         */
        listRefresh() {
            this.bookList = [];
            this.getList();
        },
        /**@argument
         * 获取列表数据
         */
        getList() {
            API.book.search(this.param).then((res) => {
                if (res.body.code == 200) {
                    this.bookList = res.body.data;
                    this.$nextTick(() => {
                        this.scollRefresh();
                        this.idList = [];
                        for (const item of this.bookList) {
                            this.idList.push(item.book_id);
                        }
                    })
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
        this.param = JSON.parse(this.$route.query.param);
        this.iconList = JSON.parse(this.$route.query.icon);
        /* 类型数据拼接 */
        this.listRefresh();
    }
}
</script>
