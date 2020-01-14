<template>
  <view class="page">
    <view class="header">
      <view class="search">
        <view class="inputWrapper">
          <input type="text" v-model="searchValue" placeholder="搜索电影 电视剧" confirm-type="search" @confirm="search" />
        </view>
        <view class="searchIconWrapper" @click="search">
          <image src="../../static/icos/search.png" class="searchIcon"></image>
        </view>
      </view>
    </view>
    <view class="main">
      <view class="defaultMovie" v-if="searchData.length===0">
        <text class="title" v-if="searchValues.length!==0">搜索历史</text>
        <view class="searchHistory">
          <view class="searchTerms" v-for="(values,index) in searchValues" :key="index" @click="searchTermsClick"
            :data-termsIndex='index'>{{values}}</view>
        </view>
        <text class="title">热门影视</text>
        <view class="recommendMovie">
          <view class="movie" v-for="(item,index) in defaultDate" :key="index" @click="recommendMovieClick"
            :data-movieName="item.name">
            <image class="movieCover" :src="item.cover"></image>
            <text class="movieName">{{item.name}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<!-- 修改个人信息后, 返回页面层级错误 -->
<script>
  import search from '../../common/search.js'
  export default {
    data() {
      return {
        searchData: [],
        defaultDate: [],
        searchValue: '',
        item: '',
        searched: false,
        currentIndex: -1,
        indexs: [],
        showMovieInfo: [],
        searchValues: []
      }
    },
    onShow() {
      this.defaultDate = search.data.rows
      let searchValues
      searchValues = uni.getStorageSync('searchValues')
      if (searchValues.length === 0) {
        searchValues = []
      }
      this.searchValues = searchValues
    },
    methods: {
      search() {
        let searchValue = this.searchValue
        if (searchValue === '') {
          uni.showToast({
            title: '无搜索关键词',
            icon: 'none'
          })
          return
        }
        // 数组去重
        let searchValues = this.searchValues
        let found = false
        for (let value in searchValues) {
          if (searchValues[value] === searchValue) {
            found = true
            break
          }
        }
        if (!found) {
          searchValues.unshift(searchValue)
        }
        if (searchValues.length >= 10) {
          searchValues = searchValues.slice(0, 10)
          this.searchValues = searchValues
        }
        this.searchValues = searchValues
        console.log(this.searchValues)
        uni.setStorageSync('searchValues', searchValues)
        // 视频搜索接口
        this.sendSearch(searchValue)

      },
      // 点击历史搜索词填入输入框
      searchTermsClick(e) {
        this.searchValue = this.searchValues[e.currentTarget.dataset.termsindex]
      },
      recommendMovieClick(e) {
        this.sendSearch(e.currentTarget.dataset.moviename)
      },
      // 剧情简介的展开与折叠按钮
      toggleShowInfo(e) {
        let gindex = e.currentTarget.dataset.gindex - 0
        if (this.indexs.indexOf(gindex) === -1) {
          this.indexs.push(gindex)
        } else {
          this.indexs = this.indexs.filter((item) => {
            return item != gindex
          });
        }
      },
      // 请求数据
      sendSearch(searchValue) {
        uni.navigateTo({
          url: `../searchpage/searchpage?movieName=${searchValue}`,
          animationType: 'slide-in-bottom'
        })
      }
    }
  }
</script>

<style>
  @import url("search.css");
</style>
