<template>
	<view class="page">
		<view class="form">
      <form action="">
        <input type="text" :value="userInfo.username" placeholder="请输入昵称">
        <button size="default" type="primary">确认修改</button>
      </form>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
    onLoad() {
      let user = uni.getStorageSync('globelUser')
      this.userInfo = user
    },
		methods: {
			
		}
	}
</script>

<style>
.page{
  height: 100vh-25px;
  width: 100vw;
  display: block;
}
input{
  padding: 10rpx 16rpx;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
.form{
  height: 100%;
  display: block;
  margin: 40rpx;
}
button{
  margin-top: 40rpx;
}
</style>
