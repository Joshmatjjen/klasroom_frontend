<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div v-if="showEditProfile" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-start justify-center min-h-screen pt-4 px-4 pb-4 lg:pb-20 text-center sm:block sm:p-0"
    >
      <!--
        Background overlay, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
      >&#8203;
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white relative px-8 pt-5 pb-8">
          <!-- Close button -->
          <div
            class="absolute top-0 right-0 -ml-8 pt-3 pr-3 flex sm:-ml-10 sm:pr-3"
          >
            <button
              aria-label="Close panel"
              class="text-gray-700 hover:text-gray-500 focus:outline-none transition ease-in-out duration-150"
              @click="
                () => {
                  clearInput()
                  close()
                }
              "
            >
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="block">
            <div class="sm:ml-0">
              <p
                id="modal-headline"
                class="text-sm font-semibold text-left text-gray-800"
              >
                Account Details
              </p>
              <hr class="mt-8 mb-5" />
              <!-- Login form -->
              <form v-if="isLogin" id="login-form">
                <div class="form-group mb-5">
                  <label for="input-email">Name</label>
                  <div>
                    <input
                      id="input-name"
                      type="text"
                      class="form-input"
                      placeholder="Enter your name here"
                      :value="(editProfileForm.name = user.name)"
                      @input="editProfileForm.name = $event.target.value"
                    />
                  </div>
                  <span
                    v-if="editProfileFormError.find((i) => i === 'name')"
                    class="text-sm text-red-700"
                    >Name is required</span
                  >
                </div>
                <div class="form-group mb-5">
                  <label for="input-email">Phone</label>
                  <div>
                    <input
                      id="input-phone"
                      type="number"
                      class="form-input"
                      placeholder="Enter your phone number here"
                      :value="(editProfileForm.phone = user.phone)"
                      @input="editProfileForm.phone = $event.target.value"
                    />
                  </div>
                  <span
                    v-if="editProfileFormError.find((i) => i === 'phone')"
                    class="text-sm text-red-700"
                    >Phone number is required</span
                  >
                </div>
                <div class="form-group mb-5">
                  <label for="input-email">Email address</label>
                  <div>
                    <input
                      id="input-email"
                      type="email"
                      class="form-input"
                      placeholder="Enter your email here"
                      :value="(editProfileForm.email = user.email)"
                      @input="editProfileForm.email = $event.target.value"
                    />
                  </div>
                  <span
                    v-if="editProfileFormError.find((i) => i === 'email')"
                    class="text-sm text-red-700"
                    >Email address is required</span
                  >
                </div>

                <div class="form-group mb-5">
                  <label for="input-gender">Gender</label>
                  <div>
                    <v-select
                      class="form-input style-chooser cursor-pointer"
                      placeholder="Select Course Categories"
                      :value="editProfileForm.gender || user.gender"
                      @input="onGenderChange"
                      :options="['Male', 'Female']"
                    />
                  </div>
                  <span
                    v-if="editProfileFormError.find((i) => i === 'email')"
                    class="text-sm text-red-700"
                    >Gender is required</span
                  >
                </div>

                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click.prevent="(e) => onSave(e, user.userId)"
                    >
                      Save
                      <loader v-if="loading" color="white" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End login card -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    isLogin: true,
    loading: false,
    isStudent: false,
    editProfileForm: {
      name: '',
      phone: '',
      email: '',
      gender: '',
    },
    editProfileFormError: [],
  }),

  computed: {
    ...mapState({
      showEditProfile: (state) => state.app.editProfileModal,
      user: (state) => state.auth.user,
    }),
  },

  watch: {
    // showLogin: {
    //   handler(value) {
    //     // console.log('showLogin', value)
    //     // console.log('secret: ', process.env.secret)
    //     if (value) this.isLogin = value.type !== 'register'
    //   },
    //   immediate: true,
    // },
    // isLogin(value) {
    //   this.editProfileFormError = []
    //   this.signupFormError = []
    //   this.isStudent = false
    //   this.clearInput()
    // },
    // isStudent(value) {
    //   this.signupFormError = []
    // },
  },
  methods: {
    onGenderChange(value) {
      this.editProfileForm.gender = value
    },
    checkEditProfileFormError(value) {
      this.editProfileFormError = this.editProfileFormError.filter(
        (i) => i !== value
      )
    },
    forgotPassword(e) {
      if (e) e.preventDefault()
      this.$store.commit('app/FORGOT_PASSWORD_MODAL', true)
      this.$store.commit('app/LOGIN_MODAL', null)
    },
    onSave(e, userId) {
      // console.log('Hello >>', this.editProfileForm)
      if (e) e.preventDefault()
      this.loading = true

      const data = {
        ...this.editProfileForm,
      }

      // for (let i in data) {
      //   console.log(i)
      //   if (data[i].length === 0) {
      //     this.editProfileFormError.push(i)
      //   }
      // }
      // if (this.editProfileFormError.length) {
      //   this.loading = false
      //   return
      // }

      this.$store
        .dispatch('auth/updateUser', {
          ...data,
          userId,
        })
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
          : `You have successfully updated your profile`,
      })
      this.close()
    },
    close() {
      this.$store.commit('app/EDIT_PROFILE_MODAL', null)
    },
    clearInput() {
      this.signupForm = {
        name: '',
        email: '',
        phone: '',
        password: '',
        courseCategories: [],
      }

      this.loginForm = {
        userIdentity: '',
        password: '',
      }
    },
  },
}
</script>

<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #f5f5f3;
  border: none;
  font-size: 0.875rem;
  color: #8a8a8a;
}

.style-chooser .vs__dropdown-menu {
  overflow: auto;
  height: 150px;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #8a8a8a;
}
</style>
