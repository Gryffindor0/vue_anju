<template>
  <!--攻略-->
  <div class="strategy">
    <div class="strategy_items">
      <div class="row strategy_main" v-for="(item,index) in strategy_item" :key="index">
        <div class="col-xs-12 col-sm--12 col-md-5 strategy_img">
          <img :src="item.strategyimg__strategy_img" alt="" width="410px" height="184px"
               @click="toDetail(item.id)">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-7 strategy_text">
          <span v-text="item.strategy_title"
                @click="toDetail(item.id)"></span>
          <p v-text="item.strategycontent__lead" @click="toDetail(item.id)"></p>
          <span class="author" v-text="'作者:'+item.author"></span>
        </div>
      </div>
      <img src="../../assets/no-case.png" style="width: 100%;" v-if="isShowImg">
    </div>
    <!--更多-->
    <div>
      <div class="col-xs-12 col-sm-12 col-md-12 more" v-if="!isShowImg">
        <div id="more_strategy" @click="more" v-if="isShowMore">More</div>
        <h4 v-else>没有更多了~~~</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "StrategyListItem",
    data: function () {
      return {
        strategy_item: [],
        strategy_items: [],
        isShowMore: true,
        isShowImg: false
      }
    },
    methods: {
      toDetail: function (val) {
        this.$router.push({path: "/StrategyDetail", query: {strategy_id: val}})
      },
      more: function () {
        if (this.strategy_items.length > 4) {
          for (let i = 0; i < 4; i++) {
            this.strategy_item.push(this.strategy_items[i]);
          }
          this.strategy_items.splice(0, 4)
        } else {
          for (let i of this.strategy_items) {
            this.strategy_item.push(i);
            this.isShowMore = false
          }
        }

      }
    },
    mounted: function () {
      // 搜索
      if (this.$route.query.search_condition === "装修攻略") {
        axios.get(this.Global.server_url + "search/searchStrategy/", {
          params: {
            "search_content": this.$route.query.search_content,
          }
        })
          .then(response => {
              if (response.data.status_code == 10009) {
                if (response.data.content.length > 4) {
                  this.strategy_item = response.data.content.slice(0, 4);
                  this.strategy_items = response.data.content.slice(4,)
                } else {
                  this.strategy_item = response.data.content;
                  this.isShowMore = false
                }

              } else if (response.data.status_code == 10008) {
                this.isShowImg = true;
                this.isShowMore = false
              } else {
                console.log(response)
              }
            }
          )
          .catch(error => {
            console.log(error)
          })
      } else {
        // 请求数据
        axios.get(this.Global.server_url + "strategy/strategyList/")
          .then(response => {
              if (response.data.status_code == 10009) {
                this.strategy_item = response.data.content.slice(0, 4);
                this.strategy_items = response.data.content.slice(4,)
              } else if (response.data.status_code == 10008) {
                this.isShowImg = true;
                this.isShowMore = false
              } else {
                console.log(response)
              }
            }
          )
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  /*攻略*/
  .strategy {
    padding: 0 50px;
  }

  .strategy_main {
    background-color: white;
    padding: 30px 0;
    border-bottom: dotted 1px #b4b4b4;
  }

  .strategy_img {
    padding: 0;
  }

  .strategy_img img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .strategy_text {
    height: 100%;
    padding: 25px 20px 6%;
    position: relative;
  }

  .strategy_text span:first-child {
    font-size: 20px;
    color: #3d3d3d;
    font-weight: 600;
    cursor: pointer;
  }

  .strategy_text p {
    color: #959795;
    margin-top: 20px;
    cursor: pointer;
  }

  .strategy_text .author {
    color: #959795;
    font-size: 12px;
    position: absolute;
    right: 20px;
    bottom: 0;

  }

  .more {
    margin: 30px 0;
    text-align: center;
  }

  #more_strategy {
    font-size: 18px;
    padding: 5px 50px;
    display: inline-block;
    margin: auto;
    box-sizing: border-box;
    border: solid 1px #CCC;
  }

  #more_strategy:hover {
    text-decoration: none;
    background-color: #C4AD4F;
  }

  .None {
    margin: 30px 0;
    text-align: center;
  }

  @media (max-width: 767px) {
    .strategy_text span:first-child {
      font-size: 16px;
      font-weight: 600;
    }

    .strategy_text p, .author {
      display: none;
    }
  }
</style>
