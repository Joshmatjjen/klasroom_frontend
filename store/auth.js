import Cookie from 'js-cookie'
import { cookieFromRequest, getAccessTokenHeader, getAuthHeader } from '~/utils'

// state
export const state = () => ({
  user: null,
  token: null,
  expirationDate: null,
  bank: null,
  profileImage: null,
  settings: null,
})

// getters
export const getters = {
  user: (state) => state.user,
  check: (state) => state.user !== null,
  token: (state) => state.token,
  expirationDate: (state) => state.expirationDate,
  bank: (state) => state.bank,
  isAuthenticated: (state) => state.token !== null,
  profileImage: (state) => state.profileImage,
  settings: (state) => state.settings,
}

// mutations
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },

  SET_PROFILE_IMAGE(state, profileImage) {
    state.profileImage = profileImage
  },

  SET_PROFILE_SETTINGS(state, settings) {
    state.settings = settings
  },

  SET_EXPIRATION_DATE(state, expirationDate) {
    state.expirationDate = expirationDate
  },

  FETCH_USER_SUCCESS(state, user) {
    state.user = user
  },

  FETCH_USER_FAILURE(state) {
    state.token = null
    state.user = null
    state.expirationDate = null
  },

  LOGOUT(state) {
    state.user = null
    state.expirationDate = null
    state.token = null
    state.profileImage = null
  },

  UPDATE_BANK(state, bank) {
    state.bank = bank
  },

  UPDATE_USER(state, user) {
    state.user = user
  },
}

// actions
export const actions = {
  async becomeATutor(vuexContext, userData) {
    try {
      const user = vuexContext.state.user
      const { data: newData, message } = await this.$axios.$post(
        '/users/tutor',
        {
          courseCategories: userData.courseCategories,
        },
        {
          headers: getAccessTokenHeader(user.accessToken),
        }
      )
      // console.log("newData: ", newData)
      return { newData, message }
    } catch (e) {
      return false
    }
  },

  async validateToken(vuexContext, userData) {
    try {
      console.log('start validation: ', userData)
      const { data, message } = await this.$axios.$post(
        `/validatetoken?token_type=${userData.type}`,
        {
          token: userData.token,
        }
      )
      // console.log("data: ", data)
      return { data, message }
    } catch (e) {
      // console.log("error validation: ", e)
      return false
    }
  },

  async forgetPassword(vuexContext, userData) {
    try {
      const { data, message } = await this.$axios.$post(`/resettoken`, {
        email: userData.email,
      })
      // console.log("data: ", data)
      return { data, message }
    } catch (e) {
      // console.log("error validation: ", e)
      return false
    }
  },

  async resetPassword(vuexContext, userData) {
    try {
      const { data, message } = await this.$axios.$post(`/resetpassword`, {
        password: userData.password,
        token: userData.token,
      })
      return { data, message }
    } catch (e) {
      // console.log("error validation: ", e)
      return false
    }
  },

  async signUpUser(vuexContext, userData) {
    try {
      if (userData.isStudent && userData.userType === 'tutor') {
        const { data } = await this.$axios.$post('/login', {
          userIdentity: userData.email,
          password: userData.password,
          userType: 'student',
        })

        const { data: newData, message } = await this.$axios.$post(
          '/users/tutor',
          {
            name: data.name,
            email: userData.email,
            phone: data.phone,
            password: userData.password,
            courseCategories: userData.courseCategories,
          },
          {
            headers: getAccessTokenHeader(data.accessToken),
          }
        )
        return { newData, message }
      }
      const { data, message } = await this.$axios.$post(
        userData.userType === 'student' ? '/users' : '/users/tutor',
        userData
      )
      return { data, message }
    } catch (e) {
      return false
    }
  },

  async loginUser(vuexContext, userData) {
    try {
      const { data } = await this.$axios.$post('/login', userData)

      if (data.accessToken) {
        console.log(data.accessToken)
        vuexContext.commit('SET_TOKEN', data.accessToken)
        const settingsResult = await this.$axios.$get('/users/settings')
        const { settings } = settingsResult.data
        console.log('fetch user settings: ', settings)
        if (settings) {
          const expirationDate = new Date().getTime() + 86400 * 1000 // 24 hrs duration
          vuexContext.commit('SET_TOKEN', data.accessToken)
          vuexContext.commit('FETCH_USER_SUCCESS', data)
          vuexContext.commit('SET_EXPIRATION_DATE', expirationDate)
          vuexContext.commit('SET_PROFILE_IMAGE', data.image)
          vuexContext.commit('SET_PROFILE_SETTINGS', settings)

          localStorage.setItem('token', data.accessToken)
          localStorage.setItem('tokenExpiration', expirationDate)
          localStorage.setItem('user', JSON.stringify(data))
          localStorage.setItem('profileImage', data.image)
          localStorage.setItem('settings', JSON.stringify(settings))

          Cookie.set('jwt', data.accessToken)
          Cookie.set('expirationDate', expirationDate)
          Cookie.set('user', JSON.stringify(data))
          Cookie.set('profileImage', data.image)
          Cookie.set('settings', JSON.stringify(settings))
        }

        return data
      }
      return false
    } catch (e) {
      // console.log('fetch user failed: ', e)
      return false
    }
  },

  async updateUser(vuexContext, userData, id) {
    console.log('Data >>', userData)
    try {
      const { data } = await this.$axios.$put(
        '/users/' + userData.userId,
        userData
      )
      if (data) {
        console.log('fetch user success: ', data)
        vuexContext.commit('UPDATE_USER', data)
        localStorage.setItem('user', JSON.stringify(data))
        Cookie.set('user', JSON.stringify(data))
        // const expirationDate = new Date().getTime() + 86400 * 1000 // 24 hrs duration
        // vuexContext.commit('SET_TOKEN', data.accessToken)
        // vuexContext.commit('FETCH_USER_SUCCESS', data)
        // vuexContext.commit('SET_EXPIRATION_DATE', expirationDate)

        // localStorage.setItem('token', data.accessToken)
        // localStorage.setItem('tokenExpiration', expirationDate)
        // localStorage.setItem('user', JSON.stringify(data))

        // Cookie.set('jwt', data.accessToken)
        // Cookie.set('expirationDate', expirationDate)
        // Cookie.set('user', JSON.stringify(data))

        return data
      }
      return false
    } catch (e) {
      // console.log('fetch user failed: ', e)
      return false
    }
  },

  async changePassword(vuexContext, passwordData) {
    console.log('Data >>', passwordData)
    try {
      const { data } = await this.$axios.$post('/changepassword', passwordData)
      if (data) {
        console.log('password changed success: ', data)
        // vuexContext.commit('UPDATE_USER', data)
        // localStorage.setItem('user', JSON.stringify(data))
        // Cookie.set('user', JSON.stringify(data))
        // const expirationDate = new Date().getTime() + 86400 * 1000 // 24 hrs duration
        // vuexContext.commit('SET_TOKEN', data.accessToken)
        // vuexContext.commit('FETCH_USER_SUCCESS', data)
        // vuexContext.commit('SET_EXPIRATION_DATE', expirationDate)

        // localStorage.setItem('token', data.accessToken)
        // localStorage.setItem('tokenExpiration', expirationDate)
        // localStorage.setItem('user', JSON.stringify(data))

        // Cookie.set('jwt', data.accessToken)
        // Cookie.set('expirationDate', expirationDate)
        // Cookie.set('user', JSON.stringify(data))

        return data
      }
      return false
    } catch (e) {
      // console.log('fetch user failed: ', e)
      return false
    }
  },

  async changeProfileImage(vuexContext, imageData) {
    console.log('Data >>', imageData)
    const formData = new FormData()
    formData.append('image', imageData, '.png')
    try {
      console.log(formData)
      const { data } = await this.$axios.$post(
        '/uploads/profile-image',
        formData
      )
      if (data) {
        console.log('profile-image changed success: ', data)
        vuexContext.commit('SET_PROFILE_IMAGE', data.image)
        localStorage.setItem('profileImage', data.image)
        Cookie.set('profileImage', data.image)

        return data
      }
      return false
    } catch (e) {
      // console.log('fetch user failed: ', e)
      return false
    }
  },
  async deleteProfile(vuexContext, userId) {
    try {
      console.log(userId)
      const { data } = await this.$axios.$delete('/users/' + userId)
      if (data) {
        console.log('profile deleted successfully: ', data)
        // vuexContext.commit('SET_PROFILE_IMAGE', data.image)
        // localStorage.setItem('user', JSON.stringify(data))
        // Cookie.set('user', JSON.stringify(data))
        // const expirationDate = new Date().getTime() + 86400 * 1000 // 24 hrs duration
        // vuexContext.commit('SET_TOKEN', data.accessToken)
        // vuexContext.commit('FETCH_USER_SUCCESS', data)
        // vuexContext.commit('SET_EXPIRATION_DATE', expirationDate)

        // localStorage.setItem('token', data.accessToken)
        // localStorage.setItem('tokenExpiration', expirationDate)
        // localStorage.setItem('user', JSON.stringify(data))

        // Cookie.set('jwt', data.accessToken)
        // Cookie.set('expirationDate', expirationDate)
        // Cookie.set('user', JSON.stringify(data))

        return data
      }
      return false
    } catch (e) {
      // console.log('fetch user failed: ', e)
      return false
    }
  },

  async changeSettings(vuexContext, settingsData) {
    try {
      console.log(settingsData)
      const { data } = await this.$axios.$post('/users/settings', settingsData)
      if (data) {
        console.log('settings successfully changed: ', data)

        vuexContext.commit('SET_PROFILE_SETTINGS', data)
        localStorage.setItem('settings', JSON.stringify(data))
        Cookie.set('settings', JSON.stringify(data))

        return data
      }
      return false
    } catch (e) {
      // console.log('fetch user failed: ', e)
      return false
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

  async logout(vuexContext) {
    // try {
    //   await this.$axios.get('/logout')
    // } catch (e) {}

    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
    Cookie.remove('user')

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('tokenExpiration')

    vuexContext.commit('LOGOUT')
    this.$router.push('/')

    return true
  },

  initAuth(vuexContext, req) {
    let token
    let expirationDate
    let user
    let profileImage
    let settings
    if (req) {
      if (!req.headers.cookie) {
        return
      }

      token = cookieFromRequest(req, 'jwt')
      if (!token) {
        return
      }
      expirationDate = cookieFromRequest(req, 'expirationDate')
      user = cookieFromRequest(req, 'user')
      expirationDate = cookieFromRequest(req, 'tokenExpiration')
      profileImage = cookieFromRequest(req, 'profileImage')
      settings = cookieFromRequest(req, 'settings')
    } else {
      token = localStorage.getItem('token')
      user = localStorage.getItem('user')
      expirationDate = localStorage.getItem('tokenExpiration')
      profileImage = localStorage.getItem('profileImage')
      settings = localStorage.getItem('settings')
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log('No token or invalid token')
      vuexContext.dispatch('auth/logout')
      return
    }

    vuexContext.commit('SET_TOKEN', token)
    vuexContext.commit('FETCH_USER_SUCCESS', JSON.parse(user))
    vuexContext.commit('SET_EXPIRATION_DATE', expirationDate)
    vuexContext.commit('SET_PROFILE_IMAGE', profileImage)
    vuexContext.commit('SET_PROFILE_SETTINGS', JSON.parse(settings))
  },
}
