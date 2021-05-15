import Cookie from 'js-cookie'
import { cookieFromRequest, getAccessTokenHeader, getAuthHeader } from '~/utils'

// state
export const state = () => ({
  webinars: null,
})

// getters
export const getters = {
  webinars: (state) => state.webinars,
}

// mutations
export const mutations = {

  FETCH_WEBINAR_SUCCESS(state, webinars) {
    state.webinars = webinars
  },
}

// actions
export const actions = {

  // async joinMeeting(vuexContext, webinarData) {
  //   try {
  //     console.log("creating webinar...")
  //     console.log(vuexContext.rootState.auth.user)
  //     const user = vuexContext.rootState.auth.user
  //     const { data: newData, message } = await this.$axios.$post('/webinars', webinarData, {
  //       headers: getAccessTokenHeader(user.accessToken)
  //     })
  //     console.log("newData: ", newData)
  //     return {newData, message}

  //   } catch (e) {
  //     console.log(e)
  //     return false
  //   }
  // },

  async createWebinar(vuexContext, webinarData) {
    try {
      console.log("creating webinar...")
      console.log(vuexContext.rootState.auth.user)
      const user = vuexContext.rootState.auth.user
      const { data: newData, message } = await this.$axios.$post(`https://streaming.staging.klasroom.com/v1/webinars?publish_now=${webinarData.publishNow}`, webinarData, {
        headers: getAccessTokenHeader(user.accessToken)
      })
      console.log("newData: ", newData)
      return {newData, message}

    } catch (e) {
      console.log(e)
      return false
    }
  },
}
