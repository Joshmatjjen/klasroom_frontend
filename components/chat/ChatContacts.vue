<template>
  <div
    class="flex flex-col flex-1 bg-white lg:bg-transparent rounded-xl border border-gray-300 lg:border-0 h-full max-h-screen antialiased"
  >
    <tabs-menu v-model="menu" :tabs="['Groups', 'Contacts']" center />
    <div
      ref="scrollbar"
      class="mt-4 mb-3 mx-2 md:ml-0 md:pl-0 md:mb-0 p-3 pt-1 flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch"
    >
      <div v-if="menu === 1" class="grid gap-4">
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
          <div v-if="contact.unread" class="flex flex-row mt-auto mb-1">
            <span class="notice">{{ contact.unread }}</span>
          </div>
        </div>
      </div>
      <div v-else class="grid gap-4">
        <div
          v-for="(group, key) in groups"
          :key="key"
          class="flex cursor-pointer"
        >
          <img src="/avatar.jpg" class="rounded-lg w-10 h-10 mr-3" />
          <div class="flex-grow my-auto">
            <p class="text-xs text-gray-700 font-bold">
              {{ group.name }}
            </p>
            <p class="text-xs leading-tight text-gray-500">
              {{ group.last_message }}
            </p>
          </div>
          <div
            v-if="group.handle || group.unread"
            class="flex flex-row mt-auto mb-1"
          >
            <span
              v-if="group.handle"
              class="notice"
              :class="{ spaced: group.unread }"
              >@</span
            >
            <span v-if="group.unread" class="notice">
              {{ group.unread }}
            </span>
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
      menu: 0,
      members: require('@/static/json/members.json'),
      groups: require('@/static/json/groups.json'),
    }
  },
  mounted() {
    const el = this.$refs.scrollbar
    el.scrollTop = el.scrollHeight
  },
}
</script>

<style scoped>
.chat-window {
  height: calc(100% - 38px);
}
.notice {
  font-size: 9px;
  @apply flex items-center justify-center h-4 w-4;
  @apply bg-orange-500 text-white rounded-full;
}
.notice.spaced {
  margin-right: 2px;
}
@media (max-width: 640px) {
  h4 {
    @apply text-base;
  }
  .chat-window {
    height: calc(100% - 58px);
  }
}
</style>
