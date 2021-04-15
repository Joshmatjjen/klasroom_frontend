<template>
  <div :class="{ 'bg-orange-100': darkMenu }">
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
          <div class="mt-8 md:mt-0 mb-6 md:mb-0">
            <a
              href="#"
              class="btn lg:mr-4 bg-blue-400 text-white md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
              @click="toggleLogin"
            >
              Log In
            </a>
            <a
              href="#"
              class="btn btn-primary lg:mt-0 block md:inline-block"
              @click="toggleRegister"
            >
              Sign Up
            </a>
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
  }),
  computed: {
    ...mapState({
      darkMenu: (state) => state.app.darkMenu,
    }),
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
    toggleRegister(e) {
      if (e) e.preventDefault()
      this.open = false
      this.$store.commit('app/LOGIN_MODAL', 'register')
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
@media (min-width: 768px) {
  .menu-group {
    @apply flex items-center w-auto shadow-none;
    @apply bg-transparent px-0 mt-0;
  }
}
</style>
