 
 <style lang="scss">
    .main_since{
        &_list{
            
        }
        &_single{
            background-color: #fff;
            max-height: 110px;
            padding: 15px;
            box-sizing: border-box;
            margin-bottom: 10px;
        }
        &_text{
            height: 30px;
            font-size: 15px;
            line-height: 30px;
            color: #272727;
            display: flex;
            justify-content: space-between;
            font-weight: 400;
            flex-grow: 0;
        }
        &_title{
            font-weight: 400;
        }
        &_price{
            font-weight: 400;
        }
        &_intr{
            flex-grow: 1;
            font-size: #666;
            font-size: 15px;
            line-height: 25px;
        }
    }
 </style>
 
 <template>
        <ul class="main_since_list" >
                <li v-for="(item,index) in commonSinceList" class="main_since_single" @click="select(item)">
                <div class="main_since_text">
                    <h2 class="main_since_title">{{item.since_name}}</h2>
                    <h2 class="main_since_price">{{item.since_tel}}</h2>
                </div>
                <p class="main_since_intr twonowarp">{{item.province_name}}{{item.city_name}}{{item.region_name}}{{item.since_detailed_address}}</p>
            </li>
        </ul>
 </template>
 
 <script>
   export default{
       data(){
           return{

           }
       },
       props:{
           commonSinceList:Array,
       },
       methods:{
           /* 进入商品详情 */
           select(item){
              /*  window.location.href="/#/goodsInfo/"+id; */
              this.$store.dispatch('SetSince',item);
              this.$store.dispatch('CurrentTpl',3);
              this.$router.goBack();
           }
       },
   }   
 </script>
 
 