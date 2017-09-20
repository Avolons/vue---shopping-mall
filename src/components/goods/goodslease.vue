<style lang="scss">
.help_common_text {
    padding: 0 15px;
    >h3 {
        padding-top: 20px;
        font-size: 14px;
        color: #272727;
        font-weight: 400;
    }
    >p {
        font-size: 14px;
        color: #272727;
        margin-top: 20px;
    }
}
.rules_main{
    height: 100%;;
    background-color: #fff;
}
.rules_main>pre{
    white-space: pre-line;
    font-size: 14px;
    color: #272727;
    font-weight: 400;
    line-height: 25px;
    box-sizing: border-box;
    padding: 0 15px;
    padding-top: 20px;
}
</style>

<template>
    <div>
        <div class="help_common_title">
            <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">租赁规则/合约
            </x-header>
        </div>
        <div class="rules_main">
            <pre>
                 {{content}}
            </pre>
        </div>
    </div>
</template>
<script>
import { XHeader, Cell, Group } from 'vux'
 import {API,getQuery} from '../../services';
export default {
    components: {
        XHeader,
        Group,
        Cell,
    },
    data() {
        return {
            goodsId:"",
            content:"",
        }
    },

    methods: {
        routerBack() {
            this.$router.goBack();
        },
        /*获取数据 */
        getData(){
            API.main.goodsRule({
                goodsId:this.goodsId,     
            }).then((res)=>{
                    if(res.body.code==200){
                         this.content=res.body.data.leasing_rules_content
                    }
            })         
        }
    },
    activated(){
        this.goodsId=this.$route.params.id;
        this.getData();
    }
}
</script>