<template>
  <view class="page">
    <view class="infoWrapper">
      <view class="avatarLine line">
        <view class="title">头像</view>
        <view class="right" @click="image">
          <image class="avatar" src="../../static/carousel/batmanvssuperman.png"></image>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
      <view class="avatarLine line">
        <view class="title">昵称</view>
        <view class="right">
          <view class="name">测试账号</view>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
      <view class="birthdayLine line">
        <view class="title">生日</view>
        <view class="right">
          <view class="birthday">2000-10-10</view>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
      <view class="sexLine line">
        <view class="title">性别</view>
        <view class="right">
          <view class="sex">神</view>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
    </view>
    <view class="container">
      <view class="clearStorage">清理缓存</view>
      <view class="logout">退出登录</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      image() {

        uni.previewImage({
          urls: res.tempFilePaths,
          longPressActions: {
            itemList: ['发送给朋友', '保存图片', '收藏'],
            success: function(data) {
              console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
            },
            fail: function(err) {
              console.log(err.errMsg);
            }
          }
        });
      }
    }
  }
</script>

<style>
  @import url("userinfo.css");
</style>
