<template>
  <div class="diary_items">
    <div class="diary_item" v-for="(item,index) in diary_info" :key="index">
      <div class="stage_title" v-text="item.stage"></div>
      <div class="stage_content">
        <div class="public_time">
          <span v-text="item.publish_date"></span>
        </div>
        <div class="content">
          <p v-text="item.diary_content"></p>
        </div>
        <div class="diary_image">
          <img :src="img.diary_img" alt="" v-for="img in item.diary_imgs">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "DiaryDetailItem",
    data: function () {
      return {
        diary_info: []
      }
    },
    mounted: function () {
      var diary_id = this.$route.query.diary_id;
      axios.get(this.Global.server_url + "diary/diaryDetailContent/", {
        params: {
          diary_id: diary_id
        }
      })
        .then(response => {
            if (response.data.status_code == 10009) {
              this.diary_info = response.data.content;
              console.log(this.diary_info);
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
</script>

<style scoped>

  .diary_items .diary_item {
    position: relative;
    border-bottom: solid 1px #CCCCCC;
  }

  .diary_items div:last-child {
    border-bottom: 0;
  }

  .diary_item .stage_title {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: #01bf72;
    position: absolute;
    top: 20px;
    left: -31px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .diary_item .stage_content {
    padding: 5% 10%;
  }

  .stage_content .public_time {
    font-size: 16px;
    color: #01bf72;
  }

  .public_time, .content {
    margin-bottom: 20px;
  }

  .diary_item .stage_content img {
    width: 150px;
    height: 150px;
    margin-right: 15px;
    margin-bottom: 10px;
  }

  .diary_item .stage_content img:last-child {
    margin-right: 0;
  }

  @media (max-width: 767px) {
    .diary_item .stage_content img {
      width: 90px;
      height: 90px;
      margin-right: 10px;
    }

    .diary_items .diary_item .stage_title {
      width: 40px;
      height: 40px;
      left: -20px;
      font-size: 12px;
      padding-top: 5px;
    }
  }
</style>
