<style lang="scss">
.weui-dialog__btn_primary{
    color: #2196f3 !important;
}
   .addressList{
       &_main{
           background-color: #f3f3f3;
           height: 100%;
           .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
               color: #2196f3;
           }
           .weui-dialog__btn_primary{
               color: #2196f3;
           }
           
       }
       &_confrim{
           height: 70%;
           display: flex;
           flex-direction: column;
           align-items: center;
           font-size: 15px;
           justify-content: center;
           color: #272727;
           >i{
               font-size: 150px;
               color: #c1c1c1;
           }
       }
       &_addBtn{
           height: 50px;
           font-size: 18px;
           background: #2196f3;
           line-height: 50px;
           text-align: center;
           width: 100%;
           display: block;
           position: fixed;
           bottom: 0;
           left: 0;
           color: #fff;
       }
       &_list{

       }
       &_single{
        display: flex;
        flex-wrap: wrap;
        max-height: 150px;
        min-height: 120px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 15px;
        justify-content: center;
        margin-bottom: 10px;
        font-size: 15px;
        align-items: center;
        color: #272727;
           &_name{
               display: block;
               width: 50%;
               line-height: 50px;
               height: 50px;
           }
           &_phone{
               display: block;
                width: 50%;  
                line-height: 50px;
                text-align: right; 
                height: 50px;
           }
           &_address{
               display: block;
                width: 100%;   
                max-height: 60px;
                min-height: 30px;
                line-height: 30px;
           }    
           &_action{
               height: 40px;
               width:calc(100% + 30px);
               margin: 0 -15px;
               box-sizing: border-box;
               padding: 0 15px;
               display: flex;
               border-top: 1px solid #eee;    
               align-items: center;   
               >span:nth-of-type(1){
                   flex-grow: 1;
                   display: flex;
               }
               >span:nth-of-type(2){
                   flex-grow: 0;
                    width: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-sizing: border-box;
                    margin-right: 10px;
               }
               >span:nth-of-type(3){
                   flex-grow: 0;
                   width: 55px;
                   display: flex;
                   justify-content: space-between;
                   align-items: center;
                   box-sizing: border-box;
               }
           }
           &_icon{
               height: 18px;
               width: 18px;
               border: 2px solid #dddddd;
               border-radius: 3px;
               display: flex;
               align-items: center;
               justify-content: center;
               margin-right: 5px;
               >i{
                   display: none;
               }
               &--default{
                   border-color: #2196f3;
                   background-color: #2196f3;
                   >i{
                       color: #fff;
                       display: block;
                   }
               }
           }
       }
   }
</style>

<template>
<div>
    <div class="addressList_main">
        <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">我的地址</x-header>
        </div>
        <!-- 我的收获地址列表 -->
        <ul class="addressList_list">
            <li v-for="(item,index) in addressList.data" class="addressList_single">
                <span class="addressList_single_name">{{item.address_name}}</span>
                <span class="addressList_single_phone">{{item.mobile}}</span>
                <span class="addressList_single_address twonowarp">
                    {{item.province}}{{item.city}}{{item.district}}{{item.address}}
                </span>
                <div class="addressList_single_action">
                <span>
                   <span @click="checkDefault(index)" :class="{'addressList_single_icon--default':item.is_set_default==1}" class="addressList_single_icon"><i class="iconfont">&#xe60d;</i></span>  默认地址      
                </span> 
                <span @click="editAddress(item.id)">
                    <i class="iconfont">&#xe609;</i>
                    编辑
                    </span> 
                <span @click="deletAddress(item.id)">
                    <i class="iconfont">&#xe618;</i>
                    删除
                    </span> 
                </div>
            </li>
        </ul>
        <div  v-show="addressList.data.length<=0" class="addressList_confrim">
            <i class="iconfont">&#xe60b;</i>
            目前您还没有收货地址哦~
        </div>
        <a href="/#/editAddress" class="addressList_addBtn">新增收货地址</a>
    </div>
    </div>
</template>
<script>

import { XHeader,Cell,Group,Confirm} from 'vux'
import addresslist from './addresslist.json';
import { mapGetters } from 'vuex'
import {API,getQuery} from '../../services';

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Confirm
  },
  data () {
    return {
    /* 默认选中index */
      currentIndex:0,
      /* 当前列表index 集合 */
      valList:[],
      /* 地址列表 */
      addressList:{
          data:[]
      },
    }
  },
  computed:{
    ...mapGetters([
      'getUserInfoUserId',
      'getUserInfoToken',
    ])
  },
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      /* 默认地址选中项更改 */
      checkDefault(index){
          this.addressList.data[this.currentIndex].is_set_default=0;
          this.addressList.data[index].is_set_default==1 ? this.addressList.data[index].is_set_default=0:this.addressList.data[index].is_set_default=1;
          this.currentIndex=index;  
      },
      /* 地址编辑 */
      editAddress(id){
          /* 进入地址编辑页面 */
          window.location.href="/#/editAddress/"+id;
      },
      /* 地址删除 */
      deletAddress(id){
          this.$vux.confirm.show({
            /* title: 'Title', */
            content: '确定要删除该地址吗？',
            onConfirm () {
                /* 点击确认时执行具体删除操作 */

            }
        })
      },
      /* 获取用户地址列表 */
        getAddress(){
            /* 获取默认地址数据 */
            API.person.getAddressList({
                    userId:this.getUserInfoUserId,  
                    token:this.getUserInfoToken,
            }).then((res)=>{
                if(res.body.code==200){
                    this.addressList=res.body.data.addressList;
                    let checkValue=new Array(this.addressList.data.length);
                    for(let i=0;i<this.addressList.data.length;i++) {
                        let result=false;
                        if(this.addressList.data[i].is_set_default===1){
                            this.currentIndex=i;
                            result=true;
                        }
                        checkValue[i]=result;
                    }
                    this.valList=checkValue;
                }
            });
        }
  },
  mounted(){
        this.getAddress();
  },
  activated(){
      this.getAddress();
  }
}  
</script>