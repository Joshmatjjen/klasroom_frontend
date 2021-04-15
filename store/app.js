// state
export const state = () => ({
  menu: false,
  darkMenu: false,
  loginModal: false,
  forgotPasswordModal: false,
  resetPasswordModal: false,
  modal: false,
  noticeModal: null,
  redirectUrl: null,
  pageTitle: 'Dashboard',
  pageType: null,
  pageData: null,
  viewData: {},
  categories: [],
  customer_details: null,
  banks: [],
  userDetails: null,
  accounts: null,
})

// getters
export const getters = {
  menu: (state) => state.menu,
  pageTitle: (state) => state.pageTitle,
  pageType: (state) => state.pageType,
  pageData: (state) => state.pageData,
  viewData: (state) => state.viewData,
  categories: (state) => state.categories,
  banks: (state) => state.banks,
  accounts: (state) => state.accounts,
}

// mutations
export const mutations = {
  SET_REDIRECT(state, url) {
    state.redirect_url = url
  },
  SET_TITLE(state, title) {
    state.pageTitle = title
  },
  SET_MENU(state, status) {
    state.menu = status
  },
  SET_DARK_MENU(state, status) {
    state.darkMenu = status
  },
  LOGIN_MODAL(state, status) {
    state.loginModal = status
  },
  FORGOT_PASSWORD_MODAL(state, status) {
    state.forgotPasswordModal = status
  },
  RESET_PASSWORD_MODAL(state, status) {
    state.resetPasswordModal = status
  },
  SET_MODAL(state, status) {
    state.modal = status
  },
  NOTICE_MODAL(state, options) {
    state.noticeModal = options
  },
  SET_TYPE(state, type) {
    state.pageType = type
  },
  SET_DATA(state, data) {
    state.pageData = data
  },
  SET_VIEW_DATA(state, data) {
    state.viewData = data
  },
  SET_CATEGORIES(state, data) {
    state.categories = data
  },
  SET_BANKS(state, data) {
    state.banks = data
  },
  SET_ACCOUNTS(state, data) {
    state.accounts = data
  },
  REMOVE_DATA(state, data) {
    const index = state.pageData.findIndex((d) => {
      return d.id === data.id
    })
    state.pageData.splice(index, 1)
  },
}

// actions
export const actions = {
  setTitle({ commit }, { title }) {
    commit('SET_TITLE', { title })
  },
  handleError({ dispatch }, { response }) {
    switch (response.status) {
      case 401: // Token expired 498
        dispatch('auth/logout', null, { root: true })
        break
      default:
    }
  },
}
