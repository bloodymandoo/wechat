import Vue from 'vue'
import vuex from 'vuex'
import base from '@/store/base/base'

Vue.use(vuex)
export default new vuex.Store({
  modules: {
    base: base
  }
})
