import Cookies from 'js-cookie'

// state
export const state = () => ({
  user: null,
  user_id: null,
  token: null,
  bank: null,
})

// getters
export const getters = {
  user: (state) => state.user,
  user_id: (state) => state.user_id,
  check: (state) => state.user !== null,
  token: (state) => state.token,
  bank: (state) => state.bank,
  isAuthenticated: (state) => state.token !== null
}

// mutations
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },

  SET_USER_ID(state, userId) {
    state.user_id = userId
  },

  FETCH_USER_SUCCESS(state, user) {
    state.user = user
  },

  FETCH_USER_FAILURE(state) {
    state.token = null
  },

  LOGOUT(state) {
    state.user = null
    state.user_id = null
    state.token = null
  },

  UPDATE_BANK(state, bank) {
    state.bank = bank
  },

  UPDATE_USER(state, { user }) {
    state.user = user
  },
}

// actions
export const actions = {
  saveToken({ commit, dispatch }, { accessToken, userId, remember = null }) {
    commit('SET_TOKEN', accessToken)
    commit('SET_USER_ID', userId)

    Cookies.set('token', accessToken, { expires: remember })
    Cookies.set('user_id', userId, { expires: remember })
  },

  async signUpUser(vuexContext, userData) {
    try {
      const { data } = await this.$axios.$post(userData.userType === "student" ? '/users' : '/users/tutor', userData)
      return data
    } catch (e) {
      return false
    }
  },

  async loginUser(vuexContext, userData) {
    try {
      const { data } = await this.$axios.$post('/login', userData)
      console.log('fetch user success: ', data)
      vuexContext.dispatch("auth/saveToken", data)
      vuexContext.commit('FETCH_USER_SUCCESS', data)
      return data
    } catch (e) {
      // console.log('fetch user failed: ', e)
      return false
    }
  },

  async fetchUser({ commit, dispatch }) {
    try {
      const { data } = await this.$axios.get('/me')
      // console.log('fetch user success: ', data.data)
      commit('FETCH_USER_SUCCESS', data.data)
    } catch (e) {
      Cookies.remove('token')
      Cookies.remove('user_id')
      // console.log('fetch user failed: ', e)
      // dispatch('app/handleError', e, { root: true })
      commit('FETCH_USER_FAILURE')
    }
  },

  async fetchBank({ commit, state }) {
    try {
      const uid = state.user.id
      const { data } = await this.$axios.get(`/${uid}/bank-information`)
      // console.log('fetch bank success: ', data.data)
      commit('UPDATE_BANK', data.data)
    } catch (e) {}
  },

  async logout({ commit }) {
    try {
      await this.$axios.get('/logout')
    } catch (e) {}

    Cookies.remove('token')
    Cookies.remove('user_id')

    commit('LOGOUT')
  },
}
