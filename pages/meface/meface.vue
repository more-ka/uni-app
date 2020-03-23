<template>
  <view class="page">
    <view class="main">
      <image :src="fileUrl" mode="aspectFit" class="image"></image>
    </view>
    <view class="container">
      <view class="again" @click="again">重新选择</view>
      <view class="confirm" @click="upload">确定上传</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        fileUrl: ''
      }
    },
    onLoad(e) {
      let fileUrl = e.fileUrl
      this.fileUrl = fileUrl
    },
    
    
    methods: {
      // 重新选择头像
      again() {
        var that = this
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          success(response) {
            // 获得图片的临时路径
            var fileUrl = response.tempFilePaths[0]
            that.fileUrl = fileUrl
          }
        })
      },
      // 确认上传
      upload() {
        uni.showToast({
          title: "万事俱备,只欠后台",
          icon: "none"
        })
        setTimeout(()=>{
          uni.switchTab({
              url: '/pages/user/user'
          });
        },1500)
      }
    }
  }
</script>

<style>
  .page {
    background: #000000;
    color: white;
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }

  .page .main {
    height: 100%;
    width: 100vw;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main image {}

  .page .container {
    background: #FFFFFF;
    height: 100rpx;
    display: flex;
    border-top: 1px solid lightgrey;
    align-items: center;
    font-size: 16px;
    flex-direction: row;
    padding: 0 40rpx;
    justify-content: space-between;
  }
  .container view{
    color: #000000;
  }
  .confirm {}
</style>
