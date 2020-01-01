<template>
	<view class="page">
		<view class="form">
      <form action="" @submit="formModifyNickname">
        <input type="text" name="nickname" v-model="nickname" placeholder="请输入昵称">
        <button size="default" type="primary" @click="sureModify">确认修改</button>
      </form>
    </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userInfo: {},
        nickname: ''
			}
		},
    onLoad() {
      let user = uni.getStorageSync('globalUser')
      this.userInfo = user
      this.nickname = user.username
    },
		methods: {
			sureModify(){
        this.userInfo.username = this.nickname
        uni.setStorageSync('globalUser',this.userInfo)
        uni.showLoading({
          title: '修改成功',
          icon: 'loading',
          mask: true
        });
        setTimeout(()=>{
          uni.hideLoading()
          uni.navigateBack({
            delta: 1
          })
          },1000)
        
      }
		}
	}
</script>

<style>
.page{
  height: 90vh;
  width: 100vw;
  display: block;
  overflow: hidden;
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
