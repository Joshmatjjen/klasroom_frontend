<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto pt-10 pb-12 md:pt-20 md:pb-24 px-4 lg:px-0">
        <webinar-view-banner />
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <div class="grid lg:grid-cols-12 gap-6">
          <div class="md:col-span-6 lg:col-span-3">
            <h5 class="title mb-5">Sections</h5>
            <div class="mb-8">
              <a href="#" @click="scrollTo($event, 'what-to-learn')">
                <h6 class="text-base text-gray-800 font-bold mb-2">
                  What you’ll learn
                </h6>
              </a>
              <hr class="mb-3" />
              <a href="#" @click="scrollTo($event, 'by-author')">
                <h6 class="text-base text-gray-800 font-bold mb-2">
                  More Webinars by Joy Adeleke
                </h6>
              </a>
              <hr class="mb-3" />
              <a href="#" @click="scrollTo($event, 'more-like-this')">
                <h6 class="text-base text-gray-800 font-bold mb-2">
                  More like this
                </h6>
              </a>
              <hr class="mb-3" />
            </div>
          </div>
          <div class="md:col-span-6 lg:col-span-9">
            <div id="what-to-learn" class="mt-0">
              <h3 class="font-bold text-4xl text-gray-700 mb-4">
                What you’ll learn
              </h3>
              <div class="lg:max-w-3xl mb-4">
                <list-number-item
                  v-for="(learn, key) in youLearn"
                  :key="key"
                  :item="learn"
                />
              </div>
              <hr />
            </div>

            <div class="mt-16 mb-16">
              <h5 class="flex-grow font-semibold text-gray-600 mb-5">Tutor</h5>
              <div class="flex">
                <img src="/avatar-medium.jpg" class="rounded-lg mr-8" />
                <div>
                  <h4 class="font-bold">Joy Adeleke</h4>
                  <p class="lead">
                    Award Winning MBA Professor, Venture Capitalist and Author.
                  </p>
                  <div class="grid grid-cols-12 gap-y-6 mt-5">
                    <div class="col-span-6 md:col-span-3">
                      <span class="text-sm text-gray-700 block">
                        4.5/5 stars</span
                      >
                      <rating :grade="4" />
                    </div>
                    <div class="col-span-6 md:col-span-2">
                      <span class="text-sm text-gray-700 block mb-1"
                        >1,300</span
                      >
                      <p class="text-xs text-gray-500 mb-0">Students</p>
                    </div>
                    <div class="col-span-6 md:col-span-3">
                      <span class="text-sm text-gray-700 block mb-1">4</span>
                      <p class="text-xs text-gray-500 mb-0">Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <items-section-group
              id="by-author"
              title="More Webinars by Joy Adeleke"
              more="/webinars"
            >
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <webinar-item
                  v-for="(webinar, key) in webinars"
                  :key="key"
                  :webinar="webinar"
                />
              </div>
            </items-section-group>

            <items-section-group
              id="more-like-this"
              title="More like this"
              more="/webinars"
              class="mt-16"
            >
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <webinar-item
                  v-for="(webinar, key) in webinars"
                  :key="key"
                  :webinar="webinar"
                />
              </div>
            </items-section-group>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-20">
        <telegram-community-section />
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

const webinars = require('@/static/json/latest-webinars.json')
const youLearn = require('@/static/json/courses-you-learn.json')

export default {
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    home: 'home',
    course: webinars[0],
    webinars: _.take(webinars, 3),
    youLearn,
  }),
  methods: {
    scrollTo(e, id) {
      if (e) e.preventDefault()
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
    },
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

<style scoped>
h5 {
  @apply flex-grow text-xl font-semibold text-gray-600;
}
.part-list {
  @apply border-gray-200 border-b;
  @apply text-sm text-gray-700;
}
</style>
