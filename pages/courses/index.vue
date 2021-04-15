<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto pb-12 lg:pb-32 px-4 lg:px-0">
        <h1 class="font-bold md:pt-10 pt-8 mb-8">Courses</h1>
        <div class="grid grid-cols-2 gap-6 lg:gap-32">
          <div class="col-span-2 md:col-span-1">
            <search-box />
            <div class="mt-8 mb-6">
              <span class="text-xs text-gray-700 block mb-4"
                >Popular course searches</span
              >
              <tags-slider :tags="tags" />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1">
            <h5 class="leading-normal mb-8">
              Learn from many experts and acquire knowledge that will put you in
              the top 3% of your field. Start your journey now.
            </h5>
            <button class="btn btn-primary" @click.prevent="purchaseCourse">
              Gain Full Access
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 md:col-span-4 lg:col-span-2">
            <filter-course class="hidden md:block" />
          </div>
          <div class="col-span-12 md:col-span-8 lg:col-span-10 lg:ml-24">
            <items-section-group title="320 Courses">
              <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <course-item
                  v-for="(course, key) in courses"
                  :key="key"
                  :course="course"
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

const courses = require('@/static/json/courses.json')

export default {
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    home: 'home',
    tags: [
      'Bitcoin',
      'Agriculture',
      'Fashion design',
      'Development',
      'Business',
    ],
    courses,
  }),
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
