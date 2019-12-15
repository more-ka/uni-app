<template>
  <view class="page">
    <view class="main">
      <image :src="fileUrl" class="image"></image>
    </view>
    <view class="container">
      <view class="again" @click="again">重新选择</view>
      <view class="confirm" @click="upload">确定上传</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        fileUrl: ''
      }
    },
    onLoad(e) {
      // let fileUrl = e.fileUrl
      // this.fileUrl = fileUrl
      // uni.setStorageSync('globalUser',
      //   '{"name": "测试账号","id":"123123","image":"http://localhost:8080/63bbd2b7-545b-4017-a434-572a1fbdf392"}')
    },
    // 选择上传头像后, 测试账号存在问题
    methods: {
      // 重新选择头像
      again() {
        var that = this
        uni.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          success(response) {
            // 获得图片的临时路径
            var fileUrl = response.tempFilePaths[0]
            that.fileUrl = fileUrl
          }
        })
      },
      // 确认上传
      upload() {
        uni.showToast({
          title: "万事俱备,只欠后台",
          icon: "none"
        })
        setTimeout(()=>{
          uni.switchTab({
              url: '/pages/user/user'
          });
        },1500)
        // 继续用户信息修改
        
        // var that = this
        // var fileUrl = that.fileUrl
        // // 视频16.2.1 把图片上传到服务器
        // // 后台可能要使用express处理图片
        // uni.uploadFile({
        //   url: 'http://localhost:8080/userImage', //仅为示例，非真实的接口地址
        //   filePath: that.fileUrl,
        //   name: 'file',
        //   success: (uploadFileRes) => {
        //     console.log(uploadFileRes);
        //   }
        // });

        // console.log(uni.getStorageSync("globalUser"));
        // var globalUser = JSON.parse(uni.getStorageSync("globalUser"))
        // fileUrl = that.fileUrl.substring(5)
        // console.log(typeof fileUrl);
        // globalUser['image'] = fileUrl
        // console.log(typeof globalUser);
        // uni.setStorageSync(`userImage`,`${fileUrl}`)
        // console.log(uni.getStorageSync("userImage"));

        // uni.request({
        //   url: "http://localhost:8080/index",
        //   method: "GET",
        //   success: (res) => {
        //   	console.log('111111111');
        //   		console.log(res);
        //   }
        // })
        // 文件上传, 没有后台, 图片也就不能上传, 不能替换
      }
    }
  }
</script>

<style>
  .page {
    background: #000000;
    color: white;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 45px);
  }

  .page .main {
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main image {}

  .page .container {
    height: 80rpx;
    display: flex;
    border-top: 1px solid lightgrey;
    align-items: center;
    font-size: 16px;
    flex-direction: row;
    padding: 0 20rpx;
    justify-content: space-between;
  }

  .confirm {}
</style>
