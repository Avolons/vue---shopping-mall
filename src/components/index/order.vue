<style lang="scss">
.order_typelist{
  position: relative;
  background-color: #fff;
  margin-top: 46px;
}
.order_typelist_box {
  height: 40px;
  width: 630px;
  font-size: 0;
  border-bottom:1px solid #f3f3f3;
}
.order_typelist_item {
  width: 90px;
  height: 40px;
  display:inline-block;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.order_typelist_item--selected{
  color: #2196f3;
}
.order_title{
    color: #272727;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 18px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-weight: 400;
    border-bottom: 1px solid #dddddd;
     background-color: #fff;
}
.order_changeAll{
    position: absolute;
    right: 15px;
    font-size: 15px;
}
.order{
  &_list{
    position: fixed;
    width: 100%;
    top: 87px;
    height: calc(100% - 140px);
    overflow-y: auto;
    background-color: #f3f3f3;
    }
  &_single{
    background-color: #fff;
    margin-bottom: 10px;
     &_shop{
       color:#272727;
       font-size: 16px;
       height: 50px;
       line-height: 50px;
       box-sizing: border-box;
       padding: 0 15px;
      display: flex;
      justify-content: space-between;
      >h2{
        flex-grow: 1;
        box-sizing: border-box;
        padding-right: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #272727;
        font-weight: 400;
      }
    }
    &_type{
        color: #f80000;
        font-size: 14px;
        right: 15px;
        top: 0;
        line-height: 60px;
    }
    &_content{
        border-top: 1px solid #f3f3f3;
        border-bottom: 1px solid #f3f3f3;
        box-sizing: border-box;
        padding: 15px;
        display: flex;
        height: 130px;
    }
    &_img{
        width: 100px;
        height: 100px; 
        display: block;
        flex-grow: 0;
        flex: 1;
    }
    &_text{
       flex-grow: 0;
       width: calc(100% - 100px);
       box-sizing: border-box;
       padding-left: 20px;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
    }
    &_title{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 400;
        font-size: 15px;
    }
    &_box{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &_price{
        color: #f80000;
        font-size: 15px;
    }
    &_num{
      color: #666;
        font-size: 14px;
    }
    &_time{
         display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 15px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f3f3f3;
      color: #666;
      font-size: 14px;
    }
    &_despoite{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 15px;
      font-size: 13px;
      color: #666666;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f3f3f3;
      color: #666;
      &>span:last-of-type{
        color: #f80000;
        font-size: 15px;
      }
    }
    &_allprice{
       box-sizing: border-box;
      padding: 0 15px;
      height: 45px;
      line-height: 45px;
      text-align: right;
      color: #333;
      font-size: 13px;
      border-bottom: 1px solid #f3f3f3;
      >b{
        font-size: 16px;
        color: #f80000;
      }
    }
    &_btncoll{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 15px;
        height: 45px;
        line-height: 45px;
        &>button{
            height: 30px;
            width: 75px;
            text-align: center;
            line-height: 28px;
            font-size: 12px;
            color: #fff;
            border: 1px solid #2196f3;
            background-color: #2196f3;
            border-radius: 5px;
            margin-left: 10px;
        }
    }
    
  }
}
.order_single_btncoll .order_single_btn--confirm{
      color: #666;
      border-color: #666;
      background-color: #fff;
}
</style>
<template>
    <div class="order_container">
        <h1 class="order_title">我的订单
        </h1>
            <scroller class="order_typelist" lock-y :scrollbar-x=false>
                      <div class="order_typelist_box">
                          <div @click="typeselect(item.type)" class="order_typelist_item"  v-for="item in typeList">
                              <span :class='{"order_typelist_item--selected":item.type==currentType}'>{{item.name}}</span>
                          </div>
                      </div>
              </scroller>
        <ul class="order_list"><!-- 此处进行显示判断，当前选中类型等于当前item类型时候才显示 -->
            <li @click="getInfo(item.order_id)" class="order_single" v-for="item in orderList"  v-show="currentType==item.orderType || currentType==0 || (item.orderType==7 && currentType==0)  || (item.orderType==8 && currentType==0) || (item.orderType==9 && currentType==0) || (item.orderType==10 && currentType==0) ">
                <div class="order_single_shop">
                    <h2>{{item.store_name}}</h2>
                    <span v-if="item.orderType==1" class="order_single_type">待付款</span>
                    <span v-if="item.orderType==2" class="order_single_type">待发货</span>
                    <span v-if="item.orderType==3" class="order_single_type">待收货</span>
                    <span v-if="item.orderType==4" class="order_single_type">待归还</span>
                    <span v-if="item.orderType==5 && !item.srcorderType" class="order_single_type">待结算</span>
                    <span v-if="item.srcorderType==0" class="order_single_type">退货待结算</span>
                    <span v-if="item.srcorderType==1" class="order_single_type">退货结算待确认</span>
                    <span v-if="item.srcorderType==2" class="order_single_type">结算待确认</span>
                    <span v-if="item.orderType==6" class="order_single_type">待评价</span>
                    <span v-if="item.orderType==7" class="order_single_type">已评价</span>
                    <span v-if="item.orderType==8" class="order_single_type">订单关闭</span>
                    <span v-if="item.orderType==9" class="order_single_type">退款成功</span>
                    <span v-if="item.orderType==10" class="order_single_type">退货完成</span>
                    <span v-if="item.srcOrderType==3" class="order_single_type">退款中</span>
                </div> 
                <div class="order_single_content">
                    <img :src="item.goods_main_pic" alt="img" class="order_single_img">
                    <div class="order_single_text">
                        <h3 class="order_single_title">
                          {{item.goods_name}}
                        </h3>
                        <p class="order_single_box">
                           <span class="order_single_price">￥{{item.rentPrice}}/{{timeMap[item.rentType]}}</span>
                           <span class="order_single_num">数量：{{item.goods_amount}}</span>
                        </p>
                    </div> 
                </div>
                <div class="order_single_time">
                        <span>{{item.order_goods_rent_time | dataform}}  至  {{item.order_goods_return_time | dataform }}</span>
                        <span>共{{item.order_time_number}}{{timeMap[item.rentType]}}</span>
                    </div>
                    <div class="order_single_despoite">
                        <span>押金</span>
                        <span>￥{{item.order_deposit}}</span>
                    </div>
                    <div class="order_single_allprice">
                       总计{{item.goods_amount}}件商品   &nbsp;&nbsp;合计&nbsp; <b>￥{{item.order_total_price}}</b>&nbsp;&nbsp;(含运费￥{{item.order_freight}})
                    </div>
                    
                    <div class="order_single_btncoll" v-show="item.srcOrderType!=3">
                           <!-- 七种状态的button，对应其中操作 -->
                           <!-- 订单关闭 评价完成 退款完成 退货完成 -->
                           <button @click.stop="deletOrder(item.order_id)" class="order_single_btn--confirm" v-if="item.orderType==1 || item.orderType==7 || item.orderType==8 || item.orderType==9 || item.orderType==10" >删除订单</button>     
                           <!-- 代付款状态 -->
                           <button v-if="item.orderType==1">付款</button>   
                           <!-- 待发货状态 -->  
                           <button v-if="item.orderType==2">提醒发货</button>  
                           <!-- 待收货状态 退货待结算 退货结算待确认 -->   
                           <button v-if="item.orderType==3 || item.srcorderType==0">查看物流</button>
                           <!-- 退货待结算 待结算-->
                           <button v-if="(item.orderType==5 && !item.srcorderType) || item.srcorderType==0">提醒结算</button>     
                            <!-- 待收货状态 -->
                           <button v-if="item.orderType==3">确认收货</button>   
                           <!-- 待归还状态   -->
                           <button v-if="item.orderType==4">归还</button>  
                            <!-- 退货完成 结算完成 评价完成 -->
                           <button @click.stop="seeSettlement(item.order_id)" class="order_single_btn--confirm"  v-if="item.orderType==7" >结算单</button>     
                           <!-- 待评价 -->
                           <button v-if="item.orderType==6">评价</button>
                           <!-- 评价完成 -->     
                           <button v-if="item.orderType==7">查看评论</button> 
                           <!-- 退货结算待确认 结算待确认 -->    
                           <button v-if="item.srcorderType==1 || (item.orderType==5 && item.srcorderType==2)">确认结算</button>     
                                
                    </div>
            </li>
              <toast v-model="toast"  type="success">{{confrim}}</toast>
        </ul>
    </div>
    
</template>

<script>
import { Scroller,  Spinner, XButton, Group, Cell, LoadMore , Toast } from 'vux';
import { mapGetters } from 'vuex';
import { API,getQuery } from '../../services';

export default {
  components: {
    Scroller,
    Spinner,
    XButton,
    Group,
    Cell,
    LoadMore,
    Toast
  },
  data () {
    return {
      confrim:"",
      toast:false,
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20,
      currentType:0,/* 0-6分辨对应6种状态 */
      /* 订单状态 */
      typeList:[{
          name:"全部订单",
          type:0,
      },{
          name:"待付款",
          type:1,
      },{
          name:"待发货",
          type:2,
      },{
          name:"待收货",
          type:3,
      },{
          name:"待归还",
          type:4,
      },{
          name:"待结算",
          type:5,
      },{
          name:"待评价",
          type:6,
      },],
       /* 时间对照表 */
      timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},
      /* 假数据模拟订单 */
      orderList:[]
    }
  },
   computed:{
    ...mapGetters([
      'getUserInfoUserId',
      'getUserInfoToken',
    ]),
    
  },
  mounted () {
    if(!this.orderList[0]){
       this.getTypeData();
    }
  },
  methods: {
    /* typelist点击选中函数 */
    typeselect(index){
      this.currentType=index;
    },
    /* 进入订单详情 */
    getInfo(id){
        window.location.href="/#/orderAction/"+id;
    },
    /* 确认订单状态 */
    confrimType(item){
      if (item.order_is_delete == 0) {
                if (item.order_refund_goods_status == 0) {
                    if (item.order_status == 1) {
                        if(item.order_shipping_status == 8){
                            item.orderType=8;//订单关闭
                        }else{
                           item.orderType=1;//代付款
                        }
                    } else if (item.order_status == 2) {
                        switch (item.order_shipping_status) {
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
                                item.orderType=5;//待确认结算
                                item.srcorderType=2;
                                break;
                            case 6:
                                item.orderType=6;//待评价
                                break;
                            case 7:
                                item.orderType=7;//评价完成
                                break;
                        }
                    }
                } else if (item.order_refund_goods_status == 1) {
                    item.orderType=9;//退款结束
                } else if (item.order_refund_goods_status == 2) {
                    if (item.order_status == 2) {//退款退货
                        if (item.order_shipping_status == 2) {
                            item.srcorderType=0;//退货待结算
                        } else if (item.order_shipping_status == 3) {
                            item.srcorderType=0;//退货待结算
                        } else if (item.order_shipping_status == 5) {
                            item.srcorderType=1;//退货待确认结算
                        } else if (item.order_shipping_status == 6) {
                            item.orderType=10;//退货完成
                        }
                    }
                } else if (item.order_refund_goods_status == 4) {
                    if (item.order_shipping_status == 6) {
                        item.orderType=10;//退货完成
                    }
                }else if(item.order_refund_goods_status == 3){
                    item.srcOrderType=3;//退款处理中
                }
            }
    },
    /* 获取对应的数据 */
    getTypeData(){
          API.order.orderlist({
              userId:this.getUserInfoUserId,  
              token:this.getUserInfoToken,
              orderStatus:0
          }).then((res)=>{
            if(res.body.code==200){
              let list= res.body.data.orderList.data
              for(let item of list) {
                  this.confrimType(item);
              }
              this.orderList=list;
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
        /* API.order.orderDel({
              userId:self.getUserInfoUserId,  
              token:self.getUserInfoToken,
              orderId:id,
            }).then((res)=>{
              if(res.body.code==200){
                  self.confrim="";
                  self.toast=true;
              }
          }); */
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
    /* 确认归还 */
    confirmReturn(item){
        /* * sinceId 自提点编号
        * expressId 物流单号
        * logisticsName 物流公司简拼
        * revertId 归还地址编号
        * company 物流公司名 */
        let self=this;
        this.$vux.confirm.show({
                /* title: 'Title', */
                content: '是否确认归还',
                onConfirm () {
                    /* 点击确认时执行具体删除操作 */
                    API.order.orderReceipt({
                        userId:self.getUserInfoUserId,  
                        token:self.getUserInfoToken,
                        orderId:id,
                    }).then((res)=>{
                        if(res.body.code==200){
                            self.confrim="确认归还成功";
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

    },
    /* 提醒结算 */
    remindSettl(id){

    },
    /* 查看物流,评价, */
    download(){

    }
  }
}


       
</script>

