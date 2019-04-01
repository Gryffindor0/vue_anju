<template>
  <ul class="nav navbar-nav navbar-right">
    <li><router-link to="/Login" class="a1 login" v-if="isLogin">登录</router-link></li>
    <li><router-link to="/Register" class="a1 register" v-if="isLogin">注册</router-link></li>
    <li><a href="#" class="a1 nick_name" @click="toPersonal" v-text="nick_name" v-if="!isLogin"></a></li>
  </ul>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "NavMainLogin",
    data: function () {
      return {
        nick_name: "",
        isLogin:true
      }
    },
    methods:{
      toPersonal:function () {
        if (this.nick_name=="退出登录"){
          window.localStorage.clear()
          this.$router.push({path:"/"})
        }else{
          this.$router.push({path:"/personalCenter/"})
        }
      }
    },
    mounted:function () {
      if(this.$route.path.indexOf("PersonalCenter")!=-1){
        this.nick_name="退出登录";
      }else{
        this.nick_name=window.localStorage.getItem("nickname");
      }
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
  .navbar-right .a1{
    font-size: 16px;
    font-weight: 700;
  }
  .navbar-right .a1:hover{
    color: #15a616 !important;
  }
</style>
