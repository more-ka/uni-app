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
            <input type="text" v-model="searchValue" placeholder="搜索" confirm-type="search" @confirm="search" />
          </view>
        </view>
      </view>
    </view>
    <view class="main">
      <view class="movie" v-for="(movie,gIndex) in responseData" :key="movie.id">
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
              <image v-else class="toggleShowInfoIcon up" ></image>
            </view>
          </view>
        </view>
        <view class="selectLink">播放列表</view>
        <view v-for="(item,index) in JSON.parse(movie.online_link)" :key="index" class="playLink">
          <view v-for="(i,index) in item" :key="index" class="playLinkItem">
            <view v-for="(o,index) in i" :key="index" class="">
              <a :href="o">
                {{Object.keys(i)[0]}}
              </a>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import search from '../../common/search.js'
  export default {
    data() {
      return {
        searchData: [],
        searchValue: '',
        item: '',
        currentIndex: -1,
        indexs: [],
        showMovieInfo: [],
        responseData: [{
          "id": 44712,
          "title": "庆余年 第一季",
          "status": "更至17集",
          "property": "",
          "types": "国产剧",
          "area": "中国",
          "lang": "汉语普通话",
          "grade": 0.0,
          "director": "孙皓",
          "actors": "张若昀,李沁,陈道明,吴刚,于荣光,辛芷蕾,宋轶,刘桦,田雨,郭麒麟,肖战,李小冉",
          "update_time": "",
          "show_time": 2019,
          "info": "范闲十五岁的时候，父亲范建及监察院院长陈萍萍派用毒高手费介教他识毒用毒和武功，四年后范闲武力已属上乘。在破解了一场投毒事件后，他带着危机感和对真相的探索前赴京都。在熟悉京都的过程中，范闲见识了柳如玉和弟弟范思辙的下马威，对未来的妻子林婉儿一见钟情，也看到了亭亭玉立的才女妹妹范若若。然而随即平静的生活就被突然打破，范闲在牛栏街上遭遇了一场围杀，滕子京为救范闲而死，各方庆贺范闲的逃生，更引得太子和二皇子争相拉拢，却无人在意死去的卑微侍卫滕子京，范闲感到心寒，更加理解母亲叶轻眉要改变世界的想法。在充满正义的小伙伴",
          "m3u8_link": "[[{\"第01集\": \"https://youku.com-zx-youku.com/20191126/16827_e402e8d5/index.m3u8\"}, {\"第02集\": \"https://youku.com-zx-youku.com/20191126/16828_a244090a/index.m3u8\"}, {\"第03集\": \"https://youku.com-zx-youku.com/20191126/16829_07985ccf/index.m3u8\"}, {\"第04集\": \"https://youku.com-zx-youku.com/20191126/16830_3cce137f/index.m3u8\"}, {\"第05集\": \"https://youku.com-zx-youku.com/20191127/16960_b2b27e1e/index.m3u8\"}, {\"第06集\": \"https://youku.com-zx-youku.com/20191127/16959_ec3ac569/index.m3u8\"}, {\"第07集\": \"https://youku.com-zx-youku.com/20191129/17221_287f6696/index.m3u8\"}, {\"第08集\": \"https://youku.com-zx-youku.com/20191129/17220_9bb8ec52/index.m3u8\"}, {\"第09集\": \"https://youku.com-zx-youku.com/20191202/17664_325cf77e/index.m3u8\"}, {\"第10集\": \"https://youku.com-zx-youku.com/20191202/17665_9b912a54/index.m3u8\"}, {\"第11集\": \"https://youku.com-zx-youku.com/20191202/17667_af732740/index.m3u8\"}, {\"第12集\": \"https://youku.com-zx-youku.com/20191203/17794_5c0ed32b/index.m3u8\"}, {\"第13集\": \"https://youku.com-zx-youku.com/20191203/17795_d004b3af/index.m3u8\"}, {\"第14集\": \"https://youku.com-zx-youku.com/20191204/17946_cbe0c197/index.m3u8\"}, {\"第15集\": \"https://youku.com-zx-youku.com/20191204/17947_273a9eb1/index.m3u8\"}, {\"第16集\": \"https://youku.com-zx-youku.com/20191207/18331_ce1c5388/index.m3u8\"}, {\"第17集\": \"https://youku.com-zx-youku.com/20191207/18330_5693e880/index.m3u8\"}]]",
          "online_link": "[[{\"第01集\": \"https://youku.com-zx-youku.com/share/1be8d57459a63a3275d039fa93ca5a1e\"}, {\"第02集\": \"https://youku.com-zx-youku.com/share/131799f66a96ee034181e8a54b4c0b49\"}, {\"第03集\": \"https://youku.com-zx-youku.com/share/d958bc7285c14d6f775973d6d723d17b\"}, {\"第04集\": \"https://youku.com-zx-youku.com/share/0672340d6136be227ea1cbc63fa221b2\"}, {\"第05集\": \"https://youku.com-zx-youku.com/share/e3c87529e817b9f8468c02ee8c81ed89\"}, {\"第06集\": \"https://youku.com-zx-youku.com/share/a39911c27bc4f0f6bb476b41c29f4a72\"}, {\"第07集\": \"https://youku.com-zx-youku.com/share/bbd24387cfc440ae2aa2a88ae96a4a79\"}, {\"第08集\": \"https://youku.com-zx-youku.com/share/e376d5d818f7665946b0a88c7632e311\"}, {\"第09集\": \"https://youku.com-zx-youku.com/share/8d98ea39261415654200fc3faa058283\"}, {\"第10集\": \"https://youku.com-zx-youku.com/share/d96fd4caf8e622ab6c5ef52f5e4feff6\"}, {\"第11集\": \"https://youku.com-zx-youku.com/share/671d4d4efed6a3d7029c0b266da58d63\"}, {\"第12集\": \"https://youku.com-zx-youku.com/share/7153f307b5c0c430849e99573d3f3176\"}, {\"第13集\": \"https://youku.com-zx-youku.com/share/7850206c848ca44eca2d53a5e8ea5d68\"}, {\"第14集\": \"https://youku.com-zx-youku.com/share/dc4ff0eb47dc4499c160ae22d8413116\"}, {\"第15集\": \"https://youku.com-zx-youku.com/share/6af4fc014bd8b2c00572f5149fc7f522\"}, {\"第16集\": \"https://youku.com-zx-youku.com/share/bd6a06f41bae67be959e5b44addc880f\"}, {\"第17集\": \"https://youku.com-zx-youku.com/share/d00cceb10ae0b472a7027f5acc679538\"}]]",
          "xunlei_link": ""
        }, {
          "id": 44655,
          "title": "庆余年第一季",
          "status": "更新至8集",
          "property": "国产剧 古装",
          "types": "国产剧 古装",
          "area": "大陆",
          "lang": "国语",
          "grade": 0.0,
          "director": "孙皓",
          "actors": "张若昀,李沁,陈道明,吴刚,于荣光,辛芷蕾,宋轶,刘桦,田雨,郭麒麟,肖战,李小冉",
          "update_time": "2019-11-29 14:00:01",
          "show_time": 2019,
          "info": "范闲十五岁的时候，父亲范建及监察院院长陈萍萍派用毒高手费介教他识毒用毒和武功，四年后范闲武力已属上乘。在破解了一场投毒事件后，他带着危机感和对真相的探索前赴京都。在熟悉京都的过程中，范闲见识了柳如玉和弟弟范思辙的下马威，对未来的妻子林婉儿一见钟情，也看到了亭亭玉立的才女妹妹范若若。然而随即平静的生活就被突然打破，范闲在牛栏街上遭遇了一场围杀，滕子京为救范闲而死，各方庆贺范闲的逃生，更引得太子和二皇子争相拉拢，却无人在意死去的卑微侍卫滕子京，范闲感到心寒，更加理解母亲叶轻眉要改变世界的想法。在充满正义的小伙伴",
          "m3u8_link": "[[{\"第01集\": \"https://youku.cdn4-okzy.com/20191126/2980_2373c5f5/index.m3u8\"}, {\"第02集\": \"https://youku.cdn4-okzy.com/20191126/2981_47a13f77/index.m3u8\"}, {\"第03集\": \"https://youku.cdn4-okzy.com/20191126/2982_55383b49/index.m3u8\"}, {\"第04集\": \"https://youku.cdn4-okzy.com/20191126/2983_e60c5212/index.m3u8\"}, {\"第05集\": \"https://youku.cdn4-okzy.com/20191127/3008_39db40dd/index.m3u8\"}, {\"第06集\": \"https://youku.cdn4-okzy.com/20191127/3009_125e1cb4/index.m3u8\"}, {\"第07集\": \"https://youku.com-iqiyi.net/20191129/22660_442e68e5/index.m3u8\"}, {\"第08集\": \"https://bilibili.com-h-bilibili.com/20191129/10197_f01ddd9e/index.m3u8\"}]]",
          "online_link": "[[{\"第01集\": \"https://youku.cdn4-okzy.com/share/aa6b7ad9d68bf3443c35d23de844463b\"}, {\"第02集\": \"https://youku.cdn4-okzy.com/share/9ff0525c64bf3d4c9957a1d4397f1b40\"}, {\"第03集\": \"https://youku.cdn4-okzy.com/share/a11ce019e96a4c60832eadd755a17a58\"}, {\"第04集\": \"https://youku.cdn4-okzy.com/share/b1b0432ceafb0ce714426e9114852ac7\"}, {\"第05集\": \"https://youku.cdn4-okzy.com/share/c02f9de3c2f3040751818aacc7f60b74\"}, {\"第06集\": \"https://youku.cdn4-okzy.com/share/ee16fa83c0f151ef85e617f5aa3867a6\"}, {\"第07集\": \"https://youku.com-iqiyi.net/share/192134aa19baa78b8b2a5718a868412b\"}, {\"第08集\": \"https://bilibili.com-h-bilibili.com/share/ea67d66c5b01e5aa93fd5407f041b53d\"}]]",
          "xunlei_link": "[{\"第01集\": \"http://down.okdown6.com/20191126/2980_2373c5f5/庆余年第01集.mp4\"}, {\"第02集\": \"http://down.okdown6.com/20191126/2981_47a13f77/庆余年第02集.mp4\"}, {\"第03集\": \"http://down.okdown6.com/20191126/2982_55383b49/庆余年第03集.mp4\"}, {\"第04集\": \"http://down.okdown6.com/20191126/2983_e60c5212/庆余年第04集.mp4\"}, {\"第05集\": \"http://down.okdown6.com/20191127/3008_39db40dd/庆余年第5集.mp4\"}, {\"第06集\": \"http://down.okdown6.com/20191127/3009_125e1cb4/庆余年第6集.mp4\"}, {\"第07集\": \"http://okxxxxzy.xzokzyzy.com/20191129/22660_442e68e5/7qing.mp4\"}, {\"第08集\": \"http://okxxxxzy.xzokzyzy.com/20191129/10197_f01ddd9e/8qing.mp4\"}]"
        }, {
          "id": 44961,
          "title": "庆余年",
          "status": "更新至17集",
          "property": "国产剧 古装",
          "types": "国产剧 古装",
          "area": "大陆",
          "lang": "国语",
          "grade": 0.0,
          "director": "孙皓",
          "actors": "张若昀,李沁,陈道明,吴刚",
          "update_time": "2019-12-06 11:14:58",
          "show_time": 2019,
          "info": "范闲十五岁的时候，父亲范建及监察院院长陈萍萍派用毒高手费介教他识毒用毒和武功，四年后范闲武力已属上乘。在破解了一场投毒事件后，他带着危机感和对真相的探索前赴京都。在熟悉京都的过程中，范闲见识了柳如玉和弟弟范思辙的下马威，对未来的妻子林婉儿一见钟情，也看到了亭亭玉立的才女妹妹范若若。然而随即平静的生活就被突然打破，范闲在牛栏街上遭遇了一场围杀，滕子京为救范闲而死，各方庆贺范闲的逃生，更引得太子和二皇子争相拉拢，却无人在意死去的卑微侍卫滕子京，范闲感到心寒，更加理解母亲叶轻眉要改变世界的想法。在充满正义的小伙伴",
          "m3u8_link": "[[{\"第01集\": \"https://cn7.343480.com/20191127/xVs8hXiY/index.m3u8\"}, {\"第02集\": \"https://cn7.343480.com/20191127/md4uClDd/index.m3u8\"}, {\"第03集\": \"https://cn7.343480.com/20191127/7tQzk4jy/index.m3u8\"}, {\"第04集\": \"https://cn7.343480.com/20191127/PKGxrrcS/index.m3u8\"}, {\"第05集\": \"https://cn5.343480.com/20191128/LHl5KYYI/index.m3u8\"}, {\"第06集\": \"https://cn5.343480.com/20191128/P3EwBwRY/index.m3u8\"}, {\"第07集\": \"https://cn4.343480.com/20191201/Ec4RARTX/index.m3u8\"}, {\"第08集\": \"https://cn4.343480.com/20191201/Dno1kFzI/index.m3u8\"}, {\"第09集\": \"https://cn7.343480.com/20191202/s1OvYgMZ/index.m3u8\"}, {\"第10集\": \"https://cn7.343480.com/20191202/cTamcEVL/index.m3u8\"}, {\"第11集\": \"https://cn7.343480.com/20191202/mtpAakUo/index.m3u8\"}, {\"第12集\": \"https://cn7.343480.com/20191203/ge8y5xyf/index.m3u8\"}, {\"第13集\": \"https://cn7.343480.com/20191203/H9tErLOS/index.m3u8\"}, {\"第14集\": \"https://cn5.343480.com/20191204/SqFCbUCL/index.m3u8\"}, {\"第15集\": \"https://cn5.343480.com/20191204/qij0vCzk/index.m3u8\"}, {\"第16集\": \"https://cn6.343480.com/20191206/YnUgdKkF/index.m3u8\"}, {\"第17集\": \"https://cn6.343480.com/20191206/TcAfTIAC/index.m3u8\"}]]",
          "online_link": "[[{\"第01集\": \"https://cn7.343480.com/share/r8XX3GONNAAVqzkN\"}, {\"第02集\": \"https://cn7.343480.com/share/vJDAERNa6zo0SFeD\"}, {\"第03集\": \"https://cn7.343480.com/share/dIrSsajLOxvxxaQC\"}, {\"第04集\": \"https://cn7.343480.com/share/YULDsOyZkF1HC26o\"}, {\"第05集\": \"https://cn5.343480.com/share/ukNbtAxAaDnzQgeL\"}, {\"第06集\": \"https://cn5.343480.com/share/bzDTvxe9z4V4Sm1G\"}, {\"第07集\": \"https://cn4.343480.com/share/CXtklZgnac9ttCq1\"}, {\"第08集\": \"https://cn4.343480.com/share/dXHowyz7sJCxf3mY\"}, {\"第09集\": \"https://cn7.343480.com/share/roPtDji5XQvxJrBg\"}, {\"第10集\": \"https://cn7.343480.com/share/sKCB3Z4I5eadvENK\"}, {\"第11集\": \"https://cn7.343480.com/share/EMPRt34Fh38y3W2n\"}, {\"第12集\": \"https://cn7.343480.com/share/FMG76L1NYC5EsZXd\"}, {\"第13集\": \"https://cn7.343480.com/share/5mYGTrPaduA5zfVm\"}, {\"第14集\": \"https://cn5.343480.com/share/MChzXRVrygA8hc2H\"}, {\"第15集\": \"https://cn5.343480.com/share/unMbFdoO9kPJybGi\"}, {\"第16集\": \"https://cn6.343480.com/share/ILlEaEVL334SDnlQ\"}, {\"第17集\": \"https://cn6.343480.com/share/ngxITJz7rQosWLZB\"}]]",
          "xunlei_link": ""
        }]
      }
    },
    onReachBottom() {},
    onLoad() {},
    methods: {
      search(e) {
        console.log(e.detail.value);
        // 视频搜索接口
        uni.request({
          method: "POST",
          url: "http://www.geekicon.club/api/v1/video",
          data: {
            'name': e.detail.value
          },
          // 获取数据, 解析数据
          success: (response) => {
            console.log(response)
            this.searchData = response.data.data
            console.log(this.searchData);
          }
        });
      },
      toggleShowInfo(e) {
        let gindex = e.currentTarget.dataset.gindex - 0
        if(this.indexs.indexOf(gindex)===-1){
          this.indexs.push(gindex)
        }else{
           this.indexs = this.indexs.filter((item)=> {
               return item != gindex
           });
        }
      }
    }
  }
</script>

<style>
  @import url("search.css");
</style>
