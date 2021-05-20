<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-4 gap-5 space-y-3 md:space-y-0">
          <dash-item-metrics
            title="12 courses"
            label="Published"
            more="/student/courses"
          />
          <dash-item-metrics
            title="2 courses"
            label="Draft"
            more="/student/courses"
          />
          <dash-item-metrics
            title="34,600"
            label="Course sales"
            more="/student/courses"
          />
          <dash-item-metrics
            title="3,540"
            label="Completions"
            more="/student/courses"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto my-10 px-2 lg:px-0">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-full">
            <div class="col-span-12">
              <list-table-1
                :columns="columnsReviews"
                :rows="rowsReviews"
                type="Reviews"
              />
            </div>
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
  middleware: ['check-auth', 'auth', 'isTutor'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Courses')
  },
  data: () => ({
    courses: _.take(courses, 4),
    undoneTasks: _.take(courses, 3),
  }),
}
</script>
