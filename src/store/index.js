import { createStore } from 'vuex'
import { fetchUserInfo } from '../api/users'
export default createStore({
  state: {
    userinfo: null
  },
  mutations: {
    setUserinfo(state, userinfo) {
      state.userinfo = userinfo
    }
  },
  actions: {
    async getUserinfo({ commit }) {
      let res = await fetchUserInfo()
      commit('setUserinfo', res.data)
      return res
    }
  },
  modules: {
  }
})
