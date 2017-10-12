<style lang="scss">
    .shopInfo_main{
        .weui-cells__title{
            background-color: #f3f3f3;
            margin: 0;
            height: 50px;
            line-height: 50px;
        }
        .weui-cell{
            height: 45px;
            line-height: 45px;
        }
        .weui-cell__ft{
            font-size: 15px;
        }
        height: 100%;
        background-color: #fff;
        &_header{
            height: 115px;
            position: relative;
            margin-bottom: 80px;
        }
        &_shopface{
            height: 115px;
            width: 100%;
        }
        &_cell{
            position: absolute;
            top: 80px;
            height: 100px;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        &_logo{
            height: 65px;
            width: 65px;
            display: block;
        }
        &_title{
            font-size: 15px;
            color: #272727; 
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>

<template>
<div>
    <div class="shopInfo_main">
        <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">{{storeName}}</x-header>
        </div> 
        <header class="shopInfo_main_header">
            <img class="shopInfo_main_shopface" :src="imgFormat(storebgPic)" alt="shopface">
            <div class="shopInfo_main_cell">
                <img class="shopInfo_main_logo" :src="imgFormat(storeFace)" alt="logo">
                <h3 class="shopInfo_main_title">{{storeName}}</h3>
                
            </div>
        </header>
        <group>
            <cell title="开店时间" :value="time" ></cell>
            <cell title="所在地" :value="address" ></cell>
        </group>
    </div>
</div>
</template>

<script>
import { XHeader,Cell,Group,dateFormat } from 'vux';
import {API,getQuery} from '../../services'

export default {
  components: {
    XHeader,
    Cell,
    Group 
  },
  data () {
    return {
      storeName:null,
        storeFace:"",
        storebgPic:"",
        address:null,
        time:null,
      storeId:null,
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
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
                this.address=res.body.data.enterprise_license_location;
                this.time= dateFormat(res.body.data.store_open_time*1000);
            }
        });
       
      }
  },mounted(){
      this.Initialization();
      
  },
  activated(){
    
      this.Initialization();
  }
}
</script>