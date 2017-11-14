<style  lang="scss">


.book_router{
    position: fixed;
    height: calc(100% - 101px);
    top:50px;
    background-color: #f1f1f1;
    overflow-y: auto;
}

.index_tabbar {
    background-color: #fff;
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}

.weui-bar__item_on {
    .weui-tabbar__icon {
        color: #2196f3 !important;
        .iconfont {
            color: #2196f3 !important;
        }
    }
    .weui-tabbar__label {
        color: #2196f3 !important;
    }
}
</style>
<template>
    <div class="index_container">
        <!-- 缓存组件 -->
        <header-cop :heder_title="title">
        </header-cop>
        <transition :name="transitionName" class="book_router">
            <keep-alive>
                <router-view class="router-view Router book_router"></router-view>
            </keep-alive>
        </transition>
        <tabbar class="index_tabbar">
            <tabbar-item :selected="this.$route.fullPath=='/book/main'" :link="{path:'/book/main'}">
                <i @click="routerchange(0)" class="iconfont" slot="icon">&#xe769;</i>
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item :selected="this.$route.fullPath=='/book/main/collect'" :link="{path:'/book/main/collect'}">
                <i @click="routerchange(1)" class="iconfont" slot="icon">&#xe682;</i>
                <span slot="label">收藏</span>
            </tabbar-item>
            <tabbar-item :selected="this.$route.fullPath=='/book/main/car'" :link="{path:'/book/main/car'}">
                <i @click="routerchange(2)" class="iconfont" slot="icon">&#xe615;</i>
                <span slot="label">借书架</span>
            </tabbar-item>
            <tabbar-item :selected="this.$route.fullPath=='/book/main/mine'" :link="{path:'/book/main/mine'}">
                <i @click="routerchange(3)" class="iconfont" slot="icon">&#xe8aa;</i>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import HeaderCop from './common/header.vue';
import { XHeader, Actionsheet, TransferDom, GroupTitle, Tabbar, TabbarItem, Loading } from 'vux';
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            transitionName: 'slide-right', // 默认动态路由变化为slide-right
            currentindex: 0,/* 当前路由index值 */
            title: "绘本",
        }
    },
    directives: {
        TransferDom
    },
    components: {
        XHeader,
        Actionsheet,
        GroupTitle,
        Tabbar,
        TabbarItem,
        Loading,
        HeaderCop
    },
    computed: {

    },
    watch: {

    },
    mounted: function() {
        setInterval(()=>{
             switch (this.$route.fullPath) {
                case '/book/main':
                    this.title="绘本";
                    break;
                case '/book/main/collect':
                    this.title="我的收藏";
                    break;
                case '/book/main/car':
                    this.title="借书架";
                    break;
                default:
                    this.title="我的";
                    break;
            }
        },100)
    },
    activated(){
       
    },
    methods: {
        /* 路由切换函数 */
        routerchange(index) {
            switch (index) {
                case 0:
                    this.title="绘本";
                    break;
                case 1:
                    this.title="我的收藏";
                    break;
                case 2:
                    this.title="借书架";
                    break;
                default:
                    this.title="我的";
                    break;
            }
            if (index < this.currentindex) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            this.currentindex = index;
        }
    }
}

</script>