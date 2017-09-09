<style lang="scss">
    .help_common_text{
        padding: 0 15px;
        >h3{
            padding-top: 20px;
            font-size: 14px;
            color: #272727;
            font-weight: 400;
        }
        >p{
           font-size: 14px;
            color: #272727;
            margin-top: 20px;
        }
    }
</style>

<template>
  <div class="help_common_title">
    <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">退货与售后</x-header>
    <div class="help_common_text">
        <h3>
        一、如何退货退款
        </h3>
            <p>
                1、	仅退款的情况 ：如果消费者申请退货退款时，相应的订单商家并未发货，消费者可以在租介平台待发货订单管理里直接申请取消相应的订单，无需商家商意，全额退款；
                </p>
            <p>
                2、	退货退款的情况: 如果消费申请退货退款时，相应的订单商家已经发货，消费者可以在租介平台待收货或待归还订单管理里申请退货退款，并将商品寄还给商家。这种情况下的退货退款，需要与商家进行确认，同时，消费者可能需要承担相应的退货运费，违约金等费用，具体的金额以商家事先约定的规则为准。
            </p>
           
            <h3>
               二、退款到账时间说明
            </h3>
            <p>
           申请退款之后，费用会原路退回到支付卡，预计3-15个工作日到账。
            </p>
           
    </div>
  </div>
</template>
<script>
import { XHeader,Cell,Group } from 'vux'

export default {
  components: {
    XHeader,
     Group,
    Cell,
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      }
  }
}
</script>