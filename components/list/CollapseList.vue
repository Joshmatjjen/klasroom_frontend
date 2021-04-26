<template>
  <div class="flex flex-col">
    <div
      v-for="(lis, key) in list"
      :key="key"
      class="flex flex-col"
      @click.prevent="toggle(key)"
    >
      <hr :class="{ 'border-orange-300': active === key }" />
      <div class="py-3">
        <h5
          class="font-semibold text-gray-700"
          :class="active !== key ? 'text-sm' : 'mb-4'"
        >
          {{ lis.title }}
        </h5>
        <p v-if="active === key" class="text-gray-700">{{ lis.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Array, required: true },
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    toggle(active) {
      this.active = active
    },
  },
}
</script>
