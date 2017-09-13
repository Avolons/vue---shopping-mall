<style lang="scss">
    .help_main{
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
    }
</style>

<template>
    <div class="help_common_title">
        <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">帮助与客服</x-header>
        <div class="help_main">
            <group title="咨询客服">
            <cell title="邮箱咨询" value="customer@broadshare.cn" ></cell>
            <cell title="电话咨询" value="0571-86113050" ></cell>
            </group>
            <group title="常见问题">
            <cell title="发货与物流" is-link link="/logistics"></cell>
            <cell title="交易相关说明" is-link link="/service"></cell>
            <cell title="退租与售后" is-link link="/transaction"></cell>
            </group>
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
      showMenus: false
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      }
  }
}
</script>