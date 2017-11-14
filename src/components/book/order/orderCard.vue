
<style lang="scss" scoped>
.orderInfon {
    &_main {
        height: calc(100% - 101px);
        box-sizing: border-box;
        overflow-y: auto;
        background-color: #f3f3f3;
        .weui-cells {
            margin: 0;
        }
        .weui-cell:before {
            left: 0;
        }
        .main_since_single {
            margin: 0;
            border-top: 1px solid #eee;
        }
        &_address {
            background-color: #fff;
            .weui-cell {
                &:nth-of-type(1) {
                    height: 54px;
                }
                &:nth-of-type(2) {
                    height: 34px;
                }
            }
            .nodefault {
                height: 34px !important;
            }
        }
        &_timeRange {
            box-sizing: border-box;
            padding: 0 15px;
            height: 44px;
            line-height: 44px;
            color: #272727;
            font-size: 15px;
            background-color: #fff;
            margin-top: 10px;
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
        }
        &_plan {
            height: 44px;
            .weui-cell {
                padding: 12px 15px;
            }
            .weui-cells {
                &:after {
                    display: none;
                }
            }
        }
    }

    &_footer {
        z-index: 999;
        height: 50px;
        line-height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        &_price {
            font-size: 18px;
            color: #333;
            display: flex;
            padding: 5px 15px;
            box-sizing: border-box;
            line-height: 20px;
            flex-wrap: wrap;
            >span{
                height: 20px;
                color: #333;
                &:last-of-type{
                    color: #ff0000;
                }
            }
            >p{
                width: 100%;
                height: 20px;
                font-size: 14px;
                    color: #999;
            }
        }
        &_btn {
            font-size: 18px;
            color: #fff;
            line-height: 50px;
            width: 120px;
            text-align: center;
            height: 50px;
            background-color: #2196f3;
        }
    }
}

.bookMain_carContent_list {
    background-color: #f1f1f1;
}
.bookMain_carContent_message{
    padding: 15px;
    box-sizing: border-box;
    >h3{
        font-size: 16px;
        color: #666;
        margin-bottom: 15px;   
    }
    >p{
        font-size: 15px;
        line-height: 20px;
        color: #666;
        margin-bottom: 15px;   
        >a{
            color: #2196f3;
        }
    }
    >span{
        line-height: 18px;
        font-size: 14px;
        color: #999;
    }
}
.bookMain_carContent_single {
    box-sizing: border-box;
    background-color: #fff;
    padding: 10px 15px;
    padding-bottom: 5px;
    position: relative;
    margin-bottom: 10px;
    >h2{
        font-size: 16px;
        color: #333;
        line-height: 35px;
        display: flex;
        align-items: center;
        >i{
            font-size: 18px;
            margin-left: 10px;
            background-color: #999;
            color: #fff;
            line-height: 15px;
            height: 18px;
            border-radius: 50%;
        }
    }
    &_content{
        padding: 15px 10px;
        border-radius: 5px;
        border: 1px solid #dadada;
        margin-bottom: 10px;
        position: relative;
        >label{
            position: absolute;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

        }
    }
    &_bottom{
        display: flex;
        justify-content: flex-end;
        font-size: 14px;
        color: #ff0000;
        >h4{
            color: #999;
            margin-left: 15px;
            text-decoration: line-through;
        }
    }
    &_top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12.5px;
        >input{
            margin-right: 10px;
        }
        >h4{
            font-size: 16px;
            color: #999;
        }
        >h3{
            flex-grow: 1;
            text-align: right;
            color: #999;
            >span{
                color: #2196f3;
            }
        }
    }
}
.bookMain_carContent_price{
    height: 44px;
    border-bottom: 1px solid #dadada;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    align-items: center;
    background-color: #fff;
    font-size: 16px;
    color: #333;
    >span{
        color: #ff0000;
    }
}
.bookMain_carContent_despote{
    height: 44px;
    border-bottom: 1px solid #dadada;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
     align-items: center;
     background-color: #fff;
     font-size: 16px;
    color: #333;
    >h3{
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        color: #ff0000;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 14px;
        align-items: center;
        >span:last-of-type{
            font-size: 16px;
        }
    }
    >i{
        color: #999;
        font-size: 18px;
    }
}
.orderInfo_main_content {
    height: calc(100% - 107px);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
</style>

<template lang="pug">
    div
        header-cop(:heder_title="title")
        div.orderInfon_main
            b-scroll(
                :data="data.card",
                ref="scollView"
                    )
                div.orderInfo_main_content
                    ul.bookMain_carContent_list    
                        li(v-for="ite,index in data.card").bookMain_carContent_single
                            h2 {{ite.name}} 
                                i(@click="enterInfo(ite)").iconfont &#xe602;
                            .bookMain_carContent_single_content(v-for="item,inde in ite.child",@click="itemChange(index,inde)")
                                .bookMain_carContent_single_top
                                    span(:class="{'mui-checkbox--select':item.click==1}").mui-checkbox 
                                    h4 {{item.type==1?1:item.type==2?3:item.type==3?6:12}}个月
                                    h3 每次
                                        span {{item.one_rent_num}}
                                        |本  可借
                                        span {{item.total_use_times}}
                                        |次
                                .bookMain_carContent_single_bottom
                                    h3 {{item.price | currency('￥')}}
                                    h4 {{item.origin_price | currency('￥')}}
                    .bookMain_carContent_price
                        |价格 
                        span  {{returnPrice | currency('￥')}}
                    .bookMain_carContent_despote
                        |押金
                        h3(v-show="zmScore==0") 
                            span 芝麻信用650分以上免押金
                            span {{returnDesopte | currency('￥')}}
                        h3(v-show="zmScore!=0")  
                            span 芝麻信用已为您减免押金{{returnDesopte}}元
                            span ￥0.00
                        i.iconfont(@click="authorization") &#xe6d7;
                    .bookMain_carContent_message
                        h3 说明
                        p 订阅计划一旦购买生效使用后，不可退订。购买前请详细阅读
                            router-link(to="/book_rule?type=H5",class="") 订阅计划使用规则与政策

            footer.orderInfon_footer
                div.orderInfon_footer_price 
                    span 应付总额：
                    span {{returnTotal | currency('￥')}}  
                    p 押金可退: {{zmScore>650?0:returnDesopte | currency('￥')}}
                button(@click.stop="buygoods", type="button").orderInfon_footer_btn 提交订单
            toast(v-model="toast",type="success")  {{confrim}}
</template>
<script>
import { XHeader, Cell, Group, XTextarea, dateFormat, Toast, CellBox } from 'vux';
import { mapGetters } from 'vuex'
import { API, getQuery } from '../../../services';
import HeaderCop from '../common/header.vue';
import BScroll from '../common/scrollView.vue';
export default {
    components: {
        XHeader,
        Group,
        Cell,
        XTextarea,
        Toast,
        CellBox,
        BScroll,
        HeaderCop
    },
    data() {
        return {
            confrim: "请选择地址",
            /* 提示信息 */
            toast: false,
            /* 是否拥有默认数据 */
            haveDefault: false,
            /* 订单详情数据 */
            data: {
                card:[
                {
                    name:"小状元计划说明",
                    select:[],
                    child:[],
                },
                {
                   name:"小博士计划说明",
                    select:[],
                    child:[],
                }
            ]
            },
            title: "结算",
            zmScore:0
        }
    },
    computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
            'getAddress',
            'getNamePhone',
            'getIsCertify'
        ]),
        returnDesopte(){
            let couter=0;
             for (let item of this.data.card) {
                 for (const ite of item.child) {
                     if(ite.click==1){
                         couter+=ite.deposit-0;
                     }
                 }
                
             }   
             return couter;   
        },
        returnPrice(){
             let couter=0;
              for (let item of this.data.card) {
                 for (const ite of item.child) {
                     if(ite.click==1){
                         couter+=ite.price-0;
                     }
                 }
                
             }   
             return couter;
        },
        returnTotal(){
           if(this.zmScore==0){
               return this.returnPrice+this.returnDesopte;
           }else{
               return this.returnPrice;
           }
        }
    },
    methods: {
        itemChange(ite,index){
           this.data.card[ite].child[index].click=this.data.card[ite].child[index].click||0;
           this.data.card[ite].child[index].click=1-this.data.card[ite].child[index].click;
           let currentData=this.data;
           this.data={};
           this.data=currentData;
        },
        /* 进入会员卡说明页面 */
        enterInfo(item){
            localStorage.setItem("cardInfo",JSON.stringify(
                item
            ));
            this.$router.push({
                path:'/book_planInfo'
            })
        },
        /* 芝麻信用授权 */
        authorization(){
            this.$router.push({
                path:'/authInfo'
            })
        },
        /**@argument
         * 获取芝麻信用分
         */
         userZMScore() {
                API.person.getUserZMScore({
                    user_id: this.getUserInfoUserId,
                    zmtype:2//添加从绘本进入芝麻信用标记字段
                }).then((res) => {
                    // console.log(res);
                    if (res.body.code == 200) {
                        if(res.body.msg == "获取成功"){
                            this.zmScore = res.body.data.zmscore;
                        }
                    }
                })
            },
        /**@argument
         * 选择框改变
         */
        /**@argument
         * 滚动列表重置刷新
         */
        scollRefresh() {
            this.$refs.scollView.scroll.refresh();
        },
        routerBack() {
            this.$router.goBack();
        },
        /**@argument
         * 提交订单
         */
        buygoods() {
            if(this.getIsCertify!=2&&this.getIsCertify!=4){
                this.$router.push({
                path:'/authInfo'
            });
                return false;
            }
            let resultList=[];
            for (let item of this.data.card) {
                for (const ite of item.child) {
                        if(ite.click==1){
                             resultList.push(ite);
                        }
                }
             }   
             if(resultList.length==0){
                this.confrim = "您未选择任何计划";
                this.toast = true;
                return false;
            }
            if(resultList.length>4){
                this.confrim = "最多只能购买4个计划";
                this.toast = true;
                return false;
            }
            localStorage.setItem('resultList',JSON.stringify(resultList));
            window.location.href="/?#/book_bookCardInfo";
        },
        /**@argument
         * 数据格式化
         */
        dataForm(data){
            let list=[
                {
                    name:"",
                    select:[],
                    child:[],
                },
                {
                   name:"",
                    select:[],
                    child:[],
                }
            ];
            for (let item of data) {
                if(item.rank==1){
                    list[0].child.push(item);
                    list[0].name=item.name;
                } else{
                    list[1].child.push(item);
                    list[1].name=item.name;
                }
            }
            this.data.card=list;
        },
        /**@argument
         * 数据初始化
         */
        Initialization() {
            API.book.getCardList({
                user_id: this.getUserInfoUserId,
                token: this.getUserInfoToken,
            }).then((res) => {
                if (res.body.code == 200) {
                    this.data = res.body.data;
                    this.dataForm(this.data.card);
                }else{
                    alert(JSON.stringify(res.body));
                }
            }).then(()=>{
                this.userZMScore();
            });
        },
      

    }, mounted() {
        this.Initialization();
    },
    activated() {
              
    }
} 
</script>