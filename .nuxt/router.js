import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45ca42d6 = () => interopDefault(import('../pages/courses/index.vue' /* webpackChunkName: "pages/courses/index" */))
const _14cf72bc = () => interopDefault(import('../pages/webinars/index.vue' /* webpackChunkName: "pages/webinars/index" */))
const _45ffeb7a = () => interopDefault(import('../pages/auth/reset-password.vue' /* webpackChunkName: "pages/auth/reset-password" */))
const _368a671a = () => interopDefault(import('../pages/auth/validation.vue' /* webpackChunkName: "pages/auth/validation" */))
const _75336db3 = () => interopDefault(import('../pages/student/account.vue' /* webpackChunkName: "pages/student/account" */))
const _44b9b142 = () => interopDefault(import('../pages/student/chat.vue' /* webpackChunkName: "pages/student/chat" */))
const _0efd09c1 = () => interopDefault(import('../pages/student/courses/index.vue' /* webpackChunkName: "pages/student/courses/index" */))
const _3f201f1a = () => interopDefault(import('../pages/student/dashboard.vue' /* webpackChunkName: "pages/student/dashboard" */))
const _25510b87 = () => interopDefault(import('../pages/student/faqs.vue' /* webpackChunkName: "pages/student/faqs" */))
const _1f046cfe = () => interopDefault(import('../pages/student/my-courses.vue' /* webpackChunkName: "pages/student/my-courses" */))
const _916bf560 = () => interopDefault(import('../pages/student/my-webinars.vue' /* webpackChunkName: "pages/student/my-webinars" */))
const _6cb16cf8 = () => interopDefault(import('../pages/student/saved-courses.vue' /* webpackChunkName: "pages/student/saved-courses" */))
const _12a6838d = () => interopDefault(import('../pages/student/settings.vue' /* webpackChunkName: "pages/student/settings" */))
const _83930ed8 = () => interopDefault(import('../pages/student/suggested-courses.vue' /* webpackChunkName: "pages/student/suggested-courses" */))
const _beb18ec6 = () => interopDefault(import('../pages/student/suggested-webinars.vue' /* webpackChunkName: "pages/student/suggested-webinars" */))
const _25df1560 = () => interopDefault(import('../pages/student/upcoming-webinars.vue' /* webpackChunkName: "pages/student/upcoming-webinars" */))
const _0008fe14 = () => interopDefault(import('../pages/student/webinars/index.vue' /* webpackChunkName: "pages/student/webinars/index" */))
const _c8316aa4 = () => interopDefault(import('../pages/tutor/account.vue' /* webpackChunkName: "pages/tutor/account" */))
const _13a46e27 = () => interopDefault(import('../pages/tutor/chat.vue' /* webpackChunkName: "pages/tutor/chat" */))
const _47d00308 = () => interopDefault(import('../pages/tutor/courses/index.vue' /* webpackChunkName: "pages/tutor/courses/index" */))
const _ef5ead56 = () => interopDefault(import('../pages/tutor/dashboard.vue' /* webpackChunkName: "pages/tutor/dashboard" */))
const _17886f28 = () => interopDefault(import('../pages/tutor/faqs.vue' /* webpackChunkName: "pages/tutor/faqs" */))
const _6542f2b4 = () => interopDefault(import('../pages/tutor/my-courses.vue' /* webpackChunkName: "pages/tutor/my-courses" */))
const _7680eccb = () => interopDefault(import('../pages/tutor/my-webinars.vue' /* webpackChunkName: "pages/tutor/my-webinars" */))
const _39cc61b3 = () => interopDefault(import('../pages/tutor/saved-courses.vue' /* webpackChunkName: "pages/tutor/saved-courses" */))
const _7b23741c = () => interopDefault(import('../pages/tutor/settings.vue' /* webpackChunkName: "pages/tutor/settings" */))
const _31fad062 = () => interopDefault(import('../pages/tutor/suggested-courses.vue' /* webpackChunkName: "pages/tutor/suggested-courses" */))
const _dd41fe7c = () => interopDefault(import('../pages/tutor/suggested-webinars.vue' /* webpackChunkName: "pages/tutor/suggested-webinars" */))
const _4eab349b = () => interopDefault(import('../pages/tutor/upcoming-webinars.vue' /* webpackChunkName: "pages/tutor/upcoming-webinars" */))
const _5381b8ca = () => interopDefault(import('../pages/tutor/webinars/index.vue' /* webpackChunkName: "pages/tutor/webinars/index" */))
const _a211c478 = () => interopDefault(import('../pages/student/webinars/new.vue' /* webpackChunkName: "pages/student/webinars/new" */))
const _fde3657e = () => interopDefault(import('../pages/student/courses/view/_slug.vue' /* webpackChunkName: "pages/student/courses/view/_slug" */))
const _2c19e1a8 = () => interopDefault(import('../pages/student/webinars/view/_slug.vue' /* webpackChunkName: "pages/student/webinars/view/_slug" */))
const _71c61566 = () => interopDefault(import('../pages/tutor/courses/view/_slug.vue' /* webpackChunkName: "pages/tutor/courses/view/_slug" */))
const _10344ba7 = () => interopDefault(import('../pages/tutor/webinars/view/_slug.vue' /* webpackChunkName: "pages/tutor/webinars/view/_slug" */))
const _49378566 = () => interopDefault(import('../pages/courses/_slug.vue' /* webpackChunkName: "pages/courses/_slug" */))
const _183cb54c = () => interopDefault(import('../pages/webinars/_slug.vue' /* webpackChunkName: "pages/webinars/_slug" */))
const _a377c3a8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/courses",
    component: _45ca42d6,
    name: "courses"
  }, {
    path: "/webinars",
    component: _14cf72bc,
    name: "webinars"
  }, {
    path: "/auth/reset-password",
    component: _45ffeb7a,
    name: "auth-reset-password"
  }, {
    path: "/auth/validation",
    component: _368a671a,
    name: "auth-validation"
  }, {
    path: "/student/account",
    component: _75336db3,
    name: "student-account"
  }, {
    path: "/student/chat",
    component: _44b9b142,
    name: "student-chat"
  }, {
    path: "/student/courses",
    component: _0efd09c1,
    name: "student-courses"
  }, {
    path: "/student/dashboard",
    component: _3f201f1a,
    name: "student-dashboard"
  }, {
    path: "/student/faqs",
    component: _25510b87,
    name: "student-faqs"
  }, {
    path: "/student/my-courses",
    component: _1f046cfe,
    name: "student-my-courses"
  }, {
    path: "/student/my-webinars",
    component: _916bf560,
    name: "student-my-webinars"
  }, {
    path: "/student/saved-courses",
    component: _6cb16cf8,
    name: "student-saved-courses"
  }, {
    path: "/student/settings",
    component: _12a6838d,
    name: "student-settings"
  }, {
    path: "/student/suggested-courses",
    component: _83930ed8,
    name: "student-suggested-courses"
  }, {
    path: "/student/suggested-webinars",
    component: _beb18ec6,
    name: "student-suggested-webinars"
  }, {
    path: "/student/upcoming-webinars",
    component: _25df1560,
    name: "student-upcoming-webinars"
  }, {
    path: "/student/webinars",
    component: _0008fe14,
    name: "student-webinars"
  }, {
    path: "/tutor/account",
    component: _c8316aa4,
    name: "tutor-account"
  }, {
    path: "/tutor/chat",
    component: _13a46e27,
    name: "tutor-chat"
  }, {
    path: "/tutor/courses",
    component: _47d00308,
    name: "tutor-courses"
  }, {
    path: "/tutor/dashboard",
    component: _ef5ead56,
    name: "tutor-dashboard"
  }, {
    path: "/tutor/faqs",
    component: _17886f28,
    name: "tutor-faqs"
  }, {
    path: "/tutor/my-courses",
    component: _6542f2b4,
    name: "tutor-my-courses"
  }, {
    path: "/tutor/my-webinars",
    component: _7680eccb,
    name: "tutor-my-webinars"
  }, {
    path: "/tutor/saved-courses",
    component: _39cc61b3,
    name: "tutor-saved-courses"
  }, {
    path: "/tutor/settings",
    component: _7b23741c,
    name: "tutor-settings"
  }, {
    path: "/tutor/suggested-courses",
    component: _31fad062,
    name: "tutor-suggested-courses"
  }, {
    path: "/tutor/suggested-webinars",
    component: _dd41fe7c,
    name: "tutor-suggested-webinars"
  }, {
    path: "/tutor/upcoming-webinars",
    component: _4eab349b,
    name: "tutor-upcoming-webinars"
  }, {
    path: "/tutor/webinars",
    component: _5381b8ca,
    name: "tutor-webinars"
  }, {
    path: "/student/webinars/new",
    component: _a211c478,
    name: "student-webinars-new"
  }, {
    path: "/student/courses/view/:slug?",
    component: _fde3657e,
    name: "student-courses-view-slug"
  }, {
    path: "/student/webinars/view/:slug?",
    component: _2c19e1a8,
    name: "student-webinars-view-slug"
  }, {
    path: "/tutor/courses/view/:slug?",
    component: _71c61566,
    name: "tutor-courses-view-slug"
  }, {
    path: "/tutor/webinars/view/:slug?",
    component: _10344ba7,
    name: "tutor-webinars-view-slug"
  }, {
    path: "/courses/:slug",
    component: _49378566,
    name: "courses-slug"
  }, {
    path: "/webinars/:slug",
    component: _183cb54c,
    name: "webinars-slug"
  }, {
    path: "/",
    component: _a377c3a8,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
