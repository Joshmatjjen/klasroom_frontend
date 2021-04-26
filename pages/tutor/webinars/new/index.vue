<template>
  <div>
    <div
      @click="toggleMeetingOpt"
      :class="{ hidden: !meetingOpt }"
      class="fixed"
      :style="{
        width: '100%',
        height: '100vh',
        zIndex: 2,
        marginLeft: '-300px',
      }"
    ></div>
    <section class="bg-orange-100">
      <div class="container mx-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-6 px-4 lg:px-0">
            <h1 class="font-bold leading-tight md:mt-20 mt-10 lg:-mr-8">
              <!-- Webinars and courses to up your game 🚀🚀 -->
              <!-- Relevant knowledge to start earning immediately -->
              Create video meetings and webinars for free.
            </h1>
            <h5 class="mt-10 mb-8 leading-normal">
              Build your business with practical knowledge from Africa’s most
              successful entrepreneurs. Gain insights to industry secrets and
              strategies for building successful businesses in Africa.
            </h5>

            <div class="flex text-center pt-8 pb-4 sm:pb-4">
              <span class="flex mr-3">
                <nuxt-link
                  to="/tutor/webinars/create"
                  class="btn text-white bg-blue-500 shadow"
                >
                  <img src="/icon/webinars.svg" class="inline h-5 mr-2" />
                  New Webinar
                </nuxt-link>
              </span>
            </div>

            <div class="flex text-center pt-1 pb-4 sm:pb-4 relative">
              <span class="flex mr-3">
                <button
                  type="button"
                  class="btn btn-primary shadow"
                  @click.prevent="toggleMeetingOpt"
                >
                  <img src="/icon/camera.svg" class="inline h-5 mr-2" />
                  New Meeting
                </button>
              </span>
              <input class="search-box" placeholder="Enter code or link" />
              <div
                :class="{ hidden: !meetingOpt }"
                class="pop-up absolute bg-white border-1 right-0 rounded-lg h-52 shadow-lg text-left"
                :style="{ zIndex: 2 }"
              >
                <a
                  href="#"
                  class="pop-up-item hover:bg-gray-200 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                >
                  <p>Create a meeting for later</p>
                </a>
                <a
                  href="#"
                  class="pop-up-item hover:bg-gray-200 md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
                >
                  <p>Start an instant meeting</p>
                </a>
                <a
                  href="#"
                  class="pop-up-item hover:bg-gray-200 md:text-black md:bg-transparent block md:inline-block mb-5 md:mb-0"
                >
                  <p>Schedule a meeting</p>
                </a>
              </div>
            </div>

            <div class="mt-8 mb-6 lg:mb-40">
              <hr />
            </div>
          </div>
          <img
            src="/home-illust.svg"
            class="lg:absolute lg:top-0 right-0 col-span-12 lg:mt-32 xl:mr-6 lg:-mr-16"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  data: () => ({
    meetingOpt: false,
  }),
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'New Meeting or Webinar')
  },
  methods: {
    toggleMeetingOpt() {
      this.meetingOpt = !this.meetingOpt
    },
  },
}
</script>

<style scoped>
.search-box {
  background-image: url('/icon/search.svg');
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-position: top 14px left 14px;
  padding: 12.5px 18px 12px 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: initial;
  box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
  border-radius: 8px;
  min-width: 250px;
  font-size: 14px;
  outline: none;
}
.pop-up {
  top: 4rem;
  left: 0;
  width: 17rem;
}
.pop-up-item {
  padding: 12.5px 36px;
  font-size: 0.875rem;
  font-weight: 300;
  width: 100%;
}
.pop-up-item:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.pop-up-item:last-child {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
@media only screen and (max-width: 640px) {
  .search-box {
    background-position: top 15px right 15px;
    padding: 15px 20px;
    box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
    border-radius: 8px;
    min-width: 100%;
    @apply text-xs;
  }
}
</style>
