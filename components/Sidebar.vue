<template>
  <div class="sidebar" :class="menu ? 'open' : 'closed'">
    <span class="overlay" @click="toggleNav"></span>
    <div class="relative lg:sticky top-0">
      <div class="pt-5 relative">
        <button
          variant="light"
          class="menu-close my-auto text-left outline-none focus:outline-none lg:hidden"
          @click="toggleNav"
        >
          <img src="~/static/close.svg" />
        </button>
        <div class="px-4 lg:col-span-1 text-left lg:text-center">
          <router-link to="/">
            <img
              src="~/static/logo.svg"
              alt="Casava.co"
              class="ml-2 lg:mx-auto w-7/12 lg:w-auto"
            />
          </router-link>
        </div>
      </div>
      <div class="menu-scroll">
        <nav class="h-full">
          <span v-if="$route.name !== `${userDash}-webinars-new`" class="flex justify-center" :class="userDash === 'tutor' ? 'mb-3' : 'mb-10'">
            <nuxt-link
              :to="`/${userDash}/webinars/new`"
              class="btn btn-primary"
              style="padding-left: 1rem; padding-right: 1rem;"
            >
              <!-- <img src="/icon/camera.svg" class="inline h-5 mr-2" /> -->
              New Meeting or Webinar
            </nuxt-link>
          </span>
          <span v-if="userDash === 'tutor'" class="flex justify-center mb-10">
            <nuxt-link
              :to="`/${userDash}/courses/create`"
              class="btn btn-primary"
            >
              <!-- <img src="/icon/camera.svg" class="inline h-5 mr-2" /> -->
              New Course
            </nuxt-link>
          </span>
          <ul class="relative h-full" @click="toggleNav">
            
            <li class="nav-item">
              <router-link
                :to="{ name: `${userDash}-dashboard` }"
                class="nav-link nav-home"
                active-class="active"
                exact
              >
                Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: `${userDash}-courses` }"
                class="nav-link nav-courses"
                active-class="active"
                exact
              >
                Courses
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: `${userDash}-webinars` }"
                class="nav-link nav-webinars"
                active-class="active"
                exact
              >
                Webinars
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: `${userDash}-chat` }"
                class="nav-link nav-chat"
                active-class="active"
                exact
              >
                Chat
              </router-link>
            </li>
            <li v-if="userDash === 'tutor'" class="nav-item">
              <router-link
                :to="{ name: `${userDash}-financials` }"
                class="nav-link nav-home"
                active-class="active"
                exact
              >
                Financials
              </router-link>
            </li>
            <li v-if="userDash === 'tutor'" class="nav-item">
              <router-link
                :to="{ name: `${userDash}-analytics` }"
                class="nav-link nav-home"
                active-class="active"
                exact
              >
                Analytics
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: `${userDash}-faqs` }"
                class="nav-link nav-faqs"
                active-class="active"
                exact
              >
                FAQs
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="nav-item pt-md-4 mt-5 mb-6 w-full">
        <hr class="sidebar-divider mx-8 mb-4" />
        <a
          href="#"
          class="nav-link nav-telegram"
          active-class="active"
          exact
          @click.prevent="toggleNav"
        >
          <span class="text-xs">Join Telegram Community</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    appName: process.env.appName,
  }),

  // computed: mapGetters({
  //   menu: 'app/menu',
  //   user: 'auth/user',
  // }),

  computed: {
    ...mapState({
      menu: (state) => state.app.menu,
      user: (state) => state.auth.user,
      userType: (state) => state.auth.user && state.auth.user.isTutor ? "tutor" : "student",
    }),
    userDash() {
      return this.$route.path.split('/')[1]
    }
  },

  methods: {
    toggleNav(e) {
      if (e) e.preventDefault()

      this.$store.commit('app/SET_MENU', !this.menu)
    },
    async logout() {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 260px;
  min-width: 260px;
  z-index: 9;
  min-height: 100%;
  background: #ffffff;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.04);
}

.sidebar .overlay {
  display: none;
  position: absolute;
  left: 260px;
  top: 0;
  width: 1000px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

nav {
  padding-top: 50px;
  padding-bottom: 35px;
}

ul {
  /* padding: 0; */
}

li {
  list-style: none;
  margin: 0;
}

a.round {
  border-radius: 25px;
}

ul.btn-gray-share > li {
  padding: 10px;
  margin-right: 10px;
}

.nav-link {
  text-decoration: none;
  display: block;
  padding: 10px 15px 10px 55px;
  margin-top: 5px;
  background-repeat: no-repeat;
  background-position: left 25px top 50%;
  line-height: 22px;
  @apply text-sm text-gray-700;
}
.nav-link:hover {
  text-decoration: none;
  color: initial;
}
.nav-link.active {
  border-right: 5px solid;
  line-height: 21px;
  @apply font-bold border-orange-500 text-gray-900;
}
.nav-link.nav-home {
  background-image: url('/icon/dashboard/dashboard.svg');
}
.nav-link.nav-courses {
  background-image: url('/icon/dashboard/courses.svg');
}
.nav-link.nav-webinars {
  background-image: url('/icon/dashboard/webinars.svg');
}
.nav-link.nav-chat {
  background-image: url('/icon/dashboard/chat.svg');
}
.nav-link.nav-faqs {
  background-image: url('/icon/dashboard/help.svg');
}
.nav-link.nav-telegram {
  background-image: url('/icon/dashboard/telegram.svg');
}

.menu-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent !important;
  border: 0 !important;
}

.menu-scroll {
  height: calc(100vh - 158px);
}

@media (max-width: 768px) {
  .menu-scroll {
    height: calc(100vh - 148px);
    position: relative;
    display: grid;
    overflow-y: scroll;
  }
}

@media (max-width: 1124px) {
  .App-logo {
    width: 98px;
  }
  nav {
    padding-top: 25px;
  }
  .mb-logo-top {
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .sidebar.closed {
    position: absolute;
    left: -265px;
  }
  .sidebar.open {
    position: fixed;
    left: 0;
    background-color: #ffffff;
    height: 100%;
    min-height: 100vh;
    transition: 0.28s;
  }
  .sidebar.open .overlay {
    display: block;
    transition: 0.32s;
  }
}
</style>
