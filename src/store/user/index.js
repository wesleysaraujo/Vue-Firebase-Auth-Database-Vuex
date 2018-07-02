import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    autoSignIn ({ commit }, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.name,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')

      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const userProfileData = {
              name: payload.name,
              email: payload.email,
              cpf: payload.cpf,
              type: payload.type,
              gender: payload.gender,
              data_localization: payload.data_localization,
              creci: payload.creci,
              creci_uf: payload.creci_uf
            }

            firebase.database().ref('users/').push(userProfileData)

            commit('setLoading', false)

            commit('setUser', userProfileData)
          }
        )
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    }
  }
}
