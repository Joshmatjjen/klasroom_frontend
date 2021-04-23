<template>
  <div></div>
</template>

<script>
export default {
  created() {
    const token = this.$route.query.token
    if (token) {
      this.$store.commit('app/VALIDATION_MODAL', {token, type: 'new_email', isValidating: true })
      this.$store.dispatch("auth/validateToken", {
        token, type: 'new_email', isValidating: true
      })
      .then((res) => {
        if (res) {
          console.log('finished validation: ', res)
          this.$store.commit('app/VALIDATION_MODAL', {token, type: 'new_email', isValidating: false, email: res.email })
        }
        else 
          // this.$store.commit('app/VALIDATION_MODAL', null)
          this.$store.commit('app/VALIDATION_MODAL', {token, type: 'new_email', isValidating: false })
      }).catch(e => console.log('e: ', e));
    }
    else this.$router.push("/")
  },
}
</script>
