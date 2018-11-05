import Vue from 'vue'
import Router from 'vue-router'
import BaseP from '@/pages/base/BaseP'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseP',
      component: BaseP
    }
  ]
})
