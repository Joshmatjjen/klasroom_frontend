<template>
  <div class="container px-4">
    <div
      @click="toggleUserMenu"
      :class="{ hidden: !userMenu }"
      class="fixed"
      :style="{ width: '100%', height: '100vh', zIndex: 2 }"
    ></div>
    <nav class="flex flex-col pt-3">
      <div class="flex flex-row">
        <button class="flex items-center h-9 pr-3" @click="toggleSidebar">
          <img src="/icon/hamburger.svg" />
        </button>
        <router-link
          :to="{ name: 'student-dashboard' }"
          class="inline-flex mr-auto"
        >
          <img src="~/static/logo.svg" alt="Casava.co" class="w-8/12" />
        </router-link>
        <button class="flex items-center h-9 pr-4" @click="toggleSidebar">
          <img src="/icon/search.svg" />
        </button>
        <div class="notification mr-4">
          <span>{{ 0 }}</span>
        </div>
        <a href="#" class="inline-block relative" @click="toggleUserMenu">
          <span
            class="user-avatar mr-1"
            :style="{ backgroundImage: 'url(/avatar.jpg)' }"
          ></span>
          <div
            class="user-menu-drop shadow-hover relative"
            :class="{ hidden: !userMenu }"
          >
            <div class="px-4 md:px-5 lg:px-6 py-3">
              <nuxt-link
                :to="`/${userDash}/dashboard`"
                class="text-gray-700 block py-2"
              >
                <span class="text-sm">Dashboard</span>
              </nuxt-link>
              <nuxt-link
                :to="`/${userDash}/account`"
                class="text-gray-700 block py-2"
              >
                <span class="text-sm">Account</span>
              </nuxt-link>
              <nuxt-link
                :to="`/${userDash}/settings`"
                class="text-gray-700 block py-2"
              >
                <span class="text-sm">Settings</span>
              </nuxt-link>
              <a @click="logout" class="text-gray-700 block py-2">
                <span class="text-sm">Sign out</span>
              </a>
            </div>
          </div>
        </a>
      </div>
      <div class="flex flex-col mt-6">
        <h5 class="font-semibold text-gray-700 text-xs text-center">
          {{ title }}
        </h5>
        <hr class="mt-3 mx-8" />
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    open: false,
    userMenu: false,
  }),
  computed: {
    ...mapState({
      // menu: (state) => state.app.menu,
      title: (state) => state.app.pageTitle,
      user: (state) => state.auth.user,
      userType: (state) =>
        state.auth.user && state.auth.user.isTutor ? 'tutor' : 'student',
    }),
  },
  props: {
    userDash: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleSidebar(e) {
      if (e) e.preventDefault()

      this.$store.commit('app/SET_MENU', !this.menu)
    },
    toggleMenu() {
      this.open = !this.open
    },
    toggleLogin(e) {
      if (e) e.preventDefault()
      this.open = false
      this.$store.commit('app/LOGIN_MODAL', 'login')
    },
    toggleUserMenu(e) {
      if (e) e.preventDefault()
      this.userMenu = !this.userMenu
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style scoped>
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
.notification {
  position: relative;
  display: inline-block;
  background-color: rgba(249, 158, 66, 0.2);
  border-radius: 12px;
  background-image: url('/icon/notice-bell.svg');
  background-repeat: no-repeat;
  background-position: 50%;
  width: 36px;
  height: 36px;
  vertical-align: middle;
}
.notification > span {
  display: inline-block;
  padding: 0 3px;
  position: absolute;
  background-color: rgb(255, 51, 95);
  border-radius: 7.5px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  top: 8px;
  right: 8px;
}
.user-avatar {
  border-radius: 7.5px;
  background-color: #e9e9e9;
  display: inline-block;
  width: 36px;
  height: 36px;
  vertical-align: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.user-menu-drop {
  z-index: 5;
  top: 45px;
  min-width: 185px;
  @apply absolute w-full right-0;
  @apply bg-white rounded-xl border border-gray-300;
}

@media (min-width: 768px) {
  .menu-group {
    @apply flex items-center w-auto shadow-none;
    @apply bg-transparent px-0 mt-0;
  }
}
@media (max-width: 768px) {
  .notification {
    background-size: 15px;
  }
  .notification > span {
    border-radius: 6px;
    font-size: 8px;
    top: 6px;
    right: 6px;
  }
}
</style>
