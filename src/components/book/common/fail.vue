
<style lang="scss">
body .dp-header .dp-item.dp-right{
            color: #2196f3;
        }
.bookMain {
    /* 主体部分 */
    &_age_content {
        height: calc(100% - 50px);
        overflow-y: auto;
        .weui-cells{
            margin: 0;
        }
        .weui-cell{
            padding: 12px 15px;
            color: #333;
            font-size: 16px;
        }
        .weui-icon-success{
        color: #2196f3;
    }
    .weui-btn_primary{
        background-color:#2196f3;
    }
    .weui-btn_primary:not(.weui-btn_disabled):active{
            background-color:#2196f3;
    }
    .weui-msg__desc{
        margin: 30px auto;
        width: 70%;
    }
    }
}
.bookMain_fail_content{
        height: calc(100% - 50px);
        img{
            width: 100%;
            display: block;
        }
    }
</style>




<template lang="pug">
    .bookMain_age
        header-cop(:heder_title="title")
        .bookMain_fail_content
            b-scroll(:data="typeList" , ref="scollView")
                img(@load="scollRefresh",src="../../../assets/img/common/fail.png") 

</template>

<script>
import HeaderCop from '../common/header.vue';
import BScroll from 'vue-betterscroll';
import { API, getQuery } from '../../../services';
import { XHeader,Msg,XButton } from 'vux';
export default {
   
    components: {
        XHeader,
        HeaderCop,
        Msg,
        XButton,
        BScroll,
    },
    computed: {
        
    },
    data() {
        return {
           typeList:[],
           title:"归还失败" ,
           titles:"订阅计划到期后可取消信用免押借还特权",
           description:"租介订阅计划内，每月最多只能下单2次，如有疑问，请致电0571-86113050",
           buttons: [{
                type: 'warn',
                text: '有效期内无法取消',
            }]
        }
    },
    methods: {
        /* 滚动列表重置刷新 */
    scollRefresh() {
      this.$refs.scollView.scroll.refresh();
    },   
    },
    activated () {
        
    }

}
</script>
