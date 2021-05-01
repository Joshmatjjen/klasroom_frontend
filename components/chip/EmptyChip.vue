<template>
  <div
    :class="
      isAbsolute
        ? 'flex absolute inset-x-auto items-center shadow-xl bg-white border border-orange-400 -mt-1 rounded-lg px-2 py-1'
        : 'flex flex-row absolute bg-orange-200 rounded-lg border border-orange-400 shadow-hover mb-5'
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isAbsolute: { type: Boolean, required: false },
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
