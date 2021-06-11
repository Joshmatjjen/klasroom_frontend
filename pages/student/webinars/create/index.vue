<template>
  <div class="min-h-screen mb-12">
    <section class="bg-orange-100">
      <div class="container sm:mx-0 lg:mx-auto px-4 lg:px-0">
        <div class="grid grid-cols-12 gap-5">
          <!-- Left Add Image -->
          <div class="col-span-full lg:col-span-7 xl:col-span-8">
            <section>
              <div
                class="switcher whitespace-no-wrap flex flex-row gap-10 place-items-start px-5 border-b-2 border-gray-200 overflow-scroll scrollbar-thumb-orange"
              >
                <button
                  @click="switcher(0)"
                  :class="{ active: isWebinarSwitch === 0 }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Preliminary</p>
                </button>
                <button
                  @click="webinarStates.organizers ? switcher(1) : null"
                  :class="{ active: isWebinarSwitch === 1 }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Organizers</p>
                </button>
                <button
                  @click="webinarStates.resources ? switcher(2) : null"
                  :class="{ active: isWebinarSwitch === 2 }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Resources</p>
                </button>
                <button
                  @click="webinarStates.polls ? switcher(3) : null"
                  :class="{ active: isWebinarSwitch === 3 }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Polls</p>
                </button>
                <button
                  @click="webinarStates.settings ? switcher(4) : null"
                  :class="{ active: isWebinarSwitch === 4 }"
                  class="menu-btn"
                >
                  <p class="text-xs text-gray-700">Settings</p>
                </button>
              </div>
            </section>

            <!-- Preliminary -->
            <section v-if="isWebinarSwitch === 0">
              <!-- Preliminary section -->
              <section>
                <div class="container mx-auto my-10 px-2 lg:px-0">
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
                                  placeholder="Enter webinar name here"
                                  v-model="createWebinar.title"
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
                                  placeholder="Enter webinar subtitle here"
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
                                  placeholder="Enter webinar introduction here"
                                  v-model="createWebinar.introduction"
                                />
                              </div>
                            </div>
                            <div class="grid grid-cols-3 gap-10">
                              <div class="form-group mb-5">
                                <label for="input-name">Webinar date</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="date"
                                    class="form-input"
                                    placeholder="Enter webinar date"
                                    v-model="createWebinar.date"
                                  />
                                </div>
                              </div>
                              <div class="form-group mb-5">
                                <label for="input-name"
                                  >Webinar start time</label
                                >
                                <div>
                                  <input
                                    id="input-name"
                                    type="time"
                                    class="form-input"
                                    placeholder="Enter webinar startTime"
                                    v-model="createWebinar.startTime"
                                  />
                                </div>
                              </div>
                              <div class="form-group mb-5">
                                <label for="input-name">Webinar end time</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="time"
                                    class="form-input"
                                    placeholder="Enter webinar endTime"
                                    v-model="createWebinar.endTime"
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
            </section>

            <!-- Organizers -->
            <section v-if="isWebinarSwitch === 1">
              <!-- Tutor Or Co-Host section-->
              <section>
                <div class="container mx-auto my-10 px-2 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <!-- Tutor -->
                      <dash-items-section-group title="Co-Host" :edit="true">
                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
                        >
                          <div class="px-4 md:px-5 lg:px-6 py-4">
                            <!-- Webinar name -->
                            <user-chip :owner="{ name: user.name }" />
                            <user-chip
                              v-for="(item, key) in coHostOrganizers"
                              :key="key"
                              :id="key"
                              :deleteItem="deleteOrgItem"
                              :user="{
                                name: item.name,
                                email: item.email,
                                type: item.type,
                              }"
                            />
                            <hr class="my-5" />
                            <p class="text-sm font-bold text-gray-700 mb-3">
                              Add new co-host
                            </p>
                            <div class="flex flex-row gap-10">
                              <!-- <div class="form-group flex-1 mb-5">
                                <label for="input-name">co-host name</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter co-host name here"
                                    v-model="coHost.name"
                                  />
                                </div>
                              </div> -->

                              <div class="form-group flex-1 mb-5">
                                <label for="input-name">Email</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter co-host name here"
                                    v-model="coHost.email"
                                    @input="checkFormError('co_host')"
                                  />
                                </div>
                              </div>
                              <div class="flex flex-col justify-end mb-5">
                                <div></div>
                                <div
                                  type="button"
                                  class="btn btn-primary align-middle text-center hover"
                                  @click="addOrganizer('co_host')"
                                >
                                  Add
                                </div>
                              </div>
                            </div>
                            <span
                              v-if="coHostFormError"
                              class="text-sm text-red-700"
                              >Email address is required</span
                            >
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
                              v-for="(item, key) in modratorOrganizers"
                              :key="key"
                              :id="key"
                              :deleteItem="deleteOrgItem"
                              :user="{
                                name: item.name,
                                email: item.email,
                                type: item.type,
                              }"
                            />
                            <hr class="my-5" />
                            <p class="text-sm font-bold text-gray-700 mb-3">
                              Add new moderator
                            </p>
                            <div class="flex flex-row gap-10">
                              <!-- <div class="form-group flex-1 mb-5">
                                <label for="input-name">Moderator name</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter moderator name here"
                                    v-model="moderator.name"
                                  />
                                </div>
                              </div> -->

                              <div class="form-group flex-1 mb-5">
                                <label for="input-name">Email</label>
                                <div>
                                  <input
                                    id="input-name"
                                    type="text"
                                    class="form-input"
                                    placeholder="Enter moderator email here"
                                    v-model="moderator.email"
                                    @input="checkFormError('moderator')"
                                  />
                                </div>
                              </div>
                              <div class="flex flex-col justify-end mb-5">
                                <div></div>
                                <div
                                  type="button"
                                  class="btn btn-primary align-middle text-center"
                                  @click="addOrganizer('moderator')"
                                >
                                  Add
                                </div>
                              </div>
                            </div>
                            <span
                              v-if="moderatorFormError"
                              class="text-sm text-red-700"
                              >Email address is required</span
                            >
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
            <section v-if="isWebinarSwitch === 2">
              <!-- Resources section -->
              <section>
                <div class="container mx-auto my-10 px-2 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <dash-items-section-group title="Resources" :edit="true">
                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full"
                        >
                          <input
                            ref="input"
                            type="file"
                            name="image"
                            accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
                            multiple
                            @change="setImage"
                          />
                          <div class="px-4 md:px-5 lg:px-6 py-4">
                            <!-- Webinar name -->
                            <resource-chip
                              v-for="(item, key) in fileResources"
                              :key="key"
                              :file="{ filename: item.name }"
                              :id="key"
                              :deleteItem="deleteResItem"
                            />
                            <resource-chip
                              v-for="(item, key) in linkResources"
                              :key="key"
                              :link="item"
                              :id="key"
                              :deleteItem="deleteResItem"
                            />
                            <!-- <resource-chip
                              :file="{ filename: 'tradingpatterns.zip' }"
                            /> -->
                            <div
                              class="container flex flex-row bg-white rounded-lg border border-gray-300 shadow-hover mb-5"
                            >
                              <div
                                class="flex flex-row justify-center items-center w-full p-4 cursor-pointer"
                                @click.prevent="showFileChooser"
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
                                @click.prevent="showFileChooser"
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
                                @click.prevent="showAddLink"
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
            <section v-if="isWebinarSwitch === 3">
              <section>
                <div class="container mx-auto my-10 px-2 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <dash-items-section-group title="Polls" :edit="true">
                        <!-- Poll Choice -->

                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full items-center mb-8"
                        >
                          <poll-chip
                            v-for="(item, key) in polls"
                            :key="key"
                            :id="key"
                            :item="item"
                            :deleteItem="removePoll"
                            :polls="polls"
                            :checkFormError="checkFormError"
                          />
                        </div>

                        <div class="relative flex items-center justify-center">
                          <div
                            class="btn btn-primary absolute flex flex-row bottom-0 mb-2"
                            @click="addPoll"
                          >
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
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                                <path
                                  d="M8 18.1821V7.99979H18.1823"
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              class="text-sm text-center font-thin text-white pl-2"
                            >
                              Add new poll
                            </p>
                          </div>
                        </div>

                        <span v-if="pollsError" class="text-sm text-red-700"
                          >Fill all polls input field</span
                        >
                      </dash-items-section-group>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <!-- Settings -->
            <section v-if="isWebinarSwitch === 4">
              <section>
                <div class="container mx-auto my-10 px-2 lg:px-0">
                  <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                      <!-- Settings and permissions -->
                      <dash-items-section-group
                        title="Settings and permissions"
                        :edit="true"
                      >
                        <!-- Settings and permissions -->

                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full items-center mb-8"
                        >
                          <div class="px-4 md:px-5 lg:px-6 py-4">
                            <!-- Co Host -->
                            <!-- <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Co-host
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Max number of co-host
                                  </p>
                                </div>

                                <v-select
                                  class="style-chooser"
                                  placeholder="4"
                                  :options="[
                                    'Components',
                                    'CSS / Variables',
                                    'Slots',
                                  ]"
                                />
                              </div>
                            </div>
                            <hr class="mb-5" /> -->

                            <!-- Tutors -->
                            <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Tutors
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Max number of tutors
                                  </p>
                                </div>

                                <div>
                                  <input
                                    id="input-settings-tutors"
                                    type="number"
                                    class="form-input"
                                    placeholder=""
                                    v-model="settings.tutors"
                                  />
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" />
                            <!-- Students -->
                            <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Students
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Max number of students
                                  </p>
                                </div>

                                <div>
                                  <input
                                    id="input-settings-students"
                                    type="number"
                                    class="form-input"
                                    placeholder=""
                                    v-model="settings.students"
                                  />
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" />
                            <!-- Moderators -->
                            <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Moderators
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Max number of moderators
                                  </p>
                                </div>

                                <div>
                                  <input
                                    id="input-settings-moderators"
                                    type="number"
                                    class="form-input"
                                    placeholder=""
                                    v-model="settings.moderators"
                                  />
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" />

                            <!-- Videos -->
                            <!-- <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Videos
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Video streaming resolution
                                  </p>
                                </div>
                                <v-select
                                  class="style-chooser cursor-pointer"
                                  placeholder="Auto adjust accordingly"
                                  :options="[
                                    'Components',
                                    'CSS / Variables',
                                    'Slots',
                                  ]"
                                />
                              </div>
                            </div>
                            <hr class="mb-5" /> -->

                            <!-- Recording -->
                            <!-- <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Videos
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="col-span-7">
                                  <p class="text-sm text-gray-700">
                                    Enable screen sharing for other tutors
                                  </p>
                                </div>
                                <div class="col-span-5 text-right">
                                  <input-toggle-switch v-model="autoplay" />
                                </div>
                              </div>
                              <div class="flex flex-row justify-between my-4">
                                <div class="col-span-7">
                                  <p class="text-sm text-gray-700">
                                    Enable screen recording for students
                                  </p>
                                </div>
                                <div class="col-span-5 text-right">
                                  <input-toggle-switch v-model="autoplay" />
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" /> -->

                            <!-- Screen Sharing -->
                            <!-- <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Screen Sharing
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="col-span-7">
                                  <p class="text-sm text-gray-700">
                                    Enable screen sharing for other tutors
                                  </p>
                                </div>
                                <div class="col-span-5 text-right">
                                  <input-toggle-switch v-model="autoplay" />
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" /> -->
                          </div>
                        </div>

                        <!-- <div class="relative flex items-center justify-center">
                          <div
                            class="btn btn-primary absolute flex flex-row bottom-0 mb-2"
                          >
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
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                                <path
                                  d="M8 18.1821V7.99979H18.1823"
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              class="text-sm text-center font-thin text-white pl-2"
                            >
                              Add new choice
                            </p>
                          </div>
                        </div> -->
                      </dash-items-section-group>

                      <!-- Pricing -->
                      <dash-items-section-group title="Pricing" :edit="true">
                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full items-center mb-8"
                        >
                          <div class="px-4 md:px-5 lg:px-6 py-4">
                            <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Enter webinar price
                              </p>
                              <!-- Nigeria price -->
                              <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Price in Nigeria Naria
                                  </p>
                                </div>
                                <div
                                  class="form-input currency-box flex flex-row text-center justify-center items-center"
                                >
                                  <p
                                    class="text-sm font-bold text-gray-600 text-center py-1"
                                  >
                                    ₦
                                  </p>
                                  <input
                                    type="number"
                                    class="currency-input"
                                    placeholder="price"
                                    v-model="price"
                                  />

                                  <!-- <p
                                    class="percentage-chip bg-orange-500 rounded-xl text-sm font-medium text-white text-center"
                                  >
                                    15% off
                                  </p> -->
                                </div>
                              </div>

                              <!-- Kenya price -->
                              <!-- <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Price in Kenya Shilling
                                  </p>
                                </div>
                                <div
                                  class="form-input currency-box flex flex-row text-center justify-center items-center"
                                >
                                  <p
                                    class="text-sm font-bold text-gray-600 text-center py-1"
                                  >
                                    /=
                                  </p>
                                  <input
                                    type="text"
                                    class="currency-input"
                                    placeholder="price"
                                    v-model="createWebinar.introduction"
                                  />
                                  <p
                                    class="percentage-chip bg-orange-500 rounded-xl text-sm font-medium text-white text-center"
                                  >
                                    15% off
                                  </p>
                                </div>
                              </div> -->

                              <!-- South African price -->
                              <!-- <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Price in South African Rand
                                  </p>
                                </div>
                                <div
                                  class="form-input currency-box flex flex-row text-center justify-center items-center"
                                >
                                  <p
                                    class="text-sm font-bold text-gray-600 text-center py-1"
                                  >
                                    R
                                  </p>
                                  <input
                                    type="text"
                                    class="currency-input"
                                    placeholder="price"
                                    v-model="createWebinar.introduction"
                                  />
                                  <p
                                    class="percentage-chip bg-orange-500 rounded-xl text-sm font-medium text-white text-center"
                                  >
                                    15% off
                                  </p>
                                </div>
                              </div>
                              <hr class="mb-5" /> -->
                              <!-- Default bank -->
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Change default bank account
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="flex items-center">
                                  <p
                                    class="text-sm font-thin text-gray-600 self-center"
                                  >
                                    Your default bank account for receiving
                                    payment is 305**..
                                  </p>
                                </div>
                                <div
                                  class="btn btn-light text-center items-center"
                                >
                                  Change
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" />
                          </div>
                        </div>

                        <!-- <div class="relative flex items-center justify-center">
                          <div
                            class="btn btn-primary absolute flex flex-row bottom-0 mb-2"
                          >
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
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                                <path
                                  d="M8 18.1821V7.99979H18.1823"
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              class="text-sm text-center font-thin text-white pl-2"
                            >
                              Add new choice
                            </p>
                          </div>
                        </div> -->
                      </dash-items-section-group>

                      <!-- Promotion -->
                      <dash-items-section-group title="Promotion" :edit="true">
                        <div
                          class="bg-white rounded-xl border border-gray-300 shadow-hover relative h-full items-center mb-8"
                        >
                          <div class="px-4 md:px-5 lg:px-6 py-4">
                            <!-- Recording -->
                            <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Price off
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="col-span-7">
                                  <p class="text-sm text-gray-700">
                                    Run price off promotion
                                  </p>
                                </div>
                                <div class="col-span-5 text-right">
                                  <input-toggle-switch
                                    v-model="runPricePromotion"
                                  />
                                </div>
                              </div>
                              <div class="flex flex-row justify-between my-4">
                                <div
                                  class="flex col-span-7 items-center justify-center"
                                >
                                  <p class="text-sm text-gray-700 text-center">
                                    Reduce price by
                                  </p>
                                </div>

                                <div
                                  class="form-input currency-box flex flex-row text-center justify-center items-center"
                                >
                                  <input
                                    type="number"
                                    class="currency-input"
                                    min="0"
                                    max="100"
                                    placeholder="0"
                                    v-model="promo.percentageOff"
                                  />
                                  <p
                                    class="percentage-chip bg-orange-500 rounded-xl text-sm font-medium text-white text-center"
                                  >
                                    % off
                                  </p>
                                </div>
                              </div>

                              <div class="flex flex-row justify-between my-4">
                                <div
                                  class="flex col-span-7 items-center justify-center"
                                >
                                  <p class="text-sm text-gray-700 text-center">
                                    Starting from
                                  </p>
                                </div>

                                <div
                                  class="form-input currency-box flex flex-row text-center justify-center items-center"
                                >
                                  <input
                                    type="date"
                                    class="promotion-input"
                                    placeholder="date"
                                    v-model="promo.startDate"
                                  />
                                </div>
                              </div>

                              <div class="flex flex-row justify-between my-4">
                                <div
                                  class="flex col-span-7 items-center justify-center"
                                >
                                  <p class="text-sm text-gray-700 text-center">
                                    Until
                                  </p>
                                </div>

                                <div
                                  class="form-input currency-box flex flex-row text-center justify-center items-center"
                                >
                                  <input
                                    type="date"
                                    class="promotion-input"
                                    placeholder="date"
                                    v-model="promo.endDate"
                                  />
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" />

                            <!-- Screen Sharing -->
                            <!-- <div class="form-group mb-5">
                              <p
                                class="text-sm text-left font-bold text-gray-800"
                              >
                                Screen Sharing
                              </p>
                              <div class="flex flex-row justify-between my-4">
                                <div class="col-span-7">
                                  <p class="text-sm text-gray-700">
                                    Enable screen sharing for other tutors
                                  </p>
                                </div>
                                <div class="col-span-5 text-right">
                                  <input-toggle-switch v-model="autoplay" />
                                </div>
                              </div>
                            </div>
                            <hr class="mb-5" /> -->
                          </div>
                        </div>

                        <!-- <div class="relative flex items-center justify-center">
                          <div
                            class="btn btn-primary absolute flex flex-row bottom-0 mb-2"
                          >
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
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                                <path
                                  d="M8 18.1821V7.99979H18.1823"
                                  stroke="#FFFFFF"
                                  stroke-width="1.5"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p
                              class="text-sm text-center font-thin text-white pl-2"
                            >
                              Add new choice
                            </p>
                          </div>
                        </div> -->
                      </dash-items-section-group>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <!-- End for Switchers -->
          </div>
          <!-- Right Add Image -->
          <div
            v-if="isWebinarSwitch !== 0"
            class="col-span-full lg:col-span-5 xl:col-span-4"
          >
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover relative min-h-full"
            >
              <div class="block mb-2">
                <div
                  class="big-avatar h-64 relative rounded-xl overflow-hidden"
                  :style="{
                    backgroundImage: createWebinar.image
                      ? `url(${createWebinar.image.signedUrl})`
                      : `url('/webinar-view-bg.jpg')`,
                  }"
                >
                  <div
                    class="w-full h-full bg-black opacity-50 absolute top-0"
                  ></div>
                </div>
              </div>
              <div class="px-4 md:px-5 lg:px-6 py-4">
                <ul class="text-gray-700">
                  <li class="text-left">
                    <h5 class="font-bold mb-2">
                      {{ webinar.title }}
                    </h5>
                    <p class="text-xs text-gray-700">
                      {{ webinar.introduction }}
                    </p>
                  </li>
                  <!-- <li>
                    <hr class="my-5" />
                    <label class="checkbox" @click="$router.push('/')">
                      <span class="text-sm">Preview webinar</span>
                      <input type="checkbox" value="intermediate" disabled />
                      <span class="checkmark"></span>
                    </label>
                  </li> -->
                  <hr class="my-5" />
                  <li class="lg:pb-8 flex flex-row justify-between">
                    <span class="text-sm">Link: https://klasro..</span>

                    <div class="flex items-center mr-5 mb-3 cursor-pointer">
                      <img class="w-6 h-4" src="/icon/copy.svg" />
                      <span class="text-xs">Copy</span>
                    </div>
                  </li>
                  <li class="lg:pb-8 flex flex-row justify-between relative">
                    <button
                      class="btn btn-primary mr-5 flex flex-row justify-between align-middle items-center"
                    >
                      <span class="text-xs">Preview webinar</span>
                      <!-- <svg
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
                      </svg> -->
                    </button>
                    <!-- <div
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
                    </div> -->
                    <!-- <button class="btn btn-light">
                      <span class="text-xs">Save </span>
                    </button> -->
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div v-else class="col-span-full lg:col-span-5 xl:col-span-4">
            <div
              class="bg-white rounded-xl border border-gray-300 shadow-hover relative min-h-full"
            >
              <div class="block mb-2">
                <div
                  class="big-avatar h-64 relative rounded-xl overflow-hidden"
                  :style="{
                    backgroundImage: createWebinar.image
                      ? `url(${createWebinar.image.signedUrl})`
                      : `url('/webinar-view-bg.jpg')`,
                  }"
                >
                  <div class="grid grid-cols-12 place-items-center h-64 py-32">
                    <div
                      class="change-picture col-span-12 text-white mx-auto my-auto"
                    >
                      <input
                        ref="image"
                        type="file"
                        name="image"
                        accept="image/*"
                        multiple
                        @change="setWebinarImage"
                      />
                      <button
                        @click.prevent="showFileChooser('webinarImage')"
                        class="focus:outline-none"
                      >
                        Add Picture
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full h-full bg-black opacity-50 absolute top-0"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom navigation -->
          <div class="col-span-full lg:col-span-7 xl:col-span-8">
            <hr class="my-5" />
            <div class="flex flex-row justify-between">
              <button
                class="btn btn-sm lg:mt-0"
                :class="isWebinarSwitch === 0 ? 'btn-disable' : 'btn-primary'"
                @click="
                  isWebinarSwitch <= 0 ? null : switcher(isWebinarSwitch - 1)
                "
              >
                Previous
              </button>
              <button
                class="btn btn-sm lg:mt-0 btn-primary"
                @click="
                  () => {
                    goNext(isWebinarSwitch)
                  }
                "
              >
                {{ isWebinarSwitch === 4 ? 'Publish Webinar' : 'Next' }}
                <loader v-if="loading" color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import moment from 'moment'
import UserChip from '~/components/chip/UserChip.vue'
import { getAccessTokenHeader } from '~/utils'
import PollChip from '~/components/chip/PollChip.vue'

const courses = require('@/static/json/courses.json')
const webinars = require('@/static/json/webinars.json')

export default {
  components: { UserChip, PollChip },
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Create webinar')
  },
  data: () => ({
    courses: _.take(courses, 4),
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(courses, 3),

    webinar: null,
    organizerId: null,
    resourceId: null,
    pollId: null,
    settingId: null,
    priceId: null,
    promotionId: null,

    webinarStates: {
      organizers: false,
      resources: false,
      polls: false,
      settings: false,
    },

    isWebinarSwitch: 0,
    createWebinar: {
      title: '',
      subtitle: '',
      introduction: '',
      date: '',
      startTime: '',
      endTime: '',
      tags: [],
      image: null,
    },
    coHost: {
      name: '',
      email: '',
    },
    moderator: {
      name: '',
      email: '',
    },
    polls: [
      {
        question: '',
        choices: ['', '', ''],
        duration: '',
      },
    ],
    settings: {
      tutors: 1,
      moderators: 1,
      students: 50,
    },
    price: 0,
    promo: {
      percentageOff: 0,
      startDate: '',
      endDate: '',
    },
    runPricePromotion: false,
    pollsError: false,
    coHostFormError: false,
    moderatorFormError: false,
    publishOpt: false,
    loading: false,
    fileResources: [],
    linkResources: [],
    coHostOrganizers: [],
    modratorOrganizers: [],
  }),
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      token: (state) => state.auth.token,
      userType: (state) =>
        state.auth.user && state.auth.user.isTutor ? 'tutor' : 'student',
    }),
    userDash() {
      return this.$route.path.split('/')[1]
    },
  },
  watch: {
    async fileResources(value) {
      console.log('fileResources: ', value)
      // await this.$nextTick()
    },
    async polls(value) {
      await this.$nextTick()
      console.log('polls: ', value)
    },
    async runPricePromotion(value) {
      console.log('runPricePromotion: ', value)
      // await this.$nextTick()
    },
  },
  methods: {
    switcher: function (value) {
      this.isWebinarSwitch = value
      // some code to filter users
    },
    togglePubOptMenu() {
      this.publishOpt = !this.publishOpt
    },
    callLog() {
      console.log('adding new')
    },
    async publishWebinar() {
      try {
        if (this.webinar) {
          const { data, message } = await this.$axios.$put(
            `https://streaming.staging.klasroom.com/v1/webinars/${
              this.webinar.id
            }?publish_now=${true}`,
            {
              title: this.webinar.title,
              subtitle: this.webinar.subtitle,
              introduction: this.webinar.introduction,
              webinarStart: moment(
                this.createWebinar.date + ' ' + this.createWebinar.startTime
              ).format('YYYY-MM-DDTHH:mm:ss'),
              webinarEnd: moment(
                this.createWebinar.date + ' ' + this.createWebinar.endTime
              ).format('YYYY-MM-DDTHH:mm:ss'),
              tags: this.webinar.tags,
            },
            {
              headers: getAccessTokenHeader(this.token),
            }
          )

          Swal.fire({
            position: 'top-end',
            width: '350px',
            text: message,
            backdrop: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
          })

          console.log('webinar data: ', data, message)

          // Publish action
          if (this.userDash === 'tutor') this.gotoWebinar('tutor')
          else this.gotoWebinar('student')
        }
      } catch (e) {
        console.log(e)
        return
      }
    },
    gotoWebinar(type) {
      this.$router.push(`/${type}/webinars`)
      this.close()
    },
    async goNext(isWebinarSwitch) {
      switch (isWebinarSwitch) {
        case 0:
          try {
            this.loading = true
            const { date, startTime, endTime, image } = this.createWebinar
            const resData = {
              ...this.createWebinar,
              webinarStart: moment(date + ' ' + startTime).format(
                'YYYY-MM-DDTHH:mm:ss'
              ),
              webinarEnd: moment(date + ' ' + endTime).format(
                'YYYY-MM-DDTHH:mm:ss'
              ),
              webinarImage: image ? image.fileName : '',
            }
            console.log('resData: ', resData)

            let newData

            if (this.webinar) {
              const { data } = await this.$axios.$put(
                `https://streaming.staging.klasroom.com/v1/webinars/${
                  this.webinar.id
                }?publish_now=${false}`,
                resData,
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              newData = data
            } else {
              const { data } = await this.$axios.$post(
                `https://streaming.staging.klasroom.com/v1/webinars?publish_now=${false}`,
                resData,
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              newData = data
            }

            console.log('webinar data: ', newData)
            this.webinar = newData
            this.loading = false
            this.webinarStates.organizers = true
            isWebinarSwitch >= 4 ? null : this.switcher(isWebinarSwitch + 1)
            window.scrollTo(0, 0)
          } catch (e) {
            console.log(e)
            this.loading = false
            return
          }
          break
        case 1:
          try {
            const resData = {
              webinar_id: this.webinar.id,
              co_organizers: [
                ...this.coHostOrganizers,
                ...this.modratorOrganizers,
              ],
            }

            console.log('resData: ', resData)

            let newData

            if (this.organizerId) {
              const { data } = await this.$axios.$post(
                `https://streaming.staging.klasroom.com/v1/webinars/organizers`,
                resData,
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              newData = data
            } else {
              const { data } = await this.$axios.$post(
                `https://streaming.staging.klasroom.com/v1/webinars/organizers`,
                resData,
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              newData = data
            }

            console.log('Organizers newData: ', newData)
            this.organizerId = newData.id

            this.loading = false
            this.webinarStates.resources = true
            isWebinarSwitch >= 4 ? null : this.switcher(isWebinarSwitch + 1)
            window.scrollTo(0, 0)
          } catch (e) {
            console.log(e)
            this.loading = false
            return
          }
          break
        case 2:
          this.loading = true
          let resData
          try {
            const formData = new FormData()
            if (this.fileResources.length > 0) {
              this.fileResources.map((i) => {
                formData.append(
                  'webinar_resources',
                  i,
                  '.' + i.type.split('/')[1]
                )
              })
              const { data, message } = await this.$axios.$post(
                `/uploads`,
                formData,
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              console.log('uploaded: ', message, data)

              resData = {
                webinar_id: this.webinar.id,
                resources: [
                  ...data.webinar_resources.map((i) => {
                    return {
                      resource: i.fileName,
                      type: 'file',
                    }
                  }),
                ],
              }
            }

            if (this.linkResources.length > 0) {
              if (resData) {
                resData.resources = [
                  ...resData.resources,
                  ...this.linkResources.map((i) => {
                    return {
                      resource: i,
                      type: 'link',
                    }
                  }),
                ]
              } else {
                resData = {
                  webinar_id: this.webinar.id,
                  resources: [
                    ...this.linkResources.map((i) => {
                      return {
                        resource: i,
                        type: 'link',
                      }
                    }),
                  ],
                }
              }
            }

            console.log('resData: ', resData)

            if (resData) {
              let newData

              if (this.resourceId) {
                const { data } = await this.$axios.$put(
                  `https://streaming.staging.klasroom.com/v1/webinars/resources/${this.resourceId}`,
                  resData,
                  {
                    headers: getAccessTokenHeader(this.token),
                  }
                )
                newData = data
              } else {
                const { data } = await this.$axios.$post(
                  `https://streaming.staging.klasroom.com/v1/webinars/resources`,
                  resData,
                  {
                    headers: getAccessTokenHeader(this.token),
                  }
                )
                newData = data
              }

              console.log('newData: ', newData)

              this.resourceId = newData.id
            }

            this.loading = false
            this.webinarStates.polls = true
            isWebinarSwitch >= 4 ? null : this.switcher(isWebinarSwitch + 1)
            window.scrollTo(0, 0)
          } catch (e) {
            console.log(e)
            this.loading = false
            return
          }
          break
        case 3:
          this.loading = true
          try {
            this.polls.map((i) => {
              if (i.question) {
                if (!i.duration) {
                  this.pollsError = true
                  return
                }
                i.choices.map((j) => {
                  if (!j) {
                    this.pollsError = true
                    return
                  }
                })
              }
            })

            if (!this.pollsError && this.polls[0].question) {
              const resData = {
                webinar_id: this.webinar.id,
                polls: [...this.polls],
              }

              console.log('resData: ', resData)

              let newData

              if (this.pollId) {
                const { data } = await this.$axios.$put(
                  `https://streaming.staging.klasroom.com/v1/webinars/polls/${this.pollId}`,
                  resData,
                  {
                    headers: getAccessTokenHeader(this.token),
                  }
                )
                newData = data
              } else {
                const { data } = await this.$axios.$post(
                  `https://streaming.staging.klasroom.com/v1/webinars/polls`,
                  resData,
                  {
                    headers: getAccessTokenHeader(this.token),
                  }
                )
                newData = data
              }

              console.log('Polls newData: ', newData)

              this.pollId = newData.id
            }
            if (!this.pollsError) {
              this.webinarStates.settings = true
              isWebinarSwitch >= 4 ? null : this.switcher(isWebinarSwitch + 1)
              window.scrollTo(0, 0)
            }
            this.loading = false
          } catch (e) {
            console.log(e)
            this.loading = false
            return
          }
          break

        case 4:
          this.loading = true
          try {
            const { startDate, endDate } = this.promo
            const resPromoData = {
              ...this.promo,
              startDate: moment(startDate).format('YYYY-MM-DDTHH:mm:ss'),
              endDate: moment(endDate).format('YYYY-MM-DDTHH:mm:ss'),
            }

            if (this.settingId) {
              const { data: settingsData } = await this.$axios.$put(
                `https://streaming.staging.klasroom.com/v1/webinars/settings/${this.settingId}`,
                {
                  ...this.settings,
                },
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              this.settingId = settingsData.id
            } else {
              const { data: settingsData } = await this.$axios.$post(
                `https://streaming.staging.klasroom.com/v1/webinars/settings`,
                {
                  webinar_id: this.webinar.id,
                  ...this.settings,
                },
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              this.settingId = settingsData.id
            }
            if (this.priceId) {
              const { data: priceData } = await this.$axios.$put(
                `https://streaming.staging.klasroom.com/v1/webinars/price/${this.priceId}`,
                {
                  price: this.price,
                },
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              this.priceId = priceData.id
            } else {
              const { data: priceData } = await this.$axios.$post(
                `https://streaming.staging.klasroom.com/v1/webinars/price`,
                {
                  webinarId: this.webinar.id,
                  price: this.price,
                },
                {
                  headers: getAccessTokenHeader(this.token),
                }
              )
              this.priceId = priceData.id
            }
            if (this.runPricePromotion) {
              if (this.promotionId) {
                const { data: promotionData } = await this.$axios.$put(
                  `https://streaming.staging.klasroom.com/v1/webinars/promos/${this.promotionId}`,
                  {
                    ...resPromoData,
                  },
                  {
                    headers: getAccessTokenHeader(this.token),
                  }
                )
                this.promotionId = promotionData.id
              } else {
                const { data: promotionData } = await this.$axios.$post(
                  `https://streaming.staging.klasroom.com/v1/webinars/promos`,
                  {
                    webinar_id: this.webinar.id,
                    ...resPromoData,
                  },
                  {
                    headers: getAccessTokenHeader(this.token),
                  }
                )
                this.promotionId = promotionData.id
              }
            }

            this.loading = false

            this.publishWebinar()
          } catch (e) {
            console.log(e)
            this.loading = false
            return
          }
          break

        default:
          break
      }
    },
    addLink(link) {
      this.linkResources = [...this.linkResources, link]
    },
    showAddLink() {
      this.$store.commit('app/ADD_LINK_MODAL', {
        status: true,
        addLink: this.addLink,
      })
    },
    showFileChooser(type) {
      if (type === 'webinarImage') this.$refs.image.click()
      else this.$refs.input.click()
    },
    addOrganizer(type) {
      if (type === 'co_host') {
        const data = this.coHost
        if (!data.email) {
          this.coHostFormError = true
          return
        }
        data.type = 'co_host'
        this.coHostOrganizers = [...this.coHostOrganizers, data]
        this.coHost = {
          name: '',
          email: '',
        }
      } else {
        const data = this.moderator
        if (!data.email) {
          this.moderatorFormError = true
          return
        }
        data.type = 'moderator'
        this.modratorOrganizers = [...this.modratorOrganizers, data]
        this.moderator = {
          name: '',
          email: '',
        }
      }
    },
    checkFormError(type) {
      if (type === 'polls') this.pollsError = false
      else if (type === 'co_host') this.coHostFormError = false
      else this.moderatorFormError = false
    },
    async setWebinarImage(e) {
      console.log('Uploading__')
      const file = e.target.files[0]
      console.log('file: ', file)

      const formData = new FormData()
      formData.append('webinar_image', file, '.' + file.type.split('/')[1])
      try {
        const { data, message } = await this.$axios.$post(
          `/uploads`,
          formData,
          {
            headers: getAccessTokenHeader(this.token),
          }
        )
        console.log('uploaded: ', message, data)

        this.createWebinar.image = data.webinar_image
      } catch (e) {
        console.log(e)
        return
      }
    },
    async setImage(e) {
      console.log('Uploading__')
      const files = e.target.files
      console.log('files: ', files)

      this.fileResources = [...this.fileResources, ...files]

      // if (file.type.indexOf('image/') === -1) {
      //   alert('Please select an image file')
      //   return
      // }
      // if (typeof FileReader === 'function') {
      //   const reader = new FileReader()
      //   reader.onload = (event) => {
      //     this.imgSrc = event.target.result
      //     // rebuild cropperjs with the updated source
      //     this.$refs.cropper.replace(event.target.result)
      //   }
      //   reader.readAsDataURL(file)
      // } else {
      //   alert('Sorry, FileReader API not supported')
      // }
    },
    deleteResItem(id, type) {
      if (type === 'link')
        this.linkResources = this.linkResources.filter(
          (i, index) => index !== id
        )
      else
        this.fileResources = this.fileResources.filter(
          (i, index) => index !== id
        )
    },
    deleteOrgItem(id, type) {
      if (type === 'co_host') {
        this.coHostOrganizers = this.coHostOrganizers.filter(
          (i, index) => index !== id
        )
      } else {
        this.modratorOrganizers = this.modratorOrganizers.filter(
          (i, index) => index !== id
        )
      }
    },
    addPoll() {
      this.polls = [
        ...this.polls,
        {
          question: '',
          choices: ['', '', ''],
          duration: '',
        },
      ]
    },
    removePoll(id) {
      this.polls = this.polls.filter((i, index) => index !== id)
    },
  },
}
</script>

<style scoped>
.promotion-input {
  padding: 0.1rem 0.1rem;
  border: none !important;
}
.percentage-chip {
  min-width: 4.1rem;
  padding: 0.1rem 0;
}
.currency-box {
  width: 16rem;
}
.currency-input {
  border: none !important;
  background: #f5f5f3 !important;
}
.switcher {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.switcher::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.big-avatar {
  width: 100%;
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
