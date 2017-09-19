 
 <style lang="scss">
   .list_compent{
       &_list {
            background-color: #fff;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        &_single {
            width: 49%;
            box-sizing: border-box;
            padding: 10px;
        }
        &_img {
            display: block;
            box-sizing: border-box;
            &>img {
                margin: 0 auto;
                width: 100%;
                display: block;
            }
        }
        &_title {
            color: #272727;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
        }
        &_price {
            font-weight: 400;
            color: #f80000;
            font-size: 15px;
        }
        &_text {
            box-sizing: border-box;
            flex-direction: column;
        }
   }
 </style>
 
 <template>
    <div>
        <!-- <scroller lock-x 
       scrollbar-y 
       use-pullup 
       :pullup-config="pullupConfig" 
       ref="demo2" 
       height="-97"
       @on-pullup-loading="load"> -->
        <ul class="list_compent_list" >
                <li v-for="(item,index) in commonGoodsList" class="list_compent_single" @click="goInfo(item.goodsId)">
                    <div class="list_compent_img">
                        <img :src="item.goodsFace" alt="">
                </div>
                <div class="list_compent_text">
                    <h2 class="list_compent_title">{{item.goodsName}}</h2>
                    <h2 class="list_compent_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                </div>
            </li>
        </ul>
       <!--  </scroller> -->
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
           },
            load() {
           console.log(1);
        if (this.haveData) {
            console.log(1);
            } 
        },
       },
   }   
 </script>
 
 