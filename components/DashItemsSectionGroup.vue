<template>
  <div class="bg-none">
    <div class="flex mb-4">
      <h5
        v-if="title"
        class="text-lg md:text-base flex-grow font-extrabold text-gray-900"
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
