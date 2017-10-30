
<style lang="scss" >

</style>

<template lang="pug">
    .bookMain
        .bookMain_header
            header-cop(:heder_title="title")
        .bookMain_content
</template>

<script>
import HeaderCop from './common/header.vue';
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux';
export default {
    directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    HeaderCop
  },
  data () {
    return {
        title:"绘本",
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }  
}
</script>
