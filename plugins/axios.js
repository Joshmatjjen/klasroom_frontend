import Swal from 'sweetalert2'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default ({ $axios, app, store, redirect, route }) => {
  $axios.setBaseURL(process.env.baseUrl)

  // Request interceptor
  $axios.onRequest((request) => {
    request.baseURL = process.env.baseUrl

    request.headers['Secret'] = process.env.secret
    request.headers["Content-Type"] = "application/json"

    let token = store.getters['auth/token']
    // console.log('Axios token:', token)
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    } else {
      delete request.headers.Authorization
    }

    // console.log('Current token: ', request.headers)
    // console.log('route url: ', route.fullPath)
    // console.log('request.url: ', request.url)
    // console.log('is Local: ', local)
    // console.log('Current token: ', request.headers.common.Authorization)

    const locale = store.getters['lang/locale']
    if (locale) {
      request.headers.common['Accept-Language'] = locale
    }

    return request
  })

  if (process.server) {
    return
  }

  // Response interceptor
  $axios.onError((error) => {
    const { status } = error.response || {}

    if (status >= 500) {
      Swal.fire({
        position: 'top-end',
        width: '350px',
        text: 'Something went wrong. Try again',
        backdrop: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        showCloseButton: true,
        timer: 5000,
      })
    }

    if (status === 401 && store.getters['auth/check']) {

      store.dispatch('auth/logout')

      Swal.fire({
        position: 'top-end',
        width: '350px',
        text: 'Your session has expired',
        backdrop: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        showCloseButton: true,
        timer: 5000,
        // reverseButtons: true,
        // confirmButtonText: app.i18n.t('login'),
        // cancelButtonText: app.i18n.t('cancel')
      }).then(() => {
        redirect({ name: 'login' })
      })
    }

    if (status === 400 || status === 409 || status === 404) {

      Swal.fire({
        position: 'top-end',
        width: '350px',
        text: error.response.data.message,
        backdrop: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        showCloseButton: true,
        timer: 5000,
      }).then(() => {
        redirect({ name: 'login' })
      })
    }

    // no access to route
    if (status === 403 && store.getters['auth/check']) {
      redirect({ name: 'dashboard' })
    }

    return Promise.reject(error)
  })

  $axios.onResponse((res) => {
    const { status, data } = res;
    console.log('new data: ', data)
    if (status === 200
      && (data.message === "Check your email for confirmation link before proceeding"
        || data.message === "A text message was sent to the email associated with your account.")) {

      Swal.fire({
        position: 'top-end',
        width: '350px',
        text: data.message,
        backdrop: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        showCloseButton: true,
        timer: 6000,
      }).then(() => {
        redirect({ name: 'login' })
      })

    }
  })
}
