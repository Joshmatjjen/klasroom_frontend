<template>
  <!-- Toggle -->
  <div class="flex">
    <div class="toggle-wrapper">
      <div :class="!value ? 'active' : 'inactive'" @click="updateValue(false)">
        {{ active }}
      </div>
      <div :class="value ? 'active' : 'inactive'" @click="updateValue(true)">
        {{ inactive }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: { type: String, required: true },
    inactive: { type: String, required: true },
    value: { type: Boolean, default: false },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style scoped>
.toggle-wrapper {
  border-width: 5px;
  border-radius: 12px;
  @apply flex mx-auto bg-gray-200 border-gray-200 cursor-pointer;
}
.active,
.inactive {
  @apply text-sm rounded-lg py-2 px-5;
}
.active {
  @apply bg-orange-500 text-white;
}
.inactive {
  @apply bg-transparent text-gray-800;
}
</style>
