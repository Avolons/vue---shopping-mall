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
       <a  v-if="iswexin" class="shop_nofunction_download" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie">点击下载APP</a>
        <a v-else-if="isIOS" class="shop_nofunction_download" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zujie">点击下载APP</a>
       <a  v-else class="shop_nofunction_download" href="https://www.zujiekeji.cn/download/app-guanwang-release-1.1.9.apk">点击下载APP</a>
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
  computed:{
    iswexin(){
      var ua = window.navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
          } else {
            return false;
          }
      },
    isIOS(){
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      /*  */
      if(isiOS){
        return true;
      }else{
        return false;
      }
    }
  },
  methods:{
       routerBack(){
          this.$router.goBack();
      },
  }
  }
</script>
