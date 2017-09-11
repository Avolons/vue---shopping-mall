
<style lang="scss">
    .orderInfon{
        &_main{
            margin-bottom: 80px;
            height: 100%;
            background-color: #f3f3f3;
            .weui-cells{
                margin: 0;
            }
            &_address{
                .weui-cell{
                    &:nth-of-type(1){
                        height: 54px;
                    }
                    &:nth-of-type(2){
                        height: 34px;
                    }
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
      <div class="orderInfon_main">
          <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">确认订单</x-header>
         </div>
         <group class="orderInfon_main_address">
             <!-- 用户收货地址 -->
             <cell :title="addressName"  :link="{path:'/addressList'}"  :inline-desc='addressDetail'></cell>
                <!-- 选择物流方式 -->
             <cell title="选择物流方式" :link="{path:'/orderLogistics'}" ></cell>
        </group>
         <h3 class="orderInfon_main_shopTitle">
                {{infoData.store_name}}
            </h3>
        <div class="orderInfon_main_mess">
            <!-- 商品详情图 -->
            <img :src="infoData.goodsFace" alt="" class="orderInfon_main_img">
            <div class="orderInfon_main_text">
                <!-- 商品详情名称 -->
                <span class="orderInfon_main_goodsTitle twonowarp">
                    {{infoData.goodsName}}  
                </span>
                <!-- 单价租金 -->
                <span class="orderInfon_main_price">
                    ￥{{infoData.rent_period_now_rent_price}}/{{timeText}}
                </span>
                <!-- 数量 -->
                <span class="orderInfon_main_num">数量×{{infoData.cart_content_good_amount}}</span>
            </div>
        </div>
        <!-- 租赁时间 -->
        <div class="orderInfon_main_timeRange">{{rentRange.start}}&nbsp;至&nbsp;{{rentRange.end}} <span>共{{infoData.cart_time_number}}{{timeText}}</span></div>
         <!-- 收货地址和物流方式 -->
         <group class="orderInfon_main_priceColl">
            <cell title="运费"  :value="sincePrice | currency('￥')" ></cell>
            <cell title="商品租金"  :value="goodsAllPrice  | currency('￥')"></cell>
            <cell title="商品押金" :value="infoData.goods_deposit | currency('￥')"  ></cell>
            <x-textarea :max="20" placeholder="买家留言"  ></x-textarea>
        </group>
        <footer  class="orderInfon_footer">
                <div class="orderInfon_footer_price">
                    合计： <span>￥{{goodsAllPrice}}</span>
                </div>
                <button class="orderInfon_footer_btn" type="button">提交订单</button>
        </footer>
      </div>
  </div>
</template>
<script>
   import { XHeader,Cell,Group,XTextarea,dateFormat } from 'vux';
   import orderData from './order.json';

export default {
  components: {
    XHeader,
     Group,
    Cell,
    XTextarea
  },
  data () {
    return {
        /* 订单详情数据 */
      infoData:{},
      /* 计算出来的运费 */
      sincePrice:0,
      /* 时间对照表 */
        timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},

    }
  },
    computed:{
        /* 返回初始和结束周期 */
        rentRange(){
            let self=this;
            let start=dateFormat(new Date(self.infoData.cart_start_time*1000), 'YYYY-MM-DD');  
            let end=dateFormat(new Date(self.infoData.cart_end_time*1000), 'YYYY-MM-DD');  
            return {start,end};
        },
        /* 返回周期名称 */
        /* 返回当前周期文字 */
        timeText(){
            return this.timeMap[this.infoData.rent_period_type];
        },
        /* 计算商品总租金 */
        goodsAllPrice(){
            return this.infoData.rent_period_now_rent_price*this.infoData.cart_time_number;
        },
        /* 返回姓名电话 */
        addressName(){
            return (this.$store.state.addressData.name+" "+this.$store.state.addressData.phone);
        },  
        /* 返回具体地址 */
        addressDetail(){
            return this.$store.state.addressData.detail;
        }
    },
  methods:{
      routerBack(){
          this.$router.goBack();
      }
  },mounted(){
      this.infoData=orderData.data.cart_list[0];
  }
} 
</script>