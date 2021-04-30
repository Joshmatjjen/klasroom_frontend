import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const token = cookieFromRequest(req, 'token')
    if (token) {
      await commit('auth/SET_TOKEN', token)
    }

    const user = cookieFromRequest(req, 'user_id')
    if (user) {
      await commit('auth/SET_USER_ID', user.trim())
    }

    const locale = cookieFromRequest(req, 'locale')
    if (locale) {
      await commit('lang/SET_LOCALE', { locale })
    }

    try {
      const { data } = await this.$axios.$get(`/courses/categories`)
      if (data) {
        await commit('app/SET_COURSES_CATEGORIES', data)
      }
    }

    catch (err) {
      await commit('app/SET_COURSES_CATEGORIES', ['Programming','Business', 'Finance'])
    }

  },

  async nuxtClientInit({ commit }) {
    const token = Cookies.get('token')
    if (token) {
      await commit('auth/SET_TOKEN', token)
    }

    const user = Cookies.get('user_id')
    if (user) {
      await commit('auth/SET_USER_ID', user.trim())
    }

    const upload = localStorage.getItem('uploadedFiles')
    if (upload) {
      try {
        await commit('upload/SET_FILES', JSON.parse(upload))
      } catch (e) {
        localStorage.removeItem('uploadedFiles')
      }
    }

    const workflow = localStorage.getItem('upload_session')
    if (upload) {
      try {
        await commit('upload/UPDATE_WORKFLOW', JSON.parse(workflow))
      } catch (e) {
        localStorage.removeItem('upload_session')
      }
    }

    const locale = Cookies.get('locale')
    if (locale) {
      await commit('lang/SET_LOCALE', { locale })
    }
  },
}
