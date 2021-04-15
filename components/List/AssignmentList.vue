<template>
  <div
    class="flex flex-row rounded-xl bg-white border border-gray-300 divide-x divide-gray-300"
  >
    <div class="flex flex-col mr-auto my-auto text-gray-700 py-4 px-5">
      <span class="block text-xs font-semibold">{{ title }}</span>
      <p class="text-xs md:truncate">{{ desc }}</p>
    </div>
    <button class="text-sm py-4 px-5 text-gray-700 focus:outline-none">
      See more
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String, required: true },
  },
}
</script>

<style scoped>
button {
  width: 144px;
}
</style>
