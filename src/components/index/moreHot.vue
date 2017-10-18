
<style lang="scss">
.morehot_main {
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
        <div class="morehot_main">
            <list-compent :commonGoodsList="goodsList"></list-compent>
            <load-more v-show="loadshow" tip="加载更多"></load-more>
            <load-more v-show="!loadshow && goodsList.length>6" :show-loading="false" tip="到底了" background-color="#fbf9fe"></load-more>
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
            canBottom: true,
            loadshow: false,
            haveData: false,
            page: 1,
            goodstype: 1,//1 频道 2.热卖 3.特惠
            icon_id: -1,
        }
    },
    components: {
        XHeader,
        LoadMore,
        ListCompent
    },
    methods: {
        routerBack() {
            this.$router.goBack();
        },
        getData() {
            if (this.haveData) {
                this.loadshow = true;
                if (this.goodstype == 1) {
                    if(this.$route.query.type=="icon"){
                        this.getIcon();
                        return false;
                    }else if(this.$route.query.type=="act"){
                        this.getAct();
                        return false;
                    }
                    this.getChannelGoods();
                } else if (this.goodstype == 2) {
                    this.getMoreHot();
                } else {
                    this.getNewGoods();
                }
            } else {
                this.canBottom = true;
            }
        },
                /* 获取活动数据 */
        getAct(){
            API.activity.getMoreGood({
                act_id:this.$route.query.id,
                store_id:this.$route.query.store_id
            }).then((res) => {
                if (res.body.code == 200) {
                    setTimeout(() => {
                         this.goodsList = this.goodsList.concat(res.body.data.store_list[0].goods_list);
                        this.canBottom = true;
                        this.loadshow = false;    
                    }, 500);
                    if (res.body.data.store_list[0].goods_list.length == 10) {
                    this.haveData = true;
                    this.page++;
                } else {
                    this.haveData = false;
                }
                }
               
            });      
        },

        /* 获取更多热门数据 */
        getMoreHot() {
            API.main.goodsHot({
                recomandId: 3,
                page_number: 10,
                page: this.page
            }).then((res) => {
                if (res.body.code == 200) {
                    setTimeout(() => {
                       this.goodsList = this.goodsList.concat(res.body.data.shopList.data);
                        this.canBottom = true;
                        this.loadshow = false;
                    }, 500);
                     if (res.body.data.shopList.data.length == 10) {
                    this.haveData = true;
                    this.page++;
                } else {
                    this.haveData = false;
                }
                }
               
            });
        },
        /* 获取新品特惠 */
        getNewGoods() {
            API.newMain.newGoods({
                page_number: 10,
                page: this.page
            }).then((res) => {
                if (res.body.code == 200) {
                        setTimeout(() => {
                            this.goodsList = this.goodsList.concat(res.body.data.data);
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
            });
        },
        /* 获取table活动数据 */
        getChannelGoods() {
             API.main.searchGoods({
              goods_category_id:this.icon_id,
              goods_sort:0,
              page_number:10,
              page:this.page,
          }).then((res)=>{
              setTimeout(() => {
                this.goodsList=this.goodsList.concat(res.body.data.shopList.data);
                this.canBottom = true;
                this.loadshow = false;
            }, 500);
            if(res.body.data.shopList.data.length==10){
                this.haveData=true;
                this.page++;
            }else{
                this.haveData=false;
            }   
          });
        },
        getIcon(){
          API.newMain.iconDetail({
              icon_id:this.icon_id,
              page_number:10,
              page:this.page,
          }).then((res)=>{
              setTimeout(() => {
                this.goodsList=this.goodsList.concat(res.body.data.data);
                this.canBottom = true;
                this.loadshow = false;
            }, 500);
            if(res.body.data.data.length==10){
                this.haveData=true;
                this.page++;
            }else{
                this.haveData=false;
            }   
          });  
        }
    },
    activated() {
        setTimeout(()=>{
          document.querySelector(".morehot_main").scrollTop=localStorage.getItem("moreHotTop");
         },50);
        /* 进入时首先判断当前数据类型，分为频道进入和热卖单品，特惠进入，三个类型对应三个接口 */
        let type = this.$route.query.name;
        this.title=type;
        if (type == "新品特惠") {
            if (this.goodstype == 3) {
                return false;
            }
            this.goodstype = 3;
        } else if (type == "热门单品") {
            if (this.goodstype == 2) {
                return false;
            }
            this.goodstype = 2;
        } else {
            if (this.icon_id == this.$route.query.id && this.goodstype == 1) {
                return false;
            }
            this.icon_id = this.$route.query.id;
            this.goodstype = 1;
        }
        this.page = 1;
        this.haveData = true;
        this.goodsList=[];
        /* 获取数据初始化 */
        this.getData();
        /* 页面滚动触发 */
        overscroll(document.querySelector('.morehot_main'));
    },
    mounted() {
        if(this.$route.query.shebei){
             window.localStorage.setItem('isAPP',this.$route.query.shebei);
        }
        if(localStorage.getItem('isAPP')==1 || localStorage.getItem('isAPP')==2){
            document.title=this.title;
            document.querySelector(".help_common_title").style.display="none";  
        }
        overscroll(document.querySelector('.morehot_main'));
        /* 收据初始化 */
        this.page = 1;
        this.haveData = true;
        let self = this;
        function getScrollTop() {
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.querySelector('.morehot_main')) {
                bodyScrollTop = document.querySelector('.morehot_main').scrollTop;
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
            if (document.querySelector('.morehot_main')) {
                bodyScrollHeight = document.querySelector('.morehot_main').scrollHeight;
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
        document.querySelector('.morehot_main').onscroll = function() {
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