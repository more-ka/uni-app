<template>
    <view class="page" :style="{height: height + 'px'}">
      <view class="header">
        <view class="picture">
          <image src="../../static/icos/default-face.png" mode=""></image>
        </view>
        <button @click="login">注册/登录</button>
      </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
        height: 100
			}
		},
    onLoad() {
      let height = uni.getSystemInfoSync().windowHeight
      this.height = height
    },
		methods: {
			login(){
        uni.navigateTo({
          url: '/pages/login/login'
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
