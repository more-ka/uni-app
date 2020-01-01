<template>
  <view class="page">
    <view class="statusBar">
    </view>
    <swiper class="swiper page-block" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500"
      :circular="true">
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
          <score :showNum="true" :movieScore="10.0"></score>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
          <score :showNum="true" :movieScore="6.7"></score>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
          <score :showNum="true" :movieScore="6.7"></score>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
          <score :showNum="true" :movieScore="6.7"></score>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
          <score :showNum="true" :movieScore="6.7"></score>
        </view>
        <view class="item">
          <image class="poster" src="../../static/poster/civilwar.jpg"></image>
          <view class="movieName">超级玛丽超级玛丽超级玛丽</view>
          <score :showNum="true" :movieScore="6.7"></score>
        </view>
      </scroll-view>
      <view></view>
    </view>
    <view class="hotMovie page-block">
      <view class="title">
        <image src="../../static/icos/interest.png"></image>
        <text>热门预告</text>
      </view>
      <view class="movies">
        <video poster="http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png" src="http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4"></video>
        <video poster="http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png" src="http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4"></video>
      </view>
    </view>
    <view class="guess-u-like page-block">
      <view class="title">
        <image src="../../static/icos/guess-u-like.png"></image>
        <text>猜你喜欢</text>
      </view>
      <view class="guessLikeMovies" v-for="(item,index) in mockData" :key="index">
        <view class="likeMovie">
          <image :src="item.cover" mode=""></image>
          <view class="movieDetail">
            <view class="movieTitle">{{item.movieTitle}}</view>
            <score :showNum="false" :movieScore="item.movieScore"></score>
            <view class="movieCategory">{{item.movieCategory}}</view>
            <view class="movieTime">{{item.movieTime}}</view>
          </view>
          <view class="praise" @click="praise" :data-index="index">
            <image :src="item.src" class="icon"></image>
            <view>点赞</view>
            <view :animation="animationArr[index]" class="animation">+1</view>
          </view>
        </view>
      </view>
      </view>
    </view>
  </view>
</template>
<!-- 解决视频可以同时播放的问题 -->
<script>
  import score from "../../components/score/score"
  export default {
    data() {
      return {
        animationData: {},
        animationArr: [{}, {}, {}, {}, {}],
        e: {},
        mockData: [{
          "movieTitle": "秦时明月之沧海横流",
          "movieScore": 10,
          "movieCategory": "2018 / 美国 / 科幻 / 超级英雄",
          "movieTime": "上映时间：2014-04-04(美国/中国大陆)",
          "cover": "http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png",
          "src": "../../static/icos/praise.png"
        }, {
          "movieTitle": "秦时明月之沧海横流",
          "movieScore": 10,
          "movieCategory": "2018 / 美国 / 科幻 / 超级英雄",
          "movieTime": "上映时间：2014-04-04(美国/中国大陆)",
          "cover": "http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png",
          "src": "../../static/icos/praise.png"
        }, {
          "movieTitle": "秦时明月之沧海横流",
          "movieScore": 10,
          "movieCategory": "2018 / 美国 / 科幻 / 超级英雄",
          "movieTime": "上映时间：2014-04-04(美国/中国大陆)",
          "cover": "http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png",
          "src": "../../static/icos/praise.png"
        }, {
          "movieTitle": "秦时明月之沧海横流",
          "movieScore": 10,
          "movieCategory": "2018 / 美国 / 科幻 / 超级英雄",
          "movieTime": "上映时间：2014-04-04(美国/中国大陆)",
          "cover": "http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png",
          "src": "../../static/icos/praise.png"
        }, {
          "movieTitle": "秦时明月之沧海横流",
          "movieScore": 10,
          "movieCategory": "2018 / 美国 / 科幻 / 超级英雄",
          "movieTime": "上映时间：2014-04-04(美国/中国大陆)",
          "cover": "http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png",
          "src": "../../static/icos/praise.png"
        }]
      }
    },
    onUnload() {
      this.animationData = {}
      this.animationArr = [{}, {}, {}, {}, {}]
    },
    onLoad() {
      // #ifdef APP-PLUS || MP-WEIXIN
      this.animation = uni.createAnimation()
      // #endif
      uni.getSystemInfo({
        success: (res) => {
          this.e = res
          console.log(JSON.stringify(res));
        }
      });
      uni.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#DD524D',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })
    },
    methods: {
      praise(e) {
        // #ifdef APP-PLUS || MP-WEIXIN
        let gIndex = e.currentTarget.dataset.index
        this.animation.translateY(-60).opacity(1).step({
          duration: 400
        })
        this.animationData = this.animation
        this.animationArr[gIndex] = this.animationData.export()
        setTimeout(() => {
          this.animation.translateY(0).opacity(0).step({
            duration: 0
          })
          this.animationData = this.animation
          this.animationArr[gIndex] = this.animationData.export()
        }, 500)
        // #endif
      }
    },
    components: {
      score
    }
  }
</script>

<style>
  @import url("index.css");
</style>
