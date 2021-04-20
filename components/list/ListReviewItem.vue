<template>
  <div class="row-item py-8 border-b">
    <div class="flex mb-5">
      <div class="flex-grow my-auto">
        <h5 class="lg:mb-1">{{ review.name }}</h5>
        <p class="text-sm text-gray-600">{{ review.author }}</p>
      </div>
      <div class="text-right">
        <rating :grade="review.rating" />
        <p class="text-sm text-gray-600 mt-2">{{ review.date }}</p>
      </div>
    </div>
    <div class="text-right">
      <span class="text-md text-gray-600">{{ review.duration }}</span>
    </div>
    <p class="desc">{{ review.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    review: { type: Object, required: true },
  },
}
</script>

<style scoped>
.play {
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  @apply rounded-full;
}
h5 {
  @apply leading-snug;
  @apply font-semibold text-base text-gray-700;
}
p.desc {
  @apply text-base text-gray-600;
}
</style>