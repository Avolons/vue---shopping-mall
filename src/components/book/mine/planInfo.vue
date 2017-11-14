
<style lang="scss" scoped>
    .bookMain_list{
        background-color: #f1f1f1 !important;
        
    }
    .bookMain_cardList{
         >a{
            color: #2196f3;
            line-height: 30px;
            text-align: right;
            display: block;
            padding-right: 15px;
            box-sizing: border-box;
        }
    }
   
    .bookMain_cardList_single{
        font-size: 17px;
        color: #333;
        padding: 15px 25px;
        box-sizing: border-box;    
        background-color: #fff;
        margin-bottom: 15px;    
        >h3{
            color: #000;
            text-align: center;
            margin-bottom: 15px;
        }
        >div{
            border: 1px solid #999;
            border-bottom: none;
            height: 35px;
            display: flex;
            >span{
                display: block;
                height: 100%;
                line-height: 35px;
                text-align: center;
                &:first-of-type{
                    flex-grow: 0;
                    width: 150px;
                    border-right: 1px solid #999;
                    box-sizing: border-box;
                }
                &:last-of-type{
                    width: calc(100% - 150px);
                }
            }
            &:last-of-type{
                border: 1px solid #999;
                >span{
                    &:last-of-type{
                    color: #f80000;
                }
                }
            }
           
        }
    }
</style>


<template lang="pug">
    //- 首页主体
    .bookMain_list
        header-cop(:heder_title="title")
        .bookMain_listContent
            b-scroll(
            :data="data.child",
            ref="scollView"
            )
                ul.bookMain_cardList
                    router-link(to="/book_rule?type=H5",class="") 订阅计划使用规则与政策
                    li(v-for="item in data.child").bookMain_cardList_single
                        h3 {{item.name}}
                        div 
                            span  计划名称
                            span  {{item.name}}
                        div 
                            span  有效期
                            span  {{item.type==1?1:item.type==2?3:item.type==3?6:12}}个月
                        div 
                            span 总借阅次数
                            span  {{item.total_use_times}}次
                        div 
                            span 每月借阅次数
                            span {{item.month_use_times}}次
                        div 
                            span 每次借阅数量
                            span {{item.one_rent_num}}本
                       
                       
</template>

<script>
import HeaderCop from '../common/header.vue';
import BookList from '../common/bookList.vue';
import BScroll from '../common/scrollView.vue';
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
        title:"小状元计划",
        data:[]
    }
  },
  methods:{

  },
  activated () {
        this.data= JSON.parse(localStorage.getItem('cardInfo'));  
        this.title=this.data.name;    
  }
}
</script>
