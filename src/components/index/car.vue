<style lang="scss">
  .shop_nofunction{
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top:0;
    align-items: center;
    left: 0;
    width: 100%;
    >i{
      font-size: 80px;
      color: #999;
      margin-bottom: 35px;
    }
     &_download{
       display: block;
       width: 150px;
       height: 35px;
       line-height: 35px;
       text-align: center;
       font-size: 18px;
       color: #fff;
       border-radius: 5px;
       margin-top: 25px;
       background-color: #2196f3;
     }  
  }
</style>

<template>
    <div>
      <!--  -->
      <div class="shop_nofunction">
        <i class="iconfont">&#xe60e;</i>
        抱歉，功能正在开发中，请下载APP获取完整功能

       <a class="shop_nofunction_download" href="">点击下载APP</a>
      </div>
    </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>