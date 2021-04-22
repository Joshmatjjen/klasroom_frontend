<template>
  <div></div>
</template>

<script>
export default {
  beforeMount() {
    console.log('context', this.$router)
    this.$router.push('/')
    this.$store.commit('app/BECOME_A_TUTOR_MODAL', true)
  },
}
</script>
