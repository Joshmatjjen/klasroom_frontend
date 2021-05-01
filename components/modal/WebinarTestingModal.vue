<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->
  <div class="fixed inset-0 overflow-y-auto" style="z-index: 2002;">
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
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
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
        class="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:max-w-lg"
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
                class="text-xl sm:text-2xl leading-none font-bold text-center text-gray-800"
              >
                {{ title }}
              </h2>
              <div class="mt-2">
                <p
                  class="text-sm text-center leading-normal text-gray-700 mt-8"
                  v-html="title"
                ></p>
              </div>
              <div class="flex text-center pt-8 pb-4 sm:pb-4">
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

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    confirmText: {
      type: String,
      required: true
    },
    startState: {
      type: String,
      required: true
    },
    confirm: {
      type: Function,
      required: true
    }
  }, 
  async mounted() {
    let defaultVideoConstraints = {
      // frameRate: {
      //   min: 1,
      //   ideal: 15,
      // },
    }

    let defaultAudioConstraints = {
      // echoCancellation: true,
      // noiseSuppression: true,
      // autoGainControl: true,
    }

    function __getUserMedia(constraints) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return navigator.mediaDevices.getUserMedia(constraints)
      }
      const _getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia
      return new Promise((resolve, reject) => {
        if (!_getUserMedia) {
          reject(
            new Error(
              "Video and audio cannot be accessed. Please try again with another browser or check your browser's settings."
            )
          )
        } else {
          _getUserMedia.call(navigator, constraints, resolve, reject)
        }
      })
    }

    async function getUserMedia(
      constraints = {
        audio: {
          ...defaultAudioConstraints,
        },
        video: {
          ...defaultVideoConstraints,
          facingMode: "user",
        },
      }
    ) {
      try {
        // Solution via https://stackoverflow.com/a/47958949/140927
        // Only available for HTTPS! See https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Security
        console.log("getUserMedia constraints", constraints)
        let stream = await __getUserMedia(constraints)
        return { stream }
      } catch (err) {
        const name = err?.name || err?.toString()
        if (name === "NotAllowedError") {
          return {
            error:
              "You denied access to your camera and microphone. Please check your setup.",
          }
        } else if (name === "NotFoundError") {
          return {
            error: "No camera or microphone has been found!",
          }
        }
        trackException(err)
        return {
          error: err?.message || err?.name || err.toString(),
        }
      }
    }
      async function getDevices() {
        try {
          const devices = navigator.mediaDevices.enumerateDevices();
          console.log('getDevices devices: ',devices)
          return devices;
        } catch (err) {
          console.log('getDevices err: ',err)
        }
        return []
      }
      let { stream, error } = await getUserMedia()
      if (stream) {
        // Safari getDevices only works immediately after getUserMedia (bug)
        const devices = ((await getDevices()) || []).map((d) => {
          console.log("found device", d)
          return {
            kind: d?.kind?.toLowerCase() || "?",
            deviceId: d?.deviceId,
            label: d.label || "Unknown name",
          }
        })
      } else {
        console.error("Media error", error)
      }
  }
}
</script>
