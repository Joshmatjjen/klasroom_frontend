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
                      <input-toggle-switch v-model="autoplay" />
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7">
                      <p class="text-sm text-gray-700">Recommendations</p>
                    </div>
                    <div class="col-span-5 text-right">
                      <input-toggle-switch />
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
                      <button class="btn btn-light btn-sm">Change</button>
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
                      <div class="cs-select">
                        <select class="input">
                          <option value="">In-app and email</option>
                        </select>
                      </div>
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
                      <div class="cs-select">
                        <select class="input">
                          <option value="">English</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Learning History -->
                <div class="border-gray-300 pb-5 md:mb-20">
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

const webinars = require('@/static/json/webinars.json')

export default {
  layout: 'dashboard',
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Settings')
  },
  data: () => ({
    autoplay: true,
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(webinars, 3),
  }),
}
</script>
