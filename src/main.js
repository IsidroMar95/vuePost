import Vue from 'vue'
import Router from 'vue-router'

import './assets/css/tailwind.css'
import App from './App.vue'
import Home from './views/Home'
import SinglePost from './views/SinglePost'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'post',
      component: SinglePost,
      props: true
    }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
