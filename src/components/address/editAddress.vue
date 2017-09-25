<style lang="scss">
    .help_common_title{
        .vux-header{
            background-color:#fff;
            border-bottom: 1px solid #dadada;
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
    .editAddress_main{
        overflow: hidden;
        height: 100%;
        background-color: #f3f3f3;
        box-sizing: border-box;
        .weui-cells{
            &:before{
                display: none;
            }   
            &:after{
                display: none;
            }    
            margin: 0;        
        }
        .vux-x-textarea{
            font-size: 14px;
        }
        .vux-x-input{
            font-size: 15px;
            color: #272727;
            height: 30px;
        }
        .vux-cell-box{
            font-size: 15px;
            color: #272727;
            height: 46px;
            line-height: 33px;
        }
        &_textarea{
           border: 1px solid #dadada;    
        }
        &_title{
            font-weight: 400;
            font-size: 14px;
            color: #272727;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        &_input{
            border-radius: 5px;
            height: 40px;
            width: 100%;
            line-height: 40px;
            border: none;
            border: 1px solid #dadada;
            box-sizing: border-box;
            padding: 5px;
        }
        &_btn{
            height: 40px;
            width: 90%;
            text-align: center;
            line-height: 40px;
            font-size: 15px;
            color: #fff;
            background-color:#2196f3;
            border-radius: 5px;
            display: block;
            margin: 0 auto;
            margin-top: 40px;
        }
        &_default{
            height: 45px;
            line-height: 45px;
            background-color: #fff;
            margin-top: 15px;
            box-sizing: border-box;
            padding: 0 15px;
            .vux-check-icon{
                float: right;
            }
            .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
                color:#2196f3;
            }
        }
    }
</style>

<template>
  <div class="help_common_title">
    <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">{{title}}</x-header>
    <div class="editAddress_main">
      <group>
        <x-input v-model="name" title="收货人" name="username"  required is-type="china-name"></x-input>
        <x-input v-model="phone" title="联系电话" name="mobile" required  keyboard="number" is-type="china-mobile"></x-input>
      <x-address 
      title="所在省市区" 
      raw-value
      v-model="address" 
      :list="addressData" 
      placeholder="请选择" 
      >
      </x-address>
      <x-textarea :rows="6" :max="40" v-model="addressDetils" placeholder="请填写详细地址" ></x-textarea>  
    </group>
    <div class="editAddress_main_default">
        设为默认地址
    <check-icon   :value.sync="isDefault"></check-icon>
    </div>
    <button type="button" @click="addAddress" class="editAddress_main_btn">保存</button>
    <toast v-model="toast"  type="cancel">{{confrim}}</toast>
    <toast v-model="success"  type="success">{{confrim}}</toast>

    </div>
  </div>
</template>
<script>
import {CheckIcon,Toast,Value2nameFilter as value2name, XHeader,Cell,Group,XButton,XInput,XAddress,XTextarea,ChinaAddressV3Data } from 'vux'
import { mapGetters } from 'vuex'
import {API,getQuery} from '../../services'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    XButton,
    XTextarea,
    XInput,
    XAddress,
    CheckIcon,
    Toast
  },
  data () {
    return {
        confrim:"",
        toast:false,
        success:false,
        title:"新增地址",
        addressData:ChinaAddressV3Data,
        name:"",
        phone:"",
        address:[],
        /* 详细地址 */
        addressDetils:"",
        isDefault:false,
        /* 用户id */
        id:"",
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
      getName (value) {
        return value2name(value, ChinaAddressV3Data)
     },
      /* 检查当前状态属于新增还是编辑状态，通过路由parmas参数 */
      typeCheck(){
          /* 当前属于新增状态 */
            if(this.$route.params.id=="add"){
                this.title="新增地址";
                this.name="";
                this.phone="";
                this.address=[];
                this.addressDetils="";
                this.isDefault=false;
            }else{
                this.title="地址编辑";
                let id=this.$route.params.id;
                this.id=id;
                this.getAddress(id);
            }
      },
      /* 编辑时获取地址详情 */
      getAddress(id){
            API.person.addressInfo({
                userId:this.getUserInfoUserId,
                 token:this.getUserInfoToken,
                 id:id,
                 is_default:0
            }).then((res)=>{
                if(res.body.code==200){
                let addressList= res.body.data.addressList;
                this.name=addressList.address_name;
                this.phone=addressList.mobile;
                let address=[];
                address[0]=addressList.province;
                address[1]=addressList.city;
                address[2]=addressList.district;
                this.address=address;
                this.addressDetils=addressList.address;
                this.isDefault=addressList.is_set_default==1?true:false;
                }
            })       
      },
      /* 新增地址 */
      addAddress(){
          /* 地址校验 */
        if(!this.name){
            this.confrim="请输入姓名";
            this.toast=true;
            return false; 
        }
        if(!this.phone){
            this.confrim="请输入联系电话";
            this.toast=true;
            return false; 
        }
        if(!this.address[0]){
            this.confrim="请选择地区";
            this.toast=true;
            return false; 
        }
        if(!this.addressDetils){
            this.confrim="请输入详细地址";
            this.toast=true;
            return false; 
        }
        let addresslist=(this.getName (this.address)).split(" ");
        if(this.title=="地址编辑"){
            /* 编辑地址 */
            API.person.addressEdit({
            id:this.id,
            userId:this.getUserInfoUserId,
            token:this.getUserInfoToken,
            address_name:this.name,
            mobile:this.phone,
            province:addresslist[0],
            city:addresslist[1],
            district:addresslist[2],
            address:this.addressDetils,
            postcode:null,
            is_set_default:this.isDefault==true?1:0,
        }).then((res)=>{
            if(res.body.code==200){
                this.confrim="修改成功";
                this.success=true;
                /* 添加成功后路由回退 */
                setTimeout(() =>{
                    this.routerBack();
                }, 1000);
            }else{
                this.confrim=res.body.msg;
                this.toast=true;
            }
        });
          }else{
              
        /* 添加地址 */
        API.person.addressAdd({
            userId:this.getUserInfoUserId,
            token:this.getUserInfoToken,
            address_name:this.name,
            mobile:this.phone,
            province:addresslist[0],
            city:addresslist[1],
            district:addresslist[2],
            address:this.addressDetils,
            postcode:null,
            is_set_default:this.isDefault==true?1:0,
        }).then((res)=>{
            if(res.body.code==200){
                this.confrim="添加成功";
                this.success=true;
                /* 添加成功后路由回退 */
                setTimeout(() =>{
                    this.routerBack();
                }, 1000);
            }else{
                this.confrim=res.body.msg;
                this.toast=true;
            }
        });
          }
        
      }
  },
  mounted(){
    this.typeCheck();
  },
  /* 非缓存插件 */
  activated(){
      this.typeCheck();
  }
}
</script>