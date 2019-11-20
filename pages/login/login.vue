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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageHeight: 0
			}
		},
    onLoad(){
      let pageHeight = uni.getSystemInfoSync().windowHeight
      this.pageHeight = pageHeight
    },
		methods: {
			
		}
	}
</script>

<style>
  @import url("login.css");
</style>
