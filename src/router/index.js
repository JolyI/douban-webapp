import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import movie from '@/views/movie/movie'
import music from '@/views/music/music'
import book from '@/views/book/book'
import activity from '@/views/activity/activity'
import movie_detail from '@/views/movie/movie_detail'
import mucsic_detail from '@/views/music/music_detail'
import book_detail from '@/views/book/book_detail'
import activity_detail from '@/views/activity/activity_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页列表',
      component: home,
      meta: {
        title: '柒年'
      }
    },
    {
      path: '/movie',
      name: '电影频道',
      component: movie,
      meta: {
        title: '电影频道'
      },
      children: [
        {
          path: 'movie_detail',
          name: 'movie_detail',
          component: movie_detail,
          meta: {
            title: ''
          }
        }
      ]
    },
    {
      path: '/music',
      name: '音乐时区',
      component: music,
      meta: {
        title: '音乐时区'
      },
      children: [
        {
          path: 'mucsic_detail',
          name: 'mucsic_detail',
          component: mucsic_detail,
          meta: {
            title: ''
          }
        }
      ]
    },
    {
      path: '/book',
      name: '文思生活',
      component: book,
      meta: {
        title: '文思生活'
      },
      children: [
        {
          path: 'book_detail',
          name: 'book_detail',
          component: book_detail,
          meta: {
            title: ''
          }
        }
      ]
    },
    {
      path: '/activity',
      name: '豆瓣活动',
      component: activity,
      meta: {
        title: '豆瓣活动'
      },
      children: [
        {
          path: 'activity_detail',
          name: 'activity_detail',
          component: activity_detail,
          meta: {
            title: ''
          }
        }
      ]
    },
  ]
})
