<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-3 gap-5 space-y-3 md:space-y-0">
          <dash-items-status
            title="Courses"
            :items="courses"
            undone="5 in progress"
            done="3 completed"
            more="/student/my-courses"
          />
          <dash-items-status
            title="Webinars"
            :items="courses"
            undone="4 upcoming"
            done="3 attended"
            more="/student/my-webinars"
          />
          <dash-undone-tasks :items="undoneTasks" />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-2 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Courses you started"
              more="/student/my-courses"
            >
              <div class="flex flex-row overflow-x-auto gap-5 scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch">
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
      <div class="container mx-auto my-10 px-2 lg:px-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <dash-webinars-calendar class="col-span-2" />
          <dash-pre-recorded-webinars :items="undoneTasks" />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-2 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Saved Courses"
              more="/student/saved-courses"
            >
              <div class="flex flex-row overflow-x-auto gap-5 scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch">
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
      <div class="container mx-auto my-10 px-2 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Suggested Courses"
              more="/student/suggested-courses"
            >
              <div class="flex flex-row overflow-x-auto gap-5 scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch">
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
      <div class="container mx-auto my-10 px-2 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="Suggested Webinars"
              more="/student/suggested-webinars"
            >
              <div class="flex flex-row overflow-x-auto gap-5 scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch">
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
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Dashboard')
  },
  data: () => ({
    courses: _.take(courses, 4),
    undoneTasks: _.take(courses, 3),
  }),
}
</script>
