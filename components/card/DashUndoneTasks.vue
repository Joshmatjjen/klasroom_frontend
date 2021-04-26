<template>
  <div class="bg-white rounded-xl border border-gray-300 shadow-hover relative">
    <div class="p-4 md:p-5 lg:p-6 pb-16 md:pb-18 lg:pb-20">
      <p class="font-bold text-sm text-gray-800 mb-3">Undone Tasks</p>
      <div v-for="(item, key) in items" :key="key" class="row-item flex py-3">
        <div class="flex-grow my-auto">
          <h5 class="text-sm font-semibold text-gray-700">Assignment</h5>
          <p class="text-xs text-gray-600">Introduction to writing</p>
        </div>
        <div class="text-right">
          <span class="text-xs text-gray-700">Due 12th Oct. 2020</span>
        </div>
      </div>
    </div>
    <div class="absolute md:text-center bottom-0 mb-5 w-full px-5">
      <hr class="mb-4" />
      <nuxt-link to="/student/undone-tasks" class="text-gray-700 inline-block">
        <span class="text-xs">See all</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
  },
}
</script>

<style scoped>
.course-stacks {
  display: inline-block;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  @apply bg-gray-300;
}
@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
