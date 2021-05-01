/**
 * Get cookie from request.
 *
 * @param  {Object} req
 * @param  {String} key
 * @return {String|undefined}
 */
export function cookieFromRequest(req, key) {
  if (!req.headers.cookie) return

  const cookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`))

  if (cookie) {
    return decodeURIComponent(cookie.replace(key + '=', ''))
  }
}

/**
 * https://router.vuejs.org/en/advanced/scroll-behavior.html
 */
export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  let position = {}

  if (to.matched.length < 2) {
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    position = { x: 0, y: 0 }
  }
  if (to.hash) {
    position = { selector: to.hash }
  }

  return position
}

export const reference = () => {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  return 'KLA-' + text
}

export const getAuthHeader = (authToken) => {
  return {
    "Content-Type": "application/json",
    Authorization: `${authToken}`,
  };
}

export const getAccessTokenHeader = (accessToken) => {
  return {
    "Content-Type": "application/json",
    "Access-Token": `${accessToken}`,
  };
}

export const getAuthFileHeader = (authToken) => {
  return {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${authToken}`,
  };
}

export const ICE_CONFIG = {
  iceTransportPolicy: "all",
  reconnectTimer: 3000,

  // These settings are no secret, since they are readable from the client side anyway
  iceServers: [
    {
      urls: process.env.VUE_APP_STUN_URL,
    },
    {
      urls: process.env.VUE_APP_TURN_URL,
      username: process.env.VUE_APP_TURN_USER,
      credential: process.env.VUE_APP_TURN_PASSWORD,
    },
  ],
}

export const SIGNAL_SERVER_URL = process.env.VUE_APP_SIGNAL_URL
