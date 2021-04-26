<template>

  <div
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
        <nuxt-link
          :to="userDash ? `/` : '/student/dashboard'"
          class="user-menu-drop-item text-gray-700 block py-3 px-4 md:px-5 lg:px-6 hover:bg-gray-200"
        >
          <span class="text-sm">{{ userDash ? 'Home' : 'Dashboard' }}</span>
        </nuxt-link>
        <nuxt-link
          :to="userDash ? `/${userDash}/account` : '/student/account'"
          class="user-menu-drop-item text-gray-700 block py-3 px-4 md:px-5 lg:px-6 hover:bg-gray-200"
        >
          <span class="text-sm">Account</span>
        </nuxt-link>
        <nuxt-link
          :to="userDash ? `/${userDash}/settings` : '/student/settings'"
          class="user-menu-drop-item text-gray-700 block py-3 px-4 md:px-5 lg:px-6 hover:bg-gray-200"
        >
          <span class="text-sm">Settings</span>
        </nuxt-link>
        <a v-if="userDash" @click.prevent="switchDash" class="user-menu-drop-item text-gray-700 block py-3 px-4 md:px-5 lg:px-6 hover:bg-gray-200">
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
        <a href="#" @click.prevent="logout" class="user-menu-drop-item text-gray-700 block py-3 px-4 md:px-5 lg:px-6 hover:bg-gray-200">
          <span class="text-sm">Sign out</span>
        </a>
      </div>
    </a>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    userMenu: {
      type: Boolean,
      required: true
    },
    userDash: {
      type: String,
      required: false
    },
    userType: {
      type: String,
      required: false
    },
    user: {
      type: Object,
      required: true
    },
    toggleUserMenu: {
      type: Function,
      required: true
    },
    logout: {
      type: Function,
      required: true
    },
    switchDash: {
      type: Function,
      required: false
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
.user-menu-drop-item:first-child {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}
.user-menu-drop-item:last-child {
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
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
