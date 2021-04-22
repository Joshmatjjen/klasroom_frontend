<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-4 gap-5 space-y-3 md:space-y-0">
          <dash-item-metrics
            title="3 webinars"
            label="Upcoming"
            more="/student/webinars"
          />
          <dash-item-metrics
            title="2 webinars"
            label="Saved"
            more="/student/webinars"
          />
          <dash-item-metrics
            title="5 webinars"
            label="Attended"
            more="/student/webinars"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Upcoming Websinars"
              more="/student/my-webinars"
            >
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <webinar-item
                  v-for="(webinar, key) in webinars"
                  :key="key"
                  :webinar="webinar"
                  :session="true"
                />
              </div>
            </dash-items-section-group>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-orange-100">
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <dash-webinars-calendar class="col-span-2" />
          <dash-pre-recorded-webinars :items="undoneTasks" />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group title="Previously Attended Webinars">
              <dash-previously-attended-webinars />
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
  middleware: ['check-auth', 'auth', 'isTutor'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Webinars')
  },
  data: () => ({
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(webinars, 3),
  }),
}
</script>
