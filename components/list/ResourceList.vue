<template>
  <div
    :class="$device.isMobile || desc ? 'flex-col' : 'flex-row'"
    class="flex rounded-xl bg-white border border-gray-300 divide-x divide-y divide-gray-300"
  >
    <div class="flex flex-col mr-auto my-auto text-gray-700 py-4 md:py-6 px-5">
      <span class="block text-xs font-semibold" :class="{ 'mb-2': desc }">
        {{ name }}
      </span>
      <span v-if="desc" class="block text-xs">{{ desc }}</span>
    </div>
    <div class="flex content-between">
      <button
        class="text-sm py-4 px-5 text-gray-700 focus:outline-none mx-auto"
        :class="{ download: download }"
      >
        {{ download ? 'Download' : 'Open link' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    desc: { type: String, default: null },
    link: { type: String, required: true },
    download: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
button {
  min-width: 144px;
  max-width: 144px;
}
button.download {
  background-image: url('/icon/download.svg');
  background-repeat: no-repeat;
  background-position: top 50% left 15px;
  @apply pl-10;
}
</style>
