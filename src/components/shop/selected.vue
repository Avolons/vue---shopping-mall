<style lang="scss">
.select_main {
    height: calc(100% - 47px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f1f1f1;
    &_list{
           
        }
        &_single{
        }
        &_imgBox{
            position: relative;
        }
        &_textBox{
            position: absolute;
            bottom: 15px;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
            display: flex;
            align-items: flex-end;
            >img{
                height: 45px;
                width: 45px;
                border-radius: 3px;
            }
            >h3{
                font-size: 17px;
                color: #fff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                &:nth-of-type(1){
                    flex-grow: 1;
                    text-indent: 7.5px;
                }
                &:nth-of-type(2){
                    flex-shrink: 0;
                    padding-right: 7.5px;
                }   
            }
            >i{
                    font-size: 17px;
                    color: #fff;
                }
        }
        &_goodsList{
            white-space: nowrap; 
            padding: 35px 15px;
            overflow-x: auto;
            width: 100%;
            box-sizing: border-box;
        }
        &_goodsSingle{
            display: inline-block;
            width: 110px;
            &:not(:last-of-type){
                margin-right: 25px;
            }
        }
        &_goodsTitle{
            font-size: 13px;
            color: #666;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: 15px 0;
        }
        &_goodsText{
            font-size: 12px;
            text-align: center;
            color: #e31111;
            >span{
                font-size: 11px;
                color: #666;
                text-decoration: line-through;
            }
        }
        &_goodsImg{
            display: black;
            height: 110px;
            width: 110px;
        }
        &_img{
            width: 100%;
            display: block;
        }
}
</style>

<template>
    <div>
        <!--  -->
        <div class="help_common_title">
            <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">精选店铺</x-header>
        </div>
        <div class="select_main">
            <ul class="select_main_list">
                <li v-for="item in shopList" class="select_main_single" >
                    <div class="select_main_imgBox">
                         <img class="select_main_img"   :src="imgFormat(item.bg_img)" alt="channel">
                         <div class="select_main_textBox">
                             <img :src="imgFormat(item.store_header)" alt="">
                             <h3>{{item.store_name}}</h3>
                             <h3 @click="goShop(item.store_id)" >进店</h3>
                             <i  @click="goShop(item.store_id)" class="iconfont">&#xe6d7;</i>
                         </div>
                    </div>
                    <ul class="select_main_goodsList">
                        <li @click="goInfo(ite.goods_id)" v-for="ite in item.goods" class="select_main_goodsSingle">
                            <img class="select_main_goodsImg" :src="imgFormat(ite.goods_main_pic)" alt="">
                            <h3 class="select_main_goodsTitle">{{ite.goods_name}}</h3>
                            <p  v-if="!ite.act_price" class="select_main_goodsText"> ￥{{ite.rent_price}}/{{timeMap[ite.rent_period_type]}}
                            </p>
                            <p v-else class="select_main_goodsText"> ￥{{ite.act_price}}/{{timeMap[ite.rent_period_type]}}
                                <span>￥{{ite.rent_price}}/{{timeMap[ite.rent_period_type]}}</span>
                            </p>
                        </li>
                    </ul>
                </li>
            </ul> 
            <load-more v-show="loadshow" tip="加载更多"></load-more>
            <load-more v-show="!loadshow && shopList.length>6" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
        </div>
    </div>
</template>

<script>
import { XHeader, LoadMore } from 'vux'
import { API, getQuery } from '../../services';
export default {
    data() {
        return {
            /* 精选店铺列表 */
            shopList: [],
            canBottom: true,
            loadshow: false,
            haveData: false,
            page: 1,
            icon_id: 1,
             /* 时间周期对照表 */
            timeMap: { 1: "日", 2: "周", 3: "月", 4: "季", 5: "年" },
        }
    },
    components: {
        XHeader,
        LoadMore
    },
    methods: {
        /* 路由回退 */
        routerBack() {
            this.$router.goBack();
        },
        /* 进入店铺 */
        goShop(id) {
            let scrollTop = document.querySelector(".select_main").scrollTop;
            localStorage.setItem("selectTop", scrollTop);
            window.localStorage.setItem("store", '11');
            this.$router.push({
                path: '/shop/' + id
            })
        },
        /* 进入详情 */
        goInfo(id){
            let scrollTop = document.querySelector(".select_main").scrollTop;
            localStorage.setItem("selectTop", scrollTop);
            localStorage.setItem("goodsInfo", "11");
            this.$router.push({
                path: '/goodsInfo/' + id
            });
        },
        /* 获取数据 */
        getData() {
            if (this.haveData) {
                this.loadshow = true;
                API.newMain.iconShop({
                    icon_id: this.icon_id,
                    page: this.page,
                    page_number: 10,
                }).then((res) => {
                    if (res.body.code == 200) {
                        this.shopList
                        setTimeout(() => {
                            this.shopList = this.shopList.concat(res.body.data.data);
                            this.canBottom = true;
                            this.loadshow = false;
                        }, 500);
                        if (res.body.data.data.length == 10) {
                            this.haveData = true;
                            this.page++;
                        } else {
                            this.haveData = false;
                        }
                    }
                })
            } else {
                this.canBottom = true;
            }
        }
    },
    activated() {
        overscroll(document.querySelector('.select_main'));
         setTimeout(() => {
            document.querySelector(".select_main").scrollTop = localStorage.getItem("selectTop");
        }, 50);
    },
    mounted() {
        this.icon_id = this.$route.query.id;
        overscroll(document.querySelector('.select_main'));
        this.page = 1;
        this.haveData = true;
        let self = this;
        this.getData();
        function getScrollTop() {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.querySelector('.select_main')) {
                bodyScrollTop = document.querySelector('.select_main').scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
            return scrollTop;
        }
        //文档的总高度
        function getScrollHeight() {
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if (document.querySelector('.select_main')) {
                bodyScrollHeight = document.querySelector('.select_main').scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        }
        //浏览器视口的高度
        function getWindowHeight() {
            var windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        }
        document.querySelector('.select_main').onscroll = function() {
            if (getScrollTop() + getWindowHeight() >= (getScrollHeight() - 10)) {
                if (self.canBottom == true) {
                    self.canBottom = false;
                    self.getData();
                }
            }
        };
    }
}
</script>