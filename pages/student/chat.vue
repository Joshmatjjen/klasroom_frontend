<template>
  <div class="mb-20">
    <section class="bg-orange-100">
      <div class="container mx-auto mb-10 px-4 lg:px-0">
        <div class="md:grid grid-cols-12 gap-5">
          <div class="col-span-3 max-h-content-screen mb-8 lg:mb-0">
            <chat-contacts />
          </div>
          <div class="col-span-6 max-h-content-screen mb-8 lg:mb-0">
            <chat-messages>
              <div
                slot="header"
                class="flex flex-col pt-4 px-4 md:pt-5 md:px-5"
              >
                <div class="flex flex-row gap-6">
                  <p class="text-sm font-bold text-gray-700">
                    Logo Design Masterclass Chat
                  </p>
                  <!-- <button @click="connect">Connect</button> -->
                  <p class="text-xs text-gray-600 text-right ml-auto">
                    36 members
                  </p>
                </div>
                <hr class="mt-4 border-gray-300" />
              </div>
            </chat-messages>
          </div>
          <div class="col-span-3 max-h-content-screen">
            <chat-members />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
const io = require('socket.io-client')
const webinars = require('@/static/json/webinars.json')

export default {
  layout: 'dashboard',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_TITLE', 'Chat')
  },
  data: () => ({
    webinars: _.take(webinars, 4),
    undoneTasks: _.take(webinars, 3),
    badStatus: {},
  }),
  data: function () {
    return {
      connection: null,
    }
  },
  methods: {
    sendMessage: function (message) {
      console.log('Hello')
      console.log(this.connection)
      this.connection.send(message)
    },
  },
  created: function () {
    console.log('Starting connection to WebSocket Server')
    this.connection = new WebSocket(
      'wss://1e879751f9b3.ngrok.io/ws/public-chats/?token=BUSY8QLS3gyCUBhf0DrrtjXTZmqEp8Zisjq0_YiPaJs&webinar_id=25216'
    )

    this.connection.onmessage = function (event) {
      console.log(event)
    }

    this.connection.onopen = function (event) {
      console.log(event)
      console.log('Successfully connected to the echo websocket server...')
    }

    // created() {
    //   this.connect()
    // },
    // mounted() {
    //   this.socket = this.$nuxtSocket({
    //     name: 'home',
    //     statusProp: 'badStatus',
    //     reconnection: false,
    //   })
    //   this.socket.on('message', (msg, cb) => {
    //     console.log(msg)
    //     console.log(cb)
    //     /* Handle event */
    //   })
    // },
    // methods: {
    //   method1() {
    //     /* Emit events */
    //     this.socket.emit(
    //       'method1',
    //       {
    //         hello: 'world',
    //       },
    //       (resp) => {
    //         console.log(resp)
    //         /* Handle response, if any */
    //       }
    //     )
    //   },
    // getMessage() {
    //   this.socket.emit('getMessage', (resp) => {
    //     console.log(resp)
    //     // this.messageRxd = resp
    //   })
    // },
    // connect() {
    //   this.socket = io.connect(
    //     'ws://e7a46558e455.ngrok.io/ws/public-chats/?token=T22A9-BQHRuPelh_z693AcOruaj2W-5JaaA-MTAI4SQ&webinar_id=25216',
    //     { secure: true }
    //   )
    //   this.socket.on('logs', (data) => {
    //     console.log('Logs', data)
    //   })
    // },
  },
}
</script>
