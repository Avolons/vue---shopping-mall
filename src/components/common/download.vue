<template>
    <div>
      <!--  -->
      <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">开发中</x-header>
        </div>
      <div class="shop_nofunction">
        <i class="iconfont">&#xe60e;</i>
        抱歉，功能正在开发中，请下载APP获取完整功能

       <a class="shop_nofunction_download" href="">点击下载APP</a>
      </div>
    </div>
</template>

<script>
import { XHeader} from 'vux'

  export default{
    data(){
      return{

      }
    },
    components: {
    XHeader,
  },
  methods:{
       routerBack(){
          this.$router.goBack();
      },
  }
  }
</script>