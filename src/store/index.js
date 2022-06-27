import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
    user: {
      id: null,
      email: '',
      role: '',
      balance: 0,
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken(context, token) {
      context.commit('setToken', token);
    },
    setUser(context, user) {
      context.commit('setUser', user);
    },
  },
  modules: {
  },
});
