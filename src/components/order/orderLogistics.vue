<style lang="scss">
.order_logmain{
    background-color: #f3f3f3;
    height: 100%;
    .vux-header-right>span{
        font-size: 18px;
        color: #272727;
    }
}
    .order_type{
        &_list{
            padding: 10px 0;
            background-color: #fff;
        }
        &_title{
            height: 50px;
            line-height: 50px;
            text-indent: 15px;
            font-size: 15px;
            color: #272727;
        }
        &_single{
            font-size: 15px;
            color: #272727;
            position: relative;
            padding-left: 25px;
            height: 20px;
            margin-left: 15px;
            &:after{
                top: 0;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                left: 0;
                display: block;
                content:"";
                position: absolute;
                border: 1px solid #dadada;
            }
            &:before{
                height: 10px;
                width: 10px;
                background-color: #2196f3;
                position: absolute;
                left: 5px;
                top: 5px;
                display: none;
                content:"";
                border-radius: 50%;
                position: absolute;

            }
            &--selected{
                 &:after{
                    border-color: #2196f3;   
                 }
                &:before{
                    display: block;    

                }
            }
        }
    }
</style>

<template>
<div>
    <div class="order_logmain">
        <div class="help_common_title">
        <x-header 
        @on-click-back="routerBack" 
        :left-options="{backText: '',preventGoBack:true}" >物流方式
        <span slot="right" @click="stateChange">完成</span>
        </x-header>
        <h3 class="order_type_title">物流方式</h3>
        <checker class="order_type_list" v-model="val" default-item-class="order_type_single" selected-item-class="order_type_single--selected">
        <span v-show="noTpl" style="display: block;;text-indent:15px;font-size:15px;color:#f80000">暂不支持地区</span>
        <checker-item  v-show="tplobj[1]" value="1">快递</checker-item>
        <checker-item v-show="tplobj[2]" value="2">上门</checker-item>
        <checker-item v-show="tplobj[3]" value="3">自提</checker-item>
        </checker>
        <h3  v-show="val==3" class="order_type_title">自提地址</h3>
        </div>
        <since-compent v-show="val==3"  :commonSinceList="sinceList"></since-compent>
        <toast v-model="toast"  type="cancel">{{confrim}}</toast>

    </div>
</div>
  
</template>
<script>
import { XHeader,Group, Checker,CheckerItem ,Toast} from 'vux';
import { mapGetters } from 'vuex'
import SinceCompent from '../order/sinceCompent.vue';
import {API,getQuery} from '../../services';

export default {
  components: {
    XHeader,
     Group,
    Checker,
    CheckerItem,
    SinceCompent,
    Toast
  },
  data () {
    return {
        confrim:"请选择物流方式",
        toast:false,
        val:"",
        noTpl:false,
        tplobj:{},
        sinceList:[],//获取自提点列表
    }
  },
  computed:{
    ...mapGetters([
      'getUserInfoUserId',
      'getUserInfoToken',
    ])
  },
  methods:{
      /* 路由回退 */
      routerBack(){
          this.$store.dispatch("CurrentTpl",this.val);
          this.$router.goBack();
      },
      /* 数据初始化 */
      dataForm(){
          /* 获取物流方式 */
      API.order.orderTpl({
          province:this.$store.state.addressData.province,
          city:this.$store.state.addressData.city,
          region:this.$store.state.addressData.district,
          goodsId:this.$route.params.id
      }).then((res)=>{
          if(res.body.code==200){
              if(!res.body.data.tpl[0]){
                  this.noTpl=true;
              }else{
                  this.noTpl=false ;
              }
              let tpl={};
          for(let item of res.body.data.tpl) {
              tpl[item.goods_shipping_tpl_type]=1;
          }
          this.tplobj=tpl;
          if(tpl[3]){
              /* 获取自提点列表 */
      API.order.goodsSince({
          userId:this.getUserInfoUserId,  
          token:this.getUserInfoToken,
          province:this.$store.state.addressData.province,
          city:this.$store.state.addressData.city,
          region:this.$store.state.addressData.district,
          goodsId:this.$route.params.id
      }).then((res)=>{
          /*  */
          if(res.body.code==200){
          this.sinceList=res.body.data.ztd.data;
          }
      });
          }
          }
      });
      
      },
      /* 触发状态管理 */
      stateChange(){
            if(this.val==""){
                this.toast=true;
                return false;
                
            }else if(this.val=="3"){
                this.confrim="请选择自提点";
                this.toast=true;
                return false;
            }
            else{
                this.$store.dispatch("CurrentTpl",this.val);
                this.$router.goBack();
            }
      },
      
  },
  mounted(){

  },
  activated(){
    this.dataForm();
  }
}
</script>