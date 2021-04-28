<template>
  <div class="min-h-screen mb-12">
    <section class="bg-orange-100">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-5">
          <!-- Left Add Image -->
          <div class="col-span-full lg:col-span-7 xl:col-span-8">
            <section>
              <div
                class="flex flex-row gap-10 place-items-start px-5 border-b-2 border-gray-200"
              >
                <button
                  v-on:click="switcher('preliminary')"
                  v-bind:class="{ active: isWebinars.preliminary }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Preliminary</p>
                </button>
                <button
                  v-on:click="switcher('resources')"
                  v-bind:class="{ active: isWebinars.resources }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Resources</p>
                </button>
                <button
                  v-on:click="switcher('polls')"
                  v-bind:class="{ active: isWebinars.polls }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Polls</p>
                </button>
                <button
                  v-on:click="switcher('settings')"
                  v-bind:class="{ active: isWebinars.settings }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Settings</p>
                </button>
              </div>
            </section>
            <!-- Preliminary section -->
            <section>
              <div class="container mx-auto my-10 px-4 lg:px-0">
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12">
                    <dash-items-section-group title="Preliminary">
                      <div
                        class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
                      >
                        <div class="px-4 md:px-5 lg:px-6 py-4">
                          <!-- Webinar name -->
                          <div class="form-group mb-5">
                            <label for="input-name">Webinar name</label>
                            <div>
                              <input
                                id="input-name"
                                type="text"
                                class="form-input"
                                placeholder="Enter course name here"
                                v-model="createWebinar.name"
                              />
                            </div>
                          </div>
                          <!-- Webinar subtitle -->
                          <div class="form-group mb-5">
                            <label for="input-name">Webinar subtitle</label>
                            <div>
                              <input
                                id="input-name"
                                type="text"
                                class="form-input"
                                placeholder="Enter course subtitle here"
                                v-model="createWebinar.subtitle"
                              />
                            </div>
                          </div>
                          <div class="form-group mb-5">
                            <label for="input-name">Webinar introduction</label>
                            <div>
                              <input
                                id="input-name"
                                type="text"
                                class="form-input"
                                placeholder="Enter course introduction here"
                                v-model="createWebinar.introduction"
                              />
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-10">
                            <div class="form-group mb-5">
                              <label for="input-name">Webinar date</label>
                              <div>
                                <input
                                  id="input-name"
                                  type="date"
                                  class="form-input"
                                  placeholder="Enter course introduction here"
                                  v-model="createWebinar.introduction"
                                />
                              </div>
                            </div>
                            <div class="form-group mb-5">
                              <label for="input-name">Webinar time</label>
                              <div>
                                <input
                                  id="input-name"
                                  type="time"
                                  class="form-input"
                                  placeholder="Enter course introduction here"
                                  v-model="createWebinar.introduction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </dash-items-section-group>
                  </div>
                </div>
              </div>
            </section>

            <!-- Tutor section-->
            <section>
              <div class="container mx-auto my-10 px-4 lg:px-0">
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12">
                    <!-- Tutor -->
                    <dash-items-section-group title="Host">
                      <div
                        class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
                      >
                        <div class="px-4 md:px-5 lg:px-6 py-4">
                          <!-- Webinar name -->
                          <user-chip :owner="{ name: 'Joy Adeleke' }" />
                          <user-chip
                            :user="{
                              name: 'Somto Agu',
                              email: 'somtoagu@gmail.com',
                            }"
                          />
                          <hr class="my-5" />
                          <p class="text-sm font-bold text-gray-700 mb-3">
                            Add new co-host
                          </p>
                          <div class="flex flex-row gap-10">
                            <div class="form-group flex-1 mb-5">
                              <label for="input-name">Host name</label>
                              <div>
                                <input
                                  id="input-name"
                                  type="text"
                                  class="form-input"
                                  placeholder="Enter host name here"
                                  v-model="createWebinar.name"
                                />
                              </div>
                            </div>

                            <div class="form-group flex-1 mb-5">
                              <label for="input-email">Email</label>
                              <div>
                                <input
                                  id="input-email"
                                  type="text"
                                  class="form-input"
                                  placeholder="Enter host email here"
                                  v-model="createWebinar.email"
                                />
                              </div>
                            </div>
                            <div class="flex flex-col justify-end mb-5">
                              <div></div>
                              <div
                                type="button"
                                class="btn btn-primary align-middle text-center hover"
                              >
                                Add
                              </div>
                            </div>
                          </div>
                          <p class="text-xs text-gray-700">
                            An invitation email will be sent to the host's
                            email address including their unique link
                          </p>
                        </div>
                      </div>
                    </dash-items-section-group>

                    <div class="mb-8"></div>
                    <!-- Moderator -->
                    <dash-items-section-group title="Moderators">
                      <div
                        class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
                      >
                        <div class="px-4 md:px-5 lg:px-6 py-4">
                          <user-chip
                            :user="{
                              name: 'Forza Speciale',
                              email: 'adeyemi20@gmail.com',
                            }"
                          />
                          <hr class="my-5" />
                          <p class="text-sm font-bold text-gray-700 mb-3">
                            Add new moderator
                          </p>
                          <div class="flex flex-row gap-10">
                            <div class="form-group flex-1 mb-5">
                              <label for="input-name">Moderator name</label>
                              <div>
                                <input
                                  id="input-name"
                                  type="text"
                                  class="form-input"
                                  placeholder="Enter moderator name here"
                                  v-model="createWebinar.name"
                                />
                              </div>
                            </div>

                            <div class="form-group flex-1 mb-5">
                              <label for="input-name">Email</label>
                              <div>
                                <input
                                  id="input-name"
                                  type="text"
                                  class="form-input"
                                  placeholder="Enter moderator email here"
                                  v-model="createWebinar.name"
                                />
                              </div>
                            </div>
                            <div class="flex flex-col justify-end mb-5">
                              <div></div>
                              <div
                                type="button"
                                class="btn btn-primary align-middle text-center"
                              >
                                Add
                              </div>
                            </div>
                          </div>
                          <p class="text-xs text-gray-700">
                            An invitation email will be sent to the moderator's
                            email address including their unique link
                          </p>
                        </div>
                      </div>
                    </dash-items-section-group>
                  </div>
                </div>
              </div>
            </section>
            <!-- <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
            >
              <div class="px-4 md:px-5 lg:px-6 py-4">
                <div class="mb-5 lg:mb-20">
                  <p class="text-sm font-bold text-gray-700 mb-3">
                    Account Details
                  </p>
                  <hr class="mt-4 mb-6" />
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Name</p>
                      <p class="text-sm text-gray-700">Amina Bello</p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button class="btn btn-light btn-sm">Edit</button>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Phone</p>
                      <p class="text-sm text-gray-700">+234 123 4567</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Email</p>
                      <p class="text-sm text-gray-700">damilare@gmail.com</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-12">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">Gender</p>
                      <p class="text-sm text-gray-700">Female</p>
                    </div>
                  </div>
                  <hr class="mt-4 mb-6" />
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">
                        Password
                      </p>
                      <p class="text-sm text-gray-700">*****************</p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button class="btn btn-light btn-sm">Change</button>
                    </div>
                  </div>
                  <hr class="mt-4 mb-6" />
                  <div class="grid grid-cols-12 mb-5">
                    <div class="col-span-7">
                      <p class="text-sm font-bold text-gray-700 mb-3">
                        Payment
                      </p>
                      <p class="text-sm text-gray-700">
                        Your default payment method is ****1992
                      </p>
                    </div>
                    <div class="col-span-5 text-right">
                      <button class="btn btn-light btn-sm">Change</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <!-- Right Add Image -->
          <div class="col-span-full lg:col-span-5 xl:col-span-4">
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover relative min-h-full"
            >
              <div class="block mb-2">
                <div
                  class="big-avatar h-64 relative rounded-xl overflow-hidden"
                >
                  <div class="grid grid-cols-12 place-items-center h-64 py-32">
                    <div
                      class="change-picture col-span-12 text-white mx-auto my-auto"
                    >
                      <button class="focus:outline-none">Change Picture</button>
                    </div>
                  </div>
                  <div
                    class="w-full h-full bg-black opacity-50 absolute top-0"
                  ></div>
                </div>
              </div>
              <div class="px-4 md:px-5 lg:px-6 py-4">
                <ul class="text-gray-700">
                  <li class="text-left">
                    <h5 class="font-bold mb-2">
                      The Cryptocurrency Masterclass
                    </h5>
                    <p class="text-xs text-gray-700">
                      Everything you need to know about Cryptocurrency and ways
                      you can profit from it.
                    </p>
                  </li>
                  <li>
                    <hr class="my-5" />
                    <label class="checkbox" @click="$router.push('/')">
                      <span class="text-sm">Preview webinar</span>
                      <input type="checkbox" value="intermediate" disabled />
                      <span class="checkmark"></span>
                    </label>
                  </li>
                  <hr class="my-5" />
                  <li class="flex flex-row justify-between">
                    <label
                      class="checkbox"
                      @click="$router.push('/student/dashboard')"
                    >
                      <span class="text-sm">Host link: https://klasro..</span>
                      <input type="checkbox" value="intermediate" disabled />
                      <span class="checkmark"></span>
                    </label>
                    <div class="flex items-center mr-5 mb-3 cursor-pointer">
                      <img class="w-6 h-4" src="/icon/copy.svg" />
                      <span class="text-xs">Copy</span>
                    </div>
                  </li>
                  <li class="lg:pb-8 flex flex-row justify-between">
                    <label
                      class="checkbox"
                      @click="$router.push('/student/dashboard')"
                    >
                      <span class="text-sm">Guest link: https://klasro..</span>
                      <input type="checkbox" value="intermediate" disabled />
                      <span class="checkmark"></span>
                    </label>
                    <div class="flex items-center mr-5 mb-3 cursor-pointer">
                      <img class="w-6 h-4" src="/icon/copy.svg" />
                      <span class="text-xs">Copy</span>
                    </div>
                  </li>
                  <li class="lg:pb-8 flex flex-row justify-between relative">
                    <button
                      class="btn btn-primary mr-5 flex flex-row justify-between align-middle items-center"
                      @click.capture.stop="togglePubOptMenu"
                    >
                      <span class="text-xs">Publish webinar</span>
                      <img
                        class="w-4 h-3 ml-5"
                        src="/icon/arrow-down-light.svg"
                      />
                    </button>
                    <div
                      v-if="publishOpt"
                      class="pop-up flex flex-col gap-5 items-start px-4 py-5 justify-around pop-up absolute top-0 left-0 mt-12 ml-5 border-gray-500 bg-white rounded-lg shadow-lg"
                      :style="{ zIndex: 3 }"
                    >
                      <a
                        href="#"
                        class="pop-up-item lg:mr-0 md:text-gray-700 text-left text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                      >
                        <p>Publish now</p>
                      </a>
                      <a
                        href="#"
                        class="pop-up-item lg:mr-0 md:text-gray-700 text-sm font-normal hover:text-gray-900 md:bg-transparent block md:inline-block mb-5 md:mb-0"
                      >
                        <p>Schedule for later</p>
                      </a>
                    </div>
                    <button class="btn btn-light">
                      <span class="text-xs">Save </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Bottom navigation -->
          <div class="col-span-full lg:col-span-7 xl:col-span-8">
            <hr class="my-5" />
            <div class="flex flex-row justify-between">
              <button class="btn btn-light btn-sm lg:mt-0">Previous</button>
              <button class="btn btn-primary btn-sm lg:mt-0">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import UserChip from '~/components/chip/UserChip.vue'

const courses = require('@/static/json/courses.json')
const webinars = require('@/static/json/webinars.json')

export default {
  components: { UserChip },
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Create webinar')
  },
  data: () => ({
    courses: _.take(courses, 4),
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(courses, 3),
    isWebinars: {
      preliminary: true,
      resources: false,
      polls: false,
      settings: false,
    },
    createWebinar: {
      name: '',
      subtitle: '',
      email: '',
    },
    publishOpt: false,
  }),
  methods: {
    switcher: function (value) {
      switch (value) {
        case 'preliminary':
          this.isWebinars.preliminary = true
          this.isWebinars.resources = false
          this.isWebinars.polls = false
          this.isWebinars.settings = false
          break
        case 'resources':
          this.isWebinars.preliminary = false
          this.isWebinars.resources = true
          this.isWebinars.polls = false
          this.isWebinars.settings = false
          break
        case 'polls':
          this.isWebinars.preliminary = false
          this.isWebinars.resources = false
          this.isWebinars.polls = true
          this.isWebinars.settings = false
          break
        case 'settings':
          this.isWebinars.preliminary = false
          this.isWebinars.resources = false
          this.isWebinars.polls = false
          this.isWebinars.settings = true
          break
        default:
          this.isWebinars.preliminary = true
          this.isWebinars.resources = false
          this.isWebinars.polls = false
          this.isWebinars.settings = false
      }
      // some code to filter users
    },
    togglePubOptMenu() {
      this.publishOpt = !this.publishOpt
    },
  },
}
</script>

<style scoped>
.big-avatar {
  width: 100%;
  background-image: url('/webinar-view-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  @apply bg-gray-200;
}
.change-picture {
  z-index: 1;
}
.change-picture > button {
  background-image: url('/icon/camera.svg');
  background-repeat: no-repeat;
  padding: 5px 5px 5px 32px;
  line-height: 20px;
}
.add-btn {
  padding: 2px;
  background: 'red';
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
</style>
