<style lang="scss">
.search {
    &_main {
        background-color: #f3f3f3;
        height: 100%;
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
        display: flex;
        >i {
            float: left;
            font-size: 20px;
            color: #bfbfbf;
            margin-left: 10px;
        }
        >input {
            flex-grow: 1;
            background-color: #f5f5f5;
            border: none;
            border-radius: 5px;
        }
    }
    &_menu {
        width: 45px;
        flex-grow: 0;
        display: block;
        line-height: 30px;
        text-align: right;
        font-size: 15px;
        color: #313130;
    }
    &_history {
        position: fixed;
        top: 50px;
        width: 100%;
        left: 0;
        &_title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 0 20px;
            height: 60px;
            >h2 {
                font-weight: 400;
                color: #333;
                font-size: 15px;
            }
            >button {
                border: none;
                background: transparent;
                color: #333;
                font-size: 15px;
            }
        }
        &_list {
            box-sizing: border-box;
            padding: 0 20px;
            >li {
                height: 30px;
                line-height: 30px;
                display: inline-block;
                margin-right: 10px;
                background-color: #fff;
                padding: 0 10px;
                font-size: 16px;
                margin-bottom: 10px;
                border-radius: 3px;
                text-align: center;
            }
        }
    }
}
</style>

<template>
    <div>
        <div class="search_main">
            <header class="search_header">
                <div class="search_search">
                    <i class="iconfont">&#xe60c;</i>
                    <input type="text" v-model="searchValue" placeholder="请输入商品名" @keyup.enter="submit">
                </div>
                <span class="search_menu" @click="routerback">
                    取消
                </span>
            </header>
            <div class="search_history">
                <div class="search_history_title">
                    <h2>历史搜索</h2>
                    <button type="button" @click="cleanHistory()">清空</button>
                </div>
                <ul class="search_history_list">
                    <li v-for="item in history" @click="historySearch(item)">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: "",
            /* 历史搜索记录 */
            history: [
                "haode",
                "shima"
            ],
        }
    },
    name: "history",
    methods: {
        routerback() {
            this.$router.goBack();
        },
        /* 搜索函数 */
        submit() {
            this.searchValue = this.searchValue.trim();
            if (!this.searchValue) {
                return false;
            }
            for (let item of this.history) {
                if (item == this.searchValue) {
                    this.$router.push({
                        path: '/goodslist?goods_name=' + this.searchValue
                    })
                    this.searchValue = "";
                    return false;
                }
            }
            this.history.push(this.searchValue);
            localStorage.setItem("zj_history", JSON.stringify(this.history));
            this.$router.push({
                path: '/goodslist?goods_name=' + this.searchValue
            })
            window.localStorage.setItem("listReload", '11');
            this.searchValue = "";
        },
        /* 历史记录搜索 */
        historySearch(item) {
            this.searchValue = item;
            this.$router.push({
                path: '/goodslist?goods_name=' + this.searchValue
            })

            window.localStorage.setItem("listReload", '11');
            this.searchValue = "";
        },
        /* 清空历史记录 */
        cleanHistory() {
            this.history = [];
            localStorage.setItem("zj_history", JSON.stringify(this.history));
        }
    },
    mounted() {
        /* 将搜索历史记录到本地存储中 */
        let history = JSON.parse(localStorage.getItem('zj_history'));
        if (!history) {
            history = [];
        }
        /* 搜索历史赋值 */
        this.history = history;
        console.log(this.$route.path);
    }
}  
</script>