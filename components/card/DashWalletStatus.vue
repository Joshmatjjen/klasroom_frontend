<template>
  <div class="bg-white rounded-xl border border-gray-300 shadow-hover relative">
    <div class="p-4 md:p-5 lg:p-6 pb-16 md:pb-18 lg:pb-20">
      <div class="grid grid-cols-2 items-end">
        <h4
          class="text-left text-gray-700 font-extrabold leading-snug mt-0 md:mt-5 mb-4"
        >
          ₦{{ amount }}
        </h4>
        <p
          class="text-right text-xs md:text-sm text-gray-700 font-normal leading-snug mt-0 md:mt-5 mb-4"
        >
          current bal.
        </p>
      </div>
      <div class="block">
        <p class="text-xs md:text-sm text-gray-700">
          +₦{{ weekSales }} this week
        </p>
        <p class="text-xs md:text-sm text-gray-700">
          {{ courseSales }} total course sales
        </p>
        <p class="text-xs md:text-sm text-gray-700">
          {{ webinarSales }} total webinar sales
        </p>
      </div>
      <div class="hidden md:block mt-8">
        <img
          v-for="(item, key) in items"
          :key="key"
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          class="course-stacks mr-3"
        />
      </div>
    </div>
    <div v-if="more" class="absolute text-center bottom-0 mb-5 w-full px-5">
      <hr data-v-6cf0f546="" class="mb-4" />
      <nuxt-link :to="more" class="text-gray-700 inline-block">
        <span class="text-xs">See more</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    amount: { type: String, required: true },
    items: { type: Array, required: true },
    weekSales: { type: String, required: true },
    courseSales: { type: String, required: true },
    webinarSales: { type: String, default: null },
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
