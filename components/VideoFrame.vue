<template>
  <div class="video-frame flex rounded-lg bg-gray-100 w-full">
    <span class="play-btn my-auto mx-auto"></span>
  </div>
</template>

<style scoped>
.video-frame {
  min-height: 478px;
  background-image: url('/video-sample-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.video-frame > .play-btn {
  display: inline-block;
  width: 120px;
  height: 120px;
  background-image: url('/icon/play.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 425px) {
  .video-frame {
    min-height: 168.4px;
  }
  .video-frame > .play-btn {
    width: 48px;
    height: 48px;
  }
}
</style>
