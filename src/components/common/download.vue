<template>
    <div>
      <!--  -->
      <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">很抱歉</x-header>
        </div>
      <div class="shop_nofunction">
        <i class="iconfont">&#xe638;</i>
        <p>
         抱歉,本功能需要
        <br>
         下载租介APP才能使用
        </p>
       <a class="shop_nofunction_download" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie">点击下载APP</a>
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