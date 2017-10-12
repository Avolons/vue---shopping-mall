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
.settlement_main{
    background-color: #f1f1f1;
    height: calc(100% - 47px);
    overflow-y: auto;
            &_mess{
                box-sizing: border-box;
                padding: 15px;
                display: flex;
                background-color: #fff;
            }
            &_shopTitle{
                height: 50px;
                text-indent: 15px;
                line-height: 50px;
                font-size: 15px;
                color: #272727;
                margin-top: 10px;
                border-bottom: 1px solid #eee;
                background-color: #fff;
            }
            &_img{
                display: block;
                height: 100px;
                width: 100px;
            }
            &_text{
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                padding: 10px;
                padding-right: 0;
                align-content: space-between;
                >span{
                    font-size: 15px;
                    color: #272727;
                    &:nth-of-type(1){
                        width: 100%;
                      display: block;
                    }
                    &:nth-of-type(2){
                        width: 100%;
                      display: block;
                    }
                    &:nth-of-type(3){
                        color: #f80000;
                        width: 50%;
                       display: block;    
                    }
                    &:nth-of-type(4){
                        width: 50%;
                       display: block;   
                       text-align: right;
                    }
                    
                }
            }
            &_priceColl{
                .weui-cells{
                    margin: 0;
                    margin-bottom: 10px;
                }
                .weui-cell{
                    height: 34px;
                        .weui-cell__ft{
                            color: #f80000;
                            font-size: 16px;
                        }
                }
                .weui-cell__ft{
                    font-size: 15px;
                    color: #666;
                }
                .weui-textarea{
                    font-size: 15px;
                    color: #272727;
                }
            }
}
</style>

<template>
<div>
    <div class="help_common_title">
        <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">结算单
        </x-header>
    </div>
    <div class="settlement_main">
        <div class="settlement_main_mess">
            <!-- 商品详情图 -->
            <img :src="imgFormat(infoData.goods_main_pic)" alt="" class="settlement_main_img">
            <div class="settlement_main_text">
                <!-- 商品详情名称 -->
                <span class="settlement_main_goodsTitle twonowarp">
                    {{infoData.goodsName}}  
                </span>
                <span class="settlement_main_colorsize">{{infoData.ys}},{{infoData.gg}}</span>
                <!-- 单价租金 -->
                <span class="settlement_main_price">
                    ￥{{infoData.order_rent_money}}/{{timeText}}
                </span>
                <!-- 数量 -->
                <span class="settlement_main_num">数量×{{infoData.goods_amount}}</span>
            </div>
        </div>  
        <group class="settlement_main_priceColl">
            <cell title="实付款"  :value="infoData.order_total_price | currency('￥')" ></cell>
        </group> 
        <group class="settlement_main_priceColl">
            <cell title="商品租金"  :value="infoData.order_count_money | currency('￥')" ></cell>
            <cell title="店铺优惠"  :value="-infoData.store_coupon_amount | currency('￥')" ></cell>
            <cell title="平台优惠"  :value="-infoData.coupon_amount | currency('￥')" ></cell>
            <cell title="运费"  :value="infoData.order_freight | currency('￥')"></cell>
            <cell title="违约金" :value="infoData.settlement_bill_liquidated | currency('￥')"  ></cell>
            <cell title="损失赔偿金" :value="infoData.settlement_bill_damages | currency('￥')"  ></cell>
            <cell title="小计" :value="infoData.settlement_bill_total | currency('￥')"  ></cell>
            <cell title="实际退款金额" :value="infoData.refund_amount | currency('￥')"  ></cell>
            <x-textarea  style="height:auto"  readonly v-model="infoData.settlement_bill_remarks" placeholder="备注"  ></x-textarea>
        </group> 
        <footer v-show="type" class="orderAction_footer">
             <button @click.stop="confrimSettlement()" >确认无误</button> 
        </footer>
    </div>
</div>
</template>
<script>
import { XHeader, Cell, Group,XTextarea } from 'vux';
import { mapGetters } from 'vuex';
import {API,getQuery} from '../../services';

export default {
    components: {
        XHeader,
        Group,
        Cell,
        XTextarea
    },
    data() {
        return {
             /* 时间对照表 */
        timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},
          infoData:{},
          type:"",
          orderId:0,
        }
    },
     computed:{
    ...mapGetters([
      'getUserInfoUserId',
      'getUserInfoToken',
    ]),
     timeText(){
            return this.timeMap[this.infoData.rent_period_type];
        },
    
  },
    methods: {
        routerBack() {
            this.$router.goBack();
        },
        getdata(){
            API.order.orderSettleInfo({
            userId:this.getUserInfoUserId,  
              token:this.getUserInfoToken,
              orderId:this.orderId,
            }).then((res)=>{
                if(res.body.code==200){
                    this.infoData=res.body.data.bill; 
                }
            })
        },
        /* 确认结算 */
        confrimSettlement(){
        let self=this;
        this.$vux.confirm.show({
                /* title: 'Title', */
                content: '是否确认结算',
                onConfirm () {
                    API.order.orderSettle({
                        userId:self.getUserInfoUserId,  
                        token:self.getUserInfoToken,
                        orderId:self.orderId,
                    }).then((res)=>{
                        if(res.body.code==200){
                            self.confrim="结算成功";
                            self.toast=true;
                            localStorage.setItem("reload", "1");
                            setTimeout(()=>{
                                self.routerBack();
                            },500);
                        }
                    });
                }
            });
        },
    },
    activated(){
        overscroll(document.querySelector('.settlement_main'));
        this.orderId=this.$route.query.id;
        this.type=this.$route.query.type;
        this.getdata();
    },
    mounted(){
        overscroll(document.querySelector('.settlement_main'));
    }
}
</script>