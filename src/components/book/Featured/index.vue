<style lang="scss" >
.feature_content {
  height: calc(100% - 50px);
  overflow-y: auto;
}

.y-header {
  height: 50px; // position: fixed;
  width: 100%;
  .left-arrow::before {
    border-color: #1e1e1e!important;
  }
  background: #fff;
  .vux-header-title {
    span {
      font-size: 20px;
      color: #1e1e1e;
    }
  }
  span {
    color: #2196f3;
    font-size: 15px;
  }
}

.y-content {
  &:not(:first-of-type){
    margin-top: 10px;
  }
}
.feature_img{
  width: 100%;
  display: block;
}
</style>
<template >
  <div>
    <x-header :left-options="{backText:'',preventGoBack:'true'}" @on-click-back="routerBack" class="y-header" :title="title">
      <span slot="right" @click="more">查看更多</span>
    </x-header>
    <div class="feature_content">
      <b-scroll :data="list" ref="scollView">
        <div v-for="(item,i) in list" class="y-content">
          <img :src="imgFormat(item.img)" class="feature_img" @load="scollRefresh" @click="goSeriesList(item.type,item.condition,item.name)">
        </div>
      </b-scroll>
    </div>

  </div>
</template>
<script>

import { XImg, XHeader } from 'vux';
import BScroll from 'vue-betterscroll';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';
export default {
  components: {
    XHeader,
    XImg,
    BScroll,
  },
  computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
  data() {
    return {
      list: [
        
      ],
      title: "绘本精选",
      id: "",
    }
  },
  activated() {
    this.id = this.$route.query.id;
    this.getData();
  },
  mounted() {
 
  },
  methods: {
    goSeriesList(type,series,name){
      if(type==1){
        this.$router.push({
                        path:"/book_bookSeriesList",
                        query:{
                            series:series,
                            name:name
                        }
                    })
      }else{
         let param={
                common_params:[
                    
                ],
                title:"",
                order_method:0,
                page_number:10,
                user_id:this.getUserInfoUserId,
                token:this.getUserInfoToken,
                page :1
            }  
        param.common_params=series;
        this.$router.push({
                    path:'/book_bookSearchRe',
                    query:{
                        param:JSON.stringify(param)
                    }
                })
      }
      
    },
    getData() {
      API.book.getFeatured({
        channel_id: this.id
      }).then((res) => {
        if (res.body.code == 200) {
          this.list=res.body.data;
        }
      });
    },
    /* 滚动列表重置刷新 */
    scollRefresh() {
      this.$refs.scollView.scroll.refresh();
    },
    more() {
      this.$router.push('/book/main')
    },
    routerBack() {
      this.$router.goBack();
    },
    

  }
}
</script>

