<template>
    <view class="page" :style="{height: height + 'px'}">
      <view class="header">
        <view class="picture">
          <image src="../../static/icos/default-face.png" mode=""></image>
        </view>
        <button v-if="!userInfo" @click="login">注册/登录</button>
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
        userInfo: {
          "username":"测试账号",
          "userid": 53231323
        }
			}
		},
    onLoad() {
      uni.setStorageSync('globelUser',this.userInfo)
      let height = uni.getSystemInfoSync().windowHeight
      this.height = height
    },
		methods: {
			login(){
        uni.navigateTo({
          url: '/pages/login/login'
        })
      },
      modify(){
        uni.navigateTo({
          url: '/pages/userinfo/userinfo'
        })
      }
		}
	}
</script>

<style>
 @import url("user.css");
 .page{
 }
</style>
