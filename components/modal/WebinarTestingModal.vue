<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div class="fixed inset-0 overflow-y-auto" style="z-index: 2">
    <div
      class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
        Background overlay, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
      >&#8203;
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white relative px-4 pt-5 pb-4 sm:p-8 sm:pb-5">
          <div class="block">
            <div class="mt-3 sm:mt-5 sm:ml-0">
              <!-- <div class="flex text-center mb-8">
                <img src="/card/confetti.svg" class="mx-auto" />
              </div> -->
              <h2
                id="modal-headline"
                class="text-xl sm:text-2xl leading-none font-bold text-center text-gray-800 pb-3"
              >
                {{ title }}
              </h2>
              <div
                v-if="startState === 'begin_test'"
                class="flex justify-center"
              >
                <div
                  class="flex justify-center items-center"
                  style="height: 150px"
                >
                  <svg
                    :style="{ width: '100px', height: '30px' }"
                    :class="`animate-spin h-5 ml-2 rounded-full border-2 text-blue-500 border-orange-400 stroke-current stroke-2`"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="path"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div
                v-if="startState === 'mic_carmera_test'"
                class="flex justify-center"
              >
                <div class="mt-4 w-1/2 px-6">
                  <div class="flex text-center mb-8" style="height: 100px">
                    <img src="/card/mic.svg" class="mx-auto" />
                  </div>
                  <div>
                    <v-select
                      class="form-input style-chooser"
                      placeholder="Select mic"
                      v-model="devicesOpt.mic"
                      disabled
                      :options="
                        devices.filter(
                          (i) =>
                            i.kind === 'audioinput' && i.deviceId !== 'default'
                        )
                      "
                    />
                  </div>
                  <p
                    class="text-sm text-center leading-normal font-bold text-gray-700 mt-8"
                  >
                    Status
                  </p>
                  <p
                    class="text-sm text-center leading-normal text-gray-700 mt-1"
                  >
                    Perfect
                  </p>
                </div>
                <div class="mt-4 w-1/2 px-6 border-l">
                  <div class="flex text-center mb-8" style="height: 100px">
                    <video
                      id="localVideoTest"
                      autoplay
                      muted
                      height="100"
                      class="mx-auto"
                    ></video>
                  </div>
                  <div>
                    <v-select
                      class="form-input style-chooser"
                      placeholder="Select carmera"
                      v-model="devicesOpt.carmera"
                      disabled
                      :options="devices.filter((i) => i.kind === 'videoinput')"
                    />
                  </div>
                  <p
                    class="text-sm text-center leading-normal font-bold text-gray-700 mt-8"
                  >
                    Status
                  </p>
                  <p
                    class="text-sm text-center leading-normal text-gray-700 mt-1"
                  >
                    Perfect
                  </p>
                </div>
              </div>

              <div
                v-if="startState === 'speaker_test'"
                class="flex justify-center"
              >
                <div class="mt-4 px-6">
                  <div class="flex text-center mb-8" style="height: 100px">
                    <img src="/card/speaker.svg" class="mx-auto" />
                  </div>
                  <div>
                    <v-select
                      class="form-input style-chooser"
                      placeholder="Select audio"
                      v-model="devicesOpt.audio"
                      disabled
                      :options="
                        devices.filter(
                          (i) =>
                            i.kind === 'audiooutput' && i.deviceId !== 'default'
                        )
                      "
                    />
                  </div>
                  <p
                    class="text-sm text-center leading-normal font-bold text-gray-700 mt-8"
                  >
                    Status
                  </p>
                  <p
                    class="text-sm text-center leading-normal text-gray-700 mt-1"
                  >
                    Perfect
                  </p>
                </div>
              </div>

              <div
                v-if="startState !== 'begin_test'"
                class="flex text-center pt-8 pb-4 sm:pb-4"
              >
                <span class="flex mx-auto">
                  <button
                    type="button"
                    class="btn btn-primary shadow"
                    @click.prevent="() => confirm(startState)"
                  >
                    {{ confirmText || 'OK' }}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End login card -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getDevices, getUserMedia } from '~/logic/stream'

export default {
  data: () => ({
    // devicesOpt: {
    //   mic: null,
    //   carmera: null,
    //   audio: null,
    // },
    // devices: [],
    // stream: null,
  }),
  props: {
    title: {
      type: String,
      required: true,
    },
    confirmText: {
      type: String,
      required: true,
    },
    startState: {
      type: String,
      required: true,
    },
    confirm: {
      type: Function,
      required: true,
    },
    devices: {
      type: Array,
      required: true,
    },
    devicesOpt: {
      type: Object,
      required: true,
    },
    stream: {
      required: false,
    },
  },
  watch: {
    async startState(value) {
      await this.$nextTick()
      if (value === 'mic_carmera_test') {
        const video = document.querySelector('video#localVideoTest')
        if (video) {
          if ('srcObject' in video) {
            video.srcObject = this.stream
          } else {
            video.src = window.URL.createObjectURL(this.stream) // for older browsers
          }
        }
      }
    },
  },
  async mounted() {
    let devices = []

    // let { stream, error } = await getUserMedia()
    // if (stream) {
    //   // Safari getDevices only works immediately after getUserMedia (bug)
    //   devices = ((await getDevices()) || []).map((d) => {
    //     // console.log("found device", d)
    //     return {
    //       kind: d?.kind?.toLowerCase() || '?',
    //       deviceId: d?.deviceId,
    //       label: d.label || 'Unknown name',
    //     }
    //   })
    //   this.stream = stream
    // } else {
    //   console.error('Media error', error)
    // }

    // this.devices = devices
    // this.devicesOpt.mic = devices.filter(
    //   (i) => i.kind === 'audioinput' && i.deviceId !== 'default'
    // )[0]
    // this.devicesOpt.audio = devices.filter(
    //   (i) => i.kind === 'audiooutput' && i.deviceId !== 'default'
    // )[0]
    // this.devicesOpt.carmera = devices.filter((i) => i.kind === 'videoinput')[0]

    // let { stream, error } = await getUserMedia()
    // if (stream) {
    //   const video = document.querySelector('video#localVideoTest');
    //   if (video) {
    //     if ("srcObject" in video) {
    //       video.srcObject = stream;
    //     } else {
    //       video.src = window.URL.createObjectURL(stream) // for older browsers
    //     }
    //   }
    // } else {
    //   console.error("Media error", error)
    // }
  },
}
</script>
