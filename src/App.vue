<template>
  <div id="app">
    <x-header :left-options="{showBack: showBack}" :right-options="{showMore: showMore}" @on-click-more="showMenus = true">{{navTitle}}</x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
    <Loading :show="loadState" :text="loadText"></Loading>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { Loading } from 'vux'
import {mapState,mapActions, mapMutations} from 'vuex'
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
   directives: {
    TransferDom
  },
  components:{
    Loading,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  name: 'App',
  data(){
    return {
      showMenus:false,
      menus:{
        menu1:'第一个选项',
        menu2:'第二个选项'
      },
      transitionName:'slide-left'
    }
  },
  computed:{
    ...mapState(['loadState','loadText']),
    ...mapState('nav',['navBar','showBack','showMore','navTitle'])
  },
  mounted(){
   this.$router.beforeEach((to,from,next)=>{
     this.setnavTitle(to.meta.title)
     console.log(to.path)
     if(to.path.length > 1){
        this.setnavBar(true)
       this.setshowBack(true)
       this.setshowMore(true)
     }else {
       this.setnavBar(true)
       this.setshowBack(false)
       this.setshowMore(false)

     }
     next()
   })
  },
  methods:{
    ...mapMutations(['setLoadText']),
    ...mapMutations('nav',['setnavBar','setshowBack','setshowMore','setnavTitle'])
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
