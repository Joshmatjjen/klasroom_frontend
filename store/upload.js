// import Cookies from 'js-cookie'

// state
export const state = () => ({
  session: null,
  workflow: {
    upload: false,
    slots: false,
    bouquet: false,
    data: null,
  },
  file: null,
  files: [],
  bouquets: [],
  bouquet: null,
  campaign: null,
  invoice: null,
})

// getters
export const getters = {
  workflow: (state) => state.workflow,
  files: (state) => state.files,
}

// mutations
export const mutations = {
  SET_BOUQUETS(state, bouquets) {
    state.bouquets = bouquets
  },

  SET_FILE(state, file) {
    state.file = file
  },

  SET_FILES(state, files) {
    state.files = files
  },

  SET_INVOICE(state, invoice) {
    state.invoice = invoice
    // store data
    localStorage.setItem('invoice', JSON.stringify(invoice), { expires: 365 })
  },

  SET_CAMPAIGN(state, campaign) {
    state.campaign = campaign
    // store data
    localStorage.setItem('campaign', JSON.stringify(campaign), { expires: 365 })
  },

  SET_BOUQUET(state, bouquet) {
    state.bouquet = bouquet
    // store data
    localStorage.setItem('bouquet', JSON.stringify(bouquet), { expires: 365 })
  },

  UPDATE_WORKFLOW(state, query) {
    const keys = Object.keys(query).filter((key) => {
      return Object.prototype.hasOwnProperty.call(state.workflow, key)
    })
    keys.forEach((key) => {
      state.workflow[key] = query[key]
    })
    // store data
    localStorage.setItem('upload_flow', state.workflow, { expires: 365 })
  },

  SET_DATA(state, query) {
    const data = state.workflow.data || {}
    const newQuery = Object.assign(data, query)
    // update rates
    state.workflow.data = newQuery
    // console.log('Commit SET_DATA', state.workflow)
    // store data
    localStorage.setItem('upload_flow', state.workflow, { expires: 365 })
  },

  SET_SESSION(state, session) {
    state.session = session
    localStorage.setItem('upload_session', session, { expires: 365 })
  },

  CLEAR_CAMPAIGN(state) {
    state.campaign = null
    localStorage.removeItem('campaign')
  },

  CLEAR_DATA(state) {
    state.session = null
    state.workflow = {
      upload: false,
      details: false,
      options: false,
      data: null,
    }
    state.bouquet = null
    state.campaign = null

    localStorage.removeItem('upload_session')
    localStorage.removeItem('upload_flow')
    localStorage.removeItem('campaign')
    localStorage.removeItem('bouquet')
    localStorage.removeItem('inventories')
  },

  CLEAR_DATA_ONLY(state) {
    localStorage.removeItem('upload_session')
    localStorage.removeItem('upload_flow')
  },
}

export const actions = {
  createInvoice({ commit }, invoice) {
    // eslint-disable-next-line no-undef
    commit('SET_INVOICE', invoice)
  },
}
