<style lang="scss">
    @import "./authInfo.scss";
</style>

<template>
    <div>
        <header class="ant_header" style="height:260px">
            <div class="ant_header_title">
                <i class="iconfont" @click="routerBack">&#xe611;</i>
                芝麻信用授权
            </div>
            <div class="ant_header_zujie">
                <div class="logo"><img src="../../assets/img/common/logo2x.png" width="65" height="65">租介</div>
                <div>租介,租下你的世界</div>
            </div>
        </header>
        <div class="ant_logo">
            <img src="../../assets/img/common/zmxy_icon.png" width="33" height="37">
            <p>芝麻信用</p>
        </div>
        <div class="ant_form">
            <group>
                <x-input name="username" placeholder="真实姓名" v-model="name" is-type="china-name">
                    <i class="iconfont" slot="label">&#xe614;</i>
                </x-input>
            </group>
             <group>
                <x-input name="username" placeholder="身份证号" v-model="certNo">
                    <i class="iconfont" slot="label">&#xe675;</i>
                </x-input>
            </group>
            <div style="padding:15px;">
                <x-button type="primary" @click.native="userIdentityInfo"> 确认授权</x-button>
            </div>
        </div>
        <div class="zujie_state">
            <p style="color:#2196f3;margin-bottom:15px;">租借将根据您的芝麻信用分数减免产品押金</p> 
            <p>您的认证信息只用于芝麻免押金认证，</p>
            <p>租借不会用作任何其他用途</p>
        </div>
        <toast v-model="toast"  type="cancel">{{confrim}}</toast>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { XInput, Group, XButton, Cell, Toast } from 'vux';
    import { API, getQuery } from '../../services';

    export default{
        data(){
            return {
                name:'',
                certNo:'',
                toast:false,
                confrim:""
            }
        },
        components: {
            XInput,
            XButton,
            Group,
            Cell,
            Toast
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
            userIdentityInfo(){
                this.check();
                API.person.handleUserIdentityInfo({
                    user_id: this.getUserInfoUserId,
                    name:this.name,
                    certNo:this.certNo,
                    option:1
                }).then((res) => {
                    if (res.body.code == 200) {
                        window.location.href = res.body.data.auth_url;
                        localStorage.setItem("isCertify","4");
                        this.$store.dispatch('IsCertify');
                   }
                })
            },
            check(){
                if(!this.name){
                    this.confrim="请输入姓名";
                    this.toast=true;
                    return false;
                }
            }
        },
        mounted(){

        }
    }
</script>