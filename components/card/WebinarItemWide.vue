<template>
  <nuxt-link
    :to="view_route"
    class="block bg-white rounded-lg border border-gray-300 shadow-hover"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-7 relative">
        <div class="p-6">
          <p class="text-md text-gray-900 font-semibold mb-0">
            {{ webinar.name }}
          </p>
          <p class="text-sm text-gray-700">{{ webinar.author }}</p>
        </div>
        <div class="absolute mg:grid md:grid-cols-2 w-full bottom-0 mb-5">
          <div class="pl-5">
            <span class="text-sm text-gray-700">12th Oct. 2020</span>
          </div>
          <div class="text-sm text-gray-500 md:text-right pl-5 md:pl-0 pr-5">
            20 slots left
          </div>
        </div>
      </div>
      <div class="col-span-5">
        <picture class="item-img rounded-br-lg overflow-hidden">
          <img class="block" src="/card/webinar.jpg" />
        </picture>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    webinar: { type: Object, required: true },
    session: { type: Boolean, default: false },
  },
  computed: {
    view_route() {
      const slug = _.get(this.webinar, 'slug', '')
      return this.session
        ? '/student/webinars/view/' + slug
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
picture {
  display: block;
  height: 100%;
}
picture img {
  height: 100%;
  width: auto;
}
</style>
