<template>
  <view class="page">
    <view class="form">
      <form action="">
        <radio-group name="" @change="sexChange">
          <label class="radio">
            <radio value='1' :checked="sex==='1'" /><text>男</text>
          </label>
          <label class="radio">
            <radio value='0' :checked="sex==='0'" /><text>女</text>
          </label>
        </radio-group>
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
        sex: '-1'
      }
    },
    onLoad() {
      let user = uni.getStorageSync('globalUser')
      this.userInfo = user
      this.sex = user.sex
    },
    methods: {
      sexChange(e) {
        this.sex = e.detail.value
      },
      sureModify() {
        if (this.sex === '-1') {
          uni.showToast({
            title: '请选择性别',
            icon: 'none',
            mask: true
          })
          setTimeout(() => {
            uni.hideToast()
          }, 1000)
          return
        }
        this.userInfo.sex = this.sex
        uni.showLoading({
          title: '修改成功',
          icon: 'loading',
          mask: true
        });
        uni.setStorageSync('globalUser', this.userInfo)
        setTimeout(() => {
          uni.hideLoading()
          uni.navigateBack({
            delta: 1
          })
        }, 1000);
      }
    }
  }
</script>

<style>
  .page {
    height: 90vh;
    width: 100vw;
    display: block;
    overflow: hidden;
  }

  .radio {
    display: block;
    margin: 28rpx 0;
  }

  .form {
    height: 100%;
    display: block;
    margin: 40rpx;
  }

  button {
    margin-top: 40rpx;
  }
</style>
