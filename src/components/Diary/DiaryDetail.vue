<template>
  <div>
    <!--主体开始-->
    <div class="diary">
      <!--日记头部开始-->
      <diary-header></diary-header>
      <!--日记头部结束-->

      <!--日记主体开始-->
      <div class="diary_main">
        <div>
          <div>
            <div class="diary_content">
              <div class="side-test"></div>
              <!--日记item-->
              <diary-item></diary-item>
            </div>
          </div>

          <!--评论开始-->
          <comment :id="$route.query.diary_id" :type="type"></comment>
          <!--评论结束-->

        </div>

        <!--达人榜开始-->
        <famous-people></famous-people>
        <!--达人榜结束-->
      </div>
      <!--日记主体结束-->

    </div>
    <!--主体结束-->
  </div>
</template>

<script>
  import NavMain from '../Nav/NavMain'
  import DiaryDetailHeader from './DiaryDetailHeader'
  import DiaryDetailItem from './DiaryDetailItem'
  import Comment from '../Comment/Comment'
  import FamousPeople from './FamousPeople'

  export default {
    name: "DiaryDetail",
    components: {
      'nav-main': NavMain,
      'diary-header': DiaryDetailHeader,
      'diary-item': DiaryDetailItem,
      'comment': Comment,
      'famous-people': FamousPeople
    },
    data:function () {
      return{
        type:"diary_id"
      }
    }
  }
</script>

<style scoped>
  .diary {
    width: 84%;
    margin: auto;
  }

  /*日记主体*/
  .diary .diary_main {
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .diary_main > div:first-child {
    width: 80%;
  }

  .diary_main > div:first-child > div {
    padding: 4% 2%;
    box-sizing: border-box;
    position: relative;
    background-color: #FFFFFF;
  }

  /*主体*/

  .diary .diary_content {
    flex: 1;
    display: flex;
    border-top: solid 1px #CCCCCC;
    border-bottom: solid 1px #CCCCCC;
  }

  .diary_content .side-test {
    width: 31px;
  }

  .diary_content .diary_items {
    flex: 1;
    border-left: solid 1px #CCCCCC;
  }

  .diary_main .comment {
    width: 100%;
  }

  @media (max-width: 991px) {
    .diary_main > div:first-child {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .diary_content .side-test {
      width: 20px;
    }
  }
</style>
