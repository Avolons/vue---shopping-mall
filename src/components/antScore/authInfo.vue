<style lang="scss">
    @import "./authInfo.scss";
</style>

<template>
    <div>
        <header class="ant_header">
            <div class="ant_header_title">
                <i class="iconfont" @click="routerBack">&#xe611;</i>
                认证中心
            </div>
            <div class="ant_header_score">
                <div class="hasAuth" v-show="isShow">
                    <div>信用极好</div>
                    <div style="font-size:26px;padding:5px 0;font-family: PingFang-SC-Bold">{{zmscore}}</div>
                    <div style="color:#abdff8;font-family: PingFang-SC-Regular">芝麻信用评分</div>
                </div>
                <div class="noAuth" v-show="!isShow">未授权</div>
            </div>
        </header>
        <div class="ant_middle">
            <p class="goAuth" v-show="!isShow">
                <span style="color:#666">芝麻信用</span> 
                <span style="color:#2196f3" @click="getAuth">去授权<i class="iconfont">&#xe6d7;</i></span>
            </p>
            <p v-show="isShow">恭喜您已获取<span>{{relief_limit}}元</span>免押金额度</p>
            <p style="font-size:14px">芝麻信用高于<span>650</span>的用户，租赁商品将享受部分<span>免押金服务</span></p>
        </div>
        <div class="ant_rate">
            <h3>如何获取芝麻信用免押金额度?</h3>
            <div>
                <h6><i class="dot1"></i>800以上</h6>
                <p>最高可获取<span>12000元</span>的免押金额度</p>
                <p>单笔交易最高可获得<span>50%</span>的押金减免</p>
            </div>
            <div>
                <h6><i class="dot2"></i>751-800</h6>
                <p>最高可获取<span>8000元</span>的免押金额度</p>
                <p>单笔交易最高可获得<span>40%</span>的押金减免</p>
            </div>
            <div>
                <h6><i class="dot3"></i>701-750</h6>
                <p>最高可获取<span>4000元</span>的免押金额度</p>
                <p>单笔交易最高可获得<span>30%</span>的押金减免</p>
            </div>
            <div>
                <h6><i class="dot4"></i>651-700</h6>
                <p>最高可获取<span>2000元</span>的免押金额度</p>
                <p>单笔交易最高可获得<span>20%</span>的押金减免</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { API, getQuery } from '../../services';

    export default{
        data(){
            return {
                isShow:false,
                zmscore:0,
                relief_limit:0
            }
        },
        computed: {
            ...mapGetters([
                'getUserInfoUserId',
                'getUserInfoToken',
            ])
        },
        methods:{
            routerBack(){
                this.$router.goBack();
            },
            getAuth(){
                if(localStorage.getItem('userInfo')){
                    this.$router.push({
                        path:'/authPage'
                    })
                }else{
                    this.$router.push({
                        path:'/login'
                    })
                } 
            },
            userZMScore() {
                API.person.getUserZMScore({
                    user_id: this.getUserInfoUserId
                }).then((res) => {
                    // console.log(res);
                    if (res.body.code == 200) {
                        if(res.body.msg == "获取成功"){
                            this.zmscore = res.body.data.zmscore;
                            this.isShow = true;
                        }
                    }
                })
            },
            userZMReliefInfo(){
                API.person.getUserZMReliefInfo({
                    user_id: this.getUserInfoUserId
                }).then((res) => {
                    // console.log(res)
                    if (res.body.code == 200) {
                        this.relief_limit = res.body.data.relief_limit
                    }
                })
            }
        },
        mounted(){
            this.userZMScore();
            this.userZMReliefInfo();
        }
    }
    
</script>