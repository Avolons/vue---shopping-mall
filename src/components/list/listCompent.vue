 
 <template>
    <div>
        <ul class="main_recommend_list" >
                <li v-for="i in commonGoodsList" class="main_recommend_single" @click="goInfo()">
                    <div class="main_recommend_img">
                    <img src="https://static.vux.li/demo/1.jpg" alt="">
                </div>
                <div class="main_recommend_text">
                    <h2 class="main_recommend_title">小萝卜健身器材</h2>
                    <h2 class="main_recommend_price">￥500.00/月</h2>
                </div>
            </li>
        </ul>
    </div>
 </template>
 
 <script>
   export default{
       data(){
           return{

           }
       },
       props:{
           commonGoodsList:Array,
       },
       methods:{
           goInfo(){
               window.location.href="/#/goodsInfo/ss";
           }
       }
   }   
 </script>
 
 