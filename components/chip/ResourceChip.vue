<template>
  <div
    class="container flex flex-row bg-orange-200 rounded-lg border border-orange-400 shadow-hover mb-5"
  >
    <div class="flex flex-row justify-center w-full p-4">
      <div class="pl-3 md:pl-5 flex flex-col justify-around">
        <p class="text-sm text-center font-thin text-gray-700">
          {{ file ? file.filename : link }}
        </p>
      </div>
    </div>
    <div>
      <div
        class="flex flex-row rounded-3xl text-xs md:text-sm text-white md:text-right my-5 mr-5"
      >
        <button class="flex items-center mr-5">
          <img class="w-6 h-6" src="/icon/edit.svg" />
        </button>
        <button class="items-center">
          <img class="w-6 h-6" src="/icon/delete.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    file: { type: Object, required: false },
    link: { type: String, required: false },
  },
  // computed: {
  //   view_route() {
  //     const slug = _.get(this.course, 'slug', '')
  //     return this.session ? '/student/courses/view/' + slug : '/courses/' + slug
  //   },
  // },
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
