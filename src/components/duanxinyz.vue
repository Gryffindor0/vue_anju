<template>
  <ul>
    <li>
      <label for="">手机号码:</label>
      <input type="text" placeholder="11位数的手机号码" v-model="telephone" id="mobile" name="mobile"/>
      <span class="error_tip">提示信息</span>
    </li>
    <li>
      <label for="">验证码:</label>
      <input type="text" name="code" placeholder="请输入手机验证码" style="width: 140px;">
      &nbsp;&nbsp;
      <input type="button" @click="send" value=" 获取验证码" id="zphone" style="width: 100px;margin-left: 10px">
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "duanxinyz",
    data() {
      return {
        telephone: "",
        //按钮倒计时
        iTime: 60,
        sTime: ""
      }
    },
    methods: {
      send: function () {
        //发送验证码
        axios.get(this.Global.server_url + 'sendMessage/', {
          params: {
            "telephone": this.telephone
          }
        })
          .then(response => {
            if (response.data.msg == '提交成功') {
              this.RemainTime();
            }
          })
          .catch(error => {
            console.log(error);
          })
      },

      RemainTime: function () {
        if (this.iTime == 0) {
          document.getElementById('zphone').disabled = false;
          this.sTime = "获取验证码";
          this.iTime = 60;
          document.getElementById('zphone').value = this.sTime;
          return;
        } else {
          document.getElementById('zphone').disabled = true;
          this.sTime = "重新发送(" + this.iTime + ")";
          this.iTime--;
        }
        setTimeout(()=> {
          this.RemainTime()
        }, 1000);
        document.getElementById('zphone').value = this.sTime;
      },

    }
  }
</script>

<style scoped>

</style>
