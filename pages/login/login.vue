<template>
  <view class="page" :style="{height: pageHeight + 'px'}">

    <view class="picture">
      <image src="../../static/icos/default-face.png" mode=""></image>
    </view>
    <view class="username">
      <view class="text">账号</view>
      <input type="text" placeholder="请输入用户名">
    </view>
    <view class="password">
      <view class="text">密码</view>
      <input type="text" password="true" placeholder="请输入密码">
    </view>
    <button type="primary" class="login">注册/登录</button>
    <view class="auth">
      <!-- #ifdef APP-PLUS -->
      <image src="../../static/icos/weixin.png" data-loginType="weixin" @click="auth"></image>
      <image src="../../static/icos/QQ.png" data-loginType="qq" @click="auth"></image>
      <image src="../../static/icos/weibo.png" data-loginType="sinaweibo" @click="auth"></image>
      <!-- #endif -->
      <!-- #ifndef MP-WEIXIN -->
      <!-- <image src="../../static/icos/weixin.png" @click="weixinLogin"></image> -->
      <!-- #endif -->
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        pageHeight: 0
      }
    },
    onLoad() {
      let pageHeight = uni.getSystemInfoSync().windowHeight
      this.pageHeight = pageHeight
    },
    methods: {
      auth(e) {
        let loginType = e.currentTarget.dataset.logintype
        uni.login({
          provider: loginType,
          success(res) {
            // 登录成功后, 获取用户数据
            uni.getUserInfo({
              provider: loginType,
              success(info) {
                var userInfo = info.userInfo
                var nickName = ""
                var avatarUrl = ""
                var openId = ""
                if (loginType == "weixin") {
                  nickName = userInfo.nickName
                  avatarUrl = userInfo.avatarUrl
                  openId = userInfo.openId
                } else if (loginType == "qq") {
                  nickName = userInfo.nickname
                  avatarUrl = userInfo.figureurl_qq_2
                  openId = userInfo.openId
                }else if (loginType == "sinaweibo") {
                  nickName = userInfo.nickname
                  avatarUrl = userInfo.avatar_large
                  openId = userInfo.id
                }
              }
            })
          }
        })
      }
    }
  }
</script>

<style>
  @import url("login.css");
</style>
