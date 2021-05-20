<template>
  <div class="layout">
    <sidebar />
    <div
      class="content-wrapper dashboard md:px-5 sm:px-0 flex flex-col justify-between"
    >
      <dash-navbar-mobile :key="$route.fullPath" v-if="$device.isMobile" />
      <dash-navbar :key="$route.fullPath" v-else />
      <div class="container mx-auto px-2 my-5">
        <Nuxt />
      </div>
      <dash-footer />
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
