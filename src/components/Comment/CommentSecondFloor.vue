<template>
    <div class="second_floor" style="display: flex;">
      <div class="user_icon" :id="reply_item.fromu_id">
        <img :src="reply_item.fromu__userIcon__icon" alt="">
      </div>
      <div class="comment_main">
        <div class="nickname">
          <span class="reply_man" :id="reply_item.fromu_id" v-text="reply_item.fromu__nickname"></span>
          <span>回复</span>
          <span class="promulgator" v-text="reply_item.tou_nickname"></span>
        </div>
        <div class="comment_txt">
          <p v-text="reply_item.reply_content"></p>
        </div>
        <div class="comment_footer">
          <div class="comment_time">
            <span v-text="reply_item.reply_time"></span>
          </div>
          <div class="comment_num_reply">
            <a class="comment_reply" @click="show_reply" style="cursor: pointer">回复</a>
          </div>
        </div>
        <div class="reply_box" v-if="reply_item.isShowReply">
          <form action="#">
            <textarea rows=3 cols=27 class="reply_txt" name="comment_text" placeholder="请发表你的看法~~~"
                      v-model="reply_text"></textarea>
            <button type="button" class="reply_btn02" @click="postReplyData(reply_item.id,reply_item.comment_id,reply_item.fromu_id,reply_item.fromu__nickname)">回复
            </button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ["reply_item"],
    name: "CommentSecondFloor",
    data: function () {
      return {
        flag: false,
        reply_text: ""
      }
    },
    methods: {
      show_reply: function () {
        this.reply_item.isShowReply = !this.reply_item.isShowReply
      },

      //插入回复数据
      postReplyData: function (id,comment_id, tou_id, name) {
        // if (this.token) {
        if (this.reply_text) {
          axios.post(this.Global.server_url + "comment/addReply/", {
            "fromu_id": 1,
            "comment_id": comment_id,
            "reply_id": id,
            "replyType_id": 2,
            "reply_content": this.reply_text,
            "tou_id": tou_id,
            "tou_nickname": name
          }).then(response => {
              if (response && response.data.status_code == 10010) {
                for (let i = 0; i < response.data.content.length; i++) {
                  response.data.content[i]["isShowReply"] = false
                }
                this.$emit('changeNum',response.data.comment_num[0].comment_num);
                this.$emit('changeReplyInfo',response.data.content),
                this.reply_text="";
                this.reply_item.isShowReply = !this.reply_item.isShowReply
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

      }
    },
    mounted: function () {
    }
  }
</script>

<style scoped>
  /*二层*/
  .second_floor {
    padding-top: 20px;
    box-sizing: border-box;
    border-top: solid 1px #CCCCCC;
  }

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

  .second_floor .comment_main {
    flex: 1;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .comment_main .nickname {
    color: #999999;
    margin-bottom: 10px;
  }

  .comment_main .nickname span:nth-child(2) {
    color: #000000;
  }

  .comment_main .comment_footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .comment_footer .comment_time span {
    color: #999999;
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

    .comment_main .nickname {
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

    .second_floor {
      padding-top: 10px;
    }
  }
</style>
