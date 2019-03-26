<template>
  <div class="first_floor" onselectstart="return false;">
    <div class="user_icon" :id="item.fromu_id">
      <img :src="item.fromu__userIcon__icon" alt="">
    </div>
    <div class="comment_main">
      <div class="nickname">
        <span v-text="item.fromu__nickname"></span>
      </div>
      <div class="comment_txt">
        <p v-text="item.comment_content"></p>
      </div>
      <div class="comment_footer">
        <div class="comment_time">
          <span v-text="item.comment_time"></span>
        </div>
        <div class="comment_num_reply">
          <a class="comment_num"
             v-text="item.comment_num?item.comment_num+'条评论':''"
             @click="getReplyData(item.id)"></a>
          <a class="comment_reply" @click="show_reply">回复</a>
        </div>
      </div>
      <div class="reply_box" v-show="item.isShowReply">
        <form action="#">
            <textarea rows=3 cols=27 id="reply_txt"
                      name="comment_text" placeholder="你怎么看~~~"
                      v-model="reply_content"></textarea>
          <button type="button" class="reply_btn" @click="postReplyData(item.id,item.fromu_id,item.fromu__nickname)">回复
          </button>
        </form>
      </div>
      <!--二楼开始-->
      <second-floor v-for="(reply_item,index) in reply_info"
                    :reply_item="reply_item"
                    :key="index"
                    v-show="isShowSecondFloor"
                    @changeReplyInfo="changeReplyInfo"
                    @changeNum="changeNum"></second-floor>
      <!--二楼结束-->
    </div>
  </div>
</template>

<script>
  import CommentSecondFloor from './CommentSecondFloor'
  import axios from 'axios'

  export default {
    props: ["item"],
    name: "CommentFirstFloor",
    components: {
      'second-floor': CommentSecondFloor
    },
    data: function () {
      return {
        flag: false,
        isShowSecondFloor: false,
        reply_content: "",
        reply_info: []
      }
    },
    methods: {
      show_reply: function () {
        this.item.isShowReply = !this.item.isShowReply
      },

      //获取一层回复数据
      getReplyData: function (val) {
        this.isShowSecondFloor = !this.isShowSecondFloor;
        axios.get(this.Global.server_url + "comment/getReplys/", {
          params: {comment_id: val}
        })
          .then(response => {
              if (response.data.status_code == 10009) {
                for (let i = 0; i < response.data.content.length; i++) {
                  response.data.content[i]["isShowReply"] = false
                }
                this.reply_info = response.data.content;
              } else {
                console.log(response)
              }
            }
          )
          .catch(error => {
            console.log(error)
          });
      },

      //插入一层回复数据
      postReplyData: function (id, to_uid, name) {
        // if (this.token) {
        if (this.reply_content) {
          axios.post(this.Global.server_url + "comment/addReply/", {
            "fromu_id": 1,
            "comment_id": id,
            "replyType_id": 1,
            "reply_content": this.reply_content,
            "tou_id": to_uid,
            "tou_nickname": name
          }).then(response => {
              if (response && response.data.status_code == 10010) {

                this.item.comment_num = response.data.comment_num[0].comment_num;
                for (let i = 0; i < response.data.content.length; i++) {
                  response.data.content[i]["isShowReply"] = false
                }
                this.reply_info = response.data.content;
                this.reply_content = '';
                this.item.isShowReply = !this.item.isShowReply;
                this.isShowSecondFloor = true;

              } else if (response && response.data.status_code === "10006") {
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
          alert("回复内容不能为空！")
        }
        // else {
        //   this.$router.push({path: "/Login"})

      },

      changeReplyInfo: function (val) {
        this.reply_info = val
      },

      changeNum: function (val) {
        this.item.comment_num = val
      }
    }
  }
</script>

<style scoped>

  /*一层*/
  .first_floor {
    width: 100%;
    display: flex;
    padding-top: 20px;
    box-sizing: border-box;
    border-top: solid 1px #CCCCCC;
  }

  /*一层头像*/
  .user_icon {
    width: 120px;
    height: 60px;
    text-align: center;
  }

  .user_icon img {
    width: 50%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }

  /*一层主体*/
  .comment_main {
    flex: 1;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .comment_main .nickname {
    color: #999999;
    margin-bottom: 10px;
  }

  .comment_main .comment_footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .comment_footer .comment_time span {
    color: #999999;
  }

  .comment_footer .comment_num_reply a {
    color: #3498DB;
    font-size: 14px;
    cursor: pointer;
  }

  .comment_footer .comment_num_reply a:last-child {
    margin-left: 20px;
  }

  /*回复框*/
  .reply_box {
    border-top: solid 1px #CCCCCC;
  }

  .reply_box form {
    width: 80%;
    margin: auto;
    padding: 3% 0;
    text-align: right;
    box-sizing: border-box;
  }

  .reply_box textarea {
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

  .reply_box button {
    color: white;
    font-size: 16px;
    width: 90px;
    height: 34px;
    border: 0;
    outline: 0;
    background-color: #0CB469;
  }

  @media (max-width: 767px) {
    .comment_content .user_icon {
      width: 30px;
      height: 30px;
    }

    .comment_content .user_icon img {
      width: 100%;
      height: 100%;
    }

    .comment_main .nickname, .comment_main02 .nickname {
      font-size: 12px;
    }

    .comment_txt, .comment_footer {
      font-size: 12px;
    }

    .comment_footer .comment_num_reply a {
      font-size: 10px;
    }

    .comment_content .reply_box button {
      font-size: 10px;
      width: 58px;
      height: 22px;
    }

    .comment_content .first_floor {
      padding-top: 10px;
    }
  }
</style>
