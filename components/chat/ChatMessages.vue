<template>
  <div
    class="flex flex-col flex-1 justify-between antialiased"
    :class="{
      'bg-white rounded-xl border border-gray-300 shadow-hover': !noCard,
    }"
  >
    <slot name="header" />
    <div
      ref="scrollbar"
      class="chat-field mt-4 mb-0 mx-2 p-3 pt-1 flex flex-col overflow-y-auto scrollbar-thumb-orange scrollbar-thumb-rounded scrollbar-track-orange-lighter scrollbar-w-2 scrolling-touch"
    >
      <section v-if="messages.length > 0">
        <div
          class="messages space-y-4 pb-4"
          v-for="(msg, key) in messages"
          :key="key"
        >
          <!-- Left -->
          <div class="chat-message" v-if="user.name !== msg.username">
            <div class="flex items-end">
              <div
                class="flex flex-col space-y-2 text-xs ml-2 mr-4 order-2 items-start"
              >
                <div>
                  <span
                    class="chat-box recieved-chat-box rounded-xl rounded-bl"
                  >
                    <strong>{{ msg.username }}</strong> {{ msg.message }}
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                class="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
          <!-- Right -->
          <div class="chat-message" v-else>
            <div class="flex items-end justify-end">
              <div
                class="flex flex-col space-y-2 text-xs max-w-xs ml-4 mr-0 order-1 items-end"
              >
                <div>
                  <span class="chat-box sent-chat-box rounded-xl rounded-br">
                    {{ msg.message }}
                  </span>
                </div>
              </div>
              <!-- <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            /> -->
            </div>
          </div>
        </div>
      </section>
      <div
        class="flex justify-center items-center align-middle h-full"
        v-if="messages.length === 0"
      >
        <p class="text-center self-center m-auto text-gray-500 text-base">
          No Message
        </p>
      </div>
    </div>
    <div class="px-4 pb-4 mb-2 sm:mb-0">
      <div class="relative flex">
        <input
          type="text"
          placeholder="Type message here"
          class="focus:outline-none focus:placeholder-gray-400 placeholder-gray-600"
          v-model="inputMessage"
          v-on:keyup.enter="submitMessage"
        />
        <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full h-12 w-12 mr-2 transition duration-500 ease-in-out text-white hover:bg-orange-100 focus:outline-none"
            v-on:click="submitMessage"
          >
            <img src="/icon/send.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    noCard: { type: Boolean, default: false },
    sendMessage: { type: Function, default: null },
    messages: { type: Array, default: [] },
  },
  data() {
    return {
      // messages: require('@/static/json/messages.json'),
      inputMessage: '',
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  mounted() {
    const el = this.$refs.scrollbar
    el.scrollTop = el.scrollHeight
  },
  methods: {
    submitMessage() {
      console.log(this.user.name, this.messages)
      this.sendMessage(this.inputMessage)
      this.inputMessage = ''
    },
  },
}
</script>

<style scoped>
.chat-field {
  height: calc(100vh - 16.5rem);
}
.chat-box {
  @apply py-2 inline-block text-gray-800 text-xs leading-relaxed;
}
.recieved-chat-box {
  background: rgba(249, 158, 66, 0.1);
  @apply px-4;
}
.sent-chat-box {
  background: rgba(241, 243, 242, 0.6);
  @apply px-4;
}
input[type='text'] {
  box-shadow: 0 10px 36px rgba(249, 158, 66, 0.16);
  @apply w-full text-gray-600 pl-6 pr-16 bg-white rounded-lg py-5;
}
</style>
