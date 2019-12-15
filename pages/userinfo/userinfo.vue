<template>
  <view class="page">
    <view class="infoWrapper">
      <view class="avatarLine line" @click="changeAvatar">
        <view class="title">头像</view>
        <view class="right">
          <image class="avatar" src="localhost:8080/63bbd2b7-545b-4017-a434-572a1fbdf392"></image>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
      <view class="avatarLine line" @click="modifyNickname">
        <view class="title">昵称</view>
        <view class="right">
          <view class="name">{{userInfo.username}}</view>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
      <view class="birthdayLine line" @click="modifyBirthday">
        <view class="title">生日</view>
        <view class="right">
          <view class="birthday">{{userInfo.birthday}}</view>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
      <view class="sexLine line">
        <view class="title">性别</view>
        <view class="right">
          <view class="sex">神</view>
          <image src="../../static/icos/left-gray-arrow.png" class="right-icon"></image>
        </view>
      </view>
    </view>
    <view class="container">
      <view class="clearStorage" @click="clearStorage">清理缓存</view>
      <view class="logout" @click="clearStorage">退出登录</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // imageSrc: '../../static/carousel/batmanvssuperman.png',
        userImage: '',
        userInfo: {}
      }
    },
    onLoad() {
      // let storage = uni.getStorageSync("globalUser")
      // this.imageSrc = storage[image]
      let userImage = uni.getStorageSync("userImage")
      this.userInfo = uni.getStorageSync("globalUser")
      this.userImage = userImage
    },
    methods: {
      modifyNickname(){
        uni.navigateTo({
          url: "../modifyNickname/modifyNickname"
        })
      },
      modifyBirthday(){
        uni.navigateTo({
          url: "../userBirthday/userBirthday"
        })
      },
      changeAvatar(){
        uni.showActionSheet({
          // itemList按钮的文字接受的是数组
          itemList: ["查看头像","从相册选择图片"],
          success(e){
            var index = e.tapIndex
            if(index ===0){
              let url  = "../../static/carousel/batmanvssuperman.png"
              let arr=[]
              arr.push(url)
              uni.previewImage({
                // 预览功能图片也必须是数组的
                urls: arr
              })
            }else if(index === 1){
              uni.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                success(response) {
                  var fileUrl = response.tempFilePaths[0]
                 uni.navigateTo({
                   url: "/pages/meface/meface?fileUrl="+fileUrl
                 })
                }
              })
            }
            }
        })
      },
      clearStorage(){
        // 没有后台, 所以跳回用户页面
        uni.showToast({
          title: "请稍后...",
          mask: true,
          icon: "loading"
        })
        uni.clearStorage()
        setTimeout(function(){
          uni.hideToast()
          uni.reLaunch({
            url: '/pages/user/user'
          })
        },2000)
      }
    }
  }
</script>

<style>
  @import url("userinfo.css");
</style>
