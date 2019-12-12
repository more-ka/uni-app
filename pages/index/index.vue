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
      <view class="guessLikeMovies">
        <view class="likeMovie">
          <image src="http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png" mode=""></image>
          <view class="movieDetail">
            <view class="movieTitle">秦时明月之沧海横流</view>
            <score :showNum="false" :movieScore="10"></score>
            <view class="movieCategory">2018 / 美国 / 科幻 / 超级英雄</view>
            <view class="movieTime">上映时间：2014-04-04(美国/中国大陆)</view>
          </view>
          <view class="praise">
            <image src="../../static/icos/praise.png" class="icon"></image>
            <view @click="praise">点赞</view>
            <view :animation="animationData" class="animation">+1</view>
          </view>
        </view>
      </view>
      <view class="guessLikeMovies">
        <view class="likeMovie">
          <image src="http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png" mode=""></image>
          <view class="movieDetail">
            <view class="movieTitle">秦时明月之沧海横流</view>
            <score :showNum="false" :movieScore="10"></score>
            <view class="movieCategory">2018 / 美国 / 科幻 / 超级英雄</view>
            <view class="movieTime">上映时间：2014-04-04(美国/中国大陆)</view>
          </view>
          <view class="praise" @click="praise">
            <image src="../../static/icos/praise.png" class="icon"></image>
            <view>点赞</view>
            <view :animation="animationData" class="animation">+1</view>
          </view>
        </view>
      </view>
      <view class="guessLikeMovies">
        <view class="likeMovie">
          <image src="http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png" mode=""></image>
          <view class="movieDetail">
            <view class="movieTitle">秦时明月之沧海横流</view>
            <score :showNum="false" :movieScore="10"></score>
            <view class="movieCategory">2018 / 美国 / 科幻 / 超级英雄</view>
            <view class="movieTime">上映时间：2014-04-04(美国/中国大陆)</view>
          </view>
          <view class="praise" @click="praise">
            <image src="../../static/icos/praise.png" class="icon"></image>
            <view>点赞</view>
            <view :animation="animationData" class="animation">+1</view>
          </view>
        </view>
      </view>
      <view class="guessLikeMovies">
        <view class="likeMovie">
          <image src="http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png" mode=""></image>
          <view class="movieDetail">
            <view class="movieTitle">秦时明月之沧海横流</view>
            <score :showNum="false" :movieScore="10"></score>
            <view class="movieCategory">2018 / 美国 / 科幻 / 超级英雄</view>
            <view class="movieTime">上映时间：2014-04-04(美国/中国大陆)</view>
          </view>
          <view class="praise" @click="praise">
            <image src="../../static/icos/praise.png" class="icon"></image>
            <view>点赞</view>
            <view :animation="animationData" class="animation">+1</view>
          </view>
        </view>
      </view>
      <view class="guessLikeMovies">
        <view class="likeMovie">
          <image src="http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png" mode=""></image>
          <view class="movieDetail">
            <view class="movieTitle">秦时明月之沧海横流</view>
            <score :showNum="false" :movieScore="10"></score>
            <view class="movieCategory">2018 / 美国 / 科幻 / 超级英雄</view>
            <view class="movieTime">上映时间：2014-04-04(美国/中国大陆)</view>
          </view>
          <view class="praise" @click="praise">
            <image src="../../static/icos/praise.png" class="icon"></image>
            <view>点赞</view>
            <view :animation="animationData" class="animation">+1</view>
          </view>
        </view>
      </view>
      <view class="guessLikeMovies">
        <view class="likeMovie">
          <image src="http://122.152.205.72:88/superhero/MARVEL/CaptainAmerica2/cover.png" mode=""></image>
          <view class="movieDetail">
            <view class="movieTitle">秦时明月之沧海横流</view>
            <score :showNum="false" :movieScore="10"></score>
            <view class="movieCategory">2018 / 美国 / 科幻 / 超级英雄</view>
            <view class="movieTime">上映时间：2014-04-04(美国/中国大陆)</view>
          </view>
          <view class="praise" @click="praise">
            <image src="../../static/icos/praise.png" class="icon"></image>
            <view>点赞</view>
            <view :animation="animationData" class="animation">+1</view>
          </view>
        </view>
      </view>
    </view>
  </view>

</template>

<script>
  import score from "../../components/score/score"
  export default {
    data() {
      return {
        animationData: {},
        e: {}
      }
    },
    onUnload() {
      this.animationData = {}
    },
    onLoad() {
      this.animation = uni.createAnimation()
      uni.getSystemInfo({
          success: (res)=> {
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
      praise() {
        this.animation.translateY(-60).opacity(1).step().translateY(0).opacity(0).step({
          duration: 0
        })
        this.animationData = this.animation.export()
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
