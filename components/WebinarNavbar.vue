<template>
  <div :class="{ 'bg-orange-100': darkMenu }">
    <div class="flex flex-row justify-center w-full h-20 relative">
      <nav class="flex items-center justify-self-end flex-wrap py-4 md:py-6">
        <nuxt-link to="/" class="flex items-center flex-shrink-0 mx-auto">
          <img src="/logo.svg" />
        </nuxt-link>
      </nav>

      <button
        class="sidbar-nav absolute right-0 flex items-center justify-center h-8 px-3"
        @click="toggleSidebar"
      >
        <img src="/icon/hamburger.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    open: false,
    signUpOpt: false,
    loginOpt: false,
    userMenu: false,
  }),
  computed: {
    ...mapState({
      darkMenu: (state) => state.app.darkMenu,
      webinarSideBar: (state) => state.app.webinarSideBar,
    }),
  },
  methods: {
    toggleSidebar() {
      if (this.webinarSideBar)
        this.$store.commit('app/SET_WEBINAR_SIDEBAR', null)
      else this.$store.commit('app/SET_WEBINAR_SIDEBAR', true)
    },
  },
}
</script>

<style scoped>
.sidbar-nav {
  top: calc(50% - 1rem);
  right: 10px;
}
.menu-group {
  @apply transition duration-500;
  @apply w-full flex-grow bg-white mt-5 shadow-lg px-4;
}
.menu-item {
  @apply text-sm text-black mr-8;
}
.menu-item:hover {
  @apply text-orange-500;
}
.menu-item.has-child {
  background-image: url('/actions/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: right 0 top 8px;
  padding-right: 24px;
}
.btn {
  @apply text-center;
}
.pop-up {
  top: 4rem;
  right: 0;
}
.pop-up-item {
  padding: 12.5px 36px;
  font-size: 0.875rem;
  font-weight: 300;
  border-radius: 0.5rem;
}

@media (min-width: 768px) {
  .menu-group {
    @apply flex items-center w-auto shadow-none;
    @apply bg-transparent px-0 mt-0;
  }
}
</style>
