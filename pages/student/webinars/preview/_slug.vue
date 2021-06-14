<template>
  <div class="min-h-screen mb-24">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <!-- Top Section -->
        <section class="col-span-full lg:col-span-7 xl:col-span-8">
          <div
            class="switcher whitespace-no-wrap flex flex-row gap-6 md:gap-10 place-items-start mx-2 border-b-2 border-gray-200 overflow-scroll scrollbar-thumb-orange"
          >
            <button
              v-on:click="switcher('preview')"
              v-bind:class="{ active: isWebinars.preview }"
              class="menu-btn"
            >
              <p class="text-xs text-gray-700">Webinar Preview</p>
            </button>
            <button
              v-on:click="switcher('signups')"
              v-bind:class="{ active: isWebinars.signups }"
              class="menu-btn"
            >
              <p class="text-xs text-gray-700">Signups</p>
            </button>
            <button
              v-on:click="switcher('ratingReview')"
              v-bind:class="{ active: isWebinars.ratingReview }"
              class="menu-btn"
            >
              <p class="text-xs text-gray-700">Ratings and Reviews</p>
            </button>
          </div>
          <edit-chip
            desc='This is a preview of your webinar. To make changes, please click "Edit Webinar"'
            name="Edit Webinar"
          />
        </section>

        <!-- Webinar Preview Tab -->
        <div class="grid grid-cols-12 gap-5" v-if="isWebinars.preview">
          <div
            v-if="!$device.isMobile"
            class="col-span-full lg:col-span-8 xl:col-span-8"
          >
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover overflow-hidden relative h-full"
            >
              <webinar-view-details :webinarData="webinarData" />
            </div>
          </div>
          <div class="col-span-full lg:col-span-4 xl:col-span-4">
            <div
              class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300 min-h-content-screen"
            >
              <tabs-menu v-model="tab" :tabs="tabs" />
              <div v-if="$device.isMobile && tab === 0 && tabs.length === 5">
                <webinar-view-details />
              </div>
              <div
                v-if="
                  (tab === 0 && tabs.length === 4) ||
                  (tab === 1 && tabs.length === 5)
                "
              >
                <chat-messages no-card />
              </div>
              <div
                v-if="
                  (tab === 1 && tabs.length === 4) ||
                  (tab === 2 && tabs.length === 5)
                "
                class="pl-4 md:pl-5 lg:pl-6 pb-5"
              >
                <webinar-people />
              </div>
              <div
                v-if="
                  (tab === 2 && tabs.length === 4) ||
                  (tab === 3 && tabs.length === 5)
                "
                class="px-4 md:px-5 lg:px-6 py-4 pb-10"
              >
                <webinar-poll />
              </div>
              <div
                v-if="
                  (tab === 3 && tabs.length === 4) ||
                  (tab === 4 && tabs.length === 5)
                "
                class="px-4 md:px-5 lg:px-6 py-4 pb-10"
              >
                <div class="space-y-4">
                  <resource-list
                    v-for="(item, key) in [
                      'Businessstats.com / businessfailurerates',
                    ]"
                    :key="key"
                    :name="item"
                    desc="This will show you stats of business failure across countries of the world. This information will be useful for your assignment"
                    link="#"
                  />
                  <resource-list
                    v-for="(item, key) in [
                      'Business finance spreadsheet.xls',
                      'Business startup checklist.doc',
                    ]"
                    :key="key"
                    :name="item"
                    link="#"
                    :download="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SignUps Tab -->
        <div class="grid grid-cols-12 gap-5" v-if="isWebinars.signups">
          <div class="col-span-full lg:col-span-8 xl:col-span-9">
            <div class="col-span-12">
              <list-table-1
                :columns="columnsStudent"
                :rows="rowsStudent"
                type="Students"
              />
            </div>
          </div>
          <div class="col-span-full lg:col-span-4 xl:col-span-3">
            <div
              class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300 min-h-content-screen"
            >
              <div
                class="profile-card rounded-lg w-full h-full text-center px-12 pt-40 pb-16"
              ></div>
              <div class="mt-6 mx-auto w-full px-5">
                <p class="text-lg font-semibold mx-auto text-center my-3">
                  Amina Bello
                </p>
                <p class="text-xs font-normal mx-auto text-center mb-32">
                  Lagos, Nigeria
                </p>
                <hr />
              </div>
              <div class="mx-auto my-5">
                <button class="btn2 btn2-light text-xs py-3 px-5">
                  Message Admins
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Ratings and Reviews -->
        <div class="grid grid-cols-12 gap-5" v-if="isWebinars.ratingReview">
          <div class="col-span-full">
            <div class="col-span-12">
              <list-table-1
                :columns="columnsReviews"
                :rows="rowsReviews"
                type="Reviews"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import EditChip from '~/components/chip/EditChip.vue'

const webinars = require('@/static/json/latest-webinars.json')
const youLearn = require('@/static/json/courses-you-learn.json')
const students = require('@/static/json/student-signups.json')
const reviews = require('@/static/json/webinar-reviews.json')

export default {
  components: { EditChip },
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  // async fetch() {
  //   this.$store.commit('app/SET_DARK_MENU', true)
  //   try {
  //     const { data } = await this.$axios.$get(
  //       `https://streaming.staging.klasroom.com/v1/webinars/upcoming`,
  //       {
  //         headers: getAccessTokenHeader(this.token),
  //       }
  //     )
  //     this.webinarData = data
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },
  data: () => ({
    home: 'home',
    course: webinars[0],
    webinars: _.take(webinars, 3),
    webinarData: null,
    youLearn,
    tab: 0,
    tabs: ['Chat', 'People', 'Poll', 'Resources'],
    isWebinars: {
      preview: true,
      signups: false,
      ratingReview: false,
    },
    columnsStudent: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Payment date',
        field: 'paymentDate',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
      },
      {
        label: 'Last Active',
        field: 'lastActive',
      },
    ],
    rowsStudent: _.take(students, 6),

    columnsReviews: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Date',
        field: 'date',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
      },
      {
        label: 'Review',
        field: 'review',
      },
      {
        label: 'Rating',
        field: 'rating',
      },
    ],
    rowsReviews: _.take(reviews, 10),
  }),
  mounted() {
    if (this.$device.isMobile) {
      this.tabs.unshift('Home')
    }
  },
  methods: {
    scrollTo(e, id) {
      if (e) e.preventDefault()
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
    },
    purchaseCourse() {
      this.$store.commit('app/SET_MODAL', 'purchase-modal')
      this.$store.commit('app/SET_VIEW_DATA', {
        type: 'Webinar',
        title: 'How to Build Multiple Sources of Income',
        desc: `Learn how to build and manage multiple sources of 
          income that leads to sustainable wealth`,
        price: 2500,
      })
    },

    switcher: function (value) {
      switch (value) {
        case 'preview':
          this.isWebinars.preview = true
          this.isWebinars.signups = false
          this.isWebinars.ratingReview = false
          break
        case 'signups':
          this.isWebinars.preview = false
          this.isWebinars.signups = true
          this.isWebinars.ratingReview = false
          break
        case 'ratingReview':
          this.isWebinars.preview = false
          this.isWebinars.signups = false
          this.isWebinars.ratingReview = true
          break
        default:
          this.isWebinars.preview = true
          this.isWebinars.signups = false
          this.isWebinars.ratingReview = false
      }
      // some code to filter users
    },
  },
}
</script>
<style scoped>
.banner-card {
  background-image: url('/webinar-view-bg.jpg');
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  @apply bg-gray-200 overflow-hidden;
}
.switcher {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.switcher::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.menu-btn {
  border-top: 5px solid;
  border-bottom: 5px solid;
  padding: 0.938rem 0;
  display: inline-block;
  border-color: transparent;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.menu-btn.active {
  border-bottom-color: #f99e42;
  font-weight: 700;
}

.profile-card {
  background-image: url('/webinar-view-bg.jpg');
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  @apply bg-gray-200 overflow-hidden;
}
</style>
