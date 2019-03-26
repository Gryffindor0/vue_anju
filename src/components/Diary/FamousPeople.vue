<template>
  <!--达人榜-->
  <div class="sidebar">
    <div class="sidebar_items">
      <div class="sidebar_top">
        <span>达人榜</span>
      </div>
      <div class="sidebar_item" v-for="(item,index) in items" :key="index">
        <div class="icon"><img :src="item.user_icon" alt=""></div>
        <div class="info">
          <span class="name" v-text="item.user_name"></span>
          <span class="contribution" v-text="'月贡献度:'+item.contribution"></span>
        </div>
      </div>
    </div>
    <div class="write_diary">
      <a href="#">写日记</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FamousPeople",
    data:function () {
      return{
        items:[
          {
            user_icon:require("../../assets/user_icon02.jpg"),
            user_name:"海角天涯鱼",
            contribution:"891"
          },
          {
            user_icon:require("../../assets/user_icon01.jpg"),
            user_name:"瀚海百丈冰",
            contribution:"891"
          },
          {
            user_icon:require("../../assets/user_icon03.jpg"),
            user_name:"铁马冰河梦",
            contribution:"891"
          },
          {
            user_icon:require("../../assets/user_icon05.jpg"),
            user_name:"波澜不惊飞",
            contribution:"891"
          },
          {
            user_icon:require("../../assets/user_icon04.jpg"),
            user_name:"岱宗夫如何",
            contribution:"891"
          },
          {
            user_icon: require("../../assets/user_icon06.jpg"),
            user_name: "孟夏草木长",
            contribution: "891"
          }
        ]
      }
    },
    mounted:function () {
      // 目录固定
      var catalog=document.querySelector(".write_diary"),
        H = -100,
        Y = catalog;
      while (Y) {
        H += Y.offsetTop;
        Y = Y.offsetParent;
      }
      window.onscroll = function()
      {
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        if(s>H) {
          catalog.style = "position:fixed;top:80px;left:76.8%;right:auto; width:15.1%;"
        } else {
          catalog.style = ""
        }
      };
    }
  }
</script>

<style scoped>
  /*达人榜*/
  .sidebar{
    width: 18%;
    height: 50%;
  }
  .sidebar .sidebar_items{
    padding: 20px;
    box-sizing: border-box;
    background-color: #FFFFFF;
  }
  .sidebar .sidebar_top{
    border-bottom: solid 1px #CCCCCC;
    box-sizing: border-box;
    height: 40px;
    font-size: 20px;
  }

  .sidebar_item .icon{
    width: 50px;
    height: 50px;
  }
  .sidebar_item{
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    border-bottom: solid 1px #CCCCCC;
    box-sizing: border-box;
  }
  .sidebar_item .icon img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
  .sidebar_item .info{
    display: flex;
    flex-direction: column;
    line-height: 22px;
  }
  .sidebar_item .info span:last-child{
    color: #999999;
  }
  .write_diary{
    padding: 20px 10px;
    background-color: #FFFFFF;
    margin-top: 20px;
    box-sizing: border-box;
  }
  .write_diary a{
    width: 90%;
    height: 40px;
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    margin: auto;
    display: block;
    background-color: #01d680;
  }
  @media (max-width: 1214px){
    .sidebar_item .info span:last-child{
      font-size: 12px;
    }
    .sidebar_item .icon{
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 1199px){
    .sidebar{
      width: 170px;
    }
  }
  @media (max-width: 991px){
    .sidebar{
      display: none;
    }
    .diary_main>div:first-child{
      width: 100%;
    }
  }
</style>
