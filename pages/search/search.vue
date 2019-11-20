<template>
	<view class="page">
    <view class="title">搜索</view>
		<view class="searchWrapper">
      <view class="searchIconWrapper">
        <image src="../../static/icos/search.png" class="searchIcon"></image>
      </view>
      <view class="inputWrapper">
        <input type="text" value="" placeholder="搜索电影"/>
      </view>
    </view>
    <view class="main">
      <view class="movie" v-for="movie in searchData" v-bind:key="movie.id">
        <image class="poster" :src="movie.cover"></image>
        <text class="movieName">{{movie.name}}</text>
      </view>
    </view>
	</view>
</template>

<script>
  import search from '../../common/search.js'
	export default {
		data() {
			return {
				searchData: search.data.rows
			}
		},
    onReachBottom() {
      this.searchData = this.searchData.concat(search.data.rows)
    },
    onLoad(){
    },
		methods: {
			
		}
	}
</script>

<style>
  @import url("search.css");
</style>
