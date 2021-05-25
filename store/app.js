// state
export const state = () => ({
  menu: false,
  darkMenu: false,
  loginModal: null,
  becomeATutorModal: false,
  validationModal: null,
  forgotPasswordModal: false,
  resetPasswordModal: false,
  modal: false,
  noticeModal: null,
  createMeetingModal: null,
  webinarSideBar: null,
  redirectUrl: null,
  pageTitle: 'Dashboard',
  pageType: null,
  pageData: null,
  viewData: {},
  categories: [],
  coursesCategories: [],
  customer_details: null,
  banks: [],
  userDetails: null,
  accounts: null,
  editProfileModal: null,
  changePasswordModal: null,
  editImageModal: null,
  deleteAccountModal: null,
})

// getters
export const getters = {
  menu: (state) => state.menu,
  pageTitle: (state) => state.pageTitle,
  pageType: (state) => state.pageType,
  pageData: (state) => state.pageData,
  viewData: (state) => state.viewData,
  categories: (state) => state.categories,
  coursesCategories: (state) => state.coursesCategories,
  banks: (state) => state.banks,
  accounts: (state) => state.accounts,
  validationModal: (state) => state.validationModal,
}

// mutations
export const mutations = {
  SET_REDIRECT(state, url) {
    state.redirect_url = url
  },
  SET_TITLE(state, title) {
    state.pageTitle = title
  },
  SET_COURSES_CATEGORIES(state, data) {
    state.coursesCategories = data
  },
  SET_MENU(state, status) {
    state.menu = status
  },
  SET_DARK_MENU(state, status) {
    state.darkMenu = status
  },
  SET_WEBINAR_SIDEBAR(state, options) {
    state.webinarSideBar = options
  },
  LOGIN_MODAL(state, loginData) {
    state.loginModal = loginData
  },
  BECOME_A_TUTOR_MODAL(state, status) {
    state.becomeATutorModal = status
  },
  VALIDATION_MODAL(state, data) {
    state.validationModal = data
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
  MEETING_CREATE_MODAL(state, options) {
    state.createMeetingModal = options
  },
  EDIT_PROFILE_MODAL(state, profileData) {
    state.editProfileModal = profileData
  },
  CHANGE_PASSWORD_MODAL(state, passwordData) {
    state.changePasswordModal = passwordData
  },
  EDIT_IMAGE_MODAL(state, imageData) {
    state.editImageModal = imageData
  },
  DELETE_ACCOUNT_MODAL(state, data) {
    state.deleteAccountModal = data
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
