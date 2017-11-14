<style lang="scss" >
.book_common {
    .vux-header .vux-header-left{
        >i{
            color: #333 !important;
        }
    }
    >.vux-header {
        height: 50px;
        box-sizing: border-box;
        background-color: #fff!important;
        box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid #eee;
        .vux-header-title {
            color: #333;
            font-size: 18px;   }
    }
    .vux-header .vux-header-left a,
    .vux-header .vux-header-left button,
    .vux-header .vux-header-right a,
    .vux-header .vux-header-right button {
        color: #333;
        font-size: 13px;
    }
    .vux-header .vux-header-left .left-arrow:before {
        border-color: #333;
    }
}

body {
    .vux-actionsheet-menu-default {
        color: #2196f3;
    }
}
</style>

<template lang="pug">
    .book_common.
        <x-header   :left-options={preventGoBack:true} @on-click-back="goBack" :right-options="{showMore:true}" @on-click-more="showMenus = true">{{heder_title}}
        <i  @click="goBack" class="iconfont" style="font-size:24px;color:#fff" slot="overwrite-left" >&#xe617;</i>
        </x-header>
            <div v-transfer-dom>
                <actionsheet @on-click-menu="goBook" :menus="menus" v-model="showMenus" show-cancel></actionsheet>
            </div>    
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux';
export default {
    directives: {
        TransferDom
    },
    props: ['heder_title'],
    components: {
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem
    },
    data() {
        return {

            menus:
            {
                menu1: "返回绘本首页",
                menu2: "返回租介首页"
            },
            showMenus: false
        }
    },
    methods: {
        goBack() {
            this.$router.goBack();
        },
        goBook(key, item) {
            if (key == "menu1") {
                this.$router.push({
                    path: "/book"
                });
            } else {
                this.$router.push({
                    path: "/"
                });
            }

        },

    }
}
</script>