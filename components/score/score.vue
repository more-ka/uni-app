<template name="score">
	<view>
		<view class="movieScore">
		  <view class="movieStars">
		    <image v-for="yellow in yellowStar" :key="yellow" src="../../static/icos/star-yellow.png" calss="starIcon"></image>
        <image v-for="grey in greyStar" src="../../static/icos/star-gray.png" class="starIcon"></image>
		  </view>
		  <view class="movieNum" v-if="showNum">{{movieScore}}</view>
		</view>
	</view>
</template>

<script>
	export default {
    name: "score",
		data() {
			return {
				yellowStar: 0,
        greyStar: 5
			}
		},
    props:{
      movieScore: 0,
      showNum: {
        type: Boolean
      }
    },
		created(){
      var tempScore = 0
      // if(this.movieScore!==""&&this.movieScore==undefined&&movieScore!==null){
        tempScore = this.movieScore
      // }
      var yellowStar = parseInt(tempScore / 2)
      var greyStar =  5 - yellowStar
      this.yellowStar = yellowStar
      this.greyStar = greyStar
    }
	}
</script>

<style>
  .movieScore{
    display: flex;
    flex-direction: row;
  }
  .movieScore .movieStars{
    align-items: center;
    justify-content: center;
  }
  .movieScore .movieStars image{
    width: 20upx;
    height: 20upx;
  }
  .movieScore .movieNum{
    margin-top: 8upx;
    margin-left: 20upx;
    font-size: 14px;
  }
</style>
