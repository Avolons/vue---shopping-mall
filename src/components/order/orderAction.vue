
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
            &_tplType{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 15px;
                font-weight: 400;
                color: #272727;
                height: 50px;
                box-sizing: border-box;
                padding: 0 15px;
                >h3{
                    font-weight: 400;
                }
            }
            &_type{
                display: flex;
                justify-content: center;
                height: 120px;
                padding: 25px 15px;
                box-sizing: border-box;
                background-color: #fff;
                margin-bottom: 10px;
                >i{
                    flex-grow: 0;
                    display: block;
                    height: 70px;
                    width: 70px;
                    background-color: #2196f3;
                    border-radius: 5px;
                    line-height: 70px;
                    text-align: center;
                    font-size: 50px;
                    color: #fff;
                }
                >div{
                    flex-grow: 1;
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
          display: flex;
            box-sizing:border-box;
            padding:0 15px;
            justify-content: flex-end;
            align-items: center;
            &>button{
            height: 30px;
            width: 75px;
            text-align: center;
            line-height: 28px;
            font-size: 12px;
            color: #fff;
            background-color: #2196f3;
            border-radius: 5px;
            margin-left: 10px;
        }
       .order_single_btn--confirm{
                color: #666;
                border-color: #666;
                background-color: #fff;
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
             <!-- 订单完成 评价完成 退款成功 退货成功-->
             <i v-show="infoData.orderType==7 || infoData.orderType==8 || infoData.orderType==9 || infoData.orderType==10" class="iconfont">&#xe613;</i>
             <!-- 订单关闭 -->
             <i v-show="infoData.orderType==8" class="iconfont">&#xe635;</i>
             <!-- 待收货 -->
             <i v-show="infoData.orderType==3" class="iconfont">&#xe739;</i>
             <!-- 待发货 -->
             <i v-show="infoData.orderType==2" class="iconfont">&#xe60f;</i>
             <!-- 待评价 -->
             <i v-show="infoData.orderType==6" class="iconfont">&#xe623;</i>
             <!-- 待结算 -->
             <i v-show="infoData.orderType==11 || infoData.orderType==5" class="iconfont">&#xe620;</i>
             <!-- 结算待确认 -->
             <i v-show="infoData.orderType==12 || infoData.orderType==14" class="iconfont">&#xe620;</i>
             <!-- 待归还 -->
             <i v-show="infoData.orderType==4" class="iconfont">&#xe7b3;</i>
             <!-- 待付款 -->
             <i v-show="infoData.orderType==1" class="iconfont">&#xe624;</i>
             <!-- 退款处理中 -->
             <i v-show="infoData.orderType==13" class="iconfont">&#xe624;</i>

             <div class="orderAction_main_confrim">

             </div>
         </div>
         <group class="orderAction_main_address">
             <div class="orderAction_main_tplType">
                 <h3>物流方式</h3>
                 <h3>{{returnTpl}}</h3>
             </div>
            <div class="main_since_single">
                <div class="main_since_text" v-show="this.infoData.order_express_type==1">
                    <h2 class="main_since_title">{{infoData.order_receiver_name}}</h2>
                    <h2 class="main_since_price">{{infoData.order_mobile}}</h2>
                </div>
                <p v-show="this.infoData.order_express_type==1" class="main_since_intr twonowarp">{{infoData.order_province}}{{infoData.order_city}}{{infoData.order_district}}{{infoData.order_detailed}}</p>
               
                <div v-show="this.infoData.order_express_type==3"  class="main_since_text">
                    <h2 class="main_since_title">{{infoData.since_name}}</h2>
                    <h2 class="main_since_price">{{infoData.since_tel}}</h2>
                </div>
                <p v-show="this.infoData.order_express_type==3"  class="main_since_intr twonowarp">{{infoData.province_name}}{{infoData.city_name}}{{infoData.region_name}}{{infoData.region_name}}</p>
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
            <cell title="合计租金"  :value="infoData.shopRent  | currency('￥')"></cell>
            <cell title="合计押金" :value="infoData.deposit | currency('￥')"  ></cell>
            <cell title="运费"  :value="infoData.deposit | currency('￥')" ></cell>
            <cell title="实付款" :value="infoData.totalPrice | currency('￥')"  ></cell>
            <cell title="支付方式" :value="pay_type"></cell>
            <x-textarea :max="20" readonly v-model="infoData.message" placeholder="买家留言"  ></x-textarea>
        </group>
        <footer  class="orderAction_footer">
             <!-- 待付款 订单关闭 评价完成 退款完成 退货完成 -->
            <button @click.stop="deletOrder(infoData.order_id)" class="order_single_btn--confirm" v-if="infoData.orderType==1 || infoData.orderType==7 || infoData.orderType==8 || infoData.orderType==9 || infoData.orderType==10" >删除订单</button>     
            <!-- 代付款状态 -->
            <button v-if="infoData.orderType==1">付款</button>   
            <!-- 待发货状态 -->  
            <button class="order_single_btn--confirm" v-if="infoData.orderType==2">申请退款</button>  
            <button v-if="infoData.orderType==2">提醒发货</button>  
            <!-- 待收货状态 退货待结算 退货结算待确认 -->   
            <button class="order_single_btn--confirm" v-if="infoData.orderType==3 || infoData.orderType==5">查看物流</button>
            <!-- 退货待结算 待结算-->
            <button v-if="infoData.orderType==5  || infoData.orderType==11">提醒结算</button>     
            <!-- 待收货状态 -->
            <button class="order_single_btn--confirm" v-if="infoData.orderType==3">申请退货</button>   
            <button v-if="infoData.orderType==3">确认收货</button>   
            <!-- 待归还状态   -->
            <button v-if="infoData.orderType==4">归还</button>  
            <button class="order_single_btn--confirm" v-if="infoData.orderType==4">申请退货</button>  
            <!-- 退货完成 结算完成 评价完成 待评价-->
            <button @click.stop="seeSettlement(infoData.order_id)" class="order_single_btn--confirm"  v-if="infoData.orderType==6 ||infoData.orderType==7 || infoData.orderType==10 || infoData.orderType==12 " >结算单</button>     
            <!-- 待评价 -->
            <button v-if="infoData.orderType==6">评价</button>
            <!-- 评价完成 -->     
            <button v-if="infoData.orderType==7">查看评论</button> 
            <!-- 退货结算待确认 结算待确认 -->    
            <button v-if="infoData.orderType==14 || infoData.orderType==12">确认结算</button> 
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
        orderType:0,
        /* 自提点数据 */
        tpl:{},
        orderLogistics:'/orderLogistics/',
        /* 订单id */
        orderId:0,
        /* 订单详情数据 */
        infoData:{},
        /* 时间对照表 */
        timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},
        /* 提示文字 */
       
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
        pay_type(){
            if(this.infoData.pay_type==1){
                return "微信"
            }
            if(this.infoData.pay_type==2){
                return "支付宝"
            }
        },
        returnTpl(){
            if(this.infoData.order_express_type==1){
                return "快递";
            }else if(this.infoData.order_express_type==2){
                return "上门";
            }else{
                return "自提";
            }
        }
    },
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      /* 获取当前订单类型 */
      getOrderType(item){
          if (item.order_is_delect == 0) {
                if (item.orderRefundStatus == 0) {
                    if (item.orderStatus == 1) {
                        if(item.orderShippingStatus == 8){
                            item.orderType=8;//订单关闭
                        }else{
                           item.orderType=1;//代付款
                        }
                    } else if (item.orderStatus == 2) {
                        switch (item.orderShippingStatus) {
                            case 1:
                                item.orderType=2;//代发货
                                break;
                            case 2:
                                item.orderType=3;//待收货
                                break;
                            case 3:
                               item.orderType=4;//待归还
                                break;
                            case 4:
                                item.orderType=5;//待结算
                                break;
                            case 5:
                                item.orderType=14;//结算待确认
                                break;
                            case 6:
                                item.orderType=6;//待评价
                                break;
                            case 7:
                                item.orderType=7;//评价完成
                                break;
                        }
                    }
                } else if (item.orderRefundStatus == 1) {
                    item.orderType=9;//退款结束
                } else if (item.orderRefundStatus == 2) {
                    if (item.orderStatus == 2) {//退款退货
                        if (item.orderShippingStatus == 2) {
                            item.orderType=11;//退货待结算
                        } else if (item.orderShippingStatus == 3) {
                            item.orderType=11;//退货待结算
                        } else if (item.orderShippingStatus == 5) {
                            item.orderType=12;//退货待确认结算
                        } else if (item.orderShippingStatus == 6) {
                            item.orderType=10;//退货完成
                        }
                    }
                } else if (item.orderRefundStatus == 4) {
                    if (item.orderShippingStatus == 6) {
                        item.orderType=10;//退货完成
                    }
                }else if(item.orderRefundStatus == 3){
                    item.orderType=13;//退款处理中
                }
            }
      },
      Initialization(){
          API.order.orderInfo({
                    userId:this.getUserInfoUserId,  
                    token:this.getUserInfoToken,
                    orderId:this.orderId,
                  }).then((res)=>{
                    if(res.body.code==200){
                        this.infoData=res.body.data; 
                        this.getOrderType(this.infoData);
                    }
                });
      },
         /* 删除订单 */
    deletOrder(id){
      let self=this;
      this.$vux.confirm.show({
            /* title: 'Title', */
            content: '确定要删除该订单吗',
            onConfirm () {
                /* 点击确认时执行具体删除操作 */
                API.order.orderDel({
                    userId:self.getUserInfoUserId,  
                    token:self.getUserInfoToken,
                    orderId:id,
                  }).then((res)=>{
                    if(res.body.code==200){
                        self.confrim="删除成功";
                        self.toast=true;
                        self.getTypeData();
                    }
                });
            }
        });
       
    },
    /* 订单付款 */
    payOrder(id){
        let self=this;
        API.order.orderDel({
              userId:self.getUserInfoUserId,  
              token:self.getUserInfoToken,
              orderId:id,
            }).then((res)=>{
              if(res.body.code==200){
                  self.confrim="";
                  self.toast=true;
              }
          });
    },
    /* 确认收货 */
    confrimOrder(id){
        let self=this;
      this.$vux.confirm.show({
            /* title: 'Title', */
            content: '是否确认收货',
            onConfirm () {
                /* 点击确认时执行具体删除操作 */
                API.order.orderReceipt({
                    userId:self.getUserInfoUserId,  
                    token:self.getUserInfoToken,
                    orderId:id,
                  }).then((res)=>{
                    if(res.body.code==200){
                        self.confrim="确认收货成功";
                        self.getTypeData();
                        self.toast=true;
                    }
                });
            }
        });
    },
    /* 确认结算 */
    confrimSettlement(id){
        let self=this;
      this.$vux.confirm.show({
            /* title: 'Title', */
            content: '是否确认结算',
            onConfirm () {
                /* 点击确认时执行具体删除操作 */
                API.order.orderSettle({
                    userId:self.getUserInfoUserId,  
                    token:self.getUserInfoToken,
                    orderId:id,
                  }).then((res)=>{
                    if(res.body.code==200){
                        self.confrim="结算成功";
                        self.getTypeData();
                        self.toast=true;
                    }
                });
            }
        });
    },
    /* 查看结算单 */
    seeSettlement(id){
        window.location.href="/#/settlement?id="+id;
    },
    /* 提醒发货 */
    remind(id){

    }

  },mounted(){
      
  },
  activated(){
      this.orderId=this.$route.params.id;
      this.Initialization();
  }
} 
</script>