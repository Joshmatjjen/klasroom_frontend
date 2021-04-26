<template>
  <div
    class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300 shadow-hover h-full max-h-screen antialiased"
  >
    <div class="flex flex-col pt-4 px-4 md:pt-5 md:px-5">
      <div class="flex flex-row gap-6">
        <p class="text-sm font-bold text-gray-700">Members</p>
      </div>
      <hr class="mt-4 border-gray-300" />
    </div>
    <div
      ref="scrollbar"
      class="mt-4 mb-3 mx-2 p-3 pt-1 flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch"
    >
      <div class="grid gap-4 pb-4">
        <div
          v-for="(contact, key) in members"
          :key="key"
          class="flex cursor-pointer"
        >
          <img src="/avatar.jpg" class="rounded-lg w-10 h-10 mr-3" />
          <div class="flex-grow my-auto">
            <p class="text-xs text-gray-700 font-bold">
              {{ contact.name }}
            </p>
            <p
              class="text-xs leading-tight"
              :class="contact.online ? 'text-green-500' : 'text-gray-600'"
            >
              {{ contact.online ? 'Online' : 'Offline' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: require('@/static/json/members.json'),
    }
  },
  mounted() {
    const el = this.$refs.scrollbar
    el.scrollTop = el.scrollHeight
  },
}
</script>

<style scoped>
@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
}
</style>
