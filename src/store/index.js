import { createStore } from 'vuex'

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
    
  },
  modules: {
  }
})
