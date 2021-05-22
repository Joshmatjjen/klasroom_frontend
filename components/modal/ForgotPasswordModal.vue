<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div v-if="show" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
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
              @click="close"
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
            <div class="mt-3 sm:mt-5 sm:ml-0">
              <h2
                id="modal-headline"
                class="text-xl sm:text-4xl leading-none font-bold text-center text-gray-800"
              >
                Forgot password
              </h2>
              <hr class="mt-8 mb-5" />
              <!-- Forgot password form -->
              <form id="forgot-form">
                <div class="form-group">
                  <label for="input-email">Email address</label>
                  <div>
                    <input
                      id="input-email"
                      class="form-input"
                      type="email"
                      placeholder="Enter your email here"
                      v-model="form.email"
                      @input="checkFormError"
                    />
                  </div>
                  <span v-if="formError" class="text-sm text-red-700">Email address is required</span>
                </div>
                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click.prevent="proceed"
                    >
                      Request password reset
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
import Swal from 'sweetalert2'

export default {
  data: () => ({
    form: {
      email: '',
    },
    loading: false,
    formError: false,
  }),
  computed: {
    ...mapState({
      show: (state) => state.app.forgotPasswordModal,
    }),
  },
  methods: {
    checkFormError() {
      this.formError = false;
    },
    proceed(e) {
      if (e) e.preventDefault()
      this.loading = true
      if (!this.form.email) {
        this.formError = true;
        this.loading = false;
        return;
      }
      this.$store.dispatch("auth/forgetPassword", {
        ...this.form,
      })
      .then((res) => {
        this.loading = false
        if (res) {
          this.$store.commit('app/RESET_PASSWORD_MODAL', this.form.email)
          this.$store.commit('app/FORGOT_PASSWORD_MODAL', false);
          Swal.fire({
            position: 'top-end',
            width: '350px',
            text: res.message ? res.message : 'A message was sent to the email associated with your account.',
            backdrop: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 10000,
          })
        }
      }).catch(e => console.log('e: ', e));
    },
    close() {
      this.$store.commit('app/FORGOT_PASSWORD_MODAL', false);
      this.form = {
        email: '',
      }
    }
  },
}
</script>
