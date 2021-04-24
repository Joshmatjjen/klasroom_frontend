<template>
  <div></div>
</template>

<script>
export default {
  middleware: ['check-auth', 'isAuth'],
  created() {
    const token = this.$route.query.token
    if (token) {
      this.$store.commit('app/VALIDATION_MODAL', {token, type: 'reset', isValidating: true })
      this.$store.dispatch("auth/validateToken", {
        token, type: 'reset', isValidating: true
      })
      .then((res) => {
        if (res) {
          console.log('finished validation: ', res)
          this.$store.commit('app/VALIDATION_MODAL', {token, type: 'reset', isValidating: false })
        }
        else 
          this.$store.commit('app/VALIDATION_MODAL', null)
          // this.$store.commit('app/VALIDATION_MODAL', {token, type: 'reset', isValidating: false })
      }).catch(e => console.log('e: ', e));
    }
    else this.$router.push("/")
  },
  // fetch(context) {
  //   console.log('router: ', context.route.query.token)
  //   const token = context.route.query.token
  //   if (token) {
  //     context.store.commit('app/VALIDATION_MODAL', {token, type: 'reset', isValidating: true })
  //     context.store.dispatch("auth/validateToken", {
  //       token, type: 'reset', isValidating: true
  //     })
  //     .then((res) => {
  //       if (res) {
  //         console.log('finished validation: ', res)
  //         context.store.commit('app/VALIDATION_MODAL', {token, type: 'reset', isValidating: false })
  //       }
  //       else 
  //         context.store.commit('app/VALIDATION_MODAL', null)
  //     }).catch(e => console.log('e: ', e));
  //     console.log('end mounted')
  //   }
  //   else context.redirect('/')
  // },
  // fetchOnServer: false,
}
</script>
