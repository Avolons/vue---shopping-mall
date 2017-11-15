<style lang="scss" scoped>
 .rule_content{
     height: calc(100% - 50px);
     padding: 15px;
     box-sizing: border-box;
     padding-bottom: 0;
     &--show{
         height: 100%;
     }
     p{
         font-size: 14px;
         color: #666;
         line-height: 20px;
     }
     h3{
         font-size: 16px;
         color: #333;
         margin: 15px 0;
     }
     .footerText{
         display: block;
         text-align: right;
         font-size: 14px;
         color: #666;
         margin-top: 100px;
         line-height: 20px;
         padding-bottom: 15px;
        width: 100%;
        >span{
            text-align: center;
            display: inline-block;
            width: 90px;
        }
     }
     
 }
</style>

<style lang="scss">

</style>


<template>
<div>
    <header-cop :heder_title="title" v-show="titleShow"></header-cop>
    <div class="rule_content" :class="{'rule_content--show':!titleShow}">
        <b-scroll :data="typeList"  ref="scollView">
            <p>
            绘本订阅计划是租介平台推出的会员制订阅服务，订阅计划分为小博士计划与小状元计划，两者的权益不同，具体请参见计划购买页面说明。
        </p>
        <h3>订阅计划使用规则如下：</h3>
        <p>
            一、订阅计划一旦生效使用之后，即不可退订；
		<br>   二、订阅计划在用户购买后立即生效，有效期取决于不同的计划，分为3个月（季度）与12个月（年度）两种；
		<br>   三、有效期内，用户可以在计划权益内借阅相应次数的绘本，不同的计划有不同的借阅次数与借阅绘本数量限制，具体参见计划购买页面；
		<br>  四、每个计划每月最多只能借阅2次绘本，请用户提前规划好计划的使用节奏；
		<br>   五、由于物流时间的原因，用户至少要提前四天下单预定想要借阅的绘本；
		<br>  六、每次绘本借阅周期最多不得超过1个月，用户需要及时归还绘本；
		<br>   七、关于物流部分，商家负责把绘本寄到用户指定的地址并承担相应的物流费用；借阅结束后，用户需要把绘本寄回到商家指定的地址，并承担相应的物流费用。（不接受快递到付）；
		<br>   八、绘本借阅过程中，由于人为的原因造成了绘本的损坏，并影响了后续的使用与借阅，用户可能需要承担相应的赔偿。实际赔偿的金额不会高于绘本在其他电商平台的零售价格（参考京东，亚马逊，当当，淘宝，天猫）；
		<br>   九、一旦用户选择参加订阅计划，必须遵守平台的规则。如果出现违反平台规则的情况，平台有权停止相应服务。
		<br>   十、如果有任何问题，随时可以联系平台，联系电话：0571-86113050。
        </p>
        <span class="footerText">
            <span>租介</span>
            <br>2017年11月11日
        </span>
        </b-scroll>
    </div>
</div>
</template>

<script>
import HeaderCop from '../common/header.vue';
import BScroll from 'vue-betterscroll';
import { API, getQuery } from '../../../services';
export default {
   
    components: {
        HeaderCop,
        BScroll,
    },
    computed: {
        
    },
    data() {
        return {
            typeList:[],
           title:"绘本订阅计划使用规则",
           titleShow:false,
        }
    },
    mounted () {
         if(this.$route.query.type=='H5'){
            this.titleShow=true;
        }else{
            this.titleShow=false;
        }
        setTimeout(()=>{
            this.typeList=[1,1];
            this.$refs.scollView.scroll.refresh();
        },100);
    },
    activated () {
        if(this.$route.query.type=='H5'){
            this.titleShow=true;
        }else{
            this.titleShow=false;
        }
        setTimeout(()=>{
            this.typeList=[1,1];
            this.$refs.scollView.scroll.refresh();
        },100);
    }

}
</script>
