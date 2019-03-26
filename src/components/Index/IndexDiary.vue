<template>
  <div class="container-fluid diary">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-7">
        <div class="diary_info">
          <div class="diary_header">
            <div class="user_icon01">
              <img :src="diary_info.icon" alt="">
            </div>
            <div class="diary_name">
              <div class="diary_title">
                <span v-text="diary_info.diary_title"></span>
              </div>
              <div>
                <span class="style" v-text="diary_info.style_name"></span>
                <span>|</span>
                <span class="diary_company_name" v-text="diary_info.company"></span>
              </div>
            </div>
          </div>
          <div class="diary_text" v-text="diary_info.diary_content"></div>
          <div class="diary_image">
            <img v-for="(diary_img,index) in diary_info.diary_img" :src="diary_img" :key="index" alt="">
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-5 owner">
        <div class="owner_content">
          <div class="text">
            <span>装修日记</span>
            <p>业主分享装修历程，还原线下装修体验<br>拆解苏州装修公司服务口碑</p>
          </div>
          <div class="row user_icon02">
            <div class="col-xs-12 user_item"
                 v-for="(item,index) in user_icons"
                 :key="index"
                 @click="getDiaryData(item.id)">
              <img :src="item.user__userIcon__icon" alt="">
            </div>
          </div>
          <div class="more_diary">
            <router-link to="/StrategyList/DiaryListItem">查看日记</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "IndexDiary",
    data:function () {
      return{
        user_icons:[],
        diary_info:{}
      }
    },
    methods:{
      getDiaryData:function (id) {
        axios.get(this.Global.server_url+"diary/indexDiary/",{
          params:{"diary_id":id}
        })
          .then((response) => {
              if (response.data.status_code == 10009)
                for (var d of response.data.content) {
                  if (d.diary_content.length>60){
                    d.diary_content=d.diary_content.substring(0, 60) + "..."
                  }
                }
                this.diary_info = response.data.content[0];
                console.log(this.diary_info);
            }
          )
          .catch(error=>{
            console.log(error);
          })
      }
    },
    mounted:function () {

      axios.get(this.Global.server_url+"diary/diaryUserIcon/")
        .then((response) => {
            if (response.data.status_code == 10009) {
              this.user_icons = response.data.content;
              var first_id=this.user_icons[0].id;
              this.getDiaryData(first_id);
            }
          }
        )
        .catch(error=>{
          console.log(error);
        })


    }
  }
</script>

<style scoped>
  /*装修日记*/
  .diary {
    background: url("../../assets/yzs_bg.jpg") no-repeat;
    background-size: cover;
  }

  .diary_info {
    width: 80%;
    background-color: white;
    margin: 60px auto;
    padding: 50px;
    box-sizing: border-box;
  }

  .diary_header {
    display: flex;
    margin-bottom: 10px;
  }

  .diary_header .user_icon01 {
    width: 80px;
    height: 80px;
    margin-right: 38px;
    padding: 0;
  }

  .diary_header .user_icon01 img {
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 50%;
    object-fit: cover;
  }

  .diary_header .diary_name {
    height: 80px;
    line-height: 30px;
    padding-top: 2%;
    box-sizing: border-box;
  }

  .diary_header .diary_name .diary_title {
    font-size: 18px;
  }

  .diary_image {
    margin-top: 10px;
    text-align: center;
  }

  .diary_image img {
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }

  .owner {
    background-color: #67636B;
  }

  .owner_content {
    width: 80%;
    margin: 60px auto;
    box-sizing: border-box;
  }

  .owner_content .text {
    margin-bottom: 2%;
  }

  .owner_content .text span {
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 500;
  }

  .owner_content .text p {
    color: #FFFFFF;
    font-size: 14px;
    margin-top: 10px;
  }

  .owner_content .user_icon02 div {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
    margin-right: 1.5%;
    margin-left: 1.5%;
    padding: 0;
  }

  .owner_content .user_icon02 div img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }

  .more_diary {
    text-align: right;
  }

  .more_diary a {
    color: #FFFFFF;
    font-size: 16px;
    display: inline-block;
    border: solid 1px #FFFFFF;
    padding: 10px 20px;
  }

  .more_diary a:hover {
    text-decoration: none;
    background-color: #C4AD4F;
  }

  @media (max-width: 768px) {
    .owner .user_icon02 > div {
      display: none;
    }

    .diary_info {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .diary_info {
      display: none;
    }
  }

  @media (max-width: 1106px) {
    .diary_info .style {
      display: none;
    }

    .diary_image img {
      width: 40%;
    }

    .diary_info .user_icon01 {
      width: 60px;
      height: 60px;
    }
  }
</style>
