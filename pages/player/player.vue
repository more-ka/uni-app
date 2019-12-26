<template>
  <view>
    <web-view :webview-styles="webviewStyles" :src="url"></web-view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        url: '',
        webviewStyles: {
          progress: {
            color: '#FF3333'
          }
        }
      }
    },
    onLoad(e) {
      this.url = e.url
      plus.screen.lockOrientation('landscape-primary')
    },
    onReady: function(res) {
      // #ifndef MP-ALIPAY
      this.videoContext = uni.createVideoContext('myVideo')
      // #endif
    },
    methods: {
      videoErrorCallback: function(e) {
        uni.showModal({
          content: e.target.errMsg,
          showCancel: false
        })
      }
    }
  }
</script>

<style>
  .iframe {
    width: 100vw;
    height: 100vh;
  }
</style>
