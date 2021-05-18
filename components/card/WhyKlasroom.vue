<template>
  <div class="bg-gray-200 rounded-lg px-6 md:px-10 py-16 mt-12">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
      <div>
        <h2 class="font-bold leading-tight md:mt-4">Why Klasroom?</h2>
      </div>
      <div class="flex md:block">
        <span class="numbering pt-3 w-12 h-12 text-xl rounded-full bg-blue-600"
          >1</span
        >
        <p class="ml-4 md:mt-5 md:ml-0">
          Learn at your own pace and from anywhere
        </p>
      </div>
      <div class="flex md:block">
        <span
          class="numbering pt-3 w-12 h-12 text-xl rounded-full bg-orange-500"
          >2</span
        >
        <p class="ml-4 md:mt-5 md:ml-0">
          Flexible payment options that allows for pay as you go.
        </p>
      </div>
      <div class="flex md:block">
        <span class="numbering pt-3 w-12 h-12 text-xl rounded-full bg-blue-400"
          >3</span
        >
        <p class="ml-4 md:mt-5 md:ml-0">
          Learn from Africa’s most successful Entrepreneurs
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.numbering {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  min-height: 3rem;
  @apply text-white text-center;
}
</style>
