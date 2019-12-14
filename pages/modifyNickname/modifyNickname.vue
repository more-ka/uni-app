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
        uni.showToast({
          title:'昵称修改成功',
          icon: 'none'
        })
        setInterval(()=>{
          uni.reLaunch({
            url: '../userinfo/userinfo'
          })
          },2000)
        
      }
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
