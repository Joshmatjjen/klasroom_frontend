<template>
  <div v-if="webinar">
    <webinar-video-frame
      :countdown="webinar.webinar.startDateTime"
      :roomName="webinar.webinar.roomName"
      status="countdown"
      class="rounded-b-none mb-4"
    />
    <div class="px-4 md:px-5 lg:px-6 py-4">
      <div class="pb-10 md:pb-16">
        <h5 class="font-bold mb-3 leading-tight text-gray-700">
          {{ webinar.webinar.title }}
        </h5>
        <p class="text-xs mb-4 text-gray-700 leading-normal">
          {{ webinar.webinar.subtitle }}
        </p>
        <div class="flex mb-4">
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
        <hr class="-mx-4 md:-mx-5 lg:-mx-6" />
        <div class="flex flex-row gap-4 text-gray-700 mt-5">
          <span class="text-base font-semibold my-auto">Introduction</span>
          <!-- <span class="text-xs my-auto">Part 1, Lesson 4</span> -->
        </div>
        <p class="text-xs mt-4 text-gray-700 leading-normal">
          {{ webinar.webinar.introduction }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    webinar: { type: Object, required: true },
  },
  computed: {
    view_route() {
      const slug = _.get(this.webinar, 'id', '')
      return this.session
        ? this.userType === 'tutor'
          ? '/tutor/webinars/view/' + slug
          : '/student/webinars/view/' + slug
        : '/webinars/' + slug
    },
  },
  methods: {
    formatDate(date) {
      console.log('formatDate', new Date(date))
      return moment(date).format('Do MMM. YYYY')
    },
  },
}
</script>
