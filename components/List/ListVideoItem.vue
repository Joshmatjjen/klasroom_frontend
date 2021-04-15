<template>
  <div class="row-item flex py-8 border-b">
    <span class="play flex pl-1 mr-5 my-auto">
      <img src="/icon/play-icon-only.svg" class="mx-auto my-auto" />
    </span>
    <div class="flex-grow my-auto">
      <h5 class="lg:mb-1">{{ video.name }}</h5>
      <p>{{ video.desc }}</p>
    </div>
    <div class="text-right">
      <span class="text-md text-gray-600">{{ video.duration }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: { type: Object, required: true },
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
  @apply font-semibold text-xl text-gray-700;
}
p {
  @apply text-base text-gray-600;
}
</style>