<template>
    <transition :name="transitionName" class="router">
        <keep-alive>
            <router-view class="Router" id="router-container"></router-view>
        </keep-alive>
    </transition>
</template>

<script>
import { API, getQuery } from './services/';


export default {
    data() {
        return {
            transitionName: 'slide-right'  // 默认动态路由变化为slide-right
        }
    },
    watch: {
        '$route'(to, from) {
            let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
            if (isBack) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            this.$router.isBack = false
        }
    },
    mounted() {

       
    }
}


</script>

<style>
.Router {
    position: absolute;
    width: 100%;
    transition: all .4s ease;
    top: 0;
    height: 100%;
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
</style>
