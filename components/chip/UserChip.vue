<template>
  <div
    class="container flex flex-row gap-5 justify-between bg-white rounded-lg border border-gray-300 shadow-hover mb-3 overflow-x-auto"
  >
    <div class="flex flex-row w-full px-2 py-4">
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
    <div v-if="owner" class="ml-5">
      <div
        class="bg-green-600 rounded-3xl text-xs md:text-sm text-white md:text-right px-3 py-1 my-5 mx-2"
      >
        Owner
      </div>
    </div>
    <div v-if="user" class="ml-5">
      <div
        class="flex flex-row rounded-3xl text-xs md:text-sm text-white md:text-right my-5 ml-2 mr-5"
      >
        <button class="flex items-center mr-5">
          <svg
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.63016 14.6796L2.82825 15.3464C2.80586 15.3496 2.79478 15.35 2.79076 15.35C2.7614 15.35 2.72749 15.341 2.68811 15.3039C2.6735 15.2888 2.66258 15.2705 2.65626 15.2505C2.64965 15.2295 2.64825 15.2073 2.65219 15.1857L2.65286 15.1818L3.32127 11.3708L12.8711 1.82089L16.179 5.13077L6.63016 14.6796Z"
              stroke="#545454"
              stroke-width="1.3"
            />
            <line
              x1="1.65"
              y1="18.725"
              x2="18.35"
              y2="18.725"
              stroke="#545454"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="items-center">
          <svg
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.5 7.5H8.75V15H7.5V7.5Z" fill="#545454" />
            <path d="M11.25 7.5H12.5V15H11.25V7.5Z" fill="#545454" />
            <path
              d="M2.5 3.75V5H3.75V17.5C3.75 17.8315 3.8817 18.1495 4.11612 18.3839C4.35054 18.6183 4.66848 18.75 5 18.75H15C15.3315 18.75 15.6495 18.6183 15.8839 18.3839C16.1183 18.1495 16.25 17.8315 16.25 17.5V5H17.5V3.75H2.5ZM5 17.5V5H15V17.5H5Z"
              fill="#545454"
            />
            <path d="M7.5 1.25H12.5V2.5H7.5V1.25Z" fill="#545454" />
          </svg>
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
