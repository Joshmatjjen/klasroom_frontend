<template>
  <div class="bg-orange-100" style="height: calc(100vh - 80px)">
    <webinar-testing-modal
      v-if="startState === 'closed'"
      startState="closed"
      confirmText="Return Home"
      :confirm="confirm"
      :title="endMsg"
      :devices="devices"
      :devicesOpt="devicesOpt"
    />
    <webinar-testing-modal
      v-if="startState === 'begin_test'"
      startState="begin_test"
      confirmText="Next"
      :confirm="confirm"
      title="Establishing connection. Please Wait..."
      :devices="devices"
      :devicesOpt="devicesOpt"
    />
    <webinar-testing-modal
      v-if="startState === 'mic_carmera_test'"
      startState="mic_carmera_test"
      confirmText="Next"
      :confirm="confirm"
      title="Testing your mic and camera"
      :devices="devices"
      :devicesOpt="devicesOpt"
    />
    <webinar-testing-modal
      v-if="startState === 'speaker_test'"
      startState="speaker_test"
      confirmText="Continue to webinar"
      :confirm="confirm"
      title="Testing your speaker"
      :devices="devices"
      :devicesOpt="devicesOpt"
    />

    <!-- content -->
    <div class="grid grid-cols-12">
      <div
        class="video-player col-span-full lg:col-span-9 xl:col-span-9 flex flex-col"
      >
        <div id="players" class="main-video flex">
          <video
            ref="localVideo"
            id="localVideo"
            autoplay
            muted
            playsinline
            class="mx-auto"
          ></video>
        </div>
        <div v-if="startState" class="player-control bg-white flex p-4">
          <div class="flex w-1/3">
            <!-- <img src="/webinar/record.svg" class="mr-2 cursor-pointer" /> -->
            <img
              @click="() => switchVideoMode('screenwithcamera')"
              src="/webinar/sharescreen.svg"
              class="cursor-pointer"
            />
          </div>

          <div class="flex w-1/3">
            <img
              @click="toogleAudio"
              :src="`/webinar/${isMute ? 'mute' : 'unmute'}.svg`"
              class="mx-auto cursor-pointer"
            />
            <button
              type="button"
              class="btn btn-primary shadow"
              @click.prevent="() => stopPublishing()"
            >
              Leave Meeting
            </button>
            <img
              @click="toogleVideo"
              :src="`/webinar/${isCameraOff ? 'videooff' : 'video'}.svg`"
              class="mx-auto cursor-pointer"
            />
          </div>

          <div class="flex w-1/3"></div>
        </div>
        <!-- <div id="players" class="players flex">
        
        </div> -->
      </div>

      <div class="col-span-full lg:col-span-3 xl:col-span-3">
        <div
          class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300 overflow-hidden"
          style="height: auto"
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
            <div
              class="pt-5"
              :class="{ ' border border-gray-300': !isPrivateChat }"
            >
              <toggle-switch
                v-model="isPrivateChat"
                active="Public chat"
                inactive="Private messages"
                class="mb-6"
              />
            </div>
            <div v-if="isPrivateChat">
              <div class="flex flex-row px-5 justify-between items-center">
                <div class="flex flex-row cursor-pointer">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19L6 10L15 1"
                      stroke="#8A8A8A"
                      stroke-width="1.5"
                    />
                  </svg>
                  Back
                </div>
                <search-box placeholder="Search people" :small="true" />
              </div>
              <div class="chat-list py-5">
                <div
                  class="flex flex-row mx-10 my-5 justify-between items-center"
                >
                  <div class="flex flex-row">
                    <img src="/avatar.jpg" class="rounded-lg w-10 h-10 mr-3" />
                    <div class="flex-grow my-auto">
                      <p class="text-xs text-gray-700 font-bold">Amina Bello</p>
                      <p class="text-xs leading-tight text-gray-600">
                        Hello good afternoon I was wondering if you are .....
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-orange-500 h-5 w-5 rounded-full flex justify-center"
                  >
                    <p class="text-xs text-center text-white">1</p>
                  </div>
                </div>
                <div
                  class="flex flex-row mx-10 my-5 justify-between items-center"
                >
                  <div class="flex flex-row">
                    <img src="/avatar.jpg" class="rounded-lg w-10 h-10 mr-3" />
                    <div class="flex-grow my-auto">
                      <p class="text-xs text-gray-700 font-bold">Amina Bello</p>
                      <p class="text-xs leading-tight text-gray-600">
                        Hello good afternoon I was wondering if you are .....
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-orange-500 h-5 w-6 rounded-full flex justify-center align-middle"
                  >
                    <p class="text-xs text-center text-white">1</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <chat-messages
                no-card
                :sendMessage="sendMessage"
                :messages="messages"
              />
            </div>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import { WebRTCAdaptor } from '~/utils/webrtc_adaptor/js/webrtc_adaptor'
import { getAccessTokenHeader } from '~/utils'

export default {
  layout: 'webinar',
  middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    startState: null,
    endMsg: 'Meeting Ended',
    isHost: false,
    maxVideoBitrateKbps: 'unlimited',
    subscriberId: '123', // getUrlParameter("subscriberId"),
    subscriberCode: '123sdef', // getUrlParameter("subscriberCode"),
    stream: null,
    roomName: null,
    isStreaming: false,
    devices: [],
    devicesOpt: {
      mic: null,
      carmera: null,
      audio: null,
    },
    tab: 0,
    tabs: ['Chat', 'People', 'Poll', 'Resources'],
    isMute: true,
    isCameraOff: true,
    roomTimerId: -1,
    isDataChannelOpen: false,
    streamsList: [],
    // roomOfStream: [],
    playStart: false,
    webRTCAdaptor: null,
    autoRepublishIntervalJob: null,
    autoRepublishEnabled: true,

    //Chats
    connection: null,
    inputMessage: null,
    messages: [],
    isPrivateChat: false,
  }),
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      streamId: (state) => String(state.auth.user.userId),
    }),
  },
  created: function () {
    console.log('Starting connection to WebSocket Server')
    if (process.client) {
      this.connection = new WebSocket(
        `wss://74671b6522bf.ngrok.io/ws/public-chats/?token=${this.token}&webinar_id=25216`
      )

      this.connection.onmessage = (event) => {
        this.messages.push(JSON.parse(event.data))
        // console.log(JSON.parse(event.data))
      }

      this.connection.onopen = function (event) {
        console.log(event.data)
        console.log('Successfully connected to the echo websocket server...')
      }
    }
  },
  methods: {
    // Chat Start

    sendMessage(message) {
      // console.log('Hello')
      // console.log(this.connection)
      this.connection.send(message)
    },

    // Chat End

    confirm(state) {
      if (state === 'begin_test') this.startState = 'mic_carmera_test'

      if (state === 'mic_carmera_test') this.startState = 'speaker_test'

      if (state === 'speaker_test') {
        this.startState = 'done'
      }
      if (state === 'closed') this.$router.push(`/`)
    },

    startPublishing() {
      this.webRTCAdaptor.publish(
        this.streamId,
        this.token,
        this.subscriberId,
        this.subscriberCode
      )
    },

    stopPublishing() {
      console.log(
        'clearInterval -> autoRepublishIntervalJob: ',
        this.autoRepublishIntervalJob
      )
      if (this.autoRepublishIntervalJob != null) {
        clearInterval(this.autoRepublishIntervalJob)
        this.autoRepublishIntervalJob = null
      }

      this.webRTCAdaptor.stop(this.streamId)
      this.webRTCAdaptor.leaveFromRoom(this.roomName)
      this.webRTCAdaptor.closePeerConnection(this.streamId)

      // this.webRTCAdaptor.leave(this.streamId)
      // this.webRTCAdaptor.closeStream()
    },

    toogleAudio() {
      console.log('toogleAudio: ', this.streamsList)
      if (this.isMute) {
        this.webRTCAdaptor.unmuteLocalMic()
        this.sendNotificationEvent('MIC_UNMUTED')
      } else {
        this.webRTCAdaptor.muteLocalMic()
        this.sendNotificationEvent('MIC_MUTED')
      }
      this.isMute = !this.isMute
    },

    toogleVideo() {
      if (this.isCameraOff) {
        this.webRTCAdaptor.turnOnLocalCamera()
        this.sendNotificationEvent('CAM_TURNED_ON')
      } else {
        this.webRTCAdaptor.turnOffLocalCamera()
        this.sendNotificationEvent('CAM_TURNED_OFF')
      }
      this.isCameraOff = !this.isCameraOff
    },

    switchVideoMode(value) {
      if (value == 'screen') {
        //this.webRTCAdaptor.switchDesktopWithMicAudio(this.streamId);
        this.webRTCAdaptor.switchDesktopCapture(this.streamId)
      } else if (value == 'screenwithcamera') {
        this.webRTCAdaptor.switchDesktopCaptureWithCamera(this.streamId)
      } else {
        this.webRTCAdaptor.switchVideoCameraCapture(this.streamId, value)
      }
    },

    switchAudioMode(value) {
      this.webRTCAdaptor.switchAudioInputSource(this.streamId, value)
    },
    sendNotificationEvent(eventType) {
      if (this.isDataChannelOpen) {
        const notEvent = { streamId: this.streamId, eventType: eventType }

        this.webRTCAdaptor.sendData(this.streamId, JSON.stringify(notEvent))
      } else {
        console.log(
          'Could not send the notification because data channel is not open.'
        )
      }
    },
  },
  watch: {
    async startState(value) {
      console.log('startState: ', value)
      // await this.$nextTick()
      const link = `meeting/${this.roomName}`
      const copyLink = `${location.origin}/${link}`
      if (value === 'done' && this.isHost) {
        this.$store.commit('app/MEETING_CREATE_MODAL', {
          title: 'Your meeting is ready',
          text: `You can share this meeting link with others you want in the meeting.`,
          copyLink,
        })
      }
    },
    async isStreaming(value) {
      await this.$nextTick()
      console.log('isStreaming: ', value)
    },
  },
  async beforeUnmount() {
    this.stopPublishing()
  },
  async mounted() {
    // this.streamId = String(this.$store.getters['auth/user'].userId)
    this.roomName = this.$route.params.slug
    // this.$store.getters["auth/user"]

    console.log('streamId: ', this.streamId)
    console.log('$route: ', this.$route.params.slug)

    try {
      const { data: newData, message } = await this.$axios.$get(
        `https://streaming.staging.klasroom.com/v1/meetings/${this.roomName}/join`,
        {
          headers: getAccessTokenHeader(this.token),
        }
      )
      console.log('newData: ', newData, message)

      if (this.streamId === newData.hostId) {
        this.isHost = true
        this.playStart = true
        this.isCameraOff = false
        this.isMute = false
      }
    } catch (e) {
      this.isStreaming = false
      this.endMsg = 'Could not connect to meeting'
      // this.startState = 'closed'
      console.log(e)
      return
    }

    // function confirm(state) {
    //   if (state === 'mic_carmera_test')
    //     this.startState = 'speaker_test'

    //   if (state === 'speaker_test')
    //     this.startState = 'done'
    // }

    let devices = []

    /**
     * If publishing stops for any reason, it tries to republish again.
     */
    /**
     * Timer job that checks the WebRTC connection
     */
    const checkAndRepublishIfRequired = () => {
      const iceState = this.webRTCAdaptor.iceConnectionState(this.streamId)
      console.log('Ice state checked = ' + iceState)

      if (
        iceState == null ||
        iceState == 'failed' ||
        iceState == 'disconnected'
      ) {
        this.webRTCAdaptor.stop(this.streamId)
        this.webRTCAdaptor.closePeerConnection(this.streamId)
        this.webRTCAdaptor.closeWebSocket()
        initWebRTCAdaptor(true, this.autoRepublishEnabled)
      }
    }

    const joinRoom = () => {
      this.webRTCAdaptor.joinRoom(this.roomName, this.streamId)
    }

    const playVideo = (obj) => {
      // const room = this.roomOfStream[obj.streamId]
      console.log(
        'new stream available with id: ' +
          obj.streamId +
          ' on the room: ' +
          this.roomName
      )

      let video = document.getElementById('remoteVideo' + obj.streamId)

      if (video == null) {
        createRemoteVideo(obj.streamId)
        video = document.getElementById('remoteVideo' + obj.streamId)
      }

      video.srcObject = obj.stream
    }

    const createRemoteVideo = (streamId) => {
      const player =
        '<video id="remoteVideo' + streamId + '"autoplay playsinline></video>'
      document.getElementById('players').innerHTML += player
    }

    const removeRemoteVideo = (streamId) => {
      const video = document.getElementById('remoteVideo' + streamId)
      if (video != null) {
        video.srcObject = null
        document.getElementById('players').removeChild(video)
      }
      this.webRTCAdaptor.stop(streamId)
    }

    const streamInformation = (obj) => {
      this.webRTCAdaptor.play(obj.streamId, this.token, this.roomName)
    }

    const startAnimation = () => {
      setTimeout(() => {
        const state = this.webRTCAdaptor.signallingState(this.streamId)
        if (state != null && state != 'closed') {
          const iceState = this.webRTCAdaptor.iceConnectionState(this.streamId)
          if (
            iceState != null &&
            iceState != 'failed' &&
            iceState != 'disconnected'
          ) {
            startAnimation()
          }
        }
      }, 3000)
    }

    const handleNotificationEvent = (obj) => {
      console.log(
        '+++ Data received: ' +
          obj.event.data +
          ' type: ' +
          obj.event.type +
          ' for stream: ' +
          obj.streamId
      )
      const notificationEvent = JSON.parse(obj.event.data)
      if (notificationEvent != null && typeof notificationEvent == 'object') {
        const eventStreamId = notificationEvent.streamId
        const eventTyp = notificationEvent.eventType

        if (eventTyp == 'CAM_TURNED_OFF') {
          console.log('Camera turned off for : ', eventStreamId)
        } else if (eventTyp == 'CAM_TURNED_ON') {
          console.log('Camera turned on for : ', eventStreamId)
        } else if (eventTyp == 'MIC_MUTED') {
          console.log('Microphone muted for : ', eventStreamId)
        } else if (eventTyp == 'MIC_UNMUTED') {
          console.log('Microphone unmuted for : ', eventStreamId)
        }
      }
    }

    const publish = (streamName, token) => {
      // publishStreamId = streamName;
      this.webRTCAdaptor.publish(streamName, token)
    }

    const pc_config = {
      iceServers: [
        {
          urls: 'stun:stun1.l.google.com:19302',
        },
      ],
    }

    const sdpConstraints = {
      OfferToReceiveAudio: false,
      OfferToReceiveVideo: false,
    }
    const mediaConstraints = {
      video: true,
      audio: true,
    }

    const rtmpForward =
      'rtmp://klasroom-RTMPLoad-1FSGS5HI2J4RX-1215248151.us-west-2.elb.amazonaws.com/WebRTCAppEE/'
    // const websocketPath = `media.klasroom.com/klasroomLive/websocket/${this.roomName}/${this.streamId}`
    const websocketPath = `klasr-appli-tmxddztxzehf-460579020.us-west-2.elb.amazonaws.com/klasroomLive/websocket`

    const appName = location.pathname.substring(
      0,
      location.pathname.lastIndexOf('/') + 1
    )
    const path =
      location.hostname +
      ':' +
      location.port +
      appName +
      'websocket?rtmpForward=' +
      rtmpForward
    let websocketURL = 'ws://' + websocketPath

    if (location.protocol.startsWith('https')) {
      websocketURL = 'wss://' + websocketPath
    }

    const initWebRTCAdaptor = (publishImmediately, autoRepublishEnabled) => {
      this.webRTCAdaptor = new WebRTCAdaptor({
        websocket_url: websocketURL,
        mediaConstraints: mediaConstraints,
        peerconnection_config: pc_config,
        sdp_constraints: sdpConstraints,
        localVideoId: 'localVideo',
        isPlayMode: false,
        debug: true,
        bandwidth: this.maxVideoBitrateKbps,
        callback: (info, obj) => {
          if (info == 'initialized') {
            console.log('initialized: ', obj)
            this.startState = 'begin_test'
            // start_publish_button.disabled = false;
            // stop_publish_button.disabled = true;
            if (!this.playStart) {
              this.webRTCAdaptor.muteLocalMic()
              this.webRTCAdaptor.turnOffLocalCamera()
            }
            if (publishImmediately) {
              // this.webRTCAdaptor.publish(this.streamId, this.token)
              joinRoom()
            } else {
              joinRoom()
            }
          } else if (info == 'joinedTheRoom') {
            const room = obj.ATTR_ROOM_NAME
            // this.roomOfStream[obj.streamId] = room
            console.log('++++ joinedTheRoom: ' + room)
            console.log(obj)

            if (
              obj.streamId === String(this.$store.getters['auth/user'].userId)
            ) {
              this.confirm('begin_test')
            }

            // console.log('+++ roomOfStream: ', this.roomOfStream)

            // publishStreamId = obj.streamId
            publish(obj.streamId, this.token)

            // if(this.playStart) {

            //   this.isCameraOff = false;
            //   publish(obj.streamId, this.token);
            // }
            // else {
            //   this.isCameraOff = true;
            // }

            if (obj.streams != null) {
              obj.streams.forEach((item) => {
                console.log('Stream joined with ID: ' + item)
                this.webRTCAdaptor.play(item, this.token, this.roomName)
              })
              this.streamsList = obj.streams
            }
            this.roomTimerId = setInterval(() => {
              this.webRTCAdaptor.getRoomInfo(this.roomName, this.streamId)
            }, 5000)
          } else if (info == 'newStreamAvailable') {
            console.log('++++ newStreamAvailable' + obj)
            playVideo(obj)
          } else if (info == 'bitrateMeasurement') {
            console.log('++++ bitrateMeasurement: ', obj)
          } else if (info == 'available_devices') {
            devices = obj.map((d) => {
              // console.log("found device", d)
              return {
                kind: d?.kind?.toLowerCase() || '?',
                deviceId: d?.deviceId,
                label: d.label || 'Unknown name',
              }
            })

            this.devicesOpt.mic = devices.filter(
              (i) => i.kind === 'audioinput' && i.deviceId !== 'default'
            )[0]
            this.devicesOpt.audio = devices.filter(
              (i) => i.kind === 'audiooutput' && i.deviceId !== 'default'
            )[0]
            this.devicesOpt.carmera = devices.filter(
              (i) => i.kind === 'videoinput'
            )[0]
            // document.querySelector('video#localVideoTest').srcObject = stream;
          } else if (info == 'publish_started') {
            //stream is being published
            this.isStreaming = true
            console.log('publish started: ')
            if (
              obj.streamId === String(this.$store.getters['auth/user'].userId)
            ) {
              this.confirm('begin_test')
            }

            startAnimation()
            if (autoRepublishEnabled && this.autoRepublishIntervalJob == null) {
              this.autoRepublishIntervalJob = setInterval(() => {
                checkAndRepublishIfRequired()
              }, 3000)
            }
            this.webRTCAdaptor.enableStats(obj.streamId)
            // enableAudioLevel();
          } else if (info == 'leavedFromRoom') {
            const room = obj.ATTR_ROOM_NAME
            console.debug('leaved from the room:' + room)
            if (this.roomTimerId != null) {
              clearInterval(this.roomTimerId)
            }

            if (this.streamsList != null) {
              this.streamsList.forEach(function (item) {
                removeRemoteVideo(item)
              })
            }
            // we need to reset streams list
            this.streamsList = new Array()
          } else if (info == 'play_finished') {
            console.log('+++ play_finished')
            removeRemoteVideo(obj.streamId)
          } else if (info == 'streamInformation') {
            console.log('+++ streamInformation')
            streamInformation(obj)
          } else if (info == 'roomInformation') {
            console.log('+++ roomInformation')
            console.log('+++ streamsList: ', this.streamsList)
            console.log('+++ obj: ', obj)
            console.log('+++ obj.streams: ', obj.streams)

            // this.webRTCAdaptor.play(this.streamId, this.token, this.roomName)

            //Checks if any new stream has added, if yes, plays.
            for (let str of obj.streams) {
              if (!this.streamsList.includes(str)) {
                this.webRTCAdaptor.play(str, this.token, this.roomName)
              }
            }
            // Checks if any stream has been removed, if yes, removes the view and stops webrtc connection.
            for (let str of this.streamsList) {
              if (!obj.streams.includes(str)) {
                removeRemoteVideo(str)
              }
            }
            //Lastly updates the current streamlist with the fetched one.
            this.streamsList = obj.streams
          } else if (info == 'data_channel_opened') {
            console.log('+++ Data Channel open for stream id', obj)
            this.isDataChannelOpen = true
          } else if (info == 'data_channel_closed') {
            console.log('+++ Data Channel closed for stream id', obj)
            this.isDataChannelOpen = false
          } else if (info == 'data_received') {
            console.log('+++ Data obj received: ', obj)
            handleNotificationEvent(obj)
          } else if (info == 'publish_finished') {
            //stream is being finished
            console.log('publish finished')
            this.isStreaming = false
            // ANCHOR uncomment line in bottom
            this.startState = 'closed'
          } else if (info == 'browser_screen_share_supported') {
            console.log('browser screen share supported')
          } else if (info == 'screen_share_stopped') {
            console.log('screen share stopped')
          } else if (info == 'closed') {
            console.log('Connection closed')
            this.isStreaming = false
            if (typeof obj != 'undefined') {
              console.log('Connecton closed: ' + JSON.stringify(obj))
            }
          } else if (info == 'pong') {
            //ping/pong message are sent to and received from server to make the connection alive all the time
            //It's especially useful when load balancer or firewalls close the websocket connection due to inactivity
          } else if (info == 'refreshConnestreamsListction') {
            console.log('refreshConnestreamsListction')
            checkAndRepublishIfRequired()
          } else if (info == 'ice_connection_state_changed') {
            console.log('iceConnectionState Changed: ', JSON.stringify(obj))
          } else if (info == 'updated_stats') {
            //obj is the PeerStats which has fields
            //averageOutgoingBitrate - kbits/sec
            //currentOutgoingBitrate - kbits/sec
            // console.log("Average outgoing bitrate " + obj.averageOutgoingBitrate + " kbits/sec"
            //     + " Current outgoing bitrate: " + obj.currentOutgoingBitrate + " kbits/sec"
            //     + " video source width: " + obj.resWidth + " video source height: " + obj.resHeight
            //     + "frame width: " + obj.frameWidth + " frame height: " + obj.frameHeight
            //     + " video packetLost: "  + obj.videoPacketsLost + " audio packetsLost: " + obj.audioPacketsLost
            //     + " video RTT: " + obj.videoRoundTripTime + " audio RTT: " + obj.audioRoundTripTime
            //     + " video jitter: " + obj.videoJitter + " audio jitter: " + obj.audioJitter);
          } else {
            console.log('*** ' + info + ' notification received')
          }
        },
        callbackError: function (error, message) {
          //some of the possible errors, NotFoundError, SecurityError,PermissionDeniedError

          if (
            error.indexOf('publishTimeoutError') != -1 &&
            this.roomTimerId != null
          ) {
            clearInterval(this.roomTimerId)
          }

          console.log('error callback: ' + JSON.stringify(error))
          var errorMessage = JSON.stringify(error)
          if (typeof message != 'undefined') {
            errorMessage = message
          }
          var errorMessage = JSON.stringify(error)
          if (error.indexOf('NotFoundError') != -1) {
            errorMessage =
              'Camera or Mic are not found or not allowed in your device'
          } else if (
            error.indexOf('NotReadableError') != -1 ||
            error.indexOf('TrackStartError') != -1
          ) {
            errorMessage =
              'Camera or Mic is being used by some other process that does not let read the devices'
          } else if (
            error.indexOf('OverconstrainedError') != -1 ||
            error.indexOf('ConstraintNotSatisfiedError') != -1
          ) {
            errorMessage =
              'There is no device found that fits your video and audio constraints. You may change video and audio constraints'
          } else if (
            error.indexOf('NotAllowedError') != -1 ||
            error.indexOf('PermissionDeniedError') != -1
          ) {
            errorMessage = null //'You are not allowed to access camera and mic.'
          } else if (error.indexOf('TypeError') != -1) {
            errorMessage = 'Video/Audio is required'
          } else if (error.indexOf('getUserMediaIsNotAllowed') != -1) {
            errorMessage =
              'You are not allowed to reach devices from an insecure origin, please enable ssl'
          } else if (error.indexOf('ScreenSharePermissionDenied') != -1) {
            errorMessage = 'You are not allowed to access screen share'
          } else if (error.indexOf('WebSocketNotConnected') != -1) {
            errorMessage = null // 'WebSocket Connection is disconnected.'
          } else if (error.indexOf('streamIdInUse') != -1) {
            errorMessage = null // 'WebSocket Connection is disconnected.'
          }
          // alert(errorMessage);
          if (errorMessage)
            Swal.fire({
              position: 'top-end',
              width: '350px',
              text: errorMessage,
              backdrop: false,
              allowOutsideClick: false,
              showConfirmButton: false,
              showCloseButton: true,
              timer: 3000,
            })
        },
      })
    }
    //initialize the WebRTCAdaptor
    initWebRTCAdaptor(true, this.autoRepublishEnabled)
  },
}
</script>

<style>
.chat-list {
  height: calc(100vh - 16.5rem);
}

.main-video {
  padding: 10px;
  height: calc(100vh - 180px);
  width: 100%;
  position: relative;
}
.main-video > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid #cccccc;
}

.players {
  /* border: 1px outset #000000; */
  width: 100%;
  height: 20vh;
  padding: 0 10px 10px 10px;
}

.players > video {
  width: 260px;
  height: 100%;
  object-fit: cover;
  border: 5px outset #000000;
}

.player-control {
  width: calc(100% - 20px);
  height: 100px;
  margin: 0 auto;
  bottom: 10px;
  border: 1px solid #cccccc;
  z-index: 1;
}

.main-video:hover .player-control {
  opacity: 1;
  z-index: 1;
}
</style>
