<template>
  <div class="diary_header" onselectstart="return false;">
    <div class="user_info">
      <img :src="diary_info.user_icon" id="user_icon" alt="">
      <span id="user_name" v-text="diary_info.nickname"></span>
    </div>
    <div class="diary_info">
      <div class="col-xs-12 col-md-12 col-md-8 diary_info_left">
        <span class="diary_title" v-text="diary_info.diary_title"></span>
        <span class="diary_time" v-text="diary_info.publish_date"></span>
        <div class="house_info">
          <img src="../../assets/house.svg" alt="">
          <span>房屋信息: </span>
          <span class="area" v-text="diary_info.area+'m²'"></span>
          <span> | </span>
          <span class="style" v-text="diary_info.style"></span>
          <span> | </span>
          <span class="type" v-text="diary_info.type"></span>
        </div>
        <div class="house_location">
          <img src="../../assets/position.svg" alt="">
          <span>所在小区: </span>
          <span class="location" v-text="diary_info.location"></span>
        </div>
        <div class="company">
          <img src="../../assets/company.svg" alt="">
          <span>装饰公司: </span>
          <span class="company_name" v-text="diary_info.company"></span>
        </div>
      </div>
      <div class="col-xs-12 col-md-12 col-md-4 diary_info_right">
        <div class="number">
          <div class="browse_num">
            <span v-text="diary_info.browse_num"></span>
            <div>
              <img src="../../assets/browse.svg" alt="">
              浏览
            </div>
          </div>

          <div class="collect_num">
            <span v-text="diary_info.collect_num"></span>
            <!--收藏组件-->
            <collect :content_id="id" :collectType_id="collectType_id"></collect>
          </div>

          <div class="comment_num">
            <span v-text="diary_info.comment_num"></span>
            <div>
              <img src="../../assets/comment.svg" alt="">
              评论
            </div>
          </div>
        </div>

        <div class="share">
          <span>分享到:</span>
          <a href="http://service.weibo.com/share/share.php"><img src="../../assets/blog.svg" alt=""></a>
          <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey"><img src="../../assets/qq.svg" alt=""></a>
          <a href="#" id="wx"><img src="../../assets/weixin.svg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Collect from '../Case/Collect'
  import axios from 'axios'
  export default {
    name: "DiaryDetailHeader",
    components:{
      'collect': Collect
    },
    data:function () {
      return{
        diary_info:{},
        id:this.$route.query && this.$route.query.diary_id,
        collectType_id:1
      }
    },
    mounted:function () {
      var diary_id=this.$route.query.diary_id;
      axios.get(this.Global.server_url + "diary/diaryDetailHeader/",{
        params:{
          diary_id:diary_id
        }
      })
        .then(response => {
            if (response.data.status_code == 10009) {
              this.diary_info = response.data.content[0];
              console.log(this.diary_info);
            }else {
              console.log(response)
            }
          }
        )
        .catch(error =>{
          console.log(error)
        })
    }

  }
</script>

<style scoped>
  /*用户头像*/
  .diary_header {
    display: flex;
    padding: 3% 2%;
    box-sizing: border-box;
    background-color: #FFFFFF;
  }

  .user_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
  }

  .user_info img {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    object-fit: contain;
  }

  .user_info span {
    color: #999999;
  }

  /*日记信息*/
  .diary_info {
    flex: 1;
    padding: 1% 2%;
    box-sizing: border-box;
  }

  .diary_info_left {
    flex: 2;
    display: flex;
    flex-direction: column;
    color: #999999;
  }

  .diary_info_left .diary_title {
    color: #1f1f1f;
    font-size: 26px;
  }

  .diary_info_left .house_info {
    margin-top: 2%;
  }

  .diary_info_left .house_info span:nth-child(3), span:nth-child(5), span:nth-child(7), .location, .company_name {
    color: #1a1a1a;
  }

  .house_info, .house_location, .company {
    padding: 3px 0;
    box-sizing: border-box;
  }

  .diary_info_right .number {
    display: flex;
    justify-content: space-around;
    margin-right: 3%;
  }

  .diary_info_right .number > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  }

  .diary_info_right .number span {
    font-size: 26px;
    color: #e50000;
  }

  /*浏览*/
  .browse_num {
    cursor: pointer;
    width: 100px;
  }

  /*收藏*/
  .collect_num {
    cursor: pointer;
    width: 100px;
  }

  /*评论*/
  .comment_num {
    cursor: pointer;
    width: 100px;
  }

  .collect-icon, .uncollect-icon {
    display: inline-block;
    width: 18px;
    height: 17px;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: text-bottom;
  }

  .collect_num .uncollect-icon {
    background-image: url("../../assets/uncollect-icon.svg"), none;
  }

  .collect_num .collect-icon {
    background-image: url("../../assets/collect-icon.svg"), none;
  }

  /*分享*/
  .diary_info_right .share {
    text-align: center;
    margin-top: 50px;
  }

  .diary_info_right .share span {
    font-size: 16px;
  }

  .diary_info_right .share a {
    margin-left: 10px;
  }

  @media (max-width: 991px) {
    .diary_info_right {
      display: none;
    }
  }

  @media (max-width: 660px) {
    .diary_info_left .diary_title {
      font-size: 20px;
    }
  }

  @media (max-width: 422px) {
    .diary .user_info {
      width: 54px;
      height: 54px;
    }

    .diary_info_left .diary_title {
      font-size: 18px;
    }

    .diary_info_left {
      font-size: 12px;
    }
  }

</style>
