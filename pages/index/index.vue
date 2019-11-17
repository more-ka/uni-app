<template>
  <view class="page">
      <swiper class="swiper page-block" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/carousel/batmanvssuperman.png" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/carousel/spiderman.png" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/carousel/batmanvssuperman.png" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/carousel/spiderman.png" mode=""></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="hot page-block">
      <view class="title">
        <image src="../../static/icos/hot.png"></image>
        <text>热门超英</text>
      </view>
      <scroll-view scroll-x="true" class="scroll">
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
        </view>
      </scroll-view>

      <view></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    onLoad() {
      uni.request({
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },

        data: {
          qq: '466481615'
        },
        url: "https://www.imovietrailer.com/superhero/index/carousel/list",
        method: "POST",
        success: (res) => {
          console.log(res.data)
        }
      })
    },
    methods: {

    }
  }
</script>

<style>
  @import url("index.css");
</style>
