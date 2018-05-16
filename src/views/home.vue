<template>
  <div class="home">
    <group-title>豆瓣</group-title>
      <grid :cols="2" :show-lr-borders="true" :show-vertical-dividers="true">
          <grid-item v-for="grid in grids" :label="grid.name" :key="grid.name"   :link="grid.link" >
              <img slot="icon" :src="grid.icon" alt="">
          </grid-item>
      </grid>
  </div>
</template>
<script>
import {Grid,GridItem,GroupTitle} from 'vux'
import {mapState,mapActions, mapMutations} from 'vuex'
import moviePng from '../assets/imgs/movie.png'
import musicPng from '../assets/imgs/music.png'
import booksPng from '../assets/imgs/books.png'
import activityPng from '../assets/imgs/activity.png'
export default {
  components :{
      Grid,
      GridItem,
      GroupTitle
  },
  data(){
      return {
          grids:[
              {
                  name:'电影',
                  icon:moviePng,
                  link:'/movie'
              },
              {
                  name:'音乐',
                  icon:musicPng,
                  link:'/music'
              },
              {
                  name:'读书',
                  icon:booksPng,
                  link:'/book'
              },
              {
                  name:'活动',
                  icon:activityPng,
                  link:'/activity'
              },
          ]
      }
  },
  created(){
      this.setnavBar(true)
       this.setshowBack(false)
       this.setshowMore(false)
       this.setnavTitle('柒年')
  },
  computed:{
     
  },
  methods:{
    ...mapMutations('nav',['setnavBar','setshowBack','setshowMore','setnavTitle'])
  },

}
</script>

<style lang="scss" scoped>
a:-webkit-any-link{
    text-decoration: none;
}
</style>
