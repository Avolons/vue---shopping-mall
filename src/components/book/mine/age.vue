
<style lang="scss" >
body .dp-header .dp-item.dp-right {
    color: #2196f3;
}

.bookMain {
    &_age_starList {
        height: calc(100% - 300px);
        position: relative;
        perspective: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        >li {
            animation: star 3s linear infinite;
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            >i {
                font-size: 180px;
                color: #2196f3;
            }
        }
    }
    @keyframes star {
        0% {
            opacity: 0.3;
            transform: rotateY(0deg);
        }
        50% {
            opacity: 1;
            transform: rotateY(180deg);
        }
        100% {
            opacity: 0.3;
            transform: rotateY(360deg);
        }
    }
   
   /* 主体部分 */
    &_age_content {
        .bookMain_age_star {
            font-size: 16px;
            span { font-size: 16px;
            }
        }
        height: auto !important;
        .weui-textarea {
            text-align: right;
            font-size: 16px;
            color: #999;  }
        overflow-y: auto;
        .weui-cells {
            margin: 0;
            p {
                font-size: 16px;   }
        }
        .weui-cell {
            padding: 12px 15px;
            color: #333;
            .weui-label {
  font-size: 16px;
            } }
    }
    &_age_star {
        height: 46px;
        display: flex;
        padding: 0 15px;
        box-sizing: border-box;
        color: #333;
        font-size: 16px;
        border-bottom: 1px solid #d9d9d9;
        align-items: center;
        justify-content: space-between;
        >span {
            font-size: 14px;
            color: #999;
        }
    }}

body {
    .vux-popup-dialog {
        .weui-cells_radio {
            width: 60%;
            margin: 0 auto;
            margin-bottom: 20px;
            .weui-cell_radio {
                border-radius: 10px;
                margin-top: 10px;
                padding: 20px 10px;
                background-color: #fff;
                .weui-cell__bd {
                    font-size: 18px;
                    text-indent: 30px;
                }
            }
        }
    }
}
</style>




<template lang="pug">
    .bookMain_age
        header-cop(:heder_title="title")
        .bookMain_age_content.
            <group>
                <x-textarea title="宝宝昵称" @input="Change" placeholder="2-16位" v-model="babySetting.name" :show-counter="false" :rows="1" autosize></x-textarea>
            </group>
            <group>
                <popup-radio title="宝宝性别" @on-hide="Change" :options="sexList" v-model="babySetting.sex" placeholder="请选择宝宝性别"></popup-radio>
            </group>
            <group>
                <datetime title="宝宝生日" start-date="2000-01-01" :end-date="endDate" format="YYYY-MM-DD"   v-model="time"  @on-change="onChange"></datetime>
            </group>
            <p class="bookMain_age_star">宝宝星座  <span>{{star}}座</span></p>

        ul.bookMain_age_starList
            li(v-for="item,index in starList",v-show="index==currentIndex").bookMain_age_starSingle
                i.iconfont(v-html="item.title") 

</template>

<script>
import HeaderCop from '../common/header.vue';
import { API, getQuery } from '../../../services';
import { Group, XTextarea, PopupRadio, Datetime, XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux';
export default {
    directives: {
        TransferDom
    },
    components: {
        PopupRadio,
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem,
        HeaderCop,
        Group,
        Datetime,
        XTextarea
    },
    computed: {

    },
    data() {
        return {
            currentIndex: 0,
            title: "基本设置",
            babySetting: {
                value: "",
                name: "",
                sex: ""
            },
            time: "2017-01-01",
            star: "摩羯",
            endDate: "2017-01-01",
            sexList: ['男', '女'],
            starList: [{
                name: "魔羯",
                title: "&#xe67a;"
            }, {
                name: "水瓶",
                title: "&#xe673;"
            }, {
                name: "双鱼",
                title: "&#xe676;"
            }, {
                name: "牡羊",
                title: "&#xe679;"
            }, {
                name: "金牛",
                title: "&#xe66f;"
            }, {
                name: "双子",
                title: "&#xe674;"
            }, {
                name: "巨蟹",
                title: "&#xe67b;"
            }, {
                name: "狮子",
                title: "&#xe677;"
            }, {
                name: "处女",
                title: "&#xe670;"
            }, {
                name: "天秤",
                title: "&#xe672;"
            }, {
                name: "天蝎",
                title: "&#xe671;"
            }, {
                name: "射手",
                title: "&#xe678;"
            },]

        }
    },
    methods: {
        /**@argument
         * 生日更改时
         */
        onChange() {
            let m = this.babySetting.value.split("-")[1] - 0;
            let d = this.babySetting.value.split("-")[2] - 0;
            this.star = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2);
            this.babySetting.value = this.time;
            localStorage.setItem("babySetting", JSON.stringify(this.babySetting));
            this.getIndex();
        },
        getIndex() {
            for (let item = 0; item < this.starList.length; item++) {
                if (this.star == this.starList[item].name) {
                    this.currentIndex = item;
                }
            }
        },
        Change() {
            localStorage.setItem("babySetting", JSON.stringify(this.babySetting));
            this.getIndex();
        }
    },
    mounted() {
        if (localStorage.getItem("babySetting")) {
            this.babySetting = JSON.parse(localStorage.getItem("babySetting"));
        }
        this.getIndex();
        this.endDate = this.dateFormat(new Date().getTime(), 'YYYY-MM-DD');
        setTimeout(() => {
            this.time = this.babySetting.value;
        }, 100)
    }
}
</script>
