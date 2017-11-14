<style lang="scss" scoped>
.bx_bcimg {
    display: block;
    width: 100%;
}

.bx_link {
    font-size: 20px;
    display: block;
    color: #fff;
    background-color: #36b4fc;
    width: 80%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: fixed;
    left: 50%;
    bottom:50px;
    transform: translateX(-50%);
    border-radius: 0.4rem;
    cursor: pointer;
}
</style>

<template lang="pug">
    div
        b-scroll(
                :data="bookList",
                ref="scollView",
            )  
            img(@load="scollRefresh",src="../../assets/img/common/bxshare.png").bx_bcimg
        a(href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie", title="title").bx_link  立即下载租介APP
</template>

<script>
import BScroll from '../book/common/scrollView.vue';
export default {
    components:{
        BScroll
    },
    data() {
        return {
            bookList: [],
        }
    },
    methods: {
        /* 滚动列表重置刷新 */
        scollRefresh() {
            this.$refs.scollView.scroll.refresh();
        },
    }
}
</script>

