<template>
  <div class="bg-white border border-gray-300 rounded-lg p-5 mt-12">
    <div class="mb-4">
      <button class="toggle font-semibold">Webinars in September 2020</button>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div>
        <datepicker
          v-model="date"
          name="webinar-date"
          :inline="true"
          monday-first
          calendar-class="calendar"
        ></datepicker>
      </div>
      <div>
        <div
          v-for="(item, key) in [0, 1, 2]"
          :key="key"
          class="grid grid-cols-12 gap-4 mb-3"
        >
          <div class="col-span-7 pb-5">
            <p class="text-md text-gray-900 font-semibold mb-1">
              Logo Design Masterclass
            </p>
            <p class="text-sm text-gray-700">Ade Matthews</p>
          </div>
          <div class="col-span-5 pb-5">
            <p class="text-sm text-gray-600 pb-2 mt-1">12th Oct. 2020</p>
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(item, key) in [0, 1, 2]"
          :key="key"
          class="grid grid-cols-12 gap-4 mb-3"
        >
          <div class="col-span-7 pb-5">
            <p class="text-md text-gray-900 font-semibold mb-1">
              Logo Design Masterclass
            </p>
            <p class="text-sm text-gray-700">Ade Matthews</p>
          </div>
          <div class="col-span-5 pb-5">
            <p class="text-sm text-gray-600 pb-2 mt-1">12th Oct. 2020</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
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
