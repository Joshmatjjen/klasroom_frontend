<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
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
        <div class="bg-white relative px-4 pt-5 pb-4 sm:p-8 sm:pb-5">
          <!-- Close button -->
          <div
            class="absolute top-0 right-0 -ml-8 pt-3 pr-3 flex sm:-ml-10 sm:pr-3"
          >
            <button
              aria-label="Close panel"
              class="text-gray-700 hover:text-gray-500 focus:outline-none transition ease-in-out duration-150"
              @click="() => {
                $store.commit('app/VALIDATION_MODAL', null);
                clearInput()
              }"
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
            <div v-if="showModal.isValidating" class="mt-3 sm:mt-0 sm:ml-0">
              <h2
                id="modal-headline"
                class="text-xl sm:text-4xl leading-none font-bold text-center text-gray-800"
              > 
                Please Wait...
              </h2>
              <div class="flex justify-center items-center" style="height: 150px;">
                <svg :style="{width: '100px', height: '30px'}" :class="`animate-spin h-5 ml-2 rounded-full border-2 text-blue-500 border-orange-400 stroke-current stroke-2`" viewBox="0 0 50 50">
                  <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                  ></circle>
                </svg>
              </div>
            </div>
            <div v-else class="mt-3 sm:mt-0 sm:ml-0">
              <h2
                id="modal-headline"
                class="text-xl sm:text-4xl leading-none font-bold text-center text-gray-800"
              > 
                {{showModal.type === "reset" ? "Reset password" : "Sign into your account"}}
              </h2>
              <hr class="mt-8 mb-5" />

              <!-- Forgot password form -->
              <form v-if="showModal.type === 'reset'" id="forgot-form">
                <div class="form-group mb-5">
                  <label for="input-password">New Password</label>
                  <div>
                    <input
                      id="input-password"
                      type="password"
                      class="form-input"
                      placeholder="Enter your password here"
                      v-model="signupForm.password"
                      @input="() => {
                        checkSignupFormError('password')
                        checkConfirmPassword()
                      }"
                    />
                  </div>
                  <span v-if="signupFormError.find(i => i === 'password')" class="text-sm text-red-700">Password is required</span>
                </div>
                <div class="form-group">
                  <label for="input-re_password">Confirm Password</label>
                  <div>
                    <input
                      id="input-re_password"
                      class="form-input"
                      type="password"
                      placeholder="Confirm password"
                      v-model="signupForm.confirmPassword"
                      @input="() => {
                        checkSignupFormError('confirmPassword')
                        checkConfirmPassword()
                      }"
                    />
                  </div>
                  <span v-if="signupFormError.find(i => i === 'confirmPassword')" class="text-sm text-red-700 block">Confirm password is required</span>
                  <span v-if="showConfirmPasswordErr" class="text-sm text-red-700">Confirm password dosen't match</span>
                </div>
                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click="resetPassword"
                    >
                      Set new password
                      <loader v-if="loading" color="white" />
                    </button>
                  </span>
                </div>
              </form>
              
              <form v-else id="signup-form">

                <div class="form-group mb-5">
                  <label for="input-email">Email</label>
                  <div>
                    <input
                      id="input-email"
                      type="email"
                      class="form-input"
                      placeholder="Enter your email here"
                      v-model="signupForm.email"
                      @input="checkSignupFormError('email')"
                    />
                  </div>
                  <span v-if="signupFormError.find(i => i === 'email')" class="text-sm text-red-700">Email is required</span>
                </div>

                <div class="form-group mb-5">
                  <label for="input-password">Password</label>
                  <div>
                    <input
                      id="input-password"
                      type="password"
                      class="form-input"
                      placeholder="Enter your password here"
                      v-model="signupForm.password"
                      @input="checkSignupFormError('password')"
                    />
                  </div>
                  <span v-if="signupFormError.find(i => i === 'password')" class="text-sm text-red-700">Password is required</span>
                </div>
                
                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click="confirmEmail"
                    >
                      Sign In
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
    loading: false,
    signupForm: {
      password: "",
      confirmPassword: '',
      email: "",
      courseCategories: []
    },
    showConfirmPasswordErr: false,
    signupFormError: [],
  }),
  computed: {
    ...mapState({
      showModal: (state) => state.app.validationModal,
    }),
  },
  // watch: {
  //   showModal: {
  //     handler(value) {
  //       // console.log('showModal', value)
  //       // console.log('secret: ', process.env.secret)
  //       if (value) this.isLogin = value.type !== 'register'
  //     },
  //     immediate: true,
  //   },
  // },
  
  methods: {
    checkConfirmPassword() {
      this.showConfirmPasswordErr = false;
    },
    checkSignupFormError(value) {
      this.signupFormError = this.signupFormError.filter(i => i !== value);
    },
    resetPassword(e) {
      if (e) e.preventDefault();
      if (this.signupForm.password !== this.signupForm.confirmPassword) {
        this.showConfirmPasswordErr = true;
        return;
      }
      this.loading = true;

      const {password, confirmPassword} = this.signupForm;

      const data = {
        password, confirmPassword
      }

      for (let i in data) {
        if (data[i].length === 0) {       
          this.signupFormError.push(i);
        }
      }
      if (this.signupFormError.length) {
        this.loading = false;
        return;
      }

      this.$store.dispatch("auth/resetPassword", {
        ...data,
        token: this.showModal.token
      })
      .then((res) => {
        this.loading = false
        if (res) {
          this.clearInput()
          this.showSuccess1(res)
        }
      }).catch(e => console.log('e: ', e));
    },

    confirmEmail(e) {
      if (e) e.preventDefault()
      this.loading = true;

      const {email, password} = this.signupForm;

      const data = {
        email, password
      }

      for (let i in data) {
        if (data[i].length === 0) {       
          this.signupFormError.push(i);
        }
      }
      if (this.signupFormError.length) {
        this.loading = false;
        return;
      }

      this.$store.dispatch("auth/loginUser", data)
      .then((res) => {
        this.loading = false
        if (res) {
          this.clearInput()
          this.showSuccess2()
        }
      }).catch(e => console.log('e: ', e));
    },
    
    showSuccess1(res) {
      this.$store.commit('app/NOTICE_MODAL', {
        title: 'All done!',
        text: res.message ? res.message : `Your password has been changed successfully. 
          Please log in to your account to proceed.`,
        confirmCallback: () => {
          this.$store.commit('app/LOGIN_MODAL', {
            status: true,
            type: 'login',
            userType: 'student',
          });
          this.$store.commit('app/NOTICE_MODAL', false)
        }
      })
      this.$store.commit('app/VALIDATION_MODAL', null)
    },
    showSuccess2() {
      this.$router.push(`/student/dashboard`)
      // this.$store.commit('app/NOTICE_MODAL', {
      //   title: 'All done!',
      //   text: `You have successfully confirm your email. 
      //     Sign in with you email.`,
      // })
      this.$store.commit('app/VALIDATION_MODAL', null)
    },
    clearInput() {
      this.signupForm = {
        password: "",
      }
    },
    
  },
}
</script>
