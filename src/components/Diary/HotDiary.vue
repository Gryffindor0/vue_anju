<template>
  <!--热门日记-->
  <div class="hot_diary">
    <div class="hot_top">
      <span>热门日记</span>
    </div>
    <div class="carousel">
      <div class="wrap">
        <ul class="img-list">
          <li v-for="(item,index) in hot_diary" :key="index">
            <div>
              <img :src="item.diary_image01" alt="">
            </div>
            <div class="hot_item">
              <img :src="item.diary_image02" alt="">
              <span v-text="item.diary_title01"></span>
            </div>
            <div class="hot_item">
              <img :src="item.diary_image03" alt="">
              <span v-text="item.diary_title02"></span>
            </div>
          </li>
        </ul>
        <div class="tab-list-div">
          <ul class="tab-list">
            <li class="on"></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HotDiary",
      data:function () {
        return{
          hot_diary:[
            {
              diary_image01:require("../../assets/hot_diary01.png"),
              diary_image02:require("../../assets/hot_diary05.jpg"),
              diary_title01:"诚品城爱的小窝",
              diary_image03:require("../../assets/hot_diary06.jpg"),
              diary_title02:"温柔时光"
            },
            {
              diary_image01:require("../../assets/hot_diary02.png"),
              diary_image02:require("../../assets/hot_diary03.jpg"),
              diary_title01:"小试牛刀两居室，半开放式大厨房",
              diary_image03:require("../../assets/hot_diary04.jpg"),
              diary_title02:"【灰黑系】个性轻工业婚房"
            },
            {
              diary_image01:require("../../assets/hot_diary01.png"),
              diary_image02:require("../../assets/hot_diary05.jpg"),
              diary_title01:"诚品城爱的小窝",
              diary_image03:require("../../assets/hot_diary06.jpg"),
              diary_title02:"温柔时光"
            }
          ]
        }
      },
      mounted:function () {
        var oWidth = parseFloat(315.66);
        var oImgList = document.getElementsByClassName("img-list")[0],
          aImgLi = document.querySelectorAll(".img-list li"),
          oWrap = document.getElementsByClassName("wrap")[0],
          aTab = document.querySelectorAll(".tab-list li"),
          len = aImgLi.length,
          index = 0;

        function btnTab() {
          var t = new Date();
          for (var i = 0, tabLen = aTab.length; i < tabLen; i++) {
            (function (i) {
              aTab[i].onclick = function () {
                if (new Date() - t >= 1000) {
                  aTab[index].className = "";
                  if ((i - index) === (tabLen - 1)) {
                    oImgList.style.transition = 0 + "s";
                    oImgList.style.left = -oWidth * (len - 1) + "px";
                    index = len - 2;
                    setTimeout(function () {
                      oImgList.style.transition = 1 + "s";
                      oImgList.style.left = -oWidth * (index) + "px";
                    }, 1000 / 60);
                  }
                  else if ((i - index) === (1 - tabLen)) {
                    oImgList.style.left = -oWidth * (len - 1) + "px";
                    index = 0;
                    setTimeout(function () {
                      oImgList.style.transition = 0 + "s";
                      oImgList.style.left = index + "px";
                    }, 1000);
                  }
                  else {
                    oImgList.style.left = -oWidth * (i) + "px";
                    oImgList.style.transition = 1 + "s";
                  }
                  index = i;
                  this.className = "on";
                  t = new Date();
                }
              }
            })(i);
          }
        }

        function btnNext() {
          index++;
          oImgList.style.transition = 1 + "s";
          if (index === len - 1) {
            oImgList.style.left = -oWidth * index + "px";
            aTab[len - 2].className = "";
            index = 0;
            aTab[index].className = "on";
            setTimeout(function () {
              oImgList.style.transition = 0 + "s";
              oImgList.style.left = index + "px";
            }, 1000);
          }
          else {
            oImgList.style.left = -oWidth * index + "px";
            aTab[index - 1].className = "";
            aTab[index].className = "on";
          }
        }

        btnTab();
        var timer = setInterval(btnNext, 3000);
        oWrap.onmouseover = function () {
          clearInterval(timer);
        };
        oWrap.onmouseout = function () {
          timer = setInterval(btnNext, 3000);
        };
      }
    }
</script>

<style scoped>
  /*热门日记*/
  .hot_diary{
    margin-top: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #cbcbcb;
    padding:10px 0 20px;
  }
  .hot_top{
    border-left: solid 4px #00ba00;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 20px;
  }
  /*lunbo*/
  .carousel ul{
    position: relative;
    left: 0;
    list-style: none;
    padding: 0;
  }
  .wrap{
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .img-list{
    display: flex;
    margin: 0;
    width: 300%;
    height: 100%;
  }

  .img-list li{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .img-list li div{
    width: 84%;
    margin-top: 10px;
  }
  .img-list li div:first-child img{
    width: 264px;
    height: 125px;
  }
  .hot_item{
    display: flex;
  }
  .hot_item img{
    width: 90px;
    height: 70px;
    box-sizing: border-box;
    margin-right: 10px;
  }
  .hot_item span{
    flex: 1;
  }

  .tab-list-div{
    position: absolute;
    z-index: 20;
    top: 96%;
    left: 50%;
    margin-left: -10px;
  }
  .tab-list:after{
    content: "";
    display: block;
    clear: both;
  }
  .tab-list li{
    float: left;
    transition: 1s;
    width: 10px;
    height: 10px;
    margin-left: 5px;
    background-color: #bbb;
    border-radius: 50%;
  }
  .tab-list li:hover{
    cursor: pointer;
  }
  .tab-list li:first-child{
    margin-left: 0;
  }
  .tab-list .on {
    background-color: #00ba00;
  }



</style>
