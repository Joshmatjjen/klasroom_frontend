<template>
  <div class="container mx-auto">
    <div
      @click="toggleUserMenu"
      :class="{ hidden: !userMenu }"
      class="fixed"
      :style="{ width: '100%', height: '100vh', zIndex: 2 }"
    ></div>
    <nav class="flex items-center justify-between flex-wrap py-4 md:py-6">
      <h5
        class="flex items-center flex-shrink-0 mr-6 ml-4 lg:ml-0 font-extrabold text-gray-700"
      >
        {{ title }}
      </h5>
      <div :class="{ hidden: !open }" class="menu-group">
        <div class="ml-auto mr-24" @click="toggleMenu">
          <NavSearchBox />
        </div>
        <!-- <div
          class="mt-8 md:mt-0 mb-6 md:mb-0 lg:border-l border-gray-400 lg:pl-6"
        >
          <div class="notification mr-3">
            <span>{{ 0 }}</span>
          </div>
          <a
            href="#"
            class="user-menu lg:mt-0 block md:inline-block relative"
            @click="toggleUserMenu"
          >
            <span
              class="user-avatar mr-1"
              :style="{ backgroundImage: 'url(/avatar.jpg)' }"
            ></span>
            <div class="inline-block text-left text-xs mr-2 pt-1">
              <span class="block text-gray-700 font-bold leading-tight">
                {{ user ? user.name : 'Oluwadamilare Adedeji' }}
              </span>
              <span class="block text-gray-600">{{ user ? user.email : 'damilare@gmail.com' }}</span>
            </div>
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
                <a @click="switchDash" class="text-gray-700 block py-2">
                  <span class="text-sm">
                    {{ 
                      userDash === "student" && userType === "tutor" 
                      ? "Switch to Tutor" 
                      : userDash === "student" && userType === "student" 
                      ? "Become a Tutor" 
                      : "Switch to Student" 
                    }}
                  </span>
                </a>
                <a @click="logout" class="text-gray-700 block py-2">
                  <span class="text-sm">Sign out</span>
                </a>
              </div>
            </div>
          </a>
        </div> -->
        <user-dropdown
          :userDash="userDash"
          :userType="userType"
          :userMenu="userMenu"
          :user="user"
          :toggleUserMenu="toggleUserMenu"
          :logout="logout"
          :switchDash="switchDash"
          :profileImage="profileImage"
        >
        </user-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserDropdown from './UserDropdown.vue'
export default {
  components: { UserDropdown },
  data: () => ({
    open: false,
    userMenu: false,
  }),
  computed: {
    ...mapState({
      darkMenu: (state) => state.app.darkMenu,
      title: (state) => state.app.pageTitle,
      user: (state) => state.auth.user,
      userType: (state) =>
        state.auth.user && state.auth.user.isTutor ? 'tutor' : 'student',
      profileImage: (state) => state.auth.profileImage,
    }),
    userDash() {
      return this.$route.path.split('/')[1]
    },
  },
  methods: {
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
      console.log('hide user menu...')
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
    switchDash() {
      if (this.userDash === 'student' && this.userType === 'tutor')
        this.$router.push(`/tutor/dashboard`)
      else if (this.userDash === 'student' && this.userType === 'student') {
        // Become a tutor
        console.log('become a tutor...')
        // this.toggleUserMenu()
        this.$store.commit('app/BECOME_A_TUTOR_MODAL', true)
      } else this.$router.push(`/student/dashboard`)
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
  width: 48px;
  height: 48px;
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
.user-menu {
  background-image: url('/icon/dash-user-drop.svg');
  background-repeat: no-repeat;
  background-position: top 50% right 17px;
  padding: 3px;
  @apply border border-gray-400 rounded-xl pr-12;
  @apply align-bottom;
}
.user-menu-drop {
  z-index: 5;
  top: 52px;
  min-width: 220px;
  @apply absolute w-full right-0;
  @apply bg-white rounded-xl border border-gray-300;
}
.user-avatar {
  border-radius: 7.5px;
  background-color: #e9e9e9;
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 768px) {
  .menu-group {
    @apply flex items-center w-auto shadow-none;
    @apply bg-transparent px-0 mt-0;
  }
}
</style>
