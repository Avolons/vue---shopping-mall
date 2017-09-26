 
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
        <ul class="list_compent_list">
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
export default {
    data() {
        return {
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },

        }
    },
    components: {
    },
    props: {
        commonGoodsList: Array,
    },
    mounted() {
        
    },
    methods: {
        /* 进入商品详情 */
        goInfo(id) {
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
            
            localStorage.setItem("goodsInfo","11");
            this.$router.push({ path: '/goodsInfo/'+id}); 
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
 
 