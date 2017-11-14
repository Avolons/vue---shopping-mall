
<style lang="scss" scoped>
 
    .bookMain_search{
        background-color: #f1f1f1 !important;
        &_content{
            height: calc(100% - 100px);
            padding: 0 15px;
            box-sizing: border-box;
            padding-right: 5px;
        }      &_header{
            margin: 15px 0;
            margin-bottom: 0;
            height:50px;
            box-sizing: border-box;
            background-color: #eee;
            border-radius: 4px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            width:calc(100% - 10px);
            >i{
                color: #666;
                font-size: 26px;
                margin-right: 7.5px;
            }
            >input{
                flex-grow: 1;
                border: none;
                height: 100%;
                box-sizing: border-box;
                padding: 5px;
                font-size: 16px;
                color: #999;
                background-color: transparent;
            }
        }
        &_title{
            margin-bottom: 15px;
            color: #2196f3;
            font-size: 16px;
            >span{
                margin-left: 15px;
                color: #999;
                font-size: 16px;
            }
            &:first-of-type{
                margin-top: 15px;
            }
        }
        &_list{
            margin-bottom: 5px;
            display: flex;
            flex-wrap: wrap;
        }
        &_single{
            border-radius: 15px;
            width: calc(25% - 15px);
            margin-right: 15px;
            padding: 5px 0;
            background-color: #e6e6e6;
            color: #999;  font-size: 13px;
            margin-bottom: 10px;
            text-align: center;
            &--sel{
                background-color: #2196f3;
                color: #fff;
                border-color: #2196f3;
            }
        }
        &_fixed{
            position: absolute;
            bottom: 0;
            left: 0;
            height: 50px;
            display: flex;
            width: 100%;
            >button{
                width: 50%;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 18px;
                color: #fff;
                background-color: #2196f3;
            }
            >.bookMain_search_reset{
                background-color: #55b4ff;
            }
            .bookMain_search_btn{
            height: 50px;
            width: 100%;
            margin-top: -10px;
            border-radius: 25px;
            background-color: #2196f3;
            line-height: 50px;
            text-align: center;
            font-size: 18px;
            color: #fff;
            display: block;
    }
        }
    }
    
</style>


<template lang="pug">
    //- 首页主体
    .bookMain_serch
        header-cop(:heder_title="title")
        .bookMain_search_content
            b-scroll(
                :data="typeList",
                pulldown=true,
                ref="scollView"
            )
                div(v-show="isbook").bookMain_search_header
                    i.iconfont &#xe60c;
                    input(type="text",v-model="searchValue",placeholder="请输入绘本名称") 
                template(v-for="item,index in typeList")
                    h3(v-show="!isbook||(isbook&&item.condition_id!=2)").bookMain_search_title {{item.title}}
                        span {{item.info}}
                    ul(v-show="!isbook||(isbook&&item.condition_id!=2)").bookMain_search_list
                        li(@click="typeClick(ite,item)",v-for="ite in item.data",:class="{'bookMain_search_single--sel':ite.click==1}").bookMain_search_single {{ite.name}}    
           
            toast(v-model="toast",type="success") {{confrim}}
        .bookMain_search_fixed
            button(v-show="isbook",type="button",@click="enterInfo",class="bookMain_search_btn") 开始选书
            button(v-show="!isbook",type="button",@click="resetParam").bookMain_search_reset 重置条件
            button(v-show="!isbook",type="button",@click="enterInfo") 开始选书
</template>

<script>
import HeaderCop from '../common/header.vue';
import BookList from '../common/bookList.vue';
import BScroll from '../common/scrollView.vue';
import { mapGetters } from 'vuex';
import { API, getQuery } from '../../../services';
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem,Toast } from 'vux';
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
    BScroll,
    Toast
  },
  computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
  data () {
    return {
        age:{
            start:0,
            end:0
        },
        iconList:[],//关键词列表
        /* 上拉加载更多 */
        title:"选书",
        searchValue:"",//input选择框
        slectNumber:0,
        typeList:[],//类型列表
        confrim:"",
        toast:false,
        isbook:false,
    }
  },
  methods:{
      /**
       * 获取所有静态属性
       */
      getTypes(){
          API.book.searchCondition().then((res)=>{
              if(res.body.code==200){
                  this.typeList=res.body.data;
              }
          })
      },
      typeClick(item,ite){
            let haveClick=0;
            for (const i of ite.data) {
                if(i.click==1){
                    haveClick++;
                }
            }
            /* 获取已经点击数 */
            if(haveClick==ite.max_pick&&!item.click&&ite.max_pick>1){
                this.confrim="最多只能选择"+ite.max_pick+"项";
                this.toast=true;
                return false;
            }  
            item.click=item.click||0;
            if(ite.max_pick==1){
                if(item.click==0){
                    for (const it of ite.data) {
                        it.click=0;
                    }
                    item.click=1;
                }else{
                    item.click=0;
                }
            }else{
                /* 切换模式 */
                
                item.click=1-item.click;
            }
            



            let cloneData=this.typeList;
            this.typeList=[];
            this.typeList=cloneData;
      },
      /**
       * 重置参数
       */
      resetParam(){
          for (const item of this.typeList) {
                for (const ite of item.data) {
                        ite.click=0;
                }
          }
        this.searchValue="";
        let cloneData=this.typeList;
        this.typeList=[];
        this.typeList=cloneData;
      },
      /**@argumexi 
       * 进入详情
      */
      enterInfo(){
          /**@argument
           * 搜索参数初始化
           */
          this.iconList=[];
            let param={
                common_params:[
                    
                ],
                title:this.searchValue,
                order_method:0,
                page_number:10,
                user_id:this.getUserInfoUserId,
                token:this.getUserInfoToken,
                page :1
            }  

            
            /* 智能选书选项内容拼接 */
            /**双循环初始化数据 */
            for (let index = 0; index < this.typeList.length; index++) {
                param.common_params.push({
                        condition_id:this.typeList[index].condition_id,   
                        checked_ids:[],
                });
                for (const ite of this.typeList[index].data) {
                    if(ite.click==1){
                        param.common_params[index].checked_ids.push(ite.param_id);
                        this.iconList.push(ite.name);
                    }
                }
            }


            if(this.$route.fullPath=='/book_bookSearch'){
                param.page_number=10;
                param.common_params=JSON.stringify(param.common_params);
                this.$router.push({
                    path:'/book_bookSearchRe',
                    query:{
                        param:JSON.stringify(param)
                    }
                })
            }else{
                for (const item of param.common_params) {
                        if(item.condition_id==2){
                            if(item.checked_ids.length==0){
                                this.confrim="请选择图书本书";
                                this.toast=true;
                                return false;
                            }
                            param.page_number=item.checked_ids[0];
                        }
                }
                param.common_params=JSON.stringify(param.common_params);
                this.$router.push({
                    path:'/book_bookPerSearchRe',
                    query:{
                        param:JSON.stringify(param),
                        icon: JSON.stringify(this.iconList)
                    }
                })
            }
      }

      
    
  },
  mounted () {
    this.getTypes();
  },
  activated () {
    if(this.$route.fullPath=='/book_bookSearch'){
        this.title="选书";
        this.isbook=true;
    }else{
        this.title="智能选书";
        this.isbook=false;
    }

  }
}
</script>
