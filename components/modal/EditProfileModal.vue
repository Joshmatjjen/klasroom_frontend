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
                class="text-sm font-normal text-left text-gray-800"
              >
                Account details
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
                      v-model="editProfileForm.name"
                      @input="checkEditProfileFormError('name')"
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
                      id="input-email"
                      type="number"
                      class="form-input"
                      placeholder="Enter your phone number here"
                      v-model="editProfileForm.phone"
                      @input="checkEditProfileFormError('phone')"
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
                      v-model="editProfileForm.email"
                      @input="checkEditProfileFormError('email')"
                    />
                  </div>
                  <span
                    v-if="editProfileFormError.find((i) => i === 'email')"
                    class="text-sm text-red-700"
                    >Email address is required</span
                  >
                </div>

                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click.prevent="(e) => onLogin(e, showLogin.userType)"
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

  created() {
    this.data = {
      editProfileForm: {
        name: this.user.name,
        phone: this.user.phone,
        email: this.user.email,
        gender: '',
      },
    }
  },

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
    onSignUp(e, userType) {
      if (e) e.preventDefault()
      this.loading = true

      const { name, email, phone, password, courseCategories } = this.signupForm

      const data = this.isStudent
        ? {
            email,
            password,
            courseCategories,
          }
        : userType === 'student'
        ? {
            name,
            email,
            phone,
            password,
          }
        : {
            name,
            email,
            phone,
            password,
            courseCategories,
          }

      for (let i in data) {
        console.log(i)
        if (data[i].length === 0) {
          this.signupFormError.push(i)
        }
      }
      if (this.signupFormError.length) {
        this.loading = false
        return
      }

      this.$store
        .dispatch('auth/signUpUser', {
          ...data,
          userType,
          isStudent: this.isStudent,
        })
        .then((res) => {
          this.loading = false
          if (res) {
            this.clearInput()
            this.showSuccess(res)
          }
        })
        .catch((e) => console.log('e: ', e))
    },
    onLogin(e, userType) {
      if (e) e.preventDefault()
      this.loading = true

      const data = {
        ...this.loginForm,
      }

      for (let i in data) {
        console.log(i)
        if (data[i].length === 0) {
          this.editProfileFormError.push(i)
        }
      }
      if (this.editProfileFormError.length) {
        this.loading = false
        return
      }

      this.$store
        .dispatch('auth/loginUser', {
          ...data,
          userType,
        })
        .then((res) => {
          this.loading = false
          if (res) {
            if (res.isTutor && userType === 'tutor') this.gotoDashboard('tutor')
            else this.gotoDashboard('student')
          }
        })
        .catch((e) => console.log('e: ', e))
    },
    showSuccess(res) {
      this.$store.commit('app/NOTICE_MODAL', {
        title: 'All done!',
        text: res.message
          ? res.message
          : `You have successfully signed up to klasroom.com. 
          Please check your email and click the link in it to 
          complete your registration.`,
      })
      this.close()
    },
    // gotoDashboard(type) {
    //   console.log('callback: ', this.showLogin.callback)
    //   if (this.showLogin.callback) {
    //     console.log('callback')
    //     this.showLogin.callback()
    //   } else this.$router.push(`/${type}/dashboard`)
    //   this.close()
    // },
    close() {
      this.isStudent = false
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
