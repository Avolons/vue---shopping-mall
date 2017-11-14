 
<style lang="scss">
    /* 默认状态下的展示样式 */
    .common_type_default{
        .book_common{
            &_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            }
            &_single{
                margin-top: 8px;
                width: calc(50% - 4px);
                background-color: #fff;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: 7.5px 7.5px 10px 7.5px;
            }
            &_imgBox{
                width: 100%;
                height: 0;
                padding-top: 100%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
                >img{
                    position: absolute;
                    height: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0;
                    display: block;
                }
            }
            &_title{
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
                margin-top: 7.5px;
                line-height: 18px;
                height: 36px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                text-align: left;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            &_typeList{
                display: flex;
                // justify-content: space-between;
                align-items: center;
                >li{
                    background-color: #eee;
                    border-radius: 5px;
                    padding: 3px 3px;
                    margin-right: 10px;
                    font-size: 13px;
                    color: #999;
                    font-family: 'PingFang-SC-Regular';
                } 
            }
            &_iconColl{
                 &--selected{
                    color: #2196f3 !important;
                }
                width: 50px;
                display: flex;
                justify-content: flex-end;
                flex-grow: 0;
                flex-shrink: 0;
                box-sizing: border-box;
                padding-right: 12px;
                flex:auto;
                 >i{margin-left: 10px;
                    color: #999;
                    font-size: 26px;
                }
            }
        }
    }
    /* 热门图书展示样式 */
    .common_type_else{
       .book_common{
            &_single{
                background-color: #fff;
                box-sizing: border-box;
                border-bottom: 1px solid #f3f3f3;
                padding: 15px;
                &:after{
                    content: "";
                    display: block;
                    clear: both;
                }
            }
            &_imgBox{
                width: 110px;
                height: 110px;
                float: left;
                margin-right: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                >img{
                    height:100%;
                }
            }
            &_title{
                font-size: 18px;
                color: #333;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: left;
            }
            &_info{
                font-size: 16px;
                line-height: 20px;
                color: #666;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            &_typeList{
                margin-top: 15px;
                display: flex;
                align-items: center;
                >li{
                    background-color: #eee;
                    border-radius: 3px;
                    margin-right: 10px;
                    font-size: 16px;
                    height: 20px;
                    line-height: 20px;
                    padding: 0 5px;
                    color: #999;
                } 
            }
            &_iconColl{
                &--selected{
                color: #2196f3 !important;
                }
                width: 50px;
                display: flex;
                flex-grow: 1;
                justify-content: flex-end;
                box-sizing: border-box;
                padding-right: 10px;
                 >i{
                    color: #999;
                    font-size: 26px;
                    line-height: 20px;
                    margin-left: 20px;
                }
            }
        } 
    }
    /* 系列丛书展示样式 */
    .common_type_last{
       .book_common{
           &_list{
                display: flex;
                flex-wrap: wrap;
                padding: 10px;
                box-sizing: border-box;
            }
            &_single{
                background-color: #fff;
                box-sizing: border-box;
                margin-bottom: 15px;
                width: 33.33%;
                padding: 0 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &_imgBox{
                width: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
                overflow: hidden;
                background-color: #f1f1f1;
                >img{
                    width: 100%;
                }
            }
            &_title{ font-size: 14px;
                color: #666; height: 32px;
                line-height: 16px; margin-top: 7.5px;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-align: center;
            }
        } 
    }
    .book_common_single{
        position: relative;
    }
    .book_common_noStork{
        position: absolute;
        left: 0;
        height: 80px;
        top:0;
    }
</style>
 

 <template lang="pug">
    //-列表大概会有三种状态，通过class来直接控制样式，不使用三个列表
    div(:class="{'common_type_default':type==0,'common_type_else':type==1,'common_type_last':type==2,}")
        .book_common_list
            .book_common_single(v-for="item,index in commonBookList",@click="enterInfo(item.book_id,item.series,item.title)")
                img(v-show="item.has_stock==0",src="../../../assets/img/plan/noStork.png").book_common_noStork
                .book_common_imgBox
                    img(:src="imgFormat(item.img_medium)",alt="img",@load="refresh")
                h4.book_common_title {{item.title}}
                p(v-show="item.summary").book_common_info  {{item.summary}}
                ul(v-show="type!=2").book_common_typeList
                    li.book_common_typeSingle {{item.age_range}}
                    li.book_common_typeSingle(v-show="item.category") {{item.category}}
                    .book_common_iconColl
                        i(class="iconfont",v-show="item.is_collected!=1",@click.stop="addColl(item)") &#xe621;
                        i(class="iconfont book_common_iconColl--selected",v-show="item.is_collected==1",@click.stop="addColl(item,index)") &#xe61a;
                        i(class="iconfont",:class="{'book_common_iconColl--selected':item.is_shelf==1}",@click.stop="addCar(item)") &#xe615;
 </template>
 
 
 <script>
import { API, getQuery } from '../../../services';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
          
        }
    },
    props: {
        commonBookList: Array,
        type: String,
        refresh:Function
    },
     computed: {
        ...mapGetters([
            'getUserInfoUserId',
            'getUserInfoToken',
        ]),
    },
    methods: {
        /**@argument
         * 加入收藏
         */
        addColl(item,index){
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
                if(this.$route.fullPath=="/book/main/collect"){
                    this.commonBookList.splice(index,1);
                }
                }
            })
            }
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
                    text: '成功加入借书架'
                });
                }else if(res.body.code == 250){
                    this.$router.push({
                        path:"/book_bookCard"
                    })
                }
            })
            }else{
                this.$vux.toast.show({
                    text: '已加入借书架'
                });
            }
             
        },
        /**
         * 返回当前设备类型，1：安卓 2：ios 3：H5
         * @returns 
         */
        typeCheck(){
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isAndroid){
                return 1;
            }else if(isiOS){
                return 2;
            }else{
                return 3;
            }
        },
        /* 进入商品详情 */
        enterInfo(id,series="",name="") {
            /* 原生事件互动 */
            if(localStorage.getItem('isAPP')==1){
                Android.goodClick(id);  
            }
            else if(localStorage.getItem('isAPP')==2){
                window.open("goodClick?goods_id="+id);
            }else{
                /* 列表位置回滚 */
                let scroll=document.querySelector(".wapper_content").style.transform.split(" ")[1].split("p")[0];
                window.stopReload=true;
                localStorage.setItem("bookScroll",scroll);
                if(this.type!=2){
                    this.$router.push({
                        name:"B_bookInfo",
                        params:{
                          id
                        }
                    })
                   /*  window.location.href="/#/book_bookInfo/"+id; */
                }else{
                    this.$router.push({
                        path:"/book_bookSeriesList",
                        query:{
                            series:series,
                            name:name
                        }
                    })
                    
                }
                
            }
        },
    },
    
    activated () {
        /*setTimeout(()=>{
            if(this.$route.fullPath.split("/"[1])!="book_bookInfo"){
                document.querySelector(".wapper_content").style.transform=localStorage.getItem("bookScroll");    
                localStorage.setItem("bookScroll","");
            }
        },100); */
    }
}
</script>
 
 