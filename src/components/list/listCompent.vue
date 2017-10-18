 
 <style lang="scss">
.list_compent {
    &_list {
        background-color: #f1f1f1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        min-height: calc(100% + 10px);
    }
    &_single {
        width: 49.5%;
        box-sizing: border-box;
        padding: 10px;
        background-color: #fff;
        margin-top: 5px;
        flex-direction: column;
        flex-wrap: wrap;
        display: flex;
    }
    &_img {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        &>img {
            margin: 0 auto;
            width: 100%;
            display: block;
           
        }
    }
    &_title {
        margin-top: 5px;
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
    &_oldprice{
        color: #272727;
        font-size: 13px;
        text-decoration: line-through;
    }
    &_text {
        box-sizing: border-box;
        flex-direction: column;
    }
}
</style>
 
 <template>
    <div>
        <ul class="list_compent_list">
            <li v-for="(item,index) in commonGoodsList" class="main_recommend_single" @click="goInfo(item.goodsId||item.goods_id)">
                <div class="main_recommend_img">
                    <!-- <x-img :src="item.goodsFace" container=".list_compent_list_box"  class="ximg-demo"  :offset="-100"  default-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507702400938&di=fc233efbd5c433313c2ec5c3fa424b1c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cf3655c8d56132f8755e66dcb76d.png%40900w_1l_2o_100sh.jpg" ></x-img> -->
                    <img :src="imgFormat(item.goodsFace || item.goods_main_pic)" alt="">

                </div>
                <div class="main_recommend_text">
                    <h2 class="main_recommend_title">{{item.goodsName || item.goods_name}}</h2>
                    <ul v-show="item.serviceSign" class="main_recommend_typeList">

                            <li class="main_recommend_type"  v-for="ite in item.serviceSign">
                                {{ite}}
                            </li>
                    </ul>
                    <div class="main_recommend_box">
                    <h2 v-if="!item.act_price" class="main_recommend_price">￥{{item.rentPrice  || item.rent_price}}/{{timeMap[item.rent_period_type]}}
                    </h2>
                    <h2 v-else class="main_recommend_price">￥{{item.act_price}}/{{timeMap[item.rent_period_type]}}
                        <span  class="main_recommend_oldprice">
                            ￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}
                        </span>
                    </h2>
                     <h2 class="main_recommend_address">{{item.region}}</h2>
                        </div>
                </div>
            </li>
        </ul>
    </div>
</template>
 
 <script>

/*  import { XImg} from 'vux' */

export default {
    data() {
        return {
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },

        }
    },
    components: {
       /*  XImg */
    },
    props: {
        commonGoodsList: Array,
    },
    mounted() {
        
    },
    methods: {
        /**
         * 返回当前设备类型，1：安卓 2：ios 3：H5
         * @returns 
         */
        typeCheck(){
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isAndroid){
                return 1;
            }else if(isiOS){
                return 2;
            }else{
                return 3;
            }
        },
        /* 进入商品详情 */
        goInfo(id) {
            if(localStorage.getItem('isAPP')==1){
                Android.goodClick(id);  
            }
            else if(localStorage.getItem('isAPP')==2){
                window.open("goodClick?goods_id="+id);
            }else{
            if(document.querySelector(".list_compent_list_box")){
            let scrollTop=document.querySelector(".list_compent_list_box").scrollTop;
            localStorage.setItem("scrolltop",scrollTop);
            }
            if(document.querySelector(".goodsList_List")){
            let scrollTop=document.querySelector(".goodsList_List").scrollTop;
            localStorage.setItem("scrolltop",scrollTop);
            }
            if(document.querySelector(".shop_main_goodsList")){
            let scrollTop=document.querySelector(".shop_main_goodsList").scrollTop;
            localStorage.setItem("storeTop",scrollTop);
            }
            if(document.querySelector(".collention_main")){
            let scrollTop=document.querySelector(".collention_main").scrollTop;
            localStorage.setItem("collentionTop",scrollTop);
            }
            if(document.querySelector(".morehot_main")){
            let scrollTop=document.querySelector(".morehot_main").scrollTop;
            localStorage.setItem("moreHotTop",scrollTop);
            }
            localStorage.setItem("goodsInfo","11");
            window.location.href="/#/goodsInfo/"+id;
            }
            /* this.$router.push({ path: '/goodsInfo/'+id});  */
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
 
 