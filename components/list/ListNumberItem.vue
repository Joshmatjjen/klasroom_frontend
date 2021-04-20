<template>
  <div class="row-item flex py-5">
    <span class="numbering flex mr-5">
      <strong class="font-semibold mx-auto my-auto text-xl">{{ item.number }}</strong>
    </span>
    <div class="flex-grow my-auto">
      <h5 class="lg:mb-1">{{ item.name }}</h5>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
}
</script>

<style scoped>
.numbering {
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  backdrop-filter: blur(20px);
  @apply rounded-full bg-orange-500 text-white;
}
h5 {
  @apply leading-snug;
  @apply font-semibold text-xl text-gray-700;
}
p {
  @apply text-base text-gray-600;
}
</style>