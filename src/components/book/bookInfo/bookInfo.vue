<style lang="scss" scoped>
.bookMain_info {
    .active {
        background-color: #2196f3;
    }
    &_back {
        position: fixed;
        top: 20px;
        left: 20px;
        font-size: 30px;
        color: #dadada;
        z-index: 999;
        >i {
            font-size: 30px;
        }
    }
    background-color: #fff;
    box-sizing: border-box;
    height: calc(100% - 51px);
    overflow-y: auto;
    &_swiper {
        height: 225px;
        img {
            height: 225px;
            margin: 0 auto;
            display: block;
        }
        margin-bottom: 20px;
    }
    &_header {
        padding: 0 15px;
        box-sizing: border-box;
    }
    &_title {
        font-size: 20px;
        color: #333;
    }
    &_infoList {}
    &_infoSingle {
        font-size: 16px;
        color: #666;
        margin-top: 10px;
    }
    &_typeList {
        margin-top: 15px;
        margin-bottom: 30px;
        display: flex;
        flex-wrap: wrap;
    }
    &_typeSingle {
        margin-right: 10px;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        color: #999;
        font-size: 16px;
        background-color: #efefef;
        border-radius: 3px;
    }
    &_article {
        position: relative;
        margin: 10px 0;
        padding: 10px 15px;
        padding-bottom: 20px;
        box-sizing: border-box;
        line-height: 20px;
        font-size: 16px;
        color: #666;
        >h4 {
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
        }
        &:after {
            content: "";
            display: block;
            position: absolute;
            top: -10px;
            left: -15px;
            height: 10px;
            width: calc(100% + 30px);
            background-color: #f1f1f1;
        }
        &:before {
            content: "";
            display: block;
            position: absolute;
            bottom: -10px;
            left: -15px;
            height: 10px;
            width: calc(100% + 30px);
            background-color: #f1f1f1;
        }
    }
    &_comment {
        margin-bottom: 10px;
        font-size: 16px;
        >h4 {
            padding: 0 15px;
            box-sizing: border-box;
            height: 37.5px;
            line-height: 37.5px;
            font-size: 18px;
            color: #333;
        }
    }
    &_commentLst {}
    &_commentSingle {
        display: flex;
        padding: 10px 15px;
        border-top: 1px solid #efefef;
        position: relative;
        >img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
        >time {
            position: absolute;
            font-size: 16px;
            color: #999;
            top: 10px;
            right: 15px;
        }
    }
    &_commentSingleContent {
        padding-right: 15px;
        box-sizing: border-box;
        >h4 {
            font-size: 16px;
            color: #666;
            margin-bottom: 10px;
        }
        >p {
            font-size: 16px;
            color: #333;
            line-height: 20px;
        }
    }
    &_commentBox {
        margin-top: 10px;
        padding: 20px 0;
        box-sizing: border-box;
        position: relative;
        &:after {
            content: "";
            display: block;
            position: absolute;
            top: -10px;
            left: -15px;
            height: 10px;
            width: calc(100% + 30px);
            background-color: #f1f1f1;
        }
    }
    &_commentMore {
        width: 100px;
        height: 30px;
        border: 1px solid #2196f3;
        border-radius: 5px;
        line-height: 28px;
        text-align: center;
        color: #2196f3;
        font-size: 14px;
        display: block;
        margin: 0 auto;
    }
    &_bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        border-top: 1px solid #efefef;
        background-color: #fff;
    }
    &_bottomList {
        display: flex;
        height: 100%;
    }
    &_bottomSingle {
        width: 120px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-right: 1px solid #efefef;
        color: #333;
        font-size: 16px;
        >i {
            margin-bottom: 5px;
            font-size: 20px;
        }
        &--coll {
            color: #ff0000;
        }
    }
    &_addBtn {
        line-height: 50px;
        height: 100%;
        flex-grow: 1;
        flex-shrink: 1;
        background-color: #2196f3;
        color: #fff;
        font-size: 20px;
    }
}

.bookMain_info_noStork {
    position: absolute;
    left: 0;
    top: 0;
    height: 120px;
}
</style>
<style lang="scss">
.bookMain_info {
    .active {
        background-color: #2196f3 !important;
    }
}
</style>


<template lang="pug">
div
    //- 首页主体
    .bookMain_info
        .bookMain_info_back(@click="routerBack")
            i.iconfont &#xe7a7;
        b-scroll(
          :data="commentList",
          @pulldown="getDefault",
          pulldown=true,
          ref="scollView"
          )    
            //- 商品简介轮播图 -->
            img(v-show="data.has_stock==0",src="../../../assets/img/plan/noStork.png").bookMain_info_noStork
            swiper.bookMain_info_swiper(dots-position="center" height="225px" :aspect-ratio="225/225" width="100%")
                swiper-item.swiper-demo-img( v-for="(item, index) in data.img_main" :key="index")
                    img(:src="imgFormat(item)")
            .bookMain_info_header
                h3.bookMain_info_title {{data.title}}
                ul.bookMain_info_infoList
                    li.bookMain_info_infoSingle 作者：{{data.author}}
                    li.bookMain_info_infoSingle 出版社：{{data.publisher}}
                    li.bookMain_info_infoSingle 出版时间：{{data.pub_date}}
                ul.bookMain_info_typeList
                    li(v-show="data.age_range").bookMain_info_typeSingle {{data.age_range}}
                    li.bookMain_info_typeSingle(v-for="item in data.cat_arr") {{item}}
            .bookMain_info_article
                h4 简介
                |{{data.summary}}
            .bookMain_info_comment
                h4 用户评价
                ul.bookMain_info_commentLst
                    li(v-for="item,index in commentList",v-show="(haveMoreComment&&index<=4) || !haveMoreComment").bookMain_info_commentSingle
                        img(:src="item.userface")   
                        .bookMain_info_commentSingleContent
                            h4 {{item.username}}     
                            p {{item.comment_content}}
                        time {{item.comment_create_time | dataform}}
                .bookMain_info_commentBox
                    button(v-show="haveMoreComment",@click="showAll").bookMain_info_commentMore 查看更多评价
        .bookMain_info_bottom
            ul.bookMain_info_bottomList
                li(@click="addColl(data)").bookMain_info_bottomSingle
                    i.iconfont(v-show="data.is_collected!=1") &#xe605;
                    span(v-show="data.is_collected!=1") 收藏
                    i.iconfont.bookMain_info_bottomSingle--coll(v-show="data.is_collected==1") &#xe8b6;
                    span(v-show="data.is_collected==1") 已收藏
                li(@click="bookCar").bookMain_info_bottomSingle
                    i.iconfont &#xe615;
                    span 借书架
                button.bookMain_info_addBtn(@click="addCar(data)",v-show="data.is_shelf!=1") 加入书架
                button.bookMain_info_addBtn(@click="addCar(data)",v-show="data.is_shelf==1") 已加入书架



</template>

<script>
import BScroll from 'vue-betterscroll';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';
import { Cell, CellBox,Swiper,SwiperItem, CellFormPreview, Group } from 'vux';
export default {
  components: {
        Group,
        Cell,
        CellFormPreview,
        CellBox,
        BScroll,
        Swiper,
        SwiperItem,
  },
  data () {
    return {
        id:"",//图书id
        data:"",
        commentList:[],
        haveMoreComment:false,

    }
  },
   computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
  methods:{
      /* 滚动列表重置刷新 */
        scollRefresh() {
            this.$refs.scollView.scroll.refresh();
        },
      showAll(){
          this.haveMoreComment=false;
          setTimeout((res)=> {
               this.scollRefresh();
          }, 20);
      },
      /* 路由回退 */
        routerBack() {
            this.$router.goBack();
        },
        /**@argument
         * 加入购物车
         */
        addCar(item){
           if(!this.getUserInfoUserId){
                this.$router.push({
                    path:"/login"
                });
                return false;
            }
            if(item.is_shelf==0){
                API.book.addCar({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                book_ids:[item.book_id]
            }).then((res) => {
                if (res.body.code == 200) {
                   item.is_shelf=1;
                   this.$vux.toast.show({
                    text: '已加入借书架'
                });
                }else if(res.body.code == 250){
                    this.$router.push({
                        path:"/book_bookCard"
                    })
                }
            })
            }else{
               
            }
             
        },
      /**@argument
       * 添加收藏
       */
      addColl(item){
          if(!this.getUserInfoUserId){
                this.$router.push({
                    path:"/login"
                })
                return false;
            }
            if(item.is_collected==0){
                API.book.addColl({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                book_ids:[item.book_id]
            }).then((res) => {
                if (res.body.code == 200) {
                   item.is_collected=1;
                   this.$vux.toast.show({
                    text: '收藏成功'
                });
                }
            })
            }else{
                API.book.cancelColl({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
                book_ids:[item.book_id]
            }).then((res) => {
                if (res.body.code == 200) {
                   item.is_collected=0;
                   this.$vux.toast.show({
                    text: '取消收藏'
                });
                }
            })
            }
      },
      /**@argument
       * 进入借书架
       */
      bookCar(){
          this.$router.push({
              path:'/book/main/car'
          })
      },
      /**@argument
       * 获取基本数据
       */
      getDefault(id){
          API.book.getBookDetail({
              book_id:id,
              user_id: this.getUserInfoUserId,
              token: this.getUserInfoToken,
              start_date:window.startTime
          }).then((res)=>{
              if(res.body.code==200){
                  this.data=res.body.data;
              }
          }).then(()=>{
              this.getComment();
          });
      },
      /**@argument
       * 获取评论列表
       */
      getComment(){
          API.book.getBookComment({
              book_id:this.id,
          }).then((res)=>{
              if(res.body.code==200){
                  /**@argument
                   * 字符串截取1-5;
                   */
                  if(res.body.data.length>5){
                      this.haveMoreComment=true;
                  }
                  this.commentList=res.body.data;
              }
          });
      }
  },
  activated () {
      this.id=this.$route.params.id;
      this.getDefault(this.id);
      let domOBJ=document.querySelector(".wapper_content");
      domOBJ.style.transform="translate(0px, 0px) translateZ(0px)";
  }
  
}
</script>
