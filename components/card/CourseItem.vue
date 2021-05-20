<template>
  <nuxt-link
    :to="view_route"
    class="card-box block bg-white rounded-lg border border-gray-300 shadow-hover relative md:pb-12"
  >
    <div class="absolute mt-3 ml-3">
      <span class="top-tag">Course</span>
    </div>
    <div class="item-img">
      <img class="block min-w-full" src="/card/course.jpg" />
    </div>
    <div class="p-3 md:p-6">
      <p class="text-sm md:text-md text-gray-900 font-semibold mb-0">
        {{ course.name }}
      </p>
      <p class="text-xs md:text-sm text-gray-700 mt-2 md:mt-0">
        {{ course.author }}
      </p>
    </div>
    <div class="md:absolute grid md:grid-cols-2 w-full bottom-0 mb-5">
      <div class="pl-3 md:pl-5">
        <rating :grade="3" />
      </div>
      <div
        class="text-xs md:text-sm text-gray-700 md:text-right pl-3 md:pl-0 md:pr-5"
      >
        56 ratings
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    course: { type: Object, required: true },
    session: { type: Boolean, default: false },
  },
  computed: {
    view_route() {
      const slug = _.get(this.course, 'slug', '')
      return this.session ? '/student/courses/view/' + slug : '/courses/' + slug
    },
  },
}
</script>

<style scoped>
.card-box {
  min-width: 13rem;
}
.top-tag {
  background-color: rgba(0, 0, 0, 0.25);
  padding: 4px 20px 4px 8px;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 12px;
  position: relative;
}
.top-tag::after {
  content: '';
  display: inline-block;
  border-radius: 4px;
  width: 8px;
  height: 8px;
  right: 6px;
  top: 8px;
  background: #0797ce;
  position: absolute;
}
</style>
