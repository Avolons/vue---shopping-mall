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
</style>

<template>
    <div class="help_common_title">
        <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">交易相关说明
        </x-header>
        <div class="help_common_text">
            <h3>
                一、 租金如何计算
            </h3>
            <p>
                租金是根据消费者下单时选择的租赁时间来计算，商品来回的物流时间不计算租金，商家要确保在起租日前把商品寄到消费者手中，消费者要确保在租赁结束日前把商品寄出归还给商家；
            </p>
            <h3>
                二、押金如何计算
            </h3>
            <p>
                根据不同的商品，所需要的押金不同，具体以商品详情页面显示的该商品押金为准。消费者实际支付的押金金额是商家后台的设置的押金金额减去消费者预付的租金以及其他各种押金减免金额的（如有）。如：某商品，商家后台设置的押金为500元，消费者租赁7天，租金为50元，那么消费实际支付的租金为50元，实际支付的押金为450元（500 – 50）。
            </p>
            <h3>
                三、损坏丢失赔偿
            </h3>
            <p>
                1、在商家规定的可擦碰的范围内，小碰小擦的，不予赔偿。
            </p>
            <p>
                2、如果损坏的，根据商家的设定的损坏规则进行赔偿。商品在使用过程中丢失或无法找回，需要联系商家进行沟通，按照商家的设定规则进行赔付。
            </p>
            <h3>
                四、收到商品少件
            </h3>
            <p>
                消费者首先与商家沟通处理，补发配件或是其他补偿方式。双方无法达成一致，可请求小二介入。
            </p>
        </div>
    </div>
</template>
<script>
import { XHeader, Cell, Group } from 'vux'

export default {
    components: {
        XHeader,
        Group,
        Cell,
    },
    data() {
        return {
            menus: {
                menu1: 'Take Photo',
                menu2: 'Choose from photos'
            },
            showMenus: false
        }
    },

    methods: {
        routerBack() {
            this.$router.goBack();
        }
    }
}
</script>