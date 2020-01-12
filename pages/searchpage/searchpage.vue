<template>
	<view class="page">
    <!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
		<view class="movie" v-if="searchData" v-for="movie in searchData" :key="movie.id">
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
		    <view v-for="(i,index) in item" :key="index" class="playLinkItem button">
		      <view v-for="(o,index) in i" :key="index" class="">
		        <navigator :url="'../player/player?url='+`${o}`">
		          {{Object.keys(i)[0]}}
		        </navigator>
		      </view>
		    </view>
		  </view>
		</view>
      <view v-if="movieNotfound" class="errorTips">
        <image src="../../static/icos/error1.png" class="errorIcon"></image>
        <view class="errorMessage">抱歉, 没有找到这个视频</view>
      </view>
      <view v-if="termsIsEmpty" class="errorTips">
        <image src="../../static/icos/error1.png" class="errorIcon"></image>
        <view class="errorMessage">搜索词为空</view>
      </view>
  </view>
</template>

<script>
  import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
    components: {uniNavBar},
		data() {
			return {
				searchData: [{"id":47113,"title":"庆余年","status":"第一季全46集","property":"国产剧","types":"国产剧","area":"中国","lang":"汉语普通话","grade":0.0,"director":"孙皓","actors":"张若昀,李沁,陈道明,吴刚,于荣光,辛芷蕾,宋轶,刘桦,田雨,郭麒麟,肖战,李小冉","update_time":"2019-12-20","show_time":2019,"info":"范闲十五岁的时候，父亲范建及监察院院长陈萍萍派用毒高手费介教他识毒用毒和武功，四年后范闲武力已属上乘。在破解了一场投毒事件后，他带着危机感和对真相的探索前赴京都。在熟悉京都的过程中，范闲见识了柳如玉和弟弟范思辙的下马威，对未来的妻子林婉儿一见钟情，也看到了亭亭玉立的才女妹妹范若若。然而随即平静的生活就被突然打破，范闲在牛栏街上遭遇了一场围杀，滕子京为救范闲而死，各方庆贺范闲的逃生，更引得太子和二皇子争相拉拢，却无人在意死去的卑微侍卫滕子京，范闲感到心寒，更加理解母亲叶轻眉要改变世界的想法。在充满正义的小伙伴","m3u8_link":"[[{\"第01集\": \"https://youku.com-zx-youku.com/20191126/16827_e402e8d5/index.m3u8\"}, {\"第02集\": \"https://youku.com-zx-youku.com/20191126/16828_a244090a/index.m3u8\"}, {\"第03集\": \"https://youku.com-zx-youku.com/20191126/16829_07985ccf/index.m3u8\"}, {\"第04集\": \"https://youku.com-zx-youku.com/20191126/16830_3cce137f/index.m3u8\"}, {\"第05集\": \"https://youku.com-zx-youku.com/20191127/16960_b2b27e1e/index.m3u8\"}, {\"第06集\": \"https://youku.com-zx-youku.com/20191127/16959_ec3ac569/index.m3u8\"}, {\"第07集\": \"https://youku.com-zx-youku.com/20191129/17221_287f6696/index.m3u8\"}, {\"第08集\": \"https://youku.com-zx-youku.com/20191129/17220_9bb8ec52/index.m3u8\"}, {\"第09集\": \"https://youku.com-zx-youku.com/20191202/17664_325cf77e/index.m3u8\"}, {\"第10集\": \"https://youku.com-zx-youku.com/20191202/17665_9b912a54/index.m3u8\"}, {\"第11集\": \"https://youku.com-zx-youku.com/20191202/17667_af732740/index.m3u8\"}, {\"第12集\": \"https://youku.com-zx-youku.com/20191203/17794_5c0ed32b/index.m3u8\"}, {\"第13集\": \"https://youku.com-zx-youku.com/20191203/17795_d004b3af/index.m3u8\"}, {\"第14集\": \"https://youku.com-zx-youku.com/20191204/17946_cbe0c197/index.m3u8\"}, {\"第15集\": \"https://youku.com-zx-youku.com/20191204/17947_273a9eb1/index.m3u8\"}, {\"第16集\": \"https://youku.com-zx-youku.com/20191207/18331_ce1c5388/index.m3u8\"}, {\"第17集\": \"https://youku.com-zx-youku.com/20191207/18330_5693e880/index.m3u8\"}, {\"第18集\": \"https://youku.com-zx-youku.com/20191210/18735_2166e695/index.m3u8\"}, {\"第19集\": \"https://youku.com-zx-youku.com/20191210/18736_2b721443/index.m3u8\"}, {\"第20集\": \"https://youku.com-zx-youku.com/20191210/18764_c510998d/index.m3u8\"}, {\"第21集\": \"https://youku.com-zx-youku.com/20191210/18765_fa4f4bdb/index.m3u8\"}, {\"第22集\": \"https://youku.com-zx-youku.com/20191211/18903_248ac9f3/index.m3u8\"}, {\"第23集\": \"https://youku.com-zx-youku.com/20191211/18904_20b515a5/index.m3u8\"}, {\"第24集\": \"https://youku.com-zx-youku.com/20191211/18908_420e9a40/index.m3u8\"}, {\"第25集\": \"https://youku.com-zx-youku.com/20191211/18905_b5a18c98/index.m3u8\"}, {\"第26集\": \"https://youku.com-zx-youku.com/20191211/18906_e8876783/index.m3u8\"}, {\"第27集\": \"https://youku.com-zx-youku.com/20191211/18907_47c8bef4/index.m3u8\"}, {\"第28集\": \"https://youku.com-zx-iqiyi.com/20191216/10137_091df733/index.m3u8\"}, {\"第29集\": \"https://youku.com-zx-youku.com/20191216/19692_6b11a0c8/index.m3u8\"}, {\"第30集\": \"https://youku.com-zx-iqiyi.com/20191216/10140_b16e68b5/index.m3u8\"}, {\"第31集\": \"https://youku.com-zx-iqiyi.com/20191216/10141_7dca526d/index.m3u8\"}, {\"第32集\": \"https://youku.com-zx-iqiyi.com/20191216/10157_60cf4513/index.m3u8\"}, {\"第33集\": \"https://youku.com-zx-iqiyi.com/20191216/10158_018830bb/index.m3u8\"}, {\"第34集\": \"https://youku.com-zx-youku.com/20191219/20143_d484578e/index.m3u8\"}, {\"第35集\": \"https://youku.com-zx-youku.com/20191219/20142_7d060176/index.m3u8\"}, {\"第36集\": \"https://youku.com-zx-youku.com/20191219/20150_ba54dc11/index.m3u8\"}, {\"第37集\": \"https://youku.com-zx-youku.com/20191219/20130_a2111b4e/index.m3u8\"}, {\"第38集\": \"https://youku.com-zx-youku.com/20191219/20131_db7a6323/index.m3u8\"}, {\"第39集\": \"https://youku.com-zx-youku.com/20191219/20149_32063996/index.m3u8\"}, {\"第40集\": \"https://youku.com-zx-youku.com/20191219/20139_587f79c8/index.m3u8\"}, {\"第41集\": \"https://youku.com-zx-youku.com/20191219/20151_39e4e9f5/index.m3u8\"}, {\"第42集\": \"https://youku.com-zx-youku.com/20191219/20138_3f26448e/index.m3u8\"}, {\"第43集\": \"https://youku.com-zx-youku.com/20191219/20137_fc1d98d3/index.m3u8\"}, {\"第44集\": \"https://youku.com-zx-youku.com/20191219/20148_2200a08f/index.m3u8\"}, {\"第45集\": \"https://youku.com-zx-youku.com/20191219/20147_1f6d53fd/index.m3u8\"}, {\"第46集\": \"https://youku.com-zx-youku.com/20191219/20146_4d095f00/index.m3u8\"}]]","online_link":"[[{\"第01集\": \"https://youku.com-zx-youku.com/share/1be8d57459a63a3275d039fa93ca5a1e\"}, {\"第02集\": \"https://youku.com-zx-youku.com/share/131799f66a96ee034181e8a54b4c0b49\"}, {\"第03集\": \"https://youku.com-zx-youku.com/share/d958bc7285c14d6f775973d6d723d17b\"}, {\"第04集\": \"https://youku.com-zx-youku.com/share/0672340d6136be227ea1cbc63fa221b2\"}, {\"第05集\": \"https://youku.com-zx-youku.com/share/e3c87529e817b9f8468c02ee8c81ed89\"}, {\"第06集\": \"https://youku.com-zx-youku.com/share/a39911c27bc4f0f6bb476b41c29f4a72\"}, {\"第07集\": \"https://youku.com-zx-youku.com/share/bbd24387cfc440ae2aa2a88ae96a4a79\"}, {\"第08集\": \"https://youku.com-zx-youku.com/share/e376d5d818f7665946b0a88c7632e311\"}, {\"第09集\": \"https://youku.com-zx-youku.com/share/8d98ea39261415654200fc3faa058283\"}, {\"第10集\": \"https://youku.com-zx-youku.com/share/d96fd4caf8e622ab6c5ef52f5e4feff6\"}, {\"第11集\": \"https://youku.com-zx-youku.com/share/671d4d4efed6a3d7029c0b266da58d63\"}, {\"第12集\": \"https://youku.com-zx-youku.com/share/7153f307b5c0c430849e99573d3f3176\"}, {\"第13集\": \"https://youku.com-zx-youku.com/share/7850206c848ca44eca2d53a5e8ea5d68\"}, {\"第14集\": \"https://youku.com-zx-youku.com/share/dc4ff0eb47dc4499c160ae22d8413116\"}, {\"第15集\": \"https://youku.com-zx-youku.com/share/6af4fc014bd8b2c00572f5149fc7f522\"}, {\"第16集\": \"https://youku.com-zx-youku.com/share/bd6a06f41bae67be959e5b44addc880f\"}, {\"第17集\": \"https://youku.com-zx-youku.com/share/d00cceb10ae0b472a7027f5acc679538\"}, {\"第18集\": \"https://youku.com-zx-youku.com/share/17bfc1d7c4dad1d69cf2a78825516205\"}, {\"第19集\": \"https://youku.com-zx-youku.com/share/a813dd53b48d27057751934eb852c345\"}, {\"第20集\": \"https://youku.com-zx-youku.com/share/2e584bf14f2b3b604af609a0d4ff1e8f\"}, {\"第21集\": \"https://youku.com-zx-youku.com/share/4fc245833764a5130d7e65c94dac4892\"}, {\"第22集\": \"https://youku.com-zx-youku.com/share/6df78d4fc875242dbc5d7c8dba32b526\"}, {\"第23集\": \"https://youku.com-zx-youku.com/share/066763a699fbe4dc6205bac5d616162b\"}, {\"第24集\": \"https://youku.com-zx-youku.com/share/f4bd67327fd01a153081ab6cf611a0e6\"}, {\"第25集\": \"https://youku.com-zx-youku.com/share/82c000542cf828ca7c5d80972fb92c63\"}, {\"第26集\": \"https://youku.com-zx-youku.com/share/ae9402b067df450afb7e5e9cbeeb77ea\"}, {\"第27集\": \"https://youku.com-zx-youku.com/share/91726a6e8c9faa2bb5f26d442a59c203\"}, {\"第28集\": \"https://youku.com-zx-iqiyi.com/share/715e8ba46f8bc29c24f3fbfdb8d96d71\"}, {\"第29集\": \"https://youku.com-zx-youku.com/share/e6bd5269975ae766323b7a9b7283553c\"}, {\"第30集\": \"https://youku.com-zx-iqiyi.com/share/d85688fce613669775c5eef50f20386a\"}, {\"第31集\": \"https://youku.com-zx-iqiyi.com/share/5c12a4bcabe8958990462298b5510893\"}, {\"第32集\": \"https://youku.com-zx-iqiyi.com/share/cadc4583c983c78f9cb03ec0a7ddaf1f\"}, {\"第33集\": \"https://youku.com-zx-iqiyi.com/share/a5c7b30fb632c92feb59154517223dc9\"}, {\"第34集\": \"https://youku.com-zx-youku.com/share/9c75bab0f5d964591655e73e7c22c540\"}, {\"第35集\": \"https://youku.com-zx-youku.com/share/a7fddb9c43e310c9554eacfa196eba3e\"}, {\"第36集\": \"https://youku.com-zx-youku.com/share/dfc0ddf31f87eeef737ffb16705467b5\"}, {\"第37集\": \"https://youku.com-zx-youku.com/share/6147246665001872dd5a886d418f990c\"}, {\"第38集\": \"https://youku.com-zx-youku.com/share/565d9a3631f5940b9facd0f153b5f569\"}, {\"第39集\": \"https://youku.com-zx-youku.com/share/9d1cedfbd54ff2444c04f3730c562b75\"}, {\"第40集\": \"https://youku.com-zx-youku.com/share/3ff35d5b17f95d78ffcf8e465f1b6019\"}, {\"第41集\": \"https://youku.com-zx-youku.com/share/d9e463c17706da6e0606b5becce78531\"}, {\"第42集\": \"https://youku.com-zx-youku.com/share/5fd3864b73ab0f55a568774e589ccfcf\"}, {\"第43集\": \"https://youku.com-zx-youku.com/share/caad81ebb701ccc8e872e601af4f56d1\"}, {\"第44集\": \"https://youku.com-zx-youku.com/share/20d1b1738e2f75c4629e32f1011ab25d\"}, {\"第45集\": \"https://youku.com-zx-youku.com/share/9bc804e36dfda950c21b6022e67863ef\"}, {\"第46集\": \"https://youku.com-zx-youku.com/share/12479ddde207e0bcfc2c19b8ca87c926\"}]]","xunlei_link":""},{"id":47112,"title":"庆余年第一季完结","status":"","property":"国产剧","types":"国产剧 古装","area":"大陆","lang":"国语","grade":0.0,"director":"孙皓","actors":"张若昀,李沁,陈道明,吴刚,于荣光,辛芷蕾,宋轶,刘桦,田雨,郭麒麟,肖战,李小冉","update_time":"2019-12-20","show_time":2019,"info":" \n      \n    ","m3u8_link":"[[{\"第01集\": \"https://youku.cdn4-okzy.com/20191126/2980_2373c5f5/index.m3u8\"}, {\"第02集\": \"https://youku.cdn4-okzy.com/20191126/2981_47a13f77/index.m3u8\"}, {\"第03集\": \"https://youku.cdn4-okzy.com/20191126/2982_55383b49/index.m3u8\"}, {\"第04集\": \"https://youku.cdn4-okzy.com/20191126/2983_e60c5212/index.m3u8\"}, {\"第05集\": \"https://youku.cdn4-okzy.com/20191127/3008_39db40dd/index.m3u8\"}, {\"第06集\": \"https://youku.cdn4-okzy.com/20191127/3009_125e1cb4/index.m3u8\"}, {\"第07集\": \"https://youku.com-iqiyi.net/20191129/22660_442e68e5/index.m3u8\"}, {\"第08集\": \"https://bilibili.com-h-bilibili.com/20191129/10197_f01ddd9e/index.m3u8\"}, {\"第09集\": \"https://youku.cdn4-okzy.com/20191202/3130_1a089dec/index.m3u8\"}, {\"第10集\": \"https://youku.cdn4-okzy.com/20191202/3131_195ef1a8/index.m3u8\"}, {\"第11集\": \"https://youku.cdn4-okzy.com/20191202/3132_465e4668/index.m3u8\"}, {\"第12集\": \"https://youku.cdn4-okzy.com/20191203/3167_0e6f23c5/index.m3u8\"}, {\"第13集\": \"https://youku.cdn4-okzy.com/20191203/3168_bf207017/index.m3u8\"}, {\"第14集\": \"https://bilibili.com-h-bilibili.com/20191204/10207_d2c2e8e6/index.m3u8\"}, {\"第15集\": \"https://bilibili.com-h-bilibili.com/20191204/10208_af88b19c/index.m3u8\"}, {\"第16集\": \"https://bilibili.com-h-bilibili.com/20191206/10210_07a53b63/index.m3u8\"}, {\"第17集\": \"https://youku.com-iqiyi.net/20191206/22671_b5696b3b/index.m3u8\"}, {\"第18集\": \"https://iqiyi.cdn9-okzy.com/20191209/3270_8c693380/index.m3u8\"}, {\"第19集\": \"https://iqiyi.cdn9-okzy.com/20191209/3271_380cbd53/index.m3u8\"}, {\"第20集\": \"https://iqiyi.cdn9-okzy.com/20191210/3272_efc623e6/index.m3u8\"}, {\"第21集\": \"https://iqiyi.cdn9-okzy.com/20191210/3273_4d8fc6a0/index.m3u8\"}, {\"第22集\": \"https://youku.cdn4-okzy.com/20191211/3318_248ac9f3/index.m3u8\"}, {\"第23集\": \"https://youku.cdn4-okzy.com/20191211/3322_8a77af26/index.m3u8\"}, {\"第24集\": \"https://youku.cdn4-okzy.com/20191211/3319_69cc8e98/index.m3u8\"}, {\"第25集\": \"https://youku.cdn4-okzy.com/20191211/3320_654f198f/index.m3u8\"}, {\"第26集\": \"https://youku.cdn4-okzy.com/20191211/3323_7a943d8f/index.m3u8\"}, {\"第27集\": \"https://youku.cdn4-okzy.com/20191211/3321_c713f248/index.m3u8\"}, {\"第28集\": \"https://bilibili.com-h-bilibili.com/20191216/10230_0ac6d878/index.m3u8\"}, {\"第29集\": \"https://youku.com-iqiyi.net/20191216/22687_ac28360f/index.m3u8\"}, {\"第30集\": \"https://youku.cdn4-okzy.com/20191216/3397_a71b720d/index.m3u8\"}, {\"第31集\": \"https://youku.cdn4-okzy.com/20191216/3398_9e626e45/index.m3u8\"}, {\"第32集\": \"https://youku.cdn4-okzy.com/20191216/3399_60cf4513/index.m3u8\"}, {\"第33集\": \"https://youku.cdn4-okzy.com/20191216/3400_018830bb/index.m3u8\"}, {\"第34集\": \"https://youku.cdn1-okzy.com/20191219/10651_d484578e/index.m3u8\"}, {\"第35集\": \"https://youku.cdn1-okzy.com/20191219/10652_7d060176/index.m3u8\"}, {\"第36集\": \"https://youku.cdn2-okzy.com/20191219/6505_009239ff/index.m3u8\"}, {\"第37集\": \"https://youku.cdn2-okzy.com/20191219/6504_107c0620/index.m3u8\"}, {\"第38集\": \"https://youku.cdn4-okzy.com/20191219/3450_c47f76f5/index.m3u8\"}, {\"第39集\": \"https://youku.cdn4-okzy.com/20191219/3448_32063996/index.m3u8\"}, {\"第40集\": \"https://youku.cdn7-okzy.com/20191220/16294_599ad0b2/index.m3u8\"}, {\"第41集\": \"https://youku.cdn7-okzy.com/20191220/16292_aeb8f7d0/index.m3u8\"}, {\"第42集\": \"https://iqiyi.com-ok-iqiyi.com/20191220/12010_ab818018/index.m3u8\"}, {\"第43集\": \"https://iqiyi.com-ok-iqiyi.com/20191220/12009_c9a72fb0/index.m3u8\"}, {\"第44集\": \"https://youku.cdn4-okzy.com/20191219/3447_2200a08f/index.m3u8\"}, {\"第45集\": \"https://youku.cdn4-okzy.com/20191219/3449_a70e5a03/index.m3u8\"}, {\"第46集\": \"https://youku.cdn6-okzy.com/20191220/8314_0d8250df/index.m3u8\"}]]","online_link":"[[{\"第01集\": \"https://youku.cdn4-okzy.com/share/aa6b7ad9d68bf3443c35d23de844463b\"}, {\"第02集\": \"https://youku.cdn4-okzy.com/share/9ff0525c64bf3d4c9957a1d4397f1b40\"}, {\"第03集\": \"https://youku.cdn4-okzy.com/share/a11ce019e96a4c60832eadd755a17a58\"}, {\"第04集\": \"https://youku.cdn4-okzy.com/share/b1b0432ceafb0ce714426e9114852ac7\"}, {\"第05集\": \"https://youku.cdn4-okzy.com/share/c02f9de3c2f3040751818aacc7f60b74\"}, {\"第06集\": \"https://youku.cdn4-okzy.com/share/ee16fa83c0f151ef85e617f5aa3867a6\"}, {\"第07集\": \"https://youku.com-iqiyi.net/share/192134aa19baa78b8b2a5718a868412b\"}, {\"第08集\": \"https://bilibili.com-h-bilibili.com/share/ea67d66c5b01e5aa93fd5407f041b53d\"}, {\"第09集\": \"https://youku.cdn4-okzy.com/share/c922de9e01cba8a4684f6c3471130e4c\"}, {\"第10集\": \"https://youku.cdn4-okzy.com/share/54fda78aa8a09b4d77b5aaec57b75028\"}, {\"第11集\": \"https://youku.cdn4-okzy.com/share/fb2606a5068901da92473666256e6e5b\"}, {\"第12集\": \"https://youku.cdn4-okzy.com/share/20c86a628232a67e7bd46f76fba7ce12\"}, {\"第13集\": \"https://youku.cdn4-okzy.com/share/ce393994e8cf430867408678d1a5a9c8\"}, {\"第14集\": \"https://bilibili.com-h-bilibili.com/share/8171ac2c5544a5cb54ac0f38bf477af4\"}, {\"第15集\": \"https://bilibili.com-h-bilibili.com/share/acb55f9af76808c5fd5522dcdb519fde\"}, {\"第16集\": \"https://bilibili.com-h-bilibili.com/share/7570284063f2de77ff3145e5f321f2c5\"}, {\"第17集\": \"https://youku.com-iqiyi.net/share/690875cea78285fe8770082c6d35d04f\"}, {\"第18集\": \"https://iqiyi.cdn9-okzy.com/share/3f7bcd0b3ea822683bba8fc530f151bd\"}, {\"第19集\": \"https://iqiyi.cdn9-okzy.com/share/bfbb56bee68d99affaa64f189045d5f2\"}, {\"第20集\": \"https://iqiyi.cdn9-okzy.com/share/79514e888b8f2acacc68738d0cbb803e\"}, {\"第21集\": \"https://iqiyi.cdn9-okzy.com/share/9c8661befae6dbcd08304dbf4dcaf0db\"}, {\"第22集\": \"https://youku.cdn4-okzy.com/share/831b1ac54cc8db480e3babac5fa2256b\"}, {\"第23集\": \"https://youku.cdn4-okzy.com/share/f7cfdde9db36af8e0d9a6d123d5c385e\"}, {\"第24集\": \"https://youku.cdn4-okzy.com/share/8a1d694707eb0fefe65871369074926d\"}, {\"第25集\": \"https://youku.cdn4-okzy.com/share/36ed197b3f31618fdbadb3df86f804bd\"}, {\"第26集\": \"https://youku.cdn4-okzy.com/share/a4351b79d9ea3d842efa89fae5d02b24\"}, {\"第27集\": \"https://youku.cdn4-okzy.com/share/3cfbdf468f0a03187f6cee51a25e5e9a\"}, {\"第28集\": \"https://bilibili.com-h-bilibili.com/share/a952ddeda0b7e2c20744e52e728e5594\"}, {\"第29集\": \"https://youku.com-iqiyi.net/share/74aaa962157fc60f660a8cc3f8e36631\"}, {\"第30集\": \"https://youku.cdn4-okzy.com/share/5c80985bd40b8ce792f8c786bb23fe54\"}, {\"第31集\": \"https://youku.cdn4-okzy.com/share/384babc3e7faa44cf1ca671b74499c3b\"}, {\"第32集\": \"https://youku.cdn4-okzy.com/share/57f04bb2975420e3b4c73920c687cad7\"}, {\"第33集\": \"https://youku.cdn4-okzy.com/share/e945de21a1bb5714a0bc8a897ed32e9f\"}, {\"第34集\": \"https://youku.cdn1-okzy.com/share/7476533956dd3568c1d787c5d33a547f\"}, {\"第35集\": \"https://youku.cdn1-okzy.com/share/73d13a256dac51fcd7d34a340e8f7757\"}, {\"第36集\": \"https://youku.cdn2-okzy.com/share/5523d651bfb642be33057a3b78d02c9e\"}, {\"第37集\": \"https://youku.cdn2-okzy.com/share/865bf46435bd84fa5d89f64cf3ba7347\"}, {\"第38集\": \"https://youku.cdn4-okzy.com/share/703957b6dd9e3a7980e040bee50ded65\"}, {\"第39集\": \"https://youku.cdn4-okzy.com/share/c5bbd980e5ab2c17413ec02bd757a9e5\"}, {\"第40集\": \"https://youku.cdn7-okzy.com/share/bb1d545891bbbebcf457ed1cad5394f8\"}, {\"第41集\": \"https://youku.cdn7-okzy.com/share/5f9ce39aec46f3e8e8aebbc722d8ceeb\"}, {\"第42集\": \"https://iqiyi.com-ok-iqiyi.com/share/c4b108f53550f1d5967305a9a8140ddd\"}, {\"第43集\": \"https://iqiyi.com-ok-iqiyi.com/share/c1399f2eb50e562b9e0f3778c16fd7a3\"}, {\"第44集\": \"https://youku.cdn4-okzy.com/share/2e1b24a664f5e9c18f407b2f9c73e821\"}, {\"第45集\": \"https://youku.cdn4-okzy.com/share/86a1793f65aeef4aeef4b479fc9b2bca\"}, {\"第46集\": \"https://youku.cdn6-okzy.com/share/7a951116de2a4c23c74733d76046a5b4\"}]]","xunlei_link":"[[{\"第01集\": \"http://down.okdown6.com/20191126/2980_2373c5f5/庆余年第01集.mp4\"}, {\"第02集\": \"http://down.okdown6.com/20191126/2981_47a13f77/庆余年第02集.mp4\"}, {\"第03集\": \"http://down.okdown6.com/20191126/2982_55383b49/庆余年第03集.mp4\"}, {\"第04集\": \"http://down.okdown6.com/20191126/2983_e60c5212/庆余年第04集.mp4\"}, {\"第05集\": \"http://down.okdown6.com/20191127/3008_39db40dd/庆余年第5集.mp4\"}, {\"第06集\": \"http://down.okdown6.com/20191127/3009_125e1cb4/庆余年第6集.mp4\"}, {\"第07集\": \"http://okxxxxzy.xzokzyzy.com/20191129/22660_442e68e5/7qing.mp4\"}, {\"第08集\": \"http://okxxxxzy.xzokzyzy.com/20191129/10197_f01ddd9e/8qing.mp4\"}, {\"第09集\": \"http://down.okdown6.com/20191202/3130_1a089dec/庆余年第09集.mp4\"}, {\"第10集\": \"http://down.okdown6.com/20191202/3131_195ef1a8/庆余年第10集.mp4\"}, {\"第11集\": \"http://down.okdown6.com/20191202/3132_465e4668/庆余年第11集.mp4\"}, {\"第12集\": \"http://down.okdown6.com/20191203/3167_0e6f23c5/庆余年第12集.mp4\"}, {\"第13集\": \"http://down.okdown6.com/20191203/3168_bf207017/庆余年第13集.mp4\"}, {\"第14集\": \"http://okxxxxzy.xzokzyzy.com/20191204/10207_d2c2e8e6/qingyunian14.mp4\"}, {\"第15集\": \"http://okxxxxzy.xzokzyzy.com/20191204/10208_af88b19c/qingyunian15.mp4\"}, {\"第16集\": \"http://okxxxxzy.xzokzyzy.com/20191206/10210_07a53b63/qingyunian16.mp4\"}, {\"第17集\": \"http://okxxxxzy.xzokzyzy.com/20191206/22671_b5696b3b/qingyunian17.mp4\"}, {\"第18集\": \"http://okzy.xzokzyzy.com/20191209/3270_8c693380/庆余年 第18集.mp4\"}, {\"第19集\": \"http://okzy.xzokzyzy.com/20191209/3271_380cbd53/庆余年 第19集.mp4\"}, {\"第20集\": \"http://okzy.xzokzyzy.com/20191210/3272_efc623e6/庆余年 第20集.mp4\"}, {\"第21集\": \"http://okzy.xzokzyzy.com/20191210/3273_4d8fc6a0/庆余年 第21集.mp4\"}, {\"第22集\": \"http://down.okdown6.com/20191211/3318_248ac9f3/庆余年 第22集.mp4\"}, {\"第23集\": \"http://down.okdown6.com/20191211/3322_8a77af26/庆余年 第23集.mp4\"}, {\"第24集\": \"http://down.okdown6.com/20191211/3319_69cc8e98/庆余年 第24集.mp4\"}, {\"第25集\": \"http://down.okdown6.com/20191211/3320_654f198f/庆余年 第25集.mp4\"}, {\"第26集\": \"http://down.okdown6.com/20191211/3323_7a943d8f/庆余年 第26集.mp4\"}, {\"第27集\": \"http://down.okdown6.com/20191211/3321_c713f248/庆余年 第27集.mp4\"}, {\"第28集\": \"http://okxxxxzy.xzokzyzy.com/20191216/10230_0ac6d878/qingyunian28.mp4\"}, {\"第29集\": \"http://okxxxxzy.xzokzyzy.com/20191216/22687_ac28360f/qingyunian29.mp4\"}, {\"第30集\": \"http://down.okdown6.com/20191216/3397_a71b720d/庆余年第30集.mp4\"}, {\"第31集\": \"http://down.okdown6.com/20191216/3398_9e626e45/庆余年第31集.mp4\"}, {\"第32集\": \"http://down.okdown6.com/20191216/3399_60cf4513/庆余年第32集.mp4\"}, {\"第33集\": \"http://down.okdown6.com/20191216/3400_018830bb/庆余年第33集.mp4\"}, {\"第34集\": \"http://okxzy.xzokzyzy.com/20191219/10651_d484578e/Q-34.mp4\"}, {\"第35集\": \"http://okxzy.xzokzyzy.com/20191219/10652_7d060176/Q-35.mp4\"}, {\"第36集\": \"http://down.okdown6.com/20191219/6505_009239ff/QYN36.mp4\"}, {\"第37集\": \"http://down.okdown6.com/20191219/6504_107c0620/QYN37.mp4\"}, {\"第38集\": \"http://down.okdown6.com/20191219/3450_c47f76f5/QNY38.mp4\"}, {\"第39集\": \"http://down.okdown6.com/20191219/3448_32063996/Q-39.mp4\"}, {\"第40集\": \"http://okzy.xzokzyzy.com/20191220/16294_599ad0b2/QYN40.mp4\"}, {\"第41集\": \"http://okzy.xzokzyzy.com/20191220/16292_aeb8f7d0/Q-41.mp4\"}, {\"第42集\": \"http://okzy.xzokzyzy.com/20191220/12010_ab818018/Q-42.mp4\"}, {\"第43集\": \"http://okzy.xzokzyzy.com/20191220/12009_c9a72fb0/Q-43.mp4\"}, {\"第44集\": \"http://down.okdown6.com/20191219/3447_2200a08f/Q-44.mp4\"}, {\"第45集\": \"http://down.okdown6.com/20191219/3449_a70e5a03/QYN45.mp4\"}, {\"第46集\": \"http://xz5.okzyxz.com/20191220/8314_0d8250df/Q-46.mp4\"}]]"}],
        indexs: [],
        searchTerms: '',
        termsIsEmpty: false,
        movieNotfound: false
			}
		},
    onLoad(e) {
      // console.log(e.movieName);
      this.searchTerms = e.movieName
      this.getmovie(e.movieName)
      console.log(this.$mp.page.$getAppWebview())
    },
    // 导航栏button点击事件
    onNavigationBarButtonTap() {
      if(this.searchTerms.length===0){
        this.termsIsEmpty = true
        this.searchTerms = ''
      }else{
        this.termsIsEmpty = false
        this.getmovie(this.searchTerms)
      }
    },
    // 监听原生标题栏搜索输入框点击事件
    onNavigationBarSearchInputConfirmed(){
      this.getmovie(this.searchTerms)
    },
    // 导航栏搜索框值改变是触发
    onNavigationBarSearchInputChanged(e) {
      this.searchTerms = e.text
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
			getmovie(searchValue){
        let that = this
        console.log(that.searchTerms);
        console.log('fasong');
        return
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
            console.log(data);
			      if(data){
			        // this.searched = true
			        that.searchData = data
              console.log(data,'11');
			      }else{
			        // 提示消息
			        that.movieNotfound = true
			        that.searchData = ''
			      }
			    },
          complete() {
            that.searchTerms = ''
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

/* 视频 */
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
  padding: 8rpx 18rpx;
  border: 1px solid grey;
  font-size: 14px;
  border-image: linear-gradient(to right,#64ccda,#fb5b5a,#e4f9ff) 1 10;
} 
     
a {
  color: black;
  text-decoration: none;
  font-size: 14px;
}
/* 错误提示 */
.errorTips{
  display: flex;
  flex-direction: row;
  align-self: center;
  align-content: center;
  justify-content: center;
  /* border: 1px solid black; */
  }
.errorTips .errorIcon{
  width: 40rpx;
  height: 40rpx;
  align-self: center;
  margin-right: 10rpx;
  /* border: 1px solid black; */
} 
.errorTips .errorMessage{
  /* display: inline-flex; */
  /* height: 40rpx; */
  /* border: 1px solid black; */
  /* align-self: center; */
  font-size: 16px;
}
</style>
