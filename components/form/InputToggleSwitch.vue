<template>
  <span class="inline-block rounded-full">
    <div
      class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in"
      :class="{ 'mr-2': label }"
    >
      <input
        id="toggle"
        type="checkbox"
        name="toggle"
        :checked="value"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"
        @change="updateValue"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer"
      ></label>
    </div>
    <label v-if="label" for="toggle" class="text-xs text-gray-700">
      {{ label }}
    </label>
  </span>
</template>

<script>
// Use v-model on the element to get value
export default {
  props: {
    label: { type: String, default: null },
    value: { type: Boolean, default: false },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value.target.checked)
    },
  },
}
</script>

<style scoped>
/* CHECKBOX TOGGLE SWITCH */

/* @apply rules for documentation, these do not work as inline style */

.toggle-checkbox {
  @apply outline-none bg-gray-400 border-gray-200;
}
.toggle-checkbox:checked {
  right: 0;
  border-color: #fde2c6;
  @apply right-0 bg-orange-500;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #fde2c6;
}
</style>
