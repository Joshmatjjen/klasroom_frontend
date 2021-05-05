<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-4 gap-5 space-y-3 md:space-y-0">
          <dash-item-metrics
            title="5 courses"
            label="In progress"
            more="/student/courses"
          />
          <dash-item-metrics
            title="1 assignment"
            label="Pending"
            more="/student/courses"
          />
          <dash-item-metrics
            title="5 courses"
            label="Saved"
            more="/student/courses"
          />
          <dash-item-metrics
            title="2 courses"
            label="Completed"
            more="/student/courses"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-2 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group
              title="In progress"
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

    <section>
      <div class="container mx-auto my-10 px-2 lg:px-0">
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
      <div class="container mx-auto my-10 px-2 lg:px-0">
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
  </div>
</template>

<script>
import Vue from 'vue'

const courses = require('@/static/json/courses.json')

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Courses')
  },
  data: () => ({
    courses: _.take(courses, 4),
    undoneTasks: _.take(courses, 3),
  }),
}
</script>
