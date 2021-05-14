<template>
  <div>
    <!-- <div
      @click="toggleMeetingOpt"
      :class="{ hidden: !meetingOpt }"
      class="fixed"
      :style="{
        width: '100%',
        height: '100vh',
        zIndex: 2,
        marginLeft: '-300px',
      }"
    ></div> -->
    <section class="bg-orange-100">
      <div class="mx-auto flex items-center align-middle justify-center">
        <div
          class="grid grid-cols-12 mt-8 md:mb-6 lg:mb-20 xl:mb-24 md:mx-0 lg:mx-5 xl:mx-0"
        >
          <!-- Left -->
          <div class="col-span-12 md:col-span-6 px-4 lg:px-0">
            <h1
              class="font-bold leading-tight sm:mt-0 md:mt-0 lg:mt-10 lg:-mr-8"
            >
              Create video meetings and webinars for free.
            </h1>
            <h5 class="mt-10 mb-8 leading-normal">
              Build your business with practical knowledge from Africa’s most
              successful entrepreneurs. Gain insights to industry secrets and
              strategies for building successful businesses in Africa.
            </h5>

            <div class="flex text-center pt-8 pb-4 sm:pb-4 mb-10">
              <div class="flex text-center md:pt-8 md:pb-4 sm:pb-8">
                <span class="flex mr-3">
                  <nuxt-link
                    to="/student/webinars/create"
                    class="btn2 p-3 lg:px-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm text-white bg-blue-500 shadow"
                  >
                    <img src="/icon/webinars.svg" class="inline h-5 mr-2" />
                    New Webinar
                  </nuxt-link>
                </span>
              </div>

              <div class="flex text-center md:pt-8 md:pb-4 sm:pb-4 relative">
                <span class="flex mr-3">
                  <button
                    type="button"
                    class="btn2 p-3 lg:px-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm btn2-primary shadow"
                    @click.prevent="toggleMeetingOpt"
                  >
                    <img src="/icon/camera.svg" class="inline h-5 mr-2" />
                    New Meeting
                  </button>
                </span>
                <!-- <input class="search-box" placeholder="Enter code or link" /> -->
                <div
                  :class="{ hidden: !meetingOpt }"
                  class="pop-up absolute bg-white border-1 right-0 top-0 mt-5 rounded-lg h-52 shadow-lg text-left"
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
            </div>
          </div>
          <!-- Right -->
          <div class="col-span-12 md:col-span-6 px-4 lg:px-0">
            <toggle-switch
              v-model="isAnnually"
              active="Monthly"
              inactive="Annually"
              class="mb-6"
            />
            <div
              class="col-span-12 grid grid-row-3 grid-flow-col sm:mx-10 lg:mx-12 xl:mx-16 mt-5 items-center"
            >
              <div class="flex justify-center">
                <span
                  class="md:text-3xl lg:text-2xl text-2xl text-gray-600 hover:text-white h-12 w-12 bg-gray-200 hover:bg-black rounded-full flex align-middle justify-center items-center cursor-pointer"
                  @click="togglePrice(priceSwitch === 0 ? 1 : 0)"
                  >&#x3c;</span
                >
              </div>

              <price-card
                :priceData="
                  priceSwitch === 0 ? planBasicData : planCorporateData
                "
                :priceInfo="
                  priceSwitch === 0 ? planBasicInfo : planCorporateInfo
                "
                :isAnnually="isAnnually"
              />
              <div class="flex justify-center">
                <span
                  class="md:text-3xl lg:text-2xl text-2xl text-gray-600 hover:text-white h-12 w-12 bg-gray-200 hover:bg-black rounded-full flex align-middle justify-center items-center cursor-pointer"
                  @click="togglePrice(priceSwitch === 1 ? 0 : 1)"
                  >&#x3e;</span
                >
              </div>
            </div>
          </div>
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
    isAnnually: false,
    planBasicData: {
      name: 'Basic',
      monthlyPrice: '₦2,900',
      annualPrice: '₦25,000',
      description: 'Or ₦50,000 billed annualy',
      color: 'orange-500',
    },
    planBasicInfo: [
      'Host up to 100 people',
      '3 hosts',
      '4 hours limit',
      'Single host screen sharing',
      'Create polls',
    ],
    planCorporateData: {
      name: 'Corporate',
      monthlyPrice: '₦9,000',
      annualPrice: '₦108,000',
      description: 'Or ₦50,000 billed annualy',
      color: 'blue-500',
    },
    planCorporateInfo: [
      'Host up to 500 people',
      '8 hosts',
      'Unlimited streaming time',
      'Multiple host screen sharing',
      'Create polls',
    ],
    priceSwitch: 0,
  }),
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'New Meeting or Webinar')
  },
  methods: {
    toggleMeetingOpt() {
      this.meetingOpt = !this.meetingOpt
    },
    togglePrice(priceState) {
      console.log(priceState)
      this.priceSwitch = priceState
    },
  },
}
</script>

<style scoped>
/* .webinar-btn {
  @apply text-xs p-3  !important;
} */
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
