<template>
  <div class="block">
    <span
      v-for="(tag, key) in tags"
      :key="key"
      class="tag-slider py-2 px-4 mr-3 mb-3"
      >{{ tag }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    tags: { type: Array, required: true },
    color: { type: String, default: 'orange' },
    opacity: { type: Number, default: 25 },
  },
}
</script>

<style scoped>
.tag-slider {
  background-color: rgba(249, 158, 66, 0.16);
  @apply inline-block cursor-pointer text-xs;
  @apply text-gray-900 rounded-full;
}
</style>
