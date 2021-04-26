<template>
  <div class="flex flex-row progress relative" :class="{ labeled: label }">
    <label
      v-if="label && percentage < 98"
      class="flex flex-row justify-between gap-5 absolute"
    >
      <span class="text-xs text-gray-700 my-auto">{{ label }}</span>
      <span class="text-xs text-gray-600 my-auto">
        {{ percentage + '%' }}
      </span>
    </label>
    <div
      class="progress-bar bg-orange-500"
      :class="{
        'opacity-25': label && percentage <= 25,
        'opacity-50': label && percentage > 25 && percentage <= 50,
        'opacity-75': label && percentage > 50 && percentage <= 75,
      }"
      :style="{ width: `${percentage}%` }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: null },
    percentage: { type: Number, default: 10 },
  },
}
</script>

<style scoped>
.progress {
  height: 6px;
  background: rgba(249, 158, 66, 0.1);
  border-radius: 4px;
}
.progress.labeled {
  height: 22px;
  border-radius: 11px;
}
.progress-bar {
  height: 100%;
  border-radius: inherit;
}
label {
  width: 100%;
  z-index: 1;
  padding: 2px 10px;
}
</style>
