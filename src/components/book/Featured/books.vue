<template>
 
    <div class="body" ref="body" >
        <img src="../../../assets/img/goods/btn.png" alt="" height="43" @click="to" >
    </div>
  
</template>

<script>

  export default{
    data(){
      return{

      }
    },
   /* mounted(){
       setTimeout(function(){
        loading()
       }, 100)
    },*/
    methods:{
      to(){
        
      //或匀用户信息
        let user=window.localStorage.userInfo
               // console.log(user)
              user?this.$router.push('/book_bookCard'):this.$router.push('/login')
      }
    }
  
  }
</script>
<style scoped>
  .body{

  background: url(../../../assets/img/goods/bg.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
 
  align-items: flex-end;

}
img{
 margin-bottom: 46px;

}
</style>