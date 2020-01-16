<template>
  <view class="page">
    <!-- 搜索历史添加删除按钮 -->
    <view class="statusBar"></view>
    <view class="nav">
      <view class="iconWrapper" @click="back">
        <image src="../../static/icos/back.png" class="searchIcon"></image>
      </view>
      <view class="searchWrapper">
        <input class="search" id="search" type="text" ref="search111" @focus="inputFocus = true" v-model="searchTerms"
          placeholder="搜索" confirm-type="search" @confirm="search" />
        <view class="deleteIcon" @click="deleteTerms">
          <image src="../../static/icos/delete.png"></image>
        </view>
      </view>
      <view class="iconWrapper" @click="searchIconClick">
        <image src="../../static/icos/search.png" class="searchIcon"></image>
      </view>
    </view>

    <view class="searchHistory" v-if="inputFocus">
      <view class="title">
        <view>搜索历史</view>
        <view @click="clearSearchTerms">
          <image src="../../static/icos/delete6.png"></image>
        </view>
      </view>
      <view class="searchTerms" v-for="(values,index) in searchValues" :key="index" @click="searchTermsClick"
        :data-termsIndex='index'>{{values}}</view>
    </view>


    <view class="movie" v-if="searchData" v-for="movie in searchData" :key="movie.id">
      <text class="movieName">{{movie.title}}</text>
      <view class="detail">
        <view class="movieStatus"></view>
        <view class="movieShowtime">时间: <text class="text">{{movie.show_time}}</text></view>
        <view class="movieDirector">导演: <text class="text">{{movie.director}}</text></view>
        <view class="movieTypes">类型: <text class="text">{{movie.types}}</text></view>
        <view class="movieActors">主演: <text class="text">{{movie.actors}}</text></view>
        <view class="movieInfo" v-if="movie.info.length > 10">剧情:
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
      <view class="playLink">
        <block v-for="(item,index) in JSON.parse(movie.online_link)" :key="index">
          <view v-for="(i,index) in item" :key="index" class="playLinkItem button">
            <view v-for="(o,index) in i" :key="index" class="">
              <navigator :url="'../player/player?url='+`${o}`">
                {{Object.keys(i)[0]}}
              </navigator>
            </view>
          </view>
        </block>
      </view>
    </view>
    <view v-if="error" class="errorTips">
      <view class="errorTipsWrapper">
        <image src="../../static/icos/error1.png" class="errorIcon"></image>
        <view class="errorMessage">{{errorMessage}}</view>
      </view>
    </view>
<!--    <view v-if="termsIsEmpty" class="errorTips">
      <view class="errorTipsWrapper">
        <image src="../../static/icos/error1.png" class="errorIcon"></image>
        <view class="errorMessage">搜索词为空</view>
      </view>
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        searchData: [],
        indexs: [],
        searchValues: [],
        searchTerms: '',
        error: false,
        inputFocus: false,
        errorMessage: ''
      }
    },
    onLoad(e) {
      let searchValues
      searchValues = uni.getStorageSync('searchValues')
      if (searchValues.length === 0) {
        searchValues = []
      }
      this.searchValues = searchValues
      this.searchTerms = e.movieName
      if (!this.searchTerms) {
        return
      }
      this.getmovie(e.movieName)
    },
    methods: {
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
      getmovie(searchValue) {
        let that = this
        let searchValues = that.searchValues
        let searchTerms = that.searchTerms
        let found = false
        that.inputFocus = false
        for (let value in searchValues) {
          if (searchValues[value] === searchTerms) {
            found = true
            break
          }
        }
        if (!found) {
          searchValues.unshift(searchValue)
        }
        if (searchValues.length > 9) {
          searchValues = searchValues.slice(0, 10)
        }
        that.searchValues = searchValues
        return
        uni.setStorageSync('searchValues', searchValues)
        // return
        uni.showLoading({
          title: '请稍后...',
          icon: 'loading'
        })
        uni.request({
          method: "POST",
          url: "http://www.geekicon.club/api/v1/video",
          data: {
            'name': searchValue
          },
          // 获取数据, 解析数据
          success: (response) => {
            let data = response.data.data
            that.movieNotfound = false
            if (data) {
              that.error = false
              uni.hideLoading()
              that.searchData = data
            } else {
              // 提示消息
              uni.hideLoading()
              that.error = true
              that.searchData = ''
              if(response.statusCode === 429){
                that.errorMessage = '每天最多搜索15次,请明天在试'
              }else{
                that.errorMessage = '抱歉,没找到该视频'
              }
            }
          },
          complete() {
            that.searchTerms = ''
          }
        })
      },
      searchTermsClick(e) {
        this.searchTerms = this.searchValues[e.currentTarget.dataset.termsindex]
      },
      back() {
        uni.navigateBack({
          delta: 1
        })
      },
      searchIconClick() {
        if (!this.searchTerms) {
          this.error = true
          this.errorMessage = '搜索框为空'
          this.searchData = []
        } else {
          this.getmovie(this.searchTerms)
        }
      },
      deleteTerms() {
        this.searchTerms = ''
      },
      clearSearchTerms(){
        let that = this
          uni.showModal({
              title: '提示',
              content: '确认删除搜索历史?',
              success: function (res) {
                  if (res.confirm) {
                      that.searchValues = []
                      uni.removeStorageSync('searchValues')
                  }
              }
          })
        }
    }
  }
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100vw;
    /* #ifdef APP-PLUS */
    margin-top: var(--status-bar-height);
    /* #endif */
    background: #F7F7F7;
    padding-top: 50px;
  }

  /* 状态栏 */
  .statusBar {
    /* #ifdef APP-PLUS */
    height: var(--status-bar-height);
    width: 100%;
    position: fixed;
    top: 0;
    font-size: 14px;
    background: #ffd655;
    /* #endif */
  }

  /* 导航栏 */
  .nav {
    height: 100rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    font-size: 14px;
    background: #ffd655;
    /* #ifdef APP-PLUS */
    margin-top: var(--status-bar-height);
    /* #endif */
  }

  .nav .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80rpx;
  }

  .nav .iconWrapper image {
    display: block;
    width: 40rpx;
    height: 40rpx;
    align-items: center;
    margin: auto;
  }

  .nav .searchWrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #ffffff;
  }

  .nav .searchWrapper input {
    flex: 1;
    padding: 10rpx 10rpx 10rpx 30rpx;
    border-radius: 20px;
  }

  .deleteIcon {
    width: 50rpx;
    height: 50rpx;
    margin-right: 10rpx;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .deleteIcon image {
    height: 30rpx;
    width: 30rpx;
    z-index: 201;
  }

  /* 搜索历史 */

  .searchHistory {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #FFFFFF;
    padding: 20rpx;
  }

  .searchHistory .title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: bold;
    line-height: 1.8;
    font-size: 16px;
  }
  .searchHistory .title view image{
    width: 40rpx;
    height: 40rpx;
    vertical-align: text-bottom;
    margin-right: 20rpx;
  }
  .searchTerms {
    background: #f3f3f3;
    padding: 6rpx 12rpx;
    margin: 10rpx;
    border-radius: 4px;
    font-size: 14px;
    min-width: 60rpx;
    text-align: center;
  }

  /* 视频列表 */
  .movie {
    margin: 30rpx;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    padding: 20rpx;
    border-radius: 10rpx;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.15);
  }

  .movieName {
    margin-top: 6rpx;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20rpx;
    /*  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; */
  }

  /* 视频信息 */
  .detail {
    padding-bottom: 20rpx;
    border-bottom: 1px solid #EAEAEA;
  }

  .detail view {
    color: #848484;
    font-size: 14px;
  }

  .detail view text {
    color: black;
    margin-left: 16rpx;
  }

  .movieInfo {}

  .toggleButton {
    display: inline-flex;
    align-items: center;
  }

  .toggleShowInfo {
    color: #ffd655 !important;
  }

  .text {
    margin-right: 30rpx;
  }

  .toggleShowInfoIcon {
    width: 40rpx;
    height: 40rpx;
    margin-left: 6rpx;
  }

  .toggleShowInfoIcon.down {
    background: url(../../static/icos/down.png) no-repeat 0 0;
    background-size: cover;
  }

  .toggleShowInfoIcon.up {
    background: url(../../static/icos/up.png) no-repeat 0 0;
    background-size: cover;
  }

  /* 播放列表 */
  .selectLink {
    margin: 20rpx 0 20rpx;
    font-size: 14px;
  }

  .playLink {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* position: relative; */
    padding: auto;
    margin: 0 -12rpx;
  }

  .playLinkItem {
    /* flex: 1; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    margin: 16rpx;
    min-width: 50px;
    padding: 8rpx 14rpx;
    border: 1px solid grey;
    font-size: 14px;
    border-image: linear-gradient(to right, #64ccda, #fb5b5a, #e4f9ff) 1 10;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 14px;
  }

  /* 错误提示 */
  .errorTips {
    display: flex;
    width: 100vw;
    height: calc(100vh - 100rpx);
    flex-direction: row;
    justify-content: center;
    text-align: center;
    /* #ifdef APP-PLUS */
    height: calc(100vh - 100rpx - var(--status-bar-height) - 5px);
    /* #endif */
  }

  .errorTipsWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300rpx;
    width: 100vw;
  }

  .errorTips .errorIcon {
    display: flex;
    width: 20px;
    height: 20px;
    margin-right: 20rpx;
    vertical-align: top;
    /* border: 1px solid black; */
  }

  .errorTips .errorMessage {
    display: inline-flex;
    line-height: 40rpx;
    height: 40rpx;
    font-size: 18px;
  }
</style>
