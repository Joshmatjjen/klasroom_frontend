<template>
  <div class="bg-white rounded-lg border border-gray-300 shadow-hover relative">
    <div class="p-4 md:p-5 lg:p-6 pb-16 md:pb-18 lg:pb-20">
      <span
        class="hidden md:inline-block bg-gray-200 w-16 h-16 rounded-lg"
      ></span>
      <h4 class="text-orange-500 font-semibold leading-snug mt-0 md:mt-5 mb-5">
        {{ category.name }}
      </h4>
      <p class="text-xs md:text-sm text-gray-700">{{ category.desc }}</p>
    </div>
    <div class="absolute md:text-center bottom-0 mb-5 w-full px-5">
      <nuxt-link to="/" class="view-more text-black inline-block">
        View more
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: { type: Object, required: true },
  },
}
</script>

<style scoped>
@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
