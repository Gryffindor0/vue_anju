<template>
  <!--轮播-->
  <div class="carousel">
    <div class="wrap">
      <div class="btn left">
        <div></div>
      </div>
      <div class="btn right">
        <div></div>
      </div>
      <ul class="img-list">
        <li>
          <img src="../../assets/carousel02.jpg" alt="">
        </li>
        <li>
          <img src="../../assets/carousel01.jpg" alt="">
        </li>
        <li>
          <img src="../../assets/carousel02.jpg" alt="">
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
</template>

<script>
  export default {
    name: "IndexCarousel",
    data: function () {
      return {}
    },
    methods: {},
    mounted: function () {
      var oWidth = parseFloat(document.body.clientWidth),
        oImgList = document.getElementsByClassName("img-list")[0],
        left=document.querySelector(".left"),
        right=document.querySelector(".right"),
        aImgLi = document.querySelectorAll(".img-list li"),
        oWrap = document.getElementsByClassName("wrap")[0],
        aTab = document.querySelectorAll(".tab-list li"),
        len = aImgLi.length,
        index = 0;
      function throttle(fn,time){
        var startTime = new Date();
        return function(){
          var time_ = (new Date() - startTime) >= time;
          if(time_){
            fn.apply(this);
            startTime = new Date();
          }
        }
      }
      function btnTab(){
        var t = new Date();
        for(var i = 0,tabLen = aTab.length;i < tabLen;i++){
          (function(i){
            aTab[i].onclick = function(){
              if(new Date() - t >= 1000){
                aTab[index].className = "";
                if((i - index) === (tabLen - 1)){
                  oImgList.style.transition = 0 + "s";
                  oImgList.style.left = -oWidth*(len-1) + "px";
                  index = len - 2;
                  setTimeout(function(){
                    oImgList.style.transition = 1 + "s";
                    oImgList.style.left = -oWidth*(index) + "px";
                  },1000/60);
                }
                else if((i - index) === (1 - tabLen)){
                  oImgList.style.left = -oWidth*(len - 1) + "px";
                  index = 0;
                  setTimeout(function(){
                    oImgList.style.transition = 0 + "s";
                    oImgList.style.left = index + "px";
                  },1000);
                }
                else{
                  // oImgList.style.left = -oWidth*(i) + "px";
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
      function btnPre(){
        index--;
        if(index < 0){
          oImgList.style.transition = 0 + "s";
          oImgList.style.left = -oWidth*(len-1) + "px";
          aTab[0].className = "";
          index = len - 2;
          aTab[index].className = "on";
          setTimeout(function(){
            oImgList.style.transition = 1 + "s";
            oImgList.style.left = -oWidth*(index) + "px";
          },1000/60);
        }
        else{
          oImgList.style.transition = 1 + "s";
          oImgList.style.left = -oWidth*(index) + "px";
          aTab[index + 1].className = "";
          aTab[index].className = "on";
        }
      }
      function btnNext(){
        index++;
        oImgList.style.transition = 1 + "s";
        if(index === len-1){
          oImgList.style.left = -oWidth*index + "px";
          aTab[len - 2].className = "";
          index = 0;
          aTab[index].className = "on";
          setTimeout(function(){
            oImgList.style.transition = 0 + "s";
            oImgList.style.left = index + "px";
          },1000);
        }
        else{
          oImgList.style.left = -oWidth*index + "px";
          aTab[index - 1].className = "";
          aTab[index].className = "on";
        }
      }
      left.onclick = throttle(btnPre,1000);
      right.onclick = throttle(btnNext,1000);
      btnTab();
      var timer = setInterval(btnNext,4000);
      oWrap.onmouseover = function(){
        clearInterval(timer);
      };
      oWrap.onmouseout = function(){
        timer = setInterval(btnNext,4000);
      };
    }
  }
</script>

<style scoped>
  /*轮播*/
  .carousel {
    padding: 0;
  }

  .carousel ul {
    position: relative;
    left: 0;
    list-style: none;
    padding: 0;
  }

  .wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .wrap .btn {
    position: absolute;
    top: 35%;
    z-index: 1;
    width: 5%;
    height: 18%;
    background-color: rgba(0, 0, 0, .5);
    cursor: pointer;
  }

  .wrap .left {
    left: 0;
  }

  .wrap .left div {
    background: url("../../assets/left.svg") no-repeat;
    background-size: contain;
    background-position: left;
    width: 100%;
    height: 100%;
  }

  .wrap .right {
    right: 0;
  }

  .wrap .right div {
    background: url("../../assets/right.svg") no-repeat;
    background-size: contain;
    background-position: right;
    width: 100%;
    height: 100%;
  }

  .img-list {
    display: flex;
    margin: 0;
    width: 300%;
    height: 100%;
  }

  .img-list li {
    width: 100%;
    height: 100%;
  }

  .img-list img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .tab-list-div {
    position: absolute;
    z-index: 20;
    top: 90%;
    left: 50%;
    margin-left: -25px;
  }

  .tab-list:after {
    content: "";
    display: block;
    clear: both;
  }

  .tab-list li {
    float: left;
    transition: 1s;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    background-color: #bbb;
    border-radius: 50%;
  }

  .tab-list li:hover {
    cursor: pointer;
  }

  .tab-list li:first-child {
    margin-left: 0;
  }

  .tab-list .on {
    width: 40px;
    border-radius: 8px;
  }
</style>
