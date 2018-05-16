<template>
    <div class="movie">
        <img src="http://tva2.sinaimg.cn/crop.0.0.2044.2044.1024/699132e6jw1el9q06jcxej21kw1kw7cb.jpg" alt="">
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
  data(){
      return {

      }
  },
  created(){
  },
  methods:{
       ...mapMutations('nav',['setnavBar','setshowBack','setshowMore','setnavTitle'])
  }
}
</script>
<style lang="scss" scoped>
    img {
        width: 100%;
    }
</style>

