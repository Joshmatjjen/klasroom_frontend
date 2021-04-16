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
          <div class="mt-8 md:mt-0 mb-6 md:mb-0 flex flex-row relative">
            <a
              href="#"
              class="btn lg:mr-4 bg-blue-400 text-white md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
              @click="toggleLogin"
            >
              Log In
            </a>
            <a
              href="#"
              class="btn btn-primary lg:mt-0 flex flex-row"
              @click="toggleSignUpOpt"
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
              :class="{ hidden: !opt }"
              class="pop-up absolute bg-white border-1 rounded-lg h-52 w-64 shadow-lg"
            >
              <a
                href="#"
                class="pop-up-item lg:mr-4 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="toggleLogin"
              >
                Become a student
              </a>
              <a
                href="#"
                class="pop-up-item lg:mr-4 md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
                @click="toggleRegister"
              >
                <p>Become a tutor</p>
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
    opt: false,
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
      this.opt = false
      this.open = false
      this.$store.commit('app/LOGIN_MODAL', 'login')
    },
    toggleRegister(e) {
      if (e) e.preventDefault()
      this.opt = false
      this.open = false
      this.$store.commit('app/LOGIN_MODAL', 'register')
    },
    toggleSignUpOpt() {
      this.opt = !this.opt
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
