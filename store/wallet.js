// state
export const state = () => ({
  sales: null,
  commissions: null,
})

// getters
export const getters = {
  sales: (state) => state.sales,
  commissions: (state) => state.commissions,
}

// mutations
export const mutations = {
  SET_SALES(state, data) {
    state.sales = data
  },
  SET_COMMISSIONS(state, data) {
    state.commissions = data
  },
}

// actions
export const actions = {
  async fetchSales({ commit, rootState }) {
    try {
      const user = rootState.auth.user
      const { data } = await this.$axios.get(`/${user.id}/wallets`)
      commit('SET_SALES', data.data)
    } catch (e) {}
  },
}
