<style lang="scss">
    .shop_main{
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #fff;
        &_goodsList{
            flex-shrink: 1;
            flex-grow: 1;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
        &_header{
            flex-shrink: 0;
            flex-grow: 0;
            height: 115px;
            position: relative;
            overflow: hidden;
        }
        &_shopface{
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        &_cell{
            height: 40px;   
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 100px;
            >i{
                color: #fff;
                font-size: 20px;
                width: 10px;
            }
        }
        &_logo{
            height: 65px;
            width: 65px;
            display: block;
            position: absolute;
            left: 20px;
            bottom: 7px;  
        }
        &_title{
            font-size: 15px;
            color: #fff; 
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        &_cardListbox{
            padding: 10px 20px;
            width: 100%;
            overflow-x: auto;
            background-color: #f1f1f1;
            white-space: nowrap;
        }
        &_cardList{
             height: 100%;
        }
        &_box{
            display: flex;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #fff;
            align-items: center;
            height: 100%;
            width: 105px;
            padding: 10px 0;
            font-size: 13px;
        }
        &_cardSingle{
            display: inline-block;
            background-image: url("../../assets/img/common/storeCard.png");
            background-size: cover;
            height: 67.5px;
            width: 135px;
            margin-right: 50px; 
        }
        &_price{
            >span{
                font-size: 20px;
            }
        }
    }
</style>

<template>
<div>
    <div class="shop_main">
        <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">{{storeName}}</x-header>
        </div> 
        <header class="shop_main_header">
            <img class="shop_main_shopface" :src="storebgPic" alt="shopface">
            <div class="shop_main_cell" @click="goInfo()">
                <img class="shop_main_logo" :src="storeFace" alt="logo">
                <h3 class="shop_main_title">{{storeName}}</h3>
                <i class="iconfont">&#xe6d7;</i>
            </div>
        </header>
        <div v-show="cardList[0]" class="shop_main_cardListbox">
            <ul class="shop_main_cardList">
                <li class="shop_main_cardSingle" v-for="item in cardList" @click="getCard(item.coupon_no)">
                    <div class="shop_main_box">
                        <h3 class="shop_main_price">￥<span>{{item.amount}}</span></h3>
                        <h3 class="shop_main_allPrice">满{{item.use_minimal_amount}}元可用</h3>
                    </div>
                </li>
            </ul>
        </div>
        <div class="shop_main_goodsList">
         <list-compent :commonGoodsList="goodsList"></list-compent>
        <load-more style="padding-bottom:20px;" v-show="loadshow" tip="加载更多"></load-more>
        <load-more v-show="!loadshow && goodsList.length>8 " :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
        </div>
        <toast v-model="toast"  type="success">{{confrim}}</toast>
    </div>
</div>
</template>

<script>
import ListCompent from '../list/listCompent.vue';
import { XHeader,Toast,LoadMore} from 'vux'
import { mapGetters } from 'vuex'
import {API,getQuery} from '../../services'

export default {
  components: {
    XHeader,
    Toast,
    LoadMore,
    ListCompent
  },
  data () {
    return {
        haveData:true,
        page:1,
        canBottom:true,
        loadshow:false,
        confrim:"请选择地址",
        toast:false,
        storeName:null,
        storeFace:null,
        storebgPic:null,
        storeId:null,
        goodsList:[1,5,7,6,8],
        cardList:[]
    }
  },
  computed:{
      ...mapGetters([
        'getUserInfoUserId',
        'getUserInfoToken',
        'getAddress',
        'getNamePhone'
        ]),
  },
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      /* 领取店铺优惠券 */
      getCard(id){
          if(!this.getUserInfoUserId){
             this.$router.push({
                 path:"/login",
             });
             return false;
          }
          API.card.receiveStoreCoupon({
             storeId:this.storeId,
             userId:this.getUserInfoUserId,  
            token:this.getUserInfoToken,
            couponNo:id
          }).then((res)=>{
              if(res.body.code==200){
                  this.confrim="领取成功";
                  this.toast=true;
              }else{
                  this.confrim=res.body.msg;
                  this.toast=true;
              }
          })
      },
      /* 跳到店铺详情页面 */
      goInfo(){
          this.$router.push({
                path:'/shopInfo/'+this.storeId
              })
          
      },
      /* 数据初始化 */
      Initialization(){
          this.storeId=this.$route.params.id;
        API.main.storeInfo({
            storeId:this.storeId
        }).then((res)=>{
            if(res.body.code==200){
                 this.storeName=res.body.data.storeName;
                this.storeFace=res.body.data.storeFace;
                this.storebgPic=res.body.data.storebgPic;
            }
        });
        API.main.storeGoods({
            storeId:this.storeId,
            page:this.page,
        }).then((res)=>{
            if(res.body.code==200){
                this.goodsList=res.body.data.shopList.data;
                if(res.body.data.shopList.data.length==10){
                    this.haveData=true;
                    this.page++; 
                }else{
                    this.haveData=false;  
                }
            }
        }); 
        API.card.stordCardList({
            storeId:this.storeId
        }).then((res)=>{
            if(res.body.code==200){
                this.cardList=res.body.data;
            }
        })
      },
      /* 获取更多数据 */
      getMoreData(){
          if(this.haveData){
                this.loadshow=true;
                API.main.storeGoods({
                    storeId:this.storeId,
                    page_number:10,
                    page:this.page,
                }).then((Response)=>{
                    setTimeout(()=>{
                    this.goodsList=this.goodsList.concat(Response.body.data.shopList.data);   
                    this.canBottom=true;
                    this.loadshow=false;
                    },500);
                    if(Response.body.data.shopList.data.length==10){
                        this.haveData=true;
                        this.page++;
                    }else{
                        this.haveData=false;
                    }
                });
            }else{
                this.canBottom=true; 
            }
      }
  },mounted(){
      overscroll(document.querySelector('.shop_main_goodsList'));
      let self = this;
        let mainbox = document.querySelector(".shop_main_goodsList");
        function getScrollTop() {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (mainbox) {
                bodyScrollTop = mainbox.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            return scrollTop;
        }
        function getScrollHeight() {
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if (mainbox) {
                bodyScrollHeight = mainbox.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        }
        function getWindowHeight() {
            var windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        }
        document.querySelector(".shop_main_goodsList").onscroll = function() {
            if ((getScrollTop() + getWindowHeight()) >= (getScrollHeight() - 10)) {
                if (self.canBottom == true) {
                    self.canBottom = false;
                    self.getMoreData();
                }
            }
        };
      this.Initialization();
  },
  activated(){
      overscroll(document.querySelector('.shop_main_goodsList'));
      if(localStorage.getItem("store")){
            this.page=1;
            this.canBottom=true;
            this.haveData=true;
            this.Initialization();
             window.localStorage.setItem("store",'');
      }else{
           setTimeout(() => {
            document.querySelector(".shop_main_goodsList").scrollTop = localStorage.getItem("storeTop");
        }, 50);
      }
       
  }
}
</script>