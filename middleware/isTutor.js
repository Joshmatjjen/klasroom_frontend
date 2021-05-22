import { getAccessTokenHeader } from '~/utils'

export default function (context) {
  console.log("[Middleware] isTutor");
  if (context.store.getters["auth/user"] && !context.store.getters["auth/user"].isTutor) {
    context.redirect(`/student/dashboard`);
  }
  else if (context.store.getters["auth/user"]) {
    return context.$axios.$get(`users/tutor/validate`, {
      headers: getAccessTokenHeader(context.store.getters["auth/token"])
    }).then(res => {
      console.log('res: ', res)
    }).catch(err => {
      context.redirect(`/student/dashboard`);
    })
  }
}
