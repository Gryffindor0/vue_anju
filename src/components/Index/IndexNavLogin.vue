<template>
  <ul class="nav navbar-nav navbar-right">
    <li><router-link to="/Login" class="a1 login" v-if="isLogin">登录</router-link></li>
    <li class="ss" v-if="isLogin"><a href="#">/</a></li>
    <li><router-link to="/Register" class="a1 register" v-if="isLogin">注册</router-link></li>
    <li><router-link to="/PersonalCenter/" class="a1 nick_name" v-text="nick_name" v-if="!isLogin"></router-link></li>
  </ul>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "NavIndexLogin",
    data: function () {
      return {
        nick_name: window.localStorage.getItem("nickname"),
        isLogin:true
      }
    },
    mounted:function () {
      if(window.localStorage.getItem("token")){
        axios.get(this.Global.server_url+"checktoken/",{
          headers:{
            "token":window.localStorage.getItem("token")
          }
        })
          .then(response=>{
            if (response.data.status_code=="10006"){
              this.isLogin=true
            } else if(response.data.status_code=="200"){
              console.log(response.data);
              this.isLogin=false
            }else{
              console.log(response.data.status_text);
            }
          })
          .catch(error=>{
            console.log(error);
          })
      }
    }
  }
</script>

<style scoped>
  .navbar-right a{
    font-size: 16px;
    color: white !important;
    font-weight: 700;
  }
  .navbar-right .a1:hover{
    color: #15a616 !important;
  }
</style>
