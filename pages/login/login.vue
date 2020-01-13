<template>
  <view class="page" :style="{height: pageHeight + 'px'}">
    <form @submit="formSubmit">
      <view class="picture">
        <image src="../../static/icos/default-face.png" mode=""></image>
      </view>
      <view class="username"  :class="{active:usernameActive}">
        <view class="text">账号</view>
        <input name="username" value="" type="text" placeholder="请输入用户名">
      </view>
      <view :class="{active:passwordActive}" class="password">
        <view class="text">密码</view>
        <input name="password" value="" type="text" password="true" placeholder="请输入密码">
      </view>
      <view class="tipsWrapper">
        <view class="tips" v-show="tips">{{tipsMessage}}</view>
      </view>
      <button type="primary" form-type="submit" class="login">登录</button>
    </form>
    <view class="auth">
      <!-- #ifdef APP-PLUS -->
      <image src="../../static/icos/weixin.png" data-loginType="weixin" @click="auth"></image>
      <image src="../../static/icos/QQ.png" data-loginType="qq" @click="auth"></image>
      <image src="../../static/icos/weibo.png" data-loginType="sinaweibo" @click="auth"></image>
      <!-- #endif -->
      <!-- #ifdef MP-WEIXIN -->
      <image src="../../static/icos/weixin.png" @click="weixinLogin"></image>
      <!-- #endif -->
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        pageHeight: 0,
        passwordActive: false,
        usernameActive: false,
        tips: false,
        tipsMessage: ''
      }
    },
    onLoad() {
      let pageHeight = uni.getSystemInfoSync().windowHeight
      this.pageHeight = pageHeight
      
      // 请求电影数据
        // uni.request({
        //   url: 'http://49.233.143.173/api/v1/video',
        //   data: {
        //     'name': '攀登者'
        //   },
        //   method: "POST",
        //   success(res) {
        //     console.log(res)
        //   }
        // })
    },
    methods: {
      formSubmit(e){
        let that = this
        let username = e.detail.value.username
        let password = e.detail.value.password
        that.passwordActive = false
        that.usernameActive = false
        if(username===''){
         that.usernameActive = true
          uni.showToast({
            title: '账号不能为空',
            icon: 'none'
          })
          return
        }
        if(username.length<=3){
          that.usernameActive = true
          uni.showToast({
            title: '账号长度不能小于3',
            icon: 'none'
          })
          return
        }
        if(password===''){
          that.passwordActive = true
          uni.showToast({
            title: '密码不能为空',
            icon: 'none'
          })
          return
        }
        if(password.length<=3){
          that.passwordActive = true
          uni.showToast({
            title: '密码长度不能小于3',
            icon: 'none'
          })
          return
        }
        uni.request({
          url: "http://localhost:8888/sign_up.html",
          data: {
            "username":username,
            "password":password
          },
          method: "POST",
          success(res) {
            if(res.statusCode===200){
              that.tips = true
              that.tipsMessage = '登录成功'
            }else if(res.statusCode===201){
              that.tips = true
              that.tipsMessage = '注册成功'
            }else if(res.statusCode===400){
              that.passwordActive = true
              that.tips = true
              that.tipsMessage = '密码错误'
            }
          }
        })
      },
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
                } else if (loginType == "sinaweibo") {
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
