<style lang="scss">
    .morehot_main{
        height: calc(100% - 47px);
        overflow-y: auto;
        -webkit-overflow-scrolling : touch; 
    }
</style>

<template>
    <div>
      <!--  -->
      <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">热租商品</x-header>
        </div>
        <div class="morehot_main">
             <list-compent  :commonGoodsList="goodsList"></list-compent>
        </div>
    </div>
</template>

<script>
import { XHeader} from 'vux'
import ListCompent from '../list/listCompent.vue';
import {API,getQuery} from '../../services';
  export default{
    data(){
      return{
          goodsList:[],
      }
    },
    components: {
    XHeader,
    ListCompent
  },
  methods:{
       routerBack(){
          this.$router.goBack();
      },
  },
  activated(){
      overscroll(document.querySelector('.morehot_main'));
  },
  mounted(){
      overscroll(document.querySelector('.morehot_main'));
    API.main.goodsHot({
        recomandId:3,
        page_number:30,
    }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;
        });
  }
  }
</script>