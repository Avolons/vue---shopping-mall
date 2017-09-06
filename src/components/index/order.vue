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
    }
  &_single{
    background-color: #fff;
     &_shop{
       color:#272727;
       font-size: 16px;
       height: 60px;
       line-height: 60px;
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
    }
    &_text{
       flex-grow: 1;
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
        font-size: 15px;
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
        margin-bottom: 10px;
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
            <li class="order_single" v-for="item in orderList"  v-show="currentType==item.type || currentType==0">
                <div class="order_single_shop">
                    <h2>{{item.shop}}</h2>
                    <span v-if="item.type==1" class="order_single_type">待付款</span>
                    <span v-if="item.type==2" class="order_single_type">待发货</span>
                    <span v-if="item.type==3" class="order_single_type">待收货</span>
                    <span v-if="item.type==4" class="order_single_type">待归还</span>
                    <span v-if="item.type==5" class="order_single_type">待结算</span>
                    <span v-if="item.type==6" class="order_single_type">待评价</span>
                </div> 
                <div class="order_single_content">
                    <img :src="item.imgurl" alt="img" class="order_single_img">
                    <div class="order_single_text">
                        <h3 class="order_single_title">
                          {{item.title}}
                        </h3>
                        <p class="order_single_box">
                           <span class="order_single_price">￥{{item.price}}/{{item.datetype}}</span>
                           <span class="order_single_num">数量：{{item.num}}</span>
                        </p>
                    </div> 
                </div>
                <div class="order_single_time">
                        <span>{{item.time}}</span>
                        <span>共1{{item.datetype}}</span>
                    </div>
                    <div class="order_single_despoite">
                        <span>押金</span>
                        <span>￥{{item.desposite}}</span>
                    </div>
                    <div class="order_single_allprice">
                       总计{{item.num}} 件商品   合计 <b>￥{{item.allprice}}</b>（含运费￥{{item.freight}}）
                    </div>
                    
                    <div class="order_single_btncoll">
                           <!-- 七种状态的button，对应其中操作 -->
                           <button class="order_single_btn--confirm" v-if="item.type==1">删除订单</button>     
                           <button v-if="item.type==1">付款</button>     
                           <button v-if="item.type==2">提醒发货</button>     
                           <button v-if="item.type==3">查看物流</button>     
                           <button v-if="item.type==3">确认收货</button>     
                           <button v-if="item.type==4">归还</button>     
                           <button v-if="item.type==5">查看物流</button>     
                           <button v-if="item.type==5">结算单</button>     
                           <button v-if="item.type==6">结算单</button>     
                           <button v-if="item.type==6">评价</button>     
                    </div>
            </li>
        </ul>
    </div>
    
</template>

<script>
import { Scroller,  Spinner, XButton, Group, Cell, LoadMore } from 'vux';

export default {
  components: {
    Scroller,
    Spinner,
    XButton,
    Group,
    Cell,
    LoadMore
  },
  data () {
    return {
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
      /* 假数据模拟订单 */
      orderList:[{
          type:1,
          shop:"小萝卜",
          imgurl:"https://static.vux.li/demo/1.jpg",
          title:"消防队救援",
          price:"200",
          num:"1",
          desposite:"44",
          allprice:"355",
          time:"2017-8.17-2017-11.24",
          datetype:"周",
          date:"1",
          freight:"12",
      },{
          type:2,
          shop:"小萝卜",
          imgurl:"https://static.vux.li/demo/1.jpg",
          title:"消防队救援",
          price:"200",
          num:"1",
          desposite:"44",
          allprice:"355",
          time:"2017-8.17-2017-11.24",
          datetype:"周",
          date:"1",
          freight:"12",
      },{
          type:3,
          shop:"小萝卜",
          imgurl:"https://static.vux.li/demo/1.jpg",
          title:"消防队救援",
          price:"200",
          num:"1",
          desposite:"44",
          allprice:"355",
          time:"2017-8.17-2017-11.24",
          datetype:"周",
          date:"1",
          freight:"12",
      },{
          type:4,
          shop:"小萝卜",
          imgurl:"https://static.vux.li/demo/1.jpg",
          title:"消防队救援",
          price:"200",
          num:"1",
          desposite:"44",
          allprice:"355",
          time:"2017-8.17-2017-11.24",
          datetype:"周",
          date:"1",
          freight:"12",
      },{
          type:5,
          shop:"小萝卜",
          imgurl:"https://static.vux.li/demo/1.jpg",
          title:"消防队救援",
          price:"200",
          num:"1",
          desposite:"44",
          allprice:"355",
          time:"2017-8.17-2017-11.24",
          datetype:"周",
          date:"1",
          freight:"12",
      },{
          type:6,
          shop:"小萝卜",
          imgurl:"https://static.vux.li/demo/1.jpg",
          title:"消防队救援",
          price:"200",
          num:"1",
          desposite:"44",
          allprice:"355",
          time:"2017-8.17-2017-11.24",
          datetype:"周",
          date:"1",
          freight:"12",
      }]
    }
  },
  mounted () {
    /* this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({top: 0})
    })
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    }) */
  },
  methods: {
    /* typelist点击选中函数 */
    typeselect(index){
      this.currentType=index;
    },
    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          this.bottomCount += 10
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    },
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    onCellClick () {
      window.alert('cell click')
    },
    onClickButton () {
      window.alert('click')
    },
    changeList () {
      this.showList1 = false
      this.$nextTick(() => {
        this.$refs.scroller.reset({
          top: 0
        })
      })
    }
  }
}
</script>

