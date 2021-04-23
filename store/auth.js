import Cookie from 'js-cookie'
import { cookieFromRequest, getAccessTokenHeader } from '~/utils'

// state
export const state = () => ({
  user: null,
  token: null,
  expirationDate: null,
  bank: null,
})

// getters
export const getters = {
  user: (state) => state.user,
  check: (state) => state.user !== null,
  token: (state) => state.token,
  expirationDate: (state) => state.expirationDate,
  bank: (state) => state.bank,
  isAuthenticated: (state) => state.token !== null
}

// mutations
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
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

  async becomeATutor(vuexContext, userData) {
    try {

      // console.log('store: ', vuexContext.state.user)
      const user = vuexContext.state.user
      const { data: newData } = await this.$axios.$post('/users/tutor', {
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: userData.password,
        courseCategories: userData.courseCategories
      }, {
        headers: getAccessTokenHeader(user.accessToken)
      })
      return newData

    } catch (e) {
      return false
    }
  },

  async validateToken(vuexContext, userData) {
    try {
      console.log("start validation: ", userData)
      const { data } = await this.$axios.$post(`/validatetoken?token_type=${userData.type}`, {
        token: userData.token,
      })
      console.log("data: ", data)
      return data

    } catch (e) {
      console.log("error validation: ", e)
      return false
    }
  }, 

  async forgetPassword(vuexContext, userData) {
    try {
      const { data } = await this.$axios.$post(`/resettoken`, {
        email: userData.email,
      })
      console.log("data: ", data)
      return data

    } catch (e) {
      console.log("error validation: ", e)
      return false
    }
  },

  async resetPassword(vuexContext, userData) {
    try {
      const { data } = await this.$axios.$post(`/resetpassword`, {
        password: userData.password,
        token: userData.token
      })
      console.log("data: ", data)
      return data

    } catch (e) {
      console.log("error validation: ", e)
      return false
    }
  },

  async signUpUser(vuexContext, userData) {
    try {
      if (userData.isStudent && userData.userType === "tutor") {
        const { data } = await this.$axios.$post('/login', {
          userIdentity: userData.email,
          password: userData.password,
          userType: 'student'
        })

        console.log('fetch old user success: ', data)

        const { data: newData } = await this.$axios.$post('/users/tutor', {
          name: data.name,
          email: userData.email,
          phone: data.phone,
          password: userData.password,
          courseCategories: userData.courseCategories
        }, {
          headers: getAccessTokenHeader(data.accessToken)
        })
        return newData
      }
      const { data } = await this.$axios.$post(userData.userType === "student" ? '/users' : '/users/tutor', userData)
      return data
    } catch (e) {
      return false
    }
  },

  async loginUser(vuexContext, userData) {
    try {
      const { data } = await this.$axios.$post('/login', userData)
      if (data.accessToken) {
        console.log('fetch user success: ', data)
        const expirationDate = new Date().getTime() + 86400 * 1000 // 24 hrs duration
        vuexContext.commit('SET_TOKEN', data.accessToken)
        vuexContext.commit('FETCH_USER_SUCCESS', data)
        vuexContext.commit('SET_EXPIRATION_DATE', expirationDate)

        localStorage.setItem("token", data.accessToken);
        localStorage.setItem(
          "tokenExpiration",
          expirationDate
        );
        localStorage.setItem("user", JSON.stringify(data));

        Cookie.set("jwt", data.accessToken);
        Cookie.set(
          "expirationDate",
          expirationDate
        );
        Cookie.set("user", JSON.stringify(data));

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

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenExpiration");

    vuexContext.commit('LOGOUT');
    this.$router.push("/")

    return true;
  },

  initAuth(vuexContext, req) {
    let token;
    let expirationDate;
    let user;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      
      token = cookieFromRequest(req, 'jwt');
      if (!token) {
        return;
      }
      expirationDate = cookieFromRequest(req, 'expirationDate')
      user = cookieFromRequest(req, 'user')

    } else {
      token = localStorage.getItem("token");
      user = localStorage.getItem("user");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log("No token or invalid token");
      vuexContext.dispatch("auth/logout");
      return;
    }

    vuexContext.commit('SET_TOKEN', token)
    vuexContext.commit('FETCH_USER_SUCCESS', JSON.parse(user))
    vuexContext.commit('SET_EXPIRATION_DATE', expirationDate)
  },
}
