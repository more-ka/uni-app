<template name="score">
  <view class="movieScore">
      <image v-for="yellow in yellowStar" :key="'yellow'+yellow" src="../../static/icos/star-yellow.png" calss="starIcon"></image>
      <image v-for="grey in greyStar" :key="'grey'+grey" src="../../static/icos/star-gray.png" class="starIcon"></image>
    <view class="movieNum" v-if="showNum">{{movieScore}}</view>
  </view>
</template>

<script>
  export default {
    name: "score",
    data() {
      return {
        yellowStar: 0,
        greyStar: 5,
      }
    },
    props: {
      movieScore: 0,
      showNum: {
        type: Boolean
      }
    },
    created() {
      var tempScore = 0
      // if(this.movieScore!==""&&this.movieScore==undefined&&movieScore!==null){
      tempScore = this.movieScore
      // }
      var yellowStar = parseInt(tempScore / 2)
      var greyStar = 5 - yellowStar
      this.yellowStar = yellowStar
      this.greyStar = greyStar
    }
  }
</script>

<style>
  .movieScore {
    display: flex;
    flex-direction: row;
    height: 40rpx;
    align-items: center;
  }

  .movieScore image {
    width: 30rpx;
    height: 30rpx;
  }

  .movieScore .movieNum {
    margin-left: 10rpx;
    font-size: 16px;
    color: #808080;
  }
</style>
