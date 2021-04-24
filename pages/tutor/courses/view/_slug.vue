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
              class="bg-white rounded-xl border border-gray-300 shadow-hover overflow-hidden relative"
            >
              <course-view-details />
              <div class="px-4 md:px-5 lg:px-6 pb-4">
                <div class="mb-8">
                  <div class="flex flex-row gap-4 text-gray-700 mt-5">
                    <span class="text-base font-semibold my-auto mb-2"
                      >Resources</span
                    >
                  </div>
                  <div class="space-y-3">
                    <resource-list
                      v-for="(item, key) in [
                        'Sample business plan.pdf',
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
                <div class="mb-12">
                  <div class="flex flex-row gap-4 text-gray-700 mt-5 mb-2">
                    <span class="text-base font-semibold my-auto"
                      >Assignment</span
                    >
                  </div>
                  <div class="space-y-3">
                    <assignment-list
                      title="Business Research"
                      desc="Conduct a business research for a conceptual business in any industry of your ch..."
                      link="#"
                    />
                  </div>
                </div>
                <hr class="-mx-4 md:-mx-5 lg:-mx-6" />
                <div class="flex flex-row space-x-5 mt-5 mb-2">
                  <div
                    class="flex flex-row text-xs text-gray-700 gap-5 my-auto mr-auto"
                  >
                    <div>
                      <span class="inline-block align-middle"
                        >Course Video</span
                      >
                      <span class="item-status active ml-1 align-middle" />
                    </div>
                    <div>
                      <span class="inline-block align-middle">Assignment</span>
                      <span class="item-status active ml-1 align-middle" />
                    </div>
                  </div>
                  <div class="flex">
                    <button class="btn btn-primary">Next Lesson</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-full lg:col-span-4 xl:col-span-4">
            <div
              class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300"
            >
              <tabs-menu v-model="tab" :tabs="tabs" />
              <div
                v-if="$device.isMobile && tab === 0 && tabs.length === 5"
                class="pb-10"
              >
                <course-view-details />
              </div>
              <div
                v-if="
                  (tab === 0 && tabs.length === 4) ||
                  (tab === 1 && tabs.length === 5)
                "
                class="px-4 md:px-5 lg:px-6 py-4"
              >
                <div>
                  <h5 class="font-bold text-gray-700 pt-2 mb-4">
                    How to Build Multiple Sources of Income
                  </h5>
                  <div class="mb-4">
                    <progress-bar :percentage="30" />
                  </div>
                  <p class="text-xs text-gray-700">6 lessons completed</p>
                  <p class="text-xs text-gray-700">12 lessons to go</p>
                </div>
                <hr class="mt-4" />
                <div class="mt-6 mb-4">
                  <h6 class="text-sm text-gray-800 font-bold mb-5">
                    Part 1 - Understanding Money
                  </h6>
                  <ul class="text-xs text-gray-700">
                    <li class="flex flex-row leading-tight mb-4">
                      <nuxt-link to="/"
                        >Understanding the concept of money</nuxt-link
                      >
                      <span class="item-status active align-bottom ml-auto" />
                    </li>
                    <li class="flex flex-row leading-tight mb-4">
                      <nuxt-link to="/"
                        >Career vs business (or both?)</nuxt-link
                      >
                      <span class="item-status active align-bottom ml-auto" />
                    </li>
                    <li class="flex flex-row leading-tight mb-4">
                      <nuxt-link to="/">Finding new income sources</nuxt-link>
                      <span class="item-status active align-bottom ml-auto" />
                    </li>
                    <li class="flex flex-row leading-tight mb-4">
                      <nuxt-link to="/">Starting a business</nuxt-link>
                      <span class="item-status active align-bottom ml-auto" />
                    </li>
                    <li class="flex flex-row leading-tight mb-4">
                      <nuxt-link to="/">Residual income sources</nuxt-link>
                      <span
                        class="text-xs text-orange-500 font-semibold align-bottom ml-auto cursor-pointer"
                        >Start</span
                      >
                    </li>
                  </ul>
                </div>
                <hr />
                <div class="mt-6 mb-4">
                  <h6 class="text-sm text-gray-800 font-bold mb-5">
                    Part 2 - Creating income
                  </h6>
                  <ul class="text-xs text-gray-700">
                    <li class="mb-4">
                      <nuxt-link to="/"
                        >Understanding the concept of money</nuxt-link
                      >
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/"
                        >Career vs business (or both?)
                      </nuxt-link>
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/">Finding new income sources</nuxt-link>
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/">Starting a business</nuxt-link>
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/">Residual income sources</nuxt-link>
                    </li>
                  </ul>
                </div>
                <hr />
                <div class="pt-6 mb-4">
                  <h6 class="text-sm text-gray-800 font-bold mb-5">
                    Part 2 - Creating income
                  </h6>
                  <ul class="text-xs text-gray-700">
                    <li class="mb-4">
                      <nuxt-link to="/"
                        >Part 3 - Maximizing profits, minimizing
                        stress</nuxt-link
                      >
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/"
                        >Career vs business (or both?)
                      </nuxt-link>
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/">Finding new income sources</nuxt-link>
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/">Starting a business</nuxt-link>
                    </li>
                    <li class="mb-4">
                      <nuxt-link to="/">Residual income sources</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                v-if="
                  (tab === 1 && tabs.length === 4) ||
                  (tab === 2 && tabs.length === 5)
                "
              >
                <chat-messages no-card />
              </div>
              <div
                v-if="
                  (tab === 2 && tabs.length === 4) ||
                  (tab === 3 && tabs.length === 5)
                "
                class="px-4 md:px-5 lg:px-6 py-4 pb-10"
              >
                <div class="space-y-4">
                  <assignment-submission-list
                    v-for="(item, key) in [
                      'Business research assignment.doc',
                      'Business research assignment 2.doc',
                    ]"
                    :key="key"
                    :name="item"
                    link="#"
                  />
                </div>
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

const courses = require('@/static/json/latest-courses.json')
const videos = require('@/static/json/videos-list.json')
const youLearn = require('@/static/json/courses-you-learn.json')
const reviews = require('@/static/json/reviews.json')

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth', 'isTutor'],
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
    store.commit('app/SET_TITLE', 'Courses')
  },
  data: () => ({
    home: 'home',
    videos,
    course: courses[0],
    courses: _.take(courses, 3),
    youLearn,
    reviews,
    tab: 0,
    tabs: ['Lessons', 'Chat', 'Assignment', 'Resources'],
  }),
  mounted() {
    if (this.$device.isMobile) {
      this.tabs.unshift('Home')
    }
  },
  methods: {
    purchaseCourse() {
      this.$store.commit('app/SET_MODAL', 'purchase-modal')
      this.$store.commit('app/SET_VIEW_DATA', {
        type: 'Course',
        title: 'How to Build Multiple Sources of Income',
        desc: `Learn how to build and manage multiple sources of 
          income that leads to sustainable wealth`,
        price: 2500,
      })
    },
  },
}
</script>
