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
                <li class="card_main_single" v-for="i in 10">
                        <img src="../../assets/img/common/cardbg.png" alt="card">
                            <div class="card_main_single_box">
                                <div class="card_main_single_left">
                                    <h3 class="card_main_single_price">￥<span>20</span></h3>
                                    <h5 class="card_main_single_rules">全平台可用</h5>
                            </div>
                            <div class="card_main_single_right">
                                    <h3 class="card_main_single_title">租介红包</h3>
                                    <p class="card_main_single_time nowarp">使用期限：2017.09.15-09.20</p>
                                    <button class="card_main_single_btn" type="button">去使用</button>
                            </div>
                        </div>
                </li>
            </ul>
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
      typeList:[
          {
              name:"未使用",
              click:true,
          },
          {
              name:"已使用",
              click:false
          },
          {
              name:"已过期",
              click:false
          }
      ]
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      typeClick(item){
          for(let item of this.typeList) {
              item.click=false;
          }
          item.click=true;
      }
  }
}
</script>