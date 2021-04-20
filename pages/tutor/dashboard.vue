<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-3 gap-5 space-y-3 md:space-y-0">
          <dash-wallet-status
            amount="30,055.24"
            :items="courses"
            weekSales="32,420"
            courseSales="82"
            webinarSales="105"
            more="/student/my-courses"
          />
          <dash-items-status
            title="Courses"
            :items="courses"
            weekSales="+13 sales this week"
            published="4 published"
            more="/student/my-webinars"
          />
          <dash-items-status
            title="Webinars"
            :items="courses"
            weekSales="+28 sales this week"
            webinars="6 webinars"
            more="/student/my-webinars"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Courses you started"
              more="/student/my-courses"
            >
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <course-item
                  v-for="(course, key) in courses"
                  :key="key"
                  :course="course"
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
        <div class="grid grid-cols-3 gap-5">
          <dash-webinars-calendar class="col-span-2" />
          <dash-pre-recorded-webinars :items="undoneTasks" />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Saved Courses"
              more="/student/saved-courses"
            >
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <course-item
                  v-for="(course, key) in courses"
                  :key="key"
                  :course="course"
                  :session="true"
                />
              </div>
            </dash-items-section-group>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Suggested Courses"
              more="/student/suggested-courses"
            >
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <course-item
                  v-for="(course, key) in courses"
                  :key="key"
                  :course="course"
                  :session="true"
                />
              </div>
            </dash-items-section-group>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Suggested Webinars"
              more="/student/suggested-webinars"
            >
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <course-item
                  v-for="(course, key) in courses"
                  :key="key"
                  :course="course"
                  :session="true"
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

const courses = require('@/static/json/courses.json')

export default {
  layout: 'dashboard',
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Dashboard')
  },
  data: () => ({
    courses: _.take(courses, 4),
    undoneTasks: _.take(courses, 3),
  }),
}
</script>
