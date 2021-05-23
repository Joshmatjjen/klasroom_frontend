<template>
  <div class="min-h-screen mb-12">
    <section class="bg-orange-100">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-full lg:col-span-7 xl:col-span-8">
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
            >
              <div class="px-4 md:px-5 lg:px-6 py-4">
                <!-- Player -->
                <div class="mb-5 lg:mb-20">
                  <p class="text-sm font-bold text-gray-700 mb-3">
                    Account Details
                  </p>
                  <hr class="mt-4 mb-6" />
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Name</p>
                      <p class="text-sm text-gray-700">{{ user.name }}</p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button
                        v-on:click.prevent="toggleEditProfile()"
                        class="btn btn-light btn-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Phone</p>
                      <p class="text-sm text-gray-700">{{ user.phone }}</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Email</p>
                      <p class="text-sm text-gray-700">{{ user.email }}</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Gender</p>
                      <p class="text-sm text-gray-700">{{ user.gender }}</p>
                    </div>
                  </div>
                  <hr class="mt-4 mb-6" />
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">
                        Password
                      </p>
                      <p class="text-sm text-gray-700">*****************</p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button
                        class="btn btn-light btn-sm"
                        v-on:click.prevent="toggleChangePassword()"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  <hr class="mt-4 mb-6" />
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">
                        Payment
                      </p>
                      <p class="text-sm text-gray-700">
                        Your default payment method is ****1992
                      </p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button class="btn btn-light btn-sm">Change</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-full lg:col-span-5 xl:col-span-4">
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover relative min-h-full"
            >
              <div class="block mb-2">
                <div
                  class="big-avatar relative rounded-xl overflow-hidden"
                  v-bind:style="{
                    backgroundImage: 'url(' + profileImage + ')',
                  }"
                >
                  <div
                    class="grid grid-cols-12 place-items-center py-32 md:py-32 lg:py-40 xl:py-48"
                  >
                    <div
                      class="change-picture col-span-12 text-white mx-auto my-auto"
                    >
                      <button
                        class="focus:outline-none"
                        v-on:click.prevent="toggleEditImage()"
                      >
                        Change Picture
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full h-full bg-black opacity-50 absolute top-0"
                  ></div>
                </div>
              </div>
              <div class="px-4 md:px-5 lg:px-6 py-4">
                <ul class="text-gray-700">
                  <li class="text-center">
                    <h5 class="font-bold mb-2">Amina Bello</h5>
                    <p class="text-sm text-gray-700">
                      Registered 12th Oct. 2020
                    </p>
                  </li>
                  <li>
                    <hr class="my-5" />
                    <label class="checkbox" @click="$router.push('/')">
                      <span class="text-sm">Sign out</span>
                      <input type="checkbox" value="intermediate" disabled />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox" @click="toggleChangePassword">
                      <span class="text-sm">Change password</span>
                      <input type="checkbox" value="intermediate" disabled />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <li class="lg:pb-8">
                    <hr class="my-5" />
                    <label
                      class="checkbox"
                      @click="$router.push('/student/dashboard')"
                    >
                      <span
                        class="text-sm"
                        @click.prevent="
                          (e) => toggleDeleteProfile(e, user.userId)
                        "
                        >Delete account</span
                      >
                      <input type="checkbox" value="intermediate" disabled />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

import { mapState } from 'vuex'

const webinars = require('@/static/json/webinars.json')

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Account')
  },
  data: () => ({
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(webinars, 3),
  }),

  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      profileImage: (state) => state.auth.profileImage,
    }),
  },

  methods: {
    toggleEditProfile() {
      this.$store.commit('app/EDIT_PROFILE_MODAL', {
        status: true,
        image: this.profileImage,
      })
    },
    toggleEditImage() {
      this.$store.commit('app/EDIT_IMAGE_MODAL', {
        status: true,
      })
    },
    toggleChangePassword() {
      this.$store.commit('app/CHANGE_PASSWORD_MODAL', {
        status: true,
      })
    },
    toggleDeleteProfile(e, userId) {
      // console.log('Hello >>', this.editProfileForm)
      if (e) e.preventDefault()
      this.loading = true

      this.$store
        .dispatch('auth/deleteProfile', userId)
        .then((res) => {
          this.loading = false
          console.log(res)
          if (res) {
            this.showSuccess(res)
          }
        })
        .catch((e) => console.log('e: ', e))
    },
    showSuccess(res) {
      this.$store.commit('app/NOTICE_MODAL', {
        title: 'All done!',
        text: res.message
          ? res.message
          : `You have successfully deleted your profile`,
      })
      setTimeout(() => {
        this.logout()
      }, 4000)
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style scoped>
.big-avatar {
  width: 100%;
  background-image: url('https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png');
  background-repeat: no-repeat;
  background-size: cover;
  @apply bg-gray-200;
}
.change-picture {
  z-index: 1;
}
.change-picture > button {
  background-image: url('/icon/camera.svg');
  background-repeat: no-repeat;
  padding: 5px 5px 5px 32px;
  line-height: 20px;
}
</style>
