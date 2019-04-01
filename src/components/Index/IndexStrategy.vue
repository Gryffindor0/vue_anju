<template>
  <!--攻略-->
  <div class="container-fluid strategy">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 strategy_header">
          <span>—— 装修攻略 ——</span><br>
          <span>学习装修经验与交流苏州装修相关问题，小白晋级达人就靠它</span>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 strategy_content"
             v-for="(items,index) in title_list"
             :key="index">
          <div :class="'content_img '+items.my_css">
            <img :src="items.icon" alt="">
            <span v-text="items.title"></span>
          </div>
          <div class="content_text">
            <span v-for="(item,index) in items.content_text"
                  :key="index"
                  @click="toDetail(items.title,item.id)">{{item.til}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "IndexStrategy",
    data: function () {
      return {
        title_list: [
          {
            "title": "苏州装修攻略",
            "my_css": "strategy_content_img",
            "icon": require("../../assets/strategy.svg"),
            "content_text": []
          },
          {
            "title": "苏州装修日记",
            "my_css": "diary_content_img",
            "icon": require("../../assets/diary.svg"),
            "content_text": []
          },
          {
            "title": "苏州装修问答",
            "my_css": "wd_img",
            "icon": require("../../assets/interlocution.svg"),
            "content_text": [
              {"til": "164平四室两厅两卫装修设计简约风方案"},
              {"til": "三室两厅两卫5万装修的3个注意事项"},
              {"til": "装修中式客厅的技巧到底有哪一些"},
              {"til": "50平方装修该怎么样更省钱 有什么攻略"},
              {"til": "卫生间地砖往上渗水怎么办 下面三点千万不能忽略"},
              {"til": "厨房改造预算多少钱 材料怎么选购"}
            ]
          },
          {
            "title": "装修工具",
            "my_css": "gj_img",
            "icon": require("../../assets/tools.svg"),
            "content_text":  [
              {"til": "164平四室两厅两卫装修设计简约风方案"},
              {"til": "三室两厅两卫5万装修的3个注意事项"},
              {"til": "装修中式客厅的技巧到底有哪一些"},
              {"til": "50平方装修该怎么样更省钱 有什么攻略"},
              {"til": "卫生间地砖往上渗水怎么办 下面三点千万不能忽略"},
              {"til": "厨房改造预算多少钱 材料怎么选购"}
            ]
          }
        ]
      }
    },
    methods: {
      toDetail: function (type, id) {
        console.log(id);
        console.log(this.title_list);
        if (type == "苏州装修攻略") {
          this.$router.push({path: "/StrategyDetail", query: {strategy_id: id}})
        } else if (type == "苏州装修日记") {
          this.$router.push({path: "/DiaryDetail", query: {diary_id: id}})
        }
      }
    },
    mounted: function () {
      axios.get(this.Global.server_url + "strategy/strategyTitle/")
        .then((response) => {
            if (response.data.status_code == 10009) {
              for (var t of response.data.content) {
                let s={};
                if (t.strategy_title.length > 13) {
                  t.strategy_title = t.strategy_title.substring(0, 13) + "..."
                }
                s["id"]=t.id;
                s["til"]=t.strategy_title;
                this.title_list[0].content_text.push(s);
              }
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      axios.get(this.Global.server_url + "diary/diaryTitle/")
        .then((response) => {
            if (response.data.status_code == 10009) {
              for (var t of response.data.content) {
                let s={};
                if (t.diary_title.length > 13) {
                  t.diary_title = t.diary_title.substring(0, 13) + "..."
                }
                s["id"]=t.id;
                s["til"]=t.diary_title;
                this.title_list[1].content_text.push(s);
              }

            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      //字数限制{
      var content_text = document.querySelectorAll(".content_text span");
      for (var a of content_text) {
        if (a.innerText.length > 13) {
          a.innerText = a.innerText.substring(0, 13) + "..."
        }
      }

    }
  }
</script>

<style scoped>
  /*装修攻略*/
  .strategy {
    padding-bottom: 100px;
    background-color: white;
    margin-bottom: -50px;
  }

  .strategy_header {
    padding: 50px 0;
    text-align: center;
    line-height: 40px;
  }

  .strategy_header span:first-child {
    font-size: 36px;
  }

  .strategy_content {
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
  }

  .strategy_content .content_img {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    margin: 0;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
  }

  .strategy_content_img {
    background: url("../../assets/index_zxgl_bg.jpg") no-repeat;
  }

  .diary_content_img {
    background: url("../../assets/index_zxrj_bg.jpg") no-repeat;
  }

  .wd_img {
    background: url("../../assets/index_zxwd_bg.jpg") no-repeat;
  }

  .gj_img {
    background: url("../../assets/index_zxgj_bg.jpg") no-repeat;
  }

  .strategy_content .content_img span {
    color: #FFFFFF;
    font-size: 20px;
    margin-top: 10px;
  }

  .strategy_content .content_text {
    flex: 2;
    padding: 30px 38px;
    border: solid 1px #CCCCCC;
    box-sizing: border-box;
  }

  .strategy_content .content_text span {
    color: #333333;
    display: block;
    margin-bottom: 5px;
    text-align: center;
  }

  .strategy_content .content_text span:hover {
    cursor: pointer;
    color: #ec3901;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .strategy_header span:first-child {
      font-size: 28px;
    }
  }

</style>
