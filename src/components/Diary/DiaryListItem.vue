<template>
  <!--日记-->
  <div class="diary">
    <div class="diary_items">
      <div class="row diary_main" v-for="(item,index) in diary_item" :key="index">
        <div class="col-xs-2 col-sm-2 col-md-2">
          <div class="user_icon01">
            <img :src="item.icon" alt="">
          </div>
          <div class="nickname">
            <span v-text="item.nickname"></span>
          </div>
        </div>
        <div class="col-xs-10 col-sm-10 col-md-10">
          <div class="diary_info">
            <div class="diary_title">
              <span v-text="item.diary_title" @click="toDetail(item.diary_id)"></span>
            </div>
            <div class="style">
              <span v-text="item.style_name"></span>
              <span>|</span>
              <span class="company" v-text="item.company"></span>
            </div>
            <div class="diary_text" v-text="item.diary_content" @click="toDetail(item.diary_id)"></div>
            <div class="diary_image">
              <img :src="img" alt="" v-for="img in item.diary_img" @click="toDetail(item.diary_id)">
            </div>
            <div class="public_time">
              <span v-text="item.public_date"></span>
            </div>
          </div>
        </div>
      </div>
      <img src="../../assets/no-case.png" style="width: 100%;" v-if="isShowImg">
    </div>
    <!--更多-->
    <div>
      <div class="col-xs-12 col-sm-12 col-md-12 more" v-if="!isShowImg">
        <div id="more_diary" @click="more" v-if="isShowMore">More</div>
        <h4 v-else>没有更多了~~~</h4>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "DiaryListItem",
    data: function () {
      return {
        diary_item: [],
        diary_items: [],
        isShowMore: true,
        isShowImg: false
      }
    },
    methods: {
      toDetail: function (val) {
        this.$router.push({path: "/DiaryDetail", query: {diary_id: val}})
      },
      more: function () {
        if (this.diary_items.length > 4) {
          for (let i = 0; i < 4; i++) {
            this.diary_item.push(this.diary_items[i]);
          }
          this.diary_items.splice(0, 4)
        } else {
          for (let i of this.diary_items) {
            this.diary_item.push(i);
            this.isShowMore = false
          }
        }

      }
    },
    mounted: function () {
      if (this.$route.query.search_condition === "装修日记") {
        axios.get(this.Global.server_url + "search/searchDiary/", {
          params: {
            "search_content": this.$route.query.search_content,
          }
        })
          .then(response => {
              if (response.data.status_code == 10009) {
                if (response.data.content.length > 4) {
                  this.diary_item = response.data.content.slice(0, 4);
                  this.diary_items = response.data.content.slice(4,)
                } else {
                  this.diary_item = response.data.content;
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
        axios.get(this.Global.server_url + "diary/diaryList/")
          .then(response => {
              if (response.data.status_code == 10009) {
                this.diary_item = response.data.content.slice(0, 4);
                this.diary_items = response.data.content.slice(4,)
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
  /*日记*/
  .diary {
    padding: 0 50px;
    box-sizing: border-box;
  }

  .diary_main {
    background-color: white;
    padding: 30px 0;
    border-bottom: dotted 1px #b4b4b4;
  }

  .user_icon01 {
    width: 70px;
    height: 70px;
    margin: auto;
  }

  .user_icon01 img {
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 50%;
    object-fit: cover;
  }

  .nickname {
    color: #999999;
    margin-top: 10px;
    text-align: center;
  }

  .diary_info {
    position: relative;
  }

  .diary_info .diary_title {
    font-size: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .diary_info .style {
    color: #999999;
    font-size: 14px;
    margin-bottom: 10px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .diary_info .diary_text {
    color: #666666;
    font-size: 14px;
    margin-bottom: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .diary_info .diary_image {
    margin-top: 10px;
    padding-left: 20px;
  }

  .diary_info .diary_image img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .diary_info .public_time {
    color: #959795;
    font-size: 12px;
    text-align: right;
    margin-top: 10px;
  }

  .more {
    margin: 30px 0;
    text-align: center;
  }

  #more_diary {
    font-size: 18px;
    padding: 5px 50px;
    display: inline-block;
    margin: auto;
    box-sizing: border-box;
    border: solid 1px #CCC;
  }

  #more_diary:hover {
    text-decoration: none;
    background-color: #C4AD4F;
  }

  .None {
    margin: 30px 0;
    text-align: center;
  }
</style>
