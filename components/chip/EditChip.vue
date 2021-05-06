<template>
  <div
    class="container flex flex-row bg-orange-200 rounded-lg border border-orange-400 shadow-hover mb-6 overflow-auto"
  >
    <div class="flex flex-row w-full p-2 md:p-4 overflow-hidden">
      <div class="pl-1 md:pl-3 flex flex-col justify-around">
        <p class="text-xs md:text-sm text-left font-thin text-gray-700">
          {{ desc }}
        </p>
      </div>
    </div>
    <div
      class="flex flex-row rounded-3xl items-center align-middle justify-center text-xs md:text-sm text-white md:text-rightmr-5"
    >
      <button
        class="btn2 btn2-primary text-xs md:text-sm py-2 md:py-3 w-24 md:w-32 items-center mr-1 md:mr-5"
      >
        {{ name }}
      </button>
      <div class="flex flex-row gap-10 items-center justify-end relative">
        <span
          v-on:click.prevent="toggleMenu()"
          class="z-50 mr-1 md:mr-5 text-gray-600 cursor-pointer hover:text-gray-900 font-extrabold text-left text-lg"
          >&#xFE19;</span
        >
        <div
          :class="{
            hidden: opt ? false : true,
          }"
          class="pop-up flex flex-col items-start p-2 justify-around pop-up absolute top-0 mt-10 border-gray-500 bg-white rounded-lg h-32 w-32 shadow-lg"
          :style="{ zIndex: 3 }"
        >
          <a
            href="#"
            class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
          >
            <p>Edit webinar</p>
          </a>
          <a
            href="#"
            class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
          >
            <p>Delete</p>
          </a>
          <a
            href="#"
            class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
          >
            <p>Share</p>
          </a>
          <a
            href="#"
            class="pop-up-item lg:mr-4 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
          >
            <p>Preview</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    desc: { type: String, required: false },
    name: { type: String, required: false },
  },
  // computed: {
  //   view_route() {
  //     const slug = _.get(this.course, 'slug', '')
  //     return this.session ? '/student/courses/view/' + slug : '/courses/' + slug
  //   },
  // },
  data: () => ({
    opt: false,
  }),
  methods: {
    toggleMenu() {
      // this.opt = !this.opt
    },
  },
}
</script>

<style scoped>
.container {
  height: 4.5rem;
}
.action-icon {
  width: 1.3rem;
  height: 1.3rem;
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
