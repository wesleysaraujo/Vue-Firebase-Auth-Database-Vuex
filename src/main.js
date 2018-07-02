import Vue from 'vue'
import firebase from 'firebase/app'

import App from './App.vue'
import router from './router'
import { store } from './store/'
import firebaseConfig from './config/firebaseConfig'

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')
