<template>
  <div>
    <webinar-testing-modal
      v-if="startState === 'mic_carmera_test'"
      startState="mic_carmera_test"
      confirmText="Next"
      :confirm="confirm"
      title="Testing your mic and camera"
    />
    <webinar-testing-modal
      v-else-if="startState === 'speaker_test'"
      startState="speaker_test"
      confirmText="Continue to webinar"
      :confirm="confirm"
      title="Testing your speaker"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  // layout: 'webinar',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    startState: 'mic_carmera_test'
  }),
  // mounted() {
  //   if (this.$device.isMobile) {
  //     this.tabs.unshift('Home')
  //   }
  // },
  methods: {

    confirm(state) {
      if (state === 'mic_carmera_test')
        this.startState = 'speaker_test'
      
      if (state === 'speaker_test')
        this.startState = 'done'
    }

  },
}
</script>
