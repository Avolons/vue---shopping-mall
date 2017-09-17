 
 <template>
    <div>
        <ul class="main_recommend_list" >
                <li v-for="(item,index) in commonGoodsList" class="main_recommend_single" @click="goInfo(item.goodsId)">
                    <div class="main_recommend_img">
                       
                        <img :src="item.goodsFace" alt="">
                </div>
                <div class="main_recommend_text">
                    <h2 class="main_recommend_title">{{item.goodsName}}</h2>
                    <h2 class="main_recommend_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                </div>
            </li>
        </ul>
    </div>
 </template>
 
 <script>
   export default{
       data(){
           return{
                timeMap:{1:"日",2:"周",3:"月",4:"季",5:"年"},
           }
       },
       components:{
       },
       props:{
           commonGoodsList:Array,
       },
       methods:{
           /* 进入商品详情 */
           goInfo(id){
               window.location.href="/#/goodsInfo/"+id;
           }
       },
   }   
 </script>
 
 