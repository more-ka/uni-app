<template>
  <view class="page" :style="{height: height + 'px'}">
    <view class="header">
      <view class="picture">
        <image src="../../static/icos/default-face.png" mode=""></image>
      </view>
      <view v-if="!userInfo" class="container">
        <button @click="login" class="loginButton">注册/登录</button>
        <button class="testUser" @click="testUser">使用测试账号</button>
      </view>
      <view v-else class="userInfo">
        <view class="username">{{userInfo.username}}</view>
        <view class="userid">id: {{userInfo.userid}}</view>
      </view>
      <view v-if="userInfo" class="modify" @click="modify">
        <image src="../../static/icos/settings.png" mode=""></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        height: 100,
        userInfo: {}
      }
    },
    onLoad() {
      // uni.setStorageSync('globalUser',this.userInfo)
      this.userInfo = uni.getStorageSync('globalUser')
      // this.userInfo = JSON.parse(user)
      let height = uni.getSystemInfoSync().windowHeight
      this.height = height
    },
    methods: {
      login() {
        uni.navigateTo({
          url: '/pages/login/login'
        })
      },
      modify() {
        uni.navigateTo({
          url: '/pages/userinfo/userinfo'
        })
      },
      testUser() {
        
        let userInfo =  {
          "username": "测试账号",
          "userid": 53231323,
          "birthday": '2011-1-1',
          "sex": '-1'
        }
        uni.showToast({
          title:'测试账号登录成功',
          mask: true
        })
        setTimeout(()=>{
          uni.hideToast()
        },1000)
        uni.setStorageSync("globalUser",userInfo)
        this.userInfo = uni.getStorageSync('globalUser')
      }
    }
  }
</script>

<style>
  @import url("user.css");

  .page {}
</style>
