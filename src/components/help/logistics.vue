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
    <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">发货与物流</x-header>
    <div class="help_common_text">
        <h3>
        一、发货与归还
        </h3>
            <p>
            消费者：为了确保您的租赁体验，您需要根据自己的使用时间提前进行下单，以确保在使用前到货，由于商品的不同，物流方式不同，具体以商品详情页面显示的时间为准。如遇大件特殊商品，需要有专属的配送安装，以商家设定为准。
            </p>
            <p>
            归还时将商品在租赁时z间截止日当天晚上12点之前将租赁物品寄出，并在租介平台订单归还中填写相应的物流单号与信息。
            </p>
            <p>
            商家：消费者下单完成之后，商家会提前进行商品发货配送，最迟必须在起租时间之前将货物配送到消费者手上，如遇延迟，请主动联系商家协商处理，如商家不予处理，情节严重的可以联系租介平台小二介入处理。
            </p>
            <h3>
                二、如何查看物流信息
            </h3>
            <p>
            消费者可以在订单详情页面中查看到商品的发货情况和物流信息。
            </p>

            <h3>
            三、未收到货物
            </h3>
            <p>
            如果消费者在起租日期内还未收到商品，可主动联系商家协商处理，或者联系平台介入。平台会根据相应规则，对商家进行处罚。
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