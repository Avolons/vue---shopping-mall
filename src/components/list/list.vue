
<style lang="scss">
body {
    background-color: #f3f3f3;
    .weui-tabbar {
        background-color: #fff;
    }
}

.list {
    &_listbox {
        position: fixed;
        width: 100%;
        height: calc(100% - 50px);
        width: calc(100% - 100px);
        left: 100px;
        top: 50px;
        overflow-y: auto;
        background-color: #f3f3f3;
    }
    &_typelist {
        position: fixed;
        top: 50px;
        width: 100px;
        background-color: #fff;
        height: calc(100% - 50px);
        left: 0;
        &_single {
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 15px;
            color: #272727;
            &--selected {
                color: #fff;
                background-color: #2196f3;
            }
        }
    }
    &_header {
        box-sizing: border-box;
        padding: 10px 20px;
        height: 50px;
        background-color: #fff;
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
        border-bottom: 1px solid #f3f3f3;
    }
    &_search {
        width: 85%;
        border-radius: 5px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        font-size: 14px;
        color: #6d6d6d;
        height: 30px;
        line-height: 30px;
        flex-grow: 1;
        >i {
            float: left;
            font-size: 20px;
            color: #bfbfbf;
            margin-left: 10px;
        }
    }
    &_menu {
        width: 45px;
        text-align: right;
        flex-grow: 0;
        display: block;
        line-height: 30px;
        font-size: 14px;
        color: #313130;
    }
    &_recommend {
        &_list {
            background-color: #f3f3f3;
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
        }
        &_single {
            background-color: #fff;
            width: 32%;
            margin-right: 1%;
            box-sizing: border-box;
            padding: 20px 10px;
            padding-bottom: 10px;
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &_img {
            display: block;
            box-sizing: border-box;
            &>img {
                margin: 0 auto;
                width: 100%;
                display: block;
            }
        }
        &_title {
            color: #272727;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400;
        }
        &_price {
            color: #f80000;
            font-size: 15px;
        }
        &_text {
            box-sizing: border-box;
            flex-direction: column;
        }
    }
}
</style>
<template>
    <div>
        <div class="list_container">
            <header class="list_header">
                <div class="list_search" @click="gosearch">
                    <i class="iconfont">&#xe60c;</i> 请输入商品名
                </div>
                <span class="list_menu" @click="routerback()">
                    取消
                </span>
            </header>
            <ul class="list_typelist">
                <li class="list_typelist_single" v-for="(item,index) in typeList" :class="{'list_typelist_single--selected':item.click}" @click="typeselect(index)">{{item.name}}</li>
            </ul>
            <div class="list_listbox">
                <ul class="list_recommend_list">
                    <template v-if="typeList[0]">
                        <template v-for="item in typeList[currentType].children">
                            <template v-for="ite in item.children">
                                <li class="list_recommend_single" @click="goSearch(ite.id,ite.name)">
                                    <div class="list_recommend_img">
                                        <img :src="imgFormat(ite.img)" alt="img">
                                    </div>
                                    <div class="list_recommend_text">
                                        <h2 class="list_recommend_title">{{ite.name}}</h2>
                                    </div>
                                </li>
                            </template>
                        </template>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Scroller } from 'vux'
import { API, getQuery } from '../../services';


export default {
    components: {
        Scroller,
    },
    data() {
        return {
            /* 当前被选中列表 */
            currentType: 0,
            /* 分类数据集合 */
            typeList: [],
        }
    },
    methods: {
        /* 路由回退 */
        routerback() {
            this.$router.goBack();
        },
        /* 列表点击切换函数 */
        typeselect(index) {
            for (let item of this.typeList) {
                item.click = false;
            }
            this.currentType = index;
            this.typeList[index].click = true;
            var data = this.typeList;
            this.typeList = null;
            this.typeList = data;
        },
        /* 跳转到搜索页面 */
        gosearch() {
            this.$router.push({
                path: '/search'
            });

        },
        /* 对象初始化前数据筛选 */
        dataFormat(data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].count == 0) {
                    data.splice(i, 1);
                    i--;
                } else {
                    for (let j = 0, twoData = data[i].children; j < twoData.length; j++) {
                        if (twoData[j].count == 0) {
                            twoData.splice(j, 1);
                            j--;
                        } else {
                            for (let k = 0, threeData = twoData[j].children; k < threeData.length; k++) {
                                if (threeData[k].count == 0) {
                                    threeData.splice(k, 1);
                                    k--;
                                }
                            }
                        }
                    }
                }
            }
        },
        /* 列表点击函数 */
        goSearch(id, name) {
            this.$router.push({
                path: '/goodsList?categoryId=' + id + "&name=" + name
            });
            window.localStorage.setItem("listReload", '11');
        }
    },
    mounted() {
        /* 获取整体分类数据，三重结构，去除第二重 */
        API.main.goodsCategory().then((Response) => {
            let typeList = Response.body.data;
            this.dataFormat(typeList);
            this.typeList = typeList;
            this.typeList[0].click = true;
        });
    },

}
</script>
