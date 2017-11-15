
<style lang="scss" >
    .bookMain_listContent{
        height: calc(100% - 50px);
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
            pullup=true,
            pulldown=true,
            ref="scollView",
            :swiper_pullUp="swiper_pullUp",
            :swiper_nodata="swiper_nodata"
            )
                book-list(:commonBookList="bookList",type="1",:refresh.native="scollRefresh")
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
  data () {
    return {
        /* 上拉加载更多 */
        swiper_pullUp:false,//显示加载
        swiper_nodata:false,//没有更多数据
        bookList:[],
        title:"系列详情",
        iconList:[],
        page:1,
        loading:false,
        series:"",
    }
  },
  computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
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
       API.book.getBookSerList({
            page:this.page,
            page_number:10,
            user_id: this.getUserInfoUserId,
            token: this.getUserInfoToken,
            series:this.series,
            start_date:window.startTime
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
     /*  this.getList(); */
  },
  activated () {
       
            this.title=this.$route.query.name;
            this.series=this.$route.query.series;
            this.listRefresh();}
}
</script>
