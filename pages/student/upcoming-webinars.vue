<template>
  <div class="min-h-screen mb-24">
    <section>
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group title="12 Webinars">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <webinar-item
                  v-for="(webinar, key) in webinars"
                  :key="key"
                  :webinar="webinar"
                />
              </div>
            </dash-items-section-group>
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
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Upcoming Webinars')
  },
  data: () => ({
    webinars: _.take(webinars, 12),
  }),
}
</script>
