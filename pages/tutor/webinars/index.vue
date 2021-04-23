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
          <dash-item-metrics
            title="1 webinars"
            label="Draft"
            more="/student/webinars"
          />
          <dash-item-metrics
            title="3,540"
            label="Attendants"
            more="/student/webinars"
          />
        </div>
      </div>
    </section>

    <section>
      <div
        class="flex flex-row gap-10 place-items-start px-10 border-b-2 border-gray-200"
      >
        <button
          v-on:click="switcher('btn1')"
          v-bind:class="{ active: isActive.btn1 }"
          class="menu-btn"
        >
          <p class="text-xs text-gray-700">Upcoming webinars</p>
        </button>
        <button
          v-on:click="switcher('btn2')"
          v-bind:class="{ active: isActive.btn2 }"
          class="menu-btn"
        >
          <p class="text-xs text-gray-700">Recorded webinars</p>
        </button>
        <button
          v-on:click="switcher('btn3')"
          v-bind:class="{ active: isActive.btn3 }"
          class="menu-btn"
        >
          <p class="text-xs text-gray-700">Draft</p>
        </button>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <webinar-table :columns="columns" :rows="rows" />
          </div>
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
const webinarCourse = require('@/static/json/webinar-course.json')

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth', 'isTutor'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Webinars')
  },
  data: () => ({
    courses: _.take(courses, 4),
    undoneTasks: _.take(courses, 3),
    columns: [
      {
        label: 'Course title',
        field: 'courseTitle',
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
        label: 'Created On',
        field: 'createdAt',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
      },
    ],
    rows: _.take(webinarCourse, 4),
    isActive: {
      btn1: false,
      btn2: false,
      btn3: false,
    },
  }),
  methods: {
    switcher: function (value) {
      switch (value) {
        case 'btn1':
          this.isActive.btn1 = true
          this.isActive.btn2 = false
          this.isActive.btn3 = false
          break
        case 'btn2':
          this.isActive.btn1 = false
          this.isActive.btn2 = true
          this.isActive.btn3 = false
          break
        case 'btn3':
          this.isActive.btn1 = false
          this.isActive.btn2 = false
          this.isActive.btn3 = true
          break
        default:
          this.isActive.btn1 = true
          this.isActive.btn2 = false
          this.isActive.btn3 = false
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
