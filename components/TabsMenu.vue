<template>
  <div v-if="tabs" class="tabs flex flex-col overflow-hidden overflow-x-auto">
    <div
      class="grid grid-flow-col gap-4"
      :class="{
        'pr-10': !center,
        'place-items-center': center,
        'px-10': tabs.length < 3,
        'px-5': tabs.length > 2,
      }"
    >
      <button
        v-for="(tab, key) in tabs"
        :key="key"
        class="menu-btn"
        :class="{ active: value === key }"
        @click.prevent="updateValue(key)"
      >
        <p class="text-xs text-gray-700">{{ tab }}</p>
      </button>
    </div>
    <hr class="border-gray-300 mx-4 md:mx-0" />
  </div>
</template>

<script>
export default {
  props: {
    tabs: { type: Array, required: true },
    value: { type: Number, default: 0 },
    center: { type: Boolean, default: false },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style scoped>
.tabs {
  min-height: 59px;
}
.menu-btn {
  border-top: 5px solid;
  border-bottom: 5px solid;
  padding: 0.938rem 0;
  @apply inline-block border-transparent outline-none;
}
.menu-btn.active {
  border-bottom-color: #f99e42;
  @apply font-bold;
}
</style>
