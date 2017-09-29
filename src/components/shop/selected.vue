<style lang="scss">
.morehot_main {
    height: calc(100% - 47px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
</style>

<template>
    <div>
        <!--  -->
        <div class="help_common_title">
            <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">精选店铺</x-header>
        </div>
        <div class="select_main">

        </div>  
    </div>
</template>

<script>
import { XHeader } from 'vux'
import { API, getQuery } from '../../services';
export default {
    data() {
        return {
            shopList: [],
        }
    },
    components: {
        XHeader,
    },
    methods: {
        /* 路由回退 */
        routerBack() {
            this.$router.goBack();
        },
    },
    activated() {
        overscroll(document.querySelector('.select_main'));
    },
    mounted() {
        overscroll(document.querySelector('.select_main'));
       
    }
}
</script>