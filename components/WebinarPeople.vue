<template>
  <div
    class="flex flex-col flex-1 bg-white lg:bg-transparent rounded-xl border border-gray-300 lg:border-0 h-full max-h-screen antialiased"
  >
    <div class="mt-4 pr-4 md:pr-5 lg:pr-6">
      <input
        v-model="search"
        class="form-input"
        placeholder="Search a name"
        @change.prevent="doSearch"
      />
    </div>
    <div
      ref="scrollbar"
      class="mt-4 mb-3 mx-2 md:ml-0 md:pl-0 md:mb-0 p-3 pt-1 flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch"
    >
      <div class="grid gap-4">
        <div
          v-for="(contact, key) in results"
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
          <!-- <div v-if="contact.unread" class="flex flex-row mt-auto mb-1">
            <span class="notice">{{ contact.unread }}</span>
          </div> -->
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
      search: '',
    }
  },
  computed: {
    results() {
      return this.members.filter(
        (o) => o.name.toLowerCase().includes(this.search.toLowerCase()) === true
      )
    },
  },
  mounted() {
    const el = this.$refs.scrollbar
    el.scrollTop = el.scrollHeight
  },
  // methods: {
  //   doSearch: _.debounce((search) => {
  //     const mutate = query.direction === 'from' ? 'UPDATE_FROM' : 'UPDATE_TO'
  //     commit(mutate, query)
  //     dispatch('getRate', query.direction)
  //   }, 300),
  // },
}
</script>

<style scoped>
.notice {
  font-size: 9px;
  @apply flex items-center justify-center h-4 w-4;
  @apply bg-orange-500 text-white rounded-full;
}
.notice.spaced {
  margin-right: 2px;
}
</style>
