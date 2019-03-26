<template>
  <!--热门攻略-->
  <div class="hot_strategy">
    <div class="hot_top">
      <span>热门攻略</span>
    </div>
    <div class="hot_content">
      <div v-for="(item,index) in hot_strategy" :key="index" @mouseover="showImg(index+1)">
        <div class="number">
          <img :src="item.number_img" alt="">
        </div>
        <div class="hot_title">
          <span v-text="item.hot_title"></span>
        </div>
        <div class="hot_image" v-if="item.show_img==img_index">
          <img :src="item.hot_image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HotStrategy",
      data:function () {
        return{
          hot_strategy:[
            {
              "number_img":require("../../assets/one.png"),
              "hot_title":"108平米装修简装里都包...",
              "hot_image":require("../../assets/hot_strategy01.jpg"),
              "show_img":1
            },
            {
              "number_img":require("../../assets/two.png"),
              "hot_title":"卫生间墙里渗水怎么办 三招解决漏水难题",
              "hot_image":require("../../assets/hot_strategy02.jpg"),
              "show_img":2
            },
            {
              "number_img":require("../../assets/three.png"),
              "hot_title":"别墅装修费用预算到底由哪些费用组合而成",
              "hot_image":require("../../assets/hot_strategy03.jpg"),
              "show_img":3
            },
            {
              "number_img":require("../../assets/four.png"),
              "hot_title":"刷木板清漆时应注意什么问题 刷完应如何保护呢？",
              "hot_image":require("../../assets/hot_strategy04.jpg"),
              "show_img":4
            }
          ],
          img_index:1
        }
      },
      methods:{
        showImg:function (index) {
          this.img_index=index
        }
      }
    }
</script>

<style scoped>
  /*热门攻略*/
  .hot_strategy{
    background: #FFFFFF;
    box-shadow: 0px 0px 10px #cbcbcb;
    padding:10px 0 30px;
  }
  .hot_top{
    border-left: solid 4px #00ba00;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 20px;
  }

  .hot_content{
    padding: 0 20px;
  }
  .hot_content div{
    display: flex;
    margin-top: 5px;
  }
  .number{
    width: 30px;
    height: 20px;
  }
  .hot_title{
    flex: 1;
    padding-top: 5px;
  }
  .hot_title span{
    cursor: pointer;
  }
  .hot_title span:hover{
    color: #00ba00;
  }
  .hot_image{
    text-align: center;
    display: none;
  }
  .hot_image img{
    width: 90px;
    height: 90px;
    object-fit: cover;
  }

</style>
