<template>
  <div
    class="bg-white rounded-xl border border-gray-300 shadow-hover relative overflow-x-auto"
  >
    <div class="px-4 md:px-5 lg:px-6 py-5 min-w-500 overflow-x-auto">
      <div class="grid grid-cols-12 gap-8">
        <div />
        <div class="title text-left col-span-5">Webinar title</div>
        <div class="title text-left col-span-2">Host</div>
        <div class="title text-left col-span-2">Rating</div>
        <div class="title text-right col-span-2">Streamed on</div>
      </div>
      <hr class="my-3" />
      <div
        v-for="(item, key) in [0, 1, 2, 3, 4, 5]"
        :key="key"
        class="row-item"
      >
        <div class="grid grid-cols-12 mb-2">
          <span
            class="item-image col-span-2 md:col-span-2 lg:col-span-1 my-auto"
          ></span>
          <div class="text-left col-span-4 md:col-span-4 lg:col-span-5 my-auto">
            <p class="text-sm text-gray-700 font-bold">
              Logo Design Masterclass
            </p>
          </div>
          <div class="text-left col-span-2 my-auto">
            <p class="text-sm text-gray-600">Ade Matthews</p>
          </div>
          <div class="text-left col-span-2 pt-1 my-auto">
            <rating :grade="4" />
          </div>
          <div class="text-right col-span-2 my-auto">
            <span class="text-xs text-gray-600">12th Oct. 2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.title {
  @apply text-sm text-gray-500;
}
.item-image {
  height: 48px;
  width: 73.5px;
  @apply bg-gray-300 pr-10;
}
@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
