<template>
    <div>
      <!--  -->
      <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">注册协议</x-header>
        </div>
      <div class="shop_nofunction">
          
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