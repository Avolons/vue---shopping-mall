
<style lang="scss">
   .about_main{
       height: 100%;
       background-color: #fff;
       box-sizing: border-box;
       padding: 25px 30px 0 30px;
       display: flex;
       flex-direction: column;
       align-items: center;
       &_logo{
           width: 50px;
       }
       &_title{
            font-size: 23px;
            color: #2197f3; 
            margin: 10px 0;
       }
       &_code{
            font-size: 12px;
            color: #999; 
       }
       &_text{
            height: 25px;  
            margin-top: 20px;
            margin-bottom: 40px;
       }
       &_intr{
            text-indent: 30px;
            line-height: 20px;
            color: #666;
            font-size: 13px;
            margin-bottom: 30px;  
       }
       &_footer{
           font-size: 12px;
           color: #666;
           margin-top: 50px;
       }
       
   }
</style>

<template>
<div>
<div class="about_main">
    <div class="help_common_title">
     <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">关于我们</x-header>
    </div>
    <img class="about_main_logo" src="../../assets/img/common/logo2x.png" alt="logo">
    <h2 class="about_main_title">租介</h2>
    <span class="about_main_code">版本号V1.0.0</span>
    <img class="about_main_text" src="../../assets/img/common/text.jpg" alt="text">
    <p class="about_main_intr">
        租介平台立志于打造全新一代的移动互联网共享经济平台，由杭州博享科技有限公司开发并运营，平台于2017年8月中正式上线试运营。
    </p>
    <p class="about_main_intr">
       租介平台致力于让共享成为一种新的生活方式，我们希望可以打造一个专业独立的移动租赁平台，通过与商家以及品牌商合作经营的方式，提升租赁的用户体验与品质，为商家与用户提供更多的选择与机会，打造互联网租赁行业的全品类平台。
    </p>
    <p class="about_main_intr">
        我们期待与所有用户，商家以及相关的合作方，共同迎接共享经济时代的到来！
    </p>
    <footer class="about_main_footer">
        ©2017 杭州博享科技有限公司
    </footer>
</div>
</div>
</template>
<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader,
  },
  data () {
    return {
    }
  },
  methods:{
      routerBack(){
          this.$router.goBack();
      },
  }
}
</script>