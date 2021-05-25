<template>
  <div class="min-h-screen mb-12">
    <section class="bg-orange-100">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-full lg:col-span-8 xl:col-span-7">
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover relative"
            >
              <div class="px-4 md:px-5 lg:px-6 py-4">
                <!-- Player -->
                <div class="border-b border-gray-300 pb-5 mb-4">
                  <p class="text-base font-bold text-gray-700 mb-3">Player</p>
                  <div class="grid grid-cols-12 mb-3">
                    <div class="col-span-7">
                      <p class="text-sm text-gray-700">Autoplay</p>
                    </div>
                    <div class="col-span-5 text-right">
                      <input-toggle-switch
                        :value="(settings.autoPlay = allSettings.autoPlay)"
                        @input="onAutoPlayChange"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7">
                      <p class="text-sm text-gray-700">Recommendations</p>
                    </div>
                    <div class="col-span-5 text-right">
                      <input-toggle-switch
                        :value="
                          (settings.recommendations =
                            allSettings.recommendations)
                        "
                        @input="onRecommendationsChange"
                      />
                    </div>
                  </div>
                </div>
                <!-- Payment -->
                <div class="border-b border-gray-300 pb-5 mb-4">
                  <p class="text-base font-bold text-gray-700 mb-3">Payment</p>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7 my-auto">
                      <p class="text-sm text-gray-700">
                        Your default payment method is ****1992
                      </p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button
                        v-on:click.prevent="(e) => onSave(e)"
                        class="btn btn-light btn-sm"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Notifications -->
                <div class="border-b border-gray-300 pb-5 mb-4">
                  <p class="text-base font-bold text-gray-700 mb-3">
                    Notifications
                  </p>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7 lg:col-span-8 my-auto">
                      <p class="text-sm text-gray-700">Notification option</p>
                    </div>
                    <div class="col-span-5 lg:col-span-4 text-right">
                      <v-select
                        class="form-input style-chooser cursor-pointer capitalize"
                        placeholder="Notification Type"
                        :value="allSettings.notifications"
                        @input="onNotificationChange"
                        :options="['in-app', 'email', 'in-app and email']"
                      />
                    </div>
                  </div>
                </div>
                <!-- Language -->
                <div class="border-b border-gray-300 pb-5 mb-4">
                  <p class="text-base font-bold text-gray-700 mb-3">Language</p>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7 lg:col-span-8 my-auto">
                      <p class="text-sm text-gray-700">
                        Select your preferred langiage
                      </p>
                    </div>
                    <div class="col-span-5 lg:col-span-4 text-right">
                      <v-select
                        class="form-input style-chooser cursor-pointer capitalize"
                        placeholder="Language"
                        :value="(settings.languages = allSettings.languages)"
                        @input="onLanguageChange"
                        :options="['english']"
                      />
                    </div>
                  </div>
                </div>
                <!-- Learning History -->
                <div class="border-gray-300 pb-5 md:mb-10">
                  <p class="text-base font-bold text-gray-700 mb-3">
                    Learning History
                  </p>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7 my-auto">
                      <p class="text-sm text-gray-700">
                        Download learning history
                      </p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button class="btn btn-light btn-sm">View</button>
                    </div>
                  </div>
                </div>

                <div class="flex text-center pb-4 sm:pb-4">
                  <span class="flex mx-auto">
                    <button
                      type="button"
                      class="btn btn-primary shadow"
                      @click.prevent="(e) => onSave(e)"
                    >
                      Update Settings
                      <loader v-if="loading" color="white" />
                    </button>
                  </span>
                </div>
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
    store.commit('app/SET_TITLE', 'Settings')
  },
  data: () => ({
    loading: null,
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(webinars, 3),
    settings: {
      autoPlay: '',
      recommendations: '',
      languages: '',
      notifications: '',
    },
  }),
  computed: {
    ...mapState({
      allSettings: (state) => state.auth.settings,
      user: (state) => state.auth.user,
    }),
  },
  watch: {
    allSettings: {
      handler(newValue, oldValue) {
        console.log(
          'allSettings changed to ' +
            newValue +
            'Old values' +
            JSON.stringify(oldValue)
        )
        if (newValue) {
          this.settings = newValue
        } else {
          console.log(
            'allSettings changed to ' + newValue + 'Old values' + oldValue
          )
          this.settings = oldValue
        }
      },
      deep: true,
      immediate: true,
    },
    settings: {
      handler(newValue, oldValue) {
        // console.log(
        //   'searchInput changed to ' +
        //     JSON.stringify(newValue) +
        //     'Old values' +
        //     JSON.stringify(oldValue)
        // )
        if (newValue) {
          this.settings = newValue
        } else {
          this.settings = oldValue
        }
      },
      deep: true,
      immediate: true,
    },
    // 'item.someOtherProp': function (newVal, oldVal){
    //      //to work with changes in someOtherProp
    //  },
    // settings: [
    //   // 'handle1',
    //   function handle2(val, oldVal) {
    //     console.log('settings changed', val, 'Old', oldVal)
    //   },
    // ],
  },
  methods: {
    onNotificationChange(value) {
      this.settings.notifications = value
    },
    onLanguageChange(value) {
      this.settings.languages = value
    },
    onAutoPlayChange(value) {
      this.settings.autoPlay = value
    },
    onRecommendationsChange(value) {
      this.settings.recommendations = value
    },
    onSave(e) {
      // console.log('Hello >>', this.changePasswordForm)
      if (e) e.preventDefault()
      this.loading = true

      const data = {
        ...this.settings,
      }
      this.$store
        .dispatch('auth/changeSettings', {
          ...data,
        })
        .then((res) => {
          this.loading = false
          this.settings = res
          if (res) {
            this.showSuccess(res)
          }
        })
        .catch((e) => console.log('e: ', e))
    },

    showSuccess(res) {
      this.$store.commit('app/NOTICE_MODAL', {
        title: 'All done!',
        text: res.message ? res.message : `Settings updated successful`,
      })
    },
  },
}
</script>
