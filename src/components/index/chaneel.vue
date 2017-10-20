
<style lang="scss">
.chaneel_main {
    .weui-loadmore_line .weui-loadmore__tips{
        background-color: #f1f1f1 !important;
    }
    height: calc(100% - 47px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f1f1f1;
}
</style>

<template>
    <div>
        <!-- 获取精选商品，热卖商品 -->
        <div class="help_common_title">
            <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">{{title}}</x-header>
        </div>
        <div class="chaneel_main">
            <template v-for="items in goodsList">
                <div class="main_hot"  @click="funClick(items.name,items.category_id)">
                {{items.name}} <i class="iconfont">&#xe6d7;</i>
            </div>
            <ul class="main_hot_list" >
                <li v-for="item in items.goods" class="main_hot_single" @click="goInfo(item.goodsId)">
                    <div class="main_hot_img">
                        <img :src="imgFormat(item.goodsFace)" alt="img">
                    </div>
                    <div class="main_hot_text">
                        <h2 class="main_hot_title twonowarp">{{item.goodsName}}</h2>
                        <div class="main_hot_contentbox">
                            <ul class="main_hot_typeList">
                                <li class="main_hot_type"  v-for="ite in item.serviceSign">
                                    {{ite}}
                                </li>
                            </ul>
                            <h2 class="main_hot_address">{{item.region}}</h2>
                        </div>
                        <h2 v-if="!item.act_price" class="main_hot_price">￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}</h2>
                        <h2 v-else class="main_hot_price">
                            ￥{{item.act_price}}/{{timeMap[item.rent_period_type]}}
                            <span  class="main_hot_oldprice">
                                ￥{{item.rentPrice}}/{{timeMap[item.rent_period_type]}}
                            </span>
                        </h2>
                    </div>
                </li>
            </ul>
            </template>
            
        </div>
    </div>
</template>

<script>
import { XHeader, LoadMore } from 'vux'
import ListCompent from '../list/listCompent.vue';
import { API, getQuery } from '../../services';
export default {
    data() {
        return {
            /* 当前标题 */
            title: "热卖单品",
            goodsList: [],
            /*是否可以进行下拉加载 */
            page: 1,
            goodstype: 1,//1 频道 2.热卖 3.特惠
            icon_id: 1,
            /* 时间周期对照表 */
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },
        }
    },
    components: {
        XHeader,
        LoadMore,
        ListCompent
    },
    methods: {
         goInfo(id) {
            let scrollTop = document.querySelector(".chaneel_main").scrollTop;
            localStorage.setItem("channeltop", scrollTop);
            localStorage.setItem("goodsInfo", "11");
            this.$router.push({
                path: '/goodsInfo/' + id
            });

        },
        routerBack() {
            this.$router.goBack();
        },
        /* 获取table活动数据 */
        getData() {
            API.newMain.channelDetail({
                channel_id: this.icon_id,
            }).then((res) => {
                if (res.body.code == 200) {
                this.goodsList = res.body.data;
                }
            });
        },
        funClick(name,id){
            let scrollTop = document.querySelector(".chaneel_main").scrollTop;
            localStorage.setItem("channeltop", scrollTop);
            this.$router.push({
                    path:'/moreHot/?name='+name+'&id='+id
            });
        }

    },
    activated() {
        setTimeout(()=>{
          document.querySelector(".chaneel_main").scrollTop=localStorage.getItem("channeltop");
         },50);
        /* 进入时首先判断当前数据类型，分为频道进入和热卖单品，特惠进入，三个类型对应三个接口 */
        let type = this.$route.query.name;
        if(this.title==type){
            return false;
        }
        this.title=type;
        this.icon_id=this.$route.query.id;
        this.getData();
        /* 页面滚动触发 */
        overscroll(document.querySelector('.chaneel_main'));
    },
    mounted() {
        overscroll(document.querySelector('.chaneel_main'));
        /* 收据初始化 */
    }
}
</script>