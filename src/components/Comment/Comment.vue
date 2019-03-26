<template>
  <!--评论-->
  <div class="container comment">
    <div class="row  comment_title">
      <div class="col-xs-12">
        <span>发表评论</span>
      </div>
    </div>

    <div class="row comment_box">
      <div class="col-xs-12">
        <form action="#">
          <textarea rows=3 cols=27 id="comment_txt" name="comment_text" placeholder="请发表你的看法~~~"
                    v-model="comment_text"></textarea>
          <button type="button" id="comment" @click="postCommentData">发表评论</button>
        </form>
      </div>
    </div>
    <!--评论内容-->
    <div class="comment_content">
      <first-floor v-for="(item,index) in comment_info"
                   :key="index"
                   :item="item"></first-floor>
    </div>
  </div>
</template>

<script>
  import CommentFirstFloor from './CommentFirstFloor'
  import axios from 'axios'

  export default {
    props: ["id", "type"],
    name: "Comment",
    components: {
      'first-floor': CommentFirstFloor
    },
    data: function () {
      return {
        comment_text: "",
        comment_info: []
      }
    },
    methods: {
      // 请求评论数据
      getCommentData: function () {
        // 将父组件传过来的数据转化为{key:value}的形式
        var dic = {};
        dic[this.type] = this.id;
        axios.get(this.Global.server_url + "comment/getComments/", {
          params: dic
        })
          .then(response => {
              if (response && response.data.status_code == 10009) {
                for (let i = 0; i < response.data.content.length; i++) {
                  // 给一楼每一层加一个isShowReply字段，来方便子组件控制回复框的显示隐藏
                  response.data.content[i]["isShowReply"] = false
                }
                this.comment_info = response.data.content;
              } else {
                console.log(response)
              }
            }
          )
          .catch(error => {
            console.log(error)
          });
      },
      //插入评论数据
      postCommentData: function () {
        // if (this.Global.token) {
        if (this.comment_text) {
          var commentType_id;
          // 判断父组件是攻略页面还是日记页面
          if (this.type === "strategy_id") {
            commentType_id = 1
          } else if (this.type === "diary_id") {
            commentType_id = 2
          }
          axios.post(this.Global.server_url + "comment/addComment/", {
            "fromu_id": 1,
            "comment_content": this.comment_text,
            "commentType_id": commentType_id,
            "comment_obj_id": this.$route.query.strategy_id
          }).then(response => {
              if (response && response.data.status_code == 10010) {
                for (let i = 0; i < response.data.content.length; i++) {
                  response.data.content[i]["isShowReply"] = false
                }
                this.comment_info=response.data.content;
                this.comment_text = ''
              } else if (response && response.data.status_code === "10006") {
                // 登录过期跳转到登录页面
                this.$router.push({path: "/Login"})
              } else {
                console.log(response)
              }
            }
          )
            .catch(error => {
              console.log(error)
            });
        } else {
          alert("评论内容不能为空！")
        }

        // else {
        // //没有登录跳转到登录页面
        //   this.$router.push({path: "/Login"})

      }
    }
    ,
    mounted: function () {
      this.getCommentData();
    }
  }
</script>

<style scoped>
  /*评论*/
  .comment {
    background-color: white;
    padding: 2% 8%;
    margin-top: 3%;
    box-sizing: border-box;
  }

  .comment .comment_title {
    font-size: 20px;
    padding: 2% 0;
    border-bottom: solid 1px #CCCCCC;
    box-sizing: border-box;
    margin: 0;
  }

  .comment .comment_box form {
    width: 80%;
    margin: auto;
    padding: 3% 0;
    text-align: right;
    box-sizing: border-box;
  }

  .comment .comment_box textarea {
    color: #666666;
    font-size: 14px;
    overflow: hidden;
    resize: none;
    width: 100%; /*自动适应父布局宽度*/
    word-break: break-all;
    padding: 15px 20px;
    line-height: 20px;
    box-sizing: border-box;
  }

  textarea::-webkit-input-placeholder { /* WebKit browsers */
    color: #bdbdbd;
  }

  textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #bdbdbd;
  }

  textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #bdbdbd;
  }

  textarea:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #bdbdbd;
  }

  .comment .comment_box button {
    color: white;
    font-size: 16px;
    width: 90px;
    height: 34px;
    border: 0;
    outline: 0;
    background-color: #0CB469;
  }

  @media (max-width: 767px) {
    .comment .comment_box a {
      font-size: 14px;
      width: 70px;
      height: 28px;
      line-height: 28px;
    }
  }

  /*评论盖楼*/
  .comment_content {
    width: 90%;
    margin: auto;
  }

</style>
