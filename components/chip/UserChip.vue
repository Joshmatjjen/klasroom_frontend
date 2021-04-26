<template>
  <div
    class="container flex flex-row bg-white rounded-lg border border-gray-300 shadow-hover mb-5"
  >
    <div class="flex flex-row w-full p-4">
      <img class="h-full rounded-lg" src="/avatar.jpg" />
      <div class="pl-3 md:pl-5 flex flex-col justify-around">
        <p class="text-xs font-bold text-gray-700">
          {{ owner ? owner.name : user.name }}
        </p>
        <p class="text-xs font-light text-gray-500">
          {{ owner ? 'You' : user.email }}
        </p>
      </div>
    </div>
    <div v-if="owner">
      <div
        class="bg-green-600 rounded-3xl text-xs md:text-sm text-white md:text-right px-3 py-1 md:m-5"
      >
        Owner
      </div>
    </div>
    <div v-if="user">
      <div
        class="flex flex-row rounded-3xl text-xs md:text-sm text-white md:text-right md:m-5"
      >
        <button class="flex items-center mr-5">
          <img class="w-6 h-6" src="/icon/edit.svg" />
        </button>
        <button class="items-center">
          <img class="w-6 h-6" src="/icon/delete.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    owner: { type: Object, default: null },
    user: { type: Object, default: null },
  },
  // computed: {
  //   view_route() {
  //     const slug = _.get(this.course, 'slug', '')
  //     return this.session ? '/student/courses/view/' + slug : '/courses/' + slug
  //   },
  // },
}
</script>

<style scoped>
.container {
  height: 4.5rem;
}
.action-icon {
  width: 1.3rem;
  height: 1.3rem;
}
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
