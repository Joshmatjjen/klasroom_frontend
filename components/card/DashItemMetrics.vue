<template>
  <div class="bg-white rounded-xl border border-gray-300 shadow-hover relative">
    <div class="px-4 md:px-5 lg:px-6 py-4">
      <div class="row-item flex py-3 divide-x divide-gray-300">
        <div class="flex-grow my-auto">
          <h5 class="text-base font-extrabold text-gray-700">
            {{ title }}
          </h5>
          <p class="text-sm text-gray-600">{{ label }}</p>
        </div>
        <div v-if="more" class="text-right pl-5">
          <!-- <span class="text-xs text-gray-700">Due 12th Oct. 2020</span> -->
          <nuxt-link
            to="/student/undone-tasks"
            class="text-gray-700 inline-block my-3"
          >
            <span class="text-sm">See more</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: Number, required: true },
    label: { type: String, required: true },
    more: { type: String, default: null },
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
