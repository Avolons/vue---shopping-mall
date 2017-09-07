<style lang="scss">
    
</style>

<template>
    <div>
       <x-header :left-options="{backText: ''}">帮助与客服</x-header>
    </div> 
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader,
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>