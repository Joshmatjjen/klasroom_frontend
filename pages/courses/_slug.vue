<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto pt-10 pb-12 md:pt-20 md:pb-24 px-4 lg:px-0">
        <course-view-banner />
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <div class="grid lg:grid-cols-12 gap-6">
          <div class="md:col-span-6 lg:col-span-3">
            <h5 class="title mb-5">Curriculum</h5>
            <div class="mb-8">
              <h6 class="text-md text-gray-800 font-bold mb-5">
                Part 1 - Understanding Money
              </h6>
              <ul class="part-list">
                <li class="mb-4">
                  <nuxt-link to="/"
                    >Understanding the concept of money</nuxt-link
                  >
                </li>
                <li class="mb-4">
                  <nuxt-link to="/">Career vs business (or both?) </nuxt-link>
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
            <div class="mb-8">
              <h6 class="text-md text-gray-800 font-bold mb-5">
                Part 2 - Creating income
              </h6>
              <ul class="part-list">
                <li class="mb-4">
                  <nuxt-link to="/"
                    >Understanding the concept of money</nuxt-link
                  >
                </li>
                <li class="mb-4">
                  <nuxt-link to="/">Career vs business (or both?) </nuxt-link>
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
            <div class="mb-8">
              <h6 class="text-md text-gray-800 font-bold mb-5">
                Part 2 - Creating income
              </h6>
              <ul class="part-list">
                <li class="mb-4">
                  <nuxt-link to="/"
                    >Part 3 - Maximizing profits, minimizing stress</nuxt-link
                  >
                </li>
                <li class="mb-4">
                  <nuxt-link to="/">Career vs business (or both?) </nuxt-link>
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
          <div class="md:col-span-6 lg:col-span-9">
            <div>
              <h5 class="mb-5">Introduction</h5>
              <video-frame class="mb-8" />
            </div>
            <div>
              <h5 class="mb-0">Part 1 - Understanding Money</h5>
              <div class="mb-8">
                <list-video-item
                  v-for="(video, key) in videos"
                  :key="key"
                  :video="video"
                />
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary shadow"
                  @click.prevent="purchaseCourse"
                >
                  Purchase and Start Course
                </button>
              </div>
            </div>
            <div class="mt-16">
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
              <h3 class="font-bold text-4xl text-gray-700 mb-4">
                Reviews and ratings
              </h3>
              <div class="mb-8">
                <list-review-item
                  v-for="(review, key) in reviews"
                  :key="key"
                  :review="review"
                />
              </div>
              <div class="text-center">
                <button class="btn bg-gray-200 text-gray-800">
                  View 36 more reviews
                </button>
              </div>
            </div>
            <items-section-group title="More like this">
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

const courses = require('@/static/json/latest-courses.json')
const videos = require('@/static/json/videos-list.json')
const youLearn = require('@/static/json/courses-you-learn.json')
const reviews = require('@/static/json/reviews.json')

export default {
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    home: 'home',
    videos,
    course: courses[0],
    courses: _.take(courses, 3),
    youLearn,
    reviews,
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

<style scoped>
h5 {
  @apply flex-grow text-xl font-semibold text-gray-600;
}
.part-list {
  @apply border-gray-200 border-b;
  @apply text-sm text-gray-700;
}
</style>
