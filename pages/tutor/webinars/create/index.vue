<template>
  <div class="min-h-screen mb-12">
    <section class="bg-orange-100">
      <div class="container sm:mx-0 lg:mx-auto px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-5">
          <!-- Left Add Image -->
          <div class="col-span-full lg:col-span-7 xl:col-span-8">
            <section>
              <div
                class="switcher flex flex-row gap-10 place-items-start px-5 border-b-2 border-gray-200 overflow-scroll scrollbar-thumb-orange"
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

            <!-- Preliminary -->
            <section v-if="isWebinars.preliminary">
              <!-- Preliminary section -->
              <section>
                <div class="container mx-auto my-10 px-4 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <dash-items-section-group
                        title="Preliminary"
                        :edit="true"
                      >
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
                              <label for="input-name"
                                >Webinar introduction</label
                              >
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

              <!-- Tutor Or Co-Host section-->
              <section>
                <div class="container mx-auto my-10 px-4 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <!-- Tutor -->
                      <dash-items-section-group title="Co-Host" :edit="true">
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
                                <label for="input-name">co-host name</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter co-host name here"
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
                                    placeholder="Enter co-host name here"
                                    v-model="createWebinar.name"
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
                              An invitation email will be sent to the co-host's
                              email address including their unique link
                            </p>
                          </div>
                        </div>
                      </dash-items-section-group>

                      <div class="mb-8"></div>
                      <!-- Moderator -->
                      <dash-items-section-group title="Moderators" :edit="true">
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
                              An invitation email will be sent to the
                              moderator's email address including their unique
                              link
                            </p>
                          </div>
                        </div>
                      </dash-items-section-group>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <!-- Resources -->
            <section v-if="isWebinars.resources">
              <!-- Resources section -->
              <section>
                <div class="container mx-auto my-10 px-4 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <dash-items-section-group
                        title="Preliminary"
                        :edit="true"
                      >
                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
                        >
                          <div class="px-4 md:px-5 lg:px-6 py-4">
                            <!-- Webinar name -->
                            <resource-chip
                              :file="{ filename: 'Lesson_1.mp4' }"
                            />
                            <resource-chip
                              :file="{ filename: 'tradingpatterns.zip' }"
                            />
                            <div
                              class="container flex flex-row bg-white rounded-lg border border-gray-300 shadow-hover mb-5"
                            >
                              <div
                                class="flex flex-row justify-center items-center w-full p-4"
                              >
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.375 7.44601H11.107V15.3749C11.107 15.478 11.1914 15.5624 11.2945 15.5624H12.7008C12.8039 15.5624 12.8883 15.478 12.8883 15.3749V7.44601H14.625C14.782 7.44601 14.8687 7.26554 14.7727 7.14367L12.1477 3.82023C12.1301 3.79782 12.1077 3.7797 12.0821 3.76723C12.0565 3.75477 12.0285 3.74829 12 3.74829C11.9715 3.74829 11.9435 3.75477 11.9179 3.76723C11.8923 3.7797 11.8699 3.79782 11.8523 3.82023L9.22734 7.14133C9.13125 7.26555 9.21797 7.44601 9.375 7.44601ZM20.5781 14.6718H19.1719C19.0688 14.6718 18.9844 14.7562 18.9844 14.8593V18.4687H5.01562V14.8593C5.01562 14.7562 4.93125 14.6718 4.82812 14.6718H3.42188C3.31875 14.6718 3.23438 14.7562 3.23438 14.8593V19.4999C3.23438 19.9148 3.56953 20.2499 3.98438 20.2499H20.0156C20.4305 20.2499 20.7656 19.9148 20.7656 19.4999V14.8593C20.7656 14.7562 20.6812 14.6718 20.5781 14.6718Z"
                                      fill="black"
                                    />
                                  </svg>
                                </div>
                                <p
                                  class="text-sm text-center font-thin text-gray-700 pl-3"
                                >
                                  Click here to upload a resource (50mb maximum)
                                </p>
                              </div>
                            </div>

                            <div class="flex flex-row justify-center gap-5">
                              <div
                                class="flex flex-row bg-white rounded-md border border-orange-400 shadow-hover mt-2 mb-5 py-1 px-2 cursor-pointer"
                              >
                                <svg
                                  width="15"
                                  height="16"
                                  viewBox="0 0 15 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.3291 6.28682V14.5134H13.6701V9.21275V1.48682H5.8996M1.3291 6.28682L5.8996 1.48682M1.3291 6.28682H5.8996V1.48682"
                                    stroke="#8A8A8A"
                                    stroke-width="1.5"
                                  />
                                </svg>
                                <p
                                  class="text-xs text-center font-thin text-gray-600 pl-2"
                                >
                                  Add resource
                                </p>
                              </div>
                              <div
                                class="flex flex-row bg-white rounded-md border border-orange-400 shadow-hover mt-2 mb-5 py-1 px-2 cursor-pointer"
                              >
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.57731 10.6644C9.5512 10.6386 9.51595 10.6241 9.47921 10.6241C9.44248 10.6241 9.40722 10.6386 9.38112 10.6644L7.36366 12.6819C6.42959 13.616 4.85312 13.7149 3.82182 12.6819C2.78878 11.6489 2.88775 10.0741 3.82182 9.14006L5.83928 7.1226C5.8931 7.06878 5.8931 6.98023 5.83928 6.92641L5.14827 6.2354C5.12217 6.20955 5.08692 6.19505 5.05018 6.19505C5.01344 6.19505 4.97819 6.20955 4.95208 6.2354L2.93462 8.25286C1.4658 9.72168 1.4658 12.0985 2.93462 13.5656C4.40345 15.0327 6.7803 15.0344 8.24738 13.5656L10.2648 11.5482C10.3187 11.4943 10.3187 11.4058 10.2648 11.352L9.57731 10.6644ZM14.0671 2.43487C12.5983 0.966046 10.2214 0.966046 8.75435 2.43487L6.73516 4.45233C6.70931 4.47843 6.69481 4.51369 6.69481 4.55042C6.69481 4.58716 6.70931 4.62241 6.73516 4.64852L7.42443 5.33779C7.47825 5.39161 7.56679 5.39161 7.62062 5.33779L9.63808 3.32033C10.5721 2.38625 12.1486 2.28729 13.1799 3.32033C14.213 4.35336 14.114 5.92809 13.1799 6.86217L11.1625 8.87963C11.1366 8.90573 11.1221 8.94099 11.1221 8.97772C11.1221 9.01446 11.1366 9.04971 11.1625 9.07582L11.8535 9.76682C11.9073 9.82065 11.9958 9.82065 12.0497 9.76682L14.0671 7.74936C15.5342 6.28054 15.5342 3.90369 14.0671 2.43487ZM10.2041 5.57565C10.178 5.5498 10.1427 5.5353 10.106 5.5353C10.0692 5.5353 10.034 5.5498 10.0079 5.57565L6.0754 9.5064C6.04955 9.5325 6.03505 9.56775 6.03505 9.60449C6.03505 9.64123 6.04955 9.67648 6.0754 9.70259L6.76294 10.3901C6.81676 10.4439 6.9053 10.4439 6.95913 10.3901L10.8899 6.45937C10.9437 6.40555 10.9437 6.317 10.8899 6.26318L10.2041 5.57565Z"
                                    fill="#8A8A8A"
                                  />
                                </svg>
                                <p
                                  class="text-xs text-center font-thin text-gray-600 pl-2"
                                >
                                  Add link
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </dash-items-section-group>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <!-- Polls -->
            <section v-if="isWebinars.polls">
              <section>
                <div class="container mx-auto my-10 px-4 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <dash-items-section-group title="Polls" :edit="true">
                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
                        >
                          <div class="px-4 md:px-5 lg:px-6 py-4">
                            <!-- Question -->
                            <div class="form-group mb-5">
                              <label for="input-name">Your question</label>
                              <div>
                                <input
                                  id="input-name"
                                  type="text"
                                  class="form-input"
                                  placeholder="What cryptocurrency is worth the most at the moment?"
                                  v-model="createWebinar.name"
                                />
                              </div>
                            </div>
                            <hr class="mb-5" />
                            <!-- Choices -->
                            <div class="grid grid-cols-2 gap-x-5 gap-y-0">
                              <div class="form-group mb-5">
                                <label for="input-name">Choice1</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter choice 1 here"
                                    v-model="createWebinar.choice"
                                  />
                                </div>
                              </div>

                              <div class="form-group mb-5">
                                <label for="input-name">Choice 2</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter choice 2 here"
                                    v-model="createWebinar.introduction"
                                  />
                                </div>
                              </div>
                              <div class="form-group mb-5">
                                <label for="input-name">Choice 3</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter choice 3 here"
                                    v-model="createWebinar.introduction"
                                  />
                                </div>
                              </div>
                            </div>
                            <!-- Add New Choice Button -->
                            <div
                              class="relative flex items-center justify-center my-10"
                              @click="callLog"
                            >
                              <hr class="w-full" />
                              <empty-chip :isAbsolute="true">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0)">
                                    <path
                                      d="M-2.18262 8H7.99972V-2.18234"
                                      stroke="#8A8A8A"
                                      stroke-width="1.5"
                                    />
                                    <path
                                      d="M8 18.1821V7.99979H18.1823"
                                      stroke="#8A8A8A"
                                      stroke-width="1.5"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0">
                                      <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <p
                                  class="text-xs text-center font-thin text-gray-600 pl-2"
                                >
                                  Add new choice
                                </p>
                              </empty-chip>
                            </div>

                            <!-- Poll Length -->
                            <div class="grid grid-cols-2 gap-x-5 gap-y-0">
                              <div class="form-group mb-5">
                                <label for="input-name">Poll length</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="0 hours"
                                    v-model="createWebinar.choice"
                                  />
                                </div>
                              </div>
                              <div class="form-group mb-5 flex items-end">
                                <!-- <label for="input-name">Choice 2</label> -->
                                <input
                                  id="input-name"
                                  type="text"
                                  class="form-input"
                                  placeholder="30 minutes"
                                  v-model="createWebinar.introduction"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </dash-items-section-group>
                    </div>
                  </div>
                </div>
              </section>
            </section>
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
                      <span class="text-sm">Tutor link: https://klasro..</span>
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
                      <span class="text-sm">Studet link: https://klasro..</span>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
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
              <button
                class="btn btn-sm lg:mt-0"
                :class="isWebinars.preliminary ? 'btn-light' : 'btn-primary'"
              >
                Previous
              </button>
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
  middleware: ['check-auth', 'auth', 'isTutor'],
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
    callLog() {
      console.log('adding new')
    },
  },
}
</script>

<style scoped>
.switcher {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.switcher::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
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
