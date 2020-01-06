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
        <view class="item" @click="previewPicture">
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
        <video v-for="(item,index) in trailer" :key="index" class="Trailer" :data-id="item.id" :poster="item.poster"
          :src="item.src" @play="playing" :id="item.id"></video>
      </view>
    </view>
    <view class="guess-u-like page-block">
      <view class="title">
        <image src="../../static/icos/guess-u-like.png"></image>
        <text>豆瓣TOP榜</text>
      </view>
      <view class="guessLikeMovies" v-for="(item,index) in toplist" :key="index">
        <view class="likeMovie">
          <!-- <image :src="item.images.medium" mode=""></image> -->
          <view class="movieDetail">
            <view class="movieTitle">{{item.title}}</view>
            <score :showNum="true" :movieScore="item.rating.average">{{item.rating.average}}</score>
            <text class="movieTime" space="nbsp">{{item.year}} / \n</text>
            <text class="movieCategory" v-for="(i,index) in item.genres" space="nbsp" :key="index"> {{i}} \n</text><text space="nbsp">\n</text>
            <text class="movieCategory" v-for="(i,index) in item.directors" :key="index">{{i.name}} / \n</text>
            <text class="movieCategory" v-for="(i,index) in item.casts" :key="index">{{i.name}} \n</text>
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
<!-- 文章总结 预览图片视频不暂停/多个视频可同时播放 的问题 -->
<script>
  import score from "../../components/score/score"
  export default {
    data() {
      return {
        animationData: {},
        animationArr: [{}, {}, {}, {}, {}],
        currentId: 0,
        videoContent: "",
        toplist: [],
        trailer: [{
          "id": "123",
          "poster": "http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png",
          "src": "http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4"
        }, {
          "id": "456",
          "poster": "http://122.152.205.72:88/superhero/MARVEL/Avengers3/poster.png",
          "src": "http://122.152.205.72:88/superhero/MARVEL/Avengers3/trailer.mp4"
        }]
      }
    },
    onReady() {
      this.videoContent = uni.createVideoContext('Trailer')
    },
    onHide() {
      // 页面隐藏时暂停视频
      this.videoContent.pause()
    },
    onShow() {
      if (this.videoContent) {
        this.videoContent.play()
      }
    },
    onUnload() {
      this.animationData = {}
      this.animationArr = [{}, {}, {}, {}, {}]
    },
    onLoad() {
      let that = this
      // #ifdef APP-PLUS || MP-WEIXIN
      this.animation = uni.createAnimation()
      // #endif
      // 获取系统信息
      // uni.getSystemInfo({
      //   success: (res) => {
      //     this.e = res
      //     console.log(JSON.stringify(res));
      //   }
      // });
            uni.request({
              url: 'https://douban-api.uieee.com/v2/movie/top250',
              success(res) {
                  that.toplist = res.data.subjects
                  console.log(that.toplist,'1111');
              }
            })
      
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
      playing(e) {
        let currentId = e.currentTarget.dataset.id
        this.videoContent = uni.createVideoContext(currentId)
        let trailer = this.trailer
        for (let i = 0; i < trailer.length; i++) {
          let temp = trailer[i].id
          if (temp !== currentId) {
            uni.createVideoContext(temp).pause()
          }
        }
      },
      previewPicture() {
        let url = "../../static/carousel/batmanvssuperman.png"
        let arr = []
        arr.push(url)
        uni.previewImage({
          urls: arr,
          success: function(res) {
          }
        })
      },
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
