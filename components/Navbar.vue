<template>
  <div :class="{ 'bg-orange-100': darkMenu }">
    <div
      @click="toggleUserMenu"
      :class="{ hidden: !userMenu }"
      class="fixed"
      :style="{ width: '100%', height: '100vh', zIndex: 2 }"
    ></div>
    <div
      @click="() => toggleOpt('all')"
      :class="{ hidden: !loginOpt && !signUpOpt }"
      class="fixed"
      :style="{ width: '100%', height: '100vh', zIndex: 2 }"
    ></div>
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap py-4 md:py-6">
        <nuxt-link
          to="/"
          class="flex items-center flex-shrink-0 mr-6 ml-4 lg:ml-0"
        >
          <img src="/logo.svg" />
        </nuxt-link>
        <div class="block lg:hidden mr-4 lg:mr-0">
          <button
            class="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-900"
            @click="toggleMenu"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div :class="{ hidden: !open }" class="menu-group">
          <div class="mx-auto" @click="toggleMenu">
            <nuxt-link
              to="/courses"
              class="menu-item mt-4 block lg:inline-block lg:mt-0"
            >
              Courses
            </nuxt-link>
            <nuxt-link
              to="/webinars"
              class="menu-item mt-4 block lg:inline-block lg:mt-0"
            >
              Webinars
            </nuxt-link>
            <nuxt-link
              to="/klasroom-for-business"
              class="menu-item mt-4 block lg:inline-block lg:mt-0"
            >
              Klasroom for Business
            </nuxt-link>
            <nuxt-link
              to="/blog"
              class="menu-item mt-4 block lg:inline-block lg:mt-0 mr-0"
            >
              Blog
            </nuxt-link>
          </div>
          <div
            v-if="user"
            class="mt-8 md:mt-0 mb-6 md:mb-0 flex flex-row relative"
          >
            <user-dropdown
              :userMenu="userMenu"
              :user="user"
              :toggleUserMenu="toggleUserMenu"
              :logout="logout"
              :profileImage="profileImage"
            >
            </user-dropdown>
          </div>
          <div v-else class="mt-8 md:mt-0 mb-6 md:mb-0 flex flex-row relative">
            <!-- <a
              href="#"
              class="btn lg:mr-4 bg-blue-400 text-white md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
              @click="(e) => toggleLogin(e, 'student')"
            >
              Log In
            </a> -->
            <a
              href="#"
              class="btn btn-primary lg:mt-0 lg:mr-4 flex flex-row"
              @click.prevent="() => toggleOpt('login')"
            >
              <p>Log In</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <div
              :class="{ hidden: !loginOpt }"
              class="pop-up absolute bg-white border-1 left-0 rounded-lg h-52 w-64 shadow-lg"
              :style="{ zIndex: 2 }"
            >
              <a
                href="#"
                class="pop-up-item lg:mr-4 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="(e) => toggleLogin(e, 'student')"
              >
                Student Login
              </a>
              <a
                href="#"
                class="pop-up-item lg:mr-4 md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="(e) => toggleLogin(e, 'tutor')"
              >
                <p>Tutor Login</p>
              </a>
            </div>
            <a
              href="#"
              class="btn btn-primary lg:mt-0 flex flex-row"
              @click.prevent="() => toggleOpt('signup')"
            >
              <p>Sign Up</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <div
              :class="{ hidden: !signUpOpt }"
              class="pop-up absolute bg-white border-1 right-0 rounded-lg h-52 w-64 shadow-lg"
              :style="{ zIndex: 2 }"
            >
              <a
                href="#"
                class="pop-up-item lg:mr-4 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="(e) => toggleRegister(e, 'student')"
              >
                Become a Student
              </a>
              <a
                href="#"
                class="pop-up-item lg:mr-4 md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="(e) => toggleRegister(e, 'tutor')"
              >
                <p>Become a Tutor</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
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
      user: (state) => state.auth.user,
      profileImage: (state) => state.auth.profileImage,
    }),
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    },
    toggleLogin(e, userType) {
      if (e) e.preventDefault()
      this.toggleOpt('all')
      this.open = false
      this.$store.commit('app/LOGIN_MODAL', {
        status: true,
        type: 'login',
        userType,
      })
    },
    toggleRegister(e, userType) {
      if (e) e.preventDefault()
      this.toggleOpt('all')
      this.open = false
      this.$store.commit('app/LOGIN_MODAL', {
        status: true,
        type: 'register',
        userType,
      })
    },
    toggleOpt(type) {
      if (type === 'all') {
        this.signUpOpt = false
        this.loginOpt = false
      } else if (type === 'signup') this.signUpOpt = !this.signUpOpt
      else if (type === 'login') this.loginOpt = !this.loginOpt
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
