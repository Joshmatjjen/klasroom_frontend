<template>
  <div class="min-h-screen mb-24">
    <section>
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12">
            <dash-items-section-group title="12 Courses">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <course-item
                  v-for="(course, key) in courses"
                  :key="key"
                  :course="course"
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
    store.commit('app/SET_TITLE', 'Courses you started')
  },
  data: () => ({
    courses: _.take(courses, 12),
  }),
}
</script>
