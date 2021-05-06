<template>
  <div class="bg-orange-100" style="height: calc(100vh - 80px)">
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
      v-else-if="startState === 'speaker_test'"
      startState="speaker_test"
      confirmText="Continue to webinar"
      :confirm="confirm"
      title="Testing your speaker"
      :devices="devices"
      :devicesOpt="devicesOpt"
    />
    <!-- content -->
    <div class="grid grid-cols-12">
      <div class="video-player col-span-full lg:col-span-9 xl:col-span-9 flex flex-col justify-between">
        <video ref="localVideo" id="localVideo" autoplay muted playsinline class="mx-auto max-h-full"></video>
        <div class="player-control bg-white flex p-10">
          <div class="flex w-1/3">
            <img src="/webinar/record.svg" class="mr-2 cursor-pointer" />
            <img @click="() => switchVideoMode('screenwithcamera')" src="/webinar/sharescreen.svg" class="cursor-pointer" />
          </div>

          <div class="flex  w-1/3">
            <img @click="toogleAudio" :src="`/webinar/${isMute ? 'mute' : 'unmute'}.svg`" class="mx-auto cursor-pointer" />
            <button
              type="button"
              class="btn btn-primary shadow"
              @click.prevent="() => console.log('start sreaming')"
            >
              {{isStreaming ? 'End Sream' : 'Start Sream'}}
            </button>
            <img @click="toogleVideo" :src="`/webinar/${videoOn ? 'video' : 'videooff'}.svg`" class="mx-auto cursor-pointer" />
          </div>

          <div class="flex w-1/3">
            
          </div>
        </div>
      </div>

      <div class="col-span-full lg:col-span-3 xl:col-span-3">
        <div
          class="flex flex-col flex-1 bg-white rounded-xl border border-gray-300 min-h-full"
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
  </div>
</template>

<script>
import Vue from 'vue'
// import adaptor from 'webrtc-adapter'
import {WebRTCAdaptor} from '~/assets/js/webrtc_adaptor'
import { getDevices, getUserMedia } from '~/logic/stream'
const isProduction = process.env.NODE_ENV === 'production'
let webRTCAdaptor = null;

// console.log(adaptor.browserDetails.browser)

export default {
  layout: 'webinar',
  // middleware: ['check-auth', 'auth'],
  fetch({ store }) {
    store.commit('app/SET_DARK_MENU', true)
  },
  data: () => ({
    startState: 'mic_carmera_test',
    streamId: null,
    token: 'dgsgduywtghduygjhegfdgf', // getUrlParameter("token"),
    maxVideoBitrateKbps: 900,
	  subscriberId: '123', // getUrlParameter("subscriberId"),
	  subscriberCode: '123sdef', // getUrlParameter("subscriberCode"),
    stream: null,
    isStreaming: false,
    devices: [],
    devicesOpt: {
      mic: null,
      carmera: null,
      audio: null
    },
    tab: 0,
    tabs: ['Chat', 'People', 'Poll', 'Resources'],
    isMute: true,
    videoOn: true,
    // streams: {
    //   rtmp: '',
    //   hls: ''
    // },
    // playerOptions: {
    //   overNative: true,
    //   autoplay: false,
    //   controls: true,
    //   techOrder: ['flash', 'html5'],
    //   sourceOrder: true,
    //   flash: {
    //     hls: { withCredentials: false },
    //     swf: isProduction ? '/vue-videojs-demo/static/media/video-js.swf' : '/static/media/video-js.swf'
    //   },
    //   html5: { hls: { withCredentials: false } },
    //   sources: [
    //     {
    //       type: 'rtmp/mp4',
    //       src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
    //     },
    //     {
    //       withCredentials: false,
    //       type: 'application/x-mpegURL',
    //       src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
    //     }
    //   ],
    //   poster: isProduction ? '/vue-videojs-demo/static/images/logo.png' : '/static/images/logo.png'
    //   // controlBar: {
    //   //   timeDivider: false, // 时间分割线
    //   //   durationDisplay: false, // 总时间
    //   //   progressControl: true, // 进度条
    //   //   customControlSpacer: true, // 未知
    //   //   fullscreenToggle: true // 全屏
    //   // },
    // },
    // showCode: false,
    // showPlayButton: false,
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
      
      if (state === 'speaker_test') {
        this.startState = 'done'
      }
    },

    startPublishing() {
      this.streamId = 'stream1' // streamNameBox.value;
      webRTCAdaptor.publish(this.streamId, this.token, this.subscriberId, this.subscriberCode);
    },

    stopPublishing() {
      if (autoRepublishIntervalJob != null) {
        clearInterval(autoRepublishIntervalJob);
        autoRepublishIntervalJob = null;
      }
      webRTCAdaptor.stop(this.streamId);
    },

    toogleAudio() {
      if (this.isMute) webRTCAdaptor.unmuteLocalMic()
      else webRTCAdaptor.muteLocalMic()
      this.isMute = !this.isMute
    },

    toogleVideo() {
      if (this.videoOn) webRTCAdaptor.turnOffLocalCamera()
      else webRTCAdaptor.turnOnLocalCamera()
      this.videoOn = !this.videoOn
    },

    switchVideoMode(value) {
      if(value == "screen") {
        //webRTCAdaptor.switchDesktopWithMicAudio(this.streamId);
        webRTCAdaptor.switchDesktopCapture(this.streamId);
      }
      else if(value == "screenwithcamera"){
        webRTCAdaptor.switchDesktopCaptureWithCamera(this.streamId);
      }
      else {
        webRTCAdaptor.switchVideoCameraCapture(this.streamId, value);
      }
    },

    switchAudioMode(value) {
      webRTCAdaptor.switchAudioInputSource(this.streamId, value);
    },
    // startAnimation() {

    //   var state = webRTCAdaptor.signallingState(this.streamId);
    //   if (state != null && state != "closed") {
    //     var iceState = webRTCAdaptor.iceConnectionState(this.streamId);
    //     if (iceState != null && iceState != "failed" && iceState != "disconnected") {
    //         startAnimation();
    //     }
    //   }
    // },

  },
  watch: {
    async startState(value) {
      await this.$nextTick()
      if (value === 'done') {

        const video = this.$refs.localVideo
        // video.srcObject = this.stream;
      }
      // this.doConnectStream(value)
    },
  },
  async mounted() {

    // function confirm(state) {
    //   if (state === 'mic_carmera_test')
    //     this.startState = 'speaker_test'
      
    //   if (state === 'speaker_test')
    //     this.startState = 'done'
    // }
    let devices = [];

    /**
   * If publishing stops for any reason, it tries to republish again.
   */
    const autoRepublishEnabled = true;
    /**
     * Timer job that checks the WebRTC connection 
     */
    let autoRepublishIntervalJob = null;

    const checkAndRepublishIfRequired = () => {
      const iceState = webRTCAdaptor.iceConnectionState(this.streamId);
      console.log("Ice state checked = " + iceState);

        if (iceState == null || iceState == "failed" || iceState == "disconnected"){
          webRTCAdaptor.stop(this.streamId);
          webRTCAdaptor.closePeerConnection(this.streamId);
          webRTCAdaptor.closeWebSocket();
          initWebRTCAdaptor(true, autoRepublishEnabled);
        }	
    }

    const startAnimation = () => {

      const state = webRTCAdaptor.signallingState(this.streamId);
      if (state != null && state != "closed") {
        const iceState = webRTCAdaptor.iceConnectionState(this.streamId);
        if (iceState != null && iceState != "failed" && iceState != "disconnected") {
            startAnimation();
        }
      }
      }

    // let { stream, error } = await getUserMedia()
    // if (stream) {
    //   // Safari getDevices only works immediately after getUserMedia (bug)
    //   devices = ((await getDevices()) || []).map((d) => {
    //     console.log("found device", d)
    //     return {
    //       kind: d?.kind?.toLowerCase() || "?",
    //       deviceId: d?.deviceId,
    //       label: d.label || "Unknown name",
    //     }
    //   })
    //   document.querySelector('video#localVideoTest').srcObject = stream;
    //   // document.querySelector('video#localVideo').srcObject = stream;
    //   // adapter.attachMediaStream(localVideo, stream);
    // } else {
    //   console.error("Media error", error)
    // }

    // this.stream = stream;
    // this.devices = devices;
    // this.devicesOpt.mic = devices.filter(i => i.kind === 'audioinput' && i.deviceId !== 'default')[0]
    // this.devicesOpt.audio = devices.filter(i => i.kind === 'audiooutput' && i.deviceId !== 'default')[0]
    // this.devicesOpt.carmera = devices.filter(i => i.kind === 'videoinput')[0]

      const pc_config = {
        'iceServers' : [ {
          'urls' : 'stun:stun1.l.google.com:19302'
        } ]
      };

      const sdpConstraints = {
        OfferToReceiveAudio : false,
        OfferToReceiveVideo : false

      };
      const mediaConstraints = {
        video : true,
        audio : true
      };

      const rtmpForward = 'rtmp://klasroom-RTMPLoad-1FSGS5HI2J4RX-1215248151.us-west-2.elb.amazonaws.com/WebRTCAppEE/'

      const appName = location.pathname.substring(0, location.pathname.lastIndexOf("/")+1);
      const path =  location.hostname + ":" + location.port + appName + "websocket?rtmpForward=" + rtmpForward;
      let websocketURL =  "ws://" + path;
      
      if (location.protocol.startsWith("https")) {
        websocketURL = "wss://" + path;
      }

      const initWebRTCAdaptor = (publishImmediately, autoRepublishEnabled) => {
        webRTCAdaptor = new WebRTCAdaptor({
          websocket_url : websocketURL,
          mediaConstraints : mediaConstraints,
          peerconnection_config : pc_config,
          sdp_constraints : sdpConstraints,
          localVideoId : "localVideo",
          debug: true,
          bandwidth: this.maxVideoBitrateKbps,
          callback : (info, obj) => {
            if (info == "initialized") {
              console.log("initialized: ", obj);
              // start_publish_button.disabled = false;
              // stop_publish_button.disabled = true;
              if (publishImmediately) {
                webRTCAdaptor.publish(this.streamId, this.token)
              }
              
              
            } else if (info == "publish_started") {
              //stream is being published
              console.log("publish started: ", obj);
              // start_publish_button.disabled = true;
              // stop_publish_button.disabled = false;
              startAnimation();
              if (autoRepublishEnabled && autoRepublishIntervalJob == null) 
              {
                autoRepublishIntervalJob = setInterval(() => {
                  checkAndRepublishIfRequired();
                }, 3000);
              }
              webRTCAdaptor.enableStats(obj.streamId);
              enableAudioLevel();
            } else if (info == "publish_finished") {
              //stream is being finished
              console.log("publish finished");
              // start_publish_button.disabled = false;
              // stop_publish_button.disabled = true;
            }
            else if (info == "browser_screen_share_supported") {
              // $(".video-source").prop("disabled", false);
              
              console.log("browser screen share supported");
              // browser_screen_share_doesnt_support.style.display = "none";
            }
            else if (info == "screen_share_stopped") {
              //choose the first video source. It may not be correct for all cases. 
              // $(".video-source").first().prop("checked", true);	
              // console.log("screen share stopped");
            }
            else if (info == "closed") {
              //console.log("Connection closed");
              if (typeof obj != "undefined") {
                console.log("Connecton closed: " + JSON.stringify(obj));
              }
            }
            else if (info == "pong") {
              //ping/pong message are sent to and received from server to make the connection alive all the time
              //It's especially useful when load balancer or firewalls close the websocket connection due to inactivity
            }
            else if (info == "refreshConnection") {
              checkAndRepublishIfRequired();
            }
            else if (info == "ice_connection_state_changed") {
              console.log("iceConnectionState Changed: ",JSON.stringify(obj));
            }
            else if (info == "updated_stats") {
              //obj is the PeerStats which has fields
              //averageOutgoingBitrate - kbits/sec
              //currentOutgoingBitrate - kbits/sec
              console.log("Average outgoing bitrate " + obj.averageOutgoingBitrate + " kbits/sec"
                  + " Current outgoing bitrate: " + obj.currentOutgoingBitrate + " kbits/sec"
                  + " video source width: " + obj.resWidth + " video source height: " + obj.resHeight
                  + "frame width: " + obj.frameWidth + " frame height: " + obj.frameHeight
                  + " video packetLost: "  + obj.videoPacketsLost + " audio packetsLost: " + obj.audioPacketsLost
                  + " video RTT: " + obj.videoRoundTripTime + " audio RTT: " + obj.audioRoundTripTime 
                  + " video jitter: " + obj.videoJitter + " audio jitter: " + obj.audioJitter);

                  
              // $("#average_bit_rate").text(obj.averageOutgoingBitrate);
              // if (obj.averageOutgoingBitrate > 0)  {
              //   $("#average_bit_rate_container").show();
              // }
              // else {
              //   $("#average_bit_rate_container").hide();
              // }

              // $("#latest_bit_rate").text(obj.currentOutgoingBitrate);
              // if (obj.currentOutgoingBitrate > 0) {
              //   $("#latest_bit_rate_container").show();
              // }
              // else {
              //   $("#latest_bit_rate_container").hide();
              // }
              // var packetLost = parseInt(obj.videoPacketsLost) + parseInt(obj.audioPacketsLost);	
              
              // $("#packet_lost_text").text(packetLost);
              // if (packetLost > -1) {
              //   $("#packet_lost_container").show();
              // }
              // else {
              //   $("#packet_lost_container").hide();
              // }
              // var jitter = ((parseFloat(obj.videoJitter) + parseInt(obj.audioJitter)) / 2).toPrecision(3);
              // $("#jitter_text").text(jitter);
              // if (jitter > 0) {
              //   $("#jitter_container").show();
              // }
              // else {
              //   $("#jitter_container").hide();
              // }
            
              // var rtt = ((parseFloat(obj.videoRoundTripTime) + parseFloat(obj.audioRoundTripTime)) / 2).toPrecision(3);
              // $("#round_trip_time").text(rtt);
              // if (rtt > 0) {
              //   $("#round_trip_time_container").show();
              // }
              // else {
              //   $("#round_trip_time_container").hide();
              // }
              
              // $("#source_width").text(obj.resWidth);
              // $("#source_height").text(obj.resHeight);
              // if (obj.resWidth > 0 && obj.resHeight > 0) {
              //   $("#source_resolution_container").show();
              // }
              // else {
              //   $("#source_resolution_container").hide();
              // }

              // $("#ongoing_width").text(obj.frameWidth);
              // $("#ongoing_height").text(obj.frameHeight);	
              // if (obj.frameWidth > 0 && obj.frameHeight > 0) {
              //   $("#ongoing_resolution_container").show();
              // }
              // else {
              //   $("#ongoing_resolution_container").hide();
              // }
              
              // $("#on_going_fps").text(obj.currentFPS);
              // if (obj.currentFPS > 0) {
              //   $("#on_going_fps_container").show();
              // }
              // else {
              //   $("#on_going_fps_container").hide();
              // }

              // $("#stats_panel").show();
    
            }
            else if (info == "data_received") {
              console.log("Data received: " + obj.event.data + " type: " + obj.event.type + " for stream: " + obj.streamId);
              // $("#dataMessagesTextarea").append("Received: " + obj.event.data + "\r\n");
            }
            else if (info == "available_devices") {
              devices = obj.map((d) => {
                // console.log("found device", d)
                return {
                  kind: d?.kind?.toLowerCase() || "?",
                  deviceId: d?.deviceId,
                  label: d.label || "Unknown name",
                }
              })

              this.devicesOpt.mic = devices.filter(i => i.kind === 'audioinput' && i.deviceId !== 'default')[0]
              this.devicesOpt.audio = devices.filter(i => i.kind === 'audiooutput' && i.deviceId !== 'default')[0]
              this.devicesOpt.carmera = devices.filter(i => i.kind === 'videoinput')[0]
              // document.querySelector('video#localVideoTest').srcObject = stream;
              console.log('localVideo: ', webRTCAdaptor.localVideo)
            }
            else {
              console.log( info + " notification received");
            }
          },
          callbackError : function(error, message) {
            //some of the possible errors, NotFoundError, SecurityError,PermissionDeniedError
    
            console.log("error callback: " +  JSON.stringify(error));
            var errorMessage = JSON.stringify(error);
            if (typeof message != "undefined") {
              errorMessage = message;
            }
            var errorMessage = JSON.stringify(error);
            if (error.indexOf("NotFoundError") != -1) {
              errorMessage = "Camera or Mic are not found or not allowed in your device";
            }
            else if (error.indexOf("NotReadableError") != -1 || error.indexOf("TrackStartError") != -1) {
              errorMessage = "Camera or Mic is being used by some other process that does not let read the devices";
            }
            else if(error.indexOf("OverconstrainedError") != -1 || error.indexOf("ConstraintNotSatisfiedError") != -1) {
              errorMessage = "There is no device found that fits your video and audio constraints. You may change video and audio constraints"
            }
            else if (error.indexOf("NotAllowedError") != -1 || error.indexOf("PermissionDeniedError") != -1) {
              errorMessage = "You are not allowed to access camera and mic.";
            }
            else if (error.indexOf("TypeError") != -1) {
              errorMessage = "Video/Audio is required";
            }
            else if (error.indexOf("getUserMediaIsNotAllowed") != -1){
              errorMessage = "You are not allowed to reach devices from an insecure origin, please enable ssl";
            }
            else if (error.indexOf("ScreenSharePermissionDenied") != -1) {
              errorMessage = "You are not allowed to access screen share";
              // $(".video-source").first().prop("checked", true);					
            }
            else if (error.indexOf("WebSocketNotConnected") != -1) {
              errorMessage = "WebSocket Connection is disconnected.";
            }
            alert(errorMessage);
          }
        });
      }
      //initialize the WebRTCAdaptor
	    initWebRTCAdaptor(false, autoRepublishEnabled);

  },
}
</script>
