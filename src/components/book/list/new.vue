
<style lang="scss" scoped>
    .bookMain_list{
        background-color: #f1f1f1 !important;
    }
</style>


<template lang="pug">
    //- 首页主体
    .bookMain_list
        header-cop(:heder_title="title")
        .bookMain_listContent
            b-scroll(
            :data="bookList",
            @pulldown="listRefresh",
            @scrollToEnd="getList",
            ref="scollView",
            pullup=true,
            pulldown=true,
            :swiper_pullUp="swiper_pullUp",
            :swiper_nodata="swiper_nodata"
            )
                book-list(:commonBookList="bookList",type="0",:refresh.native="scollRefresh")
                //-推荐书本列表
          
</template>

<script>
import HeaderCop from '../common/header.vue';
import BookList from '../common/bookList.vue';
import BScroll from 'vue-betterscroll';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';
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
  computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
  data () {
    return {
        /* 上拉加载更多 */
        swiper_pullUp:false,//显示加载
        swiper_nodata:false,//没有更多数据
        bookList:[],
        title:"新书上架",
        iconList:[],
        page:1,
        icon_id:-1,
        loading:false,
    }
  },
  methods:{
      /**@argument
       * 列表刷新
       */
      listRefresh(){
          this.page=1;
          this.bookList=[];
          this.getList();
      },
    /**@argument
     * 获取列表数据
     */
   getList(){
       if(this.loading){
            return false;      
      }
      this.loading=true;
       if(this.bookList.length>=10){
        this.swiper_pullUp=true;
        this.swiper_nodata=false;
      }
       API.book.bookList({
            page:this.page,
            page_number:10,
            user_id: this.getUserInfoUserId,
            token: this.getUserInfoToken,
            start_date:window.startTime,
            icon_id:this.icon_id,
       }).then((res)=>{
           if(res.body.code==200){
               let time=0;
                if(this.bookList.length!=0){
                time=500;
                }
                setTimeout(()=>{
                        if(res.body.data.length>0){
                            this.swiper_pullUp=false;
                            this.bookList=this.bookList.concat(res.body.data);
                            this.page++;
                            }else{
                                this.swiper_pullUp=false;
                                if(this.bookList.length>=6){
                                this.swiper_nodata=true;
                            }
                            }
                            this.$nextTick(() => {
                            this.scollRefresh();
                            this.loading=false;
                            })
                },time);
           }
       })          
   },
    /* 滚动列表重置刷新 */
    scollRefresh(){
      this.$refs.scollView.scroll.refresh();
    },
    
  },
  mounted () {
  },
  activated () {
       if(window.stopReload){
            setTimeout(()=>{
                console.log(localStorage.getItem("bookScroll"));
                this.$refs.scollView.scroll.scrollTo(0,localStorage.getItem("bookScroll")-0,10);
           },20);
            window.stopReload=false;
        }else{
       this.icon_id=this.$route.query.icon_id;
      this.listRefresh();}
  }
}
</script>
