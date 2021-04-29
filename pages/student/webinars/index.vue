<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-4 gap-5 space-y-3 md:space-y-0">
          <dash-item-metrics
            title="3 webinars"
            label="Published"
            more="/student/webinars"
          />
          <dash-item-metrics
            title="34,600"
            label="Webinar sales"
            more="/student/webinars"
          />
          <dash-item-metrics title="3,540" label="Attendants" />
          <dash-item-metrics title="20 webinars" label="Attended" />
        </div>
      </div>
    </section>

    <section>
      <div
        class="flex flex-row gap-10 place-items-start px-10 border-b-2 border-gray-200"
      >
        <button
          v-on:click="switcher('upcoming')"
          v-bind:class="{ active: isWebinars.upcoming }"
          class="menu-btn"
        >
          <p class="text-xs text-gray-700">My upcoming webinars</p>
        </button>
        <button
          v-on:click="switcher('recorded')"
          v-bind:class="{ active: isWebinars.recorded }"
          class="menu-btn"
        >
          <p class="text-xs text-gray-700">My recorded webinars</p>
        </button>
        <button
          v-on:click="switcher('draft')"
          v-bind:class="{ active: isWebinars.draft }"
          class="menu-btn"
        >
          <p class="text-xs text-gray-700">My draft</p>
        </button>
      </div>
    </section>

    <section>
      <!-- Upcoming -->
      <div
        v-if="isWebinars.upcoming"
        class="container mx-auto my-10 px-4 lg:px-0"
      >
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <webinar-table :columns="columnsUpcoming" :rows="rowsUpcoming" />
          </div>
        </div>
      </div>

      <!-- Recorded -->
      <div
        v-if="isWebinars.recorded"
        class="container mx-auto my-10 px-4 lg:px-0"
      >
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <webinar-table :columns="columnsRecorded" :rows="rowsRecorded" />
          </div>
        </div>
      </div>

      <!-- Draft -->
      <div v-if="isWebinars.draft" class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <webinar-table
              :columns="columnsDraft"
              :rows="rowsDraft"
              :onDraft="true"
            />
          </div>
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

const courses = require('@/static/json/courses.json')
const webinars = require('@/static/json/webinars.json')
const webinarCourse = require('@/static/json/webinar-course.json')
const webinarRecorded = require('@/static/json/webinar-recorded.json')
const webinarDraft = require('@/static/json/webinar-draft.json')

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Webinars')
  },
  data: () => ({
    courses: _.take(courses, 4),
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(courses, 3),
    // Upcoming
    columnsUpcoming: [
      {
        label: 'Webinar title',
        field: 'webinarTitle',
      },
      {
        label: 'Price',
        field: 'price',
      },
      {
        label: 'Sales',
        field: 'sales',
      },
      {
        label: 'Webinar Type',
        field: 'webinarType',
      },
      {
        label: 'Date',
        field: 'date',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
      },
    ],
    rowsUpcoming: _.take(webinarCourse, 4),
    // Recorded
    columnsRecorded: [
      {
        label: 'Webinar title',
        field: 'webinarTitle',
      },
      {
        label: 'Price',
        field: 'price',
      },
      {
        label: 'Sales',
        field: 'sales',
      },
      {
        label: 'Attendees',
        field: 'attendees',
      },
      {
        label: 'Rating',
        field: 'rating',
      },
      {
        label: 'Held On',
        field: 'heldOn',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
      },
    ],
    rowsRecorded: _.take(webinarRecorded, 4),
    columnsDraft: [
      {
        label: 'Webinal title',
        field: 'webinarTitle',
      },
    ],
    rowsDraft: _.take(webinarDraft, 4),

    isWebinars: {
      upcoming: true,
      recorded: false,
      draft: false,
    },
  }),
  methods: {
    switcher: function (value) {
      switch (value) {
        case 'upcoming':
          this.isWebinars.upcoming = true
          this.isWebinars.recorded = false
          this.isWebinars.draft = false
          break
        case 'recorded':
          this.isWebinars.upcoming = false
          this.isWebinars.recorded = true
          this.isWebinars.draft = false
          break
        case 'draft':
          this.isWebinars.upcoming = false
          this.isWebinars.recorded = false
          this.isWebinars.draft = true
          break
        default:
          this.isWebinars.upcoming = true
          this.isWebinars.recorded = false
          this.isWebinars.draft = false
      }
      // some code to filter users
    },
  },
}
</script>

<style scoped>
.menu-btn {
  border-top: 5px solid;
  border-bottom: 5px solid;
  padding: 0.938rem 0;
  display: inline-block;
  border-color: transparent;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.menu-btn.active {
  border-bottom-color: #f99e42;
  font-weight: 700;
}
</style>
