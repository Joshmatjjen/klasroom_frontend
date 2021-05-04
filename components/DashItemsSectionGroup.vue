<template>
  <div class="bg-none">
    <div class="flex mb-4">
      <h5
        v-if="title"
        class="text-sm lg:text-lg md:text-base flex-grow font-extrabold text-gray-900"
      >
        {{ title }}
      </h5>
      <div v-if="edit">
        <div class="flex items-center mr-5 outline-none">
          <svg
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.63016 14.6796L2.82825 15.3464C2.80586 15.3496 2.79478 15.35 2.79076 15.35C2.7614 15.35 2.72749 15.341 2.68811 15.3039C2.6735 15.2888 2.66258 15.2705 2.65626 15.2505C2.64965 15.2295 2.64825 15.2073 2.65219 15.1857L2.65286 15.1818L3.32127 11.3708L12.8711 1.82089L16.179 5.13077L6.63016 14.6796Z"
              stroke="#000000"
              stroke-width="1.3"
            />
            <line
              x1="1.65"
              y1="18.725"
              x2="18.35"
              y2="18.725"
              stroke="#000000"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
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
    edit: { type: Boolean, required: false },
  },
}
</script>
