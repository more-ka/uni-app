<template>
  <view class="page">
    <view class="form">
      <view class="uni-list">
        <view class="uni-list-cell">
          <picker mode="date" @change="bindDateChange" :end="currentDate">
            <input class="nowDate" :value="date" />
          </picker>
        </view>
      </view>
      <button type="primary" @click="modify">确认修改</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: '',
        date: 0,
        userInfo: {}
      }
    },
    computed: {
    },
    onLoad() {
      // 与pick组件中的end属性绑定, 禁止用户生日选择为当前日期之后
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      this.currentDate = year+'-'+month+'-'+day
      
      this.userInfo = uni.getStorageSync('globalUser')
      this.date = this.userInfo.birthday
    },
    methods: {
      bindDateChange(e) {
        this.date = e.target.value
      },
      modify(){
        this.userInfo.birthday = this.date
        uni.setStorageSync('globalUser',this.userInfo)
        uni.showToast({
          title: "生日修改成功",
          icon: 'none'
        })
        uni.showLoading()
        setTimeout(()=>{
          uni.hideLoading()
          uni.navigateTo({
            url: '../userinfo/userinfo'
          })
        },1000)
      }
    }
  }
</script>

<style scoped>
  .page {
    width: 100vw;
    height: 100vh-25px;
  }
  .form {
    padding: 40rpx;
  }
  .nowDate {
    
  }
  input {
    padding: 10rpx 16rpx;
    border: 1px solid lightgrey;
    border-radius: 5px;
  }
  button {
    margin-top: 40rpx;
  }
</style>
