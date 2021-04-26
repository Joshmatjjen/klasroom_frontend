<template>
  <div class="bg-white border border-gray-300 rounded-lg">
    <div class="grid md:grid-cols-2 gap-6 divide-x divide-gray-300">
      <div class="p-5">
        <div class="mb-4">
          <button class="toggle font-semibold">
            Webinars in September 2020
          </button>
        </div>
        <datepicker
          v-model="date"
          name="webinar-date"
          :inline="true"
          monday-first
          calendar-class="calendar"
        ></datepicker>
      </div>
      <div class="relative">
        <div class="p-4 md:p-5 lg:p-6 pb-16 md:pb-18 lg:pb-20">
          <p class="font-bold text-sm text-gray-800 mb-3">
            {{ total }} Upcoming Webinars
          </p>
          <div
            v-for="(item, key) in [0, 1, 2]"
            :key="key"
            class="row-item flex py-3"
          >
            <div class="flex-grow my-auto">
              <h5 class="text-sm font-semibold text-gray-700">
                Logo Design Masterclass
              </h5>
              <p class="text-sm text-gray-600">Ade Matthews</p>
            </div>
            <div class="text-right">
              <span class="text-xs text-gray-700">Due 12th Oct. 2020</span>
            </div>
          </div>
        </div>
        <div class="absolute md:text-center bottom-0 mb-5 w-full px-5">
          <hr class="mb-4" />
          <nuxt-link
            to="/student/upcoming-webinars"
            class="text-gray-700 inline-block"
          >
            <span class="text-xs">
              {{
                Number(total) > 3 ? `See ${Number(total) - 3} more` : 'See more'
              }}
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    total: 6,
  }),
}
</script>

<style scoped>
.toggle {
  outline: none;
  padding-right: 27px;
  background-image: url('/actions/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: right 0 top 7px;
}
</style>

<style>
.vdp-datepicker__calendar {
  border-width: 0 !important;
}
.vdp-datepicker__calendar .cell.day {
  font-size: 14px;
  height: 30px;
  line-height: 29px;
  border-radius: 12px;
}
.vdp-datepicker__calendar .cell.day.selected {
  background: #f99e42;
  color: #ffffff;
}
</style>
