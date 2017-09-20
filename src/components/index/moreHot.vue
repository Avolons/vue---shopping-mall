<template>
    <div>
      <!--  -->
      <div class="help_common_title">
             <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">热租商品</x-header>
        </div>
        <list-compent  :commonGoodsList="goodsList"></list-compent>
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
  mounted(){
    API.main.goodsHot({
        recomandId:3,
        page_number:30,
    }).then((Response)=>{
            this.goodsList=Response.body.data.shopList.data;
        });
  }
  }
</script>