<template>
  <div class="collect-shop" id="pg-block-click" @click="collect">
    <span :class="isCollect?'collect-icon':'uncollect-icon'"></span>
    {{isCollect?'已收藏':'收藏'}}
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ["content_id", "collectType_id"],
    name: "Collect",
    data: function () {
      return {
        // 判断是否收藏
        isCollect: false,
        // 收藏id
        collect_id: ""
      }
    },
    methods: {
      collect: function () {
        // 判断是否有token
        // if (this.Global.token){
        if (!this.isCollect) {

          // 增加收藏
          axios.post(this.Global.server_url + "collect/increaseCollection/", {
            "content_id": this.content_id,
            "collectType_id": this.collectType_id,
            // "user_id": this.Global.user_id
            "user_id":1
          }, {
            headers: {
              "token": this.Global.token
            }
          }).then(response => {
            if (response && response.data.status_code=="10030"){
              this.collect_id=response.data.collect_id;
              this.isCollect = !this.isCollect;
            }else if (response && response.data.status_code === "10006") {
              this.$router.push({path: "/Login"})
            }else{
              console.log(response)
            }
          }).catch(error => {
            console.log(error)
          })
        } else {
          // 取消收藏
          axios.post(this.Global.server_url + "collect/cancelCollection/", {
            "collect_id": this.collect_id
          }, {
            headers: {
              "token": this.Global.token
            }
          }).then(response => {
            if (response && response.data.status_code=="10040") {
              this.isCollect = !this.isCollect;
            }else if (response && response.data.status_code === "10006") {
              this.$router.push({path: "/Login"})
            }else{
              console.log(response);
            }
          }).catch(error => {
            console.log(error)
          })
        }
        // }else{
        // //跳转到登录页面
        //   this.$router.push({path:"/Login" })
        // }
      }
    }
  }
</script>

<style scoped>
  /*收藏*/
  .collect-shop {
    cursor: pointer;
    width: 70px;
  }

  .collect-icon, .uncollect-icon {
    display: inline-block;
    width: 18px;
    height: 17px;
    margin-right: 3px;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: text-bottom;
  }

  .collect-shop .uncollect-icon {
    background-image: url("../../assets/uncollect-icon.svg"), none;
  }

  .collect-shop .collect-icon {
    background-image: url("../../assets/collect-icon.svg"), none;
  }
</style>
