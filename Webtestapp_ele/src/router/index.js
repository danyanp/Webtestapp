import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import look from '@/components/look'
import update from '@/components/update'
import about from '@/components/about'
import summary from '@/components/summary'
import answer from '@/components/answer'
import practical from '@/components/practical'
import lesson_1 from '@/components/lesson_1'

Vue.use(Router)

export default new Router({
  base: '/uploads/Webtestapp/',
  routes: [
    {
        path: '/',
        name: 'app',
        component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/summary',
      name: 'summary',
      component: summary
    },
    {
      path: '/answer',
      name: 'answer',
      component: answer
    },
    {
      path: '/practical',
      name: 'practical',
      component: practical
    },
    {
      path: '/look',
      name: 'look',
      component: look
    },
    {
      path: '/update',
      name: 'update',
      component: update
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/lesson_1',
        name: 'lesson_1',
        component: lesson_1
    },

]
  
})

