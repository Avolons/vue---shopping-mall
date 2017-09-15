
<style lang="scss">
 .main_since{
        &_list{
            
        }
        &_single{
            background-color: #fff;
            max-height: 110px;
            padding: 15px;
            box-sizing: border-box;
            margin-bottom: 10px;
        }
        &_text{
            height: 30px;
            font-size: 15px;
            line-height: 30px;
            color: #272727;
            display: flex;
            justify-content: space-between;
            font-weight: 400;
            flex-grow: 0;
        }
        &_title{
            font-weight: 400;
        }
        &_price{
            font-weight: 400;
        }
        &_intr{
            flex-grow: 1;
            font-size: #666;
            font-size: 15px;
            line-height: 25px;
        }
    }
    .orderAction{
        &_main{
            .help_common_title{
        padding-top: 47px; 
        .vux-header{
            background-color:#fff;
            border-bottom: 1px solid #dadada;
            position: fixed;
            top:0;
            left: 0;
            width: 100%;
            z-index: 9999;
            .vux-header-title{
                color: #272727; 
            }
        }
        .vux-header .vux-header-left, .vux-header .vux-header-right{
            color: #272727;
        }
        .vux-header .vux-header-left .left-arrow:before{
            border-color: #272727;
        }
    }
            margin-bottom: 80px;
            height: 100%;
            background-color: #f3f3f3;
            .weui-cells{
                margin: 0;
            }
            .weui-cell:before{
                left:0;
            }
            .main_since_single{
                margin: 0;
                border-top: 1px solid #eee;
            }
            &_address{
                background-color: #fff;
                .weui-cell{
                    &:nth-of-type(1){
                        height: 54px;
                    }
                    &:nth-of-type(2){
                        height: 34px;
                    }
                }
                .nodefault{
                    height: 34px !important;
                }
            }
            &_timeRange{
                box-sizing: border-box;
                padding: 0 15px;
                height: 40px;
                line-height: 40px;
                color: #272727;
                font-size: 15px;
                background-color: #fff;
                margin: 10px 0;
                display: flex;
                justify-content: space-between;
            }
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
                        color: #f80000;
                        width: 50%;
                       display: block;    
                    }
                    &:nth-of-type(3){
                        width: 50%;
                       display: block;   
                       text-align: right;
                    }
                    
                }
            }
            &_priceColl{
                .weui-cell:not(:last-of-type){
                    height: 34px;
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
       
        &_footer{
            height: 60px;
            line-height: 60px;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
            display: flex;
            &_price{
                box-sizing: border-box;
                padding-left: 15px;
                flex-grow: 1;
                font-size: 14px;
                color: #272727;
                >span{
                    font-size: 18px;
                    color: #f80000;
                }
            }
            &_btn{
                font-size: 18px;
                color: #fff;
                line-height: 60px;
                width: 120px;
                text-align: center;
                height: 60px;
                background-color: #2196f3;

            }
        }
    }
    
</style>

<template>
  <div>
      <div class="orderAction_main">
          <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">订单结算</x-header>
         </div>
         <div class="orderAction_main_type">
             <i class="iconfont"></i>
         </div>
         <group class="orderAction_main_address">
            <div class="main_since_single">
                <div class="main_since_text">
                    <h2 class="main_since_title">{{infoData.order_receiver_name}}</h2>
                    <h2 class="main_since_price">{{infoData.order_receiver_name}}</h2>
                </div>
                <p class="main_since_intr twonowarp">{{infoData.order_province}}{{infoData.order_city}}{{infoData.order_district}}{{infoData.order_detailed}}</p>
            </div>
        </group>
         <h3 class="orderAction_main_shopTitle">
                {{infoData.store_name}}
        </h3>
        <div class="orderAction_main_mess">
            <!-- 商品详情图 -->
            <img :src="infoData.shopPic" alt="" class="orderAction_main_img">
            <div class="orderAction_main_text">
                <!-- 商品详情名称 -->
                <span class="orderAction_main_goodsTitle twonowarp">
                    {{infoData.shopeName}}  
                </span>
                <!-- 单价租金 -->
                <span class="orderAction_main_price">
                    ￥{{infoData.rentPrice}}/{{timeText}}
                </span>
                <!-- 数量 -->
                <span class="orderAction_main_num">数量×{{infoData.shopNum}}</span>
            </div>
        </div>
        <!-- 租赁时间 -->
        <div class="orderAction_main_timeRange">{{rentRange.start}}&nbsp;至&nbsp;{{rentRange.end}} <span>共{{infoData.ordertimeNumber}}{{timeText}}</span></div>
         <!-- 收货地址和物流方式 -->
         <group class="orderAction_main_priceColl">
            <cell title="运费"  :value="infoData.deposit | currency('￥')" ></cell>
            <cell title="商品租金"  :value="infoData.shopRent  | currency('￥')"></cell>
            <cell title="商品押金" :value="infoData.deposit | currency('￥')"  ></cell>
            <cell title="实付款" :value="infoData.totalPrice | currency('￥')"  ></cell>
            <cell title="支付方式"   ></cell>
            <x-textarea :max="20" v-model="option" placeholder="买家留言"  ></x-textarea>
        </group>
        <footer  class="orderAction_footer">
        
        <button class="orderAction_footer_btn"  type="button">提交订单</button>
        </footer>
        <toast v-model="toast"  type="success">{{confrim}}</toast>

      </div>
  </div>
</template>
<script>
   import { XHeader,Cell,Group,XTextarea,dateFormat,Toast } from 'vux';
   import { mapGetters } from 'vuex'
    import {API,getQuery} from '../../services';

export default {
  components: {
    XHeader,
    Group,
    Cell,
    XTextarea,
    Toast
  },
  data () {
    return {
        confrim:"请选择地址",
        toast:false,
        /* 自提点数据 */
        tpl:{},
        orderLogistics:'/orderLogistics/',
        /* 订单id */
        orderId:0,
        /* 订单详情数据 */
        infoData:{"orderId": 284,
        "orderStatus": 1,
        "goodsId": 967,
        "ordertimeNumber": 1,
        "orderRefundStatus": 0,
        "orderShippingStatus": 8,
        "username": "然然",
        "mobile": "13256497976",
        "address": "古荡街道",
        "shopPic": "http://testoss.zujiekeji.cn/img/goods/main/927415027032458439.jpg",
        "shopeName": "GoPro出租GoPro HERO5 Black水12",
        "rentType": 5,
        "rentPrice": "1.00",
        "oldPrice": "1.00",
        "shopNum": 1,
        "shopRent": "1.00",
        "deposit": "0.00",
        "freight": "0.00",
        "totalPrice": "1.00",
        "orderCardId": "1503239271641959",
        "order_generation_time": 1503239271,
        "order_is_delect": 1,
        "store_name": "孙杰",
        "storeId": 92,
        "collour": "黑色",
        "standard": "1000P",
        "message": "",
        "order_goods_rent_time": 1503497836,
        "order_goods_return_time": 1534947436,
        "order_pay_time": 0,
        "pay_type": null,
        "order_shipping_time": 0,
        "order_delivery_time": 0,
        "order_goods_refund_time": 0,
        "order_settlement_bill_generation_time": 0,
        "order_settlement_bill_confirm_time": 0,
        "order_apply_refund_time": 0,
        "order_apply_refund_goods_time": 0,
        "order_express_type": 1,
        "order_express_mode": 1,
        "order_deliver_expressid": null,
        "order_deliver_company": null,
        "order_logistics_name": null,
        "return_logistics_name": null,
        "return_expressid": null,
        "return_deliver_company": null,
        "refund_deliver_expressid": null,
        "refund_logistics_name": null,
        "refund_deliver_company": null,
        "shopContact": "18301119746",
        "count_down_pay_time": 0,
        "count_down_delivery_time": 0,
        "count_down_stell_time": 0,
        "order_receiver_name": "然然",
        "order_province": "浙江省",
        "order_city": "杭州市",
        "order_district": "余杭区",
        "order_detailed": "古荡街道",
        "order_receiver_name": "13256497976",
        "since_name": "",
        "since_tel": "",
        "province_name": "",
        "city_name": "",
        "region_name": "",
        "since_detailed_address": ""},
        /* 时间对照表 */
        timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},
        /* 运费规则列表 */  
        tplRules:{},
        /* 买家留言 */
        option:"",
    }
  },
    computed:{
      ...mapGetters([
        'getUserInfoUserId',
        'getUserInfoToken',
        'getAddress',
        'getNamePhone'
        ]),
        /* 返回初始和结束周期 */
        rentRange(){
            let self=this;
            let start=dateFormat(new Date(self.infoData.order_goods_rent_time*1000), 'YYYY-MM-DD');  
            let end=dateFormat(new Date(self.infoData.order_goods_return_time*1000), 'YYYY-MM-DD');  
            return {start,end};
        },
        /* 返回周期名称 */
        /* 返回当前周期文字 */
        timeText(){
            return this.timeMap[this.infoData.rentType];
        },
    },
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      Initialization(){

      }

  },mounted(){
     
  },
  activated(){
      this.orderId=this.$route.params.id;
  }
} 
</script>