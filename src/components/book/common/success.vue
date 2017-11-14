
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
    }
    
  
}
</style>




<template lang="pug">
    .bookMain_age
        header-cop(:heder_title="title")
        .bookMain_age_content
            msg(
            :title="title",
            :description="description" ,
            :buttons="buttons" ,
            icon="success")
</template>

<script>
import HeaderCop from '../common/header.vue';
import { API, getQuery } from '../../../services';
import { XHeader,Msg,XButton } from 'vux';
export default {
   
    components: {
        XHeader,
        HeaderCop,
        Msg,
        XButton
    },
    computed: {
        
    },
    data() {
        return {
           title:"借阅成功" ,
           description:"恭喜您借阅成功",
           buttons: [{
                type: 'primary',
                text: '前往首页',
                onClick: this.changeIcon.bind(this)
            }]
        }
    },
    methods: {
        changeIcon(){
            this.$router.push({
                path:"/book"
            })
        }
    },
    activated () {
        this.title=this.$route.qwuery.title;
    }

}
</script>
