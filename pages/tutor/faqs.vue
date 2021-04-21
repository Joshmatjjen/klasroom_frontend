<template>
  <div class="mb-16">
    <section class="bg-orange-100 h-full">
      <div class="container mx-auto px-4 lg:px-0 h-full">
        <div class="grid grid-cols-12 gap-5 h-full">
          <div class="lg:col-span-6 col-span-full">
            <div
              class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300 shadow-hover h-full antialiased"
            >
              <div class="px-4 py-4">
                <div class="relative flex">
                  <input
                    type="text"
                    placeholder="Search help topic"
                    class="focus:outline-none focus:placeholder-gray-400 placeholder-gray-600"
                  />
                  <div
                    class="absolute right-0 items-center inset-y-0 flex sm:flex"
                  >
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-full h-12 w-12 mr-2 transition duration-500 ease-in-out text-white hover:bg-orange-100 focus:outline-none"
                    >
                      <img src="/icon/search.svg" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="p-5 pb-12">
                <div class="mb-5">
                  <p class="text-sm text-gray-600 font-semibold mb-4">
                    Courses
                  </p>
                  <collapse-list :list="faqsOne" />
                </div>
                <div>
                  <p class="text-sm text-gray-600 font-semibold mb-4">
                    Webinars
                  </p>
                  <collapse-list :list="faqsTwo" />
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

const courses = require('@/static/json/faqs-courses.json')
const webinars = require('@/static/json/faqs-webinars.json')

export default {
  layout: 'dashboard',
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'FAQs')
  },
  data: () => ({
    faqsOne: courses,
    faqsTwo: webinars,
  }),
}
</script>

<style scoped>
input[type='text'] {
  box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
  @apply w-full text-gray-600 pl-6 pr-16 bg-white rounded-lg py-5;
}
</style>
