<template>
  <div class="strategy_list">
    <!--主体开始-->
    <div class="strategy_diary">
      <div class="main_left">
        <div class="strategy_top">
          <ul class="strategy_diary_ul">
            <router-link to="/StrategyList/StrategyListItem"
                         class="strategy_li"
                         :class="flag?show:''"
                         @click.native="showItem">装修攻略
            </router-link>
            <router-link to="/StrategyList/DiaryListItem"
                         class="diary_li"
                         :class="!flag?show:''"
                         @click.native="showItem">业主日记
            </router-link>
            <li></li>
          </ul>
        </div>
        <div>
            <router-view/>
        </div>
      </div>

      <div class="main_right">
        <!--热门攻略-->
        <hot-strategy></hot-strategy>
        <!--热门日记-->
        <hot-diary></hot-diary>
        <!--扫码关注-->
        <div class="QR">
          <div class="hot_top">
            <span>关注我们</span>
          </div>
          <div class="QR_content">
            <img src="../../assets/QR.png" alt="">
            <span>关注安居家装微信公众号,</span>
            <span>获取更多攻略和日记</span>
          </div>
        </div>
      </div>
    </div>
    <!--主体结束-->
    <!--返回顶部开始-->
    <return-top></return-top>
    <!--返回顶部结束-->
  </div>
</template>

<script>
  import StrategyItem from './StrategyListItem'
  import DiaryItem from '../Diary/DiaryListItem'
  import HotStrategy from './HotStrategy'
  import HotDiary from '../Diary/HotDiary'
  import ReturnTop from './ReturnTop'

  export default {
    name: "StrategyList",
    components: {
      'strategy-item': StrategyItem,
      'diary-item': DiaryItem,
      'hot-strategy': HotStrategy,
      'hot-diary': HotDiary,
      'return-top': ReturnTop
    },
    data: function () {
      return {
        flag: true,
        show: "show"
      }
    },
    methods: {
      showItem: function (event) {
        if (event.target.classList[0] == "strategy_li") {
          this.flag = true;
        } else if (event.target.classList[0] == "diary_li") {
          this.flag = false;
        }
      }
    },
    watch: {
      $route(to) {
        if (to.name == "StrategyListItem") {
          this.flag = true;
        } else if (to.name == "DiaryListItem") {
          this.flag = false;
        }
      }
    },
    mounted: function () {
      if (this.$route.name == "StrategyListItem") {
        this.flag = true;
      } else if (this.$route.name == "DiaryListItem") {
        this.flag = false;
      }
      // 目录固定
      var catalog = document.querySelector(".QR"),
        H = 810;
      window.onscroll = function () {
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        if (s > H) {
          catalog.style = "position:fixed;top:76px;left:71.5%;right:auto; width:23.5%;"
        } else {
          catalog.style = ""
        }
      }
    }
  }
</script>

<style scoped>
  /*头部*/
  .strategy_diary {
    width: 90%;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .main_left {
    width: 72%;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #cbcbcb;
  }

  .main_right {
    width: 26%;
  }

  .strategy_top {
    width: 100%;
    background: #F9F9F9;
  }

  .show {
    background-color: #FFFFFF;
    border-bottom: none !important;
  }

  .strategy_diary_ul {
    display: flex;
    font-size: 16px;
  }

  .strategy_li, .diary_li {
    flex: 1;
    text-align: center;
    padding: 15px 0;
    cursor: pointer;
    border-right: solid 1px #DDDDDD;
    border-bottom: solid 1px #DDDDDD;
  }

  .strategy_li:hover, .diary_li:hover {
    text-decoration: none;
  }

  .strategy_li:focus, .diary_li:focus {
    text-decoration: none;
  }

  .strategy_diary_ul li {
    flex: 6;
    border-bottom: solid 1px #DDDDDD;
  }

  /*关注我们*/
  .hot_top {
    border-left: solid 4px #00ba00;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 20px;
    box-sizing: border-box;
  }

  .QR {
    margin-top: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #cbcbcb;
    padding: 10px 0 30px;
    box-sizing: border-box;
  }

  .QR .QR_content {
    margin-top: 10px;
    text-align: center;
  }

  .QR .QR_content span {
    display: block;
    padding: 2px 25px;
    color: #00ba00;
  }

  .QR .QR_content img {
    width: 130px;
    height: 130px;

  }
</style>
