// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Header',
    component: Root
  }]
})
