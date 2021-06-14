<template>
  <div class="flex bg-gray-100">
    <div
      v-if="status === 'countdown'"
      class="banner-card w-full h-full text-center px-12 pt-40 pb-16"
    >
      <div class="mb-8">
        <p class="font-semibold text-sm text-white">
          This webinar will start in
        </p>
        <div v-if="date" class="countdown-timer text-white mt-4">
          <span>{{ date.days }}</span>
          days
          <span>{{ date.hours }}</span>
          hours
          <span>{{ date.minutes }}</span>
          minutes
          <span>{{ date.seconds }}</span>
          seconds
        </div>
        <div v-else class="countdown-timer text-white mt-4">
          <span>2</span>
          days
          <span>14</span>
          hours
          <span>22</span>
          minutes
          <span>16</span>
          seconds
        </div>
      </div>
      <!-- <button
        class="btn btn-primary mx-auto my-auto"
        @click.prevent="addToCalendar"
      >
        Add to Calendar
      </button> -->
      <nuxt-link :to="roomName ? `/webinars/start/${roomName}` : ``"
        ><button class="btn btn-primary mx-auto my-auto">
          Start
        </button></nuxt-link
      >
    </div>
    <div v-else-if="status === 'paused'"></div>
    <div v-else class="video-frame flex w-full h-full">
      <span class="play-btn my-auto mx-auto"></span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    status: { type: String, default: 'inactive' }, // inactive / countdown / paused
    countdown: { type: String, required: false },
    roomName: { type: String, required: false },
  },
  methods: {
    addToCalendar() {},
  },
  data: () => ({
    date: null,
  }),
  mounted() {
    if (this.countdown) {
      const datetime = moment.duration(
        moment(this.countdown).diff(moment()),
        'milliseconds'
      )
      this.date = {
        days: datetime.days(),
        hours: datetime.hours(),
        minutes: datetime.minutes(),
        seconds: datetime.seconds(),
      }
    }
  },
}
</script>

<style scoped>
.video-frame {
  min-height: 478px;
  background-image: url('/video-sample-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.video-frame > .play-btn {
  display: inline-block;
  width: 120px;
  height: 120px;
  background-image: url('/icon/play.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.banner-card {
  background-image: url('/webinar-view-bg.jpg');
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  @apply bg-gray-200 overflow-hidden;
}

.countdown-timer {
  @apply text-xs text-white font-semibold;
}
.countdown-timer > span {
  @apply text-xl font-extrabold inline-block px-1;
}

@media (max-width: 425px) {
  .video-frame {
    min-height: 168.4px;
  }
  .video-frame > .play-btn {
    width: 48px;
    height: 48px;
  }
}
</style>
