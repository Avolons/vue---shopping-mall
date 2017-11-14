<style lang="scss" scoped>
.bookMain_mine_list {
    margin: 0;
    .weui-cells {
        margin: 0;
    }
}

.bookMain_mine_single {
    height: 44px;
    .vux-label {
        font-size: 16px;
    }
}

</style>

<style>
.vux-cell-bd .vux-label {
    font-size: 16px;
}

.weui-cell__ft {
    font-size: 16px;
    
    }
</style>
<template lang="pug">
    //- 首页主体
    .bookMain
        .bookMain_actionList.
            <group class="bookMain_mine_list">
                <cell class="bookMain_mine_single" title="我的计划" :link="{path:'/mine_plan'}"></cell>
                <cell class="bookMain_mine_single" title="我的订单" :link="{path:'/mine_order'}"></cell>
                <cell class="bookMain_mine_single" title="基本设置" :link="{path:'/mine_age'}"></cell>
            </group>
          
</template>

<script>
import HeaderCop from './common/header.vue';
import BookList from './common/bookList.vue';
import { mapGetters } from 'vuex'
import { API, getQuery } from '../../services';
import { Cell, CellBox, CellFormPreview, Group } from 'vux';
export default {
    components: {
        Group,
        Cell,
        CellFormPreview,
        CellBox,
    },
    data() {
        return {
            title: "绘本",
        }
    },
    methods: {

    },

}
</script>
