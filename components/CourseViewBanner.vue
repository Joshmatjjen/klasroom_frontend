<template>
  <div class="grid lg:grid-cols-12 gap-10">
    <div class="col-span-12 lg:col-span-5 px-4 lg:px-0 hidden md:block">
      <div class="banner-card flex px-12 py-40">
        <button
          class="btn btn-primary mx-auto my-auto"
          @click.prevent="purchaseCourse"
        >
          Gain Full Access
        </button>
      </div>
    </div>
    <div class="lg:col-span-6">
      <h2 class="font-bold mb-8 leading-tight lg:pr-12">
        How to Build Multiple Sources of Income
      </h2>
      <p class="text-md md:text-md mb-8 text-gray-700 leading-normal">
        Learn how to build and manage multiple sources of income that leads to
        sustainable wealth
      </p>
      <div class="flex mb-10 md:mb-16">
        <img src="/avatar.jpg" class="rounded-full mr-3 w-8 h-8" />
        <span class="text-xs text-gray-700 block my-auto"> Joy Adeleke</span>
        <ul class="social-icons with-avatar my-auto">
          <li class="twitter">
            <a href="#"></a>
          </li>
          <li class="share">
            <a href="#"></a>
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-12 gap-y-6">
        <div class="col-span-6 md:col-span-3">
          <span class="text-sm text-gray-700 block"> 4.5/5 stars</span>
          <rating :grade="4" />
        </div>
        <div class="col-span-6 md:col-span-2">
          <span class="text-sm text-gray-700 block mb-1">56</span>
          <p class="text-xs text-gray-500 mb-0">Ratings</p>
        </div>
        <div class="col-span-6 md:col-span-3">
          <span class="text-sm text-gray-700 block mb-1">42</span>
          <p class="text-xs text-gray-500 mb-0">Current students</p>
        </div>
        <div class="col-span-6 md:col-span-3">
          <span class="text-sm text-gray-700 block mb-1">104</span>
          <p class="text-xs text-gray-500 mb-0">Completions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    purchaseCourse() {
      this.$store.commit('app/SET_MODAL', 'purchase-modal')
      this.$store.commit('app/SET_VIEW_DATA', {
        type: 'Course',
        title: 'How to Build Multiple Sources of Income',
        desc: `Learn how to build and manage multiple sources of 
          income that leads to sustainable wealth`,
        price: 2500,
      })
    },
  },
}
</script>

<style scoped>
.banner-card {
  background-image: url('/course-view-bg.jpg');
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  @apply bg-gray-200 overflow-hidden rounded-lg;
}
</style>
