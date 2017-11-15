
<style lang="scss" >
.bookMain {
  &_iconList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 15px;
    background-color: #fff;
    margin-bottom: 10px;}
 &_iconsingle{
      margin-top: 15px;
      width: 33.33%;
      >img{
        display: block;
        width: 40px;
        height: 40px;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      >h3{
        font-size: 14px;
        color: #333;
        text-align: center;
      }
    }

/* 主体部分 */
    &_content{
     >h3{
       padding: 0 15px;
       box-sizing: border-box;
       font-size: 18px;
       line-height: 40px;
       height: 40px;
       color: #2196f3;
       background-color: #fff;
     }
    }
  }
</style>


<template lang="pug">
    //- 首页主体
    .bookMain
        b-scroll(
          :data="bookList",
          pullup=true,
          pulldown=true,
          @pulldown="getIcon",
          @scrollToEnd="getBookList",
          ref="scollView",
          :swiper_pullUp="swiper_pullUp",
          :swiper_nodata="swiper_nodata"
          )
          .bookMain_header
            ul.bookMain_iconList
              li(v-for="item,index in iconList",@click="iconClick(item.icon_id,index)").bookMain_iconsingle
                img(:src="imgFormat(item.img)",alt="img")
                h3 {{item.name}}

          .bookMain_content
            h3 热门推荐
            book-list(:commonBookList="bookList",type="0",:refresh.native="scollRefresh")
            //-推荐书本列表
          
</template>

<script>
import HeaderCop from './common/header.vue';
import BookList from './common/bookList.vue';
import BScroll from 'vue-betterscroll';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../services';
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux';
export default {
  directives: {
    TransferDom
  },
  components: {
    BookList,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    HeaderCop,
    BScroll
  },
  data() {
    return {
      /* 上拉加载更多 */
      swiper_pullUp: false,//显示加载
      swiper_nodata: false,//没有更多数据
      bookList: [],
      title: "绘本",
      iconList: [],
      page: 1,
      loading: false,
    }
  },
  computed: {
    ...mapGetters([
      'getUserInfoUserId',
      'getUserInfoToken',
    ]),
  },
  methods: {
    /**
     * 获取iconlist
     */
    getIcon() {
      this.page = 1;
      this.bookList = [];
      API.book.getIcon().then((res) => {
        if (res.body.code == 200) {
          this.iconList = res.body.data
        }
      }).then(() => {
        this.getBookList();
      });
    },
    /**
     * 获取首页推荐列表
     */
    getBookList() {
      if (this.loading) {
                return false;
            }
            this.loading = true;
      if (this.bookList.length >= 10) {
        this.swiper_pullUp = true;
        this.swiper_nodata = false;
      }
      API.book.getRecommd({
        page: this.page,
        page_number: 10,
        user_id: this.getUserInfoUserId,
        token: this.getUserInfoToken,
        start_date: window.startTime
      }).then((res) => {
        if (res.body.code == 200) {
          let time = 0;
          if (this.bookList.length != 0) {
            time = 500;
          }
          setTimeout(() => {
            if (res.body.data.length > 0 || this.page == 1) {
              this.swiper_pullUp = false;
              this.bookList = this.bookList.concat(res.body.data);
              this.page++;
            } else {
              this.swiper_pullUp = false;
              if (this.bookList.length >= 6) {
                this.swiper_nodata = true;
              }
            }
            this.$nextTick(() => {
              this.scollRefresh();
              this.loading = false;
            })
          }, time);
        }
      });
    },
    /* 滚动列表重置刷新 */
    scollRefresh() {
      this.$refs.scollView.scroll.refresh();
    },
    /**@argument
     * icon点击函数 ，5种类型
     */
    iconClick(id, index) {
      switch (index) {
        case 0:
          this.$router.push({
            path: "/book_bookSearch"
          });
          break;
        case 1:
          this.$router.push({
            path: "/book_bookHot"
          });
          break;
        case 2:
          this.$router.push({
            path: "/book_bookSeries",
            query: {
              icon_id: id
            }
          });
          break;
        case 3:
          this.$router.push({
            path: "/book_bookNew",
            query: {
              icon_id: id
            }
          });
          break;
        case 4:
          this.$router.push({
            path: "/book_bookEnglish",
            query: {
              icon_id: id
            }
          });
          break;
        default:
          this.$router.push({
            path: "/book_bookPerSearch"
          });
          break;
      }
    }
  },
  mounted() {
    
  },
  activated() {
     if(window.stopReload){
            setTimeout(()=>{
                console.log(localStorage.getItem("bookScroll"));
                this.$refs.scollView.scroll.scrollTo(0,localStorage.getItem("bookScroll")-0,10);
           },20);
            window.stopReload=false;
        }else{
    this.getIcon();}
  }
}
</script>
