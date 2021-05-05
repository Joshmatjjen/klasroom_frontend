import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'

// import the styles
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

// import js dependencies
// import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'

Vue.component('vue-video-player', VueVideoPlayer)