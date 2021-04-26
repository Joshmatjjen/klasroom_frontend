import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_3719dadc from 'nuxt_plugin_plugin_3719dadc' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_srcplugin69c1c950_6238fe35 from 'nuxt_plugin_srcplugin69c1c950_6238fe35' // Source: ./src.plugin.69c1c950.js (mode: 'client')
import nuxt_plugin_pluginclient_1c3ad858 from 'nuxt_plugin_pluginclient_1c3ad858' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_fc176c40 from 'nuxt_plugin_pluginserver_fc176c40' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_525cb08e from 'nuxt_plugin_workbox_525cb08e' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_41fb89a1 from 'nuxt_plugin_metaplugin_41fb89a1' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_46a32f15 from 'nuxt_plugin_iconplugin_46a32f15' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_68e86ff2 from 'nuxt_plugin_axios_68e86ff2' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_libplugin796218f6_1754d1fe from 'nuxt_plugin_libplugin796218f6_1754d1fe' // Source: ./lib.plugin.796218f6.js (mode: 'all')
import nuxt_plugin_vform_f95cee7a from 'nuxt_plugin_vform_f95cee7a' // Source: ../plugins/vform (mode: 'all')
import nuxt_plugin_axios_fb9c9a02 from 'nuxt_plugin_axios_fb9c9a02' // Source: ../plugins/axios (mode: 'all')
import nuxt_plugin_vue2filters_021c5ff1 from 'nuxt_plugin_vue2filters_021c5ff1' // Source: ../plugins/vue2-filters (mode: 'all')
import nuxt_plugin_validate_c1ca0c26 from 'nuxt_plugin_validate_c1ca0c26' // Source: ../plugins/validate (mode: 'client')
import nuxt_plugin_datepicker_d123f65a from 'nuxt_plugin_datepicker_d123f65a' // Source: ../plugins/datepicker (mode: 'client')
import nuxt_plugin_paystack_46971bb7 from 'nuxt_plugin_paystack_46971bb7' // Source: ../plugins/paystack (mode: 'client')
import nuxt_plugin_vuegoodtable_6479f65b from 'nuxt_plugin_vuegoodtable_6479f65b' // Source: ../plugins/vue-good-table (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"KlasroomApp","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"## Build Setup"},{"http-equiv":"Content-Security-Policy","content":"img-src 'self' data: *; default-src 'self' data: 'unsafe-inline' 'unsafe-eval' https:\u002F\u002F*; connect-src 'self' https:\u002F\u002F*"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_3719dadc === 'function') {
    await nuxt_plugin_plugin_3719dadc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_srcplugin69c1c950_6238fe35 === 'function') {
    await nuxt_plugin_srcplugin69c1c950_6238fe35(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_1c3ad858 === 'function') {
    await nuxt_plugin_pluginclient_1c3ad858(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_fc176c40 === 'function') {
    await nuxt_plugin_pluginserver_fc176c40(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_525cb08e === 'function') {
    await nuxt_plugin_workbox_525cb08e(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_41fb89a1 === 'function') {
    await nuxt_plugin_metaplugin_41fb89a1(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_46a32f15 === 'function') {
    await nuxt_plugin_iconplugin_46a32f15(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_68e86ff2 === 'function') {
    await nuxt_plugin_axios_68e86ff2(app.context, inject)
  }

  if (typeof nuxt_plugin_libplugin796218f6_1754d1fe === 'function') {
    await nuxt_plugin_libplugin796218f6_1754d1fe(app.context, inject)
  }

  if (typeof nuxt_plugin_vform_f95cee7a === 'function') {
    await nuxt_plugin_vform_f95cee7a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_fb9c9a02 === 'function') {
    await nuxt_plugin_axios_fb9c9a02(app.context, inject)
  }

  if (typeof nuxt_plugin_vue2filters_021c5ff1 === 'function') {
    await nuxt_plugin_vue2filters_021c5ff1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_validate_c1ca0c26 === 'function') {
    await nuxt_plugin_validate_c1ca0c26(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_datepicker_d123f65a === 'function') {
    await nuxt_plugin_datepicker_d123f65a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_paystack_46971bb7 === 'function') {
    await nuxt_plugin_paystack_46971bb7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuegoodtable_6479f65b === 'function') {
    await nuxt_plugin_vuegoodtable_6479f65b(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
