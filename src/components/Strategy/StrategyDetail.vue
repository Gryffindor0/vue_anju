<template>
  <div>
    <!--主体开始-->
    <div class="container article">
      <div class="row article_title" onselectstart="return false;">
        <div class="col-xs-12">
          <h3 id="strategy_title" v-text="strategy_info.strategy_title"></h3>
          <div class="date_collect">
            <span id="public_date" v-text="strategy_info.publish_date"></span>
            <!--收藏组件-->
            <collect :content_id="id" :collectType_id="collectType_id"></collect>
          </div>
          <span id="author" v-text="'作者:'+strategy_info.author"></span>
        </div>
      </div>
      <div class="row article_lead">
        <div class="col-xs-12 col-lg-1">
          <span>导语:</span>
        </div>
        <div class="col-xs-12 col-lg-11">
          <p id="lead" v-text="strategy_info.strategycontent__lead"></p>
        </div>
      </div>
      <div class="row article_main">
        <div class="col-xs-12" id="content" v-html="strategy_info.strategycontent__strategy_content"></div>
      </div>
    </div>
    <!--主体结束-->

    <!--评论开始-->
    <comment :id="id" :type="type"></comment>
    <!--评论结束-->
  </div>
</template>

<script>
  import NavMain from '../Nav/NavMain'
  import Comment from '../Comment/Comment'
  import Collect from '../Case/Collect'
  import axios from 'axios'

  export default {
    name: "StrategyDetail",
    components: {
      'nav-main': NavMain,
      'comment': Comment,
      'collect': Collect
    },
    data: function () {
      return {
        id:this.$route.query && this.$route.query.strategy_id,
        type:'strategy_id',
        collectType_id:2,
        strategy_info: {}
      }
    },
    mounted: function () {
      axios.get(this.Global.server_url + "strategy/strategyDetail/", {
        params: {
          strategy_id: this.$route.query.strategy_id
        }
      })
        .then(response => {
            if (response.data.status_code == 10009) {
              this.strategy_info = response.data.content[0];
            } else {
              console.log(response)
            }
          }
        )
        .catch(error => {
          console.log(error)
        });

    }
  }
</script>

<style scoped>

  /*文章主体*/
  .article {
    background-color: white;
    padding: 2% 8%;
    box-sizing: border-box;
  }

  .article .article_title {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #CCCCCC;
    padding: 2% 0;
    box-sizing: border-box;
  }

  .article .article_title span {
    color: #999999;
    font-size: 14px;
  }

  .date_collect {
    display: flex;
    justify-content: space-between;
  }



  .article .article_lead {
    color: #666666;
    margin-top: 20px;
    padding: 2% 1%;
    box-sizing: border-box;
    background-color: #F8F8F8;
  }

  .article .article_lead span {
    font-size: 20px;
    font-weight: bold;
  }

  .article .article_lead p {
    font-size: 14px;
    line-height: 30px;
  }

  .article .article_main{
    color: #666666;
    font-size: 16px;
    line-height: 30px;
    padding: 2% 0;
    box-sizing: border-box;
  }


  @media (max-width: 767px) {
    .article .article_lead p{
      line-height: 25px;
    }
    .article .article_main p{
      font-size: 14px;
      line-height: 25px;
    }
  }

</style>
