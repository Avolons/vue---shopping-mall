<style lang="scss">
    .seeting_main{
        .weui-cells__title{
            background-color: #f3f3f3;
            margin: 0;
            height: 50px;
            line-height: 50px;
        }
        .weui-cell{
            height: 45px;
            line-height: 45px;
        }
        .weui-cells{
            margin: 0;
        }
        .weui-cell__ft{
            font-size: 15px;
        }
        &_btn{
           width: calc(100% - 30px);
           margin: 0 auto;
           display: block;
           background-color: #2196f3;
           color: #fff;
           height: 50px;
           line-height: 50px;
           text-align: center;
           border-radius: 5px;
           margin-top: 20px;
        }
    }
</style>

<template>
    <div class="help_common_title">
        <x-header @on-click-back="routerBack" :left-options="{backText: '',preventGoBack:true}">设置</x-header>
        <div class="seeting_main">
            <group >
            <cell title="关于租介" is-link link="/about"></cell>
            </group>
            <button class="seeting_main_btn" @click="signOut" type="button">退出登录</button>
        </div>
    </div> 
</template>

<script>
import { XHeader,Cell,Group } from 'vux'

export default {
  components: {
    XHeader,
     Group,
    Cell,
  },
  data () {
    return {
      showMenus: false
    }
  },
  
  methods:{
      routerBack(){
          this.$router.goBack();
      },
      signOut(){
          let self=this;
          this.$vux.confirm.show({
            /* title: 'Title', */
            content: '确定要退出吗',
            onConfirm () {
                /* 点击确认时执行具体删除操作 */
                let userInfo={
                    loginname : "",
                    avatar : "",
                    id : "",
                    token : "",
                };
            localStorage.setItem("userInfo",'');
            self.$store.dispatch('SignOut');
            }
        })
         
      }
  }
}
</script>