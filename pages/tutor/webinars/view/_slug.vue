<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-5">
          <div
            v-if="!$device.isMobile"
            class="col-span-full lg:col-span-8 xl:col-span-8"
          >
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover overflow-hidden relative h-full"
            >
              <webinar-view-details />
            </div>
          </div>
          <div class="col-span-full lg:col-span-4 xl:col-span-4">
            <div
              class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300 min-h-content-screen"
            >
              <tabs-menu v-model="tab" :tabs="tabs" />
              <div v-if="$device.isMobile && tab === 0 && tabs.length === 5">
                <webinar-view-details />
              </div>
              <div
                v-if="
                  (tab === 0 && tabs.length === 4) ||
                  (tab === 1 && tabs.length === 5)
                "
              >
                <chat-messages no-card />
              </div>
              <div
                v-if="
                  (tab === 1 && tabs.length === 4) ||
                  (tab === 2 && tabs.length === 5)
                "
                class="pl-4 md:pl-5 lg:pl-6 pb-5"
              >
                <webinar-people />
              </div>
              <div
                v-if="
                  (tab === 2 && tabs.length === 4) ||
                  (tab === 3 && tabs.length === 5)
                "
                class="px-4 md:px-5 lg:px-6 py-4 pb-10"
              >
                <webinar-poll />
              </div>
              <div
                v-if="
                  (tab === 3 && tabs.length === 4) ||
                  (tab === 4 && tabs.length === 5)
                "
                class="px-4 md:px-5 lg:px-6 py-4 pb-10"
              >
                <div class="space-y-4">
                  <resource-list
                    v-for="(item, key) in [
                      'Businessstats.com / businessfailurerates',
                    ]"
                    :key="key"
                    :name="item"
                    desc="This will show you stats of business failure across countries of the world. This information will be useful for your assignment"
                    link="#"
                  />
                  <resource-list
                    v-for="(item, key) in [
                      'Business finance spreadsheet.xls',
                      'Business startup checklist.doc',
                    ]"
                    :key="key"
                    :name="item"
                    link="#"
                    :download="true"
                  />
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

const webinars = require('@/static/json/latest-webinars.json')
const youLearn = require('@/static/json/courses-you-learn.json')

export default {
  layout: 'dashboard',
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    home: 'home',
    course: webinars[0],
    webinars: _.take(webinars, 3),
    youLearn,
    tab: 0,
    tabs: ['Chat', 'People', 'Poll', 'Resources'],
  }),
  mounted() {
    if (this.$device.isMobile) {
      this.tabs.unshift('Home')
    }
  },
  methods: {
    scrollTo(e, id) {
      if (e) e.preventDefault()
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
    },
    purchaseCourse() {
      this.$store.commit('app/SET_MODAL', 'purchase-modal')
      this.$store.commit('app/SET_VIEW_DATA', {
        type: 'Webinar',
        title: 'How to Build Multiple Sources of Income',
        desc: `Learn how to build and manage multiple sources of 
          income that leads to sustainable wealth`,
        price: 2500,
      })
    },
  },
}
</script>
