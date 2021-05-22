<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto pb-12 lg:pb-32 px-4 lg:px-0">
        <h1 class="font-bold md:pt-10 pt-8 mb-8">Webinars</h1>
        <div class="grid grid-cols-2 gap-6 lg:gap-32">
          <div class="col-span-2 md:col-span-1">
            <search-box />
            <div class="mt-8 mb-6">
              <span class="text-xs text-gray-700 block mb-4"
                >Popular webinar searches</span
              >
              <tags-slider :tags="tags" />
            </div>
          </div>
          <div class="col-span-2 md:col-span-1">
            <h5 class="mb-8 leading-normal">
              Learn from seasoned and experienced experts.
            </h5>
            <button @click.prevent="signinCallBackAction" class="btn btn-primary">Create Webinar</button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container mx-auto my-16 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 md:col-span-4 lg:col-span-2">
            <filter-webinar class="hidden md:block" />
          </div>
          <div class="col-span-12 md:col-span-8 lg:col-span-10 lg:ml-24">
            <items-section-group title="210 Webinars">
              <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

const tags = require('@/static/json/tags-courses.json')
const webinars = require('@/static/json/webinars.json')

export default {
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    home: 'home',
    tags,
    webinars,
  }),
  methods: {
    signinCallBackAction() {
        
      if (this.$store.getters["auth/user"])
        this.$router.push("/student/webinars/new");

      else
        this.$store.commit('app/LOGIN_MODAL', {
          status: true, 
          type: 'login', 
          userType: 'student',
          callback: () => {
            this.$router.push("/student/webinars/new")
          }
        });
    }
  }
}
</script>
