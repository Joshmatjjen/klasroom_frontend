<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div v-if="show" class="fixed z-10 inset-0 overflow-y-auto">
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
        class="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-xl"
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
              @click="$store.commit('app/SET_MODAL', false)"
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
                class="text-xl sm:text-4xl leading-none font-bold text-gray-800 mb-4"
              >
                {{ viewData.title }}
              </h2>
              <p class="lead text-gray-700 mb-4">{{ viewData.desc }}</p>
              <div class="flex mb-8 md:mb-8">
                <img src="/avatar.jpg" class="rounded-full mr-3 w-8 h-8" />
                <span class="text-xs text-gray-700 block my-auto">
                  Joy Adeleke</span
                >
                <ul class="social-icons with-avatar my-auto">
                  <li class="twitter">
                    <a href="#"></a>
                  </li>
                  <li class="share">
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-0">
              <toggle-switch
                v-model="isActive"
                active="New user"
                inactive="Existing user"
                class="mb-6"
              />
              <!-- Purchase form -->
              <form v-if="isActive" id="login-form">
                <div class="grid md:grid-cols-2 md:gap-5">
                  <div class="form-group mb-5">
                    <label for="input-email">Email address</label>
                    <div>
                      <input
                        id="input-email"
                        class="form-input"
                        placeholder="Enter your email here"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="input-password">Password</label>
                    <div>
                      <input
                        id="input-password"
                        class="form-input"
                        placeholder="Enter your password here"
                      />
                    </div>
                  </div>
                </div>
                <hr class="mt-2 mb-4" />
                <div>
                  <p class="text-sm text-gray-700">{{ viewData.type }} price</p>
                  <h4 class="font-extrabold text-gray-700">
                    {{ viewData.price | currency('₦', 0) }}
                  </h4>
                </div>
                <hr class="mt-3 mb-5" />
                <p class="text-xs text-gray-700">
                  {{
                    `Once payment is made, you will be sent a confirmation 
                  email and you will be required to sign in or sign up to 
                  take this course.`
                  }}
                </p>
                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click="showSuccess"
                    >
                      Sign Up and Pay {{ viewData.price | currency('₦', 0) }}
                    </button>
                  </span>
                </div>
                <div class="text-center">
                  <a
                    href="#"
                    class="text-sm leading-5 text-gray-700"
                    @click="forgotPassword"
                  >
                    Forgot password?
                  </a>
                </div>
              </form>
              <!-- Sign up form -->
              <form v-else id="signup-form" @submit.prevent="">
                <div class="form-group mb-5">
                  <label for="input-name">Full name</label>
                  <div>
                    <input
                      id="input-name"
                      class="form-input"
                      placeholder="Enter your full name here"
                    />
                  </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-5">
                  <div class="form-group mb-5">
                    <label for="input-email">Email address</label>
                    <div>
                      <input
                        id="input-email"
                        class="form-input"
                        placeholder="Enter your email here"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="input-password">Create password</label>
                    <div>
                      <input
                        id="input-password"
                        class="form-input"
                        placeholder="Enter your password here"
                      />
                    </div>
                  </div>
                </div>
                <hr class="mt-2 mb-4" />
                <div>
                  <p class="text-sm text-gray-700">{{ viewData.type }} price</p>
                  <h4 class="font-extrabold text-gray-700">
                    {{ viewData.price | currency('₦', 0) }}
                  </h4>
                </div>
                <hr class="mt-3 mb-5" />
                <p class="text-xs text-gray-700">
                  {{
                    `Once payment is made, you will be sent a confirmation 
                  email and you will be required to sign in or sign up to 
                  take this ${viewData.type}.`
                  }}
                </p>
                <div class="flex text-center pt-8 pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <paystack
                      :amount="viewData.price * 100"
                      name="Joshmatjjen"
                      email="joshmatparrot@gmail.com"
                      paystackkey="pk_test_7d2a22c90ef584478796022f307ae5e1460bb604"
                      :reference="paymentReference"
                      :callback="processPayment"
                      :close="close"
                    >
                      <button type="button" class="btn btn-primary shadow">
                        Sign Up and Pay {{ viewData.price | currency('₦', 0) }}
                      </button>
                    </paystack>
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
import { reference } from '~/utils/index'

export default {
  data: () => ({
    isActive: false,
  }),
  computed: {
    ...mapState({
      show: (state) => state.app.modal === 'purchase-modal',
      viewData: (state) => state.app.viewData,
    }),
    paymentReference() {
      return reference()
    },
  },
  methods: {
    forgotPassword(e) {
      if (e) e.preventDefault()
      this.$store.commit('app/FORGOT_PASSWORD_MODAL', true)
      this.$store.commit('app/SET_MODAL', false)
    },
    processPayment(e) {
      console.log(e, 'paystack callback')
      this.$store.commit('app/NOTICE_MODAL', {
        title: 'All done!',
        text: `You have successfully signed up to klasroom.com. 
          Please check your email and click the link in it to 
          complete your registration.`,
      })
      this.$store.commit('app/SET_MODAL', false)
    },
    close() {
      console.log('Paystack closed')
    },
  },
}
</script>
