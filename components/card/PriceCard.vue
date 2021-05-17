<template>
  <div
    class="block bg-white rounded-xl border-2 border-t-8 shadow-hover relative pb-5"
    :class="'border-' + priceData.color"
    :style="{
      borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
      borderRight: '1px solid rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    }"
  >
    <div
      class="sm:px-5 lg:px-5 md:px-5 sm:py-5 md:py-2 md:p-6 mx-auto text-center"
    >
      <p class="text-sm text-gray-700 font-semibold mt-2 mb-3">
        {{ priceData.name }}
      </p>
      <h1
        class="text-2x lg:text-2xl xl:text-4xl text-gray-900 font-semibold mb-0"
      >
        {{ isAnnually ? priceData.annualPrice : priceData.monthlyPrice }}
      </h1>
      <p class="text-sm text-gray-700 mt-2 md:mt-0">
        {{ priceData.description }}
      </p>
    </div>
    <div
      class="px-5 sm:px-5 lg:px-5 md:px-5 xl:px-10 py-10 md:p-6 mx-auto text-left"
    >
      <div
        class="flex flex-row gap-5 mb-5"
        v-for="item in priceInfo"
        :key="item"
      >
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.85714L8.07143 15.9286L19 5"
              stroke="#8A8A8A"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <p class="text-sm text-gray-900 font-thin">{{ item }}</p>
      </div>
    </div>
    <div class="grid w-full bottom-0 mt-0 justify-center">
      <button
        type="button"
        class="btn text-white shadow-lg mx-5"
        :class="'bg-' + priceData.color"
      >
        Buy now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    priceData: { type: Object, required: true },
    priceInfo: { type: Array, default: [] },
    isAnnually: { type: Boolean, default: false },
    // bg-orange-500
    // border-gray-300
  },
  computed: {
    view_route() {
      const slug = _.get(this.course, 'slug', '')
      return this.session ? '/student/courses/view/' + slug : '/courses/' + slug
    },
  },
}
</script>

<style scoped>
.top-tag {
  background-color: rgba(0, 0, 0, 0.25);
  padding: 4px 20px 4px 8px;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 12px;
  position: relative;
}
.top-tag::after {
  content: '';
  display: inline-block;
  border-radius: 4px;
  width: 8px;
  height: 8px;
  right: 6px;
  top: 8px;
  background: #0797ce;
  position: absolute;
}
</style>
