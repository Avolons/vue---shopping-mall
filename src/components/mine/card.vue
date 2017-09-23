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
    .card_main{
        height: calc(100% - 47px);
        overflow-y: auto;
        background-color: #f1f1f1;
        box-sizing: border-box;
        padding-top:40px;
        position: relative;
        &_typeList{
            height: 40px;
            width: 100%;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            box-sizing: border-box;
            padding: 0 30px;
            justify-content: space-between;
            >span{
                width: 80px;
                height: 38px;
                line-height: 38px;
                font-size: 16px;
                color: #272727;
                text-align: center;
                display: block;
                border-bottom: 2px solid #fff;
            }
            &--select{
                color: #2196f3 !important;
                border-color: #2196f3 !important;
            }
        }
        &_list{
            height: 100%;
            overflow-y: auto;
            padding-top: 20px;
            box-sizing: border-box;
            padding-bottom: 20px;
        }
        &_single{
            color: #fff;
            position: relative;
            width: 90%;
            margin: 0 auto;
            margin-bottom: 10px;
            &--select{
                color: #c1c1c1;
                button{
                    border-color: #c1c1c1;
                    color: #c1c1c1;
                }
                .card_main_single_title{
                        color:#6d6d6d;
                }
                .card_main_single_price{
                        color:#6d6d6d;
                }
                .card_main_single_store{
                        color:#6d6d6d;
                }
            }
            >img{
                display: block;
                min-height: 100px;
                width: 100%;
            }
            &_box{
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                display: flex;
                box-sizing: border-box;
                padding: 20px 0;
            }
            &_left{
                width: 35%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
            }
            &_right{
                position: relative;
                width: 65%;
                text-indent: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            &_price{
                font-size: 11px;
                >span{
                    font-size: 24px;
                }
            }  
            &_store{
                font-size: 10px;
            } 
            &_rules{
                font-size: 11px;
            }
            &_title{
                font-size: 16px;
            }
            &_time{
                font-size: 11px;
            }
            &_btn{
                position: absolute;
                display: block;
                width: 50px;
                height: 20px;
                font-size: 12px;
                color: #fff;
                text-align: center;
                border: 1px solid #fff;
                border-radius: 5px;
                line-height: 20px;
                top: 0;
                right: 20px;
            }
        }
    }
</style>

<template>
<div>
  <div class="help_common_title">
    <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">卡券包</x-header>
  </div>
    <div class="card_main">
            <div class="card_main_typeList" >
                <span v-for="item in typeList" @click="typeClick(item)" :class="{'card_main_typeList--select':item.click}">{{item.name}}</span>   
            </div>
            <ul class="card_main_list">
                <li class="card_main_single" :class="{'card_main_single--select':!typeList[0].click}" v-for="item in cardList" @click="goShop(item)">
                        <img v-if="typeList[0].click" src="../../assets/img/common/cardbg.png" alt="card">
                        <img v-if="!typeList[0].click"src="../../assets/img/common/closecard.png" alt="card">
                            <div class="card_main_single_box">
                                <div class="card_main_single_left">
                                    <h3 class="card_main_single_price">￥<span>{{item.amount}}</span></h3>
                                    <template v-if="item.use_range==1">
                                        <h5 class="card_main_single_rules">全平台可用</h5>
                                    </template>
                                    <template v-else>
                                        <h5 class="card_main_single_rules">指定店铺可用</h5>
                                    </template>
                                    
                                    
                            </div>
                            <div class="card_main_single_right">
                                <template v-if="item.use_range==1">
                                    <h3 class="card_main_single_title">租介红包</h3>
                                </template>
                                <template v-else>
                                    <h3 class="card_main_single_title">店铺红包</h3>
                                    <h3 class="card_main_single_store">{{item.store_name}}</h3>
                                </template>
                                    <p class="card_main_single_time nowarp">使用期限：{{item.use_start_time | dataform}}-{{item.use_end_time | dataform}}</p>
                                    <button v-if="typeList[0].click" class="card_main_single_btn" type="button">去使用</button>
                                    <button v-if="typeList[1].click" class="card_main_single_btn" type="button">已使用</button>
                                    <button v-if="typeList[2].click" class="card_main_single_btn" type="button">已过期</button>
                            </div>
                        </div>
                </li>
            </ul>
    </div>
</div>
</template>
<script>
import { XHeader,Cell,Group } from 'vux';
import { mapGetters } from 'vuex';
import {API,getQuery} from '../../services';


export default {
  components: {
    XHeader,
     Group,
    Cell,
  },
  data () {
    return {
     
      typeList:[
          {
              name:"未使用",
              click:true,
              id:0,
          },
          {
              name:"已使用",
              click:false,
              id:1,
          },
          {
              name:"已过期",
              click:false,
              id:2,
          }
      ],
      cardList:[{
        amount:"40.00",
        coupon_no:"201709182315482kd91ybk",
        rule_intro_url:"",
        store_id:75,
        store_name:"万享旅行租赁",
        type:1,
        use_end_time:1508339747,
        use_minimal_amount:"0.00",
        use_range:2,
        use_start_time:1505747748,}
      ]
    }
  },
  mounted(){
      this.getData(0);
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
      typeClick(item){
          if(item.click){
              return false;
          }
          for(let item of this.typeList) {
              item.click=false;
          }
          item.click=true;
          this.getData(item.id);
      },
      goShop(item){
          if(this.typeList[0].click){
              if(item.store_id){
                 this.$router.push({
                    path:"/shop/"+item.store_id,
                }); 
              }else{
                this.$router.push({
                    path:"/"
                });
              }
          }
      },
      getData(id){
          API.card.myCardList({
              userId:this.getUserInfoUserId,  
              token:this.getUserInfoToken,
              useType:id,
              page_number:10,
              page:1,
          }).then((res)=>{
              if(res.body.code==200){
                    this.cardList=res.body.data.data;  
              }
          })
      }
  }
}
</script>