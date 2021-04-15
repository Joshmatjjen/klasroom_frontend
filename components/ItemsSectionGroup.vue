<template>
  <div class="bg-none">
    <div class="flex mb-5">
      <h5
        v-if="title"
        class="text-lg md:text-xl flex-grow font-semibold text-gray-600"
      >
        {{ title }}
      </h5>
      <nuxt-link
        v-if="more"
        :to="more"
        class="view-more text-black text-sm inline-block mt-1"
      >
        {{ 'See more' }}
      </nuxt-link>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    more: { type: String, required: false },
  },
}
</script>
