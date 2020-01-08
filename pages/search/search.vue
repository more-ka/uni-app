<template>
  <view class="page">
    <view class="statusBar">
    </view>
    <view class="header">
      <view class="title">搜索</view>
      <view class="search">
        <view class="searchWrapper">
          <view class="searchIconWrapper">
            <image src="../../static/icos/search.png" class="searchIcon"></image>
          </view>
          <view class="inputWrapper">
            <!-- @focus="inputFocus" -->
            <input type="text" v-model="searchValue" placeholder="搜索" 
            confirm-type="search" @confirm="search" />
          </view>
        </view>
      </view>
    </view>
    <view class="main">
      <view v-for="{seatchValue,index} in searchData" :key="index">{{seatchValue}}</view>
      <view class="movie" v-if="searched" v-for="(movie,gIndex) in searchData" :key="movie.id">
        <text class="movieName">{{movie.title}}</text>
        <view class="detail">
          <view class="movieStatus"></view>
          <view class="movieShowtime">时间: <text class="text">{{movie.show_time}}</text></view>
          <view class="movieDirector">导演: <text class="text">{{movie.director}}</text></view>
          <view class="movieTypes">类型: <text class="text">{{movie.types}}</text></view>
          <view class="movieActors">主演: <text class="text">{{movie.actors}}</text></view>
          <view class="movieInfo">剧情:
            <text class="text" v-if="indexs.indexOf(movie.id)===-1">{{movie.info.substring(0,30)}}...</text>
            <text class="text" v-else>{{movie.info}}</text>
            <view class="toggleButton" @click="toggleShowInfo" :data-gIndex='movie.id'>
              <view class="toggleShowInfo">{{indexs.indexOf(movie.id)===-1?'展开':'折叠'}}
              </view>
              <image v-if="indexs.indexOf(movie.id)===-1" class="toggleShowInfoIcon down"></image>
              <image v-else class="toggleShowInfoIcon up"></image>
            </view>
          </view>
        </view>
        <view class="selectLink">播放列表</view>
        <view v-for="(item,index) in JSON.parse(movie.online_link)" :key="index" class="playLink">
          <view v-for="(i,index) in item" :key="index" class="playLinkItem">
            <view v-for="(o,index) in i" :key="index" class="">
              <navigator :url="'../player/player?url='+`${o}`">
                {{Object.keys(i)[0]}}
              </navigator>
            </view>
          </view>
        </view>
      </view>
      
      
      <view class="defaultMovie" v-if="searchData.length===0">
        <text class="title" v-if="searchValues.length!==0">搜索历史</text>
        <view class="searchHistory">
          <view class="searchTerms" v-for="(values,index) in searchValues" :key="index" 
          @click="searchTermsClick" :data-termsIndex='index'>{{values}}</view>
        </view>
        <text class="title">热门影视</text>
        <view class="recommendMovie">
          <view class="movie" v-for="(item,index) in defaultDate" :key="index" 
           @click="recommendMovieClick" :data-movieName="item.name">
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
      if (this.searchData.length === 0) {
        this.searched = false
        this.defaultDate = search.data.rows
      }
      let searchValues
        searchValues = uni.getStorageSync('searchValues')
        if(searchValues.length===0){
          searchValues = []
        }
      this.searchValues = searchValues
    },
    methods: {
      search(e) {
        uni.showToast({
          title: '搜索中...',
          icon: 'loading'
        })
        let searchValue = e.detail.value
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
          searchValues.push(searchValue)
          this.searchValues = searchValues
        }
        if(searchValues.length>=10){
          searchValues = searchValues.slice(0,10)
        }
        this.searchValues = searchValues
        console.log(searchValues);
        uni.setStorageSync('searchValues',searchValues)
        // 视频搜索接口
        return
        this.sendSearch(searchValue)
        
      },
      // 点击历史搜索词填入输入框
      searchTermsClick(e){
        this.searchValue = this.searchValues[e.currentTarget.dataset.termsindex]
      },
      recommendMovieClick(e){
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
      sendSearch(searchValue){
        uni.request({
          method: "POST",
          url: "http://www.geekicon.club/api/v1/video",
          data: {
            'name': searchValue
          },
          // 获取数据, 解析数据
          success: (response) => {
            let data = response.data.data
            if(data){
              this.searched = true
              this.searchData = data
              setTimeout(()=>{
                uni.hideLoading()
              },500)
            }else{
              // 显示自动消失的提示消息
              uni.showToast({
                title: "抱歉,没找到该视频",
                icon: "none"
              })
            }
          }
        })
      }
    }
  }
</script>

<style>
  @import url("search.css");
</style>
