import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import global from './global'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: user,
    global: global
  }
})
