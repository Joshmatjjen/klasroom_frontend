<template>
  <div class="layout">
    <sidebar />
    <div class="content-wrapper dashboard md:px-10 sm:px-0">
      <dash-navbar-mobile :key="$route.fullPath" v-if="$device.isMobile" />
      <dash-navbar :key="$route.fullPath" v-else />
      <div class="container mx-auto px-2 mt-8 mb-5">
        <Nuxt />
        <dash-footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  updated() {
    // console.log('default layout mounted')
    this.$store.commit('app/SET_MENU', false)
  },
}
</script>

<style scoped>
.layout {
  background: #fcf8f7;
}
</style>
