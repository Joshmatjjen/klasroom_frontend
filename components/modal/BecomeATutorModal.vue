<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div v-if="showModal" class="fixed inset-0 overflow-y-auto" style="z-index: 2002;">
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
                $store.commit('app/BECOME_A_TUTOR_MODAL', false);
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
            <div class="mt-3 sm:mt-0 sm:ml-0">
              <h2
                id="modal-headline"
                class="text-xl sm:text-4xl leading-none font-bold text-center text-gray-800"
              > 
                Become a Tutor
              </h2>
              <hr class="mt-8 mb-5" />
              
              <form id="signup-form">
                <div class="form-group">
                  <label for="input-courseCategories">Course Categories</label>
                  <div>
                    <v-select 
                      class="form-input style-chooser"
                      placeholder="Select Course Categories"
                      multiple 
                      v-model="signupForm.courseCategories" 
                      :options="coursesCategories"
                      @input="checkFormError"
                    />
                  </div>
                  <span v-if="formError" class="text-sm text-red-700">Course categories is required</span>
                </div>
                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click="(e) => onSignUp(e, showModal.userType)"
                    >
                      Submit
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
    signupForm: {
      courseCategories: []
    },
    formError: false,
  }),
  computed: {
    ...mapState({
      showModal: (state) => state.app.becomeATutorModal,
      coursesCategories: (state) => state.app.coursesCategories,
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
    checkFormError() {
      this.formError = false;
    },
    onSignUp(e, userType) {
      if (e) e.preventDefault()
      if (!this.signupForm.courseCategories.length) {
        this.formError = true;
        return;
      }
      this.loading = true
      const data = {
        ...this.signupForm
      }
      this.$store.dispatch("auth/becomeATutor", {
        ...data,
        userType
      })
      .then((res) => {
        this.loading = false
        if (res) {
          this.clearInput()
          this.showSuccess(res)
        }
      }).catch(e => console.log('e: ', e));
    },
    
    showSuccess(res) {
      this.$store.commit('app/NOTICE_MODAL', {
        title: 'All done!',
        text: res.message ? res.message : `You have successfully become a tutor. 
          You can now switch to tutor dashboard.`,
      })
      this.$store.commit('app/BECOME_A_TUTOR_MODAL', false)
    },
    clearInput() {
      this.signupForm = {
        courseCategories: []
      }
    }
  },
}
</script>
