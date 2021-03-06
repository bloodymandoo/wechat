// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from '@/store/index'
import VueScroller from 'vue-scroller'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/styles/reset.css'
import './assets/styles/common.scss'

Vue.use(MuseUI)
Vue.use(VueScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
