<template>
  <nuxt-link
    :to="view_route"
    class="block bg-white rounded-lg border border-gray-300 shadow-hover relative md:pb-12"
  >
    <div class="absolute mt-3 ml-3">
      <span class="top-tag">Webinar</span>
    </div>
    <div class="item-img">
      <img class="block min-w-full" src="/card/webinar.jpg" />
    </div>
    <div class="p-3 md:p-6">
      <p class="text-sm md:text-md text-gray-900 font-semibold mb-0">
        {{ webinar.name }}
      </p>
      <p class="text-xs md:text-sm text-gray-700 mt-2 md:mt-0">
        {{ webinar.author }}
      </p>
    </div>
    <div class="md:absolute grid md:grid-cols-2 w-full bottom-0 mb-5">
      <div class="pl-3 md:pl-5">
        <span class="text-xs md:text-sm text-gray-700">12th Oct. 2020</span>
      </div>
      <div
        class="text-xs md:text-sm text-gray-500 md:text-right pl-3 md:pl-0 md:pr-5"
      >
        20 slots left
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    webinar: { type: Object, required: true },
    session: { type: Boolean, default: false },
    userType: { type: String, required: false },
  },
  computed: {
    view_route() {
      const slug = _.get(this.webinar, 'slug', '')
      return this.session
        ? this.userType === 'tutor'
          ? '/tutor/webinars/view/' + slug
          : '/student/webinars/view/' + slug
        : '/webinars/' + slug
    },
  },
}
</script>

<style scoped>
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
  background: #f99e42;
  position: absolute;
}
</style>
